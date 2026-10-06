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
 * - تحت الشريط العلوي: شريط أبيض فيو "أهلاً الاسم" وأخبار متحرّكة (من تبويب ticker بالشيت). مو ثابت: بيطلع مع التمرير.
 *   بالهب بيظهر الشريط بس إذا في أخبار. greet:false بيلغيه.
 * - إذا ما في .topbar بالصفحة بينشئ واحد.
 * - خيارات: { greet:false, onReady:function(user){} }
 */
(function () {
  if (window.SCShell) return;

  var SELF = document.currentScript && document.currentScript.src || "";
  var HUB = SELF ? new URL("../", SELF).href : "";            // جذر الهب (فيو welcome.html)
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
    ".scs-sh{flex:none;padding:0 18px;font-weight:800;color:var(--ink,#0F1C2E);white-space:nowrap;position:relative;z-index:1;background:#F5F7FB}",
    ".scs-strip.nohello .scs-sh{display:none}",
    ".scs-sa{flex:1;min-width:0;overflow:hidden;color:#3A465A;font-weight:600;-webkit-mask-image:linear-gradient(to right,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)}",
    ".scs-tk{display:flex;width:max-content;direction:rtl;animation:scsTk linear infinite;animation-duration:var(--scs-d,20s)}",
    ".scs-tk:hover,.scs-tk.hold{animation-play-state:paused}",
    ".scs-g{display:flex;align-items:center;flex:none}",
    ".scs-it{white-space:nowrap}",
    ".scs-sep{flex:none;width:7px;height:7px;margin:0 26px;background:var(--amber,#FF9F1C);transform:rotate(45deg);border-radius:1px}",
    "@keyframes scsTk{from{transform:translateX(0)}to{transform:translateX(var(--scs-w,0px))}}",
    "@media (prefers-reduced-motion:reduce){.scs-tk{animation:none}.scs-sa{overflow-x:auto;-webkit-mask-image:none;mask-image:none}}",
    "@media (max-width:700px){.topbar{padding:10px 14px;gap:8px 10px}.topbar .brand{flex:1 1 calc(100% - 140px);min-width:0;font-size:.88rem;line-height:1.35}.topbar nav{flex:1 1 100%;order:2}.scs-ico{width:38px;height:38px;font-size:1rem}.scs-cluster{gap:6px;margin-inline-start:0}}",
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
    ".scs-empty{text-align:center;color:#5B6478;padding:22px 8px;font-size:.92rem}"
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
    var homeHref = HUB + "welcome.html";
    var onHub = false;
    try { onHub = location.pathname === new URL(homeHref).pathname; } catch (e) {}

    c.innerHTML =
      (onHub ? "" : '<a class="scs-ico" id="scs-home" href="' + esc(homeHref) + '" aria-label="كل المقررات" title="كل المقررات">🏠</a>') +
      '<button class="scs-ico" id="scs-bell" type="button" aria-label="الإشعارات" title="الإشعارات">🔔<span class="scs-n" id="scs-n" hidden>0</span></button>' +
      '<button class="scs-ico" id="scs-out" type="button" aria-label="تسجيل خروج" title="تسجيل خروج">🚪</button>';
    bar.appendChild(c);

    if (opts.greet !== false) {
      var sp = document.createElement("div"); sp.className = "scs-strip" + (onHub ? " nohello" : ""); sp.id = "scs-strip";
      sp.innerHTML = '<div class="scs-sh" id="scs-sh"></div><div class="scs-sa" id="scs-sa"></div>';
      if (onHub) sp.hidden = true;   // بالهب بيظهر بس إذا في أخبار (العنوان الكبير فيو "أهلاً" أصلاً)
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
      sh: document.getElementById("scs-sh"), sa: document.getElementById("scs-sa"),
      ov: ov, body: ov.querySelector("#scs-body")
    };

    els.out.addEventListener("click", function () { if (window.SCAuth && window.confirm("تسجيل الخروج؟")) SCAuth.logout(); });
    els.bell.addEventListener("click", openNotifs);
    ov.querySelector("#scs-close").addEventListener("click", closeNotifs);
    ov.addEventListener("click", function (e) { if (e.target === ov) closeNotifs(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !ov.hidden) closeNotifs(); });
  }

  function setUser(user) {
    var first = ((user && user.name) || "").split(" ")[0];
    if (els.sh) els.sh.textContent = (first ? "أهلاً " + first : "أهلاً بك") + " 👋";
  }

  /* ---------- شريط الأخبار ---------- */
  var TK_KEY = "sc_ticker", TK_TTL = 600000, TK_SPEED = 45;   // بكسل بالثانية (ثابتة على كل الشاشات)
  var tkSig = "", tkItems = [], tkFonts = false;

  function renderTicker(items) {
    var strip = els.strip, area = els.sa; if (!strip || !area) return;
    tkItems = items || [];
    if (!tkItems.length) { area.innerHTML = ""; tkSig = ""; if (strip.classList.contains("nohello")) strip.hidden = true; return; }
    strip.hidden = false;
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

  function placeInfo(g) {
    var c = courseMap()[g.course_id];
    if (g.chapter_id === "info") return { label: "نقاش مادة " + g.course_id, url: HOURS_PAGE + "#" + encodeURIComponent(g.course_id) };
    var title = c ? c.title : g.course_id;
    var url = c ? c.url.replace(/\/?$/, "/") + "chapters/chapter-" + g.chapter_id + "-lesson.html" : null;
    return { label: title + " — الفصل " + g.chapter_id, url: url };
  }

  function loadNotifs() {
    var s = SCAuth.getSession(); if (!s || !s.token) return;
    ensureCourses();
    SCAuth.api("getNotifications", { token: s.token }).then(function (res) {
      if (res && res.ok) { notif = res; setBadge(res.unread); }
    }).catch(function () {});
  }

  function renderNotifs() {
    var n = notif, h = "";
    if (!n) { els.body.innerHTML = '<div class="scs-empty">عم نحمّل...</div>'; return; }
    n.announcements.forEach(function (a) {
      h += '<div class="scs-item' + (a.is_new ? " new" : "") + '"><div class="scs-t">📣 ' + esc(a.title) + '</div>' +
           (a.body ? '<div class="scs-d">' + esc(a.body) + '</div>' : "") + '<div class="scs-m">' + esc(ago(a.created_at)) + '</div></div>';
    });
    n.groups.forEach(function (g) {
      var p = placeInfo(g);
      var txt = g.count + (g.count === 1 ? " تعليق جديد" : " تعليقات جديدة") + (g.replies ? " (منها " + g.replies + (g.replies === 1 ? " ردّ" : " ردود") + " عليك)" : "");
      var inner = '<div class="scs-t">💬 ' + esc(p.label) + '</div><div class="scs-d">' + esc(txt) + '</div><div class="scs-m">' + esc(ago(g.latest_at)) + '</div>';
      h += p.url ? '<a class="scs-item new" href="' + esc(p.url) + '">' + inner + '</a>' : '<div class="scs-item new">' + inner + '</div>';
    });
    els.body.innerHTML = h || '<div class="scs-empty">ما في إشعارات جديدة.</div>';
  }

  function openNotifs() {
    els.ov.hidden = false; renderNotifs();
    if (notif && notif.unread > 0) {
      var s = SCAuth.getSession();
      if (s && s.token) SCAuth.api("markSeen", { token: s.token }).catch(function () {});
      setBadge(0);   // الرقم بيختفي، والعناصر الجديدة بتضل مظلّلة حتى تسكّر النافذة
    }
  }
  function closeNotifs() {
    els.ov.hidden = true;
    if (notif) { notif.groups = []; notif.announcements.forEach(function (a) { a.is_new = false; }); notif.unread = 0; }
  }

  /* ---------- الدخول للمكوّن ---------- */
  function init(opts) {
    opts = opts || {};
    onDom(function () {
      build(opts);
      if (!window.SCAuth) { document.body.classList.remove("guard"); return; }
      SCAuth.requireLogin(function (user) {
        setUser(user);
        loadNotifs();
        loadTicker();
        if (opts.onReady) opts.onReady(user);
      });
    });
  }

  window.SCShell = { init: init };
})();
