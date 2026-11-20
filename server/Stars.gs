/**
 * Support Channel — النجوم ⭐ (سمعة، مو عملة: ما بتنصرف وما بتفتح شي)
 * ملف مستقل بجانب Code.gs و Comments.gs و Placement.gs (نفس المحيط).
 *
 * التبويبات (setupV4 بتنشئها):
 *   star_rules    : key, label, stars, daily_cap, enabled, show   ← بتعدّل منو الأرقام بدون كود
 *   stars_ledger  : tx_id, ts, user_id, delta, reason, ref, note  ← كل حركة نجوم (المرجع الوحيد)
 *   votes         : comment_id, user_id, created_at               ← أصوات 👍 على الأجوبة
 *   banned_words  : word                                          ← كلمات ممنوعة (كلمة بكل سطر)
 *   users         : + stars, stars_recent, stars_day, ref_code, referred_by, ref_paid, ref_joined, ref_active
 *                   + stats (عدّادات الأوسمة)، badges (الأوسمة اللي انكسبت مع تاريخها)   ← setupV5
 *   levels        : level, name, icon, min_stars                              ← المستويات (من النجوم)  ← setupV5
 *   badges        : key, icon, label, desc, metric, threshold, enabled, order ← الأوسمة               ← setupV5
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
  ['exam_final', 'خلّصت الفحص النهائي لمقرر بـ 90% أو أكتر (أول مرة)', 3, '', 'TRUE', 'TRUE'],
  ['welcome', 'نجوم الترحيب بالتسجيل', 5, '', 'TRUE', 'TRUE'],
  ['referral', 'صديق سجّل برابطك وبلّش يدرس', 3, 15, 'TRUE', 'TRUE']
];

/* ============ إعداد النسخة 4 (مرة وحدة) ============ */
/** شغّلها مرة وحدة من المحرر بعد لصق الملفات. آمنة إذا انعادت. */
function setupV4() {
  ensureCols_('users', ['stars', 'stars_recent', 'stars_day', 'name_changed_at',
                         'ref_code', 'referred_by', 'ref_paid', 'ref_joined', 'ref_active', 'hide_top']);
  ensureCols_('comments', ['accepted_id']);
  if (!ss_().getSheetByName('star_rules')) {
    const sh = ss_().insertSheet('star_rules');
    sh.getRange(1, 1, STAR_RULES_DEFAULT_.length, STAR_RULES_DEFAULT_[0].length).setValues(STAR_RULES_DEFAULT_);
    console.log('star_rules: انعمل بالقيم الافتراضية');
  } else {
    // قواعد جديدة ما كانت موجودة → منضيفها لآخر التبويب (بدون ما نلمس أرقامك)
    const have = table_('star_rules').rows.map(function (r) { return String(r[0]); });
    const sh = ss_().getSheetByName('star_rules');
    STAR_RULES_DEFAULT_.slice(1).forEach(function (r) {
      if (have.indexOf(r[0]) < 0) { sh.appendRow(r); console.log('star_rules: انضافت ' + r[0]); }
    });
  }
  ensureSheet_('stars_ledger', ['tx_id', 'ts', 'user_id', 'delta', 'reason', 'ref', 'note']);
  ensureSheet_('votes', ['comment_id', 'user_id', 'created_at']);
  ensureSheet_('banned_words', ['word']);
  bumpCommentsCache_();
  clearStarsCaches_();
  const n = welcomeExisting_();
  console.log('نجوم ترحيب + رمز دعوة للطلاب الموجودين: ' + n);
  console.log('تمّ ✔ — عدّل الأرقام من تبويب star_rules، والكلمات الممنوعة من banned_words');
}

/* ============ الترحيب والدعوات ============ */

/**
 * "مفتاح" الإيميل لمنع التلاعب: بدون +tag، وبجيميل بدون نقاط.
 * (name+1@gmail.com و n.a.m.e@gmail.com = نفس الشخص) — بس للحماية، مو للدخول.
 */
