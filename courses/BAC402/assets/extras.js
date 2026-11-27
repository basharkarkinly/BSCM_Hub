/* ============================================================
   BAC402 — مكوّنات تفاعلية إضافية. تعتمد على app.js (shuffle, launchConfetti)
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


/* ============================================================
   ⚖️ ميزان المعادلة المحاسبية — اسحب وفلت
   الأصول (يمين) = الالتزامات + حقوق الملكية (يسار)
   كل عملية إلها "شرائح أثر": الصحيحة بتنحط بكفّتها، والمضلّلة بترجع مع شرح.
   الميزان بيميل لما تحط أثر واحد، وبيرجع يتوازن لما تكمّل الأثر التاني.
   cfg = { title, start:{acct:amount}, ops:[{text, chips:[{id, acct, zone:"A"|"L"|"E", amt, decoy?, msg?}], explain}] , finish }
   zone: A أصول · L التزامات · E حقوق ملكية. amt بإشارته (+ زيادة / − نقص).
   ============================================================ */
function renderEquationScale(containerId, cfg){
  const root = document.getElementById(containerId);
  const ZN = { A:"الأصول", L:"الالتزامات", E:"حقوق الملكية" };
  let step, bal, placed, sel, drag;

  const fmt = n => (n < 0 ? "−" : "") + xFmt(Math.abs(n));
  const sgn = n => (n < 0 ? "−" : "+") + xFmt(Math.abs(n));
  const zoneOf = acct => { for(const z of ["A","L","E"]) if(bal[z].some(r => r.acct === acct)) return z; return null; };
  const total = z => bal[z].reduce((s, r) => s + r.amt, 0);

  function reset(){
    step = 0; sel = null;
    bal = { A:[], L:[], E:[] };
    (cfg.start || []).forEach(r => bal[r.zone].push({ acct:r.acct, amt:r.amt }));
    begin();
  }
  function begin(){ placed = {}; sel = null; draw(); }

  function apply(chip){
    const rows = bal[chip.zone];
    const r = rows.find(x => x.acct === chip.acct);
    if(r) r.amt += chip.amt; else rows.push({ acct:chip.acct, amt:chip.amt, fresh:true });
  }

  function rowsHTML(z){
    const rows = bal[z];
    if(!rows.length) return `<div class="eqs-empty">فاضي</div>`;
    return rows.map(r => `<div class="eqs-row${r.hl ? " hl" : ""}"><span>${r.acct}</span><b>${fmt(r.amt)}</b></div>`).join("");
  }

  function draw(){
    const op = cfg.ops[step];
    const A = total("A"), L = total("L"), E = total("E");
    const diff = A - (L + E);
    const big = Math.max(1, A, L + E);
    const tilt = Math.max(-6, Math.min(6, diff / big * 24));
    const ok = diff === 0;
    const chips = op ? op.chips.filter(c => !placed[c.id]) : [];
    root.innerHTML = `
      <div class="eqs">
        <div class="eqs-head"><span class="gp-tag">⚖️ اسحب وفلت</span><h4>${cfg.title}</h4></div>
        <div class="eqs-stage">
          <div class="eqs-beam" style="transform:rotate(${tilt}deg)"></div>
          <div class="eqs-post"></div>
          <div class="eqs-state ${ok ? "ok" : "bad"}">${ok ? "⚖️ متوازن" : "⚠️ مايل! ناقصك أثر تاني"}</div>
        </div>
        <div class="eqs-pans" style="--t:${tilt}">
          <div class="eqs-pan A" data-zone="A">
            <div class="eqs-pan-h">الأصول <b>${fmt(A)}</b></div>
            <div class="eqs-drop" data-zone="A">${rowsHTML("A")}</div>
          </div>
          <div class="eqs-eq">=</div>
          <div class="eqs-pan LE">
            <div class="eqs-pan-h">الالتزامات + حقوق الملكية <b>${fmt(L + E)}</b></div>
            <div class="eqs-sub"><small>الالتزامات</small><div class="eqs-drop" data-zone="L">${rowsHTML("L")}</div></div>
            <div class="eqs-sub"><small>حقوق الملكية</small><div class="eqs-drop" data-zone="E">${rowsHTML("E")}</div></div>
          </div>
        </div>
        <div class="eqs-line">الأصول <b>${fmt(A)}</b> = الالتزامات <b>${fmt(L)}</b> + حقوق الملكية <b>${fmt(E)}</b></div>
        ${op ? `
        <div class="eqs-op">
          <div class="eqs-op-n">العملية ${step + 1} من ${cfg.ops.length}</div>
          <div class="eqs-op-t">${op.text}</div>
          <div class="eqs-tray">${chips.map(c => `<button type="button" class="eqs-chip" data-id="${c.id}">${c.acct} <b dir="ltr">${sgn(c.amt)}</b></button>`).join("")}</div>
          <p class="eqs-hint">اسحب كل أثر صحيح لمكانو بالميزان (أو اضغط عليه وبعدين اضغط على المكان). في شريحة غلط مخبّاية بينهم 😉</p>
          <div class="eqs-msg" id="${containerId}-msg"></div>
        </div>` : `<div class="eqs-done">${cfg.finish || ""}<button type="button" class="btn btn-teal eqs-again">🔁 عيد من الأول</button></div>`}
      </div>`;
    bal.A.concat(bal.L, bal.E).forEach(r => { r.hl = false; });
    wire();
  }

  function msg(html, cls){
    const m = document.getElementById(`${containerId}-msg`);
    if(m){ m.className = "eqs-msg " + (cls || ""); m.innerHTML = html; }
  }

  function tryDrop(id, zone){
    const op = cfg.ops[step];
    const chip = op.chips.find(c => c.id === id);
    if(!chip || placed[id]) return;
    const el = root.querySelector(`.eqs-chip[data-id="${id}"]`);
    if(chip.decoy){
      shake(el);
      return msg(`❌ ${chip.msg || "هالأثر ما إلو علاقة بهالعملية."}`, "bad");
    }
    if(zone !== chip.zone){
      shake(el);
      return msg(`🤔 <b>${chip.acct}</b> من ${ZN[chip.zone]}، مو من ${ZN[zone]}. جرّب الكفة التانية.`, "bad");
    }
    placed[id] = true;
    apply(chip);
    const r = bal[chip.zone].find(x => x.acct === chip.acct); if(r) r.hl = true;
    const left = op.chips.filter(c => !c.decoy && !placed[c.id]).length;
    const keepMsg = left ? `✔️ مزبوط! ${left === 1 ? "باقي أثر واحد" : "باقي " + left + " آثار"}… شوف الميزان كيف مايل.` : "";
    draw();
    if(left) msg(keepMsg, "ok");
    else {
      msg(`✅ <b>توازن الميزان!</b> ${op.explain || ""}<div style="margin-top:10px"><button type="button" class="btn btn-primary eqs-next">${step + 1 < cfg.ops.length ? "العملية الجاية ←" : "شوف النتيجة 🎉"}</button></div>`, "ok");
      root.querySelectorAll(".eqs-chip").forEach(b => { b.disabled = true; });
      root.querySelector(".eqs-next").addEventListener("click", () => {
        step++;
        if(step >= cfg.ops.length && typeof launchConfetti === "function") launchConfetti();
        begin();
      });
    }
  }

  function shake(el){ if(!el) return; el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }

  function zoneAt(x, y){
    const t = document.elementFromPoint(x, y);
    const d = t && t.closest(".eqs-drop, .eqs-pan");
    if(!d || !root.contains(d)) return null;
    return d.dataset.zone || null;
  }

  function wire(){
    const again = root.querySelector(".eqs-again");
    if(again) again.addEventListener("click", reset);
    root.querySelectorAll(".eqs-drop").forEach(d => d.addEventListener("click", () => {
      if(sel){ const id = sel; sel = null; tryDrop(id, d.dataset.zone); }
    }));
    root.querySelectorAll(".eqs-chip").forEach(ch => {
      ch.addEventListener("pointerdown", e => {
        if(ch.disabled) return;
        e.preventDefault();
        const r = ch.getBoundingClientRect();
        drag = { id:ch.dataset.id, el:ch, sx:e.clientX, sy:e.clientY, moved:false, ghost:null, dx:e.clientX - r.left, dy:e.clientY - r.top };
        ch.setPointerCapture(e.pointerId);
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
        root.querySelectorAll(".eqs-drop.over").forEach(x => x.classList.remove("over"));
        const t = document.elementFromPoint(e.clientX, e.clientY);
        const d = t && t.closest(".eqs-drop"); if(d && root.contains(d)) d.classList.add("over");
      });
      const end = e => {
        if(!drag || drag.el !== ch) return;
        const d = drag; drag = null;
        if(d.ghost) d.ghost.remove();
        ch.classList.remove("lifting");
        root.querySelectorAll(".eqs-drop.over").forEach(x => x.classList.remove("over"));
        if(!d.moved){   // نقرة: اختيار ثم اضغط على المكان
          root.querySelectorAll(".eqs-chip.sel").forEach(x => x.classList.remove("sel"));
          if(sel === d.id){ sel = null; return; }
          sel = d.id; ch.classList.add("sel");
          return msg("👆 هلأ اضغط على المكان اللي بدك تحطها فيه.", "");
        }
        const z = e.type === "pointercancel" ? null : zoneAt(e.clientX, e.clientY);
        if(z) tryDrop(d.id, z);
      };
      ch.addEventListener("pointerup", end);
      ch.addEventListener("pointercancel", end);
    });
  }

  reset();
}

