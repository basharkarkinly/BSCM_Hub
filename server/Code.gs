/**
 * Support Channel — Auth backend (Google Apps Script)
 * Web App: Execute as ME / Who has access: Anyone
 *
 * Script Properties required (Project Settings > Script properties):
 *   SHEET_ID          معرّف ملف Google Sheet (الجزء بين /d/ و /edit في الرابط)
 *   PEPPER            نص عشوائي طويل (تخلقو انت مرة وحدة وما تغيّروا بعدين)
 *   GOOGLE_CLIENT_ID  (اختياري الآن) Client ID لتسجيل الدخول بحساب غوغل
 *
 * بعد ما تلصق هالنسخة لأول مرة: شغّل setupV3() مرة وحدة من المحرر (تفاصيلها تحت).
 */

const CFG = {
  OTP_TTL_MIN: 10,
  OTP_MAX_ATTEMPTS: 5,        // محاولات خاطئة لكل رمز
  OTP_MAX_FAILS_HOUR: 10,     // محاولات خاطئة لنفس الإيميل خلال ساعة (حتى لو طلب رموز جديدة)
  OTP_COOLDOWN_SEC: 60,
  OTP_MAX_PER_HOUR: 40,       // أقصى عدد إيميلات رمز تحقق بتنبعت بالساعة (لكل الموقع) — حماية لحصة الإرسال اليومية
  SESSION_DAYS: 90,
  RENEW_AFTER_HOURS: 24,
  OTP_KEEP_HOURS: 24,         // التنظيف الليلي: صفوف otp أقدم من هيك بتنمسح
  ARCHIVE_COMMENTS_DAYS: 180, // التنظيف الليلي: نقاش آخر رد فيه أقدم من هيك بينتقل لتبويب comments_archive
  SENDER_NAME: 'Support Channel'
};

/* ============ نقاط الدخول ============ */

function doGet() {
  return json_({ ok: true, service: 'support-channel-auth', version: 'v8-qa' });
}

function doPost(e) {
  try {
    const req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    switch (req.action) {
      case 'requestOtp':   return json_(withLock_(() => requestOtp_(req)));
      case 'verifyOtp':    return json_(withLock_(() => verifyOtp_(req)));
      case 'googleLogin':  return json_(withLock_(() => googleLogin_(req)));
      // قراءة فقط → بدون قفل (حتى ما تصطف كل الصفحات ورا بعض). التجديد اليومي للجلسة بياخد القفل لحالو.
      case 'checkSession': return json_(checkSession_(req));
      case 'getCourses':   return json_(getCourses_(req));
      case 'logout':       return json_(withLock_(() => logout_(req)));
      // التعليقات والإشعارات (Comments.gs) — القراءة من الكاش وبدون قفل
      case 'getComments':      return json_(getComments_(req));
      case 'getNotifications': return json_(getNotifications_(req));
      case 'getTicker':        return json_(getTicker_(req));
      case 'getQaStats':       return json_(getQaStats_(req));
      case 'getQaFeed':        return json_(getQaFeed_(req));
      case 'addComment':       return json_(withLock_(() => addComment_(req)));
      case 'deleteComment':    return json_(withLock_(() => deleteComment_(req)));
      case 'voteAnswer':       return json_(withLock_(() => voteAnswer_(req)));
      case 'acceptAnswer':     return json_(withLock_(() => acceptAnswer_(req)));
      // النجوم (Stars.gs)
      case 'getMyStars':       return json_(getMyStars_(req));
      case 'examPassed':       return json_(withLock_(() => examPassed_(req)));
      case 'markSeen':         return json_(withLock_(() => markSeen_(req)));
      case 'savePlacementResult': return json_(withLock_(() => savePlacementResult_(req)));
      case 'savePlacementSurvey': return json_(withLock_(() => savePlacementSurvey_(req)));
      // الحساب: تعديل الاسم وحذف الحساب (صفحة profile.html)
      case 'updateName':    return json_(withLock_(() => updateName_(req)));
      case 'deleteAccount': return json_(withLock_(() => deleteAccount_(req)));
      case 'acceptTerms':   return json_(withLock_(() => acceptTerms_(req)));
      default:             return json_({ ok: false, error: 'UNKNOWN_ACTION' });
    }
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'SERVER_ERROR' });
  }
}

/** شغّلها يدوياً مرة وحدة من المحرر حتى توافق على الصلاحيات (شيت + إيميل + اتصال خارجي) */
function authorizeOnce() {
  ss_();
  MailApp.getRemainingDailyQuota();
  UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=x', { muteHttpExceptions: true });
  CacheService.getScriptCache().get('x');
  console.log('OK — الصلاحيات تمام');
}

