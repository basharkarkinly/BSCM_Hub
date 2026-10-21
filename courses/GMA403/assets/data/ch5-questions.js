/* بنك أسئلة الفصل 5 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH5_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت درجة تجانس تابع الإنتاج \\(t=0.5\\)، وضربنا عوامل الإنتاج بـ\\(\\lambda=4\\)، فإن كمية الإنتاج \\(Q\\):",
  "options": [
   "تتضاعف مرتين",
   "تتضاعف 4 مرات",
   "تزداد ربع مرة",
   "تتضاعف 16 مرة",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: تتضاعف مرتين</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الإنتاج بينضرب بـ\\(\\lambda^t\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4^{0.5}=\\sqrt4=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">يعني بيتضاعف مرتين</div></div><b>❌ انتبه:</b> 4 مرات تكون لو \\(t=1\\)، و16 لو \\(t=2\\).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cobb",
   "label": "تابع الإنتاج كوب-دوغلاس ودرجة التجانس"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يُحسب معدل النمو \\(r\\) لناتج محلي من الشكل \\(G=A\\,e^{r t}\\) بين اللحظة الحالية واللحظة \\(t\\) كما يلي:",
  "options": [
   "\\(r=\\frac1t\\ln\\frac{G_t}{G_0}\\)",
   "\\(r=G_t+G_0\\)",
   "\\(r=\\ln G_t+G_0\\)",
   "\\(r=\\frac{G_t}{G_0}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(r=\\frac1t\\ln\\frac{G_t}{G_0}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{G_t}{G_0}=e^{rt}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\ln\\frac{G_t}{G_0}=rt\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=\\frac1t\\ln\\frac{G_t}{G_0}=\\frac{\\ln G_t-\\ln G_0}t\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#growth",
   "label": "النمو الاقتصادي بالشكل الأسي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ناتج الصيغة \\(M=2^5\\) يساوي 32.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\times2\\times2\\times2\\times2=32\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#powers",
   "label": "قواعد الأسس"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ناتج الصيغة \\(M=2^{-2}\\) يساوي \\(\\frac14\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2^{-2}=\\frac1{2^2}=\\frac14\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#powers",
   "label": "قواعد الأسس"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الجذر التربيعي للعدد \\(-4\\): \\((-4)^{\\frac12}\\) يساوي \\(+2\\) أو \\(-2\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ما في عدد حقيقي مربعه سالب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(\\sqrt{-4}\\) غير معرّف بـ\\(\\mathbb{R}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#powers",
   "label": "قواعد الأسس"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "التعبير الأسي \\(4^2=16\\) يكافئ التعبير اللوغاريتمي \\(\\log_4 16=2\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a^n=M\\iff\\log_aM=n\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ناتج العملية \\(\\log_4(2)=n\\) يؤدي إلى \\(n=2\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4^n=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=\\frac12\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ناتج العملية \\(\\log_5\\left(\\frac15\\right)=n\\) يؤدي إلى \\(n=-1\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(5^n=\\frac15=5^{-1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لوغاريتم العدد 64 للأساس 4 يساوي 4.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4^3=64\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log_464=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الصيغة \\(\\log x+\\log y-\\log z\\) تكافئ الصيغة \\(\\log\\frac{xy}z\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">جداء</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">جمع ، قسمة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">طرح</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "قيمة \\(n\\) التي تحقق \\(\\frac1{10}=10^n\\) تساوي 1.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac1{10}=10^{-1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "اللوغاريتم العشري لعدد سالب غير معرّف، لكن اللوغاريتم الطبيعي لعدد سالب دوماً معرّف.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">اللوغاريتم (عشري أو طبيعي) معرّف بس للأعداد الموجبة</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الصيغة اللوغاريتمية \\(M=4\\ln x-3\\ln y+5\\ln z\\) تكافئ:",
  "options": [
   "\\(M=\\ln\\frac{4x}{3y}5z\\)",
   "\\(M=\\ln\\left(\\frac{x^4}{y^3}z^5\\right)\\)",
   "\\(M=\\ln\\frac{4x}{5z}-3y\\)",
   "\\(M=\\ln(x^4y^3z^5)\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(M=\\ln\\left(\\frac{x^4}{y^3}z^5\\right)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الأمثال بتصير أسس: \\(\\ln x^4-\\ln y^3+\\ln z^5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\ln\\frac{x^4z^5}{y^3}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لوغاريتم العدد 125 للأساس 5، أي \\(\\log_5125\\) هو:",
  "options": [
   "5",
   "3",
   "125",
   "25",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(5^3=125\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log_5125=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#logs",
   "label": "اللوغاريتم وخواصه"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ناتج العملية \\(M=\\frac{4^7}{4^5}\\) يساوي:",
  "options": [
   "2",
   "12",
   "16",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 16</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4^{7-5}=4^2=16\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#powers",
   "label": "قواعد الأسس"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(18e^{-3x}=2e^{-5x}\\) هو:",
  "options": [
   "\\(x=-\\ln3\\)",
   "لا يمكن حسابه",
   "\\(x=\\ln3\\)",
   "\\(x=\\ln9\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-\\ln3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{18}{2}=e^{-5x+3x}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(9=e^{-2x}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-2x=\\ln9=2\\ln3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\ln3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#growth",
   "label": "النمو الاقتصادي بالشكل الأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن إعادة كتابة صيغة الناتج المحلي الإجمالي \\(GNP=A\\,e^{r t}\\) بشكل لوغاريتمي كما يلي:",
  "options": [
   "\\(\\ln GNP=rt\\)",
   "\\(\\ln GNP=\\ln A+rt\\)",
   "\\(\\ln GNP=A+rt\\)",
   "\\(\\ln GNP=\\ln A\\cdot rt\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\ln GNP=\\ln A+rt\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln(A\\,e^{rt})=\\ln A+\\ln e^{rt}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\ln A+rt\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#growth",
   "label": "النمو الاقتصادي بالشكل الأسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان الناتج \\(G_0=15\\) وأصبح \\(G_t=20\\) بعد سنة (\\(t=1\\))، فمعدل النمو \\(r\\) تقريباً:",
  "options": [
   "33.3%",
   "28.8%",
   "25%",
   "5%",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 28.8%</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=\\ln20-\\ln15\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\ln\\frac43\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\approx0.288=28.8\\%\\)</div></div><b>❌ انتبه:</b> 33.3% هي نسبة التغير العادية \\(\\frac{5}{15}\\)، و25% \\(\\frac5{20}\\) — بالنمو الأسي منستخدم ln.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#growth",
   "label": "النمو الاقتصادي بالشكل الأسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تابع إنتاج درجة تجانسه 2. إذا ضاعفنا رأس المال والعمل 3 مرات (\\(\\lambda=3\\)) فإن الإنتاج يزداد:",
  "options": [
   "3 مرات",
   "6 مرات",
   "9 مرات",
   "5 مرات",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 9 مرات</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\lambda^t=3^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=9\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#cobb",
   "label": "تابع الإنتاج كوب-دوغلاس ودرجة التجانس"
  }
 }
];
