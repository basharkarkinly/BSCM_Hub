/*
 * Support Channel — زر الدعم العائم (بوت الدعم @HelpTeamSupportChannel_bot)
 *
 * - بيحمّلو shell.js لحالو بكل الصفحات (الهب والمقررات)، وصفحات الدخول والخصوصية بتحمّلو مباشرة.
 * - زر صغير تحت عالشمال. بيفتح البوت مع كود المصدر: كود المقرر (مثلاً bac506) أو hub،
 *   فالفريق بيشوف بالموضوع من وين إجا الطالب.
 * - ما بيظهر بصفحات الامتحان (امتحان الفصل، النهائي، تحديد المستوى) لحتى ما يشوّش.
 * - SCSupport.url() بترجّع رابط البوت مع كود الصفحة الحالية (بتستعملها feedback.js).
 */
(function () {
  if (window.SCSupport) return;

  var BOT = "HelpTeamSupportChannel_bot";

  function source() {
    var m = /\/courses\/([A-Za-z0-9_\-]+)\//.exec(location.pathname);
    return m ? m[1].toLowerCase() : "hub";
  }
  function url() { return "https://t.me/" + BOT + "?start=" + source(); }
  function isExamPage() {
    var f = location.pathname.split("/").pop() || "";
    return /-exam\.html$/.test(f) || /final|placement/i.test(f);
  }

  var css = [
    ".scsp-fab{position:fixed;left:16px;bottom:18px;z-index:70;display:inline-flex;align-items:center;gap:8px;direction:rtl;",
    "background:#229ED9;color:#fff;text-decoration:none;border-radius:999px;padding:11px 18px 11px 16px;",
    "font-family:'Alexandria',system-ui,sans-serif;font-weight:800;font-size:.92rem;line-height:1;",
    "box-shadow:0 8px 24px -8px rgba(15,28,46,.55);-webkit-tap-highlight-color:transparent;transition:transform .15s,filter .15s}",
    ".scsp-fab:hover{filter:brightness(1.06);transform:translateY(-2px)}",
    ".scsp-fab:focus-visible{outline:3px solid #FF9F1C;outline-offset:2px}",
    ".scsp-fab svg{width:20px;height:20px;flex:none}",
    "@media (max-width:700px){.scsp-fab{padding:0;width:50px;height:50px;justify-content:center;left:12px;bottom:14px}.scsp-fab span{display:none}.scsp-fab svg{width:24px;height:24px}}",
    "@media print{.scsp-fab{display:none}}"
  ].join("");

  // أيقونة تلغرام (طيارة ورق)
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21.9 4.6 18.7 19.7c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.4l-4.8-1.5c-1-.3-1.1-1 .2-1.5l18.9-7.3c.9-.3 1.6.2 1.4 1.5z"/></svg>';

  function mount() {
    if (isExamPage() || document.querySelector(".scsp-fab")) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var a = document.createElement("a");
    a.className = "scsp-fab";
    a.href = url();
    a.target = "_blank"; a.rel = "noopener";
    a.title = "تواصل مع فريق الدعم على تلغرام";
    a.setAttribute("aria-label", "تواصل مع الدعم على تلغرام");
    a.innerHTML = ICON + "<span>الدعم</span>";
    document.body.appendChild(a);
  }

  window.SCSupport = { url: url, bot: BOT };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
