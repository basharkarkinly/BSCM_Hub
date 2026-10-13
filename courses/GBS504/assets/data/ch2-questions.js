/* بنك أسئلة الفصل 2 — فصل 2.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH2_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكن استخدام برنامج Excel في مجال إدارة المشروع بشكل مباشر.",
  "answer": false,
  "explanation": "خطأ: يمكن الاستفادة من أدوات Excel (الجدولة والحسابات وSolver) في جوانب من إدارة المشاريع.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-excel-pm",
   "label": "Excel وإدارة المشاريع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أمر Sort يظهر في:",
  "options": [
   "قائمة Data",
   "قائمة Insert",
   "قائمة Home فقط",
   "قائمة View"
  ],
  "answerIndex": 0,
  "explanation": "أمر Sort موجود ضمن قائمة Data (البيانات).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sort",
   "label": "الفرز (Sort)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أمر Filter يظهر في:",
  "options": [
   "قائمة References",
   "قائمة Data",
   "قائمة Review",
   "قائمة Format"
  ],
  "answerIndex": 1,
  "explanation": "أمر Filter (التصفية) موجود ضمن قائمة Data تماماً مثل Sort.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-filter",
   "label": "التصفية (Filter)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يُفترض في \"حالة التأكد\" (Certainty) عند بناء نماذج الحل الأمثل أن تكون:",
  "options": [
   "بعض البيانات فقط معروفة الدرجة",
   "جميع البيانات درجة التأكد منها كاملة",
   "لا حاجة لأي بيانات",
   "الاعتماد على التقدير التقريبي فقط"
  ],
  "answerIndex": 1,
  "explanation": "حالة التأكد تعني أن كل البيانات معروفة ومؤكدة بالكامل دون أي هامش شك.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-certainty",
   "label": "حالة التأكد (Certainty)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من الشروط الواجب توافرها في قاعدة بيانات Excel:",
  "options": [
   "أن يحتوي كل عمود على نفس نوع البيانات",
   "عدم ترك أعمدة أو أسطر فارغة",
   "كل الخيارات صحيحة",
   "تخصيص السطر الأول لأسماء الحقول"
  ],
  "answerIndex": 2,
  "explanation": "كل هذه الشروط مطلوبة معاً لبناء قاعدة بيانات سليمة في Excel.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-db-rules",
   "label": "قاعدة بيانات Excel: الشروط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "للحصول على أرقام أو تواريخ متسلسلة تلقائياً في Excel نستخدم:",
  "options": [
   "خيار Freeze Panes",
   "خيار Auto Fill",
   "خيار Conditional Formatting",
   "خيار Data Validation"
  ],
  "answerIndex": 1,
  "explanation": "التعبئة التلقائية Auto Fill تُنتج سلاسل أرقام أو تواريخ متتالية بسحب مقبض التعبئة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-autofill",
   "label": "Auto Fill (التعبئة التلقائية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تكون الدالة صحيحة إذا كانت عملياتها مرتّبة بـ:",
  "options": [
   "إشارة يساوي، ثم الدالة، ثم القوس (بهذا الترتيب تماماً)",
   "القوس، ثم الدالة، ثم إشارة يساوي",
   "الدالة فقط دون أي رموز أخرى",
   "لا يوجد ترتيب محدد"
  ],
  "answerIndex": 0,
  "explanation": "الترتيب الصحيح إلزامي: = ثم اسم الدالة ثم القوس، وهذا الترتيب هو الأهم في الإجابة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-function-syntax",
   "label": "ترتيب كتابة الدالة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تكون الخلية \"نشطة\" (Active Cell) في Excel عندما:",
  "options": [
   "تحتوي على دالة",
   "تكون في العمود الأول فقط",
   "تكون ملوّنة باللون الأصفر",
   "تكون محاطة بإطار أسود سميك"
  ],
  "answerIndex": 3,
  "explanation": "علامة الخلية النشطة هي الإطار الأسود السميك المحيط بها.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-active-cell",
   "label": "الخلية النشطة (Active Cell)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتبيّن محتوى الخلية والعمليات الجارية خلالها من خلال:",
  "options": [
   "شريط الصيغة",
   "شريط العنوان",
   "مربع الاسم",
   "شريط الحالة"
  ],
  "answerIndex": 0,
  "explanation": "شريط الصيغة (Formula Bar) يُظهر محتوى الخلية المحددة فعلياً وليس فقط نتيجتها.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-formula-bar",
   "label": "شريط الصيغة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لمعرفة ربحية استثمار معيّن باستخدام معدل الخصم وسلسلة من الدفعات المستقبلية، نستخدم دالة:",
  "options": [
   "<span class=\"mono\">INT</span>",
   "<span class=\"mono\">PV</span>",
   "<span class=\"mono\">FV</span>",
   "<span class=\"mono\">NPV</span>"
  ],
  "answerIndex": 3,
  "explanation": "NPV تحسب صافي القيمة الحالية بالاعتماد على معدل خصم وسلسلة تدفقات (دفعات وإيرادات).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-npv",
   "label": "NPV"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لمعرفة القيمة المستقبلية لاستثمار معيّن نستخدم دالة:",
  "options": [
   "<span class=\"mono\">PV</span>",
   "<span class=\"mono\">FV</span>",
   "<span class=\"mono\">NPV</span>",
   "<span class=\"mono\">SUBTOTAL</span>"
  ],
  "answerIndex": 1,
  "explanation": "FV = Future Value، تحسب القيمة المستقبلية لاستثمار بدفعات دورية ثابتة ومعدل فائدة ثابت.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-fv",
   "label": "FV"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لمعرفة جدوى استثمار طويل الأجل والقيمة الحالية للتدفقات النقدية من بديل استثماري معين نستخدم دالة:",
  "options": [
   "<span class=\"mono\">FV</span>",
   "<span class=\"mono\">COUNT</span>",
   "<span class=\"mono\">PV</span>",
   "<span class=\"mono\">NPV</span>"
  ],
  "answerIndex": 2,
  "explanation": "PV = Present Value، تُحسب بها القيمة الحالية للتدفقات النقدية المستقبلية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-pv",
   "label": "PV"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الفرق بين \"حفظ\" و\"حفظ باسم\" هو أنّ \"حفظ باسم\":",
  "options": [
   "يُغلق البرنامج تلقائياً",
   "يحذف الملف الأصلي نهائياً",
   "لا فرق بينهما",
   "يحفظ الملف بنسخة إضافية جديدة"
  ],
  "answerIndex": 3,
  "explanation": "\"حفظ باسم\" (Save As) يُنشئ نسخة إضافية من الملف باسم أو مسار جديد، بخلاف \"حفظ\" (Save) التي تحفظ فوق الملف الحالي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-save-as",
   "label": "حفظ باسم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في جدول بيانات Excel، حقول الأسماء (Field Names) تكون في:",
  "options": [
   "آخر سطر",
   "السطر الأول",
   "العمود الأول",
   "لا تحديد معيّن"
  ],
  "answerIndex": 1,
  "explanation": "أسماء الحقول يجب أن تكون دوماً في السطر الأول من قاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-db-rules",
   "label": "قاعدة بيانات Excel: الشروط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التغيّر الذي سيحصل في الخلية عند نسخ الصيغة <span class=\"mono\">$A$2+A1</span> إلى خلية أخرى:",
  "options": [
   "يتغيّر كلاهما",
   "يتغيّر $A$2 فقط",
   "يتغيّر A1 فقط",
   "لا يتغيّر أي منهما"
  ],
  "answerIndex": 2,
  "explanation": "$A$2 مرجع مطلق (ثابت تماماً)، أما A1 فمرجع نسبي يتغيّر تلقائياً عند النسخ أو النقل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-example",
   "label": "مثال على المراجع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا وُضعت إشارة $ قبل العمود فقط أو قبل السطر فقط، يكون المرجع:",
  "options": [
   "نسبي",
   "مطلق",
   "غير صالح",
   "مختلط"
  ],
  "answerIndex": 3,
  "explanation": "تثبيت أحد الاثنين (العمود أو السطر) فقط دون الآخر يُنتج مرجعاً مختلطاً.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-mixed",
   "label": "مختلط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا وُضعت إشارة $ قبل العمود وقبل السطر معاً، يكون المرجع:",
  "options": [
   "مختلط",
   "نسبي",
   "خاطئ",
   "مطلق"
  ],
  "answerIndex": 3,
  "explanation": "تثبيت العمود والسطر معاً بعلامتَي $ يجعل المرجع مطلقاً بالكامل: مثل $A$1.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-absolute",
   "label": "مطلق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتغيّر عنوان الخلية \"الـ .......\" في حال نقلها إلى خلية أخرى (بالتعبئة التلقائية):",
  "options": [
   "المطلق",
   "لا شيء يتغيّر",
   "المختلط بالكامل",
   "النسبي"
  ],
  "answerIndex": 3,
  "explanation": "المرجع النسبي هو الذي يتغيّر تلقائياً تبعاً لموضع الخلية الجديد.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-relative",
   "label": "نسبي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ماذا يعني الرمز <span class=\"mono\">#</span> في خلية Excel؟",
  "options": [
   "حروف وأرقام لا تتّسع في عرض الخلية",
   "خطأ في الصيغة دائماً",
   "رقم عشري",
   "قيمة فارغة"
  ],
  "answerIndex": 0,
  "explanation": "ظهور # يعني أن عرض الخلية غير كافٍ لعرض المحتوى (أرقام/تواريخ) وليس بالضرورة خطأً حسابياً.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ماذا يعني الرمز <span class=\"mono\">*</span> في البحث/التصفية النصية؟",
  "options": [
   "حرف واحد فقط",
   "نهاية النص",
   "رقم عشري فقط",
   "حروف وأرقام مجهولة بعدد غير محدد"
  ],
  "answerIndex": 3,
  "explanation": "* يمثل عدداً غير محدد من الحروف/الأرقام المجهولة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ماذا يعني الرمز <span class=\"mono\">?</span> في البحث/التصفية النصية؟",
  "options": [
   "لا شيء",
   "حرف أو رقم مجهول واحد فقط",
   "نهاية الملف",
   "عدد غير محدد من الحروف"
  ],
  "answerIndex": 1,
  "explanation": "? يمثل حرفاً أو رقماً مجهولاً واحداً بالضبط، بعكس * التي تمثل عدداً غير محدد.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الخلية الواقعة في العمود الأول والسطر الخامس تُسمّى:",
  "options": [
   "<span class=\"mono\">E1</span>",
   "<span class=\"mono\">A5</span>",
   "<span class=\"mono\">1E</span>",
   "5A مقلوبة بلا معنى"
  ],
  "answerIndex": 1,
  "explanation": "التسمية الصحيحة تبدأ بحرف العمود ثم رقم السطر: A5.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-cell-name",
   "label": "تسمية الخلية (A5)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الخلية E12 تمثل:",
  "options": [
   "العمود A والسطر 12",
   "لا معنى محدد",
   "السطر 12 والعمود 5 (E)",
   "السطر 5 والعمود 12"
  ],
  "answerIndex": 2,
  "explanation": "E هو العمود الخامس، و12 هو رقم السطر، فتمثل الخلية: السطر 12 من العمود E (الخامس).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-cell-name",
   "label": "تسمية الخلية (A5)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة تُظهر تاريخ اليوم الحالي:",
  "options": [
   "<span class=\"mono\">DATE</span>",
   "NOW فقط",
   "<span class=\"mono\">TIME</span>",
   "<span class=\"mono\">TODAY</span>"
  ],
  "answerIndex": 3,
  "explanation": "=TODAY() تُظهر تاريخ اليوم الحالي فقط دون الوقت.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-today",
   "label": "TODAY"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يبدأ تاريخ Excel في:",
  "options": [
   "1900/1/1 ويأخذ القيمة 1",
   "1970/1/1",
   "2000/1/1 ويأخذ القيمة 1",
   "1900/1/1 ويأخذ القيمة صفر"
  ],
  "answerIndex": 0,
  "explanation": "أول تاريخ في نظام Excel هو 1900/1/1 وقيمته الرقمية (Serial Number) هي 1.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-dates",
   "label": "التواريخ في Excel"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ينتهي مدى التاريخ في Excel في عام:",
  "options": [
   "2999",
   "2100",
   "لا نهاية محددة",
   "9999"
  ],
  "answerIndex": 3,
  "explanation": "أقصى تاريخ يقبله Excel هو 31/12/9999.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-dates",
   "label": "التواريخ في Excel"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعمل الرسم البياني (Chart) على:",
  "options": [
   "تمثيل البيانات بشكل رسوم بيانية",
   "فرز البيانات أبجدياً فقط",
   "تشفير الملف",
   "حذف البيانات المكررة"
  ],
  "answerIndex": 0,
  "explanation": "Chart أداة لتمثيل البيانات الرقمية بصرياً (أعمدة، خطوط، دائرية...).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-chart",
   "label": "Chart"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يُستخدم لإظهار البيانات المطابقة لمعيار معيّن وإخفاء باقي البيانات:",
  "options": [
   "<span class=\"mono\">Sort</span>",
   "<span class=\"mono\">Filter</span>",
   "<span class=\"mono\">Chart</span>",
   "<span class=\"mono\">Validation</span>"
  ],
  "answerIndex": 1,
  "explanation": "Filter (التصفية) تُظهر فقط السجلات المطابقة للمعيار وتُخفي غيرها دون حذفها.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-filter",
   "label": "التصفية (Filter)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من وسائط دالة IF: logical_test، value_if_true، value_if_false. أيّ الوسائط التالية غير موجود أساساً في الدالة؟",
  "options": [
   "<span class=\"mono\">Certain</span>",
   "<span class=\"mono\">value_if_true</span>",
   "<span class=\"mono\">value_if_false</span>",
   "<span class=\"mono\">logical_test</span>"
  ],
  "answerIndex": 0,
  "explanation": "دالة IF تحتوي فقط الوسائط الثلاثة: شرط منطقي، القيمة عند التحقق، القيمة عند عدم التحقق — لا يوجد وسيط باسم Certain.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-bool",
   "label": "الدوال والقيم المنطقية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من طرق إدخال البيانات إلى قاعدة بيانات Excel:",
  "options": [
   "كل الخيارات صحيحة",
   "باستخدام الصيغ للأعمدة المحسوبة",
   "الإدخال المباشر من لوحة المفاتيح",
   "من خلال نافذة نموذج Form"
  ],
  "answerIndex": 0,
  "explanation": "كل هذه الطرق الأربع مذكورة كطرق صحيحة لإدخال البيانات.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-if-args",
   "label": "وسائط دالة IF"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة العملية: <span class=\"mono\">=4=3+1*1</span> ؟",
  "options": [
   "خطأ في الصيغة",
   "<span class=\"mono\">False</span>",
   "4",
   "<span class=\"mono\">True</span>"
  ],
  "answerIndex": 3,
  "explanation": "1*1=1، ثم 3+1=4، ثم 4=4 → الناتج True.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-bool",
   "label": "الدوال والقيم المنطقية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الأداة التي تُستخدم لإيجاد الحل الأمثل (أعظم ربح أو أقل تكلفة):",
  "options": [
   "<span class=\"mono\">Goal Seek</span>",
   "<span class=\"mono\">Data Validation</span>",
   "<span class=\"mono\">PivotTable</span>",
   "<span class=\"mono\">Solver</span>"
  ],
  "answerIndex": 3,
  "explanation": "Solver تصل لقيمة مثلى بصيغة خلية الهدف من خلال تغيير قيم خلايا مرتبطة وفق قيود محددة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-solver",
   "label": "Solver"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "نقول عن استثمار أنّه \"مربح\" إذا كان:",
  "options": [
   "معدل الخصم فيه يساوي صفراً دائماً",
   "صافي قيمته الحالية أصغر من الصفر",
   "القيمة المستقبلية له سالبة",
   "صافي قيمته الحالية (NPV) أكبر من الصفر"
  ],
  "answerIndex": 3,
  "explanation": "الاستثمار يُعتبر مربحاً حين تكون NPV > 0.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-npv-profit",
   "label": "الاستثمار مربح"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لعمل قاعدة بيانات في Excel ضمن نفس ورقة العمل التي تحوي بيانات أخرى، يجب:",
  "options": [
   "دمج كل الخلايا",
   "ترك سطر وعمود فارغين للفصل بينهما",
   "حذف البيانات الأخرى نهائياً",
   "لا حاجة لأي إجراء"
  ],
  "answerIndex": 1,
  "explanation": "يُفضّل تخصيص ورقة مستقلة، وإن تعذّر ذلك يجب الفصل بسطر وعمود فارغين.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-db-rules",
   "label": "قاعدة بيانات Excel: الشروط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التصفية التلقائية (AutoFilter) تُستخدم للبحث عن البيانات ضمن معيار عبر أمر:",
  "options": [
   "<span class=\"mono\">Filter</span>",
   "<span class=\"mono\">Validate</span>",
   "<span class=\"mono\">Sort</span>",
   "<span class=\"mono\">Format</span>"
  ],
  "answerIndex": 0,
  "explanation": "AutoFilter هي أحد أنواع أمر Filter في قائمة Data.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-filter",
   "label": "التصفية (Filter)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أداة Data Validation تفيد في:",
  "options": [
   "تلوين الخلايا فقط",
   "دمج الخلايا",
   "التحقق من صحة إدخال البيانات نوعاً وقيمة",
   "حذف الصفوف المكررة"
  ],
  "answerIndex": 2,
  "explanation": "Data Validation تُقيّد نوع وقيمة البيانات المسموح إدخالها، وتُظهر رسائل تنبيه أو إرشاد.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-validation",
   "label": "Data Validation"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الصيغة <span class=\"mono\">$E$1+$C$2</span> تحتوي على مرجع:",
  "options": [
   "غير صحيح",
   "مختلط",
   "نسبي",
   "مطلق"
  ],
  "answerIndex": 3,
  "explanation": "كلا الطرفين مثبتان بالكامل ($ قبل الحرف وقبل الرقم) → مرجع مطلق.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-absolute",
   "label": "مطلق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ترتيب أولوية العمليات الحسابية الصحيح في Excel:",
  "options": [
   "عمليات المقارنة أولاً ثم الأقواس",
   "الأقواس ← الرفع لقوة ← الضرب والقسمة ← الجمع والطرح ← عمليات الضم (&) ← المقارنة",
   "الجمع والطرح أولاً ثم الأقواس",
   "لا يوجد ترتيب ثابت"
  ],
  "answerIndex": 1,
  "explanation": "هذا هو الترتيب الرسمي والمهم جداً بامتحانات هذه المادة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند حساب عملية منطقية نتيجتها TRUE ضمن عملية حسابية، فإنها تأخذ القيمة:",
  "options": [
   "1",
   "100",
   "لا قيمة رقمية لها",
   "0"
  ],
  "answerIndex": 0,
  "explanation": "TRUE تُعامَل كـ1 وFALSE كـ0 عند استخدامها داخل عملية حسابية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-bool",
   "label": "الدوال والقيم المنطقية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أنواع مراجع الصيغ في Excel:",
  "options": [
   "النسبي فقط",
   "لا يوجد تصنيف",
   "النسبي + المطلق + المختلط",
   "المطلق فقط"
  ],
  "answerIndex": 2,
  "explanation": "ثلاثة أنواع للمراجع: نسبي، مطلق، مختلط.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-relative",
   "label": "نسبي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة الصيغة: <span class=\"mono\">=1&(11*1/1)&11</span> ؟ (اكتب الناتج كسلسلة أرقام متصلة)",
  "options": [
   "111111",
   "23",
   "1111",
   "11111"
  ],
  "answerIndex": 3,
  "explanation": "11*1/1 = 11، وبالضمّ (&): \"1\" & \"11\" & \"11\" = \"11111\".",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة: <span class=\"mono\">=(-2/2*4)/(-4)</span> ؟",
  "options": [
   "2",
   "1",
   "4",
   "-1"
  ],
  "answerIndex": 1,
  "explanation": "‎-2/2 = -1، ‎-1×4 = -4، ثم (-4)/(-4) = 1.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=(3*3=9/2)+11</span> ؟",
  "options": [
   "21",
   "0",
   "11",
   "12"
  ],
  "answerIndex": 2,
  "explanation": "3*3=9، و9/2=4.5، وبالتالي 9=4.5 → False = 0. فيكون الناتج 0+11 = 11.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=(3*3=9)+11</span> ؟",
  "options": [
   "0",
   "12",
   "11",
   "9"
  ],
  "answerIndex": 1,
  "explanation": "3*3=9 → 9=9 صحيح → True = 1. فيكون الناتج 1+11 = 12.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=(100-79=21)+79</span> ؟",
  "options": [
   "100",
   "79",
   "80",
   "21"
  ],
  "answerIndex": 2,
  "explanation": "100-79=21، و21=21 صحيح → True=1، فيكون الناتج 1+79=80.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة العملية: <span class=\"mono\">=8+8/4</span> ؟",
  "options": [
   "2",
   "4",
   "10",
   "16"
  ],
  "answerIndex": 2,
  "explanation": "حسب أولوية العمليات: 8/4=2 أولاً، ثم 8+2=10.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة الصيغة: <span class=\"mono\">=10&(1+10)</span> ؟ (اكتب الناتج كسلسلة متصلة)",
  "options": [
   "1010",
   "21",
   "1011",
   "1111"
  ],
  "answerIndex": 2,
  "explanation": "يُحسب الجمع أولاً: 1+10=11، ثم الضمّ: \"10\" & \"11\" = \"1011\".",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة: <span class=\"mono\">=(4=8/4)</span> ؟",
  "options": [
   "<span class=\"mono\">False</span>",
   "4",
   "<span class=\"mono\">True</span>",
   "2"
  ],
  "answerIndex": 0,
  "explanation": "8/4=2، و4=2 غير صحيح → الناتج False.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة: <span class=\"mono\">=(4=8/2)</span> ؟",
  "options": [
   "<span class=\"mono\">True</span>",
   "<span class=\"mono\">False</span>",
   "8",
   "2"
  ],
  "answerIndex": 0,
  "explanation": "8/2=4، و4=4 صحيح → الناتج True.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة العملية: <span class=\"mono\">=8+232/2</span> ؟",
  "options": [
   "120",
   "240",
   "124",
   "116"
  ],
  "answerIndex": 2,
  "explanation": "232/2=116 أولاً حسب الأولوية، ثم 8+116=124.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة العملية: <span class=\"mono\">=17-1+4/4</span> ؟",
  "options": [
   "4",
   "20",
   "17",
   "16"
  ],
  "answerIndex": 2,
  "explanation": "4/4=1 أولاً، ثم 17-1+1=17.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>لدينا العمود A في الجدول أعلاه. ما نتيجة <span class=\"mono\">=SUM(A1:A5)</span> ؟",
  "options": [
   "40",
   "65",
   "45",
   "41"
  ],
  "answerIndex": 0,
  "explanation": "SUM ضمن نطاق يتجاهل النص والقيم المنطقية: -5+20+25 = 40.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>أي صيغة صحيحة لجمع الخلايا من A1 إلى A5 (النطاق المتصل)؟",
  "options": [
   "<span class=\"mono\">SUM(A1,A5)</span>",
   "<span class=\"mono\">SUM(A1:A5)</span>",
   "<span class=\"mono\">SUM(A1;A5)</span>",
   "<span class=\"mono\">SUM(A1.A5)</span>"
  ],
  "answerIndex": 1,
  "explanation": "النطاق المتصل بين خليتين يُكتب بنقطتين رأسيتين : بين الخليتين، وليس بفاصلة أو نقطة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=SUM(A1:A5,60)</span> ؟",
  "options": [
   "60",
   "100",
   "40",
   "160"
  ],
  "answerIndex": 1,
  "explanation": "40 (نتيجة النطاق) + 60 (المضافة مباشرة) = 100.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=SUM(A1:A5,TRUE)</span> ؟",
  "options": [
   "41",
   "45",
   "1",
   "40"
  ],
  "answerIndex": 0,
  "explanation": "40 (النطاق) + 1 (TRUE المُدرجة مباشرة كوسيط تُحسب فعلياً) = 41.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=SUM(A1:A8,TRUE)</span> ؟",
  "options": [
   "41",
   "42",
   "65",
   "40"
  ],
  "answerIndex": 0,
  "explanation": "SUM(A1:A8) داخل النطاق = 40 (تتجاهل A5,A7,A8 المنطقية)، + TRUE المباشرة = 1 → المجموع 41.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=SUM(A1:A8,FALSE)</span> ؟",
  "options": [
   "39",
   "41",
   "0",
   "40"
  ],
  "answerIndex": 3,
  "explanation": "40 (النطاق) + 0 (FALSE المباشرة) = 40.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-sum",
   "label": "SUM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=COUNT(A1:A8)</span> ؟",
  "options": [
   "8",
   "7",
   "3",
   "5"
  ],
  "answerIndex": 2,
  "explanation": "COUNT تحسب الخلايا الرقمية فقط: A2, A3, A4 → 3 خلايا.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-count",
   "label": "COUNT"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=COUNTA(A1:A8)</span> ؟",
  "options": [
   "3",
   "6",
   "8",
   "7"
  ],
  "answerIndex": 3,
  "explanation": "COUNTA تحسب كل الخلايا غير الفارغة (نص+أرقام+منطقية): 7 خلايا (باستثناء A6 الفارغة).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-counta",
   "label": "COUNTA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=MIN(A1:A8)</span> ؟",
  "options": [
   "0",
   "<span class=\"mono\">TRUE</span>",
   "-5",
   "20"
  ],
  "answerIndex": 2,
  "explanation": "MIN تتجاهل النص والمنطقية وتأخذ أصغر رقم: -5.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-minmax",
   "label": "MIN / MAX"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=MIN(A3:A8)</span> ؟",
  "options": [
   "-5",
   "25",
   "0",
   "20"
  ],
  "answerIndex": 3,
  "explanation": "ضمن A3:A8 الأرقام الفعلية هي 20 و25 فقط (تتجاهل المنطقية)، فالأصغر 20.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-minmax",
   "label": "MIN / MAX"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=MINA(A1:A8)</span> ؟",
  "options": [
   "0",
   "20",
   "-5",
   "1"
  ],
  "answerIndex": 2,
  "explanation": "MINA تُدخل النص كـ0 والمنطقية كـ1/0، فتبقى -5 الأصغر على أي حال.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-mina",
   "label": "MINA / MAXA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=MINA(A3:A8)</span> ؟",
  "options": [
   "1",
   "20",
   "25",
   "0"
  ],
  "answerIndex": 3,
  "explanation": "ضمن A3:A8: 20, 25, TRUE(1), FALSE(0) → الأصغر هو 0 (من FALSE).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-mina",
   "label": "MINA / MAXA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=MINA(A3:A7)</span> ؟",
  "options": [
   "20",
   "1",
   "0",
   "25"
  ],
  "answerIndex": 1,
  "explanation": "ضمن A3:A7: 20, 25, TRUE(1), TRUE(1) → الأصغر بينها هو 1.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-mina",
   "label": "MINA / MAXA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=AVERAGE(A1:A8)</span> ؟",
  "options": [
   "13.33",
   "6",
   "40",
   "8.5"
  ],
  "answerIndex": 0,
  "explanation": "المتوسط للأرقام فقط: (-5+20+25)/3 = 13.33.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-average",
   "label": "AVERAGE"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "<div class=\"tbl-wrap q-data\"><table class=\"cmp\"><tr><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>A5</th><th>A6</th><th>A7</th><th>A8</th></tr><tr><td>أحمد</td><td>-5</td><td>20</td><td>25</td><td>TRUE</td><td>(فارغة)</td><td>TRUE</td><td>FALSE</td></tr></table></div>ما نتيجة <span class=\"mono\">=AVERAGEA(A1:A8)</span> ؟",
  "options": [
   "7",
   "6",
   "13.33",
   "0"
  ],
  "answerIndex": 1,
  "explanation": "AVERAGEA تحسب كل الخلايا غير الفارغة (نص=0, منطقية=1/0): (0-5+20+25+1+1+0)/7 = 42/7 = 6.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-averagea",
   "label": "AVERAGEA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة SUBTOTAL برقم دالة من 1 إلى 11 (مثل 9):",
  "options": [
   "تتجاهل الصفوف المخفية دائماً",
   "لا تدعم دالة SUM",
   "تُدرج قيم الصفوف المخفية ضمن الحساب",
   "تعمل فقط على الأعمدة النصية"
  ],
  "answerIndex": 2,
  "explanation": "رقم الدالة 1-11 (كـ9=SUM) يشمل الصفوف المخفية بالحساب.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-subtotal",
   "label": "SUBTOTAL"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة SUBTOTAL برقم دالة من 101 إلى 111 (مثل 109):",
  "options": [
   "تُدرج الصفوف المخفية بالحساب",
   "غير موجودة أصلاً",
   "تحسب النص فقط",
   "تتجاهل الصفوف المخفية وتحسب المرئية فقط"
  ],
  "answerIndex": 3,
  "explanation": "إضافة 100 لرقم الدالة (101-111) يجعلها تتجاهل الصفوف المخفية وتحسب الظاهرة فقط.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-subtotal",
   "label": "SUBTOTAL"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم دالة INT لـ:",
  "options": [
   "إعطاء القيمة الصحيحة للناتج دون الفواصل (كسور)",
   "عكس ترتيب الأرقام",
   "تقريب الرقم لأقرب عشرة",
   "حساب الجذر التربيعي"
  ],
  "answerIndex": 0,
  "explanation": "INT تُرجع الجزء الصحيح من الرقم وتحذف الكسور العشرية (بالتقريب للأسفل).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-int",
   "label": "INT"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "كل خلية في Excel تُسمّى باسم:",
  "options": [
   "رقم تسلسلي فقط",
   "لا تسمية محددة",
   "السطر والعمود التابعَين لها معاً",
   "اسم الورقة فقط"
  ],
  "answerIndex": 2,
  "explanation": "اسم الخلية = دمج حرف العمود ورقم السطر (مثل B7).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-cell-name",
   "label": "تسمية الخلية (A5)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن لكل خلية في Excel أن تحتوي على بيانات من نوع:",
  "options": [
   "نص فقط",
   "نصية، رقمية، تاريخ...إلخ",
   "أرقام فقط",
   "لا يمكن تخزين أي بيانات"
  ],
  "answerIndex": 1,
  "explanation": "الخلية تقبل أنواعاً متعددة من البيانات: نص، رقم، تاريخ، منطقية، وغيرها.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-cell-types",
   "label": "أنواع بيانات الخلية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "كلما اقترب معامل التحديد (R²) لخط الاتجاه من الواحد (1)، فإن الاعتماد عليه في التنبؤ يكون:",
  "options": [
   "أضعف",
   "مستحيلاً",
   "أفضل",
   "بلا تأثير"
  ],
  "answerIndex": 2,
  "explanation": "كلما اقترب R² من 1 كان تطابق خط الاتجاه مع البيانات الفعلية أعلى، وكان الاعتماد عليه أفضل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-trendline",
   "label": "خط الاتجاه (Trendline)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تهدف برمجيات \"الحل الأمثل\" (Optimization) في الإدارة أساساً إلى:",
  "options": [
   "مراقبة جدولة المشاريع الضخمة فقط (كأداة إدارة مشاريع)",
   "تصميم واجهات المستخدم",
   "التوصل إلى حل يحقق أكبر ربح أو أقل تكلفة ضمن قيود محددة",
   "إدارة قواعد البيانات فقط"
  ],
  "answerIndex": 2,
  "explanation": "برمجيات الحل الأمثل (كـ Solver) هدفها تعظيم/تصغير دالة هدف ضمن قيود — وهي غير مخصصة لجدولة ومراقبة المشاريع (تلك وظيفة أدوات إدارة مشاريع مثل MS Project).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-solver",
   "label": "Solver"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما نتيجة العملية: <span class=\"mono\">=(2+3)*2^2</span> ؟",
  "options": [
   "13",
   "20",
   "14",
   "25"
  ],
  "answerIndex": 1,
  "explanation": "الأقواس أولاً: 2+3=5، ثم القوة: 2^2=4، ثم الضرب: 5*4=20.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت الخلية A1 تحتوي 12 وB1 تحتوي 3، فما نتيجة <span class=\"mono\">=A1/B1&\"وحدة\"</span> ؟",
  "options": [
   "4وحدة",
   "15وحدة",
   "12وحدة",
   "خطأ في الصيغة"
  ],
  "answerIndex": 0,
  "explanation": "12/3=4 (رقم)، ثم يُضمّ بعملية & مع النص \"وحدة\" لتصبح النتيجة نصاً: \"4وحدة\".",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي من الصيغ التالية تحتوي مرجعاً نسبياً بالكامل؟",
  "options": [
   "<span class=\"mono\">$A1</span>",
   "<span class=\"mono\">A$1</span>",
   "<span class=\"mono\">$A$1</span>",
   "<span class=\"mono\">A1</span>"
  ],
  "answerIndex": 3,
  "explanation": "A1 بلا أي علامة $ هو مرجع نسبي بالكامل، يتغيّر العمود والسطر معاً عند النقل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-relative",
   "label": "نسبي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند استخدام دالة <span class=\"mono\">=SUBTOTAL(109,B2:B20)</span> ضمن نطاق يحتوي صفوفاً مخفية بالتصفية:",
  "options": [
   "يُحسب مجموع كل القيم بما فيها المخفية",
   "تُعيد الدالة خطأً دوماً",
   "تعمل فقط مع النصوص",
   "يُحسب مجموع القيم الظاهرة فقط ويتجاهل المخفية"
  ],
  "answerIndex": 3,
  "explanation": "رقم الدالة 109 (=100+9) يعني SUM لكن مع تجاهل الصفوف المخفية بالتصفية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-subtotal",
   "label": "SUBTOTAL"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة PV تفترض أن قيم الدفعات (pmt) للمبالغ الصادرة (المدفوعة) تُكتب بعلامة:",
  "options": [
   "تُكتب كنص فقط",
   "سالبة دوماً بينما الإيرادات موجبة",
   "موجبة دوماً بلا استثناء",
   "لا فرق بالعلامة أبداً"
  ],
  "answerIndex": 1,
  "explanation": "في المنطق المالي لدوال Excel كـ PV/FV/NPV، الدفعات الصادرة (تدفقات خارجة) تُكتب بقيمة سالبة، والإيرادات (تدفقات داخلة) بقيمة موجبة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-pv-sign",
   "label": "إشارة الدفعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "على ماذا يدل الرمز <span class=\"mono\">؟؟</span> (علامتا استفهام متتاليتان) في معايير البحث؟",
  "options": [
   "كلمة من حرفين مجهولين بالضبط",
   "نهاية النص",
   "كلمة تبدأ وتنتهي بنفس الحرف",
   "كلمة من 3 أحرف على الأقل"
  ],
  "answerIndex": 0,
  "explanation": "كل ? يمثل حرفاً مجهولاً واحداً، فوجود علامتين يعني حرفين مجهولين بالضبط.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "على ماذا يدل النمط <span class=\"mono\">؟*؟</span> في معايير البحث؟",
  "options": [
   "لا معنى له",
   "كلمة من 3 أحرف فقط بالضبط",
   "كلمة مؤلفة من حرفين على الأقل (حرف مجهول + أي عدد من المحارف + حرف مجهول)",
   "كلمة تبدأ وتنتهي بنفس الحرف"
  ],
  "answerIndex": 2,
  "explanation": "؟ في البداية والنهاية = حرف مجهول واحد بكل طرف، و* بينهما تعني أي عدد من المحارف (قد يكون صفراً) — فالحد الأدنى للطول هو حرفان.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند استخدام Find & Replace في Access/Excel للبحث عن \"محمد\" واستبداله بـ\"أحمد\" ضمن حقل نصي يحوي أيضاً القيمة \"محمد أمين\"، فإن النتيجة تعتمد على تفعيل خيار:",
  "options": [
   "لا يوجد أي خيار يتحكم بذلك",
   "\"مطابقة كل محتوى الحقل\" (Match whole field) أو البحث الجزئي فقط",
   "التكامل المرجعي فقط",
   "Validation Rule فقط"
  ],
  "answerIndex": 1,
  "explanation": "إن كان البحث جزئياً (بدون مطابقة كامل الحقل) سيُستبدل \"محمد\" في \"محمد أمين\" لتصبح \"أحمد أمين\"، أما مع تفعيل مطابقة كامل الحقل فلن يتغيّر لأنه لا يطابق \"محمد\" فقط.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-find-replace",
   "label": "البحث والاستبدال"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المرجع المختلط يثبّت العمود فقط أو السطر فقط، مثل $A1 أو A$1.",
  "answer": true,
  "explanation": "صحيح: وضع $ قبل العمود فقط أو السطر فقط ينتج مرجعاً مختلطاً.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-mixed",
   "label": "المرجع المختلط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المرجع المطلق ($A$1) يتغيّر عنوانه عند نسخ الصيغة إلى خلية أخرى.",
  "answer": false,
  "explanation": "خطأ: المرجع المطلق يبقى ثابتاً عند النسخ.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-ref-absolute",
   "label": "المرجع المطلق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند استخدام TRUE في عملية حسابية يأخذ القيمة 1، وFALSE يأخذ 0.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-bool",
   "label": "الدوال والقيم المنطقية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الرمز ? في البحث والتصفية يمثل حروفاً مجهولة بعدد غير محدد.",
  "answer": false,
  "explanation": "خطأ: ? حرف أو رقم مجهول واحد فقط؛ أما * فبعدد غير محدد.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-wildcards",
   "label": "الرموز البديلة (* ? #)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "كلما ابتعد معامل التحديد R² لخط الاتجاه عن الواحد زاد الاعتماد عليه.",
  "answer": false,
  "explanation": "خطأ: كلما اقترب R² من 1 زاد الاعتماد على خط الاتجاه.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-trendline",
   "label": "خط الاتجاه (Trendline)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=2+3*4</span> ؟",
  "options": [
   "24",
   "20",
   "14",
   "9"
  ],
  "answerIndex": 2,
  "explanation": "الضرب قبل الجمع: 3*4=12 ثم 12+2=14.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=(2+3)*4</span> ؟",
  "options": [
   "24",
   "14",
   "20",
   "9"
  ],
  "answerIndex": 2,
  "explanation": "الأقواس أولاً: 5*4=20.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=20/4/5</span> ؟",
  "options": [
   "25",
   "0.8",
   "100",
   "1"
  ],
  "answerIndex": 3,
  "explanation": "القسمة تُنفَّذ من اليسار: 20/4=5 ثم 5/5=1.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما نتيجة <span class=\"mono\">=2^3+1</span> ؟",
  "options": [
   "9",
   "7",
   "8",
   "16"
  ],
  "answerIndex": 0,
  "explanation": "الرفع إلى قوة قبل الجمع: 2^3=8 ثم 8+1=9.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#c2-order-ops",
   "label": "ترتيب العمليات الحسابية"
  }
 }
];
