/* بنك أسئلة الفصل 1 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH1_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتألف الحاسوب من عتاد صلب Hardware وبرمجيات Software.",
  "answer": true,
  "explanation": "صح ✔️ — الحاسوب = عتاد صلب (القطع الملموسة) + برمجيات (التعليمات اللي بتشغّلها).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعالج الحاسوب المعلومات ويحوّلها إلى بيانات.",
  "answer": false,
  "explanation": "خطأ — بالعكس: الحاسوب بيعالج <b>البيانات</b> (المدخلات الخام) وبيحوّلها إلى <b>معلومات</b> مفيدة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الحاسوب المخدّم يشبه الحاسوب المكتبي ولكنه يملك مواصفات عالية في مجالات تتطلب معالجة بيانات كبيرة.",
  "answer": false,
  "explanation": "خطأ — هاد وصف <b>حاسوب محطة العمل</b>. المخدّم ميزته إنو بيتحمّل ظروف التشغيل المستمر لمدة طويلة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حاسوب محطة العمل له القدرة على تحمّل ظروف التشغيل المستمرة لمدة طويلة.",
  "answer": false,
  "explanation": "خطأ — هاي ميزة <b>الحاسوب المخدّم</b>. محطة العمل بتشبه المكتبي بس بمواصفات عالية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الحواسيب المصغّرة هي التي توجد في الهواتف الذكية والسيارات وأجهزة الفيديو.",
  "answer": true,
  "explanation": "صح ✔️ — والحاسوب المصغّر بيشمل كمان الأجهزة القابلة للارتداء متل الساعة الذكية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "iOS و Android من أشهر أنظمة تشغيل الهواتف الذكية.",
  "answer": true,
  "explanation": "صح ✔️ — الهاتف الذكي جهاز محمول بيشتغل على نظام تشغيل، وأشهرها iOS و Android.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أنواع الحواسيب:",
  "options": [
   "الشاشة",
   "المودم",
   "المخدّمات",
   "وحدة المعالجة المركزية"
  ],
  "answerIndex": 2,
  "explanation": "المخدّمات (الحاسوب المخدّم) نوع من أنواع الحواسيب. الباقي قطع أو وحدات <b>داخل</b> الحاسوب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الحاسوب الذي يشبه المكتبي لكنه يملك مواصفات عالية لمعالجة بيانات كبيرة يسمى حاسوب ______.",
  "acceptable": [
   "محطة العمل",
   "محطة عمل"
  ],
  "explanation": "حاسوب محطة العمل = مكتبي بمواصفات عالية. لا تخلطو مع المخدّم (تشغيل مستمر لمدة طويلة).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الساعة الذكية مثال على الحاسوب ______ القابل للارتداء.",
  "acceptable": [
   "المصغر",
   "المصغّر",
   "مصغر"
  ],
  "explanation": "الحاسوب المصغّر بيشمل الهواتف والسيارات وأجهزة الفيديو والأجهزة القابلة للارتداء.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#types",
   "label": "تعريف الحاسوب وأنواعه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المودم والشاشات الحساسة للمس تعتبر من وحدات الإخراج فقط.",
  "answer": false,
  "explanation": "خطأ — المودم والشاشات اللمسية من وحدات <b>الإدخال والإخراج معاً</b>.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من أجهزة الإدخال لوحة المفاتيح والكاميرا الرقمية.",
  "answer": true,
  "explanation": "صح ✔️ — وحدات الإدخال: لوحة المفاتيح، الفأرة، الماسح الضوئي، الميكروفون، الكاميرا الرقمية، قارئ الباركود.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الطابعة الليزرية بطيئة وتعطي الصورة بجودة جيدة.",
  "answer": false,
  "explanation": "خطأ — الليزرية <b>سريعة</b> وبتعطي صورة بجودة جيدة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تعتبر الشاشة (العادية) وحدة إخراج.",
  "answer": true,
  "explanation": "صح ✔️ — الشاشة العادية إخراج. بس الشاشة <b>الحساسة للمس</b> إدخال وإخراج معاً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الطابعة التي تستخدم أسناناً صغيرة تقوم بالضغط على شريحة الحبر للطباعة هي:",
  "options": [
   "الليزرية",
   "النقطية",
   "النافثة للحبر"
  ],
  "answerIndex": 1,
  "explanation": "النقطية بتطبع بأسنان صغيرة بتضغط على شريط الحبر.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الطابعة التي تضم ماسحاً ضوئياً هي:",
  "options": [
   "الليزرية",
   "النقطية",
   "النافثة للحبر",
   "متعددة المهام"
  ],
  "answerIndex": 3,
  "explanation": "متعددة المهام = طابعة + ماسح ضوئي بجهاز واحد.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جهاز إدخال مسطّح حساس للضوء:",
  "options": [
   "الفأرة",
   "الماسح الضوئي",
   "كاميرا الويب"
  ],
  "answerIndex": 1,
  "explanation": "الماسح الضوئي سطح حساس للضوء بيحوّل الورق لصورة رقمية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جهاز وسيط بين الحاسوب وخط الهاتف يسمح بتبادل البيانات الرقمية للحاسوب عبر خطوط الهاتف:",
  "options": [
   "الطابعة",
   "المودم",
   "قارئ الباركود"
  ],
  "answerIndex": 1,
  "explanation": "المودم هو الوسيط بين الحاسوب وخط الهاتف.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعتبر المودم وحدة:",
  "options": [
   "الحساب والمنطق",
   "إدخال",
   "المعالجة المركزية",
   "إدخال وإخراج"
  ],
  "answerIndex": 3,
  "explanation": "المودم بيستقبل وبيرسل بيانات، فهو وحدة إدخال وإخراج معاً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أجهزة الإدخال:",
  "options": [
   "الميكروفون",
   "الشاشة",
   "المودم",
   "الميكروفون والمودم معاً"
  ],
  "answerIndex": 3,
  "explanation": "الميكروفون إدخال، والمودم إدخال وإخراج معاً، فالاثنين بيعتبروا أجهزة إدخال. الشاشة العادية إخراج.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عندما تكون الشاشة حساسة للمس تعتبر:",
  "options": [
   "وحدة إدخال",
   "وحدة إخراج",
   "وحدة إدخال وإخراج معاً"
  ],
  "answerIndex": 2,
  "explanation": "اللمس إدخال، والعرض إخراج، فهي الاثنين معاً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "جهاز المودم يقوم بتحويل البيانات إلى موجات (اهتزازات) تسمى إشارات أو بيانات تماثلية.",
  "answer": true,
  "explanation": "صح ✔️ — المودم بيحوّل البيانات الرقمية لإشارات تماثلية لتمشي على خط الهاتف وبالعكس.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الطابعة النافثة للحبر تطبع بالضغط على شريط الحبر وتُصدر ضجيجاً.",
  "answer": false,
  "explanation": "خطأ — النافثة <b>بتبخ</b> الحبر على الورق و<b>ما بتصدر ضجيج</b>. الضغط على الشريط هو للنقطية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تقاس دقة الطباعة بـ:",
  "options": [
   "عدد الأوراق المطبوعة في الدقيقة",
   "عدد النقاط الحبرية لكل بوصة مربعة",
   "عدد الألوان الظاهرة",
   "عدد طلبات الطباعة التي تستلمها الطابعة"
  ],
  "answerIndex": 1,
  "explanation": "الدقة = عدد النقاط بكل بوصة مربعة، وكل ما زادت النقاط زادت الدقة. السرعة بالأوراق بالدقيقة، والقدرة اللونية بعدد الألوان، والذاكرة بعدد طلبات الطباعة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "تقاس سرعة الطابعة بعدد ______ المطبوعة في الدقيقة.",
  "acceptable": [
   "الأوراق",
   "اوراق",
   "الاوراق",
   "الصفحات"
  ],
  "explanation": "السرعة = عدد الأوراق بالدقيقة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#io",
   "label": "وحدات الإدخال والإخراج والطابعات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتم ربط كافة مكونات الحاسوب باللوحة الأم.",
  "answer": true,
  "explanation": "صح ✔️ — اللوحة الأم لوحة إلكترونية بترتبط فيها كل المكوّنات متل المعالج والذواكر.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المعالج هو المسؤول عن تنفيذ جميع عمليات المعالجة الحسابية فقط.",
  "answer": false,
  "explanation": "خطأ — المعالج مسؤول عن العمليات <b>الحسابية والمنطقية</b> معاً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "وحدة التحكم تعمل على توجيه البيانات خارج وحدة المعالجة المركزية.",
  "answer": false,
  "explanation": "خطأ — وحدة التحكم بتوجّه البيانات <b>ضمن</b> وحدة المعالجة المركزية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "وحدة الحساب والمنطق هي المسؤولة عن العمليات الحسابية والمقارنة.",
  "answer": true,
  "explanation": "صح ✔️ — ALU = حساب + مقارنة (منطق).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تتحكم سرعة المعالج بتوقيت جميع عمليات الحوسبة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العقل المدبّر في الحاسوب:",
  "options": [
   "المعالج",
   "اللوحة الأم",
   "الذاكرة"
  ],
  "answerIndex": 0,
  "explanation": "المعالج (وحدة المعالجة المركزية) هو العقل المدبّر لأنه بينفّذ كل عمليات المعالجة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مكونات وحدة النظام:",
  "options": [
   "المعالج",
   "اللوحة الأم",
   "الذاكرة",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "وحدة النظام فيها اللوحة الأم والمعالج والذاكرة والمنافذ ووحدات التخزين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المسؤول عن توجيه البيانات ضمن المعالج:",
  "options": [
   "وحدة الحساب والمنطق",
   "المسجّلات",
   "وحدة التحكم"
  ],
  "answerIndex": 2,
  "explanation": "وحدة التحكم = توجيه البيانات ضمن المعالج.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أقسام المعالج:",
  "options": [
   "الذاكرة",
   "وحدة التخزين",
   "وحدة التحكم",
   "جميع ما سبق"
  ],
  "answerIndex": 2,
  "explanation": "أقسام المعالج: وحدة التحكم، وحدة الحساب والمنطق، والمسجّلات. الذاكرة والتخزين مو من أقسامه.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اللوحة الأم هي لوحة إلكترونية يتم ربط كافة مكونات الحاسوب بها مثل المعالج والذواكر.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المعالج ليس الوحيد الذي يقوم بالمعالجة، فبطاقة الشاشة مثلاً تحتوي على معالج لمعالجة الصور.",
  "answer": true,
  "explanation": "صح ✔️ — بطاقة الشاشة فيها معالج خاص بيخفّف العبء عن المعالج الرئيسي وبيحسّن الأداء.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#cpu",
   "label": "اللوحة الأم والمعالج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تؤثر سرعة الذاكرة بشكل غير مباشر على سرعة معالجة الحاسوب للبيانات.",
  "answer": false,
  "explanation": "خطأ — سرعة الذاكرة بتأثر <b>بشكل مباشر</b> على سرعة المعالجة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "سرعة الوصول إلى القرص الصلب أسرع بكثير من سرعة الوصول إلى الذاكرة.",
  "answer": false,
  "explanation": "خطأ — <b>العكس</b>: الوصول للذاكرة أسرع بكثير من القرص الصلب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تقاس سرعة الوصول في الذاكرة بالنانو ثانية.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يزول محتوى الذاكرة العشوائية RAM بانقطاع التيار الكهربائي.",
  "answer": true,
  "explanation": "صح ✔️ — لهيك اسمها كمان الذاكرة المؤقتة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تُخزَّن البيانات بذاكرة القراءة فقط ROM بشكل مؤقت.",
  "answer": false,
  "explanation": "خطأ — الـROM بتخزّن <b>بشكل دائم</b> وما بيضيع محتواها بانقطاع الكهرباء.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كلما زاد حجم الذاكرة العشوائية RAM تزداد سرعة وأداء الحاسوب.",
  "answer": true,
  "explanation": "صح ✔️ — وبيقدر المستخدم يشغّل برمجيات أكبر.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ذاكرة القراءة فقط تخزّن البيانات بشكل دائم ولا يضيع المحتوى بانقطاع التيار الكهربائي.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يقاس حجم الذاكرة بمضاعفات البايت Byte.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الذاكرة التي لا يمكن التعديل عليها من قبل المستخدم العادي:",
  "options": [
   "العشوائية RAM",
   "القراءة فقط ROM"
  ],
  "answerIndex": 1,
  "explanation": "الـROM ما بيقدر المستخدم العادي يعدّل عليها، وفيها النظام الأساسي اللازم لتشغيل الحاسوب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الشرائح الإلكترونية التي تتصل باللوحة الأم أو تكون جزءاً منها:",
  "options": [
   "المعالج",
   "منافذ الإدخال والإخراج",
   "الذاكرة"
  ],
  "answerIndex": 2,
  "explanation": "تعريف الذاكرة: شريحة إلكترونية بتتصل باللوحة الأم أو بتكون جزء منها.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أنواع الذواكر:",
  "options": [
   "القرص الصلب",
   "ذاكرة الوصول العشوائي",
   "ذاكرة القراءة فقط",
   "ذاكرة الوصول العشوائي وذاكرة القراءة فقط"
  ],
  "answerIndex": 3,
  "explanation": "نوعا الذاكرة: RAM و ROM. القرص الصلب وحدة تخزين مو ذاكرة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الذاكرة التي تحتوي على النظام الأساسي اللازم لتشغيل الحاسوب هي ذاكرة ______.",
  "acceptable": [
   "ROM",
   "القراءة فقط",
   "القراءه فقط",
   "rom"
  ],
  "explanation": "ROM = ذاكرة القراءة فقط، دائمة، وفيها النظام الأساسي للتشغيل.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الذاكرة العشوائية RAM ذاكرة قراءة وكتابة معاً وتستقبل البيانات من وحدات الإدخال.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#memory",
   "label": "الذاكرة RAM و ROM"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المنفذ التسلسلي الشامل USB وظيفته إيصال الصورة والصوت بسرعة ووضوح عاليين.",
  "answer": false,
  "explanation": "خطأ — هاد وصف <b>المنفذ متعدد الوسائط HDMI</b>. الـUSB هو الأسرع بإرسال البيانات واستقبالها وتخزينها.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الذاكرة الوميضية USB Flash Memory صغيرة الحجم وسهلة الحمل وسعتها التخزينية عالية.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حجم تخزين الأقراص الرقمية متعددة الاستخدامات DVD هو 128 غيغابايت.",
  "answer": false,
  "explanation": "خطأ — حسب المقرر الـDVD بتوصل لـ<b>8.17 غيغابايت</b>. الـ128 غيغابايت لأقراص الليزر الأزرق Blu-ray.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "بطاقة الذاكرة ذاكرة من نوع صلب تتميز أنها لا تحتوي على قطع متحركة كما في القرص الصلب.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "القرص المدمج CD سعة تخزينه 8.17 غيغابايت.",
  "answer": false,
  "explanation": "خطأ — الـCD بتوصل سعته لـ<b>650 ميغابايت</b>. الـ8.17 غيغابايت للـDVD.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعتبر الأسرع في إرسال البيانات واستقبالها وتخزينها:",
  "options": [
   "منافذ التسلسلي الشامل USB",
   "منافذ متعددة الوسائط HDMI"
  ],
  "answerIndex": 0,
  "explanation": "الـUSB هو الأسرع بالبيانات. الـHDMI للصورة والصوت.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مميزات بطاقة الذاكرة Memory Card:",
  "options": [
   "تصدر حرارة أقل",
   "تمنح سرعة وصول ونقل أعلى للبيانات",
   "توفّر استهلاك الطاقة",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "بطاقة الذاكرة: طاقة أقل، حرارة أقل، وسرعة وصول ونقل أعلى.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من الأقراص الضوئية وتبلغ سعته 128 غيغابايت:",
  "options": [
   "القرص المدمج CD",
   "القرص الرقمي DVD",
   "أقراص الليزر الأزرق Blu-ray"
  ],
  "answerIndex": 2,
  "explanation": "Blu-ray توصل لـ128 غيغابايت، والـDVD لـ8.17 غيغابايت، والـCD لـ650 ميغابايت.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "وحدة التخزين الرئيسية في الحاسوب وأكبرها حجماً:",
  "options": [
   "بطاقة الذاكرة",
   "الذاكرة الوميضية",
   "القرص الصلب",
   "القرص المدمج"
  ],
  "answerIndex": 2,
  "explanation": "القرص الصلب Hard Disk هو وحدة التخزين الرئيسية والأكبر.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تصنّف الأقراص الضوئية حسب إمكانية التخزين لأكثر من مرة إلى:",
  "options": [
   "قابلة للقراءة فقط",
   "قابلة للكتابة بدون حذف",
   "قابلة للحذف وإعادة الكتابة",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "التلات أنواع موجودين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في التخزين السحابي تمنح بعض الشركات مساحة صغيرة مجاناً وتقدّم اشتراكات بأجور حسب السعة التي يريدها المستخدم.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "المنفذ ______ عالي الوضوح وظيفته إيصال الصورة والصوت بسرعة ووضوح عاليين.",
  "acceptable": [
   "HDMI",
   "hdmi",
   "متعدد الوسائط",
   "المتعدد الوسائط"
  ],
  "explanation": "HDMI = المنفذ متعدد الوسائط.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "تصل سعة القرص المدمج CD إلى 650 ______.",
  "acceptable": [
   "ميغابايت",
   "ميغا بايت",
   "ميجابايت",
   "MB",
   "ميغا"
  ],
  "explanation": "الـCD = 650 ميغابايت.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#storage",
   "label": "المنافذ ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "العتاد الصلب يستطيع العمل بشكل منتظم متكامل دون البرامج.",
  "answer": false,
  "explanation": "خطأ — العتاد الصلب <b>ما بيقدر</b> يشتغل بشكل منتظم ومتكامل بدون البرامج.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "برمجيات أنظمة التشغيل هي مجموعة من البرامج والتعليمات التي تتحكم في العتاد الصلب للحاسوب.",
  "answer": true,
  "explanation": "صح ✔️ — وبتنظّم العلاقة بين المستخدم والحاسوب وبتجدول مهامه وبتدير التخزين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نظام DOS تطبيق برمجي.",
  "answer": false,
  "explanation": "خطأ — DOS <b>نظام تشغيل</b> (برمجيات أنظمة)، بيعتمد على كتابة الأوامر بلوحة المفاتيح.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تستخدم الجداول الإلكترونية لإيجاد حلول للمشاكل الإحصائية.",
  "answer": true,
  "explanation": "صح ✔️ — من البرامج التطبيقية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعتبر من البرامج التطبيقية:",
  "options": [
   "البريد الإلكتروني",
   "قواعد البيانات",
   "معالجة النصوص",
   "كل ما سبق صحيح"
  ],
  "answerIndex": 3,
  "explanation": "البرامج التطبيقية: معالجة النصوص، الجداول، قواعد البيانات، العروض، البريد، النشر، تصفح الويب، الترفيه، والتصميم بالحاسوب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "برمجيات تستخدم لتخزين البيانات على شكل جداول مترابطة:",
  "options": [
   "معالجة النصوص",
   "الجداول الإلكترونية",
   "قواعد البيانات"
  ],
  "answerIndex": 2,
  "explanation": "قواعد البيانات = جداول مترابطة بهدف سهولة العرض. الجداول الإلكترونية للحسابات والمشاكل الإحصائية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "بدأ نظام التشغيل ويندوز عام 1985.",
  "answer": true,
  "explanation": "صح ✔️ — حسب المقرر بدأ ويندوز عام 1985.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "أنظمة التشغيل iOS و MAC و LINUX لا تسمح بتعدد المستخدمين.",
  "answer": false,
  "explanation": "خطأ — هالأنظمة <b>بتسمح</b> بتعدد المستخدمين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مميزات نظام ويندوز:",
  "options": [
   "إمكانية استخدام لوحة المفاتيح فقط في التعامل مع النوافذ",
   "استخدام القوائم والأشرطة والنوافذ والرسومات",
   "إمكانية استخدام وتشغيل تطبيق واحد فقط"
  ],
  "answerIndex": 1,
  "explanation": "ميزات ويندوز: أكتر من تطبيق بنفس الوقت، القوائم والأشرطة والنوافذ والرسومات (واجهة المستخدم الرسومية)، واستخدام الفأرة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "استخدام القوائم والأشرطة والنوافذ والرسومات في ويندوز يطلق عليه واجهة المستخدم ______.",
  "acceptable": [
   "الرسومية",
   "الرسوميه"
  ],
  "explanation": "GUI = واجهة المستخدم الرسومية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "برامج التصميم المدعّم عبر الحاسوب تتيح للمستخدم:",
  "options": [
   "إرسال الرسائل",
   "الرسم والتصميم",
   "تنظيم الجداول المترابطة",
   "تصفّح الويب"
  ],
  "answerIndex": 1,
  "explanation": "التصميم المدعّم بالحاسوب (CAD) للرسم والتصميم.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#software",
   "label": "البرمجيات وأنواعها"
  }
 }
];
