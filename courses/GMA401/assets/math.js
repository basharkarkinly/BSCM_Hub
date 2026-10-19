/* GMA401 — عرض الصيغ الرياضية بـKaTeX.
   الصيغ مكتوبة بين \( ... \) داخل السطر أو $$ ... $$ بسطر مستقل.
   المحرك (app.js) بيكتب الأسئلة والشروح بـinnerHTML، فمنراقب الصفحة ومنعرض أي صيغة جديدة تلقائياً. */
(function(){
  const OPTS = {
    delimiters: [
      {left:"$$", right:"$$", display:true},
      {left:"\\(", right:"\\)", display:false}
    ],
    throwOnError: false,
    ignoredTags: ["script","noscript","style","textarea","pre","code","input"]
  };
  function render(el){
    if(typeof renderMathInElement !== "function" || !el || el.nodeType !== 1) return;
    renderMathInElement(el, OPTS);
  }
  let busy = false;
  const obs = new MutationObserver(muts => {
    if(busy) return;
    busy = true;
    try{
      muts.forEach(m => m.addedNodes.forEach(n => {
        if(n.nodeType === 1 && !(n.closest && n.closest(".katex"))) render(n);
      }));
    } finally { busy = false; }
  });
  function boot(){
    render(document.body);
    obs.observe(document.body, {childList:true, subtree:true});
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
