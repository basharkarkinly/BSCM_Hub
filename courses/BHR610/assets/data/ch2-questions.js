/* بنك أسئلة الفصل 2 — عمليات بناء الفريق.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH2_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتم بناء الفريق من قبل الإدارة العليا فقط.",
  "answer": false,
  "explanation": "خطأ: يتم بناء الفريق من قبل أعضاء الفريق أنفسهم.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#selection",
   "label": "معايير اختيار أعضاء الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المرحلة الأولى في تطور الفريق هي مرحلة العصف الذهني.",
  "answer": false,
  "explanation": "خطأ: المرحلة الأولى هي التشكيل. الترتيب: التشكيل، العاصفة، التنميط، الإنجاز، الانتهاء.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#stages",
   "label": "دورة حياة الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في مرحلة التنميط والمعايرة (الغربلة) قد يتم الرجوع لإجراء عصف ذهني مرة أخرى.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#norming",
   "label": "مرحلة التنميط"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كلما كان الفريق متوافقاً ومتجانساً كان أفضل للأعمال الإبداعية.",
  "answer": false,
  "explanation": "خطأ: الإبداع يحتاج تنوعاً وعدم تجانس. المتجانس أفضل للسرعة والسرية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#homogeneity",
   "label": "التجانس والإبداع"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كلما كان الفريق متوافقاً ومتجانساً كان أفضل للأعمال التي تحتاج لسرعة وسرية في إيجاد الحلول.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#homogeneity",
   "label": "التجانس والإبداع"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الفريق الفعال هو الذي يحقق أهداف المنظمة وليس أهداف الأعضاء.",
  "answer": false,
  "explanation": "خطأ: الفريق الفعال يحقق أهداف المنظمة وأهداف الأعضاء معاً.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#effective-traits",
   "label": "خصائص الفرق الفعالة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في مرحلة التشكيل يُفضَّل أن يكون الأعضاء:",
  "options": [
   "لا يمكن أن يتفقوا",
   "متوافقين على الإجراءات مختلفين تماماً في القيم",
   "متجانسين تماماً",
   "جميع الأجوبة خاطئة"
  ],
  "answerIndex": 1,
  "explanation": "(راجع هذا السؤال مع الكتاب) إجابته المرجّحة حسب محتوى الدورات: التوافق على الإجراءات مع تنوع بالقيم.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#homogeneity",
   "label": "التجانس والإبداع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتم تطور الفريق من خلال عدة مراحل، عددها:",
  "options": [
   "ستة",
   "خمسة",
   "ثلاثة",
   "أربعة"
  ],
  "answerIndex": 1,
  "explanation": "التشكيل، العاصفة، التنميط، الإنجاز، الانتهاء.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#stages",
   "label": "دورة حياة الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الإدارة الذاتية في الفريق تعني:",
  "options": [
   "حرية جزئية في اختيار الآليات والتوقيت",
   "حريتها مقتصرة خارج العمل",
   "حرية كاملة في وضع الرؤية وأهداف الفريق",
   "جميع الأجوبة خاطئة"
  ],
  "answerIndex": 0,
  "explanation": "المدير الأعلى يحدد الهدف أو الخطوط العريضة، ويترك للأعضاء حرية تحديد الأنشطة اللازمة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "منهج القيم في بناء الفريق:",
  "options": [
   "يركز على الموقف الشامل للفريق تجاه عمله والقيم التي يتبناها بدلاً من سمات الأفراد أو أدوارهم",
   "يركز على توضيح الأدوار وتوقعات أدوار الأعضاء",
   "يركز على المخرجات والنتائج النهائية",
   "جميع الأجوبة صحيحة"
  ],
  "answerIndex": 0,
  "explanation": "الخيار الثاني هو منهج تعريف الدور.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الكرامة الإنسانية تعني وجوب احترام شخصية الفرد العامل بغض النظر عن مركزه الوظيفي.",
  "answer": true,
  "explanation": "صحيح: من مبادئ العلاقات الإنسانية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#human-relations",
   "label": "العلاقات الإنسانية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في مرحلة الانتهاء يوجد كثير من النزاعات.",
  "answer": false,
  "explanation": "خطأ: كثرة النزاعات في مرحلة الاضطراب (العاصفة).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#storming",
   "label": "مرحلة العاصفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليس من مؤشرات الحاجة إلى بناء الفريق:",
  "options": [
   "ازدياد شكاوى المستفيدين من الخدمة",
   "عدم مشاركة المعلومات",
   "انخفاض مستوى الهدر (ازدياد الهدر هو المؤشر)",
   "ازدياد الشكاوى والتذمر بين أفراد المنظمة"
  ],
  "answerIndex": 2,
  "explanation": "المؤشر هو ارتفاع الهدر لا انخفاضه.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#indicators",
   "label": "مؤشرات الحاجة لبناء الفريق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أهداف بناء فريق العمل:",
  "options": [
   "تنمية مهارات الأفراد",
   "بناء روح الثقة والتعاون",
   "تنمية مهارات المديرين",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلها من أهداف بناء الفريق.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#goals",
   "label": "أهداف بناء فرق العمل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مراحل دورة حياة فريق العمل بالترتيب:",
  "options": [
   "التشكيل، العاصفة، الإنجاز، التنميط، الانتهاء",
   "العاصفة، التشكيل، التنميط، الإنجاز، الانتهاء",
   "التشكيل، العاصفة، التنميط، الإنجاز، الانتهاء",
   "التشكيل، التنميط، العاصفة، الإنجاز، الانتهاء"
  ],
  "answerIndex": 2,
  "explanation": "هذا هو الترتيب.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#stages",
   "label": "دورة حياة الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "أنشطة بناء الفريق هي حدث مخطط له بعناية لمجموعة أفراد يرتبطون بأهداف داخل المنظمة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concept",
   "label": "مفهوم بناء الفرق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "من أهداف بناء الفريق توفير الاتصال المفتوح بين أجزاء المنظمة وزيادة تدفق المعلومات.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#goals",
   "label": "أهداف بناء فرق العمل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "اعتبار المعلومة قوة وعدم مشاركتها مع الآخرين من مؤشرات الحاجة لبناء الفريق.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#indicators",
   "label": "مؤشرات الحاجة لبناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "من فوائد بناء الفرق زيادة الاعتماد على الوصف الوظيفي.",
  "answer": false,
  "explanation": "خطأ: من فوائدها تقليل الاعتماد على الوصف الوظيفي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#benefits",
   "label": "فوائد بناء الفرق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "منهج «ما بين الأشخاص» يركز على تطوير مستويات التفاعل الشخصي والاجتماعي بين الأعضاء.",
  "answer": true,
  "explanation": "صحيح، ويناسب القطاع العام والطوعي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "منهج تعريف الدور يركز على مشاعر الأعضاء ومعتقداتهم وخلافاتهم المخبأة.",
  "answer": false,
  "explanation": "خطأ: يركز على ما يفعله الناس وما يحتاجونه من الآخرين وليس على مشاعرهم.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "منهج القيم يناسب الفرق ذات العمل المستمر وليس فرق المهام المؤقتة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المنهج الموجَّه للمهمة يناسب الفرق التنفيذية في الإدارة العليا.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لمنهج الكينونة الاجتماعية ثلاثة أهداف رئيسية، منها إنتاج جو من الفهم المتبادل.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#social-being",
   "label": "منهج الكينونة الاجتماعية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في مرحلة التشكيل تتصف العلاقات بالرسمية ويسود الارتباك.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#forming",
   "label": "مرحلة التشكيل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مرحلة التنميط يجب أن تطول لأنها أهم مراحل الفريق.",
  "answer": false,
  "explanation": "خطأ: هي مرحلة وسيطة تمهّد للإنجاز ويجب ألا تطول.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#norming",
   "label": "مرحلة التنميط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في مرحلة الإنجاز يمارس القائد دور الموجّه والمدرّب والناصح.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#performing",
   "label": "مرحلة الإنجاز"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "وسائل الدفاع النفسية كالإسقاط والتبرير والانسحاب تظهر عند فشل الفريق في مرحلة الانتهاء.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#adjourning",
   "label": "مرحلة الانتهاء"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأدوار الخاصة بالمهام تتعلق بالعلاقات والحاجات النفسية بين الأعضاء.",
  "answer": false,
  "explanation": "خطأ: هذه الأدوار الاجتماعية العاطفية. أدوار المهام تركز على إنجاز أهداف الفريق.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#selection",
   "label": "معايير اختيار أعضاء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "خمسة أبعاد لرؤية الفريق (الوضوح، التحفيز، إمكانية التحقيق، المشاركة، الإمكانية المستقبلية) هي من منهج:",
  "options": [
   "إعداد الهدف",
   "ما بين الأشخاص",
   "القيم",
   "تعريف الدور"
  ],
  "answerIndex": 2,
  "explanation": "منهج القيم.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي منهج يناسب فرق اتخاذ القرار والفرق الاستشارية واللجان؟",
  "options": [
   "القيم",
   "الموجَّه للمهمة",
   "ما بين الأشخاص",
   "تعريف الدور"
  ],
  "answerIndex": 3,
  "explanation": "منهج تعريف الدور.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي من مبادئ العلاقات الإنسانية؟",
  "options": [
   "الفروق الفردية",
   "العقوبات",
   "الأقدمية",
   "المركزية"
  ],
  "answerIndex": 0,
  "explanation": "الكرامة الإنسانية، الفروق الفردية، المصلحة المشتركة، الحوافز.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#human-relations",
   "label": "العلاقات الإنسانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الحاجات الخمس لماسلو تبدأ بـ:",
  "options": [
   "الانتماء",
   "المركز الاجتماعي",
   "الحاجات الفيزيولوجية",
   "تحقيق الذات"
  ],
  "answerIndex": 2,
  "explanation": "الفيزيولوجية ثم الأمان ثم الانتماء ثم المركز الاجتماعي ثم تحقيق الذات.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#theories",
   "label": "النظريات السلوكية والإدارية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المرحلة التي يمارس فيها القائد دور المدرّب والناصح ويتنبأ الفريق بالمشكلات:",
  "options": [
   "الإنجاز",
   "التشكيل",
   "الانتهاء",
   "العاصفة"
  ],
  "answerIndex": 0,
  "explanation": "مرحلة الإنجاز (الإنتاج).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#performing",
   "label": "مرحلة الإنجاز"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المرحلة التي يسودها الكثير من النزاعات والغيرة والتنافس:",
  "options": [
   "العاصفة (الاضطراب)",
   "التشكيل",
   "التنميط",
   "الإنجاز"
  ],
  "answerIndex": 0,
  "explanation": "وهي من أصعب المراحل بالنسبة لفرق العمل الدولية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#storming",
   "label": "مرحلة العاصفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "بناء الفريق عملية عشوائية غير مخطط لها.",
  "answer": false,
  "explanation": "خطأ: هو حدث مخطط له بعناية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concept",
   "label": "مفهوم بناء الفرق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المرحلة الأخيرة من مراحل تطور الفريق هي مرحلة العاصفة.",
  "answer": false,
  "explanation": "خطأ: الأخيرة هي الانتهاء. العاصفة هي الثانية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#stages",
   "label": "دورة حياة الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "منهج «ما بين الأشخاص» يركز على توضيح الأدوار وتوقعاتها وليس على مشاعر الأعضاء.",
  "answer": false,
  "explanation": "خطأ: هذا منهج تعريف الدور. منهج ما بين الأشخاص يركز على التفاعل الشخصي والثقة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#approaches",
   "label": "مناهج بناء الفريق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُفضَّل أن تطول مرحلة التنميط لأنها أهم مراحل الفريق.",
  "answer": false,
  "explanation": "خطأ: يجب ألا تطول لأنها مرحلة وسيطة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#norming",
   "label": "مرحلة التنميط"
  }
 }
];