/* ============ إعداد النسخة 3 (مرة وحدة) ============ */
/**
 * شغّلها مرة وحدة من المحرر بعد لصق الملفات. آمنة إذا انعادت.
 * 1) بتضيف الأعمدة الجديدة: users.places ، otp.fails ، otp.fails_since
 * 2) بتعبّي عمود places لكل طالب من تعليقاتو الحالية (للإشعارات السريعة)
 * 3) بتركّب مؤقّتين: تنظيف ليلي (dailyCleanup) + تفريغ كاش التعليقات لما تعدّل تبويب comments يدوياً (onSheetEdit)
 */
function setupV3() {
  ensureCols_('users', ['notif_seen_at', 'terms_version', 'terms_accepted_at', 'places', 'name_changed_at']);
  ensureCols_('otp', ['fails', 'fails_since']);
  const n = backfillPlaces_();
  console.log('places: تعبّى لـ ' + n + ' طالب');

  const have = ScriptApp.getProjectTriggers().map(function (t) { return t.getHandlerFunction(); });
  if (have.indexOf('dailyCleanup') < 0) {
    ScriptApp.newTrigger('dailyCleanup').timeBased().everyDays(1).atHour(4).create();
    console.log('مؤقّت dailyCleanup: انضاف (كل يوم الساعة 4 الصبح تقريباً)');
  }
  if (have.indexOf('onSheetEdit') < 0) {
    ScriptApp.newTrigger('onSheetEdit').forSpreadsheet(props_().getProperty('SHEET_ID')).onEdit().create();
    console.log('مؤقّت onSheetEdit: انضاف');
  }
  bumpCommentsCache_();
  console.log('تمّ ✔');
}

/* ============ الإجراءات ============ */

function requestOtp_(req) {
  const email = normEmail_(req.email);
  if (!email) return { ok: false, error: 'INVALID_EMAIL' };

  const user = findUser_(email);
  if (user && user.obj.status === 'blocked') return { ok: false, error: 'BLOCKED' };

  const otp = table_('otp');
  const idx = findRow_(otp, 'email', email);
  if (idx >= 0) {
    const created = toDate_(otp.rows[idx][otp.col('created_at')]);
    if (created) {
      const wait = CFG.OTP_COOLDOWN_SEC - Math.floor((Date.now() - created.getTime()) / 1000);
      if (wait > 0) return { ok: false, error: 'COOLDOWN', wait: wait };
    }
  }

  // حد عام لكل الموقع بالساعة: حتى ما حدا يستهلك حصة الإيميل اليومية بطلب رموز لإيميلات كتيرة
  const rate = otpRate_();
  if (rate.n >= CFG.OTP_MAX_PER_HOUR) return { ok: false, error: 'MAIL_QUOTA' };
  if (MailApp.getRemainingDailyQuota() < 1) return { ok: false, error: 'MAIL_QUOTA' };

  const code = genCode_();
  const now = new Date();
  const rec = {
    email: email,
    code_hash: hash_(email + '|' + code),
    created_at: iso_(now),
    expires_at: iso_(new Date(now.getTime() + CFG.OTP_TTL_MIN * 60000)),
    attempts: 0,
    used: 'FALSE'
    // fails و fails_since ما منلمسهم هون: بيضلّوا محسوبين حتى لو طلب رمز جديد
  };
  if (idx >= 0) updateRow_(otp, idx, rec); else appendRow_(otp, rec);

  MailApp.sendEmail({
    to: email,
    subject: 'رمز التحقق: ' + code + ' — ' + CFG.SENDER_NAME,
    name: CFG.SENDER_NAME,
    htmlBody: otpMail_(code)
  });
  otpRateSave_(rate.h, rate.n + 1);
  return { ok: true };
}

