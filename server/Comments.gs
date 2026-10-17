/**
 * Support Channel — أسئلة وأجوبة الفصول + الإشعارات + شريط الأخبار
 * ملف مستقل بجانب Code.gs و Stars.gs (Apps Script بيشاركهم نفس المحيط).
 *
 * الفكرة (النسخة 4): النقاش تحت كل فصل صار "أسئلة هالفصل".
 *   - تعليق بدون parent_id = سؤال.  تعليق إلو parent_id = جواب على هالسؤال.
 *   - 👍 على الجواب (تبويب votes)، و"✓ حلّ مشكلتي" من صاحب السؤال (عمود accepted_id على صف السؤال).
 *   - النجوم (Stars.gs): جواب مقبول = 3، صوت من حساب موثوق = 1 (مع سقف يومي). كلها من تبويب star_rules.
 *
 * التبويبات المستخدمة:
 *   comments         : comment_id, course_id, chapter_id, user_id, name, text, parent_id, created_at, status, accepted_id
 *   comments_archive : نفس الأعمدة (النقاشات القديمة، بينقلها التنظيف الليلي)
 *   votes            : comment_id, user_id, created_at
 *   announcements    : ann_id, title, body, created_at, status
 *   ticker           : tick_id, text, created_at, expires_at, status   (شريط الأخبار)
 *   users            : + notif_seen_at, places, stars, stars_recent, stars_day
 *
 * الكاش: أسئلة وأجوبة كل (مادة|فصل) محفوظة بـ CacheService لـ 6 ساعات. القراءة من الشيت مرة وحدة
 * وبتعبّي كل الأماكن دفعة وحدة، وكل إضافة/حذف/صوت/قبول بيحدّث الكاش مباشرة.
 * أي تعديل يدوي على تبويب comments → onSheetEdit بيفرّغ الكاش (أو شغّل clearCommentsCache).
 *
 * users.places = {"BMN401|3":"<تاريخ أول مشاركة>", ...} : الأماكن يلي الطالب سأل أو جاوب فيها (للإشعارات السريعة).
 */

const LIM = {
  MAX_LEN: 500,        // أقصى طول للسؤال أو الجواب
  Q_PER_PLACE: 3,      // أقصى عدد أسئلة ظاهرة للطالب بنفس الفصل
  A_PER_QUESTION: 1,   // كم جواب بيقدر الطالب يكتب على نفس السؤال
  COOLDOWN_SEC: 30,    // فاصل بين أي مشاركتين لنفس الطالب
  Q_LIST_MAX: 100      // أقصى عدد أسئلة (مع أجوبتها) تُرسل للواجهة
};
const ID_RE_ = /^[A-Za-z0-9_\-]{1,40}$/;

