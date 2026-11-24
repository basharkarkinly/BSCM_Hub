
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "GBS303 — مهارات الدخول إلى سوق العمل";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"كتابة السيرة الذاتية", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"مهارات مقابلة العمل الفعالة", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"مهارات البحث عن عمل", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"مهارات التواصل والتعاون", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"إعداد وتقديم العروض التقديمية", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"المراسلات الإلكترونية والتجارية", href:"chapters/chapter-6-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
];

/* يحسب حالة الفتح لكل فصل بالترتيب (فتح متسلسل: كل فصل بينفتح بعد ما يخلص الطالب امتحان الفصل اللي قبلو) */
function computeChapterUnlockStatus(){
  let unlocked = true;
  return COURSE_CHAPTERS.map(ch => {
    const withActive = { ...ch, active: unlocked };
    if(unlocked){
      const state = getChapterState(ch.key);
      withActive.passed = !!state.passed;
      withActive.attempted = state.attempts > 0;
      // الفصل اللي بعدو بينفتح أول ما الطالب يخلّص امتحان هالفصل (أي علامة)، و90%+ = إتقان
      unlocked = !!state.passed || state.attempts > 0;
    } else {
      withActive.passed = false;
    }
    return withActive;
  });
}
