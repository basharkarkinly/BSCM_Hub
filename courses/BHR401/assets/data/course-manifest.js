
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BHR401 — إدارة الموارد البشرية";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مفهوم وتطور إدارة الموارد البشرية", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"بيئة عمل إدارة الموارد البشرية", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"إدارة الموارد البشرية وأخلاقيات العمل", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"تحليل وتصميم العمل والوصف الوظيفي", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"تخطيط الموارد البشرية", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"الاستقطاب", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"الاختيار والتعيين", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"التدريب والتطوير", href:"chapters/chapter-8-lesson.html"},
  {num:9, key:"ch9", title:"تقويم الأداء", href:"chapters/chapter-9-lesson.html"},
  {num:10, key:"ch10", title:"المسار الوظيفي والترقيات", href:"chapters/chapter-10-lesson.html"},
  {num:11, key:"ch11", title:"تقييم الوظائف والتعويضات", href:"chapters/chapter-11-lesson.html"},
  {num:12, key:"ch12", title:"الصحة والسلامة المهنية", href:"chapters/chapter-12-lesson.html"},
  {num:13, key:"ch13", title:"علاقات العمل والعاملين", href:"chapters/chapter-13-lesson.html"},
  {num:14, key:"ch14", title:"إدارة الموارد البشرية الدولية", href:"chapters/chapter-14-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
  {title:"⚡ مراجعة سريعة + لعبة الوصل", href:"pages/quick-reference.html"},
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
