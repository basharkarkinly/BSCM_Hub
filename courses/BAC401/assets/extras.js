/* ============================================================
   BAC401 — مكوّنات تفاعلية إضافية. تعتمد على app.js (shuffle, launchConfetti)
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
        <div class="x-sort-hint" id="${containerId}-hint">هاي الخاصية لأي نوع شركة؟</div>
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

/* ---------- مقياس المسؤولية: شو بيتعرّض من أموالك الخاصة إذا الشركة انهارت؟ ---------- */
function renderLiabilityMeter(containerId){
  const root = document.getElementById(containerId);
  const CONTRIB = 1000000;
  const types = [
    {k:"tad",  label:"شريك بالتضامن",         unlimited:true,
     note:"مسؤول عن ديون الشركة بكل أمواله الخاصة، مش بس بقدر حصته."},
    {k:"muta", label:"توصية بسيطة: متضامن",   unlimited:true,
     note:"نفس الشريك المتضامن تماماً: مسؤوليته غير محدودة وله صفة التاجر."},
    {k:"muso", label:"توصية بسيطة: موصي",     unlimited:false,
     note:"مسؤوليته محدودة بمقدار حصته بالرأسمال."},
    {k:"llc",  label:"ذات مسؤولية محدودة",    unlimited:false,
     note:"مسؤولية كل شريك محدودة بمقدار ما يساهم بالرأسمال."},
    {k:"jsc",  label:"مساهمة مغفلة",           unlimited:false,
     note:"مسؤولية المساهم محدودة بمقدار ما يملكه من أسهم."},
  ];
  let cur = types[0];
  let debt = 5000000;

  root.innerHTML = `
    <div class="x-meter">
      <div class="x-meter-story">🏚️ الشركة خسرت وانهارت. أصولها ما بتكفي، وباقي عليها ديون للدائنين. حصتك بالرأسمال <b>${xFmt(CONTRIB)} ل.س</b> ومسدّدة بالكامل. <b>شو ممكن يطالبوك فيه من جيبك الخاص؟</b></div>
      <div class="x-seg" id="${containerId}-seg">
        ${types.map(t => `<button data-k="${t.k}" class="${t.k === cur.k ? "on" : ""}">${t.label}</button>`).join("")}
      </div>
      <div class="x-slider-row">
        <span>الديون المتبقية:</span>
        <input type="range" id="${containerId}-rng" min="0" max="8000000" step="250000" value="${debt}">
        <span class="val" id="${containerId}-val"></span>
      </div>
      <div class="x-bars">
        <div class="x-bar-line" id="${containerId}-bar"></div>
        <div class="x-legend"><span><i style="background:var(--lock)"></i>حصتك بالشركة (ضايعة)</span><span><i style="background:var(--danger)"></i>أموالك الخاصة المعرّضة للمطالبة</span></div>
      </div>
      <div class="x-verdict" id="${containerId}-verdict"></div>
    </div>`;

  const seg = document.getElementById(`${containerId}-seg`);
  const rng = document.getElementById(`${containerId}-rng`);
  const val = document.getElementById(`${containerId}-val`);
  const bar = document.getElementById(`${containerId}-bar`);
  const verdict = document.getElementById(`${containerId}-verdict`);

  function update(){
    val.textContent = xFmt(debt) + " ل.س";
    const risk = cur.unlimited ? debt : 0;
    const total = CONTRIB + risk;
    const sharePct = (CONTRIB / total) * 100;
    const riskPct = 100 - sharePct;
    bar.innerHTML = `
      <div class="seg share" style="width:${sharePct}%">${sharePct > 14 ? xFmt(CONTRIB) : ""}</div>
      ${risk > 0 ? `<div class="seg risk" style="width:${riskPct}%">${riskPct > 14 ? xFmt(risk) : ""}</div>` : ""}`;
    if(cur.unlimited){
      verdict.className = "x-verdict danger";
      verdict.innerHTML = debt === 0
        ? `ما في ديون هلق، بس <b>${cur.note}</b>`
        : `⚠️ ممكن يطالبوك بـ <b>${xFmt(risk)} ل.س</b> من أموالك الخاصة (سيارتك، بيتك...). ${cur.note}`;
    } else {
      verdict.className = "x-verdict safe";
      verdict.innerHTML = `✅ <b>خسرت حصتك بس (${xFmt(CONTRIB)} ل.س)</b> — أموالك الخاصة بأمان مهما كبرت الديون. ${cur.note}`;
    }
  }

  seg.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    cur = types.find(t => t.k === b.dataset.k);
    seg.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    update();
  }));
  rng.addEventListener("input", () => { debt = Number(rng.value); update(); });
  update();
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

