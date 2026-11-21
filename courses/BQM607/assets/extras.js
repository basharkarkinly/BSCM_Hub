/* ============================================================
   BQM607 — مكوّنات تفاعلية إضافية. تعتمد على app.js (shuffle, launchConfetti)
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
        <div class="x-sort-hint" id="${containerId}-hint">${cfg.hint || "لوين بتنتمي هالبطاقة؟"}</div>
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



/* ============================================================
   المسألة الموجّهة (Guided Problem): تُحَلّ خطوة خطوة، وكل خطوة تنضاف للوح الحل.
   cfg = { title, scenario, steps:[...], finish }
   step.type:
     "num"    → { q, answer, hint, explain, result:{label} }
     "choice" → { q, options[], answer(index), hint, explain, result:{label,value} }
     "entry"  → { q, accounts[], lines:[{side:"d"|"c",acct,amt}], hint, explain, note }
   ============================================================ */
function xParseNum(s){
  const ar = "٠١٢٣٤٥٦٧٨٩";
  const t = String(s).replace(/[٠-٩]/g, d => ar.indexOf(d)).replace(/[^0-9.\-]/g, "");
  return t === "" ? NaN : Number(t);
}

function xEntryTable(lines, note){
  const ds = lines.filter(l => l.side === "d"), cs = lines.filter(l => l.side === "c");
  const rows = [
    ...ds.map(l => `<tr><td>من ح/ ${l.acct}</td><td class="n">${xFmt(l.amt)}</td><td></td></tr>`),
    ...cs.map(l => `<tr class="cr"><td>إلى ح/ ${l.acct}</td><td></td><td class="n">${xFmt(l.amt)}</td></tr>`)
  ].join("");
  return `<div class="gp-entry-wrap"><table class="gp-entry"><thead><tr><th>البيان</th><th>مدين</th><th>دائن</th></tr></thead><tbody>${rows}${note ? `<tr class="note"><td colspan="3">${note}</td></tr>` : ""}</tbody></table></div>`;
}

function renderGuidedProblem(containerId, cfg){
  const root = document.getElementById(containerId);
  let idx, clean, board;

  function start(){ idx = 0; clean = 0; board = []; draw(); }

  function boardHTML(){
    return board.map(b => b).join("");
  }

  function draw(){
    root.innerHTML = `
      <div class="gp">
        <div class="gp-head"><span class="gp-tag">🧩 مسألة تفاعلية</span><h4>${cfg.title}</h4></div>
        <div class="gp-scenario">${cfg.scenario}</div>
        <div class="gp-board" id="${containerId}-board">${boardHTML()}</div>
        <div class="gp-step" id="${containerId}-step"></div>
      </div>`;
    if(idx >= cfg.steps.length) return finish();
    drawStep();
  }

  function drawStep(){
    const s = cfg.steps[idx];
    const box = document.getElementById(`${containerId}-step`);
    const total = cfg.steps.length;
    let helped = false, wrong = false, done = false;

    box.innerHTML = `
      <div class="gp-prog"><span>الخطوة <b>${idx + 1}</b> من <b>${total}</b></span><div class="x-sort-bar"><div style="width:${(idx / total) * 100}%"></div></div></div>
      <div class="gp-q">${s.q}</div>
      <div class="gp-input" id="${containerId}-in"></div>
      <div class="gp-msg" id="${containerId}-msg"></div>
      <div class="gp-actions">
        <button class="btn btn-teal" id="${containerId}-check">تحقق ✓</button>
        <button class="btn btn-ghost" id="${containerId}-hint">💡 تلميح</button>
        <button class="btn btn-ghost" id="${containerId}-show">👁️ وريني الحل</button>
      </div>`;
    const inEl = box.querySelector(`#${containerId}-in`);
    const msg = box.querySelector(`#${containerId}-msg`);
    const bCheck = box.querySelector(`#${containerId}-check`);
    const bHint = box.querySelector(`#${containerId}-hint`);
    const bShow = box.querySelector(`#${containerId}-show`);

    let getState, fillAnswer, lockUI, boardHtml;

    if(s.type === "num"){
      inEl.innerHTML = `<input type="text" inputmode="numeric" dir="ltr" class="gp-num" placeholder="اكتب الرقم" autocomplete="off"><span class="gp-unit">ل.س</span>`;
      const inp = inEl.querySelector("input");
      inp.addEventListener("keydown", e => { if(e.key === "Enter") bCheck.click(); });
      getState = () => xParseNum(inp.value) === s.answer;
      fillAnswer = () => { inp.value = xFmt(s.answer); };
      lockUI = () => { inp.disabled = true; };
      boardHtml = () => `<div class="gp-chip"><b>${s.result.label}</b><span dir="ltr">${xFmt(s.answer)}</span> ل.س</div>`;
    } else if(s.type === "choice"){
      inEl.innerHTML = `<div class="gp-opts">${s.options.map((o, i) => `<button type="button" class="gp-opt" data-i="${i}">${o}</button>`).join("")}</div>`;
      let picked = -1;
      inEl.querySelectorAll(".gp-opt").forEach(b => b.addEventListener("click", () => {
        if(done) return;
        picked = Number(b.dataset.i);
        inEl.querySelectorAll(".gp-opt").forEach(x => x.classList.toggle("sel", x === b));
      }));
      getState = () => picked === s.answer;
      fillAnswer = () => { picked = s.answer; inEl.querySelectorAll(".gp-opt").forEach((x, i) => x.classList.toggle("sel", i === s.answer)); };
      lockUI = () => { inEl.querySelectorAll(".gp-opt").forEach((x, i) => { x.disabled = true; if(i === s.answer) x.classList.add("right"); }); };
      boardHtml = () => `<div class="gp-chip"><b>${s.result.label}</b><span>${s.result.value}</span></div>`;
    } else { /* entry */
      const ordered = [...s.lines.filter(l => l.side === "d"), ...s.lines.filter(l => l.side === "c")];
      inEl.innerHTML = `
        <div class="gp-rows">
          ${ordered.map((l, i) => `
            <div class="gp-row ${l.side === "c" ? "cr" : ""}" data-i="${i}">
              <span class="gp-side">${l.side === "d" ? "من ح/" : "إلى ح/"}</span>
              <select class="gp-sel"><option value="">اختر الحساب…</option>${s.accounts.map(a => `<option value="${a}">${a}</option>`).join("")}</select>
              <input type="text" inputmode="numeric" dir="ltr" class="gp-amt" placeholder="المبلغ" autocomplete="off">
            </div>`).join("")}
        </div>
        <div class="gp-bal" id="${containerId}-bal"></div>`;
      const rows = [...inEl.querySelectorAll(".gp-row")];
      const bal = inEl.querySelector(`#${containerId}-bal`);
      function updBal(){
        let d = 0, c = 0;
        rows.forEach((r, i) => {
          const v = xParseNum(r.querySelector(".gp-amt").value);
          if(!isNaN(v)) (ordered[i].side === "d" ? (d += v) : (c += v));
        });
        bal.className = "gp-bal" + (d > 0 && d === c ? " ok" : "");
        bal.innerHTML = `مجموع المدين: <b dir="ltr">${xFmt(d)}</b> · مجموع الدائن: <b dir="ltr">${xFmt(c)}</b> ${d > 0 && d === c ? "✓ متوازن" : ""}`;
      }
      rows.forEach(r => { r.querySelector(".gp-amt").addEventListener("input", updBal); r.querySelector(".gp-sel").addEventListener("change", updBal); });
      updBal();
      getState = () => {
        const left = ordered.map(l => ({...l, used:false}));
        let allOk = true;
        rows.forEach((r, i) => {
          const side = ordered[i].side;
          const acct = r.querySelector(".gp-sel").value;
          const amt = xParseNum(r.querySelector(".gp-amt").value);
          const hit = left.find(l => !l.used && l.side === side && l.acct === acct && l.amt === amt);
          r.classList.remove("ok", "bad");
          if(hit){ hit.used = true; r.classList.add("ok"); } else { r.classList.add("bad"); allOk = false; }
        });
        return allOk;
      };
      fillAnswer = () => rows.forEach((r, i) => { r.querySelector(".gp-sel").value = ordered[i].acct; r.querySelector(".gp-amt").value = xFmt(ordered[i].amt); r.classList.remove("bad"); r.classList.add("ok"); updBal(); });
      lockUI = () => rows.forEach(r => { r.querySelector(".gp-sel").disabled = true; r.querySelector(".gp-amt").disabled = true; });
      boardHtml = () => `<div class="gp-board-item"><div class="gp-board-t">${s.title || "قيد اليومية"}</div>${xEntryTable(s.lines, s.note)}</div>`;
    }

    function complete(usedHelp){
      done = true;
      if(!usedHelp && !wrong) clean++;
      lockUI();
      bCheck.style.display = bHint.style.display = bShow.style.display = "none";
      msg.className = "gp-msg ok";
      msg.innerHTML = (usedHelp ? "👁️ هيك الحل:" : (wrong ? "✓ صح بالنهاية!" : "✓ صح!")) + `<div class="gp-explain">${s.explain}</div>`;
      board.push(boardHtml());
      const a = document.createElement("div");
      a.className = "gp-actions";
      a.innerHTML = `<button class="btn btn-primary">${idx + 1 >= cfg.steps.length ? "شوف النتيجة النهائية 🎯" : "الخطوة التالية ←"}</button>`;
      a.querySelector("button").addEventListener("click", () => { idx++; draw(); });
      box.appendChild(a);
      const bd = document.getElementById(`${containerId}-board`);
      bd.insertAdjacentHTML("beforeend", board[board.length - 1]);
    }

    bCheck.addEventListener("click", () => {
      if(done) return;
      if(getState()){ complete(false); }
      else {
        wrong = true;
        msg.className = "gp-msg no";
        msg.textContent = s.type === "entry" ? "في سطر غلط (الأحمر). راجع الحساب والمبلغ، أو اطلب تلميح." : "مو تمام، جرّب تاني أو اطلب تلميح.";
      }
    });
    bHint.addEventListener("click", () => {
      helped = true;
      msg.className = "gp-msg hint";
      msg.innerHTML = "💡 " + (s.hint || "راجع القاعدة بالدرس وحاول من جديد.");
    });
    bShow.addEventListener("click", () => {
      if(done) return;
      helped = true;
      fillAnswer();
      complete(true);
    });
  }

  function finish(){
    const total = cfg.steps.length;
    const box = root.querySelector(".gp");
    const stepBox = document.getElementById(`${containerId}-step`);
    stepBox.innerHTML = `
      <div class="gp-final">
        <div class="big">${clean} / ${total}</div>
        <p>${clean === total ? "ممتاز! حليتها كلها من أول محاولة بدون مساعدة 🔥" : clean >= total - 1 ? "قريب كتير! 👏" : "خلّيت الحل يوضّحلك؛ أعد المسألة وجرّب من جديد 💪"}</p>
        ${cfg.finish || ""}
        <button class="btn btn-ghost" id="${containerId}-again">🔄 أعد المسألة</button>
      </div>`;
    document.getElementById(`${containerId}-again`).addEventListener("click", start);
    if(clean === total && typeof launchConfetti === "function") launchConfetti();
  }

  start();
}





