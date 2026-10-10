/* بنك أسئلة الفصل 1 — كتابة السيرة الذاتية.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH1_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "لديك من 10 إلى 20 ثانية فقط لتلفت نظر مسؤول التوظيف كي يقرأ سيرتك الذاتية مرة ثانية بتمعّن.",
  "answer": true,
  "explanation": "صحيح: لازم تعكس السيرة إنك منظم وعندك مهارات تقديم وتواصل قوية من أول نظرة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#what",
   "label": "ما هي السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُعد الهدف الوظيفي أهم جزء في السيرة الذاتية.",
  "answer": true,
  "explanation": "صحيح: لأنو لو ما كان مماثلاً للمطلوب، ممكن صاحب العمل ما يطلع على باقي السيرة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#objective",
   "label": "الهدف الوظيفي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تُذكر الخبرات العملية بترتيب زمني عكسي من الأحدث إلى الأقدم.",
  "answer": true,
  "explanation": "صحيح، ويُفضّل توصيف الوظائف على شكل إنجازات.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#experience",
   "label": "الخبرة العملية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تُذكر الدورات التدريبية المرتبطة بالوظيفة المتقدَّم لها في بداية قسم الدورات حتى لو كان تاريخها أقدم من دورات لا علاقة لها بالعمل.",
  "answer": true,
  "explanation": "صحيح: الدورات المرتبطة مباشرة بالوظيفة بتتقدم حتى لو خالفت الترتيب الزمني.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#skills-courses",
   "label": "المهارات والدورات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تُوضع المعلومات الشخصية في آخر قسم من السيرة ليكون الحكم على المؤهلات والمهارات قبل النظر إلى معلومات شخصية قد تؤثر على قرار صاحب العمل.",
  "answer": true,
  "explanation": "صحيح، علماً إنو من الشائع كمان وضعها بالقسم الأول.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#personal",
   "label": "المعلومات الشخصية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من مزايا السيرة الذاتية المرتبة وظيفياً أنها تعمل جيداً للتقديم إلى وظائف تتطلب مهارات محددة جداً أو سمات شخصية واضحة.",
  "answer": true,
  "explanation": "صحيح، وهي كمان مناسبة لمن يغيّر وظيفته وخبرته قليلة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في السيرة الذاتية الأوروبية يكون التقديم إلى الوظائف في أي دولة من دول الاتحاد (27 دولة) موحّداً قدر الإمكان.",
  "answer": true,
  "explanation": "صحيح: قالب أوروبي موحد بتسلسل وترقيم ثابتين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُفضَّل أن تحتوي السيرة الذاتية على رسومات وزخارف.",
  "answer": false,
  "explanation": "خطأ: السيرة لازم تكون منظمة وبسيطة، والألوان والزخارف ما بتنطبع غالباً عند أصحاب العمل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يجب كتابة التاريخ في الهوامش (الزوايا البيضاء) بدل المسمى الوظيفي.",
  "answer": false,
  "explanation": "خطأ: الهوامش بتتحط فيها المعلومات المهمة متل المسمى الوظيفي والدرجات والمهارات.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اجعل سيرتك الذاتية تبدو كنص أو موضوع تاريخي.",
  "answer": false,
  "explanation": "خطأ: لا تخلّيها تبدو كنص تاريخي؛ استخدم الترقيم والخط العريض والمائل لإبراز الكلمات المفتاحية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في قسم التعليم تُدرج الشهادات العلمية بترتيب زمني عكسي من الأحدث إلى الأقدم.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#education",
   "label": "السيرة العلمية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في خطاب المقدمة، يجب أن تذكر في الفقرة الافتتاحية شيئاً مثيراً للاهتمام عن الشركة وليس مجرد شيء موجود على الإنترنت ويعرفه الجميع.",
  "answer": true,
  "explanation": "صحيح: هي نقطة الفقرة الافتتاحية (الطعم). انتبه: الفقرة الختامية مخصصة لطلب فعل من صاحب العمل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#opening",
   "label": "الفقرة الافتتاحية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في حال كان لديك عدة أهداف وظيفية مختلفة، فيجب ألا يكون لديك أكثر من سيرة ذاتية واحدة.",
  "answer": false,
  "explanation": "خطأ: لكل هدف وظيفي سيرة مستقلة، إلا إذا كانت الأهداف مرتبطة ببعضها.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#wording",
   "label": "صياغة السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُفضَّل استخدام الألوان في الخطوط لأن أصحاب العمل يطبعون السيرة ملوّنة.",
  "answer": false,
  "explanation": "خطأ: لا تستخدم ألواناً بالخطوط لأنو طابعات أصحاب العمل غالباً بتطبع أبيض وأسود فقط.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُفضَّل استخدام ورقة A3 واستبعاد ورقة A4 عند طباعة السيرة الذاتية.",
  "answer": false,
  "explanation": "خطأ: المعتمد ورقة A4 بجودة جيدة بلون أبيض أو رمادي فاتح أو بيج.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مزايا السيرة الذاتية المرتبة زمنياً:",
  "options": [
   "أصحاب العمل معتادون عليها",
   "تعمل جيداً لمن يغيّر وظيفته",
   "تحقق التوازن بين النهجين الوظيفي والزمني",
   "قالب موحّد للاتحاد الأوروبي"
  ],
  "answerIndex": 0,
  "explanation": "السيرة الزمنية هي التقليدية الأكثر انتشاراً، فأصحاب العمل معتادون عليها. أما الخيار الثاني فهو ميزة الوظيفية، والثالث هو الجامعة، والرابع الأوروبية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "السيرة الذاتية المرتبة وظيفياً تعمل بشكل جيد للذين:",
  "options": [
   "لديهم سيرة مهنية قوية ومتصلة",
   "يرسلون سيرتهم عبر موقع التوظيف فقط",
   "يتقدمون إلى وظائف أكاديمية فقط",
   "يسعون إلى تغيير وظائفهم مع تنوع بالتاريخ الوظيفي وقليل من الخبرة"
  ],
  "answerIndex": 3,
  "explanation": "هذا هو تحديداً مجال استخدامها. ومن مساوئها أن أرباب العمل قلّما يقرؤونها.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "السيرة الذاتية التي تحقق التوازن بين النهج الوظيفي والنهج الزمني هي:",
  "options": [
   "الجامعة (Hybrid)",
   "المرتبة زمنياً",
   "الأوروبية",
   "الإلكترونية"
  ],
  "answerIndex": 0,
  "explanation": "الجامعة (Hybrid) تجمع قائمة مهارات العمل ثم المنظمات بتسلسل زمني.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في حال كان لديك عدة أهداف وظيفية مختلفة:",
  "options": [
   "تعدّ سيرة مستقلة لكل هدف وظيفي إلا إذا كانت الأهداف مرتبطة ببعضها",
   "لا تكتب هدفاً وظيفياً أبداً",
   "تكتب أنك تبحث عن أي وظيفة",
   "تكتبها كلها بسيرة واحدة"
  ],
  "answerIndex": 0,
  "explanation": "نصيحة الصياغة: سيرة مستقلة لكل هدف، إلا إذا كانت الأهداف مرتبطة ببعضها.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#wording",
   "label": "صياغة السيرة الذاتية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "كل ما يلي من مزايا السيرة الذاتية الإلكترونية ما عدا:",
  "options": [
   "سهولة توزيعها على عدد كبير من أصحاب العمل",
   "أن أصحاب العمل يرونها نادراً ويرفضون قراءتها",
   "توفير الوقت والجهد والتكاليف",
   "إمكان إرسالها كملف Word أو PDF"
  ],
  "answerIndex": 1,
  "explanation": "الندرة وقلة القراءة من مساوئ السيرة الوظيفية، لا من مزايا الإلكترونية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "السيرة الذاتية هي أول لقاء بين صاحب العمل المحتمل وطالب الوظيفة، وتُستخدم عادةً لفرز المتقدمين.",
  "answer": true,
  "explanation": "صحيح، وغالباً يعقبها مقابلة أو أكثر.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#what",
   "label": "ما هي السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "أول سيرة ذاتية عُرفت في التاريخ كتبها ليوناردو دافنشي سنة 1482م وأرسلها إلى دوق ميلانو.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#what",
   "label": "ما هي السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُستحسن ترقيم فقرات المهام التي قمت بها بتسلسل رقمي (1، 2، 3).",
  "answer": false,
  "explanation": "خطأ: الترقيم الرقمي ممنوع؛ استخدم النقاط والشرطات والنجوم.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأنواع الشائعة من الخطوط المناسبة للسيرة: Arial وTimes New Roman وSimplified Arabic بقياس 12 أو 14.",
  "answer": true,
  "explanation": "صحيح: الأكثر استخداماً عالمياً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#format",
   "label": "الشكل العام للسيرة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُوضع قسم السيرة العلمية قبل قسم السيرة المهنية لدى الخريج الجديد الذي لا خبرة عملية له.",
  "answer": true,
  "explanation": "صحيح، وكذلك عند التقدم لوظيفة أكاديمية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#education",
   "label": "السيرة العلمية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُضاف قسم المنشورات في كل السير الذاتية مهما كانت الوظيفة.",
  "answer": false,
  "explanation": "خطأ: يُضاف فقط في السير المقدمة لمناصب أكاديمية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#others",
   "label": "بقية الأقسام"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُنصح بكتابة الأشخاص المرجعيين في كل سيرة ذاتية دون انتظار طلب.",
  "answer": false,
  "explanation": "خطأ: لا تكتبهم إلا عند طلب أصحاب العمل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#others",
   "label": "بقية الأقسام"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُنصح بوضع صورة شخصية في كل سيرة ذاتية.",
  "answer": false,
  "explanation": "خطأ: لا يُنصح بصورة إلا إذا طُلبت أو كانت نقطة تسويقية، وبتكون محافظة ومحترفة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#wording",
   "label": "صياغة السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "من المفيد أن تذكر سلبياتك (مثل درجة ضعيفة في دورة) في السيرة بدافع الشفافية.",
  "answer": false,
  "explanation": "خطأ: لا تذكر سلبياتك؛ لا مكان للشفافية السلبية بالسيرة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#wording",
   "label": "صياغة السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تُكتب عبارة «الوثائق والثبوتيات جاهزة عند الطلب» في نهاية السيرة الذاتية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#others",
   "label": "بقية الأقسام"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا توجد قواعد صارمة لإعداد السيرة الذاتية، فعدّلها بالطريقة التي تحقق غرضك الوظيفي.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#wording",
   "label": "صياغة السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "السيرة الذاتية المرتبة زمنياً هي الأنسب دائماً حتى لو كانت سيرتك المهنية ضعيفة.",
  "answer": false,
  "explanation": "خطأ: إذا كانت سيرتك المهنية ضعيفة، فكّر في نوع آخر من السير.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عادةً لا يتجاوز خطاب المقدمة صفحة واحدة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cover",
   "label": "خطاب المقدمة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الفقرة الافتتاحية في خطاب المقدمة تعمل عمل «الطعم» في صنارة الصيد.",
  "answer": true,
  "explanation": "صحيح: تحفّز صاحب العمل لقراءة المزيد.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#opening",
   "label": "الفقرة الافتتاحية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في الفقرة الختامية من خطاب المقدمة تطلب فعلاً من صاحب العمل وتذكر أنك ستتواصل معه خلال عشرة أيام إلى ثلاثة أسابيع.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#closing",
   "label": "الفقرة الختامية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي من الأقسام التالية يُعد الأهم في السيرة الذاتية؟",
  "options": [
   "الهدف الوظيفي",
   "المنشورات",
   "الهوايات",
   "المعلومات الشخصية"
  ],
  "answerIndex": 0,
  "explanation": "الهدف الوظيفي هو الأهم.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#objective",
   "label": "الهدف الوظيفي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي ليس من أقسام خطاب المقدمة؟",
  "options": [
   "الفقرة الرئيسية",
   "الفقرة الختامية",
   "الفقرة الافتتاحية",
   "فقرة الراتب المتوقع"
  ],
  "answerIndex": 3,
  "explanation": "أقسامه ثلاثة: الافتتاحية، الرئيسية، الختامية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cover",
   "label": "خطاب المقدمة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الفقرة الرئيسية في خطاب المقدمة تُخصَّص لـ:",
  "options": [
   "طلب زيادة الراتب",
   "شكر الشركة فقط",
   "ذكر الأشخاص المرجعيين",
   "تقديم نفسك كمرشح قوي مع أمثلة محددة"
  ],
  "answerIndex": 3,
  "explanation": "تذكر إنجازاتك ومهاراتك وتاريخ عملك المرتبط مع تفاصيل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#letter-body",
   "label": "الفقرة الرئيسية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "القسم الذي يُنصح بتقديمه على قسم الخبرة العملية لدى الخريج الجديد هو:",
  "options": [
   "اللغات",
   "السيرة العلمية",
   "الإنجازات",
   "الهوايات"
  ],
  "answerIndex": 1,
  "explanation": "لأنه ما عنده خبرة عملية بعد.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#education",
   "label": "السيرة العلمية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "متى يُنصح بذكر الأشخاص المرجعيين في السيرة؟",
  "options": [
   "فقط للخريج الجديد",
   "دائماً في أولها",
   "لا يُذكرون أبداً",
   "عند طلب أصحاب العمل ذلك"
  ],
  "answerIndex": 3,
  "explanation": "لا تكتبهم إلا عند الطلب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#others",
   "label": "بقية الأقسام"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي من أسئلة تدقيق السيرة الذاتية؟",
  "options": [
   "هل ذكرت سلبياتك بصراحة؟",
   "هل أرفقت صورة ملونة؟",
   "هل ذكرت راتبك السابق؟",
   "هل عرضت اسمك بشكل بارز؟"
  ],
  "answerIndex": 3,
  "explanation": "قائمة التدقيق تبدأ بالاسم البارز والعنوان الكامل وأرقام الاتصال.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#checklist",
   "label": "تدقيق السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "ينبغي ترتيب الخبرات العملية في السيرة من الأقدم إلى الأحدث.",
  "answer": false,
  "explanation": "خطأ: الترتيب زمني عكسي، من الأحدث إلى الأقدم.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#experience",
   "label": "الخبرة العملية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "السيرة الذاتية الأوروبية تقدّم قالباً مختلفاً لكل دولة من دول الاتحاد.",
  "answer": false,
  "explanation": "خطأ: هي قالب موحّد للتقديم في أي دولة من الاتحاد (27 دولة).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في الفقرة الختامية من خطاب المقدمة يجب أن تذكر شيئاً مثيراً للاهتمام عن الشركة ليعمل عمل الطعم.",
  "answer": false,
  "explanation": "خطأ: هذه نقطة الفقرة الافتتاحية. الفقرة الختامية تطلب فعلاً وتحدد موعد التواصل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#closing",
   "label": "الفقرة الختامية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "السيرة المرتبة وظيفياً هي النوع التقليدي الأكثر انتشاراً وأصحاب العمل معتادون عليها.",
  "answer": false,
  "explanation": "خطأ: هذه صفات السيرة المرتبة زمنياً. أرباب العمل قلّما يقرؤون الوظيفية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا يمكن إرسال السيرة الإلكترونية كملف Word أو PDF مرفق.",
  "answer": false,
  "explanation": "خطأ: يمكن إرسالها كملف Word أو PDF أو عبر قالب موقع التوظيف.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "أنواع السيرة الذاتية"
  }
 }
];
