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
