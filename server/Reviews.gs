/**
 * Support Channel — آراء الأعضاء + رأي الزوار اللي ما سجّلوا (النسخة 16)
 *
 * تبويبين:
 *   feedback : رأي الزائر اللي ما سجّل (ليش ما كمّل). ما بينعرض بالموقع، إلك إنت بس.
 *              إذا ترك إيميلو للتذكير، المهمة اليومية بتبعتلو إيميل واحد بعد يوم.
 *   reviews  : رأي العضو. ما بينعرض بشريط الآراء بالصفحة الرئيسية إلا لما تكتب TRUE بعمود approved.
 *              أول ما توافق: العضو بياخد نجوم (قاعدة review_approved بتبويب star_rules، 3 نجوم) وإشعار بالجرس.
 *
 * بعد اللصق: شغّل setupReviews() مرة وحدة من المحرر، وبعدين Deploy ← New version.
 */

const SITE_URL_ = 'https://basharkarkinly.github.io/BSCM_Hub/';

const FEEDBACK_COLS_ = ['fb_id', 'created_at', 'vid', 'ua', 'stars', 'chips', 'text', 'courses', 'course_id',
                        'email', 'reminded_at'];
const REVIEWS_COLS_ = ['review_id', 'created_at', 'user_id', 'email', 'name', 'stars', 'chips', 'text', 'course_id',
                       'approved', 'stars_granted'];
const REVIEW_USER_COLS_ = ['review_state', 'review_later_at', 'review_later_n'];

const REVIEW_CFG_ = {
  TEXT_MIN: 5, TEXT_MAX: 400,
  LATER_DAYS: 3,          // «لاحقاً» → بترجع تطلع بعد هالقد يوم
  LATER_MAX: 2,           // بعد هالقد مرة «لاحقاً» ما منرجع نسأل
  MIN_ACCOUNT_DAYS: 1,    // ما منسأل اللي سجّل اليوم
  REMIND_AFTER_H: 24,     // تذكير الزائر بعد هالقد ساعة
  PUBLIC_MAX: 12,         // كم رأي منرجّع للشريط
  FB_PER_HOUR: 60         // حماية: أقصى عدد آراء زوار بالساعة لكل الموقع
};

// الأزرار الجاهزة: منقبل بس هالنصوص (أي شي تاني بينكتب بالمربع)
const FB_CHIPS_ = ['ما عرفت إنو مجاني', 'ما بدي أعطي إيميلي', 'ما لقيت مادتي', 'الكود ما وصلني',
                   'الشرح مو واضح', 'الموقع بطيء أو علّق معي', 'بس عم جرّب، برجع بعدين', 'غير ذلك'];
const RV_CHIPS_ = ['الشرح بسيط وواضح', 'أسئلة الدورات فادتني', 'التدريب ساعدني بالامتحان', 'بلاقي جواب لأسئلتي',
                   'بدي مواد أكتر', 'في شرح مو واضح', 'بدي أسئلة أكتر', 'الموقع بطيء أحياناً'];

const EMAIL_RE_ = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

/* ============ الإعداد (مرة وحدة) ============ */
/** مربعات approved بس لصفوف الآراء. لو حطيناها للعمود كلو، الشيت بيعتبر الصفوف الفاضية «مليانة»
 *  وبيصير appendRow يكتب الآراء الجديدة بعد الصف 1000. */
function reviewCheckbox_(sh, fromRow, n) {
  if (n < 1) return;
  sh.getRange(fromRow, REVIEWS_COLS_.indexOf('approved') + 1, n, 1)
    .setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox('TRUE', 'FALSE').setAllowInvalid(true).build());
}

/** تشغيل مرة وحدة: بيشيل الصفوف الفاضية (ما إلها review_id) من تبويب reviews، وبيطلّع الآراء لفوق
 *  (بعد صف العناوين مباشرة)، وبيحط مربعات الموافقة بس للآراء. الأعمدة والقيم ما بتتغير. */
