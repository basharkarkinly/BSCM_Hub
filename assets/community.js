/*
 * Support Channel — مربع "مجتمعنا": عدد المشتركين + أول 5 بالنجوم ⭐
 * بيشتغل حتى قبل تسجيل الدخول (index.html) وبعده (welcome.html).
 *
 *   <section id="community" class="community" hidden></section>
 *   <script src="assets/community.js"></script>   (بعد config.js و auth.js)
 *
 * البيانات من السيرفر (getPublicStats) وبتنحفظ عالجهاز 10 دقايق حتى ما نطلبها بكل فتحة.
 */
(function () {
  var KEY = "sc_public_stats", TTL = 10 * 60 * 1000;
  var MEDALS = ["🥇", "🥈", "🥉", "4", "5"];

  function esc(t) { return (t == null ? "" : String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
  function num(n) { try { return Number(n).toLocaleString("en-US"); } catch (e) { return String(n); } }
  function starsWord(n) { return n === 1 ? "نجمة" : (n === 2 ? "نجمتين" : (n >= 3 && n <= 10 ? "نجوم" : "نجمة")); }

  function read() {
    try { var c = JSON.parse(localStorage.getItem(KEY) || "null"); if (c && Date.now() - c.t < TTL) return c.d; } catch (e) {}
    return null;
  }
  function write(d) { try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {} }

  function render(el, d) {
    var top = (d.top || []).map(function (u, i) {
      return '<li class="cm-row' + (i < 3 ? " cm-podium" : "") + '"><span class="cm-rank" aria-hidden="true">' + MEDALS[i] + '</span>' +
        '<span class="cm-name">' + esc(u.name) + (u.level && u.level.icon ? ' <span class="cm-lvl" title="المستوى ' + u.level.n + ': ' + esc(u.level.name) + '">' + esc(u.level.icon) + '</span>' : '') + '</span><span class="cm-stars">' + num(u.stars) + ' <small>' + starsWord(u.stars) + '</small> ⭐</span></li>';
    }).join("");
    el.innerHTML =
      '<div class="cm-members">' +
        '<div class="cm-num">' + num(d.members || 0) + '</div>' +
        '<div class="cm-lbl">طالب مشترك بالمنصة 👥</div>' +
      '</div>' +
      '<div class="cm-top">' +
        '<h3>⭐ الأوائل بالنجوم</h3>' +
        (top ? '<ol class="cm-list">' + top + '</ol>' : '<p class="cm-empty">لسا ما في حدا عندو نجوم — كون أول اسم هون!</p>') +
        '<p class="cm-how">النجوم بتجي من مساعدة غيرك: جواب بيحل مشكلة، صوت 👍، نجاح بالامتحانات، ودعوة أصحابك. ومع النجوم بيطلع مستواك 🌱→👑</p>' +
      '</div>';
    el.hidden = false;
  }

  function load() {
    var el = document.getElementById("community");
    if (!el) return;
    var cached = read();
    if (cached) render(el, cached);
    if (cached || !window.SCAuth || !SCAuth.api) return;
    SCAuth.api("getPublicStats", {}).then(function (res) {
      if (res && res.ok) { write(res); render(el, res); }
    }).catch(function () { /* بدون اتصال: المربع بيضل مخفي */ });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load);
  else load();
})();
