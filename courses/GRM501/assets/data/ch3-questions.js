/* بنك أسئلة الفصل 3 — تطوير معالجة لمشكلة البحث.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH3_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "يؤثر المتغير التابع على المتغير المستقل.",
  "explanation": "خطأ — العكس هو الصحيح: المتغير المستقل يؤثر على المتغير التابع.",
  "answer": false,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي مما يلي ليس من خطوات تطوير مقاربة للمشكلة؟",
  "explanation": "تصميم وتوزيع الاستبيان يحصل لاحقاً بمرحلة تصميم البحث، مش بمرحلة تطوير المقاربة.",
  "options": [
   "الإطار النظري",
   "تصميم الاستبيان النهائي وتوزيعه على العينة",
   "النماذج التحليلية",
   "تساؤلات البحث وفرضياته"
  ],
  "answerIndex": 1,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#required-info",
   "label": "تحديد المعلومات المطلوبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هي تساؤلات البحث؟",
  "explanation": "تساؤلات البحث تُقسّم مكونات المشكلة إلى أسئلة فرعية دقيقة.",
  "options": [
   "عبارات دقيقة ومحددة للمكونات الأساسية للمشكلة البحثية",
   "نتائج التحليل الإحصائي النهائي",
   "أدوات جمع البيانات المستخدمة بالبحث",
   "إجابات نهائية جاهزة على المشكلة البحثية"
  ],
  "answerIndex": 0,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#research-questions",
   "label": "تساؤلات البحث"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتغيرات المستقلة هي المتغيرات المسؤولة عن إحداث التغيير في الظاهرة.",
  "explanation": "صحيح — والمتغير المستقل يؤثر على المتغير التابع.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتغيرات التابعة تتغير نتيجة التغيّر في المتغيرات المستقلة.",
  "explanation": "صحيح — هيك بالضبط العلاقة بينهما.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "فرضية العدم تشير إلى غياب الخاصية أو انعدام العلاقة أو التأثير.",
  "explanation": "صحيح — الباحث يصيغها لما ما يلاقي دليل على وجود علاقة أو تأثير.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#null-hypothesis",
   "label": "فرضية العدم"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الفرضية البديلة يصيغها الباحث لما يعتقد بوجود علاقة أو تأثير أو تعديل أو فروق.",
  "explanation": "صحيح — عكس فرضية العدم تماماً.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#alt-hypothesis",
   "label": "الفرضية البديلة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تساؤلات البحث موجهة فقط بتحديد المشكلة، ومش بالإطار النظري أو النموذج التحليلي.",
  "explanation": "خطأ — صياغة تساؤلات البحث موجهة بتحديد المشكلة والإطار النظري والنموذج التحليلي المتبنى سوية.",
  "answer": false,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#research-questions",
   "label": "تساؤلات البحث"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي مما يلي ليس من خطوات المرحلة الثانية (تطوير معالجة المشكلة)؟",
  "explanation": "جمع البيانات الميداني يحصل لاحقاً (الخطوة الرابعة)، مش ضمن المرحلة الثانية.",
  "options": [
   "النماذج التحليلية",
   "تساؤلات البحث وفرضياته",
   "جمع البيانات الميدانية الفعلي",
   "الإطار النظري"
  ],
  "answerIndex": 2,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#required-info",
   "label": "تحديد المعلومات المطلوبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "فرضية «توجد علاقة معنوية بين رضا الموظفين في شركة معينة وولائهم لها» هي فرضية:",
  "explanation": "الفرضية تثبت وجود علاقة، وهاد بالتعريف فرضية بديلة.",
  "options": [
   "البديلة",
   "العدم",
   "المعدلة",
   "الوسيطة"
  ],
  "answerIndex": 0,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#alt-hypothesis",
   "label": "الفرضية البديلة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن لباحث أن يتوصل بنفس البحث لفرضية عدم وفرضية بديلة معاً حول نفس العلاقة.",
  "explanation": "خطأ — لا يمكن الجمع بين صياغة العدم والبديلة لنفس الفرضية بآن واحد، لأن هذا يسبب حيرة ولبس للقارئ.",
  "answer": false,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypothesis-rules",
   "label": "قاعدة الصياغة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في فرضية «الإنتاج يؤثر على حجم المبيعات»، المتغير المستقل هو:",
  "explanation": "الإنتاج هو السبب (مستقل)، والمبيعات هي النتيجة (تابع).",
  "options": [
   "الإنتاج",
   "المبيعات",
   "كلاهما مستقل بنفس الوقت",
   "لا يوجد متغير مستقل بهالفرضية"
  ],
  "answerIndex": 0,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عندما يعتقد الباحث بوجود علاقة أو تأثير أو تعديل أو فروق، فإنه يصيغ فرضية:",
  "explanation": "هيك بالضبط تعريف الفرضية البديلة.",
  "options": [
   "المعدلة",
   "العدم",
   "الوسيطة",
   "البديلة"
  ],
  "answerIndex": 3,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#alt-hypothesis",
   "label": "الفرضية البديلة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من الأفضل أن تحدد صياغة الفرضية الجيدة المجتمع أو الشركة المدروسة بدقة بدلاً من تعميم غامض.",
  "explanation": "صحيح — كل ما كانت الفرضية محددة (باسم الشركة أو المجتمع المدروس) كل ما كانت أوضح وأقرب للصياغة الصحيحة.",
  "answer": true,
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypothesis-rules",
   "label": "قاعدة الصياغة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن للباحث أن يصيغ الفرضية بطريقة العدم والبديلة في آن واحد.",
  "answer": false,
  "explanation": "خطأ: الجمع بينهما بيسبب حيرة ولبس للقارئ.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypothesis-rules",
   "label": "قاعدة الصياغة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يحصل الباحث على تساؤلاته البحثية من الخطوة الأولى للبحث.",
  "answer": true,
  "explanation": "صحيح: التساؤلات بتُشتق من مخرجات الخطوة الأولى (المسببات الأولية).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#research-questions",
   "label": "تساؤلات البحث"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الفرضية عبارة عن إجابة على التساؤل البحثي.",
  "answer": true,
  "explanation": "صحيح: إجابة محتملة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypotheses",
   "label": "فرضيات البحث"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ليس من الضروري أن تكون الفرضيات قابلة للاختبار.",
  "answer": false,
  "explanation": "خطأ: صيغتها تصريحية قابلة للاختبار.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypotheses",
   "label": "فرضيات البحث"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يجب أن يكون المتغير قابلاً للقياس.",
  "answer": true,
  "explanation": "صحيح: خاصية قابلة للقياس يعبر عنها كمياً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي من التالي لا ينتمي للخطوة الثانية من البحث؟",
  "options": [
   "النظرية",
   "تطوير الفرضيات",
   "البحوث النوعية",
   "تطوير التساؤلات البحثية"
  ],
  "answerIndex": 2,
  "explanation": "البحوث النوعية من مهام الخطوة الأولى (التحديد الأولي للمشكلة).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#required-info",
   "label": "تحديد المعلومات المطلوبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من صفات المتغير:",
  "options": [
   "كل مما سبق",
   "تحملها الأشياء أو الأشخاص",
   "يُعبر عنها كمياً",
   "خاصية"
  ],
  "answerIndex": 0,
  "explanation": "المتغير خاصية قابلة للقياس بتحملها الأشياء أو الأشخاص.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الخطوة التي تلي تطوير معالجة للمشكلة هي:",
  "options": [
   "تحليل البيانات",
   "التحديد الأولي للمشكلة",
   "تصميم البحث",
   "جمع البيانات"
  ],
  "answerIndex": 2,
  "explanation": "الترتيب: تحديد أولي ← مقاربة ← تصميم البحث.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#required-info",
   "label": "تحديد المعلومات المطلوبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النظرية هي:",
  "options": [
   "استبيان على عينة",
   "مجموعة مفاهيم بينها علاقة تقترح رؤية منظمة للظاهرة",
   "تقرير نهائي",
   "جمع بيانات ميدانية"
  ],
  "answerIndex": 1,
  "explanation": "تفسير علمي لموضوع معين بتحديد العلاقة بين المتغيرات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory",
   "label": "الإطار النظري"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الدليل الموضوعي هو دليل غير متحيز ومدعوم بنتائج علمية تُجمع من مصادر بيانات ثانوية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory",
   "label": "الإطار النظري"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يتم إيجاد النظرية الملائمة التي توجه الباحث من خلال:",
  "options": [
   "توزيع استبيان",
   "استعراض الدراسات العلمية السابقة",
   "التجارب المخبرية",
   "مقابلة المستهلكين"
  ],
  "answerIndex": 1,
  "explanation": "استعراض الدراسات السابقة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory",
   "label": "الإطار النظري"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "النظريات دائماً مكتملة وتتعامل مع كل المتغيرات الموجودة بالواقع.",
  "answer": false,
  "explanation": "خطأ: قد تكون غير مكتملة وتتعامل مع عدد محدود من المتغيرات، فعلى الباحث فحص متغيرات أخرى.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory",
   "label": "الإطار النظري"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تحدد النظرية المتغيرات الأساسية المستقلة والتابعة التي يجب فحصها.",
  "answer": true,
  "explanation": "صحيح: من أدوارها بالمراحل المختلفة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory-roles",
   "label": "أدوار النظرية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "دور النظرية في «اختيار تصميم البحث»:",
  "options": [
   "تكتب التقرير",
   "تحدد حجم العينة فقط",
   "تقترح علاقات سببية أو ارتباطية تدل على الأنسب من التصاميم",
   "تجمع البيانات"
  ],
  "answerIndex": 2,
  "explanation": "العلاقات المقترحة بتدل على استخدام تصميم استكشافي أو وصفي أو تجريبي.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#theory-roles",
   "label": "أدوار النظرية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النموذج التحليلي الذي يقدم تمثيلاً مكتوباً للعلاقات بين المتغيرات هو:",
  "options": [
   "التعبيري",
   "الرياضي",
   "البياني",
   "الإحصائي"
  ],
  "answerIndex": 0,
  "explanation": "التعبيري = مكتوب، البياني = شكل، الرياضي = معادلات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#analytical-models",
   "label": "النماذج التحليلية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النموذج الذي يشرح العلاقات بمعادلات رياضية لسهولة التقدير والاختبار الإحصائي:",
  "options": [
   "الرياضي",
   "الوصفي",
   "البياني",
   "التعبيري"
  ],
  "answerIndex": 0,
  "explanation": "النموذج الرياضي.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#analytical-models",
   "label": "النماذج التحليلية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "النموذج البياني يقدم تمثيلاً مكتوباً فقط للعلاقات بين المتغيرات.",
  "answer": false,
  "explanation": "خطأ: التمثيل المكتوب هو النموذج التعبيري؛ البياني يقدم صورة أو شكلاً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#analytical-models",
   "label": "النماذج التحليلية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "صياغة تساؤلات البحث تكون استفهامية بينما صياغة الفرضيات:",
  "options": [
   "استفهامية أيضاً",
   "رياضية فقط",
   "تصريحية قابلة للاختبار",
   "مفتوحة بلا حدود"
  ],
  "answerIndex": 2,
  "explanation": "الفرضية جملة تصريحية قابلة للاختبار.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#hypotheses",
   "label": "فرضيات البحث"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "«لا توجد علاقة معنوية بين رضا الموظفين في Sony وولائهم» هي فرضية:",
  "options": [
   "عدم",
   "وسيطة",
   "بديلة",
   "معدِّلة"
  ],
  "answerIndex": 0,
  "explanation": "تنفي وجود العلاقة فهي فرضية عدم.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#null-hypothesis",
   "label": "فرضية العدم"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المتغير الذي يتوسط العلاقة بين متغير مستقل وآخر تابع يسمى:",
  "options": [
   "معدِّل",
   "وسيط",
   "منضبط",
   "دخيل"
  ],
  "answerIndex": 1,
  "explanation": "الوسيط يتوسط العلاقة، والمعدِّل يعدّلها.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المتغير المعدِّل هو الذي يتوسط العلاقة بين المتغير المستقل والتابع.",
  "answer": false,
  "explanation": "خطأ: الذي يتوسط العلاقة هو الوسيط، أما المعدِّل فيعدّل العلاقة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المتغير التابع هو المسؤول عن إحداث التغير بالظاهرة.",
  "answer": false,
  "explanation": "خطأ: هذا المستقل. التابع يتغير نتيجة التغير بالمستقل.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في الفرضية «عدد سنوات الخبرة يؤثر على إنتاجية العاملين» المتغير المستقل هو:",
  "options": [
   "الإنتاجية",
   "الشركة",
   "العاملون",
   "عدد سنوات الخبرة"
  ],
  "answerIndex": 3,
  "explanation": "الخبرة تؤثر على الإنتاجية فهي المستقل.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#variables",
   "label": "المتغيرات وأنواعها"
  }
 }
];
