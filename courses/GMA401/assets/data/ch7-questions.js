/* بنك أسئلة الفصل 7 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH7_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "مقلوب المصفوفة المربعة \\(A\\) هو مصفوفة \\(A^{-1}\\) بحيث \\(A\\cdot A^{-1}=A^{-1}\\cdot A=I\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تعريف المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يمكن إيجاد مقلوب لأي مصفوفة مستطيلة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المقلوب للمصفوفات <b>المربعة</b> بس، وبشرط معينها</span><div class=\"m\">\\(\\ne0\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان معين المصفوفة مساوياً للصفر فلا يكون لها مقلوب، وتسمى شاذة (غير نظامية).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">شرط وجود المقلوب</span><div class=\"m\">\\(\\Delta\\ne0\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(A=\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}\\) حيث \\(\\Delta\\ne0\\) هو:",
  "options": [
   "\\(\\frac1\\Delta\\begin{bmatrix}a_{22}&-a_{12}\\\\-a_{21}&a_{11}\\end{bmatrix}\\)",
   "\\(\\frac1\\Delta\\begin{bmatrix}a_{11}&-a_{12}\\\\-a_{21}&a_{22}\\end{bmatrix}\\)",
   "\\(\\Delta\\begin{bmatrix}a_{22}&-a_{12}\\\\-a_{21}&a_{11}\\end{bmatrix}\\)",
   "\\(\\frac1\\Delta\\begin{bmatrix}a_{22}&a_{12}\\\\a_{21}&a_{11}\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac1\\Delta\\begin{bmatrix}a_{22}&-a_{12}\\\\-a_{21}&a_{11}\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المساعدة: نبدّل عنصري القطر الرئيسي ونضرب عنصري القطر الثانوي بـ\\(-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\frac{Adj(A)}{\\Delta}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(A=\\begin{bmatrix}2&-1\\\\1&5\\end{bmatrix}\\) (مثال المقرر 1-7) هو:",
  "options": [
   "\\(\\begin{bmatrix}\\tfrac{5}{11} & \\tfrac{1}{11} \\\\ - \\tfrac{1}{11} & \\tfrac{2}{11}\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}5 & 1 \\\\ -1 & 2\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}\\tfrac{5}{11} & - \\tfrac{1}{11} \\\\ \\tfrac{1}{11} & \\tfrac{2}{11}\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}\\tfrac{2}{11} & \\tfrac{1}{11} \\\\ - \\tfrac{1}{11} & \\tfrac{5}{11}\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}\\tfrac{5}{11} & \\tfrac{1}{11} \\\\ - \\tfrac{1}{11} & \\tfrac{2}{11}\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=10-(-1)=11\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Adj(A)=\\begin{bmatrix}5&1\\\\-1&2\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\frac1{11}\\begin{bmatrix}5&1\\\\-1&2\\end{bmatrix}\\)</div></div><b>❌ انتبه:</b> لا تنسى تقسم على المعين.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(\\begin{bmatrix}4&7\\\\1&2\\end{bmatrix}\\) هو:",
  "options": [
   "\\(\\begin{bmatrix}2 & -7 \\\\ -1 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & 7 \\\\ 1 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}4 & -7 \\\\ -1 & 2\\end{bmatrix}\\)",
   "غير موجود",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}2 & -7 \\\\ -1 & 4\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=8-7=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\begin{bmatrix}2&-7\\\\-1&4\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(\\begin{bmatrix}3&4\\\\6&8\\end{bmatrix}\\):",
  "options": [
   "\\(\\begin{bmatrix}8 & -4 \\\\ -6 & 3\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}\\tfrac{1}{3} & - \\tfrac{1}{6} \\\\ - \\tfrac{1}{4} & \\tfrac{1}{8}\\end{bmatrix}\\)",
   "غير موجود لأن \\(\\Delta=0\\)",
   "\\(\\begin{bmatrix}3 & -4 \\\\ -6 & 8\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: غير موجود لأن \\(\\Delta=0\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=24-24=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">شاذة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما إلها مقلوب</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(\\begin{bmatrix}4&-2\\\\2&0\\end{bmatrix}\\) هو:",
  "options": [
   "\\(\\begin{bmatrix}0 & \\tfrac{1}{2} \\\\ - \\tfrac{1}{2} & 1\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & 2 \\\\ -2 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & - \\tfrac{1}{2} \\\\ \\tfrac{1}{2} & 1\\end{bmatrix}\\)",
   "غير موجود",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}0 & \\tfrac{1}{2} \\\\ - \\tfrac{1}{2} & 1\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=0-(-4)=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Adj=\\begin{bmatrix}0&2\\\\-2&4\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\begin{bmatrix}0&\\frac12\\\\-\\frac12&1\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}\\) هو:",
  "options": [
   "\\(\\begin{bmatrix}0 & -1 \\\\ 1 & 0\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & 1 \\\\ -1 & 0\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}\\)",
   "غير موجود",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}0 & -1 \\\\ 1 & 0\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=0-(-1)=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv2",
   "label": "مقلوب مصفوفة من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لإيجاد مقلوب مصفوفة من المرتبة الثالثة: نحسب المعين، ثم مصفوفة المرافقات \\(A^c\\)، ثم المساعدة \\(Adj(A)=(A^c)^T\\)، ثم نقسم على المعين.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">خطوات المقرر الأربعة</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المصفوفة المساعدة \\(Adj(A)\\) هي نفسها مصفوفة المرافقات \\(A^c\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">المساعدة هي <b>مدور</b> مصفوفة المرافقات</span><div class=\"m\">\\(Adj(A)=(A^c)^T\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y + z = 3 \\\\ x + y - 2 z = 2 \\\\ 3 x - 2 y + 4 z = 1\\end{cases}<br>العنصر الواقع في تقاطع السطر الثالث مع العمود الأول في مصفوفة المصغرات هو:",
  "options": [
   "\\(-5\\)",
   "\\(1\\)",
   "\\(4\\)",
   "\\(0\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المصغّر \\(M(a_{31})\\): نحذف السطر 3 والعمود 1</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{vmatrix}-1&1\\\\1&-2\\end{vmatrix}=2-1=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y + z = 3 \\\\ x + y - 2 z = 2 \\\\ 3 x - 2 y + 4 z = 1\\end{cases}<br>العنصر الواقع في تقاطع السطر الثاني مع العمود الثالث في مصفوفة المرافقات هو:",
  "options": [
   "\\(7\\)",
   "\\(-10\\)",
   "\\(3\\)",
   "\\(2\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(M(a_{23})=\\begin{vmatrix}3&-1\\\\3&-2\\end{vmatrix}=-6+3=-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(2+3\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق</span><div class=\"m\">\\(=-(-3)=3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y + z = 3 \\\\ x + y - 2 z = 2 \\\\ 3 x - 2 y + 4 z = 1\\end{cases}<br>العنصر الواقع في تقاطع السطر الأول مع العمود الثاني في المصفوفة المساعدة هو:",
  "options": [
   "\\(3\\)",
   "\\(7\\)",
   "\\(-10\\)",
   "\\(-2\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة \\(2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Adj=(A^c)^T\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عنصر \\((1,2)\\) بالمساعدة = عنصر \\((2,1)\\) بالمرافقات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(M(a_{21})=\\begin{vmatrix}-1&1\\\\-2&4\\end{vmatrix}=-4+2=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(2+1\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق</span><div class=\"m\">\\(=2\\)</div></div></div><b>❌ انتبه:</b> المساعدة مدور المرافقات: بدّل السطر بالعمود.<div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y + z = 3 \\\\ x + y - 2 z = 2 \\\\ 3 x - 2 y + 4 z = 1\\end{cases}<br>العنصر الواقع في تقاطع السطر الثالث مع العمود الثاني في مقلوب مصفوفة الأمثال هو:",
  "options": [
   "\\(\\tfrac{3}{5}\\)",
   "\\(\\tfrac{1}{3}\\)",
   "\\(\\tfrac{5}{3}\\)",
   "\\(3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\tfrac{3}{5}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عنصر \\((3,2)\\) بالمقلوب = عنصر \\((2,3)\\) بالمرافقات ÷ \\(\\Delta\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a^c_{23}=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac35\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y + z = 3 \\\\ x + y - 2 z = 2 \\\\ 3 x - 2 y + 4 z = 1\\end{cases}<br>إن قيمة \\(z\\) تساوي (نموذج امتحاني):",
  "options": [
   "1",
   "-1",
   "2",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: -1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(X=A^{-1}B\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=1,\\ y=-1,\\ z=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق بالمعادلة الأولى</span><div class=\"m\">\\(3+1-1=3\\) ✓</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y - 2 z = 1 \\\\ x - 3 y + z = -2 \\\\ x + y - 3 z = -3\\end{cases}<br>العنصر الواقع في تقاطع السطر الأول مع العمود الثاني في مصفوفة المصغرات هو:",
  "options": [
   "\\(-4\\)",
   "\\(3\\)",
   "\\(-2\\)",
   "\\(4\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(-4\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(M(a_{12})\\): نحذف السطر 1 والعمود 2</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{vmatrix}1&1\\\\1&-3\\end{vmatrix}=-3-1=-4\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y - 2 z = 1 \\\\ x - 3 y + z = -2 \\\\ x + y - 3 z = -3\\end{cases}<br>العنصر الواقع في تقاطع السطر الثاني مع العمود الأول في مصفوفة المرافقات هو:",
  "options": [
   "\\(3\\)",
   "\\(5\\)",
   "\\(-5\\)",
   "\\(-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(-5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(M(a_{21})=\\begin{vmatrix}-1&-2\\\\1&-3\\end{vmatrix}=3+2=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(2+1\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق</span><div class=\"m\">\\(=-5\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y - 2 z = 1 \\\\ x - 3 y + z = -2 \\\\ x + y - 3 z = -3\\end{cases}<br>العنصر الواقع في تقاطع السطر الثالث مع العمود الثالث في المصفوفة المساعدة هو:",
  "options": [
   "\\(-6\\)",
   "\\(6\\)",
   "\\(8\\)",
   "\\(-8\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: \\(-8\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(Adj_{33}=a^c_{33}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(M(a_{33})=\\begin{vmatrix}3&-1\\\\1&-3\\end{vmatrix}=-9+1=-8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(3+3\\) زوجي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-8\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y - 2 z = 1 \\\\ x - 3 y + z = -2 \\\\ x + y - 3 z = -3\\end{cases}<br>العنصر الواقع في تقاطع السطر الثاني مع العمود الثالث في مقلوب مصفوفة الأمثال هو:",
  "options": [
   "\\(- \\tfrac{2}{3}\\)",
   "\\(\\tfrac{5}{12}\\)",
   "\\(\\tfrac{2}{3}\\)",
   "\\(- \\tfrac{5}{12}\\)",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: \\(- \\tfrac{5}{12}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عنصر \\((2,3)\\) بالمقلوب = \\(\\frac{a^c_{32}}{\\Delta}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(M(a_{32})=\\begin{vmatrix}3&-2\\\\1&1\\end{vmatrix}=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق</span><div class=\"m\">\\(-5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{-5}{12}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الجملة \\begin{cases}3 x - y - 2 z = 1 \\\\ x - 3 y + z = -2 \\\\ x + y - 3 z = -3\\end{cases}<br>إن قيمة \\(x\\) في حل الجملة تساوي (نموذج F19):",
  "options": [
   "\\(-\\frac{38}{12}\\)",
   "\\(\\frac{38}{12}\\)",
   "\\(\\frac74\\)",
   "\\(-\\frac74\\)",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — \\(x=\\frac{39}{12}=\\frac{13}{4}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(X=A^{-1}B=\\frac1{12}\\begin{bmatrix}8&-5&-7\\\\4&-7&-5\\\\4&-4&-8\\end{bmatrix}\\begin{bmatrix}1\\\\-2\\\\-3\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{8+10+21}{12}=\\frac{39}{12}=\\frac{13}{4}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو موجودة بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">«غير ذلك»</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(A=\\begin{bmatrix}3&0&1\\\\-1&2&0\\\\3&1&2\\end{bmatrix}\\) (مثال المقرر 2-7) هو:",
  "options": [
   "\\(\\begin{bmatrix}\\tfrac{4}{5} & \\tfrac{1}{5} & - \\tfrac{2}{5} \\\\ \\tfrac{2}{5} & \\tfrac{3}{5} & - \\tfrac{1}{5} \\\\ - \\tfrac{7}{5} & - \\tfrac{3}{5} & \\tfrac{6}{5}\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}4 & 1 & -2 \\\\ 2 & 3 & -1 \\\\ -7 & -3 & 6\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}\\tfrac{4}{5} & \\tfrac{2}{5} & - \\tfrac{7}{5} \\\\ \\tfrac{1}{5} & \\tfrac{3}{5} & - \\tfrac{3}{5} \\\\ - \\tfrac{2}{5} & - \\tfrac{1}{5} & \\tfrac{6}{5}\\end{bmatrix}\\)",
   "غير موجود",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}\\tfrac{4}{5} & \\tfrac{1}{5} & - \\tfrac{2}{5} \\\\ \\tfrac{2}{5} & \\tfrac{3}{5} & - \\tfrac{1}{5} \\\\ - \\tfrac{7}{5} & - \\tfrac{3}{5} & \\tfrac{6}{5}\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=3(4)-1-6=5\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^c=\\begin{bmatrix}4&2&-7\\\\1&3&-3\\\\-2&-1&6\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(Adj=(A^c)^T\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\frac15 Adj(A)\\)</div></div><b>❌ انتبه:</b> إذا ما أخدت المدور بتطلع \\(\\frac15A^c\\) وهي غلط.",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المصفوفة \\(B=\\begin{bmatrix}1&-1&2\\\\3&1&2\\\\2&3&-1\\end{bmatrix}\\):",
  "options": [
   "مقلوبها موجود",
   "\\(-1\\)",
   "مقلوبها هي نفسها",
   "متناظرة",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة شاذة (\\(\\Delta=0\\)) فليس لها مقلوب</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">العمود الأول = العمود التاني + العمود التالت</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المعين صفر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما إلها مقلوب</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#inv3",
   "label": "مقلوب مصفوفة من المرتبة الثالثة (المصغرات والمرافقات والمساعدة)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مقلوب المصفوفة القطرية مصفوفة قطرية عناصرها مقلوبات عناصر قطر المصفوفة الأصلية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\begin{bmatrix}2&0\\\\0&5\\end{bmatrix}^{-1}=\\begin{bmatrix}\\frac12&0\\\\0&\\frac15\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#invp",
   "label": "خواص المقلوب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مقلوب المصفوفة المقلوبة هو المصفوفة الأصلية: \\((A^{-1})^{-1}=A\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#invp",
   "label": "خواص المقلوب"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\((A\\cdot B)^{-1}\\) يساوي:",
  "options": [
   "\\(B^{-1}\\cdot A^{-1}\\)",
   "\\(A^{-1}\\cdot B^{-1}\\)",
   "\\(A\\cdot B\\)",
   "\\((B\\cdot A)\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(B^{-1}\\cdot A^{-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مقلوب الجداء = جداء المقلوبين بعد تبديل مواضعهما (متل المدور)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#invp",
   "label": "خواص المقلوب"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مقلوب مدور المصفوفة يساوي مدور مقلوبها: \\((A^T)^{-1}=(A^{-1})^T\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#invp",
   "label": "خواص المقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل الجملة \\(2x+3y=-1,\\ x-2y=3\\) بطريقة مقلوب المصفوفة (مثال المقرر 4-7) هو:",
  "options": [
   "\\(x=1,\\ y=-1\\)",
   "\\(x=-1,\\ y=1\\)",
   "\\(x=1,\\ y=1\\)",
   "\\(x=2,\\ y=-1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=1,\\ y=-1\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=\\begin{vmatrix}2&3\\\\1&-2\\end{vmatrix}=-7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=-\\frac17\\begin{bmatrix}-2&-3\\\\-1&2\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{bmatrix}x\\\\y\\end{bmatrix}=-\\frac17\\begin{bmatrix}-2&-3\\\\-1&2\\end{bmatrix}\\begin{bmatrix}-1\\\\3\\end{bmatrix}=\\begin{bmatrix}1\\\\-1\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل الجملة \\(3x+4y=2,\\ x-y=-1\\) هو:",
  "options": [
   "\\(x=-\\frac27,\\ y=\\frac57\\)",
   "\\(x=\\frac27,\\ y=-\\frac57\\)",
   "\\(x=-1,\\ y=0\\)",
   "\\(x=\\frac57,\\ y=-\\frac27\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=-\\frac27,\\ y=\\frac57\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=-3-4=-7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=\\frac{\\Delta_x}{\\Delta}=\\frac{\\begin{vmatrix}2&4\\\\-1&-1\\end{vmatrix}}{-7}=\\frac{2}{-7}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(y=\\frac{\\Delta_y}{\\Delta}=\\frac{\\begin{vmatrix}3&2\\\\1&-1\\end{vmatrix}}{-7}=\\frac{-5}{-7}=\\frac57\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لحل الجملة \\(AX=B\\) نضرب الطرفين من اليسار بـ\\(A^{-1}\\) فنجد \\(X=A^{-1}B\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لحل الجملة \\(AX=B\\) نحسب \\(X=B\\cdot A^{-1}\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الترتيب مهم: \\(X=A^{-1}B\\) (المقلوب من <b>اليسار</b>)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حل الجملة \\(2x-y+z=0,\\ x-4y-3z=1,\\ 3x+y+2z=3\\) (مثال المقرر 6-7) هو:",
  "options": [
   "\\(x=\\frac{12}7,\\ y=\\frac{11}7,\\ z=-\\frac{13}7\\)",
   "\\(x=1,\\ y=1,\\ z=-1\\)",
   "\\(x=\\frac{24}7,\\ y=\\frac{22}7,\\ z=-\\frac{26}7\\)",
   "\\(x=\\frac{12}7,\\ y=-\\frac{11}7,\\ z=\\frac{13}7\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x=\\frac{12}7,\\ y=\\frac{11}7,\\ z=-\\frac{13}7\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\Delta=14\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(X=\\frac1{14}Adj(A)\\,B=\\frac1{14}\\begin{bmatrix}24\\\\22\\\\-26\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#sys",
   "label": "حل جملة معادلات خطية بمقلوب مصفوفة الأمثال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "رتبة المصفوفة \\(A\\) هي:",
  "options": [
   "عدد أسطرها",
   "مرتبة أكبر مصغّر (معين جزئي) غير معدوم فيها",
   "عدد عناصرها غير الصفرية",
   "معينها",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: مرتبة أكبر مصغّر (معين جزئي) غير معدوم فيها</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(r(A)\\): أكبر \\(r\\) فيه مصغّر من المرتبة \\(r\\) لا يساوي الصفر</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كانت المصفوفة المربعة \\(A_{(n,n)}\\) نظامية (معينها غير معدوم) فإن رتبتها \\(n\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "رتبة أي مصفوفة أصغر أو تساوي العدد الأصغر بين عدد أسطرها وعدد أعمدتها: \\(r(A_{(m,n)})\\le\\min(m,n)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "رتبة المصفوفة \\(B=\\begin{bmatrix}1&1&5\\\\2&1&7\\\\1&3&11\\end{bmatrix}\\) (مثال المقرر) هي:",
  "options": [
   "3",
   "2",
   "1",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(|B|=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الرتبة أقل من 3</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{vmatrix}1&1\\\\2&1\\end{vmatrix}=-1\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r(B)=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "رتبة المصفوفة \\(A=\\begin{bmatrix}3&2&1\\\\2&-1&4\\\\-2&0&1\\end{bmatrix}\\) (مثال المقرر 8-7) هي:",
  "options": [
   "3",
   "2",
   "1",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(|A|\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r(A)=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "رتبة المصفوفة \\(C=\\begin{bmatrix}2&-1\\\\3&4\\\\5&-1\\end{bmatrix}\\) هي:",
  "options": [
   "3",
   "2",
   "1",
   "6",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r\\le\\min(3,2)=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{vmatrix}2&-1\\\\3&4\\end{vmatrix}=11\\ne0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r(C)=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا تتغير رتبة المصفوفة إذا ضربنا صفاً بثابت غير معدوم أو أضفنا صفاً مضروباً بثابت إلى صف آخر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي التحويلات الأولية</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من التحويلات الأولية على المصفوفات:",
  "options": [
   "المبادلة بين صفين أو عمودين",
   "ضرب صف أو عمود بعدد \\(K\\ne0\\)",
   "إضافة مضاعف صف إلى صف آخر",
   "جميع ما سبق",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: جميع ما سبق</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(R_{ij}\\) · \\(R_i(K)\\) · \\(R_i+KR_j\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "رتبة المصفوفة الواحدية \\(I_n\\) هي \\(n\\)، ورتبة المصفوفة الصفرية صفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#rank",
   "label": "رتبة المصفوفة والتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تكون الجملة \\(AX=B\\) متوافقة (قابلة للحل) إذا كانت \\(r(A)=r(A\\,|\\,B)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كانت \\(r(A)=r(A|B)=n\\) (عدد المجاهيل) فإن الجملة:",
  "options": [
   "لها حل وحيد",
   "لها عدد لا نهائي من الحلول",
   "مستحيلة الحل",
   "لها حلان",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: لها حل وحيد</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">متوافقة والرتبة = عدد المجاهيل</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حل وحيد</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت \\(r(A)=r(A|B)\\lt n\\) فإن الجملة:",
  "options": [
   "لها حل وحيد",
   "لها عدد لا نهائي من الحلول بدلالة \\(n-r\\) مجهول اختياري",
   "مستحيلة الحل",
   "ليس لها معنى",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لها عدد لا نهائي من الحلول بدلالة \\(n-r\\) مجهول اختياري</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">مثال المقرر (17-7)</span><div class=\"m\">\\(r=2\\lt4\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مجهولين اختياريين</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كانت \\(r(A)\\ne r(A|B)\\) فإن الجملة:",
  "options": [
   "مستحيلة الحل",
   "لها حل وحيد",
   "لها حلول لا نهائية",
   "متوافقة",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: مستحيلة الحل</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">غير متوافقة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ما إلها حل</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الجملة \\(x_1+3x_2-x_3=2,\\ x_1-3x_2-x_3=-1,\\ 3x_1-3x_2-3x_3=-1\\) (مثال المقرر 22-7):",
  "options": [
   "لها حل وحيد",
   "لها عدد لا نهائي من الحلول",
   "مستحيلة الحل",
   "حلها \\(x_1=x_2=x_3=0\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لها عدد لا نهائي من الحلول</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بالتحويلات الأولية</span><div class=\"m\">\\(r(A)=r(A|B)=2\\lt3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متوافقة بحلول لا نهائية بمجهول اختياري واحد</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحل المصفوفي للجملة \\(3x_1-2x_2=-1,\\ -2x_1+3x_2=4,\\ 5x_3=15\\) (مثال المقرر 19-7) هو:",
  "options": [
   "\\(x_1=1,\\ x_2=2,\\ x_3=3\\)",
   "\\(x_1=2,\\ x_2=1,\\ x_3=3\\)",
   "\\(x_1=-1,\\ x_2=2,\\ x_3=3\\)",
   "\\(x_1=1,\\ x_2=-2,\\ x_3=3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(x_1=1,\\ x_2=2,\\ x_3=3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((A|I)\\sim(I|A^{-1})\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(A^{-1}=\\begin{bmatrix}\\frac35&\\frac25&0\\\\\\frac25&\\frac35&0\\\\0&0&\\frac15\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(X=A^{-1}B\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1,\\ 2,\\ 3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-7-lesson.html#consist",
   "label": "توافق الجملة والحل بالتحويلات الأولية"
  }
 }
];
