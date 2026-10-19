/* بنك أسئلة الفصل 5 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH5_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "المصفوفة مجموعة منتهية من الأعداد الحقيقية متوضعة ضمن جدول مستطيل أو مربع على شكل أسطر وأعمدة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">تعريف المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#def",
   "label": "تعريف المصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة \\(A_{(m,n)}\\) فيها:",
  "options": [
   "\\(m\\) سطر و \\(n\\) عمود",
   "\\(m\\) عمود و \\(n\\) سطر",
   "\\(m\\cdot n\\) سطر",
   "\\(m+n\\) عنصر",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(m\\) سطر و \\(n\\) عمود</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المرتبة \\(m\\times n\\): الرقم الأول للأسطر والتاني للأعمدة</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#def",
   "label": "تعريف المصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في المصفوفة \\(A=\\begin{bmatrix}-2&3&1\\\\0&1&-1\\\\2&0&4\\end{bmatrix}\\) العنصر \\(a_{23}\\) هو:",
  "options": [
   "-1",
   "0",
   "1",
   "2",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a_{23}\\): السطر التاني، العمود التالت</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">السطر التاني</span><div class=\"m\">\\(0,\\ 1,\\ -1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">العنصر التالت</span><div class=\"m\">\\(-1\\)</div></div></div><b>❌ انتبه:</b> \\(a_{32}\\) (السطر التالت، العمود التاني) قيمته 0.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#def",
   "label": "تعريف المصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عدد عناصر المصفوفة \\(A_{(3,4)}\\) هو:",
  "options": [
   "7",
   "12",
   "3",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 12</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3\\times4=12\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#def",
   "label": "تعريف المصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المصفوفة المربعة هي المصفوفة التي عدد أسطرها يساوي عدد أعمدتها \\((n\\times n)\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">وعناصر \\(s_{11},s_{22},\\dots,s_{nn}\\) هي القطر الرئيسي</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المصفوفة الصفرية (المعدومة) هي مصفوفة كافة عناصرها أصفار.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة \\(A_{(1,n)}=[a_1\\ a_2\\ \\cdots\\ a_n]\\) تسمى:",
  "options": [
   "مصفوفة عمود",
   "مصفوفة سطر",
   "مصفوفة قطرية",
   "مصفوفة واحدية",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: مصفوفة سطر</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(m=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">سطر واحد</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">شعاع سطر</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المربعة التي عناصر قطرها الرئيسي واحد وباقي العناصر أصفار تسمى:",
  "options": [
   "المصفوفة القطرية",
   "المصفوفة الواحدية \\(I\\)",
   "المصفوفة المثلثية",
   "المصفوفة المتناظرة",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: المصفوفة الواحدية \\(I\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(I_{(n,n)}\\): أحادية (واحدة)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المربعة التي كل عناصرها خارج القطر الرئيسي أصفار تسمى:",
  "options": [
   "قطرية",
   "مثلثية عليا",
   "صفرية",
   "ماركوفية",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: قطرية</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(D=\\begin{bmatrix}d_{11}&0\\\\0&d_{22}\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المربعة التي كل عناصرها <b>تحت</b> القطر الرئيسي أصفار تسمى:",
  "options": [
   "مثلثية عليا",
   "مثلثية دنيا",
   "قطرية",
   "عددية",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: مثلثية عليا</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(T=\\begin{bmatrix}t_{11}&t_{12}\\\\0&t_{22}\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الأصفار تحت القطر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">عليا</div></div><b>❌ انتبه:</b> المثلثية الدنيا: الأصفار <b>فوق</b> القطر.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة القطرية التي كل عناصر قطرها متساوية \\(b\\) تسمى:",
  "options": [
   "عددية",
   "واحدية",
   "صفرية",
   "متعاكسة التناظر",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: عددية</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(B=\\begin{bmatrix}b&0\\\\0&b\\end{bmatrix}=b\\cdot I\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المصفوفة الماركوفية مصفوفة مربعة عناصرها موجبة أو معدومة، ومجموع عناصر أي عمود فيها يساوي الواحد.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\sum_i m_{ij}=1,\\ m_{ij}\\ge0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المربعة التي فيها \\(x_{ij}=x_{ji}\\) لكل \\(i,j\\) تسمى:",
  "options": [
   "متناظرة",
   "متعاكسة التناظر",
   "قطرية",
   "ماركوفية",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: متناظرة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">العناصر المتقابلة بالنسبة للقطر الرئيسي متساوية</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المربعة التي فيها \\(x_{ij}=-x_{ji}\\) لكل \\(i,j\\) تسمى:",
  "options": [
   "متناظرة",
   "متعاكسة التناظر (المتقابلة)",
   "واحدية",
   "مثلثية",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: متعاكسة التناظر (المتقابلة)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المتقابلة بالنسبة للقطر: نفس القيمة المطلقة وإشارة معاكسة</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عناصر القطر الرئيسي لمصفوفة متعاكسة التناظر كلها أصفار.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(x_{ii}=-x_{ii}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2x_{ii}=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x_{ii}=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "كل من المصفوفة القطرية والمصفوفة الواحدية مصفوفة متناظرة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة \\(\\begin{bmatrix}0&1&2\\\\-1&0&-3\\\\-2&3&0\\end{bmatrix}\\) هي:",
  "options": [
   "متناظرة",
   "متعاكسة التناظر",
   "واحدية",
   "مثلثية عليا",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: متعاكسة التناظر</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">القطر أصفار</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_{12}=1,\\ a_{21}=-1\\) · \\(a_{13}=2,\\ a_{31}=-2\\) · \\(a_{23}=-3,\\ a_{32}=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفتان \\(X_{(m,n)}\\) و \\(Y_{(m,n)}\\) متساويتان إذا:",
  "options": [
   "لهما نفس المرتبة فقط",
   "لهما نفس المرتبة وكل عنصر يساوي مقابله",
   "لهما نفس المعين",
   "لهما نفس عدد العناصر",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لهما نفس المرتبة وكل عنصر يساوي مقابله</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(x_{ij}=y_{ij}\\) لكل \\(i,j\\)، ونفس المرتبة</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة \\(a,b\\) التي تحقق \\(\\begin{bmatrix}a&2\\\\2&2b\\end{bmatrix}+\\begin{bmatrix}2b&5\\\\-4&3a\\end{bmatrix}=\\begin{bmatrix}3&7\\\\-2&-1\\end{bmatrix}\\):",
  "options": [
   "\\(a=-2,\\ b=\\tfrac52\\)",
   "\\(a=1,\\ b=1\\)",
   "\\(a=2,\\ b=-\\tfrac12\\)",
   "\\(a=-1,\\ b=2\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a=-2,\\ b=\\tfrac52\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">العنصر الأول</span><div class=\"m\">\\(a+2b=3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=3-2b\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">العنصر الأخير</span><div class=\"m\">\\(2b+3a=-1\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2b+9-6b=-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(b=\\tfrac52\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=3-5=-2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#types",
   "label": "أشكال المصفوفات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يشترط لجمع مصفوفتين أن يكون لهما المرتبة نفسها.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عملية جمع المصفوفات تبديلية وتجميعية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(X+Y=Y+X\\) و \\((X+Y)+Z=X+(Y+Z)\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العنصر الحيادي في جمع المصفوفات هو المصفوفة الصفرية \\(O_{(m,n)}\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(A=\\begin{bmatrix}-2&3&1\\\\0&1&-1\\\\2&0&4\\end{bmatrix}\\) و \\(B=\\begin{bmatrix}4&5&-3\\\\0&-2&1\\\\1&3&0\\end{bmatrix}\\) فإن \\(A+B\\):",
  "options": [
   "\\(\\begin{bmatrix}2 & 8 & -2 \\\\ 0 & -1 & 0 \\\\ 3 & 3 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}-6 & -2 & 4 \\\\ 0 & 3 & -2 \\\\ 1 & -3 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}6 & 2 & -4 \\\\ 0 & -3 & 2 \\\\ -1 & 3 & -4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & 8 & -2 \\\\ 0 & -1 & 0 \\\\ 3 & 3 & 5\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}2 & 8 & -2 \\\\ 0 & -1 & 0 \\\\ 3 & 3 & 4\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">منجمع كل عنصر مع مقابله</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">مثلاً</span><div class=\"m\">\\(-2+4=2\\) · \\(3+5=8\\) · \\(1+(-3)=-2\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(A=\\begin{bmatrix}1&2&0\\\\3&-1&4\\end{bmatrix}\\) و \\(B=\\begin{bmatrix}-1&1&1\\\\-2&3&5\\end{bmatrix}\\) فإن \\(3A-2B\\):",
  "options": [
   "\\(\\begin{bmatrix}5 & 4 & -2 \\\\ 13 & -9 & 2\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}1 & 8 & 2 \\\\ 5 & 3 & 22\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & 1 & -1 \\\\ 5 & -4 & -1\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}5 & 4 & -2 \\\\ 13 & -9 & 22\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}5 & 4 & -2 \\\\ 13 & -9 & 2\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3A=\\begin{bmatrix}3&6&0\\\\9&-3&12\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2B=\\begin{bmatrix}-2&2&2\\\\-4&6&10\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3A-2B=\\begin{bmatrix}5&4&-2\\\\13&-9&2\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ضرب المصفوفة \\(X\\) بالعدد \\(\\alpha\\) يعني:",
  "options": [
   "ضرب السطر الأول فقط بـ\\(\\alpha\\)",
   "ضرب كل عنصر من عناصرها بـ\\(\\alpha\\)",
   "ضرب القطر فقط بـ\\(\\alpha\\)",
   "إضافة \\(\\alpha\\) لكل عنصر",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: ضرب كل عنصر من عناصرها بـ\\(\\alpha\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\alpha X=[\\alpha\\,x_{ij}]\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند ضرب معين بعدد نضرب كل عناصره بهذا العدد، مثل ضرب المصفوفة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المصفوفة: كل العناصر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المعين: سطر واحد أو عمود واحد بس (رح نشوفها بالفصل 6)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\(X_{(m,n)}-X_{(m,n)}=O_{(m,n)}\\) حيث \\(\\overline{X}=-X\\) هي نظير المصفوفة بالنسبة للجمع.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#add",
   "label": "جمع المصفوفات وضربها بعدد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الشرط الضروري لإمكانية ضرب مصفوفتين أن يكون عدد أعمدة الأولى (اليسرى) مساوياً لعدد أسطر الثانية (اليمنى).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(X_{(m,n)}\\cdot Y_{(n,p)}=Z_{(m,p)}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "ناتج ضرب \\(X_{(2,3)}\\cdot Y_{(3,4)}\\) مصفوفة مرتبتها:",
  "options": [
   "\\((2,4)\\)",
   "\\((3,3)\\)",
   "\\((4,2)\\)",
   "غير ممكن",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\((2,4)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الدليلين الداخليين متساويين</span><div class=\"m\">\\(3=3\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ممكن</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الناتج بالدليلين الخارجيين</span><div class=\"m\">\\((2,4)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي جداء غير ممكن؟",
  "options": [
   "\\(X_{(3,1)}\\cdot Y_{(1,7)}\\)",
   "\\(X_{(1,4)}\\cdot Y_{(4,1)}\\)",
   "\\(X_{(2,3)}\\cdot Y_{(2,3)}\\)",
   "\\(X_{(3,3)}\\cdot Y_{(3,2)}\\)",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: \\(X_{(2,3)}\\cdot Y_{(2,3)}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(X_{(2,3)}\\cdot Y_{(2,3)}\\): أعمدة الأولى 3 ≠ أسطر التانية 2</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ناتج ضرب \\(X_{(4,1)}\\cdot Y_{(1,4)}\\) (مثال المقرر 4-5) هو:",
  "options": [
   "عدد واحد",
   "مصفوفة مربعة \\((4,4)\\)",
   "مصفوفة \\((1,1)\\)",
   "غير ممكن",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: مصفوفة مربعة \\((4,4)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((4,1)\\cdot(1,4)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((4,4)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">بالعكس \\(Y_{(1,4)}\\cdot X_{(4,1)}\\) بيعطي \\((1,1)\\) يعني عدد</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا \\(X=\\begin{bmatrix}1\\\\2\\\\0\\\\3\\end{bmatrix}\\) و \\(Y=[-1\\ 0\\ -2\\ 1]\\) فإن \\(Y\\cdot X\\) يساوي:",
  "options": [
   "2",
   "-2",
   "0",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((-1)(1)+0(2)+(-2)(0)+1(3)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-1+0+0+3=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا \\(P=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\) و \\(Q=\\begin{bmatrix}1&3\\\\0&2\\end{bmatrix}\\) فإن \\(P\\cdot Q\\):",
  "options": [
   "\\(\\begin{bmatrix}2 & 4 \\\\ 1 & 5\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}5 & 2 \\\\ 2 & 2\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & -3 \\\\ 0 & 2\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & 5 \\\\ 1 & 5\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}2 & 4 \\\\ 1 & 5\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(z_{11}=2(1)+(-1)(0)=2\\) · \\(z_{12}=2(3)+(-1)(2)=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(z_{21}=1(1)+1(0)=1\\) · \\(z_{22}=1(3)+1(2)=5\\)</div></div><b>❌ انتبه:</b> «سطر × عمود» مو عنصر × عنصر.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عملية ضرب المصفوفات ليست تبديلية بصورة عامة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثلاً \\(PQ=\\begin{bmatrix}2&4\\\\1&5\\end{bmatrix}\\) بينما \\(QP=\\begin{bmatrix}5&2\\\\2&2\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كانت إحدى المصفوفتين المربعتين مصفوفة واحدية فإن عملية الضرب تبديلية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(I\\cdot A=A\\cdot I=A\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "قد يكون ناتج ضرب مصفوفتين مساوياً للمصفوفة الصفرية دون أن تكون أي منهما صفرية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">مثال المقرر (6-5)</span><div class=\"m\">\\(\\begin{bmatrix}1&0&3\\\\0&1&1\\end{bmatrix}\\begin{bmatrix}3&15\\\\1&5\\\\-1&-5\\end{bmatrix}=\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان \\(X\\cdot Y=X\\cdot Z\\) فإن \\(Y=Z\\) بالضرورة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">بضرب المصفوفات ما فينا نختصر (ملاحظة المقرر رقم 7)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "ضرب مصفوفة بمصفوفة قطرية من اليسار يضرب كل سطر من أسطر المصفوفة بالعنصر القطري المقابل.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">خاصة 6 بالمقرر (ومن اليمين: الأعمدة)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ناتج \\(\\begin{bmatrix}-1&0&0\\\\0&5&0\\\\0&0&2\\end{bmatrix}\\cdot\\begin{bmatrix}3&15\\\\1&5\\\\-1&-5\\end{bmatrix}\\) (مثال المقرر 7-5) هو:",
  "options": [
   "\\(\\begin{bmatrix}-3 & -15 \\\\ 5 & 25 \\\\ -2 & -10\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}3 & 15 \\\\ 5 & 25 \\\\ -2 & -10\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}-3 & 15 \\\\ 5 & 5 \\\\ -2 & -5\\end{bmatrix}\\)",
   "غير ممكن",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}-3 & -15 \\\\ 5 & 25 \\\\ -2 & -10\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">قطرية من اليسار</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">كل سطر بينضرب بعنصره القطري</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">السطر 1 × \\((-1)\\) · السطر 2 × 5 · السطر 3 × 2</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا \\(A=\\begin{bmatrix}1&-2\\\\-1&3\\end{bmatrix}\\) فإن \\(A^2\\) يساوي:",
  "options": [
   "\\(\\begin{bmatrix}3 & -8 \\\\ -4 & 11\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}1 & 4 \\\\ 1 & 9\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & -4 \\\\ -2 & 6\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}3 & -4 \\\\ -8 & 11\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}3 & -8 \\\\ -4 & 11\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(A^2=A\\cdot A\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\begin{bmatrix}1+2&-2-6\\\\-1-3&2+9\\end{bmatrix}=\\begin{bmatrix}3&-8\\\\-4&11\\end{bmatrix}\\)</div></div><b>❌ انتبه:</b> \\(A^2\\) مو تربيع كل عنصر.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#mult",
   "label": "ضرب مصفوفة بمصفوفة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "منقول (مدور) المصفوفة \\(X_{(4,3)}=\\begin{bmatrix}1&0&2\\\\0&6&5\\\\3&-1&10\\\\0&2&3\\end{bmatrix}\\) هو:",
  "options": [
   "\\(\\begin{bmatrix}1 & 0 & 3 & 0 \\\\ 0 & 6 & -1 & 2 \\\\ 2 & 5 & 10 & 3\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}1 & 0 & 2 \\\\ 0 & 6 & 5 \\\\ 3 & -1 & 10 \\\\ 0 & 2 & 3\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}2 & 5 & 10 & 3 \\\\ 0 & 6 & -1 & 2 \\\\ 1 & 0 & 3 & 0\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & 2 & 3 \\\\ 3 & -1 & 10 \\\\ 0 & 6 & 5 \\\\ 1 & 0 & 2\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}1 & 0 & 3 & 0 \\\\ 0 & 6 & -1 & 2 \\\\ 2 & 5 & 10 & 3\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الأسطر بتصير أعمدة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">السطر الأول</span><div class=\"m\">\\(1,0,2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">العمود الأول</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرتبة بتصير</span><div class=\"m\">\\((3,4)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "\\((X+Y)^T=X^T+Y^T\\) و \\((\\alpha X)^T=\\alpha X^T\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">خواص المدور بالمقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "\\((X\\cdot Y)^T\\) يساوي:",
  "options": [
   "\\(X^T\\cdot Y^T\\)",
   "\\(Y^T\\cdot X^T\\)",
   "\\(X\\cdot Y\\)",
   "\\((Y\\cdot X)\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(Y^T\\cdot X^T\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مدور الجداء = جداء المدورين <b>بعد تبديل مكانيهما</b></div></div><b>❌ انتبه:</b> \\(X^TY^T\\) غلط (الترتيب بيتعكس).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مدور مدور المصفوفة هو المصفوفة الأصلية: \\((X^T)^T=X\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كانت المصفوفة متناظرة فإنها تساوي مدورها \\(S=S^T\\)، وإذا كانت متعاكسة التناظر فإن \\(A=-A^T\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "كل مصفوفة مربعة \\(M\\) يمكن كتابتها بصورة \\(M=S+A\\) حيث \\(S\\) متناظرة و \\(A\\) متعاكسة التناظر، و:",
  "options": [
   "\\(S=\\frac12(M+M^T),\\ A=\\frac12(M-M^T)\\)",
   "\\(S=M+M^T,\\ A=M-M^T\\)",
   "\\(S=\\frac12(M-M^T),\\ A=\\frac12(M+M^T)\\)",
   "\\(S=M^T,\\ A=-M\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(S=\\frac12(M+M^T),\\ A=\\frac12(M-M^T)\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(M^T=S-A\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نجمع</span><div class=\"m\">\\(M+M^T=2S\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نطرح</span><div class=\"m\">\\(M-M^T=2A\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المصفوفة المتناظرة \\(S\\) من \\(M=\\begin{bmatrix}0&1\\\\3&4\\end{bmatrix}\\) هي:",
  "options": [
   "\\(\\begin{bmatrix}0 & 2 \\\\ 2 & 4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & -1 \\\\ 1 & 0\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & 4 \\\\ 4 & 8\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}0 & 1 \\\\ 3 & 4\\end{bmatrix}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\begin{bmatrix}0 & 2 \\\\ 2 & 4\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(M^T=\\begin{bmatrix}0&3\\\\1&4\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=\\frac12(M+M^T)=\\frac12\\begin{bmatrix}0&4\\\\4&8\\end{bmatrix}=\\begin{bmatrix}0&2\\\\2&4\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#trans",
   "label": "منقول (مدور) المصفوفة والمتناظرة"
  }
 }
];
