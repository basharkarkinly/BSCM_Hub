/* ============================================================
   BAC504 — منطق التقدم ومحرك الأسئلة التفاعلي
   يعتمد على localStorage الحقيقي بمتصفح المستخدم (الملف مفتوح
   مباشرة من القرص، وليس Artifact داخل الشات) لذلك التقدم يبقى
   محفوظاً حتى بعد إغلاق المتصفح.
   ============================================================ */

const PROGRESS_KEY = "bac504_progress_v1";
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
function renderQuiz(containerId, pool, opts){
  const container = document.getElementById(containerId);
  const mode = opts.mode || "practice"; // 'practice' | 'exam' | 'final'
  let questions;
  if(mode === "exam"){
    const count = opts.count || pool.length;
    questions = shuffle(pool).slice(0, Math.min(count, pool.length)).map(prepQuestionForExam);
  } else if(mode === "final"){
    // الفحص النهائي: عيّنة مبعثرة من بنك الأسئلة الشامل، مرة وحدة بلا إعادة محاولة
    const count = opts.count || pool.length;
    questions = shuffle(pool).slice(0, Math.min(count, pool.length)).map(prepQuestionForExam);
  } else {
    questions = pool.map(q => ({...q}));
  }

  let answered = 0;
  let correctCount = 0;

  container.innerHTML = "";

  // شريط تقدم علوي
  const metaBar = document.createElement("div");
  metaBar.className = "quiz-meta";
  let metaNote;
  if(mode === "exam") metaNote = `<span>النجاح يتطلب <b>90%</b> فأكثر</span>`;
  else if(mode === "final") metaNote = `<span><b>فحص نهائي شامل</b> — إجابة واحدة لكل سؤال، بلا إعادة محاولة</span>`;
  else metaNote = `<span>تدريب حر — بلا قفل، جاوب وشوف التصحيح فوراً</span>`;
  metaBar.innerHTML = `
    <span>السؤال <b id="qz-answered">0</b> من <b>${questions.length}</b></span>
    <div class="progress-bar-track"><div class="progress-bar-fill" id="qz-bar"></div></div>
    ${metaNote}
  `;
  container.appendChild(metaBar);

  const list = document.createElement("div");
  container.appendChild(list);

  questions.forEach((q, idx) => {
    list.appendChild(buildQuestionCard(q, idx, mode, onAnswered));
  });

  if(mode === "exam" || mode === "final"){
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

  function onAnswered(isCorrect){
    answered += 1;
    if(isCorrect) correctCount += 1;
    document.getElementById("qz-answered").textContent = answered;
    document.getElementById("qz-bar").style.width = (answered / questions.length * 100) + "%";
    if((mode === "exam" || mode === "final") && answered === questions.length){
      document.getElementById("qz-submit").disabled = false;
    }
  }

  function finishExam(qs, opts){
    const scorePercent = Math.round((correctCount / qs.length) * 100);
    const result = recordAttempt(opts.chapterKey, scorePercent);
    renderResult(container, {
      scorePercent, correctCount, total: qs.length,
      passed: scorePercent >= PASS_THRESHOLD,
      attempts: result.attempts,
      bestScore: result.bestScore,
      nextUrl: opts.nextUrl,
      chapterTitle: opts.chapterTitle,
      retakeFn: () => renderQuiz(containerId, pool, opts)
    });
  }

  function finishFinal(qs, opts){
    const scorePercent = Math.round((correctCount / qs.length) * 100);
    try{
      localStorage.setItem("bac504_final_result_v1", JSON.stringify({
        scorePercent, correctCount, total: qs.length, date: new Date().toISOString()
      }));
    }catch(e){ /* تجاهل بصمت */ }
    renderFinalResult(container, { scorePercent, correctCount, total: qs.length });
  }
}

function prepQuestionForExam(q){
  const clone = {...q};
  if(clone.type === "mcq"){
    const correctText = clone.options[clone.answerIndex];
    const shuffled = shuffle(clone.options);
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
        onAnswered(isCorrect);
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
        onAnswered(isCorrect);
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
      onAnswered(isCorrect);
    });
    card.appendChild(input);
    card.appendChild(btn);
  }

  card.appendChild(feedback);
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
  card.innerHTML = `
    <div class="result-stamp ${r.passed ? "pass" : "fail"}">${r.scorePercent}%</div>
    <h2>${r.passed ? "مبروك، فتحت الفصل يلي بعدو! 🎉" : "قريب... بس لسا مو كفاية"}</h2>
    <p>جاوبت صح على ${r.correctCount} من ${r.total} (المطلوب 90% فأكثر) — هاي محاولتك رقم ${r.attempts}، أفضل نتيجة إلك: ${r.bestScore}%</p>
    <div class="cta-row" style="justify-content:center; display:flex; gap:14px; flex-wrap:wrap;">
      <button class="btn btn-teal" id="retake-btn">أعد الامتحان</button>
      ${r.passed ? `<a class="btn btn-primary" href="${r.nextUrl}">${r.nextUrl === "#" ? "قريباً: الفصل التالي" : "روح عالفصل التالي"}</a>` : ""}
      <a class="btn btn-ghost" href="index.html">رجوع لخارطة المقرر</a>
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

  const card = document.createElement("div");
  card.className = "result-card";
  card.innerHTML = `
    <div class="result-stamp ${stampClass}">${r.scorePercent}%</div>
    <h2>${headline}</h2>
    <p>جاوبت صح على ${r.correctCount} من ${r.total} سؤال. هاد فحص نهائي بلا إعادة محاولة — النتيجة انحفظت عندك محلياً كمرجع.</p>
    <div class="cta-row" style="justify-content:center; display:flex; gap:14px; flex-wrap:wrap;">
      <a class="btn btn-ghost" href="index.html">رجوع لخارطة المقرر</a>
    </div>
  `;
  container.appendChild(card);
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

/* ---------- لعبة مطابقة المفكرين ---------- */
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
    if(state && state.passed) doneCount++;
    const locked = !ch.active;
    const stampClass = locked ? "locked" : (state && state.passed ? "done" : "open");
    const stampLabel = locked ? "🔒 مقفول" : (state && state.passed ? "✓ مكتمل" : "متاح الآن");
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
  const doneCount = chapters.filter(c => c.passed).length;

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
    const icon = ch.passed ? "✅" : (locked ? "🔒" : "▫️");
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
