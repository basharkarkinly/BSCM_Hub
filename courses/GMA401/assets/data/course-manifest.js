
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "GMA401 — الرياضيات";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مبادئ أساسية في الرياضيات", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"المعادلات الرياضية وطرائق حلها", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"المتراجحات الرياضية وطرائق حلها", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"المتتاليات (المتواليات) العددية", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"المصفوفات والعمليات عليها", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"المعينات (المحددات)", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"مقلوب مصفوفة وحل جملة معادلات خطية", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"التوابع الحقيقية والنهايات", href:"chapters/chapter-8-lesson.html"},
  {num:9, key:"ch9", title:"الاشتقاق وقواعده", href:"chapters/chapter-9-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
  {title:"📐 ورقة القوانين ولعبة الوصل", href:"pages/quick-reference.html"},
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
