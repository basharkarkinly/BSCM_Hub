/**
 * Support Channel — عدّاد تجربة الزوار (الفصل الأول بدون تسجيل)
 * ملف مستقل بجانب Code.gs (Apps Script بيشاركهم نفس المحيط).
 *
 * الفكرة:
 *   - كل زائر بدون حساب بياخد رقم عشوائي على جهازو (vid) أول ما يفتح مادة. ما منسجّل أي معلومة شخصية.
 *   - trialPing: لما يفتح مادة (مرة بكل جلسة تصفّح لكل مادة)، ولما ينجح بامتحان الفصل الأول.
 *   - trialConverted: لما نفس الجهاز يسجّل دخول. منسجّل وقت التسجيل، وإذا الحساب جديد (انعمل بعد أول تجربة)
 *     ولا كان حساب قديم دخل من جهاز جديد. ما منربط الصف بالإيميل ولا بالحساب.
 *
 * التبويبات:
 *   trials         : vid, first_at, last_at, courses, visits, passed, converted_at, new_account
 *   trials_summary : أرقام جاهزة بمعادلات (مجموع، لكل مادة، نسبة التسجيل). بيتحدّث لحالو.
 *
 * بعد اللصق: شغّل setupTrials() مرة وحدة من المحرر. وإذا ضفت مادة جديدة بتبويب courses، شغّلها مرة كمان
 * لتنضاف للجدول بالملخص.
 */

const TRIALS_COLS_ = ['vid', 'first_at', 'last_at', 'courses', 'visits', 'passed', 'converted_at', 'new_account'];
const VID_RE_ = /^v_[a-z0-9]{8,24}$/;
const TRIAL_COURSE_RE_ = /^[A-Za-z0-9_\-]{2,20}$/;

/* ============ الإعداد (مرة وحدة) ============ */
function setupTrials() {
  ensureSheet_('trials', TRIALS_COLS_);
  let sh = ss_().getSheetByName('trials_summary');
  if (!sh) sh = ss_().insertSheet('trials_summary');
  sh.clear();

  const rows = [
    ['📊 تجربة الزوار (الفصل الأول بدون تسجيل)', ''],
    ['', ''],
    ['زوار جرّبوا', '=COUNTA(trials!A2:A)'],
    ['نجحوا بامتحان فصل أول', '=COUNTIF(trials!F2:F,"?*")'],
    ['سجّلوا دخول بعد التجربة', '=COUNTA(trials!G2:G)'],
    ['منهم حسابات جديدة', '=COUNTIF(trials!H2:H,TRUE)'],
    ['نسبة التسجيل', '=IFERROR(B5/B3,0)'],
    ['آخر 7 أيام: زوار جدد', '=SUMPRODUCT((LEN(trials!B2:B)>0)*(LEFT(trials!B2:B,10)>=TEXT(TODAY()-7,"yyyy-mm-dd")))'],
    ['', ''],
    ['المادة', 'جرّبوها', 'نجحوا بالفصل الأول', 'سجّلوا']
  ];
  // الصفوف الأولى إلها عمودين؛ منكمّلها لأربعة لتصير مستطيل وحد
  const grid = rows.map(function (r) { while (r.length < 4) r.push(''); return r; });

  let courses = [];
  try {
    const t = table_('courses');
    const c = t.col('course_id');
    courses = t.rows.map(function (r) { return String(r[c] || '').trim(); }).filter(Boolean);
  } catch (e) { /* ما في تبويب courses */ }
  const start = grid.length + 1;
  courses.forEach(function (id, i) {
    const r = start + i;
    grid.push([id,
      '=COUNTIF(trials!D2:D,"*,"&A' + r + '&",*")',
      '=COUNTIF(trials!F2:F,"*,"&A' + r + '&",*")',
      '=COUNTIFS(trials!D2:D,"*,"&A' + r + '&",*",trials!G2:G,"<>")']);
  });

  sh.getRange(1, 1, grid.length, 4).setValues(grid);
  sh.getRange('A1').setFontWeight('bold').setFontSize(13);
  sh.getRange('A3:A8').setFontWeight('bold');
  sh.getRange('B7').setNumberFormat('0%');
  sh.getRange(start - 1, 1, 1, 4).setFontWeight('bold').setBackground('#EEF1F6');
  sh.setColumnWidth(1, 230);
  sh.setRightToLeft(true);
  console.log('trials: جاهز. ' + courses.length + ' مادة بالملخص.');
}

/* ============ الطلبات ============ */

/** req: { vid, course_id, event:'view'|'pass' } — بدون token */
function trialPing_(req) {
  const vid = String(req.vid || ''), course = String(req.course_id || '');
  const ev = req.event === 'pass' ? 'pass' : 'view';
  if (!VID_RE_.test(vid) || !TRIAL_COURSE_RE_.test(course)) return { ok: false, error: 'BAD_REQUEST' };
  if (!ss_().getSheetByName('trials')) return { ok: true, skipped: true };   // ما انعمل setupTrials لسا

  // حماية من التكرار: نفس الزائر ونفس المادة ونفس الحدث مرة كل نص ساعة بالكتير
  const ck = 'tp_' + vid + '_' + course + '_' + ev, cache = CacheService.getScriptCache();
  if (cache.get(ck)) return { ok: true, dup: true };
  cache.put(ck, '1', 1800);

  return withLock_(function () {
    const t = table_('trials');
    const now = iso_(new Date());
    const i = findRow_(t, 'vid', vid);
    if (i < 0) {
      appendRow_(t, {
        vid: vid, first_at: now, last_at: now, courses: ',' + course + ',', visits: 1,
        passed: ev === 'pass' ? ',' + course + ',' : ''
      });
      return { ok: true };
    }
    const r = t.rows[i];
    const courses = addTo_(String(r[t.col('courses')] || ''), course);
    const patch = { last_at: now, courses: courses };
    if (ev === 'view') patch.visits = (Number(r[t.col('visits')]) || 0) + 1;
    else patch.passed = addTo_(String(r[t.col('passed')] || ''), course);
    updateRow_(t, i, patch);
    return { ok: true };
  });
}

/** req: { token, vid } — بعد ما الزائر يسجّل دخول من نفس الجهاز */
function trialConverted_(req) {
  const s = sessionUser_(req);
  if (!s.ok) return s;
  const vid = String(req.vid || '');
  if (!VID_RE_.test(vid)) return { ok: false, error: 'BAD_REQUEST' };
  if (!ss_().getSheetByName('trials')) return { ok: true, skipped: true };

  return withLock_(function () {
    const t = table_('trials');
    const i = findRow_(t, 'vid', vid);
    if (i < 0) return { ok: true, found: false };
    const r = t.rows[i];
    if (String(r[t.col('converted_at')] || '').trim()) return { ok: true, found: true };
    const first = toDate_(r[t.col('first_at')]);
    const created = toDate_(s.user.obj.created_at);
    updateRow_(t, i, {
      converted_at: iso_(new Date()),
      new_account: !!(first && created && created.getTime() >= first.getTime() - 60000)
    });
    return { ok: true, found: true };
  });
}

/** القائمة محفوظة بشكل ",BQM607,GMA401," حتى يشتغل البحث بالملخص بدون ما يخلط BMN401 و BMN4011 */
function addTo_(list, id) {
  const l = list && list.charAt(0) === ',' ? list : ',';
  return l.indexOf(',' + id + ',') >= 0 ? l : l + id + ',';
}
