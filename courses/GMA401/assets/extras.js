/* ============================================================
   GMA401 — مكوّنات تفاعلية إضافية: لعبة التصنيف، الحالة العملية، «حلها معي». تعتمد على app.js (shuffle, launchConfetti)
   ============================================================ */

function xFmt(n){ return Number(n).toLocaleString("en-US"); }

/* ---------- لعبة التصنيف: اضغط على الفئة الصحيحة لكل بطاقة ----------
   cfg = { buckets:[{key,label}], items:[{text, bucket, why}] } */
function renderSortGame(containerId, cfg){
  const root = document.getElementById(containerId);
  const buckets = cfg.buckets;
  let queue, idx, mistakes, placed, locked;

  function start(){
    queue = shuffle(cfg.items);
    idx = 0; mistakes = 0; locked = false;
    placed = {}; buckets.forEach(b => placed[b.key] = []);
    draw();
  }

  function draw(){
    if(idx >= queue.length){ return finish(); }
    const cur = queue[idx];
    root.innerHTML = `
      <div class="x-sort">
        <div class="x-sort-top">
          <span>بطاقة <b>${idx + 1}</b> من <b>${queue.length}</b></span>
          <div class="x-sort-bar"><div style="width:${(idx / queue.length) * 100}%"></div></div>
          <span>أخطاء: <b>${mistakes}</b></span>
        </div>
        <div class="x-sort-card" id="${containerId}-card">${cur.text}</div>
        <div class="x-sort-btns">
          ${buckets.map(b => `<button data-k="${b.key}">${b.label}</button>`).join("")}
        </div>
        <div class="x-sort-hint" id="${containerId}-hint">${cfg.hint || "لأي فئة بتنتمي هاي البطاقة؟"}</div>
      </div>`;
    const card = document.getElementById(`${containerId}-card`);
    const hint = document.getElementById(`${containerId}-hint`);
    root.querySelectorAll(".x-sort-btns button").forEach(btn => {
      btn.addEventListener("click", () => {
        if(locked) return;
        if(btn.dataset.k === cur.bucket){
          locked = true;
          card.classList.add("ok");
          hint.innerHTML = `✓ <b>صح!</b> ${cur.why || ""}`;
          placed[cur.bucket].push(cur.text);
          root.querySelectorAll(".x-sort-btns button").forEach(b => b.disabled = true);
          setTimeout(() => { idx++; locked = false; draw(); }, 1400);
        } else {
          mistakes++;
          card.classList.remove("no"); void card.offsetWidth; card.classList.add("no");
          btn.disabled = true;
          hint.innerHTML = `✕ لا، جرّب فئة تانية.`;
          root.querySelector(".x-sort-top b:last-of-type").textContent = mistakes;
        }
      });
    });
  }

  function finish(){
    const total = queue.length;
    const msg = mistakes === 0 ? "ولا غلطة! 🔥" : mistakes <= 2 ? "ممتاز، قريب كتير 👏" : "كمّل تدريب وبتصير أحسن 💪";
    root.innerHTML = `
      <div class="x-sort"><div class="x-sort-done">
        <div class="big">${total - Math.min(mistakes, total)} / ${total}</div>
        <p>${msg} — عدد الأخطاء: ${mistakes}</p>
        <div class="x-sort-buckets">
          ${buckets.map(b => `<div><h5>${b.label}</h5><ul>${placed[b.key].map(t => `<li>${t}</li>`).join("")}</ul></div>`).join("")}
        </div>
        <button class="btn btn-teal" style="margin-top:14px;" id="${containerId}-again">🔄 العب من جديد</button>
      </div></div>`;
    document.getElementById(`${containerId}-again`).addEventListener("click", start);
    if(mistakes <= 1 && typeof launchConfetti === "function") launchConfetti();
  }

  start();
}

