/* بنك أسئلة الفصل 4 — GMA401 الرياضيات.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من المقرر وبالحساب)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH4_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "المتتالية \\(1,\\frac12,\\frac13,\\dots\\) حدها العام \\(a_n=\\frac1n\\) ومنطلقها \\(\\mathbb{N}^*\\).",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(\\mathbb{N}^*=\\{1,2,3,\\dots\\}\\) لأن الترتيب بيبلّش من 1</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#def",
   "label": "تعريف المتتالية"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المتتالية الحسابية هي التي ينتج فيها كل حد عن سابقه بضربه بعدد ثابت.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هاد تعريف <b>الهندسية</b></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالحسابية منضيف عدد ثابت \\(r\\)</span><div class=\"m\">\\(a_n=a_{n-1}+r\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#def",
   "label": "تعريف المتتالية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الحد العام للمتتالية الحسابية التي حدها الأول \\(a_1\\) وأساسها \\(r\\) هو:",
  "options": [
   "\\(a_n=a_1+(n-1)r\\)",
   "\\(a_n=a_1+nr\\)",
   "\\(a_n=a_1\\cdot r^{n-1}\\)",
   "\\(a_n=a_1+(n+1)r\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a_n=a_1+(n-1)r\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_2=a_1+r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_3=a_1+2r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">…</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_n=a_1+(n-1)r\\)</div></div><b>❌ انتبه:</b> \\(a_1\\cdot r^{n-1}\\) للهندسية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد الأخير لمتتالية حسابية حدها الأول 2 وأساسها 3 وعدد حدودها 10 (مثال المقرر 2-4) هو:",
  "options": [
   "29",
   "32",
   "30",
   "27",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 29</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_{10}=a_1+(10-1)r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=2+9\\times3=29\\)</div></div><b>❌ انتبه:</b> \\((n-1)\\) مو \\(n\\): \\(2+10\\times3=32\\) غلط.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد الأول في المتتالية الحسابية التي حدها العاشر 27 وأساسها 3 (مثال المقرر 3-4) هو:",
  "options": [
   "0",
   "3",
   "1",
   "-3",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 0</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(27=a_1+9\\times3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_1=27-27=0\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد التاسع والتسعون من المتتالية الحسابية \\(13,\\ 15,\\ 17,\\dots\\) هو:",
  "options": [
   "209",
   "211",
   "198",
   "111",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 209</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a=13,\\ r=2,\\ n=99\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_{99}=13+98\\times2=209\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا أدخلنا 5 أعداد بين \\(-2\\) و \\(28\\) لتشكل متتالية حسابية، فإن أساسها:",
  "options": [
   "5",
   "6",
   "\\(\\frac{30}{7}\\)",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">صار عندنا 7 حدود</span><div class=\"m\">\\(a_1=-2,\\ a_7=28\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(28=-2+6r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الحدود</span><div class=\"m\">\\(-2,3,8,13,18,23,28\\)</div></div></div><b>❌ انتبه:</b> 5 أعداد بين طرفين = 7 حدود، فـ\\(n-1=6\\).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "رتبة الحد الذي قيمته 99 في المتتالية الحسابية \\(1,\\ 3,\\ 5,\\dots\\) هي:",
  "options": [
   "49",
   "50",
   "99",
   "51",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 50</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(99=1+(n-1)\\times2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n-1=49\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=50\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في المتتالية الحسابية، مجموع أي حدين متساويي البعد عن الطرفين ثابت ويساوي مجموع الطرفين.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">مثال</span><div class=\"m\">\\(3+25=5+23=7+21\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "أي حد في المتتالية الحسابية هو وسط حسابي بين حدين مجاورين له.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a_k=\\frac{a_{k-1}+a_{k+1}}{2}\\)، مثلاً \\(7=\\frac{5+9}{2}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إضافة (أو طرح) عدد ثابت إلى حدود متتالية حسابية يعطي متتالية حسابية جديدة لها نفس الأساس.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "ضرب حدود متتالية حسابية بعدد ثابت غير معدوم يعطي متتالية حسابية لها نفس الأساس.",
  "answer": false,
  "explanation": "<b>✅ الجواب الصحيح: خطأ</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">بتضل حسابية، بس أساسها بينضرب بنفس العدد</span><div class=\"m\">\\(3,5,7,\\dots\\) × 2</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(6,10,14,\\dots\\) أساسها 4</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المتتالية \\(-3,-5,-7,-9,\\dots\\) هي متتالية حسابية:",
  "options": [
   "متزايدة أساسها 2",
   "متناقصة أساسها \\(-2\\)",
   "هندسية أساسها \\(\\frac53\\)",
   "ثابتة",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: متناقصة أساسها \\(-2\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=-5-(-3)=-2\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متناقصة</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا كان \\(a_1\\) الحد الأول و \\(a_n\\) الأخير وعدد الحدود \\(n\\) لمتتالية حسابية، فإن أساسها:",
  "options": [
   "\\(r=\\frac{a_n-a_1}{n-1}\\)",
   "\\(r=\\frac{a_n-a_1}{n}\\)",
   "\\(r=\\frac{a_n}{a_1}\\)",
   "\\(r=a_n-a_1\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(r=\\frac{a_n-a_1}{n-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_n=a_1+(n-1)r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=\\frac{a_n-a_1}{n-1}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#arith",
   "label": "المتتالية الحسابية: الحد العام وخواصها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموع \\(n\\) حداً من متتالية حسابية يعطى بـ:",
  "options": [
   "\\(S_n=\\frac n2\\,[a_1+a_n]\\)",
   "\\(S_n=n\\,[a_1+a_n]\\)",
   "\\(S_n=a_1\\frac{r^n-1}{r-1}\\)",
   "\\(S_n=\\frac{a_1}{1-r}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(S_n=\\frac n2\\,[a_1+a_n]\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(S_n=\\frac n2[a_1+a_n]=\\frac n2[2a_1+(n-1)r]\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع حدود المتتالية الحسابية \\(-3,2,7,12,17,22,27\\) (مثال المقرر 7-4) هو:",
  "options": [
   "84",
   "168",
   "24",
   "72",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 84</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(n=7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_7=\\frac72[-3+27]=\\frac72\\times24=84\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية حدها الأول 5 وحدها الأخير 122 وعدد حدودها 40، مجموع حدودها (مثال المقرر 9-4):",
  "options": [
   "2540",
   "2440",
   "5080",
   "4880",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2540</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(S_n=\\frac n2[a_1+a_n]\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=\\frac{40}{2}[5+122]=20\\times127=2540\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية من 30 حداً مجموعها 2325 وحدها الأخير 150، أساسها (مثال المقرر 10-4):",
  "options": [
   "5",
   "4",
   "6",
   "\\(\\frac{150}{29}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 5</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2325=\\frac{30}{2}[a_1+150]\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_1=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(150=5+29r\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=\\frac{145}{29}=5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع الأعداد الصحيحة من 1 حتى 100 هو:",
  "options": [
   "5050",
   "5000",
   "10100",
   "4950",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 5050</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a=1,\\ r=1,\\ n=100\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_{100}=\\frac{100}{2}(1+100)=50\\times101=5050\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع العشرين حداً الأولى من المتتالية \\(3,\\ 7,\\ 11,\\dots\\) هو:",
  "options": [
   "820",
   "800",
   "410",
   "1640",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 820</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a=3,\\ r=4,\\ n=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_{20}=\\frac{20}{2}[2(3)+19\\times4]\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=10\\times82=820\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قيمة الدين الذي يؤدى خلال 10 سنوات، يدفع 1000 ل.س في السنة الأولى ويزيد 500 ل.س كل سنة:",
  "options": [
   "32500",
   "15000",
   "65000",
   "5500",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 32500</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">متتالية حسابية</span><div class=\"m\">\\(a=1000,\\ r=500,\\ n=10\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_{10}=\\frac{10}{2}[2000+9\\times500]\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(=5\\times6500=32500\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ادخر شخص 50000 ل.س ثم أضاف 2000 ل.س شهرياً. بعد كم شهر يصبح المبلغ 88000 ل.س (مثال المقرر 8-4)؟",
  "options": [
   "19",
   "20",
   "44",
   "38",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 20</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(88000=50000+(n-1)2000\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n-1=19\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=20\\)</div></div><b>❌ انتبه:</b> لا تنسى الـ\\(+1\\) بعد ما تحسب \\(n-1\\).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع الأعداد الزوجية المحصورة بين 1085 و 5351 هو:",
  "options": [
   "6863994",
   "6863999",
   "3431997",
   "6866126",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 6863994</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a_1=1086,\\ a_n=5350,\\ r=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5350=1086+(n-1)2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=2133\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=\\frac{2133}{2}(1086+5350)=2133\\times3218=6863994\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#asum",
   "label": "مجموع حدود المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية متناقصة، حدها الأول ينقص بمقدار 1 عن مجموع حديها الثالث والسادس، وحدها السابع ينقص عن مجموع حديها الثالث والخامس بمقدار 43. حدها الثامن:",
  "options": [
   "2",
   "3",
   "4",
   "1",
   "غير ذلك"
  ],
  "answerIndex": 3,
  "explanation": "<b>✅ الجواب الصحيح: 1</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a+1=(a+2r)+(a+5r)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+7r=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+6r+43=(a+2r)+(a+4r)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=43\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(43+7r=1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=-6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_8=a+7r=1\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية متزايدة مجموع حديها الرابع والسابع يزيد عن حدها العاشر بمقدار 7، وحدها السادس ينقص عن حدها الثامن بمقدار 26 (مثال المقرر 14-4). حدها الخامس عشر:",
  "options": [
   "189",
   "182",
   "196",
   "175",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 189</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\((a+3r)+(a+6r)=(a+9r)+7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=7\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+5r=a+7r-26\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_{15}=a+14r=7+182=189\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متوالية حسابية حدها الثامن يزيد على حدها الأول بمقدار 84، وحدها السادس يزيد على ضعف حدها الثاني بمقدار 49 (مثال المقرر 16-4). حدها الخامس عشر:",
  "options": [
   "155",
   "168",
   "143",
   "181",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 155</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a+7r=a+84\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+5r=2(a+r)+49\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+60=2a+73\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=-13\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_{15}=-13+14\\times12=155\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية متزايدة من 4 حدود حدها الأول 5، وحاصل جداء طرفيها يقل بـ72 عن جداء الثاني والثالث (مثال المقرر 11-4). مجموعها:",
  "options": [
   "56",
   "48",
   "72",
   "38",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 56</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\"><span class=\"sol-lbl\">الحدود</span><div class=\"m\">\\(5,\\ 5+b,\\ 5+2b,\\ 5+3b\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5(5+3b)+72=(5+b)(5+2b)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(b^2=36\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(b=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S=\\frac42[2\\times5+3\\times6]=56\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ثلاثة أعداد متتالية في متتالية حسابية مجموعها 36 ومجموع مربعاتها 450 (مثال المقرر 13-4). هذه الأعداد:",
  "options": [
   "\\(9,\\ 12,\\ 15\\)",
   "\\(10,\\ 12,\\ 14\\)",
   "\\(6,\\ 12,\\ 18\\)",
   "\\(8,\\ 12,\\ 16\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(9,\\ 12,\\ 15\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">نفرض \\(a-b,\\ a,\\ a+b\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(3a=36\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((12-b)^2+144+(12+b)^2=450\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2b^2=18\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(b=\\pm3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">الأعداد \\(9,12,15\\) (أو بالعكس)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية حسابية مجموع حديها الأول والثالث 16 ومجموع حديها الثاني والرابع 22. أساسها:",
  "options": [
   "3",
   "2",
   "6",
   "4",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 3</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a+(a+2r)=16\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+r=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\((a+r)+(a+3r)=22\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a+2r=11\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالطرح</span><div class=\"m\">\\(r=3\\)</div></div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لحل مسائل المتتالية الحسابية نكتب الحدود بدلالة \\(a\\) و \\(r\\) (\\(a_n=a+(n-1)r\\)) ونحوّل المعطيات لمعادلات.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">هي طريقة كل أمثلة المقرر</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#aprob",
   "label": "مسائل على المتتالية الحسابية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الحد العام للمتتالية الهندسية التي حدها الأول \\(a_1\\) وأساسها \\(r\\) هو:",
  "options": [
   "\\(a_n=a_1\\cdot r^{n-1}\\)",
   "\\(a_n=a_1+(n-1)r\\)",
   "\\(a_n=a_1\\cdot r^{n}\\)",
   "\\(a_n=(a_1 r)^{n-1}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a_n=a_1\\cdot r^{n-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a,\\ ar,\\ ar^2,\\dots,\\ ar^{n-1}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المتتالية \\(1,\\ -2,\\ 4,\\ -8,\\ 16,\\dots\\) هي متتالية هندسية:",
  "options": [
   "متزايدة",
   "متناقصة",
   "متناوبة الإشارة",
   "حسابية",
   "غير ذلك"
  ],
  "answerIndex": 2,
  "explanation": "<b>✅ الجواب الصحيح: متناوبة الإشارة</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=\\frac{-2}{1}=-2\\lt0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متناوبة الإشارة</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المتتالية \\(1,\\ \\frac12,\\ \\frac14,\\ \\frac18,\\dots\\) هي متتالية هندسية:",
  "options": [
   "متزايدة أساسها 2",
   "متناقصة أساسها \\(\\frac12\\)",
   "متناوبة أساسها \\(-\\frac12\\)",
   "حسابية أساسها \\(-\\frac12\\)",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: متناقصة أساسها \\(\\frac12\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=\\frac{1/2}{1}=\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0\\lt r\\lt1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">متناقصة</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا كان أساس المتتالية الهندسية مساوياً للواحد فإن جميع حدودها متساوية ومساوية للحد الأول.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لوغاريتمات حدود متتالية هندسية حدها الأول وأساسها موجبان تشكل متتالية حسابية.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\ln a,\\ \\ln a+\\ln r,\\ \\ln a+2\\ln r,\\dots\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">حسابية أساسها \\(\\ln r\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "أي حد في المتتالية الهندسية هو وسط هندسي بين حدين مجاورين له.",
  "answer": true,
  "explanation": "<b>✅ الجواب الصحيح: صح</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(ar=\\sqrt{a\\times ar^2}\\)، مثلاً \\(4=\\sqrt{2\\times8}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد السابع والعشرون في المتتالية \\(1,\\ 3,\\ 9,\\dots\\) (مثال المقرر 18-4) هو:",
  "options": [
   "\\(3^{26}\\)",
   "\\(3^{27}\\)",
   "\\(27\\times3\\)",
   "\\(1+26\\times3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(3^{26}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a=1,\\ r=3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_{27}=1\\cdot3^{26}\\)</div></div><b>❌ انتبه:</b> الأس \\(n-1=26\\) مو 27.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ما هو ترتيب الحد 3486784401 في متتالية هندسية حدها الأول 1 وأساسها 3 (مثال المقرر 19-4)؟",
  "options": [
   "20",
   "21",
   "22",
   "19",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: 21</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3486784401=3^{n-1}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n-1=\\log_3 3486784401=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=21\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العدد \\(x\\) الذي يجعل الأعداد \\(-1,\\ 2,\\ x,\\ 8\\) متتالية هندسية هو:",
  "options": [
   "4",
   "-4",
   "16",
   "6",
   "غير ذلك"
  ],
  "answerIndex": 1,
  "explanation": "<b>✅ الجواب الصحيح: -4</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=\\frac{2}{-1}=-2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(x=2\\times(-2)=-4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">تحقق</span><div class=\"m\">\\(-4\\times(-2)=8\\) ✓</div></div></div><b>❌ انتبه:</b> \\(x^2=16\\) بيعطي \\(\\pm4\\)، بس \\(+4\\) بيخرّب الأساس.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#geo",
   "label": "المتتالية الهندسية: أنواعها والحد النوني"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموع \\(n\\) حداً من متتالية هندسية أساسها \\(r\\gt1\\) هو:",
  "options": [
   "\\(S_n=a\\frac{r^n-1}{r-1}\\)",
   "\\(S_n=\\frac n2[a_1+a_n]\\)",
   "\\(S_n=\\frac{a}{1-r}\\)",
   "\\(S_n=a\\,r^{n}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(S_n=a\\frac{r^n-1}{r-1}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">وللـ\\(0\\lt r\\lt1\\): \\(S_n=a\\frac{1-r^n}{1-r}\\) — هي نفس الصيغة</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموع حدود متتالية هندسية متناقصة لا نهائية \\((|r|\\lt1)\\) هو:",
  "options": [
   "\\(\\frac{a_1}{1-r}\\)",
   "\\(\\frac{a_1}{r-1}\\)",
   "\\(a_1(1-r)\\)",
   "لا نهائي",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{a_1}{1-r}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r^n\\to0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_{\\infty}=\\frac{a_1}{1-r}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عدد حدود المتتالية \\(3,\\ 12,\\dots\\) التي مجموعها 255 (مثال المقرر 23-4) هو:",
  "options": [
   "4",
   "5",
   "3",
   "85",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 4</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(r=\\frac{12}{3}=4\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(255=3\\cdot\\frac{4^n-1}{4-1}=4^n-1\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(4^n=256\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(n=4\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الكسر العادي المولد للكسر العشري الدوري \\(0.\\overline{37}=0.373737\\dots\\) هو:",
  "options": [
   "\\(\\frac{37}{99}\\)",
   "\\(\\frac{37}{100}\\)",
   "\\(\\frac{37}{90}\\)",
   "\\(\\frac{3}{7}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{37}{99}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{37}{100}+\\frac{37}{100^2}+\\dots\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">هندسية \\(a=\\frac{37}{100},\\ r=\\frac1{100}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_\\infty=\\frac{0.37}{1-0.01}=\\frac{37}{99}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الكسر العادي المولد للكسر \\(0.252121\\dots=0.25\\overline{21}\\) هو:",
  "options": [
   "\\(\\frac{2496}{9900}\\)",
   "\\(\\frac{2521}{9999}\\)",
   "\\(\\frac{25}{99}\\)",
   "\\(\\frac{21}{99}\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{2496}{9900}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(0.25+\\frac1{100}(0.\\overline{21})\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(0.\\overline{21}=\\frac{21}{99}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{25}{100}+\\frac{21}{9900}=\\frac{2475+21}{9900}=\\frac{2496}{9900}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية هندسية أساسها 0.25 وعدد حدودها 6 ومجموعها 2730. حدها الأول:",
  "options": [
   "2048",
   "204.8",
   "4096",
   "1024",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 2048</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(2730=a\\cdot\\frac{1-(1/4)^6}{1-1/4}=a\\cdot\\frac{4095}{3072}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=\\frac{2730\\times3072}{4095}=2048\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">والأخير</span><div class=\"m\">\\(a_6=2048\\times(\\frac14)^5=2\\)</div></div></div><b>❌ انتبه:</b> الحل المكتوب بالملفات طالع 204.8 (غلطة فاصلة عشرية) — الصحيح 2048.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع حدود متتالية هندسية متناقصة غير منتهية 20، والفرق بين حديها الأول والثاني 11.25. حدها الأول وأساسها:",
  "options": [
   "\\(a=15,\\ r=\\frac14\\)",
   "\\(a=20,\\ r=\\frac12\\)",
   "\\(a=-15,\\ r=\\frac74\\)",
   "\\(a=15,\\ r=\\frac34\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a=15,\\ r=\\frac14\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{a}{1-r}=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1-r=\\frac a{20}\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a(1-r)=11.25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(\\frac{a^2}{20}=11.25\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a^2=225\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=15\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(r=\\frac14\\) ✓ (\\(a=-15\\) بيعطي \\(r\\gt1\\) مرفوض)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموع المتتالية اللانهائية \\(8,\\ 2,\\ \\frac12,\\dots\\) هو:",
  "options": [
   "\\(\\frac{32}{3}\\)",
   "10",
   "12",
   "16",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(\\frac{32}{3}\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a=8,\\ r=\\frac14\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(S_\\infty=\\frac{8}{1-\\frac14}=\\frac{8}{3/4}=\\frac{32}{3}\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gsum",
   "label": "مجموع حدود المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية هندسية مجموع حدودها الثلاثة الأولى 62 ومجموع الثاني والثالث والرابع 310 (مثال المقرر 22-4). حدها الأول وأساسها:",
  "options": [
   "\\(a=2,\\ r=5\\)",
   "\\(a=5,\\ r=2\\)",
   "\\(a=2,\\ r=3\\)",
   "\\(a=31,\\ r=5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a=2,\\ r=5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a(1+r+r^2)=62\\) و \\(ar(1+r+r^2)=310\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالقسمة</span><div class=\"m\">\\(r=\\frac{310}{62}=5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=\\frac{62}{1+5+25}=2\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ثلاثة أعداد تشكل متتالية هندسية، الثاني يزيد على الأول بـ15 ويزيد الثالث على الأول بـ75 (مثال المقرر 24-4). هي:",
  "options": [
   "\\(5,\\ 20,\\ 80\\)",
   "\\(15,\\ 30,\\ 90\\)",
   "\\(5,\\ 15,\\ 45\\)",
   "\\(3,\\ 18,\\ 78\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(5,\\ 20,\\ 80\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step\">\\(a(r-1)=15\\) و \\(a(r^2-1)=75\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">بالقسمة</span><div class=\"m\">\\(r+1=5\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(r=4\\) (و\\(r=1\\) مرفوض)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(5,20,80\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية هندسية حدودها موجبة، مجموع حديها الخامس وضعف السادس يساوي عشرة أمثال الرابع، وحدها التاسع 1536 (مثال المقرر 25-4). حدها السابع:",
  "options": [
   "384",
   "192",
   "768",
   "96",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 384</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(ar^4+2ar^5=10ar^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r(1+2r)=10\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(ar^8=1536\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=\\frac{1536}{256}=6\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a_7=6\\times2^6=384\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "متتالية هندسية حدودها موجبة، مجموع الأول والثالث 20 ومجموع الثالث والخامس خمسة أمثال مربع الثاني (مثال المقرر 26-4). الحد الأول والأساس:",
  "options": [
   "\\(a=2,\\ r=3\\)",
   "\\(a=-2,\\ r=3\\)",
   "\\(a=4,\\ r=2\\)",
   "\\(a=2,\\ r=-3\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(a=2,\\ r=3\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a(1+r^2)=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(ar^2(1+r^2)=5a^2r^2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(1+r^2=5a\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a\\cdot5a=20\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(a=2\\) (موجبة)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=3\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ثلاثة أعداد تشكل متتالية حسابية متناقصة مجموعها \\(-33\\). إذا أضفنا 21 للأول و21 للثاني و26 للثالث نحصل على متتالية هندسية متناقصة (مثال المقرر 31-4). المتتالية الهندسية:",
  "options": [
   "\\(20,\\ 10,\\ 5\\)",
   "\\(5,\\ 10,\\ 20\\)",
   "\\(32,\\ 10,\\ -6\\)",
   "\\(10,\\ 5,\\ 2.5\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(20,\\ 10,\\ 5\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(3a=-33\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=-11\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">الهندسية</span><div class=\"m\">\\(10-r,\\ 10,\\ 15+r\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(100=(10-r)(15+r)\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(r=-10\\) أو \\(r=5\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">المتناقصة</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=-10\\): \\(20,\\ 10,\\ 5\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أوجد الحد الأول في متتالية هندسية متزايدة، فيها حاصل قسمة حدها السابع على 8 يساوي حدها الرابع، وحدها السادس 192 (مثال المقرر 32-4):",
  "options": [
   "6",
   "3",
   "12",
   "2",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: 6</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(\\frac{ar^6}{8}=ar^3\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r^3=8\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(ar^5=192\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(a=\\frac{192}{32}=6\\)</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ثلاثة أعداد مجموعها 70 تكون متتالية هندسية، وإذا ضربنا الأول بـ4 والثاني بـ5 والثالث بـ4 تكونت متتالية حسابية. الأعداد:",
  "options": [
   "\\(10,\\ 20,\\ 40\\)",
   "\\(5,\\ 20,\\ 45\\)",
   "\\(14,\\ 28,\\ 28\\)",
   "\\(20,\\ 25,\\ 25\\)",
   "غير ذلك"
  ],
  "answerIndex": 0,
  "explanation": "<b>✅ الجواب الصحيح: \\(10,\\ 20,\\ 40\\)</b><br><b>🧮 كيف حلّيناها:</b><div class=\"sol\"><div class=\"sol-step m\">\\(a+ar+ar^2=70\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\"><span class=\"sol-lbl\">وسط حسابي</span><div class=\"m\">\\(5ar=\\frac{4a+4ar^2}{2}\\)</div></div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(2r^2-5r+2=0\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(r=2\\) أو \\(\\frac12\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step m\">\\(r=2\\)</div><div class=\"sol-arrow\">⬇</div><div class=\"sol-step\">\\(a=10\\): \\(10,20,40\\) (أو بالعكس \\(40,20,10\\))</div></div>",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#gprob",
   "label": "مسائل على المتتالية الهندسية"
  }
 }
];
