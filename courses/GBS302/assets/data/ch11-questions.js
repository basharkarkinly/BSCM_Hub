/* بنك أسئلة الفصل 11 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH11_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "قد لا يكون تنسيق أوراق العمل ضرورياً.",
  "answer": true,
  "explanation": "صح ✔️ — بس بيضفي جاذبية وبيسهّل القراءة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يجعل تنسيق أوراق العمل قراءة البيانات أكثر سهولة ويساعد الآخرين على إدراك المطلوب.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من تنسيقات أوراق العمل دمج الخلايا.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن دمج الخلايا عمودياً فقط.",
  "answer": false,
  "explanation": "خطأ — بتندمج خلايا متجاورة <b>أفقياً أو عمودياً</b>.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من تنسيقات محتوى الخلية التفاف النص.",
  "answer": false,
  "explanation": "خطأ — التفاف النص حسب المقرر من تنسيقات <b>أوراق العمل</b>.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لإلغاء دمج خلايا نحدد نطاق الخلايا ثم ننقر على أيقونة Merge & Center.",
  "answer": true,
  "explanation": "صح ✔️ — نفس الأيقونة للدمج والإلغاء.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند دمج خلايا غير فارغة تظهر رسالة تحذيرية بأن محتوى الخلية العلوية اليمينية فقط هو الذي سيبقى.",
  "answer": false,
  "explanation": "خطأ — العلوية <b>اليسارية</b>.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تظهر الخلايا في ورقة العمل عند طباعتها محددة بحدود.",
  "answer": false,
  "explanation": "خطأ — بتنطبع <b>بلا حدود</b>، ولازم تضيف Borders.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من تنسيقات أوراق العمل:",
  "options": [
   "دمج الخلايا",
   "ضبط اتجاه محتوى الخلايا",
   "إضافة حدود إلى الخلايا أو نطاق خلايا",
   "كل ما ذكر"
  ],
  "answerIndex": 3,
  "explanation": "كلها، ومعها التفاف النص والمحاذاة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإظهار النص على أكثر من سطر داخل نفس الخلية نستخدم:",
  "options": [
   "Merge & Center",
   "Wrap Text",
   "Orientation",
   "Borders"
  ],
  "answerIndex": 1,
  "explanation": "Home ← Alignment ← Wrap Text.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتدوير محتوى الخلية بزاوية 45 درجة عكس عقارب الساعة نستخدم:",
  "options": [
   "Wrap Text",
   "Orientation ← Angle Counterclockwise",
   "Merge & Center",
   "Align Left"
  ],
  "answerIndex": 1,
  "explanation": "Orientation.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "يُطبق دمج الخلايا عادة على ______ الأعمدة لتنسيقها وتوسيط محتوياتها.",
  "acceptable": [
   "عناوين",
   "العناوين"
  ],
  "explanation": "عناوين الأعمدة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#sheetfmt",
   "label": "تنسيق أوراق العمل (التفاف، محاذاة، دمج، حدود)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار لوحة المفاتيح للخط الغامق هو Ctrl + 2.",
  "answer": true,
  "explanation": "صح ✔️ — أو Ctrl + B.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cellfmt",
   "label": "تنسيق محتوى الخلايا"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار لوحة المفاتيح للتسطير هو Ctrl + 1.",
  "answer": false,
  "explanation": "خطأ — التسطير <b>Ctrl + 4</b> أو Ctrl + U.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cellfmt",
   "label": "تنسيق محتوى الخلايا"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار لوحة المفاتيح للخط المائل هو Ctrl + I.",
  "answer": true,
  "explanation": "صح ✔️ — أو Ctrl + 3.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cellfmt",
   "label": "تنسيق محتوى الخلايا"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير لون خلفية خلية نستخدم من مجموعة Font:",
  "options": [
   "Font Color",
   "Fill Color",
   "Borders",
   "Wrap Text"
  ],
  "answerIndex": 1,
  "explanation": "Fill Color لون التعبئة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cellfmt",
   "label": "تنسيق محتوى الخلايا"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تسمح ميزة التنسيق الشرطي بتطبيق تنسيقات معينة على خلايا محددة بشكل تلقائي.",
  "answer": true,
  "explanation": "صح ✔️ — بناءً على محتوى الخلية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند تغيير القيم في النطاق المطبق عليه التنسيق الشرطي فإن Excel يغير التنسيق تلقائياً.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عندما تتغير القيم في نطاق مطبق عليه التنسيق الشرطي فإن تنسيق الخلايا لا يتغير.",
  "answer": false,
  "explanation": "خطأ — بيتغيّر <b>تلقائياً بناءً على القيم الجديدة</b>.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تعتبر ميزة التنسيق الشرطي وسيلة ممتازة لاكتشاف أخطاء الإدخال أو القيم الشاذة في نطاق محدد.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مقاييس الألوان يمكننا من خلالها تطبيق مجموعة من أشرطة البيانات ذات الألوان المختلفة على النطاق المطلوب.",
  "answer": false,
  "explanation": "خطأ — هاد وصف <b>أشرطة البيانات Data Bars</b>. مقاييس الألوان لوحة ألوان ثنائية أو ثلاثية بتتدرج.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن الوصول إلى مجموعة كبيرة من معايير التنسيق، مثل الخلايا التي تحتوي أقل أو أكبر من قيمة محددة، من خلال:",
  "options": [
   "مقاييس الألوان",
   "قواعد تمييز الخلايا",
   "مجموعة الأيقونات"
  ],
  "answerIndex": 1,
  "explanation": "Highlight Cells Rules.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تتضمن خيارات لتحديد قواعد التنسيق الشرطي بناءً على القيم العليا والدنيا:",
  "options": [
   "القواعد العليا/الدنيا",
   "أشرطة البيانات",
   "مقاييس الألوان",
   "مجموعة الأيقونات"
  ],
  "answerIndex": 0,
  "explanation": "Top/Bottom Rules.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكننا من خلاله تطبيق مجموعة من أشرطة البيانات ذات الألوان المختلفة على النطاق المطلوب:",
  "options": [
   "القواعد العليا/الدنيا",
   "أشرطة البيانات",
   "مقاييس الألوان",
   "مجموعة الأيقونات"
  ],
  "answerIndex": 1,
  "explanation": "Data Bars.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتضمن لوحة ألوان ذات مقاييس ثلاثية أو ثنائية لتطبيقها على نطاق الخلايا:",
  "options": [
   "أشرطة البيانات",
   "مقاييس الألوان",
   "قواعد تمييز الخلايا",
   "مجموعة الأيقونات"
  ],
  "answerIndex": 1,
  "explanation": "Color Scales.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتضمن مجموعة من الأيقونات تطبق على نطاق لتمييز القيم من حيث علاقة كل منها بالأخرى:",
  "options": [
   "أشرطة البيانات",
   "مقاييس الألوان",
   "قواعد تمييز الخلايا",
   "مجموعة الأيقونات"
  ],
  "answerIndex": 3,
  "explanation": "Icon Sets.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن من خلال هذا الخيار إنشاء قاعدة تنسيق شرطي خاصة بالمستخدم:",
  "options": [
   "مسح القواعد",
   "إدارة القواعد",
   "قاعدة جديدة"
  ],
  "answerIndex": 2,
  "explanation": "New Rule.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن من خلال هذا الخيار الوصول إلى Conditional Formatting Rules Manager لتحرير وحذف القواعد وتعديل أولويتها:",
  "options": [
   "مسح القواعد",
   "إدارة القواعد",
   "قاعدة جديدة"
  ],
  "answerIndex": 1,
  "explanation": "Manage Rules.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أمر التنسيق الشرطي يقع ضمن:",
  "options": [
   "Home ← Styles",
   "Page Layout ← Page Setup",
   "Insert ← Charts",
   "View ← Window"
  ],
  "answerIndex": 0,
  "explanation": "Home ← Style ← Conditional Formatting.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مجموعة الأيقونات بالأسهم ثلاثية الألوان، القيم الدنيا تأخذ السهم:",
  "options": [
   "الأخضر",
   "الأصفر",
   "الأحمر"
  ],
  "answerIndex": 2,
  "explanation": "الأحمر للدنيا، الأصفر للوسطى، الأخضر للعليا.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا يمكن تطبيق أكثر من تنسيق شرطي على نفس نطاق الخلايا.",
  "answer": false,
  "explanation": "خطأ — فيك تطبّق أكتر من تنسيق، متل Data Bars + Icon Sets على نفس النطاق.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#cond",
   "label": "التنسيق الشرطي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الهوامش هي المنطقة الفارغة المحيطة بحدود الصفحة ويتم إضافة النص ضمنها.",
  "answer": false,
  "explanation": "خطأ — النص بينضاف <b>ضمن المنطقة الواقعة بين هوامش الصفحة</b>، مو جوّا الهوامش نفسها.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الهوامش العادية من الهوامش المخصصة.",
  "answer": false,
  "explanation": "خطأ — العادية Normal من الهوامش <b>المعرّفة مسبقاً</b> (مع Wide و Narrow). المخصصة Custom Margins.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لعرض الصفحة بالعرض نضغط على أيقونة Portrait من علامة التبويب Page Layout.",
  "answer": false,
  "explanation": "خطأ — <b>Landscape</b>. الـPortrait طولي.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "رؤوس وتذييل الصفحة هي المناطق خارج الهوامش العلوية والسفلية لورقة العمل.",
  "answer": false,
  "explanation": "خطأ — مناطق <b>ضمن</b> الهوامش العلوية والسفلية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكن إدراج رسوم بيانية ضمن الرؤوس والتذييل.",
  "answer": false,
  "explanation": "خطأ — <b>يمكن</b> إدراج نصوص أو رسومات بيانية.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحذف النصوص أو أي حقل في رأس وتذييل ورقة العمل يكفي أن نحدد الحقل ونضغط Delete.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في خيار خطوط الشبكة Gridlines يؤدي إلغاء تفعيل Print إلى إخفاء خطوط الشبكة أثناء العمل في الصفحة.",
  "answer": false,
  "explanation": "خطأ — الـPrint بيخفيها <b>أثناء طباعة ورقة العمل</b>. الـView للإخفاء أثناء العمل.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يسمح Excel بإضافة نص الرأس أو التذييل ضمن:",
  "options": [
   "مكانين",
   "3 أماكن: يسار، يمين، منتصف",
   "مكان واحد فقط"
  ],
  "answerIndex": 1,
  "explanation": "3 أماكن.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من الحقول التي يمكن إضافتها لرأس وتذييل ورقة العمل:",
  "options": [
   "رقم الصفحة وعدد الصفحات",
   "التاريخ والوقت الحاليين",
   "مسار الملف واسمه واسم الورقة",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "وكمان صورة.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "من الهوامش المعرّفة مسبقاً: العادية Normal والعريضة Wide والضيقة ______.",
  "acceptable": [
   "Narrow",
   "narrow"
  ],
  "explanation": "Normal · Wide · Narrow.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#setup",
   "label": "ضبط إعدادات ورقة العمل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لطباعة نطاق خلايا محدد نختار من Settings:",
  "options": [
   "Print Active Sheets",
   "Print Entire Workbook",
   "Print Selection",
   "Print Selected Chart"
  ],
  "answerIndex": 2,
  "explanation": "Print Selection.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#print",
   "label": "الطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتكرار صف عناوين الأعمدة في جميع الصفحات المطبوعة نستخدم:",
  "options": [
   "Freeze Panes",
   "Page Layout ← Print Titles ← Rows to repeat at top",
   "Wrap Text",
   "Merge & Center"
  ],
  "answerIndex": 1,
  "explanation": "Print Titles.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#print",
   "label": "الطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا لم نحدد الصفحات المطلوب طباعتها فإن Excel يطبع جميع الصفحات.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#print",
   "label": "الطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لطباعة كامل المصنف نختار:",
  "options": [
   "Print Active Sheets",
   "Print Entire Workbook",
   "Print Selection"
  ],
  "answerIndex": 1,
  "explanation": "Print Entire Workbook.",
  "ref": {
   "url": "chapters/chapter-11-lesson.html#print",
   "label": "الطباعة"
  }
 }
];