/* ---------- حالة عملية ---------- */
function renderCaseStudy(containerId, caseObj){
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="case-card">
      <span class="case-tag">📌 حالة عملية</span>
      <h4>${caseObj.title}</h4>
      <p class="case-scenario">${caseObj.scenario}</p>
      <p class="case-question"><b>${caseObj.question}</b></p>
      <div class="opt-list" id="${containerId}-opts"></div>
      <div class="feedback" id="${containerId}-fb"></div>
    </div>
  `;
  const optsEl = document.getElementById(`${containerId}-opts`);
  const fb = document.getElementById(`${containerId}-fb`);
  const shuffledOptions = shuffle(caseObj.options.map((opt,i)=>({opt, isCorrect: i===caseObj.answerIndex})));
  shuffledOptions.forEach((o) => {
    const el = document.createElement("label");
    el.className = "opt";
    el.innerHTML = `<input type="radio" name="${containerId}-case"> <span>${o.opt}</span>`;
    el.addEventListener("click", () => {
      if(el.classList.contains("locked-answer")) return;
      Array.from(optsEl.children).forEach(c => c.classList.add("locked-answer"));
      el.classList.add("selected", o.isCorrect ? "correct" : "wrong");
      if(!o.isCorrect){
        const correctEl = Array.from(optsEl.children).find((c,i2)=> shuffledOptions[i2].isCorrect);
        if(correctEl) correctEl.classList.add("correct");
      }
      showFeedback(fb, o.isCorrect, caseObj.explanation, null, null);
    });
    optsEl.appendChild(el);
  });
  const resetBtn = document.createElement("button");
  resetBtn.className = "btn btn-ghost btn-reset";
  resetBtn.style.marginTop = "14px";
  resetBtn.textContent = "🔄 جرّب الحالة من جديد";
  resetBtn.addEventListener("click", () => renderCaseStudy(containerId, caseObj));
  container.querySelector(".case-card").appendChild(resetBtn);
}


/* ---------- «حلها معي»: مسألة رياضية خطوة خطوة ----------
   cfg = { title, scenario, steps:[ {type:"choice", q, options:[...], answer:i, hint, explain, result:{label, value}}
                                    | {type:"num", q, answer:Number, tol?, hint, explain, result:{label}} ], finish? }
   الإدخال الرقمي بيقبل كسور (3/4) وأرقام عربية وسالب. */
function xParseMath(s){
  const ar = "٠١٢٣٤٥٦٧٨٩";
  let t = String(s).trim().replace(/[٠-٩]/g, d => ar.indexOf(d)).replace(/[−–]/g, "-").replace(/[٫,]/g, ".").replace(/\s+/g, "");
  const m = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if(m) return Number(m[1]) / Number(m[2]);
  return /^-?\d+(?:\.\d+)?$/.test(t) ? Number(t) : NaN;
}
function renderMathProblem(containerId, cfg){
  const root = document.getElementById(containerId);
  let idx, clean;
  function start(){ idx = 0; clean = 0; draw(); }
  function draw(){
    root.innerHTML = `
      <div class="gp">
        <div class="gp-head"><span class="gp-tag">🧩 حلها معي</span><h4>${cfg.title}</h4></div>
        <div class="gp-scenario">${cfg.scenario}</div>
        <div class="gp-board" id="${containerId}-board"></div>
        <div class="gp-step" id="${containerId}-step"></div>
      </div>`;
    drawStep();
  }
  function drawStep(){
    if(idx >= cfg.steps.length) return finish();
    const s = cfg.steps[idx], total = cfg.steps.length;
    const box = document.getElementById(`${containerId}-step`);
    let wrong = false, done = false, picked = -1;
    box.innerHTML = `
      <div class="gp-prog"><span>الخطوة <b>${idx + 1}</b> من <b>${total}</b></span><div class="x-sort-bar"><div style="width:${(idx / total) * 100}%"></div></div></div>
      <div class="gp-q">${s.q}</div>
      <div class="gp-input"></div>
      <div class="gp-msg"></div>
      <div class="gp-actions">
        <button class="btn btn-teal" data-a="check">تحقق ✓</button>
        <button class="btn btn-ghost" data-a="hint">💡 تلميح</button>
        <button class="btn btn-ghost" data-a="show">👁️ وريني الحل</button>
      </div>`;
    const inEl = box.querySelector(".gp-input"), msg = box.querySelector(".gp-msg");
    const btn = a => box.querySelector(`[data-a="${a}"]`);
    let inp;
    if(s.type === "num"){
      inEl.innerHTML = `<input type="text" inputmode="decimal" class="gp-num" placeholder="اكتب الناتج (مثلاً 3 أو 3/4)" autocomplete="off">`;
      inp = inEl.querySelector("input");
      inp.addEventListener("keydown", e => { if(e.key === "Enter") btn("check").click(); });
    } else {
      inEl.innerHTML = `<div class="gp-opts">${s.options.map((o, i) => `<button type="button" class="gp-opt" data-i="${i}">${o}</button>`).join("")}</div>`;
      inEl.querySelectorAll(".gp-opt").forEach(b => b.addEventListener("click", () => {
        if(done) return;
        picked = Number(b.dataset.i);
        inEl.querySelectorAll(".gp-opt").forEach(x => x.classList.toggle("sel", x === b));
      }));
    }
    const isRight = () => s.type === "num"
      ? Math.abs(xParseMath(inp.value) - s.answer) <= (s.tol ?? 1e-6)
      : picked === s.answer;
    function complete(usedHelp){
      done = true;
      if(!usedHelp && !wrong) clean++;
      if(s.type === "num"){ inp.disabled = true; if(usedHelp) inp.value = s.shown ?? String(s.answer); }
      else inEl.querySelectorAll(".gp-opt").forEach((x, i) => { x.disabled = true; x.classList.toggle("right", i === s.answer); });
      ["check","hint","show"].forEach(a => btn(a).style.display = "none");
      msg.className = "gp-msg ok";
      msg.innerHTML = (usedHelp ? "👁️ هيك الحل:" : wrong ? "✓ صح بالنهاية!" : "✓ صح!") + `<div class="gp-explain">${s.explain}</div>`;
      const val = s.result.value ?? (s.shown ?? String(s.answer));
      document.getElementById(`${containerId}-board`).insertAdjacentHTML("beforeend",
        `<div class="gp-chip"><b>${s.result.label}</b><span>${val}</span></div>`);
      const a = document.createElement("div");
      a.className = "gp-actions";
      a.innerHTML = `<button class="btn btn-primary">${idx + 1 >= total ? "شوف النتيجة 🎯" : "الخطوة التالية ←"}</button>`;
      a.querySelector("button").addEventListener("click", () => { idx++; drawStep(); });
      box.appendChild(a);
    }
    btn("check").addEventListener("click", () => {
      if(done) return;
      if(isRight()) return complete(false);
      wrong = true;
      msg.className = "gp-msg no";
      msg.innerHTML = s.wrongMsg || "مو تمام، جرّب تاني أو اطلب تلميح.";
    });
    btn("hint").addEventListener("click", () => { msg.className = "gp-msg hint"; msg.innerHTML = "💡 " + (s.hint || "راجع القاعدة بالدرس."); });
    btn("show").addEventListener("click", () => { if(!done) complete(true); });
  }
  function finish(){
    const total = cfg.steps.length;
    document.getElementById(`${containerId}-step`).innerHTML = `
      <div class="gp-final">
        <div class="big">${clean} / ${total}</div>
        <p>${clean === total ? "ممتاز! حليتها كلها من أول محاولة بلا مساعدة 🔥" : clean >= total - 1 ? "قريب كتير! 👏" : "شفت الحل خطوة خطوة؛ أعد المسألة وجرّب لحالك 💪"}</p>
        ${cfg.finish || ""}
        <button class="btn btn-ghost" id="${containerId}-again">🔄 أعد المسألة</button>
      </div>`;
    document.getElementById(`${containerId}-again`).addEventListener("click", start);
    if(clean === total && typeof launchConfetti === "function") launchConfetti();
  }
  start();
}
