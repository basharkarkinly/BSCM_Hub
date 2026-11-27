/*
 * Support Channel — نوافذ الرأي (بيحمّلها shell.js لحالو بكل الصفحات)
 *
 * الزائر (بدون حساب):
 *   - بعد 7 دقايق تصفّح (بتنحسب عكل الصفحات، والصفحة ظاهرة بس): «عجبتك؟ سجّل مجاناً» + [سجّل] [لاحقاً].
 *     «لاحقاً» → بترجع بعد 7 دقايق. تاني «لاحقاً» → نافذة الرأي «شو اللي خلاك ما تسجّل؟».
 *   - كبس «مو هلأ» بنافذة «سجّل لتكمّل» (الفصل التاني) → نافذة الرأي فوراً.
 *   - رجع بيوم تاني وما سجّل → نافذة الرأي.
 *   - نافذة الرأي مرة وحدة لكل جهاز. بالكتير 3 نوافذ بالزيارة. ما بتطلع بصفحات التدريب والامتحان (بتستنّى للصفحة الجاية).
 * العضو (بالصفحة الرئيسية بس، إذا فتح مادة عهالجهاز): نافذة «شو رأيك بالمنصة؟». السيرفر بيقرّر إيمتى (reviewState).
 */
(function () {
  if (window.SCFeedback) return;

  var SELF = document.currentScript && document.currentScript.src || "";
  var HUB = SELF ? new URL("../", SELF).href : "";
  var SUPPORT = "https://t.me/karkinlySupportGroup";
  var STEP_MS = 7 * 60 * 1000, TICK = 5000, MAX_PER_VISIT = 3;
  var K = { t: "sc_fb_t", next: "sc_fb_next", n: "sc_fb_n", done: "sc_fb_done", day: "sc_fb_day", pend: "sc_fb_pend" };

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, String(v)); } catch (e) { return null; } }
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, String(v)); } catch (e) { return null; } }
  function esc(t) { return (t == null ? "" : String(t)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function isGuest() { var s = window.SCAuth && SCAuth.getSession(); return !(s && s.token); }
  function courseNow() { var m = /\/courses\/([A-Za-z0-9_\-]+)\//.exec(location.pathname); return m ? m[1] : ""; }
  function isQuizPage() { return /-(exam|practice)\.html$/.test(location.pathname) || /final|placement/i.test(location.pathname.split("/").pop() || ""); }
  function loginUrl() { return HUB + "login.html?next=" + encodeURIComponent(location.href); }
  function shownThisVisit() { return Number(ss("sc_fb_shown")) || 0; }
  function canShow() { return shownThisVisit() < MAX_PER_VISIT && !document.querySelector(".scf-ov:not([hidden])") && !document.querySelector(".scs-gate:not([hidden])"); }

  /* ---------- تنسيقات (معزولة بـ scf-) ---------- */
  var css = [
    ".scf-ov{position:fixed;inset:0;z-index:88;background:rgba(15,28,46,.55);display:flex;align-items:center;justify-content:center;padding:16px;direction:rtl}",
    ".scf-ov[hidden]{display:none}",
    ".scf-box{position:relative;background:#fff;color:#16232E;width:100%;max-width:440px;max-height:calc(100vh - 40px);overflow-y:auto;border-radius:18px;box-shadow:0 14px 44px rgba(15,28,46,.3);padding:20px 18px 18px;text-align:right;font-family:'Alexandria',system-ui,sans-serif}",
    ".scf-x{position:absolute;top:10px;left:10px;width:34px;height:34px;border-radius:50%;border:1px solid #E3E7F0;background:#F5F7FB;font-size:1.1rem;cursor:pointer;color:inherit}",
    ".scf-box h2{margin:0 0 6px;font-size:1.12rem;padding-left:36px}",
    ".scf-p{margin:0 0 12px;color:#5B6478;font-size:.9rem;line-height:1.8}",
    ".scf-stars{display:flex;gap:4px;margin:0 0 12px}",
    ".scf-star{background:none;border:none;padding:0 2px;font-size:2rem;line-height:1;cursor:pointer;color:#D5DAE4}",
    ".scf-star.on{color:#FF9F1C}",
    ".scf-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px}",
    ".scf-chip{font:inherit;font-size:.8rem;font-weight:700;border:1.5px solid #E3E7F0;background:#fff;color:#3A465A;border-radius:999px;padding:5px 12px;cursor:pointer}",
    ".scf-chip.on{background:#EFFBF8;border-color:#1FB6A8;color:#0E7C86}",
    ".scf-sol{background:#EFFBF8;border:1px solid #BFEDE6;color:#0B5F58;border-radius:12px;padding:9px 12px;font-size:.84rem;line-height:1.8;margin:0 0 8px}",
    ".scf-sol a{color:#0E7C86;font-weight:800}",
    ".scf-mail{display:flex;gap:6px;margin-top:8px}",
    ".scf-mail input{flex:1;min-width:0;border:1.5px solid #BFEDE6;border-radius:10px;padding:8px 10px;font:inherit;font-size:.88rem;direction:ltr;text-align:left}",
    ".scf-ta{width:100%;min-height:76px;resize:vertical;border:1.5px solid #E3E7F0;border-radius:12px;padding:10px 12px;font:inherit;font-size:.9rem;box-sizing:border-box}",
    ".scf-ta:focus,.scf-mail input:focus,.scf-sel:focus{outline:none;border-color:#1FB6A8;box-shadow:0 0 0 3px rgba(31,182,168,.18)}",
    ".scf-sel{width:100%;border:1.5px solid #E3E7F0;border-radius:10px;padding:8px 10px;font:inherit;font-size:.86rem;background:#fff;margin:0 0 10px}",
    ".scf-lbl{display:block;font-size:.8rem;font-weight:700;color:#5B6478;margin:0 0 4px}",
    ".scf-err{color:#D64545;font-size:.82rem;margin:6px 0 0;min-height:1em}",
    ".scf-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:12px}",
    ".scf-btn{font:inherit;font-weight:800;font-size:.92rem;border:none;border-radius:999px;padding:10px 22px;cursor:pointer;background:#FF9F1C;color:#1A1200;text-decoration:none;display:inline-flex;align-items:center;gap:6px}",
    ".scf-btn:disabled{opacity:.6;cursor:default}",
    ".scf-btn2{font:inherit;font-weight:700;font-size:.88rem;border:1.5px solid #E3E7F0;background:#fff;color:#3A465A;border-radius:999px;padding:9px 18px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px}",
    ".scf-free{display:inline-block;background:#EFFBF8;color:#0E7C86;border:1px solid #BFEDE6;border-radius:999px;padding:2px 10px;font-size:.78rem;font-weight:800;margin-bottom:8px}"
  ].join("");
  function addCss() { if (document.getElementById("scf-css")) return; var st = document.createElement("style"); st.id = "scf-css"; st.textContent = css; document.head.appendChild(st); }

  /* ---------- نافذة عامة ---------- */
  var ov = null;
  function open(html, onClose) {
    addCss();
    if (!ov) {
      ov = document.createElement("div"); ov.className = "scf-ov"; ov.hidden = true;
      document.body.appendChild(ov);
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && ov && !ov.hidden && ov._close) ov._close(); });
    }
    ov.innerHTML = '<div class="scf-box" role="dialog" aria-modal="true"><button class="scf-x" type="button" aria-label="إغلاق">×</button>' + html + '</div>';
    ov._close = function () { ov.hidden = true; if (onClose) { var f = onClose; onClose = null; f(); } };
    ov.querySelector(".scf-x").onclick = ov._close;
    ov.onclick = function (e) { if (e.target === ov) ov._close(); };
    ov.hidden = false;
    ss("sc_fb_shown", shownThisVisit() + 1);
    return ov.querySelector(".scf-box");
  }
  function closeSilently() { if (ov) { ov._close = null; ov.hidden = true; } }

  function starsHtml() {
    var h = '<div class="scf-stars" role="radiogroup" aria-label="تقييمك">';
    for (var i = 1; i <= 5; i++) h += '<button type="button" class="scf-star" data-v="' + i + '" aria-label="' + i + ' من 5">★</button>';
    return h + '</div>';
  }
  function wireStars(box) {
    var val = 0, bs = box.querySelectorAll(".scf-star");
    function paint(v) { bs.forEach(function (b) { b.classList.toggle("on", +b.getAttribute("data-v") <= v); }); }
    bs.forEach(function (b) {
      b.onclick = function () { val = +b.getAttribute("data-v"); paint(val); };
      b.onmouseenter = function () { paint(+b.getAttribute("data-v")); };
      b.onmouseleave = function () { paint(val); };
    });
    return function () { return val; };
  }
  function chipsHtml(list) {
    return '<div class="scf-chips">' + list.map(function (c) { return '<button type="button" class="scf-chip" aria-pressed="false">' + esc(c.t || c) + '</button>'; }).join("") + '</div>';
  }
  function picked(box) { return [].map.call(box.querySelectorAll(".scf-chip.on"), function (b) { return b.textContent; }); }

  /* ================= الزائر ================= */
  var FB_CHIPS = [
    { t: "ما عرفت إنو مجاني", s: "🎁 <b>المنصة مجانية بالكامل</b>، والتسجيل كمان مجاني، وبلا كلمة سر." },
    { t: "ما بدي أعطي إيميلي", s: '💬 تواصل مع الدعم، ومنعملك حساب <b>بدون إيميل</b>. <a href="' + SUPPORT + '" target="_blank" rel="noopener">غروب الدعم ←</a>' },
    { t: "ما لقيت مادتي", s: "📚 اكتب بالمربع تحت <b>أسماء المواد</b> اللي بدك ياها، ومنحطها بالخطة.", ph: "اكتب أسماء المواد اللي بدك ياها..." },
    { t: "الكود ما وصلني", s: '📩 شوف مجلد <b>الرسائل غير المرغوب فيها (Spam)</b>، الكود بيكون هونيك. أو <a href="' + SUPPORT + '" target="_blank" rel="noopener">تواصل مع الدعم ←</a>' },
    { t: "الشرح مو واضح", s: "✍️ اكتبلنا شو اللي ما كان واضح وبأي مادة، ومنصلّحه.", ph: "شو اللي ما كان واضح؟ وبأي مادة؟" },
    { t: "الموقع بطيء أو علّق معي", s: "✍️ اكتبلنا بأي صفحة صار هالشي، ومنشوفه.", ph: "بأي صفحة صار؟" },
    { t: "بس عم جرّب، برجع بعدين", s: "📩 اكتب إيميلك ونبعتلك تذكير حتى ترجعلنا. <b>التسجيل ضروري إذا حبيت تضل محتفظ وين وصلت بالمادة، وما ترجع تعيد الفصول.</b>", mail: true },
    { t: "غير ذلك", s: "", ph: "اكتب رأيك هون..." }
  ];

  function visitorFeedback(reason) {
    if (!isGuest() || ls(K.done) || !canShow()) return;
    if (isQuizPage() && reason !== "gate") { ls(K.pend, "fb"); return; }
    ls(K.pend, null);
    var box = open(
      '<h2>' + (reason === "gate" ? "ولا يهمك! بس قبل ما تروح 🙏" : "رأيك بيهمنا 🙏") + '</h2>' +
      '<p class="scf-p">شو اللي خلاك ما تسجّل؟ رأيك بيساعدنا نعرف شو لازم نحسّن.</p>' +
      starsHtml() + chipsHtml(FB_CHIPS) + '<div class="scf-sols"></div>' +
      '<textarea class="scf-ta" maxlength="400" placeholder="اكتب هون... (إجباري)"></textarea>' +
      '<div class="scf-err" role="alert"></div>' +
      '<div class="scf-row"><button type="button" class="scf-btn scf-send">إرسال</button></div>',
      function () { ls(K.done, "x"); }   // سكّرها = ما منرجع نسأله
    );
    var getStars = wireStars(box), ta = box.querySelector(".scf-ta"), sols = box.querySelector(".scf-sols"), err = box.querySelector(".scf-err");
    ta.oninput = function () { err.textContent = ""; };
    var mailVal = "";
    function renderSols() {
      var on = picked(box), html = "", ph = "اكتب هون... (إجباري)";
      FB_CHIPS.forEach(function (c) {
        if (on.indexOf(c.t) < 0) return;
        if (c.ph) ph = c.ph + " (إجباري)";
        if (!c.s) return;
        html += '<div class="scf-sol">' + c.s + (c.mail ? '<div class="scf-mail"><input type="email" inputmode="email" autocomplete="email" placeholder="name@gmail.com" value="' + esc(mailVal) + '"></div>' : '') + '</div>';
      });
      sols.innerHTML = html; ta.placeholder = ph;
      var mi = sols.querySelector(".scf-mail input"); if (mi) mi.oninput = function () { mailVal = mi.value.trim(); };
    }
    box.querySelectorAll(".scf-chip").forEach(function (b) {
      b.onclick = function () { var on = !b.classList.contains("on"); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); renderSols(); if (b.textContent === "غير ذلك" && on) ta.focus(); };
    });
    box.querySelector(".scf-send").onclick = function () {
      var st = getStars(), tx = ta.value.trim(), ch = picked(box);
      var wantsMail = ch.indexOf("بس عم جرّب، برجع بعدين") >= 0;
      if (!st) { err.textContent = "اختار عدد النجوم أول شي ⭐"; return; }
      if (tx.length < 5) { err.textContent = "اكتبلنا جملة صغيرة بالمربع 🙏"; ta.focus(); return; }
      if (wantsMail && mailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mailVal)) { err.textContent = "الإيميل مو مكتوب صح"; return; }
      err.textContent = ""; this.disabled = true; this.textContent = "عم نبعت...";
      var btn = this;
      SCAuth.api("submitFeedback", { vid: SCAuth.visitorId(), ua: SCAuth.uaTag(), stars: st, chips: ch, text: tx,
                                     course_id: courseNow(), email: wantsMail ? mailVal : "" }).then(function (res) {
        if (!res || !res.ok) { btn.disabled = false; btn.textContent = "إرسال"; err.textContent = res && res.error === "BAD_EMAIL" ? "الإيميل مو مكتوب صح" : "ما زبط الإرسال، جرّب كمان مرة"; return; }
        ls(K.done, "1");
        thanksVisitor(ch, wantsMail && mailVal);
      }).catch(function () { btn.disabled = false; btn.textContent = "إرسال"; err.textContent = "تأكد من النت وجرّب كمان مرة"; });
    };
  }

  function thanksVisitor(ch, mailed) {
    var sols = FB_CHIPS.filter(function (c) { return ch.indexOf(c.t) >= 0 && c.s && !c.ph; })
      .map(function (c) { return '<div class="scf-sol">' + (c.mail ? (mailed ? "📩 تمام! رح نبعتلك تذكير بكرا. <b>وتذكّر: التسجيل ضروري إذا حبيت تضل محتفظ وين وصلت بالمادة.</b>" : c.s.replace(/^📩[^<]*/, "📩 ")) : c.s) + '</div>'; }).join("");
    closeSilently();
    var box = open('<h2>شكراً، وصلنا رأيك ❤️</h2>' +
      (sols ? '<p class="scf-p">ورجّعنالك الحلول اللي اخترتها:</p>' + sols : '<p class="scf-p">رح نقرأه ونشتغل عليه.</p>') +
      '<div class="scf-row"><a class="scf-btn" href="' + esc(loginUrl()) + '">🔑 سجّل مجاناً</a>' +
      '<a class="scf-btn2" href="' + SUPPORT + '" target="_blank" rel="noopener">💬 الدعم</a></div>');
    ss("sc_fb_shown", shownThisVisit() - 1);   // نافذة الشكر ما بتنحسب
    return box;
  }

  function registerPrompt() {
    if (!isGuest() || !canShow()) return;
    if (isQuizPage()) { ls(K.pend, "reg"); return; }
    ls(K.pend, null);
    var n = (Number(ls(K.n)) || 0) + 1; ls(K.n, n);
    var later = function () {
      if (n >= 2 && !ls(K.done)) setTimeout(function () { visitorFeedback("later"); }, 400);
    };
    var box = open('<span class="scf-free">✨ مجاني 100%</span><h2>عجبتك المنصة؟ 👀</h2>' +
      '<p class="scf-p">صرلك شوي عم تتصفّح. سجّل مجاناً لتنحفظ <b>وين وصلت بالمادة</b>، وما ترجع تعيد الفصول. بياخد دقيقة: إيميلك وبس.</p>' +
      '<div class="scf-row"><a class="scf-btn" href="' + esc(loginUrl()) + '">🔑 سجّل مجاناً</a><button type="button" class="scf-btn2 scf-later">لاحقاً</button></div>', later);
    box.querySelector(".scf-later").onclick = function () { ov._close(); };
  }

  /* عدّاد وقت التصفّح: بيزيد بس والصفحة ظاهرة، ومحفوظ بين الصفحات */
  function startTimer() {
    if (!ls(K.next)) ls(K.next, STEP_MS);
    setInterval(function () {
      if (document.visibilityState !== "visible" || !isGuest()) return;
      var t = (Number(ls(K.t)) || 0) + TICK; ls(K.t, t);
      if (t >= (Number(ls(K.next)) || STEP_MS) && canShow() && !isQuizPage()) {
        ls(K.next, t + STEP_MS);
        registerPrompt();
      }
    }, TICK);
  }

  function initGuest() {
    if (!isGuest()) return;
    startTimer();
    // نافذة مأجّلة من صفحة تدريب/امتحان
    var p = ls(K.pend);
    if (p && !isQuizPage()) setTimeout(function () { p === "reg" ? registerPrompt() : visitorFeedback("later"); }, 1500);
    // رجع بيوم تاني وما سجّل
    var d = ls(K.day), now = today();
    if (d && d !== now && !ls(K.done)) setTimeout(function () { visitorFeedback("return"); }, 20000);
    ls(K.day, now);
  }

  /* ================= العضو ================= */
  var RV_CHIPS = ["الشرح بسيط وواضح", "أسئلة الدورات فادتني", "التدريب ساعدني بالامتحان", "بلاقي جواب لأسئلتي"];

  function usedCourses() {
    var ids = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var m = /^([a-z0-9_]+)_(progress|seen)_v\d+$/i.exec(localStorage.key(i) || "");
        if (m && ids.indexOf(m[1].toUpperCase()) < 0) ids.push(m[1].toUpperCase());
      }
    } catch (e) {}
    return ids;
  }

  function memberReview(user) {
    var used = usedCourses();
    if (!used.length || !window.SCAuth) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    if (ss("sc_rv_checked")) return; ss("sc_rv_checked", "1");
    SCAuth.api("reviewState", { token: s.token }).then(function (res) {
      if (!res || !res.ok || !res.show) return;
      setTimeout(function () { showMemberReview(s.token, res.name || ((user && user.name) || "").split(" ")[0], used); }, 2500);
    }).catch(function () {});
  }

  function showMemberReview(token, name, used) {
    if (!canShow()) return;
    var courses = {}; try { (JSON.parse(localStorage.getItem("sc_courses") || "null") || []).forEach(function (c) { courses[c.course_id] = c.title; }); } catch (e) {}
    var opts = used.filter(function (id) { return courses[id]; });
    var sel = opts.length ? '<label class="scf-lbl" for="scf-c">عن أي مادة؟</label><select id="scf-c" class="scf-sel">' +
      opts.map(function (id) { return '<option value="' + esc(id) + '">' + esc(courses[id]) + '</option>'; }).join("") +
      '<option value="">المنصة بشكل عام</option></select>' : '';
    var sent = false;
    var box = open('<h2>أهلاً ' + esc(name || "") + '! شو رأيك بالمنصة؟ 💬</h2>' +
      '<p class="scf-p">رأيك بيساعد طلاب غيرك يعرفوا إذا المنصة بتفيدهم. ولما ينعرض بالصفحة الرئيسية بتاخد <b>3 نجوم ⭐</b></p>' +
      starsHtml() + chipsHtml(RV_CHIPS) + sel +
      '<textarea class="scf-ta" maxlength="400" placeholder="اكتب رأيك بكلماتك... (إجباري)"></textarea>' +
      '<div class="scf-err" role="alert"></div>' +
      '<div class="scf-row"><button type="button" class="scf-btn scf-send">إرسال</button><button type="button" class="scf-btn2 scf-later">لاحقاً</button></div>',
      function () { if (!sent) SCAuth.api("reviewLater", { token: token }).catch(function () {}); });
    var getStars = wireStars(box), ta = box.querySelector(".scf-ta"), err = box.querySelector(".scf-err");
    ta.oninput = function () { err.textContent = ""; };
    box.querySelectorAll(".scf-chip").forEach(function (b) { b.onclick = function () { var on = !b.classList.contains("on"); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); }; });
    box.querySelector(".scf-later").onclick = function () { ov._close(); };
    box.querySelector(".scf-send").onclick = function () {
      var st = getStars(), tx = ta.value.trim(), btn = this;
      if (!st) { err.textContent = "اختار عدد النجوم أول شي ⭐"; return; }
      if (tx.length < 5) { err.textContent = "اكتبلنا جملة صغيرة بالمربع 🙏"; ta.focus(); return; }
      err.textContent = ""; btn.disabled = true; btn.textContent = "عم نبعت...";
      var c = box.querySelector("#scf-c");
      SCAuth.api("submitReview", { token: token, stars: st, chips: picked(box), text: tx, course_id: c ? c.value : "" }).then(function (res) {
        if (!res || !res.ok) {
          btn.disabled = false; btn.textContent = "إرسال";
          if (res && res.error === "ALREADY") { sent = true; ov._close(); return; }
          err.textContent = res && res.error === "BANNED_WORDS" ? "في كلمة بالنص ما منقدر ننشرها، عدّلها لو سمحت" : "ما زبط الإرسال، جرّب كمان مرة";
          return;
        }
        sent = true; closeSilently();
        open('<h2>شكراً! رأيك وصل ❤️</h2><p class="scf-p">رح نراجعه، ولما ينعرض بالصفحة الرئيسية بتاخد <b>3 نجوم ⭐</b> وبيوصلك إشعار.</p>' +
          '<div class="scf-row"><button type="button" class="scf-btn scf-ok">تمام</button></div>');
        ss("sc_fb_shown", shownThisVisit() - 1);
        ov.querySelector(".scf-ok").onclick = function () { ov._close(); };
      }).catch(function () { btn.disabled = false; btn.textContent = "إرسال"; err.textContent = "تأكد من النت وجرّب كمان مرة"; });
    };
  }

  window.SCFeedback = { initGuest: initGuest, afterGate: function () { visitorFeedback("gate"); }, member: memberReview };
})();
