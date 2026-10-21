/* بنك أسئلة الفصل 4 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH4_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القيمة المستقبلية \\(FV\\) لسلسلة تدفقات مالية ثابتة سنوياً وبمعدل ثابت \\(t\\) هي متتالية هندسية أساسها:",
  "options": [
   "\\(q=1-t\\)",
   "\\(q=1+tn\\)",
   "\\(q=1+t\\)",
   "\\(q=t\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(q=1+t\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">كل دفعة بتتضاعف كل سنة بـ\\((1+t)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A,\\ A(1+t),\\ A(1+t)^2,\\dots\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(q=1+t\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#annuity",
   "label": "القيمة المستقبلية والحالية لجملة دفعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القيمة المستقبلية \\(FV\\) لمبلغ 10000 ل.س بعد سنتين بمعدل فائدة مركب يساوي 10% سنوياً هي:",
  "options": [
   "12000",
   "11000",
   "21000",
   "2000",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(K_n=K(1+t)^n\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(10000(1.1)^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=12100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div><b>❌ انتبه:</b> 12000 هي الفائدة <b>البسيطة</b>. (بملف الدورات مظلل 21000 وهو غلط حسابياً؛ بأسئلة المقرر نفس السؤال وجوابه 12100.)",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#interest",
   "label": "الفائدة البسيطة والمركبة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كل متتالية حسابية أساسها سالب وأكبر من الواحد بالقيمة المطلقة تكون متزايدة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">أساس سالب \\(q\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">كل حد أصغر من اللي قبله</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><b>متناقصة</b></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال \\(q=-3\\): \\(5,2,-1,-4\\)</div></div><b>❌ انتبه:</b> بملف الدورات مظلل «صح»، بس حسب المقرر: الحسابية متناقصة إذا أساسها سالب مهما كانت قيمته.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القيمة الحالية \\(PV\\) لسلسلة تدفقات مالية قسطها الثابت \\(A\\) لمدة \\(n\\) سنة وبمعدل تراكم سنوي \\(t\\) تُحسب كمجموع متتالية هندسية أساسها:",
  "options": [
   "\\(q=\\frac1{1+t}\\)",
   "\\(q=\\frac1t\\)",
   "\\(q=1+t\\)",
   "\\(q=1-t\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(q=\\frac1{1+t}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">منحسم كل دفعة لليوم</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac A{1+t},\\ \\frac A{(1+t)^2},\\dots\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(q=\\frac1{1+t}\\)</div></div><b>❌ انتبه:</b> \\(1+t\\) هو أساس القيمة <b>المستقبلية</b>.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#annuity",
   "label": "القيمة المستقبلية والحالية لجملة دفعات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتتالية \\(81,\\ 27,\\ 9,\\ 3,\\dots\\) فإن الحد العام لهذه المتتالية:",
  "options": [
   "\\(U_{n+1}=U_n+3\\)",
   "\\(U_{n+1}=\\frac12U_n\\)",
   "\\(U_{n+1}=\\frac13U_n\\)",
   "\\(U_{n+1}=3U_n\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(U_{n+1}=\\frac13U_n\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{27}{81}=\\frac9{27}=\\frac13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">هندسية أساسها \\(\\frac13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(U_{n+1}=\\frac13U_n\\)</div></div><b>❌ انتبه:</b> إذا قريتها بالعكس \\(3,9,27,81\\) بيصير الأساس 3.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا كان الفرق بين حدين متتاليين من المتتالية \\(U_n\\) ثابتاً ويساوي \\(q\\) نقول إن المتتالية حسابية أساسها \\(q\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(U_{n+1}-U_n=q\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">هاد تعريف الحسابية</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتتالية \\(-6,\\ -9,\\ -12,\\ -15,\\dots\\) هي متتالية حسابية أساسها 3.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-9-(-6)=-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الأساس \\(-3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كل متتالية هندسية أساسها موجب وأصغر من الواحد تكون متزايدة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(0\\lt q\\lt1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متناقصة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(1,\\frac12,\\frac14\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتتالية \\(\\frac14,\\ \\frac18,\\ \\frac1{16},\\ \\frac1{32},\\dots\\) هي متتالية هندسية أساسها \\(q=2\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{1/8}{1/4}=\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(q=\\frac12\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نهاية المتتالية \\(U_n=\\frac1{\\sqrt n}\\) عندما تسعى \\(n\\) إلى اللانهاية هي الصفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt n\\to\\infty\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac1{\\sqrt n}\\to0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد العام للمتتالية \\(1,\\ 4,\\ 9,\\ 16,\\ 25,\\dots\\) هو:",
  "options": [
   "\\(U_n=U_{n-1}+5\\)",
   "\\(U_n=4n\\)",
   "\\(U_n=n^2\\)",
   "\\(U_n=2n-1\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(U_n=n^2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(1^2,2^2,3^2,4^2,\\dots\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(U_n=n^2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد العام لمتتالية الأرباح الشهرية \\(12,\\ 17,\\ 22,\\ 27,\\dots\\) هو:",
  "options": [
   "\\(U_{n+1}=U_n-5\\)",
   "\\(U_{n+1}=U_n+5\\)",
   "\\(U_{n+1}=5U_n\\)",
   "\\(U_{n+1}=U_n+12\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(U_{n+1}=U_n+5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(17-12=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حسابية أساسها 5</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(U_{n+1}=U_n+5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المجموع \\(S\\) لأول \\(N\\) حد من متتالية الأعداد الطبيعية \\(U_n=n\\) هو:",
  "options": [
   "\\(S=\\frac{N(N+1)}2\\)",
   "\\(S=\\frac{2N(N-1)}4\\)",
   "\\(S=\\frac{N^2}2\\)",
   "\\(S=N(N+1)\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(S=\\frac{N(N+1)}2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">حسابية \\(U_1=1\\) ، \\(U_N=N\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=\\frac N2[1+N]\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "نهاية المتتالية \\(U_n=\\frac{8n+6}{4n-7}\\) عندما \\(n\\to\\infty\\) هي:",
  "options": [
   "2",
   "8",
   "4",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نقسم على \\(n\\): \\(\\frac{8+6/n}{4-7/n}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\to\\frac84=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أودع علاء 5000 بفائدة مركبة 15% سنوياً لمدة 5 سنوات. المبلغ الكامل في النهاية تقريباً:",
  "options": [
   "8750",
   "10056.8",
   "5750",
   "33711.9",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 10056.8</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(K_5=5000(1.15)^5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\approx10056.8\\)</div></div><b>❌ انتبه:</b> 8750 = الفائدة البسيطة \\(5000(1+0.15\\times5)\\)، و33711.9 هي FV لدفعات سنوية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#interest",
   "label": "الفائدة البسيطة والمركبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "وضع علاء 5000 بفائدة بسيطة سنوية 15% لمدة 10 أشهر. الفائدة التي يحصل عليها:",
  "options": [
   "750",
   "625",
   "7500",
   "62.5",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 625</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(I=K\\cdot i\\cdot n\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=5000\\times0.15\\times\\frac{10}{12}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=625\\)</div></div><b>❌ انتبه:</b> المدة بالأشهر ← حوّلها لسنة: \\(\\frac{10}{12}\\).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#interest",
   "label": "الفائدة البسيطة والمركبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "دفعة سنوية مقدارها 5000 بمعدل فائدة 15% لمدة 5 سنوات. قيمتها المستقبلية FV تقريباً:",
  "options": [
   "33711.9",
   "16760.8",
   "25000",
   "10056.8",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 33711.9</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(FV=5000\\cdot\\frac{1.15^5-1}{0.15}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\approx33711.9\\)</div></div><b>❌ انتبه:</b> 16760.8 هي القيمة <b>الحالية</b> PV لنفس الدفعات.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#annuity",
   "label": "القيمة المستقبلية والحالية لجملة دفعات"
  }
 }
];