// رسالة الترحيب للمستخدم الجديد (بتظهر بالجرس)
const WELCOME = {
  FROM: '2026-10-04T00:00:00Z',   // بس يلي بيسجّلوا بعد هالتاريخ بيجيهم (غيّرو لتاريخ النشر)
  DAYS: 14,                        // كم يوم بتضل بالقائمة
  TITLE: 'أهلاً فيك يا {name} 👋',
  BODY: 'هون بتلاقي مقرراتك مشروحة ومبسّطة، مع تدريب حر وامتحانات فصل فصل. وإذا علقت بشي، اسأل تحت أي درس، وأي جواب عليك رح يوصلك هون بالجرس 🔔. وساعد غيرك بالأجوبة واكسب نجوم ⭐ — خبرتك بتفيد حدا، وخبرة حدا بتفيدك.'
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

/* ---- شكل المشاركة جوّا الكاش: [id, parent_id, user_id, name, text, created_at, accepted_id, voters[]] ---- */
const C_ID = 0, C_PAR = 1, C_UID = 2, C_NAME = 3, C_TEXT = 4, C_AT = 5, C_ACC = 6, C_VOT = 7;
function cRow_(o, voters) {
  return [String(o.comment_id), String(o.parent_id || ''), String(o.user_id || ''),
          String(o.name || 'طالب'), String(o.text || '').trim(), isoOf_(o.created_at),
          String(o.accepted_id || ''), voters || []];
}
function pubComment_(c, uid) {
  const voters = c[C_VOT] || [];
  return {
    id: c[C_ID], parent_id: c[C_PAR], name: c[C_NAME], text: c[C_TEXT], created_at: c[C_AT],
    mine: !!uid && c[C_UID] === uid,
    votes: voters.length, voted: !!uid && voters.indexOf(uid) >= 0,
    accepted_id: c[C_PAR] ? '' : (c[C_ACC] || '')
  };
}
function byTime_(x, y) { return x[C_AT] < y[C_AT] ? -1 : x[C_AT] > y[C_AT] ? 1 : 0; }

/* ============ الكاش ============ */

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

/** الأصوات من تبويب votes: { comment_id: [user_id, ...] } */
function votersMap_() {
  const out = {};
  if (!ss_().getSheetByName('votes')) return out;
  const t = table_('votes');
  const ci = t.col('comment_id'), cu = t.col('user_id');
  t.rows.forEach(function (r) {
    const id = String(r[ci]), u = String(r[cu]);
    if (!id || !u) return;
    (out[id] = out[id] || []).push(u);
  });
  return out;
}

/**
 * مشاركات الأماكن المطلوبة (الظاهرة بس، مرتّبة من الأقدم). من الكاش، وإذا ناقص شي:
 * منقرأ تبويب comments (و votes) مرة وحدة جوّا القفل ومنعبّي كاش كل الأماكن.
 */
function loadPlaces_(places) {
  const gen = ccGen_();
  const got = ccGet_(gen, places);
  const missing = places.filter(function (p) { return !(p in got); });
  if (!missing.length) return got;

  return withLock_(function () {
    const gen2 = ccGen_();                  // ممكن حدا تاني عبّاه وإحنا ناطرين القفل
    const again = ccGet_(gen2, places);
    if (places.every(function (p) { return p in again; })) return again;

    const voters = votersMap_();
    const all = {};
    const t = table_('comments');
    t.rows.forEach(function (r) {
      const o = rowObj_(t, r);
      if (String(o.status) !== 'visible') return;
      const k = String(o.course_id) + '|' + String(o.chapter_id);
      (all[k] = all[k] || []).push(cRow_(o, voters[String(o.comment_id)]));
    });
    Object.keys(all).forEach(function (k) { all[k].sort(byTime_); });
    places.forEach(function (p) { if (!all[p]) all[p] = []; });   // أماكن بدون مشاركات → قائمة فاضية
    ccPut_(gen2, all);
    const out = {};
    places.forEach(function (p) { out[p] = all[p]; });
    return out;
  });
}

/** تحديث مكان واحد بالكاش (لازم نكون جوّا القفل) */
function ccSetPlace_(place, list) { const m = {}; m[place] = list; ccPut_(ccGen_(), m); }

/** رقم صف المشاركة بالشيت (2-based) بدون ما نقرأ كل التبويب */
function commentRowNum_(id) {
  const sh = ss_().getSheetByName('comments');
  if (!sh || sh.getLastRow() < 2) return -1;
  const head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
  const c = head.indexOf('comment_id');
  const f = sh.getRange(2, c + 1, sh.getLastRow() - 1, 1).createTextFinder(String(id)).matchEntireCell(true).findNext();
  return f ? f.getRow() : -1;
}
function setCommentCell_(rowNum, col, value) {
  const h = sheetHead_('comments');
  const c = h.col(col);
  if (c >= 0 && rowNum > 1) h.sh.getRange(rowNum, c + 1).setValue(safeCell_(value));
}

/* ---- أماكن الطالب (users.places) ---- */
function placesOf_(userObj) {
  try { const o = JSON.parse(String(userObj.places || '') || '{}'); return (o && typeof o === 'object') ? o : {}; }
  catch (e) { return {}; }
}
function savePlaces_(userIdx, map) {
  updateRow_(table_('users'), userIdx, { places: JSON.stringify(map) });
}

/** بتعبّي users.places من المشاركات الحالية (setupV3 بتستدعيها). بترجع عدد الطلاب */
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

/* ============ قراءة الأسئلة والأجوبة ============ */

/** أسئلة بلا جواب من حدا غير صاحبها */
function qaStats_(list) {
  const qs = list.filter(function (c) { return !c[C_PAR]; });
  const answered = {};
  list.forEach(function (c) {
    if (!c[C_PAR]) return;
    const q = qs.filter(function (x) { return x[C_ID] === c[C_PAR]; })[0];
    if (q && q[C_UID] !== c[C_UID]) answered[c[C_PAR]] = 1;
  });
  return { questions: qs.length, unanswered: qs.filter(function (q) { return !answered[q[C_ID]]; }).length };
}

function getComments_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };
  const uid = String(a.user.obj.user_id);
  const list = loadPlaces_([p.key])[p.key] || [];

  // آخر Q_LIST_MAX سؤال مع أجوبتها
  const qs = list.filter(function (c) { return !c[C_PAR]; }).slice(-LIM.Q_LIST_MAX);
  const keep = {};
  qs.forEach(function (q) { keep[q[C_ID]] = 1; });
  const out = list.filter(function (c) { return c[C_PAR] ? keep[c[C_PAR]] : keep[c[C_ID]]; });

  let mine = 0;
  list.forEach(function (c) { if (!c[C_PAR] && c[C_UID] === uid) mine++; });
  const st = qaStats_(list);
  const askerOf = {};
  qs.forEach(function (q) { askerOf[q[C_ID]] = q[C_UID]; });
  return {
    ok: true,
    comments: out.map(function (c) {
      const pc = pubComment_(c, uid);
      if (c[C_PAR]) pc.by_asker = !!c[C_UID] && askerOf[c[C_PAR]] === c[C_UID];   // توضيح من صاحب السؤال، مو جواب
      return pc;
    }),
    mine_count: mine, limit: LIM.Q_PER_PLACE,
    questions: st.questions, unanswered: st.unanswered
  };
}

