/* بنك أسئلة الفصل 6 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH6_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تابع الإنتاج \\(Q=40K^{0.3}L^{0.7}\\)، عندما \\(K=L=1\\) ما هي الإنتاجية الحدية لرأس المال؟",
  "options": [
   "40",
   "1",
   "12",
   "28",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 12</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Q'_K=40\\times0.3\\,K^{0.3-1}L^{0.7}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=12K^{-0.7}L^{0.7}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عند \\(K=L=1\\): \\(12\\)</div></div><b>❌ انتبه:</b> 28 هي الإنتاجية الحدية <b>للعمل</b> (\\(40\\times0.7\\))، و40 هي \\(Q\\) نفسها.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#partial",
   "label": "الاشتقاق الجزئي والإنتاجية الحدية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا تابع الإيراد الكلي \\(TR(Q)=Q^2+5Q+100\\)، أوجد الإيراد الحدي:",
  "options": [
   "\\(2Q^2+5Q+100\\)",
   "\\(2Q+5\\)",
   "\\(2Q^3+5\\)",
   "\\(Q^2+100\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(2Q+5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(MR=TR'\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\((Q^2)'=2Q\\) ، \\((5Q)'=5\\) ، \\((100)'=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(MR=2Q+5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#marginal",
   "label": "التوابع الحدية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان السعر معطى بـ\\(P=10-0.2Q\\)، فيكون حجم الإنتاج الذي يكون عنده الدخل أعظمياً:",
  "options": [
   "25",
   "200",
   "80",
   "50",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 25</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(TR=10Q-0.2Q^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(TR'=10-0.4Q=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Q=25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(TR''=-0.4\\lt0\\) ✔️ عظمى</div></div><b>❌ انتبه:</b> بملف الدورات مكتوب \\(Q=10-0.2p\\) — هيك 25 بتطلع <b>السعر</b> مو الكمية؛ بالمقرر والملخص التابع \\(P=10-0.2Q\\) والجواب \\(Q=25\\).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#optimum",
   "label": "النهايات الحدية والحل الأمثل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لنفرض أن لدينا تابع الطلب \\(Q=60-0.3P\\)، ما هو السعر الذي يجعل تابع الطلب متكافئ المرونة؟",
  "options": [
   "90",
   "60",
   "100",
   "25",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 100</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(E=-0.3\\cdot\\frac P{60-0.3P}=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0.3P=60-0.3P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0.6P=60\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(P=100\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#elasticity",
   "label": "المرونة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مرونة السعر بالنسبة للطلب هي مقلوب مرونة الطلب بالنسبة للسعر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(E_{P/Q}=\\frac{dP}{dQ}\\cdot\\frac QP\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac1{E_{Q/P}}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#elasticity",
   "label": "المرونة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يكون تقعر منحني التابع نحو العينات السالبة إذا كانت إشارة المشتق الثاني موجبة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f''\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تقعر نحو العينات <b>الموجبة</b> (للأعلى)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(f''\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نحو السالبة</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا كانت مرونة الطلب بالنسبة للسعر أصغر من واحد، نقول إن الطلب مرن.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(|E|\\lt1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ضعيف المرونة (غير مرن)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المرن \\(|E|\\gt1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#elasticity",
   "label": "المرونة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق التابع الجيبي \\(F(x)=\\cos x\\) هو:",
  "options": [
   "\\(-\\sin x\\)",
   "\\(\\tan x\\)",
   "\\(\\cos x\\)",
   "\\(\\sin x\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\sin x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((\\cos x)'=-\\sin x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق التابع \\(F(x)=e^{ax}\\) هو:",
  "options": [
   "\\(a\\,e^{ax}\\)",
   "\\(e^x\\)",
   "\\(x\\)",
   "\\(ax\\,e^{ax-1}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a\\,e^{ax}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مشتق الأسي = مشتق الأس × التابع</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((ax)'=a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(F'=a\\,e^{ax}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مشتق التابع \\(F(x)=a\\) حيث \\(a\\) عدد حقيقي هو الصفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مشتق الثابت \\(=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يكون التابع متناقصاً إذا كان مشتقه الأول موجباً.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f'\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><b>متزايد</b></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ميل التابع \\(F(x)=3x-12\\) هو دوماً ثابت ويساوي 3.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(F'(x)=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تحقق نقاط الاستقرار (سواء كانت دنيا أو عليا أو انعطاف) المعادلة \\(F'(x)=0\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نقطة استقرار</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المماس أفقي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(F'=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#optimum",
   "label": "النهايات الحدية والحل الأمثل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الأول للتابع \\(F(x)=3x^2-4x+2\\) هو:",
  "options": [
   "\\(6x\\)",
   "\\(-4x\\)",
   "\\(6x-4\\)",
   "\\(6x-4+2\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(6x-4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\((3x^2)'=6x\\) ، \\((-4x)'=-4\\) ، \\((2)'=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الثاني لتابع من الدرجة الثانية \\(F(x)=ax^2+bx+c\\) (\\(a\\ne0\\)) هو:",
  "options": [
   "دوماً ثابت ويساوي \\(c\\)",
   "دوماً ثابت ويساوي \\(b\\)",
   "دوماً ثابت ويساوي \\(2a\\)",
   "\\(2ax+b\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: دوماً ثابت ويساوي \\(2a\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(F'=2ax+b\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(F''=2a\\)</div></div><b>❌ انتبه:</b> \\(2ax+b\\) هو المشتق <b>الأول</b>.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق تابع لوغاريتم طبيعي \\(y=\\ln F(x)\\) هو:",
  "options": [
   "\\(F'(x)\\)",
   "\\(\\frac{F'(x)}{F(x)}\\)",
   "\\(\\frac1{F'(x)}\\)",
   "\\(\\frac{F(x)}{F'(x)}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{F'(x)}{F(x)}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مشتق ما داخل اللوغاريتم ÷ ما داخله</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#rules",
   "label": "قواعد الاشتقاق"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا تابع التكاليف الكلية \\(TC(Q)=Q^2-10Q\\)، فإن وسطي تكلفة القطعة \\(AC(Q)\\):",
  "options": [
   "\\(Q-10\\)",
   "\\(Q^3-10Q^2\\)",
   "\\(2Q-10\\)",
   "\\(2Q+10Q\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(Q-10\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(AC=\\frac{TC}Q\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{Q^2-10Q}Q=Q-10\\)</div></div><b>❌ انتبه:</b> \\(2Q-10\\) هي التكلفة <b>الحدية</b> MC.",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#marginal",
   "label": "التوابع الحدية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الجزئي للتابع \\(F(x,y)=2x^2+y^2\\) بالنسبة لـ\\(x\\) هو:",
  "options": [
   "\\(2y\\)",
   "\\(4x\\)",
   "\\(2x+2y\\)",
   "\\(4x+2y\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(4x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(y\\) ثابت</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((y^2)'_x=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{\\partial F}{\\partial x}=4x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#partial",
   "label": "الاشتقاق الجزئي والإنتاجية الحدية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تابع الطلب \\(Q=80-2P\\) عند \\(P=10\\). مرونة الطلب السعرية:",
  "options": [
   "\\(-\\frac13\\)",
   "\\(-2\\)",
   "\\(-\\frac14\\)",
   "\\(-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac13\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Q(10)=60\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(E=-2\\cdot\\frac{10}{60}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-\\frac13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ضعيف المرونة</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#elasticity",
   "label": "المرونة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "تابع التكاليف المتوسطة \\(AC=3Q^2+2Q-5+\\frac{100}Q\\). التكلفة الحدية عند \\(Q=2\\):",
  "options": [
   "21",
   "73",
   "59",
   "45",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(TC=3Q^3+2Q^2-5Q+100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(MC=9Q^2+4Q-5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(MC(2)=36+8-5=39\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">39 مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div><b>❌ انتبه:</b> لا تشتق AC مباشرة (بتطلع 21 تقريباً بأخطاء الإشارة) — أول شي \\(TC=AC\\times Q\\).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#marginal",
   "label": "التوابع الحدية"
  }
 }
];
