/* بنك أسئلة الفصل 1 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH1_POOL = [
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الرمز \\(\\sum\\) بيستخدم للدلالة على:",
  "options": [
   "جداء عدة عوامل",
   "مجموع عدة حدود",
   "الزاوية",
   "اللوغاريتم الطبيعي",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: مجموع عدة حدود</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sum_{i=1}^{n} x_i = x_1+x_2+\\dots+x_n\\) (سيغما = مجموع)</li><li>أما الجداء فرمزه \\(\\prod\\) (باي الكبيرة)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#symbols",
   "label": "الرموز والأحرف الرياضية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\prod_{i=1}^{4} i\\) هي:",
  "options": [
   "10",
   "24",
   "4",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 24</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\prod\\) = جداء: \\(1\\cdot2\\cdot3\\cdot4\\)</li><li>\\(=24\\)</li></ol><b>❌ انتبه:</b> لا تخلطها مع \\(\\sum\\): المجموع \\(1+2+3+4=10\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#symbols",
   "label": "الرموز والأحرف الرياضية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\sum_{i=1}^{4} i\\) هي:",
  "options": [
   "10",
   "24",
   "4",
   "9",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 10</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sum\\) = مجموع: \\(1+2+3+4\\)</li><li>\\(=10\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#symbols",
   "label": "الرموز والأحرف الرياضية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\(\\ln\\) هو اللوغاريتم الطبيعي (النيبيري) وأساسه \\(e \\approx 2.71828\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>حسب المقرر: \\(\\ln = \\log_e\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#symbols",
   "label": "الرموز والأحرف الرياضية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مجموعة الأعداد الحقيقية \\(\\mathbb{R}\\) ليست تبديلية بالنسبة للجمع أو للضرب.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>الجمع والضرب بـ\\(\\mathbb{R}\\) <b>تبديليين</b>: \\(3+8=8+3=11\\) و \\(8\\cdot3=3\\cdot8=24\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حاصل قسمة عددين كسريين هو جداء الأول في مقلوب الثاني.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حاصل جداء أو جمع عددين طبيعيين هو دوماً:",
  "options": [
   "عدد سالب",
   "عدد طبيعي",
   "عدد غير عادي",
   "عدد كسري غير صحيح",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: عدد طبيعي</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>مثال: \\(3+5=8\\) و \\(3\\cdot5=15\\) — بيضل الناتج بـ\\(\\mathbb{N}\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حاصل قسمة كسر على عدد \\(\\frac{c}{d}\\div a\\) حيث \\(a\\neq0\\) هو:",
  "options": [
   "\\(\\frac{c\\cdot a}{d}\\)",
   "\\(a\\cdot c\\cdot d\\)",
   "\\(\\frac{c}{d\\cdot a}\\)",
   "\\(\\frac{d}{c\\cdot a}\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{c}{d\\cdot a}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القسمة على \\(a\\) = الضرب بمقلوبه \\(\\frac{1}{a}\\)</li><li>\\(\\frac{c}{d}\\cdot\\frac{1}{a}=\\frac{c}{d\\cdot a}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\(\\mathbb{Q}\\cap\\mathbb{S}=\\varnothing\\) حيث \\(\\mathbb{S}\\) مجموعة الأعداد غير العادية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>العدد يا عادي يا غير عادي، وما بيصير يكون الاتنين معاً.</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\(\\mathbb{R}=\\mathbb{Q}\\cup\\mathbb{S}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>الأعداد الحقيقية = العادية (ومعها الطبيعية والصحيحة) + غير العادية.</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العدد \\(\\sqrt{9}\\) عدد غير عادي.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{9}=3\\) عدد طبيعي. الجذر بيكون غير عادي بس إذا ما طلع دقيق، متل \\(\\sqrt{2}\\) و \\(\\sqrt{5}\\).</li></ol><b>❌ انتبه:</b> مو كل عدد فيه جذر بيكون غير عادي — احسبه أول.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العدد \\(\\pi\\) عدد عادي (كسري) لأنه يساوي \\(\\frac{22}{7}\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\pi=3.14159\\dots\\) كسر عشري غير منتهٍ وغير دوري، فهو <b>غير عادي</b>؛ و \\(\\frac{22}{7}\\) قيمة تقريبية بس.</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الصفر ينتمي لمجموعة الأعداد الطبيعية \\(\\mathbb{N}\\) حسب المقرر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المقرر بيعرّف \\(\\mathbb{N}=\\{0,1,2,3,\\dots\\}\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي من الأعداد التالية <b>غير عادي</b>؟",
  "options": [
   "\\(0.317\\)",
   "\\(-\\frac{3}{7}\\)",
   "\\(\\sqrt[3]{2}\\)",
   "\\(\\sqrt{16}\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\sqrt[3]{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(0.317=\\frac{317}{1000}\\) و \\(-\\frac{3}{7}\\) كسور ← عادية</li><li>\\(\\sqrt{16}=4\\) ← طبيعي</li><li>\\(\\sqrt[3]{2}\\) ما إله قيمة دقيقة ← غير عادي</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#sets",
   "label": "مجموعات الأعداد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُقصد بالمجال \\(]a,b]\\) جميع الأعداد بين \\(a\\) و \\(b\\) بما فيها العدد \\(a\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(]a,b]\\) <b>مفتوح من اليسار</b>: ما بيشمل \\(a\\) وبيشمل \\(b\\)، يعني \\(a\\lt x\\le b\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الكتابة على شكل مجال مفتوح من الجهتين \\(x\\in\\,]a,b[\\) تكافئ:",
  "options": [
   "\\(x=a\\) أو \\(x=b\\)",
   "\\(a\\le x\\le b\\)",
   "\\(a\\lt x\\lt b\\)",
   "\\(a\\lt x\\le b\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(a\\lt x\\lt b\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القوس المعكوس يعني الطرف مو داخل.</li><li>\\(]a,b[=\\{x:\\ a\\lt x\\lt b\\}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(B=\\{x \\mid x\\lt 4\\}\\) و \\(C=\\{x \\mid -1\\lt x\\le 5\\}\\) فإن \\(B\\cup C\\) هو:",
  "options": [
   "\\(]-1,4[\\)",
   "\\(]-\\infty,5]\\)",
   "\\(]-\\infty,4[\\)",
   "\\(]-1,5]\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,5]\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>ارسم المجالين على محور الأعداد</li><li>الاجتماع = كل نقطة موجودة بواحد منهم على الأقل</li><li>من \\(-\\infty\\) لحد 5 (مع 5) ← \\(]-\\infty,5]\\)</li></ol><b>❌ انتبه:</b> \\(]-1,4[\\) هو التقاطع \\(B\\cap C\\)، مو الاجتماع.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(B=\\{x \\mid x\\lt 4\\}\\) و \\(C=\\{x \\mid -1\\lt x\\le 5\\}\\) فإن \\(B\\cap C\\) هو:",
  "options": [
   "\\(]-1,4[\\)",
   "\\(]-\\infty,5]\\)",
   "\\([-1,4]\\)",
   "\\(]-1,5]\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-1,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>التقاطع = الجزء المشترك بين المجالين</li><li>بيبلّش بعد \\(-1\\) (مفتوح) وبيخلص قبل 4 (مفتوح)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(A=\\{x \\mid x\\ge -2\\}\\) و \\(B=\\{x \\mid x\\lt 4\\}\\) فإن \\(A\\cap B\\) هو:",
  "options": [
   "\\(]-2,4[\\)",
   "\\([-2,4]\\)",
   "\\([-2,4[\\)",
   "\\(]-\\infty,4[\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\([-2,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(A\\) بيبلّش من \\(-2\\) <b>مع</b> \\(-2\\) (مغلق)</li><li>\\(B\\) بيخلص قبل 4 (مفتوح)</li><li>المشترك: \\(-2\\le x\\lt 4\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\([-4,6]\\cap[0,8[\\) يساوي:",
  "options": [
   "\\([-4,8[\\)",
   "\\([0,6]\\)",
   "\\(]0,6[\\)",
   "\\([0,8[\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\([0,6]\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المشترك بيبلّش من 0 (مغلق بالمجال التاني)</li><li>وبيخلص عند 6 (مغلق بالأول)</li></ol><b>❌ انتبه:</b> \\([-4,8[\\) هو الاجتماع.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(]-\\infty,6]\\cap[2,10[\\) يساوي:",
  "options": [
   "\\([2,6]\\)",
   "\\(]2,6[\\)",
   "\\(]-\\infty,10[\\)",
   "\\([6,10[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\([2,6]\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المشترك من 2 (مغلق) لحد 6 (مغلق)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(]-2,0[\\,\\cup\\,]-1,1[\\) يساوي:",
  "options": [
   "\\(]-1,0[\\)",
   "\\(]-2,1[\\)",
   "\\([-2,1]\\)",
   "\\(]-2,0[\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-2,1[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المجالين متداخلين، فالاجتماع من أصغر بداية \\(-2\\) لأكبر نهاية 1</li><li>الطرفين مفتوحين ← \\(]-2,1[\\)</li></ol><b>❌ انتبه:</b> \\(]-1,0[\\) هو التقاطع.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(]-2,0[\\,\\cap\\,]-1,1[\\) يساوي:",
  "options": [
   "\\(]-1,0[\\)",
   "\\(]-2,1[\\)",
   "\\([-1,0]\\)",
   "\\(]-1,1[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-1,0[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>الجزء المشترك بين \\(-1\\) و 0، والطرفين مفتوحين</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التعبير عن المجال \\(]-3,0[\\) بدلالة المتراجحات هو:",
  "options": [
   "\\(-3\\le x\\le 0\\)",
   "\\(-3\\lt x\\le 0\\)",
   "\\(-3\\le x\\lt 0\\)",
   "\\(x\\lt -3\\) أو \\(x\\gt 0\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — الصحيح \\(-3\\lt x\\lt 0\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القوسين معكوسين ← الطرفين مفتوحين</li><li>\\(]-3,0[=\\{x:\\ -3\\lt x\\lt 0\\}\\)</li><li>وهالكتابة مو موجودة بين الخيارات الأربعة ← «غير ذلك»</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المتراجحة \\(-2\\lt x\\le 1\\) تكتب كمجال:",
  "options": [
   "\\(]-2,1[\\)",
   "\\([-2,1]\\)",
   "\\(]-2,1]\\)",
   "\\([-2,1[\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-2,1]\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\lt\\) ← قوس مفتوح عند \\(-2\\)</li><li>\\(\\le\\) ← قوس مغلق عند 1</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المتراجحة \\(x\\ge -5\\) تكتب كمجال:",
  "options": [
   "\\(]-5,\\infty[\\)",
   "\\([-5,\\infty[\\)",
   "\\(]-\\infty,-5]\\)",
   "\\([-5,\\infty]\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\([-5,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\ge\\) ← \\(-5\\) داخل المجال (مغلق)</li><li>واللانهاية دايماً مفتوحة</li></ol><b>❌ انتبه:</b> ما في قوس مغلق عند \\(\\infty\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مركز المجال \\(]2,8[\\) ونصف قطره هما:",
  "options": [
   "المركز 5 ونصف القطر 3",
   "المركز 5 ونصف القطر 6",
   "المركز 3 ونصف القطر 5",
   "المركز 4 ونصف القطر 3",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: المركز 5 ونصف القطر 3</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المركز \\(\\alpha=\\frac{a+b}{2}=\\frac{2+8}{2}=5\\)</li><li>نصف القطر \\(\\varepsilon=b-\\alpha=8-5=3\\)</li></ol><b>❌ انتبه:</b> طول المجال 6، ونصف القطر نصّه.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان نصف قطر الجوار \\(\\varepsilon=3\\) فإن جوار العدد الحقيقي \\(a\\) هو:",
  "options": [
   "\\([a-3,a+3]\\)",
   "\\(]a-3,a+3[\\)",
   "\\(]a,a+3[\\)",
   "\\(]-3,3[\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]a-3,a+3[\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>الجوار مجال <b>مفتوح</b> مركزه \\(a\\): \\(N_a(\\varepsilon)=]a-\\varepsilon,a+\\varepsilon[\\)</li><li>\\(N_a(3)=]a-3,a+3[\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#intervals",
   "label": "المجالات والجوار"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "القيمة المطلقة للعدد \\(|a|\\) تعني قيمة العدد بغض النظر عن إشارته.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(|9|=9\\) و \\(|-9|=-(-9)=9\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القيمة المطلقة للعدد \\(|-5|\\) هي:",
  "options": [
   "\\(-5\\)",
   "\\(5\\)",
   "\\(\\pm5\\)",
   "\\(0\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(5\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(|x|=-x\\) إذا \\(x\\lt0\\)</li><li>\\(|-5|=-(-5)=5\\)</li></ol><b>❌ انتبه:</b> القيمة المطلقة ما بتكون سالبة أبداً.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(|1-\\sqrt{2}|\\) يساوي:",
  "options": [
   "\\(1-\\sqrt{2}\\)",
   "\\(\\sqrt{2}-1\\)",
   "\\(1+\\sqrt{2}\\)",
   "\\(-1-\\sqrt{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\sqrt{2}-1\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{2}\\approx1.41\\gt1\\) ← \\(1-\\sqrt{2}\\lt0\\)</li><li>العدد سالب فمنضربه بـ\\(-1\\): \\(-(1-\\sqrt{2})=\\sqrt{2}-1\\)</li></ol><b>❌ انتبه:</b> \\(1-\\sqrt{2}\\) سالب، فما بيصير يكون قيمة مطلقة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\big||-6|-|-4|\\big|\\) يساوي:",
  "options": [
   "10",
   "2",
   "-2",
   "-10",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(|-6|=6\\) و \\(|-4|=4\\)</li><li>\\(|6-4|=|2|=2\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\left|\\dfrac{7-12}{12-7}\\right|\\) يساوي:",
  "options": [
   "-1",
   "0",
   "1",
   "5",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\frac{-5}{5}=-1\\)</li><li>\\(|-1|=1\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(|\\pi-3|\\) يساوي:",
  "options": [
   "\\(3-\\pi\\)",
   "\\(\\pi-3\\)",
   "\\(\\pi+3\\)",
   "\\(-\\pi-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\pi-3\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\pi\\approx3.14\\gt3\\) ← \\(\\pi-3\\gt0\\)</li><li>العدد موجب فبيضل متل ما هو</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(-1-\\big|1-|-1|\\big|\\) يساوي:",
  "options": [
   "-3",
   "1",
   "0",
   "-2",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — الناتج \\(-1\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>من جوّا لبرّا: \\(|-1|=1\\)</li><li>\\(|1-1|=|0|=0\\)</li><li>\\(-1-0=-1\\) ← مو موجود بالخيارات</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\big|-2\\cdot|-3|\\big|\\) يساوي:",
  "options": [
   "-6",
   "6",
   "1",
   "5",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(|-3|=3\\)</li><li>\\(|-2\\cdot3|=|-6|=6\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\left|-\\frac{1}{3}(-15)\\right|\\) يساوي:",
  "options": [
   "-5",
   "5",
   "45",
   "15",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 5</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(-\\frac{1}{3}\\cdot(-15)=5\\)</li><li>\\(|5|=5\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لأي عددين حقيقيين \\(x,y\\): \\(|x+y|\\le|x|+|y|\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>هي متراجحة المثلث. مثال المقرر: \\(|-8+3|=5\\le|-8|+|3|=11\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لأي عددين حقيقيين \\(x,y\\): \\(|x\\cdot y|=|x|\\cdot|y|\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>مبرهنة (1-4) بالمقرر، ومعها \\(\\left|\\frac{x}{y}\\right|=\\frac{|x|}{|y|}\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لأي عددين حقيقيين: \\(|x+y|=|x|+|y|\\) دائماً.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>المساواة مو دايماً. مثال: \\(|-8+3|=5\\) بينما \\(|-8|+|3|=11\\). الصح: \\(|x+y|\\le|x|+|y|\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(|x|\\le 3\\) هي:",
  "options": [
   "\\(]-3,3[\\)",
   "\\([-3,3]\\)",
   "\\([0,3]\\)",
   "\\(]-\\infty,-3]\\cup[3,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\([-3,3]\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(|x|\\le c \\iff -c\\le x\\le c\\)</li><li>\\(-3\\le x\\le3\\) ← \\([-3,3]\\)</li></ol><b>❌ انتبه:</b> \\(]-\\infty,-3]\\cup[3,\\infty[\\) هو حل \\(|x|\\ge3\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(x\\gt\\frac{3}{2}\\) فإن \\(|2x-3|\\) يساوي:",
  "options": [
   "\\(3-2x\\)",
   "\\(2x-3\\)",
   "\\(0\\)",
   "\\(-2x-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(2x-3\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(x\\gt\\frac32\\) ← \\(2x\\gt3\\) ← \\(2x-3\\gt0\\)</li><li>العدد موجب فبيطلع متل ما هو: \\(2x-3\\)</li></ol><b>❌ انتبه:</b> \\(3-2x\\) بتكون الجواب إذا \\(x\\lt\\frac32\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\sqrt{(-9)^2}\\) يساوي:",
  "options": [
   "-9",
   "9",
   "81",
   "\\(\\pm9\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 9</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{x^2}=|x|\\)</li><li>\\(\\sqrt{(-9)^2}=|-9|=9\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#abs",
   "label": "القيمة المطلقة وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "رفع العدد \\(a\\) إلى القوة \\(n\\) يعني ضرب العدد \\(a\\) بنفسه \\(n\\) مرة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(a^4=a\\times a\\times a\\times a\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حاصل جداء \\(2^3\\times3^2\\) هو:",
  "options": [
   "36",
   "72",
   "\\(6^5\\)",
   "216",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 72</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(2^3=8\\) و \\(3^2=9\\)</li><li>\\(8\\times9=72\\)</li></ol><b>❌ انتبه:</b> ما فينا نجمع الأسس إلا إذا الأساس نفسه.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(-2^6\\) هي:",
  "options": [
   "64",
   "-64",
   "-12",
   "12",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: -64</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القوة بتنطبق على 2 بس (الإشارة برّا)</li><li>\\(-(2^6)=-64\\)</li></ol><b>❌ انتبه:</b> \\((-2)^6=64\\) لأن الإشارة جوّا القوس والقوة زوجية.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\((-2)^6\\) هي:",
  "options": [
   "64",
   "-64",
   "-12",
   "32",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 64</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القوة زوجية والإشارة جوّا القوس ← الناتج موجب</li><li>\\(2^6=64\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\((-5)^3\\) هي:",
  "options": [
   "125",
   "-125",
   "-15",
   "15",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: -125</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>القوة فردية والعدد سالب ← الإشارة بتضل سالبة</li><li>\\(-5^3=-125\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(\\left(\\frac{2}{5}\\right)^2\\cdot(-5)^2\\) هي:",
  "options": [
   "4",
   "\\(\\frac{4}{25}\\)",
   "-4",
   "10",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 4</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\frac{2^2}{5^2}\\cdot5^2\\)</li><li>الـ\\(5^2\\) بتختصر ← \\(2^2=4\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(\\left(\\frac{5}{3}\\right)^0\\cdot2^{-1}\\) هي:",
  "options": [
   "0",
   "\\(\\frac{1}{2}\\)",
   "-2",
   "\\(\\frac{5}{6}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>أي عدد (غير الصفر) أسه صفر = 1</li><li>\\(2^{-1}=\\frac12\\) ← \\(1\\cdot\\frac12=\\frac12\\)</li></ol><b>❌ انتبه:</b> الأس صفر بيعطي 1 مو 0.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(\\dfrac{2^{-3}}{3^0}\\) هي:",
  "options": [
   "\\(-8\\)",
   "\\(\\frac{1}{8}\\)",
   "0",
   "\\(-\\frac{1}{8}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{8}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(3^0=1\\)</li><li>\\(2^{-3}=\\frac{1}{2^3}=\\frac18\\)</li></ol><b>❌ انتبه:</b> الأس السالب بيقلب العدد، ما بيخليه سالب.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(\\left(\\frac{2}{3}\\right)^{-2}\\) هي:",
  "options": [
   "\\(\\frac{4}{9}\\)",
   "\\(\\frac{9}{4}\\)",
   "\\(-\\frac{4}{9}\\)",
   "\\(-\\frac{9}{4}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{9}{4}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>الأس السالب ← نقلب الكسر: \\(\\left(\\frac32\\right)^2\\)</li><li>\\(=\\frac{9}{4}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\((2y^2)^3\\) هو:",
  "options": [
   "\\(2y^6\\)",
   "\\(8y^5\\)",
   "\\(8y^6\\)",
   "\\(6y^6\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(8y^6\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\((a\\cdot b)^n=a^n\\cdot b^n\\) ← \\(2^3\\cdot(y^2)^3\\)</li><li>\\((y^2)^3=y^{2\\cdot3}=y^6\\) ← \\(8y^6\\)</li></ol><b>❌ انتبه:</b> لازم ترفع الـ2 كمان للقوة 3، وأسس القوة على القوة بتنضرب مو بتنجمع.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\(y^{-2}\\cdot y^{7}\\) هو:",
  "options": [
   "\\(y^{5}\\)",
   "\\(y^{-14}\\)",
   "\\(y^{9}\\)",
   "\\(y^{-5}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(y^{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>نفس الأساس بالضرب ← نجمع الأسس</li><li>\\(-2+7=5\\) ← \\(y^5\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\(w^{-2}\\cdot w^{-4}\\cdot w^{5}\\) هو:",
  "options": [
   "\\(w\\)",
   "\\(\\frac{1}{w}\\)",
   "\\(w^{11}\\)",
   "\\(w^{-11}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{w}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(-2-4+5=-1\\)</li><li>\\(w^{-1}=\\frac1w\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\(\\dfrac{y^7\\cdot y^0}{y^{10}}\\) هو:",
  "options": [
   "\\(y^{3}\\)",
   "\\(\\frac{1}{y^3}\\)",
   "\\(\\frac{1}{y^{17}}\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{y^3}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(y^0=1\\)</li><li>\\(\\frac{y^7}{y^{10}}=y^{7-10}=y^{-3}=\\frac{1}{y^3}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\(\\dfrac{(u^{-1}v^2)^2}{(u^3v^{-2})^3}\\) هو:",
  "options": [
   "\\(\\frac{v^{10}}{u^{11}}\\)",
   "\\(\\frac{v^{2}}{u^{7}}\\)",
   "\\(u^{11}v^{10}\\)",
   "\\(\\frac{u^{11}}{v^{10}}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{v^{10}}{u^{11}}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>البسط: \\(u^{-2}v^{4}\\)</li><li>المقام: \\(u^{9}v^{-6}\\)</li><li>\\(u^{-2-9}\\,v^{4-(-6)}=u^{-11}v^{10}=\\frac{v^{10}}{u^{11}}\\)</li></ol><b>❌ انتبه:</b> طرح أس سالب = جمع: \\(4-(-6)=10\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تبسيط \\((8m^{-2}n^{4})(n^{-2})\\) هو:",
  "options": [
   "\\(\\frac{8n^2}{m^2}\\)",
   "\\(8m^2n^2\\)",
   "\\(\\frac{8n^6}{m^2}\\)",
   "\\(\\frac{n^2}{8m^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{8n^2}{m^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(n^{4}\\cdot n^{-2}=n^{2}\\)</li><li>\\(m^{-2}=\\frac{1}{m^2}\\) ← \\(\\frac{8n^2}{m^2}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\dfrac{5^2}{5^3}\\) يساوي:",
  "options": [
   "5",
   "\\(\\frac{1}{5}\\)",
   "\\(5^5\\)",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(5^{2-3}=5^{-1}\\)</li><li>\\(=\\frac15\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\((5^3)^4\\) يساوي:",
  "options": [
   "\\(5^{7}\\)",
   "\\(5^{12}\\)",
   "\\(5^{81}\\)",
   "\\(20^3\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(5^{12}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>قوة على قوة ← نضرب الأسس</li><li>\\(3\\cdot4=12\\)</li></ol><b>❌ انتبه:</b> الجمع \\(5^7\\) بيكون لما نضرب \\(5^3\\cdot5^4\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#powers",
   "label": "القوى (الأسس)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يأخذ الجذر النوني للعدد صفر \\(\\sqrt[n]{0}\\) قيماً عديدة حسب قيمة \\(n\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt[n]{0}=0\\) دايماً، مهما كان \\(n\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة العبارة \\(\\sqrt{4a^2}\\) عندما \\(a=5\\) هي:",
  "options": [
   "\\(\\pm10\\)",
   "\\(10\\)",
   "\\(\\pm100\\)",
   "\\(25\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(10\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{4\\cdot25}=\\sqrt{100}\\)</li><li>الجذر التربيعي (الحسابي) حسب المقرر عدد <b>موجب</b>: \\(\\sqrt{100}=10\\)</li></ol><b>❌ انتبه:</b> بعض الملخصات كاتبة \\(\\pm10\\)، بس حسب المقرر \\(\\sqrt{9}=3\\) و \\(|x|=\\sqrt{x^2}\\) — الجذر الحسابي ما بيعطي قيمتين.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(3\\sqrt[3]{16}\\) يساوي:",
  "options": [
   "\\(6\\sqrt[3]{2}\\)",
   "\\(12\\)",
   "\\(3\\sqrt[3]{2}\\)",
   "\\(6\\sqrt{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(6\\sqrt[3]{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(16=8\\cdot2=2^3\\cdot2\\)</li><li>\\(\\sqrt[3]{16}=\\sqrt[3]{8}\\cdot\\sqrt[3]{2}=2\\sqrt[3]{2}\\)</li><li>\\(3\\cdot2\\sqrt[3]{2}=6\\sqrt[3]{2}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\dfrac{\\sqrt{18}}{\\sqrt{81}}\\) يساوي:",
  "options": [
   "\\(\\frac{\\sqrt{2}}{3}\\)",
   "\\(\\frac{2}{9}\\)",
   "\\(\\frac{3\\sqrt{2}}{81}\\)",
   "\\(\\frac{\\sqrt{2}}{9}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{\\sqrt{2}}{3}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{18}=\\sqrt{9\\cdot2}=3\\sqrt{2}\\) و \\(\\sqrt{81}=9\\)</li><li>\\(\\frac{3\\sqrt2}{9}=\\frac{\\sqrt2}{3}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\sqrt{\\frac{27}{4}}\\) يساوي:",
  "options": [
   "\\(\\frac{3\\sqrt{3}}{2}\\)",
   "\\(\\frac{9}{2}\\)",
   "\\(\\frac{3\\sqrt{3}}{4}\\)",
   "\\(\\frac{27}{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{3\\sqrt{3}}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{\\frac{27}{4}}=\\frac{\\sqrt{27}}{\\sqrt4}\\)</li><li>\\(\\sqrt{27}=\\sqrt{9\\cdot3}=3\\sqrt3\\) ← \\(\\frac{3\\sqrt3}{2}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\sqrt{3}\\cdot\\sqrt{15}\\) يساوي:",
  "options": [
   "\\(3\\sqrt{5}\\)",
   "\\(\\sqrt{18}\\)",
   "\\(5\\sqrt{3}\\)",
   "\\(45\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(3\\sqrt{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt{x}\\cdot\\sqrt{y}=\\sqrt{xy}\\) ← \\(\\sqrt{45}\\)</li><li>\\(\\sqrt{45}=\\sqrt{9\\cdot5}=3\\sqrt5\\)</li></ol><b>❌ انتبه:</b> الجذور ما بتنجمع جوّا: \\(\\sqrt3\\cdot\\sqrt{15}\\ne\\sqrt{18}\\).",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\sqrt[3]{2}\\cdot\\sqrt[3]{32}\\) يساوي:",
  "options": [
   "4",
   "8",
   "\\(\\sqrt[3]{34}\\)",
   "\\(2\\sqrt[3]{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 4</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt[3]{2\\cdot32}=\\sqrt[3]{64}\\)</li><li>\\(64=4^3\\) ← الناتج 4</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\sqrt[4]{\\frac14}\\cdot\\sqrt[4]{\\frac{1}{64}}\\) يساوي:",
  "options": [
   "\\(\\frac{1}{4}\\)",
   "\\(\\frac{1}{16}\\)",
   "\\(\\frac{1}{2}\\)",
   "\\(\\frac{1}{8}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{4}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt[4]{\\frac{1}{4\\cdot64}}=\\sqrt[4]{\\frac{1}{256}}\\)</li><li>\\(256=4^4\\) ← \\(\\frac14\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\((\\sqrt{13}+\\sqrt{7})(\\sqrt{13}-\\sqrt{7})\\) يساوي:",
  "options": [
   "6",
   "20",
   "\\(\\sqrt{6}\\)",
   "\\(2\\sqrt{13}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\((a+b)(a-b)=a^2-b^2\\)</li><li>\\(13-7=6\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان دليل الجذر فردياً فللعدد السالب جذر وحيد سالب، مثل \\(\\sqrt[3]{-8}=-2\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\((-2)^3=-8\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "للعدد السالب جذر تربيعي حقيقي، مثل \\(\\sqrt{-4}=-2\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>إذا الدليل زوجي، العدد السالب <b>ما إله جذر حقيقي</b>. و \\((-2)^2=4\\) مو \\(-4\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\sqrt[4]{5^3}\\) تكتب على شكل قوة:",
  "options": [
   "\\(5^{4/3}\\)",
   "\\(5^{3/4}\\)",
   "\\(5^{12}\\)",
   "\\(5^{-1}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(5^{3/4}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt[n]{a^m}=a^{m/n}\\)</li><li>\\(m=3,\\ n=4\\) ← \\(5^{3/4}\\)</li></ol><b>❌ انتبه:</b> أس ما جوّا الجذر بيصير بالبسط، ودليل الجذر بالمقام.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#roots",
   "label": "الجذور"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا يوجد لوغاريتم لعدد سالب أو للصفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>لأن \\(a^x\\gt0\\) دايماً، فـ\\(\\log_a b\\) معرّف بس لـ\\(b\\gt0\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\(\\log_a 1=0\\) لأي أساس \\(a\\gt0,\\ a\\ne1\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>لأن \\(a^0=1\\).</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\log_a(x\\cdot y\\cdot z)\\) يساوي:",
  "options": [
   "\\(\\log_a x\\cdot\\log_a y\\cdot\\log_a z\\)",
   "\\(\\log_a x+\\log_a y+\\log_a z\\)",
   "\\(\\log_a(x+y+z)\\)",
   "\\(3\\log_a(xyz)\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\log_a x+\\log_a y+\\log_a z\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>لوغاريتم الجداء = مجموع اللوغاريتمات (خاصة 2 بالمقرر)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\log_a\\sqrt[n]{x}\\) يساوي:",
  "options": [
   "\\(n\\log_a x\\)",
   "\\(\\frac{1}{n}\\log_a x\\)",
   "\\(\\log_a x - n\\)",
   "\\(\\frac{\\log_a x}{x}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{n}\\log_a x\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\sqrt[n]{x}=x^{1/n}\\)</li><li>\\(\\log_a x^{1/n}=\\frac1n\\log_a x\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\log_a b\\) يساوي:",
  "options": [
   "\\(\\log_b a\\)",
   "\\(\\frac{1}{\\log_b a}\\)",
   "\\(-\\log_b a\\)",
   "\\(\\log_a\\frac1b\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{\\log_b a}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>خاصة 7 بالمقرر: \\(\\log_a b=\\frac{1}{\\log_b a}\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\log_2 8\\) هي:",
  "options": [
   "4",
   "3",
   "\\(\\frac{1}{3}\\)",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\log_2 8=x \\iff 2^x=8\\)</li><li>\\(2^3=8\\) ← \\(x=3\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\log 1000\\) (الأساس 10) هي:",
  "options": [
   "3",
   "100",
   "10",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\log x\\) بدون أساس = أساس 10</li><li>\\(10^3=1000\\) ← 3</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\log_4 8\\) هي:",
  "options": [
   "2",
   "\\(\\frac{3}{2}\\)",
   "\\(\\frac{2}{3}\\)",
   "32",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{3}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\log_{a^m}x^n=\\frac{n}{m}\\log_a x\\)</li><li>\\(\\log_{2^2}2^3=\\frac32\\log_2 2=\\frac32\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(2\\log 5+\\log 4\\) (الأساس 10) هي:",
  "options": [
   "2",
   "\\(\\log 14\\)",
   "1",
   "100",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(2\\log5=\\log5^2=\\log25\\)</li><li>\\(\\log25+\\log4=\\log100\\)</li><li>\\(\\log100=2\\)</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة \\(\\ln e^{3}\\) هي:",
  "options": [
   "e",
   "3",
   "1",
   "\\(3e\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(\\ln e^{3}=3\\ln e\\)</li><li>\\(\\ln e=1\\) ← 3</li></ol>",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "وضع مبلغ 512 ل.س في مصرف بفائدة 3% سنوياً. بعد كم سنة تصبح جملة المبلغ 650 ل.س (تقريباً)؟",
  "options": [
   "3 سنوات",
   "8 سنوات",
   "12 سنة",
   "5 سنوات",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 8 سنوات</b><br><b>🧮 كيف حلّيناها:</b><ol class=\"steps\"><li>\\(S_n=S(1+i)^n\\) ← \\(512(1.03)^n=650\\)</li><li>\\((1.03)^n=\\frac{650}{512}=\\frac{325}{256}\\)</li><li>ناخد لوغاريتم الطرفين: \\(n=\\frac{\\log(325/256)}{\\log 1.03}\\approx8\\)</li></ol><b>❌ انتبه:</b> لا تحسب \\(n=\\frac{650-512}{512\\times0.03}\\) — هي فائدة مركّبة مو بسيطة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 }
];
