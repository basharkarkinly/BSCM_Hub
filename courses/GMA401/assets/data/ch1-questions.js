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
  "explanation": "<b>✅ الجواب الصحيح: مجموع عدة حدود</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\sum_{i=1}^{n} x_i = x_1+x_2+\\dots+x_n\\) (سيغما = مجموع)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">أما الجداء فرمزه \\(\\prod\\) (باي الكبيرة)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 24</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">\\(\\prod\\) = جداء</span><div class=\"m\">\\(1\\cdot2\\cdot3\\cdot4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=24\\)</div></div><b>❌ انتبه:</b> لا تخلطها مع \\(\\sum\\): المجموع \\(1+2+3+4=10\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: 10</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">\\(\\sum\\) = مجموع</span><div class=\"m\">\\(1+2+3+4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=10\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">حسب المقرر</span><div class=\"m\">\\(\\ln = \\log_e\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الجمع والضرب بـ\\(\\mathbb{R}\\) <b>تبديليين</b>: \\(3+8=8+3=11\\) و \\(8\\cdot3=3\\cdot8=24\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: عدد طبيعي</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثال: \\(3+5=8\\) و \\(3\\cdot5=15\\) — بيضل الناتج بـ\\(\\mathbb{N}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{c}{d\\cdot a}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القسمة على \\(a\\) = الضرب بمقلوبه \\(\\frac{1}{a}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{c}{d}\\cdot\\frac{1}{a}=\\frac{c}{d\\cdot a}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">العدد يا عادي يا غير عادي، وما بيصير يكون الاتنين معاً</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الأعداد الحقيقية = العادية (ومعها الطبيعية والصحيحة) + غير العادية</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\sqrt{9}=3\\) عدد طبيعي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجذر بيكون غير عادي بس إذا ما طلع دقيق، متل \\(\\sqrt{2}\\) و \\(\\sqrt{5}\\)</div></div><b>❌ انتبه:</b> مو كل عدد فيه جذر بيكون غير عادي — احسبه أول.",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\pi=3.14159\\dots\\) كسر عشري غير منتهٍ وغير دوري، فهو <b>غير عادي</b>؛</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">و \\(\\frac{22}{7}\\) قيمة تقريبية بس</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المقرر بيعرّف</span><div class=\"m\">\\(\\mathbb{N}=\\{0,1,2,3,\\dots\\}\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\sqrt[3]{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(0.317=\\frac{317}{1000}\\) و \\(-\\frac{3}{7}\\) كسور</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عادية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{16}=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">طبيعي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(\\sqrt[3]{2}\\) ما إله قيمة دقيقة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير عادي</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(]a,b]\\) <b>مفتوح من اليسار</b>: ما بيشمل \\(a\\) وبيشمل \\(b\\)، يعني \\(a\\lt x\\le b\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(a\\lt x\\lt b\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوس المعكوس يعني الطرف مو داخل</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(]a,b[=\\{x:\\ a\\lt x\\lt b\\}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,5]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ارسم المجالين على محور الأعداد</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الاجتماع = كل نقطة موجودة بواحد منهم على الأقل</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">من \\(-\\infty\\) لحد 5 (مع 5)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(]-\\infty,5]\\)</div></div><b>❌ انتبه:</b> \\(]-1,4[\\) هو التقاطع \\(B\\cap C\\)، مو الاجتماع.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]-1,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">التقاطع = الجزء المشترك بين المجالين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بيبلّش بعد \\(-1\\) (مفتوح) وبيخلص قبل 4 (مفتوح)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\([-2,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(A\\) بيبلّش من \\(-2\\) <b>مع</b> \\(-2\\) (مغلق)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(B\\) بيخلص قبل 4 (مفتوح)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المشترك</span><div class=\"m\">\\(-2\\le x\\lt 4\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\([0,6]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المشترك بيبلّش من 0 (مغلق بالمجال التاني)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">وبيخلص عند 6 (مغلق بالأول)</div></div><b>❌ انتبه:</b> \\([-4,8[\\) هو الاجتماع.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\([2,6]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المشترك من 2 (مغلق) لحد 6 (مغلق)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]-2,1[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المجالين متداخلين، فالاجتماع من أصغر بداية \\(-2\\) لأكبر نهاية 1</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الطرفين مفتوحين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(]-2,1[\\)</div></div><b>❌ انتبه:</b> \\(]-1,0[\\) هو التقاطع.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]-1,0[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الجزء المشترك بين \\(-1\\) و 0، والطرفين مفتوحين</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — الصحيح \\(-3\\lt x\\lt 0\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوسين معكوسين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الطرفين مفتوحين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(]-3,0[=\\{x:\\ -3\\lt x\\lt 0\\}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">وهالكتابة مو موجودة بين الخيارات الأربعة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">«غير ذلك»</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]-2,1]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\lt\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">قوس مفتوح عند</span><div class=\"m\">\\(-2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\le\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">قوس مغلق عند 1</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\([-5,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ge\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(-5\\) داخل المجال (مغلق)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">واللانهاية دايماً مفتوحة</div></div><b>❌ انتبه:</b> ما في قوس مغلق عند \\(\\infty\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: المركز 5 ونصف القطر 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المركز</span><div class=\"m\">\\(\\alpha=\\frac{a+b}{2}=\\frac{2+8}{2}=5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نصف القطر</span><div class=\"m\">\\(\\varepsilon=b-\\alpha=8-5=3\\)</div></div></div><b>❌ انتبه:</b> طول المجال 6، ونصف القطر نصّه.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(]a-3,a+3[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الجوار مجال <b>مفتوح</b> مركزه \\(a\\)</span><div class=\"m\">\\(N_a(\\varepsilon)=]a-\\varepsilon,a+\\varepsilon[\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(N_a(3)=]a-3,a+3[\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(|9|=9\\) و \\(|-9|=-(-9)=9\\)</div></div>",
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
   "\\(6\\)",
   "\\(\\pm5\\)",
   "\\(0\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(|x|=-x\\) إذا \\(x\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|-5|=-(-5)=5\\)</div></div><b>❌ انتبه:</b> القيمة المطلقة ما بتكون سالبة أبداً.<div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\sqrt{2}-1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt{2}\\approx1.41\\gt1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1-\\sqrt{2}\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">العدد سالب فمنضربه بـ\\(-1\\)</span><div class=\"m\">\\(-(1-\\sqrt{2})=\\sqrt{2}-1\\)</div></div></div><b>❌ انتبه:</b> \\(1-\\sqrt{2}\\) سالب، فما بيصير يكون قيمة مطلقة.",
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
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(|-6|=6\\) و \\(|-4|=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|6-4|=|2|=2\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{-5}{5}=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|-1|=1\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\pi-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\pi\\approx3.14\\gt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\pi-3\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">العدد موجب فبيضل متل ما هو</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — الناتج \\(-1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">من جوّا لبرّا</span><div class=\"m\">\\(|-1|=1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|1-1|=|0|=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-1-0=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو موجود بالخيارات</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(|-3|=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|-2\\cdot3|=|-6|=6\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-\\frac{1}{3}\\cdot(-15)=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(|5|=5\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي متراجحة المثلث</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">مثال المقرر</span><div class=\"m\">\\(|-8+3|=5\\le|-8|+|3|=11\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">مبرهنة (1-4) بالمقرر، ومعها</span><div class=\"m\">\\(\\left|\\frac{x}{y}\\right|=\\frac{|x|}{|y|}\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المساواة مو دايماً</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال: \\(|-8+3|=5\\) بينما \\(|-8|+|3|=11\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الصح</span><div class=\"m\">\\(|x+y|\\le|x|+|y|\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\([-3,3]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(|x|\\le c \\iff -c\\le x\\le c\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-3\\le x\\le3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\([-3,3]\\)</div></div><b>❌ انتبه:</b> \\(]-\\infty,-3]\\cup[3,\\infty[\\) هو حل \\(|x|\\ge3\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(2x-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x\\gt\\frac32\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x\\gt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x-3\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">العدد موجب فبيطلع متل ما هو</span><div class=\"m\">\\(2x-3\\)</div></div></div><b>❌ انتبه:</b> \\(3-2x\\) بتكون الجواب إذا \\(x\\lt\\frac32\\).",
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
   "\\(10\\)",
   "81",
   "\\(\\pm9\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة 9</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt{x^2}=|x|\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{(-9)^2}=|-9|=9\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a^4=a\\times a\\times a\\times a\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 72</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(2^3=8\\) و \\(3^2=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8\\times9=72\\)</div></div><b>❌ انتبه:</b> ما فينا نجمع الأسس إلا إذا الأساس نفسه.",
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
  "explanation": "<b>✅ الجواب الصحيح: -64</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوة بتنطبق على 2 بس (الإشارة برّا)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-(2^6)=-64\\)</div></div><b>❌ انتبه:</b> \\((-2)^6=64\\) لأن الإشارة جوّا القوس والقوة زوجية.",
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
  "explanation": "<b>✅ الجواب الصحيح: 64</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوة زوجية والإشارة جوّا القوس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الناتج موجب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^6=64\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: -125</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القوة فردية والعدد سالب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الإشارة بتضل سالبة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-5^3=-125\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 4</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{2^2}{5^2}\\cdot5^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الـ\\(5^2\\) بتختصر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^2=4\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">أي عدد (غير الصفر) أسه صفر = 1</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^{-1}=\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1\\cdot\\frac12=\\frac12\\)</div></div><b>❌ انتبه:</b> الأس صفر بيعطي 1 مو 0.",
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
   "\\(\\frac{9}{8}\\)",
   "0",
   "\\(-\\frac{1}{8}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(\\frac{1}{8}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3^0=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^{-3}=\\frac{1}{2^3}=\\frac18\\)</div></div><b>❌ انتبه:</b> الأس السالب بيقلب العدد، ما بيخليه سالب.<div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{9}{4}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الأس السالب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نقلب الكسر</span><div class=\"m\">\\(\\left(\\frac32\\right)^2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{9}{4}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(8y^6\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((a\\cdot b)^n=a^n\\cdot b^n\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^3\\cdot(y^2)^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((y^2)^3=y^{2\\cdot3}=y^6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8y^6\\)</div></div><b>❌ انتبه:</b> لازم ترفع الـ2 كمان للقوة 3، وأسس القوة على القوة بتنضرب مو بتنجمع.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(y^{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نفس الأساس بالضرب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نجمع الأسس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-2+7=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y^5\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{w}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-2-4+5=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(w^{-1}=\\frac1w\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{y^3}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y^0=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{y^7}{y^{10}}=y^{7-10}=y^{-3}=\\frac{1}{y^3}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{v^{10}}{u^{11}}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">البسط</span><div class=\"m\">\\(u^{-2}v^{4}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المقام</span><div class=\"m\">\\(u^{9}v^{-6}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(u^{-2-9}\\,v^{4-(-6)}=u^{-11}v^{10}=\\frac{v^{10}}{u^{11}}\\)</div></div><b>❌ انتبه:</b> طرح أس سالب = جمع: \\(4-(-6)=10\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{8n^2}{m^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(n^{4}\\cdot n^{-2}=n^{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(m^{-2}=\\frac{1}{m^2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{8n^2}{m^2}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(5^{2-3}=5^{-1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac15\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(5^{12}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قوة على قوة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نضرب الأسس</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3\\cdot4=12\\)</div></div><b>❌ انتبه:</b> الجمع \\(5^7\\) بيكون لما نضرب \\(5^3\\cdot5^4\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\sqrt[n]{0}=0\\) دايماً، مهما كان \\(n\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(10\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt{4\\cdot25}=\\sqrt{100}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الجذر التربيعي (الحسابي) حسب المقرر عدد <b>موجب</b></span><div class=\"m\">\\(\\sqrt{100}=10\\)</div></div></div><b>❌ انتبه:</b> بعض الملخصات كاتبة \\(\\pm10\\)، بس حسب المقرر \\(\\sqrt{9}=3\\) و \\(|x|=\\sqrt{x^2}\\) — الجذر الحسابي ما بيعطي قيمتين.",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(6\\sqrt[3]{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(16=8\\cdot2=2^3\\cdot2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt[3]{16}=\\sqrt[3]{8}\\cdot\\sqrt[3]{2}=2\\sqrt[3]{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3\\cdot2\\sqrt[3]{2}=6\\sqrt[3]{2}\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{\\sqrt{2}}{3}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\sqrt{18}=\\sqrt{9\\cdot2}=3\\sqrt{2}\\) و \\(\\sqrt{81}=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{3\\sqrt2}{9}=\\frac{\\sqrt2}{3}\\)</div></div>",
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
   "\\(- \\frac{3 \\sqrt{3}}{2}\\)",
   "\\(\\frac{9}{2}\\)",
   "\\(\\frac{3\\sqrt{3}}{4}\\)",
   "\\(\\frac{27}{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(\\frac{3\\sqrt{3}}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt{\\frac{27}{4}}=\\frac{\\sqrt{27}}{\\sqrt4}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{27}=\\sqrt{9\\cdot3}=3\\sqrt3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{3\\sqrt3}{2}\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(3\\sqrt{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt{x}\\cdot\\sqrt{y}=\\sqrt{xy}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{45}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{45}=\\sqrt{9\\cdot5}=3\\sqrt5\\)</div></div><b>❌ انتبه:</b> الجذور ما بتنجمع جوّا: \\(\\sqrt3\\cdot\\sqrt{15}\\ne\\sqrt{18}\\).",
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
  "explanation": "<b>✅ الجواب الصحيح: 4</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt[3]{2\\cdot32}=\\sqrt[3]{64}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(64=4^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الناتج 4</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{4}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt[4]{\\frac{1}{4\\cdot64}}=\\sqrt[4]{\\frac{1}{256}}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(256=4^4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac14\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((a+b)(a-b)=a^2-b^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(13-7=6\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((-2)^3=-8\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">إذا الدليل زوجي، العدد السالب <b>ما إله جذر حقيقي</b></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">و \\((-2)^2=4\\) مو \\(-4\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(5^{3/4}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt[n]{a^m}=a^{m/n}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(m=3,\\ n=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5^{3/4}\\)</div></div><b>❌ انتبه:</b> أس ما جوّا الجذر بيصير بالبسط، ودليل الجذر بالمقام.",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">لأن \\(a^x\\gt0\\) دايماً، فـ\\(\\log_a b\\) معرّف بس لـ\\(b\\gt0\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">لأن</span><div class=\"m\">\\(a^0=1\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\log_a x+\\log_a y+\\log_a z\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">لوغاريتم الجداء = مجموع اللوغاريتمات (خاصة 2 بالمقرر)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{n}\\log_a x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sqrt[n]{x}=x^{1/n}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log_a x^{1/n}=\\frac1n\\log_a x\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{\\log_b a}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">خاصة 7 بالمقرر</span><div class=\"m\">\\(\\log_a b=\\frac{1}{\\log_b a}\\)</div></div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\log_2 8=x \\iff 2^x=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2^3=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=3\\)</div></div>",
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
   "\\(-3\\)",
   "100",
   "10",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\log x\\) بدون أساس = أساس 10</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(10^3=1000\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">3</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
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
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{3}{2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\log_{a^m}x^n=\\frac{n}{m}\\log_a x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log_{2^2}2^3=\\frac32\\log_2 2=\\frac32\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\log5=\\log5^2=\\log25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log25+\\log4=\\log100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log100=2\\)</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln e^{3}=3\\ln e\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\ln e=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">3</div></div>",
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
  "explanation": "<b>✅ الجواب الصحيح: 8 سنوات</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(S_n=S(1+i)^n\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(512(1.03)^n=650\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((1.03)^n=\\frac{650}{512}=\\frac{325}{256}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">ناخد لوغاريتم الطرفين</span><div class=\"m\">\\(n=\\frac{\\log(325/256)}{\\log 1.03}\\approx8\\)</div></div></div><b>❌ انتبه:</b> لا تحسب \\(n=\\frac{650-512}{512\\times0.03}\\) — هي فائدة مركّبة مو بسيطة.",
  "ref": {
   "url": "chapters/chapter-1-lesson.html#logs",
   "label": "اللوغاريتمات"
  }
 }
];
