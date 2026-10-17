/**
 * Support Channel — النجوم ⭐ (سمعة، مو عملة: ما بتنصرف وما بتفتح شي)
 * ملف مستقل بجانب Code.gs و Comments.gs و Placement.gs (نفس المحيط).
 *
 * التبويبات (setupV4 بتنشئها):
 *   star_rules    : key, label, stars, daily_cap, enabled, show   ← بتعدّل منو الأرقام بدون كود
 *   stars_ledger  : tx_id, ts, user_id, delta, reason, ref, note  ← كل حركة نجوم (المرجع الوحيد)
 *   votes         : comment_id, user_id, created_at               ← أصوات 👍 على الأجوبة
 *   banned_words  : word                                          ← كلمات ممنوعة (كلمة بكل سطر)
 *   users         : + stars, stars_recent, stars_day
 *   comments      : + accepted_id   (على صف السؤال: رقم الجواب اللي "حلّ المشكلة")
 *
 * الرصيد بعمود users.stars بينحسب من الدفتر. إذا عدّلت الدفتر بإيدك شغّل adminRebuildStars.
 */

const STARS = {
  VOTER_MIN_DAYS: 3,     // الصوت بيعطي نجمة بس إذا عمر حساب المصوّت هالقد يوم أو أكتر
  RECENT_MAX: 30,        // كم حركة منحفظ بـ users.stars_recent (لصفحة نجومي والإشعارات)
  EXAM_MIN_SCORE: 90,    // علامة النجاح اللي بتعطي نجوم الامتحان
  EXAM_MAX_CHAPTER: 15   // أعلى رقم فصل منقبلو (ch1..ch15)
};

const STAR_RULES_DEFAULT_ = [
  ['key', 'label', 'stars', 'daily_cap', 'enabled', 'show'],
  ['answer_accepted', 'جوابك حلّ مشكلة صاحب السؤال', 3, '', 'TRUE', 'TRUE'],
  ['answer_upvote', 'حدا صوّت 👍 لجوابك', 1, 10, 'TRUE', 'TRUE'],
  ['exam_chapter', 'نجحت بامتحان فصل (أول مرة)', 1, '', 'TRUE', 'TRUE'],
  ['exam_final', 'خلّصت الفحص النهائي لمقرر بـ 90% أو أكتر (أول مرة)', 3, '', 'TRUE', 'TRUE']
];

/* ============ إعداد النسخة 4 (مرة وحدة) ============ */
/** شغّلها مرة وحدة من المحرر بعد لصق الملفات. آمنة إذا انعادت. */
function setupV4() {
  ensureCols_('users', ['stars', 'stars_recent', 'stars_day', 'name_changed_at']);
  ensureCols_('comments', ['accepted_id']);
  if (!ss_().getSheetByName('star_rules')) {
    const sh = ss_().insertSheet('star_rules');
    sh.getRange(1, 1, STAR_RULES_DEFAULT_.length, STAR_RULES_DEFAULT_[0].length).setValues(STAR_RULES_DEFAULT_);
    console.log('star_rules: انعمل بالقيم الافتراضية');
  }
  ensureSheet_('stars_ledger', ['tx_id', 'ts', 'user_id', 'delta', 'reason', 'ref', 'note']);
  ensureSheet_('votes', ['comment_id', 'user_id', 'created_at']);
  ensureSheet_('banned_words', ['word']);
  bumpCommentsCache_();
  clearStarsCaches_();
  console.log('تمّ ✔ — عدّل الأرقام من تبويب star_rules، والكلمات الممنوعة من banned_words');
}

/* ============ القواعد (من الشيت، مع كاش 10 دقايق) ============ */

function starRules_() {
  const c = cache_().get('star_rules');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  const out = {};
  if (ss_().getSheetByName('star_rules')) {
    const t = table_('star_rules');
    t.rows.forEach(function (r) {
      const o = rowObj_(t, r);
      if (!o.key) return;
      out[String(o.key)] = {
        key: String(o.key), label: String(o.label || o.key), stars: Number(o.stars) || 0,
        daily: Number(o.daily_cap) || 0, enabled: isTrue_(o.enabled), show: isTrue_(o.show)
      };
    });
  }
  cache_().put('star_rules', JSON.stringify(out), 600);
  return out;
}

function clearStarsCaches_() { cache_().removeAll(['star_rules', 'banned_words', 'courses_ids']); }

/* ============ منح وسحب النجوم ============ */

/** بيدوّر على ref بعمود ref بالدفتر (بدون ما يقرأ كل الدفتر). بيرجّع أرقام الصفوف (2-based) */
function ledgerFind_(text, regex) {
  const sh = ss_().getSheetByName('stars_ledger');
  if (!sh || sh.getLastRow() < 2) return [];
  const head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
  const c = head.indexOf('ref');
  const f = sh.getRange(2, c + 1, sh.getLastRow() - 1, 1).createTextFinder(text).matchEntireCell(true);
  if (regex) f.useRegularExpression(true);
  return f.findAll().map(function (rg) { return rg.getRow(); });
}

