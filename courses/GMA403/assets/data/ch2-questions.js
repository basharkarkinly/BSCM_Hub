/* بنك أسئلة الفصل 2 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH2_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "في حال كان المميز لمعادلة من الدرجة الثانية سالباً، فيكون للمعادلة جذران.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المعادلة مستحيلة الحل (ما في جذور حقيقية)</div></div><b>❌ انتبه:</b> جذرين لما \\(\\Delta\\gt0\\).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#quadratic",
   "label": "تابع الدرجة الثانية والمميز"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تابعا العرض والطلب هما دوماً توابع خطية وتُمثّل بمستقيمات مهما كانت طبيعة المنتجات.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ممكن يكونو غير خطيين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(Q(P)=\\frac{5000}{P^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#market",
   "label": "العرض والطلب وسعر التوازن"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العلاقة بين سعر السلعة البديلة والطلب على المنتجات في السوق:",
  "options": [
   "عكسية",
   "متساوية",
   "حسب المنتجات المعروضة في السوق",
   "طردية",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: طردية</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">سعر السلعة ↑</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الطلب على بديلتها ↑</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">علاقة <b>طردية</b></div></div><b>❌ انتبه:</b> العكسية هي للسلعة <b>المكملة</b>.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#market",
   "label": "العرض والطلب وسعر التوازن"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لسلعة ما في السوق تابعا العرض والطلب: \\(Q_D=120-0.3P\\) و \\(Q_S=-90+0.4P\\). ما هو السعر التوازني؟",
  "options": [
   "90",
   "120",
   "210",
   "30",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(120-0.3P=-90+0.4P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(210=0.7P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(P^*=\\frac{210}{0.7}=300\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">300 مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div><b>❌ انتبه:</b> 210 هي \\(0.7P\\) مو السعر، و30 هي الكمية.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#market",
   "label": "العرض والطلب وسعر التوازن"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في السوق السابق (\\(Q_D=120-0.3P\\) ، \\(Q_S=-90+0.4P\\)) ما هي الكمية التوازنية؟",
  "options": [
   "12",
   "15",
   "30",
   "60",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 30</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(P^*=300\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Q_D=120-0.3(300)=30\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تأكيد: \\(Q_S=-90+0.4(300)=30\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#market",
   "label": "العرض والطلب وسعر التوازن"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الميل الحدي للاستهلاك \\(MPC=0.3\\)، فإن الميل الحدي للادخار \\(MPS\\):",
  "options": [
   "0.5",
   "0.25",
   "0.3",
   "0.7",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: 0.7</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(MPS=1-MPC\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1-0.3=0.7\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا النموذج الخطي: \\(C=70+0.8Y\\) ، \\(I=20\\). أوجد الدخل التوازني:",
  "options": [
   "70",
   "250",
   "450",
   "90",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 450</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Y=C+I=70+0.8Y+20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Y-0.8Y=90\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0.2Y=90\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Y=450\\)</div></div><b>❌ انتبه:</b> 90 هي البسط بس — لازم تقسم على 0.2.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تابع الدخل القومي لقطاعين \\(Y=C+S\\)، وتابع الاستهلاك \\(C=aY+b\\). فإن تابع الادخار \\(S\\):",
  "options": [
   "\\(S=-aY+C\\)",
   "لا يمكن حسابه أصلاً",
   "\\(S=(1-a)Y-b\\)",
   "\\(S=aY-b\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(S=(1-a)Y-b\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(S=Y-C\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=Y-(aY+b)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=(1-a)Y-b\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عادةً ما يتزايد الاستهلاك والادخار على المستوى الكلي مع تزايد الدخل القومي.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(C=\\alpha+\\beta Y\\) مع \\(\\beta\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الدخل ↑</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الاستهلاك ↑ والادخار ↑</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المعادلة \\(3x^2-27=0\\) هي:",
  "options": [
   "\\(x_1=+3\\) ، \\(x_2=-3\\)",
   "لا حل لها",
   "\\(x_1=+9\\) ، \\(x_2=-9\\)",
   "\\(x_1=0\\) ، \\(x_2=9\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x_1=+3\\) ، \\(x_2=-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3x^2=27\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\pm3\\)</div></div><b>❌ انتبه:</b> ±9 جاية من نسيان الجذر.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#quadratic",
   "label": "تابع الدرجة الثانية والمميز"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ميل المستقيم المشكّل من التابع \\(2y=4x-10\\) هو:",
  "options": [
   "4",
   "2",
   "-5",
   "-10",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y=\\frac{4x-10}{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y=2x-5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الميل \\(=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#linear",
   "label": "تابع الدرجة الأولى: الميل والإشارة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إشارة كثير الحدود \\(F(x)=x^2+8\\) هي:",
  "options": [
   "دوماً موجبة",
   "لا إشارة له",
   "دوماً سالبة",
   "حسب قيمة \\(x\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: دوماً موجبة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2\\ge0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2+8\\ge8\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">(أو \\(\\Delta=-32\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متل إشارة \\(a=1\\))</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#quadratic",
   "label": "تابع الدرجة الثانية والمميز"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "التكاليف الكلية = التكاليف الثابتة − التكاليف المتغيرة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(C(x)=F_c\\,\\mathbf{+}\\,V(x)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#cost",
   "label": "الإيرادات والتكاليف والربح"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حل مشكلة سعر التوازن في سوق منتج ما هو حل مشترك لمعادلتي العرض والطلب.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">التوازن: \\(D=S\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">يعني الحل المشترك (نقطة تقاطع المنحنيين)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#market",
   "label": "العرض والطلب وسعر التوازن"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لدينا تابع الاستهلاك \\(C=0.7Y+200\\)، فإن النزعة الهامشية للادخار \\(MPS\\) تساوي 0.3.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(MPC=0.7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(MPS=1-0.7=0.3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحل المشترك لجملة المعادلتين \\(y=x\\) و \\(y=6x-10\\) هو:",
  "options": [
   "\\(x=2,\\ y=2\\)",
   "\\(x=0,\\ y=2\\)",
   "\\(x=2,\\ y=0\\)",
   "\\(x=-2,\\ y=-2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2,\\ y=2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x=6x-10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5x=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#systems",
   "label": "حل جملة معادلتين خطيتين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا \\(D(x)=20-x\\) تابع سعر الطلب لـ\\(x\\) قطعة، فإن تابع الإيرادات الكلية \\(R(x)\\):",
  "options": [
   "\\(R(x)=D(x)\\)",
   "\\(R(x)=-x^2+20x\\)",
   "\\(R(x)=x^2+x\\)",
   "\\(R(x)=20-x^2\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(R(x)=-x^2+20x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(R(x)=P\\cdot x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(R(x)=(20-x)x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-x^2+20x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#cost",
   "label": "الإيرادات والتكاليف والربح"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تابع الربح من مبيعات سلعة \\(P(q)=q^2-10q\\)، فإنه يمكن تحقيق ربح عندما:",
  "options": [
   "\\(q\\le10\\) فقط",
   "\\(q\\gt10\\) فقط",
   "لا يمكن تحقيق أرباح أبداً",
   "\\(0\\lt q\\lt10\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(q\\gt10\\) فقط</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(q^2-10q\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(q(q-10)\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجذرين 0 و 10 ، و \\(a=1\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">موجب برّا الجذرين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(q\\gt10\\) (الكمية موجبة)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#cost",
   "label": "الإيرادات والتكاليف والربح"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النموذج: \\(Y=C+I+G\\) ، \\(C=30+0.8(Y-T)\\) ، \\(T=0.2Y\\) ، \\(I=30\\) ، \\(G=18\\). الدخل التوازني تقريباً:",
  "options": [
   "216.67",
   "390",
   "130",
   "350",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 216.67</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Y=30+0.8(0.8Y)+30+18\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Y=78+0.64Y\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0.36Y=78\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Y\\approx216.67\\)</div></div><b>❌ انتبه:</b> 390 جاية من نسيان الضريبة: \\(0.2Y=78\\).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#income",
   "label": "الدخل القومي: الاستهلاك والادخار"
  }
 }
];
