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

/* ---------- مختبر المرونة (الفصل 6): طلب خطي Q = a − b·P ---------- */
function renderElastLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const a = cfg.a, b = cfg.b, pMax = a / b;
  let P1 = cfg.P1, P2 = cfg.P2;
  const r2 = v => Math.round(v * 100) / 100;
  const Q = p => a - b * p;
  const lvl = e => { const m = Math.abs(e);
    if (m < 0.005) return "عديم المرونة"; if (Math.abs(m - 1) < 0.005) return "متكافئ المرونة";
    return m > 1 ? "مرن" : "غير مرن (ضعيف المرونة)"; };
  function draw(){
    const q1 = Q(P1), q2 = Q(P2);
    const ePt = -b * P1 / q1;
    const arc = ((q2 - q1) / ((q1 + q2) / 2)) / ((P2 - P1) / ((P1 + P2) / 2));
    const TR1 = P1 * q1, TR2 = P2 * q2;
    const W = 360, H = 250, L = 46, Bt = 34, T = 12, R = 14;
    const sx = q => L + q / a * (W - L - R), sy = p => H - Bt - p / pMax * (H - Bt - T);
    let ticks = "";
    for (let i = 0; i <= 4; i++){ const q = a * i / 4, p = pMax * i / 4;
      ticks += `<text class="sd-tk" x="${sx(q)}" y="${H - Bt + 14}" text-anchor="middle">${r2(q)}</text><text class="sd-tk" x="${L - 6}" y="${sy(p) + 3}" text-anchor="end">${r2(p)}</text>`; }
    const rect = (p, q, c) => `<rect x="${sx(0)}" y="${sy(p)}" width="${sx(q) - sx(0)}" height="${sy(0) - sy(p)}" fill="${c}" opacity=".16"/>`;
    const mid = pMax / 2;
    root.innerHTML = `
      <div class="eqs el">
        <div class="eqs-head"><span class="gp-tag">📏 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="منحنى طلب خطي">
            ${rect(P1, q1, "#2563EB")}${rect(P2, q2, "#0B7A57")}
            <line class="sd-ax" x1="${L}" y1="${sy(0)}" x2="${W - R}" y2="${sy(0)}"/><line class="sd-ax" x1="${L}" y1="${sy(0)}" x2="${L}" y2="${T}"/>
            ${ticks}
            <line class="sd-pl" x1="${L}" y1="${sy(mid)}" x2="${sx(Q(mid))}" y2="${sy(mid)}"/>
            <line class="sd-d" x1="${sx(0)}" y1="${sy(pMax)}" x2="${sx(a)}" y2="${sy(0)}"/>
            <text class="sd-lb" x="${sx(Q(mid)) + 6}" y="${sy(mid) - 6}">|e| = 1</text>
            <circle class="sd-e" cx="${sx(q1)}" cy="${sy(P1)}" r="6"/><circle class="sd-e new" cx="${sx(q2)}" cy="${sy(P2)}" r="6"/>
            <text class="sd-lb" x="${W - R}" y="${H - 6}" text-anchor="end">Q</text><text class="sd-lb" x="${L + 4}" y="${T + 8}">P</text>
          </svg>
          <div>
            <label class="sdl-sl">🔵 السعر الأول: <span class="el-f" dir="ltr">P₁ = ${P1}  |  Q₁ = ${r2(q1)}</span><input data-k="1" type="range" min="${cfg.step}" max="${pMax - cfg.step}" step="${cfg.step}" value="${P1}" dir="ltr"></label>
            <label class="sdl-sl">🟢 السعر التاني: <span class="el-f" dir="ltr">P₂ = ${P2}  |  Q₂ = ${r2(q2)}</span><input data-k="2" type="range" min="${cfg.step}" max="${pMax - cfg.step}" step="${cfg.step}" value="${P2}" dir="ltr"></label>
            <div class="si-steps">
              <div><b>📍 المرونة النقطية عند P₁:</b> ${lvl(ePt)}<span class="el-f" dir="ltr">ε = (ΔQ/ΔP)·(P/Q) = −${b} × ${P1} / ${r2(q1)} = ${r2(ePt)}</span></div>
              <div><b>🌉 المرونة القوسية بين السعرين:</b> ${P1 === P2 ? "حرّك سعر لتنحسب" : lvl(arc) + `<span class="el-f" dir="ltr">ε = ${r2(arc)}</span>`}</div>
              <div><b>💵 الإيراد الكلي:</b><span class="el-f" dir="ltr">TR₁ = ${r2(TR1)}  |  TR₂ = ${r2(TR2)}</span></div>
            </div>
          </div>
        </div>
        ${P1 === P2 ? '<p class="eqs-hint">حرّك السعر التاني لتشوف شو بيصير بالإيراد.</p>'
          : `<div class="eqs-msg ok">${P2 < P1 ? "السعر <b>نزل</b>" : "السعر <b>طلع</b>"} والإيراد الكلي <b>${Math.abs(TR2 - TR1) < 0.5 ? "ما تغيّر تقريباً" : (TR2 > TR1 ? "زاد" : "نقص")}</b>. ${Math.abs(arc) > 1.005 ? "الطلب بهالمجال <b>مرن</b>: الإيراد بيمشي <b>عكس</b> السعر." : Math.abs(arc) < 0.995 ? "الطلب بهالمجال <b>غير مرن</b>: الإيراد بيمشي <b>مع</b> السعر." : "المجال حوالي نقطة المنتصف: المرونة ≈ 1."} أعلى إيراد عند المنتصف <bdi dir="ltr">P = ${r2(mid)}</bdi>.</div>`}
        <div class="sd-leg"><span class="k d"></span> الطلب <span class="k e"></span> النقطة الأولى (المستطيل الأزرق = TR₁) <span class="k e2"></span> النقطة التانية (المستطيل الأخضر = TR₂)</div>
      </div>`;
    root.querySelectorAll("input").forEach(sl => sl.addEventListener("input", () => {
      const k = sl.dataset.k; if (k === "1") P1 = +sl.value; else P2 = +sl.value; draw();
      root.querySelector(`input[data-k="${k}"]`).focus(); }));
  }
  draw();
}

