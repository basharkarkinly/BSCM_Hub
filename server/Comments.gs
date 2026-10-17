/**
 * Support Channel — التعليقات والإشعارات
 * ملف مستقل بجانب Code.gs (Apps Script بيشاركهم نفس المحيط).
 *
 * التبويبات المستخدمة:
 *   comments         : comment_id, course_id, chapter_id, user_id, name, text, parent_id, created_at, status
 *   comments_archive : نفس الأعمدة (النقاشات القديمة، بينقلها التنظيف الليلي)
 *   announcements    : ann_id, title, body, created_at, status
 *   ticker           : tick_id, text, created_at, expires_at, status   (شريط الأخبار)
 *   users            : + notif_seen_at, places
 *
 * الكاش (النسخة 3):
 *   تعليقات كل (مادة|فصل) محفوظة بـ CacheService لـ 6 ساعات. القراءة من الشيت بتصير مرة وحدة
 *   (وبتعبّي كل الأماكن دفعة وحدة)، والإضافة والحذف بيحدّثوا الكاش مباشرة.
 *   أي تعديل يدوي على تبويب comments → onSheetEdit بيفرّغ الكاش (أو شغّل clearCommentsCache).
 *
 *   users.places = {"BMN401|3":"<تاريخ أول تعليق>", ...} : الأماكن يلي الطالب علّق فيها،
 *   حتى الإشعارات تفتح بس هالأماكن بدل ما تمرق على كل التعليقات.
 */

const LIM = {
  MAX_LEN: 500,        // أقصى طول للتعليق
  PER_PLACE: 3,        // أقصى عدد تعليقات للمستخدم بنفس المكان (مادة/فصل) — الردود تُحسب
  COOLDOWN_SEC: 30,    // فاصل بين أي تعليقين لنفس المستخدم
  LIST_MAX: 300        // أقصى عدد تعليقات تُرسل للواجهة
};
const ID_RE_ = /^[A-Za-z0-9_\-]{1,40}$/;

// رسالة الترحيب للمستخدم الجديد (بتظهر بالجرس)
const WELCOME = {
  FROM: '2026-10-04T00:00:00Z',   // بس يلي بيسجّلوا بعد هالتاريخ بيجيهم (غيّرو لتاريخ النشر)
  DAYS: 14,                        // كم يوم بتضل بالقائمة
  TITLE: 'أهلاً فيك يا {name} 👋',
  BODY: 'هون بتلاقي مقرراتك مشروحة ومبسّطة، مع تدريب حر وامتحانات فصل فصل. وإذا علقت بشي، اكتب بقسم النقاش تحت أي درس، وأي ردّ عليك رح يوصلك هون بالجرس 🔔 — خبرتك بتفيد حدا، وخبرة حدا بتفيدك.'
};

/* ============ مساعدات ============ */

function authUser_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return { err: s };
  return { user: s.user };
}

function place_(req) {
  const c = String(req.course_id || '').trim();
  const h = String(req.chapter_id || '').trim();
  return (ID_RE_.test(c) && ID_RE_.test(h)) ? { course: c, chapter: h, key: c + '|' + h } : null;
}

function firstName_(n) {
  const w = String(n || '').trim().split(/\s+/)[0];
  return w ? w.slice(0, 30) : 'طالب';
}

// توقيت بدقة الميلي ثانية حتى ما يضيع إشعار لما يتزامن تعليقان بنفس الثانية
function isoOf_(v) { const d = toDate_(v); return d ? d.toISOString() : ''; }

/* ---- شكل التعليق جوّا الكاش: [id, parent_id, user_id, name, text, created_at] ---- */
function cRow_(o) {
  return [String(o.comment_id), String(o.parent_id || ''), String(o.user_id || ''),
          String(o.name || 'طالب'), String(o.text || '').trim(), isoOf_(o.created_at)];
}
function pubComment_(c, uid) {
  return { id: c[0], parent_id: c[1], name: c[3], text: c[4], created_at: c[5], mine: !!uid && c[2] === uid };
}
function byTime_(x, y) { return x[5] < y[5] ? -1 : x[5] > y[5] ? 1 : 0; }

/* ============ كاش التعليقات ============ */

const CC_TTL_ = 21600;      // 6 ساعات (أقصى مدة بيسمح فيها CacheService)
const CC_CHUNK_ = 30000;    // حجم القطعة بالأحرف (حد CacheService هو 100KB للقيمة الوحدة)

function cache_() { return CacheService.getScriptCache(); }

/** رقم "جيل" الكاش: تغييره = تفريغ كل كاش التعليقات دفعة وحدة */
function ccGen_() { return props_().getProperty('CC_GEN') || '1'; }
function bumpCommentsCache_() { props_().setProperty('CC_GEN', Utilities.getUuid().slice(0, 8)); }
function ccKey_(gen, place) { return 'cc' + gen + '|' + place; }

