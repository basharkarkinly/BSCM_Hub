/* ============================================================
   BEC402 — مكوّنات تفاعلية إضافية. تعتمد على app.js (shuffle, launchConfetti)
   ============================================================ */


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



/* ---------- حالة عملية (من موقع BEC402 القديم) ---------- */
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
   💰 حاسبة الربح المحاسبي والاقتصادي (الفصل 1)
   cfg = { title, presets:[{name, rev, exp, wage, rent}] }
   ============================================================ */
function renderProfitCalc(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const fmt = n => (n < 0 ? "−" : "") + Math.abs(Math.round(n)).toLocaleString("en-US");
  let v = Object.assign({}, cfg.presets[0]), pi = 0;
  const F = [
    {k:"rev",  l:"💵 الإيرادات (قيمة المبيعات بالسنة)"},
    {k:"exp",  l:"🧾 التكاليف الصريحة (اللي بيسجلها المحاسب)"},
    {k:"wage", l:"👩‍💼 راتبك لو اشتغلت بأفضل وظيفة بديلة (بالسنة)"},
    {k:"rent", l:"🏠 أجرة مواردك لو أجّرتها لغيرك (بالسنة)"}
  ];
  function draw(){
    const acc = v.rev - v.exp, imp = v.wage + v.rent, eco = acc - imp;
    root.innerHTML = `
      <div class="eqs pc">
        <div class="eqs-head"><span class="gp-tag">🧮 احسب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="pc-pre">${cfg.presets.map((p, i) => `<button type="button" class="tri-sc-b${i === pi ? " on" : ""}" data-p="${i}">${p.name}</button>`).join("")}</div>
        <div class="pc-grid">
          ${F.map(f => `<label class="pc-f"><span>${f.l}</span><input type="number" min="0" step="10000" dir="ltr" data-k="${f.k}" value="${v[f.k]}"></label>`).join("")}
        </div>
        <div class="pc-out">
          <div class="pc-box"><small>الربح المحاسبي</small><b dir="ltr">${fmt(acc)}</b><em>الإيرادات − التكاليف الصريحة</em></div>
          <div class="pc-box imp"><small>التكلفة الضمنية</small><b dir="ltr">${fmt(imp)}</b><em>ثمن ثاني أفضل بديل</em></div>
          <div class="pc-box ${eco > 0 ? "pos" : eco < 0 ? "neg" : "zero"}"><small>الربح الاقتصادي</small><b dir="ltr">${fmt(eco)}</b><em>${eco > 0 ? "ربح اقتصادي ✅ المشروع أحسن من البديل" : eco < 0 ? "خسارة اقتصادية ❌ البديل أحسن" : "ربح عادي: متل البديل بالضبط"}</em></div>
        </div>
      </div>`;
    root.querySelectorAll(".pc-pre .tri-sc-b").forEach(b => b.addEventListener("click", () => { pi = +b.dataset.p; v = Object.assign({}, cfg.presets[pi]); draw(); }));
    root.querySelectorAll(".pc-f input").forEach(inp => inp.addEventListener("change", () => { v[inp.dataset.k] = Math.max(0, +inp.value || 0); pi = -1; draw(); }));
  }
  draw();
}

/* ============================================================
   📈 مختبر العرض والطلب (الفصل 2)
   خطّي: الطلب P = dA − dB·Q ، العرض P = sA + sB·Q
   cfg = { title, unit, qMax, pMax, dA, dB, sA, sB, events:[{t, curve:"D"|"S", dir:+1|-1, why}] }
   ============================================================ */
function renderSDLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const W = 360, H = 270, L = 44, Bm = 34, T = 12, R = 14;
  const qMax = cfg.qMax, pMax = cfg.pMax, SH = cfg.shift || 4;
  const X = q => L + (W - L - R) * q / qMax, Y = p => H - Bm - (H - Bm - T) * p / pMax;
  let mode = "price", price = cfg.startPrice || 400, ev = -1;
  const eq = (dA, sA) => { const q = (dA - sA) / (cfg.dB + cfg.sB); return { q, p: dA - cfg.dB * q }; };
  const line = (a, b, s, cls) => { // P = a + s*b*Q
    const pts = [];
    for (let q = 0; q <= qMax; q += qMax / 40) { const p = a + s * b * q; if (p >= 0 && p <= pMax) pts.push(`${X(q).toFixed(1)},${Y(p).toFixed(1)}`); }
    return `<polyline class="${cls}" points="${pts.join(" ")}"/>`;
  };
  function axes(){
    let g = `<line class="sd-ax" x1="${L}" y1="${Y(0)}" x2="${W - R}" y2="${Y(0)}"/><line class="sd-ax" x1="${L}" y1="${Y(0)}" x2="${L}" y2="${T}"/>`;
    for (let p = 0; p <= pMax; p += cfg.pStep) g += `<text class="sd-tk" x="${L - 5}" y="${Y(p) + 4}" text-anchor="end">${p}</text>`;
    for (let q = 0; q <= qMax; q += cfg.qStep) g += `<text class="sd-tk" x="${X(q)}" y="${Y(0) + 15}" text-anchor="middle">${q}</text>`;
    g += `<text class="sd-lb" x="${W - R}" y="${Y(0) + 29}" text-anchor="end">الكمية Q</text><text class="sd-lb" x="${L + 4}" y="${T + 10}">السعر P</text>`;
    return g;
  }
  const r1 = v => Math.round(v * 10) / 10, r0 = v => Math.round(v);
  function draw(){
    let svg = axes(), info = "";
    const e0 = eq(cfg.dA, cfg.sA);
    if (mode === "price"){
      const qd = (cfg.dA - price) / cfg.dB, qs = (price - cfg.sA) / cfg.sB;
      svg += line(cfg.dA, cfg.dB, -1, "sd-d") + line(cfg.sA, cfg.sB, 1, "sd-s");
      svg += `<line class="sd-pl" x1="${L}" y1="${Y(price)}" x2="${W - R}" y2="${Y(price)}"/>`;
      if (qd >= 0 && qs >= 0) svg += `<line class="sd-gap ${qd > qs ? "short" : "surp"}" x1="${X(Math.min(qd, qs))}" y1="${Y(price)}" x2="${X(Math.max(qd, qs))}" y2="${Y(price)}"/>`;
      svg += `<circle class="sd-e" cx="${X(e0.q)}" cy="${Y(e0.p)}" r="4"/>`;
      const gap = r1(Math.abs(qd - qs));
      info = Math.abs(qd - qs) < 0.05
        ? `<div class="eqs-msg ok">⚖️ <b>توازن!</b> الكمية المطلوبة = الكمية المعروضة = ${r1(qd)} ${cfg.unit}. ما في ضغط على السعر.</div>`
        : qd > qs
          ? `<div class="eqs-msg bad">🔺 <b>عجز بالعرض (فائض طلب) = ${gap} ${cfg.unit}</b>: المطلوب ${r1(qd)} والمعروض ${r1(qs)} بس. المستهلكين بيقبلوا يدفعوا أكتر ← <b>السعر بيضغط لفوق</b> لحد التوازن.</div>`
          : `<div class="eqs-msg bad">🔻 <b>فائض بالعرض = ${gap} ${cfg.unit}</b>: المعروض ${r1(qs)} والمطلوب ${r1(qd)} بس. المنتجين بيخفّضوا ليصرّفوا ← <b>السعر بيضغط لتحت</b> لحد التوازن.</div>`;
    } else {
      const E = cfg.events[ev];
      svg += line(cfg.dA, cfg.dB, -1, "sd-d" + (E && E.curve === "D" ? " old" : "")) + line(cfg.sA, cfg.sB, 1, "sd-s" + (E && E.curve === "S" ? " old" : ""));
      svg += `<circle class="sd-e" cx="${X(e0.q)}" cy="${Y(e0.p)}" r="4"/>`;
      if (E){
        const dA2 = cfg.dA + (E.curve === "D" ? E.dir * SH * cfg.dB : 0), sA2 = cfg.sA - (E.curve === "S" ? E.dir * SH * cfg.sB : 0);
        svg += E.curve === "D" ? line(dA2, cfg.dB, -1, "sd-d new") : line(sA2, cfg.sB, 1, "sd-s new");
        const e1 = eq(dA2, sA2);
        svg += `<circle class="sd-e new" cx="${X(e1.q)}" cy="${Y(e1.p)}" r="5"/>`;
        const up = v => v > 0.01 ? "⬆️ ارتفع" : v < -0.01 ? "⬇️ انخفض" : "↔️ ثابت";
        info = `<div class="eqs-msg ok"><b>${E.curve === "D" ? "📘 انزياح بمنحنى الطلب" : "📙 انزياح بمنحنى العرض"} ${E.dir > 0 ? "لليمين" : "لليسار"}</b><br>السعر التوازني: ${up(e1.p - e0.p)} (${r0(e0.p)} ← ${r0(e1.p)}) · الكمية التوازنية: ${up(e1.q - e0.q)} (${r1(e0.q)} ← ${r1(e1.q)})<br><span class="sd-why">${E.why}</span></div>`;
      } else info = `<p class="eqs-hint">اختار حدث وشوف أي منحنى بينزاح ولوين.</p>`;
    }
    root.innerHTML = `
      <div class="eqs sdl">
        <div class="eqs-head"><span class="gp-tag">📈 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="sdl-tabs"><button type="button" class="tri-sc-b${mode === "price" ? " on" : ""}" data-m="price">💲 حرّك السعر</button><button type="button" class="tri-sc-b${mode === "ev" ? " on" : ""}" data-m="ev">⚡ صار حدث بالسوق</button></div>
        <div class="sdl-grid">
          <div><svg class="sd-svg" viewBox="0 0 ${W} ${H}" dir="ltr">${svg}</svg>
            <div class="sd-leg"><span class="k d"></span> الطلب D <span class="k s"></span> العرض S <span class="k e"></span> التوازن</div></div>
          <div>
            ${mode === "price"
              ? `<label class="sdl-sl">السعر: <b dir="ltr">${price}</b> ${cfg.pUnit || ""}<input type="range" min="${cfg.pMin || 0}" max="${cfg.pMaxSlider || pMax}" step="${cfg.pStepSlider || 50}" value="${price}" dir="ltr"></label>`
              : `<div class="sdl-evs">${cfg.events.map((x, i) => `<button type="button" class="sdl-ev${i === ev ? " on" : ""}" data-i="${i}">${x.t}</button>`).join("")}</div>`}
            ${info}
          </div>
        </div>
      </div>`;
    root.querySelectorAll(".sdl-tabs .tri-sc-b").forEach(b => b.addEventListener("click", () => { mode = b.dataset.m; draw(); }));
    const sl = root.querySelector(".sdl-sl input"); if (sl) sl.addEventListener("input", () => { price = +sl.value; draw(); root.querySelector(".sdl-sl input").focus(); });
    root.querySelectorAll(".sdl-ev").forEach(b => b.addEventListener("click", () => { ev = +b.dataset.i; draw(); }));
  }
  draw();
}