/* ---------- أدوات رسم مشتركة للفصل 7 ---------- */
function _mkPlot(W, H, qMax, pMax, pMin){
  const L = 44, Bt = 30, T = 12, R = 14; pMin = pMin || 0;
  const sx = q => L + q / qMax * (W - L - R), sy = p => H - Bt - (p - pMin) / (pMax - pMin) * (H - Bt - T);
  const axes = (qs, ps) => `<line class="sd-ax" x1="${L}" y1="${H - Bt}" x2="${W - R}" y2="${H - Bt}"/><line class="sd-ax" x1="${L}" y1="${H - Bt}" x2="${L}" y2="${T}"/>`
    + qs.map(q => `<text class="sd-tk" x="${sx(q)}" y="${H - Bt + 14}" text-anchor="middle">${q}</text>`).join("")
    + ps.map(p => `<text class="sd-tk" x="${L - 6}" y="${sy(p) + 3}" text-anchor="end">${p}</text>`).join("")
    + `<text class="sd-lb" x="${W - R}" y="${H - 4}" text-anchor="end">Q</text><text class="sd-lb" x="${L + 4}" y="${T + 8}">P</text>`;
  return { sx, sy, axes, L, R, T, Bt, W, H };
}

/* ---------- مختبر الضريبة: توزيع العبء الضريبي حسب مرونة الطلب ---------- */
function renderTaxLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let ci = 0, t = cfg.t;
  const Pe = cfg.Pe, Qe = cfg.Qe, r2 = v => Math.round(v * 100) / 100;
  function solve(c){
    const sB = c.sB, sA = Pe - sB * Qe;
    if (c.type === "vert") return { Q: Qe, Pc: Pe + t, Pp: Pe, sA, sB };
    if (c.type === "horiz") return { Q: (Pe - t - sA) / sB, Pc: Pe, Pp: Pe - t, sA, sB };
    const dA = Pe + c.dB * Qe, Q = (dA - sA - t) / (c.dB + sB), Pc = dA - c.dB * Q;
    return { Q, Pc, Pp: Pc - t, sA, sB, dA };
  }
  function draw(){
    const c = cfg.cases[ci], s = solve(c);
    const pl = _mkPlot(360, 250, cfg.qMax, cfg.pMax, cfg.pMin);
    const { sx, sy } = pl;
    const sLine = (shift, cls) => { const q0 = Math.max(0, (cfg.pMin - s.sA - shift) / s.sB), q1 = Math.min(cfg.qMax, (cfg.pMax - s.sA - shift) / s.sB);
      return `<line class="sd-s ${cls}" x1="${sx(q0)}" y1="${sy(s.sA + shift + s.sB * q0)}" x2="${sx(q1)}" y2="${sy(s.sA + shift + s.sB * q1)}"/>`; };
    let dLine;
    if (c.type === "vert") dLine = `<line class="sd-d" x1="${sx(Qe)}" y1="${sy(cfg.pMin)}" x2="${sx(Qe)}" y2="${sy(cfg.pMax)}"/>`;
    else if (c.type === "horiz") dLine = `<line class="sd-d" x1="${sx(0)}" y1="${sy(Pe)}" x2="${sx(cfg.qMax)}" y2="${sy(Pe)}"/>`;
    else { const q0 = Math.max(0, (s.dA - cfg.pMax) / c.dB), q1 = Math.min(cfg.qMax, (s.dA - cfg.pMin) / c.dB);
      dLine = `<line class="sd-d" x1="${sx(q0)}" y1="${sy(s.dA - c.dB * q0)}" x2="${sx(q1)}" y2="${sy(s.dA - c.dB * q1)}"/>`; }
    const cons = t ? (s.Pc - Pe) / t * 100 : 0, prod = t ? 100 - cons : 0;
    const box = t ? `<rect x="${sx(0)}" y="${sy(s.Pc)}" width="${sx(s.Q) - sx(0)}" height="${sy(s.Pp) - sy(s.Pc)}" fill="#9B5DE5" opacity=".18"/>` : "";
    root.innerHTML = `
      <div class="eqs tx">
        <div class="eqs-head"><span class="gp-tag">⛽ جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="tri-sc">${cfg.cases.map((k, i) => `<button class="tri-sc-b${i === ci ? " on" : ""}" data-i="${i}">${k.name}</button>`).join("")}</div>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 360 250" role="img" aria-label="أثر الضريبة على التوازن">
            ${box}${pl.axes(cfg.qTicks, cfg.pTicks)}
            ${sLine(0, "old")}${t ? sLine(t, "new") : ""}${dLine}
            ${t ? `<line class="sd-pl" x1="${pl.L}" y1="${sy(s.Pc)}" x2="${sx(s.Q)}" y2="${sy(s.Pc)}"/><line class="sd-pl" x1="${pl.L}" y1="${sy(s.Pp)}" x2="${sx(s.Q)}" y2="${sy(s.Pp)}"/>` : ""}
            <circle class="sd-e" cx="${sx(Qe)}" cy="${sy(Pe)}" r="5"/>${t ? `<circle class="sd-e new" cx="${sx(s.Q)}" cy="${sy(s.Pc)}" r="6"/>` : ""}
          </svg>
          <div>
            <label class="sdl-sl">💸 الضريبة على كل وحدة:<span class="el-f" dir="ltr">t = ${t}</span><input type="range" min="0" max="${cfg.tMax}" step="${cfg.tStep}" value="${t}" dir="ltr"></label>
            <div class="si-steps">
              <div><b>🛒 سعر المستهلك:</b><span class="el-f" dir="ltr">Pc = ${r2(s.Pc)}  (${s.Pc - Pe >= 0 ? "+" : ""}${r2(s.Pc - Pe)})</span></div>
              <div><b>🏭 صافي المنتج:</b><span class="el-f" dir="ltr">Pp = ${r2(s.Pp)}  (${r2(s.Pp - Pe)})</span></div>
              <div><b>📦 الكمية:</b><span class="el-f" dir="ltr">${Qe} → ${r2(s.Q)}</span></div>
              <div><b>🏛️ حصيلة الضريبة:</b><span class="el-f" dir="ltr">t × Q = ${r2(t * s.Q)}</span></div>
            </div>
          </div>
        </div>
        ${t ? `<div class="si-row"><span class="si-l">🛒 المستهلك</span><div class="si-track"><div class="si-bar s pos" style="left:0;width:${cons}%"></div></div><b dir="ltr">${Math.round(cons)}%</b></div>
        <div class="si-row"><span class="si-l">🏭 المنتج</span><div class="si-track"><div class="si-bar i pos" style="left:0;width:${prod}%"></div></div><b dir="ltr">${Math.round(prod)}%</b></div>
        <div class="eqs-msg ok">${c.msg}</div>` : '<p class="eqs-hint">حرّك الضريبة لتشوف مين بيدفعها فعلياً.</p>'}
        <div class="sd-leg"><span class="k d"></span> الطلب <span class="k s"></span> العرض (المتقطع قبل الضريبة) <span class="k e"></span> التوازن، والمستطيل البنفسجي = حصيلة الضريبة</div>
      </div>`;
    root.querySelectorAll(".tri-sc-b").forEach(b => b.addEventListener("click", () => { ci = +b.dataset.i; draw(); }));
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { t = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}

/* ---------- مختبر السقف السعري ---------- */
function renderCeilingLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let Pc = cfg.start; const r2 = v => Math.round(v * 100) / 100;
  const Qd = p => cfg.dA - cfg.dB * p, Qs = p => cfg.sA + cfg.sB * p;
  const Pe = (cfg.dA - cfg.sA) / (cfg.dB + cfg.sB), Qe = Qd(Pe);
  function draw(){
    const pl = _mkPlot(360, 250, cfg.qMax, cfg.pMax, cfg.pMin), { sx, sy } = pl;
    const bind = Pc < Pe, qd = bind ? Qd(Pc) : Qe, qs = bind ? Qs(Pc) : Qe;
    const pts = (f) => { const a = [cfg.pMin, cfg.pMax].map(p => [f(p), p]); return a; };
    const ln = (f, cls) => { const [[q0, p0], [q1, p1]] = pts(f); return `<line class="${cls}" x1="${sx(q0)}" y1="${sy(p0)}" x2="${sx(q1)}" y2="${sy(p1)}"/>`; };
    root.innerHTML = `
      <div class="eqs cl">
        <div class="eqs-head"><span class="gp-tag">🧢 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 360 250" role="img" aria-label="أثر السقف السعري">
            ${pl.axes(cfg.qTicks, cfg.pTicks)}
            ${ln(Qd, "sd-d")}${ln(Qs, "sd-s")}
            <line x1="${pl.L}" y1="${sy(Pc)}" x2="${360 - pl.R}" y2="${sy(Pc)}" stroke="#E63946" stroke-width="2.2" stroke-dasharray="7 4"/>
            <text class="sd-lb" x="${360 - pl.R}" y="${sy(Pc) - 5}" text-anchor="end" fill="#E63946">السقف ${Pc}</text>
            ${bind ? `<line class="sd-gap short" x1="${sx(qs)}" y1="${sy(Pc)}" x2="${sx(qd)}" y2="${sy(Pc)}"/>` : ""}
            <circle class="sd-e" cx="${sx(Qe)}" cy="${sy(Pe)}" r="5"/>
          </svg>
          <div>
            <label class="sdl-sl">🧢 السقف السعري:<span class="el-f" dir="ltr">Pmax = ${Pc}</span><input type="range" min="${cfg.cMin}" max="${cfg.cMax}" step="${cfg.cStep}" value="${Pc}" dir="ltr"></label>
            <div class="si-steps">
              <div><b>⚖️ التوازن الحر:</b><span class="el-f" dir="ltr">Pe = ${r2(Pe)} , Qe = ${r2(Qe)}</span></div>
              <div><b>🛒 الكمية المطلوبة:</b><span class="el-f" dir="ltr">Qd = ${r2(qd)}</span></div>
              <div><b>🏭 الكمية المعروضة:</b><span class="el-f" dir="ltr">Qs = ${r2(qs)}</span></div>
              <div><b>📦 الكمية المشتراة فعلاً:</b><span class="el-f" dir="ltr">${r2(Math.min(qd, qs))}</span></div>
            </div>
          </div>
        </div>
        ${bind ? `<div class="eqs-msg bad">السقف <b>أدنى</b> من سعر التوازن ← <b>فائض طلب (عجز عرض)</b> مقدارو <bdi dir="ltr">${r2(qd - qs)}</bdi>. الكمية المتبادلة بيحددها <b>العرض</b> (<bdi dir="ltr">${r2(qs)}</bdi>) فنقصت عن التوازن، وفائض الطلب بيضغط عالسعر لفوق ← <b>صفقات غير قانونية</b> (سوق سوداء، تأجير من الباطن).</div>`
          : `<div class="eqs-msg ok">السقف <b>أعلى من</b> (أو بيساوي) سعر التوازن ← <b>ما إلو أثر</b>: السوق بتضل عند <bdi dir="ltr">${r2(Pe)}</bdi>.</div>`}
        <div class="sd-leg"><span class="k d"></span> الطلب <span class="k s"></span> العرض <span class="k e"></span> التوازن الحر، والخط الأحمر = فائض الطلب</div>
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { Pc = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}

/* ---------- الرغبة الحدية بالدفع وفائض المستهلك (الفصل 8) ---------- */
function renderMWTP(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let P = cfg.start;
  function draw(){
    let cs = 0, n = 0;
    const rows = cfg.mwtp.map((w, i) => { const buy = w >= P; if (buy){ n++; cs += w - P; }
      return `<tr class="${buy ? "" : "mw-no"}"><td>${i + 1}</td><td>${w}</td><td>${buy ? P : "—"}</td><td>${buy ? w - P : "ما بيشتري"}</td></tr>`; }).join("");
    const mx = Math.max(...cfg.mwtp) + 10;
    const W = 340, H = 200, L = 36, Bt = 26, T = 10, bw = (W - L - 10) / cfg.mwtp.length;
    const sy = p => H - Bt - p / mx * (H - Bt - T);
    const bars = cfg.mwtp.map((w, i) => { const x = L + i * bw + 6;
      return `<rect x="${x}" y="${sy(w)}" width="${bw - 12}" height="${sy(0) - sy(w)}" fill="#2563EB" opacity=".18"/>`
        + (w > P ? `<rect x="${x}" y="${sy(w)}" width="${bw - 12}" height="${sy(P) - sy(w)}" fill="#0B7A57" opacity=".55"/>` : "")
        + `<text class="sd-tk" x="${x + (bw - 12) / 2}" y="${H - Bt + 14}" text-anchor="middle">${i + 1}</text><text class="sd-tk" x="${x + (bw - 12) / 2}" y="${sy(w) - 4}" text-anchor="middle">${w}</text>`; }).join("");
    root.innerHTML = `
      <div class="eqs mw">
        <div class="eqs-head"><span class="gp-tag">🍎 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <label class="sdl-sl">🏷️ سعر الكيلو بالسوق:<span class="el-f" dir="ltr">P = ${P}</span><input type="range" min="${cfg.min}" max="${cfg.max}" step="${cfg.step}" value="${P}" dir="ltr"></label>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="الرغبة الحدية بالدفع">
            <line class="sd-ax" x1="${L}" y1="${sy(0)}" x2="${W - 6}" y2="${sy(0)}"/><line class="sd-ax" x1="${L}" y1="${sy(0)}" x2="${L}" y2="${T}"/>
            ${bars}
            <line x1="${L}" y1="${sy(P)}" x2="${W - 6}" y2="${sy(P)}" stroke="#E63946" stroke-width="2" stroke-dasharray="6 4"/>
            <text class="sd-lb" x="${L - 4}" y="${sy(P) + 4}" text-anchor="end" fill="#E63946">${P}</text>
          </svg>
          <table class="cmp mw-t"><tr><th>الكيلو</th><th>MWTP</th><th>المدفوع</th><th>الفائض</th></tr>${rows}
            <tr><td colspan="3"><b>فائض المستهلك</b></td><td><b>${cs}</b></td></tr></table>
        </div>
        <div class="eqs-msg ok">عند السعر <bdi dir="ltr">${P}</bdi> بيشتري <b>${n}</b> ${n === 1 ? "كيلو" : "كيلوات"}: بيكمّل طالما رغبتو الحدية بالدفع <b>≥ السعر</b>. فائض المستهلك = مجموع الفروقات (الأخضر) = <b>${cs}</b>.</div>
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { P = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}

/* ---------- مختبر الفوائض والخسارة الاجتماعية من الضريبة (الفصل 8) ---------- */
function renderSurplusLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let t = cfg.t; const r2 = v => Math.round(v * 100) / 100;
  const { dA, dB, sA, sB } = cfg;
  const Qe = (dA - sA) / (dB + sB), Pe = dA - dB * Qe;
  function draw(){
    const Qt = (dA - sA - t) / (dB + sB), Pc = dA - dB * Qt, Pp = Pc - t;
    const CS = 0.5 * (dA - Pc) * Qt, PS = 0.5 * (Pp - sA) * Qt, REV = t * Qt, DWL = 0.5 * t * (Qe - Qt);
    const CS0 = 0.5 * (dA - Pe) * Qe, PS0 = 0.5 * (Pe - sA) * Qe;
    const pl = _mkPlot(360, 260, cfg.qMax, cfg.pMax, 0), { sx, sy } = pl;
    const poly = (pts, c, o) => `<polygon points="${pts.map(([q, p]) => sx(q) + "," + sy(p)).join(" ")}" fill="${c}" opacity="${o}"/>`;
    root.innerHTML = `
      <div class="eqs sp">
        <div class="eqs-head"><span class="gp-tag">📐 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 360 260" role="img" aria-label="الفوائض والخسارة الاجتماعية">
            ${poly([[0, dA], [0, Pc], [Qt, Pc]], "#2563EB", .25)}
            ${poly([[0, sA], [0, Pp], [Qt, Pp]], "#EA7A1C", .25)}
            ${t ? poly([[0, Pc], [Qt, Pc], [Qt, Pp], [0, Pp]], "#9B5DE5", .25) : ""}
            ${t ? poly([[Qt, Pc], [Qe, Pe], [Qt, Pp]], "#E63946", .55) : ""}
            ${pl.axes(cfg.qTicks, cfg.pTicks)}
            <line class="sd-d" x1="${sx(0)}" y1="${sy(dA)}" x2="${sx(dA / dB)}" y2="${sy(0)}"/>
            <line class="sd-s" x1="${sx(0)}" y1="${sy(sA)}" x2="${sx((cfg.pMax - sA) / sB)}" y2="${sy(cfg.pMax)}"/>
            <circle class="sd-e" cx="${sx(Qe)}" cy="${sy(Pe)}" r="5"/>
          </svg>
          <div>
            <label class="sdl-sl">💸 ضريبة الوحدة:<span class="el-f" dir="ltr">t = ${t}</span><input type="range" min="0" max="${cfg.tMax}" step="${cfg.tStep}" value="${t}" dir="ltr"></label>
            <table class="cmp sp-t">
              <tr><th></th><th>قبل</th><th>بعد</th></tr>
              <tr><td>🟦 فائض المستهلك</td><td>${r2(CS0)}</td><td>${r2(CS)}</td></tr>
              <tr><td>🟧 فائض المنتج</td><td>${r2(PS0)}</td><td>${r2(PS)}</td></tr>
              <tr><td>🟪 إيراد الحكومة</td><td>0</td><td>${r2(REV)}</td></tr>
              <tr><td>🟥 الخسارة الاجتماعية</td><td>0</td><td><b>${r2(DWL)}</b></td></tr>
            </table>
          </div>
        </div>
        ${t ? `<div class="eqs-msg bad">المستهلك خسر <b>${r2(CS0 - CS)}</b> والمنتج خسر <b>${r2(PS0 - PS)}</b>، والحكومة كسبت <b>${r2(REV)}</b> بس. الفرق <bdi dir="ltr">${r2(CS0 - CS + PS0 - PS)} − ${r2(REV)} = ${r2(DWL)}</bdi> هو <b>الخسارة الاجتماعية</b> (المثلث الأحمر): مبادلات كانت رح تفيد الطرفين وما صارت لأنو الكمية نزلت من <bdi dir="ltr">${r2(Qe)}</bdi> لـ <bdi dir="ltr">${r2(Qt)}</bdi>.</div>`
          : '<p class="eqs-hint">حرّك الضريبة لتشوف مين بيخسر وقديش بيضيع عالمجتمع.</p>'}
        <div class="sd-leg"><span class="k d"></span> الطلب = الرغبة الحدية بالدفع <span class="k s"></span> العرض = التكلفة الحدية</div>
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { t = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}

/* ---------- مختبر منحنيات التكلفة (الفصل 9، جدول 3.9) ---------- */
function renderCostLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const FC = cfg.FC, VC = cfg.VC, N = VC.length - 1; let q = cfg.start;
  const r1 = v => Math.round(v * 10) / 10;
  const AFC = i => FC / i, AVC = i => VC[i] / i, ATC = i => (FC + VC[i]) / i, MC = i => VC[i] - VC[i - 1];
  const pl = _mkPlot(360, 250, N + 1, cfg.yMax, 0), { sx, sy } = pl;
  const path = (f, from) => { let d = ""; for (let i = from; i <= N; i++){ const v = Math.min(f(i), cfg.yMax); d += (d ? " L" : "M") + sx(i) + "," + sy(v); } return d; };
  const minI = f => { let b = 1; for (let i = 1; i <= N; i++) if (f(i) < f(b) - 1e-9) b = i; return b; };
  const iAVC = minI(AVC), iATC = minI(ATC);
  function draw(){
    const mc = MC(q), atc = ATC(q), avc = AVC(q);
    const msg = mc < atc - 1e-9 ? "التكلفة الحدية <b>أقل</b> من الوسطية الكلية ← الوسطية <b>عم تنزل</b>."
      : Math.abs(mc - atc) < 0.6 ? "التكلفة الحدية ≈ الوسطية الكلية ← نحنا <b>بأدنى نقطة</b> للوسطية الكلية."
      : "التكلفة الحدية <b>أعلى</b> من الوسطية الكلية ← الوسطية <b>عم تطلع</b>.";
    root.innerHTML = `
      <div class="eqs cs">
        <div class="eqs-head"><span class="gp-tag">🏭 جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <label class="sdl-sl">📦 حجم الإنتاج الشهري:<span class="el-f" dir="ltr">Q = ${q}</span><input type="range" min="1" max="${N}" step="1" value="${q}" dir="ltr"></label>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 360 250" role="img" aria-label="منحنيات التكلفة">
            ${pl.axes(cfg.qTicks, cfg.yTicks)}
            <path d="${path(AFC, 2)}" fill="none" stroke="#9aa3b2" stroke-width="2" stroke-dasharray="5 4"/>
            <path d="${path(AVC, 1)}" fill="none" stroke="#0B7A57" stroke-width="2.4"/>
            <path d="${path(ATC, 2)}" fill="none" stroke="#2563EB" stroke-width="2.6"/>
            <path d="${path(MC, 1)}" fill="none" stroke="#EA7A1C" stroke-width="2.6"/>
            <line x1="${sx(q)}" y1="${sy(0)}" x2="${sx(q)}" y2="${sy(cfg.yMax)}" stroke="#E63946" stroke-width="1.4" stroke-dasharray="4 3"/>
            <circle cx="${sx(iAVC)}" cy="${sy(AVC(iAVC))}" r="4.5" fill="#0B7A57"/><circle cx="${sx(iATC)}" cy="${sy(ATC(iATC))}" r="4.5" fill="#2563EB"/>
          </svg>
          <table class="cmp sp-t">
            <tr><th>البند</th><th>القيمة</th></tr>
            <tr><td>التكاليف الثابتة FC</td><td>${FC}</td></tr>
            <tr><td>التكاليف المتغيرة VC</td><td>${VC[q]}</td></tr>
            <tr><td>التكاليف الكلية TC</td><td>${FC + VC[q]}</td></tr>
            <tr><td>⬜ متوسط الثابتة AFC</td><td>${r1(AFC(q))}</td></tr>
            <tr><td>🟩 متوسط المتغيرة AVC</td><td>${r1(avc)}</td></tr>
            <tr><td>🟦 الوسطية الكلية ATC</td><td>${r1(atc)}</td></tr>
            <tr><td>🟧 التكلفة الحدية MC</td><td>${mc}</td></tr>
          </table>
        </div>
        <div class="eqs-msg ok">${msg} أدنى <b>AVC</b> عند <bdi dir="ltr">Q = ${iAVC}</bdi> وأدنى <b>ATC</b> عند <bdi dir="ltr">Q = ${iATC}</bdi> (متأخرة لأنو AFC بتضل تنزل).</div>
        <div class="sd-leg"><span class="k" style="background:#EA7A1C"></span> MC <span class="k" style="background:#2563EB"></span> ATC <span class="k" style="background:#0B7A57"></span> AVC <span class="k" style="background:#9aa3b2"></span> AFC</div>
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { q = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}

/* ---------- مختبر المبدأ الحدي (الفصل 9، جدول 4.9) ---------- */
function renderMarginalLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const B = cfg.B, C = cfg.C, N = B.length - 1; let q = cfg.start;
  const NB = i => B[i] - C[i];
  let best = 0; for (let i = 0; i <= N; i++) if (NB(i) > NB(best)) best = i;
  function draw(){
    const mb = q ? B[q] - B[q - 1] : null, mc = q ? C[q] - C[q - 1] : null;
    const W = 360, H = 200, L = 40, Bt = 26, T = 10, mn = Math.min(...B.map((_, i) => NB(i))), mx = Math.max(...B.map((_, i) => NB(i)));
    const lo = cfg.nbMin, hi = mx + 20, bw = (W - L - 8) / (N + 1);
    const sy = v => H - Bt - (v - lo) / (hi - lo) * (H - Bt - T);
    const bars = B.map((_, i) => { const v = NB(i), x = L + i * bw + 2, y0 = sy(0), y1 = sy(Math.max(lo, v));
      return `<rect x="${x}" y="${Math.min(y0, y1)}" width="${bw - 4}" height="${Math.abs(y1 - y0)}" fill="${i === q ? "#FF9F1C" : v >= 0 ? "#2563EB" : "#E63946"}" opacity="${i === q ? .95 : .45}"/>`
        + (i % 3 === 0 || i === N ? `<text class="sd-tk" x="${x + (bw - 4) / 2}" y="${H - Bt + 14}" text-anchor="middle">${i}</text>` : ""); }).join("");
    let verdict;
    if (!q) verdict = "ابدأ زيد الإنتاج: الوحدة الأولى نفعها الحدي 55 وتكلفتها الحدية 10.";
    else if (mb > mc) verdict = `<b><bdi dir="ltr">MB (${mb}) &gt; MC (${mc})</bdi></b>: الوحدة هاي زادت النفع الصافي بـ ${mb - mc}، فكمّل.`;
    else if (mb === mc) verdict = `<b><bdi dir="ltr">MB = MC = ${mb}</bdi></b>: النفع الصافي الحدي صفر، وهون النفع الصافي <b>بأعظم قيمة (<bdi dir="ltr">${NB(q)}</bdi>)</b>. هاد هو <b>المبدأ الحدي</b>.`;
    else verdict = `<b><bdi dir="ltr">MB (${mb}) &lt; MC (${mc})</bdi></b>: الوحدة هاي <b>نقّصت</b> النفع الصافي بـ ${mc - mb}، ارجع لورا.`;
    root.innerHTML = `
      <div class="eqs mg">
        <div class="eqs-head"><span class="gp-tag">⚖️ جرّب بإيدك</span><h4>${cfg.title}</h4></div>
        <label class="sdl-sl">🎚️ متغير القرار:<span class="el-f" dir="ltr">Q = ${q}</span><input type="range" min="0" max="${N}" step="1" value="${q}" dir="ltr"></label>
        <div class="el-grid">
          <svg class="sd-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="النفع الصافي">
            <line class="sd-ax" x1="${L}" y1="${sy(0)}" x2="${W - 6}" y2="${sy(0)}"/>
            ${[lo, 0, Math.round(hi / 50) * 50].map(v => `<text class="sd-tk" x="${L - 5}" y="${sy(v) + 3}" text-anchor="end">${Math.round(v)}</text>`).join("")}
            ${bars}
            <text class="sd-lb" x="${L + 4}" y="${T + 8}">NB(Q)</text>
          </svg>
          <table class="cmp sp-t">
            <tr><th>البند</th><th>القيمة</th></tr>
            <tr><td>النفع الكلي B</td><td>${B[q]}</td></tr>
            <tr><td>التكاليف الكلية C</td><td>${C[q]}</td></tr>
            <tr><td><b>النفع الصافي NB</b></td><td><b>${NB(q)}</b></td></tr>
            <tr><td>النفع الحدي MB</td><td>${q ? mb : "—"}</td></tr>
            <tr><td>التكلفة الحدية MC</td><td>${q ? mc : "—"}</td></tr>
            <tr><td>الصافي الحدي MNB</td><td>${q ? mb - mc : "—"}</td></tr>
          </table>
        </div>
        <div class="eqs-msg ${q && mb < mc ? "bad" : "ok"}">${verdict}</div>
        <p class="eqs-hint">لاحظ: النفع <b>الكلي</b> أعظمي عند <bdi dir="ltr">Q = ${N}</bdi> (لما <bdi dir="ltr">MB = 0</bdi>)، بس النفع <b>الصافي</b> هناك <bdi dir="ltr">${NB(N)}</bdi>. تعظيم النفع الكلي مو هدف عقلاني.</p>
      </div>`;
    const sl = root.querySelector("input"); sl.addEventListener("input", () => { q = +sl.value; draw(); root.querySelector("input").focus(); });
  }
  draw();
}