/**
 * بيمنح نجوم حسب قاعدة من star_rules. لازم يكون جوّا القفل.
 * ref = مفتاح فريد للحدث (نفس الحدث ما بيتسجّل مرتين).
 * بيرجّع { ok:true, stars } أو { ok:false, error:'RULE_OFF'|'DUPLICATE'|'CAPPED'|'NO_USER' }
 */
function grantStars_(userId, key, ref, note) {
  const rule = starRules_()[key];
  if (!rule || !rule.enabled || !rule.stars) return { ok: false, error: 'RULE_OFF' };
  return withLock_(function () {
    if (ref && ledgerFind_(ref).length) return { ok: false, error: 'DUPLICATE' };
    return applyStars_(userId, rule.stars, key, ref, note || rule.label, rule.daily);
  });
}

/** بيسحب كل النجوم اللي انكسبت من أحداث refs بتبلّش بـ prefix (مثلاً جواب انحذف أو انخفى) */
function reverseStarsByPrefix_(prefix, note) {
  return withLock_(function () {
    const sh = ss_().getSheetByName('stars_ledger');
    if (!sh) return 0;
    const rows = ledgerFind_('^' + prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*$', true);
    if (!rows.length) return 0;
    const t = table_('stars_ledger');
    let n = 0;
    rows.forEach(function (rowNum) {
      const o = rowObj_(t, t.rows[rowNum - 2]);
      const d = Number(o.delta) || 0;
      if (d <= 0) return;
      const rref = 'rev:' + o.ref;
      if (ledgerFind_(rref).length) return;
      applyStars_(String(o.user_id), -d, String(o.reason), rref, note || 'سحب نجوم', 0);
      n++;
    });
    return n;
  });
}

/** الكتابة الفعلية: سطر بالدفتر + تحديث الرصيد وآخر الحركات وعدّاد اليوم */
function applyStars_(userId, delta, key, ref, note, dailyCap) {
  if (!userId) return { ok: false, error: 'NO_USER' };
  const users = table_('users');
  const i = findRow_(users, 'user_id', userId);
  if (i < 0) return { ok: false, error: 'NO_USER' };
  const o = rowObj_(users, users.rows[i]);

  const today = Utilities.formatDate(new Date(), 'UTC', 'yyyy-MM-dd');
  let day = {};
  try { day = JSON.parse(String(o.stars_day || '') || '{}'); } catch (e) {}
  if (day.d !== today) day = { d: today, k: {} };
  day.k = day.k || {};
  if (delta > 0 && dailyCap && (Number(day.k[key]) || 0) + delta > dailyCap) return { ok: false, error: 'CAPPED' };

  const now = new Date();
  appendRow_(sheetHead_('stars_ledger'), {
    tx_id: 's_' + Utilities.getUuid().slice(0, 8), ts: iso_(now), user_id: userId,
    delta: delta, reason: key, ref: ref || '', note: String(note || '').slice(0, 120)
  });

  let recent = [];
  try { recent = JSON.parse(String(o.stars_recent || '') || '[]'); } catch (e) {}
  if (!Array.isArray(recent)) recent = [];
  recent.unshift({ t: now.toISOString(), d: delta, k: key, n: String(note || '').slice(0, 120) });
  recent = recent.slice(0, STARS.RECENT_MAX);
  if (delta > 0) day.k[key] = (Number(day.k[key]) || 0) + delta;

  const total = (Number(o.stars) || 0) + delta;
  updateRow_(users, i, { stars: total, stars_recent: JSON.stringify(recent), stars_day: JSON.stringify(day) });
  return { ok: true, stars: delta, total: total };
}

/* ============ نجوم الامتحانات ============ */

/** المقررات الموجودة (من تبويب courses): course_id، أو اسم المجلد بالرابط /courses/XXX/ */
function courseIds_() {
  const c = cache_().get('courses_ids');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  const ids = {};
  const t = table_('courses');
  t.rows.forEach(function (r) {
    const o = rowObj_(t, r);
    if (String(o.status) !== 'active') return;
    if (o.course_id) ids[String(o.course_id).toUpperCase()] = 1;
    const m = /\/courses\/([A-Za-z0-9_\-]+)\//.exec(String(o.url || ''));
    if (m) ids[m[1].toUpperCase()] = 1;
  });
  cache_().put('courses_ids', JSON.stringify(ids), 600);
  return ids;
}

/**
 * req: { action:'examPassed', token, course_id:'BMN401', exam:'ch3' | 'final', score: 95 }
 * ملاحظة: العلامة بتنحسب بمتصفح الطالب، فالسيرفر بيصدّقها. الحماية: مرة وحدة لكل امتحان،
 * ومقررات موجودة بس، وأرقام فصول محدودة — يعني أقصى شي ~18 نجمة لكل مقرر.
 */
function examPassed_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const course = String(req.course_id || '').trim().toUpperCase();
  const exam = String(req.exam || '').trim().toLowerCase();
  const score = Number(req.score);
  const m = /^ch(\d{1,2})$/.exec(exam);
  if (!ID_RE_.test(course) || !(exam === 'final' || (m && Number(m[1]) >= 1 && Number(m[1]) <= STARS.EXAM_MAX_CHAPTER))) {
    return { ok: false, error: 'BAD_REQUEST' };
  }
  if (!(score >= STARS.EXAM_MIN_SCORE && score <= 100)) return { ok: false, error: 'BELOW_PASS' };
  if (!courseIds_()[course]) return { ok: false, error: 'BAD_REQUEST' };

  const uid = String(a.user.obj.user_id);
  const key = exam === 'final' ? 'exam_final' : 'exam_chapter';
  const note = (exam === 'final' ? 'الفحص النهائي — ' : 'امتحان الفصل ' + m[1] + ' — ') + course;
  const r = grantStars_(uid, key, 'exam:' + uid + ':' + course + ':' + exam, note);
  if (!r.ok) return { ok: true, granted: 0, reason: r.error };
  return { ok: true, granted: r.stars, total: r.total };
}