/* ============================================================
   🛒 دكانة المنفعة (الفصل 3): وزّع ميزانيتك على سلعتين
   cfg = { title, budget, goods:[{name, icon, price, mu:[..]}] }
   ============================================================ */
function renderMUShop(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const n = cfg.goods.map(() => 0);
  const tu = (g, k) => g.mu.slice(0, k).reduce((a, b) => a + b, 0);
  function draw(){
    const spent = cfg.goods.reduce((s, g, i) => s + g.price * n[i], 0), left = cfg.budget - spent;
    const ratios = cfg.goods.map((g, i) => n[i] ? g.mu[n[i] - 1] / g.price : null);
    const total = cfg.goods.reduce((s, g, i) => s + tu(g, n[i]), 0);
    // أفضل تركيب ممكن ضمن الميزانية
    let best = 0;
    (function rec(i, money, acc){ if (i === cfg.goods.length){ best = Math.max(best, acc); return; }
      const g = cfg.goods[i]; for (let k = 0; k <= g.mu.length && k * g.price <= money; k++) rec(i + 1, money - k * g.price, acc + tu(g, k)); })(0, cfg.budget, 0);
    const allIn = left < Math.min(...cfg.goods.map(g => g.price));
    const eqOk = allIn && ratios.every(r => r !== null) && ratios.every(r => Math.abs(r - ratios[0]) < 1e-9);
    root.innerHTML = `
      <div class="eqs mus">
        <div class="eqs-head"><span class="gp-tag">🛒 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="mus-bud">💰 الميزانية: <b>${cfg.budget}</b> · صرفت: <b>${spent}</b> · باقي: <b>${left}</b></div>
        <div class="mus-grid">${cfg.goods.map((g, i) => `
          <div class="mus-card">
            <div class="mus-h">${g.icon} <b>${g.name}</b> <small>السعر ${g.price}</small></div>
            <div class="mus-row"><button type="button" class="tri-sc-b mus-m" data-i="${i}"${n[i] ? "" : " disabled"}>−</button><span class="mus-n">${n[i]}</span><button type="button" class="tri-sc-b mus-p" data-i="${i}"${n[i] < g.mu.length && g.price <= left ? "" : " disabled"}>+</button></div>
            <table class="mus-t"><tr><th>الوحدة</th>${g.mu.map((_, k) => `<td class="${k < n[i] ? "on" : ""}">${k + 1}</td>`).join("")}</tr><tr><th>المنفعة الحدية</th>${g.mu.map((m, k) => `<td class="${k < n[i] ? "on" : ""}">${m}</td>`).join("")}</tr></table>
            <div class="mus-r">المنفعة الكلية: <b>${tu(g, n[i])}</b> · آخر وحدة: <bdi dir="ltr" style="font-weight:800">${n[i] ? g.mu[n[i] - 1] + "/" + g.price + " = " + (+ratios[i].toFixed(2)) : "—"}</bdi></div>
          </div>`).join("")}</div>
        <div class="mus-tot">المنفعة الكلية من التركيب: <b>${total}</b> (أعلى شي ممكن بهالميزانية: ${best})</div>
        ${!allIn ? '<p class="eqs-hint">كمّل اشتري لحتى تخلص الميزانية.</p>'
          : eqOk && total === best ? '<div class="eqs-msg ok">⚖️ <b>توازن المستهلك!</b> المنفعة الحدية منسوبة للسعر متساوية بالسلعتين، وصلت لأعلى منفعة ممكنة ضمن ميزانيتك.</div>'
          : `<div class="eqs-msg bad">❌ صرفت كل الميزانية بس المنفعة الحدية لكل وحدة نقدية مو متساوية (${ratios.map(r => r === null ? "—" : +r.toFixed(2)).join(" ≠ ")}). حوّل وحدة من السلعة اللي نسبتها أقل للسلعة اللي نسبتها أعلى.</div>`}
      </div>`;
    root.querySelectorAll(".mus-p").forEach(b => b.addEventListener("click", () => { n[+b.dataset.i]++; draw(); }));
    root.querySelectorAll(".mus-m").forEach(b => b.addEventListener("click", () => { n[+b.dataset.i]--; draw(); }));
  }
  draw();
}