function verifyOtp_(req) {
  const email = normEmail_(req.email);
  const code = String(req.code || '').replace(/\D/g, '');
  if (!email || code.length !== 6) return { ok: false, error: 'INVALID_CODE' };

  const otp = table_('otp');
  const idx = findRow_(otp, 'email', email);
  if (idx < 0) return { ok: false, error: 'INVALID_CODE' };
  const r = otp.rows[idx];
  if (isTrue_(r[otp.col('used')])) return { ok: false, error: 'INVALID_CODE' };
  if (new Date() > toDate_(r[otp.col('expires_at')])) return { ok: false, error: 'EXPIRED' };

  const attempts = Number(r[otp.col('attempts')]) || 0;
  if (attempts >= CFG.OTP_MAX_ATTEMPTS) return { ok: false, error: 'TOO_MANY' };

  // عدّاد المحاولات الخاطئة لهالإيميل خلال آخر ساعة (ما بيتصفّر لما يطلب رمز جديد)
  const now = new Date();
  const failsSince = otp.col('fails_since') >= 0 ? toDate_(r[otp.col('fails_since')]) : null;
  const windowOpen = failsSince && now.getTime() - failsSince.getTime() < 3600000;
  const fails = windowOpen ? (Number(r[otp.col('fails')]) || 0) : 0;
  if (fails >= CFG.OTP_MAX_FAILS_HOUR) return { ok: false, error: 'TOO_MANY' };

  if (hash_(email + '|' + code) !== String(r[otp.col('code_hash')])) {
    updateRow_(otp, idx, {
      attempts: attempts + 1,
      fails: fails + 1,
      fails_since: windowOpen ? iso_(failsSince) : iso_(now)
    });
    const left = Math.min(CFG.OTP_MAX_ATTEMPTS - attempts - 1, CFG.OTP_MAX_FAILS_HOUR - fails - 1);
    return { ok: false, error: 'INVALID_CODE', left: Math.max(left, 0) };
  }

  // الرمز صحيح — نتأكد من المستخدم قبل ما نستهلك الرمز
  let user = findUser_(email);
  // الاسم بينطلب بس أول مرة (أو إذا الحساب موجود بس اسمو فاضي). بعدها ما بينطلب أبداً.
  const name = cleanName_(req.name).slice(0, 80);
  const needName = !user || !String(user.obj.name || '').trim();
  if (needName && !name) return { ok: false, error: 'NAME_REQUIRED' };
  if (needName && hasBanned_(name)) return { ok: false, error: 'INVALID_NAME' };
  if (user && user.obj.status === 'blocked') return { ok: false, error: 'BLOCKED' };

  updateRow_(otp, idx, { used: 'TRUE', fails: 0 });
  const u = upsertLoggedInUser_(email, name, 'otp');
  if (u.isNew) onNewUser_(email, req.ref);
  return newSession_(u, req.device);
}

function googleLogin_(req) {
  const clientId = props_().getProperty('GOOGLE_CLIENT_ID');
  if (!clientId) return { ok: false, error: 'GOOGLE_DISABLED' };
  if (!req.idToken) return { ok: false, error: 'INVALID_TOKEN' };

  const res = UrlFetchApp.fetch(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(req.idToken),
    { muteHttpExceptions: true }
  );
  if (res.getResponseCode() !== 200) return { ok: false, error: 'INVALID_TOKEN' };
  const p = JSON.parse(res.getContentText());
  const valid = p.aud === clientId &&
                String(p.email_verified) === 'true' &&
                Number(p.exp) * 1000 > Date.now() &&
                (p.iss === 'accounts.google.com' || p.iss === 'https://accounts.google.com');
  if (!valid) return { ok: false, error: 'INVALID_TOKEN' };

  const email = normEmail_(p.email);
  const existing = findUser_(email);
  if (existing && existing.obj.status === 'blocked') return { ok: false, error: 'BLOCKED' };

  const u = upsertLoggedInUser_(email, cleanName_(p.name).slice(0, 80), 'google');
  if (u.isNew) onNewUser_(email, req.ref);
  return newSession_(u, req.device);
}

/**
 * التحقق من الجلسة (داخلي). بيرجّع { ok, email, user:{idx,obj} } أو { ok:false, error }.
 * القراءة بدون قفل. التجديد (مرة باليوم لكل جلسة) بياخد القفل، وإذا القفل مشغول منأجّلو لطلب تاني.
 */
function sessionUser_(req) {
  if (!req.token) return { ok: false, error: 'NO_SESSION' };
  const tokenHash = hash_(String(req.token));
  const ses = table_('sessions');
  const idx = findRow_(ses, 'token_hash', tokenHash);
  if (idx < 0) return { ok: false, error: 'NO_SESSION' };
  const r = ses.rows[idx];
  if (isTrue_(r[ses.col('revoked')])) return { ok: false, error: 'NO_SESSION' };
  const expires = toDate_(r[ses.col('expires_at')]);
  if (!expires || new Date() > expires) return { ok: false, error: 'EXPIRED' };

  const email = String(r[ses.col('email')]);
  const user = findUser_(email);
  if (!user || user.obj.status !== 'active') return { ok: false, error: 'BLOCKED' };

  // تجديد تدريجي: كل ما استخدم الموقع، بتتمدد الجلسة (كتابة وحدة باليوم بالكتير)
  const lastUsed = toDate_(r[ses.col('last_used')]);
  if (!lastUsed || Date.now() - lastUsed.getTime() > CFG.RENEW_AFTER_HOURS * 3600000) {
    try {
      withLock_(function () {
        const t = table_('sessions');                 // نقرأ من جديد جوّا القفل (أرقام الصفوف ممكن تكون تغيّرت)
        const i = findRow_(t, 'token_hash', tokenHash);
        if (i < 0) return;
        const now = new Date();
        updateRow_(t, i, {
          last_used: iso_(now),
          expires_at: iso_(new Date(now.getTime() + CFG.SESSION_DAYS * 86400000))
        });
      }, 3000);
    } catch (e) { /* القفل مشغول: مش مشكلة، بنجدّد بطلب جاي */ }
  }
  return { ok: true, email: email, user: user };
}

