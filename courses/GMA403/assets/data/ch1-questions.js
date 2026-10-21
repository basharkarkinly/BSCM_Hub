/* بنك أسئلة الفصل 1 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH1_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يبلغ سعر بيع أحد المنتجات 1540 متضمناً ضريبة الاستهلاك 10%، ما هو سعر التكلفة قبل الضريبة؟",
  "options": [
   "1200",
   "1000",
   "1400",
   "1386",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 1400</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(1540=P+0.1P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1540=1.1P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(P=\\frac{1540}{1.1}=1400\\)</div></div><b>❌ انتبه:</b> 1386 جاية من طرح 10% من 1540 — غلط، الضريبة محسوبة على \\(P\\) مو على سعر البيع.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#percent",
   "label": "النسب المئوية وتطبيقاتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يبلغ راتب أحد العاملين 50000 ل.س، وحصل على مكافأة مقدارها 10000، فإن نسبة المكافأة من الراتب تبلغ:",
  "options": [
   "50%",
   "20%",
   "10%",
   "5%",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 20%</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{10000}{50000}\\times100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=20\\%\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#percent",
   "label": "النسب المئوية وتطبيقاتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "رفع العدد \\(a\\) إلى القوة \\(n\\) يعني ضرب العدد \\(a\\) بنفسه \\(n\\) مرة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a^n=\\underbrace{a\\times a\\times\\dots\\times a}_{n}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(2^3=2\\times2\\times2=8\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "الأسس والجذور واللوغاريتم (تذكير)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُقصد بالمجال \\(]a,b]\\) جميع الأعداد بين \\(a\\) و \\(b\\) بما فيها \\(a\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوس عند \\(a\\) مفتوح \\(]\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a\\lt x\\le b\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">يعني \\(a\\) <b>مو</b> منه (بس \\(b\\) منه)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مجموعة الأعداد الحقيقية \\(\\mathbb{R}\\) ليست تبديلية بالنسبة للجمع أو بالنسبة للضرب.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3+8=8+3=11\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2\\times5=5\\times2=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجمع والضرب بـ\\(\\mathbb{R}\\) <b>تبديليين</b></div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا فرق على الإطلاق في إيجاد العمليات الحسابية بأي ترتيب.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">في ترتيب محدد: أقواس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">قوى وجذور</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ضرب وقسمة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">جمع وطرح</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(2+3\\times4=14\\) مو \\(20\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نقول عن التابع إنه متزايد على مجال قابل للاشتقاق عليه إذا كان مشتقه موجباً على المجال.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(f'(x)\\gt0\\) على المجال</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">التابع متزايد</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#deriv",
   "label": "تذكير بالمشتق: التزايد والتقعر"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حاصل قسمة عددين كسريين هو جداء الأول في مقلوب الثاني.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac ab\\div\\frac cd=\\frac ab\\times\\frac dc\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نسبة 20% من العدد 300 هي القيمة 60.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(300\\times\\frac{20}{100}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=60\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#percent",
   "label": "النسب المئوية وتطبيقاتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يأخذ الجذر النوني للعدد صفر \\(\\sqrt[n]{0}\\) قيماً عديدة حسب قيمة \\(n\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\sqrt[n]{0}=0\\) مهما كانت \\(n\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">قيمة وحدة بس</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "الأسس والجذور واللوغاريتم (تذكير)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت ضريبة الدخل هي 12% من الراتب، فإن قيمة هذه الضريبة لموظف راتبه 40 ألف ل.س هي:",
  "options": [
   "12000 ل.س",
   "4800 ل.س",
   "480 ل.س",
   "3333 ل.س",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 4800 ل.س</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(40000\\times\\frac{12}{100}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=4800\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#percent",
   "label": "النسب المئوية وتطبيقاتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حاصل جداء \\(2^3\\times3^2\\) هو القيمة:",
  "options": [
   "36",
   "72",
   "30",
   "216",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 72</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(2^3=8\\) ، \\(3^2=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8\\times9=72\\)</div></div><b>❌ انتبه:</b> لا تضرب الأسس ببعض ولا الأساسات: الأساسين مختلفين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "الأسس والجذور واللوغاريتم (تذكير)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الكتابة على شكل مجال مفتوح من الجهتين \\(x\\in]a,b[\\) تكافئ:",
  "options": [
   "\\(x=a\\) أو \\(x=b\\)",
   "\\(a\\le x\\le b\\)",
   "\\(a\\lt x\\lt b\\)",
   "\\(a\\lt x\\le b\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(a\\lt x\\lt b\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مفتوح من الجهتين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ولا طرف منه</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a\\lt x\\lt b\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "سلعة سعرها في السوق 200 ل.س وسترتفع إلى 250 ل.س، معدل التضخم هو:",
  "options": [
   "20%",
   "25%",
   "50%",
   "125%",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 25%</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{250-200}{200}\\times100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=25\\%\\)</div></div><b>❌ انتبه:</b> لا تقسم على السعر الجديد (\\(\\frac{50}{250}=20\\%\\)) — القسمة دايماً على القديم.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#percent",
   "label": "النسب المئوية وتطبيقاتها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العلاقة بين المبيعات وموازنة الدعاية \\(V=5000+10P\\). حتى تصل المبيعات إلى 20000 يجب أن تكون موازنة الدعاية:",
  "options": [
   "2000",
   "1500",
   "2500",
   "15000",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 1500</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(20000=5000+10P\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(10P=15000\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(P=1500\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#apps",
   "label": "تطبيق: موازنة الدعاية والمبيعات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة العبارة \\(2+3\\times4^2\\) هي:",
  "options": [
   "400",
   "50",
   "80",
   "146",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 50</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">القوة أولاً</span><div class=\"m\">\\(4^2=16\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بعدين الضرب</span><div class=\"m\">\\(3\\times16=48\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">آخر شي الجمع</span><div class=\"m\">\\(2+48=50\\)</div></div></div><b>❌ انتبه:</b> إذا جمعت أول: \\((2+3)\\times16=80\\) — غلط بالترتيب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#numbers",
   "label": "الأعداد الحقيقية وقواعد الحساب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كانت إشارة المشتق الثاني سالبة عند نقطة ينعدم فيها المشتق الأول، فالتابع يبلغ عندها نهاية صغرى.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(f'=0\\) و \\(f''\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تقعر للأسفل</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نهاية <b>عظمى</b></div></div>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#deriv",
   "label": "تذكير بالمشتق: التزايد والتقعر"
  }
 }
];
