/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BAC504 — المحاسبة المالية في الشركات";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مفهوم الشركات وأنواعها",                                   href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"إجراءات تكوين شركات التضامن والتوصية البسيطة",                               href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"إعادة تنظيم شركات التضامن والتوصية البسيطة",               href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"الحسابات الجارية للشركاء وتوزيع الأرباح والخسائر",         href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"تصفية (انقضاء) شركات التضامن",                              href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"التعريف بشركات الأموال وخصائصها",                           href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"تعديل رأس المال وتوزيع الأرباح في الشركات المساهمة",        href:"chapters/chapter-7-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [];

/* يحسب حالة الفتح لكل فصل بالترتيب (فتح متسلسل حسب اجتياز امتحان الفصل السابق بـ90%+) */
function computeChapterUnlockStatus(){
  let unlocked = true;
  return COURSE_CHAPTERS.map(ch => {
    const withActive = { ...ch, active: unlocked };
    if(unlocked){
      const state = getChapterState(ch.key);
      withActive.passed = !!state.passed;
      unlocked = !!state.passed;
    } else {
      withActive.passed = false;
    }
    return withActive;
  });
}
