/* بنك أسئلة الفصل 4 — فصل 4.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH4_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المفتاح الرئيسي (Primary Key) هو:",
  "options": [
   "حقل أو مجموعة حقول تُميّز السجل",
   "جدول كامل",
   "سجل واحد فقط",
   "حقل فقط دون غيره"
  ],
  "answerIndex": 0,
  "explanation": "المفتاح الرئيسي قد يكون حقلاً واحداً أو مجموعة حقول، طالما يُميّز كل سجل عن غيره بلا تكرار.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-primary",
   "label": "المفتاح الرئيسي (Primary Key)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يقوم المفتاح الرئيسي بتمييز:",
  "options": [
   "جدول",
   "حقل",
   "سجل (Record)",
   "كل ما سبق"
  ],
  "answerIndex": 2,
  "explanation": "وظيفة المفتاح الرئيسي هي تمييز كل سجل (سطر) عن غيره ضمن الجدول.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-primary",
   "label": "المفتاح الرئيسي (Primary Key)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي نوع من العلاقات يحتاج إلى جدول وسيط (Junction Table)؟",
  "options": [
   "<span class=\"mono\">Many to Many (M:N)</span>",
   "<span class=\"mono\">One to Many (1:N)</span>",
   "لا يحتاج أي نوع لجدول وسيط",
   "<span class=\"mono\">One to One (1:1)</span>"
  ],
  "answerIndex": 0,
  "explanation": "علاقة متعدد لمتعدد (M:N) هي الوحيدة التي تحتاج جدولاً وسيطاً لتنفيذها فعلياً في قاعدة بيانات علائقية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-many-to-many",
   "label": "علاقة متعدد لمتعدد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعمل التكامل المرجعي (Referential Integrity) على ربط:",
  "options": [
   "النماذج فقط",
   "السجلات بين الجداول المرتبطة",
   "الاستعلامات فقط",
   "التقارير فقط"
  ],
  "answerIndex": 1,
  "explanation": "التكامل المرجعي يضبط العلاقة بين السجلات المرتبطة عبر المفتاح الرئيسي والأجنبي، ويمنع تكوّن سجلات معزولة.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-link-rule",
   "label": "الربط بين جدولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يرتبط المفتاح الأجنبي (Foreign Key) بـ:",
  "options": [
   "المفتاح المرشح فقط",
   "مفتاح أجنبي آخر فقط",
   "لا يرتبط بشيء",
   "المفتاح الرئيسي (في جدول آخر)"
  ],
  "answerIndex": 3,
  "explanation": "المفتاح الأجنبي هو حقل يشير إلى المفتاح الرئيسي في جدول آخر لإقامة العلاقة بينهما.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-foreign",
   "label": "المفتاح الأجنبي (Foreign Key)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن للقيم داخل حقل المفتاح الأجنبي أن:",
  "options": [
   "تكون فارغة إلزامياً",
   "تتكرر حسب الحاجة",
   "لا تتكرر أبداً مثل المفتاح الرئيسي",
   "تُحذف تلقائياً كل شهر"
  ],
  "answerIndex": 1,
  "explanation": "على عكس المفتاح الرئيسي، يُسمح لقيم المفتاح الأجنبي بالتكرار (مثل قسم واحد يتكرر لديه عدة موظفين).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-foreign",
   "label": "المفتاح الأجنبي (Foreign Key)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "قاعدة \"الكيان المتكامل\" (Entity Integrity) تنص على أنه لا يجوز أن يُترك المفتاح الرئيسي فارغاً أو يحتوي قيمة غير معروفة — وهذا يميّز:",
  "options": [
   "المفتاح الرئيسي",
   "المفتاح المرشح",
   "المفتاح الأجنبي",
   "لا شيء مما سبق"
  ],
  "answerIndex": 0,
  "explanation": "قاعدة عدم ترك المفتاح فارغاً (Not Null) خاصة بالمفتاح الرئيسي تحديداً.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-primary",
   "label": "المفتاح الرئيسي (Primary Key)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في عملية \"الإسقاط\" (Projection)، نختار القيم من:",
  "options": [
   "العمود (الصفة)",
   "الجدول ككل",
   "السطر",
   "الحقل الأول فقط دوماً"
  ],
  "answerIndex": 0,
  "explanation": "الإسقاط يختزل الرابطة لتحتفظ بأعمدة (صفات) معيّنة فقط من بين كل أعمدتها.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-projection",
   "label": "الإسقاط (Projection)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "العلاقة بين جدولين تتم عبر:",
  "options": [
   "حقل المفتاح الرئيسي بالجدول الأول وحقل المفتاح الأجنبي بالجدول الثاني",
   "حقل المفتاح الرئيسي بالجدول الأول وحقل المفتاح المرشح بالجدول الثاني",
   "حقل المفتاح الأجنبي بالجدول الأول وحقل المفتاح المرشح بالجدول الثاني",
   "بشكل عشوائي دون قاعدة"
  ],
  "answerIndex": 0,
  "explanation": "الربط الصحيح: المفتاح الرئيسي في الجدول \"الأب\" ↔ المفتاح الأجنبي المقابل له في الجدول \"الابن\".",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-link-rule",
   "label": "الربط بين جدولين"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعتمد النموذج العلائقي (الترابطي) على مفهوم:",
  "options": [
   "الجداول فقط",
   "العلاقات فقط",
   "الجداول والعلاقات معاً",
   "الاستعلامات فقط"
  ],
  "answerIndex": 2,
  "explanation": "النموذج الترابطي يقوم أساساً على الجداول (لتخزين البيانات) والعلاقات بينها (لربطها منطقياً).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-relational-model",
   "label": "النموذج العلائقي"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ترمز ERM إلى:",
  "options": [
   "<span class=\"mono\">Entity Relationship Model</span>",
   "<span class=\"mono\">Excel Report Manager</span>",
   "<span class=\"mono\">External Relation Method</span>",
   "<span class=\"mono\">Enterprise Resource Model</span>"
  ],
  "answerIndex": 0,
  "explanation": "ERM = Entity-Relationship Model، أحد أهم تقنيات تصميم وتوثيق قواعد البيانات.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-erm-intro",
   "label": "نموذج الكيان-العلاقة (ERM)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتم تصنيف الكيانات في نموذج REA إلى:",
  "options": [
   "المفاتيح الرئيسية والأجنبية فقط",
   "الجداول والعلاقات فقط",
   "البرامج والمستخدمين",
   "الموارد والأحداث والوكلاء"
  ],
  "answerIndex": 3,
  "explanation": "REA = Resources, Events, Agents — الموارد والأحداث والوكلاء.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-rea-intro",
   "label": "REA"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لو كان لدينا جدول \"طالب\" وجدول \"مقرر\"، والطالب يسجّل عدة مقررات والمقرر يسجّل فيه عدة طلاب، فنوع العلاقة بينهما:",
  "options": [
   "1:1",
   "<span class=\"mono\">1:N</span>",
   "لا علاقة بينهما",
   "<span class=\"mono\">M:N</span>"
  ],
  "answerIndex": 3,
  "explanation": "تسجيل متعدد من الجهتين (طالب↔مقرر) هو المثال الكلاسيكي لعلاقة M:N التي تحتاج جدولاً وسيطاً (كجدول \"التسجيل\").",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-many-to-many",
   "label": "علاقة متعدد لمتعدد"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عملية \"الانتقاء\" (Restriction) في الجبر العلائقي تقوم على:",
  "options": [
   "حذف رابطة كاملة",
   "اختيار أسطر تحقق شرطاً معيناً من رابطة",
   "اختيار أعمدة معينة من رابطة",
   "دمج رابطتين لهما عمود مشترك"
  ],
  "answerIndex": 1,
  "explanation": "الانتقاء يعمل على مستوى الأسطر (السجلات) وفق شرط، بعكس الإسقاط الذي يعمل على مستوى الأعمدة.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-restriction",
   "label": "الانتقاء (Restriction)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في نموذج REA، العلاقة بين \"المخزون\" (كمورد) و\"طلب العميل\" (كحدث) هي من نوع:",
  "options": [
   "<span class=\"mono\">1:N</span>",
   "1:1",
   "<span class=\"mono\">0:N</span>",
   "<span class=\"mono\">M:N</span>"
  ],
  "answerIndex": 3,
  "explanation": "كما ورد في الملخص، علاقة كيان المخزون (مورد) مع كيان طلب العميل (حدث) هي من نوع M:N.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-rea-notes",
   "label": "علاقة الوكيل بالحدث"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المفتاح الرئيسي لا يتكرر ولا يُترك فارغاً (Null).",
  "answer": true,
  "explanation": "صحيح: وهي قاعدة الكيان المتكامل.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-primary",
   "label": "المفتاح الرئيسي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجوز ترك قيمة المفتاح الرئيسي فارغة (Null) في بعض السجلات.",
  "answer": false,
  "explanation": "خطأ: المفتاح الرئيسي لا يُترك فارغاً أبداً.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-primary",
   "label": "المفتاح الرئيسي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المفاتيح المرشحة (Candidate Keys) هي:",
  "options": [
   "كل الحقول المؤهلة لتكون مفتاحاً رئيسياً",
   "الحقول التي تربط جدولين فقط",
   "الحقول الفارغة في الجدول",
   "الحقول التي يجوز تكرارها دائماً"
  ],
  "answerIndex": 0,
  "explanation": "تُحدَّد في مرحلة التصميم، ويُختار منها المفتاح الرئيسي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-candidate",
   "label": "المفاتيح المرشحة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المفتاح الأجنبي حقل في رابطة معينة وهو المفتاح الرئيسي في رابطة أخرى.",
  "answer": true,
  "explanation": "صحيح: وبه يتم الربط بين الرابطتين.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-foreign",
   "label": "المفتاح الأجنبي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا يجوز تكرار أحد الأسطر ضمن الرابطة (الجدول).",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-no-duplicate-rows",
   "label": "خصائص الرابطة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "تغيير ترتيب أسطر الرابطة يغيّر طبيعتها.",
  "answer": false,
  "explanation": "خطأ: أسطر الرابطة غير مرتّبة، وتغيير ترتيبها لا يغيّر طبيعتها.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-no-duplicate-rows",
   "label": "خصائص الرابطة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "يجوز أن يحتوي الحقل الواحد في الرابطة على أكثر من قيمة.",
  "answer": false,
  "explanation": "خطأ: قيم الحقول أحادية؛ لا يجوز أكثر من قيمة بالحقل الواحد.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-no-duplicate-rows",
   "label": "خصائص الرابطة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "درجة الرابطة تساوي:",
  "options": [
   "عدد المفاتيح الأجنبية",
   "عدد الأعمدة (الصفات) المكوّنة لها",
   "عدد الجداول المرتبطة بها",
   "عدد الأسطر (السجلات) فيها"
  ],
  "answerIndex": 1,
  "explanation": "درجة الرابطة = عدد أعمدتها.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-relation-degree",
   "label": "درجة الرابطة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "علاقة «القسم يضم عدة عاملين والعامل ينتمي لقسم واحد» هي علاقة:",
  "options": [
   "لا توجد علاقة",
   "واحد لواحد (1:1)",
   "متعدد لمتعدد (M:N)",
   "واحد لمتعدد (1:N)"
  ],
  "answerIndex": 3,
  "explanation": "Department ↔ Employee مثال 1:N.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-one-to-many",
   "label": "علاقة واحد لمتعدد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العلاقة بين Customer وAccount في مثال المقرر هي علاقة:",
  "options": [
   "ثلاثية",
   "واحد لمتعدد (1:N)",
   "واحد لواحد (1:1)",
   "متعدد لمتعدد (M:N)"
  ],
  "answerIndex": 2,
  "explanation": "مثال المقرر على 1:1.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-one-to-one",
   "label": "علاقة واحد لواحد"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "علاقة «واحد لمتعدد» تحتاج دائماً إلى جدول وسيط.",
  "answer": false,
  "explanation": "خطأ: الجدول الوسيط يلزم عادةً في علاقة المتعدد لمتعدد (M:N).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-one-to-many",
   "label": "علاقة واحد لمتعدد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الاجتماع (UNION) بين رابطتين بنفس الأعمدة ينتج رابطة تضم:",
  "options": [
   "أسطر A غير الموجودة في B",
   "كل الأسطر من الرابطتين",
   "الأعمدة المشتركة فقط",
   "الأسطر المشتركة فقط"
  ],
  "answerIndex": 1,
  "explanation": "الاجتماع يضم كل الأسطر (المشتركة + الباقي من كل رابطة).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-union",
   "label": "الاجتماع UNION"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "التقاطع (INTERSECTION) بين A وB ينتج:",
  "options": [
   "أسطر A غير الموجودة في B",
   "كل أسطر A وB",
   "الأعمدة المشتركة",
   "الأسطر المشتركة فقط بين A وB"
  ],
  "answerIndex": 3,
  "explanation": "التقاطع يعطي المشترك فقط.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-intersection",
   "label": "التقاطع INTERSECTION"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الفرق (A-B) ينتج:",
  "options": [
   "كل أسطر A وB",
   "الأسطر الموجودة في B فقط",
   "الأسطر الموجودة في A وغير الموجودة في B",
   "الأسطر المشتركة بين A وB"
  ],
  "answerIndex": 2,
  "explanation": "الفرق: ما في A وليس في B.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-difference",
   "label": "الفرق A-B"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عمليات الاجتماع والتقاطع والفرق تشترط أن تكون الرابطتان بنفس الأعمدة.",
  "answer": true,
  "explanation": "صحيح: هذا شرط العمليات على المجموعات.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-set-operations",
   "label": "العمليات على المجموعات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عملية «الوصل (Join)» هي:",
  "options": [
   "دمج رابطتين لهما عمود مشترك في رابطة جديدة",
   "حذف الأسطر المكررة فقط",
   "اختزال الرابطة إلى أعمدة محددة",
   "اختيار أسطر تحقق شرطاً"
  ],
  "answerIndex": 0,
  "explanation": "الوصل يدمج رابطتين بعمود مشترك.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-join",
   "label": "الوصل (Join)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عملية الانتقاء (Restriction) تختار الأعمدة المرغوبة من الرابطة.",
  "answer": false,
  "explanation": "خطأ: الانتقاء يختار الأسطر التي تحقق شرطاً؛ أما الأعمدة فبالإسقاط (Projection).",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-restriction",
   "label": "الانتقاء (Restriction)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الإسقاط (Projection) يختزل الرابطة لتحتوي فقط على الأعمدة المرغوبة.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-projection",
   "label": "الإسقاط (Projection)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "يُعدّ نموذج ERM من أقدم وأهم التقنيات المستخدمة في:",
  "options": [
   "تصميم الشبكات",
   "تشفير البيانات",
   "تصميم وتوثيق قواعد البيانات",
   "ضغط الملفات"
  ],
  "answerIndex": 2,
  "explanation": "ERM = Entity-Relationship Model لتصميم قواعد البيانات وتوثيقها.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-erm-intro",
   "label": "نموذج الكيان-العلاقة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "«شيء مادي أو مجرد له أهمية للمنظمة (عميل، منتج، حساب)» يسمّى في ERM:",
  "options": [
   "العلاقة (Relationship)",
   "الصفة (Attribute)",
   "الظاهرة (Domain)",
   "الكيان (Entity)"
  ],
  "answerIndex": 3,
  "explanation": "هذا تعريف الكيان.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-entity",
   "label": "الكيان (Entity)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مجموعة القيم الممكنة التي تأخذها صفة معينة تسمّى:",
  "options": [
   "الكيان",
   "الظاهرة (Domain)",
   "الدرجة",
   "العلاقة"
  ],
  "answerIndex": 1,
  "explanation": "Domain: مجموعة القيم الممكنة للصفة.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-domain",
   "label": "الظاهرة (Domain)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الصفات (Attributes) في ERM هي:",
  "options": [
   "الروابط المنطقية بين الكيانات",
   "مجموعة الخواص التي تصف الكيان",
   "أنشطة المنظمة",
   "الأشخاص والمنظمات"
  ],
  "answerIndex": 1,
  "explanation": "الصفات تصف الكيان.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-attributes",
   "label": "الصفات (Attributes)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الحد الأدنى 0 في درجة العلاقة يعني:",
  "options": [
   "العلاقة محذوفة",
   "العلاقة 1:1 حصراً",
   "قد لا يرتبط العنصر بأي عنصر آخر",
   "كل عنصر مرتبط بعنصر واحد على الأقل"
  ],
  "answerIndex": 2,
  "explanation": "الحد الأدنى 0: الارتباط اختياري، و1: إلزامي.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-min-max",
   "label": "درجة العلاقة"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الحد الأعلى (1 أو N) هو الذي يحدد نمط العلاقة (1:1 أو 1:N أو M:N).",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-min-max",
   "label": "درجة العلاقة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في نموذج REA، الأشخاص والمنظمات هم:",
  "options": [
   "الصفات",
   "الأحداث (Events)",
   "الوكلاء (Agents)",
   "الموارد (Resources)"
  ],
  "answerIndex": 2,
  "explanation": "الوكلاء: الأشخاص والمنظمات.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-agents",
   "label": "الوكلاء (Agents)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في نموذج REA، «أشياء لها قيمة اقتصادية» تسمّى:",
  "options": [
   "الموارد (Resources)",
   "الأحداث (Events)",
   "الوكلاء (Agents)",
   "العلاقات"
  ],
  "answerIndex": 0,
  "explanation": "الموارد: أشياء لها قيمة اقتصادية.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-resources",
   "label": "الموارد (Resources)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في نموذج REA، «أنشطة المنظمة المختلفة» تسمّى:",
  "options": [
   "الوكلاء (Agents)",
   "الأحداث (Events)",
   "الموارد (Resources)",
   "الصفات"
  ],
  "answerIndex": 1,
  "explanation": "الأحداث: أنشطة المنظمة.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-events",
   "label": "الأحداث (Events)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في REA، كل حدث يجب أن يتصل بعلاقة مع مورد واحد على الأقل.",
  "answer": true,
  "explanation": "صحيح: من قواعد العلاقات في REA.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-rea-rule-resource",
   "label": "قواعد العلاقات في REA"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في REA، يكفي أن يتصل كل حدث بوكيل واحد فقط.",
  "answer": false,
  "explanation": "خطأ: كل حدث يتصل بوكيلين على الأقل.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-rea-rule-resource",
   "label": "قواعد العلاقات في REA"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العلاقة بين الوكيل والحدث في REA دوماً من النوع:",
  "options": [
   "1:N",
   "0:0",
   "1:1",
   "M:N"
  ],
  "answerIndex": 0,
  "explanation": "العلاقة بين الوكيل والحدث دوماً 1:N.",
  "ref": {
   "url": "chapters/chapter-4-lesson.html#c4-rea-notes",
   "label": "علاقة الوكيل بالحدث"
  }
 }
];