function emailKey_(email) {
  const e = String(email || '').trim().toLowerCase();
  const at = e.lastIndexOf('@'); if (at < 0) return e;
  let local = e.slice(0, at).split('+')[0], dom = e.slice(at + 1);
  if (dom === 'googlemail.com') dom = 'gmail.com';
  if (dom === 'gmail.com') local = local.replace(/\./g, '');
  return local + '@' + dom;
}
/** مراجع ثابتة حتى لو انحذف الحساب وانعمل من جديد: نفس الإيميل ما بياخد ترحيب مرتين، وما بيجيب نجوم دعوة مرتين */
function welcomeRef_(email) { return 'wh:' + hash_('welcome|' + emailKey_(email)).slice(0, 24); }
function referralRef_(email) { return 'rh:' + hash_('referral|' + emailKey_(email)).slice(0, 24); }

/** رمز دعوة: 6 أحرف/أرقام بدون الملتبسة (0/O و 1/I/L) */
function newRefCode_(users) {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const c = users.col('ref_code');
  const taken = {};
  if (c >= 0) users.rows.forEach(function (r) { if (r[c]) taken[String(r[c])] = 1; });
  for (let n = 0; n < 50; n++) {
    const b = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Utilities.getUuid());
    let code = '';
    for (let i = 0; i < 6; i++) code += A.charAt((b[i] & 0xff) % A.length);
    if (!taken[code]) return code;
  }
  return Utilities.getUuid().replace(/-/g, '').slice(0, 8).toUpperCase();
}

/**
 * طالب جديد (لازم نكون جوّا القفل): رمز دعوة + نجوم الترحيب + ربطو بمين دعاه (إذا في رابط دعوة صالح).
 * نجوم الدعوة ما بتنعطى هون — بتنعطى لما الصديق يبلّش يدرس (activateReferral_).
 */
function onNewUser_(email, refCode) {
  const users = table_('users');
  const i = findEmailRow_(users, email);
  if (i < 0) return;
  const me = rowObj_(users, users.rows[i]);
  const uid = String(me.user_id);
  const patch = {};
  if (!me.ref_code) patch.ref_code = newRefCode_(users);

  const code = String(refCode || '').trim().toUpperCase();
  if (/^[A-Z0-9]{4,12}$/.test(code) && users.col('ref_code') >= 0) {
    const ri = findRow_(users, 'ref_code', code);
    if (ri >= 0 && ri !== i) {
      const inviter = rowObj_(users, users.rows[ri]);
      if (String(inviter.status) === 'active' && emailKey_(inviter.email) !== emailKey_(email)) {
        patch.referred_by = String(inviter.user_id);
        updateRow_(users, ri, { ref_joined: (Number(inviter.ref_joined) || 0) + 1 });
      }
    }
  }
  if (Object.keys(patch).length) updateRow_(users, i, patch);
  grantStars_(uid, 'welcome', welcomeRef_(email));
}

/**
 * أول نشاط حقيقي للطالب (نجح بامتحان، أو سأل/جاوب) → اللي دعاه بياخد نجوم الدعوة، مرة وحدة.
 * user = { idx, obj } من authUser_. لازم نكون جوّا القفل.
 */
function activateReferral_(user) {
  const o = user.obj;
  if (!o.referred_by || String(o.ref_paid || '').trim()) return;
  const r = grantStars_(String(o.referred_by), 'referral', referralRef_(o.email), 'صديق دعيتو بلّش يدرس 🎉');
  if (!r.ok && r.error !== 'DUPLICATE' && r.error !== 'NO_USER') return;   // سقف يومي/قاعدة مطفية → منجرّب بنشاط جاي
  const users = table_('users');
  const i = findRow_(users, 'user_id', String(o.user_id));
  if (i >= 0) updateRow_(users, i, { ref_paid: iso_(new Date()) });
  if (r.ok) {
    const ri = findRow_(users, 'user_id', String(o.referred_by));
    if (ri >= 0) updateRow_(users, ri, { ref_active: (Number(users.rows[ri][users.col('ref_active')]) || 0) + 1 });
  }
  o.ref_paid = 'x';
}

