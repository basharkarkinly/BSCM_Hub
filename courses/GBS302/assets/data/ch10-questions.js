/* بنك أسئلة الفصل 10 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH10_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "المخططات نوع من الرسوم البيانية تستخدم لإعادة تمثيل البيانات باستخدام الرسوم مثل الأعمدة والخطوط والدوائر.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#intro",
   "label": "شو هي المخططات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يوفر برنامج الجداول الإلكترونية مجموعة كبيرة ومتنوعة من المخططات لكل نوع من أنواع البيانات.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#intro",
   "label": "شو هي المخططات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الميزة الجديدة في Excel 2016 التي تحلل البيانات وتقترح أفضل مخطط لتمثيلها:",
  "options": [
   "Chart Filters",
   "Recommended Charts",
   "Pivot Chart",
   "Chart Styles"
  ],
  "answerIndex": 1,
  "explanation": "المخططات الموصى بها Recommended Charts.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#intro",
   "label": "شو هي المخططات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تُدرج المخططات في Excel من علامة التبويب:",
  "options": [
   "Home",
   "Insert",
   "Data",
   "View"
  ],
  "answerIndex": 1,
  "explanation": "Insert ← Charts.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#intro",
   "label": "شو هي المخططات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المخططات الدائرية والعمودية من أنواع المخططات في Excel.",
  "answer": true,
  "explanation": "صح ✔️ — ومعهم الخطية وغيرها.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تعد المخططات المحورية مفيدة في عرض البيانات التي تغيرت خلال فترة من الزمن أو لتوضيح المقارنات بين العناصر.",
  "answer": false,
  "explanation": "خطأ — هاد وصف <b>المخططات العمودية</b>.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن رسم البيانات المرتبة في عمود أو صف واحد وأكثر ضمن ورقة العمل باستخدام المخطط الدائري.",
  "answer": false,
  "explanation": "خطأ — الدائري بيرسم بيانات مرتبة بـ<b>عمود أو صف واحد فقط</b>.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المخطط العمودي لا يصلح إلا لتمثيل عنصر واحد.",
  "answer": false,
  "explanation": "خطأ — هاد <b>المخطط الدائري</b>. العمودي بيتعامل مع عدة سلاسل بيانات.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تعد المخططات الخطية خياراً مثالياً لإظهار اتجاهات البيانات عبر فترات زمنية متساوية أو عبر فئات أخرى.",
  "answer": true,
  "explanation": "صح ✔️ — القيم بتتمثل كنقاط على خط.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نوع المخطط المفيد لعرض البيانات التي تغيرت خلال فترة من الزمن أو لتوضيح المقارنات بين العناصر:",
  "options": [
   "الدائري",
   "العمودي",
   "المحوري",
   "الخطي"
  ],
  "answerIndex": 1,
  "explanation": "العمودي، وبيتعامل مع عدة سلاسل.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نوع المخطط الذي يعرض نقاط البيانات كنسبة مئوية من الكل ولا يصلح إلا لتمثيل عنصر واحد:",
  "options": [
   "العمودي",
   "الدائري",
   "الخطي",
   "المحوري"
  ],
  "answerIndex": 1,
  "explanation": "الدائري، متل نسبة الذكور والإناث بصف واحد.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من شروط استخدام المخطط الدائري:",
  "options": [
   "سلسلة بيانات واحدة فقط",
   "ألا تكون القيم سالبة",
   "ألا يوجد أكثر من سبع فئات",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "وكمان ما تكون معظم القيم صفر.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المخطط الأنسب لإظهار اتجاه درجات الحرارة عبر أيام الشهر:",
  "options": [
   "الدائري",
   "الخطي",
   "المحوري",
   "لا شيء"
  ],
  "answerIndex": 1,
  "explanation": "الخطي للاتجاهات عبر فترات زمنية متساوية.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لا يُستخدم المخطط الدائري عندما يوجد أكثر من ______ فئات.",
  "acceptable": [
   "سبع",
   "7",
   "سبعة"
  ],
  "explanation": "حسب المقرر: ما بيكون في أكتر من 7 فئات.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#types",
   "label": "المخططات العمودية والدائرية والخطية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لتحديد مخطط ننقر بزر الفأرة الأيسر نقراً مزدوجاً ضمن إطار المخطط فتظهر مقابض التحديد.",
  "answer": false,
  "explanation": "خطأ — <b>نقرة واحدة</b> ضمن إطار المخطط.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#ops",
   "label": "العمليات على المخططات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحذف المخطط نحدده ثم نضغط على مفتاح Delete.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#ops",
   "label": "العمليات على المخططات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير نوع مخطط موجود نستخدم:",
  "options": [
   "Design ← Type ← Change Chart Type",
   "Format ← Shape Fill",
   "Home ← Font",
   "Insert ← Pivot Table"
  ],
  "answerIndex": 0,
  "explanation": "Change Chart Type من Design.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#ops",
   "label": "العمليات على المخططات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير لون خلفية المخطط نستخدم من علامة التبويب Format الأمر:",
  "options": [
   "Shape Fill",
   "Chart Filters",
   "Change Chart Type",
   "Axis"
  ],
  "answerIndex": 0,
  "explanation": "Format ← Shape Styles ← Shape Fill.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#ops",
   "label": "العمليات على المخططات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يضع Excel بشكل افتراضي لصاقة عنوان المخطط Chart Title في أعلى المخطط.",
  "answer": true,
  "explanation": "صح ✔️ — بتنقر عليها وبتكتب العنوان الجديد.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#ops",
   "label": "العمليات على المخططات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "Axis للتحكم بإظهار وإخفاء المحورين.",
  "answer": true,
  "explanation": "صح ✔️ — من عناصر المخطط Chart Elements.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من عناصر المخطط المسؤول عن إظهار وإخفاء المحورين:",
  "options": [
   "Axis",
   "Legend",
   "Data Table",
   "Gridlines"
  ],
  "answerIndex": 0,
  "explanation": "المحاور Axis.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من عناصر المخطط أشرطة الخطأ لإظهار نسبة الخطأ والانحراف المعياري.",
  "answer": true,
  "explanation": "صح ✔️ — Error Bars.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عنصر المخطط الذي يتحكم بإظهار وإخفاء وسائل الإيضاح:",
  "options": [
   "Axis Titles",
   "Legend",
   "Trendline",
   "Data Labels"
  ],
  "answerIndex": 1,
  "explanation": "Legend.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عنصر المخطط الذي يُظهر خط الاتجاه:",
  "options": [
   "Gridlines",
   "Trendline",
   "Error Bars",
   "Data Table"
  ],
  "answerIndex": 1,
  "explanation": "Trendline.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الهدف من مرشحات المخطط Chart Filters:",
  "options": [
   "تغيير ألوان المخطط",
   "تحديد الحقول المطلوب إظهارها أو إخفاؤها",
   "تغيير نوع المخطط",
   "إضافة عنوان"
  ],
  "answerIndex": 1,
  "explanation": "Chart Filters.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تغيير ألوان المخطط يتم من مرشحات المخطط Chart Filters.",
  "answer": false,
  "explanation": "خطأ — من <b>أنماط المخطط Chart Styles</b> ← Color.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#elements",
   "label": "عناصر المخطط وأنماطه ومرشحاته"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الجدول المحوري عبارة عن تقرير مرن ديناميكي ينتج عن قاعدة بيانات كبيرة جداً.",
  "answer": true,
  "explanation": "صح ✔️ — بيساعد بتنظيم البيانات وتلخيصها وتحليلها.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مكونات الجدول المحوري:",
  "options": [
   "منطقة المرشحات",
   "منطقة الأعمدة",
   "منطقة الصفوف",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "4 مناطق: Filters · Columns · Rows · Values.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "نوع ملخص البيانات الذي نريد عرضه في الجدول المحوري يحدد في:",
  "options": [
   "منطقة المرشحات",
   "منطقة الأعمدة",
   "منطقة الصفوف",
   "منطقة القيم"
  ],
  "answerIndex": 3,
  "explanation": "Values.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإنشاء جدول محوري:",
  "options": [
   "Insert ← Tables ← PivotTable",
   "Home ← Styles",
   "Data ← Sort",
   "View ← Freeze Panes"
  ],
  "answerIndex": 0,
  "explanation": "Insert ← PivotTable.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "منطقة الجدول المحوري التي نضع فيها الحقول التي نريد تصفية النتائج بناءً عليها:",
  "options": [
   "Filters",
   "Columns",
   "Rows",
   "Values"
  ],
  "answerIndex": 0,
  "explanation": "المرشحات Filters.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير العملية على حقل في منطقة القيم (من المجموع إلى المتوسط مثلاً) نختار:",
  "options": [
   "Value Field Settings",
   "Change Chart Type",
   "Add Level",
   "Chart Filters"
  ],
  "answerIndex": 0,
  "explanation": "Value Field Settings ← Average.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "يتألف الجدول المحوري من ______ مناطق.",
  "acceptable": [
   "4",
   "أربع",
   "أربعة",
   "اربع"
  ],
  "explanation": "Filters · Columns · Rows · Values.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivot",
   "label": "الجداول المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المخطط المحوري تمثيل بياني للبيانات الملخصة عن طريق الجدول المحوري.",
  "answer": true,
  "explanation": "صح ✔️ — وبيتعامل معه متل المخططات العادية.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivotchart",
   "label": "المخططات المحورية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإنشاء مخطط محوري نحدد خلية من الجدول المحوري ثم:",
  "options": [
   "Insert ← Charts ← PivotChart",
   "Home ← Font",
   "Design ← Themes",
   "Data ← Filter"
  ],
  "answerIndex": 0,
  "explanation": "Insert ← PivotChart.",
  "ref": {
   "url": "chapters/chapter-10-lesson.html#pivotchart",
   "label": "المخططات المحورية"
  }
 }
];