/** بيرجّع { place: list } للأماكن الموجودة كاملة بالكاش بس */
function ccGet_(gen, places) {
  const out = {};
  if (!places.length) return out;
  const c = cache_();
  const heads = c.getAll(places.map(function (p) { return ccKey_(gen, p) + '#n'; }));
  const want = [];
  places.forEach(function (p) {
    const n = Number(heads[ccKey_(gen, p) + '#n']);
    if (!(n >= 0)) return;
    for (let i = 0; i < n; i++) want.push(ccKey_(gen, p) + '#' + i);
  });
  const parts = want.length ? c.getAll(want) : {};
  places.forEach(function (p) {
    const n = Number(heads[ccKey_(gen, p) + '#n']);
    if (!(n >= 0)) return;
    let s = '';
    for (let i = 0; i < n; i++) {
      const v = parts[ccKey_(gen, p) + '#' + i];
      if (v == null) return;           // قطعة ضاعت → منعتبرو مو موجود
      s += v;
    }
    try { out[p] = n ? JSON.parse(s) : []; } catch (e) { /* تالف → مو موجود */ }
  });
  return out;
}

/** بيحفظ { place: list } بالكاش (مقسّم لقطع) */
function ccPut_(gen, map) {
  const kv = {};
  Object.keys(map).forEach(function (p) {
    const s = map[p].length ? JSON.stringify(map[p]) : '';
    const n = Math.ceil(s.length / CC_CHUNK_);
    for (let i = 0; i < n; i++) kv[ccKey_(gen, p) + '#' + i] = s.slice(i * CC_CHUNK_, (i + 1) * CC_CHUNK_);
    kv[ccKey_(gen, p) + '#n'] = String(n);
  });
  const keys = Object.keys(kv);
  for (let i = 0; i < keys.length; i += 200) {   // دفعات صغيرة
    const part = {};
    keys.slice(i, i + 200).forEach(function (k) { part[k] = kv[k]; });
    cache_().putAll(part, CC_TTL_);
  }
}

/**
 * تعليقات الأماكن المطلوبة (الظاهرة بس، مرتّبة من الأقدم). من الكاش، وإذا ناقص شي:
 * منقرأ تبويب comments مرة وحدة (جوّا القفل) ومنعبّي كاش كل الأماكن.
 */
function loadPlaces_(places) {
  const gen = ccGen_();
  let got = ccGet_(gen, places);
  const missing = places.filter(function (p) { return !(p in got); });
  if (!missing.length) return got;

  return withLock_(function () {
    const gen2 = ccGen_();                  // ممكن حدا تاني عبّاه وإحنا ناطرين القفل
    const again = ccGet_(gen2, places);
    if (places.every(function (p) { return p in again; })) return again;

    const all = {};
    const t = table_('comments');
    t.rows.forEach(function (r) {
      const o = rowObj_(t, r);
      if (String(o.status) !== 'visible') return;
      const k = String(o.course_id) + '|' + String(o.chapter_id);
      (all[k] = all[k] || []).push(cRow_(o));
    });
    Object.keys(all).forEach(function (k) { all[k].sort(byTime_); });
    places.forEach(function (p) { if (!all[p]) all[p] = []; });   // أماكن بدون تعليقات → قائمة فاضية
    ccPut_(gen2, all);
    const out = {};
    places.forEach(function (p) { out[p] = all[p]; });
    return out;
  });
}

/** تحديث مكان واحد بالكاش بعد إضافة/حذف (لازم نكون جوّا القفل) */
function ccSetPlace_(place, list) { ccPut_(ccGen_(), { [place]: list }); }

/* ---- أماكن الطالب (users.places) ---- */
function placesOf_(userObj) {
  try { const o = JSON.parse(String(userObj.places || '') || '{}'); return (o && typeof o === 'object') ? o : {}; }
  catch (e) { return {}; }
}
function savePlaces_(userIdx, map) {
  updateRow_(table_('users'), userIdx, { places: JSON.stringify(map) });
}

/** بتعبّي users.places من التعليقات الحالية (setupV3 بتستدعيها). بترجع عدد الطلاب */
function backfillPlaces_() {
  const users = table_('users');
  const cp = users.col('places'), cu = users.col('user_id');
  if (cp < 0) return 0;
  const map = {};
  if (ss_().getSheetByName('comments')) {
    const t = table_('comments');
    t.rows.forEach(function (r) {
      const o = rowObj_(t, r);
      if (String(o.status) !== 'visible' || !o.user_id) return;
      const k = String(o.course_id) + '|' + String(o.chapter_id);
      const at = isoOf_(o.created_at);
      const m = map[String(o.user_id)] = map[String(o.user_id)] || {};
      if (!m[k] || at < m[k]) m[k] = at;
    });
  }
  if (!users.rows.length) return 0;
  const col = users.rows.map(function (r) {
    const m = map[String(r[cu])];
    return [m ? JSON.stringify(m) : ''];
  });
  users.sh.getRange(2, cp + 1, col.length, 1).setValues(col);
  return Object.keys(map).length;
}

