/* بنك أسئلة الفصل 2 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH2_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "التركيب \\(\\frac{x+1+x^2}{x^2(1+x)}\\equiv\\frac{1}{x^2}+\\frac{1}{x+1}\\) محقق مهما كانت قيمة المجهول (ضمن مجموعة تعريفه) ويسمى مطابقة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المطابقة صحيحة لكل قيم المجهول، أما المعادلة فمحققة بس لقيم معينة (جذورها)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#intro",
   "label": "التعابير الرياضية وتصنيفاتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "التركيب \\(x^2-5x+4=0\\) مطابقة لأنه محقق لكل قيم \\(x\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي <b>معادلة</b>: محققة بس لـ\\(x=1\\) و \\(x=4\\) (جذورها)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">جرّب \\(x=0\\)</span><div class=\"m\">\\(4\\ne0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو محققة لكل القيم</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#intro",
   "label": "التعابير الرياضية وتصنيفاتها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "جذر المعادلة \\(3x+10=0\\) هو:",
  "options": [
   "\\(\\frac{10}{3}\\)",
   "\\(-\\frac{3}{10}\\)",
   "\\(-\\frac{10}{3}\\)",
   "\\(-7\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac{10}{3}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(ax+b=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac ba\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3x=-10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-\\frac{10}{3}\\)</div></div><b>❌ انتبه:</b> لما تنقل حد للطرف التاني بتتغير إشارته.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg1",
   "label": "المعادلة من الدرجة الأولى"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الصيغة الرياضية \\(8y=4x+4\\) تكافئ الصيغة:",
  "options": [
   "\\(x=2y-4\\)",
   "\\(x=y+1\\)",
   "\\(x=2y-1\\)",
   "\\(x=2y+1\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2y-1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نقسم على 4</span><div class=\"m\">\\(2y=x+1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2y-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg1",
   "label": "المعادلة من الدرجة الأولى"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إشارة الحد \\(ax+b\\) بعد جذره \\(x=-\\frac ba\\) توافق إشارة \\(a\\)، وقبل الجذر تخالفها.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">حسب المقرر: قبل الجذر إشارة مخالفة لـ\\(a\\)، وبعده موافقة</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg1",
   "label": "المعادلة من الدرجة الأولى"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إشارة كثير الحدود \\(F(x)=4x+4\\) عندما \\(x=-2\\) هي:",
  "options": [
   "سالبة",
   "موجبة",
   "صفر",
   "لا إشارة له",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: سالبة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(F(-2)=4(-2)+4=-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">أو: الجذر \\(x=-1\\) و \\(-2\\) قبله</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">إشارة مخالفة لـ\\(a=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">سالبة</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg1",
   "label": "المعادلة من الدرجة الأولى"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إشارة كثير الحدود \\(F(x)=-5x\\) سالبة دوماً لكل \\(x\\in\\mathbb{R}\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(F(-1)=5\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الإشارة سالبة بس لـ\\(x\\gt0\\) (بعد الجذر 0، موافقة لـ\\(a=-5\\))</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg1",
   "label": "المعادلة من الدرجة الأولى"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُحسب المميز للمعادلة \\(ax^2+bx+c=0\\) بالشكل \\(\\Delta=b^2-4ac\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في حال كان المميز \\(\\Delta\\) لمعادلة من الدرجة الثانية سالباً فيكون للمعادلة جذران حقيقيان.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><b>ما في جذور حقيقية</b> (جذرين تخيليين)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الجذرين الحقيقيين المختلفين لما</span><div class=\"m\">\\(\\Delta\\gt0\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إشارة كثير حدود من الدرجة الثانية هي دوماً من إشارة المميز \\(\\Delta\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الإشارة بتتعلق بإشارة \\(a\\) وموقع \\(x\\) من الجذور، مو بإشارة \\(\\Delta\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(\\Delta=0\\) للمعادلة \\(ax^2+bx+c=0\\) فإن:",
  "options": [
   "لا يوجد لها جذور حقيقية",
   "لها جذر مضاعف \\(x=-\\frac{b}{2a}\\)",
   "لها جذران مختلفان",
   "جذرها \\(x=\\frac{c}{a}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لها جذر مضاعف \\(x=-\\frac{b}{2a}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt\\Delta=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_1=x_2=\\frac{-b}{2a}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المعادلة \\(x^2-4=0\\) في \\(\\mathbb{R}\\) هي:",
  "options": [
   "ليس لها حلول في \\(\\mathbb{R}\\)",
   "\\(x=2\\) أو \\(x=-2\\)",
   "\\(x=0\\) أو \\(x=4\\)",
   "\\(x=4\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2\\) أو \\(x=-2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=\\pm2\\) (العددين مربعهم 4)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حلول المعادلة \\(3x^2-27=0\\) هي:",
  "options": [
   "\\(x_1=3,\\ x_2=-3\\)",
   "\\(x_1=9,\\ x_2=-9\\)",
   "لا حل لها",
   "\\(x=3\\) فقط",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x_1=3,\\ x_2=-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3x^2=27\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\pm3\\)</div></div><b>❌ انتبه:</b> \\(x^2=9\\) بيعطي \\(\\pm3\\) مو \\(\\pm9\\).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^2-5x+4=0\\) هي:",
  "options": [
   "\\(1,\\ 4\\)",
   "\\(-1,\\ -4\\)",
   "\\(1,\\ -4\\)",
   "\\(2,\\ 2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(1,\\ 4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=25-16=9\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt\\Delta=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{5\\pm3}{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_1=4,\\ x_2=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">تحقق: مجموعهم 5 \\(=-\\frac ba\\) وجداؤهم 4 \\(=\\frac ca\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(15x^2-32x-47=0\\) (مثال المقرر) هي:",
  "options": [
   "\\(-1,\\ \\frac{47}{15}\\)",
   "\\(1,\\ -\\frac{47}{15}\\)",
   "\\(\\frac{32}{30},\\ 62\\)",
   "لا جذور حقيقية",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-1,\\ \\frac{47}{15}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=32^2+4\\cdot15\\cdot47=3844\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\sqrt\\Delta=62\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{32\\pm62}{30}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_1=\\frac{94}{30}=\\frac{47}{15},\\ x_2=\\frac{-30}{30}=-1\\)</div></div><b>❌ انتبه:</b> \\(-4ac=-4(15)(-47)=+2820\\) — انتبه لإشارة \\(c\\) السالبة.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^2-3x-4=0\\) هي:",
  "options": [
   "\\(4,\\ -1\\)",
   "\\(-4,\\ 1\\)",
   "\\(3,\\ 4\\)",
   "\\(2,\\ -2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(4,\\ -1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=9+16=25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{3\\pm5}{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(4\\) و \\(-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموع جذري المعادلة \\(2x^2-6x+1=0\\) هو:",
  "options": [
   "3",
   "-3",
   "\\(\\frac12\\)",
   "6",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x_1+x_2=-\\frac ba\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-\\frac{-6}{2}=3\\)</div></div><b>❌ انتبه:</b> الجداء \\(\\frac ca=\\frac12\\) مو المجموع.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "جداء جذري المعادلة \\(2x^2-6x+1=0\\) هو:",
  "options": [
   "3",
   "-3",
   "\\(\\frac12\\)",
   "2",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac12\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x_1\\cdot x_2=\\frac ca=\\frac12\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إشارة كثير الحدود \\(F(x)=x^2+8\\) هي:",
  "options": [
   "دوماً موجبة",
   "دوماً سالبة",
   "لا إشارة له",
   "موجبة ثم سالبة",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: دوماً موجبة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=0-32\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما إله جذور</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">إشارته دايماً من إشارة</span><div class=\"m\">\\(a=1\\gt0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">موجب</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إشارة كثير الحدود \\(F(x)=x^2+4\\) هي دوماً موجبة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^2\\ge0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2+4\\ge4\\gt0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إشارة كثير الحدود \\(F(x)=ax^2+bx+c\\) حيث \\(a\\ne0\\) إذا كان المميز \\(\\Delta\\) سالباً هي:",
  "options": [
   "موافقة لإشارة \\(b\\)",
   "موافقة لإشارة \\(a\\)",
   "موافقة لإشارة \\(c\\)",
   "مخالفة لإشارة \\(a\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: موافقة لإشارة \\(a\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما في جذور</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الإشارة ما بتتغير</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">وبتكون من إشارة \\(a\\) مهما كانت \\(x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن التعبير عن الصيغة \\(a^2-2ab+b^2\\) بشكل مختلف كما يلي:",
  "options": [
   "\\((a+b)^2\\)",
   "\\((a-b)^2\\)",
   "\\((a+b)(a-b)\\)",
   "\\(a^2-b^2\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\((a-b)^2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((a\\pm b)^2=a^2\\pm2ab+b^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالإشارة السالبة</span><div class=\"m\">\\((a-b)^2\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن كتابة كثير الحدود \\(F(x)=x^2-x-2\\) كما يلي:",
  "options": [
   "\\((x-1)^2\\)",
   "\\((x-2)^2\\)",
   "\\((x-6)(x+5)\\)",
   "\\((x+2)(x-1)\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — \\((x-2)(x+1)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">جذوره</span><div class=\"m\">\\(\\Delta=1+8=9\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{1\\pm3}{2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(2\\) و \\(-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-x-2=(x-2)(x+1)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو بين الخيارات</div></div><b>❌ انتبه:</b> بعض الملخصات معلّمة \\((x-6)(x+5)\\)، بس هي بتساوي \\(x^2-x-30\\). تحقق دايماً بفك الأقواس.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\(a^3-b^3\\) يساوي:",
  "options": [
   "\\((a-b)(a^2+ab+b^2)\\)",
   "\\((a-b)(a^2-ab+b^2)\\)",
   "\\((a-b)^3\\)",
   "\\((a+b)(a^2-ab+b^2)\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\((a-b)(a^2+ab+b^2)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المتطابقة</span><div class=\"m\">\\(a^3\\pm b^3\\equiv(a\\pm b)(a^2\\mp ab+b^2)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالإشارة السالبة</span><div class=\"m\">\\((a-b)(a^2+ab+b^2)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(\\Delta\\gt0\\) و \\(a\\gt0\\) فإن إشارة \\(ax^2+bx+c\\) بين الجذرين:",
  "options": [
   "موجبة",
   "سالبة",
   "صفر",
   "موافقة لإشارة \\(c\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: سالبة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">بين الجذرين: إشارة <b>مخالفة</b> لـ\\(a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a\\gt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">سالبة</div></div><b>❌ انتبه:</b> برّا الجذرين: موافقة لـ\\(a\\).",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#deg2",
   "label": "المعادلة من الدرجة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حسب مبرهنة بيزو: إذا كان \\(f(A)=0\\) فإن \\(f(x)\\) يقبل القسمة على \\((x-A)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(f(x)=h(x)(x-A)+R\\) و \\(f(A)=R\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(R=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لكل معادلة من الدرجة \\(n\\) عدد من الحلول يساوي درجتها \\(n\\) (حقيقية أو عقدية، وممكن تكون مكررة).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مبرهنة دالامبير بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حسب مبرهنة اختيار الجذور الكسرية، إذا كان \\(\\frac pq\\) جذراً للمعادلة \\(a_nx^n+\\dots+a_0=0\\) (الأمثال صحيحة) فإن:",
  "options": [
   "\\(p\\) قاسم لـ\\(a_n\\) و \\(q\\) قاسم لـ\\(a_0\\)",
   "\\(p\\) قاسم لـ\\(a_0\\) و \\(q\\) قاسم لـ\\(a_n\\)",
   "\\(p=a_0\\) و \\(q=a_n\\)",
   "\\(p\\) و \\(q\\) قواسم لـ\\(a_1\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(p\\) قاسم لـ\\(a_0\\) و \\(q\\) قاسم لـ\\(a_n\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">البسط \\(p\\) من قواسم <b>الحد المطلق</b> \\(a_0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">والمقام \\(q\\) من قواسم <b>أمثال أعلى قوة</b> \\(a_n\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(a_n=1\\) وكان للمعادلة جذر صحيح، فهو قاسم للحد المطلق \\(a_0\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">حالة خاصة بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة حلول المعادلة \\(x^3-6x^2-x+6=0\\) هي:",
  "options": [
   "\\(\\{1,-1,6\\}\\)",
   "\\(\\{2,12,9\\}\\)",
   "\\(\\{0,6,-1\\}\\)",
   "\\(\\{2,4\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{1,-1,6\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">قواسم 6</span><div class=\"m\">\\(\\pm1,\\pm2,\\pm3,\\pm6\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=1\\): \\(1-6-1+6=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نقسم على \\((x-1)\\)</span><div class=\"m\">\\(x^2-5x-6\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-5x-6=(x-6)(x+1)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(6\\) و \\(-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3+3x^2-10x-24=0\\) هي:",
  "options": [
   "\\(\\{3,-2,-4\\}\\)",
   "\\(\\{-3,2,4\\}\\)",
   "\\(\\{3,2,4\\}\\)",
   "\\(\\{1,-2,-4\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{3,-2,-4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قواسم 24</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">جرّب \\(x=3\\)</span><div class=\"m\">\\(27+27-30-24=0\\) ✓</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x^3+3x^2-10x-24)\\div(x-3)=x^2+6x+8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2+6x+8=(x+2)(x+4)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3-4x^2-17x+60=0\\) هي:",
  "options": [
   "\\(\\{3,5,-4\\}\\)",
   "\\(\\{-3,-5,4\\}\\)",
   "\\(\\{2,5,6\\}\\)",
   "\\(\\{3,4,5\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{3,5,-4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x=3\\): \\(27-36-51+60=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة على \\((x-3)\\)</span><div class=\"m\">\\(x^2-x-20\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-x-20=(x-5)(x+4)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3-5x^2-2x+24=0\\) هي:",
  "options": [
   "\\(\\{3,4,-2\\}\\)",
   "\\(\\{-3,-4,2\\}\\)",
   "\\(\\{2,3,4\\}\\)",
   "\\(\\{1,4,6\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{3,4,-2\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x=3\\): \\(27-45-6+24=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة</span><div class=\"m\">\\(x^2-2x-8=(x-4)(x+2)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3-3x^2-16x+48=0\\) هي:",
  "options": [
   "\\(\\{3,4,-4\\}\\)",
   "\\(\\{3,16\\}\\)",
   "\\(\\{-3,4,-4\\}\\)",
   "\\(\\{3,4\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{3,4,-4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بالتجميع</span><div class=\"m\">\\(x(x^2-16)-3(x^2-16)=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x^2-16)(x-3)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-4)(x+4)(x-3)=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا علمت أن \\(x=4\\) هو أحد جذور المعادلة \\(x^3+4x^2-17x-60=0\\) فإن الجذرين الآخرين هما:",
  "options": [
   "\\(-5,\\ -3\\)",
   "\\(5,\\ 3\\)",
   "\\(-5,\\ 3\\)",
   "\\(5,\\ -3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-5,\\ -3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نقسم على \\((x-4)\\)</span><div class=\"m\">\\(x^2+8x+15\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2+8x+15=(x+5)(x+3)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(-5\\) و \\(-3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3-2x^2-16x+32=0\\) هي:",
  "options": [
   "\\(\\{2,4,-4\\}\\)",
   "\\(\\{-2,4,-4\\}\\)",
   "\\(\\{2,16\\}\\)",
   "\\(\\{2,8\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{2,4,-4\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بالتجميع</span><div class=\"m\">\\(x^2(x-2)-16(x-2)=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-2)(x^2-16)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2,\\ 4,\\ -4\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^3+3x^2-6x-8=0\\) هي:",
  "options": [
   "\\(\\{-1,-4,2\\}\\)",
   "\\(\\{1,4,-2\\}\\)",
   "\\(\\{-1,2\\}\\)",
   "\\(\\{1,-8\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-1,-4,2\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">قواسم 8</span><div class=\"m\">\\(\\pm1,\\pm2,\\pm4,\\pm8\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-1\\): \\(-1+3+6-8=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة على \\((x+1)\\)</span><div class=\"m\">\\(x^2+2x-8=(x+4)(x-2)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الجذور الحقيقية للمعادلة \\(-4x^3+5x^2+3x+6=0\\) (مثال المقرر 1-2) هي:",
  "options": [
   "\\(x=2\\) فقط",
   "\\(\\{2,-1,3\\}\\)",
   "\\(\\{-2,1\\}\\)",
   "\\(\\{2,\\frac34\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2\\) فقط</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قواسم 6</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2\\): \\(-32+20+6+6=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة على \\((x-2)\\)</span><div class=\"m\">\\(-4x^2-3x-3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4x^2+3x+3=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\Delta=9-48\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما في جذور حقيقية تانية</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جذور المعادلة \\(x^4-8x^3+17x^2+2x-24=0\\) (مثال المقرر 2-2) هي:",
  "options": [
   "\\(\\{2,3,4,-1\\}\\)",
   "\\(\\{-2,-3,-4,1\\}\\)",
   "\\(\\{1,2,3,4\\}\\)",
   "\\(\\{2,-1\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{2,3,4,-1\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(x=2\\) جذر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة</span><div class=\"m\">\\(x^3-6x^2+5x+12\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=-1\\) جذر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة</span><div class=\"m\">\\(x^2-7x+12\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-7x+12=(x-3)(x-4)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الجذور الحقيقية للمعادلة \\(t^3-3t-2=0\\) هي:",
  "options": [
   "\\(\\{-1,2\\}\\)",
   "\\(\\{1,-2\\}\\)",
   "\\(\\{-1,1,2\\}\\)",
   "\\(\\{2\\}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\{-1,2\\}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(t=-1\\): \\(-1+3-2=0\\) ✓</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">القسمة على \\((t+1)\\)</span><div class=\"m\">\\(t^2-t-2=(t-2)(t+1)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجذور: \\(-1\\) (مضاعف) و \\(2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "القواسم الصحيحة اللي بنجرّبها كجذور للمعادلة \\(x^3-4x^2-17x+60=0\\) هي قواسم العدد:",
  "options": [
   "1",
   "-4",
   "-17",
   "60",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: 60</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_n=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الجذر الصحيح (إذا وجد) قاسم للحد المطلق</span><div class=\"m\">\\(a_0=60\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#degn",
   "label": "المعادلة من الدرجة n (بيزوت والجذور الكسرية)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل المعادلة \\(\\frac{x+1}{x-2}=2\\) هو:",
  "options": [
   "\\(x=5\\)",
   "\\(x=2\\)",
   "\\(x=-5\\)",
   "\\(x=3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\ne2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x+1=2(x-2)=2x-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5\\ne2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مقبول</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#frac",
   "label": "المعادلات الكسرية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل المعادلة \\(\\frac{2}{x-1}=\\frac{1}{x+2}\\) هو:",
  "options": [
   "\\(x=-5\\)",
   "\\(x=5\\)",
   "\\(x=1\\)",
   "\\(x=-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\ne1,\\ x\\ne-2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">ضرب تبادلي</span><div class=\"m\">\\(2(x+2)=x-1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x+4=x-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=-5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#frac",
   "label": "المعادلات الكسرية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل المعادلة \\(\\frac{x}{x-3}=\\frac{3}{x-3}\\) هو:",
  "options": [
   "\\(x=3\\)",
   "\\(x=0\\)",
   "\\(x=-3\\)",
   "\\(x=1\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — ما إلها حل</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الشرط</span><div class=\"m\">\\(x\\ne3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بس هي القيمة الممنوعة (بتصفّر المقام)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">فالمعادلة <b>ما إلها حل</b></div></div><b>❌ انتبه:</b> لا تنسى تحقق الشرط على المقام قبل ما تقبل الجذر.",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#frac",
   "label": "المعادلات الكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحل المعادلة الكسرية \\(\\frac{x^2+3x+4}{x-2}-\\frac47=\\frac{x^3+4x-1}{x^2-4}\\) نشترط \\(x\\ne\\pm2\\) ثم نوحّد المقامات.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المقامات بتنعدم عند \\(x=\\pm2\\)، وبعد توحيدها بتصير معادلة من الدرجة التالتة (مثال المقرر 4-2)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#frac",
   "label": "المعادلات الكسرية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "المعادلة الخطية هي التي تحوي مجهولاً أو عدة مجاهيل بحيث قوة أي مجهول فيها تساوي الواحد الصحيح.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثل \\(3x+10=0\\) و \\(2x+y+z=5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المعادلة الخطية بأكثر من مجهول تملك عدداً غير منتهٍ من الحلول.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">لهيك منحتاج جملة معادلات مستقلة عددها = عدد المجاهيل</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي من المعادلات التالية <b>خطية</b>؟",
  "options": [
   "\\(xy=2\\)",
   "\\(x^2+y=1\\)",
   "\\(7x-3y+5z+u+v=-1\\)",
   "\\(\\sqrt x+y=3\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(7x-3y+5z+u+v=-1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الخطية: كل مجهول قوته 1 وما في جداء مجاهيل</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(xy\\) جداء، \\(x^2\\) قوة 2، \\(\\sqrt x\\) قوة \\(\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">كلها غير خطية</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
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
   "\\(x=10,\\ y=10\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=2,\\ y=2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نعوّض \\(y=x\\)</span><div class=\"m\">\\(x=6x-10\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5x=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحل المشترك (قيم \\(x\\)) لجملة المعادلتين \\(y=x^2+2x\\) و \\(y=5x+4\\) هو:",
  "options": [
   "\\(x_1=0,\\ x_2=2\\)",
   "\\(x_1=-1,\\ x_2=4\\)",
   "لا حل مشترك لهما",
   "\\(x_1=1,\\ x_2=-4\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(x_1=-1,\\ x_2=4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نساوي</span><div class=\"m\">\\(x^2+2x=5x+4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x^2-3x-4=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((x-4)(x+1)=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(x=4\\) أو \\(x=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "حل الجملة \\(x+y=5\\) و \\(x-y=1\\) هو:",
  "options": [
   "\\(x=3,\\ y=2\\)",
   "\\(x=2,\\ y=3\\)",
   "\\(x=4,\\ y=1\\)",
   "\\(x=6,\\ y=-1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=3,\\ y=2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نجمع المعادلتين</span><div class=\"m\">\\(2x=6\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y=5-3=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحل جملة \\(2x^2+3y^2-3x+y+5=0\\) و \\(x-y=1\\) نوجد أحد المجهولين من المعادلة الخطية ونعوّضه في الأخرى.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي طريقة المقرر للمعادلات غير الخطية</div></div>",
  "ref": {
   "url": "chapters/chapter-2-lesson.html#multi",
   "label": "المعادلات المتعددة المجهول"
  }
 }
];
