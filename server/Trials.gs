/**
 * Support Channel — عدّاد تجربة الزوار (الفصل الأول بدون تسجيل)
 * ملف مستقل بجانب Code.gs (Apps Script بيشاركهم نفس المحيط).
 *
 * الفكرة:
 *   - كل زائر بدون حساب بياخد رقم عشوائي على جهازو (vid) أول ما يفتح مادة. ما منسجّل أي معلومة شخصية.
 *   - trialPing: لما يفتح الصفحة الرئيسية (home)، لما يفتح مادة (مرة بكل جلسة تصفّح لكل مادة)، ولما ينجح بامتحان الفصل الأول.
 *   - requestOtp (Code.gs) بيسجّل وقت أول طلب كود من هالجهاز (code_at)، و verifyOtp بيسجّل الدخول (converted_at).
 *   - ua: نوع الجهاز والمتصفح بس (متل iOS-Safari أو Android-Telegram)، بلا أي معلومة شخصية. بيساعد نفهم التكرار.
 *   - trialConverted: لما نفس الجهاز يسجّل دخول. منسجّل وقت التسجيل، وإذا الحساب جديد (انعمل بعد أول تجربة)
 *     ولا كان حساب قديم دخل من جهاز جديد. ما منربط الصف بالإيميل ولا بالحساب.
 *
 * التبويبات:
 *   trials         : vid, first_at, last_at, courses, visits, passed, converted_at, new_account, home_visits, code_at, ua
 *   funnel         : كل التحليل بمكان واحد، من تاريخ بتختارو: رحلة الزائر (زار ← فتح مادة ← نجح بالفصل الأول ←
 *                    طلب كود ← سجّل)، جدول لكل مادة، الأجهزة والمتصفحات، وقائمة اللي طلبوا كود وما سجّلوا.
 *   (تبويب trials_summary القديم انلغى: setupTrials() بيمسحو إذا لقاه، وكل أرقامو صارت بـ funnel.)
 *
 * بعد اللصق: شغّل setupTrials() مرة وحدة من المحرر. وإذا ضفت مادة جديدة بتبويب courses، شغّلها مرة كمان
 * لتنضاف لجدول المواد بـ funnel.
 */

const TRIALS_COLS_ = ['vid', 'first_at', 'last_at', 'courses', 'visits', 'passed', 'converted_at', 'new_account',
                      'home_visits', 'code_at', 'ua'];
const UA_RE_ = /^[A-Za-z]{2,10}-[A-Za-z]{2,12}$/;
const FUNNEL_FROM_ = '2026-11-23';   // التاريخ الافتراضي بتبويب funnel (بتغيّرو من الشيت)

/** تبويب trials مع الأعمدة الجديدة (بتنضاف تلقائياً أول مرة) */
function trialsTable_() {
  let t = table_('trials');
  if (t.col('ua') < 0) { ensureCols_('trials', TRIALS_COLS_); t = table_('trials'); }
  return t;
}
const VID_RE_ = /^v_[a-z0-9]{8,24}$/;
const TRIAL_COURSE_RE_ = /^[A-Za-z0-9_\-]{2,20}$/;

/* ============ الإعداد (مرة وحدة) ============ */
function setupTrials() {
  ensureSheet_('trials', TRIALS_COLS_);
  ensureCols_('trials', TRIALS_COLS_);
  ensureCols_('otp', OTP_EXTRA_COLS_);
  // الملخص القديم: كل أرقامو صارت بـ funnel. معادلات بس (ما فيه بيانات)، فمسحو آمن.
  const old = ss_().getSheetByName('trials_summary');
  if (old) ss_().deleteSheet(old);
  setupFunnel_();
}

/* ============ الطلبات ============ */

