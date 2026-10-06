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
 *   🏠 رجوع لكل المقررات · 🔔 الإشعارات · 🚪 خروج · "أهلاً + الاسم" (على الشاشات العريضة).
 * - على الموبايل: أيقونات فقط. خيار greet:true بيعرض شريط "أهلاً الاسم" رفيع تحت الشريط العلوي (للصفحة الرئيسية للمقرر).
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
    ".scs-hello{font-size:.88rem;font-weight:700;opacity:.92;margin-inline-end:6px;white-space:nowrap}",
    ".scs-ico{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;padding:0;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.28);color:#fff;font:inherit;font-size:1.08rem;line-height:1;cursor:pointer;text-decoration:none;-webkit-tap-highlight-color:transparent}",
    ".scs-ico:hover{background:rgba(255,255,255,.2)}",
    ".scs-n{position:absolute;top:-5px;left:-5px;min-width:19px;height:19px;padding:0 5px;border-radius:999px;background:var(--amber,#FF9F1C);color:#1A1200;font-size:.7rem;font-weight:800;line-height:19px;text-align:center}",
    ".scs-n[hidden]{display:none}",
    ".scs-greet{display:none;padding:9px 18px;font-size:.92rem;font-weight:700;color:var(--ink,#0F1C2E);background:#F5F7FB;border-bottom:1px solid #E3E7F0;text-align:right}",
    "@media (max-width:700px){.scs-hello{display:none}.scs-greet.on{display:block}.topbar{padding:10px 14px;gap:8px 10px}.topbar .brand{flex:1 1 calc(100% - 140px);min-width:0;font-size:.88rem;line-height:1.35}.topbar nav{flex:1 1 100%;order:2}.scs-ico{width:38px;height:38px;font-size:1rem}.scs-cluster{gap:6px;margin-inline-start:0}}",
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
      '<span class="scs-hello" id="scs-hello"></span>' +
      (onHub ? "" : '<a class="scs-ico" id="scs-home" href="' + esc(homeHref) + '" aria-label="كل المقررات" title="كل المقررات">🏠</a>') +
      '<button class="scs-ico" id="scs-bell" type="button" aria-label="الإشعارات" title="الإشعارات">🔔<span class="scs-n" id="scs-n" hidden>0</span></button>' +
      '<button class="scs-ico" id="scs-out" type="button" aria-label="تسجيل خروج" title="تسجيل خروج">🚪</button>';
    bar.appendChild(c);

    if (opts.greet) {
      var g = document.createElement("div"); g.className = "scs-greet"; g.id = "scs-greet";
      bar.parentNode.insertBefore(g, bar.nextSibling);
    }

    var ov = document.createElement("div"); ov.className = "scs-ov"; ov.hidden = true;
    ov.innerHTML = '<div class="scs-panel" role="dialog" aria-modal="true" aria-labelledby="scs-ttl">' +
      '<div class="scs-head"><h2 id="scs-ttl">الإشعارات</h2><button class="scs-x" id="scs-close" type="button" aria-label="إغلاق">×</button></div>' +
      '<div id="scs-body"></div></div>';
    document.body.appendChild(ov);

    els = {
      hello: c.querySelector("#scs-hello"), bell: c.querySelector("#scs-bell"), n: c.querySelector("#scs-n"),
      out: c.querySelector("#scs-out"), greet: document.getElementById("scs-greet"),
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
    var text = first ? "أهلاً " + first : "أهلاً بك";
    if (els.hello) els.hello.textContent = text;
    if (els.greet) { els.greet.textContent = text + " 👋"; els.greet.classList.add("on"); }
  }

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
        if (opts.onReady) opts.onReady(user);
      });
    });
  }

  window.SCShell = { init: init };
})();
