/* بنك أسئلة الفصل 3 — فصل 3.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH3_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة من البرامج التي يمكن استخدامها في إنشاء ومعالجة قاعدة البيانات وصياغتها وإجراء التعديلات عليها هي:",
  "options": [
   "قاعدة البيانات",
   "نظم إدارة قواعد البيانات (DBMS)",
   "نظم ملفات البيانات",
   "نظم قواعد البيانات"
  ],
  "answerIndex": 1,
  "explanation": "هذا هو التعريف المباشر لنظام إدارة قواعد البيانات DBMS.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dbms-def",
   "label": "نظام إدارة قواعد البيانات (DBMS)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تتضمّن قاعدة البيانات (Database) مجموعة من:",
  "options": [
   "التقارير",
   "النماذج",
   "الجداول",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "قاعدة البيانات الحديثة (كملف Access) تشمل جداول ونماذج واستعلامات وتقارير معاً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-contents",
   "label": "محتويات قاعدة البيانات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يعني توزيع بيانات النظام على عدة ملفات مع المحافظة على الترابط بينها بأقل تكرار وحشو:",
  "options": [
   "التكامل (Integrated)",
   "الاستعلام",
   "التشارك (Shared)",
   "النماذج"
  ],
  "answerIndex": 0,
  "explanation": "هذا هو تعريف \"التكامل\" تحديداً كما ورد في الملخص.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-integrated",
   "label": "التكامل (Integrated)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عنصر البيانات الواحد يمكن أن يُستخدم من قِبل عدة مستخدمين في الوقت نفسه — هذا يُسمّى:",
  "options": [
   "غير ذلك",
   "الفعالية",
   "التشارك (Shared)",
   "التكامل"
  ],
  "answerIndex": 2,
  "explanation": "هذا هو تعريف \"التشارك\" في قواعد البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-shared",
   "label": "التشارك (Shared)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مجموعة من البرامج تُمكّن المستخدم من تعريف الروابط الخاصة بقاعدة البيانات وتحديد السجلات والحقول المكوّنة للملفات:",
  "options": [
   "لغة معالجة البيانات (DML)",
   "لغة SQL فقط للاستعلام",
   "لغة تعريف البيانات (DDL)",
   "قاموس البيانات"
  ],
  "answerIndex": 2,
  "explanation": "DDL هي اللغة المخصصة لتعريف وتوصيف الملفات والسجلات والحقول والعلاقات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-ddl",
   "label": "لغة تعريف البيانات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تحديد البيانات التي يجب أن تُخزَّن في قاعدة البيانات من أجل الوصول إلى المعلومات المطلوبة لإشباع حاجة الإدارة إلى المعلومات — يتم في:",
  "options": [
   "المستوى الفيزيائي",
   "المستوى الداخلي",
   "المستوى التجريدي",
   "المستوى المنطقي"
  ],
  "answerIndex": 3,
  "explanation": "هذه الفعالية (تحديد البيانات المطلوب تخزينها) تندرج ضمن مرحلة التصميم المنطقي لقاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-logical",
   "label": "المنطقي (Logical)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المستوى الذي يتطلب لغة تمكّن من إجراء العمليات على ملفات قاعدة البيانات (كلغة DML) لتحقيق المعطيات الضرورية للوصول إلى النتائج المرغوبة:",
  "options": [
   "المستوى الخارجي (مستوى المستخدم)",
   "المستوى المنطقي",
   "المستوى الداخلي",
   "المستوى الفيزيائي"
  ],
  "answerIndex": 0,
  "explanation": "مستوى المستخدم المفرد (نهائي أو مبرمج) هو من يحتاج لغة معالجة بيانات DML/SQL لتنفيذ عملياته.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-external",
   "label": "الخارجي/المستخدم (External)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المستوى الأقل تجريداً في تصميم قاعدة البيانات، وهو ورقة تخزين البيانات فعلياً (أماكن التخزين والفهارس):",
  "options": [
   "المستوى الفيزيائي (Physical)",
   "المستوى المفاهيمي",
   "المستوى المنطقي (Logical)",
   "المستوى التجريدي"
  ],
  "answerIndex": 0,
  "explanation": "المستوى الفيزيائي هو الأقرب لآلية التخزين الفعلية على الوسائط، وهو الأقل تجريداً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-physical",
   "label": "الفيزيائي (Physical)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يُعتبر توصيفاً لمحتوى قاعدة البيانات بلغة قياسية (Data Description Language):",
  "options": [
   "المستوى المنطقي",
   "المستوى التجريدي البحت دون لغة",
   "المستوى المفاهيمي فقط",
   "المستوى الفيزيائي"
  ],
  "answerIndex": 0,
  "explanation": "المستوى المنطقي يستخدم لغة توصيف البيانات القياسية (DDL) لبناء تراكيب الجداول.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-logical",
   "label": "المنطقي (Logical)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مزايا استخدام قواعد البيانات (DBMS) مقارنة بنظم الملفات التقليدية:",
  "options": [
   "استقلالية البرامج عن البيانات",
   "ضمان سلامة البيانات",
   "إنشاء نسخ احتياطية واستعادة البيانات",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "كل هذه المزايا الثلاث من فوائد استخدام نظم إدارة قواعد البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-advantages",
   "label": "مزايا استخدام قواعد البيانات (مقابل نظم الملفات التقليدية)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "المعلومة ذاتها تكون مخزّنة في أكثر من ملف، وعند تعديلها في ملف قد لا نُعدّلها في الملفات الأخرى — هذه مشكلة:",
  "options": [
   "عدم التجانس",
   "تكرار البيانات (Redundancy)",
   "عدم المرونة",
   "الافتقار للمواصفات القياسية"
  ],
  "answerIndex": 1,
  "explanation": "هذه هي مشكلة تكرار البيانات الكلاسيكية في نظم الملفات التقليدية قبل استخدام DBMS.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-file-flaws",
   "label": "مساوئ نظم الملفات التقليدية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من برامج (نظم) إدارة قواعد البيانات DBMS المستخدمة في إنتاج ومعالجة البيانات:",
  "options": [
   "Excel فقط",
   "<span class=\"mono\">SQL Server</span>",
   "<span class=\"mono\">PowerPoint</span>",
   "<span class=\"mono\">Word</span>"
  ],
  "answerIndex": 1,
  "explanation": "SQL Server هو نظام إدارة قواعد بيانات حقيقي (DBMS)، بخلاف باقي البرامج المذكورة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dbms-examples",
   "label": "أمثلة DBMS واستخداماتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مهام \"محلل النظم\" (Systems Analyst):",
  "options": [
   "صيانة الأجهزة",
   "تحديد متطلبات المستخدم وتطوير المواصفات المطلوبة لتحديد المطلوب من قاعدة البيانات",
   "تصميم واجهات الطباعة فقط",
   "كتابة الكود البرمجي فقط"
  ],
  "answerIndex": 1,
  "explanation": "محلل النظم هو من يجمع المتطلبات ويحوّلها إلى مواصفات لتصميم قاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-analyst",
   "label": "محلل النظم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم نظم إدارة قواعد البيانات DBMS في:",
  "options": [
   "معالجة المعطيات",
   "إدخال المعطيات",
   "توصيف وإنشاء قواعد البيانات",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "DBMS أداة شاملة تغطي الإنشاء والتوصيف والإدخال والمعالجة معاً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dbms-examples",
   "label": "أمثلة DBMS واستخداماتها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "حماية البيانات من الوصول غير المشروع إليها يُقصد بها:",
  "options": [
   "تكامل البيانات",
   "مرونة البيانات",
   "سلامة البيانات (Data Integrity)",
   "أمن البيانات (Data Security)"
  ],
  "answerIndex": 3,
  "explanation": "أمن البيانات = الحماية من الوصول غير المصرّح به، وتحديد صلاحيات المستخدمين.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dba",
   "label": "مدير قاعدة البيانات (DBA)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الوظيفة التي تُخزّن مواصفات كل حقل من حقول قاعدة البيانات الأساسية (اسمها، نوعها، حجمها...):",
  "options": [
   "معالجة البيانات",
   "تعريف الروابط",
   "قاموس البيانات (Data Dictionary)",
   "ضمان حماية البيانات"
  ],
  "answerIndex": 2,
  "explanation": "قاموس البيانات هو \"قاعدة بيانات عن قاعدة البيانات\" يحفظ مواصفات كل الحقول.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dictionary",
   "label": "قاموس البيانات (Data Dictionary)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تتميّز أنظمة إدارة قواعد البيانات \"الترابطية\" بأنها تسمح للمستخدم والمصمم بالعمل على بيئة منظمة وطبيعية، وتتولّى هي التعامل مع كل التفاصيل الفيزيائية المعقدة:",
  "options": [
   "الهيكلية",
   "لا علاقة بأي نوع",
   "الترابطية (Relational)",
   "الشبكية"
  ],
  "answerIndex": 2,
  "explanation": "هذا وصف مباشر لنظم قواعد البيانات الترابطية وهي الأكثر شيوعاً واعتماداً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-types",
   "label": "ترابطية/علائقية (Relational)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحالة التي لا نستخدم فيها قاعدة بيانات لمشروع ما:",
  "options": [
   "حين تكون البيانات كبيرة ومعقّدة",
   "حين تكون تكلفة الإعداد عالية جداً نسبة لحجم المشروع، والبيانات بسيطة، ولا حاجة لبيئة متعددة المستخدمين",
   "حين نحتاج تكاملاً عالياً بين الملفات",
   "حين نحتاج تشاركاً متعدد المستخدمين"
  ],
  "answerIndex": 1,
  "explanation": "لا حاجة لقاعدة بيانات كاملة إن كان المشروع بسيطاً وبتكلفة إعداد غير مبرَّرة وبدون حاجة لتعدد المستخدمين.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-when-not",
   "label": "متى لا نستخدم قاعدة بيانات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من أنواع نظم قواعد البيانات المعتمدة بشكل شائع لبساطتها ومرونتها وسهولة عرضها:",
  "options": [
   "لا وجود لتصنيف",
   "الترابطية (Relational)",
   "الشبكية",
   "الهرمية"
  ],
  "answerIndex": 1,
  "explanation": "النظم الترابطية هي الأكثر انتشاراً بسبب البساطة والمرونة وسهولة العرض على شكل جداول.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-types",
   "label": "ترابطية/علائقية (Relational)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تطبيق قاعدة البيانات هو مجموعة مترابطة من البرامج التطبيقية تُستخدم لتنفيذ سلسلة من أنشطة قاعدة البيانات.",
  "answer": true,
  "explanation": "صحيح: هذا تعريف تطبيق قاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-def",
   "label": "قاعدة البيانات"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "«الاستقلالية» تعني أن تعديلات الاستخدامات والبرامج يجب أن تؤدي إلى تغيير في تراكيب البيانات.",
  "answer": false,
  "explanation": "خطأ: الاستقلالية الصحيحة أن تعديلات البرامج لا تؤثر على تراكيب البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-adv-independence",
   "label": "استقلالية البرامج عن البيانات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الفرق الجوهري بين \"نظام الملفات التقليدي\" و\"نظام إدارة قواعد البيانات\" هو أن الأخير:",
  "options": [
   "يفصل البرامج عن البيانات ويقلل التكرار",
   "يعمل فقط بدون شبكة",
   "لا يحتاج مستخدمين لتشغيله",
   "يزيد تكرار البيانات عمداً لتحسين الأداء"
  ],
  "answerIndex": 0,
  "explanation": "استقلالية البرامج عن البيانات وتقليل التكرار هما أهم مزايا DBMS مقارنة بنظم الملفات التقليدية.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-adv-independence",
   "label": "استقلالية البرامج عن البيانات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مكونات نظام المعلومات المؤتمت باستخدام DBMS هي:",
  "options": [
   "الشبكة فقط",
   "قاعدة البيانات + البرمجيات + التجهيزات المادية + المستخدمون",
   "الجداول فقط",
   "لغة SQL فقط"
  ],
  "answerIndex": 1,
  "explanation": "أربعة مكونات أساسية يتكون منها نظام المعلومات المؤتمت.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-automated-system",
   "label": "مكونات نظام المعلومات المؤتمت"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مهام مدير قاعدة البيانات (DBA):",
  "options": [
   "تحديد صلاحيات المستخدمين وتوفير الأمن والحماية للقاعدة",
   "تصميم الشعارات والواجهات الجمالية",
   "كتابة برامج التطبيقات النهائية فقط",
   "بيع المنتجات للعملاء"
  ],
  "answerIndex": 0,
  "explanation": "من أهم مهام DBA: الأمن، الصلاحيات، إعادة التنظيم، والتنسيق بين متطلبات المستخدمين.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dba",
   "label": "مدير قاعدة البيانات (DBA)"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في مرحلة «التصميم المنطقي» لقاعدة البيانات يتم تحويل تراكيب البيانات إلى ملفات باستخدام لغة توصيف البيانات (DDL).",
  "answer": false,
  "explanation": "خطأ: تحويل التراكيب إلى ملفات باستخدام DDL يتم في مرحلة التصميم المادي (الفيزيائي).",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-physical-design",
   "label": "التصميم المادي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "قاعدة البيانات مجموعة بيانات متصلة ذات علاقات متبادلة، مخزّنة بطريقة نموذجية دون تكرار.",
  "answer": true,
  "explanation": "صحيح: هذا تعريف قاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-def",
   "label": "قاعدة البيانات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "نظام إدارة قواعد البيانات (DBMS) هو مجموعة بيانات متصلة مخزّنة دون تكرار.",
  "answer": false,
  "explanation": "خطأ: هذا تعريف قاعدة البيانات؛ أما DBMS فحزمة برمجية لإنشائها ومعالجتها.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dbms-def",
   "label": "نظام إدارة قواعد البيانات (DBMS)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الغرض الرئيسي لنظام قاعدة البيانات المحوسب هو:",
  "options": [
   "تخزين البيانات وتمكين المستخدم من استرجاعها وتحديثها",
   "تصميم واجهات الإنترنت",
   "طباعة التقارير فقط",
   "حماية الأجهزة من الفيروسات"
  ],
  "answerIndex": 0,
  "explanation": "الغرض: تخزين البيانات واسترجاعها وتحديثها حسب حاجة المستخدم.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-purpose",
   "label": "الغرض من نظام قاعدة البيانات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي ليس من مكونات نظام المعلومات المؤتمت باستخدام DBMS؟",
  "options": [
   "قاعدة البيانات",
   "الموردون الخارجيون",
   "البرمجيات (DBMS)",
   "التجهيزات المادية"
  ],
  "answerIndex": 1,
  "explanation": "المكونات: قاعدة البيانات + البرمجيات + التجهيزات المادية + المستخدمون.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-automated-system",
   "label": "مكونات نظام المعلومات المؤتمت"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الرابطة (Relation) هي الجدول، وتتضمن مجموعة أسطر (سجلات).",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-relation",
   "label": "الرابطة (Relation)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "السجل (Record) في قاعدة البيانات الترابطية هو:",
  "options": [
   "سطر واحد يتكون من مجموعة حقول",
   "ملف قاعدة البيانات",
   "عمود واحد من الجدول",
   "الجدول كاملاً"
  ],
  "answerIndex": 0,
  "explanation": "السجل: سطر واحد من حقول.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-record",
   "label": "السجل (Record)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لغة DML تُستخدم من أجل:",
  "options": [
   "ضغط الملفات",
   "تعريف الملفات والحقول والعلاقات",
   "تشفير كلمات المرور فقط",
   "إضافة السجلات وحذفها وتعديلها"
  ],
  "answerIndex": 3,
  "explanation": "DML لغة معالجة البيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dml",
   "label": "لغة معالجة البيانات (DML)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لغة DDL تُستخدم لإضافة السجلات وحذفها وتعديلها.",
  "answer": false,
  "explanation": "خطأ: هذه وظيفة DML؛ أما DDL فلتعريف الملفات والسجلات والحقول والعلاقات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-ddl",
   "label": "لغة تعريف البيانات (DDL)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لغة SQL تُستخدم أساساً في:",
  "options": [
   "الاستعلام: استرجاع وتصنيف وترتيب مجموعات فرعية من البيانات",
   "تصميم النماذج الورقية",
   "تعريف الشبكات",
   "حفظ النسخ الاحتياطية فقط"
  ],
  "answerIndex": 0,
  "explanation": "SQL لغة الاستعلام.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-sql",
   "label": "لغة الاستعلام (SQL)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "قاموس البيانات يخزّن مواصفات كل حقل من حقول قاعدة البيانات.",
  "answer": true,
  "explanation": "صحيح: وهو قاعدة بيانات خاصة بالنظام نفسه.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dictionary",
   "label": "قاموس البيانات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "قاموس البيانات قاعدة بيانات خاصة بالمستخدم وليست بالنظام.",
  "answer": false,
  "explanation": "خطأ: هو قاعدة بيانات خاصة بالنظام نفسه وليست بالمستخدم.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dictionary",
   "label": "قاموس البيانات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "المستوى الفيزيائي يحدد أماكن التخزين والفهارس وتشفير البيانات.",
  "answer": true,
  "explanation": "صحيح: وهو المستوى الأقل تجريداً.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-physical",
   "label": "المستوى الفيزيائي"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أهم مرحلة عند بناء قاعدة البيانات (تحديد البيانات المطلوب تخزينها والعلاقات بين الملفات) هي المستوى:",
  "options": [
   "لا يوجد مستوى أهم",
   "الخارجي",
   "المنطقي",
   "الفيزيائي"
  ],
  "answerIndex": 2,
  "explanation": "المستوى المنطقي هو أهم مرحلة.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-logical",
   "label": "المستوى المنطقي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "مدير قاعدة البيانات (DBA) هو من يحدد صلاحيات المستخدمين ويوفر الأمن والحماية.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-dba",
   "label": "مدير قاعدة البيانات (DBA)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "من يحوّل التصميم إلى قاعدة فعلية ويصيغ نوافذ التخاطب والتقارير والنماذج؟",
  "options": [
   "المستخدمون النهائيون",
   "محلل النظم فقط",
   "مبرمجو التطبيقات",
   "مدير قاعدة البيانات فقط"
  ],
  "answerIndex": 2,
  "explanation": "هذه مهمة مبرمجي التطبيقات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-programmers",
   "label": "مبرمجو التطبيقات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "المستخدمون النهائيون يتحاورون مع النظام عبر البرامج أو عبر لغات مثل:",
  "options": [
   "SQL (SELECT, INSERT, UPDATE, DELETE)",
   "لغة الأسمبلي فقط",
   "لغة تعريف الأجهزة",
   "لغات الشبكات"
  ],
  "answerIndex": 0,
  "explanation": "عبر البرامج أو لغات كـ SQL.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-endusers",
   "label": "المستخدمون النهائيون"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "في نظم الملفات التقليدية تكون الملفات مستقلة تماماً عن برنامج التطبيق.",
  "answer": false,
  "explanation": "خطأ: من مساوئها أن الملفات تابعة لبرنامج التطبيق.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-file-flaws",
   "label": "مساوئ نظم الملفات التقليدية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي من مساوئ نظم الملفات التقليدية؟",
  "options": [
   "استقلالية البرامج عن البيانات",
   "أمن وسرية عالية",
   "ندرة التكرار",
   "تكرار وحشو في البيانات"
  ],
  "answerIndex": 3,
  "explanation": "التكرار والحشو من مساوئها؛ والباقي من مزايا DBMS.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-file-flaws",
   "label": "مساوئ نظم الملفات التقليدية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "أي مما يلي ليس من أنواع نظم قواعد البيانات المذكورة في المقرر؟",
  "options": [
   "الشبكية",
   "الخطية العشوائية",
   "الهرمية",
   "الترابطية (العلائقية)"
  ],
  "answerIndex": 1,
  "explanation": "الأنواع: هرمية وشبكية وترابطية.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-db-types",
   "label": "أنواع نظم قواعد البيانات"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "لا نستخدم قاعدة بيانات إذا كانت البيانات بسيطة جداً ولا حاجة لبيئة متعددة المستخدمين.",
  "answer": true,
  "explanation": "صحيح: من الحالات التي لا نستخدم فيها قاعدة بيانات.",
  "ref": {
   "url": "chapters/chapter-3-lesson.html#c3-when-not",
   "label": "متى لا نستخدم قاعدة بيانات"
  }
 }
];
