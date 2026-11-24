/* ============================================================
   GBS302 — منطق التقدم ومحرك الأسئلة التفاعلي
   يعتمد على localStorage الحقيقي بمتصفح المستخدم (الملف مفتوح
   مباشرة من القرص، وليس Artifact داخل الشات) لذلك التقدم يبقى
   محفوظاً حتى بعد إغلاق المتصفح.
   ============================================================ */

const PROGRESS_KEY = "gbs302_progress_v1";
const PASS_THRESHOLD = 90;

/* ---------- إدارة التقدم ---------- */
function loadProgress(){
  try{
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function saveProgress(data){
  try{
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }catch(e){ /* تجاهل بصمت إذا كان التخزين غير متاح */ }
}

function recordAttempt(chapterKey, scorePercent){
  const data = loadProgress();
  const prev = data[chapterKey] || {attempts:0, bestScore:0, passed:false};
  prev.attempts += 1;
  prev.bestScore = Math.max(prev.bestScore, scorePercent);
  if(scorePercent >= PASS_THRESHOLD) prev.passed = true;
  data[chapterKey] = prev;
  saveProgress(data);
  return prev;
}

function getChapterState(chapterKey){
  const data = loadProgress();
  return data[chapterKey] || {attempts:0, bestScore:0, passed:false};
}

/* ---------- تدوير الأسئلة: أي سؤال شافه الطالب بمحاولة سابقة ما بيرجع يطلع إلا لما يخلص البنك ---------- */
const SEEN_KEY = "gbs302_seen_v1";
function qHash(q){
  const s = (q.type || "") + "|" + (q.question || "");
  let h = 5381;
  for(let i = 0; i < s.length; i++){ h = ((h << 5) + h + s.charCodeAt(i)) | 0; }
  return (h >>> 0).toString(36);
}
function loadSeen(){
  try{ return JSON.parse(localStorage.getItem(SEEN_KEY) || "{}"); }catch(e){ return {}; }
}
function saveSeen(d){
  try{ localStorage.setItem(SEEN_KEY, JSON.stringify(d)); }catch(e){ /* تجاهل بصمت */ }
}
function markSeen(scope, q){
  const d = loadSeen();
  const a = d[scope] || [];
  const h = qHash(q);
  if(a.indexOf(h) < 0){ a.push(h); d[scope] = a; saveSeen(d); }
}
function pickFresh(pool, count, scope){
  const d = loadSeen();
  const seen = new Set(d[scope] || []);
  const n = Math.min(count, pool.length);
  const fresh = shuffle(pool.filter(q => !seen.has(qHash(q))));
  if(fresh.length >= n) return { picked: fresh.slice(0, n), recycled: false, freshLeft: fresh.length - n };
  // البنك خلص: بنبدأ دورة جديدة (الأسئلة الجديدة أولاً وبعدين نكمّل من الباقي)
  const rest = shuffle(pool.filter(q => seen.has(qHash(q))));
  d[scope] = [];
  saveSeen(d);
  return { picked: fresh.concat(rest).slice(0, n), recycled: true, freshLeft: 0 };
}
function fmtTime(ms){
  const t = Math.floor(ms / 1000), m = Math.floor(t / 60), s = t % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

/* ---------- أدوات مساعدة ---------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeArabic(str){
  return (str || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, "")      // إزالة التشكيل
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ");
}

function fillAnswerMatches(userAnswer, acceptable){
  const u = normalizeArabic(userAnswer);
  if(!u) return false;
  return acceptable.some(acc => {
    const a = normalizeArabic(acc);
    return u === a || u.includes(a) || a.includes(u);
  });
}

/* ---------- محرك الأسئلة ---------- */
/**
 * renderQuiz
 * @param {string} containerId   - معرّف العنصر الحاوي
 * @param {Array}  pool          - بنك الأسئلة الكامل
 * @param {Object} opts          - { mode: 'practice' | 'exam', count, chapterKey, nextUrl, chapterTitle }
 */
/* ---------- «كمّل من وين وقفت»: حفظ المحاولة المفتوحة على جهاز الطالب ----------
   الامتحان والفحص النهائي: بتنحفظ نفس الأسئلة بترتيب خياراتها + الأجوبة + الوقت المستهلك.
   التدريب الحر: بتنحفظ الأجوبة بس. وأي محاولة مفتوحة أقدم من 7 أيام بتنمسح. */
const RESUME_KEY = PROGRESS_KEY.replace("_progress_", "_resume_");
const RESUME_TTL = 7 * 24 * 3600 * 1000;
function qzPageId(containerId){ return location.pathname + "#" + containerId; }
function qzLoadAll(){
  try{ return JSON.parse(localStorage.getItem(RESUME_KEY) || "{}"); }catch(e){ return {}; }
}
function qzResumeGet(containerId){
  const st = qzLoadAll()[qzPageId(containerId)];
  if(!st) return null;
  if(Date.now() - (st.t || 0) > RESUME_TTL){ qzResumeClear(containerId); return null; }
  return st;
}
function qzResumeSet(containerId, st){
  try{
    const all = qzLoadAll(), now = Date.now();
    Object.keys(all).forEach(k => { if(now - (all[k].t || 0) > RESUME_TTL) delete all[k]; });
    st.t = now;
    all[qzPageId(containerId)] = st;
    localStorage.setItem(RESUME_KEY, JSON.stringify(all));
  }catch(e){ /* تجاهل بصمت */ }
}
function qzResumeClear(containerId){
  try{
    const all = qzLoadAll();
    delete all[qzPageId(containerId)];
    localStorage.setItem(RESUME_KEY, JSON.stringify(all));
  }catch(e){ /* تجاهل بصمت */ }
}
/* بيرجّع أسئلة المحاولة المحفوظة بنفس ترتيبها وترتيب خياراتها، أو null إذا البنك تغيّر بعد الحفظ */
function qzRebuild(st, pool){
  if(!st || !Array.isArray(st.qs) || !st.qs.length) return null;
  const byHash = {};
  pool.forEach(q => { byHash[qHash(q)] = q; });
  const out = [];
  for(const s of st.qs){
    const q = byHash[s.h];
    if(!q) return null;
    const c = {...q};
    if(c.type === "mcq" && Array.isArray(s.o)){
      if(s.o.length !== q.options.length || s.o.some(o => q.options.indexOf(o) < 0)) return null;
      c.options = s.o.slice();
      c.answerIndex = c.options.indexOf(q.options[q.answerIndex]);
    }
    out.push(c);
  }
  return out;
}
/* تحذير المتصفح إذا الطالب حاول يسكّر الصفحة بنص امتحان أو فحص */
let qzDirty = false;
window.addEventListener("beforeunload", function(e){
  if(qzDirty){ e.preventDefault(); e.returnValue = ""; }
});
function qzMarksLabel(m){
  if(m === 1) return "علامة";
  if(m === 2) return "علامتين";
  if(m === 2.5) return "علامتين ونص";
  return m ? m + " علامات" : "";
}

const FINAL_RESULT_KEY = "gbs302_final_result_v1";
function renderQuiz(containerId, pool, opts){
  const container = document.getElementById(containerId);
  const mode = opts.mode || "practice"; // 'practice' | 'exam' | 'final'
  const isTest = mode === "exam" || mode === "final";

  // في امتحان أو فحص ما خلص؟ منسأل الطالب: يكمّل من وين وقف، أو يبدأ من جديد
  if(isTest && !opts._resumeChecked){
    opts._resumeChecked = true;
    const st = qzResumeGet(containerId);
    const qs = (st && st.mode === mode) ? qzRebuild(st, pool) : null;
    if(qs){
      const done = Object.keys(st.ans || {}).length;
      const what = mode === "final" ? "فحص نهائي" : "امتحان";
      const timeTxt = (opts.timer && st.elapsed) ? ` خلال <b dir="ltr">${fmtTime(st.elapsed)}</b>` : "";
      container.innerHTML = `
        <div class="result-card qz-resume">
          <div class="result-stamp" style="background:linear-gradient(135deg,#FF9F1C,#F4C04E);">⏸️</div>
          <h2>عندك ${what} ما خلّصتو</h2>
          <p>جاوبت على <b>${done}</b> من <b>${qs.length}</b> سؤال${timeTxt}. بدك تكمّل من وين وقفت؟</p>
          <p style="font-size:.9rem;">إذا بلّشت من جديد بتطلعلك أسئلة جديدة غير اللي شفتها.</p>
          <div class="cta-row" style="justify-content:center; display:flex; gap:14px; flex-wrap:wrap;">
            <button class="btn btn-primary" data-qz="go">▶️ كمّل من وين وقفت</button>
            <button class="btn btn-ghost" data-qz="new">🔄 ابدأ من جديد</button>
          </div>
        </div>`;
      container.querySelector('[data-qz="go"]').addEventListener("click", () => {
        opts._resume = { qs, st };
        renderQuiz(containerId, pool, opts);
      });
      container.querySelector('[data-qz="new"]').addEventListener("click", () => {
        qzResumeClear(containerId);
        renderQuiz(containerId, pool, opts);
      });
      return;
    }
    if(st) qzResumeClear(containerId);
  }

  let questions, pickInfo = null, saved = null;
  const seenScope = mode === "final" ? "final" : (opts.chapterKey || null);
  if(mode === "final" && opts.bankShare){
    opts._scopeOf = q => q.origin === "bank" ? "final_bank" : "final_gen";
  }
  if(isTest && opts._resume){
    // كمّل المحاولة المحفوظة بنفس الأسئلة ونفس ترتيب الخيارات
    questions = opts._resume.qs;
    saved = opts._resume.st;
    opts._resume = null;
  } else if(isTest){
    // امتحان الفصل / الفحص النهائي: عيّنة من أسئلة ما شافها الطالب بمحاولات سابقة (تدوير البنك)
    const count = opts.count || pool.length;
    if(mode === "final" && opts.bankShare){
      // الفحص النهائي: أغلب الأسئلة من بنك الدورات وتمارين الكتاب (origin:"bank")، والباقي من أسئلة الشرح
      const bank = pool.filter(q => q.origin === "bank"), gen = pool.filter(q => q.origin !== "bank");
      const nb = Math.min(bank.length, Math.round(count * opts.bankShare));
      const a = pickFresh(bank, nb, "final_bank"), b = pickFresh(gen, count - nb, "final_gen");
      pickInfo = { picked: shuffle(a.picked.concat(b.picked)), recycled: a.recycled || b.recycled, freshLeft: a.freshLeft };
    } else {
      pickInfo = pickFresh(pool, count, seenScope);
    }
    questions = pickInfo.picked.map(prepQuestionForExam);
  } else {
    questions = pool.map(q => ({...q}));
    const st = qzResumeGet(containerId);
    if(st && st.mode === "practice" && st.ans && Object.keys(st.ans).length) saved = st;
  }

  // حالة المحاولة اللي بتنحفظ أول بأول
  const state = isTest
    ? { mode, qs: questions.map(q => ({ h: qHash(q), o: q.type === "mcq" ? q.options : null })), ans: {}, elapsed: (saved && saved.elapsed) || 0 }
    : { mode, ans: {} };
  const savedAns = (saved && saved.ans) || {};
  let finished = false;

  let answered = 0;
  let correctCount = 0;

  container.innerHTML = "";

  // شريط تقدم علوي
  const metaBar = document.createElement("div");
  metaBar.className = "quiz-meta";
  let metaNote;
  if(mode === "exam") metaNote = `<span>جاوب على كل الأسئلة وسلّم، وبينفتحلك الفصل اللي بعدو — و<b>90%</b> فأكثر يعني أتقنت الفصل</span>`;
  else if(mode === "final"){
    const mk = qzMarksLabel(opts.marksPerQuestion);
    metaNote = mk
      ? `<span><b>فحص نهائي شامل</b> — كل سؤال ${mk}، وبتقدر تعيد الفحص بأسئلة جديدة</span>`
      : `<span><b>فحص نهائي شامل</b> — إجابة واحدة لكل سؤال</span>`;
  }
  else metaNote = `<span>تدريب حر — بلا قفل، جاوب وشوف التصحيح فوراً، وإجاباتك بتنحفظ إذا طلعت ورجعت</span>`;
  metaBar.innerHTML = `
    <span>السؤال <b id="qz-answered">0</b> من <b>${questions.length}</b></span>
    <div class="progress-bar-track"><div class="progress-bar-fill" id="qz-bar"></div></div>
    ${opts.timer ? '<span id="qz-timer" style="font-weight:700; direction:ltr; font-variant-numeric:tabular-nums;">⏱ 00:00</span>' : ''}
    ${metaNote}
  `;
  container.appendChild(metaBar);
  if(pickInfo && pickInfo.recycled){
    const note = document.createElement("div");
    note.className = "resource-box";
    note.innerHTML = "<b>ملاحظة:</b> خلّصت كل أسئلة البنك — هاي دورة جديدة، فممكن تطلعلك أسئلة شفتها قبل.";
    container.appendChild(note);
  }
  if(!isTest && saved){
    const note = document.createElement("div");
    note.className = "resource-box";
    note.innerHTML = `<b>رجّعنالك إجاباتك السابقة</b> بهالتدريب (${Object.keys(savedAns).length} سؤال)، فكمّل من وين وقفت. <button class="btn btn-ghost" data-qz="reset" style="margin-inline-start:8px; padding:6px 14px;">🔄 امسحها وابدأ من جديد</button>`;
    container.appendChild(note);
    note.querySelector('[data-qz="reset"]').addEventListener("click", () => {
      qzResumeClear(containerId);
      renderQuiz(containerId, pool, opts);
    });
  }
  // تايمر الوقت المستهلك فقط (بدون عدّ تنازلي)، وبيكمّل من الوقت المحفوظ إذا رجع الطالب
  const startedAt = Date.now() - (isTest ? state.elapsed : 0);
  let timerId = null;
  if(opts.timer){
    const timerEl = document.getElementById("qz-timer");
    timerEl.textContent = "⏱ " + fmtTime(Date.now() - startedAt);
    timerId = setInterval(() => { timerEl.textContent = "⏱ " + fmtTime(Date.now() - startedAt); }, 1000);
  }

  function persist(){
    if(finished || !Object.keys(state.ans).length) return;
    if(isTest) state.elapsed = Date.now() - startedAt;
    qzResumeSet(containerId, state);
  }
  // منحفظ الوقت المستهلك كمان لما الطالب يسكّر الصفحة أو يبدّل التاب
  const token = {};
  window.__qzToken = window.__qzToken || {};
  window.__qzToken[containerId] = token;
  const onHide = () => { if(isTest && window.__qzToken[containerId] === token) persist(); };
  window.addEventListener("pagehide", onHide);
  document.addEventListener("visibilitychange", () => { if(document.visibilityState === "hidden") onHide(); });

  const list = document.createElement("div");
  container.appendChild(list);

  const cards = [];
  questions.forEach((q, idx) => {
    const card = buildQuestionCard(q, idx, mode, (ok, val) => {
      if(opts._scopeOf) markSeen(opts._scopeOf(q), q); else if(seenScope) markSeen(seenScope, q);
      if(val !== undefined) state.ans[isTest ? String(idx) : qHash(q)] = val;
      if(isTest && !finished) qzDirty = true;
      onAnswered(ok);
      persist();
    });
    cards.push(card);
    list.appendChild(card);
  });

  if(isTest){
    const submitWrap = document.createElement("div");
    submitWrap.style.textAlign = "center";
    submitWrap.style.marginTop = "10px";
    const label = mode === "final" ? "سلّم الفحص وشوف علامتك" : "أنهِ الامتحان وشوف نتيجتك";
    submitWrap.innerHTML = `<button class="btn btn-primary" id="qz-submit" disabled>${label}</button>`;
    container.appendChild(submitWrap);
    document.getElementById("qz-submit").addEventListener("click", () => {
      if(mode === "exam") finishExam(questions, opts);
      else finishFinal(questions, opts);
    });
  }

  // رجّع الإجابات المحفوظة (نفس الاختيارات، مع التصحيح والشرح متل ما كانوا)
  questions.forEach((q, idx) => {
    const key = isTest ? String(idx) : qHash(q);
    if(key in savedAns && cards[idx].__answer) cards[idx].__answer(savedAns[key]);
  });

  function onAnswered(isCorrect){
    answered += 1;
    if(isCorrect) correctCount += 1;
    document.getElementById("qz-answered").textContent = answered;
    document.getElementById("qz-bar").style.width = (answered / questions.length * 100) + "%";
    if(isTest && answered === questions.length){
      document.getElementById("qz-submit").disabled = false;
    }
  }

  function endAttempt(){
    finished = true;
    qzDirty = false;
    qzResumeClear(containerId);
    if(timerId){ clearInterval(timerId); timerId = null; }
  }

  function finishExam(qs, opts){
    endAttempt();
    const scorePercent = Math.round((correctCount / qs.length) * 100);
    const result = recordAttempt(opts.chapterKey, scorePercent);
    if(window.SCStars) SCStars.examDone(opts.chapterKey, scorePercent);   // ⭐ نجوم الامتحان (أول مرة بـ90% فأكثر)
    renderResult(container, {
      scorePercent, correctCount, total: qs.length,
      passed: scorePercent >= PASS_THRESHOLD,
      attempts: result.attempts,
      bestScore: result.bestScore,
      nextUrl: opts.nextUrl,
      chapterTitle: opts.chapterTitle,
      retakeFn: () => { window.scrollTo(0, 0); renderQuiz(containerId, pool, opts); }
    });
  }

  function finishFinal(qs, opts){
    const elapsedMs = Date.now() - startedAt;
    endAttempt();
    const scorePercent = Math.round((correctCount / qs.length) * 100);
    if(window.SCStars) SCStars.examDone("final", scorePercent);          // ⭐ نجوم الفحص النهائي (أول مرة ≥ 90)
    const marksPer = opts.marksPerQuestion || 1;
    const marks = correctCount * marksPer, totalMarks = qs.length * marksPer;
    try{
      localStorage.setItem(FINAL_RESULT_KEY, JSON.stringify({
        scorePercent, correctCount, total: qs.length, marks, totalMarks,
        seconds: Math.round(elapsedMs / 1000), date: new Date().toISOString()
      }));
    }catch(e){ /* تجاهل بصمت */ }
    renderFinalResult(container, {
      scorePercent, correctCount, total: qs.length, marks, totalMarks,
      timeText: opts.timer ? fmtTime(elapsedMs) : null,
      retakeFn: () => { window.scrollTo(0, 0); renderQuiz(containerId, pool, opts); }
    });
  }
}

function prepQuestionForExam(q){
  const clone = {...q};
  if(clone.type === "mcq"){
    const correctText = clone.options[clone.answerIndex];
    // خيارات «جميع الأجوبة ...» / «كل ما سبق» بتضل آخر القائمة وما بتتبعثر مع الباقي
    const isAll = o => /^(جميع|كل ما|كل الأجوبة)/.test(o);
    const shuffled = shuffle(clone.options.filter(o => !isAll(o))).concat(clone.options.filter(isAll));
    clone.options = shuffled;
    clone.answerIndex = shuffled.indexOf(correctText);
  }
  return clone;
}

function buildQuestionCard(q, idx, mode, onAnswered){
  const card = document.createElement("div");
  card.className = "question-card";

  const tagLabel = q.type === "mcq" ? "اختيار من متعدد" : q.type === "tf" ? "صح / خطأ" : "إكمال الفراغ";
  const tagClass = q.type === "mcq" ? "mcq" : q.type === "tf" ? "tf" : "fill";

  card.innerHTML = `
    <span class="q-tag ${tagClass}">${tagLabel} · سؤال ${idx + 1}</span>
    <p class="q-text">${q.question}</p>
  `;

  const feedback = document.createElement("div");
  feedback.className = "feedback";

  if(q.type === "mcq"){
    const list = document.createElement("div");
    list.className = "opt-list";
    q.options.forEach((opt, i) => {
      const el = document.createElement("label");
      el.className = "opt";
      el.innerHTML = `<input type="radio" name="q${q.question.length}-${idx}"> <span>${opt}</span>`;
      el.addEventListener("click", () => {
        if(el.classList.contains("locked-answer")) return;
        Array.from(list.children).forEach(c => c.classList.add("locked-answer"));
        const isCorrect = i === q.answerIndex;
        el.classList.add("selected", isCorrect ? "correct" : "wrong");
        if(!isCorrect) list.children[q.answerIndex].classList.add("correct");
        showFeedback(feedback, isCorrect, q.explanation, null, q.ref);
        onAnswered(isCorrect, i);
      });
      list.appendChild(el);
    });
    card.appendChild(list);
  }

  if(q.type === "tf"){
    const list = document.createElement("div");
    list.className = "opt-list";
    ["صح", "خطأ"].forEach((label, i) => {
      const boolVal = i === 0;
      const el = document.createElement("label");
      el.className = "opt";
      el.innerHTML = `<input type="radio" name="tf-${idx}"> <span>${label}</span>`;
      el.addEventListener("click", () => {
        if(el.classList.contains("locked-answer")) return;
        Array.from(list.children).forEach(c => c.classList.add("locked-answer"));
        const isCorrect = boolVal === q.answer;
        el.classList.add("selected", isCorrect ? "correct" : "wrong");
        const correctIdx = q.answer ? 0 : 1;
        list.children[correctIdx].classList.add("correct");
        showFeedback(feedback, isCorrect, q.explanation, null, q.ref);
        onAnswered(isCorrect, i);
      });
      list.appendChild(el);
    });
    card.appendChild(list);
  }

  if(q.type === "fill"){
    const input = document.createElement("input");
    input.type = "text";
    input.className = "fill-input";
    input.placeholder = "اكتب إجابتك هون...";
    const btn = document.createElement("button");
    btn.className = "check-btn";
    btn.textContent = "تحقق من إجابتي";
    btn.addEventListener("click", () => {
      if(btn.disabled) return;
      const isCorrect = fillAnswerMatches(input.value, q.acceptable);
      input.classList.add(isCorrect ? "correct" : "wrong");
      input.disabled = true;
      btn.disabled = true;
      showFeedback(feedback, isCorrect, q.explanation, isCorrect ? null : q.acceptable[0], q.ref);
      onAnswered(isCorrect, input.value);
    });
    card.appendChild(input);
    card.appendChild(btn);
  }

  card.appendChild(feedback);
  // بتعيد إجابة محفوظة (لما الطالب يرجع يكمّل محاولتو)
  card.__answer = v => {
    if(q.type === "fill"){
      const inp = card.querySelector(".fill-input"), b = card.querySelector(".check-btn");
      if(inp && b){ inp.value = v; b.click(); }
    } else {
      const o = card.querySelectorAll(".opt-list > .opt")[v];
      if(o) o.click();
    }
  };
  return card;
}

function showFeedback(el, isCorrect, explanation, correctAnswerHint, ref){
  el.classList.add("show", isCorrect ? "ok" : "no");
  const icon = isCorrect ? "✓" : "✕";
  const lead = isCorrect ? "صحيح!" : "مو هيك بالضبط.";
  const hint = correctAnswerHint ? ` الإجابة المتوقعة: «${correctAnswerHint}».` : "";
  const refLink = (ref && ref.url)
    ? `<a class="review-link" href="${(window.SITE_PREFIX || "")}${ref.url}" target="_blank" rel="noopener">📍 راجع الموضوع: ${ref.label || "افتح الصفحة"}</a>`
    : "";
  el.innerHTML = `<span>${icon}</span><span class="fb-body"><b>${lead}</b> ${explanation || ""}${hint}${refLink}</span>`;
}

function renderResult(container, r){
  container.innerHTML = "";
  const card = document.createElement("div");
  card.className = "result-card";
  const hasNext = !!r.nextUrl && r.nextUrl !== "#";
  const toFinal = hasNext && /final-exam/.test(r.nextUrl);
  const opened = hasNext ? (toFinal ? "وصلت للفحص النهائي الشامل. " : "انفتحلك الفصل اللي بعدو. ") : "";
  const again = "وإذا عدت المحاولة <b>بتطلعلك أسئلة جديدة</b> غير اللي امتحنت فيها.";
  const note = r.passed
    ? opened + "فيك تعيد الامتحان وقت ما بدك للمراجعة، " + again
    : opened + "وإذا بدك <b>تتقن</b> الفصل جرّب توصل لـ<b>90%</b>، " + again;
  const nextLabel = !r.nextUrl || r.nextUrl === "#" ? "قريباً: الفصل التالي" : toFinal ? "روح عالفحص النهائي" : "روح عالفصل التالي";
  card.innerHTML = `
    <div class="result-stamp ${r.passed ? "pass" : ""}"${r.passed ? "" : ' style="background:linear-gradient(135deg,#FF9F1C,#F4C04E); box-shadow:0 12px 30px -8px rgba(255,159,28,.5);"'}>${r.scorePercent}%</div>
    <h2>${r.passed ? "ممتاز، أتقنت الفصل! 🎉" : "خلّصت الفصل ✔️"}</h2>
    <p>جاوبت صح على ${r.correctCount} من ${r.total} — هاي محاولتك رقم ${r.attempts}، وأفضل نتيجة إلك: ${r.bestScore}%</p>
    <p style="font-size:.92rem;">${note}</p>
    <div class="cta-row" style="justify-content:center; display:flex; gap:14px; flex-wrap:wrap;">
      ${r.nextUrl ? `<a class="btn btn-primary" href="${r.nextUrl}">${nextLabel}</a>` : ""}
      <button class="btn btn-teal" id="retake-btn">🔄 أعد المحاولة بأسئلة جديدة</button>
      <a class="btn btn-ghost" href="${window.SITE_PREFIX || ""}index.html">رجوع لخارطة المقرر</a>
    </div>
  `;
  container.appendChild(card);
  document.getElementById("retake-btn").addEventListener("click", r.retakeFn);

  if(r.passed) launchConfetti();
}

function renderFinalResult(container, r){
  container.innerHTML = "";
  const tier = r.scorePercent >= 90 ? "pass" : r.scorePercent >= 60 ? "mid" : "fail";
  const stampClass = tier === "fail" ? "fail" : "pass";
  const headline = tier === "pass"
    ? "ممتاز — لو هيك كان الامتحان الحقيقي كنت جبت علامة عالية 🎉"
    : tier === "mid"
      ? "لا بأس، بس في مجال حقيقي للتحسين قبل الامتحان الفعلي"
      : "في فجوات واضحة — يستاهل ترجع عالفصول قبل الامتحان الحقيقي";
  const marksLine = r.totalMarks ? `علامتك <b>${r.marks}</b> من <b>${r.totalMarks}</b> — ` : "";
  const timeLine = r.timeText ? ` الوقت المستهلك: <b dir="ltr">${r.timeText}</b>.` : "";
  const root = window.SITE_PREFIX || "";

  const card = document.createElement("div");
  card.className = "result-card";
  card.innerHTML = `
    <div class="result-stamp ${stampClass}">${r.scorePercent}%</div>
    <h2>${headline}</h2>
    <p>${marksLine}جاوبت صح على ${r.correctCount} من ${r.total} سؤال.${timeLine}</p>
    <p style="font-size:.9rem;">إذا عدت الفحص بيطلعلك أسئلة جديدة كلياً ما شفتها قبل، وهيك بترجع تدرس وما بتحفظ الأسئلة.</p>
    <div class="cta-row" style="justify-content:center; display:flex; gap:14px; flex-wrap:wrap;">
      <button class="btn btn-primary" id="qz-retake-new">🔄 أعد الفحص بأسئلة جديدة</button>
      <a class="btn btn-ghost" href="${root}index.html">رجوع لخارطة المقرر</a>
    </div>
  `;
  container.appendChild(card);
  const rb = card.querySelector("#qz-retake-new");
  if(rb && r.retakeFn) rb.addEventListener("click", r.retakeFn);
  if(tier === "pass") launchConfetti();
}

function launchConfetti(){
  const colors = ["#1FB6A8", "#FF9F1C", "#EF476F", "#12B886"];
  for(let i = 0; i < 40; i++){
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 6;
    piece.style.width = size + "px";
    piece.style.height = (size * 0.4) + "px";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2.2 + Math.random() * 1.6) + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

/* ---------- لعبة الوصل (مطابقة) ---------- */
/**
 * renderMatchGame
 * @param {string} containerId
 * @param {Array} pairs - [{left:"تايلور", right:"الإدارة العلمية"}, ...]
 */
function renderMatchGame(containerId, pairs){
  const container = document.getElementById(containerId);
  buildMatchRound(container, containerId, pairs);
}

function buildMatchRound(container, containerId, pairs){
  const left = shuffle(pairs.map((p,i)=>({...p, id:i})));
  const right = shuffle(pairs.map((p,i)=>({...p, id:i})));
  let selectedLeft = null, selectedRight = null, matchedCount = 0;

  container.innerHTML = `
    <div class="match-wrap">
      <div class="match-col"><h4>الاسم</h4><div id="${containerId}-left"></div></div>
      <div class="match-col"><h4>الفكرة / النظرية</h4><div id="${containerId}-right"></div></div>
    </div>
    <div class="match-status" id="${containerId}-status">0 من ${pairs.length} تطابقات صحيحة</div>
  `;
  const leftEl = document.getElementById(`${containerId}-left`);
  const rightEl = document.getElementById(`${containerId}-right`);
  const statusEl = document.getElementById(`${containerId}-status`);

  left.forEach(item => {
    const el = document.createElement("div");
    el.className = "match-item";
    el.textContent = item.left;
    el.dataset.id = item.id;
    el.addEventListener("click", () => {
      if(el.classList.contains("matched")) return;
      Array.from(leftEl.children).forEach(c => c.classList.remove("selected"));
      el.classList.add("selected");
      selectedLeft = { id: item.id, el };
      tryMatch();
    });
    leftEl.appendChild(el);
  });

  right.forEach(item => {
    const el = document.createElement("div");
    el.className = "match-item";
    el.textContent = item.right;
    el.dataset.id = item.id;
    el.addEventListener("click", () => {
      if(el.classList.contains("matched")) return;
      Array.from(rightEl.children).forEach(c => c.classList.remove("selected"));
      el.classList.add("selected");
      selectedRight = { id: item.id, el };
      tryMatch();
    });
    rightEl.appendChild(el);
  });

  function tryMatch(){
    if(!selectedLeft || !selectedRight) return;
    if(selectedLeft.id === selectedRight.id){
      selectedLeft.el.classList.remove("selected");
      selectedRight.el.classList.remove("selected");
      selectedLeft.el.classList.add("matched");
      selectedRight.el.classList.add("matched");
      matchedCount++;
      statusEl.textContent = `${matchedCount} من ${pairs.length} تطابقات صحيحة`;
      if(matchedCount === pairs.length){
        statusEl.innerHTML = `🎉 خلصت كل التطابقات صح! (${pairs.length}/${pairs.length})
          <br><button class="btn btn-teal replay-btn" style="margin-top:12px;">🔄 العب من جديد</button>`;
        statusEl.querySelector(".replay-btn").addEventListener("click", () => {
          buildMatchRound(container, containerId, pairs);
        });
        launchConfetti();
      }
    } else {
      selectedLeft.el.classList.add("shake");
      selectedRight.el.classList.add("shake");
      setTimeout(() => {
        selectedLeft.el.classList.remove("selected","shake");
        selectedRight.el.classList.remove("selected","shake");
      }, 350);
    }
    selectedLeft = null; selectedRight = null;
  }
}

/* ---------- Flashcards ---------- */
/**
 * renderFlashcards
 * @param {string} containerId
 * @param {Array} cards - [{front:"...", back:"..."}]
 */
function renderFlashcards(containerId, cards){
  const container = document.getElementById(containerId);
  container.innerHTML = `<div class="flash-grid">${cards.map((c,i) => `
    <div class="flash-card" id="${containerId}-c${i}">
      <div class="flash-inner">
        <div class="flash-face flash-front">${c.front}</div>
        <div class="flash-face flash-back">${c.back}</div>
      </div>
    </div>
  `).join("")}</div>`;
  cards.forEach((c,i) => {
    document.getElementById(`${containerId}-c${i}`).addEventListener("click", function(){
      this.classList.toggle("flipped");
    });
  });
}

/* ---------- بناء بطاقات الفصول في index.html ---------- */
function renderChapterGrid(gridId, chapters){
  const grid = document.getElementById(gridId);
  let doneCount = 0;
  grid.innerHTML = chapters.map(ch => {
    const state = ch.active ? getChapterState(ch.key) : null;
    const tried = !!(state && state.attempts > 0), mastered = !!(state && state.passed);
    if(tried || mastered) doneCount++;
    const locked = !ch.active;
    const stampClass = locked ? "locked" : ((tried || mastered) ? "done" : "open");
    const stampLabel = locked ? "🔒 مقفول" : (mastered ? "✅ متقن (90%+)" : tried ? "✔️ مكتمل" : "متاح الآن");
    const scoreLabel = (state && state.attempts > 0) ? `<span class="score-pill">أفضل نتيجة: ${state.bestScore}%</span>` : "";
    const cardTag = locked ? "div" : "a";
    const hrefAttr = locked ? "" : `href="${ch.href}"`;
    return `
      <${cardTag} class="chapter-card ${locked ? "locked" : "active"}" ${hrefAttr} style="text-decoration:none; color:inherit;">
        <span class="num">الفصل ${ch.num}</span>
        <h3>${ch.title}</h3>
        <div class="meta">
          <span class="stamp ${stampClass}">${stampLabel}</span>
          ${scoreLabel}
        </div>
      </${cardTag}>
    `;
  }).join("");

  const totalActive = chapters.length;
  const ring = document.getElementById("overall-progress-num");
  if(ring) ring.textContent = doneCount + "/" + totalActive;
  const circle = document.getElementById("overall-progress-circle");
  if(circle){
    const pct = totalActive ? doneCount / totalActive : 0;
    const circumference = 2 * Math.PI * 52;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference * (1 - pct);
  }
}

/* ================================================================
   القائمة الجانبية (تفتح من اليمين) — فصول المقرر + تقدّم الطالب
   تُبنى تلقائيًا بكل صفحة حمّلت assets/data/course-manifest.js
   ================================================================ */
function initSidebar(){
  if(typeof COURSE_CHAPTERS === "undefined") return;
  const prefix = window.SITE_PREFIX || "";
  const chapters = computeChapterUnlockStatus();
  const doneCount = chapters.filter(c => c.passed || c.attempted).length;

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "sidebar-toggle";
  toggleBtn.setAttribute("aria-label", "فتح قائمة الفصول");
  toggleBtn.innerHTML = "☰ الفصول والتقدّم";
  const topbarNav = document.querySelector(".topbar nav");
  if(topbarNav){
    topbarNav.insertBefore(toggleBtn, topbarNav.firstChild);
  } else {
    document.body.appendChild(toggleBtn);
  }

  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  const panel = document.createElement("aside");
  panel.className = "sidebar-panel";

  const chapterItems = chapters.map(ch => {
    const locked = !ch.active;
    const icon = ch.passed ? "✅" : ch.attempted ? "🟡" : (locked ? "🔒" : "▫️");
    const cls = locked ? "sidebar-link locked" : "sidebar-link";
    const tag = locked ? "div" : "a";
    const hrefAttr = locked ? "" : `href="${prefix}${ch.href}"`;
    return `<${tag} class="${cls}" ${hrefAttr}><span class="sb-icon">${icon}</span><span>${ch.num}. ${ch.title}</span></${tag}>`;
  }).join("");

  const extraItems = (typeof COURSE_EXTRA_LINKS !== "undefined" ? COURSE_EXTRA_LINKS : []).map(l =>
    `<a class="sidebar-link" href="${prefix}${l.href}"><span class="sb-icon"></span><span>${l.title}</span></a>`
  ).join("");

  panel.innerHTML = `
    <div class="sidebar-head">
      <a href="${prefix}index.html" class="sidebar-home">🏠 الصفحة الرئيسية</a>
      <button class="sidebar-close" aria-label="إغلاق">✕</button>
    </div>
    <div class="sidebar-progress">أنجزت ${doneCount} من ${chapters.length} فصول</div>
    <nav class="sidebar-chapters">${chapterItems}</nav>
    <div class="sidebar-divider"></div>
    <nav class="sidebar-extra">${extraItems}</nav>
  `;
  document.body.appendChild(panel);

  function openSidebar(){ panel.classList.add("open"); overlay.classList.add("open"); }
  function closeSidebar(){ panel.classList.remove("open"); overlay.classList.remove("open"); }

  toggleBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);
  panel.querySelector(".sidebar-close").addEventListener("click", closeSidebar);
}

document.addEventListener("DOMContentLoaded", function(){
  // نؤجل تشغيلها لآخر التنفيذ حتى نضمن تحميل course-manifest.js (لو موجود) قبل الفحص
  setTimeout(function(){
    if(typeof COURSE_CHAPTERS !== "undefined") initSidebar();
  }, 0);
});
