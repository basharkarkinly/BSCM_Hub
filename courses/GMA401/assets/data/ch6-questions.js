/* بنك أسئلة الفصل 6 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH6_POOL = [
 {
  "origin": "gen",
  "type": "tf",
  "question": "معين المصفوفة المربعة عبارة عن عدد يمكن حسابه من عناصر المصفوفة بطريقة معينة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">المصفوفة جدول أعداد، والمعين عدد واحد</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#det2",
   "label": "المعين من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}1 & 2 \\\\ -3 & 4\\end{vmatrix}\\) هي:",
  "options": [
   "10",
   "-2",
   "2",
   "-10",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 10</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}=a_1b_2-b_1a_2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1\\times4-2\\times(-3)=4+6=10\\)</div></div><b>❌ انتبه:</b> انتبه للإشارة: \\(-2\\times(-3)=+6\\).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#det2",
   "label": "المعين من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}3 & -1 \\\\ 7 & -4\\end{vmatrix}\\) هي:",
  "options": [
   "-5",
   "-19",
   "5",
   "19",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3\\times(-4)-(-1)\\times7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-12+7=-5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#det2",
   "label": "المعين من المرتبة الثانية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}-2 & 3 \\\\ -1 & 4\\end{vmatrix}\\) هي:",
  "options": [
   "\\(-4\\)",
   "-11",
   "5",
   "11",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة -5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((-2)(4)-(3)(-1)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-8+3=-5\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#det2",
   "label": "المعين من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}2 & -1 \\\\ 1 & 5\\end{vmatrix}\\) هي:",
  "options": [
   "9",
   "10",
   "-11",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة 11</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\times5-(-1)\\times1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=10+1=11\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#det2",
   "label": "المعين من المرتبة الثانية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا تتغير قيمة المعين إذا بدلنا سطريه بعموديه أو عموديه بسطريه.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}=\\begin{vmatrix}a_1&a_2\\\\b_1&b_2\\end{vmatrix}\\) (المعين يساوي معين المدور)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا تتغير قيمة المعين إذا بدلنا موقعي سطريه.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بتتبدل <b>إشارته</b></span><div class=\"m\">\\(\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}=-\\begin{vmatrix}a_2&b_2\\\\a_1&b_1\\end{vmatrix}\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لضرب المعين بعدد \\(\\alpha\\) يكفي أن نضرب عنصري سطر واحد (أو عمود واحد) فيه بـ\\(\\alpha\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\alpha\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}=\\begin{vmatrix}\\alpha a_1&\\alpha b_1\\\\a_2&b_2\\end{vmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كان \\(\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=5\\) فإن \\(\\begin{vmatrix}3a&3b\\\\c&d\\end{vmatrix}\\) يساوي:",
  "options": [
   "15",
   "45",
   "5",
   "8",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 15</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ضربنا سطر واحد بـ3</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المعين بينضرب بـ3</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3\\times5=15\\)</div></div><b>❌ انتبه:</b> بالمصفوفة كل العناصر بتنضرب؛ بالمعين سطر واحد بيكفي. لو ضربنا السطرين بيصير \\(9\\times5=45\\).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كان عنصرا أحد السطرين مساويين لعنصري السطر الآخر بعد ضربهما بمقدار ثابت فإن قيمة المعين تساوي الصفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\begin{vmatrix}a&b\\\\\\alpha a&\\alpha b\\end{vmatrix}=\\alpha\\times0=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}2&-3\\\\-6&9\\end{vmatrix}\\) هي:",
  "options": [
   "0",
   "36",
   "-36",
   "18",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">السطر التاني = السطر الأول ×</span><div class=\"m\">\\((-3)\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المعين صفر (تحقق</span><div class=\"m\">\\(18-18=0\\))</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا تتغير قيمة المعين إذا أضفنا لعنصري أحد سطريه عنصري السطر الآخر بعد ضربهما بعدد ما.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\begin{vmatrix}a&b\\\\a_1&b_1\\end{vmatrix}=\\begin{vmatrix}a+3b&b\\\\a_1+3b_1&b_1\\end{vmatrix}\\) — هي الخاصة اللي منستعملها لنصفّر عناصر</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا كانت عناصر سطر (أو عمود) في المعين كلها أصفاراً فإن قيمة المعين صفر.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر بطريقة النشر</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "معين المصفوفة القطرية (أو المثلثية) هو جداء عناصر قطرها الرئيسي.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\begin{vmatrix}a_{11}&0&0\\\\0&a_{22}&0\\\\0&0&a_{33}\\end{vmatrix}=a_{11}a_{22}a_{33}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}2&7&-1\\\\0&-3&5\\\\0&0&4\\end{vmatrix}\\) هي:",
  "options": [
   "-24",
   "24",
   "8",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -24</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">مثلثية (أصفار تحت القطر)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المعين = جداء القطر</span><div class=\"m\">\\(2\\times(-3)\\times4=-24\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "معين المصفوفة العددية \\(\\begin{bmatrix}a&0&0\\\\0&a&0\\\\0&0&a\\end{bmatrix}\\) هو:",
  "options": [
   "\\(3a\\)",
   "\\(a^3\\)",
   "\\(a\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(a^3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">جداء القطر</span><div class=\"m\">\\(a\\cdot a\\cdot a=a^3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#props",
   "label": "خواص المعينات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مصغّر العنصر \\(a_{11}\\) في المعين من المرتبة الثالثة \\(M(a_{11})\\) هو:",
  "options": [
   "المعين الناتج بحذف السطر الأول والعمود الأول",
   "العنصر \\(a_{11}\\) نفسه",
   "المعين الناتج بحذف السطر الأول فقط",
   "\\((-1)^{1+1}a_{11}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: المعين الناتج بحذف السطر الأول والعمود الأول</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">منحذف السطر والعمود اللي فيهم العنصر</span><div class=\"m\">\\(M(a_{11})=\\begin{vmatrix}a_{22}&a_{23}\\\\a_{32}&a_{33}\\end{vmatrix}\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مرافق العنصر \\(a_{ij}\\) يساوي:",
  "options": [
   "\\((-1)^{i+j}M(a_{ij})\\)",
   "\\(M(a_{ij})\\) دائماً",
   "\\(-M(a_{ij})\\) دائماً",
   "\\(a_{ij}\\cdot M(a_{ij})\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\((-1)^{i+j}M(a_{ij})\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">إذا \\(i+j\\) زوجي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المرافق = المصغّر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">إذا \\(i+j\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق = المصغّر ×</span><div class=\"m\">\\((-1)\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مرافق العنصر \\(a_{12}\\) يساوي:",
  "options": [
   "\\(M(a_{12})\\)",
   "\\(-M(a_{12})\\)",
   "\\(a_{12}\\)",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: \\(-M(a_{12})\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(1+2=3\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((-1)^3=-1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في طريقة النشر نختار السطر (أو العمود) الذي فيه أكبر عدد من الأصفار.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">لأن حدود الأصفار بتختفي وبيقل الحساب</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "قيمة المعين = مجموع حواصل ضرب عناصر السطر (أو العمود) المختار كل عنصر بمرافقه.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">وفق السطر الأول</span><div class=\"m\">\\(\\Delta=a_{11}M(a_{11})-a_{12}M(a_{12})+a_{13}M(a_{13})\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}3 & 0 & 1 \\\\ -1 & 2 & 0 \\\\ 3 & 1 & -1\\end{vmatrix}\\) هي:",
  "options": [
   "-13",
   "13",
   "-5",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -13</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق السطر الأول:</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3\\begin{vmatrix}2&0\\\\1&-1\\end{vmatrix}-0+1\\begin{vmatrix}-1&2\\\\3&1\\end{vmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=3(-2)+1(-1-6)=-6-7=-13\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}4 & 2 & 0 \\\\ 1 & 1 & -1 \\\\ 3 & 0 & 2\\end{vmatrix}\\) هي:",
  "options": [
   "-2",
   "2",
   "10",
   "-10",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق السطر التالت (فيه صفر):</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3\\begin{vmatrix}2&0\\\\1&-1\\end{vmatrix}-0+2\\begin{vmatrix}4&2\\\\1&1\\end{vmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=3(-2)+2(2)=-2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}4 & -1 & 1 \\\\ 1 & 0 & 3 \\\\ 3 & 1 & 2\\end{vmatrix}\\) هي:",
  "options": [
   "-18",
   "18",
   "-4",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -18</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق العمود التاني (فيه صفر):</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-(-1)\\begin{vmatrix}1&3\\\\3&2\\end{vmatrix}+0-1\\begin{vmatrix}4&1\\\\1&3\\end{vmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=(2-9)-(12-1)=-7-11=-18\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "معين مصفوفة أمثال الجملة \\(3x-y+z=3,\\ x+y-2z=2,\\ 3x-2y+4z=1\\) (نموذج امتحاني): \\(\\begin{vmatrix}3 & -1 & 1 \\\\ 1 & 1 & -2 \\\\ 3 & -2 & 4\\end{vmatrix}\\) هي:",
  "options": [
   "\\(6\\)",
   "-5",
   "15",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة 5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق السطر الأول:</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3(4-4)-(-1)(4+6)+1(-2-3)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=0+10-5=5\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "معين مصفوفة أمثال الجملة \\(3x-y-2z=1,\\ x-3y+z=-2,\\ x+y-3z=-3\\) (نموذج F19): \\(\\begin{vmatrix}3 & -1 & -2 \\\\ 1 & -3 & 1 \\\\ 1 & 1 & -3\\end{vmatrix}\\) هي:",
  "options": [
   "-4",
   "12",
   "4",
   "-12",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 12</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق السطر الأول:</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3(9-1)+1(-3-1)-2(1+3)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=24-4-8=12\\)</div></div><b>❌ انتبه:</b> المرافق التاني بإشارة ناقص: \\(-(-1)\\cdot M(a_{12})\\).",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}-2 & 3 & 1 \\\\ 0 & 1 & -1 \\\\ 2 & 0 & 4\\end{vmatrix}\\) هي:",
  "options": [
   "-16",
   "16",
   "0",
   "-8",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -16</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">النشر وفق العمود الأول:</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(-2\\begin{vmatrix}1&-1\\\\0&4\\end{vmatrix}-0+2\\begin{vmatrix}3&1\\\\1&-1\\end{vmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-2(4)+2(-4)=-16\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المصغّر \\(M(a_{31})\\) في معين مصفوفة الأمثال \\(\\begin{vmatrix}3&-1&1\\\\1&1&-2\\\\3&-2&4\\end{vmatrix}\\) يساوي:",
  "options": [
   "1",
   "-1",
   "5",
   "10",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">نحذف السطر 3 والعمود 1</span><div class=\"m\">\\(\\begin{vmatrix}-1&1\\\\1&-2\\end{vmatrix}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=2-1=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المرافق \\(a^c_{23}\\) في المعين \\(\\begin{vmatrix}3&-1&1\\\\1&1&-2\\\\3&-2&4\\end{vmatrix}\\) يساوي:",
  "options": [
   "3",
   "-3",
   "7",
   "2",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(M(a_{23})=\\begin{vmatrix}3&-1\\\\3&-2\\end{vmatrix}=-6+3=-3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(2+3=5\\) فردي</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">المرافق</span><div class=\"m\">\\(=-(-3)=3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#bezout",
   "label": "المعين من المرتبة الثالثة: طريقة النشر (بيزوت)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تستخدم طريقة الأقطار المتوازية (طريقة ساروس) فقط لمعينات المرتبة الثالثة.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ملاحظة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في طريقة ساروس نكتب عناصر المعين ثم نضيف على يمينه:",
  "options": [
   "العمود الأول والثاني",
   "السطر الأول والثاني",
   "العمود الأول فقط",
   "العمود الأخير",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: العمود الأول والثاني</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">بيصير عنا 5 أعمدة و3 أسطر</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(\\Delta=(\\searrow\\) الأقطار النازلة\\()-(\\swarrow\\) الأقطار الصاعدة\\()\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بطريقة ساروس، قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}2 & 1 & 3 \\\\ 3 & 0 & -1 \\\\ 1 & 2 & -2\\end{vmatrix}\\) هي:",
  "options": [
   "27",
   "7",
   "-27",
   "17",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 27</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الأقطار النازلة</span><div class=\"m\">\\(0-1+18=17\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الأقطار الصاعدة</span><div class=\"m\">\\(0-4-6=-10\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\Delta=17-(-10)=27\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بطريقة ساروس، قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}4 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ 4 & 3 & 1\\end{vmatrix}\\) هي:",
  "options": [
   "-10",
   "10",
   "6",
   "-6",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -10</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">النازلة</span><div class=\"m\">\\(4+0-6=-2\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الصاعدة</span><div class=\"m\">\\(8+0+0=8\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\Delta=-2-8=-10\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بطريقة ساروس، قيمة المعين (مثال المقرر) \\(\\begin{vmatrix}7 & 0 & 2 \\\\ 0 & 1 & 3 \\\\ 2 & -1 & 0\\end{vmatrix}\\) هي:",
  "options": [
   "\\(18\\)",
   "-17",
   "-25",
   "25",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك — القيمة الصحيحة 17</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">النازلة</span><div class=\"m\">\\(0+0+0=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الصاعدة</span><div class=\"m\">\\(4-21+0=-17\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\Delta=0-(-17)=17\\)</div></div><div class=\"sol-step\" style=\"margin-top:6px\">القيمة الصحيحة مو بين الخيارات الأربعة ← «غير ذلك»</div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "قيمة المعين \\(\\begin{vmatrix}2 & 4 & -1 \\\\ 0 & 3 & 0 \\\\ -1 & 2 & 1\\end{vmatrix}\\) هي:",
  "options": [
   "3",
   "-3",
   "9",
   "0",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">النشر وفق السطر التاني (فيه صفرين)</span><div class=\"m\">\\(3\\begin{vmatrix}2&-1\\\\-1&1\\end{vmatrix}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=3(2-1)=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#sarrus",
   "label": "طريقة الأقطار المتوازية (ساروس)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الطريقة المستخدمة لحساب المعين من المرتبة \\(n\\) هي فقط طريقة بيزوت (النشر).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">ساروس للمرتبة التالتة بس</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#detn",
   "label": "المعين من المرتبة n"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة المعين من المرتبة الرابعة (مثال المقرر 1-6) \\(\\begin{vmatrix}0 & 1 & -1 & 2 \\\\ 3 & 4 & 0 & 1 \\\\ 2 & 1 & 0 & 3 \\\\ 2 & 0 & 1 & -1\\end{vmatrix}\\) هي:",
  "options": [
   "-10",
   "10",
   "-27",
   "17",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: -10</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">العمود التالت فيه أكتر أصفار</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ننشر وفقه</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\((-1)\\cdot\\begin{vmatrix}3&4&1\\\\2&1&3\\\\2&0&-1\\end{vmatrix}-1\\cdot\\begin{vmatrix}0&1&2\\\\3&4&1\\\\2&1&3\\end{vmatrix}\\) (مع إشارات المرافقات)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=-1[-3+24-2+8]-1[2+6-16-9]=-27+17=-10\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-6-lesson.html#detn",
   "label": "المعين من المرتبة n"
  }
 }
];