/** req: { vid, course_id, event:'view'|'pass'|'home', ua } — بدون token. home = الصفحة الرئيسية (بلا مادة) */
function trialPing_(req) {
  const vid = String(req.vid || ''), ua = UA_RE_.test(String(req.ua || '')) ? String(req.ua) : '';
  const ev = req.event === 'pass' ? 'pass' : req.event === 'home' ? 'home' : 'view';
  const course = ev === 'home' ? 'HOME' : String(req.course_id || '');
  if (!VID_RE_.test(vid) || !TRIAL_COURSE_RE_.test(course)) return { ok: false, error: 'BAD_REQUEST' };
  if (!ss_().getSheetByName('trials')) return { ok: true, skipped: true };   // ما انعمل setupTrials لسا

  // حماية من التكرار: نفس الزائر ونفس المادة ونفس الحدث مرة كل نص ساعة بالكتير
  const ck = 'tp_' + vid + '_' + course + '_' + ev, cache = CacheService.getScriptCache();
  if (cache.get(ck)) return { ok: true, dup: true };
  cache.put(ck, '1', 1800);

  return withLock_(function () {
    const t = trialsTable_();
    const now = iso_(new Date());
    const i = findRow_(t, 'vid', vid);
    if (i < 0) {
      appendRow_(t, ev === 'home'
        ? { vid: vid, first_at: now, last_at: now, courses: '', visits: 0, home_visits: 1, ua: ua }
        : { vid: vid, first_at: now, last_at: now, courses: ',' + course + ',', visits: 1, home_visits: 0, ua: ua,
            passed: ev === 'pass' ? ',' + course + ',' : '' });
      return { ok: true };
    }
    const r = t.rows[i];
    const patch = { last_at: now };
    if (ua && !String(r[t.col('ua')] || '')) patch.ua = ua;
    if (ev === 'home') patch.home_visits = (Number(r[t.col('home_visits')]) || 0) + 1;
    else {
      patch.courses = addTo_(String(r[t.col('courses')] || ''), course);
      if (ev === 'view') patch.visits = (Number(r[t.col('visits')]) || 0) + 1;
      else patch.passed = addTo_(String(r[t.col('passed')] || ''), course);
    }
    updateRow_(t, i, patch);
    return { ok: true };
  });
}

/**
 * من requestOtp (Code.gs، جوّا القفل): هالجهاز طلب كود. منسجّل أول مرة بس (code_at).
 * إذا الجهاز ما إلو سطر (فات على صفحة الدخول مباشرة) منعملّو سطر، لأنو هو كمان زار الموقع.
 */
function trialCodeRequested_(vid, uaRaw) {
  try {
    if (!VID_RE_.test(String(vid || '')) || !ss_().getSheetByName('trials')) return;
    const ua = UA_RE_.test(String(uaRaw || '')) ? String(uaRaw) : '';
    withLock_(function () {
      const t = trialsTable_();
      const now = iso_(new Date());
      const i = findRow_(t, 'vid', vid);
      if (i < 0) { appendRow_(t, { vid: vid, first_at: now, last_at: now, courses: '', visits: 0, home_visits: 0, code_at: now, ua: ua }); return; }
      const r = t.rows[i], patch = { last_at: now };
      if (!String(r[t.col('code_at')] || '')) patch.code_at = now;
      if (ua && !String(r[t.col('ua')] || '')) patch.ua = ua;
      updateRow_(t, i, patch);
    });
  } catch (e) { console.log('trialCodeRequested_: ' + e); }   // العدّاد ما لازم يوقّف تسجيل الدخول أبداً
}

/** من verifyOtp و googleLogin (Code.gs): هالجهاز سجّل دخول. */
function trialLoggedIn_(vid, email) {
  try {
    if (!VID_RE_.test(String(vid || '')) || !ss_().getSheetByName('trials')) return;
    const u = findUser_(email);
    markConverted_(String(vid), u ? u.obj.created_at : null);
  } catch (e) { console.log('trialLoggedIn_: ' + e); }
}

/** بيعلّم سطر الزائر إنو سجّل (مرة وحدة). new_account = الحساب انعمل بعد أول زيارة. */
function markConverted_(vid, createdAt) {
  return withLock_(function () {
    const t = trialsTable_();
    const i = findRow_(t, 'vid', vid);
    if (i < 0) return { ok: true, found: false };
    const r = t.rows[i];
    if (String(r[t.col('converted_at')] || '').trim()) return { ok: true, found: true };
    const first = toDate_(r[t.col('first_at')]);
    const created = toDate_(createdAt);
    updateRow_(t, i, {
      converted_at: iso_(new Date()),
      new_account: !!(first && created && created.getTime() >= first.getTime() - 60000)
    });
    return { ok: true, found: true };
  });
}

/** req: { token, vid } — بعد ما الزائر يسجّل دخول من نفس الجهاز */
function trialConverted_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  const vid = String(req.vid || '');
  if (!VID_RE_.test(vid)) return { ok: false, error: 'BAD_REQUEST' };
  if (!ss_().getSheetByName('trials')) return { ok: true, skipped: true };

  return markConverted_(vid, s.user.obj.created_at);}

/** القائمة محفوظة بشكل ",BQM607,GMA401," حتى يشتغل البحث بجدول المواد بدون ما يخلط BMN401 و BMN4011 */
function addTo_(list, id) {
  const l = list && list.charAt(0) === ',' ? list : ',';
  return l.indexOf(',' + id + ',') >= 0 ? l : l + id + ',';
}

/* ============ تبويب funnel: رحلة الزائر ============ */
/**
 * بينعمل من setupTrials() (وآمن تعيد تشغيلو: بيحافظ على التاريخ اللي كاتبو بـ B3).
 * كل الأرقام معادلات، فبتتحدّث لحالها. الأجهزة مش أشخاص: نفس الشخص من جهازين = زائرين.
 */
