/* بنك أسئلة الفصل 10 — تصميم الاستبيان والأسئلة.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH10_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التصميم الفعال للاستبيان يشمل:",
  "options": [
   "ألا تكون هناك أسئلة مركبة",
   "ألا تكون الأسئلة قابلة للتأويل أو الغموض",
   "أن تكون الأسئلة قصيرة قدر الإمكان",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلها من شروط الصياغة الجيدة.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step6-7",
   "label": "الكلمات والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعني اختبار الصدق:",
  "options": [
   "أن يكتب المجيب ما يريد",
   "أن يفكر أفراد العينة بصوت عال",
   "أن يقيس الفكرة أو المتغير المراد قياسه",
   "أن تعطي نتائج متقاربة بفترات متقاربة"
  ],
  "answerIndex": 2,
  "explanation": "الصدق = يقيس ما وُضع لقياسه؛ المتقاربة = ثبات.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من خلال الأسئلة المفتوحة:",
  "options": [
   "تمتد الإجابة على مقياس ليكرت",
   "يختار المستجيب إجابة واحدة",
   "يختار إجابات متعددة",
   "يعبر الفرد عما يراه مناسباً بالإجابة"
  ],
  "answerIndex": 3,
  "explanation": "بكلماته.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الأسئلة المفتوحة تعطي إمكانية اختيار إجابة من بين عدة إجابات.",
  "answer": false,
  "explanation": "خطأ: هذه المغلقة.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختبار الصدق يعني إعطاء نتائج متقاربة عند إعادة توزيع الاستبيان بفترات غير متقاربة.",
  "answer": false,
  "explanation": "خطأ: هذا الثبات.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في الأسئلة المغلقة لا يمكن للمجيب الخروج عن الخيارات المحددة له.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا مشكلة بأن تكون صفحات الاستبيان حوالي 10 صفحات.",
  "answer": false,
  "explanation": "خطأ: المفضل القصير (4–5 ورقات).",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الخطوة الأخيرة في تصميم الاستبيان:",
  "options": [
   "ترتيب الأسئلة",
   "اختيار الكلمات",
   "اختبار الاستبيان",
   "الطباعة"
  ],
  "answerIndex": 2,
  "explanation": "العاشرة: الاختبار.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#steps-overview",
   "label": "المراحل العشر"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الخطوة الأولى في تصميم الاستبيان:",
  "options": [
   "اختبار الاستبيان",
   "تحديد المعلومات المطلوب الحصول عليها",
   "الطباعة",
   "اختيار الكلمات"
  ],
  "answerIndex": 1,
  "explanation": "ثم طريقة المقابلة.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#steps-overview",
   "label": "المراحل العشر"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في الاستقصاء التلفوني يجب أن تكون الأسئلة:",
  "options": [
   "طويلة ومعقدة",
   "متنوعة ومعقدة",
   "قصيرة وبسيطة",
   "مصورة"
  ],
  "answerIndex": 2,
  "explanation": "المستجوب لا يرى الاستبيان.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step1-2",
   "label": "الخطوتان الأولى والثانية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في المقابلة المباشرة يمكن للباحث طرح أسئلة طويلة ومعقدة لأن المستجوب يستفسر منه.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step1-2",
   "label": "الخطوتان الأولى والثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أنماط التنقل وعشوائية الأسئلة في الاستقصاءات المدعمة بالكمبيوتر تُستخدم للتغلب على:",
  "options": [
   "تحيز الإذعان",
   "عدم الرغبة",
   "السؤال المزدوج",
   "تحيز الترتيب"
  ],
  "answerIndex": 3,
  "explanation": "تحيز الترتيب.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step1-2",
   "label": "الخطوتان الأولى والثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "السؤال: «هل تحب وظيفتك وترغب بالاستمرار فيها؟» يسمى:",
  "options": [
   "سؤالاً مغلقاً فقط",
   "سؤالاً مزدوجاً",
   "سؤال تنقية",
   "سؤالاً موجهاً"
  ],
  "answerIndex": 1,
  "explanation": "يجمع سؤالين.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step3",
   "label": "الخطوة الثالثة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجب الإبقاء على الأسئلة التي لا يمكن استخدام بياناتها في التحليل الإحصائي.",
  "answer": false,
  "explanation": "خطأ: تُحذف العبارة أو السؤال الذي لا يمكن استخدام بياناته بالتحليل.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step3",
   "label": "الخطوة الثالثة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تُستخدم أحياناً أسئلة غير مرتبطة بالمعلومات المطلوبة لبناء الألفة أو إخفاء الجهة المنتفعة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step3",
   "label": "الخطوة الثالثة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أسئلة التنقية تُستخدم للتغلب على:",
  "options": [
   "عدم رغبتهم",
   "الحساسية فقط",
   "عدم قدرة المستجوبين على الإجابة",
   "تحيز الإذعان"
  ],
  "answerIndex": 2,
  "explanation": "تحدد معرفة المستجوب.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step4",
   "label": "الخطوة الرابعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لزيادة رغبة المستجوبين بالإجابة عن سؤال حساس:",
  "options": [
   "وضعه بالبداية",
   "حذف فئات الإجابة",
   "طرحه بصيغة المخاطب دائماً",
   "وضعه بالنهاية"
  ],
  "answerIndex": 3,
  "explanation": "بالنهاية وبصيغة الغائب.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step4",
   "label": "الخطوة الرابعة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأساليب الإسقاطية أنسب للأسئلة الحساسة كالمعتقدات الدينية والسياسية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step4",
   "label": "الخطوة الرابعة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "على الباحث أن يوضح سبب طلب المعلومات حتى لا يعتقد المستجوب أنها خرق للخصوصية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step4",
   "label": "الخطوة الرابعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من مزايا الأسئلة المفتوحة:",
  "options": [
   "لا تحتاج وقتاً",
   "التعبير بحرية وقلة التحيز",
   "ترميزها سريع",
   "تناسب العينات الكبيرة"
  ],
  "answerIndex": 1,
  "explanation": "عيوبها: الترميز المكلف.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من عيوب الأسئلة المفتوحة:",
  "options": [
   "الإجابة السريعة",
   "التحيز بالترتيب",
   "عدم تعبير حر",
   "ترميز مكلف ويستغرق وقتاً"
  ],
  "answerIndex": 3,
  "explanation": "مع تحيز الباحث بالتفسير.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الأسئلة المغلقة المصاغة جيداً تعتمد على:",
  "options": [
   "دراسة استكشافية بأسئلة مفتوحة لتحديد كل الخيارات",
   "التخمين",
   "الفئات الثلاث",
   "خيارين فقط"
  ],
  "answerIndex": 0,
  "explanation": "لوضع كل الخيارات الممكنة.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تحيز الترتيب علاجه:",
  "options": [
   "استخدام سؤال واحد",
   "إلغاء الاستبيان",
   "عدة نماذج من الاستبيان",
   "حذف الخيارات"
  ],
  "answerIndex": 2,
  "explanation": "بتغيير ترتيب الخيارات.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأسئلة المغلقة أقل تكلفة بالترميز والمعالجة من المفتوحة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step5",
   "label": "الخطوة الخامسة: شكل السؤال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تحيز الإذعان هو:",
  "options": [
   "ميل بعض المستجوبين للموافقة مع اتجاه السؤال",
   "عدم الإجابة",
   "اختيار الإجابة الأولى",
   "ميل للرفض"
  ],
  "answerIndex": 0,
  "explanation": "قل-نعم.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step6-7",
   "label": "الكلمات والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الأسئلة الموجهة نحو إجابة ما:",
  "options": [
   "تستخدم كلمات شائعة",
   "توحي بالإجابة المرغوبة",
   "تحدد القضية بوضوح",
   "ضرورية دائماً"
  ],
  "answerIndex": 1,
  "explanation": "نوع من الأسئلة المتحيزة.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step6-7",
   "label": "الكلمات والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأسئلة الصعبة والحساسة والمحرجة توضع بنهاية الاستبيان.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step6-7",
   "label": "الكلمات والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجب استخدام كلمات شائعة ومعروفة بين جمهور الاستبيان.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step6-7",
   "label": "الكلمات والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجوز تقسيم السؤال الواحد على صفحتين منفصلتين لتوفير الورق.",
  "answer": false,
  "explanation": "خطأ: لا يجوز.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الألوان لها أثر مباشر على معدل استجابة الناس.",
  "answer": false,
  "explanation": "خطأ: لا أثر لها، لكن تفيد بالأسئلة الشرطية.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "كلما انخفض تجانس مجتمع البحث:",
  "options": [
   "تُحذف الأسئلة",
   "ازدادت الحاجة لعينة اختبارية أكبر",
   "لا حاجة لاختبار",
   "قلت الحاجة لعينة اختبار"
  ],
  "answerIndex": 1,
  "explanation": "عينة اختبار أكبر.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#step8-10",
   "label": "الخطوات 8–10"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من وظائف برمجيات الاستبيان الإلكتروني:",
  "options": [
   "شخصنة الاستبيان بإدراج اسم المستجوب",
   "اختيار العينة تلقائياً من المجتمع كله",
   "حذف الاستجابات",
   "كتابة الفرضيات"
  ],
  "answerIndex": 0,
  "explanation": "إضافة لفحص الانسجام والعشوائية.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#online-software",
   "label": "الاستبيان الإلكتروني"
  }
 }
];