function fixReviewsSheet() {
  return withLock_(function () {
    const sh = ss_().getSheetByName('reviews');
    const lastCol = sh.getLastColumn(), maxRows = sh.getMaxRows();
    if (maxRows < 2) return;
    const head = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
    const idc = head.indexOf('review_id');
    const all = sh.getRange(2, 1, maxRows - 1, lastCol).getValues();
    const keep = all.filter(function (r) { return String(r[idc] || '').trim(); });
    const body = sh.getRange(2, 1, maxRows - 1, lastCol);
    body.clearDataValidations(); body.clearContent();
    if (keep.length) {
      sh.getRange(2, 1, keep.length, lastCol).setValues(keep);
      reviewCheckbox_(sh, 2, keep.length);
    }
    cache_().remove('pub_reviews');
    console.log('reviews: ' + keep.length + ' رأي، والصفوف الفاضية انشالت ✔');
  });
}

function setupReviews() {
  ensureSheet_('feedback', FEEDBACK_COLS_); ensureCols_('feedback', FEEDBACK_COLS_);
  ensureSheet_('reviews', REVIEWS_COLS_);   ensureCols_('reviews', REVIEWS_COLS_);
  ensureCols_('users', REVIEW_USER_COLS_);

  // قاعدة النجوم: 3 نجوم لما توافق على رأي
  const rules = ss_().getSheetByName('star_rules');
  if (rules) {
    const t = table_('star_rules');
    if (findRow_(t, 'key', 'review_approved') < 0) {
      appendRow_(t, { key: 'review_approved', label: 'رأيك بالمنصة انعرض بالصفحة الرئيسية', stars: 3,
                      daily_cap: '', enabled: 'TRUE', show: 'TRUE' });
    }
  }
  ss_().getSheetByName('reviews').setFrozenRows(1);
  fixReviewsSheet();
  ss_().getSheetByName('feedback').setFrozenRows(1);
  clearStarsCaches_();
  cache_().remove('pub_reviews');
  console.log('الآراء: جاهز ✔ (feedback + reviews + قاعدة review_approved)');
}

/* ============ الزائر ============ */

/** req: { vid, ua, stars, chips:[...], text, course_id, email } — بدون token */
function submitFeedback_(req) {
  const vid = String(req.vid || '');
  if (!VID_RE_.test(vid)) return { ok: false, error: 'BAD_REQUEST' };
  const stars = Math.round(Number(req.stars) || 0);
  const text = String(req.text || '').trim().slice(0, REVIEW_CFG_.TEXT_MAX);
  if (stars < 1 || stars > 5 || text.length < REVIEW_CFG_.TEXT_MIN) return { ok: false, error: 'BAD_REQUEST' };
  const chips = (Array.isArray(req.chips) ? req.chips : []).map(String)
    .filter(function (c, i, a) { return FB_CHIPS_.indexOf(c) >= 0 && a.indexOf(c) === i; });
  const email = normEmail_(req.email || '');
  if (email && !EMAIL_RE_.test(email)) return { ok: false, error: 'BAD_EMAIL' };
  const course = TRIAL_COURSE_RE_.test(String(req.course_id || '')) ? String(req.course_id || '') : '';
  const ua = UA_RE_.test(String(req.ua || '')) ? String(req.ua) : '';

  // حماية من الإغراق: سقف بالساعة لكل الموقع
  const c = cache_(), hk = 'fb_h_' + Utilities.formatDate(new Date(), 'UTC', 'yyyyMMddHH');
  const n = Number(c.get(hk)) || 0;
  if (n >= REVIEW_CFG_.FB_PER_HOUR) return { ok: false, error: 'BUSY' };

  return withLock_(function () {
    ensureSheet_('feedback', FEEDBACK_COLS_);
    const t = table_('feedback');
    if (findRow_(t, 'vid', vid) >= 0) return { ok: true, dup: true };   // رأي واحد لكل جهاز
    let courses = '';
    if (ss_().getSheetByName('trials')) {
      const tr = table_('trials'), i = findRow_(tr, 'vid', vid);
      if (i >= 0) courses = String(tr.rows[i][tr.col('courses')] || '').replace(/^,|,$/g, '');
    }
    appendRow_(t, {
      fb_id: 'f_' + Utilities.getUuid().slice(0, 8), created_at: iso_(new Date()), vid: vid, ua: ua,
      stars: stars, chips: chips.join(' · '), text: text, courses: courses, course_id: course, email: email
    });
    c.put(hk, String(n + 1), 3700);
    return { ok: true };
  });
}