/* ---------- حالة عملية (من موقع BQM607 القديم) ---------- */
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


function xDragWire(root, onDrop, onTap){
  let drag = null;
  root.querySelectorAll(".x-chip").forEach(ch => {
    ch.addEventListener("pointerdown", e => {
      if(ch.disabled) return;
      e.preventDefault();
      const r = ch.getBoundingClientRect();
      drag = { id:ch.dataset.id, el:ch, sx:e.clientX, sy:e.clientY, moved:false, ghost:null, dx:e.clientX - r.left, dy:e.clientY - r.top };
      try{ ch.setPointerCapture(e.pointerId); }catch(_){}
    });
    ch.addEventListener("pointermove", e => {
      if(!drag || drag.el !== ch) return;
      if(!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return;
      if(!drag.moved){
        drag.moved = true;
        const g = ch.cloneNode(true); g.classList.add("eqs-ghost"); document.body.appendChild(g); drag.ghost = g;
        ch.classList.add("lifting");
      }
      drag.ghost.style.left = (e.clientX - drag.dx) + "px";
      drag.ghost.style.top = (e.clientY - drag.dy) + "px";
      root.querySelectorAll("[data-zone].over").forEach(x => x.classList.remove("over"));
      const t = document.elementFromPoint(e.clientX, e.clientY);
      const z = t && t.closest("[data-zone]"); if(z && root.contains(z)) z.classList.add("over");
    });
    const end = e => {
      if(!drag || drag.el !== ch) return;
      const d = drag; drag = null;
      if(d.ghost) d.ghost.remove();
      ch.classList.remove("lifting");
      root.querySelectorAll("[data-zone].over").forEach(x => x.classList.remove("over"));
      if(!d.moved){ onTap(d.id, ch); return; }
      if(e.type === "pointercancel") return;
      const t = document.elementFromPoint(e.clientX, e.clientY);
      const z = t && t.closest("[data-zone]");
      if(z && root.contains(z)) onDrop(d.id, z.dataset.zone);
    };
    ch.addEventListener("pointerup", end);
    ch.addEventListener("pointercancel", end);
  });
}

/* ============================================================
   🔢 رتّب الخطوات — اضغط على الخطوات بالترتيب الصحيح
   cfg = { title, hint, steps:["…","…"], finish }
   ============================================================ */
function renderOrderGame(containerId, cfg){
  const root = document.getElementById(containerId);
  let done, pool, mistakes;
  function reset(){ done = []; mistakes = 0; pool = shuffle(cfg.steps.map((t, i) => ({ t, i }))); draw(); }
  function draw(){
    const fin = done.length === cfg.steps.length;
    root.innerHTML = `
      <div class="eqs og">
        <div class="eqs-head"><span class="gp-tag">🔢 رتّب</span><h4>${cfg.title}</h4></div>
        <ol class="og-done">${done.map(i => `<li>${cfg.steps[i]}</li>`).join("")}${fin ? "" : `<li class="og-next">؟</li>`}</ol>
        ${fin ? `<div class="eqs-msg ok">✅ <b>رتّبتها كلها!</b> عدد الأخطاء: ${mistakes}. ${cfg.finish || ""}</div><button type="button" class="btn btn-teal og-again">🔁 عيد</button>`
              : `<p class="eqs-hint">${cfg.hint || "اضغط على الخطوة الجاية بالترتيب."}</p><div class="eqs-tray">${pool.filter(p => !done.includes(p.i)).map(p => `<button type="button" class="eqs-chip og-chip" data-i="${p.i}">${p.t}</button>`).join("")}</div><div class="eqs-msg" id="${containerId}-msg"></div>`}
      </div>`;
    root.querySelectorAll(".og-chip").forEach(b => b.addEventListener("click", () => {
      const i = +b.dataset.i;
      if(i === done.length){ done.push(i); if(done.length === cfg.steps.length && typeof launchConfetti === "function") launchConfetti(); draw(); }
      else { mistakes++; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake");
        const m = document.getElementById(`${containerId}-msg`); m.className = "eqs-msg bad"; m.innerHTML = "❌ مو هي الخطوة الجاية، فكّر شو لازم يصير قبلها."; }
    }));
    const a = root.querySelector(".og-again"); if(a) a.addEventListener("click", reset);
  }
  reset();
}


/* ============================================================
   🔺 مثلث القيود (الفصل 1): الزمن × التكلفة × النطاق، والجودة بالنص.
   القاعدة: النطاق × K = الزمن × التكلفة. أي تغيير بواحد لازم يتحمّلو واحد تاني مفتوح (غير مقفول)؛
   وإذا كل الباقي مقفول، الجودة هي اللي بتدفع الثمن.
   cfg = { title, K, vars:{time:{label,unit,min,max,val,step}, cost:{…}, scope:{…}}, locks:{time:true},
           scenarios:[{label, set:{time:8}, locks:{…}, note}] }
   ============================================================ */
function renderTriangle(containerId, cfg){
  const root = document.getElementById(containerId);
  const KEYS = ["time", "cost", "scope"];
  const ICON = { time:"⏱️", cost:"💰", scope:"📦" };
  const DIR = { time:[0,-1], cost:[-0.866,0.5], scope:[0.866,0.5] };   // الزمن فوق، التكلفة يسار، النطاق يمين
  let v, locks, msg;
  const V = cfg.vars;
  const clamp = (k, x) => Math.min(V[k].max, Math.max(V[k].min, x));
  const rnd = (k, x) => { const s = V[k].step || 1; return Math.round(x / s) * s; };
  const quality = () => Math.round(100 * Math.min(1, (v.time * v.cost) / (v.scope * cfg.K)));
  // unit: [جمع لـ 3–10, مفرد لغيرها] متل ["أسابيع","أسبوع"]
  const fmt = (k, x) => { const u = V[k].unit; const w = Array.isArray(u) ? ((x >= 3 && x <= 10) ? u[0] : u[1]) : u; return `${xFmt(x)} ${w}`; };
  const verb = (k, up) => V[k].fem ? (up ? "طلعت" : "نزلت") : (up ? "طلع" : "نزل");

  function reset(){ v = {}; KEYS.forEach(k => v[k] = V[k].val); locks = Object.assign({ time:false, cost:false, scope:false }, cfg.locks || {}); msg = null; draw(); }

  // غيّر k لقيمة x، ووازن بالمتغيرات المفتوحة
  function change(k, x){
    const before = Object.assign({}, v);
    v[k] = clamp(k, x);
    const others = KEYS.filter(o => o !== k && !locks[o]);
    const need = () => v.scope * cfg.K, cap = () => v.time * v.cost;
    if(k === "scope"){
      if(others.length === 2){ const f = Math.sqrt(need() / cap()); v.time = clamp("time", rnd("time", v.time * f)); v.cost = clamp("cost", rnd("cost", need() / v.time)); }
      else if(others.length === 1){ const o = others[0], p = o === "time" ? "cost" : "time"; v[o] = clamp(o, rnd(o, need() / v[p])); }
    } else {
      const p = k === "time" ? "cost" : "time";   // المورد التاني أولاً، وإذا مقفول منقص من النطاق
      if(!locks[p]) v[p] = clamp(p, rnd(p, need() / v[k]));
      else if(!locks.scope) v.scope = clamp("scope", rnd("scope", cap() / cfg.K));
    }
    const moved = KEYS.filter(o => o !== k && v[o] !== before[o]);
    const parts = moved.map(o => `${ICON[o]} ${V[o].label} ${verb(o, v[o] > before[o])} من <b>${fmt(o, before[o])}</b> لـ <b>${fmt(o, v[o])}</b>`);
    const q = quality();
    let text = `غيّرت ${ICON[k]} <b>${V[k].label}</b> لـ <b>${fmt(k, v[k])}</b>`;
    if(parts.length) text += " ← " + parts.join("، و");
    if(q < 100) text += `. ${parts.length ? "وما كفّى" : "وما في شي مفتوح يتحمّل التغيير"}، <b>فالجودة نزلت لـ ${q}%</b> ⚠️`;
    else if(!parts.length) text += ". المثلث بعدو متوازن.";
    msg = { text, bad: q < 100 };
    draw();
  }

  function svg(){
    const c = [150, 132], pts = {};
    KEYS.forEach(k => { const t = (v[k] - V[k].min) / (V[k].max - V[k].min); const r = 48 + 62 * t; pts[k] = [c[0] + DIR[k][0] * r, c[1] + DIR[k][1] * r]; });
    const q = quality(), col = q >= 100 ? "#0B7A57" : q >= 80 ? "#C77700" : "#B4402B";
    const LP = { time:[c[0], c[1] - 120], cost:[c[0] - 96, c[1] + 82], scope:[c[0] + 96, c[1] + 82] };
    const lab = k => { const [x, y] = LP[k]; return `<text x="${x}" y="${y}" text-anchor="middle" class="tri-lab">${locks[k] ? "🔒 " : ""}${ICON[k]} ${V[k].label}</text>`; };
    return `<svg viewBox="0 0 300 236" class="tri-svg" role="img" aria-label="مثلث القيود">
      <polygon points="${KEYS.map(k => [c[0] + DIR[k][0] * 110, c[1] + DIR[k][1] * 110].join(",")).join(" ")}" class="tri-max"/>
      <polygon points="${KEYS.map(k => pts[k].join(",")).join(" ")}" class="tri-now" style="stroke:${col}"/>
      ${KEYS.map(k => `<circle cx="${pts[k][0]}" cy="${pts[k][1]}" r="6" fill="${col}"/>`).join("")}
      <circle cx="${c[0]}" cy="${c[1]}" r="30" fill="#fff" stroke="${col}" stroke-width="3"/>
      <text x="${c[0]}" y="${c[1] - 3}" text-anchor="middle" class="tri-q" fill="${col}">${q}%</text>
      <text x="${c[0]}" y="${c[1] + 14}" text-anchor="middle" class="tri-ql">الجودة</text>
      ${KEYS.map(lab).join("")}
    </svg>`;
  }

  function draw(){
    root.innerHTML = `
      <div class="eqs tri">
        <div class="eqs-head"><span class="gp-tag">🔺 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="tri-grid">
          <div class="tri-fig">${svg()}</div>
          <div class="tri-ctrl">
            ${KEYS.map(k => `
              <div class="tri-row${locks[k] ? " locked" : ""}">
                <div class="tri-rh"><span>${ICON[k]} ${V[k].label}</span><b>${fmt(k, v[k])}</b>
                  <button type="button" class="tri-lock" data-k="${k}" aria-pressed="${locks[k]}" title="${locks[k] ? "فك القفل" : "اقفل (ثابت ما بيتغيّر)"}">${locks[k] ? "🔒" : "🔓"}</button></div>
                <input type="range" min="${V[k].min}" max="${V[k].max}" step="${V[k].step || 1}" value="${v[k]}" data-k="${k}" ${locks[k] ? "disabled" : ""} aria-label="${V[k].label}">
              </div>`).join("")}
            <p class="eqs-hint">🔒 = قيد ثابت ما بيتغيّر. حرّك أي سلايدر مفتوح وشوف مين بيتحمّل التغيير.</p>
          </div>
        </div>
        <div class="eqs-msg ${msg ? (msg.bad ? "bad" : "ok") : ""}" aria-live="polite">${msg ? msg.text : "المثلث متوازن: الزمن × التكلفة بيكفّوا النطاق المطلوب بجودة 100%."}</div>
        ${cfg.scenarios ? `<div class="tri-sc"><b>📣 مواقف من «أوفلاين»:</b>${cfg.scenarios.map((s, i) => `<button type="button" class="tri-sc-b" data-i="${i}">${s.label}</button>`).join("")}</div>` : ""}
        <div class="tri-note" id="${containerId}-note"></div>
        <button type="button" class="btn btn-teal tri-reset">🔁 رجّع المثلث لأولو</button>
      </div>`;
    root.querySelectorAll("input[type=range]").forEach(r => r.addEventListener("change", () => change(r.dataset.k, +r.value)));
    root.querySelectorAll("input[type=range]").forEach(r => r.addEventListener("input", () => { r.closest(".tri-row").querySelector("b").textContent = fmt(r.dataset.k, +r.value); }));
    root.querySelectorAll(".tri-lock").forEach(b => b.addEventListener("click", () => { locks[b.dataset.k] = !locks[b.dataset.k]; msg = null; draw(); }));
    root.querySelector(".tri-reset").addEventListener("click", reset);
    root.querySelectorAll(".tri-sc-b").forEach(b => b.addEventListener("click", () => {
      const s = cfg.scenarios[+b.dataset.i];
      KEYS.forEach(k => v[k] = V[k].val);
      locks = Object.assign({ time:false, cost:false, scope:false }, s.locks || {});
      const [k, x] = Object.entries(s.set)[0];
      change(k, x);
      const n = document.getElementById(`${containerId}-note`); n.innerHTML = `💡 ${s.note}`; n.classList.add("on");
    }));
  }
  reset();
}

/* ============================================================
   📈 منحنى دورة حياة المشروع (الفصل 2): حرّك الزمن وشوف:
   الجهد والتكلفة (بيطلع لذروة وبينزل)، احتمال النجاح (بيزيد)، قدرة أصحاب المصلحة عالتأثير (بتقل)، كلفة التغيير (بتزيد).
   cfg = { title, phases:[{from,to,name}], events:[{t, text}] }
   ============================================================ */
function renderLifeCurve(containerId, cfg){
  const root = document.getElementById(containerId);
  const W = 560, H = 230, PL = 14, PR = 14, PT = 16, PB = 40;
  const X = t => PL + (W - PL - PR) * t / 100, Y = v => PT + (H - PT - PB) * (1 - v / 100);
  const f = {
    effort:  t => 8 + 84 * Math.exp(-Math.pow((t - 58) / 24, 2)),
    success: t => 15 + 80 * (1 / (1 + Math.exp(-(t - 45) / 12))),
    infl:    t => 95 - 85 * (1 / (1 + Math.exp(-(t - 35) / 12))),
    change:  t => 5 + 90 * (1 / (1 + Math.exp(-(t - 55) / 13)))
  };
  const L = [
    {k:"effort", name:"الجهد والتكلفة وعدد العاملين", col:"#1D3557", w:4},
    {k:"success", name:"احتمال نجاح المشروع", col:"#0B7A57", w:2.5},
    {k:"infl", name:"قدرة أصحاب المصلحة عالتأثير", col:"#FF9F1C", w:2.5},
    {k:"change", name:"كلفة إدخال أي تغيير", col:"#B4402B", w:2.5}
  ];
  const path = fn => { let d = ""; for(let t = 0; t <= 100; t += 2) d += (t ? "L" : "M") + X(t).toFixed(1) + "," + Y(fn(t)).toFixed(1); return d; };
  const phaseAt = t => cfg.phases.find(p => t >= p.from && t <= p.to) || cfg.phases[cfg.phases.length - 1];
  const eventAt = t => { let e = null; cfg.events.forEach(x => { if(x.t <= t) e = x; }); return e; };
  root.innerHTML = `
    <div class="eqs lc">
      <div class="eqs-head"><span class="gp-tag">📈 حرّك الزمن</span><h4>${cfg.title}</h4></div>
      <svg viewBox="0 0 ${W} ${H}" class="lc-svg" role="img" aria-label="منحنى دورة حياة المشروع">
        ${cfg.phases.map((p, i) => `<rect x="${X(p.from)}" y="${PT}" width="${X(p.to) - X(p.from)}" height="${H - PT - PB}" fill="${i % 2 ? "#F5F7FB" : "#fff"}"/>
          <text x="${(X(p.from) + X(p.to)) / 2}" y="${H - 20}" text-anchor="middle" class="lc-ph">${p.name}</text>`).join("")}
        ${L.map(l => `<path d="${path(f[l.k])}" fill="none" stroke="${l.col}" stroke-width="${l.w}" stroke-linecap="round" ${l.k === "effort" ? "" : 'stroke-dasharray="6 5"'}/>`).join("")}
        <line class="lc-cur" x1="0" x2="0" y1="${PT}" y2="${H - PB}" stroke="#0F1C2E" stroke-width="2"/>
        <text x="${X(0) + 62}" y="${H - 4}" class="lc-ax" text-anchor="middle">← البداية (الضوء الأخضر)</text>
        <text x="${X(100) - 44}" y="${H - 4}" class="lc-ax" text-anchor="middle">التسليم للزبون →</text>
      </svg>
      <input type="range" min="0" max="100" value="5" class="lc-range" aria-label="الزمن على عمر المشروع" style="direction:ltr">
      <div class="lc-phase"></div>
      <div class="lc-meters">${L.map(l => `<div class="lc-m"><span class="lc-dot" style="background:${l.col}"></span><span>${l.name}</span><b data-k="${l.k}"></b><i><u data-k="${l.k}" style="background:${l.col}"></u></i></div>`).join("")}</div>
      <div class="eqs-msg ok lc-ev" aria-live="polite"></div>
    </div>`;
  const rng = root.querySelector(".lc-range"), cur = root.querySelector(".lc-cur");
  const lvl = v => v < 30 ? "منخفض" : v < 65 ? "متوسط" : "عالي";
  function upd(){
    const t = +rng.value; const x = X(t);
    cur.setAttribute("x1", x); cur.setAttribute("x2", x);
    const p = phaseAt(t);
    root.querySelector(".lc-phase").innerHTML = `📍 إنت هلأ بمرحلة <b>${p.name}</b>`;
    L.forEach(l => { const v = f[l.k](t); root.querySelector(`b[data-k=${l.k}]`).textContent = lvl(v); root.querySelector(`u[data-k=${l.k}]`).style.width = v.toFixed(0) + "%"; });
    const e = eventAt(t); root.querySelector(".lc-ev").innerHTML = e ? `☕ «أوفلاين»: ${e.text}` : "";
  }
  rng.addEventListener("input", upd); upd();
}

/* ============================================================
   ⚖️ مصفوفة القرار المرجح (الفصل 3): الأوزان بسلايدرات (بتتطبّع لـ 100%)،
   والنتيجة = Σ (تقييم البديل × وزن المعيار). بتشوف الترتيب عم يتغيّر (تحليل الحساسية).
   cfg = { title, alts:["أ","ب","ج"], criteria:[{name, w, scores:[..]}] }
   ============================================================ */
function renderDecisionMatrix(containerId, cfg){
  const root = document.getElementById(containerId);
  const init = cfg.criteria.map(c => c.w);
  let w = init.slice(), lastWinner = null;
  const COLS = ["#1D3557", "#FF9F1C", "#2EC4B6", "#B4402B"];
  function totals(){ const sum = w.reduce((a, b) => a + b, 0) || 1; return cfg.alts.map((_, j) => cfg.criteria.reduce((s, c, i) => s + c.scores[j] * w[i] / sum, 0)); }
  function draw(){
    const sum = w.reduce((a, b) => a + b, 0) || 1, T = totals(), max = Math.max(...T), win = T.indexOf(max);
    const changed = lastWinner !== null && win !== lastWinner;
    root.innerHTML = `
      <div class="eqs dm">
        <div class="eqs-head"><span class="gp-tag">⚖️ جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="dm-scroll"><table class="cmp dm-t">
          <tr><th>المعيار</th><th>الوزن</th>${cfg.alts.map((a, j) => `<th style="color:${COLS[j]}">${a}</th>`).join("")}</tr>
          ${cfg.criteria.map((c, i) => `<tr><td>${c.name}</td>
            <td class="dm-w"><input type="range" min="0" max="50" value="${w[i]}" data-i="${i}" aria-label="وزن ${c.name}"><b>${Math.round(100 * w[i] / sum)}%</b></td>
            ${c.scores.map(s => `<td>${s}</td>`).join("")}</tr>`).join("")}
          <tr class="dm-tot"><td>النتيجة المرجّحة</td><td>100%</td>${T.map((t, j) => `<td style="color:${COLS[j]}">${xFmt(Math.round(t * 10) / 10)}${j === win ? " 🏆" : ""}</td>`).join("")}</tr>
        </table></div>
        <div class="dm-bars">${T.map((t, j) => `<div class="dm-bar"><span>${cfg.alts[j]}</span><i><u style="width:${t}%;background:${COLS[j]}"></u></i><b>${xFmt(Math.round(t * 10) / 10)}</b></div>`).join("")}</div>
        <div class="eqs-msg ${changed ? "bad" : "ok"}" aria-live="polite">${changed ? `🔄 تغيّر الترتيب! صار الأول <b>${cfg.alts[win]}</b>. هاد هو <b>تحليل الحساسية</b>: لأي حد لازم يتغيّر الوزن ليتغيّر القرار.` : `الأفضل حالياً: <b>${cfg.alts[win]}</b>. حرّك أوزان المعايير وشوف إيمتى بيتغيّر القرار.`}</div>
        <details class="accordion"><summary>🧮 كيف انحسبت نتيجة «${cfg.alts[win]}»؟</summary>
          <p style="direction:rtl">${cfg.criteria.map((c, i) => `(${c.scores[win]} × ${Math.round(100 * w[i] / sum)}%)`).join(" + ")} = <b>${xFmt(Math.round(max * 10) / 10)}</b></p></details>
        <button type="button" class="btn btn-teal dm-reset">🔁 رجّع الأوزان الأصلية</button>
      </div>`;
    lastWinner = win;
    root.querySelectorAll(".dm-w input").forEach(r => r.addEventListener("change", () => { w[+r.dataset.i] = +r.value; draw(); }));
    root.querySelectorAll(".dm-w input").forEach(r => r.addEventListener("input", () => { const t = w.slice(); t[+r.dataset.i] = +r.value; const s = t.reduce((a, b) => a + b, 0) || 1; root.querySelectorAll(".dm-w b").forEach((b, i) => b.textContent = Math.round(100 * t[i] / s) + "%"); }));
    root.querySelector(".dm-reset").addEventListener("click", () => { w = init.slice(); lastWinner = null; draw(); });
  }
  draw();
}

/* ============================================================
   💰 الحاسبة المالية (الفصل 3): NPV = I0 + Σ Ft/(1+k)^t ، ROI = (العوائد − التكاليف) ÷ التكاليف ،
   فترة الاسترداد = لحظة ما يصير التدفق التراكمي صفر (بالاستيفاء الخطي داخل السنة).
   cfg = { title, k, flows:[-I0, F1, F2, …], unit, presets:[{label, k, flows}] }
   ============================================================ */
function renderFinCalc(containerId, cfg){
  const root = document.getElementById(containerId);
  let k = cfg.k, flows = cfg.flows.slice(), unit = cfg.unit;
  const r2 = x => Math.round(x * 100) / 100;
  function calc(){
    const rows = []; let npv = 0, cum = 0, pay = null;
    flows.forEach((f, t) => {
      const fac = 1 / Math.pow(1 + k / 100, t), pv = f * fac; const prev = cum; cum += f; npv += pv;
      if(pay === null && t > 0 && prev < 0 && cum >= 0) pay = (t - 1) + (-prev) / f;
      rows.push({ t, f, fac, pv, cum });
    });
    const cost = -flows.filter(f => f < 0).reduce((a, b) => a + b, 0), ben = flows.filter(f => f > 0).reduce((a, b) => a + b, 0);
    return { rows, npv, pay, roi: cost ? (ben - cost) / cost : 0 };
  }
  function draw(){
    const c = calc(), u = unit;
    root.innerHTML = `
      <div class="eqs fc">
        <div class="eqs-head"><span class="gp-tag">💰 احسب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="fc-k"><label>معدل الخصم k: <b>${k}%</b></label><input type="range" min="0" max="30" value="${k}" class="fc-kr" aria-label="معدل الخصم"></div>
        <div class="dm-scroll"><table class="cmp fc-t">
          <tr><th>السنة t</th><th>صافي التدفق Ft (${u})</th><th>معامل الخصم 1÷(1+k)<sup>t</sup></th><th>القيمة الحالية</th><th>التراكمي (بدون خصم)</th></tr>
          ${c.rows.map(r => `<tr><td>${r.t}</td><td><input type="number" step="any" value="${r.f}" data-t="${r.t}" class="fc-in" aria-label="تدفق السنة ${r.t}"></td>
            <td>${r.fac.toFixed(3)}</td><td class="${r.pv < 0 ? "neg" : ""}">${xFmt(r2(r.pv))}</td><td class="${r.cum < 0 ? "neg" : ""}">${xFmt(r2(r.cum))}</td></tr>`).join("")}
        </table></div>
        <div class="fc-res">
          <div class="${c.npv >= 0 ? "ok" : "bad"}"><span>NPV القيمة الحالية الصافية</span><b>${xFmt(r2(c.npv))} ${u}</b><small>${c.npv > 0 ? "موجبة ← مجدي مالياً ✅" : c.npv < 0 ? "سالبة ← مو مجدي ❌" : "صفر ← متل الاستثمار البديل"}</small></div>
          <div><span>ROI العائد على الاستثمار</span><b>${Math.round(c.roi * 1000) / 10}%</b><small>(العوائد − التكاليف) ÷ التكاليف</small></div>
          <div><span>فترة الاسترداد</span><b>${c.pay === null ? "ما بيسترد" : xFmt(r2(c.pay)) + " سنة"}</b><small>لحظة ما التراكمي بيوصل للصفر</small></div>
        </div>
        ${cfg.presets ? `<div class="tri-sc"><b>📂 أمثلة:</b>${cfg.presets.map((p, i) => `<button type="button" class="tri-sc-b" data-i="${i}">${p.label}</button>`).join("")}</div>` : ""}
      </div>`;
    root.querySelector(".fc-kr").addEventListener("input", e => { k = +e.target.value; draw(); });
    root.querySelectorAll(".fc-in").forEach(inp => inp.addEventListener("change", () => { const v = parseFloat(inp.value); flows[+inp.dataset.t] = isNaN(v) ? 0 : v; draw(); }));
    root.querySelectorAll(".tri-sc-b").forEach(b => b.addEventListener("click", () => { const p = cfg.presets[+b.dataset.i]; k = p.k; flows = p.flows.slice(); unit = p.unit || cfg.unit; draw(); }));
  }
  draw();
}

/* ============================================================
   🌳 ابني هيكل تقسيم العمل WBS (الفصل 4): اسحب كل حزمة عمل لناتجها (أو «برّا النطاق»).
   كل حزمة بتاخد رمز WBS تلقائي (1.1، 1.2…)، ومؤشر «قاعدة 100%» بيوصل لـ100% لما كل العمل يكون موجود.
   cfg = { title, root, nodes:[{key, name}], items:[{id, text, node|"out", why}] }
   ============================================================ */
function renderWbsBuilder(containerId, cfg){
  const root = document.getElementById(containerId);
  let placed, sel, msg, wrong;
  const inScope = cfg.items.filter(i => i.node !== "out").length;
  function reset(){ placed = {}; sel = null; msg = null; wrong = 0; draw(); }
  function place(id, zone){
    const it = cfg.items.find(x => x.id === id); if(!it || placed[id]) return;
    if(it.node === zone){ placed[id] = zone; sel = null; msg = { ok:true, text:`✅ «${it.text}» ${zone === "out" ? "برّا النطاق" : "تحت " + cfg.nodes.find(n => n.key === zone).name}. ${it.why}` }; }
    else { wrong++; msg = { ok:false, text:`❌ «${it.text}» مو هون. ${zone === "out" ? "هاد من شغل المشروع، مو برّا النطاق." : it.node === "out" ? "هاد مو من نطاق «أوفلاين» أصلاً." : "فكّر: لأي ناتج بيساهم؟"}` }; }
    draw(); if(!msg.ok){ const c = root.querySelector(`.x-chip[data-id="${id}"]`); if(c){ c.classList.add("shake"); setTimeout(() => c.classList.remove("shake"), 450); } }
  }
  function draw(){
    const done = cfg.items.filter(i => i.node !== "out" && placed[i.id]).length, pct = Math.round(100 * done / inScope);
    const left = cfg.items.filter(i => !placed[i.id]);
    root.innerHTML = `
      <div class="eqs wbs">
        <div class="eqs-head"><span class="gp-tag">🌳 اسحب وفلت</span><h4>${cfg.title}</h4></div>
        <div class="wbs-root">0 ${cfg.root}</div>
        <div class="wbs-nodes">
          ${cfg.nodes.map((n, ni) => `<div class="wbs-node eqs-drop" data-zone="${n.key}" role="button" tabindex="0">
            <div class="wbs-nh">${ni + 1}.0 ${n.name}</div>
            <ul>${cfg.items.filter(i => placed[i.id] === n.key).map((i, k) => `<li><code>${ni + 1}.${k + 1}</code> ${i.text}</li>`).join("") || `<li class="wbs-empty">اسحب حزم العمل لهون</li>`}</ul>
          </div>`).join("")}
        </div>
        <div class="wbs-out eqs-drop" data-zone="out" role="button" tabindex="0">✋ برّا النطاق: ${cfg.items.filter(i => placed[i.id] === "out").map(i => `<span class="wbs-x">${i.text}</span>`).join("") || "<span class='wbs-empty'>اللي مو من شغل المشروع</span>"}</div>
        <div class="wbs-rule"><span>📏 قاعدة 100%: العمل المغطّى</span><i><u style="width:${pct}%"></u></i><b>${pct}%</b></div>
        <div class="eqs-tray">${left.map(i => `<button type="button" class="eqs-chip x-chip${sel === i.id ? " sel" : ""}" data-id="${i.id}">${i.text}</button>`).join("") || ""}</div>
        <div class="eqs-msg ${msg ? (msg.ok ? "ok" : "bad") : ""}" aria-live="polite">${!left.length ? `🎉 خلص الـ WBS! كل العمل (100%) موجود تحت النواتج، واللي برّا النطاق برّا. أخطاء: ${wrong}.` : msg ? msg.text : "اسحب كل حزمة عمل للناتج اللي بتنتمي إلو (أو اضغط عليها وبعدين عالناتج)."}</div>
        ${!left.length ? `<button type="button" class="btn btn-teal wbs-reset">🔁 عيد من الأول</button>` : ""}
      </div>`;
    xDragWire(root, place, (id) => { sel = sel === id ? null : id; draw(); });
    root.querySelectorAll("[data-zone]").forEach(z => z.addEventListener("click", () => { if(sel) place(sel, z.dataset.zone); }));
    const r = root.querySelector(".wbs-reset"); if(r) r.addEventListener("click", reset);
  }
  reset();
}

/* ============================================================
   👥 مصفوفة المسؤوليات (الفصل 4): اضغط عالخانة لتبدّل: — ← R (مسؤول) ← S (منفّذ/مساعد) ← —
   القاعدة: كل حزمة عمل إلها مسؤول (R) واحد بس، والشخص الواحد ممكن يكون مسؤول عن أكتر من حزمة.
   cfg = { title, people:[..], tasks:[..] }
   ============================================================ */
function renderRespMatrix(containerId, cfg){
  const root = document.getElementById(containerId);
  let m = cfg.tasks.map(() => cfg.people.map(() => ""));
  const next = { "":"R", "R":"S", "S":"" };
  function draw(){
    const issues = [];
    cfg.tasks.forEach((t, i) => { const r = m[i].filter(x => x === "R").length; if(r === 0) issues.push(`«${t}»: ما إلها مسؤول (R)`); if(r > 1) issues.push(`«${t}»: إلها ${r} مسؤولين، لازم واحد بس`); });
    const ok = !issues.length;
    root.innerHTML = `
      <div class="eqs rm">
        <div class="eqs-head"><span class="gp-tag">👥 وزّع المسؤوليات</span><h4>${cfg.title}</h4></div>
        <div class="dm-scroll"><table class="cmp rm-t">
          <tr><th>حزمة العمل</th>${cfg.people.map(p => `<th>${p}</th>`).join("")}</tr>
          ${cfg.tasks.map((t, i) => `<tr><td>${t}</td>${cfg.people.map((p, j) => `<td><button type="button" class="rm-c ${m[i][j] ? "v" + m[i][j] : ""}" data-i="${i}" data-j="${j}" aria-label="${t} — ${p}">${m[i][j] || "—"}</button></td>`).join("")}</tr>`).join("")}
        </table></div>
        <p class="eqs-hint"><b>R</b> = المسؤول اللي بينسّق الجهود وبيتأكد من الإنجاز · <b>S</b> = بينفّذ أو بيساعد المسؤول</p>
        <div class="eqs-msg ${ok ? "ok" : "bad"}" aria-live="polite">${ok ? "✅ ممتاز! كل حزمة إلها مسؤول واحد بالزبط. (ولاحظ: عادي الشخص الواحد يكون مسؤول عن أكتر من حزمة.)" : "⚠️ " + issues.slice(0, 3).join(" · ") + (issues.length > 3 ? ` · و${issues.length - 3} كمان` : "")}</div>
      </div>`;
    root.querySelectorAll(".rm-c").forEach(b => b.addEventListener("click", () => { const i = +b.dataset.i, j = +b.dataset.j; m[i][j] = next[m[i][j]]; draw(); }));
  }
  draw();
}

/* ============================================================
   🔗 علاقات التبعية (الفصل 5): اختار النوع (FS/SS/FF/SF) والتخلف/القيادة، وشوف الشريطين على محور الزمن.
   cfg = { title, a:{name, d}, b:{name, d}, examples:{FS:"…", SS:"…", FF:"…", SF:"…"} }
   ============================================================ */
function renderDepTypes(containerId, cfg){
  const root = document.getElementById(containerId);
  let type = "FS", lag = 0;
  const NAMES = { FS:"نهاية ← بداية", SS:"بداية ← بداية", FF:"نهاية ← نهاية", SF:"بداية ← نهاية" };
  function times(){
    const A = { s:0, f:cfg.a.d }, d = cfg.b.d; let s;
    if(type === "FS") s = A.f + lag; else if(type === "SS") s = A.s + lag; else if(type === "FF") s = A.f + lag - d; else s = A.s + lag - d;
    const off = Math.min(0, s); return { A:{ s:A.s - off, f:A.f - off }, B:{ s:s - off, f:s + d - off } };
  }
  function draw(){
    const t = times(), end = Math.max(t.A.f, t.B.f), start = Math.min(t.A.s, t.B.s), span = Math.max(end - start, 1);
    const W = 560, L = 20, Rr = 20, sc = (W - L - Rr) / span, X = v => L + (v - start) * sc;
    const link = type === "FS" ? [X(t.A.f), X(t.B.s)] : type === "SS" ? [X(t.A.s), X(t.B.s)] : type === "FF" ? [X(t.A.f), X(t.B.f)] : [X(t.A.s), X(t.B.f)];
    const lagTxt = lag > 0 ? `تخلّف (Lag) ${lag}` : lag < 0 ? `قيادة (Lead) ${-lag}` : "بدون تأخير";
    root.innerHTML = `
      <div class="eqs dep">
        <div class="eqs-head"><span class="gp-tag">🔗 جرّب العلاقة</span><h4>${cfg.title}</h4></div>
        <div class="dep-types">${Object.keys(NAMES).map(k => `<button type="button" class="dep-b${k === type ? " on" : ""}" data-k="${k}"><b>${k}</b><small>${NAMES[k]}</small></button>`).join("")}</div>
        <div class="fc-k"><label>${lagTxt} (أيام)</label><input type="range" min="-5" max="5" value="${lag}" class="dep-lag" aria-label="التخلف أو القيادة"></div>
        <svg viewBox="0 0 ${W} 120" class="dep-svg" style="direction:ltr" role="img" aria-label="النشاطين على محور الزمن">
          <rect x="${X(t.A.s)}" y="14" width="${(t.A.f - t.A.s) * sc}" height="30" rx="8" fill="#1D3557"/>
          <text x="${X(t.A.s) + 8}" y="34" class="dep-tx">A: ${cfg.a.name} (${cfg.a.d})</text>
          <rect x="${X(t.B.s)}" y="74" width="${(t.B.f - t.B.s) * sc}" height="30" rx="8" fill="#FF9F1C"/>
          <text x="${X(t.B.s) + 8}" y="94" class="dep-tx" fill="#1A1200">B: ${cfg.b.name} (${cfg.b.d})</text>
          <path d="M${link[0]},44 C${link[0]},60 ${link[1]},58 ${link[1]},74" fill="none" stroke="#B4402B" stroke-width="2.5" marker-end="url(#dep-ar)"/>
          <defs><marker id="dep-ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#B4402B"/></marker></defs>
        </svg>
        <div class="eqs-msg ok" aria-live="polite"><b>${type} (${NAMES[type]})</b>: ${cfg.examples[type]}<br>⏱️ المدة الإجمالية للنشاطين: <b>${end - start} يوم</b>${type === "FS" ? ` = ${cfg.a.d} + ${cfg.b.d}${lag ? (lag > 0 ? " + " + lag : " − " + (-lag)) : ""}` : ""}</div>
      </div>`;
    root.querySelectorAll(".dep-b").forEach(b => b.addEventListener("click", () => { type = b.dataset.k; draw(); }));
    root.querySelector(".dep-lag").addEventListener("input", e => { lag = +e.target.value; draw(); });
  }
  draw();
}

/* ============================================================
   🪜 جدول المستويات + المخطط الشبكي AON (الفصل 5): خطوة بخطوة متل طريقة الكتاب:
   الأنشطة بلا سابق ← المستوى 1، منشطبها من عمود «السابق»، ومنعيد… وبالآخر منرسم الشبكة على المستويات.
   cfg = { title, acts:[{id, name, pred:[..]}] }
   ============================================================ */
function renderNetLevels(containerId, cfg){
  const root = document.getElementById(containerId);
  let levels, step;
  function computeAll(){
    const lv = [], done = new Set(); let guard = 0;
    while(done.size < cfg.acts.length && guard++ < 50){
      const cur = cfg.acts.filter(a => !done.has(a.id) && a.pred.every(p => done.has(p))).map(a => a.id);
      if(!cur.length) break; lv.push(cur); cur.forEach(id => done.add(id));
    }
    return lv;
  }
  const ALL = computeAll();
  function reset(){ levels = []; step = 0; draw(); }
  function svg(){
    const W = 600, TOP = 40, H = Math.max(...ALL.map(l => l.length)) * 64 + 30 + TOP, colW = W / ALL.length, pos = {};
    ALL.forEach((l, i) => l.forEach((id, j) => { pos[id] = [colW * i + colW / 2, TOP + ((H - TOP) / (l.length + 1)) * (j + 1)]; }));
    const lvOf = {}; ALL.forEach((l, i) => l.forEach(id => lvOf[id] = i));
    const edges = []; cfg.acts.forEach(a => a.pred.forEach(p => { const [x1, y1] = pos[p], [x2, y2] = pos[a.id];
      const skip = lvOf[a.id] - lvOf[p] > 1;   // السهم اللي بيجتاز أكتر من مستوى بيلفّ من فوق حتى ما يمرق من ورا العقد
      const d = skip ? `M${x1 + 16},${y1 - 15} C${x1 + 60},${Math.min(y1, y2) - 70} ${x2 - 60},${Math.min(y1, y2) - 70} ${x2 - 16},${y2 - 15}`
                     : `M${x1 + 22},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2 - 24},${y2}`;
      edges.push(`<path d="${d}" fill="none" stroke="#5B6478" stroke-width="1.8" marker-end="url(#nl-ar-${containerId})"/>`); }));
    return `<svg viewBox="0 0 ${W} ${H}" class="nl-svg" style="direction:ltr" role="img" aria-label="المخطط الشبكي">
      <defs><marker id="nl-ar-${containerId}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#5B6478"/></marker></defs>
      ${ALL.map((l, i) => `<text x="${colW * i + colW / 2}" y="14" text-anchor="middle" class="nl-lv">المستوى ${i + 1}</text>`).join("")}
      ${edges.join("")}
      ${cfg.acts.map(a => `<g><circle cx="${pos[a.id][0]}" cy="${pos[a.id][1]}" r="21" fill="#fff" stroke="#1D3557" stroke-width="2.5"/><text x="${pos[a.id][0]}" y="${pos[a.id][1] + 6}" text-anchor="middle" class="nl-id">${a.id}</text></g>`).join("")}
    </svg>`;
  }
  function draw(){
    const placed = new Set(levels.flat()), finished = levels.length === ALL.length;
    root.innerHTML = `
      <div class="eqs nl">
        <div class="eqs-head"><span class="gp-tag">🪜 خطوة بخطوة</span><h4>${cfg.title}</h4></div>
        <div class="dm-scroll"><table class="cmp nl-t">
          <tr><th>النشاط</th><th>السابق المتبقي</th>${ALL.map((_, i) => `<th>م${i + 1}</th>`).join("")}</tr>
          ${cfg.acts.map(a => `<tr class="${placed.has(a.id) ? "nl-done" : ""}"><td><b>${a.id}</b>${a.name ? " " + a.name : ""}</td>
            <td>${a.pred.length ? a.pred.map(p => `<span class="${placed.has(p) ? "nl-strike" : ""}">${p}</span>`).join("، ") : "—"}</td>
            ${ALL.map((_, i) => `<td>${levels[i] && levels[i].includes(a.id) ? "✅" : ""}</td>`).join("")}</tr>`).join("")}
        </table></div>
        <div class="eqs-msg ${finished ? "ok" : ""}" aria-live="polite">${!step ? "اضغط «الخطوة الجاية»: منلاقي الأنشطة اللي <b>ما إلها سابق</b> (أو كل سوابقها انشطبت)." : finished ? "🎉 خلصت المستويات! هلأ منرسم الشبكة: كل مستوى عمود، والأسهم من اليسار لليمين." : `المستوى ${levels.length}: <b>${levels[levels.length - 1].join("، ")}</b>. شطبناهن من عمود «السابق».`}</div>
        ${finished ? svg() : ""}
        <div class="nl-btns">${!finished ? `<button type="button" class="btn btn-primary nl-next">➡️ الخطوة الجاية</button>` : ""}<button type="button" class="btn btn-teal nl-reset">🔁 من الأول</button></div>
      </div>`;
    const n = root.querySelector(".nl-next"); if(n) n.addEventListener("click", () => { levels.push(ALL[levels.length]); step++; draw(); });
    root.querySelector(".nl-reset").addEventListener("click", reset);
  }
  reset();
}

/* ============================================================
   🎯 التقدير المكوّن من تلات نقاط (الفصل 6): (المتفائل + 4 × الواقعي + المتشائم) ÷ 6
   cfg = { title, o, m, p, unit }
   ============================================================ */
function renderPert(containerId, cfg){
  const root = document.getElementById(containerId);
  let o = cfg.o, m = cfg.m, p = cfg.p;
  function draw(){
    if(m < o) m = o; if(p < m) p = m;
    const e = (o + 4 * m + p) / 6, r = Math.round(e * 100) / 100;
    root.innerHTML = `
      <div class="eqs pert">
        <div class="eqs-head"><span class="gp-tag">🎯 قدّر بإيدك</span><h4>${cfg.title}</h4></div>
        ${[["o","😀 المتفائل (أفضل سيناريو)",o],["m","🙂 الواقعي (الأرجح)",m],["p","😟 المتشائم (أسوأ سيناريو)",p]].map(([k, l, v]) => `
          <div class="tri-row"><div class="tri-rh"><span>${l}</span><b>${v} ${cfg.unit}</b></div>
          <input type="range" min="1" max="40" value="${v}" data-k="${k}" aria-label="${l}"></div>`).join("")}
        <div class="pert-f">(${o} + 4 × ${m} + ${p}) ÷ 6 = <b>${xFmt(r)} ${cfg.unit}</b></div>
        <div class="eqs-msg ok">الواقعي إلو <b>وزن 4</b>، فالتقدير النهائي بيقرب منو، بس المتشائم بيشدّو لفوق شوي${p - m > m - o ? " (هون المتشائم بعيد، فالتقدير طلع أكبر من الواقعي)" : ""}.</div>
      </div>`;
    root.querySelectorAll("input").forEach(i => i.addEventListener("input", () => { const v = +i.value; if(i.dataset.k === "o") o = v; else if(i.dataset.k === "m") m = v; else p = v; draw(); }));
  }
  draw();
}

/* ============================================================
   🧭 طريقة المسار الحرج CPM خطوة بخطوة (الفصل 6): الذهاب للأمام (ES/EF) ← العودة من الخلف (LS/LF) ← العوم والمسار الحرج،
   وبالآخر عرضها كمخطط غانت.
   cfg = { title, unit, acts:[{id, d, pred:[..], name}] }
   ============================================================ */
function renderCpm(containerId, cfg){
  const root = document.getElementById(containerId);
  const A = cfg.acts, by = {}; A.forEach(a => by[a.id] = a);
  const succ = {}; A.forEach(a => succ[a.id] = []); A.forEach(a => a.pred.forEach(p => succ[p].push(a.id)));
  // ترتيب طوبولوجي + مستويات
  const lv = {}; let order = [], done = new Set(), g = 0;
  while(done.size < A.length && g++ < 60){ const cur = A.filter(a => !done.has(a.id) && a.pred.every(p => done.has(p))); cur.forEach(a => { lv[a.id] = Math.max(0, ...a.pred.map(p => lv[p] + 1)); }); cur.forEach(a => { done.add(a.id); order.push(a.id); }); }
  const ES = {}, EF = {}, LS = {}, LF = {};
  order.forEach(id => { const a = by[id]; ES[id] = a.pred.length ? Math.max(...a.pred.map(p => EF[p])) : 0; EF[id] = ES[id] + a.d; });
  const T = Math.max(...A.map(a => EF[a.id]));
  order.slice().reverse().forEach(id => { LF[id] = succ[id].length ? Math.min(...succ[id].map(s => LS[s])) : T; LS[id] = LF[id] - by[id].d; });
  const SL = {}; A.forEach(a => SL[a.id] = LS[a.id] - ES[a.id]);
  const crit = order.filter(id => SL[id] === 0);
  // خطوات العرض
  const steps = [];
  order.forEach(id => { const a = by[id]; steps.push({ ph:"f", id, txt: a.pred.length ? (a.pred.length > 1 ? `ES(${id}) = أكبر قيمة من EF للسابقين (${a.pred.map(p => `${p}=${EF[p]}`).join("، ")}) = <b>${ES[id]}</b>` : `ES(${id}) = EF(${a.pred[0]}) = <b>${ES[id]}</b>`) + ` ← EF = ${ES[id]} + ${a.d} = <b>${EF[id]}</b>` : `أول نشاط: ES(${id}) = <b>0</b> ← EF = 0 + ${a.d} = <b>${EF[id]}</b>` }); });
  order.slice().reverse().forEach(id => { steps.push({ ph:"b", id, txt: succ[id].length ? (succ[id].length > 1 ? `LF(${id}) = أصغر قيمة من LS للاحقين (${succ[id].map(s => `${s}=${LS[s]}`).join("، ")}) = <b>${LF[id]}</b>` : `LF(${id}) = LS(${succ[id][0]}) = <b>${LF[id]}</b>`) + ` ← LS = ${LF[id]} − ${by[id].d} = <b>${LS[id]}</b>` : `آخر نشاط: LF(${id}) = EF = <b>${LF[id]}</b> ← LS = ${LF[id]} − ${by[id].d} = <b>${LS[id]}</b>` }); });
  steps.push({ ph:"s", txt:`العوم = LS − ES. الأنشطة اللي عومها <b>صفر</b> حرجة، والمسار الحرج: <b>${crit.join(" – ")}</b> ومدة المشروع <b>${T} ${cfg.unit}</b>.` });
  let k = 0, view = "net";
  function shown(ph, id){ for(let i = 0; i < k; i++){ const s = steps[i]; if(s.ph === ph && (ph === "s" || s.id === id)) return true; } return false; }
  function net(){
    const nLv = Math.max(...Object.values(lv)) + 1, cols = {}; A.forEach(a => (cols[lv[a.id]] = cols[lv[a.id]] || []).push(a.id));
    const rows = Math.max(...Object.values(cols).map(c => c.length)), BW = 92, BH = 66, W = nLv * 128 + 20, H = rows * 92 + 20, pos = {};
    Object.keys(cols).forEach(c => cols[c].forEach((id, j) => { pos[id] = [20 + c * 128, 10 + (H - 20) * (j + 0.5) / cols[c].length - BH / 2]; }));
    const done = shown("s");
    const edges = A.flatMap(a => a.pred.map(p => { const [x1, y1] = pos[p], [x2, y2] = pos[a.id]; const c = done && SL[a.id] === 0 && SL[p] === 0 && EF[p] === ES[a.id];
      return `<path d="M${x1 + BW},${y1 + BH / 2} C${x1 + BW + 22},${y1 + BH / 2} ${x2 - 22},${y2 + BH / 2} ${x2},${y2 + BH / 2}" fill="none" stroke="${c ? "#B4402B" : "#8A93A6"}" stroke-width="${c ? 3 : 1.6}" marker-end="url(#cpm-ar-${containerId})"/>`; }));
    const box = id => { const [x, y] = pos[id], f = shown("f", id), b = shown("b", id), c = done && SL[id] === 0;
      return `<g><rect x="${x}" y="${y}" width="${BW}" height="${BH}" rx="9" fill="${c ? "#FDECEA" : "#fff"}" stroke="${c ? "#B4402B" : "#1D3557"}" stroke-width="${c ? 3 : 2}"/>
        <line x1="${x}" y1="${y + 20}" x2="${x + BW}" y2="${y + 20}" stroke="#E3E7F0"/><line x1="${x}" y1="${y + BH - 20}" x2="${x + BW}" y2="${y + BH - 20}" stroke="#E3E7F0"/>
        <text x="${x + 8}" y="${y + 15}" class="cpm-n">${f ? ES[id] : "ES"}</text><text x="${x + BW - 8}" y="${y + 15}" class="cpm-n" text-anchor="end">${f ? EF[id] : "EF"}</text>
        <text x="${x + BW / 2}" y="${y + 39}" class="cpm-id" text-anchor="middle">${id} <tspan class="cpm-d">(${by[id].d})</tspan></text>
        <text x="${x + 8}" y="${y + BH - 6}" class="cpm-n">${b ? LS[id] : "LS"}</text><text x="${x + BW - 8}" y="${y + BH - 6}" class="cpm-n" text-anchor="end">${b ? LF[id] : "LF"}</text>
        ${done ? `<text x="${x + BW / 2}" y="${y + BH + 13}" class="cpm-sl" text-anchor="middle" fill="${c ? "#B4402B" : "#0B7A57"}">عوم ${SL[id]}</text>` : ""}</g>`; };
    return `<svg viewBox="0 0 ${W} ${H + 8}" class="cpm-svg" style="direction:ltr" role="img" aria-label="شبكة المشروع">
      <defs><marker id="cpm-ar-${containerId}" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#5B6478"/></marker></defs>
      ${edges.join("")}${A.map(a => box(a.id)).join("")}</svg>`;
  }
  function gantt(){
    const W = 600, L = 34, rowH = 26, H = A.length * rowH + 30, sc = (W - L - 10) / T;
    return `<svg viewBox="0 0 ${W} ${H}" class="cpm-svg" style="direction:ltr" role="img" aria-label="مخطط غانت">
      ${Array.from({ length: T + 1 }, (_, t) => t % Math.ceil(T / 10) === 0 ? `<line x1="${L + t * sc}" y1="0" x2="${L + t * sc}" y2="${H - 18}" stroke="#EEF1F7"/><text x="${L + t * sc}" y="${H - 4}" class="cpm-n" text-anchor="middle">${t}</text>` : "").join("")}
      ${order.map((id, i) => { const y = 6 + i * rowH, c = SL[id] === 0;
        return `<text x="4" y="${y + 15}" class="cpm-id" style="font-size:13px">${id}</text>
          <rect x="${L + ES[id] * sc}" y="${y}" width="${by[id].d * sc}" height="18" rx="5" fill="${c ? "#B4402B" : "#1D3557"}"/>
          ${SL[id] ? `<rect x="${L + EF[id] * sc}" y="${y + 6}" width="${SL[id] * sc}" height="6" rx="3" fill="#2EC4B6" opacity=".6"/>` : ""}`; }).join("")}
    </svg></div>
    <div><p class="eqs-hint">🟥 حرج · 🟦 غير حرج · ▬ الخط الفيروزي = فترة العوم (قديش بيقدر يتأخر بدون ما يأخّر المشروع)</p>`;
  }
  function draw(){
    const cur = k ? steps[k - 1] : null, ph = !cur ? "—" : cur.ph === "f" ? "① الذهاب للأمام (الأزمنة المبكرة)" : cur.ph === "b" ? "② العودة من الخلف (الأزمنة المتأخرة)" : "③ العوم والمسار الحرج";
    const end = k === steps.length;
    root.innerHTML = `
      <div class="eqs cpm">
        <div class="eqs-head"><span class="gp-tag">🧭 خطوة بخطوة</span><h4>${cfg.title}</h4></div>
        <div class="dm-scroll"><table class="cmp cpm-t"><tr><th>النشاط</th>${A.map(a => `<th>${a.id}</th>`).join("")}</tr>
          <tr><td>المدة</td>${A.map(a => `<td>${a.d}</td>`).join("")}</tr>
          <tr><td>السابق</td>${A.map(a => `<td>${a.pred.join("،") || "—"}</td>`).join("")}</tr></table></div>
        <div class="dm-scroll svg-scroll">${view === "net" ? net() : gantt()}</div>
        <div class="cpm-ph">${ph}</div>
        <div class="eqs-msg ${end ? "ok" : ""}" aria-live="polite">${cur ? cur.txt : "اضغط «الخطوة الجاية» لنبلّش بطريق الذهاب: ES لأول نشاط = 0."}</div>
        <div class="nl-btns">
          ${!end ? `<button type="button" class="btn btn-primary cpm-next">➡️ الخطوة الجاية</button><button type="button" class="btn btn-teal cpm-all">⏭️ كمّل للآخر</button>` : `<button type="button" class="btn btn-primary cpm-view">${view === "net" ? "📊 اعرضها كمخطط غانت" : "🕸️ رجّع الشبكة"}</button>`}
          <button type="button" class="btn btn-teal cpm-reset">🔁 من الأول</button></div>
      </div>`;
    const q = s => root.querySelector(s);
    if(q(".cpm-next")) q(".cpm-next").addEventListener("click", () => { k++; draw(); });
    if(q(".cpm-all")) q(".cpm-all").addEventListener("click", () => { k = steps.length; draw(); });
    if(q(".cpm-view")) q(".cpm-view").addEventListener("click", () => { view = view === "net" ? "gantt" : "net"; draw(); });
    q(".cpm-reset").addEventListener("click", () => { k = 0; view = "net"; draw(); });
  }
  draw();
}

/* ============================================================
   ⏩ محاكي ضغط الجدول الزمني (الفصل 6): كل ضغطة بتقصّر نشاط وحدة زمن وبتكلّف كلفة الضغط بالوحدة.
   مدة المشروع = أطول مسار. ضغط نشاط مو حرج = مصاري عالفاضي. والمسار الحرج ممكن يتغيّر!
   cfg = { title, unit, money, target, acts:[{id, name, d, min, cost}], paths:[[ids…]] }
   ============================================================ */
function renderCrash(containerId, cfg){
  const root = document.getElementById(containerId);
  let d, spent, log;
  // units: [جمع لـ 3–10, مفرد] متل ["أسابيع","أسبوع"]
  const U = n => { const u = cfg.units || [cfg.unit, cfg.unit]; return `${n} ${(n >= 3 && n <= 10) ? u[0] : u[1]}`; };
  const len = p => p.reduce((s, id) => s + d[id], 0);
  function state(){ const L = cfg.paths.map(len), T = Math.max(...L); const crit = new Set(); cfg.paths.forEach((p, i) => { if(L[i] === T) p.forEach(id => crit.add(id)); }); return { L, T, crit }; }
  function reset(){ d = {}; cfg.acts.forEach(a => d[a.id] = a.d); spent = 0; log = null; draw(); }
  function crash(id){
    const a = cfg.acts.find(x => x.id === id); if(d[id] <= a.min) return;
    const before = state(); d[id]--; spent += a.cost; const after = state();
    log = after.T < before.T ? { ok:true, t:`✅ ضغطنا «${a.name}» ${cfg.unit} ← المشروع صار <b>${after.T}</b> (+${xFmt(a.cost)} ${cfg.money}).` }
                            : { ok:false, t:`❌ ضغطنا «${a.name}» ودفعنا ${xFmt(a.cost)} ${cfg.money}، بس المشروع بعدو <b>${after.T}</b>! ${before.crit.has(id) ? "في مسار حرج تاني لازم ينضغط معو." : "هاد النشاط <b>مو حرج</b>، وتقصير الأنشطة غير الحرجة ما بيقصّر المشروع."}` };
    draw();
  }
  function draw(){
    const s = state(), hit = s.T <= cfg.target;
    root.innerHTML = `
      <div class="eqs crash">
        <div class="eqs-head"><span class="gp-tag">⏩ اضغط الجدول</span><h4>${cfg.title}</h4></div>
        <div class="crash-top"><div><span>مدة المشروع</span><b>${U(s.T)}</b><small>الهدف: ${cfg.target}</small></div><div><span>كلفة الضغط</span><b>${xFmt(spent)} ${cfg.money}</b></div></div>
        <div class="crash-paths">${cfg.paths.map((p, i) => `<div class="${s.L[i] === s.T ? "crit" : ""}">${s.L[i] === s.T ? "🔴" : "⚪"} المسار <bdi dir="ltr">${p.join("–")}</bdi>: <b>${s.L[i]}</b></div>`).join("")}</div>
        <div class="dm-scroll"><table class="cmp crash-t"><tr><th>النشاط</th><th>المدة</th><th>أقل مدة</th><th>كلفة ضغط ${cfg.unit} واحد</th><th></th></tr>
          ${cfg.acts.map(a => `<tr class="${s.crit.has(a.id) ? "crit" : ""}"><td><b>${a.id}</b> ${a.name}${s.crit.has(a.id) ? " 🔴" : ""}</td><td>${d[a.id]}</td><td>${a.min}</td><td>${xFmt(a.cost)}</td>
            <td><button type="button" class="btn-mini" data-id="${a.id}" ${d[a.id] <= a.min || hit ? "disabled" : ""}>اضغط −1</button></td></tr>`).join("")}
        </table></div>
        <div class="eqs-msg ${hit ? "ok" : log ? (log.ok ? "ok" : "bad") : ""}" aria-live="polite">${hit ? `🎉 وصلنا للهدف (${cfg.target}) بكلفة <b>${xFmt(spent)} ${cfg.money}</b>. ${spent <= cfg.best ? "وهاي أقل كلفة ممكنة 👏: كل مرة اخترت الأرخص من الأنشطة الحرجة." : `بس كان فيك توصل بـ <b>${xFmt(cfg.best)}</b> بس: اختار كل مرة <b>الأرخص بالوحدة من الأنشطة الحرجة</b>.`}` : log ? log.t : "القاعدة: منضغط <b>الأنشطة الحرجة</b> بس، وكل مرة <b>الأرخص كلفة بالوحدة</b>."}</div>
        <button type="button" class="btn btn-teal crash-reset">🔁 من الأول</button>
      </div>`;
    root.querySelectorAll(".btn-mini").forEach(b => b.addEventListener("click", () => crash(b.dataset.id)));
    root.querySelector(".crash-reset").addEventListener("click", reset);
  }
  reset();
}

/* --- مساعد: CPM بسيط (ES/EF/LS/LF/عوم) --- */
function xCpm(acts){
  const by = {}, succ = {}; acts.forEach(a => { by[a.id] = a; succ[a.id] = []; }); acts.forEach(a => a.pred.forEach(p => succ[p].push(a.id)));
  const order = [], done = new Set(); let g = 0;
  while(done.size < acts.length && g++ < 80) acts.filter(a => !done.has(a.id) && a.pred.every(p => done.has(p))).forEach(a => { done.add(a.id); order.push(a.id); });
  const ES = {}, EF = {}, LS = {}, LF = {};
  order.forEach(id => { ES[id] = by[id].pred.length ? Math.max(...by[id].pred.map(p => EF[p])) : 0; EF[id] = ES[id] + by[id].d; });
  const T = Math.max(...order.map(id => EF[id]));
  order.slice().reverse().forEach(id => { LF[id] = succ[id].length ? Math.min(...succ[id].map(s => LS[s])) : T; LS[id] = LF[id] - by[id].d; });
  return { by, succ, order, ES, EF, LS, LF, T };
}
/* --- مساعد: غانت + مخطط الموارد (هيستوغرام) --- */
function xResChart(acts, start, T, opt){
  const W = 620, L = 30, rowH = 24, gh = acts.length * rowH, hh = 110, sc = (W - L - 8) / T;
  const use = Array(T).fill(0); acts.forEach(a => { for(let t = start[a.id]; t < start[a.id] + a.d; t++) if(t < T) use[t] += a.r; });
  const peak = Math.max(...use), cap = opt.cap || 0, maxY = Math.max(peak, cap, 1), yS = (hh - 20) / maxY;
  const bars = acts.map((a, i) => { const y = 4 + i * rowH, c = opt.crit && opt.crit.has(a.id);
    return `<text x="4" y="${y + 15}" class="cpm-id" style="font-size:12px">${a.id}</text>
      ${opt.float && opt.float[a.id] ? `<rect x="${L + opt.es[a.id] * sc}" y="${y + 3}" width="${(a.d + opt.float[a.id]) * sc}" height="12" rx="4" fill="#2EC4B6" opacity=".18"/>` : ""}
      <rect x="${L + start[a.id] * sc}" y="${y}" width="${a.d * sc}" height="18" rx="5" fill="${c ? "#B4402B" : "#1D3557"}"/>
      <text x="${L + start[a.id] * sc + a.d * sc / 2}" y="${y + 13}" class="lv-r" text-anchor="middle">${a.r}w</text>`; }).join("");
  const hist = use.map((u, t) => `<rect x="${L + t * sc + 1}" y="${gh + 14 + (hh - 20) - u * yS}" width="${sc - 2}" height="${u * yS}" fill="${cap && u > cap ? "#B4402B" : u === peak ? "#FF9F1C" : "#8FA3C0"}"/>`).join("");
  const capLine = cap ? `<line x1="${L}" x2="${W - 8}" y1="${gh + 14 + (hh - 20) - cap * yS}" y2="${gh + 14 + (hh - 20) - cap * yS}" stroke="#B4402B" stroke-dasharray="5 4" stroke-width="2"/><text x="${W - 10}" y="${gh + 10 + (hh - 20) - cap * yS}" class="lv-r" text-anchor="end" style="fill:#B4402B">المتاح ${cap}</text>` : "";
  const ticks = Array.from({ length: T + 1 }, (_, t) => t % 2 === 0 ? `<text x="${L + t * sc}" y="${gh + hh + 8}" class="cpm-n" text-anchor="middle">${t}</text>` : "").join("");
  const yt = Array.from({ length: maxY + 1 }, (_, k) => `<text x="${L - 4}" y="${gh + 18 + (hh - 20) - k * yS}" class="cpm-n" text-anchor="end">${k}</text>`).join("");
  return { peak, use, svg: `<svg viewBox="0 0 ${W} ${gh + hh + 12}" class="cpm-svg lv-svg" role="img" aria-label="مخطط غانت ومخطط الموارد">${bars}<line x1="${L}" x2="${W - 8}" y1="${gh + 8}" y2="${gh + 8}" stroke="#C9D1E0"/>${hist}${capLine}${yt}${ticks}</svg>` };
}

/* ============================================================
   📊 تسوية الموارد بقيد زمني (الفصل 7): زيح الأنشطة غير الحرجة ضمن عومها وشوف ذروة العمال عم تنزل.
   cfg = { title, acts:[{id, name, d, pred, r}], target }
   ============================================================ */
function renderLeveling(containerId, cfg){
  const root = document.getElementById(containerId);
  const c = xCpm(cfg.acts), crit = new Set(c.order.filter(id => c.LS[id] === c.ES[id]));
  const float = {}; cfg.acts.forEach(a => float[a.id] = c.LS[a.id] - c.ES[a.id]);
  let shift; const peak0 = xResChart(cfg.acts, c.ES, c.T, {}).peak;
  function starts(){ const s = {}; c.order.forEach(id => { const a = c.by[id]; const minS = a.pred.length ? Math.max(...a.pred.map(p => s[p] + c.by[p].d)) : 0; s[id] = Math.max(minS, c.ES[id] + (shift[id] || 0)); }); return s; }
  function reset(){ shift = {}; draw(); }
  function draw(){
    const s = starts(), T = Math.max(...cfg.acts.map(a => s[a.id] + a.d)), ch = xResChart(cfg.acts, s, Math.max(T, c.T), { crit, float, es:c.ES });
    const ok = T === c.T, red = Math.round(100 * (peak0 - ch.peak) / peak0);
    root.innerHTML = `
      <div class="eqs lv">
        <div class="eqs-head"><span class="gp-tag">📊 زيح الأنشطة</span><h4>${cfg.title}</h4></div>
        <div class="crash-top"><div><span>ذروة العمال</span><b>${ch.peak} عمال</b><small>قبل التسوية: ${peak0}</small></div><div><span>مدة المشروع</span><b>${T} يوم</b><small>${ok ? "ما تغيّرت ✅ (قيد الزمن محترم)" : "⚠️ تأخر المشروع!"}</small></div></div>
        <div class="dm-scroll svg-scroll">${ch.svg}</div>
        <div class="lv-ctrl">${cfg.acts.filter(a => !crit.has(a.id)).map(a => `<div class="lv-row"><b>${a.id}</b> ${a.name} <small>(عوم ${float[a.id]})</small>
          <button type="button" class="btn-mini" data-id="${a.id}" data-v="-1" ${!(shift[a.id] > 0) ? "disabled" : ""}>◀ يوم</button>
          <span>إزاحة ${shift[a.id] || 0}</span>
          <button type="button" class="btn-mini" data-id="${a.id}" data-v="1" ${(shift[a.id] || 0) >= float[a.id] ? "disabled" : ""}>يوم ▶</button></div>`).join("")}</div>
        <p class="eqs-hint">🟥 حرج (ما بينزاح) · 🟦 غير حرج · الظل الفيروزي = المجال المسموح ضمن العوم · 🟧 عمود الذروة</p>
        <div class="eqs-msg ${ch.peak <= cfg.target && ok ? "ok" : ""}" aria-live="polite">${ch.peak <= cfg.target && ok ? `🎉 نزلت الذروة من ${peak0} لـ ${ch.peak} عمال (تخفيض ${red}%) بدون ما يتأخر المشروع. هيك بتشتغل التسوية بقيد زمني: منأخّر الأنشطة غير الحرجة <b>ضمن عومها</b>.` : `الذروة هلأ ${ch.peak}. الأنشطة الحرجة ثابتة؛ زيح غير الحرجة (ضمن عومها) لحد ما تنزل الذروة لـ ${cfg.target}.`}</div>
        <button type="button" class="btn btn-teal lv-reset">🔁 من الأول</button>
      </div>`;
    root.querySelectorAll(".lv-row .btn-mini").forEach(b => b.addEventListener("click", () => { const id = b.dataset.id; shift[id] = Math.min(float[id], Math.max(0, (shift[id] || 0) + +b.dataset.v)); draw(); }));
    root.querySelector(".lv-reset").addEventListener("click", reset);
  }
  reset();
}

/* ============================================================
   👷 تسوية الموارد بقيد موارد (الفصل 7): يوم بيوم، ولما ما بتكفّي الموارد منطبّق قواعد الأولوية:
   أصغر عوم ← الأقل مدة ← الأكبر موارد ← أصغر رمز. (النشاط ما بينقسم، ومستوى موارده ثابت.)
   cfg = { title, cap, acts:[{id, d, pred, r}] }
   ============================================================ */
function renderResSched(containerId, cfg){
  const root = document.getElementById(containerId);
  const c = xCpm(cfg.acts), by = c.by;
  // محاكاة كاملة مع سجل لكل يوم فيه قرار
  const start = {}, log = []; let t = 0, guard = 0;
  while(Object.keys(start).length < cfg.acts.length && guard++ < 200){
    const running = cfg.acts.filter(a => start[a.id] !== undefined && start[a.id] <= t && t < start[a.id] + a.d);
    let free = cfg.cap - running.reduce((s, a) => s + a.r, 0);
    const elig = cfg.acts.filter(a => start[a.id] === undefined && a.pred.every(p => start[p] !== undefined && start[p] + by[p].d <= t));
    if(elig.length){
      elig.sort((x, y) => (c.LS[x.id] - c.LS[y.id]) || (x.d - y.d) || (y.r - x.r) || (x.id < y.id ? -1 : 1));
      const took = [], waited = [];
      elig.forEach(a => { if(a.r <= free){ start[a.id] = t; free -= a.r; took.push(a.id); } else waited.push(a.id); });
      log.push({ t, elig:elig.map(a => { const f = c.LS[a.id] - t; return `${a.id} (${f >= 0 ? "عوم " + f : "متأخر ⚠️ أولوية قصوى"}، ${a.r}w)`; }), took, waited, free });
    }
    t++;
  }
  const T = Math.max(...cfg.acts.map(a => start[a.id] + a.d));
  let k = 0;
  function draw(){
    const shownStart = {}; cfg.acts.forEach(a => { if(log.slice(0, k).some(l => l.took.includes(a.id))) shownStart[a.id] = start[a.id]; });
    const actsShown = cfg.acts.filter(a => shownStart[a.id] !== undefined);
    const ch = actsShown.length ? xResChart(actsShown, shownStart, T, { cap:cfg.cap }) : null;
    const cur = k ? log[k - 1] : null, end = k === log.length;
    root.innerHTML = `
      <div class="eqs lv">
        <div class="eqs-head"><span class="gp-tag">👷 يوم بيوم</span><h4>${cfg.title}</h4></div>
        <div class="crash-top"><div><span>المتاح</span><b>${cfg.cap} عمال</b></div><div><span>المدة بدون قيد ← مع القيد</span><b>${c.T} ← ${end ? T : "؟"} يوم</b></div></div>
        ${ch ? `<div class="dm-scroll svg-scroll">${ch.svg}</div>` : ""}
        <div class="eqs-msg ${end ? "ok" : ""}" aria-live="polite">${!cur ? "اضغط «اليوم الجاي» لنبلّش التخصيص من أول يوم." : `📅 <b>اليوم ${cur.t + 1}</b>: المرشّحين ${cur.elig.join("، ")}. ← بدأ: <b>${cur.took.join("، ") || "ولا شي"}</b>${cur.waited.length ? ` · انزاح: <b>${cur.waited.join("، ")}</b> (ما ضل موارد كفاية)` : ""}.${end ? `<br>🎉 خلص التخصيص: المشروع صار <b>${T} يوم</b> بدل ${c.T}، وما تجاوزنا ${cfg.cap} عمال أبداً.` : ""}`}</div>
        <div class="nl-btns">${!end ? `<button type="button" class="btn btn-primary rs-next">➡️ اليوم الجاي</button><button type="button" class="btn btn-teal rs-all">⏭️ للآخر</button>` : ""}<button type="button" class="btn btn-teal rs-reset">🔁 من الأول</button></div>
      </div>`;
    const q = s => root.querySelector(s);
    if(q(".rs-next")) q(".rs-next").addEventListener("click", () => { k++; draw(); });
    if(q(".rs-all")) q(".rs-all").addEventListener("click", () => { k = log.length; draw(); });
    q(".rs-reset").addEventListener("click", () => { k = 0; draw(); });
  }
  draw();
}