/* ============ صفحة نجومي ============ */

/** قراءة فقط (بدون قفل): الرصيد، آخر الحركات، وجدول "كيف بتكسب" */
function getMyStars_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const o = a.user.obj;
  let recent = [];
  try { recent = JSON.parse(String(o.stars_recent || '') || '[]'); } catch (e) {}
  const rules = starRules_();
  return {
    ok: true,
    stars: Number(o.stars) || 0,
    history: (Array.isArray(recent) ? recent : []).map(function (x) {
      return { at: x.t, delta: Number(x.d) || 0, label: x.n || (rules[x.k] ? rules[x.k].label : x.k) };
    }),
    rules: Object.keys(rules).map(function (k) { return rules[k]; })
      .filter(function (r) { return r.enabled && r.show && r.stars > 0; })
      .map(function (r) { return { key: r.key, label: r.label, stars: r.stars, daily_cap: r.daily }; })
  };
}

/** إشعارات النجوم الجديدة (من users.stars_recent) — Comments.gs بتستعملها بالجرس */
function starEventsSince_(userObj, since) {
  let recent = [];
  try { recent = JSON.parse(String(userObj.stars_recent || '') || '[]'); } catch (e) {}
  if (!Array.isArray(recent)) return [];
  return recent.filter(function (x) { const d = toDate_(x.t); return d && (!since || d > since); })
    .slice(0, 10)
    .map(function (x) { return { at: x.t, delta: Number(x.d) || 0, label: String(x.n || '') }; });
}

/** شغّلها يدوياً إذا عدّلت stars_ledger بإيدك: بتعيد حساب users.stars لكل الطلاب من الدفتر */
function adminRebuildStars() {
  withLock_(function () {
    const led = table_('stars_ledger');
    const sum = {};
    led.rows.forEach(function (r) {
      const u = String(r[led.col('user_id')]);
      sum[u] = (sum[u] || 0) + (Number(r[led.col('delta')]) || 0);
    });
    const users = table_('users');
    const c = users.col('stars');
    if (c < 0 || !users.rows.length) return;
    const col = users.rows.map(function (r) { return [sum[String(r[users.col('user_id')])] || 0]; });
    users.sh.getRange(2, c + 1, col.length, 1).setValues(col);
    console.log('انعاد حساب النجوم لـ ' + users.rows.length + ' طالب');
  }, 60000);
}

/* ============ الكلمات الممنوعة ============ */

/** توحيد النص العربي للمقارنة: بدون تشكيل وتطويل، أ/إ/آ → ا، ى → ي، ة → ه، أحرف صغيرة */
function normWords_(s) {
  return String(s || '').toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function bannedList_() {
  const c = cache_().get('banned_words');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  let list = [];
  if (ss_().getSheetByName('banned_words')) {
    const t = table_('banned_words');
    list = t.rows.map(function (r) { return normWords_(r[0]); }).filter(function (w) { return w.length >= 2; });
  }
  cache_().put('banned_words', JSON.stringify(list), 600);
  return list;
}

/**
 * هل النص فيه كلمة ممنوعة؟ كلمة مفردة: بتنطابق مع أي كلمة بالنص (حتى مع "ال" أو "و" أو "ب" بأولها).
 * عبارة (فيها مسافة): بتنطابق إذا موجودة بالنص.
 */
function hasBanned_(text) {
  const list = bannedList_();
  if (!list.length) return false;
  const norm = normWords_(text);
  const padded = ' ' + norm + ' ';
  const tokens = {};
  norm.split(' ').forEach(function (w) {
    if (!w) return;
    tokens[w] = 1;
    const s = w.replace(/^(و|ف|ب|ل|ك)?(ال)?/, '');
    if (s && s !== w) tokens[s] = 1;
  });
  for (let i = 0; i < list.length; i++) {
    const w = list[i];
    if (w.indexOf(' ') >= 0) { if (padded.indexOf(' ' + w + ' ') >= 0) return true; }
    else if (tokens[w]) return true;
  }
  return false;
}
