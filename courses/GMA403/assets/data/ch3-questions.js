/* بنك أسئلة الفصل 3 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH3_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب طرفي المتراجحة بعدد حقيقي لا يغير اتجاه المتراجحة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">بعدد موجب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بيتغير</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بعدد سالب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بيتعكس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(2\\lt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-2\\gt-3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحتان \\((x^2-9\\ge0)\\) و \\((x-3\\gt0)\\)، فإن القيمة \\(x=6\\):",
  "options": [
   "حل مشترك للمتراجحتين",
   "لا تُحقق المتراجحتين معاً",
   "حسب اتجاه المتراجحتين",
   "تحقق الأولى فقط",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: حل مشترك للمتراجحتين</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(6^2-9=27\\ge0\\) ✔️</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(6-3=3\\gt0\\) ✔️</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حققت الاثنتين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حل مشترك</div></div><b>❌ انتبه:</b> بنسخة الدورات وبالمقرر مكتوبة \\((x-3\\lt0)\\) والمفتاح «حل مشترك» — هيك ما بتتحقق التانية (3 مو أصغر من 0)، فالأغلب غلطة طباعة. إذا إجاك السؤال بالامتحان، الجواب المعتمد «حل مشترك».",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحتان \\((x-2\\gt0)\\) و \\((2x\\lt4)\\)، فإن القيمة \\(x=-2\\):",
  "options": [
   "حل مشترك للمتراجحتين",
   "لا تُحقق المتراجحتين معاً",
   "حسب اتجاه المتراجحتين",
   "تحقق الأولى فقط",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا تُحقق المتراجحتين معاً</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-2-2=-4\\gt0\\) ✖️</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">فشلت بالأولى</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">لا تُحقق المتراجحتين معاً</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "قلب طرفي المتراجحة لا يُغير اتجاه المتراجحة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\lt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac12\\gt\\frac13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">القلب بيعكس الاتجاه</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المتراجحة \\(x^2\\gt0\\) هي:",
  "options": [
   "مجموعة الأعداد الحقيقية عدا الصفر",
   "\\(x=0\\)",
   "\\(x=0\\) و \\(x\\gt1\\)",
   "\\(x\\gt0\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: مجموعة الأعداد الحقيقية عدا الصفر</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(x^2\\ge0\\) دايماً</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x^2=0\\) بس لما \\(x=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الحل \\(\\mathbb{R}\\setminus\\{0\\}\\)</div></div><b>❌ انتبه:</b> مو \\(x\\gt0\\) بس: \\((-3)^2=9\\gt0\\) كمان.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن عبر التمثيل البياني إيجاد حلول جميع أنواع المتراجحات مهما كان عدد متغيراتها.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الرسم بالمستوي بيكفي لمتغيرين بس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مع 3 متغيرات وأكتر ما منقدر نرسم</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "جملة متراجحات بمتغيرين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب طرفي المتراجحة بعدد حقيقي موجب تماماً لا يغير اتجاه المتراجحة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\lt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4\\lt6\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "جمع متراجحتين من نفس الاتجاه يعطي متراجحة جديدة لها نفس الاتجاه.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a\\lt b\\) و \\(c\\lt d\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+c\\lt b+d\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتراجحة \\(2x^2+5\\gt0\\) هي محققة دوماً.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x^2\\ge0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x^2+5\\ge5\\gt0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حل المتراجحة \\(3x-12\\lt0\\) هو \\(x\\gt4\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3x\\lt12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt4\\)</div></div><b>❌ انتبه:</b> القسمة على 3 (موجب) ما بتعكس الاتجاه.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن ضرب طرفي المتراجحة بعدد حقيقي \\(c\\) يؤدي إلى:",
  "options": [
   "تغيير اتجاه المتراجحة",
   "لا يغير اتجاه المتراجحة",
   "حسب إشارة العدد \\(c\\)",
   "تحويلها لمعادلة",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: حسب إشارة العدد \\(c\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(c\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بيتغير</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(c\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بيتعكس</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن إضافة عدد حقيقي \\(c\\) إلى طرفي المتراجحة يؤدي إلى:",
  "options": [
   "تغيير اتجاه المتراجحة",
   "لا يغير اتجاه المتراجحة",
   "حسب إشارة العدد \\(c\\)",
   "تحويلها لمعادلة",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا يغير اتجاه المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a\\lt b\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(a+c\\lt b+c\\) مهما كانت \\(c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "خواص المتراجحات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المتراجحة \\(2x-3\\gt x+5\\) هي:",
  "options": [
   "\\(x=8\\)",
   "\\(x\\lt8\\)",
   "\\(x\\gt8\\)",
   "\\(x\\gt2\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(x\\gt8\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x-x\\gt5+3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\gt8\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحة \\(x^2+x\\gt20\\)، فإن القيمة \\(x=4\\):",
  "options": [
   "تُحقق المتراجحة",
   "لا تُحقق المتراجحة",
   "حسب إشارة المميز",
   "تحققها بالمساواة فقط ولذلك هي حل",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا تُحقق المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4^2+4=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(20\\gt20\\) ✖️ (المتراجحة تامة)</div></div><b>❌ انتبه:</b> 20 مو أكبر تماماً من 20.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحة \\(\\frac{x^2-9x}{2x+1}\\lt0\\)، فإن القيمة \\(x=1\\):",
  "options": [
   "تُحقق المتراجحة",
   "لا تُحقق المتراجحة",
   "حسب إشارة مميز المقام",
   "غير معرفة عندها",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: تُحقق المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{1-9}{2+1}=\\frac{-8}{3}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-\\frac83\\lt0\\) ✔️</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#onevar",
   "label": "حل متراجحة بمتغير وحيد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تكاليف ثابتة يومية 5000، تكلفة القطعة 100 وسعر بيعها 150. كم قطعة على الأقل يجب بيعها لتغطية التكاليف الثابتة؟",
  "options": [
   "100",
   "34",
   "50",
   "33",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 34</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(150x\\ge5000\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\ge33.33\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عدد القطع صحيح</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">34</div></div><b>❌ انتبه:</b> 100 هي شرط الربح (\\(50x\\gt5000\\)) مو تغطية الثابتة، و33 ما بتكفي.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#breakeven",
   "label": "القيود الاقتصادية: الربح ونقطة التعادل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\max Z=10x_1+15x_2\\) مع القيود \\(2x_1+4x_2\\le40\\) ، \\(6x_1+2x_2\\le60\\) ، \\(x_1,x_2\\ge0\\). قيمة \\(Z\\) عند نقطة تقاطع القيدين:",
  "options": [
   "150",
   "200",
   "140",
   "120",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(12x_1+4x_2=120\\) (ضربنا التاني بـ2)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(10x_1=80\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_1=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_2=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Z=80+90=170\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">170 مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#lp",
   "label": "البرمجة الخطية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "البرنامج الخطي يتكون من دالة هدف وقيود على شكل متراجحات وشرط أن تكون المتغيرات غير سالبة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">دالة هدف (Max أو Min)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">قيود</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_i\\ge0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#lp",
   "label": "البرمجة الخطية"
  }
 }
];
