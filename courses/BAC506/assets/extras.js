/* ============================================================
   BAC506 — مكوّنات تفاعلية إضافية (فرز، حالة عملية، ترتيب، مختبر التكاليف، خريطة التعادل). تعتمد على app.js (shuffle, launchConfetti)
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
   🧪 مختبر سلوك التكاليف — حرّك حجم النشاط وشوف شو بيتغير
   cfg = { title, unit, unitVar, fixed, min, max, step, start, cap? }
   ============================================================ */
function renderCostLab(containerId, cfg){
  const root = document.getElementById(containerId);
  const f = n => (Math.round(n*100)/100).toLocaleString("en-US");
  root.innerHTML = `
    <div class="eqs">
      <div class="eqs-head"><span class="gp-tag">🧪 جرّب</span><h4>${cfg.title}</h4></div>
      <p class="eqs-hint">حرّك المؤشر وغيّر عدد ${cfg.unit}، وراقب شو بيتغير وشو بيضل ثابت.</p>
      <div class="clab-row"><span>حجم النشاط:</span><input type="range" min="${cfg.min}" max="${cfg.max}" step="${cfg.step}" value="${cfg.start}"><span class="clab-q"></span></div>
      <div class="clab-grid">
        <div class="clab-card vr"><h5>🟢 التكاليف المتغيرة</h5>
          <div class="cc-row"><span>نصيب الوحدة</span><b data-k="uv"></b></div>
          <div class="cc-row"><span>الإجمالي</span><b data-k="tv"></b></div><div class="clab-bar"><i data-b="tv"></i></div></div>
        <div class="clab-card fx"><h5>🟠 التكاليف الثابتة</h5>
          <div class="cc-row"><span>نصيب الوحدة</span><b data-k="uf"></b></div>
          <div class="cc-row"><span>الإجمالي</span><b data-k="tf"></b></div><div class="clab-bar"><i data-b="uf"></i></div></div>
      </div>
      <div class="clab-total"></div>
      <div class="eqs-msg" data-k="msg"></div>
    </div>`;
  const r = root.querySelector("input"), q = root.querySelector(".clab-q");
  const set = (k, v) => root.querySelector(`[data-k="${k}"]`).innerHTML = v;
  const maxUf = cfg.fixed / Math.max(cfg.step, cfg.min || cfg.step);
  function upd(){
    const x = +r.value; q.textContent = f(x);
    const tv = cfg.unitVar * x, uf = x ? cfg.fixed / x : null;
    set("uv", f(cfg.unitVar)); set("tv", f(tv)); set("tf", f(cfg.fixed));
    set("uf", x ? f(uf) : "غير معرّف");
    root.querySelector('[data-b="tv"]').style.width = (tv / (cfg.unitVar*cfg.max) * 100) + "%";
    root.querySelector('[data-b="uf"]').style.width = x ? Math.min(100, uf / maxUf * 100) + "%" : "100%";
    root.querySelector(".clab-total").innerHTML = `مجموع التكاليف = <b class="ltr">${f(tv + cfg.fixed)}</b>` + (x ? ` · تكلفة الوحدة الكلية = <b class="ltr">${f((tv + cfg.fixed)/x)}</b>` : "");
    const m = root.querySelector('[data-k="msg"]');
    m.className = "eqs-msg ok";
    m.innerHTML = x === 0 ? "⛔ توقف النشاط: <b>المتغيرة انعدمت</b>، و<b>الثابتة ضلت متل ما هي</b>."
      : "📌 لاحظ: المتغيرة <b>ثابتة للوحدة ومتغيرة طرداً بالإجمالي</b>، والثابتة <b>ثابتة بالإجمالي ومتغيرة عكساً للوحدة</b>.";
  }
  r.addEventListener("input", upd); upd();
}

/* ============================================================
   📈 خريطة التعادل التفاعلية — غيّر السعر والمتغيرة والثابتة وشوف نقطة التعادل
   cfg = { title, price, vc, fixed, qty, max }
   ============================================================ */
