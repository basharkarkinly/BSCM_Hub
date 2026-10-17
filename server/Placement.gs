/**
 * Support Channel — نتائج اختبار تحديد المستوى (الإنجليزي) والاستبيان
 * ملف مستقل بجانب Code.gs و Comments.gs (نفس المحيط، فبيشوف مساعداتهم).
 * بيعتمد على: authUser_ (Comments.gs) و table_ / appendRow_ / rowObj_ / toDate_ / ID_RE_ ...
 *
 * التبويبات (شغّل setupPlacement() مرة وحدة من المحرر لإنشائها):
 *   placement_results : result_id, user_id, email, name, start_level, mastered_level, completed_all,
 *                       a1_score .. c2_score, created_at
 *   placement_survey  : survey_id, user_id, email, name, result_id, <أجوبة الاستبيان>, created_at
 */

const PL = {
  DUP_WINDOW_SEC: 30,   // نفس المستخدم يحفظ مرتين خلال هالمدة = تكرار، بنتجاهل الثانية
  MAX_PER_DAY: 5,       // أقصى عدد نتائج (وأقصى عدد استبيانات) للمستخدم الواحد باليوم
  ANSWER_MAX: 400       // أقصى طول لكل جواب نصي
};

const PL_LEVELS_ = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// مفتاح الواجهة (كما كان بالفايربيس) → اسم العمود بالشيت
const PL_ANSWER_COLS_ = {
  rating: 'rating',
  timeFeeling: 'time_feeling',
  hardestType: 'hardest_type',
  accuracy: 'accuracy',
  accuracyWhy: 'accuracy_why',
  surprised: 'surprised',
  continueStyle: 'continue_style',
  preferredStyle: 'preferred_style',
  lessonFrequency: 'lesson_frequency',
  pronunciationImportance: 'pronunciation_importance',
  shareTest: 'share_test',
  triedAppBefore: 'tried_app_before',
  ageGroup: 'age_group',
  ageGroup_extra: 'age_group_extra',
  hearAboutUs: 'hear_about_us',
  deviceUsed: 'device_used',
  willingToPay: 'willing_to_pay'
};

const PL_RESULT_HEAD_ = ['result_id', 'user_id', 'email', 'name', 'start_level', 'mastered_level',
  'completed_all', 'a1_score', 'a2_score', 'b1_score', 'b2_score', 'c1_score', 'c2_score', 'created_at'];

const PL_SURVEY_HEAD_ = ['survey_id', 'user_id', 'email', 'name', 'result_id']
  .concat(Object.keys(PL_ANSWER_COLS_).map(function (k) { return PL_ANSWER_COLS_[k]; }))
  .concat(['created_at']);

/* ============ إعداد التبويبات (مرة وحدة) ============ */

function setupPlacement() {
  [['placement_results', PL_RESULT_HEAD_], ['placement_survey', PL_SURVEY_HEAD_]].forEach(function (x) {
    let sh = ss_().getSheetByName(x[0]);
    if (!sh) sh = ss_().insertSheet(x[0]);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, x[1].length).setValues([x[1]]).setFontWeight('bold');
      sh.setFrozenRows(1);
      console.log('أنشأت التبويب: ' + x[0]);
    } else {
      console.log('التبويب موجود مسبقاً: ' + x[0] + ' (ما لمسته)');
    }
  });
}

/* ============ مساعدات ============ */

