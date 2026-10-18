
/* بيان فصول المقرر — مصدر واحد يُستخدم بالصفحة الرئيسية وبالقائمة الجانبية معًا.
   الروابط هون root-relative (بدون بادئة) ولازم تُقرأ دائمًا مع SITE_PREFIX. */
const COURSE_TITLE = "GBS302 — مهارات الحاسوب";

const COURSE_CHAPTERS = [
  {num:1, key:"ch1", title:"العتاد الصلب والبرمجيات", href:"chapters/chapter-1-lesson.html"},
  {num:2, key:"ch2", title:"الشبكات والإنترنت", href:"chapters/chapter-2-lesson.html"},
  {num:3, key:"ch3", title:"أساسيات نظام التشغيل ويندوز 10", href:"chapters/chapter-3-lesson.html"},
  {num:4, key:"ch4", title:"الملفات والمجلدات في ويندوز 10", href:"chapters/chapter-4-lesson.html"},
  {num:5, key:"ch5", title:"معالج النصوص Word: البداية والتحرير", href:"chapters/chapter-5-lesson.html"},
  {num:6, key:"ch6", title:"معالج النصوص Word: التنسيق والجداول والطباعة", href:"chapters/chapter-6-lesson.html"},
  {num:7, key:"ch7", title:"العروض التقديمية PowerPoint", href:"chapters/chapter-7-lesson.html"},
  {num:8, key:"ch8", title:"أساسيات الجداول الإلكترونية Excel", href:"chapters/chapter-8-lesson.html"},
  {num:9, key:"ch9", title:"الصيغ والدوال في Excel", href:"chapters/chapter-9-lesson.html"},
  {num:10, key:"ch10", title:"المخططات البيانية والجداول المحورية", href:"chapters/chapter-10-lesson.html"},
  {num:11, key:"ch11", title:"التنسيق والطباعة في Excel", href:"chapters/chapter-11-lesson.html"},
  {num:12, key:"ch12", title:"البريد الإلكتروني Outlook", href:"chapters/chapter-12-lesson.html"},
];

/* صفحات مساعدة تظهر بالقائمة الجانبية تحت الفصول (تنضاف لما تنبني) */
const COURSE_EXTRA_LINKS = [
  {title:"📝 الفحص النهائي الشامل (50 سؤال)", href:"pages/final-exam.html"},
  {title:"⌨️ الاختصارات ولعبة الوصل", href:"pages/quick-reference.html"},
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
