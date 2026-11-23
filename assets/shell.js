/*
 * Support Channel — الشريط المشترك (الهب + كل المقررات)
 *
 * الاستخدام بأي صفحة (بعد config.js و auth.js):
 *
 *   <script src="…/assets/config.js"></script>
 *   <script src="…/assets/auth.js"></script>
 *   <script src="…/assets/shell.js"></script>
 *   <script>SCShell.init();</script>
 *
 * - بيحمي الصفحة (نفس requireLogin) وبيبني على يسار الشريط العلوي (.topbar):
 *   🏠 رجوع لكل المقررات · 🔔 الإشعارات · 🚪 خروج.
 * - "أهلاً الاسم" بالشريط العلوي جنب الأيقونات.
 * - تحت الشريط العلوي: شريط أبيض فيو أخبار متحرّكة (من تبويب ticker بالشيت) بعرض كامل، وبيختفي إذا ما في أخبار.
 *   مو ثابت: بيطلع مع التمرير. موجود بكل الصفحات (الهب والمقررات). greet:false بيلغي الترحيب والشريط.
 * - إذا ما في .topbar بالصفحة بينشئ واحد.
 * - خيارات: { greet:false, onReady:function(user){}, guest:function(){} }
 *   guest: للصفحات المفتوحة للزوار (صفحة المواد). بدون جلسة ما منحوّل لصفحة الدخول: الصفحة بتظهر،
 *   والشريط فيو زر «تسجيل الدخول» بس، وبتنستدعى guest(). إذا في جلسة صالحة الصفحة بتشتغل عادي.
 * - تجربة الزوار بالمقررات: صفحة المقرر الرئيسية والفصل الأول (درس، تدريب، امتحان) مفتوحين بدون حساب
 *   بشكل تلقائي (من المسار، بلا أي تعديل على صفحات المقرر). أي رابط لباقي المقرر بيفتح نافذة «سجّل دخولك».
 *   ونجوم امتحان الفصل الأول للزائر بتنحفظ عالجهاز وبتنحسبلو أول ما يسجّل.
 */
