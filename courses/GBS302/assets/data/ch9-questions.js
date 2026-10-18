/* بنك أسئلة الفصل 9 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH9_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "الصيغ هي عبارة عن معادلات رياضية.",
  "answer": true,
  "explanation": "صح ✔️ — بتتكون من معاملات وعلامات عمليات حسابية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للسماح لبرنامج Excel بالتفريق بين الصيغ والبيانات تبدأ جميع الصيغ بعلامة =.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "بحال احتواء الصيغة على أكثر من عملية حسابية فإن Excel ينفذها بالترتيب من اليسار لليمين.",
  "answer": false,
  "explanation": "خطأ — بينفذها <b>حسب أولوية العمليات</b> بقواعد الرياضيات: الأس، ثم الضرب والقسمة، ثم الجمع والطرح.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتم تنفيذ العمليات الحسابية الموجودة داخل الأقواس قبل تلك الموجودة خارجها.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ناتج الصيغة ‎=2+4*6/3-1‎ هو:",
  "options": [
   "9",
   "17",
   "5",
   "18"
  ],
  "answerIndex": 0,
  "explanation": "4×6=24 ← ÷3=8 ← 2+8=10 ← 10−1=9.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ناتج الصيغة ‎=(2+4)*6/(3-1)‎ هو:",
  "options": [
   "9",
   "18",
   "36",
   "12"
  ],
  "answerIndex": 1,
  "explanation": "(6)×6=36 ← ÷(2)=18.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العملية الحسابية التي تُنفذ أولاً في Excel (خارج الأقواس):",
  "options": [
   "الجمع",
   "الضرب",
   "الأس ^",
   "الطرح"
  ],
  "answerIndex": 2,
  "explanation": "الأس أولاً، ثم الضرب والقسمة، ثم الجمع والطرح.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "بعد الانتهاء من إنشاء الصيغة تعرض الخلية النتيجة بينما يعرض شريط الصيغة الصيغة نفسها.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#formulas",
   "label": "الصيغ وأولويات العمليات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "#DIV/0! هو خطأ الكتابة في الصيغة.",
  "answer": false,
  "explanation": "خطأ — #DIV/0! خطأ <b>القسمة على صفر</b>.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "#NAME? هو خطأ مرجع الخلايا.",
  "answer": false,
  "explanation": "خطأ — #NAME? خطأ <b>الكتابة في الصيغة</b> (أسماء خلايا خاطئة).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "#NULL! هو خطأ مرجع الخلايا.",
  "answer": true,
  "explanation": "صح ✔️ — حسب المقرر: بيحدث عند كتابة تعبير ما بينحسب.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "#REF! يحدث عندما تحتوي الصيغة على خلايا تم حذفها أو نقلها.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "خطأ تمرير القيمة غير المناسبة:",
  "options": [
   "#DIV/0!",
   "#NAME?",
   "#NULL!",
   "#VALUE!"
  ],
  "answerIndex": 3,
  "explanation": "#VALUE! — متل تمرير أحرف بدل أرقام لعملية جمع.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "خطأ مرجع الخلية حسب المقرر:",
  "options": [
   "#DIV/0!",
   "#NAME?",
   "#NULL!",
   "#REF!"
  ],
  "answerIndex": 2,
  "explanation": "بالمقرر: #NULL! «خطأ مرجع الخلايا»، و #REF! «خطأ مرجع على خلايا محذوفة».",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "خطأ القسمة على صفر:",
  "options": [
   "#DIV/0!",
   "#NAME?",
   "#NULL!"
  ],
  "answerIndex": 0,
  "explanation": "#DIV/0!.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "خطأ الكتابة في الصيغة:",
  "options": [
   "#DIV/0!",
   "#NAME?",
   "#NULL!"
  ],
  "answerIndex": 1,
  "explanation": "#NAME?.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "خطأ الحذف أو النقل:",
  "options": [
   "#DIV/0!",
   "#NAME?",
   "#NULL!",
   "#REF!"
  ],
  "answerIndex": 3,
  "explanation": "#REF!.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#errors",
   "label": "رسائل الخطأ في الصيغ"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يستخدم Excel المرجع المطلق بشكل افتراضي.",
  "answer": false,
  "explanation": "خطأ — الافتراضي <b>المرجع النسبي</b>.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#refs",
   "label": "المرجع النسبي والمطلق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المرجع المطلق هو استخدام عنوان خلية بشكل يتغير فيه عند السحب للتعبئة.",
  "answer": false,
  "explanation": "خطأ — المطلق <b>ما بيتغيّر</b> عند السحب (منحط $).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#refs",
   "label": "المرجع النسبي والمطلق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المرجع النسبي يتغير اسم العمود أو رقم الصف عند سحب الصيغة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#refs",
   "label": "المرجع النسبي والمطلق"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الشكل الصحيح للمرجع المطلق:",
  "options": [
   "H2",
   "$H2",
   "H$2",
   "$H$2"
  ],
  "answerIndex": 3,
  "explanation": "$ قبل حرف العمود وقبل رقم الصف.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#refs",
   "label": "المرجع النسبي والمطلق"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "يلزم المرجع المطلق إشارة ______ قبل حرف العمود ورقم الصف.",
  "acceptable": [
   "$",
   "الدولار",
   "دولار"
  ],
  "explanation": "$H$2.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#refs",
   "label": "المرجع النسبي والمطلق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الدوال الرياضية واحدة من أكبر مجموعات الدوال وأكثرها تنوعاً.",
  "answer": true,
  "explanation": "صح ✔️ — من SUM البسيطة للوغاريتمية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من الدوال الرياضية:",
  "options": [
   "EVEN",
   "PMT",
   "RANGE_LOOKUP"
  ],
  "answerIndex": 0,
  "explanation": "EVEN رياضية (تقريب)، PMT مالية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة التقريب لأعلى:",
  "options": [
   "ROUND",
   "ROUNDUP",
   "ROUNDDOWN"
  ],
  "answerIndex": 1,
  "explanation": "ROUNDUP.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "دالة التقريب الأدنى ROUNDDOWN تستخدم لتقريب رقم معين بعدد من الخانات العشرية.",
  "answer": true,
  "explanation": "صح ✔️ — وبتدوّر آخر خانة لأقرب رقم للأدنى.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة التقريب لأقرب عدد زوجي (أعلى):",
  "options": [
   "ODD",
   "EVEN",
   "ROUND",
   "ISEVEN"
  ],
  "answerIndex": 1,
  "explanation": "EVEN.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة التقريب لأقرب عدد فردي (أعلى):",
  "options": [
   "ODD",
   "EVEN",
   "ROUNDUP",
   "ISODD"
  ],
  "answerIndex": 0,
  "explanation": "ODD.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في دالة ROUND إذا كانت آخر خانة أكبر أو تساوي 5:",
  "options": [
   "تُدوّر للأدنى",
   "تُدوّر للأعلى",
   "تُحذف",
   "لا تتغير"
  ],
  "answerIndex": 1,
  "explanation": "≥5 للأعلى، و <5 للأدنى.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي لا تقوم بعملية الجمع إلا في حال تحقق شرط معين:",
  "options": [
   "SUM",
   "SUMIF",
   "PRODUCT",
   "COUNTIF"
  ],
  "answerIndex": 1,
  "explanation": "SUMIF(range, criteria, [sum_range]).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "دالة عملية الضرب:",
  "options": [
   "SUM",
   "PRODUCT",
   "MULTIPLY",
   "POWER"
  ],
  "answerIndex": 1,
  "explanation": "PRODUCT.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "ناتج ‎=ROUND(3.47,1)‎ هو ______.",
  "acceptable": [
   "3.5",
   "3,5"
  ],
  "explanation": "آخر خانة 7 ≥ 5 فبتدوّر للأعلى: 3.5.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#math",
   "label": "الدوال الرياضية والتقريب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من الدوال الإحصائية:",
  "options": [
   "SUM",
   "AVERAGE",
   "ODD"
  ],
  "answerIndex": 1,
  "explanation": "AVERAGE إحصائية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من دوال العد:",
  "options": [
   "COUNT",
   "COUNTIF",
   "COUNTA",
   "COUNTBLANK",
   "جميع ما سبق"
  ],
  "answerIndex": 4,
  "explanation": "الأربعة دوال عد.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة عد الخلايا غير الفارغة:",
  "options": [
   "COUNT",
   "COUNTIF",
   "COUNTA",
   "COUNTBLANK"
  ],
  "answerIndex": 2,
  "explanation": "COUNTA (نصوص وأرقام وتواريخ وصيغ وأخطاء).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تعد الخلايا التي تحتوي على أرقام فقط (ومنها التواريخ والأوقات):",
  "options": [
   "COUNT",
   "COUNTA",
   "COUNTBLANK",
   "COUNTIF"
  ],
  "answerIndex": 0,
  "explanation": "COUNT.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة القيمة الكبرى (أكبر قيمة وفق ترتيب معين مثل ثاني أكبر قيمة):",
  "options": [
   "MAX",
   "LARGE"
  ],
  "answerIndex": 1,
  "explanation": "LARGE(array, k).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة القيمة الأعلى:",
  "options": [
   "MAX",
   "LARGE"
  ],
  "answerIndex": 0,
  "explanation": "MAX أعلى قيمة.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة القيمة الوسيطة:",
  "options": [
   "MEDIAN",
   "MID"
  ],
  "answerIndex": 0,
  "explanation": "MEDIAN إحصائية، MID نصية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لمعرفة ثالث أصغر قيمة نستخدم:",
  "options": [
   "MIN",
   "SMALL",
   "LARGE",
   "MEDIAN"
  ],
  "answerIndex": 1,
  "explanation": "SMALL(array, 3).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "دالة المتوسط الحسابي الشرطي هي ______.",
  "acceptable": [
   "AVERAGEIF",
   "averageif"
  ],
  "explanation": "AVERAGEIF(range, criteria, [average_range]).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#stats",
   "label": "الدوال الإحصائية ودوال العد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "PV هو اختصار للقيمة الحالية.",
  "answer": true,
  "explanation": "صح ✔️ — Present Value.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#finance",
   "label": "الدوال المالية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة حساب الأقساط المالية:",
  "options": [
   "PMT",
   "PV",
   "FV"
  ],
  "answerIndex": 0,
  "explanation": "PMT = Payment.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#finance",
   "label": "الدوال المالية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "رمز دالة القيمة المستقبلية:",
  "options": [
   "PV",
   "FV",
   "PMT",
   "NPER"
  ],
  "answerIndex": 1,
  "explanation": "FV = Future Value.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#finance",
   "label": "الدوال المالية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في دالة PMT، الوسيط rate يمثل:",
  "options": [
   "عدد الدفعات",
   "معدل الفائدة",
   "المبلغ الإجمالي",
   "طريقة السداد"
  ],
  "answerIndex": 1,
  "explanation": "rate الفائدة، nper عدد الدفعات، pv المبلغ.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#finance",
   "label": "الدوال المالية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند حساب قسط شهري بدالة PMT من معدل فائدة سنوي نقسم معدل الفائدة على 12 ونضرب مدة التسديد بـ12.",
  "answer": true,
  "explanation": "صح ✔️ — لتحويل القيم من سنوية لشهرية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#finance",
   "label": "الدوال المالية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من دوال التاريخ والوقت:",
  "options": [
   "MID",
   "NOW"
  ],
  "answerIndex": 1,
  "explanation": "NOW التاريخ والوقت الحاليين. MID نصية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#text",
   "label": "الدوال النصية ودوال التاريخ"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تحوّل الحرف الأول من كل كلمة إلى حرف كبير والباقي صغير:",
  "options": [
   "UPPER",
   "LOWER",
   "PROPER",
   "CONCATENATE"
  ],
  "answerIndex": 2,
  "explanation": "PROPER.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#text",
   "label": "الدوال النصية ودوال التاريخ"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تُرجع عدداً معيناً من الأحرف ابتداءً من حرف محدد في منتصف النص:",
  "options": [
   "LEFT",
   "RIGHT",
   "MID",
   "SUBSTITUTE"
  ],
  "answerIndex": 2,
  "explanation": "MID(text, start_num, num_chars).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#text",
   "label": "الدوال النصية ودوال التاريخ"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تشبه تماماً عمل الرمز & في دمج الخلايا:",
  "options": [
   "CONCATENATE",
   "SUBSTITUTE",
   "PROPER",
   "MID"
  ],
  "answerIndex": 0,
  "explanation": "CONCATENATE.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#text",
   "label": "الدوال النصية ودوال التاريخ"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تُعيد رقم الشهر (1-12) من تاريخ معين:",
  "options": [
   "DAY",
   "MONTH",
   "YEAR",
   "DATE"
  ],
  "answerIndex": 1,
  "explanation": "MONTH.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#text",
   "label": "الدوال النصية ودوال التاريخ"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "دالة البحث العمودي هي HLOOKUP.",
  "answer": false,
  "explanation": "خطأ — HLOOKUP <b>أفقي</b> (بالسطر الأول). العمودي <b>VLOOKUP</b> (بالعمود الأول).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "OR معادلة تحقق شرطاً واحداً على الأقل من عدة شروط.",
  "answer": true,
  "explanation": "صح ✔️ — True إذا تحقق شرط واحد عالأقل.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "AND معادلة تعطينا القيمة True بحال تحقق شرط واحد على الأقل.",
  "answer": false,
  "explanation": "خطأ — AND بتعطي True إذا <b>تحققت كل الشروط</b>.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "دالة ISODD تفحص الخلية الرقمية ذات الرقم الزوجي.",
  "answer": false,
  "explanation": "خطأ — ISODD للرقم <b>الفردي</b>، و ISEVEN للزوجي.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في دالة VLOOKUP، لإيجاد قيمة مطابقة تماماً نضع في range_lookup القيمة:",
  "options": [
   "True",
   "False",
   "0.5",
   "1"
  ],
  "answerIndex": 1,
  "explanation": "False مطابقة تامة، True (الافتراضي) تقريبية.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تُرجع قيمة إذا تحقق اختبار منطقي وقيمة أخرى إن لم يتحقق:",
  "options": [
   "IF",
   "AND",
   "OR",
   "ISBLANK"
  ],
  "answerIndex": 0,
  "explanation": "IF(logical_test, value_if_true, value_if_false).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الدالة التي تُرجع True إذا كانت الخلية فارغة:",
  "options": [
   "ISTEXT",
   "ISNUMBER",
   "ISBLANK",
   "COUNTBLANK"
  ],
  "answerIndex": 2,
  "explanation": "ISBLANK (دوال المعلومات).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#lookup",
   "label": "دوال البحث والدوال المنطقية ودوال المعلومات"
  }
 }
];
