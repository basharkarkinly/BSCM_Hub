/* BEC402 — بنك أسئلة الفصل 5: نظرية الطلب (مولّد من build.py) */
const CH5_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان تابع المنفعة U = √(xy) والدخل 100 وسعر x يساوي 1 وسعر y يساوي 4، فإن التركيب الاستهلاكي المفضّل هو:",
  "options": [
   "(x, y) = (20, 20)",
   "(x, y) = (50, 12.5)",
   "(x, y) = (40, 15)",
   "(x, y) = (30, 15)"
  ],
  "answerIndex": 1,
  "explanation": "x* = M/(2Px) = 50 و y* = M/(2Py) = 12.5 (وبيحقق الميزانية: 50 + 50 = 100).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان تابع المنفعة U = x² + y² والدخل 50 وسعر x يساوي 2 وسعر y يساوي 3، فإن التركيب المفضّل هو:",
  "options": [
   "(10, 10)",
   "(15, 6.67)",
   "(25, 0)",
   "(0, 50/3)"
  ],
  "answerIndex": 2,
  "explanation": "التابع مو محدّب، فالحل بزاوية: 25² = 625 أكبر من (50/3)² ≈ 278.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا زاد الدخل وزادت الأسعار بنفس النسبة فإن الكمية المطلوبة من السلعة:",
  "options": [
   "تنقص",
   "تزيد",
   "لن تتغير",
   "ستتغير بطريقة لا يمكن التنبؤ بها"
  ],
  "answerIndex": 2,
  "explanation": "خط الميزانية ما بيتحرك.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العبارتان: (1) السلعة x سلعة دنيا؛ (2) السلعة x سلعة غيفن. فهذا يعني أن:",
  "options": [
   "(1) تقتضي (2) وليس العكس بالضرورة",
   "(2) تقتضي (1) وليس العكس بالضرورة",
   "(1) و(2) تصفان نفس الظاهرة",
   "(1) و(2) لا تجتمعان في سلعة واحدة"
  ],
  "answerIndex": 1,
  "explanation": "كل سلعة غيفن دنيا، والعكس مو صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#giffen",
   "label": "السلعة الدنيا وسلعة غيفن"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المستهلك يستهلك سلعتين X وY فقط. إذا أدى ارتفاع سعر X إلى زيادة الكمية المطلوبة من Y فإننا نقول إن:",
  "options": [
   "أثر الدخل تغلّب على أثر الإبدال",
   "أثر الإبدال تغلّب على أثر الدخل",
   "من المستحيل أن نحدد",
   "كل ما سبق خطأ"
  ],
  "answerIndex": 1,
  "explanation": "حسب مفتاح الكتاب.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن منحنى طلب الفرد:",
  "options": [
   "يمثل مختلف الكميات التي يرغب المستهلك بشرائها عند مختلف الأسعار الممكنة",
   "يتم إيجاده من خريطة منحنيات السواء",
   "ينزاح عندما يتغير الدخل أو التفضيلات أو أسعار السلع الأخرى",
   "كل ما ذكر صحيح"
  ],
  "answerIndex": 3,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي مما يلي لن يؤدي إلى انزياح منحنى الطلب؟",
  "options": [
   "ارتفاع سعر السلعة",
   "ارتفاع سعر سلعة بديلة",
   "زيادة الدخل",
   "تضاعف أسعار كافة السلع"
  ],
  "answerIndex": 0,
  "explanation": "تغيّر سعر السلعة نفسها = حركة على المنحنى.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبرز أهمية منحنى سعر-استهلاك في أنه:",
  "options": [
   "بواسطته يمكن اشتقاق منحنى الطلب العادي",
   "يربط بين نقاط توازن المستهلك عند تغير سعر إحدى السلعتين",
   "كل من (أ) و(ب)",
   "بواسطته يمكن اشتقاق منحنى آنجل"
  ],
  "answerIndex": 2,
  "explanation": "آنجل من دخل-استهلاك.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عندما يرتفع سعر السلعة مع بقاء العوامل الأخرى على حالها فإن هذا يؤدي إلى:",
  "options": [
   "انخفاض الدخل الحقيقي للمستهلك",
   "ارتفاع الدخل الحقيقي للمستهلك",
   "لا يتأثر الدخل الحقيقي",
   "لا شيء مما سبق"
  ],
  "answerIndex": 0,
  "explanation": "المجموعة المجدية بتنكمش.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يبيّن منحنى آنجل العلاقة بين:",
  "options": [
   "سعر السلعة ودخل المستهلك",
   "الكمية المطلوبة وسعر السلعة",
   "الكمية المطلوبة من السلعة ودخل المستهلك",
   "لا شيء مما سبق"
  ],
  "answerIndex": 2,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#engel",
   "label": "منحنى آنجل والسلع العادية والدنيا"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المحدد الأساسي لخط الميزانية:",
  "options": [
   "الاستهلاك والادخار",
   "الذوق والرغبة",
   "الدخل والأسعار",
   "لا شيء مما ذكر"
  ],
  "answerIndex": 2,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#income-consumption",
   "label": "منحنى دخل-استهلاك"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يسمى الخط الواصل بين نقاط توازن المستهلك التي تنتج عن تغير دخل المستهلك فقط:",
  "options": [
   "منحنى الطلب العادي",
   "منحنى سعر-استهلاك",
   "منحنى آنجل",
   "منحنى دخل-استهلاك"
  ],
  "answerIndex": 3,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#income-consumption",
   "label": "منحنى دخل-استهلاك"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يسمى الخط الواصل بين نقاط توازن المستهلك التي تنتج عن تغير سعر سلعة واحدة مع ثبات باقي العوامل:",
  "options": [
   "منحنى الطلب العادي",
   "منحنى سعر-استهلاك",
   "منحنى آنجل",
   "منحنى دخل-استهلاك"
  ],
  "answerIndex": 1,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يفترض تابع الطلب المعوَّض ضمنياً أن:",
  "options": [
   "المنفعة ثابتة",
   "الدخل ثابت",
   "الأسعار ثابتة",
   "المنفعة متغيرة"
  ],
  "answerIndex": 0,
  "explanation": "الدخل هو اللي بيتغيّر ضمنياً.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#compensated",
   "label": "تابع الطلب المعوَّض"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا كان منحنى آنجل هابطاً فإن السلعة دنيا.",
  "answer": true,
  "explanation": "الكمية بتنقص مع الدخل.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#engel",
   "label": "منحنى آنجل والسلع العادية والدنيا"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يدل تابع الطلب التقاطعي على العلاقة بين سعر السلعة والكمية المطلوبة منها.",
  "answer": false,
  "explanation": "بين سعر <b>سلعة أخرى</b> والكمية المطلوبة من السلعة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cross",
   "label": "الطلب التقاطعي: البدائل والمكمّلات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في تابع الطلب التقاطعي، إذا كانت العلاقة بين سعر X والكمية المطلوبة من Y طردية فإن Y:",
  "options": [
   "بديلة",
   "مكملة",
   "دنيا",
   "غيفن"
  ],
  "answerIndex": 0,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cross",
   "label": "الطلب التقاطعي: البدائل والمكمّلات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان مشتق تابع الطلب التقاطعي بالنسبة لسعر السلعة الأخرى موجباً فهذا يعني أن السلعة الأخرى:",
  "options": [
   "بديلة",
   "دنيا",
   "عادية",
   "مكملة"
  ],
  "answerIndex": 0,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cross",
   "label": "الطلب التقاطعي: البدائل والمكمّلات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في مسألة المستهلك الثنوية نكون أمام:",
  "options": [
   "إنفاق ثابت ومنفعة قابلة للتغير",
   "إنفاق ثابت ومنفعة ثابتة",
   "منفعة ثابتة وإنفاق قابل للتغير",
   "إنفاق متغير ومنفعة متغيرة"
  ],
  "answerIndex": 2,
  "explanation": "تصغير الإنفاق بقيد المنفعة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعبّر تابع الطلب العادي عن العلاقة بين سعر سلعة وبين الكمية المطلوبة من سلعة أخرى في ظل ثبات بقية العوامل.",
  "answer": false,
  "explanation": "عن الكمية المطلوبة <b>من السلعة نفسها</b>؛ اللي وصفتو هو التقاطعي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بفرض أن المستهلك عند التوازن للسلعتين x وy وانخفض سعر x مع ثبات العوامل الأخرى، فإن أثر الإبدال على السلعة y سيؤدي إلى:",
  "options": [
   "تخفيض الشراء منها",
   "زيادة الشراء منها",
   "ثبات الكمية المشتراة منها",
   "عدم تأثرها بالسلعة x"
  ],
  "answerIndex": 0,
  "explanation": "x صارت أرخص نسبياً فالمستهلك بيبدّل لصالحها وعلى حساب y. (تظليل ملف الدورات كان على «زيادة»، وحسب منطق الكتاب الجواب «تخفيض».)",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لبناء منحنى دخل-استهلاك نثبّت الأسعار ونسمح للدخل بالتغير.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#income-consumption",
   "label": "منحنى دخل-استهلاك"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يمكن أن تكون السلعة دنيا عند كل مستويات الدخل.",
  "answer": false,
  "explanation": "بتكون عادية للفقير لحد ما يوصل دخلو لحد معيّن.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#engel",
   "label": "منحنى آنجل والسلع العادية والدنيا"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند ارتفاع سعر X مع ثبات الدخل وسعر Y يبقى القاطع العمودي لخط الميزانية ثابتاً ويتناقص القاطع الأفقي.",
  "answer": true,
  "explanation": "خط الميزانية بيصير أشد انحداراً.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#price-consumption",
   "label": "منحنى سعر-استهلاك والطلب العادي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "حلول المرغرين محل الزبدة عند ارتفاع سعر الزبدة يجعل المرغرين بديلاً إجمالياً.",
  "answer": true,
  "explanation": "إجمالي لأنو الدخل الحقيقي تغيّر كمان.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cross",
   "label": "الطلب التقاطعي: البدائل والمكمّلات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في حالة السلع المكملة يكون منحنى الطلب على Y بدلالة سعر X:",
  "options": [
   "هابطاً",
   "صاعداً",
   "أفقياً",
   "عمودياً"
  ],
  "answerIndex": 0,
  "explanation": "متل السكر والشاي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cross",
   "label": "الطلب التقاطعي: البدائل والمكمّلات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "توابع الطلب المعوَّضة يمكن أن تكون صاعدة إذا كانت السلعة دنيا.",
  "answer": false,
  "explanation": "<b>هابطة دوماً</b> طالما منحنيات السواء محدّبة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#compensated",
   "label": "تابع الطلب المعوَّض"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أثر الإبدال هو أثر تغير السعر في خيار المستهلك في ظل ثبات:",
  "options": [
   "المنفعة",
   "الدخل الاسمي",
   "السعر النسبي",
   "الكمية"
  ],
  "answerIndex": 0,
  "explanation": "وأثر الدخل بثبات السعر النسبي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "أثر الإبدال سالب دوماً.",
  "answer": true,
  "explanation": "نتيجة تناقص المعدل الحدي للإبدال.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في حالة السلعة العادية يكون أثر الدخل معاكساً لأثر الإبدال.",
  "answer": false,
  "explanation": "بالعادية بنفس الاتجاه؛ المعاكس بالسلعة الدنيا.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#sub-income",
   "label": "أثر الإبدال وأثر الدخل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تكون السلعة سلعة غيفن إذا:",
  "options": [
   "كانت دنيا وتغلّب أثر الدخل على أثر الإبدال",
   "كانت عادية وتغلّب أثر الإبدال",
   "كانت بديلة",
   "كان منحنى آنجل لها صاعداً"
  ],
  "answerIndex": 0,
  "explanation": "شرطين معاً.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#giffen",
   "label": "السلعة الدنيا وسلعة غيفن"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "وفق الكتاب، هناك قرائن إحصائية كافية تثبت وجود سلع غيفن ومنحنيات طلب صاعدة.",
  "answer": false,
  "explanation": "القرائن <b>محدودة جداً</b> وسلعة غيفن لسا «نظرية».",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#giffen",
   "label": "السلعة الدنيا وسلعة غيفن"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل المسألة الثنوية لتعظيم المنفعة يعطينا:",
  "options": [
   "تابع الإنفاق",
   "تابع المنفعة غير المباشر",
   "منحنى آنجل",
   "تابع العرض"
  ],
  "answerIndex": 0,
  "explanation": "والأولية بتعطي تابع المنفعة غير المباشر.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان U = xy فإن تابع الطلب على x هو:",
  "options": [
   "x* = M/(2Px)",
   "x* = M/Px",
   "x* = 2M/Px",
   "x* = Px/M"
  ],
  "answerIndex": 0,
  "explanation": "من مثال الكتاب.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dual",
   "label": "المسألة الثنوية وتابع الإنفاق"
  }
 }
];