(function () {
  if (window.SCShell) return;

  var SELF = document.currentScript && document.currentScript.src || "";
  var HUB = SELF ? new URL("../", SELF).href : "";            // جذر الهب (فيو index.html = صفحة المواد)
  var HOURS_PAGE = "https://basharkarkinly.github.io/BSCM-Courses/";
  var CACHE_KEY = "sc_courses";

  /* ---------- تنسيقات (معزولة بـ scs-) ---------- */
  var css = [
    ".scs-cluster{display:flex;align-items:center;gap:8px;margin-inline-start:auto}",
    ".scs-ico{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;padding:0;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.28);color:#fff;font:inherit;font-size:1.08rem;line-height:1;cursor:pointer;text-decoration:none;-webkit-tap-highlight-color:transparent}",
    ".scs-ico:hover{background:rgba(255,255,255,.2)}",
    ".scs-n{position:absolute;top:-5px;left:-5px;min-width:19px;height:19px;padding:0 5px;border-radius:999px;background:var(--amber,#FF9F1C);color:#1A1200;font-size:.7rem;font-weight:800;line-height:19px;text-align:center}",
    ".scs-n[hidden]{display:none}",
    ".scs-strip{display:flex;align-items:center;direction:rtl;background:#F5F7FB;border-bottom:1px solid #E3E7F0;min-height:40px;overflow:hidden;font-size:.9rem}",
    ".scs-strip[hidden]{display:none}",
    ".scs-hi{flex:none;max-width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:800;font-size:.92rem;color:#fff;margin-inline-end:6px}",
    ".scs-hi:empty{display:none}",
    "a.scs-hi{text-decoration:none}a.scs-hi:hover{text-decoration:underline}",
    ".scs-sa{flex:1;min-width:0;overflow:hidden;color:#3A465A;font-weight:600;-webkit-mask-image:linear-gradient(to right,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)}",
    ".scs-tk{display:flex;width:max-content;direction:rtl;animation:scsTk linear infinite;animation-duration:var(--scs-d,20s)}",
    ".scs-tk:hover,.scs-tk.hold{animation-play-state:paused}",
    ".scs-g{display:flex;align-items:center;flex:none}",
    ".scs-it{white-space:nowrap}",
    ".scs-sep{flex:none;width:7px;height:7px;margin:0 26px;background:var(--amber,#FF9F1C);transform:rotate(45deg);border-radius:1px}",
    "@keyframes scsTk{from{transform:translateX(0)}to{transform:translateX(var(--scs-w,0px))}}",
    "@media (prefers-reduced-motion:reduce){.scs-tk{animation:none}.scs-sa{overflow-x:auto;-webkit-mask-image:none;mask-image:none}}",
    "@media (max-width:700px){.topbar{padding:10px 14px;gap:8px 10px}.topbar .brand{flex:1 1 calc(100% - 140px);min-width:0;font-size:.88rem;line-height:1.35}.topbar nav{flex:1 1 100%;order:2}.scs-ico{width:38px;height:38px;font-size:1rem}.scs-cluster{gap:4px 6px;margin-inline-start:0;flex:none;width:126px;flex-wrap:wrap;justify-content:center}.scs-hi{order:2;flex:1 1 100%;max-width:100%;text-align:center;font-size:.74rem;margin:0;opacity:.92}}",
    ".scs-login{flex:none;display:inline-flex;align-items:center;gap:6px;text-decoration:none;background:var(--amber,#FF9F1C);color:#1A1200;font-weight:800;font-size:.9rem;border-radius:999px;padding:9px 18px;white-space:nowrap}",
    ".scs-login:hover{filter:brightness(.95)}",
    "@media (max-width:700px){.scs-guest{width:auto}.scs-login{font-size:.82rem;padding:8px 14px}}",
    ".scs-ov{position:fixed;inset:0;z-index:80;background:rgba(15,28,46,.5);display:flex;justify-content:center;align-items:flex-start;padding:70px 14px 20px}",
    ".scs-ov[hidden]{display:none}",
    ".scs-panel{background:#fff;color:#16232E;width:100%;max-width:440px;max-height:calc(100vh - 100px);overflow-y:auto;border-radius:16px;box-shadow:0 12px 40px rgba(15,28,46,.25);padding:16px;text-align:right;font-family:'Alexandria',system-ui,sans-serif}",
    ".scs-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}",
    ".scs-head h2{margin:0;font-size:1.1rem}",
    ".scs-x{width:36px;height:36px;border-radius:50%;border:1px solid #E3E7F0;background:#F5F7FB;font-size:1.1rem;cursor:pointer;color:inherit}",
    ".scs-item{display:block;text-decoration:none;color:inherit;border:1px solid #E3E7F0;border-radius:12px;padding:10px 12px;margin-bottom:8px;background:#fff}",
    ".scs-item.new{background:#EFFBF8;border-color:#BFEDE6}",
    "a.scs-item:hover{border-color:#1FB6A8}",
    ".scs-t{font-weight:700;font-size:.92rem}",
    ".scs-d{color:#5B6478;font-size:.86rem}",
    ".scs-m{color:#5B6478;font-size:.74rem;margin-top:2px}",
    ".scs-empty{text-align:center;color:#5B6478;padding:22px 8px;font-size:.92rem}",
    ".scs-star{flex:none;display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 10px;border-radius:999px;background:rgba(255,159,28,.18);border:1px solid rgba(255,159,28,.55);color:#FFD27A;font-weight:800;font-size:.85rem;text-decoration:none;white-space:nowrap}",
    ".scs-star:hover{background:rgba(255,159,28,.3)}",
    ".scs-star[hidden]{display:none}",
    ".scs-item.star{background:#FFF8EC;border-color:#FFD79A}",
    ".scs-toast{position:fixed;inset-inline:0;bottom:22px;margin:auto;width:max-content;max-width:calc(100% - 32px);z-index:90;background:#0F1C2E;color:#fff;border-radius:999px;padding:10px 20px;font-family:'Alexandria',system-ui,sans-serif;font-weight:700;font-size:.95rem;box-shadow:0 10px 30px -10px rgba(15,28,46,.5);direction:rtl;transition:opacity .4s,transform .4s}",
    ".scs-toast.out{opacity:0;transform:translateY(10px)}",
    "@media (max-width:700px){.scs-star{order:3;height:24px;font-size:.74rem;padding:0 8px;margin:0 auto}}",
    ".scs-gate{position:fixed;inset:0;z-index:85;background:rgba(15,28,46,.55);display:flex;align-items:center;justify-content:center;padding:18px}",
    ".scs-gate[hidden]{display:none}",
    ".scs-gbox{position:relative;background:#fff;color:#16232E;width:100%;max-width:400px;border-radius:18px;box-shadow:0 18px 50px rgba(15,28,46,.35);padding:26px 22px 20px;text-align:center;font-family:'Alexandria',system-ui,sans-serif;direction:rtl}",
    ".scs-gico{font-size:2.4rem;line-height:1;margin-bottom:8px}",
    ".scs-gbox h2{margin:0 0 8px;font-size:1.2rem}",
    ".scs-gbox p{margin:0 0 16px;color:#5B6478;font-size:.92rem;line-height:1.8}",
    ".scs-gbtn{display:block;width:100%;box-sizing:border-box;text-decoration:none;background:var(--amber,#FF9F1C);color:#1A1200;font:inherit;font-weight:800;border:0;border-radius:12px;padding:12px;cursor:pointer}",
    ".scs-gno{display:block;width:100%;margin-top:8px;background:none;border:0;font:inherit;color:#5B6478;padding:8px;cursor:pointer}",
    ".scs-free{display:inline-block;background:#1E9E6A;color:#fff;font-weight:900;border-radius:999px;padding:1px 10px;margin-inline-start:4px;font-size:1.02em;letter-spacing:.2px}",
    ".scs-gfree{display:inline-block;background:#1E9E6A;color:#fff;font-weight:900;font-size:1.15rem;border-radius:999px;padding:6px 18px;margin-bottom:10px;box-shadow:0 4px 14px rgba(30,158,106,.3)}",
    ".scs-gsmall{display:block;margin:-8px 0 14px;color:#1E7A55;font-weight:700;font-size:.85rem}",
    ".chapter-card.scs-lk{cursor:pointer;opacity:1}.chapter-card.scs-lk .stamp{background:#E7F7EF;color:#14583D;border:1px solid #BDE8D2}",
    ".sidebar-link.scs-lk{cursor:pointer}.sidebar-link.scs-lk .scs-free{font-size:.72rem;padding:0 7px}",
    ".scs-strip{display:block;width:100%;flex:0 0 100%;box-sizing:border-box;background:#E7F7EF;border:1px solid #BDE8D2;color:#14583D;border-radius:14px;padding:12px 16px;margin:16px 0 4px;font-size:.95rem;line-height:1.8;font-family:inherit}",
    ".scs-strip a{color:#0E6B4A;font-weight:800}",
    ".scs-gx{position:absolute;top:10px;left:10px;width:34px;height:34px;border-radius:50%;border:1px solid #E3E7F0;background:#F5F7FB;font-size:1.1rem;cursor:pointer;color:inherit}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- أدوات ---------- */
  function esc(t) { return (t == null ? "" : String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
  function ago(iso) {
    var t = Date.parse(iso); if (isNaN(t)) return "";
    var s = Math.max(0, (Date.now() - t) / 1000);
    if (s < 60) return "هلأ";
    if (s < 3600) return "قبل " + Math.floor(s / 60) + " د";
    if (s < 86400) return "قبل " + Math.floor(s / 3600) + " س";
    return "قبل " + Math.floor(s / 86400) + " يوم";
  }
  function onDom(f) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", f); else f();
  }
  function courseMap() {
    var m = {};
    try { (JSON.parse(localStorage.getItem(CACHE_KEY) || "null") || []).forEach(function (c) { m[c.course_id] = c; }); } catch (e) {}
    return m;
  }
  function ensureCourses() {
    var s = window.SCAuth && SCAuth.getSession();
    if (!s || !s.token) return;
    try { if (JSON.parse(localStorage.getItem(CACHE_KEY) || "null")) return; } catch (e) {}
    SCAuth.api("getCourses", { token: s.token }).then(function (res) {
      if (res && res.ok) { try { localStorage.setItem(CACHE_KEY, JSON.stringify(res.courses)); } catch (e) {} }
    }).catch(function () {});
  }

  /* ---------- بناء الشريط ---------- */
  var built = false, els = {}, notif = null;

  function build(opts) {
    if (built) return; built = true;
    var bar = document.querySelector(".topbar");
    if (!bar) { bar = document.createElement("div"); bar.className = "topbar"; document.body.insertBefore(bar, document.body.firstChild); }

    var c = document.createElement("div"); c.className = "scs-cluster";
    var homeHref = HUB + "index.html";
    var onHub = false;
    try { onHub = location.pathname.replace(/index\.html$/, "") === new URL(HUB).pathname; } catch (e) {}

    c.innerHTML =
      (opts.greet !== false ? '<a class="scs-hi" id="scs-hi" href="' + HUB + 'profile.html" title="حسابي"></a>' : "") +
      '<a class="scs-star" id="scs-star" href="' + HUB + 'stars.html" title="نجومي" hidden><i style="font-style:normal"></i>⭐ <b>0</b></a>' +
      (onHub ? "" : '<a class="scs-ico" id="scs-home" href="' + esc(homeHref) + '" aria-label="كل المقررات" title="كل المقررات">🏠</a>') +
      '<button class="scs-ico" id="scs-bell" type="button" aria-label="الإشعارات" title="الإشعارات">🔔<span class="scs-n" id="scs-n" hidden>0</span></button>' +
      '<button class="scs-ico" id="scs-out" type="button" aria-label="تسجيل خروج" title="تسجيل خروج">🚪</button>';
    bar.appendChild(c);

    if (opts.greet !== false) {
      var sp = document.createElement("div"); sp.className = "scs-strip"; sp.id = "scs-strip";
      sp.hidden = true;   // بيظهر فقط إذا في أخبار
      sp.innerHTML = '<div class="scs-sa" id="scs-sa"></div>';
      bar.parentNode.insertBefore(sp, bar.nextSibling);
    }

    var ov = document.createElement("div"); ov.className = "scs-ov"; ov.hidden = true;
    ov.innerHTML = '<div class="scs-panel" role="dialog" aria-modal="true" aria-labelledby="scs-ttl">' +
      '<div class="scs-head"><h2 id="scs-ttl">الإشعارات</h2><button class="scs-x" id="scs-close" type="button" aria-label="إغلاق">×</button></div>' +
      '<div id="scs-body"></div></div>';
    document.body.appendChild(ov);

    els = {
      bell: c.querySelector("#scs-bell"), n: c.querySelector("#scs-n"),
      out: c.querySelector("#scs-out"), strip: document.getElementById("scs-strip"),
      hi: c.querySelector("#scs-hi"), sa: document.getElementById("scs-sa"), star: c.querySelector("#scs-star"),
      ov: ov, body: ov.querySelector("#scs-body")
    };

    els.out.addEventListener("click", function () { if (window.SCAuth && window.confirm("تسجيل الخروج؟")) { try { sessionStorage.removeItem("sc_notif_cache"); } catch (e) {} SCAuth.logout(); } });
    els.bell.addEventListener("click", openNotifs);
    ov.querySelector("#scs-close").addEventListener("click", closeNotifs);
    ov.addEventListener("click", function (e) { if (e.target === ov) closeNotifs(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !ov.hidden) closeNotifs(); });
  }

  function setUser(user) {
    var first = ((user && user.name) || "").split(" ")[0];
    if (els.hi) els.hi.textContent = (first ? "أهلاً " + first : "أهلاً بك") + " 👋";
  }

  /* ---------- شريط الأخبار ---------- */
  var TK_KEY = "sc_ticker", TK_TTL = 600000, TK_SPEED = 45;   // بكسل بالثانية (ثابتة على كل الشاشات)
  var tkSig = "", tkItems = [], tkFonts = false;

  function renderTicker(items) {
    var strip = els.strip, area = els.sa; if (!strip || !area) return;
    tkItems = items || [];
    if (!tkItems.length) { area.innerHTML = ""; tkSig = ""; strip.hidden = true; return; }
    strip.hidden = false;   // لازم يكون ظاهر قبل القياس تحت
    var cycle = tkItems.map(function (t) { return '<span class="scs-it">' + esc(t) + '</span><i class="scs-sep" aria-hidden="true"></i>'; }).join("");
    var tk = document.createElement("div"); tk.className = "scs-tk";
    var g = document.createElement("div"); g.className = "scs-g"; g.innerHTML = cycle;
    tk.appendChild(g); area.innerHTML = ""; area.appendChild(tk);
    var need = area.clientWidth, guard = 0;
    while (g.offsetWidth < need && guard++ < 12) g.insertAdjacentHTML("beforeend", cycle);
    var w = g.offsetWidth;
    tk.appendChild(g.cloneNode(true));
    tk.style.setProperty("--scs-w", w + "px");
    tk.style.setProperty("--scs-d", Math.max(8, w / TK_SPEED) + "s");
    var hold = function () { tk.classList.add("hold"); }, free = function () { tk.classList.remove("hold"); };
    area.onpointerdown = hold; area.onpointerup = free; area.onpointercancel = free; area.onpointerleave = free;
    if (!tkFonts && document.fonts && document.fonts.ready) {   // بعد ما ينزل الخط بيتغيّر العرض، فنعيد الحساب مرة
      tkFonts = true; document.fonts.ready.then(function () { renderTicker(tkItems); });
    }
  }

  function loadTicker() {
    if (!els.strip) return;
    var c = null; try { c = JSON.parse(localStorage.getItem(TK_KEY) || "null"); } catch (e) {}
    if (c && c.items) { tkSig = JSON.stringify(c.items); renderTicker(c.items); }
    if (c && Date.now() - c.t < TK_TTL) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    SCAuth.api("getTicker", { token: s.token }).then(function (res) {
      if (kickIfInvalid(res)) return;
      if (!res || !res.ok) return;
      var items = (res.items || []).map(function (x) { return String(x.text || ""); }).filter(Boolean);
      try { localStorage.setItem(TK_KEY, JSON.stringify({ t: Date.now(), items: items })); } catch (e) {}
      var sig = JSON.stringify(items);
      if (sig !== tkSig) { tkSig = sig; renderTicker(items); }   // ما نعيد الرسم إذا ما تغيّر شي (حتى ما تقفز الحركة)
    }).catch(function () {});
  }
  var rzT; window.addEventListener("resize", function () { clearTimeout(rzT); rzT = setTimeout(function () { if (tkItems.length) renderTicker(tkItems); }, 250); });

  /* ---------- الإشعارات ---------- */
  function setBadge(n) { els.n.textContent = n > 99 ? "99+" : n; els.n.hidden = !(n > 0); }
  function setStars(n, level) {
    if (!els.star || n == null || isNaN(n)) return;
    els.star.querySelector("b").textContent = n;
    if (level && level.icon) { els.star.querySelector("i").textContent = level.icon; els.star.title = "نجومي · المستوى " + level.n + ": " + level.name; }
    els.star.hidden = false;
  }

  function placeInfo(g) {
    var c = courseMap()[g.course_id];
    if (g.chapter_id === "info") return { label: "أسئلة مادة " + g.course_id, url: HOURS_PAGE + "#" + encodeURIComponent(g.course_id) };
    if (g.chapter_id === "general") {   // ساحة الأسئلة: سؤال عام أو عن مقرر كامل
      var t = g.course_id === "GENERAL" ? "أسئلة عامة" : "أسئلة " + ((courseMap()[g.course_id] || {}).title || g.course_id);
      return { label: "ساحة الأسئلة — " + t, url: HUB + "qa.html?c=" + encodeURIComponent(g.course_id) };
    }
    var title = c ? c.title : g.course_id;
    var url = c ? c.url.replace(/\/?$/, "/") + "chapters/chapter-" + g.chapter_id + "-lesson.html#comments" : null;
    return { label: title + " — الفصل " + g.chapter_id, url: url };
  }

  /* السيرفر رفض الجلسة (انحظرت/انلغت) → رجوع لصفحة الدخول */
  function kickIfInvalid(res) {
    if (res && res.ok === false && /^(NO_SESSION|EXPIRED|BLOCKED)$/.test(res.error)) {
      SCAuth.clearSession(); SCAuth.toLogin(); return true;
    }
    return false;
  }

  /* كاش قصير للإشعارات حتى ما كل صفحة تطلب من السيرفر */
  var NOTIF_KEY = "sc_notif_cache", NOTIF_TTL = 90000;
  function readNC() {
    try { var c = JSON.parse(sessionStorage.getItem(NOTIF_KEY) || "null"); if (c && Date.now() - c.t < NOTIF_TTL) return c.d; } catch (e) {}
    return null;
  }
  function writeNC(d) { try { sessionStorage.setItem(NOTIF_KEY, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {} }
  function seenCopy(n) {   // نسخة "مقروءة" للكاش: بدون عدّاد ولا تعليقات جديدة
    return { ok: true, unread: 0, groups: [], star_events: [], stars: n.stars, level: n.level, announcements: (n.announcements || []).map(function (a) { return Object.assign({}, a, { is_new: false }); }) };
  }

  function loadNotifs() {
    var c = readNC();
    if (c) { notif = c; setBadge(c.unread || 0); setStars(c.stars, c.level); ensureCourses(); return; }
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    ensureCourses();
    SCAuth.api("getNotifications", { token: s.token }).then(function (res) {
      if (kickIfInvalid(res)) return;
      if (res && res.ok) { notif = res; writeNC(res); setBadge(res.unread); setStars(res.stars, res.level); }
    }).catch(function () {});
  }

  function renderNotifs() {
    var n = notif;
    if (!n) { els.body.innerHTML = '<div class="scs-empty">عم نحمّل...</div>'; return; }
    // كل الإشعارات بقائمة وحدة: الجديدة (اللي ما انقرت) فوق، وجوّا كل قسم الأحدث أول
    var items = [];
    n.announcements.forEach(function (a) {
      items.push({ at: a.created_at, isNew: !!a.is_new, html: '<div class="scs-item' + (a.is_new ? " new" : "") + '"><div class="scs-t">📣 ' + esc(a.title) + '</div>' +
        (a.body ? '<div class="scs-d">' + esc(a.body) + '</div>' : "") + '<div class="scs-m">' + esc(ago(a.created_at)) + '</div></div>' });
    });
    (n.star_events || []).forEach(function (x) {
      var up = x.delta > 0;
      var head = x.delta === 0 ? "🏅 إنجاز جديد"   // وسام أو مستوى جديد (بدون نجوم)
        : "⭐ " + (up ? "+" : "−") + Math.abs(x.delta) + (Math.abs(x.delta) === 1 ? " نجمة" : " نجوم");
      items.push({ at: x.at, isNew: true, html: '<a class="scs-item star" href="' + esc(HUB + "stars.html") + '"><div class="scs-t">' + head + '</div>' +
        (x.label ? '<div class="scs-d">' + esc(x.label) + '</div>' : "") + '<div class="scs-m">' + esc(ago(x.at)) + '</div></a>' });
    });
    n.groups.forEach(function (g) {
      var p = placeInfo(g);
      var txt = g.count + (g.count === 1 ? " مشاركة جديدة" : " مشاركات جديدة") + (g.replies ? " (منها " + g.replies + (g.replies === 1 ? " جواب" : " أجوبة") + " على أسئلتك)" : "");
      var inner = '<div class="scs-t">💬 ' + esc(p.label) + '</div><div class="scs-d">' + esc(txt) + '</div><div class="scs-m">' + esc(ago(g.latest_at)) + '</div>';
      items.push({ at: g.latest_at, isNew: true, html: p.url ? '<a class="scs-item new" href="' + esc(p.url) + '">' + inner + '</a>' : '<div class="scs-item new">' + inner + '</div>' });
    });
    items.sort(function (x, y) {
      if (x.isNew !== y.isNew) return x.isNew ? -1 : 1;
      return String(x.at || "") < String(y.at || "") ? 1 : -1;
    });
    els.body.innerHTML = items.map(function (i) { return i.html; }).join("") || '<div class="scs-empty">ما في إشعارات جديدة.</div>';
  }

  function openNotifs() {
    els.ov.hidden = false; renderNotifs();
    if (notif && notif.unread > 0) {
      var s = SCAuth.getSession();
      if (s && s.token) SCAuth.api("markSeen", { token: s.token }).catch(function () {});
      writeNC(seenCopy(notif));
      setBadge(0);   // الرقم بيختفي، والعناصر الجديدة بتضل مظلّلة حتى تسكّر النافذة
    }
  }
  function closeNotifs() {
    els.ov.hidden = true;
    if (notif) { notif.groups = []; notif.star_events = []; notif.announcements.forEach(function (a) { a.is_new = false; }); notif.unread = 0; writeNC(notif); }
  }

  /* ---------- الدخول للمكوّن ---------- */
  /* تجربة الزوار بالمقررات: صفحة المقرر + الفصل الأول (درس/تدريب/امتحان) مفتوحين بدون حساب */
  var COURSE_RE = /\/courses\/([A-Za-z0-9_\-]+)\/(.*)$/;
  var OPEN_COURSE_PAGE = /^(index\.html)?$|^chapters\/chapter-1-(lesson|practice|exam)\.html$/;
  var NO_TRIAL = { ENG_PT: 1 };   // مقررات خاصة بتضل بدها دخول
  function coursePart(url) {
    var m = COURSE_RE.exec(url.pathname);
    return m && !NO_TRIAL[m[1]] ? { course: m[1], rest: decodeURIComponent(m[2]) } : null;
  }
  function isTrialPage() { var c = coursePart(location); return !!(c && OPEN_COURSE_PAGE.test(c.rest)); }
  function loginUrl(next) { return HUB + "login.html?next=" + encodeURIComponent(next || location.href); }

  /* عدّاد التجربة (Trials.gs): رقم عشوائي للجهاز بس، بلا أي معلومة شخصية */
  var VID_KEY = "sc_vid", VID_DONE = "sc_vid_done";
  function visitorId() {
    var v = ""; try { v = localStorage.getItem(VID_KEY) || ""; } catch (e) {}
    if (!/^v_[a-z0-9]{8,24}$/.test(v)) {
      v = "v_" + (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)).slice(0, 16);
      try { localStorage.setItem(VID_KEY, v); } catch (e) {}
    }
    return v;
  }
  function trialPing(event) {
    if (!window.SCAuth) return;
    var c = coursePart(location); if (!c) return;
    var once = "sc_tp_" + c.course + "_" + event;
    try { if (sessionStorage.getItem(once)) return; sessionStorage.setItem(once, "1"); } catch (e) {}
    SCAuth.api("trialPing", { vid: visitorId(), course_id: c.course, event: event }).catch(function () {});
  }
  function trialConverted() {
    var v = "", done = "";
    try { v = localStorage.getItem(VID_KEY) || ""; done = localStorage.getItem(VID_DONE) || ""; } catch (e) {}
    if (!v || done) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    SCAuth.api("trialConverted", { token: s.token, vid: v }).then(function (res) {
      if (res && res.ok) try { localStorage.setItem(VID_DONE, "1"); } catch (e) {}
    }).catch(function () {});
  }

  /* نافذة «سجّل دخولك» لما الزائر يضغط على قسم مقفول من المقرر */
  var gate = null, gateBack = null;
  function openGate(href) {
    var dest = new URL(href, location.href), c = coursePart(dest) || {};
    var nCh = /^chapters\/chapter-(\d+)-/.exec(c.rest || ""), n = nCh ? +nCh[1] : 0;
    var done = false;
    try { done = typeof window.getChapterState === "function" && !!window.getChapterState("ch1").passed; } catch (e) {}
    var title = (n === 2 && done) ? "🎉 خلصت الفصل الأول!" : n === 2 ? "جاهز للفصل التاني؟"
              : n > 2 ? "سجّل دخولك لتكمل المادة" : "سجّل دخولك لتفتح هالقسم";
    var text = "كل المقررات والتسجيل مجانيين. سجّل دخولك مشان تنحفظ تقدّمك بالمادة ولوين وصلت بالدراسة، وتكمل باقي الفصول. بياخد دقيقة: إيميلك وبس.";
    if (!gate) {
      gate = document.createElement("div"); gate.className = "scs-gate"; gate.hidden = true;
      gate.innerHTML = '<div class="scs-gbox" role="dialog" aria-modal="true" aria-labelledby="scs-gt">' +
        '<button class="scs-gx" type="button" aria-label="إغلاق">×</button><div class="scs-gfree">✨ مجاني 100%</div>' +
        '<h2 id="scs-gt"></h2><p></p><a class="scs-gbtn" href="#">🔑 سجّل مجاناً</a>' +
        '<span class="scs-gsmall" style="margin:8px 0 0">بلا كلمة سر، وبلا أي دفع</span>' +
        '<button class="scs-gno" type="button">مو هلأ</button></div>';
      document.body.appendChild(gate);
      var close = function () { gate.hidden = true; if (gateBack) try { gateBack.focus(); } catch (e) {} };
      gate.querySelector(".scs-gx").onclick = close; gate.querySelector(".scs-gno").onclick = close;
      gate.addEventListener("click", function (e) { if (e.target === gate) close(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !gate.hidden) close(); });
    }
    gate.querySelector("h2").textContent = title;
    gate.querySelector("p").textContent = text;
    gate.querySelector(".scs-gbtn").href = loginUrl(dest.href);
    gateBack = document.activeElement; gate.hidden = false;
    gate.querySelector(".scs-gbtn").focus();
  }
  function watchCourseLinks() {
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("is-guest")) return;
      var a = e.target.closest && e.target.closest("a[href]"); if (!a) return;
      var href = a.getAttribute("href"); if (!href || href.charAt(0) === "#") return;
      var u; try { u = new URL(href, location.href); } catch (er) { return; }
      if (u.origin !== location.origin) return;
      var c = coursePart(u); if (!c || OPEN_COURSE_PAGE.test(c.rest)) return;
      e.preventDefault(); openGate(u.href);
    }, true);
  }

  /* للزائر: الفصول المقفولة بتصير «🔑 سجّل دخول · مجاناً» وبتفتح نافذة الدخول (للمسجّل بتضل «مقفول» = لازم ينجح بالقبل) */
  function markLockedForGuest() {
    var base = (location.pathname.match(/^(.*\/courses\/[A-Za-z0-9_\-]+\/)/) || [])[1] || "";
    function chHref(n) { return base + "chapters/chapter-" + n + "-lesson.html"; }
    function apply() {
      document.querySelectorAll(".chapter-card.locked:not(.scs-lk)").forEach(function (c) {
        var n = (/(\d+)/.exec((c.querySelector(".num") || {}).textContent || "") || [])[1];
        var st = c.querySelector(".stamp"); if (!n || !st) return;
        c.classList.add("scs-lk"); c.setAttribute("role", "link"); c.tabIndex = 0;
        st.innerHTML = '🔑 سجّل دخول <span class="scs-free">مجاناً</span>';
        var go = function () { openGate(chHref(n)); };
        c.addEventListener("click", go);
        c.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
      });
      document.querySelectorAll(".sidebar-link.locked:not(.scs-lk)").forEach(function (l) {
        var n = (/^\s*(\d+)\./.exec(l.textContent.replace(/^[^\d]*/, "")) || [])[1]; if (!n) return;
        l.classList.add("scs-lk"); l.title = "سجّل دخول مجاناً لتكمل";
        var ic = l.querySelector(".sb-icon"); if (ic) ic.textContent = "🔑";
        var f = document.createElement("span"); f.className = "scs-free"; f.textContent = "مجاناً"; l.appendChild(f);
        l.addEventListener("click", function () { openGate(chHref(n)); });
      });
      var ch = document.getElementById("chapters");
      if (ch && !document.querySelector(".scs-strip")) {
        var s = document.createElement("div"); s.className = "scs-strip";
        s.innerHTML = '📚 هالمادة <b class="scs-free">مجانية بالكامل</b> ' +
          '<a href="' + esc(loginUrl()) + '">سجّل دخولك مجاناً</a> لتنحفظ تقدّمك وتكمل لآخرها.';
        ch.insertBefore(s, ch.firstChild);
      }
    }
    apply();
    try { new MutationObserver(apply).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }

  /* زائر بدون حساب (بالصفحات المفتوحة بس): زر دخول بالشريط بدل الأيقونات */
  function showGuest(opts) {
    var bar = document.querySelector(".topbar");
    if (!bar) { bar = document.createElement("div"); bar.className = "topbar"; document.body.insertBefore(bar, document.body.firstChild); }
    if (!bar.querySelector(".scs-guest")) {
      var c = document.createElement("div"); c.className = "scs-cluster scs-guest";
      var trial = isTrialPage();
      c.innerHTML = '<a class="scs-login" href="' + esc(trial ? loginUrl() : HUB + "login.html") + '">🔑 سجّل مجاناً</a>';
      bar.appendChild(c);
    }
    document.body.classList.add("is-guest");
    document.body.classList.remove("guard");
    if (isTrialPage()) { watchCourseLinks(); trialPing("view"); markLockedForGuest(); }
    if (opts.guest) opts.guest();
  }

  function init(opts) {
    opts = opts || {};
    onDom(function () {
      var open = opts.guest || isTrialPage();
      if (open && window.SCAuth) {
        var s0 = SCAuth.getSession();
        if (!s0 || !s0.token) return showGuest(opts);
      }
      build(opts);
      if (!window.SCAuth) { document.body.classList.remove("guard"); return; }
      var onInvalid = open ? function () { location.reload(); } : null;   // الجلسة انتهت → منرجع نفتح الصفحة كزائر
      SCAuth.requireLogin(function (user) {
        // ما وافق على آخر نسخة من الخصوصية → بنوديه لخطوة الموافقة بصفحة الدخول وبيرجع لهون بعدها
        var need = Number((window.SC_CONFIG || {}).TERMS_VERSION) || 0;
        if (need && (Number(user.terms) || 0) < need) {
          document.body.classList.add("guard");
          location.replace(HUB + "login.html?next=" + encodeURIComponent(location.href));
          return;
        }
        setUser(user);
        flushPendingStars();
        trialConverted();
        loadNotifs();
        loadTicker();
        if (opts.onReady) opts.onReady(user);
      }, onInvalid);
    });
  }

  /* ---------- النجوم: إشعار صغير + نجوم الامتحانات ---------- */
  function toast(text) {
    var t = document.createElement("div"); t.className = "scs-toast out"; t.textContent = text;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.remove("out"); });
    setTimeout(function () { t.classList.add("out"); setTimeout(function () { t.remove(); }, 500); }, 3200);
  }
  /** بتنستدعى من app.js لما يخلص امتحان: exam = "ch3" أو "final" */
  var PENDING_KEY = "sc_pending_stars";
  function readPending() { try { return JSON.parse(localStorage.getItem(PENDING_KEY) || "[]") || []; } catch (e) { return []; } }
  function writePending(l) { try { if (l.length) localStorage.setItem(PENDING_KEY, JSON.stringify(l)); else localStorage.removeItem(PENDING_KEY); } catch (e) {} }
  /* زائر نجح بامتحان الفصل الأول: منحفظ النتيجة عالجهاز، وبتنحسب نجومها أول ما يسجّل */
  function flushPendingStars() {
    var l = readPending(); if (!l.length) return;
    writePending([]);
    l.forEach(function (x) { sendExam(x.course_id, x.exam, x.score); });
  }
  function examDone(exam, score) {
    if (!window.SCAuth || !(score >= 90)) return;
    var m = /\/courses\/([A-Za-z0-9_\-]+)\//.exec(location.pathname); if (!m) return;
    var s = SCAuth.getSession();
    if (!s || !s.token) {
      var l = readPending().filter(function (x) { return !(x.course_id === m[1] && x.exam === String(exam || "")); });
      l.push({ course_id: m[1], exam: String(exam || ""), score: score }); writePending(l);
      onDom(function () { toast("⭐ برافو! سجّل مجاناً لتنحفظلك نجوم هالامتحان"); });
      if (String(exam) === "ch1") trialPing("pass");
      return;
    }
    sendExam(m[1], exam, score);
  }
  function sendExam(course, exam, score) {
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    SCAuth.api("examPassed", { token: s.token, course_id: course, exam: String(exam || ""), score: score }).then(function (res) {
      if (!res || !res.ok || !res.granted) return;
      try { sessionStorage.removeItem(NOTIF_KEY); } catch (e) {}
      if (res.total != null) setStars(res.total);
      onDom(function () { toast("⭐ +" + res.granted + (res.granted === 1 ? " نجمة" : " نجوم") + " — برافو!"); });
    }).catch(function () {});
  }

  window.SCShell = { init: init, setStars: setStars, toast: toast };
  window.SCStars = { examDone: examDone };
})();
