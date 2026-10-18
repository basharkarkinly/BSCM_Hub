/* سلوغان الصفحة الرئيسية:
   1) الكلمة المتبدلة «حدا» ← جارك / زميلك ...
   2) «إيد وحدة ما بتزقف»: إيد لحالها بتحاول تصفّق وما بتزبط، بتجي التانية وبيصفّقو + نجوم. والزائر فيه يصفّق بالضغط.
   3) خلفية شبكة تفاعلية: نقاط (ناس) بتتوصل ببعض، والماوس/الإصبع بينضم للشبكة، وكل تصفيقة بتبعت موجة.
   لو JS ما اشتغل، النص بيضل ثابت وسليم. وبيحترم prefers-reduced-motion. */
(function () {
  var root = document.getElementById("slogan");
  if (!root) return;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rnd = function (a, b) { return a + Math.random() * (b - a); };
  var hero = root.closest(".hero");
  var net = null;

  /* ---------------- 1) الكلمة المتبدلة ---------------- */
  (function rotatingWord() {
    if (reduce) return;
    var words = ["حدا", "جارك", "زميلك", "صاحبك", "طالب"];
    var holders = root.querySelectorAll(".sg-word");
    var cells = [];
    Array.prototype.forEach.call(holders, function (h) {
      h.setAttribute("aria-hidden", "true");
      h.textContent = "";
      cells.push(words.map(function (w) {
        var s = document.createElement("span"); s.textContent = w; h.appendChild(s); return s;
      }));
    });
    var cur = 0;
    function set(i, on) { cells.forEach(function (sp) { sp[i].className = on ? "on" : ""; }); }
    function out(i) {
      cells.forEach(function (sp) { sp[i].className = "out"; });
      setTimeout(function () { cells.forEach(function (sp) { if (sp[i].className === "out") sp[i].className = ""; }); }, 600);
    }
    set(0, true);
    setTimeout(function () {
      setInterval(function () { out(cur); cur = (cur + 1) % words.length; set(cur, true); }, 3000);
    }, 3600);
  })();

  /* ---------------- 2) الإيدين ---------------- */
  var hands = document.getElementById("sg-hands");
  var hint = document.getElementById("sg-hint");
  var notWord = root.querySelector(".sg-not");
  var claps = 0, busy = false;

  function burst() {
    if (!hands) return;
    var r = root.getBoundingClientRect(), h = hands.getBoundingClientRect();
    var cx = h.left + h.width / 2 - r.left, cy = h.top + h.height / 2 - r.top;
    var colors = ["#FFD27A", "#FF9F1C", "#7FE5DA", "#1FB6A8", "#ffffff"];
    var n = window.innerWidth < 520 ? 10 : 14;
    for (var i = 0; i < n; i++) {
      var s = document.createElement("i");
      var spark = Math.random() < 0.6, size = spark ? rnd(9, 16) : rnd(4, 7);
      var ang = rnd(0, Math.PI * 2), dist = rnd(40, 95);
      s.className = "sg-star sg-burst" + (spark ? " spark" : "");
      s.style.cssText = "left:" + cx + "px;top:" + cy + "px;width:" + size + "px;height:" + size + "px;" +
        "background:" + colors[(Math.random() * colors.length) | 0] + ";border-radius:" + (spark ? "0" : "50%") + ";" +
        "--dx:" + Math.cos(ang) * dist + "px;--dy:" + Math.sin(ang) * dist + "px;animation-delay:" + rnd(0, .08) + "s;";
      root.appendChild(s);
      setTimeout(function (el) { el.remove(); }.bind(null, s), 1100);
    }
    if (notWord) { notWord.classList.remove("glow"); void notWord.offsetWidth; notWord.classList.add("glow"); }
    if (net) net.ripple(h.left + h.width / 2, h.top + h.height / 2);
  }

  function clap() {
    if (!hands) return;
    hands.classList.remove("clap"); void hands.offsetWidth; hands.classList.add("clap");
    setTimeout(burst, 150);
    setTimeout(function () { hands.classList.remove("clap"); }, 340);
  }

  function joke() {
    var old = root.querySelector(".sg-joke"); if (old) old.remove();
    var j = document.createElement("div");
    j.className = "sg-joke"; j.setAttribute("role", "status");
    j.textContent = "إيدينا وجعونا 😅 بس الدعم ما بيوقف";
    root.appendChild(j);
    setTimeout(function () { j.remove(); }, 3700);
  }

  if (hands) {
    if (reduce) {
      hands.classList.add("joined");
      if (hint) hint.classList.add("on");
    } else {
      // المشهد الأول: بعد ما يطلع السطر التالت
      setTimeout(function () {
        busy = true;
        hands.classList.add("solo", "puzzled");                 // إيد لحالها… ؟
        setTimeout(function () {
          hands.classList.remove("solo", "puzzled");
          hands.classList.add("joined");                        // وصلت التانية
          setTimeout(function () {
            clap();                                             // 👏
            setTimeout(function () { clap(); }, 420);
            setTimeout(function () {
              hands.classList.add("idle"); busy = false;
              if (hint) hint.classList.add("on");
            }, 900);
          }, 520);
        }, 1700);
      }, 2900);
    }

    hands.addEventListener("click", function () {
      if (busy) return;
      if (!hands.classList.contains("joined")) hands.classList.add("joined");
      hands.classList.remove("idle");
      if (reduce) { burst(); } else { clap(); }
      setTimeout(function () { hands.classList.add("idle"); }, 380);
      claps++;
      if (hint) hint.classList.remove("on");
      if (claps === 10 || (claps > 10 && claps % 25 === 0)) joke();
    });
  }

  /* ---------------- 3) الشبكة التفاعلية ---------------- */
  if (!hero || !window.HTMLCanvasElement) return;
  var cv = document.createElement("canvas");
  cv.className = "sg-net"; cv.setAttribute("aria-hidden", "true");
  hero.classList.add("has-net");
  hero.insertBefore(cv, hero.firstChild);
  var ctx = cv.getContext("2d");
  if (!ctx) return;

  var W = 0, H = 0, dpr = 1, dots = [], ripples = [];
  var pointer = { x: 0, y: 0, on: false };
  var LINK = 130, REACH = 170;
  var COLORS = [[255, 255, 255], [255, 255, 255], [255, 210, 122], [127, 229, 218]];

  function size() {
    var r = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var want = Math.max(16, Math.min(55, Math.round(W * H / 21000)));
    while (dots.length < want) dots.push(mk());
    if (dots.length > want) dots.length = want;
    dots.forEach(function (d) { if (d.x > W) d.x = rnd(0, W); if (d.y > H) d.y = rnd(0, H); });
  }
  function mk() {
    return { x: rnd(0, W), y: rnd(0, H), vx: rnd(-.22, .22), vy: rnd(-.22, .22),
             r: rnd(1.2, 2.6), c: COLORS[(Math.random() * COLORS.length) | 0], glow: 0 };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var i, j, d, e, dx, dy, dist, a;
    // تحديث الحركة
    for (i = 0; i < dots.length; i++) {
      d = dots[i];
      if (!reduce) {
        if (pointer.on) {                                       // النقاط القريبة بتقرّب شوي منك
          dx = pointer.x - d.x; dy = pointer.y - d.y; dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REACH && dist > 30) { d.vx += dx / dist * .012; d.vy += dy / dist * .012; }
        }
        d.vx *= .992; d.vy *= .992;
        var sp = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        if (sp < .08) { d.vx += rnd(-.03, .03); d.vy += rnd(-.03, .03); }
        if (sp > .9) { d.vx *= .9; d.vy *= .9; }
        d.x += d.vx; d.y += d.vy;
        if (d.x < -10) d.x = W + 10; else if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10; else if (d.y > H + 10) d.y = -10;
      }
      if (d.glow > 0) d.glow = Math.max(0, d.glow - .018);
    }
    // موجات التصفيق
    for (i = ripples.length - 1; i >= 0; i--) {
      var rp = ripples[i]; rp.r += 5.5; rp.a -= .016;
      if (rp.a <= 0) { ripples.splice(i, 1); continue; }
      ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,210,122," + (rp.a * .5) + ")"; ctx.lineWidth = 1.5; ctx.stroke();
      for (j = 0; j < dots.length; j++) {
        e = dots[j]; dx = e.x - rp.x; dy = e.y - rp.y;
        if (Math.abs(Math.sqrt(dx * dx + dy * dy) - rp.r) < 14) e.glow = 1;
      }
    }
    // الخطوط بين الناس
    ctx.lineWidth = 1;
    for (i = 0; i < dots.length; i++) {
      d = dots[i];
      for (j = i + 1; j < dots.length; j++) {
        e = dots[j]; dx = d.x - e.x; dy = d.y - e.y;
        if (dx > LINK || dx < -LINK || dy > LINK || dy < -LINK) continue;
        dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK) {
          a = (1 - dist / LINK) * (.16 + Math.max(d.glow, e.glow) * .4);
          ctx.strokeStyle = (d.glow || e.glow) ? "rgba(255,210,122," + a + ")" : "rgba(201,211,227," + a + ")";
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y); ctx.stroke();
        }
      }
      if (pointer.on) {                                         // إنت كمان جزء من الشبكة
        dx = d.x - pointer.x; dy = d.y - pointer.y; dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REACH) {
          ctx.strokeStyle = "rgba(127,229,218," + ((1 - dist / REACH) * .55) + ")";
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
        }
      }
    }
    // النقاط
    for (i = 0; i < dots.length; i++) {
      d = dots[i];
      var c = d.glow > 0 ? [255, 210, 122] : d.c;
      ctx.fillStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (.45 + d.glow * .55) + ")";
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r + d.glow * 1.6, 0, Math.PI * 2); ctx.fill();
    }
    if (pointer.on) {
      ctx.fillStyle = "rgba(127,229,218,.9)";
      ctx.beginPath(); ctx.arc(pointer.x, pointer.y, 3, 0, Math.PI * 2); ctx.fill();
    }
  }

  var running = false, visible = true, raf = 0;
  function loop() { if (!running) return; draw(); raf = requestAnimationFrame(loop); }
  function start() { if (running || reduce || !visible || document.hidden) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  function local(ev) {
    var r = hero.getBoundingClientRect();
    return { x: ev.clientX - r.left, y: ev.clientY - r.top };
  }
  if (!reduce) {
    hero.addEventListener("pointermove", function (ev) { var p = local(ev); pointer.x = p.x; pointer.y = p.y; pointer.on = true; });
    hero.addEventListener("pointerdown", function (ev) { var p = local(ev); pointer.x = p.x; pointer.y = p.y; pointer.on = true; });
    hero.addEventListener("pointerleave", function () { pointer.on = false; });
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; visible ? start() : stop(); }).observe(hero);
    }
  }
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { size(); if (reduce) draw(); }, 150); });

  net = {
    ripple: function (cx, cy) {
      var r = hero.getBoundingClientRect();
      ripples.push({ x: cx - r.left, y: cy - r.top, r: 10, a: 1 });
      if (reduce) { ripples.length = 0; }
    }
  };

  size();
  if (reduce) draw(); else start();
})();
