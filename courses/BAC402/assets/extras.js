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

/* ============================================================
   🧾 حاسبة الكمبيالة — تاريخ الاستحقاق، الفائدة، القيمة المستحقة، الخصم
   cfg = { title, v:{ amount, rate, term, unit:"d"|"m", issue:"YYYY-MM-DD", disc:"YYYY-MM-DD"|"", drate } }
   الفائدة = المبلغ × المعدل × المدة (أيام ÷ 360 أو أشهر ÷ 12)
   ============================================================ */

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
    rev:{ less:"إيراد مقبوض مقدماً", more:"إيراد مستحق القبض" },
    prov:{ less:"فائض بالمخصص ← نرجّعو لملخص الدخل", more:"نقص بالمخصص ← ترميم بالفرق" }
  };
  /* kind "prov": right pan = provision on hand (after carry), left pan = provision required. */
  function lbB(k){ return k.kind === "prov" ? "المخصص الموجود" : ("الدفتري" + (k.carry ? " المعدّل" : "")); }
  function lbA(k){ return k.kind === "prov" ? "المخصص المطلوب" : "الفعلي (ما يخص العام)"; }
  function c(){ return cfg.cases[i]; }
  function adjBook(k){ return k.book + (k.carry ? k.carry.sign * k.carry.amt : 0); }
  function situation(k){ const b = adjBook(k); return b === k.actual ? "eq" : (k.actual < b ? "less" : "more"); }
  function tilt(b, a){ if(b === a) return 0; const d = (a - b) / Math.max(a, b); return Math.max(-14, Math.min(14, d * 40)); }

  function entryHTML(k){
    const b = adjBook(k), d = Math.abs(k.actual - b), s = situation(k), nm = NAMES[k.kind][s];
    if(k.kind === "prov"){
      if(s === "eq") return `<p class="bs-note">ما في ولا قيد ✔️ المخصص الموجود بيكفي تماماً، وبيظهر بالميزانية مطروح من <b>${k.base || "الأصل"}</b>، وما بتتأثر قائمة الدخل.</p>`;
      if(s === "less") return `<div class="bs-entries"><div><b>إعادة الفائض</b>${xEntryTable([{side:"d",acct:k.acct,amt:d},{side:"c",acct:"ملخص الدخل",amt:d}])}</div></div>`;
      return `<div class="bs-entries"><div><b>ترميم المخصص</b>${xEntryTable([{side:"d",acct:k.loss,amt:d},{side:"c",acct:k.acct,amt:d}])}</div><div><b>الإقفال</b>${xEntryTable([{side:"d",acct:"ملخص الدخل",amt:d},{side:"c",acct:k.loss,amt:d}])}</div></div>`;
    }
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
      <div class="bs-case"><b>${k.name}</b><p>${k.text}</p>${k.carry ? `<p class="bs-carry">📦 ${k.carry.note || `بميزان المراجعة كمان: <b>${k.carry.label} ${xFmt(k.carry.amt)}</b> (رصيد مدوّر من السنة الماضية).`}</p>` : ""}</div>
      <div class="bs-stage">
        <div class="bs-beam" style="transform:rotate(${-ang}deg)"></div>
        <div class="bs-pan bs-right" style="transform:translateY(${(-ang) * 2.6}px)"><span class="bs-lbl">${lbB(k)}</span><span class="bs-w">${xFmt(done ? k.actual : b)}</span>${done && s !== "eq" ? `<span class="bs-adj">${s === "less" ? "−" : "+"} ${xFmt(d)}</span>` : ""}</div>
        <div class="bs-pan bs-left" style="transform:translateY(${ang * 2.6}px)"><span class="bs-lbl">${lbA(k)}</span><span class="bs-w">${showActual ? xFmt(k.actual) : "؟"}</span></div>
        <div class="bs-post"></div><div class="bs-base"></div>
      </div>
      <div class="bs-q" id="${containerId}-q"></div>
      <div class="eqs-msg" id="${containerId}-msg"></div>
    </div>`;
    const q = root.querySelector(`#${containerId}-q`), msg = root.querySelector(`#${containerId}-msg`);
    const bad = t => { msg.className = "eqs-msg bad"; msg.innerHTML = t; };

    if(stage === "carry"){
      q.innerHTML = `<p class="eqs-hint">① ${k.kind === "prov" ? "أول شي منقفل الديون المعدومة بالمخصص. قديش بيبقى من المخصص؟" : "أول شي منقفل الرصيد المدوّر بالحساب نفسو. شو بيصير الرصيد الدفتري المعدّل؟"}</p>
        <div class="bs-row"><input type="text" inputmode="numeric" class="gp-input" placeholder="${k.kind === "prov" ? "المخصص الباقي" : "الرصيد الدفتري المعدّل"}"><button type="button" class="btn btn-teal bs-go">تحقق</button></div>`;
      q.querySelector(".bs-go").onclick = () => {
        const v = xParseNum(q.querySelector("input").value);
        if(v === b){ stage = "calc"; draw(); }
        else bad(k.kind === "prov" ? "❌ المخصص الباقي = المخصص المدوّر − الديون المعدومة اللي انقفلت فيه." : `❌ مو هيك. ${k.kind === "exp" ? "المصروف المدفوع مقدماً المدوّر <b>منضيفو</b>، والمستحق المدوّر <b>منطرحو</b>" : "الإيراد المقبوض مقدماً المدوّر <b>منضيفو</b>، والمستحق المدوّر <b>منطرحو</b>"}.`);
      };
    } else if(stage === "calc"){
      q.innerHTML = `<p class="eqs-hint">${k.carry ? "②" : "①"} ${k.kind === "prov" ? "احسب المخصص المطلوب وحطو بالكفة اليسار." : "احسب الرصيد الفعلي (ما يخص العام) وحطو بالكفة اليسار."}</p>
        <div class="bs-row"><input type="text" inputmode="numeric" class="gp-input" placeholder="${k.kind === "prov" ? "المخصص المطلوب" : "الرصيد الفعلي"}"><button type="button" class="btn btn-teal bs-go">حط بالكفة</button></div>`;
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
          bad(k.kind === "prov" ? "❌ تذكّر: <b>المطلوب أكبر</b> من الموجود ← المخصص ناقص ← منرمّمو بالفرق. <b>المطلوب أصغر</b> ← في فائض منرجّعو لملخص الدخل." : k.kind === "exp" ? "❌ تذكّر: <b>الفعلي أصغر</b> من الدفتري ← دفعنا أكتر من اللازم ← مدفوع مقدماً. <b>الفعلي أكبر</b> ← في شي ما دفعناه ← مستحق." : "❌ تذكّر: <b>الفعلي أصغر</b> من الدفتري ← قبضنا أكتر من اللي بيخص العام ← مقبوض مقدماً. <b>الفعلي أكبر</b> ← في شي لسا ما قبضناه ← مستحق."); }
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
