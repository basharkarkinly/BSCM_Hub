/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BAC401 — مبادئ المحاسبة 1";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"المحاسبة وبيئة الأعمال", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"التسجيل المحاسبي ونظرية القيد المزدوج", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"التسويات الجردية للإيرادات والمصروفات", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"إكمال الدورة المحاسبية والأخطاء المحاسبية", href:"chapters/chapter-4-lesson.html"}
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول */
const COURSE_EXTRA_LINKS = [
];

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
