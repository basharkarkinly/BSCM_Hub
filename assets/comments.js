/*
 * Support Channel — ودجت "أسئلة هالفصل" (أسئلة وأجوبة + 👍 + ✓ حلّ مشكلتي)
 * الاستخدام بأي صفحة (على نفس الدومين):
 *
 *   <div id="comments"></div>
 *   <script src=".../assets/comments.js"></script>
 *   <script>SCComments.mount(document.getElementById('comments'), { course_id: 'BMN401', chapter_id: '3', lazy: true });</script>
 *
 * - بيحمّل config.js و auth.js من نفس المجلد تلقائياً إذا ما كانوا محمّلين.
 * - lazy:true → بيعرض شريط صغير (كم سؤال وكم بلا جواب) وزر "عرض الأسئلة" بدل تحميل كل شي (أخف عالإنترنت البطيء).
 *   إذا الرابط بينتهي بـ #comments (جاي من الإشعارات) بيفتح كل شي مباشرة.
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
    ".scc-h{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-weight:800;font-size:1rem;margin:0 0 6px}",
    ".scc-c{font-size:.75rem;font-weight:700;color:#5B6478;background:#EEF1F7;border-radius:999px;padding:0 10px}",
    ".scc-sub{margin:0 0 12px;font-size:.84rem;color:#5B6478}",
    ".scc-sub a{color:#12897E;font-weight:700}",
    ".scc-box{background:#F5F7FB;border:1px solid #E3E7F0;border-radius:14px;padding:12px}",
    ".scc textarea{width:100%;min-height:70px;resize:vertical;border:1.5px solid #E3E7F0;border-radius:10px;padding:10px 12px;font:inherit;font-size:.92rem;background:#fff;color:inherit}",
    ".scc textarea:focus{outline:none;border-color:#1FB6A8;box-shadow:0 0 0 3px rgba(31,182,168,.18)}",
    ".scc-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:8px;flex-wrap:wrap}",
    ".scc-hint{font-size:.78rem;color:#5B6478}",
    ".scc-btn{border:none;border-radius:999px;padding:8px 20px;font:inherit;font-size:.88rem;font-weight:700;cursor:pointer;background:#FF9F1C;color:#1A1200}",
    ".scc-btn:disabled{opacity:.55;cursor:default}",
    ".scc-btn.sec{background:#fff;border:1.5px solid #E3E7F0;color:#1D2E45}",
    ".scc-link{background:none;border:none;padding:0;font:inherit;font-size:.8rem;font-weight:700;color:#12897E;cursor:pointer}",
    ".scc-link.del{color:#B4402B}",
    ".scc-msg{font-size:.82rem;margin:8px 0 0;min-height:1.2em}",
    ".scc-msg.err{color:#B4402B}",
    ".scc-tabs{display:flex;gap:6px;margin:14px 0 2px}",
    ".scc-tab{border:1.5px solid #E3E7F0;background:#fff;border-radius:999px;padding:3px 14px;font:inherit;font-size:.8rem;font-weight:700;color:#5B6478;cursor:pointer}",
    ".scc-tab.on{background:#0F1C2E;border-color:#0F1C2E;color:#fff}",
    ".scc-list{margin-top:10px;display:flex;flex-direction:column;gap:12px}",
    ".scc-q{background:#fff;border:1px solid #E3E7F0;border-radius:14px;padding:12px 14px}",
    ".scc-q.open{border-inline-start:4px solid #FF9F1C}",
    ".scc-q.solved{border-inline-start:4px solid #12B886}",
    ".scc-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:#5B6478}",
    ".scc-name{font-weight:800;color:#0F1C2E;font-size:.86rem}",
    ".scc-tag{font-size:.68rem;font-weight:700;border-radius:999px;padding:0 8px;border:1px solid}",
    ".scc-tag.you{color:#12897E;background:#EFFBF8;border-color:#BFEDE6}",
    ".scc-tag.open{color:#8A5300;background:#FFF4E2;border-color:#FFD79A}",
    ".scc-tag.solved{color:#0B7A57;background:#E7F9F3;border-color:#A9E8D2}",
    ".scc-text{margin:4px 0 6px;font-size:.93rem;white-space:pre-wrap;word-break:break-word}",
    ".scc-q>.scc-text{font-weight:600}",
    ".scc-acts{display:flex;align-items:center;gap:14px;flex-wrap:wrap}",
    ".scc-ans{margin:10px 14px 0 0;display:flex;flex-direction:column;gap:8px}",
    ".scc-a{background:#FAFBFD;border:1px solid #EEF1F7;border-radius:12px;padding:8px 12px}",
    ".scc-a.best{background:#F0FBF7;border-color:#A9E8D2}",
    ".scc-vote{display:inline-flex;align-items:center;gap:4px;border:1.5px solid #E3E7F0;background:#fff;border-radius:999px;padding:1px 10px;font:inherit;font-size:.8rem;font-weight:700;color:#1D2E45;cursor:pointer}",
    ".scc-vote.on{background:#EFFBF8;border-color:#1FB6A8;color:#12897E}",
    ".scc-vote:disabled{cursor:default}",
    ".scc-accept{border:1.5px solid #12B886;background:#fff;color:#0B7A57;border-radius:999px;padding:1px 10px;font:inherit;font-size:.8rem;font-weight:700;cursor:pointer}",
    ".scc-strip{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;background:#F5F7FB;border:1px solid #E3E7F0;border-radius:14px;padding:12px 14px;font-size:.9rem}",
    ".scc-strip b{color:#0F1C2E}",
    ".scc-strip .hot{color:#8A5300}",
    ".scc-login,.scc-empty,.scc-load{text-align:center;color:#5B6478;font-size:.9rem;background:#F5F7FB;border:1px dashed #E3E7F0;border-radius:12px;padding:16px}",
    ".scc-login a{display:inline-block;margin-top:8px;text-decoration:none;font-weight:700;font-size:.88rem;background:#FF9F1C;color:#1A1200;border-radius:999px;padding:8px 20px}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- أدوات ---------- */
  var ERR = {
    EMPTY: "اكتب شي أول.",
    TOO_LONG: "النص أطول من " + MAX_LEN + " حرف.",
    LIMIT_REACHED: "وصلت لأقصى عدد أسئلة بهالفصل. احذف سؤال لتسأل غيره.",
    ALREADY_ANSWERED: "جاوبت على هالسؤال قبل. فيك تحذف جوابك وتكتب غيره.",
    BANNED: "النص فيه كلمة مو مناسبة. عدّلو وجرّب مرة تانية.",
    BAD_PARENT: "ما قدرنا نلاقي السؤال، يمكن انحذف.",
    HAS_ANSWERS: "ما فيك تحذف سؤال عليه أجوبة من غيرك.",
    OWN_ANSWER: "ما فيك تعمل هالشي على جوابك.",
    ALREADY_VOTED: "صوّتت لهالجواب قبل.",
    ALREADY_ACCEPTED: "اخترت جواب لهالسؤال قبل.",
    NOT_OWNER: "بس صاحب السؤال بيقدر يختار الجواب.",
    NOT_FOUND: "ما لقيناه، يمكن انحذف.",
    BLOCKED: "حسابك غير مفعّل.",
    SERVER_ERROR: "صار خطأ عنا، جرّب بعد شوي.",
    NET: "ما في اتصال بالسيرفر، جرّب مرة تانية.",
    BAD_REQUEST: "طلب غير صحيح."
  };
  function esc(t) { return (t == null ? "" : String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
  function errText(res) {
    if (!res) return ERR.NET;
    if (res.error === "COOLDOWN") return "استنى " + (res.wait || 30) + " ثانية قبل المشاركة التالية.";
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
  function drop(o) { delete cache[key(o)]; try { sessionStorage.removeItem("sc_notif_cache"); } catch (e) {} }

  /* ---------- الدخول للودجت ---------- */
  function mount(el, opts) {
    if (!el || !opts) return;
    onReady(function () { run(el, opts); });
  }

  function run(el, opts) {
    var tag = (el.__scc = (el.__scc || 0) + 1);
    el.classList.add("scc");
    el.onclick = null;
    if (!el.id) el.id = "comments";
    var s = window.SCAuth && SCAuth.getSession();
    if (!s || !s.token) return renderLogin(el);
    if (opts.lazy && !lazyOpen() && location.hash !== "#" + el.id) return renderLazy(el, opts, tag);
    load(el, opts, tag, false);
  }

  function head(total) {
    return '<div class="scc-h">❓ أسئلة هالفصل' + (total != null ? ' <span class="scc-c">' + total + '</span>' : '') + '</div>' +
      '<p class="scc-sub">ما فهمت شي؟ اسأل هون. وبتعرف الجواب؟ ساعد غيرك واكسب نجوم ⭐ — <a href="' + esc(HUB) + 'stars.html">كيف؟</a></p>';
  }

  function renderLogin(el) {
    var url = HUB + "index.html?next=" + encodeURIComponent(location.href);
    el.innerHTML = head() + '<div class="scc-login">سجّل دخولك لتسأل وتشوف الأجوبة.<br><a href="' + esc(url) + '">تسجيل الدخول</a></div>';
  }

  function renderLazy(el, opts, tag) {
    var open = function () { setLazyOpen(); run(el, opts); };
    var paint = function (stx) {
      var line;
      if (!stx) line = "شوف أسئلة الطلاب عن هالفصل وأجوبتها.";
      else if (!stx.questions) line = "ما في أسئلة لسا عن هالفصل. عندك سؤال؟ كون أول واحد.";
      else line = "في <b>" + stx.questions + "</b> " + (stx.questions === 1 ? "سؤال" : "أسئلة") + " عن هالفصل" +
        (stx.unanswered ? '، <b class="hot">' + stx.unanswered + " بلا جواب</b> — ساعد واكسب ⭐" : " ✓");
      el.innerHTML = head(stx ? stx.questions : null) +
        '<div class="scc-strip"><span>' + line + '</span><button type="button" class="scc-btn sec">' +
        (stx && stx.questions ? "عرض الأسئلة" : "اسأل سؤال") + '</button></div>';
      el.querySelector("button").onclick = open;
    };
    var c = cache[key(opts)];
    if (c && Date.now() - c.t < CACHE_MS) return paint({ questions: c.data.questions, unanswered: c.data.unanswered });
    paint(null);
    SCAuth.api("getQaStats", { token: SCAuth.getSession().token, course_id: opts.course_id, chapter_id: opts.chapter_id })
      .then(function (res) {
        if (el.__scc !== tag) return;
        if (res && res.ok) paint(res);
        else if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED")) { SCAuth.clearSession(); renderLogin(el); }
      }).catch(function () {});
  }

  function load(el, opts, tag, force) {
    var k = key(opts), c = cache[k];
    if (!force && c && Date.now() - c.t < CACHE_MS) return render(el, opts, c.data);
    el.innerHTML = head() + '<div class="scc-load">عم نحمّل الأسئلة...</div>';
    var s = SCAuth.getSession();
    SCAuth.api("getComments", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id })
      .then(function (res) {
        if (el.__scc !== tag) return;   // انتقل المستخدم لمادة تانية
        if (res && res.ok) {
          cache[k] = { t: Date.now(), data: res };
          render(el, opts, res);
          if (location.hash === "#" + el.id) setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 50);
          return;
        }
        if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED")) { SCAuth.clearSession(); return renderLogin(el); }
        fail(el, opts, tag, errText(res));
      })
      .catch(function () { if (el.__scc === tag) fail(el, opts, tag, ERR.NET); });
  }
  function fail(el, opts, tag, msg) {
    el.innerHTML = head() + '<div class="scc-load">' + esc(msg) + '<br><button type="button" class="scc-btn sec" style="margin-top:8px">إعادة المحاولة</button></div>';
    el.querySelector("button").onclick = function () { load(el, opts, tag, true); };
  }

  /* ---------- الرسم ---------- */
  function composerHTML(left, parentId) {
    var dis = !parentId && left <= 0;
    return '<div class="scc-box" data-composer="' + esc(parentId || "") + '"' + (parentId ? ' style="margin-top:10px"' : '') + '>' +
      '<textarea maxlength="' + MAX_LEN + '" placeholder="' + (parentId ? "اكتب جوابك... اشرح بطريقتك وببساطة" : "شو اللي ما فهمته؟ اكتب سؤالك هون...") + '"' + (dis ? " disabled" : "") + '></textarea>' +
      '<div class="scc-row"><span class="scc-hint"><span data-cnt>0</span>/' + MAX_LEN +
      (parentId ? '' : ' · باقي لك <b>' + Math.max(left, 0) + '</b> ' + (left === 1 ? 'سؤال' : 'أسئلة') + ' هون') + '</span>' +
      '<span>' + (parentId ? '<button type="button" class="scc-btn sec" data-cancel style="margin-inline-start:6px">إلغاء</button>' : "") +
      '<button type="button" class="scc-btn" data-send' + (dis ? " disabled" : "") + '>' + (parentId ? "انشر الجواب" : "اسأل") + '</button></span></div>' +
      '<p class="scc-msg' + (dis ? " err" : "") + '" data-msg>' + (dis ? esc(ERR.LIMIT_REACHED) : "") + '</p></div>';
  }

  function answerHTML(a, q) {
    var best = q.accepted_id && q.accepted_id === a.id;
    var canAccept = q.mine && !q.accepted_id && !a.mine;
    var voteDis = a.mine || a.voted;
    return '<div class="scc-a' + (best ? " best" : "") + '">' +
      '<div class="scc-meta"><span class="scc-name">' + esc(a.name) + '</span>' +
      (a.mine ? '<span class="scc-tag you">أنت</span>' : "") +
      (best ? '<span class="scc-tag solved">✓ حلّ المشكلة</span>' : "") +
      '<span>' + esc(ago(a.created_at)) + '</span></div>' +
      '<div class="scc-text">' + esc(a.text) + '</div>' +
      '<div class="scc-acts">' +
        '<button type="button" class="scc-vote' + (a.voted ? " on" : "") + '" data-vote="' + esc(a.id) + '"' + (voteDis ? " disabled" : "") +
          ' title="' + (a.mine ? "جوابك" : a.voted ? "صوّتت" : "جواب مفيد") + '">👍 ' + (a.votes || 0) + '</button>' +
        (canAccept ? '<button type="button" class="scc-accept" data-accept="' + esc(a.id) + '">✓ حلّ مشكلتي</button>' : "") +
        (a.mine ? '<button type="button" class="scc-link del" data-del="' + esc(a.id) + '">حذف</button>' : "") +
      '</div></div>';
  }

  function questionHTML(q, answers) {
    var solved = !!q.accepted_id && answers.some(function (a) { return a.id === q.accepted_id; });
    var open = !answers.some(function (a) { return !a.by_asker; });
    answers.sort(function (x, y) {
      if (q.accepted_id === x.id) return -1;
      if (q.accepted_id === y.id) return 1;
      if ((y.votes || 0) !== (x.votes || 0)) return (y.votes || 0) - (x.votes || 0);
      return x.created_at < y.created_at ? -1 : 1;
    });
    return '<div class="scc-q' + (solved ? " solved" : open ? " open" : "") + '" data-thread="' + esc(q.id) + '">' +
      '<div class="scc-meta"><span class="scc-name">' + esc(q.name) + '</span>' +
      (q.mine ? '<span class="scc-tag you">أنت</span>' : "") +
      (solved ? '<span class="scc-tag solved">✓ انحلّ</span>' : open ? '<span class="scc-tag open">بلا جواب</span>' : "") +
      '<span>' + esc(ago(q.created_at)) + '</span></div>' +
      '<div class="scc-text">' + esc(q.text) + '</div>' +
      '<div class="scc-acts">' +
        '<button type="button" class="scc-link" data-reply="' + esc(q.id) + '">✍️ جاوب</button>' +
        (q.mine ? '<button type="button" class="scc-link del" data-del="' + esc(q.id) + '">حذف</button>' : "") +
      '</div>' +
      (answers.length ? '<div class="scc-ans">' + answers.map(function (a) { return answerHTML(a, q); }).join("") + '</div>' : "") +
      '</div>';
  }

  function render(el, opts, data) {
    var list = data.comments || [];
    var limit = data.limit || LIMIT_DEFAULT;
    var left = limit - (data.mine_count || 0);
    var qs = list.filter(function (c) { return !c.parent_id; }).reverse();   // الأحدث أول
    var kids = {};
    list.forEach(function (c) { if (c.parent_id) (kids[c.parent_id] = kids[c.parent_id] || []).push(c); });
    var filter = el.__sccFilter || "all";
    // جواب صاحب السؤال على سؤالو (by_asker) توضيح، مو جواب
    var isOpen = function (q) { return !(kids[q.id] || []).some(function (a) { return !a.by_asker; }); };
    var shown = filter === "open" ? qs.filter(isOpen) : qs;
    var openCount = qs.filter(isOpen).length;

    var html = head(qs.length) + composerHTML(left, "");
    if (qs.length) {
      html += '<div class="scc-tabs"><button type="button" class="scc-tab' + (filter === "all" ? " on" : "") + '" data-filter="all">الكل (' + qs.length + ')</button>' +
        '<button type="button" class="scc-tab' + (filter === "open" ? " on" : "") + '" data-filter="open">بلا جواب (' + openCount + ')</button></div>';
    }
    html += '<div class="scc-list">';
    if (!qs.length) html += '<div class="scc-empty">ما في أسئلة لسا عن هالفصل. كون أول واحد بيسأل!</div>';
    else if (!shown.length) html += '<div class="scc-empty">كل الأسئلة إلها أجوبة 👏</div>';
    shown.forEach(function (q) { html += questionHTML(q, (kids[q.id] || []).slice()); });
    html += "</div>";
    el.innerHTML = html;

    el.onclick = function (e) {
      var t = e.target;
      var f = t.closest("[data-filter]"); if (f) { el.__sccFilter = f.getAttribute("data-filter"); return render(el, opts, data); }
      var rep = t.closest("[data-reply]"), del = t.closest("[data-del]"), send = t.closest("[data-send]"), cancel = t.closest("[data-cancel]");
      var vote = t.closest("[data-vote]"), acc = t.closest("[data-accept]");
      if (rep) return openReply(el, rep.getAttribute("data-reply"));
      if (cancel) { var cb = t.closest("[data-composer]"); if (cb) cb.remove(); return; }
      if (del) return doDelete(el, opts, del.getAttribute("data-del"));
      if (send) return doSend(el, opts, t.closest("[data-composer]"));
      if (vote && !vote.disabled) return doVote(el, opts, vote.getAttribute("data-vote"), vote);
      if (acc) return doAccept(el, opts, acc.getAttribute("data-accept"), acc);
    };
    el.oninput = function (e) {
      var box = e.target.closest && e.target.closest("[data-composer]");
      if (box) { var n = box.querySelector("[data-cnt]"); if (n) n.textContent = e.target.value.length; }
    };
  }

  function openReply(el, qid) {
    var old = el.querySelector('[data-composer]:not([data-composer=""])');
    if (old) { var same = old.getAttribute("data-composer") === qid; old.remove(); if (same) return; }
    var thread = el.querySelector('[data-thread="' + qid + '"]');
    if (!thread) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = composerHTML(1, qid);
    var box = wrap.firstChild;
    var acts = thread.querySelector(".scc-acts");
    acts.parentNode.insertBefore(box, acts.nextSibling);
    var ta = box.querySelector("textarea"); if (ta) ta.focus();
  }

  function after(el, opts, res) {
    // بعد أي تعديل: منحدّث الكاش المحلي ومنعيد التحميل من السيرفر (رد صغير وسريع لأنو من الكاش)
    drop(opts);
    load(el, opts, el.__scc, true);
  }

  function doSend(el, opts, box) {
    if (!box) return;
    var ta = box.querySelector("textarea"), btn = box.querySelector("[data-send]"), msg = box.querySelector("[data-msg]");
    var text = ta.value.trim();
    msg.className = "scc-msg"; msg.textContent = "";
    if (!text) { msg.className = "scc-msg err"; msg.textContent = ERR.EMPTY; return; }
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = "عم ننشر...";
    SCAuth.api("addComment", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id, text: text, parent_id: box.getAttribute("data-composer") || "" })
      .then(function (res) {
        if (res && res.ok) return after(el, opts, res);
        if (res && (res.error === "NO_SESSION" || res.error === "EXPIRED")) { SCAuth.clearSession(); return renderLogin(el); }
        msg.className = "scc-msg err"; msg.textContent = errText(res);
        btn.disabled = false; btn.textContent = label;
      })
      .catch(function () { msg.className = "scc-msg err"; msg.textContent = ERR.NET; btn.disabled = false; btn.textContent = label; });
  }

  function doVote(el, opts, id, btn) {
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    btn.disabled = true;
    SCAuth.api("voteAnswer", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id, comment_id: id })
      .then(function (res) {
        if (res && res.ok) { btn.classList.add("on"); btn.textContent = "👍 " + res.votes; drop(opts); return; }
        btn.disabled = false; window.alert(errText(res));
      }).catch(function () { btn.disabled = false; window.alert(ERR.NET); });
  }

  function doAccept(el, opts, id, btn) {
    if (!window.confirm("هاد الجواب حلّ مشكلتك؟ صاحبه بياخد ⭐ 3 نجوم، وما فيك تغيّر اختيارك بعدين.")) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    btn.disabled = true;
    SCAuth.api("acceptAnswer", { token: s.token, course_id: opts.course_id, chapter_id: opts.chapter_id, comment_id: id })
      .then(function (res) {
        if (res && res.ok) return after(el, opts, res);
        btn.disabled = false; window.alert(errText(res));
      }).catch(function () { btn.disabled = false; window.alert(ERR.NET); });
  }

  function doDelete(el, opts, id) {
    if (!window.confirm("حذف هالمشاركة؟ إذا كان جواب وأخد نجوم، النجوم بتنسحب.")) return;
    var s = SCAuth.getSession(); if (!s || !s.token) return renderLogin(el);
    SCAuth.api("deleteComment", { token: s.token, comment_id: id }).then(function (res) {
      if (res && res.ok) return after(el, opts, res);
      window.alert(errText(res));
    }).catch(function () { window.alert(ERR.NET); });
  }

  window.SCComments = { mount: mount };
})();
