
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BMN401 — أساسيات الإدارة";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مدخل إلى الإدارة والمدارس الكلاسيكية", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"المدرسة السلوكية والعلاقات الإنسانية", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"الإدارة بالأهداف (MBO)", href:"chapters/chapter-3-lesson.html"},
  {num:5, key:"ch5", title:"التخطيط: المفهوم والخطوات", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"صعوبات وأدوات التخطيط", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"التنظيم والهيكل التنظيمي", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"التوجيه والقيادة والتحفيز والاتصال", href:"chapters/chapter-8-lesson.html"},
  {num:9, key:"ch9", title:"الرقابة", href:"chapters/chapter-9-lesson.html"},
  {num:10, key:"ch10", title:"اتخاذ القرار", href:"chapters/chapter-10-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
  {title:"⚡ دراسة سريعة واختصارات", href:"pages/quick-reference.html"},
  {title:"📎 ملحق أجايل (مرجعي فقط)", href:"pages/agile-note.html"},
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
