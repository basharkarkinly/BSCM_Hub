/* بنك أسئلة الفصل 7 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH7_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن لدينا تابع الطلب \\(Q=100-0.5P\\)، ما هو فائض المستهلك إذا بيعت السلعة بسعر \\(P=40\\)؟",
  "options": [
   "2500",
   "6400",
   "3000",
   "12800",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 6400</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Q=0\\Rightarrow P=200\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Q(40)=80\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(CS=\\frac{(200-40)\\times80}2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=6400\\)</div></div><b>❌ انتبه:</b> 12800 = نسيت تقسم على 2.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#surplus",
   "label": "فائض المستهلك وفائض المنتج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عملية التكامل هي العملية المعاكسة لعملية التفاضل.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Y'=y\\iff\\int y\\,dx=Y+c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل التابع \\(f(x)=\\frac1x\\) هو \\(F(x)=\\ln x+c\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((\\ln x)'=\\frac1x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل التابع \\(f(x)=2\\) هو \\(F(x)=2+c\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\int2\\,dx=2x+c\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تحقق: \\((2x)'=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل التابع \\(f(x)=x\\) هو \\(F(x)=\\frac12x^2+c\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{x^{1+1}}{1+1}=\\frac{x^2}2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الصيغة \\(\\int\\cos x\\,dx=-\\sin x+c\\) صحيحة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((\\sin x)'=\\cos x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\int\\cos x\\,dx=\\sin x+c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل تابع التكاليف الهامشية لمنتج ما هو تابع التكاليف الكلية لنفس المنتج.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\int MC\\,dQ=TC\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#totals",
   "label": "من التابع الحدي إلى التابع الكلي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل تابع الأرباح الهامشية لمنتج ما هو تابع الإيرادات الكلية لنفس المنتج.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تكامل الأرباح الحدية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الأرباح الكلية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الإيرادات الكلية من تكامل \\(MR\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#totals",
   "label": "من التابع الحدي إلى التابع الكلي"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل التابع \\(f(x)=x^4+5\\) هو \\(F(x)=\\frac14x^4+5x+c\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\int x^4dx=\\frac{x^5}5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(F=\\frac15x^5+5x+c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تكامل التابع \\(f(x)=\\sqrt x\\) هو \\(F(x)=\\frac1{1.5}x^{1.5}+c\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt x=x^{0.5}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{x^{1.5}}{1.5}+c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع الأصلي للتكامل \\(\\int\\frac1{x^2}\\,dx\\) هو:",
  "options": [
   "\\(\\frac1x+x\\)",
   "\\(-\\frac1x+c\\)",
   "\\(-x^2+c\\)",
   "\\(\\ln x^2+c\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac1x+c\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac1{x^2}=x^{-2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{x^{-1}}{-1}=-\\frac1x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع الأصلي للتكامل \\(\\int e^{2x}\\,dx\\) هو:",
  "options": [
   "\\(\\frac1xe^x\\)",
   "\\(e^x+c\\)",
   "\\(\\frac12e^{2x}+c\\)",
   "\\(2e^{2x}+c\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac12e^{2x}+c\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\int e^{ax}dx=\\frac1ae^{ax}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac12e^{2x}+c\\)</div></div><b>❌ انتبه:</b> \\(2e^{2x}\\) هو <b>المشتق</b> مو التكامل.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#antideriv",
   "label": "التابع الأصلي وقواعد التكامل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن تابع الإيرادات الهامشية \\(MR=10-Q\\)، فإن تابع الإيرادات الكلية \\(TR\\):",
  "options": [
   "\\(10Q+c\\)",
   "\\(10Q-\\frac12Q^2\\)",
   "\\(-Q^2+c\\)",
   "\\(10-\\frac12Q^2\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(10Q-\\frac12Q^2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(TR=\\int(10-Q)dQ\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=10Q-\\frac{Q^2}2+c\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(TR(0)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(c=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#totals",
   "label": "من التابع الحدي إلى التابع الكلي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن \\(MC=aQ+b\\) والتكاليف الثابتة تساوي الصفر، فإن \\(TC\\):",
  "options": [
   "\\(aQ+c\\)",
   "\\(aQ^2+bQ^2\\)",
   "\\(\\frac a2Q^2+bQ\\)",
   "\\(a+bQ\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac a2Q^2+bQ\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\int(aQ+b)dQ=\\frac a2Q^2+bQ+c\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الثابتة = 0</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(c=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#totals",
   "label": "من التابع الحدي إلى التابع الكلي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة التكامل المحدود \\(\\int_1^2 3x^2\\,dx\\):",
  "options": [
   "7",
   "1",
   "8",
   "9",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 7</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\big[x^3\\big]_1^2=8-1=7\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#definite",
   "label": "التكامل المحدود"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة التكامل المحدود \\(\\int_0^2(x+2)\\,dx\\):",
  "options": [
   "0",
   "2",
   "6",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\big[\\frac{x^2}2+2x\\big]_0^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=2+4=6\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#definite",
   "label": "التكامل المحدود"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة التكامل المحدود \\(\\int_{-2}^{2}x^3\\,dx\\):",
  "options": [
   "0",
   "4",
   "8",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\big[\\frac{x^4}4\\big]_{-2}^{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=4-4=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#definite",
   "label": "التكامل المحدود"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تابع العرض \\(S=-100+5P\\) وسعر السوق \\(P=50\\). فائض المنتج:",
  "options": [
   "4500",
   "3750",
   "1500",
   "1250",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(S=0\\Rightarrow P=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S(50)=150\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{30\\times150}2=2250\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">2250 مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div><b>❌ انتبه:</b> 4500 = نسيت تقسم على 2، و3750 = أخدت القاعدة 50 بدل \\(50-20\\).",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#surplus",
   "label": "فائض المستهلك وفائض المنتج"
  }
 }
];
