/* بنك أسئلة الفصل 8 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH8_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "التابع \\(f:X\\to Y\\) قانون يربط كل عنصر \\(x\\in X\\) بعنصر وحيد \\(y\\in Y\\)، ونسمي \\(X\\) مجموعة التعريف.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تعريف المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التابع \\(f\\) متزايد تماماً ضمن \\(A\\) إذا كان \\(x_1\\lt x_2\\Rightarrow f(x_1)\\lt f(x_2)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع \\(f\\) الذي يحقق \\(x_1\\lt x_2\\Rightarrow f(x_1)\\ge f(x_2)\\) هو تابع:",
  "options": [
   "متزايد",
   "متناقص",
   "ثابت",
   "فردي",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: متناقص</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">كلما كبر \\(x\\) صغر (أو ما كبر) \\(f(x)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متناقص</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التوابع المتزايدة تماماً والمتناقصة تماماً هي توابع وحيدة الطرد (تقابلية).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x_1\\ne x_2\\Rightarrow f(x_1)\\ne f(x_2)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المنحني البياني للتابع \\(f\\) ولتابعه العكسي \\(f^{-1}\\) متناظران بالنسبة للمستقيم \\(y=x\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثل \\(a^x\\) و \\(\\log_a x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع العكسي للتابع \\(y=7x-3\\) (مثال المقرر 3-8) هو:",
  "options": [
   "\\(x=\\frac{y+3}{7}\\)",
   "\\(x=\\frac{y-3}{7}\\)",
   "\\(x=7y+3\\)",
   "\\(x=\\frac{7}{y+3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac{y+3}{7}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y+3=7x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{y+3}{7}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع العكسي للتابع الأسي \\(f(x)=a^x\\) هو:",
  "options": [
   "\\(\\log_a x\\)",
   "\\(x^a\\)",
   "\\(\\frac{1}{a^x}\\)",
   "\\(a^{-x}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\log_a x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y=a^x\\iff x=\\log_a y\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#def",
   "label": "تعريف التابع والتوابع وحيدة الطرد والعكسية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مجموعة تعريف \\(f+g\\) و \\(f\\cdot g\\) هي تقاطع مجموعتي التعريف \\(A\\cap B\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#ops",
   "label": "العمليات الجبرية على التوابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(f(x)=\\ln x\\) معرفاً على \\(]0,\\infty[\\) و \\(g(x)=\\sqrt{-x}\\) معرفاً على \\(]-\\infty,0]\\) فإن التابع \\(f+g\\):",
  "options": [
   "معرف على \\(]0,\\infty[\\)",
   "غير معرف (ما في نقاط مشتركة)",
   "معرف على \\(\\mathbb{R}\\)",
   "معرف عند \\(x=0\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: غير معرف (ما في نقاط مشتركة)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(A\\cap B=]0,\\infty[\\,\\cap\\,]-\\infty,0]=\\varnothing\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#ops",
   "label": "العمليات الجبرية على التوابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف \\(\\frac{\\ln x}{\\sqrt{1-x^2}}\\) (مثال المقرر 2-8) هي:",
  "options": [
   "\\(]0,1[\\)",
   "\\(]0,1]\\)",
   "\\([-1,1]\\)",
   "\\(]0,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]0,1[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln x\\): \\(x\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المقام \\(\\sqrt{1-x^2}\\): لازم \\(1-x^2\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-1\\lt x\\lt1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">التقاطع</span><div class=\"m\">\\(]0,1[\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#ops",
   "label": "العمليات الجبرية على التوابع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع \\(f(x)=\\frac{1}{x}\\) اسمه وشكل منحنيه:",
  "options": [
   "قطع مكافئ",
   "قطع زائد",
   "مستقيم",
   "دائرة",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: قطع زائد</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثال المقرر: منحني \\(\\frac1x\\) قطع زائد، و \\(x^2\\) قطع مكافئ</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#types",
   "label": "أنواع التوابع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع \\(f(x)=x^2\\) منحنيه:",
  "options": [
   "قطع مكافئ",
   "قطع زائد",
   "مستقيم مار من المبدأ",
   "منصف الربع الأول",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: قطع مكافئ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">كثير حدود من الدرجة التانية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">قطع مكافئ</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#types",
   "label": "أنواع التوابع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي من التوابع التالية <b>خطي</b>؟",
  "options": [
   "\\(y=ax^2+3\\)",
   "\\(y=ax+bz+c\\)",
   "\\(y=ax^2+bz^3+c\\)",
   "\\(y=\\frac1x\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(y=ax+bz+c\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الخطي: قوة كل متغير 1</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#types",
   "label": "أنواع التوابع"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التابع \\(y=f(x)\\) في \\(F(x,y)=0\\) يسمى تابعاً ضمنياً، أما \\(y=f(x)\\) معطاة بشكل صريح فتسمى تابعاً صريحاً.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#types",
   "label": "أنواع التوابع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع الأسي \\(f(x)=a^x\\) معرف بشرط:",
  "options": [
   "\\(a\\gt0,\\ a\\ne1\\)",
   "\\(a\\ge0\\)",
   "\\(a\\ne0\\)",
   "\\(x\\gt0\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a\\gt0,\\ a\\ne1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">وقيمه دائماً موجبة</span><div class=\"m\">\\(y\\in\\mathbb{R}^+\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#types",
   "label": "أنواع التوابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\frac{1}{x^2-1}\\) (نموذج امتحاني F19):",
  "options": [
   "\\(\\mathbb{R}\\setminus\\{-1,1\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{1\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{-1\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{0\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\setminus\\{-1,1\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المقام \\(\\ne0\\)</span><div class=\"m\">\\(x^2-1\\ne0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\ne\\pm1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\log(16-x^2)\\) (نموذج امتحاني):",
  "options": [
   "\\([-4,4]\\)",
   "\\(]-4,4[\\)",
   "\\(\\mathbb{R}\\setminus\\{4,-4\\}\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-4,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">اللوغاريتم بدو مضمون <b>موجب تماماً</b></span><div class=\"m\">\\(16-x^2\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2\\lt16\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-4\\lt x\\lt4\\)</div></div><b>❌ انتبه:</b> \\([-4,4]\\) غلط لأن عند \\(\\pm4\\) المضمون صفر.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(y=\\frac{3x}{\\sqrt{2-x}}\\) هي:",
  "options": [
   "\\(]-\\infty,2[\\)",
   "\\(]-\\infty,2]\\)",
   "\\(]2,\\infty[\\)",
   "\\(\\mathbb{R}\\setminus\\{2\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-\\infty,2[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">جذر بالمقام</span><div class=\"m\">\\(2-x\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\lt2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(y=\\sqrt{2x-3}\\) هي:",
  "options": [
   "\\([\\frac32,\\infty[\\)",
   "\\(]\\frac32,\\infty[\\)",
   "\\(]-\\infty,\\frac32]\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\([\\frac32,\\infty[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">جذر تربيعي (مو بالمقام)</span><div class=\"m\">\\(2x-3\\ge0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\ge\\frac32\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف كثير الحدود \\(f(x)=x^3-3x^2+3x+1\\) هي:",
  "options": [
   "\\(\\mathbb{R}\\)",
   "\\(]0,\\infty[\\)",
   "\\(\\mathbb{R}\\setminus\\{0\\}\\)",
   "\\([0,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">كثير الحدود معرف على كل</span><div class=\"m\">\\(\\mathbb{R}\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\frac{2x+1}{x-1}\\) هي:",
  "options": [
   "\\(\\mathbb{R}\\setminus\\{1\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{-\\frac12\\}\\)",
   "\\(]1,\\infty[\\)",
   "\\(\\mathbb{R}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\setminus\\{1\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x-1\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\ne1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\frac{x}{x^2-9}\\) هي:",
  "options": [
   "\\(\\mathbb{R}\\setminus\\{-3,3\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{9\\}\\)",
   "\\(]-3,3[\\)",
   "\\(\\mathbb{R}\\setminus\\{0\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\setminus\\{-3,3\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2-9\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x\\ne\\pm3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\frac{1}{x^2+1}\\) هي:",
  "options": [
   "\\(\\mathbb{R}\\)",
   "\\(\\mathbb{R}\\setminus\\{-1,1\\}\\)",
   "\\(\\mathbb{R}\\setminus\\{-1\\}\\)",
   "\\(]0,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\mathbb{R}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2+1\\ge1\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المقام ما بيصفر أبداً</div></div><b>❌ انتبه:</b> \\(x^2+1=0\\) ما إلها حل حقيقي، فما في نقاط ممنوعة.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\log(9-x^2)\\) هي:",
  "options": [
   "\\(]-3,3[\\)",
   "\\([-3,3]\\)",
   "\\(]-9,9[\\)",
   "\\(]3,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-3,3[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(9-x^2\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-3\\lt x\\lt3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة تعريف التابع \\(f(x)=\\ln\\frac{4+x}{4-x}\\) هي:",
  "options": [
   "\\(]-4,4[\\)",
   "\\(\\mathbb{R}\\setminus\\{4\\}\\)",
   "\\([-4,4[\\)",
   "\\(]4,\\infty[\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(]-4,4[\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{4+x}{4-x}\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">جدول إشارة: الجذور \\(-4\\) و \\(4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">موجب بين الجذرين</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التابع الكسري معرف من أجل كل القيم التي لا تعدم المقام، أما الجذري (زوجي الدليل) فمعرف من أجل القيم التي تجعل ما تحت الجذر موجباً أو صفراً.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نتيجة المقرر بعد مثال 16-8</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مجموعة تعريف التابع \\(\\sqrt[3]{x}\\) هي \\([0,\\infty[\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الدليل <b>فردي</b></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">معرف على كل</span><div class=\"m\">\\(\\mathbb{R}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">شرط \\(x\\ge0\\) للدليل الزوجي بس</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#domain",
   "label": "مجموعة تعريف التابع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع \\(f(x)=x^4+4\\) هو:",
  "options": [
   "زوجي",
   "فردي",
   "لا زوجي ولا فردي",
   "ثابت",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: زوجي</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f(-x)=(-x)^4+4=x^4+4=f(x)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">زوجي</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#parity",
   "label": "التوابع الزوجية والفردية والمركبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع \\(f(x)=x^5+3x\\) هو:",
  "options": [
   "زوجي",
   "فردي",
   "لا زوجي ولا فردي",
   "متناقص",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: فردي</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f(-x)=-x^5-3x=-f(x)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">فردي</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#parity",
   "label": "التوابع الزوجية والفردية والمركبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع \\(f(x)=x^2+x\\) هو:",
  "options": [
   "زوجي",
   "فردي",
   "لا زوجي ولا فردي",
   "ثابت",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: لا زوجي ولا فردي</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f(-x)=x^2-x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما بيساوي \\(f(x)\\) ولا \\(-f(x)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#parity",
   "label": "التوابع الزوجية والفردية والمركبة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "شرط التابع الزوجي أو الفردي أن تكون مجموعة تعريفه متناظرة بالنسبة للصفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#parity",
   "label": "التوابع الزوجية والفردية والمركبة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(y=g(x)=x^2-3x+1\\) و \\(z=f(y)=5y^3\\) فإن التابع المركب \\(z=f(g(x))\\) هو:",
  "options": [
   "\\(5(x^2-3x+1)^3\\)",
   "\\(5x^6-3x+1\\)",
   "\\((5x^3)^2-3(5x^3)+1\\)",
   "\\(5x^2-3x+1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(5(x^2-3x+1)^3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نعوّض \\(y\\) بقيمتها داخل \\(f\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#parity",
   "label": "التوابع الزوجية والفردية والمركبة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة النهاية \\(\\lim_{x\\to2}\\frac{x-1+x^2}{(x+2)^3}\\) (نموذج F19):",
  "options": [
   "\\(\\frac{3}{10}\\)",
   "\\(+\\infty\\)",
   "\\(\\frac{2}{56}\\)",
   "\\(\\frac{5}{64}\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{5}{64}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">التابع معرف عند 2</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نعوّض مباشرة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">البسط: \\(2-1+4=5\\) · المقام: \\(4^3=64\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to2}(x^2-3x-9)\\) يساوي:",
  "options": [
   "-11",
   "-9",
   "11",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -11</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(4-6-9=-11\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to3}\\frac{x^2-4x+3}{x-3}\\) (مثال المقرر) يساوي:",
  "options": [
   "2",
   "\\(\\frac00\\)",
   "0",
   "3",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">التعويض بيعطي</span><div class=\"m\">\\(\\frac00\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حالة عدم تعيين</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نحلل</span><div class=\"m\">\\(\\frac{(x-3)(x-1)}{x-3}=x-1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\lim_{x\\to3}(x-1)=2\\)</div></div><b>❌ انتبه:</b> \\(\\frac00\\) مو جواب — هي إشارة إنو لازم نحلل ونختصر.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to5}\\frac{x^2-25}{x-5}\\) (مثال المقرر 8-8) يساوي:",
  "options": [
   "10",
   "0",
   "5",
   "\\(\\infty\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 10</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{(x-5)(x+5)}{x-5}=x+5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5+5=10\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to2}\\frac{x^2-3x+2}{x-2}\\) (مثال المقرر 9-8) يساوي:",
  "options": [
   "1",
   "0",
   "-1",
   "2",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{(x-2)(x-1)}{x-2}=x-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2-1=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to-3}\\frac{x^2-5x+6}{x^2-3}\\) يساوي:",
  "options": [
   "5",
   "\\(\\frac00\\)",
   "30",
   "-5",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">التابع معرف عند</span><div class=\"m\">\\(-3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نعوّض مباشرة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">البسط: \\(9+15+6=30\\) · المقام: \\(9-3=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{30}{6}=5\\)</div></div><b>❌ انتبه:</b> \\((-3)^2=+9\\) و \\(-5(-3)=+15\\).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to1}\\frac{3x-3}{(x-1)^2}\\) يساوي:",
  "options": [
   "3",
   "\\(\\infty\\) (بإشارة حسب الجهة)",
   "0",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\infty\\) (بإشارة حسب الجهة)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{3(x-1)}{(x-1)^2}=\\frac{3}{x-1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">لما \\(x\\to1\\) المقام \\(\\to0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">النهاية لانهائية (\\(+\\infty\\) من اليمين، \\(-\\infty\\) من اليسار)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to-\\frac23}\\frac{2x-1}{3x+2}\\) (مثال المقرر 7-8):",
  "options": [
   "\\(\\pm\\infty\\)",
   "\\(-\\frac73\\)",
   "0",
   "\\(\\frac23\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\pm\\infty\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">البسط \\(\\to-\\frac73\\) والمقام \\(\\to0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عدد على صفر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(\\pm\\infty\\) (لانهاية معينة)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(a\\) من مجموعة تعريف التابع \\(f\\) وكان مستمراً فيها فإن \\(\\lim_{x\\to a}f(x)=f(a)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي من التالي <b>حالة عدم تعيين</b>؟",
  "options": [
   "\\(\\frac{0}{0}\\)",
   "\\(\\frac{5}{\\infty}\\)",
   "\\(\\infty+\\infty\\)",
   "\\(\\frac{\\infty}{3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{0}{0}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">حالات عدم التعيين</span><div class=\"m\">\\(\\frac00,\\ \\frac\\infty\\infty,\\ \\infty-\\infty,\\ 0\\cdot\\infty\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac5\\infty=0\\) · \\(\\infty+\\infty=\\infty\\) · \\(\\frac\\infty3=\\infty\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to0}(1+x)^{1/x}\\) يساوي:",
  "options": [
   "\\(e\\)",
   "1",
   "0",
   "\\(\\infty\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(e\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نهاية شهيرة بالمقرر</span><div class=\"m\">\\(\\lim_{x\\to0}(1+x)^{1/x}=e\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#lim",
   "label": "النهايات وطرائق حسابها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to-\\infty}\\frac{2x^6+x^3}{x^2-4}\\) (نموذج امتحاني) يساوي:",
  "options": [
   "\\(+\\infty\\)",
   "\\(-\\infty\\)",
   "2",
   "\\(\\frac12\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(+\\infty\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">درجة البسط (6) أكبر من درجة المقام (2)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">النهاية لانهائية</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الإشارة</span><div class=\"m\">\\(\\frac{2x^6}{x^2}=2x^4\\to+\\infty\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{3x^2+4x-1}{2x^2+3}\\) يساوي:",
  "options": [
   "\\(\\frac32\\)",
   "\\(\\infty\\)",
   "0",
   "\\(-\\frac13\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac32\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نفس الدرجة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نسبة أمثال أعلى قوة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac32\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{5x^2-2x+7}{7x^2-1}\\) يساوي:",
  "options": [
   "\\(\\frac57\\)",
   "-7",
   "\\(\\infty\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac57\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نفس الدرجة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac57\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{2x+7}{x^2+3}\\) يساوي:",
  "options": [
   "0",
   "2",
   "\\(\\infty\\)",
   "\\(\\frac23\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">درجة البسط أصغر من درجة المقام</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">النهاية صفر</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{5x^3-2x+1}{2x^2-4x^3+x}\\) يساوي:",
  "options": [
   "\\(-\\frac54\\)",
   "\\(\\frac52\\)",
   "\\(\\infty\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac54\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نفس الدرجة (3)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نسبة أمثال</span><div class=\"m\">\\(x^3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{5}{-4}=-\\frac54\\)</div></div><b>❌ انتبه:</b> أعلى قوة بالمقام \\(x^3\\) أمثالها \\(-4\\) مو 2.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{x^2-3x+4}{x-1}\\) يساوي:",
  "options": [
   "\\(\\infty\\)",
   "1",
   "0",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\infty\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">درجة البسط (2) أكبر من المقام (1)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\infty\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to\\infty}\\frac{3x^3-4x+5}{3x+x^3-x^2}\\) يساوي:",
  "options": [
   "3",
   "0",
   "\\(\\infty\\)",
   "\\(\\frac53\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نفس الدرجة</span><div class=\"m\">\\(\\frac31=3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to-\\infty}e^{x}\\) يساوي:",
  "options": [
   "0",
   "1",
   "\\(\\infty\\)",
   "\\(-\\infty\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(e^x\\to0\\) لما \\(x\\to-\\infty\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "\\(\\lim_{x\\to0^+}\\ln x\\) يساوي:",
  "options": [
   "\\(-\\infty\\)",
   "0",
   "\\(+\\infty\\)",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\infty\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الأساس</span><div class=\"m\">\\(e\\gt1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\lim_{x\\to0}\\log_a x=-\\infty\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#liminf",
   "label": "النهايات عند اللانهاية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "التابع \\(y=f(x)\\) مستمر عند \\(x=a\\) إذا كان معرفاً عند \\(a\\) وفي جوار لها، و \\(\\lim_{x\\to a}f(x)=f(a)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cont",
   "label": "الاستمرار"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التابع \\(y=\\frac{1}{x}\\):",
  "options": [
   "مستمر على \\(\\mathbb{R}\\)",
   "غير مستمر عند \\(x=0\\)",
   "غير مستمر عند \\(x=1\\)",
   "ثابت",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: غير مستمر عند \\(x=0\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">غير معرف عند 0</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير مستمر عندها</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cont",
   "label": "الاستمرار"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "التابع \\(y=\\frac{4x+1}{x-2}\\) (مثال المقرر 18-8) على المجال \\([1,4]\\):",
  "options": [
   "مستمر",
   "غير مستمر لأنه غير معرف عند \\(x=2\\)",
   "مستمر لأنه كسري",
   "غير معرف إطلاقاً",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: غير مستمر لأنه غير معرف عند \\(x=2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(x=2\\in[1,4]\\) والمقام بيصفر عندها</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cont",
   "label": "الاستمرار"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "كل تابع كثير حدود هو تابع معرف ومستمر على \\(\\mathbb{R}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cont",
   "label": "الاستمرار"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان التابع مستمراً على المجال المغلق \\([a,b]\\) وتغيرت إشارته بين طرفيه، فلا بد أن ينعدم في نقطة \\(c\\) داخل المجال.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الخاصة التانية للتوابع المستمرة</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#cont",
   "label": "الاستمرار"
  }
 }
];