function setupFunnel_() {
  let sh = ss_().getSheetByName('funnel');
  let from = FUNNEL_FROM_;
  if (sh) { const v = sh.getRange('B3').getValue(); if (v) from = v instanceof Date ? Utilities.formatDate(v, ss_().getSpreadsheetTimeZone(), 'yyyy-MM-dd') : String(v); }
  else sh = ss_().insertSheet('funnel');
  sh.clear();

  // حرف العمود حسب اسمو (الأعمدة ممكن يتغيّر ترتيبها)
  function L(name, col) {
    const head = sheetHead_(name).head;
    const i = head.indexOf(col);
    if (i < 0) throw new Error('عمود ناقص: ' + name + '.' + col + ' — شغّل setupTrials() من جديد');
    let n = i + 1, s = '';
    while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); }
    return name + '!' + s + '2:' + s;
  }
  const T = {}, O = {}, U = {};
  ['vid', 'first_at', 'courses', 'passed', 'converted_at', 'new_account', 'code_at', 'ua'].forEach(function (c) { T[c] = L('trials', c); });
  ['email', 'created_at', 'used', 'first_at', 'sends_total', 'wrong_total', 'sends', 'fails'].forEach(function (c) { O[c] = L('otp', c); });
  ['email', 'created_at'].forEach(function (c) { U[c] = L('users', c); });

  const D = '$E$3';   // التاريخ كنص yyyy-mm-dd (بـ E3 تحت، مخفي شوي)
  const M = '(LEN(' + T.vid + ')>0)*(LEFT(' + T.first_at + ',10)>=' + D + ')';   // زوار من التاريخ
  const otpFirst = 'IF(LEN(' + O.first_at + ')>0,' + O.first_at + ',' + O.created_at + ')';
  const notDone = '(LEN(' + O.email + ')>0)*(' + O.used + '&""<>"TRUE")*(LEFT(' + otpFirst + ',10)>=' + D + ')';

  const grid = [
    ['📈 رحلة الزائر (Conversion)', '', '', ''],
    ['', '', '', ''],
    ['من تاريخ', from, 'غيّر التاريخ (yyyy-mm-dd) وكل الأرقام بتتحدّث لحالها', ''],
    ['', '', '', ''],
    ['المرحلة', 'العدد', 'من اللي زاروا', 'شو يعني'],
    ['1. زاروا الموقع بلا حساب', '=SUMPRODUCT(' + M + ')', '=IF(B6,1,0)', 'أجهزة (مش أشخاص) فتحت أي صفحة وهي مش مسجّلة دخول'],
    ['2. فتحوا مادة', '=SUMPRODUCT(' + M + '*(LEN(' + T.courses + ')>2))', '=IFERROR(B7/B6,0)', 'من الزوار، فاتوا على مادة وحدة على الأقل'],
    ['   فتحوا الموقع بس (بلا مادة)', '=B6-B7', '=IFERROR(B8/B6,0)', 'ما فاتوا على ولا مادة'],
    ['   نجحوا بامتحان فصل أول', '=SUMPRODUCT(' + M + '*(LEN(' + T.passed + ')>2))', '=IFERROR(B9/B6,0)', 'خلّصوا امتحان الفصل الأول بمادة وحدة على الأقل قبل ما يسجّلوا'],
    ['3. طلبوا كود', '=SUMPRODUCT(' + M + '*(LEN(' + T.code_at + ')>0))', '=IFERROR(B10/B6,0)', 'حطّوا إيميلهن وكبسوا «إرسال الرمز»'],
    ['4. سجّلوا دخول', '=SUMPRODUCT(' + M + '*(LEN(' + T.converted_at + ')>0))', '=IFERROR(B11/B6,0)', 'كمّلوا ودخلوا من نفس الجهاز'],
    ['   منهم حسابات جديدة', '=SUMPRODUCT(' + M + '*(LEN(' + T.converted_at + ')>0)*(' + T.new_account + '&""="TRUE"))', '', 'الباقي كان عندهن حساب ودخلوا من جهاز جديد'],
    ['   زاروا وما سجّلوا', '=B6-B11', '=IFERROR(B13/B6,0)', ''],
    ['   طلبوا كود وما كمّلوا', '=B10-SUMPRODUCT(' + M + '*(LEN(' + T.code_at + ')>0)*(LEN(' + T.converted_at + ')>0))', '=IFERROR(B14/B10,0)', 'النسبة هون من اللي طلبوا كود'],
    ['', '', '', ''],
    ['من جهة الإيميلات والحسابات', '', '', ''],
    ['حسابات جديدة بهالفترة', '=SUMPRODUCT((LEN(' + U.email + ')>0)*(LEFT(' + U.created_at + ',10)>=' + D + '))', '', 'من تبويب users، مهما كان الجهاز'],
    ['إيميلات طلبت كود وما سجّلت', '=ARRAYFORMULA(SUMPRODUCT(' + notDone + '))', '', 'القائمة تحت. قبل 26 نوفمبر كانت بتنمسح كل ليلة'],
    ['', '', '', ''],
    ['📚 حسب المادة (نفس التاريخ)', '', '', ''],
    ['المادة', 'فتحوها', 'نجحوا بالفصل الأول', 'سجّلوا']
  ];

  // جدول المواد: صف لكل مادة من تبويب courses. البحث بـ ",CODE," حتى ما يختلط BMN401 مع BMN4011
  let courses = [];
  try {
    const ct = table_('courses');
    const cc = ct.col('course_id');
    courses = ct.rows.map(function (r) { return String(r[cc] || '').trim(); }).filter(Boolean);
  } catch (e) { /* ما في تبويب courses */ }
  const courseHead = grid.length;            // رقم صف عناوين جدول المواد
  courses.forEach(function (id) {
    const r = grid.length + 1;
    const has = function (rng) { return 'ISNUMBER(SEARCH(","&$A' + r + '&",",' + rng + '))'; };
    grid.push([id,
      '=SUMPRODUCT(' + M + '*' + has(T.courses) + ')',
      '=SUMPRODUCT(' + M + '*' + has(T.passed) + ')',
      '=SUMPRODUCT(' + M + '*' + has(T.courses) + '*(LEN(' + T.converted_at + ')>0))']);
  });
  if (!courses.length) grid.push(['ما في تبويب courses', '', '', '']);

  grid.push(['', '', '', '']);
  const listTitle = grid.length + 1;
  grid.push(['📋 طلبوا كود وما سجّلوا (الأحدث أول)', '', '', '']);
  grid.push(['الإيميل', 'أول طلب', 'مرات طلب الكود', 'محاولات غلط']);
  sh.getRange('E3').setFormula('=IF(ISNUMBER(B3),TEXT(B3,"yyyy-mm-dd"),TRIM(B3&""))').setFontColor('#B0B7C3').setFontSize(8);
  sh.getRange(grid.length + 1, 1).setFormula(
    '=ARRAYFORMULA(IFERROR(SORT(FILTER({' + O.email + ',' + otpFirst + ',IF(LEN(' + O.sends_total + ')>0,N(+' + O.sends_total + '),N(+' + O.sends + ')),IF(LEN(' + O.wrong_total + ')>0,N(+' + O.wrong_total + '),N(+' + O.fails + '))},' + notDone + '),2,FALSE),"ما في حدا 👌"))');

  // حسب نوع الجهاز والمتصفح (لنفهم التكرار): على اليمين
  sh.getRange('F5:H5').setValues([['الجهاز-المتصفح', 'زوار', 'سجّلوا']]);
  sh.getRange('F6').setFormula('=IFERROR(SORT(UNIQUE(FILTER(' + T.ua + ',LEN(' + T.ua + ')>0,LEFT(' + T.first_at + ',10)>=' + D + '))),"لسا ما في بيانات")');
  sh.getRange('G6').setFormula('=MAP(F6:F30,LAMBDA(u,IF(OR(u="",u="لسا ما في بيانات"),"",SUMPRODUCT((' + T.ua + '=u)*' + M + '))))');
  sh.getRange('H6').setFormula('=MAP(F6:F30,LAMBDA(u,IF(OR(u="",u="لسا ما في بيانات"),"",SUMPRODUCT((' + T.ua + '=u)*' + M + '*(LEN(' + T.converted_at + ')>0)))))');

  sh.getRange('B3').setNumberFormat('yyyy-mm-dd');
  sh.getRange('C6:C14').setNumberFormat('0%');
  sh.getRange('A1').setFontWeight('bold').setFontSize(13);
  sh.getRange('A3:B3').setFontWeight('bold').setBackground('#FFF6E6');
  [5, courseHead, grid.length].forEach(function (r) { sh.getRange(r, 1, 1, 4).setFontWeight('bold').setBackground('#EEF1F6'); });
  sh.getRange('F5:H5').setFontWeight('bold').setBackground('#EEF1F6');
  sh.getRange('A6:B14').setFontWeight('bold');
  sh.getRange('A16').setFontWeight('bold');
  [courseHead - 1, listTitle].forEach(function (r) { sh.getRange(r, 1).setFontWeight('bold').setFontSize(12); });
  sh.setColumnWidth(1, 260); sh.setColumnWidth(2, 170); sh.setColumnWidth(4, 330); sh.setColumnWidth(6, 170);
  sh.setRightToLeft(true);
  console.log('funnel: جاهز (من ' + from + '، ' + courses.length + ' مادة).');
}
