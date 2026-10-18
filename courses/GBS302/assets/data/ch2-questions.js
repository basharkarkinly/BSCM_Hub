/* بنك أسئلة الفصل 2 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH2_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "الشبكة هي جهازان أو أكثر مرتبطان معاً بخطوط اتصال لها القدرة على نقل البيانات والمعلومات.",
  "answer": true,
  "explanation": "صح ✔️ — وبتمكّن المستخدمين من تبادل الملفات والتشارك بالبرمجيات والموارد متل الطابعات.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#definition",
   "label": "تعريف الشبكة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من فوائد الشبكة:",
  "options": [
   "تبادل الملفات والبيانات",
   "التشارك في البرمجيات",
   "التشارك في الموارد كالطابعات",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "الشبكة بتسمح بتبادل الملفات والتشارك بالبرمجيات والعتاد.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#definition",
   "label": "تعريف الشبكة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الشبكة المحلية تصل عدة حواسيب ببعضها داخل منطقة جغرافية صغيرة.",
  "answer": true,
  "explanation": "صح ✔️ — LAN: مدرسة، مكتب، منزل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الشبكة المحلية هي مجموعة شبكات ضمن مدينة أو بلدة.",
  "answer": false,
  "explanation": "خطأ — هاد وصف الشبكة <b>المناطقية (الإقليمية) MAN</b>. المحلية LAN بمنطقة صغيرة متل المدرسة أو المنزل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الشبكة المناطقية (الإقليمية) تغطي منطقة جغرافية واسعة كالدول والقارات.",
  "answer": false,
  "explanation": "خطأ — هاد وصف <b>الشبكة الواسعة WAN</b>. الإقليمية MAN بتصل شبكات محلية داخل <b>المدن والبلدات</b>.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الشبكة المناطقية الإقليمية تمتد ضمن الدول والقارات.",
  "answer": false,
  "explanation": "خطأ — بتمتد ضمن <b>المدن والبلدات</b>. الدول والقارات للواسعة WAN.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الشبكة التي تصل عدداً محدداً من الحواسب داخل منطقة جغرافية محددة مثل (المدرسة، المنزل):",
  "options": [
   "الشبكة الواسعة",
   "الشبكة المناطقية الإقليمية",
   "الشبكة المحلية"
  ],
  "answerIndex": 2,
  "explanation": "المحلية LAN.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الشبكة التي تصل مجموعة من الشبكات المحلية داخل مساحة جغرافية كبيرة كالمدن والبلدات:",
  "options": [
   "الشبكة المحلية LAN",
   "الشبكة الإقليمية MAN",
   "الشبكة الواسعة WAN"
  ],
  "answerIndex": 1,
  "explanation": "MAN = Metropolitan Area Network.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "شبكة الإنترنت وشبكات الموبايل 3G و 4G أمثلة على:",
  "options": [
   "الشبكة المحلية",
   "الشبكة الإقليمية",
   "الشبكة الواسعة"
  ],
  "answerIndex": 2,
  "explanation": "الواسعة WAN بتغطي الدول والقارات، ومن أمثلتها الإنترنت.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الشبكة التي تغطي منطقة جغرافية واسعة كالدول والقارات تسمى الشبكة ______.",
  "acceptable": [
   "الواسعة",
   "WAN",
   "wan",
   "الواسعه"
  ],
  "explanation": "WAN = Wide Area Network.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#geo",
   "label": "أنواع الشبكات حسب الامتداد الجغرافي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعتبر من أسرع أنواع الأسلاك للنقل ويتم إرسال البيانات فيه بشكل ومضات ليزرية:",
  "options": [
   "الكبل المزدوج",
   "كبل الألياف البصرية",
   "الكبل المحوري",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "الألياف البصرية: زجاج نقي، والبيانات بومضات ليزرية، وهي الأسرع.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "كبل التلفاز (الهوائي) هو مثال عن:",
  "options": [
   "الكبل السلكي",
   "الكبل المزدوج المجدول",
   "الكبل المحوري"
  ],
  "answerIndex": 2,
  "explanation": "الكبل المحوري: محور نحاس صلب + عازل + ضفائر معدنية + غطاء خارجي، متل كبل التلفزيون.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أسرع أنواع الأسلاك للنقل:",
  "options": [
   "الكبل المزدوج المجدول",
   "كبل الألياف البصرية",
   "الكبل المحوري"
  ],
  "answerIndex": 1,
  "explanation": "الألياف البصرية هي الأسرع.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أنواع الشبكات السلكية حسب طريقة الربط:",
  "options": [
   "الكبل المحوري",
   "الكبل المزدوج المجدول",
   "كبل الألياف البصرية",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "التلات أنواع كابلات للشبكة السلكية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الكبل المزدوج المجدول يتكون من أربع توصيلات ثنائية مجدولة من الأسلاك النحاسية الرفيعة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في نظام البث الخلوي تستخدم أقمار صناعية في مدار حول الأرض كمحطات تبديل.",
  "answer": false,
  "explanation": "خطأ — هاد <b>نظام الأقمار الصناعية</b>. البث الخلوي بيقسم المدينة لخلايا، بكل خلية جهاز بث واستقبال لاسلكي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الليف البصري عبارة عن اسطوانة رقيقة مصنوعة من ______ النقي.",
  "acceptable": [
   "الزجاج",
   "زجاج"
  ],
  "explanation": "الألياف البصرية من الزجاج النقي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#media",
   "label": "أنواع الشبكات حسب وسائل الربط"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تستخدم شبكة المخدم لعميل في الشركات الكبيرة.",
  "answer": true,
  "explanation": "صح ✔️ — وبيحتاج الخادم إدارة من شخص متخصص.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#arch",
   "label": "أنواع الشبكات حسب بنية الشبكة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعتبر جهاز الخادم مزوّداً للمعلومات وباقي الأجهزة مستخدمة للمعلومات.",
  "answer": true,
  "explanation": "صح ✔️ — بشبكة مخدم/عميل الخادم هو المركز الرئيسي لموارد الشبكة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#arch",
   "label": "أنواع الشبكات حسب بنية الشبكة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في شبكة الند للند يكون عدد الحواسب كبيراً ويحتاج الخادم لإدارة شخص متخصص.",
  "answer": false,
  "explanation": "خطأ — بالند للند الحواسب <b>حقوقها متساوية وعددها قليل</b> (ما بيتجاوز 10)، وتكلفتها قليلة، وكل جهاز زبون ومخدم بنفس الوقت.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#arch",
   "label": "أنواع الشبكات حسب بنية الشبكة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الشبكة التي تكون فيها حقوق الحواسب متساوية ويستطيع كل جهاز أن يكون زبوناً ومخدماً بنفس الوقت:",
  "options": [
   "شبكة مخدم لعميل",
   "شبكة الند للند",
   "الشبكة الواسعة"
  ],
  "answerIndex": 1,
  "explanation": "الند للند Peer to Peer، بنشوفها بمراكز التدريب على الحاسوب.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#arch",
   "label": "أنواع الشبكات حسب بنية الشبكة"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لا يتجاوز عدد الأجهزة في شبكة الند للند عادة ______ أجهزة.",
  "acceptable": [
   "عشرة",
   "10",
   "العشرة",
   "عشر"
  ],
  "explanation": "الند للند للشبكات الصغيرة، ما بتتجاوز 10 أجهزة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#arch",
   "label": "أنواع الشبكات حسب بنية الشبكة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتصفح Microsoft Edge واحد من متصفحات الإنترنت القوية والمنافسة.",
  "answer": true,
  "explanation": "صح ✔️ — المتصفح برنامج بيتيح تصفح المواقع والبحث فيها.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#internet",
   "label": "الإنترنت ومتطلبات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من متطلبات الاتصال بالإنترنت:",
  "options": [
   "اشتراك مع مزود خدمة إنترنت ISP",
   "حاسوب أو جهاز يستطيع الاتصال",
   "مودم",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "المتطلبات: اشتراك ISP + جهاز + مودم + متصفح.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#internet",
   "label": "الإنترنت ومتطلبات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الشركة التي تتولى ربط المستخدمين بشبكة الإنترنت تسمى مزود خدمة الإنترنت ______.",
  "acceptable": [
   "ISP",
   "isp"
  ],
  "explanation": "ISP = Internet Service Provider، بيعطيك اسم مستخدم وكلمة مرور.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#internet",
   "label": "الإنترنت ومتطلبات الاتصال"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تقنية الاتصال الهاتفي Dial Up من تقنيات شبكة الإنترنت الحديثة.",
  "answer": false,
  "explanation": "خطأ — الاتصال الهاتفي من التقنيات <b>القديمة وغير المستخدمة حالياً</b>، وسرعته منخفضة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تقنية الـ4G أسرع بـ100 مرة من تقنية الـ3G.",
  "answer": false,
  "explanation": "خطأ — الـ4G أسرع بـ<b>10 أضعاف</b> من الـ3G. (والـ5G أسرع بـ100 ضعف من الـ4G.)",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ADSL خط غير متماثل: سرعة التنزيل أكبر من سرعة التحميل.",
  "answer": true,
  "explanation": "صح ✔️ — لهيك سُمّي غير متماثل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من تقنيات الاتصال بالإنترنت التي تضمن بقاء الاتصال حتى عند التجوال:",
  "options": [
   "الاتصال عبر الأقمار الصناعية",
   "الاتصال عبر الهاتف النقال",
   "الخط المشترك الرقمي غير المتماثل ADSL"
  ],
  "answerIndex": 1,
  "explanation": "تقنيات الهاتف النقال (3G/4G/5G) بتضمن بقاء الاتصال حتى عند التنقل.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تقنية الاتصال بالإنترنت الأسرع في العالم لكن تكلفتها مرتفعة:",
  "options": [
   "الاتصال الهاتفي",
   "ADSL",
   "الاتصال عبر الأقمار الاصطناعية",
   "ISDN"
  ],
  "answerIndex": 2,
  "explanation": "الأقمار الاصطناعية الأسرع، بس أغلى.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الجهاز في تقنية ADSL الذي يسمح باستخدام الهاتف والإنترنت في آن واحد:",
  "options": [
   "المودم",
   "المرشح أو المقسّم",
   "الموجّه",
   "البطاقة الرسومية"
  ],
  "answerIndex": 1,
  "explanation": "المرشح/المقسّم بيفصل الخط لمجالين: صوت ومعلومات.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تستطيع الشبكات الرقمية للخدمة المتكاملة ISDN نقل الصوت والصور والفيديو والبيانات في وقت واحد على نفس الأسلاك.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الجيل الخامس 5G أسرع بـ10 أضعاف من الجيل الرابع.",
  "answer": false,
  "explanation": "خطأ — حسب المقرر الـ5G أسرع بـ<b>100 ضعف</b> من الـ4G. الـ10 أضعاف بين الـ4G والـ3G.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#tech",
   "label": "تقنيات الاتصال بالإنترنت"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "شبكة الإنترانت شبكة تكون ضمن المؤسسات الكبيرة.",
  "answer": true,
  "explanation": "صح ✔️ — شبكة داخلية لمشاركة الموارد والمعلومات بين موظفي الشركة فقط.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "شبكة داخلية تكون في المؤسسات الكبيرة وتستخدم لمشاركة الموارد والمعلومات والإنترنت بين موظفي الشركة فقط:",
  "options": [
   "الإنترنت",
   "الإنترانت",
   "الإكسترانت"
  ],
  "answerIndex": 1,
  "explanation": "الإنترانت Intranet.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة من شبكات الإنترانت ترتبط فيما بينها عن طريق الإنترنت:",
  "options": [
   "الإنترنت",
   "الشبكة",
   "الإكسترانت"
  ],
  "answerIndex": 2,
  "explanation": "الإكسترانت بتربط شبكات إنترانت مع الحفاظ على خصوصية كل وحدة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النص الذي يعبّر عن العنوان الرقمي للموقع مثل www.google.com:",
  "options": [
   "عنوان الإنترنت IP",
   "اسم النطاق Domain Name",
   "مخدم أسماء النطاق DNS"
  ],
  "answerIndex": 1,
  "explanation": "اسم النطاق بديل نصي عن العنوان الرقمي.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المخدم المسؤول عن مطابقة الأسماء التي يدخلها المستخدم مع العناوين الرقمية المقابلة لها:",
  "options": [
   "مخدم أسماء النطاق DNS",
   "مزود خدمة الإنترنت ISP",
   "مخدم البريد"
  ],
  "answerIndex": 0,
  "explanation": "DNS = Domain Name Server.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "يمثَّل عنوان الإنترنت بمجموعة من الأرقام تفصل بين كل مجموعة وأخرى ______.",
  "acceptable": [
   "نقطة",
   "بنقطة",
   "النقطة",
   "."
  ],
  "explanation": "مثال: 74.125.224.72.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#concepts",
   "label": "عناوين الإنترنت والإنترانت والإكسترانت"
  }
 }
];
