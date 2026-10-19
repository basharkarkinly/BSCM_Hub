/* بنك أسئلة الفصل 3 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH3_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب طرفي المتراجحة بعدد حقيقي موجب تماماً لا يغير اتجاه المتراجحة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\forall c\\gt0:\\ ac\\lt bc\\iff a\\lt b\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب طرفي المتراجحة بعدد حقيقي (أي عدد) لا يغير اتجاه المتراجحة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إذا كان العدد <b>سالب</b> بيتغير الاتجاه</span><div class=\"m\">\\(\\forall c\\lt0:\\ ac\\lt bc\\iff a\\gt b\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">مثال</span><div class=\"m\">\\(2\\lt3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نضرب بـ\\(-1\\)</span><div class=\"m\">\\(-2\\gt-3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "قلب طرفي المتراجحة (إذا كان الطرفان من نفس الإشارة) يغير اتجاه المتراجحة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">إذا \\(0\\lt a\\lt b\\) فإن \\(\\frac1b\\lt\\frac1a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">مثال</span><div class=\"m\">\\(2\\lt4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac14\\lt\\frac12\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "جمع متراجحتين من نفس الاتجاه يعطي متراجحة جديدة لها نفس الاتجاه.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a\\lt b,\\ c\\lt d\\ \\Rightarrow\\ a+c\\lt b+d\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب متراجحتين من نفس الاتجاه يعطي دائماً متراجحة جديدة لها نفس الاتجاه.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">هالخاصة بالمقرر مشروطة بالأعداد الموجبة</span><div class=\"m\">\\(0\\lt a\\lt b,\\ 0\\lt c\\lt d\\Rightarrow ac\\lt bd\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مثال مضاد: \\(-3\\lt-1\\) و \\(-2\\lt1\\) لكن \\(6\\gt-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حل متراجحة يعني إيجاد قيم متغيراتها التي لا تحقق المتراجحة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">حل المتراجحة = إيجاد قيم المتغيرات اللي <b>بتحققها</b></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن ضرب طرفي المتراجحة بعدد حقيقي \\(c\\) يؤدي إلى:",
  "options": [
   "تغيير اتجاه المتراجحة دائماً",
   "لا يغير اتجاه المتراجحة دائماً",
   "يتعلق بإشارة العدد \\(c\\)",
   "حذف المتراجحة",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: يتعلق بإشارة العدد \\(c\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(c\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نفس الاتجاه</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(c\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بيتغير الاتجاه</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن إضافة عدد حقيقي \\(c\\) إلى طرفي المتراجحة يؤدي إلى:",
  "options": [
   "تغيير اتجاه المتراجحة",
   "لا يغير اتجاه المتراجحة",
   "يتعلق بإشارة العدد \\(c\\)",
   "ضرب المتراجحة بـ\\(c\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا يغير اتجاه المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a\\lt b\\iff a+c\\lt b+c\\) مهما كانت إشارة \\(c\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(a\\ne0\\) فإن \\(a^2\\gt0\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">خاصة (i) بالمقرر: مربع أي عدد غير الصفر موجب</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(b\\gt a\\gt0\\) فإن \\(a^2\\lt b^2\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">خاصة (n) بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#props",
   "label": "المتراجحات وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المتراجحة \\(2x+3\\lt9-x\\) (مثال المقرر 1-3) هو:",
  "options": [
   "\\(x\\gt2\\)",
   "\\(x\\lt2\\)",
   "\\(x\\lt6\\)",
   "\\(x\\lt4\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x\\lt2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x+x\\lt9-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3x\\lt6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\in]-\\infty,2[\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
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
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حل المتراجحة \\(3x-12\\lt0\\) هو \\(x\\gt4\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3x\\lt12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x\\lt4\\) (قسمنا على 3 الموجب فالاتجاه ما تغيّر)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المتراجحة \\(\\frac{x+3}{5}+1\\gt\\frac{2x-5}{3}+x\\) (مثال المقرر 3-3) هو:",
  "options": [
   "\\(x\\gt\\frac{49}{22}\\)",
   "\\(x\\lt\\frac{49}{22}\\)",
   "\\(x\\lt\\frac{22}{49}\\)",
   "\\(x\\lt2\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x\\lt\\frac{49}{22}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نوحّد المقامات (15)</span><div class=\"m\">\\(3x+9+15\\gt10x-25+15x\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(49\\gt22x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt\\frac{49}{22}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(x^2\\gt2x+3\\) (مثال المقرر 2-3) هي:",
  "options": [
   "\\(]-1,3[\\)",
   "\\(]-\\infty,-1[\\,\\cup\\,]3,\\infty[\\)",
   "\\(]-\\infty,-3[\\,\\cup\\,]1,\\infty[\\)",
   "\\(]3,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,-1[\\,\\cup\\,]3,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2-2x-3\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x+1)(x-3)\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجذور \\(-1\\) و \\(3\\)، و\\(a=1\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">موجب برّا الجذرين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x\\lt-1\\) أو \\(x\\gt3\\)</div></div><b>❌ انتبه:</b> \\(]-1,3[\\) هو حل \\(x^2-2x-3\\lt0\\) (بين الجذرين).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(x^2\\gt3x+4\\) (مثال المقرر 11-3) هي:",
  "options": [
   "\\(]-1,4[\\)",
   "\\(]-\\infty,-4[\\,\\cup\\,]1,\\infty[\\)",
   "\\(]-\\infty,-1[\\,\\cup\\,]4,\\infty[\\)",
   "\\(]4,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,-1[\\,\\cup\\,]4,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2-3x-4\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\Delta=25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_1=-1,\\ x_2=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">برّا الجذرين (إشارة \\(a\\) موجبة)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(3x^2-5x+2\\gt0\\) هي:",
  "options": [
   "\\(]\\frac23,1[\\)",
   "\\(]-\\infty,\\frac23[\\,\\cup\\,]1,\\infty[\\)",
   "\\(]-\\infty,1[\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,\\frac23[\\,\\cup\\,]1,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=25-24=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{5\\pm1}{6}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(1\\) و \\(\\frac23\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=3\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">موجب برّا الجذرين</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(x^2+x+1\\gt0\\) هي:",
  "options": [
   "\\(\\varnothing\\)",
   "\\(]-1,0[\\)",
   "\\(]0,\\infty[\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=1-4=-3\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما في جذور</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الإشارة دايماً متل</span><div class=\"m\">\\(a=1\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">محققة لكل</span><div class=\"m\">\\(x\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المتراجحة \\(x^2\\gt0\\) هي:",
  "options": [
   "مجموعة الأعداد الحقيقية عدا الصفر",
   "\\(x=0\\) و \\(x\\gt1\\)",
   "\\(x=0\\)",
   "\\(x\\gt0\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: مجموعة الأعداد الحقيقية عدا الصفر</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(x^2\\ge0\\) دايماً، وبيساوي 0 بس عند \\(x=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\mathbb{R}\\setminus\\{0\\}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتراجحة \\(2x^2+5\\gt0\\) هي محققة دوماً.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x^2\\ge0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x^2+5\\ge5\\gt0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحة \\(2x^2+3x-7\\gt0\\)، فإن القيمة \\(x=2\\):",
  "options": [
   "تحقق المتراجحة",
   "لا تحقق المتراجحة",
   "حسب إشارة المميز \\(\\Delta\\)",
   "تجعل الطرف الأيسر صفراً",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: تحقق المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نعوّض</span><div class=\"m\">\\(2(4)+3(2)-7=8+6-7=7\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(7\\gt0\\) ✓</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحة \\(x^2+x\\gt20\\)، فإن القيمة \\(x=4\\):",
  "options": [
   "تحقق المتراجحة",
   "لا تحقق المتراجحة",
   "حسب إشارة المميز \\(\\Delta\\)",
   "تحققها بشرط \\(x\\gt0\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا تحقق المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(16+4=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(20\\gt20\\) ✗ (المتراجحة تامة)</div></div><b>❌ انتبه:</b> \\(\\gt\\) تامة: المساواة ما بتحقق.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#deg1",
   "label": "المتراجحات ذات المجهول الواحد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المتراجحة \\(5x+1\\lt2x-3\\lt7x+2\\) (مثال المقرر 4-3) هو:",
  "options": [
   "\\(]-1,-\\frac43[\\)",
   "\\(]-1,\\infty[\\)",
   "\\(]-\\infty,-\\frac43[\\)",
   "مستحيلة الحل \\(\\varnothing\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: مستحيلة الحل \\(\\varnothing\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x-3\\lt7x+2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\gt-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(I_1=]-1,\\infty[\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5x+1\\lt2x-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt-\\frac43\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(I_2=]-\\infty,-\\frac43[\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(I_1\\cap I_2=\\varnothing\\) لأن \\(-\\frac43\\lt-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المتراجحة \\(-2+3x\\lt7x\\lt x+2\\) (مثال المقرر 5-3) هو:",
  "options": [
   "\\(]-\\frac12,\\frac13[\\)",
   "\\(]-\\infty,\\frac13[\\)",
   "\\(]-\\frac12,\\infty[\\)",
   "\\(\\varnothing\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\frac12,\\frac13[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-2+3x\\lt7x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4x\\gt-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\gt-\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(7x\\lt x+2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(6x\\lt2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt\\frac13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">التقاطع</span><div class=\"m\">\\(]-\\frac12,\\frac13[\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل المتراجحة \\(-1\\lt2x+1\\lt5\\) هو:",
  "options": [
   "\\(]-1,2[\\)",
   "\\(]0,3[\\)",
   "\\(]-2,4[\\)",
   "\\(]-1,3[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-1,2[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نطرح 1 من الأطراف الثلاثة</span><div class=\"m\">\\(-2\\lt2x\\lt4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نقسم على 2</span><div class=\"m\">\\(-1\\lt x\\lt2\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتراجحة المضاعفة \\(a\\lt f(x)\\lt b\\) تكافئ \\(a\\lt f(x)\\) و \\(f(x)\\lt b\\)، وحلها \\(I=I_1\\cap I_2\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">وإذا \\(I_1\\cap I_2=\\varnothing\\) فهي مستحيلة الحل</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا جملة المتراجحتين \\(x-1\\gt0\\) و \\(2x\\lt4\\)، فإن القيمة \\(x=-2\\):",
  "options": [
   "حل مشترك للمتراجحتين",
   "لا تحقق المتراجحتين معاً",
   "حسب اتجاه المتراجحتين",
   "تحقق الأولى فقط",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا تحقق المتراجحتين معاً</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-2-1=-3\\gt0\\) ✗</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2(-2)=-4\\lt4\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بتحقق الاتنين سوا</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا جملة المتراجحتين \\(x^2-9\\ge0\\) و \\(x-3\\lt0\\)، فإن القيمة \\(x=6\\):",
  "options": [
   "حل مشترك للمتراجحتين",
   "لا تحقق المتراجحتين معاً",
   "حسب اتجاه المتراجحتين",
   "تحقق الثانية فقط",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا تحقق المتراجحتين معاً</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(36-9=27\\ge0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(6-3=3\\lt0\\) ✗</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بتحقق الاتنين سوا</div></div><b>❌ انتبه:</b> ملف «أسئلة الفصول» معلّم «حل مشترك»، بس التعويض بيبيّن إنو المتراجحة التانية مو محققة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#double",
   "label": "المتراجحات المضاعفة (المزدوجة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\((x+3)(2x^2-5x-3)\\gt0\\) (مثال المقرر 7-3) هي:",
  "options": [
   "\\(]-3,-\\frac12[\\,\\cup\\,]3,\\infty[\\)",
   "\\(]-\\infty,-3[\\,\\cup\\,]-\\frac12,3[\\)",
   "\\(]3,\\infty[\\)",
   "\\(]-3,3[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-3,-\\frac12[\\,\\cup\\,]3,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x^2-5x-3=(2x+1)(x-3)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الجذور</span><div class=\"m\">\\(-3,\\ -\\frac12,\\ 3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">جدول الإشارة: موجب على \\(]-3,-\\frac12[\\) و \\(]3,\\infty[\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(\\frac{3x^2+x-2}{x^2+3x-4}\\gt0\\) (مثال المقرر 8-3) هي:",
  "options": [
   "\\(]-\\infty,-4[\\,\\cup\\,]-1,\\frac23[\\,\\cup\\,]1,\\infty[\\)",
   "\\(]-4,-1[\\,\\cup\\,]\\frac23,1[\\)",
   "\\(]-1,\\frac23[\\)",
   "\\(]1,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,-4[\\,\\cup\\,]-1,\\frac23[\\,\\cup\\,]1,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\frac{(3x-2)(x+1)}{(x+4)(x-1)}\\gt0\\)، الشرط \\(x\\ne1,\\ x\\ne-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الجذور بالترتيب</span><div class=\"m\">\\(-4,\\ -1,\\ \\frac23,\\ 1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الإشارة بتتناوب</span><div class=\"m\">\\(+\\ -\\ +\\ -\\ +\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المتراجحة \\(\\frac{x^2-3x+2}{x^2+3x+2}\\gt0\\) هي:",
  "options": [
   "\\(]-\\infty,-2[\\,\\cup\\,]-1,1[\\,\\cup\\,]2,\\infty[\\)",
   "\\(]-2,-1[\\,\\cup\\,]1,2[\\)",
   "\\(]1,2[\\)",
   "\\(]-\\infty,-2[\\,\\cup\\,]2,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,-2[\\,\\cup\\,]-1,1[\\,\\cup\\,]2,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\frac{(x-1)(x-2)}{(x+1)(x+2)}\\gt0\\)، الشرط \\(x\\ne-1,-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">النقاط</span><div class=\"m\">\\(-2,\\ -1,\\ 1,\\ 2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الإشارة</span><div class=\"m\">\\(+\\ -\\ +\\ -\\ +\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المتراجحة \\(\\frac{2x+3}{x-1}\\lt2\\) (مثال المقرر 12-3) هو:",
  "options": [
   "\\(]1,\\infty[\\)",
   "\\(]-\\infty,1[\\)",
   "\\(]-\\frac32,1[\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,1[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{2x+3}{x-1}-2\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{2x+3-2x+2}{x-1}\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{5}{x-1}\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">البسط موجب، فلازم</span><div class=\"m\">\\(x-1\\lt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt1\\)</div></div><b>❌ انتبه:</b> ما فينا نضرب بـ\\((x-1)\\) مباشرة لأن إشارته مجهولة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا المتراجحة \\(\\frac{x^2-9x}{2x+1}\\lt0\\)، فإن القيمة \\(x=1\\):",
  "options": [
   "تحقق المتراجحة",
   "لا تحقق المتراجحة",
   "حسب إشارة مميز المقام",
   "تجعل المقام صفراً",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: تحقق المتراجحة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">البسط: \\(1-9=-8\\) · المقام: \\(3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{-8}{3}\\lt0\\) ✓</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في المتراجحة الكسرية ممكن نتخلص من المقام بضرب الطرفين بمربع المقام لأنه موجب فلا يتغير الاتجاه.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر بهامش المتراجحات الكسرية</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#product",
   "label": "المتراجحات ذات الجداء والكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لإيجاد منطقة حل \\(ax+by+c\\gt0\\) نرسم المستقيم \\(ax+by+c=0\\) ثم نعوّض نقطة لا تقع عليه لنعرف أي نصف مستوي يحقق المتراجحة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي طريقة القوة التحليلية لنقطة بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "القوة التحليلية للنقطة \\(M_1(7,3)\\) بالنسبة للمستقيم \\(5x-4y+3=0\\) (مثال المقرر 18-3) هي:",
  "options": [
   "26",
   "-7",
   "0",
   "50",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 26</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(A_0=ax_0+by_0+c\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5(7)-4(3)+3=35-12+3=26\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي نقطة تقع في منطقة حل المتراجحة \\(2x+3y-1\\gt0\\)؟",
  "options": [
   "\\((0,0)\\)",
   "\\((2,3)\\)",
   "\\((-1,0)\\)",
   "\\((0,-1)\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\((2,3)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((2,3)\\): \\(4+9-1=12\\gt0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((0,0)\\): \\(-1\\) ✗ · \\((-1,0)\\): \\(-3\\) ✗ · \\((0,-1)\\): \\(-4\\) ✗</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "منطقة حل المتراجحة \\(3x-5y+6\\gt0\\) (مثال المقرر 13-3):",
  "options": [
   "تحوي مبدأ الإحداثيات \\(O(0,0)\\)",
   "لا تحوي مبدأ الإحداثيات",
   "هي المستقيم نفسه فقط",
   "فارغة",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: تحوي مبدأ الإحداثيات \\(O(0,0)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نعوّض \\(O(0,0)\\)</span><div class=\"m\">\\(0-0+6=6\\gt0\\) ✓</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">فالنصف اللي فيه المبدأ هو منطقة الحل</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "النقطة \\((2,1)\\) تقع في منطقة حل المتراجحة \\(x-2y+5\\lt0\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2-2(1)+5=5\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بتحقق \\(\\lt0\\) (مثال المقرر 16-3)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "طريقة الشعاع العمودي على مستقيم لا تطبق إلا على المتراجحات الخطية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لإيجاد منطقة الحل المشترك لجملة متراجحات خطية بمجهولين نحدد منطقة حل كل متراجحة ثم نأخذ المنطقة المشتركة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثال: جملة \\(x\\le4,\\ y\\le3,\\ x+2y\\le8\\) بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#twovar",
   "label": "المتراجحات بمجهولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(\\sqrt{x^2-3x}=2\\) هي:",
  "options": [
   "\\(\\{4\\}\\)",
   "\\(\\{-1,4\\}\\)",
   "\\(\\{1,-4\\}\\)",
   "\\(\\{4,-4\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-1,4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نربّع</span><div class=\"m\">\\(x^2-3x=4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-3x-4=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-4)(x+1)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق \\(x=4\\)</span><div class=\"m\">\\(\\sqrt{16-12}=2\\) ✓</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق \\(x=-1\\)</span><div class=\"m\">\\(\\sqrt{1+3}=\\sqrt4=2\\) ✓</div></div></div><b>❌ انتبه:</b> بعض الحلول رافضة \\(x=-1\\) بغلطة تعويض: \\((-1)^2-3(-1)=1+3=4\\) مو \\(1-3\\).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#radical",
   "label": "المعادلات الجذرية (الصماء)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\sqrt{x-1}-\\sqrt{2-x}=1\\) هو:",
  "options": [
   "\\(x=1\\)",
   "\\(x=2\\)",
   "\\(x=1\\) أو \\(x=2\\)",
   "\\(x=\\frac32\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نربّع ونبسّط</span><div class=\"m\">\\(4(x-1)(2-x)=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=1\\) أو \\(x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تحقق \\(x=1\\): \\(0-1=-1\\ne1\\) ✗ مرفوض</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق \\(x=2\\)</span><div class=\"m\">\\(1-0=1\\) ✓</div></div></div><b>❌ انتبه:</b> التربيع ممكن يضيف جذور غريبة، فلازم نتحقق بالتعويض بالمعادلة الأصلية.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#radical",
   "label": "المعادلات الجذرية (الصماء)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\sqrt{3x}-\\sqrt{3x-5}=1\\) (مثال المقرر 26-3) هو:",
  "options": [
   "\\(x=3\\)",
   "\\(x=\\frac53\\)",
   "\\(x=9\\)",
   "\\(x=1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نربّع</span><div class=\"m\">\\(3x+3x-5-2\\sqrt{3x(3x-5)}=1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt{3x(3x-5)}=3x-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نربّع مرة تانية ونبسّط</span><div class=\"m\">\\(12x=36\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق</span><div class=\"m\">\\(\\sqrt9-\\sqrt4=3-2=1\\) ✓</div></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#radical",
   "label": "المعادلات الجذرية (الصماء)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(\\sqrt{x}-\\sqrt{x+3}=\\sqrt{x-5}\\) (مثال المقرر 25-3) هي:",
  "options": [
   "\\(x=\\frac{16}{3}\\)",
   "\\(x=-4\\)",
   "\\(x=\\frac{16}{3}\\) أو \\(x=-4\\)",
   "\\(x=5\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — ما إلها حل</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بعد التربيع</span><div class=\"m\">\\(3x^2-4x-64=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=\\frac{16}{3}\\) أو \\(x=-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">مجموعة التعريف</span><div class=\"m\">\\(x\\ge5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(-4\\) مرفوض</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=\\frac{16}{3}\\): الطرف الأيسر سالب والأيمن موجب</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مرفوض</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#radical",
   "label": "المعادلات الجذرية (الصماء)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ليست جميع القيم الناتجة عن حل المعادلة الصماء حلولاً لها، ويجب التحقق من الحلول بالتعويض في المعادلة الأصلية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة هامة بالمقرر: التربيع ممكن يغيّر الإشارات</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#radical",
   "label": "المعادلات الجذرية (الصماء)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|2x-6|=2\\) هو:",
  "options": [
   "\\(\\{4,2\\}\\)",
   "\\(\\{4\\}\\)",
   "\\(\\{-4,-2\\}\\)",
   "\\(\\{3,1\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{4,2\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(2x-6=2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(2x-6=-2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المعادلة \\(|5x+7|=|3x-5|\\) هي:",
  "options": [
   "\\(\\{1,\\frac14\\}\\)",
   "\\(\\{6,\\frac14\\}\\)",
   "\\(\\{-6,-\\frac14\\}\\)",
   "\\(\\{3,2\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-6,-\\frac14\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(5x+7=3x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x=-12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(5x+7=-(3x-5)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8x=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac14\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|9x-7|=|2x-5|\\) (مثال المقرر 27-3) هو:",
  "options": [
   "\\(\\{\\frac27,\\frac{12}{11}\\}\\)",
   "\\(\\{-\\frac27,\\frac{12}{11}\\}\\)",
   "\\(\\{\\frac27\\}\\)",
   "\\(\\{\\frac{7}{2},\\frac{11}{12}\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{\\frac27,\\frac{12}{11}\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(9x-7=2x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(7x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac27\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(9x-7=5-2x\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(11x=12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{12}{11}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|4x+7|=|3x+5|\\) (مثال المقرر 28-3) هو:",
  "options": [
   "\\(\\{-2,-\\frac{12}{7}\\}\\)",
   "\\(\\{2,\\frac{12}{7}\\}\\)",
   "\\(\\{-2\\}\\)",
   "\\(\\{-12,7\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-2,-\\frac{12}{7}\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(4x+7=3x+5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(4x+7=-3x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(7x=-12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac{12}{7}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|4x+7|=|5x-5|\\) (مثال المقرر 29-3) هو:",
  "options": [
   "\\(\\{12,-\\frac29\\}\\)",
   "\\(\\{-12,\\frac29\\}\\)",
   "\\(\\{12\\}\\)",
   "\\(\\{2,-\\frac{12}{9}\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{12,-\\frac29\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(4x+7=5x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(4x+7=-5x+5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(9x=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac29\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|3x+1|=|5x+7|\\) (نموذج امتحاني) هو:",
  "options": [
   "\\(\\{-3,-1\\}\\)",
   "\\(\\{3,1\\}\\)",
   "\\(\\{-3\\}\\)",
   "\\(\\{-4,1\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-3,-1\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(3x+1=5x+7\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-2x=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(3x+1=-5x-7\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8x=-8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|3-9x|=|2x-5|\\) هو:",
  "options": [
   "\\(\\{\\frac{8}{11},-\\frac27\\}\\)",
   "\\(\\{-\\frac{8}{11},\\frac27\\}\\)",
   "\\(\\{\\frac{8}{11}\\}\\)",
   "\\(\\{\\frac{2}{7},1\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{\\frac{8}{11},-\\frac27\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(3-9x=2x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(11x=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac8{11}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(3-9x=-(2x-5)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-7x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac27\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|2x+7|=|5x-1|\\) هو:",
  "options": [
   "\\(\\{\\frac83,-\\frac67\\}\\)",
   "\\(\\{-\\frac83,\\frac67\\}\\)",
   "\\(\\{2,-1\\}\\)",
   "\\(\\{\\frac83\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{\\frac83,-\\frac67\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(2x+7=5x-1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3x=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac83\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(2x+7=-5x+1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(7x=-6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac67\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|3x-2|=5\\) هو:",
  "options": [
   "\\(\\{\\frac73,-1\\}\\)",
   "\\(\\{-\\frac73,1\\}\\)",
   "\\(\\{\\frac73\\}\\)",
   "\\(\\{1,-1\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{\\frac73,-1\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(3x-2=5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac73\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(3x-2=-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|5x+4|=10\\) هو:",
  "options": [
   "\\(\\{\\frac65,-\\frac{14}{5}\\}\\)",
   "\\(\\{2,-2\\}\\)",
   "\\(\\{\\frac65\\}\\)",
   "\\(\\{-\\frac65,\\frac{14}{5}\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{\\frac65,-\\frac{14}{5}\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(5x+4=10\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac65\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(5x+4=-10\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac{14}{5}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(|4x-3|=|2x+5|\\) هو:",
  "options": [
   "\\(\\{4,-\\frac13\\}\\)",
   "\\(\\{-4,\\frac13\\}\\)",
   "\\(\\{4\\}\\)",
   "\\(\\{1,-4\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{4,-\\frac13\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">إما</span><div class=\"m\">\\(4x-3=2x+5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">أو</span><div class=\"m\">\\(4x-3=-2x-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(6x=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac13\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "للمعادلة \\(|x-2|=-3\\) حلّان هما \\(x=-1\\) و \\(x=5\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القيمة المطلقة ما بتساوي عدد سالب أبداً</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><b>ما إلها حل</b></div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#absq",
   "label": "معادلات القيمة المطلقة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{e^{5x-3}}{e^{2x+1}}=1\\) (مثال المقرر 30-3) هو:",
  "options": [
   "\\(x=\\frac43\\)",
   "\\(x=\\frac34\\)",
   "\\(x=4\\)",
   "\\(x=-\\frac43\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac43\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(e^{5x-3}=e^{2x+1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الأسس متساوية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5x-3=2x+1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3x=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac43\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{2^{4x+2}}{8^{3x+4}}=1\\) (مثال المقرر 31-3) هو:",
  "options": [
   "\\(x=2\\)",
   "\\(x=-2\\)",
   "\\(x=-\\frac{10}{3}\\)",
   "\\(x=\\frac12\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(8=2^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8^{3x+4}=2^{9x+12}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4x+2=9x+12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-5x=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-2\\)</div></div><b>❌ انتبه:</b> لازم نوحّد الأساس أول: ما فينا نساوي \\(4x+2=3x+4\\).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{4^{4x+6}}{2^{6x+4}}=1\\) (مثال المقرر 32-3) هو:",
  "options": [
   "\\(x=4\\)",
   "\\(x=-4\\)",
   "\\(x=-1\\)",
   "\\(x=\\frac{1}{4}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4^{4x+6}=2^{8x+12}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(8x+12=6x+4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x=-8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-4\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{e^{2x-3}}{e^{x+1}}=1\\) هو:",
  "options": [
   "\\(x=4\\)",
   "\\(x=-4\\)",
   "\\(x=2\\)",
   "\\(x=\\frac23\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2x-3=x+1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=4\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{e^{3x-2}}{e^{x+5}}=1\\) هو:",
  "options": [
   "\\(x=\\frac72\\)",
   "\\(x=\\frac27\\)",
   "\\(x=3\\)",
   "\\(x=-\\frac32\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac72\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3x-2=x+5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x=7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac72\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{3^{4x+3}}{9^{x+4}}=1\\) (نموذج امتحاني) هو:",
  "options": [
   "\\(x=\\frac52\\)",
   "\\(x=\\frac12\\)",
   "\\(x=-\\frac52\\)",
   "\\(x=5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac52\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(9^{x+4}=3^{2x+8}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4x+3=2x+8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac52\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\dfrac{5^{3x-4}}{125^{2-x}}=1\\) هو:",
  "options": [
   "\\(x=\\frac53\\)",
   "\\(x=\\frac35\\)",
   "\\(x=\\frac{\\ln(12\\cdot5^6)}{4\\ln5}\\)",
   "\\(x=2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac53\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(125=5^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(125^{2-x}=5^{6-3x}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3x-4=6-3x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(6x=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac53\\)</div></div><b>❌ انتبه:</b> بعض الحلول المكتوبة قرأت 125 كأنها \\(12\\cdot5\\) وطلّعت جواب لوغاريتمي — المقام \\(125^{2-x}\\).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المعادلة \\(e^{2x}-5e^x+4=0\\) هي:",
  "options": [
   "\\(x=0\\) أو \\(x=\\ln4\\)",
   "\\(x=1\\) أو \\(x=4\\)",
   "\\(x=\\ln4\\) فقط",
   "\\(x=0\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=0\\) أو \\(x=\\ln4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نفرض \\(t=e^x\\gt0\\)</span><div class=\"m\">\\(t^2-5t+4=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((t-1)(t-4)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(t=1\\) أو \\(t=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(e^x=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=0\\) · \\(e^x=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\ln4\\)</div></div><b>❌ انتبه:</b> \\(t=1,4\\) هي قيم \\(e^x\\) مو قيم \\(x\\).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(e^{2x}-2e^{-x}-3=0\\) هو:",
  "options": [
   "\\(x=\\ln2\\)",
   "\\(x=2\\)",
   "\\(x=\\ln2\\) أو \\(x=0\\)",
   "\\(x=-1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\ln2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نضرب بـ\\(e^x\\)</span><div class=\"m\">\\(e^{3x}-3e^x-2=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(t^3-3t-2=0\\) حيث \\(t=e^x\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((t+1)^2(t-2)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(t=-1\\) مرفوض (\\(e^x\\gt0\\))</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(t=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(e^x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\ln2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#expq",
   "label": "المعادلات الأسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\log x-\\log3=\\log5\\) (مثال المقرر 33-3) هو:",
  "options": [
   "\\(x=15\\)",
   "\\(x=8\\)",
   "\\(x=\\frac53\\)",
   "\\(x=2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=15\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log x=\\log3+\\log5=\\log15\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=15\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(2\\log x=\\log(7x+8)\\) (مثال المقرر 34-3) هو:",
  "options": [
   "\\(x=8\\)",
   "\\(x=-1\\)",
   "\\(x=8\\) أو \\(x=-1\\)",
   "\\(x=7\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=8\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log x^2=\\log(7x+8)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-7x-8=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-8)(x+1)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=8\\) مقبول · \\(x=-1\\) مرفوض</div></div><b>❌ انتبه:</b> ما في لوغاريتم لعدد سالب، فلازم ترفض \\(x=-1\\).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(4\\log\\sqrt{x}=\\log(5x+6)\\) (مثال المقرر 35-3) هو:",
  "options": [
   "\\(x=6\\)",
   "\\(x=-1\\)",
   "\\(x=6\\) أو \\(x=-1\\)",
   "\\(x=3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=6\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4\\log x^{1/2}=\\log x^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2=5x+6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-5x-6=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=6\\) مقبول، \\(x=-1\\) مرفوض</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\log x-1=\\log2\\) (الأساس 10) هو:",
  "options": [
   "\\(x=20\\)",
   "\\(x=3\\)",
   "\\(x=12\\)",
   "\\(x=2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=20\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(1=\\log10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\log x=\\log10+\\log2=\\log20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=20\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(2\\log x=\\log(2x+3)\\) هو:",
  "options": [
   "\\(x=3\\)",
   "\\(x=-1\\)",
   "\\(x=3\\) أو \\(x=-1\\)",
   "\\(x=1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2=2x+3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-2x-3=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=3\\) أو \\(x=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=-1\\) مرفوض (الشرط \\(x\\gt0\\))</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(\\ln(-3x)=\\ln(x^2-4)\\) هو:",
  "options": [
   "\\(x=1\\)",
   "\\(x=-4\\)",
   "\\(x=1\\) أو \\(x=-4\\)",
   "\\(x=4\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(-3x=x^2-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2+3x-4=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-1)(x+4)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=1\\): \\(\\ln(-3)\\) غير معرّف</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مرفوض</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-4\\): \\(\\ln12=\\ln12\\) ✓</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل المعادلة \\(2\\ln x=\\ln(x+4)+\\ln(2x)\\) هو:",
  "options": [
   "\\(x=0\\)",
   "\\(x=-8\\)",
   "\\(x=0\\) أو \\(x=-8\\)",
   "\\(x=8\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — ما إلها حل</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln x^2=\\ln(2x(x+4))\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2=2x^2+8x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x(x+8)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=0\\) و \\(x=-8\\) الاتنين مرفوضين (\\(\\ln\\) بدها \\(x\\gt0\\))</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المعادلة ما إلها حل</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إن مجموعة حلول المعادلة \\(4\\log\\sqrt{x}=\\log(5x-4)\\) هي (نموذج امتحاني):",
  "options": [
   "\\(\\{-1,-4\\}\\)",
   "\\(\\{1,4\\}\\)",
   "\\(\\{4,6\\}\\)",
   "\\(\\{4,-6\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{1,4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\log x^2=\\log(5x-4)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-5x+4=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-1)(x-4)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=1\\) و \\(x=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الاتنين موجبين و</span><div class=\"m\">\\(5x-4\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مقبولين</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "قبل حل المعادلة اللوغاريتمية نحدد مجموعة الحل بحيث تكون مضامين اللوغاريتمات موجبة تماماً.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">مثال</span><div class=\"m\">\\(2\\log x=\\log(7x+8)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x\\gt0\\) و \\(7x+8\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\in]0,\\infty[\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#logq",
   "label": "المعادلات اللوغاريتمية"
  }
 }
];
