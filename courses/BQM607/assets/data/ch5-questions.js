/* BQM607 — بنك أسئلة الفصل 5: تخطيط الزمن (1): الأنشطة والمخطط الشبكي (مولّد من build.py) */
const CH5_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أين يُستخدم مفهوم النشاط الوهمي Dummy Activity؟",
  "options": [
   "في مخططات الأنشطة في العقد فقط",
   "في مخططات الأنشطة على الأسهم فقط",
   "في كلا النوعين من المخططات",
   "لا يُستخدم في كلا النوعين"
  ],
  "answerIndex": 1,
  "explanation": "النشاط الوهمي بالـ <b>AOA بس</b>. الـ AON ما بتحتاجو.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aoa",
   "label": "الأنشطة على الأسهم AOA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما معنى علاقة Finish-to-Start؟",
  "options": [
   "يستطيع النشاط الأول أن ينتهي عندما يبدأ النشاط الثاني",
   "يستطيع النشاط الأول أن يبدأ عندما ينتهي النشاط الثاني",
   "يجب أن ينتهي النشاط الأول حتى يستطيع النشاط الثاني أن يبدأ",
   "يجب أن يبدأ النشاط الأول حتى يستطيع النشاط الثاني أن ينتهي"
  ],
  "answerIndex": 2,
  "explanation": "FS: الأول لازم <b>ينتهي</b> ليقدر التاني <b>يبدأ</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو الفرق بين مفهومي التخلف Lag والقيادة Lead؟",
  "options": [
   "التخلف تأخير زمني بين نشاطين بينما القيادة تسبيق زمني بينهما",
   "التخلف تسبيق زمني بينما القيادة تأخير زمني",
   "التخلف فترة مرونة إضافية بينما القيادة قيد إضافي",
   "التخلف قيد إضافي بينما القيادة فترة مرونة"
  ],
  "answerIndex": 0,
  "explanation": "Lag = تأخير، Lead = تسبيق.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما معنى علاقة Finish-to-Finish؟",
  "options": [
   "يستطيع النشاط الأول أن ينتهي عندما يبدأ النشاط الثاني",
   "يستطيع النشاط الأول أن يبدأ عندما ينتهي النشاط الثاني",
   "يجب أن ينتهي النشاط الأول حتى يستطيع النشاط الثاني أن يبدأ",
   "يجب أن ينتهي النشاط الأول حتى يستطيع النشاط الثاني أن ينتهي"
  ],
  "answerIndex": 3,
  "explanation": "FF: نهاية التاني مربوطة بنهاية الأول.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو الفرق بين مخططي AON وAOA؟",
  "options": [
   "الأول تأكيدي والثاني احتمالي",
   "الأول سهل الاستخدام والثاني صعب",
   "مكان تموضع الأنشطة على الأسهم أم في العقد",
   "الأول للمشاريع التنظيمية والثاني للهندسية"
  ],
  "answerIndex": 2,
  "explanation": "الفرق: الأنشطة <b>بالعقد</b> (AON) أو <b>عالأسهم</b> (AOA).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aon",
   "label": "الأنشطة في العقد AON"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في علاقة نهاية-بداية، إذا كان النشاط a مدته 10 أيام والنشاط b مدته 12 يوماً وفترة التخلف 5 أيام، ما المدة الإجمالية للنشاطين a وb؟",
  "options": [
   "22 يوماً",
   "27 يوماً",
   "17 يوماً",
   "32 يوماً"
  ],
  "answerIndex": 1,
  "explanation": "10 + 5 + 12 = <b>27 يوم</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا يمكن اعتبار تخطيط الزمن بمعزل عن رقابة الزمن.",
  "answer": true,
  "explanation": "صح، والزمن والتكلفة والجودة لازم ينشافوا سوا.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#time-planning",
   "label": "تخطيط الزمن والرقابة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "غالباً ما تكون مرحلة التخطيط هي المرحلة الأسهل بالنسبة لمدير المشروع.",
  "answer": false,
  "explanation": "بالعكس: غالباً <b>الأكتر تحدياً وصعوبة</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#time-planning",
   "label": "تخطيط الزمن والرقابة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "واحدة مما يلي ليست من أهداف عملية التخطيط:",
  "options": [
   "تحديد الغاية المرجوة",
   "تحديد الوضع الحالي",
   "السماح ببعض الاحتياطيات للطوارئ",
   "توقيع العقود مع الزبائن"
  ],
  "answerIndex": 3,
  "explanation": "الأهداف: الغاية، الوضع الحالي، المسار، حدود الانحرافات، موارد التصحيح، الاحتياطيات. توقيع العقود مو منها.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-goals",
   "label": "أهداف عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أيّ مما يلي من أهداف عملية التخطيط؟",
  "options": [
   "رسم مسار يسمح بالتحرك من الوضع الحالي إلى الغاية المرجوة",
   "وضع حدود للانحرافات",
   "تخصيص الموارد اللازمة لتصحيح الانحرافات",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلهن.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-goals",
   "label": "أهداف عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "كلما كانت التغيرات المطلوبة أكبر، كانت الإجراءات التصحيحية اللازمة أكبر وأعقد.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-goals",
   "label": "أهداف عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تهدف عملية التخطيط أساساً إلى (بالترتيب):",
  "options": [
   "SOW ← WBS ← شبكة CPM ← الجدول الزمني",
   "WBS ← SOW ← الجدول ← CPM",
   "الجدول ← CPM ← WBS ← SOW",
   "CPM ← SOW ← WBS ← الجدول"
  ],
  "answerIndex": 0,
  "explanation": "بيان العمل، هيكل تقسيم العمل، شبكة المسار الحرج، الجدول الزمني.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-process",
   "label": "عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "حزم العمل لأغراض التحكم في التكلفة قد لا تتطابق مع حزم العمل لأغراض إدارة الجودة.",
  "answer": true,
  "explanation": "صح، بتختلف حسب نظام التخطيط والرقابة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-process",
   "label": "عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أيّ مما يلي من العمليات الأساسية لتخطيط المشروع؟",
  "options": [
   "تخطيط الموارد",
   "تخطيط المشتريات",
   "تخطيط الاتصالات",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلهن.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-process",
   "label": "عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ترتيب خطوات عملية تخطيط الزمن هو:",
  "options": [
   "تعريف الأنشطة، تسلسلها، تقدير مددها، تقدير الموارد، الجدول الزمني",
   "الجدول الزمني، تعريف الأنشطة، التسلسل، التقدير",
   "تقدير الموارد، تعريف الأنشطة، الجدول، التسلسل",
   "التسلسل، الجدول، التعريف، التقدير"
  ],
  "answerIndex": 0,
  "explanation": "تعريف ← تسلسل ← مدد ← موارد ← جدول.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#planning-process",
   "label": "عملية التخطيط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأنشطة هي المخرجات بحد ذاتها.",
  "answer": false,
  "explanation": "الأنشطة <b>مو المخرجات</b>؛ هي وحدات العمل اللي بتوصلنا للنواتج.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#activities",
   "label": "تعريف الأنشطة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تخطيط وجدولة الجزء الأول فقط الذي نعرفه بما يكفي، والتريث بتخطيط الأجزاء اللاحقة حتى توفر المعلومات، يُسمّى:",
  "options": [
   "تخطيط الموجات Rolling Wave Planning",
   "التتبع السريع",
   "تسوية الموارد",
   "التخطيط الاستراتيجي"
  ],
  "answerIndex": 0,
  "explanation": "<b>تخطيط الموجات</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#activities",
   "label": "تعريف الأنشطة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "ينبغي إدراج الأنشطة السابقة واللاحقة والقيود ضمن سمات كل نشاط.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#activities",
   "label": "تعريف الأنشطة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في دراسة حالة العرس، ماذا فعل هاني عندما أدرك الحاجة إلى سيارة ليموزين إضافية؟",
  "options": [
   "أضافها مباشرة دون إخبار أحد",
   "أجرى التغيير من خلال التحكم في التغيير وتمت الموافقة عليه",
   "ألغى الحفل",
   "أخّر الحفل"
  ],
  "answerIndex": 1,
  "explanation": "عن طريق <b>نظام التحكم بالتغيير</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#activities",
   "label": "تعريف الأنشطة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "كم شكلاً لعلاقات التبعية بين الأنشطة؟",
  "options": [
   "2",
   "3",
   "4",
   "5"
  ],
  "answerIndex": 2,
  "explanation": "أربعة: FS وSS وFF وSF.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما هي علاقة التبعية الأبسط والأكثر شيوعاً؟",
  "options": [
   "Finish-to-Start",
   "Start-to-Start",
   "Finish-to-Finish",
   "Start-to-Finish"
  ],
  "answerIndex": 0,
  "explanation": "FS.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "علاقة يمكن فيها أن يبدأ النشاط B حالما يبدأ النشاط A (مثل لصق وتعليق ورق الجدران):",
  "options": [
   "Start-to-Start",
   "Finish-to-Start",
   "Finish-to-Finish",
   "Start-to-Finish"
  ],
  "answerIndex": 0,
  "explanation": "SS.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "علاقة لا يمكن فيها أن ينتهي النشاط B إلا بعد أن يبدأ النشاط A:",
  "options": [
   "Start-to-Finish",
   "Start-to-Start",
   "Finish-to-Finish",
   "Finish-to-Start"
  ],
  "answerIndex": 0,
  "explanation": "SF.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "«لا يمكن استكمال التوزيع حتى يكون قد تم إنتاج جميع المكونات» مثال على علاقة:",
  "options": [
   "Finish-to-Finish",
   "Start-to-Start",
   "Finish-to-Start",
   "Start-to-Finish"
  ],
  "answerIndex": 0,
  "explanation": "FF.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dependencies",
   "label": "علاقات التبعية الأربعة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يمكن إضافة فترة تخلف Lag في جميع أنواع علاقات التبعية الأربعة.",
  "answer": true,
  "explanation": "الكتاب بيذكر إمكانية الـ Lag مع كل نوع.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان التخلف بين A وB في علاقة FS يساوي 5 أيام، فهذا يعني:",
  "options": [
   "B لا يبدأ إلا بعد 5 أيام من نهاية A",
   "B يبدأ قبل نهاية A بـ 5 أيام",
   "B ينتهي بعد 5 أيام من بداية A",
   "A وB يبدآن معاً"
  ],
  "answerIndex": 0,
  "explanation": "تأخير 5 أيام بعد نهاية A.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان مقدار التخلف −5 أيام في علاقة FS، فهذا يعني:",
  "options": [
   "B يبدأ قبل انتهاء A بخمسة أيام",
   "B يبدأ بعد انتهاء A بخمسة أيام",
   "لا يوجد علاقة",
   "A يتأخر 5 أيام"
  ],
  "answerIndex": 0,
  "explanation": "رقم سالب = <b>قيادة</b> (تداخل).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "القيادة Lead يمكن التعبير عنها بعدد سالب وتشير إلى وجود تداخل في الأنشطة.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "علاقة FS، النشاط A مدته 6 أيام والنشاط B مدته 4 أيام، مع قيادة (Lead) يومين. ما المدة الإجمالية للنشاطين؟",
  "options": [
   "8 أيام",
   "10 أيام",
   "12 يوماً",
   "6 أيام"
  ],
  "answerIndex": 0,
  "explanation": "B بيبدأ قبل نهاية A بيومين: 6 − 2 + 4 = <b>8 أيام</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "علاقة FS، النشاط A مدته 7 أيام والنشاط B مدته 3 أيام، مع تخلف 2. ما المدة الإجمالية؟",
  "options": [
   "10",
   "12",
   "8",
   "14"
  ],
  "answerIndex": 1,
  "explanation": "7 + 2 + 3 = <b>12</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#lag-lead",
   "label": "التخلف والقيادة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تزيين صالة الاستقبال يعتمد على وصول شحنة الزينة المطلوبة مسبقاً. هذه تبعية:",
  "options": [
   "خارجية",
   "تفضيلية",
   "إلزامية",
   "وهمية"
  ],
  "answerIndex": 0,
  "explanation": "شي من خارج شغل المشروع ← <b>خارجية</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dep-kinds",
   "label": "التبعية الخارجية والتفضيلية والإلزامية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "رغبة العروسين بوصول الوصيفات إلى حفل الاستقبال قبل وصولهما هي تبعية:",
  "options": [
   "تفضيلية",
   "إلزامية",
   "خارجية",
   "وهمية"
  ],
  "answerIndex": 0,
  "explanation": "مسألة تفضيل، مو إلزامية ← <b>تفضيلية</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dep-kinds",
   "label": "التبعية الخارجية والتفضيلية والإلزامية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لا يمكن توجيه دعوة لم تتم طباعتها بعد. هذه تبعية:",
  "options": [
   "إلزامية",
   "تفضيلية",
   "خارجية",
   "اختيارية"
  ],
  "answerIndex": 0,
  "explanation": "بسبب طبيعة العمل ← <b>إلزامية</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dep-kinds",
   "label": "التبعية الخارجية والتفضيلية والإلزامية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تُوجد علاقات التبعية الإلزامية فقط بسبب طبيعة العمل.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dep-kinds",
   "label": "التبعية الخارجية والتفضيلية والإلزامية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عندما ندرك أثناء تحديد الأنشطة أن النطاق يحتاج إلى تغيير، نُنشئ طلب تغيير ونرسله عبر نظام التحكم في التغيير.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#dep-kinds",
   "label": "التبعية الخارجية والتفضيلية والإلزامية"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "المخطط الشبكي للمشروع هو مخطط ______ بعد إضافة المدد الزمنية للأنشطة.",
  "acceptable": [
   "الأسبقية",
   "أسبقية"
  ],
  "explanation": "مخطط الأسبقية + المدد.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجب تضمين جميع حزم عمل WBS في الشبكة لأنه يتعين احتسابها في الجدول الزمني.",
  "answer": true,
  "explanation": "ترك نشاط واحد بيغيّر المدة والتكاليف.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُعتبر WBS جدولاً زمنياً للمشروع.",
  "answer": false,
  "explanation": "WBS <b>مو جدول زمني</b>، بس هو الأساس لبنائو.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في المخطط الشبكي يجب ألا يؤدي أي نشاط إلى مسار مسدود، وتتصل جميع المسارات في نهاية المشروع.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في المخططات الشبكية تُرسم الأسهم من اليسار إلى اليمين مع وجود محور محدد للزمن.",
  "answer": false,
  "explanation": "من اليسار لليمين، بس <b>بدون محور زمن</b> محدد.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يمكن أن يعتمد نشاط معين على أكثر من نشاط سابق.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#network",
   "label": "المخطط الشبكي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مخطط AOA، الأسهم تمثّل:",
  "options": [
   "الأنشطة",
   "الأحداث",
   "التبعية فقط",
   "الموارد"
  ],
  "answerIndex": 0,
  "explanation": "بالـ AOA الأسهم = الأنشطة، والعقد = الأحداث.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aoa",
   "label": "الأنشطة على الأسهم AOA"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مخطط AOA، العقد تمثّل:",
  "options": [
   "الأحداث أو نواتج الأنشطة (نقطة في الزمن)",
   "الأنشطة",
   "المدد",
   "الموارد"
  ],
  "answerIndex": 0,
  "explanation": "العقد = أحداث.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aoa",
   "label": "الأنشطة على الأسهم AOA"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الأنشطة الوهمية تستهلك وقتاً قصيراً.",
  "answer": false,
  "explanation": "الأنشطة الوهمية <b>ما بتستهلك أي وقت</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aoa",
   "label": "الأنشطة على الأسهم AOA"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أيّ مما يلي من عيوب مخطط AOA؟",
  "options": [
   "يُظهر فقط علاقات Finish-to-Start",
   "قد يحتاج إلى أنشطة وهمية",
   "لا تستوعبه جميع برمجيات إدارة المشاريع",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "التلاتة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aoa",
   "label": "الأنشطة على الأسهم AOA"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مخطط AON، العقد تمثّل:",
  "options": [
   "الأنشطة",
   "الأحداث",
   "الأنشطة الوهمية",
   "الموارد"
  ],
  "answerIndex": 0,
  "explanation": "بالـ AON العقد = الأنشطة، والأسهم = التبعية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aon",
   "label": "الأنشطة في العقد AON"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في مخطط AON لا يجوز أن تحمل أكثر من عقدة واحدة نفس الرمز.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aon",
   "label": "الأنشطة في العقد AON"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تطورت مخططات AOA انطلاقاً من مخططات AON.",
  "answer": false,
  "explanation": "بالعكس: <b>AON تطوّرت من AOA</b>.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aon",
   "label": "الأنشطة في العقد AON"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المسار الحرج هو:",
  "options": [
   "أطول مسار عبر الشبكة",
   "أقصر مسار عبر الشبكة",
   "المسار الذي فيه أكثر الأنشطة",
   "المسار الوهمي"
  ],
  "answerIndex": 0,
  "explanation": "أطول مسار.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#aon",
   "label": "الأنشطة في العقد AON"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في جدول المستويات، الأنشطة التي توضع في المستوى الأول هي:",
  "options": [
   "الأنشطة التي ليس لها أنشطة سابقة",
   "الأنشطة الأطول مدة",
   "الأنشطة الحرجة",
   "الأنشطة الأخيرة"
  ],
  "answerIndex": 0,
  "explanation": "اللي ما إلها سابق.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#levels",
   "label": "جدول المستويات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مثال مركز الأعمال بالكتاب (A بلا سابق؛ B وC وD بعد A؛ E بعد B وC؛ F بعد B وC وD؛ G بعد F؛ H بعد E وG)، في أي مستوى يقع النشاط G؟",
  "options": [
   "الثاني",
   "الثالث",
   "الرابع",
   "الخامس"
  ],
  "answerIndex": 2,
  "explanation": "المستوى 1: A، 2: B وC وD، 3: E وF، <b>4: G</b>، 5: H.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#levels",
   "label": "جدول المستويات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في نفس المثال، أي الأنشطة تقع في المستوى الثالث؟",
  "options": [
   "E وF",
   "B وC وD",
   "G",
   "H"
  ],
  "answerIndex": 0,
  "explanation": "E وF.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#levels",
   "label": "جدول المستويات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند رسم الشبكة على المستويات يمكن أن يجتاز السهم أكثر من مستوى.",
  "answer": true,
  "explanation": "صح (متل السهم من E لـ H).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#levels",
   "label": "جدول المستويات"
  }
 }
];
