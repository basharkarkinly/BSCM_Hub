// منطق الجلسة المشترك بين صفحة الدخول وباقي الصفحات
(function () {
  var KEY = "sc_session";

  // جذر الهب (المجلد اللي فيو index.html) محسوب من مسار auth.js نفسو، فيشتغل من أي عمق (مثل /courses/BMN401/)
  var HUB = "";
  try { HUB = new URL("../", document.currentScript.src).href; } catch (e) { HUB = ""; }
  function hubUrl(page) { return (HUB || "") + page; }

  function api(action, payload) {
    return fetch(SC_CONFIG.API_URL, {
      method: "POST",
      // text/plain يتجنب طلب preflight اللي ما بيدعمو Apps Script
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({ action: action }, payload || {}))
    }).then(function (r) { return r.json(); });
  }

  function getSession() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; }
  }
  function saveSession(s) {
    // ok_at = وقت آخر مرة السيرفر أكّد فيها الجلسة (بنستخدمو للمسار السريع بـ requireLogin)
    try { s.ok_at = s.ok_at || Date.now(); localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }
  function clearSession() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  // يرجّع: {state:"valid", user} | {state:"invalid"} | {state:"offline"}
  function check() {
    var s = getSession();
    if (!s || !s.token) return Promise.resolve({ state: "invalid" });
    return api("checkSession", { token: s.token }).then(function (res) {
      if (res && res.ok) {
        saveSession({ token: s.token, email: res.user.email, name: res.user.name });
        return { state: "valid", user: res.user };
      }
      // نمسح الجلسة فقط إذا رفضها السيرفر نهائياً. أي خطأ مؤقت (SERVER_ERROR وغيره) ما يطلّع المستخدم.
      if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED" || res.error === "BLOCKED")) {
        clearSession();
        return { state: "invalid" };
      }
      return { state: "offline" };
    }).catch(function () { return { state: "offline" }; });
  }

  function logout() {
    var s = getSession();
    clearSession();
    var done = function () { location.href = hubUrl("index.html"); };
    if (!s || !s.token) return done();
    api("logout", { token: s.token }).then(done, done);
  }

  var FRESH_MS = 6 * 3600 * 1000;    // خلال هالمدة بعد آخر تحقق ناجح: الصفحة بتفتح فوراً بدون انتظار السيرفر
  var RECHECK_MS = 10 * 60 * 1000;   // وإذا مرّ أكتر من هالمدة بنتحقق بالخلفية (بدون ما نأخّر الصفحة)

  function toLogin() {
    location.replace(hubUrl("index.html") + "?next=" + encodeURIComponent(location.href));
  }

  // للصفحات المحمية
  function requireLogin(onReady) {
    var s = getSession();
    var age = (s && s.token && s.ok_at) ? Date.now() - s.ok_at : Infinity;

    // مسار سريع: جلسة تأكدنا منها مؤخراً → الصفحة تظهر فوراً، والتحقق (إذا لزم) بالخلفية
    if (s && s.token && s.email && age < FRESH_MS) {
      document.body.classList.remove("guard");
      if (onReady) onReady({ email: s.email, name: s.name });
      if (age > RECHECK_MS) check().then(function (r) { if (r.state === "invalid") toLogin(); });
      return;
    }

    // مسار عادي: بنستنى السيرفر
    check().then(function (r) {
      if (r.state === "valid") {
        document.body.classList.remove("guard");
        if (onReady) onReady(r.user);
      } else if (r.state === "invalid") {
        toLogin();
      } else {
        document.body.classList.remove("guard");
        var m = document.getElementById("offline-msg");
        if (m) m.hidden = false;
      }
    });
  }

  window.SCAuth = {
    api: api, getSession: getSession, saveSession: saveSession,
    clearSession: clearSession, check: check, logout: logout, requireLogin: requireLogin,
    hubUrl: hubUrl, toLogin: toLogin
  };
})();