function checkSession_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  return { ok: true, user: { email: s.email, name: s.user.obj.name, terms: termsOf_(s.user),
                             name_locked: !!String(s.user.obj.name_changed_at || '').trim() } };
}

function logout_(req) {
  if (!req.token) return { ok: true };
  const ses = table_('sessions');
  const idx = findRow_(ses, 'token_hash', hash_(String(req.token)));
  if (idx >= 0) updateRow_(ses, idx, { revoked: 'TRUE' });
  return { ok: true };
}

function getCourses_(req) {
  const s = checkSession_(req);
  if (!s.ok) return s;
  const t = table_('courses');
  const list = t.rows
    .map(function (r) { return rowObj_(t, r); })
    .filter(function (o) { return String(o.status) === 'active' && o.title && o.url; })
    .sort(function (a, b) { return (Number(a.order) || 999) - (Number(b.order) || 999); })
    .map(function (o) {
      return { course_id: String(o.course_id), code: String(o.code), title: String(o.title),
               description: String(o.description || ''), url: String(o.url) };
    });
  return { ok: true, courses: list };
}

/* ============ الموافقة على الخصوصية وشروط الاستخدام ============ */

/** آخر نسخة وافق عليها الطالب (0 = ما وافق بعد). لو العمود مو موجود لسا بترجع 0 */
function termsOf_(user) {
  return user ? (Number(user.obj.terms_version) || 0) : 0;
}

/** بتضيف الأعمدة الناقصة لآخر الصف الأول (بدون ما تلمس الموجود) */
function ensureCols_(sheetName, cols) {
  const sh = ss_().getSheetByName(sheetName);
  if (!sh) return;
  const head = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0].map(String);
  cols.forEach(function (c) {
    if (head.indexOf(c) < 0) { sh.getRange(1, head.length + 1).setValue(c); head.push(c); }
  });
}

/** بتنشئ التبويب مع عناوينو إذا مو موجود */
function ensureSheet_(name, cols) {
  let sh = ss_().getSheetByName(name);
  if (!sh) { sh = ss_().insertSheet(name); sh.getRange(1, 1, 1, cols.length).setValues([cols]); }
  return sh;
}

function acceptTerms_(req) {
  const s = checkSession_(req);
  if (!s.ok) return s;
  const v = Math.floor(Number(req.version));
  if (!(v >= 1 && v <= 1000)) return { ok: false, error: 'BAD_REQUEST' };

  ensureCols_('users', ['terms_version', 'terms_accepted_at']);          // أول مرة بس: بتنضاف تلقائياً
  const users = table_('users');
  const idx = findEmailRow_(users, s.user.email);
  if (idx < 0) return { ok: false, error: 'NO_SESSION' };
  const cur = Number(users.rows[idx][users.col('terms_version')]) || 0;
  const now = iso_(new Date());
  if (v > cur) updateRow_(users, idx, { terms_version: v, terms_accepted_at: now });

  // سجل كل موافقة (بيضل فيه تاريخ كل نسخة وافق عليها)
  ensureSheet_('consents', ['consent_id', 'user_id', 'version', 'accepted_at', 'device']);
  appendRow_(sheetHead_('consents'), {
    consent_id: 'k_' + Utilities.getUuid().slice(0, 8),
    user_id: String(users.rows[idx][users.col('user_id')]),
    version: v,
    accepted_at: now,
    device: String(req.device || '').slice(0, 120)
  });
  return { ok: true, terms: Math.max(v, cur) };
}

/* ============ الحساب: تعديل الاسم + حذف الحساب ============ */

const DELETED_NAME_ = 'حساب محذوف';