/** للشريط الصغير تحت الدرس: كم سؤال وكم بلا جواب (من الكاش، رد صغير) */
function getQaStats_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };
  const st = qaStats_(loadPlaces_([p.key])[p.key] || []);
  return { ok: true, questions: st.questions, unanswered: st.unanswered };
}

/* ============ سؤال أو جواب جديد ============ */

function addComment_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };

  let text = String(req.text || '').replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
  if (!text) return { ok: false, error: 'EMPTY' };
  if (text.length > LIM.MAX_LEN) return { ok: false, error: 'TOO_LONG' };
  if (hasBanned_(text)) return { ok: false, error: 'BANNED' };
  if (/^[=+\-@]/.test(text)) text = ' ' + text;   // يمنع تفسير النص كصيغة بالشيت

  const uid = String(a.user.obj.user_id);
  const now = new Date();

  // الفاصل بين مشاركتين (لأي مكان)
  const cdKey = 'cd|' + uid;
  const last = Number(cache_().get(cdKey)) || 0;
  const wait = LIM.COOLDOWN_SEC - Math.floor((now.getTime() - last) / 1000);
  if (last && wait > 0) return { ok: false, error: 'COOLDOWN', wait: wait };

  const list = (loadPlaces_([p.key])[p.key] || []).slice();
  let parent = '';
  let mine = 0;
  list.forEach(function (c) { if (!c[C_PAR] && c[C_UID] === uid) mine++; });

  if (req.parent_id) {
    // جواب: لازم يكون على سؤال ظاهر بنفس المكان (ولو انبعت على جواب، منربطو بسؤالو)
    const par = list.filter(function (c) { return c[C_ID] === String(req.parent_id); })[0];
    if (!par) return { ok: false, error: 'BAD_PARENT' };
    parent = par[C_PAR] || par[C_ID];
    const myAnswers = list.filter(function (c) { return c[C_PAR] === parent && c[C_UID] === uid; }).length;
    if (myAnswers >= LIM.A_PER_QUESTION) return { ok: false, error: 'ALREADY_ANSWERED' };
  } else if (mine >= LIM.Q_PER_PLACE) {
    return { ok: false, error: 'LIMIT_REACHED', limit: LIM.Q_PER_PLACE };
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
    status: 'visible',
    accepted_id: ''
  };
  appendRow_(sheetHead_('comments'), rec);

  const row = cRow_(rec, []);
  list.push(row);
  ccSetPlace_(p.key, list);
  cache_().put(cdKey, String(now.getTime()), LIM.COOLDOWN_SEC + 5);

  const places = placesOf_(a.user.obj);
  if (!places[p.key]) { places[p.key] = row[C_AT]; savePlaces_(a.user.idx, places); }

  return { ok: true, comment: pubComment_(row, uid), mine_count: parent ? mine : mine + 1, limit: LIM.Q_PER_PLACE };
}

