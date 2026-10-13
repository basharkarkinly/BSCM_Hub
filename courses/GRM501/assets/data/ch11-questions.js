/* بنك أسئلة الفصل 11 — العينات.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH11_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "العينات العشوائية تعطي فرصاً متساوية أو معروفة لكل مفردة من مفردات مجتمع الدراسة.",
  "explanation": "صحيح — وهاد يضمن عينة ممثلة غير متحيزة، وليس للباحث أي دخل باختيار مفرداتها.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-kinds",
   "label": "العشوائية وغير العشوائية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "العينات غير العشوائية تُختار وفقاً لأسس احتمالية بحتة دون أي تدخل من الباحث.",
  "explanation": "خطأ — بالعكس، العينات غير العشوائية تعتمد على تقديرات ومعايير يضعها الباحث بنفسه.",
  "answer": false,
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-kinds",
   "label": "العشوائية وغير العشوائية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العينة والمجتمع:",
  "options": [
   "العينة تساوي المجتمع دائماً",
   "العينة أكبر من المجتمع",
   "العينة أصغر من المجتمع",
   "كل ما سبق صحيح"
  ],
  "answerIndex": 2,
  "explanation": "العينة جزء من المجتمع.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#population-sample",
   "label": "مجتمع البحث والعينة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العينة التحكمية هي:",
  "options": [
   "أحد أشكال عينات الملاءمة وتسمى المستهدفة",
   "أحد أنواع العينات العشوائية المنتظمة",
   "شكل آخر للعينة الطبقية",
   "أحد أشكال العينات العشوائية غير المنتظمة"
  ],
  "answerIndex": 0,
  "explanation": "ملاءمة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#nonrandom-samples",
   "label": "أنواع العينات غير العشوائية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتم تحديد حجم العينة بناءً على:",
  "options": [
   "قوانين إحصائية معينة",
   "حجم العينات بالدراسات السابقة المشابهة",
   "طبيعة مجتمع الدراسة وخصوصيته",
   "كل ما سبق صحيح"
  ],
  "answerIndex": 3,
  "explanation": "كلها طرق وعوامل.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-size",
   "label": "حجم العينة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتم تحديد مجتمع البحث بناءً على نوع العينة المطلوبة.",
  "answer": false,
  "explanation": "خطأ: يُحدد من مشكلة البحث.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#population-sample",
   "label": "مجتمع البحث والعينة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "العينة الطبقية تستخدم عندما يكون مجتمع البحث متجانساً تماماً.",
  "answer": false,
  "explanation": "خطأ: تُستخدم للمجتمعات غير المتجانسة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#random-samples",
   "label": "أنواع العينات العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجتمع البحث هو:",
  "options": [
   "جزء من المفردات",
   "جميع المفردات التي تمثل الظاهرة وتشترك بصفة معينة",
   "العينة المختارة",
   "الإطار فقط"
  ],
  "answerIndex": 1,
  "explanation": "تعريف المجتمع.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#population-sample",
   "label": "مجتمع البحث والعينة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يهدف اختيار العينة إلى تعميم نتائجها على كامل مجتمع البحث.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#population-sample",
   "label": "مجتمع البحث والعينة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العينات أدق من الحصر الشامل لعدم وجود أخطاء عينة.",
  "answer": false,
  "explanation": "خطأ: الحصر الشامل هو الأدق لعدم وجود أخطاء عينة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#census",
   "label": "الحصر الشامل مقابل العينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يفضل استخدام العينات عندما:",
  "options": [
   "المجتمع صغير جداً",
   "أخطاء السحب مكلفة",
   "الميزانية والوقت محدودان",
   "التباين كبير في مجتمع صغير"
  ],
  "answerIndex": 2,
  "explanation": "الميزانية والوقت.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#census",
   "label": "الحصر الشامل مقابل العينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يفضل الحصر الشامل عندما:",
  "options": [
   "الدراسة سرية",
   "يتطلب القياس إتلاف الأشياء",
   "المجتمع كبير",
   "تكاليف أخطاء السحب مرتفعة"
  ],
  "answerIndex": 3,
  "explanation": "والمجتمع صغير متباين.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#census",
   "label": "الحصر الشامل مقابل العينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا تطلب القياس استهلاك أو إتلاف الأشياء المختبرة فالعينات مفضلة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#census",
   "label": "الحصر الشامل مقابل العينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تحديد إطار العينة هو:",
  "options": [
   "التحليل",
   "قائمة بجميع مفردات المجتمع المستهدف",
   "جمع البيانات",
   "اختيار حجم العينة"
  ],
  "answerIndex": 1,
  "explanation": "المرحلة الثانية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sampling-process",
   "label": "مراحل سحب العينة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المرحلة الأخيرة لسحب العينة:",
  "options": [
   "خطة العينة",
   "تحديد الحجم",
   "جمع البيانات من مفردات العينة المختارة",
   "تحديد الإطار"
  ],
  "answerIndex": 2,
  "explanation": "السابعة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sampling-process",
   "label": "مراحل سحب العينة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المرحلة الأولى لسحب العينة:",
  "options": [
   "خطة العينة",
   "جمع البيانات",
   "تحديد وتعريف مجتمع البحث",
   "تحديد الحجم"
  ],
  "answerIndex": 2,
  "explanation": "الأولى.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sampling-process",
   "label": "مراحل سحب العينة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "حجم العينة يعتمد على اعتبارات الوقت والتكلفة والدقة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sampling-process",
   "label": "مراحل سحب العينة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "شرطا العينة العشوائية البسيطة:",
  "options": [
   "مفردات معروفة وتجانس",
   "إطار غير موجود",
   "مفردات مجهولة وتباين",
   "مجتمع كبير فقط"
  ],
  "answerIndex": 0,
  "explanation": "معرفة المفردات والتجانس.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#random-samples",
   "label": "أنواع العينات العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العينة التي تقسم المجتمع لكتل منفصلة تُسحب منها عينة من الكتل:",
  "options": [
   "القطاعية (العنقودية)",
   "الميسرة",
   "الحصصية",
   "الطبقية"
  ],
  "answerIndex": 0,
  "explanation": "القطاعية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#random-samples",
   "label": "أنواع العينات العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الفرق بين القطاعية والطبقية: في الطبقية يختار الباحث:",
  "options": [
   "كل الطبقات ويسحب المفردات منها",
   "لا يسحب مفردات",
   "عينة من الطبقات فقط",
   "مفردات واحدة"
  ],
  "answerIndex": 0,
  "explanation": "في القطاعية: عينة من القطاعات فقط.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#random-samples",
   "label": "أنواع العينات العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "القرعة وجدول الأرقام العشوائية أسلوبان لاختيار العينة:",
  "options": [
   "الميسرة",
   "التحكمية",
   "العشوائية البسيطة",
   "الحصصية"
  ],
  "answerIndex": 2,
  "explanation": "العشوائية البسيطة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#random-samples",
   "label": "أنواع العينات العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العينة الحصصية تعتمد على الصدفة والقصد في اختيار أفراد كل فئة وليس العشوائية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#nonrandom-samples",
   "label": "أنواع العينات غير العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مقابلة طلاب بمباني الجامعة لأنهم تواجدوا مثال على:",
  "options": [
   "التحكمية",
   "العينة الميسرة",
   "الطبقية",
   "القطاعية"
  ],
  "answerIndex": 1,
  "explanation": "ملاءمة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#nonrandom-samples",
   "label": "أنواع العينات غير العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي عينة تُستخدم بدراسة الرأي العام والدراسات التربوية؟",
  "options": [
   "الحصصية",
   "العشوائية البسيطة",
   "المنتظمة",
   "القطاعية"
  ],
  "answerIndex": 0,
  "explanation": "الحصصية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#nonrandom-samples",
   "label": "أنواع العينات غير العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العينات غير العشوائية لا تتم وفق الأسس الاحتمالية ويتدخل الباحث في اختيار مفرداتها.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-kinds",
   "label": "العشوائية وغير العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في العينة العشوائية يعطى كل فرد فرصة متساوية أو معروفة للاختيار.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-kinds",
   "label": "العشوائية وغير العشوائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عينات المقاطعة غير العشوائية عبر الإنترنت تُعد:",
  "options": [
   "عينة ملاءمة",
   "حصراً شاملاً",
   "عينة قطاعية",
   "عينة طبقية"
  ],
  "answerIndex": 0,
  "explanation": "تقاطع كل زائر.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#online-samples",
   "label": "العينات عبر الإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "بعينات المقاطعة العشوائية يختار البرنامج الزوار عشوائياً لسؤالهم عن المشاركة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#online-samples",
   "label": "العينات عبر الإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "كلما زاد التفاوت داخل مجتمع البحث:",
  "options": [
   "لا تأثير",
   "قل الحاجة لحجم عينة",
   "تُلغى العينة",
   "زادت الحاجة لحجم عينة أكبر"
  ],
  "answerIndex": 3,
  "explanation": "زيادة الحجم.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-size",
   "label": "حجم العينة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُقلل حجم العينة إذا توقع الباحث ارتفاع نسبة عدم الاستجابة.",
  "answer": false,
  "explanation": "خطأ: بيُزاد الحجم لتعويض عدم الاستجابة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-size",
   "label": "حجم العينة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "طريقة تحديد الحجم بالاهتداء بدراسات سابقة مشابهة تسمى:",
  "options": [
   "طريقة الميزانية",
   "طريقة الدراسات المقارنة",
   "المتوسطات",
   "طريقة النسبة المئوية"
  ],
  "answerIndex": 1,
  "explanation": "الدراسات المقارنة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sample-size",
   "label": "حجم العينة"
  }
 }
];
