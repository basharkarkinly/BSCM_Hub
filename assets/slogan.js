/* سلوغان الصفحة الرئيسية: نجوم + كلمة متبدلة. لو JS ما اشتغل، النص بيضل ثابت وسليم. */
(function () {
  var root = document.getElementById("slogan");
  if (!root) return;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rnd = function (a, b) { return a + Math.random() * (b - a); };
  var COLORS = ["#ffffff", "#ffffff", "#FFD27A", "#7FE5DA"];

  function star(parent, opts) {
    var s = document.createElement("i");
    s.className = "sg-star" + (opts.spark ? " spark" : "");
    var size = opts.size;
    s.style.cssText =
      "width:" + size + "px;height:" + size + "px;left:" + opts.x + "%;top:" + opts.y + "%;" +
      "background:" + opts.color + ";" +
      "animation-duration:" + opts.dur + "s;animation-delay:-" + opts.delay + "s;";
    parent.appendChild(s);
  }

  // 1) حقل النجوم خلف النص
  var field = document.getElementById("sg-stars");
  if (field) {
    var n = window.innerWidth < 520 ? 14 : 26;
    for (var i = 0; i < n; i++) {
      var spark = Math.random() < 0.45;
      star(field, {
        spark: spark, size: spark ? rnd(7, 13) : rnd(2, 4.5),
        x: rnd(0, 100), y: rnd(0, 100),
        color: COLORS[(Math.random() * COLORS.length) | 0],
        dur: rnd(2.6, 5.5), delay: rnd(0, 5)
      });
    }
  }

  // 2) لمعات صغيرة حول كلمة «دعم»
  var heart = document.getElementById("sg-heart");
  if (heart) {
    [[-14, -30], [102, -22], [88, 98], [-6, 92]].forEach(function (p, k) {
      star(heart, { spark: true, size: rnd(8, 12), x: p[0], y: p[1], color: k % 2 ? "#FFD27A" : "#ffffff", dur: rnd(2, 3), delay: rnd(0, 2) });
    });
  }

  // 3) الكلمة المتبدلة «حدا» ← جارك / زميلك / صاحبك / طالب
  if (reduce) return;
  var words = ["حدا", "جارك", "زميلك", "صاحبك", "طالب"];
  var holders = root.querySelectorAll(".sg-word");
  var cells = [];
  Array.prototype.forEach.call(holders, function (h) {
    h.setAttribute("aria-hidden", "true");
    h.textContent = "";
    var spans = words.map(function (w) {
      var s = document.createElement("span"); s.textContent = w; h.appendChild(s); return s;
    });
    cells.push(spans);
  });
  var cur = 0;
  function set(i, on) { cells.forEach(function (sp) { sp[i].className = on ? "on" : ""; }); }
  function out(i) {
    cells.forEach(function (sp) { sp[i].className = "out"; });
    setTimeout(function () { cells.forEach(function (sp) { if (sp[i].className === "out") sp[i].className = ""; }); }, 600);
  }
  set(0, true);
  setTimeout(function () {
    setInterval(function () {
      out(cur); cur = (cur + 1) % words.length; set(cur, true);
    }, 3000);
  }, 3600);
})();
