/* بنك أسئلة الفصل 4 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH4_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "من أجل تسهيل تنظيم المجلدات يتم حفظها داخل ملفات.",
  "answer": false,
  "explanation": "خطأ — <b>العكس</b>: الملفات بتنحفظ داخل المجلدات، والمجلد ممكن يحتوي مجلدات فرعية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#intro",
   "label": "الملفات والمجلدات ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "وحدة التخزين الأهم التي تحتوي على نظام التشغيل والبرامج التطبيقية:",
  "options": [
   "الأقراص المدمجة CD",
   "القرص الصلب",
   "الذواكر الومضية",
   "أقراص الشبكة"
  ],
  "answerIndex": 1,
  "explanation": "القرص الصلب أهم وحدات التخزين.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#intro",
   "label": "الملفات والمجلدات ووحدات التخزين"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تستخدم أقراص الشبكة Network Drives لتخزين الملفات ومشاركتها إذا كان الحاسوب متصلاً بالشبكة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#intro",
   "label": "الملفات والمجلدات ووحدات التخزين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا إنشاء مجلد جديد عن طريق الاختصار Ctrl + Shift + N.",
  "answer": true,
  "explanation": "صح ✔️ — وكمان بزر يمين ← New ← Folder، أو من Home ← New folder.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الاسم الافتراضي للمجلد الجديد هو Document.",
  "answer": false,
  "explanation": "خطأ — الاسم الافتراضي للمجلد <b>New folder</b>. (Document هو الاسم الافتراضي لملف برنامج الدفتر.)",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لاحقة ملف برنامج Excel 2016:",
  "options": [
   "docx",
   "xlsx",
   "pptx",
   "accdb"
  ],
  "answerIndex": 1,
  "explanation": "docx للـWord، xlsx للـExcel، pptx للـPowerPoint، accdb للـAccess.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الملف ذو اللاحقة exe هو:",
  "options": [
   "ملف مضغوط",
   "ملف مؤقت",
   "ملف تنفيذي (تطبيق)",
   "ملف صوتي"
  ],
  "answerIndex": 2,
  "explanation": "exe = ملف تنفيذي. zip مضغوط، tmp مؤقت، wma صوتي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من لواحق ملفات الصور:",
  "options": [
   "wma و wmv",
   "gif و bmp و jpg",
   "txt و pdf",
   "zip و tmp"
  ],
  "answerIndex": 1,
  "explanation": "gif, bmp, jpeg, jpg صور.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الملف ذو اللاحقة tmp ملف مؤقت يُنشئه ويندوز أو البرامج التطبيقية ويتم حذفه فيما بعد.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "الملف ذو اللاحقة txt مستند ______ يحتوي نصوصاً بسيطة فقط.",
  "acceptable": [
   "نصي",
   "نصى"
  ],
  "explanation": "txt = مستند نصي بسيط.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#create",
   "label": "إنشاء المجلدات والملفات واللواحق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند حفظ الملفات بحالة Read Only يمكن للمستخدم الاطلاع عليها وتعديل محتواها.",
  "answer": false,
  "explanation": "خطأ — Read Only يعني <b>الاطلاع عليها فقط</b>. الحالة الافتراضية هي Read-Write.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الضغط على مفتاح F6 يسمح بإعادة تسمية الملف.",
  "answer": false,
  "explanation": "خطأ — <b>F2</b>.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من طرق إعادة تسمية الملف بعد تحديده الضغط على مفتاح:",
  "options": [
   "F2",
   "F7",
   "F5"
  ],
  "answerIndex": 0,
  "explanation": "F2 = Rename.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يؤدي تعيين مجلد للقراءة فقط Read-only إلى أن تصبح كافة الملفات ضمنه للقراءة فقط.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لجعل الملف للقراءة فقط ننقر عليه بالزر الأيمن ونختار:",
  "options": [
   "Rename",
   "Properties ثم Read-only",
   "Send to",
   "Delete"
  ],
  "answerIndex": 1,
  "explanation": "Properties ← تفعيل Read-only ← OK.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الحالة الافتراضية للملف عند حفظه هي للقراءة فقط Read-only.",
  "answer": false,
  "explanation": "خطأ — الافتراضية <b>Read-Write</b> (قراءة وكتابة).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#readonly",
   "label": "الحفظ وحالة القراءة فقط وإعادة التسمية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكننا نسخ ملف عن طريق السحب والإفلات مع الإبقاء على ضغط مفتاح Ctrl.",
  "answer": true,
  "explanation": "صح ✔️ — السحب بلا Ctrl بينقل، ومع Ctrl بينسخ.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#copymove",
   "label": "نسخ ونقل العناصر"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند نقل الملف نحصل على نسخة مطابقة للعنصر الأصلي في المكان الجديد.",
  "answer": false,
  "explanation": "خطأ — النقل بيغيّر <b>مكان العنصر نفسه</b> بلا ما يعمل نسخة. النسخ هو اللي بيعمل نسخة مكررة.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#copymove",
   "label": "نسخ ونقل العناصر"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "اختصار النقل (القص) ثم اللصق:",
  "options": [
   "Ctrl + C ثم Ctrl + V",
   "Ctrl + X ثم Ctrl + V",
   "Ctrl + Z ثم Ctrl + V",
   "Ctrl + A ثم Ctrl + V"
  ],
  "answerIndex": 1,
  "explanation": "X للقص/النقل، C للنسخ، V للصق.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#copymove",
   "label": "نسخ ونقل العناصر"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لنقل عنصر باستخدام شريط القوائم نختار من Home ← Clipboard الأمر:",
  "options": [
   "Copy",
   "Move",
   "Paste",
   "Delete"
  ],
  "answerIndex": 1,
  "explanation": "Move للنقل ثم Paste.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#copymove",
   "label": "نسخ ونقل العناصر"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "Shift + Delete هو اختصار:",
  "options": [
   "الحذف وإرسال الملف لسلة المحذوفات",
   "الحذف النهائي دون تخزين الملف بسلة المحذوفات"
  ],
  "answerIndex": 1,
  "explanation": "Shift + Delete = حذف نهائي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اختصار الحذف نهائياً Shift + Delete.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند حذف ملف بالطريقة العادية ينتقل إلى سلة المحذوفات ويمكن استعادته.",
  "answer": true,
  "explanation": "صح ✔️ — بالأمر Restore.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لاستعادة عنصر من سلة المحذوفات ننقر عليه بالزر الأيمن ونختار:",
  "options": [
   "Delete",
   "Restore",
   "Empty Recycle Bin",
   "Cut"
  ],
  "answerIndex": 1,
  "explanation": "Restore بيرجّعه لمكانه الأصلي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا تعذّر حذف ملف فمن المحتمل أن يكون قيد الاستخدام من برنامج يعمل حالياً.",
  "answer": true,
  "explanation": "صح ✔️ — سكّر البرنامج أو أعد التشغيل.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لإزالة الملفات نهائياً والاستفادة من مساحتها نختار الأمر ______ Recycle Bin.",
  "acceptable": [
   "Empty",
   "empty",
   "إفراغ",
   "افراغ"
  ],
  "explanation": "Empty Recycle Bin = إفراغ سلة المحذوفات.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#delete",
   "label": "الحذف والاستعادة وسلة المحذوفات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن تغيير طريقة عرض الملفات في المجلد عن طريق قائمة Home.",
  "answer": false,
  "explanation": "خطأ — من <b>View</b> (زر يمين على مكان فارغ ← View).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند ترتيب الملفات ترتيباً تصاعدياً يتم ترتيب الملفات أولاً ثم المجلدات.",
  "answer": false,
  "explanation": "خطأ — <b>المجلدات أولاً</b> ثم الملفات، والعكس بالتنازلي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الترتيب التصاعدي بشكل عام: المجلدات ثم الملفات.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الترتيب التصاعدي للملفات حسب الاسم سيعطي النتيجة:",
  "options": [
   "العناصر المسماة بالعربية ثم الإنكليزية ثم المرقمة",
   "العناصر المرقمة ثم الإنكليزية ثم العربية"
  ],
  "answerIndex": 1,
  "explanation": "تصاعدي: أرقام ← إنكليزي ← عربي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الترتيب التنازلي حسب الاسم:",
  "options": [
   "المسماة بالعربي ثم بالإنكليزية ثم بالأرقام",
   "المسماة بالأرقام ثم بالإنكليزية ثم بالعربي",
   "المسماة بالإنكليزية ثم بالعربي ثم بالأرقام"
  ],
  "answerIndex": 0,
  "explanation": "تنازلي: عربي ← إنكليزي ← أرقام (عكس التصاعدي).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند ترتيب العناصر بشكل تصاعدي حسب الاسم تأتي العناصر المسماة بالعربية أولاً.",
  "answer": false,
  "explanation": "خطأ — بالتصاعدي بتجي <b>المرقّمة أولاً</b> ثم الإنكليزية ثم العربية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من طرق عرض العناصر في ويندوز 10:",
  "options": [
   "الأيقونات (كبيرة جداً، كبيرة، متوسطة، صغيرة)",
   "List و Details",
   "Tiles و Content",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كلها طرق عرض.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يمكن ترتيب العناصر حسب:",
  "options": [
   "الاسم Name",
   "تاريخ التعديل Date Modified",
   "النوع Type والحجم Size",
   "جميع ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "زر يمين ← Sort by.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#sort",
   "label": "طرق العرض والترتيب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضغط الملفات أمر يساعد في توفير مساحة التخزين.",
  "answer": true,
  "explanation": "صح ✔️ — وبيقلل وقت إرسال الملفات كمرفقات بالبريد.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#search",
   "label": "البحث وضغط الملفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في قائمة Search، الأمر الذي يبحث ضمن المجلد الحالي والمجلدات الفرعية الموجودة ضمنه:",
  "options": [
   "This PC",
   "Current Folder",
   "All subfolders",
   "Kind"
  ],
  "answerIndex": 2,
  "explanation": "This PC كامل الحاسوب، Current Folder الحالي بس، All subfolders الحالي + الفرعية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#search",
   "label": "البحث وضغط الملفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لضغط ملفات نحددها وننقر بالزر الأيمن ونختار Send to ثم:",
  "options": [
   "Desktop (create shortcut)",
   "Compressed (zipped) folder",
   "Documents",
   "Mail recipient"
  ],
  "answerIndex": 1,
  "explanation": "Compressed (zipped) folder.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#search",
   "label": "البحث وضغط الملفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لاستخراج الملفات من مجلد مضغوط نختار الأمر:",
  "options": [
   "Extract files",
   "Restore",
   "Compress",
   "Open file location"
  ],
  "answerIndex": 0,
  "explanation": "Extract files ثم نحدد المسار ← OK.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#search",
   "label": "البحث وضغط الملفات"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "من البرامج الخاصة بضغط الملفات وفك ضغطها برنامج ______.",
  "acceptable": [
   "WinRAR",
   "winrar",
   "Winrar"
  ],
  "explanation": "WinRAR مثال بالمقرر.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#search",
   "label": "البحث وضغط الملفات"
  }
 }
];
