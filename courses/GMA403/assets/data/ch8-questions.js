/* بنك أسئلة الفصل 8 — GMA403 الرياضيات الاقتصادية والإدارية.
   origin:"bank" = من أسئلة الدورات أو أسئلة المقرر (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر والملخص. */
const CH8_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "ندعو المصفوفة أحادية (Singular) إذا كان محددها لا يساوي الصفر.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">Singular (شاذة)</span><div class=\"m\">\\(\\det=0\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">نظامية ولها مقلوب</span><div class=\"m\">\\(\\det\\ne0\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حاصل جمع/طرح المصفوفة \\(A\\) إلى المصفوفة الصفرية هو نفس المصفوفة: \\(A\\pm0=A\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">كل عنصر \\(a_{ij}\\pm0=a_{ij}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بجدول المدخلات والمخرجات التالي (مجموع المخرجات 1100):<div style=\"overflow-x:auto;margin:8px 0\"><table class=\"cmp\" style=\"font-size:.85rem;text-align:center\"><tr><th>القطاع</th><th>1</th><th>2</th><th>3</th><th>استهلاك نهائي D</th><th>مجموع المخرجات P</th></tr><tr><td>1</td><td>\\(X_{11}\\)</td><td>50</td><td>20</td><td>\\(D_1\\)</td><td>\\(P_1\\)</td></tr><tr><td>2</td><td>120</td><td>250</td><td>60</td><td>70</td><td>500</td></tr><tr><td>3</td><td>40</td><td>50</td><td>40</td><td>70</td><td>200</td></tr><tr><td>قيمة مضافة V</td><td>\\(V_1\\)</td><td>\\(V_2\\)</td><td>\\(V_3\\)</td><td>270</td><td></td></tr><tr><td>مجموع المدخلات</td><td>400</td><td>\\(P_2\\)</td><td>\\(P_3\\)</td><td></td><td>1100</td></tr></table></div>إن قيمة \\(X_{11}\\) في هذا الاقتصاد عام الأساس هي:",
  "options": [
   "300",
   "150",
   "250",
   "40",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(P_1=1100-500-200=400\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(D_1=270-70-70=130\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(X_{11}=400-50-20-130=200\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">200 مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#io",
   "label": "جدول المدخلات والمخرجات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "بجدول المدخلات والمخرجات التالي:<div style=\"overflow-x:auto;margin:8px 0\"><table class=\"cmp\" style=\"font-size:.85rem;text-align:center\"><tr><th>القطاع</th><th>1</th><th>2</th><th>3</th><th>استهلاك نهائي D</th><th>مجموع المخرجات P</th></tr><tr><td>1</td><td>\\(X_{11}\\)</td><td>50</td><td>20</td><td>\\(D_1\\)</td><td>\\(P_1\\)</td></tr><tr><td>2</td><td>120</td><td>250</td><td>60</td><td>70</td><td>500</td></tr><tr><td>3</td><td>40</td><td>50</td><td>40</td><td>70</td><td>200</td></tr><tr><td>قيمة مضافة V</td><td>\\(V_1\\)</td><td>\\(V_2\\)</td><td>\\(V_3\\)</td><td>270</td><td></td></tr><tr><td>مجموع المدخلات</td><td>400</td><td>\\(P_2\\)</td><td>\\(P_3\\)</td><td></td><td>1100</td></tr></table></div>إن قيمة المعامل الفني \\(a_{12}\\) في هذا الاقتصاد هي:",
  "options": [
   "0.3",
   "0.125",
   "0",
   "0.5",
   "غير ذلك"
  ],
  "answerIndex": 4,
  "explanation": "<b>✅ الجواب الصحيح: غير ذلك</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_{12}=\\frac{X_{12}}{P_2}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{50}{500}=0.1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مو بالخيارات</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">غير ذلك</div></div><b>❌ انتبه:</b> منقسم على مجموع <b>العمود</b> \\(P_2=500\\) مو على \\(P_1\\) (\\(\\frac{50}{400}=0.125\\)).",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#coef",
   "label": "المعامل الفني وحجم الإنتاج"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كانت \\(B\\) المصفوفة المساعدة لـ\\((I-A)\\) ومحدد \\((I-A)\\) هو 0.15، والسطر الثاني من \\(B\\) هو \\([0.27\\ \\ 0.39\\ \\ 0.18]\\) وشعاع الطلب النهائي لسنة الهدف \\(D=[135\\ \\ 75\\ \\ 135]^T\\)، فإن حجم الإنتاج في القطاع الثاني \\(P_2\\):",
  "options": [
   "600",
   "550",
   "700",
   "90",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 600</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(0.27(135)+0.39(75)+0.18(135)=90\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(P_2=\\frac{90}{0.15}=600\\)</div></div><b>❌ انتبه:</b> 90 قبل القسمة على المحدد — المعطاة مساعدة مو مقلوب فلازم نقسم.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#coef",
   "label": "المعامل الفني وحجم الإنتاج"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يُقصد برتبة المصفوفة \\(m\\times n\\): مصفوفة عدد أسطرها \\(m\\) وعدد أعمدتها \\(n\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">أسطر × أعمدة</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكن أبداً أن تكون المصفوفة من الرتبة \\(m\\times1\\) حيث \\(m\\gt1\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي شعاع عمود، مثل \\(\\begin{bmatrix}5\\\\9\\\\4\\end{bmatrix}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "منقول جداء معرّف على مصفوفتين: \\((A\\cdot B)^T=A^T\\cdot B^T\\).",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\((AB)^T=B^TA^T\\) (بترتيب معكوس)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "حاصل جداء مصفوفة \\(A\\) من الرتبة \\(4\\times3\\) بمصفوفة \\(B\\) من الرتبة \\(3\\times5\\) هو مصفوفة رتبتها \\(4\\times5\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((4\\times\\mathbf3)(\\mathbf3\\times5)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الناتج \\(4\\times5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لدينا \\(A\\) من الرتبة \\(3\\times3\\) و \\(B\\) من الرتبة \\(2\\times3\\)، فإن عملية الجمع \\(A+B\\) ممكنة.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">الجمع بدو نفس الرتبة بالضبط</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لدينا الشعاعان \\(A=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\) و \\(B=[0\\ \\ 2\\ \\ 4\\ \\ 6]\\)، فإن حاصل الجداء \\(B\\times A\\):",
  "options": [
   "22",
   "لا يمكن إيجاد الجداء بسبب اختلاف الرتب",
   "\\([0\\ 4\\ 12\\ 18]\\)",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: لا يمكن إيجاد الجداء بسبب اختلاف الرتب</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(B_{(1\\times4)}\\) ، \\(A_{(3\\times1)}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">4 ≠ 3</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الجداء غير معرّف</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#matrix",
   "label": "المصفوفة وعملياتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "محدد المصفوفة \\(A=\\begin{bmatrix}2&2\\\\1&4\\end{bmatrix}\\):",
  "options": [
   "8",
   "6",
   "10",
   "لا يمكن إيجاد المحدد",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\times4-2\\times1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=6\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقلوب المصفوفة \\(A=\\begin{bmatrix}2&2\\\\1&4\\end{bmatrix}\\):",
  "options": [
   "\\(\\frac16\\begin{bmatrix}4&-2\\\\-1&2\\end{bmatrix}\\)",
   "\\(\\frac16\\begin{bmatrix}2&2\\\\1&4\\end{bmatrix}\\)",
   "\\(\\begin{bmatrix}4&-2\\\\-1&2\\end{bmatrix}\\)",
   "لا يمكن إيجاد المقلوب",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac16\\begin{bmatrix}4&-2\\\\-1&2\\end{bmatrix}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\det=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">نبدّل عناصر القطر ونغيّر إشارة الباقي: \\(\\begin{bmatrix}4&-2\\\\-1&2\\end{bmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">ونقسم على 6</div></div><b>❌ انتبه:</b> نسيان القسمة على المحدد بيعطي الخيار التالت.",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "محدد المصفوفة \\(A=\\begin{bmatrix}2&4\\\\5&10\\end{bmatrix}\\):",
  "options": [
   "20",
   "0",
   "40",
   "لا يمكن إيجاد المحدد",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2\\times10-4\\times5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">مصفوفة شاذة</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لتكن \\(A=\\begin{bmatrix}2&4&1\\\\4&3&7\\\\2&1&3\\end{bmatrix}\\)، فإن مرافق العنصر \\(a_{11}\\):",
  "options": [
   "2",
   "9",
   "−2",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(A_{11}=(+1)\\begin{vmatrix}3&7\\\\1&3\\end{vmatrix}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=9-7=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "محدد المصفوفة الواحدية \\(I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\):",
  "options": [
   "1",
   "0",
   "2",
   "لا يمكن إيجاد المحدد",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(1\\times1-0\\times0=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-8-lesson.html#det",
   "label": "المحدد والمرافق والمقلوب"
  }
 }
];