function updateName_(req) {
  const s = checkSession_(req);
  if (!s.ok) return s;
  const name = cleanName_(req.name);
  if (name.length < 2 || name.length > 40 || hasBanned_(name)) return { ok: false, error: 'INVALID_NAME' };

  ensureCols_('users', ['name_changed_at']);
  const users = table_('users');
  const idx = findEmailRow_(users, s.user.email);
  if (idx < 0) return { ok: false, error: 'NO_SESSION' };
  const row = rowObj_(users, users.rows[idx]);
  const userId = String(row.user_id);
  const oldName = String(row.name || '').trim();

  // تغيير الاسم مسموح مرة وحدة بس (الإدارة بتقدر تفتحو من جديد بمسح خلية name_changed_at)
  if (String(row.name_changed_at || '').trim()) return { ok: false, error: 'NAME_LOCKED' };
  if (name === oldName) return { ok: true, user: { email: s.user.email, name: name }, name_locked: false };

  const patch = { name: name };
  if (oldName) patch.name_changed_at = iso_(new Date());   // إذا كان فاضي، تعبايتو ما بتنحسب تغيير
  updateRow_(users, idx, patch);
  renameCommentsAuthor_(userId, firstName_(name));   // التعليقات بتعرض الاسم الأول بس (متل addComment_)، فنحدّثها بنفس الطريقة
  return { ok: true, user: { email: s.user.email, name: name }, name_locked: !!patch.name_changed_at };
}

function deleteAccount_(req) {
  const s = checkSession_(req);
  if (!s.ok) return s;
  const email = String(s.user.email).trim().toLowerCase();

  const users = table_('users');
  const uIdx = findEmailRow_(users, email);
  const userId = uIdx >= 0 ? String(users.rows[uIdx][users.col('user_id')]) : '';

  anonymizeComments_(userId);                                    // التعليقات بتضل بدون اسم (حتى ما تنكسر الردود)
  ['placement_survey', 'placement_results'].forEach(function (n) {
    deleteRowsWhere_(n, function (o) {
      return String(o.email).trim().toLowerCase() === email || (userId && String(o.user_id) === userId);
    });
  });
  if (userId) deleteRowsWhere_('consents', function (o) { return String(o.user_id) === userId; });
  if (userId && ss_().getSheetByName('stars_ledger')) {
    // حركات النجوم بتنمسح، إلا "بصمة" الترحيب والدعوة (wh:/rh: بدون رقم الطالب) حتى ما ينعاد كسبها بحساب جديد بنفس الإيميل
    deleteRowsWhere_('stars_ledger', function (o) { return String(o.user_id) === userId && !/^(wh|rh):/.test(String(o.ref)); });
    const led = table_('stars_ledger');
    led.rows.forEach(function (r, i) {
      if (String(r[led.col('user_id')]) === userId) updateRow_(led, i, { user_id: '', note: 'حساب محذوف' });
    });
  }
  if (userId && deleteRowsWhere_('votes', function (o) { return String(o.user_id) === userId; })) bumpCommentsCache_();
  deleteRowsWhere_('otp', function (o) { return String(o.email).trim().toLowerCase() === email; });
  deleteRowsWhere_('sessions', function (o) { return String(o.email).trim().toLowerCase() === email; });
  deleteRowsWhere_('users', function (o) { return String(o.email).trim().toLowerCase() === email; });   // آخر شي
  return { ok: true };
}

function renameCommentsAuthor_(userId, name) {
  if (!userId || !ss_().getSheetByName('comments')) return;
  const t = table_('comments');
  const cu = t.col('user_id'), cn = t.col('name');
  if (cu < 0 || cn < 0 || !t.rows.length) return;
  let changed = false;
  const col = t.rows.map(function (r) {
    if (String(r[cu]) === userId && String(r[cn]) !== name) { changed = true; return [safeCell_(name)]; }
    return [safeCell_(r[cn])];
  });
  if (changed) {
    t.sh.getRange(2, cn + 1, col.length, 1).setValues(col);
    bumpCommentsCache_();
  }
}

function anonymizeComments_(userId) {
  if (!userId || !ss_().getSheetByName('comments')) return;
  const t = table_('comments');
  const cu = t.col('user_id'), cn = t.col('name');
  if (cu < 0 || cn < 0 || !t.rows.length) return;
  let changed = false;
  const ids = [], names = [];
  t.rows.forEach(function (r) {
    if (String(r[cu]) === userId) { changed = true; ids.push(['']); names.push([DELETED_NAME_]); }
    else { ids.push([safeCell_(r[cu])]); names.push([safeCell_(r[cn])]); }
  });
  if (changed) {
    t.sh.getRange(2, cu + 1, ids.length, 1).setValues(ids);
    t.sh.getRange(2, cn + 1, names.length, 1).setValues(names);
    bumpCommentsCache_();
  }
}