/** المهمة اليومية: إيميل تذكير واحد لكل زائر ترك إيميلو، بعد REMIND_AFTER_H ساعة، إذا لسا ما سجّل */
function sendFeedbackReminders_() {
  if (!ss_().getSheetByName('feedback')) return 0;
  const t = table_('feedback');
  const now = Date.now();
  const users = table_('users');
  const urlOf = {};
  try {
    const ct = table_('courses');
    ct.rows.forEach(function (r) { urlOf[String(r[ct.col('course_id')])] = String(r[ct.col('url')] || ''); });
  } catch (e) {}
  let sent = 0;
  t.rows.forEach(function (r, i) {
    const o = rowObj_(t, r);
    if (!o.email || o.reminded_at) return;
    const at = toDate_(o.created_at);
    if (!at || now - at.getTime() < REVIEW_CFG_.REMIND_AFTER_H * 3600000) return;
    if (findEmailRow_(users, o.email) >= 0) { updateRow_(t, i, { reminded_at: 'سجّل' }); return; }   // سجّل لحالو
    if (MailApp.getRemainingDailyQuota() < 20) return;   // منخلي الحصة لرموز الدخول
    const link = urlOf[String(o.course_id)] || SITE_URL_;
    try {
      MailApp.sendEmail({ to: String(o.email), subject: 'منستناك ترجع 👋 — ' + CFG.SENDER_NAME,
                          name: CFG.SENDER_NAME, htmlBody: reminderMail_(link) });
      updateRow_(t, i, { reminded_at: iso_(new Date()) });
      sent++;
    } catch (e) { console.error(e); }
  });
  return sent;
}

function reminderMail_(link) {
  return '<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;max-width:440px;margin:auto;padding:24px;border:1px solid #E3E7F0;border-radius:14px;">' +
    '<h2 style="margin:0 0 8px;color:#0F1C2E;">منستناك ترجع 👋</h2>' +
    '<p style="color:#3A465A;margin:0 0 14px;line-height:1.9;">مبارح جرّبت منصة ' + CFG.SENDER_NAME + ' وطلبت نذكّرك. ' +
    'كل المواد مجانية، والتسجيل كمان مجاني وبياخد دقيقة.</p>' +
    '<p style="color:#3A465A;margin:0 0 18px;line-height:1.9;"><b>التسجيل ضروري إذا بدك تضل محتفظ وين وصلت بالمادة، وما ترجع تعيد الفصول.</b></p>' +
    '<a href="' + link + '" style="display:inline-block;background:#FF9F1C;color:#1A1200;text-decoration:none;font-weight:bold;border-radius:999px;padding:10px 22px;">كمّل من وين وقفت</a>' +
    '<p style="color:#8A93A6;font-size:12px;margin:20px 0 0;">هاد إيميل واحد بس، لأنك طلبت التذكير. ما رح نبعتلك غيره.</p>' +
    '</div>';
}

/* ============ العضو ============ */

/** req: { token } → { ok, show } : هل منطلّعلو نافذة الرأي؟ */
function reviewState_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  const o = s.user.obj;
  if (String(o.review_state || '') === 'done') return { ok: true, show: false };
  const created = toDate_(o.created_at);
  if (created && Date.now() - created.getTime() < REVIEW_CFG_.MIN_ACCOUNT_DAYS * 86400000) return { ok: true, show: false };
  const n = Number(o.review_later_n) || 0;
  if (n >= REVIEW_CFG_.LATER_MAX) return { ok: true, show: false };
  const later = toDate_(o.review_later_at);
  if (later && Date.now() - later.getTime() < REVIEW_CFG_.LATER_DAYS * 86400000) return { ok: true, show: false };
  return { ok: true, show: true, name: firstName_(o.name) };
}