function renderBreakEven(containerId, cfg){
  const root = document.getElementById(containerId);
  const f = n => (Math.round(n*100)/100).toLocaleString("en-US");
  const fld = (k, lbl, v) => `<label>${lbl}<input type="number" data-k="${k}" value="${v}" min="0"></label>`;
  root.innerHTML = `
    <div class="eqs">
      <div class="eqs-head"><span class="gp-tag">📈 جرّب</span><h4>${cfg.title}</h4></div>
      <p class="eqs-hint">غيّر الأرقام وشوف كيف بتتحرك نقطة التعادل على الرسم، وكيف بيتغير هامش الأمان.</p>
      <div class="cc-grid">${fld("price","سعر بيع الوحدة",cfg.price)}${fld("vc","التكلفة المتغيرة للوحدة",cfg.vc)}${fld("fixed","التكاليف الثابتة",cfg.fixed)}${fld("qty","كمية المبيعات المخططة",cfg.qty)}</div>
      <svg class="be-svg" viewBox="0 0 520 300" role="img" aria-label="خريطة التعادل"></svg>
      <div class="be-legend"><span><i style="background:#1FB6A8"></i>الإيرادات الكلية</span><span><i style="background:#E4572E"></i>التكاليف الكلية</span><span><i style="background:#FF9F1C"></i>التكاليف الثابتة</span></div>
      <div class="cc-out" data-k="out"></div>
    </div>`;
  const svg = root.querySelector("svg"), out = root.querySelector('[data-k="out"]');
  const get = k => +root.querySelector(`[data-k="${k}"]`).value || 0;
  function draw(){
    const p = get("price"), v = get("vc"), F = get("fixed"), q = get("qty");
    const cm = p - v;
    if(cm <= 0){ svg.innerHTML = ""; out.innerHTML = `<div class="cc-row hi"><span>⚠️ هامش المساهمة سالب أو صفر</span><b>ما في نقطة تعادل</b></div>`; return; }
    const be = F / cm, maxQ = Math.max(q, be) * 1.4 || 1, maxY = p * maxQ;
    const X = x => 50 + x / maxQ * 450, Y = y => 270 - y / maxY * 250;
    const line = (x1,y1,x2,y2,c,w) => `<line x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}" stroke="${c}" stroke-width="${w||3}" stroke-linecap="round"/>`;
    svg.innerHTML =
      `<line x1="50" y1="270" x2="505" y2="270" stroke="#94A3B8"/><line x1="50" y1="15" x2="50" y2="270" stroke="#94A3B8"/>` +
      `<polygon points="${X(be)},${Y(p*be)} ${X(maxQ)},${Y(p*maxQ)} ${X(maxQ)},${Y(F+v*maxQ)}" fill="#1FB6A8" opacity=".12"/>` +
      `<polygon points="${X(0)},${Y(0)} ${X(be)},${Y(p*be)} ${X(0)},${Y(F)}" fill="#E4572E" opacity=".10"/>` +
      line(0,F,maxQ,F,"#FF9F1C") + line(0,F,maxQ,F+v*maxQ,"#E4572E") + line(0,0,maxQ,p*maxQ,"#1FB6A8") +
      `<line x1="${X(be)}" y1="${Y(p*be)}" x2="${X(be)}" y2="270" stroke="#334155" stroke-dasharray="4 4"/>` +
      `<circle cx="${X(be)}" cy="${Y(p*be)}" r="7" fill="#fff" stroke="#334155" stroke-width="3"/>` +
      (q ? `<line x1="${X(q)}" y1="270" x2="${X(q)}" y2="${Y(p*q)}" stroke="#7C3AED" stroke-dasharray="2 4" stroke-width="2"/>` : "") +
      `<text x="${X(be)}" y="290" text-anchor="middle" font-size="12" fill="#334155">نقطة التعادل</text>` +
      `<text x="${X(maxQ)-6}" y="${Y(p*maxQ)+40}" text-anchor="end" font-size="12" fill="#0E7C86">منطقة الربح</text>` +
      `<text x="60" y="${Y(F)-8}" font-size="12" fill="#B45309">منطقة الخسارة</text>`;
    const ms = q - be;
    out.innerHTML = [
      ["هامش المساهمة للوحدة", f(cm)], ["نسبة هامش المساهمة", f(cm/p*100) + "%"],
      ["نقطة التعادل بالكمية", f(be)], ["نقطة التعادل بالقيمة", f(be*p)],
      ["هامش الأمان بالكمية", f(ms)], ["معدل هامش الأمان", q ? f(ms/q*100) + "%" : "—"],
      ["صافي الربح عند الكمية المخططة", f(cm*q - F)]
    ].map((r,i) => `<div class="cc-row${i===2||i===6?" hi":""}"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
  }
  root.querySelectorAll("input").forEach(i => i.addEventListener("input", draw)); draw();
}