/** للطلاب اللي كانوا مسجّلين قبل النجوم: رمز دعوة + نجوم ترحيب (مرة وحدة). بترجع العدد */
function welcomeExisting_() {
  return withLock_(function () {
    const users = table_('users');
    let n = 0;
    users.rows.forEach(function (r, i) {
      const o = rowObj_(users, r);
      if (!o.user_id || !o.email) return;
      if (!o.ref_code && users.col('ref_code') >= 0) updateRow_(users, i, { ref_code: newRefCode_(users) });
      if (grantStars_(String(o.user_id), 'welcome', welcomeRef_(o.email)).ok) n++;
    });
    return n;
  }, 60000);
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

function clearStarsCaches_() { cache_().removeAll(['star_rules', 'banned_words', 'courses_ids', 'pub_stats', 'levels', 'badges_def', 'lvl_map']); }

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

  const before = Number(o.stars) || 0;
  const total = before + delta;
  const patch = { stars: total, stars_day: JSON.stringify(day) };

  // الأوسمة والمستوى: عدّاد لكل نوع حركة (+1 لما ينكسب، −1 لما ينسحب)، وبعدين منشوف إذا انفتح وسام أو طلع مستوى
  const stats = statsOf_(o);
  stats[key] = Math.max(0, (Number(stats[key]) || 0) + (delta > 0 ? 1 : -1));
  patch.stats = JSON.stringify(stats);
  const news = newBadges_(o, stats, total);
  if (news.patch) patch.badges = news.patch;
  news.events.concat(levelUpEvents_(before, total)).forEach(function (ev) { recent.unshift(ev); });
  patch.stars_recent = JSON.stringify(recent.slice(0, STARS.RECENT_MAX));

  updateRow_(users, i, patch);
  if (levelOf_(before).n !== levelOf_(total).n) cache_().remove('lvl_map');
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
  activateReferral_(a.user);   // أول نجاح بامتحان = بلّش يدرس
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
  let code = String(o.ref_code || '');
  if (!code) {   // نادراً: طالب ما إلو رمز لسا
    try {
      code = withLock_(function () {
        const users = table_('users');
        const i = findRow_(users, 'user_id', String(o.user_id));
        if (i < 0 || users.col('ref_code') < 0) return '';
        const cur = String(users.rows[i][users.col('ref_code')] || '');
        if (cur) return cur;
        const c = newRefCode_(users); updateRow_(users, i, { ref_code: c }); return c;
      }, 5000);
    } catch (e) { code = ''; }
  }
  return {
    ok: true,
    stars: Number(o.stars) || 0,
    ref_code: code,
    invited: Number(o.ref_joined) || 0,
    invited_active: Number(o.ref_active) || 0,
    history: (Array.isArray(recent) ? recent : []).map(function (x) {
      return { at: x.t, delta: Number(x.d) || 0, label: x.n || (rules[x.k] ? rules[x.k].label : x.k) };
    }),
    level: levelInfo_(Number(o.stars) || 0),
    levels: levels_().map(function (l) { return { n: l.n, name: l.name, icon: l.icon, min: l.min }; }),
    badges: myBadges_(o),
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


/* ============ الصفحة الرئيسية: عدد المشتركين + أول 5 بالنجوم (عام، بدون تسجيل دخول) ============ */

const PUBLIC_TTL_ = 600;   // 10 دقايق: الأرقام بتتحدّث كل 10 دقايق بالكتير

/**
 * req: { action:'getPublicStats' } — ما بيحتاج تسجيل دخول.
 * بيرجّع بس: عدد الطلاب المفعّلين، وأول 5 (الاسم الأول + عدد النجوم).
 * الترتيب: أكتر نجوم، وإذا تساووا: اللي سجّل أول. اللي اختار يخفي اسمو (users.hide_top) ما بيطلع.
 */
function getPublicStats_() {
  const c = cache_().get('pub_stats');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  const users = table_('users');
  const active = users.rows.map(function (r) { return rowObj_(users, r); })
    .filter(function (o) { return o.user_id && String(o.status) === 'active'; });
  const top = active
    .filter(function (o) { return (Number(o.stars) || 0) > 0 && !isTrue_(o.hide_top); })
    .map(function (o) { const d = toDate_(o.created_at); return { o: o, s: Number(o.stars) || 0, t: d ? d.getTime() : Infinity }; })
    .sort(function (x, y) { return (y.s - x.s) || (x.t - y.t); })
    .slice(0, 5)
    .map(function (x) { return { name: firstName_(x.o.name), stars: x.s, level: levelTag_(levelOf_(x.s)) }; });
  const out = { ok: true, members: active.length, top: top, at: new Date().toISOString() };
  cache_().put('pub_stats', JSON.stringify(out), PUBLIC_TTL_);
  return out;
}

/** req: { action:'setHideTop', token, hide:true|false } — من صفحة "حسابي" */
function setHideTop_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  ensureCols_('users', ['hide_top']);
  const users = table_('users');
  const i = findRow_(users, 'user_id', String(a.user.obj.user_id));
  if (i < 0) return { ok: false, error: 'NO_SESSION' };
  const hide = req.hide === true || req.hide === 'true';
  updateRow_(users, i, { hide_top: hide ? 'TRUE' : '' });
  cache_().remove('pub_stats');
  return { ok: true, hide_top: hide };
}


/* ============ المستويات والأوسمة 🏅 (نسخة v10) ============ */
/*
 * المستوى: بينحسب من رصيد النجوم الحالي (تبويب levels). إذا انسحبت نجوم ممكن ينزل.
 * الوسام: بينفتح لما عدّاد يوصل للرقم المطلوب (تبويب badges). الوسام اللي انكسب بيضل (ما بينسحب)،
 *         إلا إذا شغّلت adminRebuildBadges (بتعيد الحساب من الدفتر والتعليقات).
 *
 * العدّادات (metric بتبويب badges):
 *   questions        أسئلة نشرها الطالب
 *   answers          أجوبة على أسئلة غيرو
 *   answer_accepted  أجوبة "حلّت المشكلة"
 *   answer_upvote    أصوات 👍 جابت نجمة (من حسابات موثوقة)
 *   exam_chapter     امتحانات فصول نجح فيها (90%+، أول مرة)
 *   exam_final       فحوص نهائية نجح فيها (90%+، أول مرة)
 *   referral         أصحاب دعاهم وبلّشوا يدرسوا
 *   stars            رصيد النجوم
 */

const LEVELS_DEFAULT_ = [
  ['level', 'name', 'icon', 'min_stars'],
  [1, 'جديد', '🌱', 0],
  [2, 'نشيط', '📗', 15],
  [3, 'مساعد', '🤝', 40],
  [4, 'خبير', '💡', 100],
  [5, 'مرشد', '🧭', 200],
  [6, 'قدوة', '🏆', 400],
  [7, 'أسطورة', '👑', 800]
];

const BADGES_DEFAULT_ = [
  ['key', 'icon', 'label', 'desc', 'metric', 'threshold', 'enabled', 'order'],
  ['first_question', '❓', 'أول سؤال', 'سألت أول سؤال — السؤال نص الفهم', 'questions', 1, 'TRUE', 1],
  ['first_answer', '✍️', 'أول جواب', 'جاوبت على سؤال حدا تاني', 'answers', 1, 'TRUE', 2],
  ['helper', '🤝', 'إيد بتساعد', 'أول جواب إلك حلّ مشكلة صاحب السؤال', 'answer_accepted', 1, 'TRUE', 3],
  ['solver', '🧠', 'حلّال مشاكل', '10 أجوبة إلك حلّت مشاكل', 'answer_accepted', 10, 'TRUE', 4],
  ['liked', '👍', 'جوابك بيفيد', '10 أصوات 👍 على أجوبتك', 'answer_upvote', 10, 'TRUE', 5],
  ['studious', '📚', 'مجتهد', 'نجحت بـ 5 امتحانات فصول بـ 90% أو أكتر', 'exam_chapter', 5, 'TRUE', 6],
  ['finisher', '🎓', 'خلّصت مقرر', 'نجحت بأول فحص نهائي بـ 90% أو أكتر', 'exam_final', 1, 'TRUE', 7],
  ['scholar', '🏛️', 'موسوعة', 'نجحت بـ 3 فحوص نهائية لمقررات مختلفة', 'exam_final', 3, 'TRUE', 8],
  ['ambassador', '📣', 'سفير', '3 أصحاب دعيتهم وبلّشوا يدرسوا', 'referral', 3, 'TRUE', 9]
];

/** شغّلها مرة وحدة من المحرر بعد لصق الملفات. آمنة إذا انعادت (ما بتلمس أرقامك). */
function setupV5() {
  ensureCols_('users', ['stats', 'badges']);
  if (!ss_().getSheetByName('levels')) {
    const sh = ss_().insertSheet('levels');
    sh.getRange(1, 1, LEVELS_DEFAULT_.length, LEVELS_DEFAULT_[0].length).setValues(LEVELS_DEFAULT_);
    console.log('levels: انعمل بالقيم الافتراضية');
  }
  if (!ss_().getSheetByName('badges')) {
    const sh = ss_().insertSheet('badges');
    sh.getRange(1, 1, BADGES_DEFAULT_.length, BADGES_DEFAULT_[0].length).setValues(BADGES_DEFAULT_);
    console.log('badges: انعمل بالقيم الافتراضية');
  } else {
    const have = table_('badges').rows.map(function (r) { return String(r[0]); });
    const sh = ss_().getSheetByName('badges');
    BADGES_DEFAULT_.slice(1).forEach(function (r) {
      if (have.indexOf(r[0]) < 0) { sh.appendRow(r); console.log('badges: انضاف ' + r[0]); }
    });
  }
  clearStarsCaches_();
  adminRebuildBadges();
  console.log('تمّ ✔ — عدّل المستويات من تبويب levels، والأوسمة من تبويب badges');
}

/* ---- القراءة من الشيت (كاش 10 دقايق) ---- */

function levels_() {
  const c = cache_().get('levels');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  let out = [];
  if (ss_().getSheetByName('levels')) {
    const t = table_('levels');
    out = t.rows.map(function (r) { return rowObj_(t, r); })
      .filter(function (o) { return String(o.name || '').trim() && String(o.min_stars) !== ''; })
      .map(function (o) { return { name: String(o.name).trim(), icon: String(o.icon || '').trim(), min: Number(o.min_stars) || 0 }; })
      .sort(function (a, b) { return a.min - b.min; });
  }
  if (!out.length) out = LEVELS_DEFAULT_.slice(1).map(function (r) { return { name: r[1], icon: r[2], min: r[3] }; });
  out.forEach(function (l, i) { l.n = i + 1; });   // الرقم حسب الترتيب، حتى لو عمود level انكتب غلط
  cache_().put('levels', JSON.stringify(out), 600);
  return out;
}

function badgeDefs_() {
  const c = cache_().get('badges_def');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  let out = [];
  if (ss_().getSheetByName('badges')) {
    const t = table_('badges');
    out = t.rows.map(function (r) { return rowObj_(t, r); })
      .filter(function (o) { return o.key && o.metric && isTrue_(o.enabled) && Number(o.threshold) > 0; })
      .map(function (o) {
        return { key: String(o.key), icon: String(o.icon || '🏅'), label: String(o.label || o.key), desc: String(o.desc || ''),
                 metric: String(o.metric), threshold: Number(o.threshold), order: Number(o.order) || 999 };
      })
      .sort(function (a, b) { return a.order - b.order; });
  }
  cache_().put('badges_def', JSON.stringify(out), 600);
  return out;
}

/* ---- المستوى ---- */

function levelOf_(stars) {
  const L = levels_();
  let cur = L[0];
  for (let i = 0; i < L.length; i++) if (stars >= L[i].min) cur = L[i];
  return cur;
}
function levelTag_(l) { return l ? { n: l.n, icon: l.icon, name: l.name } : null; }

/** لصفحة نجومي: المستوى الحالي + الجاي + قديش باقي */
function levelInfo_(stars) {
  const L = levels_();
  const cur = levelOf_(stars);
  const next = L[cur.n] || null;   // n بيبلّش من 1، فـ L[cur.n] هو اللي بعدو
  return {
    n: cur.n, name: cur.name, icon: cur.icon, min: cur.min,
    next: next ? { n: next.n, name: next.name, icon: next.icon, min: next.min, left: Math.max(0, next.min - stars) } : null,
    pct: next ? Math.max(0, Math.min(100, Math.round((stars - cur.min) * 100 / Math.max(1, next.min - cur.min)))) : 100
  };
}

/** إذا الرصيد طلع لمستوى جديد → حدث بالإشعارات (بدون نجوم) */
function levelUpEvents_(before, after) {
  const a = levelOf_(before), b = levelOf_(after);
  if (b.n <= a.n) return [];
  return [{ t: new Date().toISOString(), d: 0, k: 'level', n: 'طلعت لمستوى ' + b.name + ' ' + b.icon + ' (المستوى ' + b.n + ')' }];
}

/** user_id → رقم المستوى، لكل الطلاب (للأسماء جنب الأسئلة والأجوبة). كاش 10 دقايق */
function levelMap_() {
  const c = cache_().get('lvl_map');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  const users = table_('users');
  const cu = users.col('user_id'), cs = users.col('stars');
  const m = {};
  if (cs >= 0) users.rows.forEach(function (r) {
    const n = levelOf_(Number(r[cs]) || 0).n;
    if (r[cu] && n > 1) m[String(r[cu])] = n;   // المستوى 1 ما منحفظو (أصغر بالكاش)
  });
  try { cache_().put('lvl_map', JSON.stringify(m), 600); } catch (e) {}
  return m;
}

/** بتنستعمل بـ Comments.gs: مستوى صاحب المشاركة (أو null للحساب المحذوف) */
let LVL_MAP_MEMO_ = null;
function authorLevel_(uid) {
  if (!uid) return null;
  if (!LVL_MAP_MEMO_) LVL_MAP_MEMO_ = levelMap_();
  const n = LVL_MAP_MEMO_[uid] || 1;
  return levelTag_(levels_()[n - 1] || levels_()[0]);
}

/* ---- الأوسمة ---- */

function statsOf_(o) {
  let s = {};
  try { s = JSON.parse(String(o.stats || '') || '{}'); } catch (e) {}
  return (s && typeof s === 'object' && !Array.isArray(s)) ? s : {};
}
function earnedOf_(o) {
  let b = {};
  try { b = JSON.parse(String(o.badges || '') || '{}'); } catch (e) {}
  return (b && typeof b === 'object' && !Array.isArray(b)) ? b : {};
}
function metricVal_(stats, metric, stars) {
  return metric === 'stars' ? (Number(stars) || 0) : (Number(stats[metric]) || 0);
}

/** بيرجّع { patch: JSON جديد لعمود badges أو '', events: إشعارات الأوسمة الجديدة } */
function newBadges_(o, stats, stars) {
  const earned = earnedOf_(o);
  const now = new Date().toISOString();
  const events = [];
  badgeDefs_().forEach(function (b) {
    if (earned[b.key] || metricVal_(stats, b.metric, stars) < b.threshold) return;
    earned[b.key] = now;
    events.push({ t: now, d: 0, k: 'badge', n: 'وسام جديد: ' + b.icon + ' ' + b.label });
  });
  return { patch: events.length ? JSON.stringify(earned) : '', events: events };
}

/** لصفحة نجومي: كل الأوسمة المفعّلة، اللي انكسب مع تاريخو، والباقي مع التقدّم */
function myBadges_(o) {
  const stats = statsOf_(o), earned = earnedOf_(o), stars = Number(o.stars) || 0;
  return badgeDefs_().map(function (b) {
    const v = metricVal_(stats, b.metric, stars);
    return { key: b.key, icon: b.icon, label: b.label, desc: b.desc, threshold: b.threshold,
             progress: Math.min(v, b.threshold), earned_at: earned[b.key] || '' };
  });
}

/**
 * عدّاد أسئلة/أجوبة (Comments.gs بتستدعيها جوّا القفل). metric = 'questions' | 'answers'، step = +1 أو −1
 * بتفتح وسام إذا وصل، وبتضيف إشعار.
 */
function bumpStat_(userId, metric, step) {
  if (!userId) return;
  const users = table_('users');
  const i = findRow_(users, 'user_id', String(userId));
  if (i < 0) return;
  const o = rowObj_(users, users.rows[i]);
  const stats = statsOf_(o);
  stats[metric] = Math.max(0, (Number(stats[metric]) || 0) + step);
  const patch = { stats: JSON.stringify(stats) };
  if (step > 0) {
    const news = newBadges_(o, stats, Number(o.stars) || 0);
    if (news.patch) {
      patch.badges = news.patch;
      let recent = [];
      try { recent = JSON.parse(String(o.stars_recent || '') || '[]'); } catch (e) {}
      if (!Array.isArray(recent)) recent = [];
      news.events.forEach(function (ev) { recent.unshift(ev); });
      patch.stars_recent = JSON.stringify(recent.slice(0, STARS.RECENT_MAX));
    }
  }
  updateRow_(users, i, patch);
}

/**
 * شغّلها يدوياً (و setupV5 بتشغّلها): بتعيد حساب العدّادات والأوسمة لكل الطلاب من الدفتر وتبويب comments.
 * بدون إشعارات. الأوسمة اللي ما عاد الطالب بيستحقها بتنشال (مثلاً بعد ما خفيت أجوبة مخالفة).
 */
function adminRebuildBadges() {
  withLock_(function () {
    ensureCols_('users', ['stats', 'badges']);
    const stats = {};   // uid → {metric: n}
    const add = function (u, k, d) { if (!u) return; stats[u] = stats[u] || {}; stats[u][k] = (stats[u][k] || 0) + d; };

    if (ss_().getSheetByName('stars_ledger')) {
      const led = table_('stars_ledger');
      const cu = led.col('user_id'), cr = led.col('reason'), cd = led.col('delta');
      led.rows.forEach(function (r) { const d = Number(r[cd]) || 0; if (d) add(String(r[cu]), String(r[cr]), d > 0 ? 1 : -1); });
    }
    if (ss_().getSheetByName('comments')) {
      const t = table_('comments');
      const ci = t.col('comment_id'), cu = t.col('user_id'), cp = t.col('parent_id'), cs = t.col('status');
      const askerOf = {};
      t.rows.forEach(function (r) { if (!r[cp]) askerOf[String(r[ci])] = String(r[cu]); });
      t.rows.forEach(function (r) {
        if (String(r[cs]) !== 'visible') return;
        const u = String(r[cu]);
        if (!r[cp]) add(u, 'questions', 1);
        else if (askerOf[String(r[cp])] !== u) add(u, 'answers', 1);
      });
    }

    const users = table_('users');
    if (!users.rows.length) return;
    const defs = badgeDefs_();
    const now = new Date().toISOString();
    const cS = users.col('stats'), cB = users.col('badges');
    const sCol = [], bCol = [];
    let total = 0;
    users.rows.forEach(function (r) {
      const o = rowObj_(users, r);
      const st = stats[String(o.user_id)] || {};
      Object.keys(st).forEach(function (k) { st[k] = Math.max(0, st[k]); });
      const old = earnedOf_(o), earned = {};
      defs.forEach(function (b) {
        if (metricVal_(st, b.metric, Number(o.stars) || 0) >= b.threshold) { earned[b.key] = old[b.key] || now; total++; }
      });
      sCol.push([JSON.stringify(st)]);
      bCol.push([Object.keys(earned).length ? JSON.stringify(earned) : '']);
    });
    users.sh.getRange(2, cS + 1, sCol.length, 1).setValues(sCol);
    users.sh.getRange(2, cB + 1, bCol.length, 1).setValues(bCol);
    cache_().remove('lvl_map');
    console.log('انعاد حساب الأوسمة لـ ' + users.rows.length + ' طالب · مجموع الأوسمة: ' + total);
  }, 60000);
}
