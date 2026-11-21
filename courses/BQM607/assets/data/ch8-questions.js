/* BQM607 — بنك أسئلة الفصل 8: مراقبة وضبط المشروع (مولّد من build.py) */
const CH8_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هي العملية التي تحدد التكاليف التقديرية لبنود العمل بهدف وضع خطة مالية لقياس أداء المشروع؟",
  "options": [
   "محاسبة التكاليف",
   "حساب الأرباح والخسائر",
   "الميزانية Balance Sheet",
   "الموازنة Budget"
  ],
  "answerIndex": 3,
  "explanation": "<b>الموازنة Budget</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#budget",
   "label": "إعداد الموازنة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُعرض الموازنة على شكل مخططات تُدعى:",
  "options": [
   "S-Curve",
   "U-Curve",
   "J-Curve",
   "L-Curve"
  ],
  "answerIndex": 0,
  "explanation": "<b>منحني S</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#budget",
   "label": "إعداد الموازنة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو الخيار الذي لا يُعتبر من طرق جمع المعلومات حول الوضع الراهن للمشروع؟",
  "options": [
   "المقابلات المباشرة",
   "بشكل إلكتروني",
   "الاستبيانات مع ممثلي الزبون",
   "اجتماعات فريق العمل"
  ],
  "answerIndex": 2,
  "explanation": "الطرق: إلكتروني، يدوي، تفتيش بالموقع، مقابلات، اجتماعات. <b>الاستبيانات مع ممثلي الزبون</b> مو منها.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أثناء عملية المراقبة، يقوم مدير المشروع بتحليل الانحرافات لتحديد جميع ما يلي ما عدا:",
  "options": [
   "أثر الانحراف على المشروع",
   "العقوبات الملائمة لمتسبب الانحراف",
   "سبب الانحراف والأشخاص الذين شاركوا به",
   "هل سيؤدي الانحراف إلى انحرافات أخرى"
  ],
  "answerIndex": 1,
  "explanation": "العقوبات مو من أهداف التحليل.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#variances",
   "label": "الانحرافات والتقارير والإجراءات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القيمة المكتسبة هي:",
  "options": [
   "الكلفة التقديرية للعمل المخطط BCWS",
   "الكلفة التقديرية للعمل المنجز BCWP",
   "الكلفة الفعلية للعمل المخطط ACWS",
   "الكلفة الفعلية للعمل المنجز ACWP"
  ],
  "answerIndex": 1,
  "explanation": "القيمة المكتسبة = <b>BCWP</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "راقبنا المشروع وحصلنا على: BCWS = 10، ACWP = 14، BCWP = 12. ماذا نستنتج زمنياً؟",
  "options": [
   "المشروع يسير بحسب الخطة الزمنية",
   "المشروع متأخر عن الجدول الزمني",
   "المشروع مسبّق على الجدول الزمني",
   "جميع الإجابات خطأ"
  ],
  "answerIndex": 2,
  "explanation": "SV = 12 − 10 = <b>+2</b> (SPI = 1.2) ← <b>مسبّق</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "راقبنا المشروع وحصلنا على: BCWS = 10، ACWP = 14، BCWP = 12. ماذا نستنتج مالياً؟",
  "options": [
   "المشروع يصرف بحسب الموازنة",
   "المشروع يصرف أكثر من الموازنة المرصودة",
   "المشروع يصرف أقل من الموازنة",
   "جميع الإجابات خطأ"
  ],
  "answerIndex": 1,
  "explanation": "CV = 12 − 14 = <b>−2</b> (CPI ≈ 0.86) ← <b>أكتر من الموازنة</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت مدة المشروع المخططة 100 يوم، وراقبنا في منتصفه ووجدنا BCWS = 10، ACWP = 14، BCWP = 12. إذا استمرينا بنفس الوتيرة، متى يُتوقع انتهاء المشروع؟",
  "options": [
   "71 يوماً",
   "83 يوماً",
   "120 يوماً",
   "140 يوماً"
  ],
  "answerIndex": 1,
  "explanation": "SPI = 12 ÷ 10 = 1.2 ← 100 ÷ 1.2 ≈ <b>83 يوم</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند مراقبة المشروع بطريقة EVA، وبحسب الجدول: A (BCWS 700، ACWP 600، BCWP 800)، B (900، 700، 600)، C (800، 1200، 1000)، D (1400، 900، 1300). ما هو النشاط المتأخر زمنياً ويصرف أقل من الموازنة؟",
  "options": [
   "C",
   "A",
   "B",
   "D"
  ],
  "answerIndex": 3,
  "explanation": "متأخر: BCWP &lt; BCWS ← B (600 &lt; 900) وD (1300 &lt; 1400). أقل من الموازنة: BCWP &gt; ACWP ← D (1300 &gt; 900)، أما B (600 &lt; 700) فوق الموازنة. الجواب <b>D</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا تكتمل خطة المشروع حتى نضع الموازنة.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cost-estimating",
   "label": "تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الأداة التي تخصص بعض الأموال لمعالجة تجاوز التكاليف المرصودة عندما نعلم أن المشروع ينطوي على مخاطر مكلفة:",
  "options": [
   "تحليل الاحتياطي",
   "تحليل عروض البائعين",
   "تكلفة الجودة",
   "معدلات تكلفة الموارد"
  ],
  "answerIndex": 0,
  "explanation": "<b>تحليل الاحتياطي</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cost-estimating",
   "label": "تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مقدار الأموال اللازمة للقيام بالمشروع بشكل صحيح (تكلفة الأنشطة المتعلقة بالجودة):",
  "options": [
   "تكلفة الجودة",
   "احتياطي الإدارة",
   "التكلفة غير المباشرة",
   "القيمة المكتسبة"
  ],
  "answerIndex": 0,
  "explanation": "<b>تكلفة الجودة</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cost-estimating",
   "label": "تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "من الأرخص العثور على الأخطاء في وقت مبكر من المشروع وليس في وقت لاحق.",
  "answer": true,
  "explanation": "صح، ومشان هيك في دايماً تكاليف جودة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cost-estimating",
   "label": "تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "طرق تقدير التكلفة أثناء مرحلة اختيار المشروع أسرع وتستهلك موارد أقل من التقديرات المفصلة لاحقاً.",
  "answer": true,
  "explanation": "وبتعتمد أكتر على حكم الخبراء.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cost-estimating",
   "label": "تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التقدير الذي يعتمد على تقديرات مشاريع مماثلة مع تعديله لأعلى أو لأسفل:",
  "options": [
   "التقدير المماثل",
   "التقدير المعلمي",
   "التقدير التصاعدي",
   "التقدير القائم على الأنشطة"
  ],
  "answerIndex": 0,
  "explanation": "<b>المماثل</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#estimating-methods",
   "label": "طرق تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تقدير تكلفة مبنى مكاتب بالاعتماد على مساحته بالمتر المربع والمدينة التي سيُبنى فيها هو تقدير:",
  "options": [
   "معلمي",
   "مماثل",
   "تصاعدي",
   "قائم على الأنشطة"
  ],
  "answerIndex": 0,
  "explanation": "معلمات × تكلفة الوحدة ← <b>معلمي</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#estimating-methods",
   "label": "طرق تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أكثر طرق تقدير التكلفة دقة واستهلاكاً للوقت:",
  "options": [
   "التقدير التصاعدي",
   "التقدير المماثل",
   "التقدير المعلمي",
   "حكم الخبراء"
  ],
  "answerIndex": 0,
  "explanation": "<b>التصاعدي</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#estimating-methods",
   "label": "طرق تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تجميع التكاليف المرتبطة بنشاط معين من جميع المصادر عن طريق إضافة رمز النشاط إلى التقدير التفصيلي:",
  "options": [
   "التقديرات القائمة على الأنشطة",
   "التقدير المماثل",
   "التقدير المعلمي",
   "تحليل الاحتياطي"
  ],
  "answerIndex": 0,
  "explanation": "<b>القائمة على الأنشطة</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#estimating-methods",
   "label": "طرق تقدير التكاليف"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المشاريع الصغيرة التي تستخدم موارد داخلية قد لا تحتاج إلى موازنة تفصيلية.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#budget",
   "label": "إعداد الموازنة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أيّ مما يلي من خطوات إعداد الموازنة؟",
  "options": [
   "جمع تكاليف العاملين لكل نشاط",
   "حساب التكاليف التراكمية",
   "تحديد أزمنة إنفاق الأموال",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلهن.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#budget",
   "label": "إعداد الموازنة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان المبلغ المنفق أقل من الموازنة فلا يمكن أن يواجه المشروع أي مشكلة مالية.",
  "answer": false,
  "explanation": "ممكن يكون بمشكلة إذا <b>التمويل مو متاح وقت الحاجة</b> (التدفق النقدي).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#reserves",
   "label": "التدفق النقدي والاحتياطيات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الأموال المخصصة في الموازنة للتعامل مع زيادات التكلفة غير المخطط لها والتي يمكن التنبؤ بها إحصائياً:",
  "options": [
   "احتياطيات الطوارئ",
   "احتياطيات الإدارة",
   "التكاليف غير المباشرة",
   "القيمة المكتسبة"
  ],
  "answerIndex": 0,
  "explanation": "<b>احتياطيات الطوارئ</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#reserves",
   "label": "التدفق النقدي والاحتياطيات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الأموال التي تُوفّر بتقدير المدير لتلبية احتياجات قد تغيّر نطاق المشروع، وليست جزءاً من خط الأساس:",
  "options": [
   "احتياطيات الإدارة",
   "احتياطيات الطوارئ",
   "تكلفة الجودة",
   "التدفق النقدي"
  ],
  "answerIndex": 0,
  "explanation": "<b>احتياطيات الإدارة</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#reserves",
   "label": "التدفق النقدي والاحتياطيات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "احتياطيات الإدارة من المحتمل جداً أن يتم إنفاقها، وهي جزء من خط الأساس لموازنة المشروع.",
  "answer": false,
  "explanation": "<b>من غير المحتمل</b> تنصرف، و<b>مو جزء</b> من خط الأساس.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#reserves",
   "label": "التدفق النقدي والاحتياطيات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان من النادر تجاوز التقديرات، فيجب مراجعة طريقة التقدير لأنها قد تكون مرتفعة للغاية.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#reserves",
   "label": "التدفق النقدي والاحتياطيات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المراقبة والتحكم هي عملية المقارنة بين الأداء الفعلي والخطة لتحديد الانحرافات واتخاذ الإجراءات التصحيحية.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تكفي المتابعة غير الرسمية للمشاريع الكبيرة.",
  "answer": false,
  "explanation": "الكبيرة بدها <b>رقابة رسمية</b> ونظام معلومات.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "القدرة على السيطرة على المشروع تعتمد بشكل مباشر على:",
  "options": [
   "فعالية خطته",
   "عدد العاملين",
   "حجم الموازنة",
   "نوع البرمجيات"
  ],
  "answerIndex": 0,
  "explanation": "فعالية الخطة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كانت معظم أنشطة المشروع تستمر من يوم إلى يومين، فإن التواتر الأسبوعي لجمع البيانات:",
  "options": [
   "لن يكون كافياً",
   "مثالي",
   "أكثر من اللازم",
   "غير مهم"
  ],
  "answerIndex": 0,
  "explanation": "مو كافي، بدنا تواتر أكبر.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عند التعامل مع عاملين جدد أو غير معروفين، يكون من المناسب جمع البيانات:",
  "options": [
   "بتواتر أكبر من المعتاد",
   "بتواتر أقل",
   "مرة واحدة فقط",
   "في نهاية المشروع"
  ],
  "answerIndex": 0,
  "explanation": "للكشف المبكر عن المشاكل.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "جمع المعلومات التي لا حاجة لها يُعتبر مضيعة للجهد.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#monitoring",
   "label": "عملية المراقبة والضبط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "جميع الانحرافات لها آثار سلبية على المشروع وتتطلب إجراءات تصحيحية.",
  "answer": false,
  "explanation": "<b>مو كلها</b> سلبية ولا كلها بدها تصحيح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#variances",
   "label": "الانحرافات والتقارير والإجراءات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "اتخاذ إجراءات للتأكد من أن مشاكل مماثلة لن تحدث مستقبلاً (مثل إعادة الاختبارات مرتين) هي إجراءات:",
  "options": [
   "وقائية",
   "تصحيحية فقط",
   "عقابية",
   "إدارية"
  ],
  "answerIndex": 0,
  "explanation": "<b>وقائية</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#variances",
   "label": "الانحرافات والتقارير والإجراءات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا لم يكن اتخاذ الإجراء التصحيحي من صلاحيات مدير المشروع، فإنه يأخذ توصيات من مستوى الإدارة صاحبة القرار.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#variances",
   "label": "الانحرافات والتقارير والإجراءات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تسمح طريقة تحليل القيمة المكتسبة بالإكمال الجزئي للنشاط.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva",
   "label": "تحليل القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الهدف الأساسي من EVA:",
  "options": [
   "استنتاج أي انحراف سلبي عن الخطة في أبكر وقت ممكن والقيام بالأعمال التصحيحية",
   "حساب الأرباح",
   "اختيار المشاريع",
   "توزيع الموارد"
  ],
  "answerIndex": 0,
  "explanation": "اكتشاف الانحرافات السلبية بكير.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva",
   "label": "تحليل القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ما هي خطوات EVA الأربعة؟",
  "options": [
   "وضع الخطة ← قياس الأداء ← المقارنة بين الفعلي والمخطط ← الإجراءات التصحيحية",
   "القياس ← الخطة ← التصحيح ← المقارنة",
   "المقارنة ← التصحيح ← القياس ← الخطة",
   "التقدير ← الموازنة ← الشراء ← التسليم"
  ],
  "answerIndex": 0,
  "explanation": "بالترتيب.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva",
   "label": "تحليل القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "كم اعتباراً في تحليل انحراف الكلفة؟",
  "options": [
   "4",
   "5",
   "6",
   "8"
  ],
  "answerIndex": 2,
  "explanation": "ستة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva",
   "label": "تحليل القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الكلفة التقديرية للعمل المخطط، وتُدعى الموازنة أو خط الأساس:",
  "options": [
   "BCWS",
   "BCWP",
   "ACWP",
   "CPI"
  ],
  "answerIndex": 0,
  "explanation": "<b>BCWS</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الكلفة الفعلية للعمل المنجز:",
  "options": [
   "ACWP",
   "BCWP",
   "BCWS",
   "SPI"
  ],
  "answerIndex": 0,
  "explanation": "<b>ACWP</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تُحسب القيمة المكتسبة BCWP عند نقطة علّام بـ:",
  "options": [
   "جداء نسبة الإنجاز بإجمالي الموازنة",
   "الفرق بين المخطط والفعلي",
   "قسمة الفعلي على المخطط",
   "جمع التكاليف الفعلية"
  ],
  "answerIndex": 0,
  "explanation": "نسبة الإنجاز × إجمالي الموازنة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "موازنة مشروع 200,000 ونسبة الإنجاز عند نقطة المراقبة 30%. ما القيمة المكتسبة BCWP؟",
  "options": [
   "60,000",
   "140,000",
   "30,000",
   "200,000"
  ],
  "answerIndex": 0,
  "explanation": "0.30 × 200,000 = <b>60,000</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إحداثيات النقطة الأخيرة من منحني BCWS هي:",
  "options": [
   "TAC وBAC",
   "SV وCV",
   "SPI وCPI",
   "ES وEF"
  ],
  "answerIndex": 0,
  "explanation": "زمن نهاية المشروع TAC وموازنة نهاية المشروع BAC.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#eva-variables",
   "label": "متحولات القيمة المكتسبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يُحسب الانحراف الزمني SV بالعلاقة:",
  "options": [
   "BCWP − BCWS",
   "BCWP − ACWP",
   "BCWS − ACWP",
   "ACWP − BCWP"
  ],
  "answerIndex": 0,
  "explanation": "SV = BCWP − BCWS.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يُحسب انحراف الكلفة CV بالعلاقة:",
  "options": [
   "BCWP − ACWP",
   "BCWP − BCWS",
   "ACWP − BCWS",
   "BCWS − BCWP"
  ],
  "answerIndex": 0,
  "explanation": "CV = BCWP − ACWP.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يُعبّر عن الانحراف الزمني SV بوحدة زمنية (أيام).",
  "answer": false,
  "explanation": "بوحدة <b>مالية</b>، لأنو الإنجاز انعبّر عنو بالموازنة المستهلكة (BCWP).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مؤشر الأداء الزمني SPI يساوي:",
  "options": [
   "BCWP ÷ BCWS",
   "BCWP ÷ ACWP",
   "BCWS ÷ BCWP",
   "ACWP ÷ BCWP"
  ],
  "answerIndex": 0,
  "explanation": "SPI = BCWP ÷ BCWS.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مؤشر أداء الكلفة CPI يساوي:",
  "options": [
   "BCWP ÷ ACWP",
   "BCWP ÷ BCWS",
   "ACWP ÷ BCWP",
   "BCWS ÷ ACWP"
  ],
  "answerIndex": 0,
  "explanation": "CPI = BCWP ÷ ACWP.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان CPI أكبر من 1 فهذا يعني:",
  "options": [
   "نصرف أقل مما خططنا على الأعمال المنجزة",
   "نصرف أكثر مما خططنا",
   "المشروع متأخر",
   "المشروع متقدم زمنياً"
  ],
  "answerIndex": 0,
  "explanation": "CPI &gt; 1 = توفير.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان SPI أصغر من 1 فهذا يعني:",
  "options": [
   "ننجز الأعمال أبطأ من الخطة",
   "ننجز أسرع من الخطة",
   "نصرف أقل",
   "نصرف أكثر"
  ],
  "answerIndex": 0,
  "explanation": "SPI &lt; 1 = أبطأ.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مؤشر الأداء الإجمالي للمشروع CSI يساوي:",
  "options": [
   "CPI × SPI",
   "CPI + SPI",
   "CPI ÷ SPI",
   "SV × CV"
  ],
  "answerIndex": 0,
  "explanation": "CSI = CPI × SPI.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان CPI = 0.8 وSPI = 1.25، فإن CSI يساوي:",
  "options": [
   "1",
   "2.05",
   "0.64",
   "1.56"
  ],
  "answerIndex": 0,
  "explanation": "0.8 × 1.25 = <b>1</b> ← بالأداء المطلوب.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "BCWS = 500، BCWP = 400، ACWP = 450. ما SV وCV؟",
  "options": [
   "SV = −100، CV = −50",
   "SV = 100، CV = 50",
   "SV = −50، CV = −100",
   "SV = 50، CV = −100"
  ],
  "answerIndex": 0,
  "explanation": "SV = 400 − 500 = −100، CV = 400 − 450 = −50.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "BCWS = 800، BCWP = 1000، ACWP = 1200. حالة النشاط:",
  "options": [
   "متقدّم زمنياً وفوق الموازنة",
   "متأخر وتحت الموازنة",
   "متقدّم وتحت الموازنة",
   "متأخر وفوق الموازنة"
  ],
  "answerIndex": 0,
  "explanation": "SV = +200 (متقدّم)، CV = −200 (فوق الموازنة). (هاد النشاط C بسؤال الدورة.)",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشروع مدته المخططة 60 يوماً وSPI = 0.75. بنفس الوتيرة، المدة المتوقعة:",
  "options": [
   "80 يوماً",
   "45 يوماً",
   "60 يوماً",
   "75 يوماً"
  ],
  "answerIndex": 0,
  "explanation": "60 ÷ 0.75 = <b>80</b>.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#indices",
   "label": "الانحرافات ومؤشرات الأداء"
  }
 }
];