/* ============ حذف مشاركتي ============ */

function deleteComment_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const id = String(req.comment_id || '');
  const uid = String(a.user.obj.user_id);
  const t = table_('comments');
  const i = findRow_(t, 'comment_id', id);
  if (i < 0) return { ok: false, error: 'NOT_FOUND' };
  const o = rowObj_(t, t.rows[i]);
  if (String(o.user_id) !== uid || String(o.status) !== 'visible') return { ok: false, error: 'NOT_FOUND' };

  const key = String(o.course_id) + '|' + String(o.chapter_id);
  let list = (loadPlaces_([key])[key] || []).slice();

  // سؤال عليه أجوبة من غيرك → ما بينحذف (حتى ما تضيع أجوبتهم ونجومهم)
  if (!o.parent_id && list.some(function (c) { return c[C_PAR] === id && c[C_UID] !== uid; })) {
    return { ok: false, error: 'HAS_ANSWERS' };
  }
  updateRow_(t, i, { status: 'deleted' });
  if (!o.parent_id) {   // أجوبتي أنا على سؤالي المحذوف بتنحذف معو
    t.rows.forEach(function (r, j) {
      if (String(r[t.col('parent_id')]) === id && String(r[t.col('status')]) === 'visible') updateRow_(t, j, { status: 'deleted' });
    });
  }

  if (o.parent_id) {
    reverseStarsByPrefix_('acc:' + id, 'انحذف جوابك');
    reverseStarsByPrefix_('vote:' + id + ':', 'انحذف جوابك');
    // إذا كان هو الجواب المقبول → السؤال برجع بلا جواب مقبول
    const q = list.filter(function (c) { return c[C_ID] === String(o.parent_id); })[0];
    if (q && q[C_ACC] === id) {
      q[C_ACC] = '';
      setCommentCell_(commentRowNum_(q[C_ID]), 'accepted_id', '');
    }
  }
  list = list.filter(function (c) { return c[C_ID] !== id && c[C_PAR] !== id; });
  ccSetPlace_(key, list);

  // تحديث أماكن الطالب: إذا ما ضل إلو مشاركة هون منشيل المكان، وإلا منحدّث تاريخ أول مشاركة
  const places = placesOf_(a.user.obj);
  const left = list.filter(function (c) { return c[C_UID] === uid; });
  if (!left.length) delete places[key]; else places[key] = left[0][C_AT];
  savePlaces_(a.user.idx, places);
  return { ok: true };
}

/* ============ 👍 صوت على جواب ============ */
/** req: { action:'voteAnswer', token, course_id, chapter_id, comment_id } */
function voteAnswer_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };
  const id = String(req.comment_id || '');
  const uid = String(a.user.obj.user_id);

  const list = (loadPlaces_([p.key])[p.key] || []).slice();
  const ans = list.filter(function (c) { return c[C_ID] === id; })[0];
  if (!ans || !ans[C_PAR]) return { ok: false, error: 'NOT_FOUND' };
  if (ans[C_UID] === uid) return { ok: false, error: 'OWN_ANSWER' };
  ans[C_VOT] = ans[C_VOT] || [];
  if (ans[C_VOT].indexOf(uid) >= 0) return { ok: false, error: 'ALREADY_VOTED' };

  appendRow_(sheetHead_('votes'), { comment_id: id, user_id: uid, created_at: new Date().toISOString() });
  ans[C_VOT].push(uid);
  ccSetPlace_(p.key, list);

  // النجمة بس إذا المصوّت حسابو مو جديد (حماية من الحسابات الوهمية)
  const born = toDate_(a.user.obj.created_at);
  const trusted = born && (Date.now() - born.getTime()) >= STARS.VOTER_MIN_DAYS * 86400000;
  if (trusted && ans[C_UID]) grantStars_(ans[C_UID], 'answer_upvote', 'vote:' + id + ':' + uid);

  return { ok: true, votes: ans[C_VOT].length };
}