/* ============================================================
   مبدّل الاتفاق: كيف تنتقل أصول الشريك حسب نص العقد؟ (دفترية أو إعادة تقدير)
   ============================================================ */
function renderTransferToggle(containerId){
  const root = document.getElementById(containerId);
  const A = [
    {n:"آلات",        kind:"fixed", cost:2000000, acc:900000, est:1300000},
    {n:"أراضي",       kind:"fixed", cost:800000,  acc:0,      est:950000},
    {n:"مدينون",      kind:"debt",  cost:500000,  prov:30000,  est:420000, pn:"مخصص د.م.ف"},
    {n:"أوراق قبض",   kind:"debt",  cost:350000,  prov:0,      est:320000, pn:"مخصص آجيو"}
  ];
  let mode = "book";

  function calc(a){
    if(a.kind === "fixed"){
      if(mode === "book") return {debit:a.cost - a.acc, prov:0, rule:a.acc ? `تكلفة ${xFmt(a.cost)} − مجمع اهتلاك ${xFmt(a.acc)}. صافي الدفترية، ويُهمل المجمع` : "قيمتها الدفترية كما هي"};
      return {debit:a.est, prov:0, rule:"القيمة المقدّرة الجديدة، وتُهمل الدفترية ومجمع الاهتلاك"};
    }
    if(mode === "book") return {debit:a.cost, prov:a.prov, rule: a.prov ? `بقيمتها الدفترية مع المخصص القديم (${xFmt(a.prov)})` : "بقيمتها الدفترية (لا مخصص عليها)"};
    return {debit:a.cost, prov:a.cost - a.est, rule:`تنتقل بالدفترية ${xFmt(a.cost)}، ويُنشأ مخصص جديد = دفترية − مقدّرة = ${xFmt(a.cost - a.est)}`};
  }

  function draw(){
    let tot = 0;
    const rows = A.map(a => {
      const r = calc(a);
      const net = r.debit - r.prov; tot += net;
      return `<tr><td><b>${a.n}</b></td><td class="rule">${r.rule}</td><td class="n">${xFmt(r.debit)}</td><td class="n">${r.prov ? xFmt(r.prov) : "—"}</td><td class="n"><b>${xFmt(net)}</b></td></tr>`;
    }).join("");
    root.innerHTML = `
      <div class="x-meter">
        <div class="x-meter-story">📦 الشريك قدّم أربع أصول. غيّر نص الاتفاق وشوف كيف بتتغيّر <b>القيمة اللي بتنقيّد لحساب حصته</b>.</div>
        <div class="x-seg" id="${containerId}-seg">
          <button data-k="book" class="${mode === "book" ? "on" : ""}">📘 الاتفاق: بالقيم الدفترية</button>
          <button data-k="est" class="${mode === "est" ? "on" : ""}">🔍 الاتفاق: بإعادة التقدير</button>
        </div>
        <div style="overflow-x:auto;"><table class="cmp gp-tt">
          <thead><tr><th>الأصل</th><th>القاعدة</th><th>مدين (الأصل)</th><th>دائن (مخصص)</th><th>الصافي لحصة الشريك</th></tr></thead>
          <tbody>${rows}<tr class="tot"><td colspan="4"><b>المجموع = ما يُقيَّد لحساب حصة الشريك</b></td><td class="n"><b>${xFmt(tot)}</b></td></tr></tbody>
        </table></div>
        <div class="x-verdict safe" style="margin-top:12px;">لاحظ: <b>المدينون وأوراق القبض</b> بتنتقل دايماً بقيمتها الدفترية، والفرق بالوضعين هو <b>المخصص</b> (قديم أو جديد). أما الأصول الثابتة فبتتغيّر قيمتها نفسها.</div>
      </div>`;
    root.querySelectorAll(`#${containerId}-seg button`).forEach(b => b.addEventListener("click", () => { mode = b.dataset.k; draw(); }));
  }
  draw();
}

/* ============================================================
   بوصلة المقارنة: صافي الأصول مقابل حصة الشريك → شو الخيارات المتاحة؟
   ============================================================ */
