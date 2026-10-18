/* بنك أسئلة الفصل 8 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH8_POOL = [
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المربع الذي يُظهر اسم الخلية المحددة (حرف العمود ورقم السطر):",
  "options": [
   "شريط الصيغة",
   "مربع الاسم Name Box",
   "شريط الحالة",
   "زر إدراج دالة"
  ],
  "answerIndex": 1,
  "explanation": "Name Box.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#interface",
   "label": "واجهة Excel 2016"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الشريط الذي تظهر فيه بيانات الخلية المحددة:",
  "options": [
   "شريط الصيغة Formula Bar",
   "مربع الاسم",
   "شريط أوراق العمل",
   "شريط العنوان"
  ],
  "answerIndex": 0,
  "explanation": "Formula Bar.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#interface",
   "label": "واجهة Excel 2016"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "زر ______ Function يستخدم لإدراج واستخدام التوابع الرياضية.",
  "acceptable": [
   "Insert",
   "insert",
   "إدراج"
  ],
  "explanation": "Insert Function (fx).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#interface",
   "label": "واجهة Excel 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المصنف عبارة عن ملف يتضمن مجموعة من أوراق العمل.",
  "answer": true,
  "explanation": "صح ✔️ — Workbook = مجموعة Worksheets.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#workbook",
   "label": "المصنفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "اختصار إنشاء مصنف جديد فارغ:",
  "options": [
   "Ctrl + O",
   "Ctrl + N",
   "Ctrl + W",
   "Ctrl + M"
  ],
  "answerIndex": 1,
  "explanation": "Ctrl + N.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#workbook",
   "label": "المصنفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يحتوي كل مصنف جديد على ورقة عمل افتراضية واحدة.",
  "answer": true,
  "explanation": "صح ✔️ — حسب المقرر.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#workbook",
   "label": "المصنفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإنشاء بيان فاتورة بسرعة دون تنسيقه من الصفر نختار:",
  "options": [
   "مصنف فارغ",
   "قالب جاهز مثل Invoice",
   "Save As",
   "Freeze Panes"
  ],
  "answerIndex": 1,
  "explanation": "القالب Template.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#workbook",
   "label": "المصنفات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضمن Excel يمكن إضافة أوراق عمل جديدة والتنقل بينها وحذفها وإعادة تسميتها ونقلها داخل المصنف أو إلى مصنف آخر.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من أجل تحديد أوراق عمل غير متجاورة نضغط باستمرار على مفتاح Shift ونحدد بالفأرة.",
  "answer": false,
  "explanation": "خطأ — للمتباعدة <b>Ctrl</b>، والـShift للمتجاورة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من أجل تحديد أوراق عمل متجاورة نضغط باستمرار على Ctrl ونحدد بالفأرة.",
  "answer": false,
  "explanation": "خطأ — للمتجاورة <b>Shift</b> (الأولى + الأخيرة).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يجب أن تكون ورقة العمل نشطة حتى يتمكن المستخدم من التنقل بين أوراق العمل.",
  "answer": false,
  "explanation": "خطأ — <b>يجب</b>؛ لما تنقر على اسم الورقة بتصير نشطة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن حذف أوراق العمل لكن يجب أن تبقى ورقة واحدة على الأقل ضمن المصنف.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن حذف كافة أوراق العمل في المصنف.",
  "answer": false,
  "explanation": "خطأ — <b>لا يمكن</b>؛ لازم تضل ورقة وحدة عالأقل.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن نسخ ورقة العمل إلى مكان آخر بالسحب والإفلات مع إبقاء الضغط على مفتاح Ctrl.",
  "answer": true,
  "explanation": "صح ✔️ — حسب المقرر: مع Ctrl = نسخ، وبلا Ctrl = نقل.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن نقل ونسخ أوراق العمل من علامة التبويب Home ← Cells ← Format.",
  "answer": true,
  "explanation": "صح ✔️ — Move or Copy Sheet، وفعّل Create a copy للنسخ.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار الانتقال لآخر ورقة عمل: Ctrl مع السهم الأيمن ضمن شريط أوراق العمل.",
  "answer": true,
  "explanation": "صح ✔️ — و Ctrl مع السهم الأيسر لأول ورقة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "اسم ورقة العمل الجديدة يكون بالشكل:",
  "options": [
   "Book2",
   "Sheet2",
   "Page2",
   "New sheet"
  ],
  "answerIndex": 1,
  "explanation": "كلمة Sheet + رقم.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإعادة تسمية ورقة عمل:",
  "options": [
   "نقر مزدوج على اسمها ثم كتابة الاسم الجديد",
   "زر يمين ← Rename",
   "الطريقتين صحيحتين"
  ],
  "answerIndex": 2,
  "explanation": "الاثنين صح، وبعدين Enter.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لنسخ ورقة العمل عبر نافذة Move or Copy نفعّل مربع Create a ______.",
  "acceptable": [
   "copy",
   "Copy",
   "نسخة"
  ],
  "explanation": "Create a copy.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#sheets",
   "label": "أوراق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تتألف ورقة العمل من صفوف وأعمدة وخلايا.",
  "answer": true,
  "explanation": "صح ✔️ — الصفوف بالأرقام، والأعمدة بالأحرف، والخلية تقاطعهم.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند إدراج عمود جديد فإن الإضافة تتم بعد العمود المحدد.",
  "answer": false,
  "explanation": "خطأ — <b>قبل</b> العمود المحدد.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن إضافة عدد من الصفوف أو الأعمدة عن طريق تحديد عدد منها بقدر العدد المراد إضافته.",
  "answer": true,
  "explanation": "صح ✔️ — بدك 4 أعمدة؟ حدد 4.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكن تعديل عرض عمود أو ارتفاع سطر عن طريق محددات الأعمدة والصفوف.",
  "answer": false,
  "explanation": "خطأ — <b>يمكن</b> (الخطوط اللي بين رؤوس الأعمدة والصفوف).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا أردنا تجميد أول ثلاثة سطور نحدد السطر الثالث.",
  "answer": false,
  "explanation": "خطأ — منحدد السطر <b>الرابع</b> (اللي بعدهم مباشرة).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير عرض العمود ليتناسب مع أكبر محتوياته نختار:",
  "options": [
   "Column Width",
   "AutoFit Column Width",
   "Freeze Panes",
   "Row Height"
  ],
  "answerIndex": 1,
  "explanation": "AutoFit Column Width.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "خيار تجميد الأجزاء موجود في علامة التبويب:",
  "options": [
   "Home",
   "Insert",
   "View",
   "Data"
  ],
  "answerIndex": 2,
  "explanation": "View ← Window ← Freeze Panes.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتجميد أول 3 أعمدة نحدد:",
  "options": [
   "العمود الثالث",
   "العمود الرابع",
   "العمود الأول",
   "الخلية A1"
  ],
  "answerIndex": 1,
  "explanation": "العمود اللي بعدهم مباشرة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لإلغاء التجميد نختار ______ Panes.",
  "acceptable": [
   "Unfreeze",
   "unfreeze"
  ],
  "explanation": "Unfreeze Panes.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#rowscols",
   "label": "الأعمدة والصفوف والتجميد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يبلغ العدد الأعظمي للأعمدة 1,048,576.",
  "answer": false,
  "explanation": "خطأ — الأعمدة <b>16,384</b>، والسطور 1,048,576.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يبلغ العدد الأعظمي للسطور 16,384.",
  "answer": false,
  "explanation": "خطأ — السطور <b>1,048,576</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يطلق على الخلايا المتتابعة اسم النطاق سواء كان عمودياً أو أفقياً.",
  "answer": true,
  "explanation": "صح ✔️ — Range، وبيتكتب بنقطتين: A1:D1.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "A1:D1 هو نطاق عمودي.",
  "answer": false,
  "explanation": "خطأ — <b>أفقي</b> (نفس السطر).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "A1:A4 نطاق أفقي.",
  "answer": false,
  "explanation": "خطأ — <b>عمودي</b> (نفس العمود).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى الخلية التالية بنفس العمود نضغط Shift + Enter.",
  "answer": false,
  "explanation": "خطأ — <b>Enter</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى الخلية السابقة بنفس العمود نضغط Enter.",
  "answer": false,
  "explanation": "خطأ — <b>Shift + Enter</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى الخلية التالية بنفس السطر نضغط Tab.",
  "answer": true,
  "explanation": "صح ✔️ — و Shift + Tab للسابقة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى أول خلية في الصف نضغط Home.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى أول خلية في ورقة العمل نضغط Home.",
  "answer": false,
  "explanation": "خطأ — <b>Ctrl + Home</b> (الخلية A1).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للانتقال إلى آخر خلية تم تحريرها Ctrl + End.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للتعديل على محتوى خلية دون فقدان المحتوى ننقر نقراً مزدوجاً على الخلية.",
  "answer": true,
  "explanation": "صح ✔️ — النقرة الوحدة والكتابة بتمسح القديم.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الخلية F3 هي نتيجة تقاطع:",
  "options": [
   "السطر F مع العمود 3",
   "العمود F مع السطر 3",
   "العمود 3 مع العمود F"
  ],
  "answerIndex": 1,
  "explanation": "حرف العمود + رقم السطر.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لحذف محتوى الخلايا المحددة:",
  "options": [
   "Delete",
   "Home ← Editing ← Clear ← Clear Contents",
   "الطريقتين"
  ],
  "answerIndex": 2,
  "explanation": "الاثنين.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cells",
   "label": "الخلايا والنطاقات والتنقل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار الاستبدال هو Ctrl + F.",
  "answer": false,
  "explanation": "خطأ — الاستبدال <b>Ctrl + H</b>، و Ctrl + F للبحث.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#find",
   "label": "البحث والاستبدال والفرز"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار البحث هو Ctrl + F.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#find",
   "label": "البحث والاستبدال والفرز"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "للفرز حسب عمود ثانٍ لنفس البيانات نستخدم Custom Sort ثم:",
  "options": [
   "Add Level",
   "Freeze Panes",
   "Find All",
   "Series"
  ],
  "answerIndex": 0,
  "explanation": "Add Level ← Then By.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#find",
   "label": "البحث والاستبدال والفرز"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أمر الفرز والتصفية في Excel يقع ضمن:",
  "options": [
   "Home ← Editing ← Sort & Filter",
   "View ← Window",
   "Insert ← Table",
   "File ← Options"
  ],
  "answerIndex": 0,
  "explanation": "Sort & Filter.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#find",
   "label": "البحث والاستبدال والفرز"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ميزة تساعد على إدخال البيانات بشكل سريع:",
  "options": [
   "نسخ",
   "التعبئة"
  ],
  "answerIndex": 1,
  "explanation": "التعبئة Fill: باقتراح، أو بالسلاسل، أو بمقبض التعبئة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#fill",
   "label": "التعبئة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مقبض التعبئة مربع أسود صغير في زاوية الخلية السفلية يتحول عنده المؤشر إلى إشارة +.",
  "answer": true,
  "explanation": "صح ✔️ — بتسحبه لتعبّي أرقام، تواريخ، أيام، أشهر، أو تطبّق معادلة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#fill",
   "label": "التعبئة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في نافذة السلاسل Series إذا كانت أول قيمة 0 و Step Value = 5 و Stop Value = 10 تكون السلسلة:",
  "options": [
   "0 – 5 – 10",
   "0 – 10",
   "5 – 10 – 15",
   "0 – 1 – 2 … 10"
  ],
  "answerIndex": 0,
  "explanation": "بتزيد 5 وبتوقف عند 10.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#fill",
   "label": "التعبئة"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "في نافذة Series، القيمة التي تنتهي عندها التعبئة تسمى ______ Value.",
  "acceptable": [
   "Stop",
   "stop"
  ],
  "explanation": "Stop Value، و Step Value مقدار الخطوة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#fill",
   "label": "التعبئة"
  }
 }
];