/** بيمسح كل صف بيحقق الشرط (بكتابة وحدة بدل مسح صف صف). ما بيعمل شي إذا التبويب مو موجود */
function deleteRowsWhere_(sheetName, pred) {
  if (!ss_().getSheetByName(sheetName)) return 0;
  const t = table_(sheetName);
  return keepRows_(t, function (r) { return !pred(rowObj_(t, r)); });
}

/* ============ التنظيف الليلي (مؤقّت dailyCleanup) ============ */

/** بيشتغل لحالو كل ليلة (setupV3 بتركّبو). فيك تشغّلو يدوياً كمان. */
function dailyCleanup() {
  withLock_(function () {
    const now = Date.now();

    // 1) الجلسات المنتهية أو الملغاة
    const ses = table_('sessions');
    const sDel = keepRows_(ses, function (r) {
      const exp = toDate_(r[ses.col('expires_at')]);
      return !isTrue_(r[ses.col('revoked')]) && exp && exp.getTime() > now;
    });

    // 2) رموز التحقق القديمة (منخلي يلي إلها عدّاد محاولات خاطئة شغّال خلال الساعة الأخيرة)
    const otp = table_('otp');
    const fsCol = otp.col('fails_since');
    const oDel = keepRows_(otp, function (r) {
      const c = toDate_(r[otp.col('created_at')]);
      const f = fsCol >= 0 ? toDate_(r[fsCol]) : null;
      return (c && now - c.getTime() < CFG.OTP_KEEP_HOURS * 3600000) || (f && now - f.getTime() < 3600000);
    });

    // 3) أرشفة النقاشات القديمة
    const aMoved = archiveOldComments_(now - CFG.ARCHIVE_COMMENTS_DAYS * 86400000);

    console.log('تنظيف: جلسات ' + sDel + ' · رموز ' + oDel + ' · تعليقات مؤرشفة ' + aMoved);
  }, 60000);
}

/** نقاش (تعليق + ردوده) آخر نشاط فيه قبل cutoff → بينتقل لتبويب comments_archive */
function archiveOldComments_(cutoff) {
  if (!ss_().getSheetByName('comments')) return 0;
  const t = table_('comments');
  if (!t.rows.length) return 0;
  const cId = t.col('comment_id'), cPar = t.col('parent_id'), cAt = t.col('created_at');

  const latest = {};   // آخر نشاط لكل نقاش (حسب التعليق الأساسي)
  t.rows.forEach(function (r) {
    const root = String(r[cPar] || '') || String(r[cId]);
    const d = toDate_(r[cAt]); const ms = d ? d.getTime() : 0;
    if (!(root in latest) || ms > latest[root]) latest[root] = ms;
  });
  const old = function (r) {
    const root = String(r[cPar] || '') || String(r[cId]);
    return latest[root] < cutoff;
  };
  const moving = t.rows.filter(old);
  if (!moving.length) return 0;

  const arch = ensureSheet_('comments_archive', t.head);
  arch.getRange(arch.getLastRow() + 1, 1, moving.length, t.head.length)
    .setValues(moving.map(function (r) { return r.map(safeCell_); }));
  keepRows_(t, function (r) { return !old(r); });
  bumpCommentsCache_();
  return moving.length;
}

/**
 * لما تعدّل الشيت بإيدك:
 *  - تبويب comments (تخفي جواب مثلاً): الكاش بيتفرّغ، ونجوم الأجوبة اللي انخفت بتنسحب.
 *  - star_rules / banned_words / courses: الكاش تبعهم بيتفرّغ فوراً.
 */
function onSheetEdit(e) {
  try {
    if (!e || !e.range) return;
    const sh = e.range.getSheet();
    const name = sh.getName();
    if (name === 'comments') {
      const head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
      const cs = head.indexOf('status'), ci = head.indexOf('comment_id'), cp = head.indexOf('parent_id');
      const r0 = Math.max(2, e.range.getRow()), n = e.range.getLastRow() - r0 + 1;
      if (n > 0 && cs >= 0 && ci >= 0 && cp >= 0) {
        const ids = sh.getRange(r0, 1, n, head.length).getValues()
          .filter(function (v) { return v[cp] && v[ci] && String(v[cs]) !== 'visible'; })
          .map(function (v) { return String(v[ci]); });
        if (ids.length) withLock_(function () { onCommentsHidden_(ids); }, 30000);
      }
      bumpCommentsCache_();
    } else if (name === 'star_rules' || name === 'banned_words' || name === 'courses') {
      clearStarsCaches_();
    }
  } catch (err) { console.error(err); }
}

