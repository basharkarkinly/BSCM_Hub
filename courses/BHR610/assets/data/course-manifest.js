
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BHR610 — إدارة فرق العمل";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مفهوم وأهمية فريق العمل", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"عمليات بناء الفريق", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"أنواع فرق العمل", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"دور الذكاء العاطفي في فاعلية وإبداع الفريق", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"تحفيز فريق العمل والتفويض ضمن الفريق", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"قيادة أداء الفريق والبيئة الإيجابية", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"إدارة الصراع في فريق العمل", href:"chapters/chapter-7-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
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
