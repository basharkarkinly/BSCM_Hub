/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BAC402 — مبادئ المحاسبة 2";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مدخل إلى مفهوم الجرد والتسويات الجردية", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"التسويات الجردية لحسابات الإيرادات والمصروفات", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"المحاسبة عن الأصول المتداولة", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"التسويات الجردية للأصول غير المتداولة", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"القوائم المالية", href:"chapters/chapter-5-lesson.html"}
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (25 سؤال)", href:"pages/final-exam.html"},
  {title:"🧮 المرجع السريع والقوانين", href:"pages/quick-reference.html"}
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