/* ============ قراءة التعليقات ============ */

function getComments_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };
  const uid = String(a.user.obj.user_id);
  const list = loadPlaces_([p.key])[p.key] || [];
  let mine = 0;
  list.forEach(function (c) { if (c[2] === uid) mine++; });
  return {
    ok: true,
    comments: list.slice(-LIM.LIST_MAX).map(function (c) { return pubComment_(c, uid); }),
    mine_count: mine,
    limit: LIM.PER_PLACE
  };
}

/* ============ إضافة تعليق ============ */

function addComment_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };

  let text = String(req.text || '').replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
  if (!text) return { ok: false, error: 'EMPTY' };
  if (text.length > LIM.MAX_LEN) return { ok: false, error: 'TOO_LONG' };
  if (/^[=+\-@]/.test(text)) text = ' ' + text;   // يمنع تفسير النص كصيغة بالشيت

  const uid = String(a.user.obj.user_id);
  const now = new Date();

  // الفاصل بين تعليقين (لأي مكان)
  const cdKey = 'cd|' + uid;
  const last = Number(cache_().get(cdKey)) || 0;
  const wait = LIM.COOLDOWN_SEC - Math.floor((now.getTime() - last) / 1000);
  if (last && wait > 0) return { ok: false, error: 'COOLDOWN', wait: wait };

  const list = (loadPlaces_([p.key])[p.key] || []).slice();
  let mine = 0;
  list.forEach(function (c) { if (c[2] === uid) mine++; });
  if (mine >= LIM.PER_PLACE) return { ok: false, error: 'LIMIT_REACHED', limit: LIM.PER_PLACE };

  // الرد: لازم يكون على تعليق ظاهر بنفس المكان، ونسطّحه لمستوى واحد
  let parent = '';
  if (req.parent_id) {
    const par = list.filter(function (c) { return c[0] === String(req.parent_id); })[0];
    if (!par) return { ok: false, error: 'BAD_PARENT' };
    parent = par[1] || par[0];
  }

  const rec = {
    comment_id: 'c_' + Utilities.getUuid().slice(0, 8),
    course_id: p.course,
    chapter_id: p.chapter,
    user_id: uid,
    name: firstName_(a.user.obj.name),
    text: text,
    parent_id: parent,
    created_at: now.toISOString(),
    status: 'visible'
  };
  appendRow_(sheetHead_('comments'), rec);

  const row = cRow_(rec);
  list.push(row);
  ccSetPlace_(p.key, list);
  cache_().put(cdKey, String(now.getTime()), LIM.COOLDOWN_SEC + 5);

  const places = placesOf_(a.user.obj);
  if (!places[p.key]) { places[p.key] = row[5]; savePlaces_(a.user.idx, places); }

  return { ok: true, comment: pubComment_(row, uid), mine_count: mine + 1, limit: LIM.PER_PLACE };
}

/* ============ حذف تعليقي ============ */

function deleteComment_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const id = String(req.comment_id || '');
  const uid = String(a.user.obj.user_id);
  const t = table_('comments');
  const i = findRow_(t, 'comment_id', id);
  if (i < 0) return { ok: false, error: 'NOT_FOUND' };
  const o = rowObj_(t, t.rows[i]);
  if (String(o.user_id) !== uid || String(o.status) !== 'visible') return { ok: false, error: 'NOT_FOUND' };
  updateRow_(t, i, { status: 'deleted' });

  const key = String(o.course_id) + '|' + String(o.chapter_id);
  const list = (loadPlaces_([key])[key] || []).filter(function (c) { return c[0] !== id; });
  ccSetPlace_(key, list);

  // تحديث أماكن الطالب: إذا ما ضل إلو تعليق هون منشيل المكان، وإلا منحدّث تاريخ أول تعليق
  const places = placesOf_(a.user.obj);
  const left = list.filter(function (c) { return c[2] === uid; });
  if (!left.length) delete places[key]; else places[key] = left[0][5];
  savePlaces_(a.user.idx, places);
  return { ok: true };
}

/* ============ الإشعارات ============ */
/*
 * إشعار تعليقات: أي تعليق من غيري، على مكان (مادة/فصل) أنا علّقت فيه قبل،
 * وأحدث من (آخر مرة فتحت الجرس) ومن (أول تعليق لي بهالمكان).
 * الإعلانات: أي إعلان active أحدث من آخر مرة فتحت الجرس (أو من تاريخ تسجيلي أول مرة).
 * ما في أي كتابة هون — الحساب بيتم عند الطلب، ومن الكاش لأماكني بس.
 */