/* ============ ✓ "حلّ مشكلتي" ============ */
/** req: { action:'acceptAnswer', token, course_id, chapter_id, comment_id } — صاحب السؤال بس، ومرة وحدة */
function acceptAnswer_(req) {
  const a = authUser_(req); if (a.err) return a.err;
  const p = place_(req); if (!p) return { ok: false, error: 'BAD_REQUEST' };
  const id = String(req.comment_id || '');
  const uid = String(a.user.obj.user_id);

  const list = (loadPlaces_([p.key])[p.key] || []).slice();
  const ans = list.filter(function (c) { return c[C_ID] === id; })[0];
  if (!ans || !ans[C_PAR]) return { ok: false, error: 'NOT_FOUND' };
  const q = list.filter(function (c) { return c[C_ID] === ans[C_PAR]; })[0];
  if (!q || q[C_UID] !== uid) return { ok: false, error: 'NOT_OWNER' };
  if (ans[C_UID] === uid) return { ok: false, error: 'OWN_ANSWER' };
  if (q[C_ACC]) return { ok: false, error: 'ALREADY_ACCEPTED' };

  q[C_ACC] = id;
  setCommentCell_(commentRowNum_(q[C_ID]), 'accepted_id', id);
  ccSetPlace_(p.key, list);
  if (ans[C_UID]) grantStars_(ans[C_UID], 'answer_accepted', 'acc:' + id);
  return { ok: true, accepted_id: id };
}

/** لما الإدارة تخفي جواب من الشيت: منسحب نجومو (onSheetEdit بيستدعيها) */
function onCommentsHidden_(ids) {
  ids.forEach(function (id) {
    reverseStarsByPrefix_('acc:' + id, 'جواب انخفى من الإدارة');
    reverseStarsByPrefix_('vote:' + id + ':', 'جواب انخفى من الإدارة');
  });
}

/* ============ الإشعارات ============ */
/*
 * إشعار أجوبة: أي مشاركة من غيري، على مكان (مادة/فصل) أنا سألت أو جاوبت فيه،
 * وأحدث من (آخر مرة فتحت الجرس) ومن (أول مشاركة لي بهالمكان).
 * النجوم: أي حركة نجوم أحدث من آخر مرة فتحت الجرس.
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
      if (c[C_UID] !== uid) return;
      myIds[c[C_ID]] = true;
      const d = toDate_(c[C_AT]); if (d && (!first || d < first)) first = d;
    });
    if (!first) return;
    const base = (seen && seen > first) ? seen : first;
    const parts = k.split('|');
    let g = null;
    list.forEach(function (c) {
      if (c[C_UID] === uid) return;
      const d = toDate_(c[C_AT]); if (!d || d <= base) return;
      g = g || { course_id: parts[0], chapter_id: parts[1], count: 0, replies: 0, latest_at: '' };
      g.count++;
      if (c[C_PAR] && myIds[c[C_PAR]]) g.replies++;
      if (c[C_AT] > g.latest_at) g.latest_at = c[C_AT];
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

  const starEv = starEventsSince_(a.user.obj, seen);

  let unread = anns.filter(function (x) { return x.is_new; }).length + starEv.length;
  glist.forEach(function (g) { unread += g.count; });

  return { ok: true, unread: unread, groups: glist, announcements: anns,
           star_events: starEv, stars: Number(a.user.obj.stars) || 0 };
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