function plClean_(v, max) {
  let s = String(v === undefined || v === null ? '' : v).replace(/\r/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = ' ' + s;   // يمنع تفسير النص كصيغة بالشيت
  return s;
}

function plLevel_(v) {
  const s = String(v || '').trim().toUpperCase();
  return PL_LEVELS_.indexOf(s) >= 0 ? s : '';
}

/** آخر حفظ لهالمستخدم + عدد حفظاته خلال آخر 24 ساعة */
function plRecent_(t, uid, now) {
  const uc = t.col('user_id'), cc = t.col('created_at'), ic = t.head[0];
  const idc = t.col(ic);
  let lastTs = 0, lastId = '', today = 0;
  const dayAgo = now.getTime() - 86400000;
  t.rows.forEach(function (r) {
    if (String(r[uc]) !== uid) return;
    const d = toDate_(r[cc]);
    if (!d) return;
    if (d.getTime() >= dayAgo) today++;
    if (d.getTime() > lastTs) { lastTs = d.getTime(); lastId = String(r[idc]); }
  });
  return { lastTs: lastTs, lastId: lastId, today: today };
}

/* ============ حفظ نتيجة الاختبار ============ */
/**
 * req: { action:'savePlacementResult', token,
 *        start_level:'A1', mastered_level:'B2' | null, completed_all:false,
 *        stages:[{ key:'a1', scorePercent:92 }, ...] }
 */
function savePlacementResult_(req) {
  const a = authUser_(req); if (a.err) return a.err;

  // لما يخلّص المستخدم كل المراحل (completed_all) ما في "مستوى بداية" وبيرجع فاضي
  const completedAll = !!req.completed_all;
  const startLevel = req.start_level ? plLevel_(req.start_level) : '';
  const mastered = req.mastered_level ? plLevel_(req.mastered_level) : '';
  if ((req.start_level && !startLevel) || (!startLevel && !completedAll) ||
      (req.mastered_level && !mastered)) {
    return { ok: false, error: 'BAD_REQUEST' };
  }

  const stages = req.stages;
  if (!Array.isArray(stages) || !stages.length || stages.length > PL_LEVELS_.length) {
    return { ok: false, error: 'BAD_REQUEST' };
  }
  const scores = {};
  for (let i = 0; i < stages.length; i++) {
    const key = String((stages[i] && stages[i].key) || '').toLowerCase();
    const score = Math.round(Number(stages[i] && stages[i].scorePercent));
    if (PL_LEVELS_.indexOf(key.toUpperCase()) < 0 || !isFinite(score) || score < 0 || score > 100) {
      return { ok: false, error: 'BAD_REQUEST' };
    }
    scores[key] = score;
  }

  const uid = String(a.user.obj.user_id);
  const t = table_('placement_results');
  const now = new Date();
  const rc = plRecent_(t, uid, now);
  if (rc.lastTs && (now.getTime() - rc.lastTs) / 1000 < PL.DUP_WINDOW_SEC) {
    return { ok: true, duplicate: true, result_id: rc.lastId };
  }
  if (rc.today >= PL.MAX_PER_DAY) return { ok: false, error: 'LIMIT_REACHED', limit: PL.MAX_PER_DAY };

  const rec = {
    result_id: 'p_' + Utilities.getUuid().slice(0, 8),
    user_id: uid,
    email: String(a.user.obj.email),
    name: plClean_(a.user.obj.name, 80),
    start_level: startLevel,
    mastered_level: mastered,
    completed_all: req.completed_all ? 'TRUE' : 'FALSE',
    created_at: now.toISOString()
  };
  PL_LEVELS_.forEach(function (L) {
    const k = L.toLowerCase();
    rec[k + '_score'] = scores[k] === undefined ? '' : scores[k];
  });
  appendRow_(t, rec);
  return { ok: true, result_id: rec.result_id };
}

/* ============ حفظ الاستبيان ============ */
/**
 * req: { action:'savePlacementSurvey', token, result_id:'p_xxxx' (اختياري),
 *        answers:{ rating:'...', timeFeeling:'...', ... } }
 */
function savePlacementSurvey_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const ans = req.answers;
  if (!ans || typeof ans !== 'object') return { ok: false, error: 'BAD_REQUEST' };

  const rec = {};
  let count = 0;
  Object.keys(PL_ANSWER_COLS_).forEach(function (k) {
    if (ans[k] === undefined || ans[k] === null) return;
    if (typeof ans[k] !== 'string' && typeof ans[k] !== 'number') return;
    const v = plClean_(ans[k], PL.ANSWER_MAX);
    if (v) { rec[PL_ANSWER_COLS_[k]] = v; count++; }
  });
  if (!count) return { ok: false, error: 'BAD_REQUEST' };

  const uid = String(a.user.obj.user_id);

  // ربط الاستبيان بنتيجة الاختبار (فقط إذا كانت نتيجة هالمستخدم نفسه)
  let resultId = '';
  if (req.result_id && ID_RE_.test(String(req.result_id))) {
    const rt = table_('placement_results');
    const i = findRow_(rt, 'result_id', String(req.result_id));
    if (i >= 0 && String(rt.rows[i][rt.col('user_id')]) === uid) resultId = String(req.result_id);
  }

  const t = table_('placement_survey');
  const now = new Date();
  const rc = plRecent_(t, uid, now);
  if (rc.lastTs && (now.getTime() - rc.lastTs) / 1000 < PL.DUP_WINDOW_SEC) {
    return { ok: true, duplicate: true, survey_id: rc.lastId };
  }
  if (rc.today >= PL.MAX_PER_DAY) return { ok: false, error: 'LIMIT_REACHED', limit: PL.MAX_PER_DAY };

  rec.survey_id = 's_' + Utilities.getUuid().slice(0, 8);
  rec.user_id = uid;
  rec.email = String(a.user.obj.email);
  rec.name = plClean_(a.user.obj.name, 80);
  rec.result_id = resultId;
  rec.created_at = now.toISOString();
  appendRow_(t, rec);
  return { ok: true, survey_id: rec.survey_id };
}