function getNotifications_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const uid = String(a.user.obj.user_id);
  const seen = toDate_(a.user.obj.notif_seen_at);

  const myPlaces = placesOf_(a.user.obj);
  const keys = Object.keys(myPlaces);
  const lists = keys.length ? loadPlaces_(keys) : {};

  const glist = [];
  keys.forEach(function (k) {
    const list = lists[k] || [];
    const myIds = {};
    let first = toDate_(myPlaces[k]);
    list.forEach(function (c) {
      if (c[2] !== uid) return;
      myIds[c[0]] = true;
      const d = toDate_(c[5]); if (d && (!first || d < first)) first = d;
    });
    if (!first) return;
    const base = (seen && seen > first) ? seen : first;
    const parts = k.split('|');
    let g = null;
    list.forEach(function (c) {
      if (c[2] === uid) return;
      const d = toDate_(c[5]); if (!d || d <= base) return;
      g = g || { course_id: parts[0], chapter_id: parts[1], count: 0, replies: 0, latest_at: '' };
      g.count++;
      if (c[1] && myIds[c[1]]) g.replies++;
      if (c[5] > g.latest_at) g.latest_at = c[5];
    });
    if (g) glist.push(g);
  });
  glist.sort(function (x, y) { return x.latest_at < y.latest_at ? 1 : -1; });

  const at = table_('announcements');
  const baseA = seen || toDate_(a.user.obj.created_at) || new Date(0);
  const anns = at.rows.map(function (r) { return rowObj_(at, r); })
    .filter(function (o) { return String(o.status) === 'active' && o.title; })
    .map(function (o) {
      const d = toDate_(o.created_at);
      return { id: String(o.ann_id), title: String(o.title), body: String(o.body || ''), created_at: d ? d.toISOString() : '', is_new: !!(d && d > baseA) };
    })
    .sort(function (x, y) { return x.created_at < y.created_at ? 1 : x.created_at > y.created_at ? -1 : 0; })
    .slice(0, 10);

  // رسالة الترحيب: للمستخدمين الجدد فقط
  const regAt = toDate_(a.user.obj.created_at);
  if (regAt && regAt >= new Date(WELCOME.FROM) &&
      Date.now() - regAt.getTime() < WELCOME.DAYS * 86400000) {
    anns.unshift({
      id: 'welcome',
      title: WELCOME.TITLE.replace('{name}', firstName_(a.user.obj.name)),
      body: WELCOME.BODY,
      created_at: regAt.toISOString(),
      is_new: !seen
    });
  }

  let unread = anns.filter(function (x) { return x.is_new; }).length;
  glist.forEach(function (g) { unread += g.count; });

  return { ok: true, unread: unread, groups: glist, announcements: anns };
}

function markSeen_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  updateRow_(table_('users'), a.user.idx, { notif_seen_at: new Date().toISOString() });
  return { ok: true };
}

/** للتجربة من المحرر: حط إيميلك هون وشغّل testWelcome */
const TEST_EMAIL = '';
function testWelcome() {
  if (!TEST_EMAIL) return console.log('حط إيميلك بـ TEST_EMAIL فوق testWelcome أول');
  const t = table_('users');
  const i = findEmailRow_(t, TEST_EMAIL);
  if (i < 0) return console.log('الإيميل مو موجود بتبويب users');
  const o = rowObj_(t, t.rows[i]);
  console.log('created_at =', o.created_at, '| notif_seen_at =', o.notif_seen_at);
  console.log('FROM =', WELCOME.FROM);
  console.log('بعد FROM؟', new Date(o.created_at) >= new Date(WELCOME.FROM));
}

/* ============ شريط الأخبار ============ */

function getTicker_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  if (!ss_().getSheetByName('ticker')) return { ok: true, items: [] };   // ما انعمل التبويب لسا
  const t = table_('ticker');
  const now = new Date();
  const items = t.rows.map(function (r) { return rowObj_(t, r); })
    .filter(function (o) { return String(o.status) === 'active' && String(o.text || '').trim(); })
    .filter(function (o) { const e = toDate_(o.expires_at); return !e || e > now; })
    .map(function (o) {
      const d = toDate_(o.created_at);
      return { id: String(o.tick_id), text: String(o.text).trim().slice(0, 200), created_at: d ? d.toISOString() : '' };
    })
    .sort(function (x, y) { return x.created_at < y.created_at ? 1 : x.created_at > y.created_at ? -1 : 0; })
    .slice(0, 8);
  return { ok: true, items: items };
}
