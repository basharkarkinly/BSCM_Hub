/* BQM607 — بنك أسئلة الفصل 6: تخطيط الزمن (2): المدد وغانت والمسار الحرج (مولّد من build.py) */
const CH6_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو المفهوم الذي يقوم على أخذ حزم عمل الـ WBS وإظهار التسلسل الذي يمكن أن تُنفّذ به؟",
  "options": [
   "رسم الجدول الزمني للمشروع Project Schedule",
   "رسم هيكل تقسيم العمل WBS",
   "ضغط الجدول الزمني",
   "رسم مخطط Gantt"
  ],
  "answerIndex": 0,
  "explanation": "<b>الجدول الزمني للمشروع</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما الفرق بين طريقة CPM وطريقة PERT؟",
  "options": [
   "CPM غير رسمية وPERT رسمية",
   "CPM رسمية وPERT غير رسمية",
   "CPM احتمالية وPERT تأكيدية",
   "CPM تأكيدية أو قطعية وPERT احتمالية"
  ],
  "answerIndex": 3,
  "explanation": "CPM <b>حتمية</b> (مدة وحدة)، وPERT <b>احتمالية</b> (تلات مدد).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#cpm",
   "label": "طريقة المسار الحرج CPM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو الخيار الصحيح فيما يخص المسار الحرج؟",
  "options": [
   "هو المسار الذي يجب تخصيصه بأقل قدر من الموارد",
   "هو المسار الذي يجب تخصيصه بأكبر قدر من الموارد",
   "هو أقصر مسار في الشبكة",
   "هو أطول مسار في الشبكة"
  ],
  "answerIndex": 3,
  "explanation": "المسار الحرج = <b>أطول مسار</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في طريقة المسار الحرج، يتم في طريق الذهاب حساب:",
  "options": [
   "المسار الحرج",
   "الأزمنة المبكرة",
   "الأزمنة المتأخرة",
   "فترات العوم"
  ],
  "answerIndex": 1,
  "explanation": "الذهاب للأمام = <b>الأزمنة المبكرة</b> (ES وEF).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن أحد طرق ضغط الجدول الزمني هو تغيير موارد الأنشطة. ما هو الخيار الذي لا يندرج ضمن هذه الاستراتيجية؟",
  "options": [
   "التخفيف من المسؤوليات الأخرى للعاملين",
   "إعادة تخصيص الموارد من الأنشطة غير الحرجة على الحرجة",
   "تخطيط العمل الإضافي وتحديد مواعيده ضمن الخطة الأصلية",
   "تخصيص الأنشطة بموارد إضافية والاستعانة بمصادر خارجية"
  ],
  "answerIndex": 2,
  "explanation": "العمل الإضافي منخطّطو <b>بالتدريج كخطة طوارئ</b>، مو بالخطة الأصلية.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هي طريقة تقدير مدة النشاط التي تستخدم الكمبيوتر لحساب عدة مدد على شكل سيناريوهات بفرضيات مختلفة مثل تحليل مونتي كارلو؟",
  "options": [
   "التقدير من الأسفل إلى الأعلى",
   "التقدير بالمحاكاة",
   "تقنية المعاملات",
   "تقنية النمذجة"
  ],
  "answerIndex": 1,
  "explanation": "<b>المحاكاة</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هي مدة المشروع؟",
  "options": [
   "25 يوماً",
   "19 يوماً",
   "22 يوماً",
   "18 يوماً"
  ],
  "answerIndex": 0,
  "explanation": "المسار الحرج A–B–D–G–I = 3 + 4 + 5 + 6 + 7 = <b>25</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هو المسار الحرج؟",
  "options": [
   "A-C-D-G-I",
   "A-C-F-H-J",
   "A-C-E-G-I",
   "A-B-D-G-I"
  ],
  "answerIndex": 3,
  "explanation": "أطول مسار: <b>A-B-D-G-I</b> = 25 يوم (وكل أنشطتو عومها صفر).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هي البداية المبكرة Early Start للنشاط E؟",
  "options": [
   "3",
   "8",
   "7",
   "5"
  ],
  "answerIndex": 3,
  "explanation": "E بعد C: ES(E) = EF(C) = 3 + 2 = <b>5</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هي البداية المتأخرة Late Start للنشاط C؟",
  "options": [
   "7",
   "3",
   "5",
   "8"
  ],
  "answerIndex": 2,
  "explanation": "LF(C) = أصغر LS للاحقين (D=7، E=8، F=7) = 7 ← LS = 7 − 2 = <b>5</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هي فترة العوم Slack للنشاط H؟",
  "options": [
   "6",
   "3",
   "2",
   "صفر"
  ],
  "answerIndex": 2,
  "explanation": "ES(H) = 8، وLF(H) = أصغر LS للاحقين (I=18، J=22) = 18 ← LS = 10 ← العوم = 10 − 8 = <b>2</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشروع: A(3)، B(4) بعد A، C(2) بعد A، D(5) بعد B وC، E(4) بعد C، F(3) بعد C، G(6) بعد D وE، H(8) بعد F، I(7) بعد G وH، J(3) بعد H. ما هي النهاية المبكرة Early Finish للنشاط G؟",
  "options": [
   "25",
   "18",
   "12",
   "16"
  ],
  "answerIndex": 1,
  "explanation": "ES(G) = أكبر EF للسابقين (D=12، E=9) = 12 ← EF = 12 + 6 = <b>18</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من محدودية مخطط غانت:",
  "options": [
   "لا يُظهر الروابط وعلاقات التبعية بين الأنشطة",
   "يُظهر في المقام الأول علاقات Finish-to-Start",
   "عملية إعادة التخطيط صعبة",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلهن من محدوديتو.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt-limits",
   "label": "محدودية مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "طريقة التقدير التي تستخدم التكاليف والمدد الفعلية لمشاريع سابقة مماثلة، وتُدعى أيضاً Top-down:",
  "options": [
   "التقدير بالتماثل",
   "التقدير من الأسفل إلى الأعلى",
   "تقنية المعاملات",
   "المحاكاة"
  ],
  "answerIndex": 0,
  "explanation": "<b>بالتماثل</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التقدير بالتماثل أقل كلفة وأسرع من الطرق الأخرى ولكنه أقل دقة.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التقدير من الأسفل إلى الأعلى أقل دقة من التقدير بالتماثل.",
  "answer": false,
  "explanation": "بالعكس: <b>أدق</b>، بس أغلى وأطول.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تُعتبر طريقة WBS الأشهر في تقنية:",
  "options": [
   "التقسيم Modular",
   "المقارنة Benchmark",
   "المحاكاة",
   "حكم الخبراء"
  ],
  "answerIndex": 0,
  "explanation": "التقسيم.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في حفر نفق للصرف الصحي، طول النفق متغير مستقل وزمن الحفر متغير تابع. هذه تقنية:",
  "options": [
   "المعاملات Parametric",
   "النمذجة",
   "التماثل",
   "المقارنة"
  ],
  "answerIndex": 0,
  "explanation": "<b>المعاملات</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تقدير الوقت اللازم لاستبدال الكابلات بين أبراج نقل الطاقة بنموذج متغيرات (الطقس، الوصول…) بأوزان هو مثال على:",
  "options": [
   "تقنية النمذجة",
   "تقنية المقارنة",
   "التقدير بالتماثل",
   "تحليل الاحتياطي"
  ],
  "answerIndex": 0,
  "explanation": "<b>النمذجة</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إضافة وقت إضافي إلى الجدول (احتياطي طوارئ أو مخزن مؤقت) لحساب المخاطر الإضافية يُسمّى:",
  "options": [
   "تحليل الاحتياطي",
   "المحاكاة",
   "التتبع السريع",
   "تحطيم الجدول"
  ],
  "answerIndex": 0,
  "explanation": "<b>تحليل الاحتياطي</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تقنية التقدير التي تُستخدم في الأعمال المتكررة بالاعتماد على معلومات مسجلة لأعمال مماثلة من مرات سابقة:",
  "options": [
   "المقارنة Benchmark",
   "النمذجة",
   "المعاملات",
   "المحاكاة"
  ],
  "answerIndex": 0,
  "explanation": "<b>المقارنة</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#techniques",
   "label": "تقنيات التقدير"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط تقديره المتفائل 2 يوم والواقعي 5 أيام والمتشائم 14 يوماً. ما التقدير بثلاث نقاط؟",
  "options": [
   "6 أيام",
   "7 أيام",
   "5 أيام",
   "21 يوماً"
  ],
  "answerIndex": 0,
  "explanation": "(2 + 4×5 + 14) ÷ 6 = 36 ÷ 6 = <b>6</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#three-point",
   "label": "التقدير المكوّن من تلات نقاط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط: متفائل 4، واقعي 6، متشائم 14. ما التقدير النهائي؟",
  "options": [
   "6",
   "7",
   "8",
   "24"
  ],
  "answerIndex": 1,
  "explanation": "(4 + 24 + 14) ÷ 6 = 42 ÷ 6 = <b>7</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#three-point",
   "label": "التقدير المكوّن من تلات نقاط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط: متفائل 3، واقعي 6، متشائم 9. ما التقدير النهائي؟",
  "options": [
   "6",
   "5",
   "7",
   "18"
  ],
  "answerIndex": 0,
  "explanation": "(3 + 24 + 9) ÷ 6 = 36 ÷ 6 = <b>6</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#three-point",
   "label": "التقدير المكوّن من تلات نقاط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في التقدير بثلاث نقاط يُعطى التقدير الواقعي وزناً يساوي 4.",
  "answer": true,
  "explanation": "صح، والمتفائل والمتشائم وزن 1 لكل واحد، والمجموع ÷ 6.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#three-point",
   "label": "التقدير المكوّن من تلات نقاط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تتراوح دقة التقديرات الأولية Order-of-Magnitude عادة بين:",
  "options": [
   "−25% و+75%",
   "−10% و+25%",
   "−5% و+10%",
   "−50% و+50%"
  ],
  "answerIndex": 0,
  "explanation": "−25% لـ +75%.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#accuracy",
   "label": "دقة التقديرات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "دقة تقديرات الموازنة عند الموافقة على المشروع تتراوح عادة بين:",
  "options": [
   "−10% و+25%",
   "−25% و+75%",
   "−5% و+10%",
   "0% و+5%"
  ],
  "answerIndex": 0,
  "explanation": "−10% لـ +25%.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#accuracy",
   "label": "دقة التقديرات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "دقة التقديرات النهائية (من الأسفل للأعلى) تتراوح عادة بين:",
  "options": [
   "−5% و+10%",
   "−10% و+25%",
   "−25% و+75%",
   "−1% و+1%"
  ],
  "answerIndex": 0,
  "explanation": "−5% لـ +10%.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#accuracy",
   "label": "دقة التقديرات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كانت المدة الفعلية 10 أشهر، فإن مجال التقدير الأولي المقبول (−25% إلى +75%) يكون بين:",
  "options": [
   "7.5 و17.5 شهراً",
   "9 و12.5 شهراً",
   "9.5 و11 شهراً",
   "5 و15 شهراً"
  ],
  "answerIndex": 0,
  "explanation": "10 × 0.75 = 7.5 و10 × 1.75 = <b>17.5</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#accuracy",
   "label": "دقة التقديرات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "كلما ذهبنا باتجاه المزيد من التفاصيل في التقدير، زادت التكلفة والوقت للحصول على التقديرات.",
  "answer": true,
  "explanation": "وبيضل مصاري ووقت أقل للمشروع نفسو.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#accuracy",
   "label": "دقة التقديرات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يعود اسم مخطط غانت إلى المهندس الأمريكي Henry Gantt الذي وضعه في عشرينيات القرن الماضي.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt",
   "label": "مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يتكون مخطط غانت من:",
  "options": [
   "محور أفقي للزمن",
   "محور عمودي للأنشطة",
   "شريط أفقي لكل نشاط",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "التلاتة.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt",
   "label": "مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مخطط غانت، يُرمز لنقاط العلّام عادة بـ:",
  "options": [
   "معيّن أو مثلث",
   "دائرة",
   "مربع",
   "خط عمودي"
  ],
  "answerIndex": 0,
  "explanation": "معيّن أو مثلث (والاجتماعات دائرة، والمراجعات مربع).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt",
   "label": "مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مخطط غانت هو أقدم وأبسط شكل لشبكة أو خطة المشروع.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt",
   "label": "مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إعادة التخطيط أسهل باستخدام مخطط غانت الورقي منها باستخدام شبكة المشروع.",
  "answer": false,
  "explanation": "بالعكس: إعادة التخطيط <b>صعبة بغانت</b> وأسهل بالشبكة.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#gantt-limits",
   "label": "محدودية مخطط غانت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "بمجرد الموافقة على الجدول الزمني يصبح خط الأساس لبقية المشروع.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مجموع المدد الزمنية لأنشطة المسار الحرج يعطي أقل مدة ممكنة لإنهاء المشروع.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التأخير في نشاط غير حرج يؤدي دائماً إلى تأخير المشروع.",
  "answer": false,
  "explanation": "مو بالضرورة: بيقدر يتأخر لحد فترة عومو.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا احتجنا إلى تسريع المشروع، فإن إضافة الموارد تكون أكثر فاعلية في:",
  "options": [
   "أنشطة المسار الحرج",
   "الأنشطة غير الحرجة",
   "الأنشطة الأقصر",
   "الأنشطة الأولى فقط"
  ],
  "answerIndex": 0,
  "explanation": "الأنشطة الحرجة.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#critical-path",
   "label": "المسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "طوّرت طريقة المسار الحرج CPM عام 1960 من قبل شركة:",
  "options": [
   "DuPont",
   "Microsoft",
   "Ford",
   "IBM"
  ],
  "answerIndex": 0,
  "explanation": "<b>DuPont</b> لبرمجة صيانة المصانع الكيميائية.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#cpm",
   "label": "طريقة المسار الحرج CPM"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في طريقة PERT يتم التعبير عن مدة كل نشاط بـ:",
  "options": [
   "ثلاث مدد: القصوى والدنيا والمتوسطة",
   "مدة واحدة قطعية",
   "مدتين",
   "نسبة مئوية"
  ],
  "answerIndex": 0,
  "explanation": "تلات مدد.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#cpm",
   "label": "طريقة المسار الحرج CPM"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في طريق الذهاب نحو الأمام، البداية المبكرة ES للنشاط الأول تساوي:",
  "options": [
   "صفر",
   "مدته",
   "1",
   "مدة المشروع"
  ],
  "answerIndex": 0,
  "explanation": "صفر.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان هناك عدة أنشطة تسبق النشاط الحالي مباشرة، فإن ES لهذا النشاط تساوي:",
  "options": [
   "أعلى قيمة للنهايات المبكرة للأنشطة السابقة",
   "أصغر قيمة للنهايات المبكرة",
   "مجموع النهايات المبكرة",
   "متوسطها"
  ],
  "answerIndex": 0,
  "explanation": "<b>أكبر EF</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان هناك عدة أنشطة تلي النشاط الحالي مباشرة، فإن LF لهذا النشاط تساوي:",
  "options": [
   "أصغر قيمة للبدايات المتأخرة للأنشطة اللاحقة",
   "أكبر قيمة للبدايات المتأخرة",
   "مجموعها",
   "LS للنشاط نفسه"
  ],
  "answerIndex": 0,
  "explanation": "<b>أصغر LS</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط ES له 4 ومدته 6. ما EF؟",
  "options": [
   "10",
   "2",
   "6",
   "24"
  ],
  "answerIndex": 0,
  "explanation": "EF = 4 + 6 = <b>10</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط LF له 15 ومدته 5. ما LS؟",
  "options": [
   "10",
   "20",
   "15",
   "5"
  ],
  "answerIndex": 0,
  "explanation": "LS = 15 − 5 = <b>10</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النشاط X يسبقه A (EF = 7) وB (EF = 9). ما ES للنشاط X؟",
  "options": [
   "9",
   "7",
   "16",
   "8"
  ],
  "answerIndex": 0,
  "explanation": "أكبر EF = <b>9</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النشاط Y يليه C (LS = 12) وD (LS = 10). ما LF للنشاط Y؟",
  "options": [
   "10",
   "12",
   "22",
   "11"
  ],
  "answerIndex": 0,
  "explanation": "أصغر LS = <b>10</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#forward",
   "label": "الذهاب للأمام والعودة من الخلف"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط ES = 5 وLS = 9. ما فترة العوم؟",
  "options": [
   "4",
   "14",
   "5",
   "9"
  ],
  "answerIndex": 0,
  "explanation": "العوم = LS − ES = 9 − 5 = <b>4</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نشاط EF = 12 وLF = 12. هذا النشاط:",
  "options": [
   "حرج (عومه صفر)",
   "غير حرج بعوم 12",
   "عومه 24",
   "لا يمكن الحكم"
  ],
  "answerIndex": 0,
  "explanation": "العوم = LF − EF = 0 ← <b>حرج</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "النشاط الحرج هو النشاط الذي تكون فترة العوم الخاصة به تساوي صفراً.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المسار الحرج ثابت لا يتغير طوال حياة المشروع.",
  "answer": false,
  "explanation": "ممكن <b>يتغيّر</b> لما نستهلك عوم أنشطة غير حرجة.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في مثال الجسر بالكتاب، كانت مدة المشروع:",
  "options": [
   "38 يوماً",
   "25 يوماً",
   "43 يوماً",
   "20 يوماً"
  ],
  "answerIndex": 0,
  "explanation": "38 يوم، والمسار الحرج A–E–F–G–L–N.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#float",
   "label": "فترات العوم والمسار الحرج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تقصير مدة الأنشطة غير الحرجة سيؤدي بالضرورة إلى تقصير مدة المشروع.",
  "answer": false,
  "explanation": "<b>مو بالضرورة</b>؛ منركّز على المسار الحرج.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حسب الدراسات، 12 ساعة من العمل الإضافي للشخص تعادل من الإنتاج الفعلي:",
  "options": [
   "ساعتين من العمل العادي",
   "12 ساعة",
   "6 ساعات",
   "ساعة واحدة"
  ],
  "answerIndex": 0,
  "explanation": "ساعتين بس.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تنفيذ الأنشطة على التوازي بدلاً من التسلسل أو السماح لها بالتداخل لضغط الجدول:",
  "options": [
   "يزيد عادة من المخاطر",
   "يلغي المخاطر",
   "لا يؤثر",
   "يزيد الجودة دائماً"
  ],
  "answerIndex": 0,
  "explanation": "بيزيد المخاطر.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند إعادة النظر في تقديرات أنشطة المسار الحرج يمكن تخفيضها تعسفياً لتتناسب مع الوقت المتاح.",
  "answer": false,
  "explanation": "<b>لا</b>، ما لازم نخفّضها تعسفياً.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من خيارات تعديل أهداف المشروع لضغط الجدول:",
  "options": [
   "إعادة التفاوض لتقليص النطاق أو زيادة الموازنة أو الوقت",
   "إعادة التفكير في الاستراتيجية الأساسية",
   "التحقق من أن المشروع يستحق الجهد",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلهن.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#compression",
   "label": "ضغط الجدول الزمني"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في تحليل ضغط الجدول الزمني يُفترض أن الأداء أو الجودة معايير ثابتة.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#time-cost",
   "label": "منحني الزمن-التكلفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عند تحطيم الجدول الزمني، نختار أولاً تخفيض مدة النشاط:",
  "options": [
   "الذي تكون كلفة تخفيض وحدة الزمن منه الأقل",
   "الأطول مدة",
   "الأغلى",
   "غير الحرج"
  ],
  "answerIndex": 0,
  "explanation": "الأرخص بالوحدة (من الحرجة).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#time-cost",
   "label": "منحني الزمن-التكلفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في منحني الزمن-التكلفة بالكتاب، أقصر مدة ممكنة للمشروع كانت 10 أسابيع بكلفة:",
  "options": [
   "100,000",
   "50,000",
   "60,000",
   "2.6 مليون"
  ],
  "answerIndex": 0,
  "explanation": "النقطة C: 10 أسابيع بـ 100,000.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#time-cost",
   "label": "منحني الزمن-التكلفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "منحني الزمن-التكلفة له ميل سلبي متناقص.",
  "answer": true,
  "explanation": "صح.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#time-cost",
   "label": "منحني الزمن-التكلفة"
  }
 }
];