/* ---------- مساعد سحب وفلت عام (إصبع + ماوس) ----------
   chips: عناصر .x-chip[data-id] · zones: عناصر [data-zone]
   onDrop(id, zone) · onTap(id) للنقر بدل السحب */
function xDragWire(root, onDrop, onTap){
  let drag = null;
  root.querySelectorAll(".x-chip").forEach(ch => {
    ch.addEventListener("pointerdown", e => {
      if(ch.disabled) return;
      e.preventDefault();
      const r = ch.getBoundingClientRect();
      drag = { id:ch.dataset.id, el:ch, sx:e.clientX, sy:e.clientY, moved:false, ghost:null, dx:e.clientX - r.left, dy:e.clientY - r.top };
      ch.setPointerCapture(e.pointerId);
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
   📒 اعمل القيد — يومية ← أستاذ ← ميزان مراجعة
   cfg = { title, ops:[{date, text, chips:[{id, acct, zone:"D"|"C", amt, decoy?, msg?}], noEntry?, explain}], finish }
   noEntry: العملية ما بتتسجّل (الطالب لازم يضغط «ما بتتسجّل»)
   ============================================================ */
function renderJournalBuilder(containerId, cfg){
  const root = document.getElementById(containerId);
  let step, placed, sel, ledger, journal, done;

  function reset(){ step = 0; ledger = {}; journal = []; begin(); }
  function begin(){ placed = {}; sel = null; done = false; draw(); }

  function post(op){
    const lines = op.chips.filter(c => !c.decoy);
    journal.push({ date:op.date, lines });
    lines.forEach(c => {
      ledger[c.acct] = ledger[c.acct] || { D:[], C:[] };
      ledger[c.acct][c.zone].push({ date:op.date, amt:c.amt });
    });
  }

  function tHTML(){
    const names = Object.keys(ledger);
    if(!names.length) return `<p class="jb-empty">لسا ما في حسابات بالأستاذ. أول قيد بتعملو بيترحّل لهون 👇</p>`;
    return `<div class="jb-tgrid">` + names.map(n => {
      const a = ledger[n];
      const sd = a.D.reduce((x, r) => x + r.amt, 0), sc = a.C.reduce((x, r) => x + r.amt, 0);
      const bal = sd - sc;
      const col = arr => arr.map(r => `<div><small>${r.date}</small> ${xFmt(r.amt)}</div>`).join("") || "&nbsp;";
      return `<div class="jb-t"><div class="jb-t-h">ح/ ${n}</div>
        <div class="jb-t-b"><div class="jb-t-d">${col(a.D)}</div><div class="jb-t-c">${col(a.C)}</div></div>
        <div class="jb-t-f">${bal === 0 ? "رصيد صفر" : (bal > 0 ? "رصيد مدين " + xFmt(bal) : "رصيد دائن " + xFmt(-bal))}</div></div>`;
    }).join("") + `</div>`;
  }

  function tbHTML(){
    let td = 0, tc = 0;
    const rows = Object.keys(ledger).map(n => {
      const a = ledger[n];
      const b = a.D.reduce((x, r) => x + r.amt, 0) - a.C.reduce((x, r) => x + r.amt, 0);
      if(b > 0) td += b; else tc -= b;
      return `<tr><td>${n}</td><td class="n">${b > 0 ? xFmt(b) : ""}</td><td class="n">${b < 0 ? xFmt(-b) : ""}</td></tr>`;
    }).join("");
    return `<table class="cmp jb-tb"><tr><th>الحساب</th><th>أرصدة مدينة</th><th>أرصدة دائنة</th></tr>${rows}
      <tr class="tot"><td>المجموع</td><td class="n">${xFmt(td)}</td><td class="n">${xFmt(tc)}</td></tr></table>
      <p class="jb-ok">${td === tc ? "✅ المجموعين متساويين — ميزان المراجعة متوازن!" : "⚠️ مو متوازن"}</p>`;
  }

  function draw(){
    const op = cfg.ops[step];
    const lines = op ? op.chips.filter(c => placed[c.id]) : [];
    const zoneBox = z => lines.filter(c => c.zone === z).map(c => `<div class="jb-line ${z}"><span>${z === "D" ? "من ح/" : "إلى ح/"} ${c.acct}</span><b>${xFmt(c.amt)}</b></div>`).join("");
    root.innerHTML = `
      <div class="eqs jb">
        <div class="eqs-head"><span class="gp-tag">📒 اسحب وفلت</span><h4>${cfg.title}</h4></div>
        ${op ? `
        <div class="eqs-op">
          <div class="eqs-op-n">العملية ${step + 1} من ${cfg.ops.length} · ${op.date}</div>
          <div class="eqs-op-t">${op.text}</div>
          <div class="eqs-tray">${op.chips.filter(c => !placed[c.id]).map(c => `<button type="button" class="eqs-chip x-chip" data-id="${c.id}">${c.acct}</button>`).join("")}
            ${op.noEntry ? `<button type="button" class="eqs-chip jb-none">🚫 ما بتتسجّل</button>` : ""}</div>
          <div class="jb-entry">
            <div class="jb-zone" data-zone="D"><div class="jb-zone-h">مدين (من ح/)</div>${zoneBox("D") || `<div class="eqs-empty">اسحب الحساب المدين لهون</div>`}</div>
            <div class="jb-zone" data-zone="C"><div class="jb-zone-h">دائن (إلى ح/)</div>${zoneBox("C") || `<div class="eqs-empty">اسحب الحساب الدائن لهون</div>`}</div>
          </div>
          <p class="eqs-hint">قاعدة: <b>أمم</b> (أصول، مصاريف، مسحوبات) بتزيد بالمدين · والتزامات، رأس مال، إيرادات بتزيد بالدائن.</p>
          <div class="eqs-msg" id="${containerId}-msg"></div>
        </div>` : `<div class="eqs-done" style="text-align:right">${cfg.noTB ? "" : `<h4 style="margin:6px 0">⚖️ ميزان المراجعة</h4>${tbHTML()}`}${cfg.finish || ""}<button type="button" class="btn btn-teal eqs-again">🔁 عيد من الأول</button></div>`}
        <details class="jb-ledger" ${op ? "" : "open"}><summary>📚 دفتر الأستاذ (حسابات T) — بيتحدّث مع كل قيد</summary>${tHTML()}</details>
      </div>`;
    wire();
  }

  function msg(html, cls){
    const m = document.getElementById(`${containerId}-msg`);
    if(m){ m.className = "eqs-msg " + (cls || ""); m.innerHTML = html; }
  }
  function shake(el){ if(!el) return; el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }

  function complete(op){
    done = true;
    if(!op.noEntry) post(op);
    const rest = cfg.ops.length - step - 1;
    draw();
    const ledgerBox = root.querySelector(".jb-ledger"); if(ledgerBox && !op.noEntry) ledgerBox.open = true;
    msg(`✅ <b>${op.noEntry ? "مزبوط، ما بتتسجّل!" : "قيد صحيح، وانرحّل للأستاذ!"}</b> ${op.explain || ""}<div style="margin-top:10px"><button type="button" class="btn btn-primary eqs-next">${rest ? "العملية الجاية ←" : (cfg.noTB ? "خلّصت 🎉" : "طلّع ميزان المراجعة ⚖️")}</button></div>`, "ok");
    root.querySelectorAll(".x-chip, .jb-none").forEach(b => { b.disabled = true; });
    root.querySelector(".eqs-next").addEventListener("click", () => {
      step++;
      if(step >= cfg.ops.length && typeof launchConfetti === "function") launchConfetti();
      begin();
    });
  }

  function tryDrop(id, zone){
    if(done) return;
    const op = cfg.ops[step];
    const c = op.chips.find(x => x.id === id);
    if(!c || placed[id]) return;
    const el = root.querySelector(`.x-chip[data-id="${id}"]`);
    if(c.decoy || op.noEntry){ shake(el); return msg(`❌ ${c.msg || "هالحساب ما إلو علاقة بهالعملية."}`, "bad"); }
    if(zone !== c.zone){
      shake(el);
      return msg(`🤔 <b>${c.acct}</b> هون ${c.zone === "D" ? "<b>مدين</b>" : "<b>دائن</b>"}. ${c.why || ""}`, "bad");
    }
    placed[id] = true;
    const left = op.chips.filter(x => !x.decoy && !placed[x.id]).length;
    if(!left) return complete(op);
    draw();
    msg(`✔️ مزبوط! ${left === 1 ? "باقي طرف واحد" : "باقي " + left + " أطراف"} من القيد.`, "ok");
  }

  function wire(){
    const again = root.querySelector(".eqs-again");
    if(again) again.addEventListener("click", reset);
    const none = root.querySelector(".jb-none");
    if(none) none.addEventListener("click", () => {
      const op = cfg.ops[step];
      if(op.noEntry) complete(op);
      else { shake(none); msg("❌ لأ، هالعملية <b>بتغيّر</b> حسابات المشروع، فلازم تتسجّل.", "bad"); }
    });
    root.querySelectorAll(".jb-zone").forEach(z => z.addEventListener("click", () => {
      if(sel){ const id = sel; sel = null; tryDrop(id, z.dataset.zone); }
    }));
    xDragWire(root, tryDrop, (id, ch) => {
      root.querySelectorAll(".x-chip.sel").forEach(x => x.classList.remove("sel"));
      if(sel === id){ sel = null; return; }
      sel = id; ch.classList.add("sel");
      msg("👆 هلأ اضغط على «مدين» أو «دائن».", "");
    });
  }

  reset();
}

/* ============================================================
   ⏳ سلايدر المقدّمات — حرّك الأشهر وشوف شو صار مصروف/إيراد وشو ضل
   cfg = { title, cases:[{ name, text, total, months, unit:"شهر", kind:"prepaid"|"unearned",
            usedLabel, leftLabel, dr, cr, ask }] }
   ask = عدد الأشهر الصحيح للسؤال (اختياري) — بيطلع زر «تحقق»
   ============================================================ */
function renderAdjustSlider(containerId, cfg){
  const root = document.getElementById(containerId);
  let ci = 0;
  function draw(){
    const c = cfg.cases[ci];
    root.innerHTML = `
      <div class="eqs adj">
        <div class="eqs-head"><span class="gp-tag">⏳ حرّك وشوف</span><h4>${cfg.title}</h4></div>
        <div class="adj-tabs">${cfg.cases.map((x, i) => `<button type="button" class="adj-tab${i === ci ? " on" : ""}" data-i="${i}">${x.name}</button>`).join("")}</div>
        <p class="eqs-op-t">${c.text}</p>
        <label class="adj-lbl">عدد الأشهر اللي مرقت لحد تاريخ التسوية: <b id="${containerId}-m">0</b> من ${c.months}</label>
        <input type="range" min="0" max="${c.months}" value="0" step="1" class="adj-range" id="${containerId}-r" aria-label="الأشهر">
        <div class="adj-bar"><div class="adj-used" id="${containerId}-u"></div><div class="adj-left" id="${containerId}-l"></div></div>
        <div class="adj-legend"><span><i class="u"></i>${c.usedLabel}: <b id="${containerId}-uv">0</b></span><span><i class="l"></i>${c.leftLabel}: <b id="${containerId}-lv">0</b></span></div>
        <div class="adj-entry" id="${containerId}-e"></div>
        ${c.ask != null ? `<p class="eqs-hint">🎯 ${c.askText || "حط السلايدر على عدد الأشهر الصح لتاريخ 31/12 واضغط تحقق."}</p><button type="button" class="btn btn-primary" id="${containerId}-chk">تحقق ✓</button><div class="eqs-msg" id="${containerId}-msg"></div>` : ""}
      </div>`;
    const r = document.getElementById(`${containerId}-r`);
    const upd = () => {
      const m = +r.value, per = c.total / c.months, used = Math.round(per * m), left = c.total - used;
      document.getElementById(`${containerId}-m`).textContent = m;
      document.getElementById(`${containerId}-u`).style.width = (m / c.months * 100) + "%";
      document.getElementById(`${containerId}-l`).style.width = (100 - m / c.months * 100) + "%";
      document.getElementById(`${containerId}-uv`).textContent = xFmt(used);
      document.getElementById(`${containerId}-lv`).textContent = xFmt(left);
      document.getElementById(`${containerId}-e`).innerHTML = used
        ? `<b>قيد التسوية:</b><div class="jb-line D"><span>من ح/ ${c.dr}</span><b>${xFmt(used)}</b></div><div class="jb-line C"><span>&nbsp;&nbsp;إلى ح/ ${c.cr}</span><b>${xFmt(used)}</b></div><small>القسط = ${xFmt(c.total)} ÷ ${c.months} = ${xFmt(per)} بالشهر × ${m} = ${xFmt(used)}</small>`
        : `<small>لسا ما مرق ولا شهر ← ما في قيد تسوية، والمبلغ كلو ${c.kind === "prepaid" ? "أصل" : "التزام"}.</small>`;
    };
    r.addEventListener("input", upd); upd();
    root.querySelectorAll(".adj-tab").forEach(b => b.addEventListener("click", () => { ci = +b.dataset.i; draw(); }));
    const chk = document.getElementById(`${containerId}-chk`);
    if(chk) chk.addEventListener("click", () => {
      const m = document.getElementById(`${containerId}-msg`);
      if(+r.value === c.ask){ m.className = "eqs-msg ok"; m.innerHTML = `✅ <b>مزبوط!</b> ${c.why || ""}`; if(typeof launchConfetti === "function") launchConfetti(); }
      else { m.className = "eqs-msg bad"; m.innerHTML = `❌ لأ، عدّ الأشهر من ${c.from || "تاريخ الدفع"} لـ 31/12 مرة تانية.`; }
    });
  }
  draw();
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
   🧮 سلسلة مجمل الربح — حاسبة حيّة (جرد دوري)
   cfg = { title, values:{begin,purch,fin,pr,pd,end,sales,sr,sd,opex} }
   ============================================================ */
function renderCogsChain(containerId, cfg){
  const root = document.getElementById(containerId);
  const F = [
    ["sales","المبيعات"],["sr","مردودات ومسموحات المبيعات"],["sd","الخصم على المبيعات (الممنوح)"],
    ["begin","بضاعة أول المدة"],["purch","المشتريات"],["fin","مصاريف نقل المشتريات"],["pr","مردودات ومسموحات المشتريات"],["pd","الخصم على المشتريات (المكتسب)"],["end","بضاعة آخر المدة"],
    ["opex","المصاريف التشغيلية (ومنها نقل المبيعات)"]
  ];
  const v = Object.assign({ begin:0,purch:0,fin:0,pr:0,pd:0,end:0,sales:0,sr:0,sd:0,opex:0 }, cfg.values || {});
  root.innerHTML = `
    <div class="eqs cc">
      <div class="eqs-head"><span class="gp-tag">🧮 حاسبة</span><h4>${cfg.title}</h4></div>
      <p class="eqs-hint">غيّر أي رقم (حط أرقام سؤال الامتحان) وشوف السلسلة كلها كيف بتتحسب.</p>
      <div class="cc-grid">${F.map(([k, l]) => `<label><span>${l}</span><input type="number" min="0" step="any" inputmode="decimal" data-k="${k}" value="${v[k]}"></label>`).join("")}</div>
      <div class="cc-out" id="${containerId}-o"></div>
    </div>`;
  const out = document.getElementById(`${containerId}-o`);
  const row = (l, val, cls) => `<div class="cc-row ${cls || ""}"><span>${l}</span><b>${(val < 0 ? "−" : "") + xFmt(Math.abs(Math.round(val * 100) / 100))}</b></div>`;
  function calc(){
    root.querySelectorAll("input[data-k]").forEach(i => { v[i.dataset.k] = parseFloat(i.value) || 0; });
    const netSales = v.sales - v.sr - v.sd;
    const netPurch = v.purch + v.fin - v.pr - v.pd;
    const avail = v.begin + netPurch;
    const cogs = avail - v.end;
    const gp = netSales - cogs;
    const np = gp - v.opex;
    out.innerHTML =
      row("صافي المبيعات = المبيعات − المردودات − الخصم", netSales, "k") +
      row("صافي المشتريات = المشتريات + نقل المشتريات − المردودات − الخصم", netPurch) +
      row("البضاعة المتاحة للبيع = أول المدة + صافي المشتريات", avail) +
      row("تكلفة البضاعة المباعة = المتاحة − آخر المدة", cogs, "k") +
      row("مجمل (إجمالي) الربح = صافي المبيعات − التكلفة", gp, "hi") +
      row("صافي الربح = مجمل الربح − المصاريف التشغيلية", np, "hi");
  }
  root.querySelectorAll("input[data-k]").forEach(i => i.addEventListener("input", calc));
  calc();
}

/* ============================================================
   🧾 حاسبة الكمبيالة — تاريخ الاستحقاق، الفائدة، القيمة المستحقة، الخصم
   cfg = { title, v:{ amount, rate, term, unit:"d"|"m", issue:"YYYY-MM-DD", disc:"YYYY-MM-DD"|"", drate } }
   الفائدة = المبلغ × المعدل × المدة (أيام ÷ 360 أو أشهر ÷ 12)
   ============================================================ */
function renderNoteCalc(containerId, cfg){
  const root = document.getElementById(containerId);
  const v = Object.assign({ amount:10000, rate:12, term:90, unit:"d", issue:"2011-01-21", disc:"", drate:12 }, cfg.v || {});
  const MONTHS = ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"];
  const dFmt = d => `${d.getUTCDate()}/${d.getUTCMonth() + 1} (${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]})`;
  const parse = s => { const [y, m, d] = (s || "").split("-").map(Number); return y ? new Date(Date.UTC(y, m - 1, d)) : null; };
  const n2 = x => xFmt(Math.round(x * 100) / 100);
  root.innerHTML = `
    <div class="eqs cc">
      <div class="eqs-head"><span class="gp-tag">🧾 حاسبة</span><h4>${cfg.title}</h4></div>
      <div class="cc-grid">
        <label><span>قيمة الورقة (المبلغ الأساسي)</span><input type="number" data-k="amount" value="${v.amount}" min="0"></label>
        <label><span>معدل الفائدة السنوي %</span><input type="number" data-k="rate" value="${v.rate}" min="0" step="any"></label>
        <label><span>المدة</span><input type="number" data-k="term" value="${v.term}" min="1"></label>
        <label><span>وحدة المدة</span><select data-k="unit"><option value="d"${v.unit === "d" ? " selected" : ""}>يوم</option><option value="m"${v.unit === "m" ? " selected" : ""}>شهر</option></select></label>
        <label><span>تاريخ التحرير</span><input type="date" data-k="issue" value="${v.issue}"></label>
        <label><span>تاريخ الخصم بالمصرف (اختياري)</span><input type="date" data-k="disc" value="${v.disc}"></label>
        <label><span>معدل الخصم السنوي %</span><input type="number" data-k="drate" value="${v.drate}" min="0" step="any"></label>
      </div>
      <div class="cc-out" id="${containerId}-o"></div>
    </div>`;
  const out = document.getElementById(`${containerId}-o`);
  const row = (l, val, cls) => `<div class="cc-row ${cls || ""}"><span>${l}</span><b>${val}</b></div>`;
  function calc(){
    root.querySelectorAll("[data-k]").forEach(i => { v[i.dataset.k] = i.type === "number" ? (parseFloat(i.value) || 0) : i.value; });
    const iss = parse(v.issue);
    let mat = null, days = null;
    if(iss){
      mat = new Date(iss);
      if(v.unit === "d"){ mat.setUTCDate(mat.getUTCDate() + v.term); days = v.term; }
      else { mat.setUTCMonth(mat.getUTCMonth() + v.term); days = Math.round((mat - iss) / 864e5); }
    }
    const frac = v.unit === "d" ? v.term / 360 : v.term / 12;
    const interest = v.amount * v.rate / 100 * frac;
    let html =
      row("تاريخ الاستحقاق", mat ? dFmt(mat) : "—", "k") +
      row(`الفائدة = ${n2(v.amount)} × ${v.rate}% × ${v.unit === "d" ? v.term + "/360" : v.term + "/12"}`, n2(interest), "hi") +
      row("القيمة المستحقة = المبلغ + الفائدة", n2(v.amount + interest), "k") +
      row("القيمة الاسمية (اللي منسجّل فيها الورقة)", n2(v.amount));
    const dd = parse(v.disc);
    if(dd && mat && dd < mat){
      const left = Math.round((mat - dd) / 864e5);
      const sameDay = dd.getUTCDate() === mat.getUTCDate();
      const mths = (mat.getUTCFullYear() - dd.getUTCFullYear()) * 12 + mat.getUTCMonth() - dd.getUTCMonth();
      const dsc = sameDay ? v.amount * v.drate / 100 * mths / 12 : v.amount * v.drate / 100 * left / 360;
      html += row(`مدة الخصم (من ${dd.getUTCDate()}/${dd.getUTCMonth() + 1} للاستحقاق)`, sameDay ? mths + " شهر" : left + " يوم") +
              row(`مصاريف الخصم = ${n2(v.amount)} × ${v.drate}% × ${sameDay ? mths + "/12" : left + "/360"}`, n2(dsc), "hi") +
              row("صافي المبلغ من المصرف", n2(v.amount - dsc), "hi");
    }
    out.innerHTML = html + `<p class="eqs-hint" style="margin:8px 0 0">طريقة عدّ الأيام: الأيام الباقية من شهر التحرير، وبعدين أيام كل شهر كامل، ولحد ما يخلص العدد. (بالكتاب بيحسبوا الخصم على قيمة الورقة الاسمية.)</p>`;
  }
  root.querySelectorAll("[data-k]").forEach(i => i.addEventListener("input", calc));
  calc();
}

/* ============================================================
   ⚖️ لعبة الميزان — الرصيد الدفتري مقابل الرصيد الفعلي (ما يخص العام)
   cfg = { title, cases:[ { name, text, acct, kind:"exp"|"rev",
           carry:{ label, amt, sign:+1|-1 } (اختياري: رصيد مدوّر منقفلو أول شي),
           book, actual, actualCalc, why } ] }
   الكفة اليمين = الدفتري، الكفة اليسار = الفعلي. الطالب بيحدد الحالة واسم التسوية ومبلغها، والميزان بيتوازن.
   ============================================================ */
function renderBalanceScale(containerId, cfg){
  const root = document.getElementById(containerId);
  let i = 0, stage, picked;
  const NAMES = {
    exp:{ less:"مصروف مدفوع مقدماً", more:"مصروف مستحق الدفع" },
    rev:{ less:"إيراد مقبوض مقدماً", more:"إيراد مستحق القبض" }
  };
  function c(){ return cfg.cases[i]; }
  function adjBook(k){ return k.book + (k.carry ? k.carry.sign * k.carry.amt : 0); }
  function situation(k){ const b = adjBook(k); return b === k.actual ? "eq" : (k.actual < b ? "less" : "more"); }
  function tilt(b, a){ if(b === a) return 0; const d = (a - b) / Math.max(a, b); return Math.max(-14, Math.min(14, d * 40)); }

  function entryHTML(k){
    const b = adjBook(k), d = Math.abs(k.actual - b), s = situation(k), nm = NAMES[k.kind][s];
    if(s === "eq") return `<p class="bs-note">ما في تسوية ✔️ منقفل الرصيد الفعلي <b>${xFmt(k.actual)}</b> بملخص الدخل مباشرة.</p>`;
    let lines;
    if(k.kind === "exp") lines = s === "less" ? [{side:"d",acct:nm,amt:d},{side:"c",acct:k.acct,amt:d}] : [{side:"d",acct:k.acct,amt:d},{side:"c",acct:nm,amt:d}];
    else lines = s === "less" ? [{side:"d",acct:k.acct,amt:d},{side:"c",acct:nm,amt:d}] : [{side:"d",acct:nm,amt:d},{side:"c",acct:k.acct,amt:d}];
    const close = k.kind === "exp" ? [{side:"d",acct:"ملخص الدخل",amt:k.actual},{side:"c",acct:k.acct,amt:k.actual}] : [{side:"d",acct:k.acct,amt:k.actual},{side:"c",acct:"ملخص الدخل",amt:k.actual}];
    return `<div class="bs-entries"><div><b>قيد التسوية</b>${xEntryTable(lines)}</div><div><b>قيد الإقفال (بالفعلي دايماً)</b>${xEntryTable(close)}</div></div>`;
  }

  function draw(){
    const k = c(), b = adjBook(k), done = stage === "done";
    const showActual = stage !== "calc";
    const right = done ? k.actual : b, left = showActual ? k.actual : b;
    const ang = showActual && !done ? tilt(b, k.actual) : 0;
    const s = situation(k), d = Math.abs(k.actual - b);
    root.innerHTML = `
    <div class="eqs bs">
      <div class="eqs-head"><span class="gp-tag">⚖️ لعبة الميزان</span><h4>${cfg.title}</h4><span class="bs-count">${i+1} / ${cfg.cases.length}</span></div>
      <div class="bs-case"><b>${k.name}</b><p>${k.text}</p>${k.carry ? `<p class="bs-carry">📦 بميزان المراجعة كمان: <b>${k.carry.label} ${xFmt(k.carry.amt)}</b> (رصيد مدوّر من السنة الماضية).</p>` : ""}</div>
      <div class="bs-stage">
        <div class="bs-beam" style="transform:rotate(${-ang}deg)"></div>
        <div class="bs-pan bs-right" style="transform:translateY(${(-ang) * 2.6}px)"><span class="bs-lbl">الدفتري${k.carry ? " المعدّل" : ""}</span><span class="bs-w">${xFmt(done ? k.actual : b)}</span>${done && s !== "eq" ? `<span class="bs-adj">${s === "less" ? "−" : "+"} ${xFmt(d)}</span>` : ""}</div>
        <div class="bs-pan bs-left" style="transform:translateY(${ang * 2.6}px)"><span class="bs-lbl">الفعلي (ما يخص العام)</span><span class="bs-w">${showActual ? xFmt(k.actual) : "؟"}</span></div>
        <div class="bs-post"></div><div class="bs-base"></div>
      </div>
      <div class="bs-q" id="${containerId}-q"></div>
      <div class="eqs-msg" id="${containerId}-msg"></div>
    </div>`;
    const q = root.querySelector(`#${containerId}-q`), msg = root.querySelector(`#${containerId}-msg`);
    const bad = t => { msg.className = "eqs-msg bad"; msg.innerHTML = t; };

    if(stage === "carry"){
      q.innerHTML = `<p class="eqs-hint">① أول شي منقفل الرصيد المدوّر بالحساب نفسو. شو بيصير الرصيد الدفتري المعدّل؟</p>
        <div class="bs-row"><input type="text" inputmode="numeric" class="gp-input" placeholder="الرصيد الدفتري المعدّل"><button type="button" class="btn btn-teal bs-go">تحقق</button></div>`;
      q.querySelector(".bs-go").onclick = () => {
        const v = xParseNum(q.querySelector("input").value);
        if(v === b){ stage = "calc"; draw(); }
        else bad(`❌ مو هيك. ${k.kind === "exp" ? "المصروف المدفوع مقدماً المدوّر <b>منضيفو</b>، والمستحق المدوّر <b>منطرحو</b>" : "الإيراد المقبوض مقدماً المدوّر <b>منضيفو</b>، والمستحق المدوّر <b>منطرحو</b>"}.`);
      };
    } else if(stage === "calc"){
      q.innerHTML = `<p class="eqs-hint">${k.carry ? "②" : "①"} احسب الرصيد الفعلي (ما يخص العام) وحطو بالكفة اليسار.</p>
        <div class="bs-row"><input type="text" inputmode="numeric" class="gp-input" placeholder="الرصيد الفعلي"><button type="button" class="btn btn-teal bs-go">حط بالكفة</button></div>`;
      q.querySelector(".bs-go").onclick = () => {
        const v = xParseNum(q.querySelector("input").value);
        if(v === k.actual){ stage = "sit"; draw(); }
        else bad(`❌ جرّب كمان مرة. تلميح: <span class="bs-ltr">${k.actualCalc}</span>`);
      };
    } else if(stage === "sit"){
      const opts = [["eq","الكفتين متساويتين ← ما في تسوية"],["less", NAMES[k.kind].less],["more", NAMES[k.kind].more]];
      q.innerHTML = `<p class="eqs-hint">الميزان مال لوين؟ يعني شو نوع التسوية؟</p><div class="eqs-tray">${opts.map(o => `<button type="button" class="eqs-chip bs-opt" data-k="${o[0]}">${o[1]}</button>`).join("")}</div>`;
      q.querySelectorAll(".bs-opt").forEach(btn => btn.onclick = () => {
        if(btn.dataset.k === s){ picked = s; stage = s === "eq" ? "done" : "amt"; if(s === "eq") finish(); else draw(); }
        else { btn.classList.remove("shake"); void btn.offsetWidth; btn.classList.add("shake");
          bad(k.kind === "exp" ? "❌ تذكّر: <b>الفعلي أصغر</b> من الدفتري ← دفعنا أكتر من اللازم ← مدفوع مقدماً. <b>الفعلي أكبر</b> ← في شي ما دفعناه ← مستحق." : "❌ تذكّر: <b>الفعلي أصغر</b> من الدفتري ← قبضنا أكتر من اللي بيخص العام ← مقبوض مقدماً. <b>الفعلي أكبر</b> ← في شي لسا ما قبضناه ← مستحق."); }
      });
    } else if(stage === "amt"){
      q.innerHTML = `<p class="eqs-hint">قديش لازم نزيد أو ننقّص من الكفة اليمين ليتوازن الميزان؟ (مبلغ ${NAMES[k.kind][s]})</p>
        <div class="bs-row"><input type="text" inputmode="numeric" class="gp-input" placeholder="مبلغ التسوية"><button type="button" class="btn btn-teal bs-go">وازِن</button></div>`;
      q.querySelector(".bs-go").onclick = () => {
        const v = xParseNum(q.querySelector("input").value);
        if(v === d){ stage = "done"; finish(); }
        else bad("❌ المبلغ = الفرق بين الكفتين (الكبيرة − الصغيرة).");
      };
    } else if(stage === "done"){
      q.innerHTML = `<div class="eqs-msg ok">✅ <b>توازن الميزان!</b> ${k.why || ""}</div>${entryHTML(k)}
        <div class="bs-row">${i < cfg.cases.length - 1 ? `<button type="button" class="btn btn-teal bs-next">الحالة الجاية ←</button>` : `<button type="button" class="btn btn-teal bs-again">🔁 من الأول</button>`}</div>`;
      const nx = q.querySelector(".bs-next"); if(nx) nx.onclick = () => { i++; start(); };
      const ag = q.querySelector(".bs-again"); if(ag) ag.onclick = () => { i = 0; start(); };
    }
  }
  function finish(){ draw(); if(i === cfg.cases.length - 1 && typeof launchConfetti === "function") launchConfetti(); }
  function start(){ stage = c().carry ? "carry" : "calc"; picked = null; draw(); }
  start();
}