/** req: { token } — كبس «لاحقاً» أو سكّر النافذة */
function reviewLater_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  ensureCols_('users', REVIEW_USER_COLS_);
  const t = table_('users'), i = findEmailRow_(t, s.email);
  if (i < 0) return { ok: false, error: 'NO_USER' };
  updateRow_(t, i, { review_later_at: iso_(new Date()), review_later_n: (Number(rowObj_(t, t.rows[i]).review_later_n) || 0) + 1 });
  return { ok: true };
}

/** req: { token, stars, chips:[...], text, course_id } */
function submitReview_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  const stars = Math.round(Number(req.stars) || 0);
  const text = String(req.text || '').trim().slice(0, REVIEW_CFG_.TEXT_MAX);
  if (stars < 1 || stars > 5 || text.length < REVIEW_CFG_.TEXT_MIN) return { ok: false, error: 'BAD_REQUEST' };
  if (hasBanned_(text)) return { ok: false, error: 'BANNED_WORDS' };
  const chips = (Array.isArray(req.chips) ? req.chips : []).map(String)
    .filter(function (c, i, a) { return RV_CHIPS_.indexOf(c) >= 0 && a.indexOf(c) === i; });
  const cid = String(req.course_id || '').toUpperCase();
  const course = courseIds_()[cid] ? cid : '';
  const o = s.user.obj;

  ensureSheet_('reviews', REVIEWS_COLS_);
  ensureCols_('users', REVIEW_USER_COLS_);
  const t = table_('reviews');
  if (findRow_(t, 'user_id', o.user_id) >= 0) return { ok: false, error: 'ALREADY' };
  appendRow_(t, {
    review_id: 'r_' + Utilities.getUuid().slice(0, 8), created_at: iso_(new Date()), user_id: o.user_id,
    email: s.email, name: String(o.name || ''), stars: stars, chips: chips.join(' · '), text: text,
    course_id: course, approved: false, stars_granted: ''
  });
  reviewCheckbox_(t.sh, t.sh.getLastRow(), 1);   // مربع الموافقة للصف الجديد بس
  const u = table_('users'), i = findEmailRow_(u, s.email);
  if (i >= 0) updateRow_(u, i, { review_state: 'done' });
  return { ok: true };
}

/* ============ العام: شريط الآراء ============ */

/** بدون token. الآراء الموافَق عليها بس (الأحدث أول)، من الكاش 10 دقايق */
function getReviews_() {
  const c = cache_().get('pub_reviews');
  if (c) { try { return JSON.parse(c); } catch (e) {} }
  let list = [];
  if (ss_().getSheetByName('reviews')) {
    const titles = {};
    try {
      const ct = table_('courses');
      ct.rows.forEach(function (r) { titles[String(r[ct.col('course_id')])] = String(r[ct.col('title')] || ''); });
    } catch (e) {}
    const t = table_('reviews');
    list = t.rows.map(function (r) { return rowObj_(t, r); })
      .filter(function (o) { return isTrue_(o.approved) && o.text; })
      .sort(function (a, b) { return String(b.created_at).localeCompare(String(a.created_at)); })
      .slice(0, REVIEW_CFG_.PUBLIC_MAX)
      .map(function (o) {
        return { name: firstName_(o.name), stars: Number(o.stars) || 0, text: String(o.text),
                 chips: String(o.chips || '').split(' · ').filter(Boolean), course: titles[String(o.course_id)] || '' };
      });
  }
  const out = { ok: true, reviews: list };
  cache_().put('pub_reviews', JSON.stringify(out), 600);
  return out;
}

/** من onSheetEdit: تعديل بتبويب reviews → نجوم للموافَق عليهم (مرة وحدة) وتحديث الشريط */
function onReviewsEdited_() {
  const t = table_('reviews');
  const ca = t.col('approved'), cg = t.col('stars_granted');
  t.rows.forEach(function (r, i) {
    if (!isTrue_(r[ca]) || isTrue_(r[cg])) return;
    const o = rowObj_(t, r);
    const res = grantStars_(String(o.user_id), 'review_approved', 'rv:' + o.review_id, 'رأيك بالمنصة انعرض بالصفحة الرئيسية 💬');
    if (res.ok || res.error === 'DUPLICATE') updateRow_(t, i, { stars_granted: true });
  });
  cache_().remove('pub_reviews');
}
