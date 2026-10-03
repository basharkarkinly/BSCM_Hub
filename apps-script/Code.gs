/**
 * Support Channel — Auth backend (Google Apps Script)
 * Web App: Execute as ME / Who has access: Anyone
 *
 * Script Properties required (Project Settings > Script properties):
 *   SHEET_ID          معرّف ملف Google Sheet (الجزء بين /d/ و /edit في الرابط)
 *   PEPPER            نص عشوائي طويل (تخلقو انت مرة وحدة وما تغيّروا بعدين)
 *   GOOGLE_CLIENT_ID  (اختياري الآن) Client ID لتسجيل الدخول بحساب غوغل
 */

const CFG = {
  OTP_TTL_MIN: 10,
  OTP_MAX_ATTEMPTS: 5,
  OTP_COOLDOWN_SEC: 60,
  SESSION_DAYS: 90,
  RENEW_AFTER_HOURS: 24,
  SENDER_NAME: 'Support Channel'
};

/* ============ نقاط الدخول ============ */

function doGet() {
  return json_({ ok: true, service: 'support-channel-auth' });
}

function doPost(e) {
  try {
    const req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    switch (req.action) {
      case 'requestOtp':   return json_(withLock_(() => requestOtp_(req)));
      case 'verifyOtp':    return json_(withLock_(() => verifyOtp_(req)));
      case 'googleLogin':  return json_(withLock_(() => googleLogin_(req)));
      case 'checkSession': return json_(withLock_(() => checkSession_(req)));
      case 'logout':       return json_(withLock_(() => logout_(req)));
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
  console.log('OK — الصلاحيات تمام');
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
  };
  if (idx >= 0) updateRow_(otp, idx, rec); else appendRow_(otp, rec);

  MailApp.sendEmail({
    to: email,
    subject: 'رمز التحقق: ' + code + ' — ' + CFG.SENDER_NAME,
    name: CFG.SENDER_NAME,
    htmlBody: otpMail_(code)
  });
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

  if (hash_(email + '|' + code) !== String(r[otp.col('code_hash')])) {
    updateRow_(otp, idx, { attempts: attempts + 1 });
    return { ok: false, error: 'INVALID_CODE', left: CFG.OTP_MAX_ATTEMPTS - attempts - 1 };
  }

  // الرمز صحيح — نتأكد من المستخدم قبل ما نستهلك الرمز
  let user = findUser_(email);
  const name = String(req.name || '').trim().slice(0, 80);
  if (!user && !name) return { ok: false, error: 'NAME_REQUIRED' };
  if (user && user.obj.status === 'blocked') return { ok: false, error: 'BLOCKED' };

  updateRow_(otp, idx, { used: 'TRUE' });
  const u = upsertLoggedInUser_(email, name, 'otp');
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

  const u = upsertLoggedInUser_(email, String(p.name || '').slice(0, 80), 'google');
  return newSession_(u, req.device);
}

function checkSession_(req) {
  if (!req.token) return { ok: false, error: 'NO_SESSION' };
  const ses = table_('sessions');
  const idx = findRow_(ses, 'token_hash', hash_(String(req.token)));
  if (idx < 0) return { ok: false, error: 'NO_SESSION' };
  const r = ses.rows[idx];
  if (isTrue_(r[ses.col('revoked')])) return { ok: false, error: 'NO_SESSION' };
  const expires = toDate_(r[ses.col('expires_at')]);
  if (!expires || new Date() > expires) return { ok: false, error: 'EXPIRED' };

  const email = String(r[ses.col('email')]);
  const user = findUser_(email);
  if (!user || user.obj.status !== 'active') return { ok: false, error: 'BLOCKED' };

  // تجديد تدريجي: كل ما استخدم الموقع، بتتمدد الجلسة (بدون كتابة زائدة)
  const lastUsed = toDate_(r[ses.col('last_used')]);
  if (!lastUsed || Date.now() - lastUsed.getTime() > CFG.RENEW_AFTER_HOURS * 3600000) {
    const now = new Date();
    updateRow_(ses, idx, {
      last_used: iso_(now),
      expires_at: iso_(new Date(now.getTime() + CFG.SESSION_DAYS * 86400000))
    });
  }
  return { ok: true, user: { email: email, name: user.obj.name } };
}

function logout_(req) {
  if (!req.token) return { ok: true };
  const ses = table_('sessions');
  const idx = findRow_(ses, 'token_hash', hash_(String(req.token)));
  if (idx >= 0) updateRow_(ses, idx, { revoked: 'TRUE' });
  return { ok: true };
}

/* ============ مساعدات المستخدمين والجلسات ============ */

function upsertLoggedInUser_(email, name, method) {
  const users = table_('users');
  const idx = findRow_(users, 'email', email);
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
  return { email: email, name: name };
}

function newSession_(user, device) {
  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  const now = new Date();
  const expires = new Date(now.getTime() + CFG.SESSION_DAYS * 86400000);
  appendRow_(table_('sessions'), {
    token_hash: hash_(token),
    email: user.email,
    created_at: iso_(now),
    expires_at: iso_(expires),
    last_used: iso_(now),
    device: String(device || '').slice(0, 120),
    revoked: 'FALSE'
  });
  return { ok: true, token: token, user: { email: user.email, name: user.name }, expires_at: iso_(expires) };
}

function findUser_(email) {
  const t = table_('users');
  const i = findRow_(t, 'email', email);
  return i < 0 ? null : { idx: i, obj: rowObj_(t, t.rows[i]) };
}

/* ============ مساعدات الشيت ============ */

function props_() { return PropertiesService.getScriptProperties(); }
function ss_() { return SpreadsheetApp.openById(props_().getProperty('SHEET_ID')); }

function table_(name) {
  const sh = ss_().getSheetByName(name);
  const lastCol = sh.getLastColumn();
  const head = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
  const lastRow = sh.getLastRow();
  const rows = lastRow > 1 ? sh.getRange(2, 1, lastRow - 1, lastCol).getValues() : [];
  return { sh: sh, head: head, rows: rows, col: function (n) { return head.indexOf(n); } };
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
  const row = t.head.map(function (h) { return obj[h] === undefined ? '' : obj[h]; });
  t.sh.appendRow(row);
}

/** idx = موضع الصف داخل t.rows (0-based) */
function updateRow_(t, idx, patch) {
  Object.keys(patch).forEach(function (k) {
    const c = t.col(k);
    if (c >= 0) {
      t.sh.getRange(idx + 2, c + 1).setValue(patch[k]);
      t.rows[idx][c] = patch[k];
    }
  });
}

/* ============ أدوات عامة ============ */

function withLock_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try { return fn(); } finally { lock.releaseLock(); }
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
function toDate_(v) { if (v instanceof Date) return v; const d = new Date(String(v)); return isNaN(d) ? null : d; }
function isTrue_(v) { return v === true || String(v).toUpperCase() === 'TRUE'; }

function otpMail_(code) {
  return '<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;max-width:420px;margin:auto;padding:24px;border:1px solid #E3E7F0;border-radius:14px;">' +
    '<h2 style="margin:0 0 8px;color:#0F1C2E;">رمز التحقق</h2>' +
    '<p style="color:#5B6478;margin:0 0 18px;">استخدم هالرمز لتسجيل الدخول إلى منصة ' + CFG.SENDER_NAME + ':</p>' +
    '<div style="font-size:34px;font-weight:bold;letter-spacing:8px;text-align:center;background:#F5F7FB;border-radius:10px;padding:14px;color:#0F1C2E;">' + code + '</div>' +
    '<p style="color:#5B6478;font-size:13px;margin:18px 0 0;">الرمز صالح لمدة ' + CFG.OTP_TTL_MIN + ' دقائق. إذا ما طلبته أنت، تجاهل هالرسالة.</p>' +
    '</div>';
}
