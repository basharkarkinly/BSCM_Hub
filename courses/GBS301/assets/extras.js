/* ============================================================
   GBS301 — مكوّنات تفاعلية إضافية. تعتمد على app.js (shuffle, launchConfetti)
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



/* ---------- حالة عملية (من موقع GBS301 القديم) ---------- */
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
   🧭 مستكشف أنواع التعلم (الفصل 1): اختار وجه المقارنة وشوف الأنواع الأربعة جنب بعض
   cfg = { title, types:[{key,name,icon}], dims:[{key,label,vals:{typeKey:text}}], start }
   ============================================================ */
function renderTypeCompare(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let d = cfg.start || 0;
  function draw(){
    const dim = cfg.dims[d];
    root.innerHTML = `
      <div class="eqs tc">
        <div class="eqs-head"><span class="gp-tag">🧭 قارن بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="tc-dims">${cfg.dims.map((x, i) => `<button type="button" class="tri-sc-b${i === d ? " on" : ""}" data-i="${i}">${x.label}</button>`).join("")}</div>
        <div class="tc-grid">${cfg.types.map(t => `<div class="tc-card tc-${t.key}"><div class="tc-ico">${t.icon}</div><h5>${t.name}</h5><p>${dim.vals[t.key]}</p></div>`).join("")}</div>
        ${dim.note ? `<p class="eqs-hint">💡 ${dim.note}</p>` : ""}
      </div>`;
    root.querySelectorAll(".tc-dims .tri-sc-b").forEach(b => b.addEventListener("click", () => { d = +b.dataset.i; draw(); }));
  }
  draw();
}

/* ============================================================
   🔎 مختبر رموز البحث (الفصل 2): ركّب عبارة البحث بإيدك من الكلمات والرموز
   cfg = { title, tasks:[{goal, chips:[..], answer:"…", why}] }
   ============================================================ */
function renderSearchLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let t = 0, q = [], solved = {};
  const norm = s => s.replace(/\s+/g, " ").trim();
  const compose = q => norm(q.join(" ").replace(/\s*\.\.\s*/g, "..").replace(/\s*\*\s*/g, "*").replace(/(^|\s)([+\-~$])\s+/g, "$1$2").replace(/"\s+/g, '"').replace(/\s+"/g, '"'));
  function draw(msg){
    const task = cfg.tasks[t];
    const all = cfg.tasks.length, done = Object.keys(solved).length;
    root.innerHTML = `
      <div class="eqs sl">
        <div class="eqs-head"><span class="gp-tag">🔎 جرّب بإيدك</span><h4>${cfg.title}</h4><span class="sl-count">${done} / ${all}</span></div>
        <div class="sl-tabs">${cfg.tasks.map((x, i) => `<button type="button" class="tri-sc-b${i === t ? " on" : ""}${solved[i] ? " ok" : ""}" data-i="${i}">${solved[i] ? "✓ " : ""}${i + 1}</button>`).join("")}</div>
        <p class="sl-goal">🎯 ${task.goal}</p>
        <div class="sl-bar" dir="ltr"><span class="sl-g">G</span><span class="sl-q">${q.length ? `<span class="sl-txt" dir="auto">${compose(q).replace(/</g, "&lt;")}</span><span class="sl-caret"></span>` : '<em>اضغط عالكلمات والرموز…</em>'}</span></div>
        <div class="eqs-tray sl-tray">${task.chips.map((c, i) => `<button type="button" class="eqs-chip sl-chip" data-c="${i}" dir="ltr">${c}</button>`).join("")}</div>
        <div class="sl-acts"><button type="button" class="btn btn-teal sl-go">🔍 بحث</button><button type="button" class="tri-sc-b sl-undo">↩️ تراجع</button><button type="button" class="tri-sc-b sl-clr">🧹 مسح</button></div>
        <div class="eqs-msg ${msg ? msg[0] : ""}">${msg ? msg[1] : ""}</div>
      </div>`;
    root.querySelectorAll(".sl-tabs .tri-sc-b").forEach(b => b.addEventListener("click", () => { t = +b.dataset.i; q = []; draw(); }));
    root.querySelectorAll(".sl-chip").forEach(b => b.addEventListener("click", () => { q.push(task.chips[+b.dataset.c]); draw(); }));
    root.querySelector(".sl-undo").addEventListener("click", () => { q.pop(); draw(); });
    root.querySelector(".sl-clr").addEventListener("click", () => { q = []; draw(); });
    root.querySelector(".sl-go").addEventListener("click", () => {
      const got = compose(q);
      const want = (Array.isArray(task.answer) ? task.answer : [task.answer]).map(norm);
      if (want.includes(got)) { solved[t] = 1; if (Object.keys(solved).length === all && typeof launchConfetti === "function") launchConfetti(); draw(["ok", "✅ <b>تمام!</b> " + task.why]); }
      else draw(["bad", "❌ لسا مو هيك. فكّر شو الرمز اللي بيعمل هالشي، ووين بينحط (قبل الكلمة؟ حولها؟ جوّاها؟)."]);
    });
  }
  draw();
}

/* ============================================================
   🔗 تشريح عنوان الويب URL (الفصل 2): اضغط على كل جزء
   cfg = { title, parts:[{t, name, info, cls}] }
   ============================================================ */
function renderUrlParts(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let sel = -1;
  function draw(){
    const p = cfg.parts[sel];
    root.innerHTML = `
      <div class="eqs up">
        <div class="eqs-head"><span class="gp-tag">🔗 اضغط على كل جزء</span><h4>${cfg.title}</h4></div>
        <div class="up-url" dir="ltr">${cfg.parts.map((x, i) => `<button type="button" class="up-p up-${x.cls || "x"}${i === sel ? " on" : ""}" data-i="${i}">${x.t}</button>`).join("")}</div>
        <div class="up-info">${p ? `<b><bdi dir="ltr" class="up-tag">${p.t}</bdi> ${p.name.replace(/^[^:]*:\s*/, "")}</b><span>${p.info}</span>` : '<span class="eqs-hint" style="margin:0">اضغط على أي قطعة من العنوان لتعرف شو هي.</span>'}</div>
      </div>`;
    root.querySelectorAll(".up-p").forEach(b => b.addEventListener("click", () => { sel = +b.dataset.i; draw(); }));
  }
  draw();
}

/* ============================================================
   🩺 طبيب الشرائح (الفصل 4): شريحة سيئة، صلّح عيوبها وحدة وحدة
   cfg = { title, fixes:[{key, bad, good, why}] } — keys: bg, contrast, fonts, lines, anim
   ============================================================ */
function renderSlideDoctor(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const on = {};
  const lines = ["التعلم الإلكتروني نظام تفاعلي للتعليم", "بيعتمد على التقانات الحديثة", "متزامن: صف افتراضي ومؤتمرات مرئية", "غير متزامن: إيميل ومنتديات", "ميزاته: وفرة المصادر وأقل كلفة", "سلبياته: العزلة والمشاكل الصحية", "بيراعي الفروق الفردية", "الأهل بيتابعوا أولادهم", "بيحل مشكلة التخصصات النادرة", "أي مكان وأي زمان", "التغذية الراجعة فورية"];
  function slide(){
    const bg = on.bg ? "background:#F7F9FC" : "background:repeating-linear-gradient(45deg,#ff6ec7 0 14px,#7b2ff7 14px 28px)";
    const fg = on.contrast ? "#0F1C2E" : "#FFF59D";
    const fonts = on.fonts ? ["'Alexandria',sans-serif"] : ["'Times New Roman',serif", "Impact,sans-serif", "'Comic Sans MS',cursive", "'Courier New',monospace"];
    const ls = on.lines ? lines.slice(0, 5) : lines;
    return `<div class="sd-slide${on.anim ? "" : " sd-wild"}" style="${bg}">
      <div class="sd-title" style="color:${on.contrast ? "#1D3557" : "#FFEB3B"};font-family:${fonts[1 % fonts.length]}">التعلم الإلكتروني</div>
      <ul style="color:${fg}">${ls.map((l, i) => `<li style="font-family:${fonts[i % fonts.length]}">${l}</li>`).join("")}</ul>
      <div class="sd-foot">${on.lines ? "✓ " + ls.length + " أسطر" : "⚠️ " + ls.length + " سطر!"}</div>
    </div>`;
  }
  function draw(){
    const n = cfg.fixes.filter(f => on[f.key]).length, all = n === cfg.fixes.length;
    root.innerHTML = `
      <div class="eqs sd">
        <div class="eqs-head"><span class="gp-tag">🩺 صلّح بإيدك</span><h4>${cfg.title}</h4><span class="sl-count">${n} / ${cfg.fixes.length}</span></div>
        <div class="sd-grid">
          <div>${slide()}</div>
          <div class="sd-list">${cfg.fixes.map(f => `<button type="button" class="sd-fix${on[f.key] ? " on" : ""}" data-k="${f.key}"><span class="sd-b">${on[f.key] ? "✓" : "✗"}</span><span><b>${on[f.key] ? f.good : f.bad}</b>${on[f.key] ? `<small>${f.why}</small>` : ""}</span></button>`).join("")}</div>
        </div>
        ${all ? '<div class="eqs-msg ok">✅ <b>الشريحة صارت مرتّبة!</b> بسيطة، واضحة، مقروءة، وخالية من المشتّتات.</div>' : '<p class="eqs-hint">اضغط على كل عيب لتصلّحو وشوف الشريحة كيف بتتغيّر.</p>'}
      </div>`;
    root.querySelectorAll(".sd-fix").forEach(b => b.addEventListener("click", () => {
      on[b.dataset.k] = !on[b.dataset.k];
      if (cfg.fixes.every(f => on[f.key]) && typeof launchConfetti === "function") launchConfetti();
      draw();
    }));
  }
  draw();
}

/* ============================================================
   ✉️ مختبر الإيميل (الفصل 5): اختار كل جزء من الرسالة واكبس «إرسال»
   cfg = { title, fields:[{key,label,ltr,options:[{t, ok, why}]}] }
   ============================================================ */
function renderEmailLab(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  const pick = {}; let res = null;
  function draw(){
    root.innerHTML = `
      <div class="eqs em">
        <div class="eqs-head"><span class="gp-tag">✉️ اكتب بإيدك</span><h4>${cfg.title}</h4></div>
        <div class="em-win">
          <div class="em-top"><span></span><span></span><span></span><b>رسالة جديدة</b></div>
          ${cfg.fields.map(f => `
            <div class="em-row${res && res[f.key] === false ? " bad" : ""}${res && res[f.key] === true ? " good" : ""}">
              <label>${f.label}</label>
              <div class="em-opts">${f.options.map((o, i) => `<button type="button" class="em-o${pick[f.key] === i ? " on" : ""}" data-f="${f.key}" data-i="${i}"${f.ltr ? ' dir="ltr"' : ""}>${o.t}</button>`).join("")}</div>
              ${res && pick[f.key] != null ? `<div class="em-why">${f.options[pick[f.key]].ok ? "✅" : "❌"} ${f.options[pick[f.key]].why}</div>` : ""}
            </div>`).join("")}
          <div class="em-send"><button type="button" class="btn btn-primary em-go">📤 إرسال</button><span class="eqs-hint" style="margin:0">اختار خيار لكل سطر.</span></div>
        </div>
        ${res ? `<div class="eqs-msg ${res.__ok ? "ok" : "bad"}">${res.__ok ? "✅ <b>رسالة محترمة!</b> الدكتور رح يفهمها ويرد عليها." : `❌ في ${res.__bad} غلطات، صلّحها وابعت مرة تانية.`}</div>` : ""}
      </div>`;
    root.querySelectorAll(".em-o").forEach(b => b.addEventListener("click", () => { pick[b.dataset.f] = +b.dataset.i; res = null; draw(); }));
    root.querySelector(".em-go").addEventListener("click", () => {
      res = {}; let bad = 0;
      cfg.fields.forEach(f => { const ok = pick[f.key] != null && f.options[pick[f.key]].ok; res[f.key] = ok; if (!ok) bad++; });
      res.__bad = bad; res.__ok = bad === 0;
      if (res.__ok && typeof launchConfetti === "function") launchConfetti();
      draw();
    });
  }
  draw();
}

/* ============================================================
   📋 طبيب الاستبيان (الفصل 7): شو الغلط بهالسؤال؟
   cfg = { title, errors:[label], items:[{q, opts:[..], err, fixQ, fixOpts:[..], why}] }
   ============================================================ */
function renderSurveyFix(containerId, cfg){
  const root = document.getElementById(containerId); if (!root) return;
  let i = 0, picked = null, solved = 0;
  const done = new Array(cfg.items.length).fill(false);
  function card(q, opts, fixed){
    return `<div class="sf-card${fixed ? " sf-fixed" : ""}"><div class="sf-q">${q}</div><ul class="sf-opts">${opts.map(o => `<li><span class="sf-box"></span>${o}</li>`).join("")}</ul></div>`;
  }
  function draw(){
    const it = cfg.items[i], ok = picked === it.err;
    root.innerHTML = `
      <div class="eqs sf">
        <div class="eqs-head"><span class="gp-tag">📋 افحص السؤال</span><h4>${cfg.title}</h4><span class="sl-count">${solved} / ${cfg.items.length}</span></div>
        <div class="sf-step">سؤال ${i + 1} من ${cfg.items.length}</div>
        ${card(it.q, it.opts, false)}
        <p class="eqs-hint" style="margin:10px 0 6px">شو الغلط بهالسؤال؟</p>
        <div class="sf-errs">${cfg.errors.map((e, k) => `<button type="button" class="sf-err${picked === k ? (ok ? " ok" : " bad") : ""}" data-k="${k}"${ok ? " disabled" : ""}>${e}</button>`).join("")}</div>
        ${picked === null ? "" : ok
          ? `<div class="eqs-msg ok">✅ <b>صح!</b> ${it.why}</div><div class="sf-lbl">✨ هيك بيصير:</div>${card(it.fixQ, it.fixOpts, true)}`
          : `<div class="eqs-msg bad">❌ مو هاد الغلط، جرّب كمان.</div>`}
        <div class="sf-nav">
          <button type="button" class="tri-sc-b sf-prev"${i === 0 ? " disabled" : ""}>→ السابق</button>
          <button type="button" class="tri-sc-b sf-next"${i === cfg.items.length - 1 ? " disabled" : ""}>التالي ←</button>
        </div>
        ${solved === cfg.items.length ? '<div class="eqs-msg ok">🎉 <b>صلّحت كل الأسئلة!</b> هيك بيطلع الاستبيان دقيق ونتائجو موثوقة.</div>' : ""}
      </div>`;
    root.querySelectorAll(".sf-err").forEach(b => b.addEventListener("click", () => {
      picked = +b.dataset.k;
      if (picked === it.err && !done[i]) { done[i] = true; solved++; if (solved === cfg.items.length && typeof launchConfetti === "function") launchConfetti(); }
      draw();
    }));
    root.querySelector(".sf-prev").addEventListener("click", () => { if (i > 0) { i--; picked = done[i] ? cfg.items[i].err : null; draw(); } });
    root.querySelector(".sf-next").addEventListener("click", () => { if (i < cfg.items.length - 1) { i++; picked = done[i] ? cfg.items[i].err : null; draw(); } });
  }
  draw();
}
