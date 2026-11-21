/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "BQM607 — إدارة المشروعات";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"مقدمة في إدارة المشاريع", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"دورة حياة المشروع", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"تعريف المشروع: الأهداف والاختيار والميثاق", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"تعريف المشروع: النطاق وهيكل تقسيم العمل", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"تخطيط الزمن (1): الأنشطة والمخطط الشبكي", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"تخطيط الزمن (2): المدد وغانت والمسار الحرج", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"تخطيط الموارد في المشروع", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"مراقبة وضبط المشروع", href:"chapters/chapter-8-lesson.html"},
  {num:9, key:"ch9", title:"إدارة المخاطر في المشروع", href:"chapters/chapter-9-lesson.html"},
  {num:10, key:"ch10", title:"إدارة فريق المشروع", href:"chapters/chapter-10-lesson.html"},
  {num:11, key:"ch11", title:"البنية التنظيمية للمشاريع", href:"chapters/chapter-11-lesson.html"},
  {num:12, key:"ch12", title:"إغلاق المشروع", href:"chapters/chapter-12-lesson.html"}
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (25 سؤال)", href:"pages/final-exam.html"},
  {title:"🧮 المرجع السريع والقوانين", href:"pages/quick-reference.html"}
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
