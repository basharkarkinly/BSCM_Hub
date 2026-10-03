/*
 * Support Channel — ودجت التعليقات المشترك
 * الاستخدام بأي صفحة (على نفس الدومين basharkarkinly.github.io):
 *
 *   <div id="comments"></div>
 *   <script src="https://basharkarkinly.github.io/assets/comments.js"></script>
 *   <script>SCComments.mount(document.getElementById('comments'), { course_id: 'BMN401', chapter_id: '3' });</script>
 *
 * - بيحمّل config.js و auth.js من نفس المجلد تلقائياً إذا ما كانوا محمّلين.
 * - الجلسة بتنقرأ من نفس localStorage (نفس الدومين).
 * - خيار lazy:true بيعرض زر "عرض النقاش" بدل التحميل التلقائي (لتخفيف الطلبات).
 */
(function () {
  if (window.SCComments) return;

  var SELF = document.currentScript && document.currentScript.src || "";
  var BASE = SELF ? new URL("./", SELF).href : "";
  var HUB = SELF ? new URL("../", SELF).href : "/";
  var LIMIT_DEFAULT = 3, MAX_LEN = 500, CACHE_MS = 60000;

  /* ---------- تحميل الاعتماديات ---------- */
  var readyCbs = [], ready = false;
  function loadScript(src, done) {
    var s = document.createElement("script");
    s.src = src; s.onload = done; s.onerror = done;
    document.head.appendChild(s);
  }
  (function boot() {
    var chain = [];
    if (!window.SC_CONFIG) chain.push(BASE + "config.js");
    if (!window.SCAuth) chain.push(BASE + "auth.js");
    (function next() {
      var s = chain.shift();
      if (!s) { ready = true; readyCbs.splice(0).forEach(function (f) { f(); }); return; }
      loadScript(s, next);
    })();
  })();
  function onReady(f) { ready ? f() : readyCbs.push(f); }

  /* ---------- تنسيقات (معزولة بـ .scc) ---------- */
  var css = [
    ".scc{font-family:'Alexandria',system-ui,sans-serif;color:#16232E;line-height:1.7;text-align:right}",
    ".scc *{box-sizing:border-box}",
    ".scc-h{display:flex;align-items:center;gap:8px;font-weight:800;font-size:1rem;margin:0 0 10px}",
    ".scc-c{font-size:.75rem;font-weight:700;color:#5B6478;background:#EEF1F7;border-radius:999px;padding:0 10px}",
    ".scc-box{background:#F5F7FB;border:1px solid #E3E7F0;border-radius:14px;padding:12px}",
    ".scc textarea{width:100%;min-height:74px;resize:vertical;border:1.5px solid #E3E7F0;border-radius:10px;padding:10px 12px;font:inherit;font-size:.92rem;background:#fff;color:inherit}",
    ".scc textarea:focus{outline:none;border-color:#1FB6A8;box-shadow:0 0 0 3px rgba(31,182,168,.18)}",
    ".scc-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:8px;flex-wrap:wrap}",
    ".scc-hint{font-size:.78rem;color:#5B6478}",
    ".scc-btn{border:none;border-radius:999px;padding:8px 20px;font:inherit;font-size:.88rem;font-weight:700;cursor:pointer;background:#FF9F1C;color:#1A1200}",
    ".scc-btn:disabled{opacity:.55;cursor:default}",
    ".scc-btn.sec{background:#fff;border:1.5px solid #E3E7F0;color:#1D2E45}",
    ".scc-link{background:none;border:none;padding:0;font:inherit;font-size:.78rem;font-weight:700;color:#12897E;cursor:pointer}",
    ".scc-link.del{color:#B4402B}",
    ".scc-msg{font-size:.82rem;margin:8px 0 0;min-height:1.2em}",
    ".scc-msg.err{color:#B4402B}",
    ".scc-list{margin-top:14px;display:flex;flex-direction:column;gap:10px}",
    ".scc-item{background:#fff;border:1px solid #E3E7F0;border-radius:12px;padding:10px 12px}",
    ".scc-item.reply{margin:8px 18px 0 0;background:#FAFBFD}",
    ".scc-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:#5B6478}",
    ".scc-name{font-weight:800;color:#0F1C2E;font-size:.86rem}",
    ".scc-you{font-size:.68rem;font-weight:700;color:#12897E;background:#EFFBF8;border:1px solid #BFEDE6;border-radius:999px;padding:0 8px}",
    ".scc-text{margin:4px 0 6px;font-size:.92rem;white-space:pre-wrap;word-break:break-word}",
    ".scc-acts{display:flex;gap:14px}",
    ".scc-login,.scc-empty,.scc-load{text-align:center;color:#5B6478;font-size:.9rem;background:#F5F7FB;border:1px dashed #E3E7F0;border-radius:12px;padding:16px}",
    ".scc-login a{display:inline-block;margin-top:8px;text-decoration:none;font-weight:700;font-size:.88rem;background:#FF9F1C;color:#1A1200;border-radius:999px;padding:8px 20px}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- أدوات ---------- */
  var ERR = {
    EMPTY: "اكتب تعليق أول.",
    TOO_LONG: "التعليق أطول من " + MAX_LEN + " حرف.",
    LIMIT_REACHED: "وصلت للحد الأقصى من التعليقات هون. احذف تعليق لتكتب غيره.",
    BAD_PARENT: "ما قدرنا نلاقي التعليق اللي بدك ترد عليه.",
    BLOCKED: "حسابك غير مفعّل.",
    SERVER_ERROR: "صار خطأ عنا، جرّب بعد شوي.",
    NET: "ما في اتصال بالسيرفر، جرّب مرة تانية.",
    BAD_REQUEST: "طلب غير صحيح."
  };
  function esc(t) { return (t == null ? "" : String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
  function errText(res) {
    if (!res) return ERR.NET;
    if (res.error === "COOLDOWN") return "استنى " + (res.wait || 30) + " ثانية قبل التعليق التالي.";
    return ERR[res.error] || ERR.SERVER_ERROR;
  }
  function ago(iso) {
    var t = Date.parse(iso); if (isNaN(t)) return "";
    var s = Math.max(0, (Date.now() - t) / 1000);
    if (s < 60) return "هلأ";
    if (s < 3600) return "قبل " + Math.floor(s / 60) + " د";
    if (s < 86400) return "قبل " + Math.floor(s / 3600) + " س";
    if (s < 2592000) return "قبل " + Math.floor(s / 86400) + " يوم";
    return new Date(t).toLocaleDateString("ar");
  }
  function lazyOpen() { try { return sessionStorage.getItem("scc_open") === "1"; } catch (e) { return false; } }
  function setLazyOpen() { try { sessionStorage.setItem("scc_open", "1"); } catch (e) {} }

  var cache = {};  // key -> {t, data}
  function key(o) { return o.course_id + "|" + o.chapter_id; }

  /* ---------- الدخول للودجت ---------- */
  function mount(el, opts) {
    if (!el || !opts) return;
    onReady(function () { run(el, opts); });
  }

  function run(el, opts) {
    var tag = (el.__scc = (el.__scc || 0) + 1);
    el.classList.add("scc");
    el.onclick = null;
    var s = window.SCAuth && SCAuth.getSession();
    if (!s || !s.token) return renderLogin(el);
    if (opts.lazy && !lazyOpen()) return renderLazy(el, opts);
    load(el, opts, tag, false);
  }

  function renderLogin(el) {
    var url = HUB + "index.html?next=" + encodeURIComponent(location.href);
    el.innerHTML = '<div class="scc-h">💬 النقاش</div><div class="scc-login">سجّل دخولك لتشارك بالنقاش وتشوف التعليقات.<br><a href="' + esc(url) + '">تسجيل الدخول</a></div>';
  }
  function renderLazy(el, opts) {
    el.innerHTML = '<div class="scc-h">💬 النقاش</div><button type="button" class="scc-btn sec" style="width:100%">عرض النقاش والتعليقات</button>';
    el.querySelector("button").onclick = function () { setLazyOpen(); run(el, opts); };
  }

  function load(el, opts, tag, force) {
    var k = key(opts), c = cache[k];
    if (!force && c && Date.now() - c.t < CACHE_MS) return render(el, opts, c.data);
    el.innerHTML = '<div class="scc-h">💬 النقاش</div><div class="scc-load">عم نحمّل التعليقات...</div>';
    var s = SCAuth.getSession();
    SCAuth.api("getComments", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id })
      .then(function (res) {
        if (el.__scc !== tag) return;   // انتقل المستخدم لمادة تانية
        if (res && res.ok) { cache[k] = { t: Date.now(), data: res }; return render(el, opts, res); }
        if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED")) { SCAuth.clearSession(); return renderLogin(el); }
        fail(el, opts, tag, errText(res));
      })
      .catch(function () { if (el.__scc === tag) fail(el, opts, tag, ERR.NET); });
  }
  function fail(el, opts, tag, msg) {
    el.innerHTML = '<div class="scc-h">💬 النقاش</div><div class="scc-load">' + esc(msg) + '<br><button type="button" class="scc-btn sec" style="margin-top:8px">إعادة المحاولة</button></div>';
    el.querySelector("button").onclick = function () { load(el, opts, tag, true); };
  }

  /* ---------- الرسم ---------- */
  function itemHTML(c, isReply) {
    return '<div class="scc-item' + (isReply ? " reply" : "") + '" data-id="' + esc(c.id) + '">' +
      '<div class="scc-meta"><span class="scc-name">' + esc(c.name) + '</span>' +
      (c.mine ? '<span class="scc-you">أنت</span>' : "") + '<span>' + esc(ago(c.created_at)) + '</span></div>' +
      '<div class="scc-text">' + esc(c.text) + '</div>' +
      '<div class="scc-acts">' + (isReply ? "" : '<button type="button" class="scc-link" data-reply="' + esc(c.id) + '">ردّ</button>') +
      (c.mine ? '<button type="button" class="scc-link del" data-del="' + esc(c.id) + '">حذف</button>' : "") + '</div></div>';
  }
  function composerHTML(left, parentId) {
    var dis = left <= 0;
    return '<div class="scc-box" data-composer="' + esc(parentId || "") + '">' +
      '<textarea maxlength="' + MAX_LEN + '" placeholder="' + (parentId ? "اكتب ردّك..." : "شاركنا رأيك أو سؤالك...") + '"' + (dis ? " disabled" : "") + '></textarea>' +
      '<div class="scc-row"><span class="scc-hint"><span data-cnt>0</span>/' + MAX_LEN + ' · باقي لك <b data-left>' + Math.max(left, 0) + '</b> تعليقات هون</span>' +
      '<span>' + (parentId ? '<button type="button" class="scc-btn sec" data-cancel style="margin-inline-start:6px">إلغاء</button>' : "") +
      '<button type="button" class="scc-btn" data-send' + (dis ? " disabled" : "") + '>نشر</button></span></div>' +
      '<p class="scc-msg' + (dis ? " err" : "") + '" data-msg>' + (dis ? esc(ERR.LIMIT_REACHED) : "") + '</p></div>';
  }

  function render(el, opts, data) {
    var list = data.comments || [];
    var limit = data.limit || LIMIT_DEFAULT;
    var left = limit - (data.mine_count || 0);
    var tops = list.filter(function (c) { return !c.parent_id; }).reverse();       // الأحدث أول
    var kids = {};
    list.forEach(function (c) { if (c.parent_id) (kids[c.parent_id] = kids[c.parent_id] || []).push(c); });

    var html = '<div class="scc-h">💬 النقاش <span class="scc-c">' + list.length + '</span></div>' + composerHTML(left, "");
    html += '<div class="scc-list">';
    if (!tops.length) html += '<div class="scc-empty">ما في تعليقات لسا. كون أول من يشارك!</div>';
    tops.forEach(function (c) {
      html += '<div data-thread="' + esc(c.id) + '">' + itemHTML(c, false) + (kids[c.id] || []).map(function (r) { return itemHTML(r, true); }).join("") + '</div>';
    });
    html += "</div>";
    el.innerHTML = html;

    el.onclick = function (e) {
      var t = e.target;
      var rep = t.closest("[data-reply]"), del = t.closest("[data-del]"), send = t.closest("[data-send]"), cancel = t.closest("[data-cancel]");
      if (rep) return openReply(el, opts, data, rep.getAttribute("data-reply"));
      if (cancel) { var cb = t.closest("[data-composer]"); if (cb) cb.remove(); return; }
      if (del) return doDelete(el, opts, del.getAttribute("data-del"));
      if (send) return doSend(el, opts, t.closest("[data-composer]"));
    };
    el.oninput = function (e) {
      var box = e.target.closest && e.target.closest("[data-composer]");
      if (box) { var n = box.querySelector("[data-cnt]"); if (n) n.textContent = e.target.value.length; }
    };
  }

  function openReply(el, opts, data, parentId) {
    var old = el.querySelector('[data-composer]:not([data-composer=""])');
    if (old) old.remove();
    var thread = el.querySelector('[data-thread="' + parentId + '"]');
    if (!thread) return;
    var left = (data.limit || LIMIT_DEFAULT) - (data.mine_count || 0);
    var wrap = document.createElement("div");
    wrap.style.marginTop = "8px";
    wrap.innerHTML = composerHTML(left, parentId);
    thread.appendChild(wrap.firstChild);
    var ta = thread.querySelector("textarea"); if (ta) ta.focus();
  }

  function doSend(el, opts, box) {
    if (!box) return;
    var ta = box.querySelector("textarea"), btn = box.querySelector("[data-send]"), msg = box.querySelector("[data-msg]");
    var text = ta.value.trim();
    msg.className = "scc-msg"; msg.textContent = "";
    if (!text) { msg.className = "scc-msg err"; msg.textContent = ERR.EMPTY; return; }
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    var tag = el.__scc;
    btn.disabled = true; btn.textContent = "عم ننشر...";
    SCAuth.api("addComment", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id, text: text, parent_id: box.getAttribute("data-composer") || "" })
      .then(function (res) {
        if (res && res.ok) {
          var k = key(opts), c = cache[k];
          if (c) { c.data.comments.push(res.comment); c.data.mine_count = res.mine_count; c.t = Date.now(); }
          if (el.__scc === tag) { if (c) render(el, opts, c.data); else load(el, opts, tag, true); }
          return;
        }
        if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED")) { SCAuth.clearSession(); return renderLogin(el); }
        msg.className = "scc-msg err"; msg.textContent = errText(res);
        btn.disabled = false; btn.textContent = "نشر";
      })
      .catch(function () { msg.className = "scc-msg err"; msg.textContent = ERR.NET; btn.disabled = false; btn.textContent = "نشر"; });
  }

  function doDelete(el, opts, id) {
    if (!window.confirm("حذف هالتعليق؟")) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    var tag = el.__scc;
    SCAuth.api("deleteComment", { token: s.token, comment_id: id }).then(function (res) {
      if (res && res.ok) { delete cache[key(opts)]; if (el.__scc === tag) load(el, opts, tag, true); }
      else { window.alert(errText(res)); }
    }).catch(function () { window.alert(ERR.NET); });
  }

  window.SCComments = { mount: mount };
})();