/** تفريغ كاش التعليقات يدوياً (شغّلها من المحرر إذا عدّلت الشيت بطريقة ما التقطها onSheetEdit) */
function clearCommentsCache() { bumpCommentsCache_(); console.log('انفرّغ كاش التعليقات ✔'); }

/* ============ مساعدات المستخدمين والجلسات ============ */

function upsertLoggedInUser_(email, name, method) {
  const users = table_('users');
  const idx = findEmailRow_(users, email);
  const nowIso = iso_(new Date());
  if (idx >= 0) {
    const patch = { last_login: nowIso };
    if (!users.rows[idx][users.col('verified_at')]) patch.verified_at = nowIso;
    if (!users.rows[idx][users.col('name')] && name) patch.name = name;
    updateRow_(users, idx, patch);
    const o = rowObj_(users, users.rows[idx]);
    return { email: email, name: patch.name || o.name };
  }
  appendRow_(users, {
    user_id: 'u_' + Utilities.getUuid().slice(0, 8),
    email: email,
    name: name,
    auth_method: method,
    status: 'active',
    created_at: nowIso,
    verified_at: nowIso,
    last_login: nowIso
  });
  return { email: email, name: name, isNew: true };
}

function newSession_(user, device) {
  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  const now = new Date();
  const expires = new Date(now.getTime() + CFG.SESSION_DAYS * 86400000);
  appendRow_(sheetHead_('sessions'), {
    token_hash: hash_(token),
    email: user.email,
    created_at: iso_(now),
    expires_at: iso_(expires),
    last_used: iso_(now),
    device: String(device || '').slice(0, 120),
    revoked: 'FALSE'
  });
  return { ok: true, token: token, user: { email: user.email, name: user.name, terms: termsOf_(findUser_(user.email)) }, expires_at: iso_(expires) };
}

function findUser_(email) {
  const t = table_('users');
  const i = findEmailRow_(t, email);
  return i < 0 ? null : { idx: i, obj: rowObj_(t, t.rows[i]) };
}

/** بحث عن الإيميل بدون حساسية لحالة الأحرف أو المسافات (لو انكتب يدوياً بالشيت) */
function findEmailRow_(t, email) {
  const c = t.col('email');
  const e = String(email).trim().toLowerCase();
  for (let i = 0; i < t.rows.length; i++) {
    if (String(t.rows[i][c]).trim().toLowerCase() === e) return i;
  }
  return -1;
}

/** عدّاد إيميلات رمز التحقق بالساعة الحالية (محفوظ بـ Script Properties) */
function otpRate_() {
  const h = Math.floor(Date.now() / 3600000);
  let o = null;
  try { o = JSON.parse(props_().getProperty('OTP_RATE') || 'null'); } catch (e) {}
  return { h: h, n: (o && o.h === h) ? (Number(o.n) || 0) : 0 };
}
function otpRateSave_(h, n) { props_().setProperty('OTP_RATE', JSON.stringify({ h: h, n: n })); }

/* ============ مساعدات الشيت ============ */

function props_() { return PropertiesService.getScriptProperties(); }
let SS_CACHE_ = null;
function ss_() {
  if (!SS_CACHE_) SS_CACHE_ = SpreadsheetApp.openById(props_().getProperty('SHEET_ID'));
  return SS_CACHE_;
}

/** بيقرأ التبويب كامل (العناوين + كل الصفوف) */
function table_(name) {
  const sh = ss_().getSheetByName(name);
  const lastCol = sh.getLastColumn();
  const head = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
  const lastRow = sh.getLastRow();
  const rows = lastRow > 1 ? sh.getRange(2, 1, lastRow - 1, lastCol).getValues() : [];
  return { sh: sh, head: head, rows: rows, col: function (n) { return head.indexOf(n); } };
}

/** بيقرأ العناوين بس (للإضافة بدون ما نقرأ كل الصفوف) */
function sheetHead_(name) {
  const sh = ss_().getSheetByName(name);
  const head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
  return { sh: sh, head: head, rows: [], col: function (n) { return head.indexOf(n); } };
}

function rowObj_(t, row) {
  const o = {};
  t.head.forEach(function (h, i) { o[h] = row[i]; });
  return o;
}

function findRow_(t, colName, value) {
  const c = t.col(colName);
  for (let i = 0; i < t.rows.length; i++) {
    if (String(t.rows[i][c]) === String(value)) return i;
  }
  return -1;
}

function appendRow_(t, obj) {
  const row = t.head.map(function (h) { return obj[h] === undefined ? '' : safeCell_(obj[h]); });
  t.sh.appendRow(row);
}

