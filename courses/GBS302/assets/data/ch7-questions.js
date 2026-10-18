/* بنك أسئلة الفصل 7 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH7_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن تضمين العروض التقديمية نصوصاً أو صوراً أو لقطات فيديو وغيرها من الوسائط المتعددة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#interface",
   "label": "واجهة PowerPoint والعناصر النائبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الجزء الذي يُظهر الشرائح مصغرة مع رقم كل منها، ويمكن من خلاله نقل الشرائح ونسخها وتغيير ترتيبها:",
  "options": [
   "جزء الشريحة Slide Pane",
   "المصغرات Thumbnails",
   "شريط الحالة",
   "العناصر النائبة"
  ],
  "answerIndex": 1,
  "explanation": "Thumbnails.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#interface",
   "label": "واجهة PowerPoint والعناصر النائبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مستطيلات أو مربعات بحدود منقطة في الشريحة تحوي مكاناً مقترحاً لكتابة العنوان أو النص أو إدراج كائنات:",
  "options": [
   "المصغرات",
   "العناصر النائبة Placeholder",
   "السمات",
   "الانتقالات"
  ],
  "answerIndex": 1,
  "explanation": "العناصر النائبة Placeholders.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#interface",
   "label": "واجهة PowerPoint والعناصر النائبة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "ملاحظات العارض لا تظهر أثناء عرض الشرائح.",
  "answer": true,
  "explanation": "صح ✔️ — جزء الملاحظات للعارض بس.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#interface",
   "label": "واجهة PowerPoint والعناصر النائبة"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "العرض التقديمي Presentation هو ملف يتضمن مجموعة من ______.",
  "acceptable": [
   "الشرائح",
   "شرائح",
   "Slides",
   "slides"
  ],
  "explanation": "Presentation = مجموعة شرائح Slides.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#interface",
   "label": "واجهة PowerPoint والعناصر النائبة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لفتح عرض تقديمي جديد فارغ نضغط على Ctrl + O.",
  "answer": false,
  "explanation": "خطأ — <b>Ctrl + N</b> لعرض جديد فارغ. Ctrl + O لفتح عرض موجود.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "فتح عرض تقديمي PowerPoint موجود باختصار Ctrl + O.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا ضغط زر التراجع Back بحال أردنا التراجع عن إنشاء عرض تقديمي جديد.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن حفظ عرض تقديمي جديد لأول مرة من خلال علامة التبويب HOME ثم الأمر Save.",
  "answer": false,
  "explanation": "خطأ — من علامة التبويب <b>File</b> ← Save.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحفظ التغييرات على ملف العروض التقديمية يمكننا دوماً النقر على زر Save في شريط الوصول السريع.",
  "answer": true,
  "explanation": "صح ✔️ — أو Ctrl + S.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لإغلاق ملف دون إغلاق البرنامج: علامة التبويب File ثم Close أو الاختصار Ctrl + W.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "القالب في PowerPoint هو:",
  "options": [
   "شريحة فارغة",
   "نوع من العروض التقديمية الجاهزة لغرض معين بتنسيقات معرّفة مسبقاً",
   "طريقة عرض",
   "تأثير حركة"
  ],
  "answerIndex": 1,
  "explanation": "Template.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#files",
   "label": "إنشاء العروض وحفظها وإغلاقها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار إدراج شريحة جديدة للعروض التقديمية هو Ctrl + N.",
  "answer": false,
  "explanation": "خطأ — <b>Ctrl + M</b>. (Ctrl + N لعرض تقديمي جديد.)",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "اختصار إدراج شريحة جديدة:",
  "options": [
   "Ctrl + N",
   "Ctrl + M",
   "Ctrl + S",
   "Ctrl + D"
  ],
  "answerIndex": 1,
  "explanation": "Ctrl + M.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكنك معرفة أنواع العناصر النائبة ضمن تخطيط الشريحة من خلال اسم التخطيط.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "أمر التخطيط Layout لا يسمح بتغيير تخطيط الشريحة.",
  "answer": false,
  "explanation": "خطأ — <b>بيسمح</b>: Home ← Slides ← Layout.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا حذف الشرائح بالضغط على مفتاح Delete بعد تحديدها.",
  "answer": true,
  "explanation": "صح ✔️ — أو زر يمين ← Delete Slide.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتحديد عدة شرائح غير متجاورة في جزء المصغرات نضغط باستمرار على:",
  "options": [
   "Shift",
   "Ctrl",
   "Alt",
   "Tab"
  ],
  "answerIndex": 1,
  "explanation": "Ctrl للمتباعدة، Shift للمتجاورة.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#slides",
   "label": "إدراج الشرائح وتخطيطها وتحديدها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "العرض التفصيلي هو الطريقة الافتراضية للعرض التي تتضمن جزء المصغرات وجزء الشرائح وجزء الملاحظات.",
  "answer": false,
  "explanation": "خطأ — هاد <b>العرض العادي Normal</b>.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في المخطط التفصيلي يتم عرض العناوين والنص الرئيسي من كل شريحة في جزء المصغرات.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "فارز الشرائح يتم فيه استعراض كل الشرائح ضمن العرض كصور مصغرة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عرض القراءة يعرض نسخة مصغرة من الشريحة مع القسم الخاص بالملاحظات.",
  "answer": false,
  "explanation": "خطأ — هاد <b>صفحة الملاحظات Notes Page</b>.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عرض القراءة يقدّم العرض بطريقة عرض الشرائح بدون الأشرطة والأوامر.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكننا تغيير طريقة العرض من شريط الحالة.",
  "answer": false,
  "explanation": "خطأ — <b>يمكننا</b>، أو من View ← Views.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتم فيه استعراض جميع الشرائح ضمن العرض كصور مصغرة:",
  "options": [
   "فارز الشرائح",
   "صفحة الملاحظات",
   "عرض القراءة",
   "العرض العادي",
   "المخطط التفصيلي"
  ],
  "answerIndex": 0,
  "explanation": "Slide Sorter.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الطريقة الافتراضية للعرض التي تتضمن (جزء المصغرات وجزء الشرائح وجزء الملاحظات):",
  "options": [
   "فارز الشرائح",
   "صفحة الملاحظات",
   "عرض القراءة",
   "العرض العادي",
   "المخطط التفصيلي"
  ],
  "answerIndex": 3,
  "explanation": "Normal.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يقوم بعرض العناوين والنص الرئيسي من كل شريحة في جزء المصغرات:",
  "options": [
   "فارز الشرائح",
   "صفحة الملاحظات",
   "عرض القراءة",
   "العرض العادي",
   "المخطط التفصيلي"
  ],
  "answerIndex": 4,
  "explanation": "Outline View.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تقدّم العرض بطريقة عرض الشرائح بدون الأشرطة والأوامر:",
  "options": [
   "فارز الشرائح",
   "صفحة الملاحظات",
   "عرض القراءة",
   "العرض العادي",
   "المخطط التفصيلي"
  ],
  "answerIndex": 2,
  "explanation": "Reading View.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يقوم بعرض نسخة مصغرة من الشريحة مع عرض القسم الخاص بالملاحظات:",
  "options": [
   "فارز الشرائح",
   "صفحة الملاحظات",
   "عرض القراءة"
  ],
  "answerIndex": 1,
  "explanation": "Notes Page.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#views",
   "label": "طرق استعراض العرض التقديمي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "السمة هي مجموعة موحدة من خيارات التصميم والتنسيق تُطبق على العرض لإعطائه مظهراً متناسقاً وجميلاً.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن تطبيق السمة على شرائح العرض من علامة التبويب Insert.",
  "answer": false,
  "explanation": "خطأ — من <b>Design</b> ← Themes.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن تطبيق السمة من علامة التبويب:",
  "options": [
   "Insert",
   "Design",
   "View",
   "Home"
  ],
  "answerIndex": 1,
  "explanation": "Design ← Themes.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تُطبَّق السمة المختارة على جميع الشرائح بشكل افتراضي.",
  "answer": true,
  "explanation": "صح ✔️ — ولشريحة معينة: زر يمين عالسمة ← Apply to Selected Slides.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا تكبير وتصغير النسبة المئوية للعرض وإضافة ملاحظات للعارض من علامة التبويب Home.",
  "answer": false,
  "explanation": "خطأ — من علامة التبويب <b>View</b>.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكننا إضافة الملاحظات والتوضيحات للعرض من علامة التبويب:",
  "options": [
   "Insert",
   "Design",
   "View",
   "Home"
  ],
  "answerIndex": 2,
  "explanation": "View (أو سهم Notes بشريط الحالة).",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن إضافة الرأس والتذييل في PowerPoint من علامة التبويب:",
  "options": [
   "Insert",
   "Design",
   "View",
   "Home"
  ],
  "answerIndex": 0,
  "explanation": "Insert ← Text ← Header and Footer.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير لون خلفية الشرائح نستخدم:",
  "options": [
   "Insert ← Text",
   "Design ← Customize ← Format Background",
   "Home ← Slides",
   "View ← Zoom"
  ],
  "answerIndex": 1,
  "explanation": "Format Background ← Fill ← Apply to All.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لتطبيق إعدادات الرأس والتذييل على جميع الشرائح ننقر على زر Apply to ______.",
  "acceptable": [
   "All",
   "all"
  ],
  "explanation": "Apply to All، و Apply للشريحة الحالية بس.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#format",
   "label": "السمات والخلفية والملاحظات والرأس والتذييل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار بدء عرض تقديمي من الشريحة الأولى هو F5.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "اختصار بدء العرض التقديمي من الشريحة الحالية هو:",
  "options": [
   "F5",
   "Shift + F5"
  ],
  "answerIndex": 1,
  "explanation": "Shift + F5 من الحالية، و F5 من البداية.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "بدء العرض من الشريحة الحالية Shift + F5.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من أجل إنهاء العرض التقديمي نضغط على زر Backspace.",
  "answer": false,
  "explanation": "خطأ — <b>Esc</b>، أو زر يمين ← End Show.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "للانتقال إلى الشرائح السابقة أثناء العرض:",
  "options": [
   "الحرف P",
   "Page Up",
   "سهم لليسار",
   "سهم للأعلى",
   "جميع ما سبق"
  ],
  "answerIndex": 4,
  "explanation": "كلها بترجعك للسابقة.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "للانتقال إلى الشريحة التالية أثناء العرض نضغط:",
  "options": [
   "Space",
   "Enter",
   "الحرف N",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "Space · Page Down · سهم يمين · سهم تحت · Enter · N.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "للانتقال إلى شريحة محددة أثناء العرض ننقر بالزر الأيمن ونختار:",
  "options": [
   "Next",
   "Previous",
   "Go to Slide",
   "End Show"
  ],
  "answerIndex": 2,
  "explanation": "Go to Slide.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#show",
   "label": "تقديم العرض والتنقل وإنهاؤه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الانتقالات هي الحركة التي تحدث عند الانتقال من شريحة إلى شريحة لاحقة أثناء العرض.",
  "answer": true,
  "explanation": "صح ✔️ — Transitions.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الحركات التي تظهر عند الانتقال من شريحة إلى شريحة تسمى تأثيرات الانتقالات.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا اختيار تأثير الحركة وتطبيقه على كائن محدد أو مجموعة كائنات من علامة التبويب Animations.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تحتوي علامة التبويب الحركات Animations على مجموعة أوامر منها:",
  "options": [
   "اختيار الحركة المعينة",
   "اختيار مدة تأثير الحركة",
   "طريقة ظهور الحركة",
   "تأخير ظهور الحركة",
   "تغيير ترتيب ظهور الحركة",
   "إزالة الحركة",
   "جميع ما سبق"
  ],
  "answerIndex": 6,
  "explanation": "كلها موجودة: Animation · Duration · Start · Delay · Move Earlier/Later · None.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتطبيق تأثير الانتقال على جميع الشرائح ننقر:",
  "options": [
   "Preview",
   "Apply to All",
   "None",
   "Sound"
  ],
  "answerIndex": 1,
  "explanation": "Apply to All من مجموعة Timing.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإزالة تأثير الانتقال أو الحركة نختار:",
  "options": [
   "None",
   "Delay",
   "Duration",
   "Preview"
  ],
  "answerIndex": 0,
  "explanation": "None.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من تخطيطات طباعة العرض التقديمي:",
  "options": [
   "Slides",
   "Notes Pages",
   "Handouts",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "الشرائح، صفحات الملاحظات، النشرات.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الانتقال Transition هو الحركة التي تُطبق على كائن داخل الشريحة.",
  "answer": false,
  "explanation": "خطأ — الحركة على الكائن هي <b>Animation</b>. الانتقال Transition بين الشرائح.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#effects",
   "label": "تأثيرات الانتقال والحركة والطباعة"
  }
 }
];