function renderCompareWidget(containerId){
  const root = document.getElementById(containerId);
  let share = 3000000, net = 2370000;
  const MAX = 6000000;
  root.innerHTML = `
    <div class="x-meter">
      <div class="x-meter-story">⚖️ الشريك قدّم ميزانية محله التجاري. قارن <b>صافي الأصول</b> (الأصول − الالتزامات) مع <b>حصته بالرأسمال</b>، وشوف شو بيصير.</div>
      <div class="x-slider-row"><span>حصة الشريك:</span><input type="range" id="${containerId}-s" min="1000000" max="${MAX}" step="100000" value="${share}"><span class="val" id="${containerId}-sv"></span></div>
      <div class="x-slider-row"><span>صافي الأصول:</span><input type="range" id="${containerId}-n" min="500000" max="${MAX}" step="100000" value="${net}"><span class="val" id="${containerId}-nv"></span></div>
      <div class="x-bars">
        <div class="cw-line"><span class="cw-l">الحصة</span><div class="cw-track"><div class="cw-fill share" id="${containerId}-bs"></div></div></div>
        <div class="cw-line"><span class="cw-l">صافي الأصول</span><div class="cw-track"><div class="cw-fill net" id="${containerId}-bn"></div></div></div>
      </div>
      <div id="${containerId}-out"></div>
    </div>`;
  const $ = s => document.getElementById(`${containerId}-${s}`);

  function upd(){
    $("sv").textContent = xFmt(share) + " ل.س"; $("nv").textContent = xFmt(net) + " ل.س";
    $("bs").style.width = (share / MAX * 100) + "%"; $("bn").style.width = (net / MAX * 100) + "%";
    $("bn").className = "cw-fill net " + (net === share ? "eq" : net < share ? "less" : "more");
    const d = Math.abs(share - net), out = $("out");
    if(net === share){
      out.innerHTML = `<div class="x-verdict safe"><b>الحالة 1 — متساويان ✅</b><br>ما في مشكلة: الأصول المنقولة تغطي الحصة بالضبط.</div>`;
    } else if(net < share){
      out.innerHTML = `
        <div class="x-verdict danger"><b>الحالة 2 — صافي الأصول أقل من الحصة بـ ${xFmt(d)} ل.س</b><br>الشركة استلمت أقل مما تعهّد به الشريك. الخيارات:</div>
        <div class="cw-opts">
          <div><h5>أ) الشريك يسدد الفرق نقداً</h5>${xEntryTable([{side:"d",acct:"الصندوق (أو المصرف)",amt:d},{side:"c",acct:"حصة الشريك",amt:d}])}</div>
          <div><h5>ب) يُعتبر الفرق شهرة محل موجبة</h5><p class="cw-p">أصل معنوي تملكه الشركة، وتُقيَّد ضمن قيد استلام الأصول:</p>${xEntryTable([{side:"d",acct:"صافي الأصول المنقولة",amt:net},{side:"d",acct:"شهرة محل (موجبة)",amt:d},{side:"c",acct:"حصة الشريك",amt:share}])}</div>
        </div>`;
    } else {
      out.innerHTML = `
        <div class="x-verdict safe"><b>الحالة 3 — صافي الأصول أكبر من الحصة بـ ${xFmt(d)} ل.س</b><br>الشركة استلمت أكثر من حصة الشريك. الخيارات:</div>
        <div class="cw-opts">
          <div><h5>أ) الشركة تسدد الزيادة نقداً للشريك</h5>${xEntryTable([{side:"d",acct:"حصة الشريك",amt:d},{side:"c",acct:"الصندوق (أو المصرف)",amt:d}])}</div>
          <div><h5>ب) تُسجَّل الزيادة قرضاً من الشريك</h5>${xEntryTable([{side:"d",acct:"حصة الشريك",amt:d},{side:"c",acct:"قرض الشريك",amt:d}])}</div>
          <div><h5>ج) احتياطي رأسمالي (شهرة سالبة)</h5>${xEntryTable([{side:"d",acct:"صافي الأصول المنقولة",amt:net},{side:"c",acct:"حصة الشريك",amt:share},{side:"c",acct:"احتياطي رأسمالي (شهرة سالبة)",amt:d}])}</div>
        </div>`;
    }
  }
  $("s").addEventListener("input", e => { share = Number(e.target.value); upd(); });
  $("n").addEventListener("input", e => { net = Number(e.target.value); upd(); });
  upd();
}

/* ---------- حالة عملية (من موقع BAC401 القديم) ---------- */
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
        </div>` : `<div class="eqs-done">${cfg.finish || ""}<button type="button" class="btn btn-ghost eqs-again">🔁 عيد من الأول</button></div>`}
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