/** idx = موضع الصف داخل t.rows (0-based) */
function updateRow_(t, idx, patch) {
  Object.keys(patch).forEach(function (k) {
    const c = t.col(k);
    if (c >= 0) {
      t.sh.getRange(idx + 2, c + 1).setValue(safeCell_(patch[k]));
      t.rows[idx][c] = patch[k];
    }
  });
}

/**
 * بيخلّي بس الصفوف يلي keep(row) بترجع true، بكتابة وحدة.
 * الترتيب مقصود: منكتب الصفوف الباقية فوق أول، بعدين منفضّي الذيل،
 * فأي قراءة بالنص (بدون قفل) بتلاقي الصفوف الباقية دايماً — ما في لحظة بيكون فيها التبويب فاضي.
 * بيرجّع عدد الصفوف المحذوفة.
 */
function keepRows_(t, keep) {
  const kept = t.rows.filter(keep);
  const removed = t.rows.length - kept.length;
  if (!removed) return 0;
  const w = t.head.length;
  if (kept.length) t.sh.getRange(2, 1, kept.length, w).setValues(kept.map(function (r) { return r.map(safeCell_); }));
  t.sh.getRange(2 + kept.length, 1, removed, w).clearContent();
  t.rows = kept;
  return removed;
}

/**
 * حماية من حقن الصيغ: أي نص بيبلّش بـ = + - @ بينكتب كنص (مع ' بالبداية، وهي ما بتظهر بالخلية).
 * بدونها، طالب بيكتب اسمه =IMPORTDATA(...) كان ممكن يشغّل صيغة بالشيت تبعك.
 */
function safeCell_(v) {
  return (typeof v === 'string' && /^[=+\-@]/.test(v)) ? "'" + v : v;
}

/** تنظيف الاسم: مسافات زيادة وأحرف تحكّم */
function cleanName_(v) {
  return String(v || '').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim();
}

/* ============ أدوات عامة ============ */

/**
 * قفل عام للكتابة. قابل للتداخل: إذا كنا أصلاً جوّا القفل، منكمّل بدون ما ننطر.
 * waitMs اختياري (الافتراضي 15 ثانية). إذا ما قدر ياخدو بيرمي خطأ.
 */
let LOCK_DEPTH_ = 0;
function withLock_(fn, waitMs) {
  if (LOCK_DEPTH_ > 0) {
    LOCK_DEPTH_++;
    try { return fn(); } finally { LOCK_DEPTH_--; }
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(waitMs || 15000);
  LOCK_DEPTH_ = 1;
  try { return fn(); } finally { LOCK_DEPTH_ = 0; lock.releaseLock(); }
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function normEmail_(v) {
  const e = String(v || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 120 ? e : '';
}

function hash_(v) {
  const pepper = props_().getProperty('PEPPER') || '';
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, pepper + '|' + v, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}

function genCode_() {
  const b = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Utilities.getUuid() + Utilities.getUuid());
  const n = (((b[0] & 0xff) << 24) | ((b[1] & 0xff) << 16) | ((b[2] & 0xff) << 8) | (b[3] & 0xff)) >>> 0;
  return ('000000' + (n % 1000000)).slice(-6);
}

function iso_(d) { return Utilities.formatDate(d, 'UTC', "yyyy-MM-dd'T'HH:mm:ss'Z'"); }
function toDate_(v) { if (v instanceof Date) return v; if (v === '' || v === null || v === undefined) return null; const d = new Date(String(v)); return isNaN(d) ? null : d; }
function isTrue_(v) { return v === true || String(v).toUpperCase() === 'TRUE'; }

function otpMail_(code) {
  return '<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;max-width:420px;margin:auto;padding:24px;border:1px solid #E3E7F0;border-radius:14px;">' +
    '<h2 style="margin:0 0 8px;color:#0F1C2E;">رمز التحقق</h2>' +
    '<p style="color:#5B6478;margin:0 0 18px;">استخدم هالرمز لتسجيل الدخول إلى منصة ' + CFG.SENDER_NAME + ':</p>' +
    '<div style="font-size:34px;font-weight:bold;letter-spacing:8px;text-align:center;background:#F5F7FB;border-radius:10px;padding:14px;color:#0F1C2E;">' + code + '</div>' +
    '<p style="color:#5B6478;font-size:13px;margin:18px 0 0;">الرمز صالح لمدة ' + CFG.OTP_TTL_MIN + ' دقائق. إذا ما طلبته أنت، تجاهل هالرسالة.</p>' +
    '</div>';
}
