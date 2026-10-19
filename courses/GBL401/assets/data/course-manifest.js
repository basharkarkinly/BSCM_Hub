
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "GBL401 — قانون الأعمال";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مدخل إلى القانون", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"الأعمال التجارية", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"التاجر", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"المتجر", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"الشركة وأنواعها", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"شركات الأشخاص", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"شركات الأموال", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"انحلال الشركات", href:"chapters/chapter-8-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
  {title:"⚖️ المصطلحات ولعبة الوصل", href:"pages/quick-reference.html"},
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
