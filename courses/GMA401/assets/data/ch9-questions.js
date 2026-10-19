/* بنك أسئلة الفصل 9 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH9_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "مشتق التابع \\(y=f(x)\\) عند \\(x\\) هو نهاية نسبة تغير التابع إلى تغير المتحول عندما \\(\\Delta x\\to0\\): \\(y'=\\lim_{\\Delta x\\to0}\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تعريف المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#def",
   "label": "تعريف المشتق ومعناه الهندسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المعنى الهندسي لـ\\(f'(x_0)\\) هو:",
  "options": [
   "ميل المماس للمنحني عند النقطة \\(x_0\\)",
   "مساحة تحت المنحني",
   "قيمة التابع عند \\(x_0\\)",
   "طول القوس",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: ميل المماس للمنحني عند النقطة \\(x_0\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(y'=\\tan\\alpha\\) حيث \\(\\alpha\\) زاوية المماس مع محور السينات</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#def",
   "label": "تعريف المشتق ومعناه الهندسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كانت \\(\\frac{\\Delta y}{\\Delta x}\\gt0\\) فإن التابع:",
  "options": [
   "متزايد",
   "متناقص",
   "ثابت",
   "غير معرف",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: متزايد</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(y\\) و \\(x\\) بيتغيروا بنفس الاتجاه</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#def",
   "label": "تعريف المشتق ومعناه الهندسي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان المشتق مساوياً للصفر عند نقطة فإن المماس عندها يوازي محور السينات.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\tan\\alpha=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\alpha=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#def",
   "label": "تعريف المشتق ومعناه الهندسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "باستخدام التعريف، مشتق \\(y=x^2-3x+1\\) (مثال المقرر 1-9) هو:",
  "options": [
   "\\(2x-3\\)",
   "\\(2x-3+\\Delta x\\)",
   "\\(x^2-3\\)",
   "\\(2x+1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(2x-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta y=\\Delta x(2x-3+\\Delta x)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{\\Delta y}{\\Delta x}=2x-3+\\Delta x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">لما \\(\\Delta x\\to0\\)</span><div class=\"m\">\\(y'=2x-3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#def",
   "label": "تعريف المشتق ومعناه الهندسي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مشتق التابع الثابت معدوم، ومشتق المتحول \\(x\\) يساوي الواحد.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\((c)'=0\\) و \\((x)'=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=x^n\\) هو:",
  "options": [
   "\\(n\\,x^{n-1}\\)",
   "\\(x^{n-1}\\)",
   "\\(n\\,x^{n}\\)",
   "\\((n-1)\\,x^{n}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(n\\,x^{n-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قاعدة القوى بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=x^2-3x+5\\) (مثال المقرر 3-9) هو:",
  "options": [
   "\\(2x-3\\)",
   "\\(2x+5\\)",
   "\\(x-3\\)",
   "\\(2x-3+5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(2x-3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مشتق المجموع = مجموع المشتقات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x-3+0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=5x^2-3x(x-2)+4x^3\\) (مثال المقرر 4-9) هو:",
  "options": [
   "\\(4x+6+12x^2\\)",
   "\\(10x-3+12x^2\\)",
   "\\(10x-6x+12x^2\\)",
   "\\(4x-6+12x^2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(4x+6+12x^2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نفك</span><div class=\"m\">\\(5x^2-3x^2+6x+4x^3=2x^2+6x+4x^3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'=4x+6+12x^2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=3x+4x^2-11\\) هو:",
  "options": [
   "\\(3+8x\\)",
   "\\(3+4x\\)",
   "\\(8x-11\\)",
   "\\(3x+8x\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(3+8x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3+8x-0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=5x^2+3x^3+7\\) هو:",
  "options": [
   "\\(10x+9x^2\\)",
   "\\(10x+9x^2+7\\)",
   "\\(5x+3x^2\\)",
   "\\(10x+3x^2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(10x+9x^2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(10x+9x^2+0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#basic",
   "label": "مشتق الثابت والقوى والمجموع"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق جداء تابعين \\(y=u\\cdot v\\) هو:",
  "options": [
   "\\(u'v+uv'\\)",
   "\\(u'v'\\)",
   "\\(u'v-uv'\\)",
   "\\(\\frac{u'v-uv'}{v^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(u'v+uv'\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">قاعدة المقرر</span><div class=\"m\">\\(y'=v\\cdot u'+u\\cdot v'\\)</div></div></div><b>❌ انتبه:</b> مشتق الجداء مو جداء المشتقات.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق القسمة \\(y=\\frac{u}{v}\\) هو:",
  "options": [
   "\\(\\frac{u'v-uv'}{v^2}\\)",
   "\\(\\frac{uv'-u'v}{v^2}\\)",
   "\\(\\frac{u'}{v'}\\)",
   "\\(\\frac{u'v+uv'}{v^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{u'v-uv'}{v^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">البسط: «مشتق الفوقاني × التحتاني − الفوقاني × مشتق التحتاني»</div></div><b>❌ انتبه:</b> ترتيب الطرح بالبسط مهم.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=(x^2-3x)(2x+x^3)\\) (مثال المقرر 5-9) هو:",
  "options": [
   "\\((2x-3)(2x+x^3)+(x^2-3x)(2+3x^2)\\)",
   "\\((2x-3)(2+3x^2)\\)",
   "\\((2x-3)(2x+x^3)-(x^2-3x)(2+3x^2)\\)",
   "\\((2x-3)+(2+3x^2)\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\((2x-3)(2x+x^3)+(x^2-3x)(2+3x^2)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(u=x^2-3x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(u'=2x-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(v=2x+x^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(v'=2+3x^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'=u'v+uv'\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\frac{3}{x}\\) هو:",
  "options": [
   "\\(-\\frac{3}{x^2}\\)",
   "\\(\\frac{3}{x^2}\\)",
   "\\(\\frac{1}{3x}\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac{3}{x^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{0\\cdot x-1\\cdot3}{x^2}=-\\frac{3}{x^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\frac{5x^2-1}{x}\\) هو:",
  "options": [
   "\\(\\frac{5x^2+1}{x^2}\\)",
   "\\(\\frac{5x^2-1}{x^2}\\)",
   "\\(10x\\)",
   "\\(\\frac{10x^2-1}{x^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{5x^2+1}{x^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{10x\\cdot x-1\\cdot(5x^2-1)}{x^2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{10x^2-5x^2+1}{x^2}=\\frac{5x^2+1}{x^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\frac{3x}{x^2+3}\\) هو:",
  "options": [
   "\\(\\frac{-3x^2+9}{(x^2+3)^2}\\)",
   "\\(\\frac{3x^2+9}{(x^2+3)^2}\\)",
   "\\(\\frac{3}{2x}\\)",
   "\\(\\frac{9x^2+9}{(x^2+3)^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{-3x^2+9}{(x^2+3)^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{3(x^2+3)-2x\\cdot3x}{(x^2+3)^2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{-3x^2+9}{(x^2+3)^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\frac{2x^2+x}{x^2-3x}\\) هو:",
  "options": [
   "\\(\\frac{-7x^2}{(x^2-3x)^2}\\)",
   "\\(\\frac{7x^2}{(x^2-3x)^2}\\)",
   "\\(\\frac{4x+1}{2x-3}\\)",
   "\\(\\frac{7}{(x-3)^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{-7x^2}{(x^2-3x)^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{(4x+1)(x^2-3x)-(2x-3)(2x^2+x)}{(x^2-3x)^2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">البسط</span><div class=\"m\">\\(-7x^2\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=\\frac{2x}{x+1}\\) هو:",
  "options": [
   "\\(\\frac{2}{(x+1)^2}\\)",
   "\\(\\frac{2x}{(x+1)^2}\\)",
   "2",
   "\\(\\frac{4x+2}{(x+1)^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{2}{(x+1)^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{2(x+1)-1\\cdot2x}{(x+1)^2}=\\frac{2}{(x+1)^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#prodq",
   "label": "مشتق الجداء والقسمة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=5z^3\\) حيث \\(z=x^2-3x+1\\) (مثال المقرر 7-9) هو:",
  "options": [
   "\\(15(x^2-3x+1)^2(2x-3)\\)",
   "\\(15(x^2-3x+1)^2\\)",
   "\\(15z^2\\)",
   "\\(5(2x-3)^3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(15(x^2-3x+1)^2(2x-3)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y'_x=y'_z\\cdot z'_x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(y'_z=15z^2\\) و \\(z'_x=2x-3\\)</div></div><b>❌ انتبه:</b> لا تنسى تضرب بمشتق الداخلي.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#chain",
   "label": "مشتق التابع المركب والعكسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=f^n\\) هو:",
  "options": [
   "\\(n\\,f^{n-1}\\cdot f'\\)",
   "\\(n\\,f^{n-1}\\)",
   "\\(f^{n}\\cdot f'\\)",
   "\\(n\\,f'\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(n\\,f^{n-1}\\cdot f'\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تعميم قاعدة الجداء أو قاعدة التابع المركب</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#chain",
   "label": "مشتق التابع المركب والعكسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=(5x^2+1)^{10}\\) هو:",
  "options": [
   "\\(100x(5x^2+1)^9\\)",
   "\\(10(5x^2+1)^9\\)",
   "\\(10x(5x^2+1)^9\\)",
   "\\(50x(5x^2+1)^9\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(100x(5x^2+1)^9\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(10(5x^2+1)^9\\cdot10x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=100x(5x^2+1)^9\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#chain",
   "label": "مشتق التابع المركب والعكسي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(x=g(y)\\) هو العكسي للتابع \\(y=f(x)\\) فإن \\(x'_y=\\frac{1}{y'_x}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مشتق التابع العكسي بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#chain",
   "label": "مشتق التابع المركب والعكسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(y=4x^2+5\\) (مثال المقرر 10-9) فإن مشتق تابعه العكسي \\(x'_y\\) هو:",
  "options": [
   "\\(\\frac{1}{8x}\\)",
   "\\(8x\\)",
   "\\(\\frac{1}{4x}\\)",
   "\\(-\\frac{1}{8x}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{8x}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y'_x=8x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x'_y=\\frac1{y'_x}=\\frac1{8x}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#chain",
   "label": "مشتق التابع المركب والعكسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=\\ln f(x)\\) هو:",
  "options": [
   "\\(\\frac{f'(x)}{f(x)}\\)",
   "\\(\\frac{1}{f(x)}\\)",
   "\\(\\frac{f(x)}{f'(x)}\\)",
   "\\(f'(x)\\ln f(x)\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{f'(x)}{f(x)}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قاعدة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=\\log_a f(x)\\) هو:",
  "options": [
   "\\(\\frac{f'(x)}{f(x)\\ln a}\\)",
   "\\(\\frac{f'(x)}{f(x)}\\)",
   "\\(\\frac{f'(x)\\ln a}{f(x)}\\)",
   "\\(\\frac{1}{x\\ln a}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{f'(x)}{f(x)\\ln a}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\log_a x=\\frac{\\ln x}{\\ln a}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نقسم على</span><div class=\"m\">\\(\\ln a\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مشتق \\(y=a^{f(x)}\\) هو:",
  "options": [
   "\\(f'(x)\\,a^{f(x)}\\ln a\\)",
   "\\(f(x)\\,a^{f(x)-1}\\)",
   "\\(a^{f(x)}\\ln a\\)",
   "\\(f'(x)\\,a^{f(x)}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(f'(x)\\,a^{f(x)}\\ln a\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">خد \\(\\ln\\) للطرفين</span><div class=\"m\">\\(\\ln y=f(x)\\ln a\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{y'}{y}=f'(x)\\ln a\\)</div></div><b>❌ انتبه:</b> \\(a^x\\) مو قوة متل \\(x^n\\)، فما منطبق \\(n\\,x^{n-1}\\).",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\ln(3x)\\) هو:",
  "options": [
   "\\(\\frac1x\\)",
   "\\(\\frac3x\\)",
   "\\(\\frac1{3x}\\)",
   "3",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac1x\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{3}{3x}=\\frac1x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\ln(3x^2-2x+1)\\) هو:",
  "options": [
   "\\(\\frac{6x+2}{3x^2-2x+1}\\)",
   "\\(\\frac{1}{3x^2-2x+1}\\)",
   "\\(6x-2\\)",
   "\\(\\frac{6x}{3x^2-2x+1}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(\\frac{6x-2}{3x^2-2x+1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{f'}{f}\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\log_3(x^2-1)\\) هو:",
  "options": [
   "\\(\\frac{2x}{(x^2-1)\\ln3}\\)",
   "\\(\\frac{2x}{x^2-1}\\)",
   "\\(\\frac{2x\\ln3}{x^2-1}\\)",
   "\\(\\frac{1}{(x^2-1)\\ln3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{2x}{(x^2-1)\\ln3}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{f'}{f\\ln a}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=e^{5x-1}\\) هو:",
  "options": [
   "\\(5e^{5x-1}\\)",
   "\\(e^{5x-1}\\)",
   "\\((5x-1)e^{5x-2}\\)",
   "\\(5e^{5x}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(5e^{5x-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f'(x)e^{f(x)}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=e^{x^2-3x}\\) هو:",
  "options": [
   "\\((2x+3)e^{x^2-3x}\\)",
   "\\(e^{x^2-3x}\\)",
   "\\((x^2-3x)e^{x^2-3x-1}\\)",
   "\\(2x\\,e^{x^2-3x}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\((2x-3)e^{x^2-3x}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f'=2x-3\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=2^{x^2-1}\\) هو:",
  "options": [
   "\\(2x\\cdot2^{x^2-1}\\ln2\\)",
   "\\((x^2-1)2^{x^2-2}\\)",
   "\\(2x\\cdot2^{x^2-1}\\)",
   "\\(2^{x^2-1}\\ln2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(2x\\cdot2^{x^2-1}\\ln2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f'(x)\\,a^{f(x)}\\ln a\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=\\log_4(5x^2+4x+3)^2\\)، ولنفرض أن مشتقه \\(y'=\\frac{10x+4}{(5x^2+4x+3)\\ln4}\\,k\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(4\\)",
   "\\(3\\)",
   "\\(1\\)",
   "\\(2\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: \\(2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\log_4 f^2=2\\log_4 f\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'=2\\cdot\\frac{10x+4}{(5x^2+4x+3)\\ln4}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=2\\)</div></div><b>❌ انتبه:</b> (نموذج F19) لا تنسى الأس 2.",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=5^{\\ln x}\\)، ولنفرض أن مشتقه \\(y'=\\frac{k}{x}\\,5^{\\ln x}\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(1\\)",
   "\\(\\frac{1}{5}\\)",
   "\\(\\log{\\left(5 \\right)}\\)",
   "\\(5\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\log{\\left(5 \\right)}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a^{f(x)}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(f'(x)\\,a^{f(x)}\\ln a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(f=\\ln x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(f'=\\frac1x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'=\\frac{\\ln5}{x}5^{\\ln x}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=\\ln5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=\\ln(5x-3)\\)، ولنفرض أن مشتقه \\(y'=\\frac{k}{5x-3}\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(1\\)",
   "\\(-5\\)",
   "\\(-3\\)",
   "\\(\\frac{1}{5}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{f'}{f}=\\frac{5}{5x-3}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=5\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=\\log_4(7x^2+2x-5)\\)، ولنفرض أن مشتقه \\(y'=\\frac{14x+2}{(7x^2+2x-5)}\\cdot k\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(\\log{\\left(4 \\right)}\\)",
   "\\(\\frac{1}{\\log{\\left(4 \\right)}}\\)",
   "\\(4\\)",
   "\\(1\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{\\log{\\left(4 \\right)}}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y'=\\frac{14x+2}{(7x^2+2x-5)\\ln4}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=\\frac{1}{\\ln4}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=3^{2x^2-3x+5}\\)، ولنفرض أن مشتقه \\(y'=(4x-3)\\,3^{2x^2-3x+5}\\cdot k\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(\\log{\\left(3 \\right)}\\)",
   "\\(3\\)",
   "\\(1\\)",
   "\\(2 x^{2} - 3 x + 5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\log{\\left(3 \\right)}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(f'(x)\\,a^{f(x)}\\ln a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=\\ln3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ليكن التابع \\(y=e^{5x^2-3x+2}\\)، ولنفرض أن مشتقه \\(y'=k\\,(10x-3)\\,e^{5x^2-3x+2}\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(1\\)",
   "\\(10\\)",
   "\\(\\log{\\left(10 \\right)}\\)",
   "\\(5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((e^{f})'=f'e^{f}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ليكن التابع \\(y=\\ln(x^2-3x)^5\\)، ولنفرض أن مشتقه \\(y'=\\frac{k(2x-3)}{x^2-3x}\\). عندئذ قيمة \\(k\\):",
  "options": [
   "\\(1\\)",
   "\\(5\\)",
   "\\(2\\)",
   "\\(\\frac{1}{5}\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln f^5=5\\ln f\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'=\\frac{5(2x-3)}{x^2-3x}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(k=5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#logexp",
   "label": "مشتق التابع اللوغاريتمي والأسي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\sqrt{x}\\) هو:",
  "options": [
   "\\(\\frac{1}{2\\sqrt x}\\)",
   "\\(\\frac{1}{\\sqrt x}\\)",
   "\\(2\\sqrt x\\)",
   "\\(\\frac{\\sqrt x}{2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{2\\sqrt x}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x^{1/2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac12x^{-1/2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#root",
   "label": "مشتق التابع الأصم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\sqrt{x^2-3x+1}\\) هو:",
  "options": [
   "\\(\\frac{2x+3}{2\\sqrt{x^2-3x+1}}\\)",
   "\\(\\frac{1}{2\\sqrt{x^2-3x+1}}\\)",
   "\\(\\frac{2x-3}{\\sqrt{x^2-3x+1}}\\)",
   "\\(2\\sqrt{2x-3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(\\frac{2x-3}{2\\sqrt{x^2-3x+1}}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((\\sqrt f)'=\\frac{f'}{2\\sqrt f}\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#root",
   "label": "مشتق التابع الأصم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\sqrt{2x+3}\\) هو:",
  "options": [
   "\\(\\frac{1}{\\sqrt{2x+3}}\\)",
   "\\(\\frac{2}{\\sqrt{2x+3}}\\)",
   "\\(\\frac{1}{2\\sqrt{2x+3}}\\)",
   "\\(2\\sqrt{2x+3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{1}{\\sqrt{2x+3}}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{2}{2\\sqrt{2x+3}}=\\frac{1}{\\sqrt{2x+3}}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#root",
   "label": "مشتق التابع الأصم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\sqrt[3]{(3x-2)^5}\\) هو:",
  "options": [
   "\\(5\\sqrt[3]{(3x-2)^2}\\)",
   "\\(\\frac53\\sqrt[3]{(3x-2)^2}\\)",
   "\\(5(3x-2)^{5/3}\\)",
   "\\(\\frac{5}{3}(3x-2)^{-2/3}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(5\\sqrt[3]{(3x-2)^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((3x-2)^{5/3}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac53(3x-2)^{2/3}\\cdot3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=5(3x-2)^{2/3}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#root",
   "label": "مشتق التابع الأصم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مشتق \\(y=\\sqrt{e^{5x+1}}\\) هو:",
  "options": [
   "\\(\\frac52\\sqrt{e^{5x+1}}\\)",
   "\\(5\\sqrt{e^{5x+1}}\\)",
   "\\(\\frac{1}{2\\sqrt{e^{5x+1}}}\\)",
   "\\(\\frac{5}{\\sqrt{e^{5x+1}}}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac52\\sqrt{e^{5x+1}}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{5e^{5x+1}}{2\\sqrt{e^{5x+1}}}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac52\\sqrt{e^{5x+1}}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#root",
   "label": "مشتق التابع الأصم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتقات المتتالية للتابع \\(y=x^3-4x^2+5x-17\\) (مثال المقرر 11-9): \\(y'''\\) يساوي:",
  "options": [
   "6",
   "\\(6x-8\\)",
   "0",
   "\\(3x^2-8x+5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y'=3x^2-8x+5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y''=6x-8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y'''=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y^{(4)}=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#higher",
   "label": "المشتقات المتتالية والجزئية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الثاني للتابع \\(y=\\ln x\\) هو:",
  "options": [
   "\\(-\\frac1{x^2}\\)",
   "\\(\\frac1x\\)",
   "\\(\\frac{2}{x^3}\\)",
   "\\(\\frac1{x^2}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-\\frac1{x^2}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(y'=\\frac1x\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y''=-\\frac1{x^2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#higher",
   "label": "المشتقات المتتالية والجزئية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الجزئي \\(\\frac{\\partial z}{\\partial x}\\) للتابع \\(z=x^2y-3xy^3+x^3y-5\\) (مثال المقرر 13-9) هو:",
  "options": [
   "\\(2xy-3y^3+3x^2y\\)",
   "\\(x^2-9xy^2+x^3\\)",
   "\\(2x-3+3x^2\\)",
   "\\(2xy-9xy^2+3x^2y\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(2xy-3y^3+3x^2y\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">منعامل \\(y\\) كأنه ثابت ومنشتق بالنسبة لـ\\(x\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#higher",
   "label": "المشتقات المتتالية والجزئية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المشتق الجزئي \\(\\frac{\\partial z}{\\partial y}\\) للتابع \\(z=x^2y-3xy^3+x^3y-5\\) هو:",
  "options": [
   "\\(x^2-9xy^2+x^3\\)",
   "\\(2xy-3y^3+3x^2y\\)",
   "\\(x^2-3y^2+x^3\\)",
   "\\(x^2-9xy^2+x^3-5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x^2-9xy^2+x^3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">\\(x\\) ثابت</span><div class=\"m\">\\(x^2-9xy^2+x^3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#higher",
   "label": "المشتقات المتتالية والجزئية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المشتق الجزئي من المرتبة الثانية بالنسبة لمتحولين لا يتأثر بترتيب الاشتقاق: \\(\\frac{\\partial^2 f}{\\partial y\\partial x}=\\frac{\\partial^2 f}{\\partial x\\partial y}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مبرهنة بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-9-lesson.html#higher",
   "label": "المشتقات المتتالية والجزئية"
  }
 }
];