/* ============================================================
   🗺️ مختبر منحنيات السواء وخط الميزانية (الفصل 4)
   تابع المنفعة U = x·y ، الأمثل: x* = M/(2Px) ، y* = M/(2Py)
   cfg = { title, xName, yName, M, Px, Py, xMax, yMax }
   ============================================================ */
function renderICLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const W = 360, H = 290, L = 40, Bm = 34, T = 12, R = 14;
  let M = cfg.M, Px = cfg.Px, Py = cfg.Py, xs = null;
  const xMax = cfg.xMax, yMax = cfg.yMax;
  const X = x => L + (W - L - R) * x / xMax, Y = y => H - Bm - (H - Bm - T) * y / yMax;
  const r2 = v => Math.round(v * 100) / 100;
  function ic(u, cls){
    const pts = []; for (let x = u / yMax; x <= xMax; x += xMax / 120){ const y = u / x; if (y <= yMax && y >= 0) pts.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`); }
    return `<polyline class="${cls}" points="${pts.join(" ")}"/>`;
  }
  function draw(){
    const xi = M / Px, yi = M / Py, xo = M / (2 * Px), yo = M / (2 * Py), uo = xo * yo;
    if (xs === null || xs > xi) xs = Math.min(xi, Math.max(0.1, xo * 0.4));
    const ys = (M - Px * xs) / Py, us = xs * ys;
    const mrs = xs > 0 ? ys / xs : Infinity, pr = Px / Py;
    let svg = `<polygon class="ic-feas" points="${X(0)},${Y(0)} ${X(Math.min(xi, xMax))},${Y(xi > xMax ? (M - Px * xMax) / Py : 0)} ${X(0)},${Y(Math.min(yi, yMax))}"/>`;
    svg += `<line class="sd-ax" x1="${L}" y1="${Y(0)}" x2="${W - R}" y2="${Y(0)}"/><line class="sd-ax" x1="${L}" y1="${Y(0)}" x2="${L}" y2="${T}"/>`;
    for (let k = 0; k <= 4; k++){ const vx = xMax * k / 4, vy = yMax * k / 4;
      svg += `<text class="sd-tk" x="${X(vx)}" y="${Y(0) + 15}" text-anchor="middle">${r2(vx)}</text><text class="sd-tk" x="${L - 5}" y="${Y(vy) + 4}" text-anchor="end">${r2(vy)}</text>`; }
    svg += `<text class="sd-lb" x="${W - R}" y="${Y(0) + 29}" text-anchor="end">${cfg.xName} x</text><text class="sd-lb" x="${L + 4}" y="${T + 10}">${cfg.yName} y</text>`;
    svg += ic(uo * 1.7, "ic-u hi") + ic(uo, "ic-u opt") + (Math.abs(us - uo) > 0.01 ? ic(us, "ic-u low") : "");
    svg += `<line class="ic-bl" x1="${X(0)}" y1="${Y(yi)}" x2="${X(xi)}" y2="${Y(0)}"/>`;
    svg += `<circle class="sd-e new" cx="${X(xo)}" cy="${Y(yo)}" r="5"/><circle class="ic-pt" cx="${X(xs)}" cy="${Y(ys)}" r="6"/>`;
    const at = Math.abs(xs - xo) < xo * 0.04;
    root.innerHTML = `
      <div class="eqs icl">
        <div class="eqs-head"><span class="gp-tag">🗺️ جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="sdl-grid">
          <div><svg class="sd-svg" viewBox="0 0 ${W} ${H}">${svg}</svg>
            <div class="sd-leg"><span class="k bl"></span> خط الميزانية <span class="k ic"></span> منحنيات السواء <span class="k pt"></span> اختيارك <span class="k e2"></span> الأمثل</div></div>
          <div>
            <label class="sdl-sl">💰 الدخل <bdi dir="ltr"><b>M = ${M}</b></bdi><input type="range" data-k="M" min="40" max="160" step="10" value="${M}" dir="ltr"></label>
            <label class="sdl-sl">🏷️ سعر ${cfg.xName} <bdi dir="ltr"><b>Px = ${Px}</b></bdi><input type="range" data-k="Px" min="4" max="20" step="1" value="${Px}" dir="ltr"></label>
            <label class="sdl-sl">🏷️ سعر ${cfg.yName} <bdi dir="ltr"><b>Py = ${Py}</b></bdi><input type="range" data-k="Py" min="1" max="6" step="1" value="${Py}" dir="ltr"></label>
            <label class="sdl-sl">👆 تحرّك على خط الميزانية: <bdi dir="ltr"><b>x = ${r2(xs)}، y = ${r2(ys)}</b></bdi><input type="range" data-k="xs" min="0.1" max="${r2(xi - 0.1)}" step="0.1" value="${r2(xs)}" dir="ltr"></label>
            <div class="ic-box"><span dir="ltr">MRS = y/x = <b>${r2(mrs)}</b></span><span dir="ltr">Px/Py = <b>${r2(pr)}</b></span><span dir="ltr">U = <b>${r2(us)}</b></span></div>
            ${at ? `<div class="eqs-msg ok">⚖️ <b>التوازن:</b> نقطة التماس، MRS = Px/Py، وأعلى منفعة ممكنة (<bdi dir="ltr">U = ${r2(uo)}</bdi>) عند <bdi dir="ltr">x* = ${r2(xo)}</bdi> و <bdi dir="ltr">y* = ${r2(yo)}</bdi>.</div>`
              : mrs > pr ? `<div class="eqs-msg bad">MRS أكبر من Px/Py: قيمة ${cfg.xName} عندك أعلى من سعرها بالسوق ← <b>زيد ${cfg.xName}</b> وقلّل ${cfg.yName}.</div>`
              : `<div class="eqs-msg bad">MRS أصغر من Px/Py ← <b>قلّل ${cfg.xName}</b> وزيد ${cfg.yName}.</div>`}
          </div>
        </div>
      </div>`;
    root.querySelectorAll(".sdl-sl input").forEach(inp => inp.addEventListener("input", () => {
      const k = inp.dataset.k, v = +inp.value;
      if (k === "M") M = v; else if (k === "Px") Px = v; else if (k === "Py") Py = v; else xs = v;
      if (k !== "xs") xs = Math.min(xs, M / Px - 0.1);
      draw(); const again = root.querySelector(`.sdl-sl input[data-k="${k}"]`); if (again) again.focus();
    }));
  }
  draw();
}

/* ============================================================
   ⚖️ مختبر أثر الإبدال وأثر الدخل (الفصل 5) — U = x·y
   x* = M/(2Px) ، xc = √(Py·U/Px)
   cfg = { title, M, Py, Px1 }
   ============================================================ */
function renderSubIncLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let Px2 = cfg.Px1 * 2;
  const r2 = v => Math.round(v * 100) / 100;
  function draw(){
    const M = cfg.M, Py = cfg.Py, Px1 = cfg.Px1;
    const x1 = M / (2 * Px1), y1 = M / (2 * Py), U1 = x1 * y1;
    const xc = Math.sqrt(Py * U1 / Px2), x3 = M / (2 * Px2);
    const Mc = 2 * Math.sqrt(Px2 * Py * U1);
    const se = xc - x1, ie = x3 - xc, te = x3 - x1;
    const mx = Math.max(Math.abs(se), Math.abs(ie), Math.abs(te), 0.01);
    const bar = (v, cls, lab) => `<div class="si-row"><span class="si-l">${lab}</span><div class="si-track"><div class="si-bar ${cls} ${v < 0 ? "neg" : "pos"}" style="width:${Math.abs(v) / mx * 50}%"></div><div class="si-mid"></div></div><b dir="ltr">${v > 0 ? "+" : ""}${r2(v)}</b></div>`;
    root.innerHTML = `
      <div class="eqs si">
        <div class="eqs-head"><span class="gp-tag">⚖️ جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <label class="sdl-sl">🏷️ سعر X الجديد: <bdi dir="ltr"><b>Px: ${Px1} → ${Px2}</b></bdi><input type="range" min="${Px1 / 2}" max="${Px1 * 3}" step="${Px1 / 4}" value="${Px2}" dir="ltr"></label>
        <div class="si-steps">
          <div><b>1️⃣ قبل:</b> <bdi dir="ltr">x₁* = M/(2Px) = ${r2(x1)}</bdi>، والمنفعة <bdi dir="ltr">U₁ = ${r2(U1)}</bdi></div>
          <div><b>2️⃣ بعد التعويض</b> (منعطيه دخل <bdi dir="ltr">M = ${r2(Mc)}</bdi> ليضل على <bdi dir="ltr">U₁</bdi>): <bdi dir="ltr">xc = ${r2(xc)}</bdi></div>
          <div><b>3️⃣ منسحب التعويض</b> ومنرجع الدخل لـ <bdi dir="ltr">${M}</bdi>: <bdi dir="ltr">x₃* = ${r2(x3)}</bdi></div>
        </div>
        ${bar(se, "s", "🔁 أثر الإبدال")}${bar(ie, "i", "💰 أثر الدخل")}${bar(te, "t", "📦 الأثر الكلي")}
        ${Px2 === Px1 ? '<p class="eqs-hint">حرّك السعر لتشوف الأثرين.</p>'
          : `<div class="eqs-msg ok">${Px2 > Px1 ? "السعر ارتفع" : "السعر انخفض"}: <b>أثر الإبدال ${se < 0 ? "سالب" : "موجب"}</b> (عكس اتجاه السعر دايماً)، و<b>أثر الدخل ${ie < 0 ? "سالب" : "موجب"}</b> بنفس اتجاه أثر الإبدال لأنو X هون <b>سلعة عادية</b>، فالأثرين بيتجمّعوا ومنحنى الطلب هابط.</div>`}
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { Px2 = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}
