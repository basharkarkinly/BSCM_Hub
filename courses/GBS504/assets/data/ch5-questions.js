/* بنك أسئلة الفصل 5 — فصل 5.
   origin:"bank" = أصله من أسئلة الدورات السابقة (الإجابة محقّقة من نص المقرر)، origin:"gen" = مولّد من محتوى المقرر. */
const CH5_POOL = [
 {
  "origin": "bank",
  "type": "mcq",
  "question": "امتداد ملفات Access الحديثة هو:",
  "options": [
   "<span class=\"mono\">.xlsx</span>",
   "<span class=\"mono\">.accdb</span>",
   "<span class=\"mono\">.mdb</span>",
   "<span class=\"mono\">.accbd</span>"
  ],
  "answerIndex": 1,
  "explanation": "الامتداد الحديث لملفات Access هو .accdb (بدلاً من .mdb القديم).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-extension",
   "label": "امتداد ملفات Access"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الحد الأقصى لعدد أحرف حقل \"نص مختصر\" (Short Text) في Access:",
  "options": [
   "255 حرفاً",
   "40 حرفاً",
   "5 أحرف",
   "102 حرفاً"
  ],
  "answerIndex": 0,
  "explanation": "يبلغ الحد الأقصى لحقل النص المختصر 255 حرفاً في Access.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-short-text",
   "label": "النص المختصر (255)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند تفعيل خيار \"تتالي تحديث الحقول المرتبطة\" مع فرض التكامل المرجعي:",
  "options": [
   "يتم حذف البيانات في الجداول المرتبطة دون تعديل الحقل الرئيسي",
   "لا يحدث أي تأثير على الجداول الأخرى",
   "يرفض Access أي تحديث",
   "يتم تحديث البيانات في الحقل الرئيسي وتحديث كل البيانات المرتبطة في الجداول الأخرى تلقائياً"
  ],
  "answerIndex": 3,
  "explanation": "تفعيل هذا الخيار يجعل Access يُحدّث تلقائياً كل الحقول المرتبطة عند تغيير قيمة المفتاح الرئيسي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-cascade-update",
   "label": "تتالي تحديث الحقول"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا لم نُفعّل خيار \"تتالي حذف السجلات المرتبطة\" وحاولنا حذف سجل رئيسي مرتبط بسجلات في جدول آخر (مع وجود تكامل مرجعي):",
  "options": [
   "يحذف Access السجل الرئيسي فقط ويترك الفرعي معزولاً",
   "يرفض Access عملية الحذف",
   "لا علاقة للتكامل المرجعي بهذا",
   "يحذف Access السجل من الجدولين دون تحذير"
  ],
  "answerIndex": 1,
  "explanation": "التكامل المرجعي يمنع نشوء سجلات معزولة، فيرفض Access أي عملية حذف تنتهك هذه العلاقة دون تفعيل التتالي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-ref-integrity",
   "label": "التكامل المرجعي (Referential Integrity)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من برامج (أنظمة) لغة الاستعلام SQL المعروفة:",
  "options": [
   "<span class=\"mono\">Word</span>",
   "<span class=\"mono\">SQL Server</span>",
   "<span class=\"mono\">PowerPoint</span>",
   "<span class=\"mono\">Excel</span>"
  ],
  "answerIndex": 1,
  "explanation": "SQL Server هو نظام قواعد بيانات فعلي يعتمد لغة SQL، بخلاف باقي البرامج المكتبية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-sql-names",
   "label": "SQL"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "دالة (أمر) الحذف من الاستعلام في SQL هي:",
  "options": [
   "<span class=\"mono\">DISTINCT</span>",
   "<span class=\"mono\">DELETE</span>",
   "<span class=\"mono\">ORDER BY</span>",
   "<span class=\"mono\">CREATE</span>"
  ],
  "answerIndex": 1,
  "explanation": "DELETE هي الأمر المخصص لحذف السجلات في استعلامات SQL.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-delete-sql",
   "label": "DELETE"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أمر حذف النتائج المكررة في الاستعلام:",
  "options": [
   "<span class=\"mono\">DISTINCT</span>",
   "<span class=\"mono\">CREATE</span>",
   "<span class=\"mono\">ORDER BY</span>",
   "<span class=\"mono\">DELETE</span>"
  ],
  "answerIndex": 0,
  "explanation": "DISTINCT يُستخدم بعد SELECT لحذف النتائج المكررة من نتيجة الاستعلام.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-distinct",
   "label": "DISTINCT"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لإنشاء جدول جديد في SQL نستخدم:",
  "options": [
   "<span class=\"mono\">CREATE TABLE</span>",
   "<span class=\"mono\">INNER FIELD</span>",
   "<span class=\"mono\">ADD TABLE</span>",
   "<span class=\"mono\">INPUT TABLE</span>"
  ],
  "answerIndex": 0,
  "explanation": "CREATE TABLE هي الصيغة القياسية لإنشاء جدول جديد.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-update-sql",
   "label": "UPDATE / DROP / CREATE"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم لوضع شرط على البيانات المسموح إدخالها في حقل معيّن ضمن Access:",
  "options": [
   "<span class=\"mono\">Validation Rule</span>",
   "<span class=\"mono\">Drop Table</span>",
   "<span class=\"mono\">Validation Text</span>",
   "<span class=\"mono\">Create Table</span>"
  ],
  "answerIndex": 0,
  "explanation": "Validation Rule هي الخاصية التي تحدد الشرط الذي يجب أن تحققه البيانات المُدخلة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-field-properties",
   "label": "خصائص الحقل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الخاصية التي تُظهر رسالة تنبيه عند تعارض البيانات المُدخلة مع الشرط المحدد:",
  "options": [
   "<span class=\"mono\">Input Mask</span>",
   "<span class=\"mono\">Default Value</span>",
   "<span class=\"mono\">Validation Text</span>",
   "<span class=\"mono\">Validation Rule</span>"
  ],
  "answerIndex": 2,
  "explanation": "Validation Text هي النص الذي يظهر كرسالة خطأ عند مخالفة شرط Validation Rule.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-field-properties",
   "label": "خصائص الحقل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "استعلام يعرض عند تشغيله مربع حوار خاص به يطلب من المستخدم معلومات تُعامل كمعايير بحث:",
  "options": [
   "استعلام التحديث",
   "لا يوجد استعلام كهذا",
   "استعلام المعلمات (Parameter Query)",
   "استعلام التحديد العادي"
  ],
  "answerIndex": 2,
  "explanation": "استعلام المعلمات يطلب من المستخدم قيمة عند التشغيل، بدلاً من تحديدها ثابتة داخل نص الاستعلام.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-parameter-query",
   "label": "استعلام المعلمات (Parameter)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم دالة Max في الاستعلامات على:",
  "options": [
   "الأرقام فقط",
   "النصوص فقط",
   "التواريخ فقط",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "دالتا Max وMin تعملان مع الأرقام والتواريخ والنصوص (ترتيباً أبجدياً).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-aggregate",
   "label": "الدوال التجميعية Max/Min"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ترمز SQL إلى:",
  "options": [
   "<span class=\"mono\">System Question Log</span>",
   "<span class=\"mono\">Standard Quality Level</span>",
   "<span class=\"mono\">Simple Query List</span>",
   "<span class=\"mono\">Structured Query Language</span>"
  ],
  "answerIndex": 3,
  "explanation": "SQL = Structured Query Language، لغة الاستعلام البنيوية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-sql-names",
   "label": "SQL"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يُستخدم التنسيق (Format) في Access لـ:",
  "options": [
   "تحديد شكل ظهور البيانات في الحقل",
   "إنشاء علاقات جديدة",
   "حذف السجلات",
   "حذف الجداول"
  ],
  "answerIndex": 0,
  "explanation": "خاصية Format تتحكم بشكل عرض البيانات (كعدد الفواصل العشرية أو صيغة التاريخ) دون تغيير القيمة الفعلية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-field-properties",
   "label": "خصائص الحقل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "استعلام SQL لتخفيض السعر إلى 50% من قيمته الحالية يُكتب:",
  "options": [
   "<span class=\"mono\">Set price = price ÷ 50%</span>",
   "<span class=\"mono\">Set price = price + 50%</span>",
   "<span class=\"mono\">Set price = price * 50%</span>",
   "<span class=\"mono\">Set price = price − 50%</span>"
  ],
  "answerIndex": 2,
  "explanation": "لتخفيض السعر إلى (وليس بمقدار) 50% من قيمته، نضربه في 50%: price = price * 50%.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-update-sql",
   "label": "UPDATE / DROP / CREATE"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "ملف Microsoft Access يمكن أن يحتوي على:",
  "options": [
   "أكثر من جدول",
   "جدولين على الأقل إلزامياً",
   "خمسة جداول على الأقل إلزامياً",
   "جدول واحد فقط"
  ],
  "answerIndex": 0,
  "explanation": "ملف Access الواحد (.accdb) يمكن أن يحوي أي عدد من الجداول والاستعلامات والنماذج والتقارير.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-multi-tables",
   "label": "أكثر من جدول"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لحذف جدول كامل باستخدام SQL نستخدم:",
  "options": [
   "<span class=\"mono\">DROP TABLE</span>",
   "<span class=\"mono\">SELECT</span>",
   "<span class=\"mono\">CREATE TABLE</span>",
   "<span class=\"mono\">DISTINCT</span>"
  ],
  "answerIndex": 0,
  "explanation": "DROP TABLE هي الصيغة القياسية لحذف جدول كامل من قاعدة البيانات.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-update-sql",
   "label": "UPDATE / DROP / CREATE"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لا يُفرض التكامل المرجعي مباشرة مع:",
  "options": [
   "الجداول",
   "المفاتيح الأجنبية",
   "الاستعلامات",
   "العلاقات بين الجداول"
  ],
  "answerIndex": 2,
  "explanation": "التكامل المرجعي يُفرض على علاقات الجداول (الحقول المرتبطة)، لا على الاستعلامات كعنصر مستقل.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-ri-note",
   "label": "التكامل المرجعي والاستعلامات"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم الاستعلامات في:",
  "options": [
   "معالجة الملفات",
   "تجميع الملفات",
   "طلب معلومات عن المعطيات",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "الاستعلامات أداة شاملة لمعالجة وتجميع البيانات والحصول على معلومات محددة منها.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-query-ways",
   "label": "إنشاء الاستعلام"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عندما نريد توحيد سجلات جدولين توجد بينهما قيم متطابقة في حقل مشترك، نستخدم:",
  "options": [
   "UNION فقط",
   "<span class=\"mono\">INNER JOIN</span>",
   "<span class=\"mono\">LEFT JOIN</span>",
   "<span class=\"mono\">RIGHT JOIN</span>"
  ],
  "answerIndex": 1,
  "explanation": "INNER JOIN يُظهر فقط السجلات التي لها تطابق في الحقل المشترك بين الجدولين.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-inner-join",
   "label": "INNER JOIN"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند الرغبة بالحصول على كل سجلات الجدول الأول والسجلات المطابقة فقط من الجدول الثاني، نستخدم:",
  "options": [
   "<span class=\"mono\">RIGHT JOIN</span>",
   "<span class=\"mono\">INNER JOIN</span>",
   "<span class=\"mono\">LEFT JOIN</span>",
   "لا حل"
  ],
  "answerIndex": 2,
  "explanation": "LEFT JOIN يُبقي كل سجلات الجدول الأول (الأيسر) ويُضيف المطابق فقط من الثاني.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-left-join",
   "label": "LEFT JOIN"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عند الرغبة بالحصول على كل سجلات الجدول الثاني والسجلات المطابقة فقط من الجدول الأول، نستخدم:",
  "options": [
   "لا حل",
   "<span class=\"mono\">INNER JOIN</span>",
   "<span class=\"mono\">LEFT JOIN</span>",
   "<span class=\"mono\">RIGHT JOIN</span>"
  ],
  "answerIndex": 3,
  "explanation": "RIGHT JOIN يُبقي كل سجلات الجدول الثاني (الأيمن) ويُضيف المطابق فقط من الأول.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-right-join",
   "label": "RIGHT JOIN"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من الاستعلامات الإجرائية (Action Queries) في Access:",
  "options": [
   "الحذف (Delete)",
   "الإضافة (Append)",
   "التحديث (Update)",
   "كل ما سبق"
  ],
  "answerIndex": 3,
  "explanation": "الاستعلامات الإجرائية الثلاثة الأساسية: حذف، إضافة، تحديث — وتُجري تغييراً فعلياً على البيانات.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-action-query",
   "label": "استعلامات إجرائية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الاستعلامات التي تبدأ بكلمة SELECT تُصنَّف على أنها:",
  "options": [
   "استعلامات الحذف",
   "استعلامات التحديث",
   "استعلامات التحديد (Select Queries)",
   "استعلامات المعلمات دوماً"
  ],
  "answerIndex": 2,
  "explanation": "كل استعلام يبدأ بـ SELECT هو استعلام تحديد، يهدف لاستعادة/عرض بيانات دون تعديلها.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-select-query",
   "label": "استعلامات التحديد (Select)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "استعلام SQL لإظهار الزبائن الموجودين في مدينتَي دمشق وعمّان يُكتب باستخدام:",
  "options": [
   "<span class=\"mono\">SELECT * FROM Customer ORDER BY City</span>",
   "<span class=\"mono\">SELECT * FROM Customer GROUP BY City</span>",
   "<span class=\"mono\">SELECT * FROM Customer WHERE City IN (\"Damascus\",\"Amman\")</span>",
   "<span class=\"mono\">SELECT * FROM Customer WHERE City = \"Damascus\" AND \"Amman\"</span>"
  ],
  "answerIndex": 2,
  "explanation": "عامل IN يسمح بمطابقة القيمة مع أي قيمة ضمن قائمة محددة، وهو الأنسب هنا بدلاً من تكرار شرط OR.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-in",
   "label": "IN"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "الخاصية التي تسمح بتعريف اسم بديل يظهر لحقل معيّن في جدول البيانات دون تغيير اسمه الحقيقي:",
  "options": [
   "<span class=\"mono\">Format</span>",
   "<span class=\"mono\">Indexed</span>",
   "<span class=\"mono\">Default Value</span>",
   "<span class=\"mono\">Caption</span>"
  ],
  "answerIndex": 3,
  "explanation": "خاصية Caption تُظهر تسمية بديلة للحقل في واجهة عرض البيانات دون تعديل اسم الحقل الفعلي في التصميم.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-field-properties",
   "label": "خصائص الحقل"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "تُستخدم دالة/استعلام Update في Access لـ:",
  "options": [
   "حذف الجداول",
   "تحديث بنية الاستعلام نفسه",
   "تحديث بنية الجداول",
   "تحديث بيانات الجداول (قيم السجلات)"
  ],
  "answerIndex": 3,
  "explanation": "استعلام التحديث (Update Query) يُغيّر قيم البيانات ضمن السجلات، لا بنية الجدول نفسها.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-action-query",
   "label": "استعلامات إجرائية"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "في عرض التخطيط (Layout View) لتصميم نموذج في Access:",
  "options": [
   "النموذج لا يعمل فعلياً ولا تظهر البيانات الحقيقية",
   "لا يمكن تغيير حجم عناصر التحكم فيه",
   "النموذج يعمل فعلياً وتظهر البيانات الحقيقية أثناء التعديل",
   "يظهر فقط مقطع التذييل"
  ],
  "answerIndex": 2,
  "explanation": "ميزة عرض التخطيط أن النموذج يعمل فعلياً فتظهر البيانات الحقيقية بينما نُعدّل التصميم.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-layout-view",
   "label": "عرض التخطيط (Layout)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أي طرق العرض التالية تسمح برؤية مقاطع الرأس والتفصيل والتذييل بتفصيل أكبر، رغم أن النموذج لا يعمل فعلياً أثناء التعديل؟",
  "options": [
   "عرض التصميم",
   "عرض التخطيط",
   "عرض ورقة البيانات",
   "عرض النموذج المنقسم"
  ],
  "answerIndex": 0,
  "explanation": "عرض التصميم (Design View) يوفر تحكماً تفصيلياً ببنية النموذج، لكنه لا يُشغّل النموذج فعلياً أثناء التحرير.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-design-view",
   "label": "عرض التصميم (Design)"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عنصر التحكم الذي يكون مصدر بياناته حقلاً في جدول أو استعلام يُسمّى:",
  "options": [
   "عنصر تحكم محسوب فقط",
   "عنصر تحكم منضم (Bound)",
   "عنصر تحكم غير منضم (Unbound)",
   "لا تسمية له"
  ],
  "answerIndex": 1,
  "explanation": "عنصر التحكم \"المنضم\" مرتبط مباشرة بحقل حقيقي من مصدر بيانات.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-bound-form",
   "label": "نموذج مرتبط"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "عنصر تحكم يكون مصدر بياناته \"تعبيراً\" (Expression) بدلاً من حقل مباشر يُسمّى:",
  "options": [
   "عنصر تحكم غير منضم",
   "عنصر تحكم مخفي",
   "عنصر تحكم محسوب (Calculated)",
   "عنصر تحكم منضم"
  ],
  "answerIndex": 2,
  "explanation": "عنصر التحكم \"المحسوب\" يعرض نتيجة معادلة/تعبير، وقد يستخدم بيانات من حقول أخرى.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-controls",
   "label": "عناصر التحكم"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقطع التقرير الذي يظهر مرة واحدة في بداية التقرير فقط (عنوان، شعار، تاريخ):",
  "options": [
   "التفصيل",
   "رأس الصفحة",
   "رأس التقرير",
   "رأس المجموعة"
  ],
  "answerIndex": 2,
  "explanation": "رأس التقرير يظهر مرة واحدة فقط في أول صفحة من التقرير.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-report-header",
   "label": "رأس التقرير"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "مقطع التقرير الذي يظهر في بداية كل مجموعة سجلات جديدة (مثل اسم المنتج قبل تفاصيله):",
  "options": [
   "رأس الصفحة",
   "رأس المجموعة",
   "رأس التقرير",
   "تذييل الصفحة"
  ],
  "answerIndex": 1,
  "explanation": "رأس المجموعة يظهر عند بداية كل تجميع جديد للسجلات (Group).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-group-header",
   "label": "رأس المجموعة"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "أراد مستخدم إظهار أسماء الموظفين الذين رواتبهم بين 2000 و5000 باستخدام SQL، الصيغة الأصح هي:",
  "options": [
   "<span class=\"mono\">SELECT Name FROM Employee WHERE Salary LIKE 2000-5000</span>",
   "<span class=\"mono\">SELECT Name FROM Employee WHERE Salary BETWEEN 2000 AND 5000</span>",
   "SELECT Name FROM Employee WHERE Salary > 2000 OR Salary < 5000",
   "<span class=\"mono\">SELECT Name FROM Employee GROUP BY Salary</span>"
  ],
  "answerIndex": 1,
  "explanation": "عامل BETWEEN...AND هو الأنسب لتحديد نطاق قيم بين حدّين، وليس OR الذي كان سيُظهر كل الرواتب تقريباً بالخطأ.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-between",
   "label": "BETWEEN"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لو أردنا حساب عدد الموظفين في كل قسم مع عرض القسم فقط، نستخدم:",
  "options": [
   "<span class=\"mono\">SELECT * FROM Employee DISTINCT Dept</span>",
   "<span class=\"mono\">SELECT Dept, COUNT(*) FROM Employee ORDER BY Dept</span>",
   "<span class=\"mono\">SELECT Dept FROM Employee WHERE COUNT(*)</span>",
   "<span class=\"mono\">SELECT Dept, COUNT(*) FROM Employee GROUP BY Dept</span>"
  ],
  "answerIndex": 3,
  "explanation": "GROUP BY مع دالة تجميعية (COUNT) هو الأسلوب الصحيح لحساب عدد السجلات لكل فئة من فئات عمود معيّن.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-groupby",
   "label": "GROUP BY"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "لإظهار الأقسام التي يزيد عدد موظفيها عن 10 فقط (بعد التجميع)، نستخدم:",
  "options": [
   "<span class=\"mono\">WHERE COUNT(*) > 10</span>",
   "<span class=\"mono\">DISTINCT COUNT(*) > 10</span>",
   "<span class=\"mono\">HAVING COUNT(*) > 10</span>",
   "<span class=\"mono\">ORDER BY COUNT(*) > 10</span>"
  ],
  "answerIndex": 2,
  "explanation": "HAVING هي العبارة الصحيحة لوضع شرط على نتيجة التجميع (بعد GROUP BY)، بخلاف WHERE التي تُطبَّق قبل التجميع على السجلات الفردية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-having",
   "label": "HAVING"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "إذا لم يُحدَّد مفتاح رئيسي ينشئ Access تلقائياً حقلاً باسم «المعرّف» بنوع ترقيم تلقائي.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-autoid",
   "label": "الحقل التلقائي «المعرّف»"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "استعلامات التحديد (Select) تُجري تغييرات فعلية على السجلات.",
  "answer": false,
  "explanation": "خطأ: لا تُعدّل مصدر البيانات؛ التغيير الفعلي من الاستعلامات الإجرائية.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-select-query",
   "label": "استعلامات التحديد (Select)"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الاستعلامات الإجرائية (حذف، إضافة، تحديث) تُجري تغييرات فعلية على السجلات.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-action-query",
   "label": "الاستعلامات الإجرائية"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الاستعلام الذي يضم حقولاً من جدولين أو أكثر في نتيجة واحدة هو استعلام:",
  "options": [
   "التوحيد (Union)",
   "الحذف",
   "التحديد البسيط",
   "المعلمات (Parameter)"
  ],
  "answerIndex": 0,
  "explanation": "استعلام التوحيد يضم الحقول في نتيجة واحدة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-union-query",
   "label": "استعلامات التوحيد (Union)"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "طريقتا إنشاء الاستعلام في Access هما:",
  "options": [
   "الجداول أو العلاقات",
   "عرض التصميم (Design View) أو SQL",
   "الماكرو أو الوحدات",
   "النماذج أو التقارير"
  ],
  "answerIndex": 1,
  "explanation": "طريقتان: عرض التصميم أو SQL.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-query-ways",
   "label": "طرق إنشاء الاستعلام"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لترتيب السجلات وفق معيار محدد في SQL نستخدم:",
  "options": [
   "DISTINCT",
   "GROUP BY",
   "ORDER BY",
   "HAVING"
  ],
  "answerIndex": 2,
  "explanation": "ORDER BY لترتيب السجلات.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-orderby",
   "label": "ORDER BY"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لضمّ السجلات ذات القيم المتماثلة (غالباً مع دالة حسابية) نستخدم:",
  "options": [
   "GROUP BY",
   "ORDER BY",
   "BETWEEN",
   "LIKE"
  ],
  "answerIndex": 0,
  "explanation": "GROUP BY للتجميع.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-groupby",
   "label": "GROUP BY"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "العبارة HAVING تضع شرطاً على السجلات قبل التجميع بواسطة GROUP BY.",
  "answer": false,
  "explanation": "خطأ: HAVING شرط على السجلات المجمّعة، أي بعد التجميع.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-having",
   "label": "HAVING"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العبارة <span class=\"mono\">BETWEEN...AND</span> تُستخدم للتحقق من أن:",
  "options": [
   "القيمة غير مكررة",
   "النص يطابق نمطاً بحثياً",
   "القيمة ضمن نطاق محدد",
   "القيمة تساوي إحدى قيم قائمة"
  ],
  "answerIndex": 2,
  "explanation": "BETWEEN...AND: قيمة ضمن نطاق.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-between",
   "label": "BETWEEN...AND"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "العامل <span class=\"mono\">LIKE</span> يُستخدم مع الرموز <span class=\"mono\">#, *, ?</span> من أجل:",
  "options": [
   "ضم الجداول",
   "حذف الجداول",
   "مقارنة سلسلة محارف بنمط بحث",
   "ترتيب السجلات"
  ],
  "answerIndex": 2,
  "explanation": "LIKE مقارنة نمطية بعامل بحث.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-like",
   "label": "LIKE"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "LEFT JOIN يعيد كل سجلات الجدول الثاني والمطابقة فقط من الجدول الأول.",
  "answer": false,
  "explanation": "خطأ: هذا RIGHT JOIN؛ أما LEFT JOIN فكل سجلات الجدول الأول + المطابقة من الثاني.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-left-join",
   "label": "LEFT JOIN"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عند عدم وجود حقل مشترك بين جدولين نريد ربطهما نضيف:",
  "options": [
   "تقريراً جديداً",
   "استعلام حذف",
   "جدولاً وسيطاً",
   "نموذجاً منقسماً"
  ],
  "answerIndex": 2,
  "explanation": "الجدول الوسيط يعمل كمعبر بينهما (غالباً في M:N).",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-junction",
   "label": "الجدول الوسيط"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "أساس علاقة الجدول في Access هو تناظر القيم بين حقول المفاتيح (الرئيسي والأجنبي).",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-relationship-basis",
   "label": "أساس العلاقة بين الجداول"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عند تفعيل «تتالي حذف السجلات المرتبطة» فإن حذف السجل الرئيسي يحذف تلقائياً السجلات المرتبطة به.",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-cascade-delete",
   "label": "تتالي حذف السجلات"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النموذج الذي لا يرتبط بمصدر بيانات ويحوي أزرار وعناصر تحكم فقط هو النموذج:",
  "options": [
   "غير المرتبط",
   "المرتبط",
   "المنقسم",
   "الفرعي"
  ],
  "answerIndex": 0,
  "explanation": "النموذج غير المرتبط بلا مصدر بيانات.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-unbound-form",
   "label": "النموذج غير المرتبط"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "النموذج الذي يعرض مصدر البيانات نفسه بطريقتين معاً (نموذج + ورقة بيانات) هو النموذج:",
  "options": [
   "غير المرتبط",
   "الفرعي",
   "المنقسم",
   "المحسوب"
  ],
  "answerIndex": 2,
  "explanation": "النموذج المنقسم يمنح طريقتي عرض في آن واحد.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-split-form",
   "label": "النموذج المنقسم"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لعرض علاقة «واحد لمتعدد» نستخدم غالباً:",
  "options": [
   "نموذجاً فرعياً داخل نموذج رئيسي",
   "استعلام حذف",
   "نموذجاً منقسماً فقط",
   "تقرير بلا مقاطع"
  ],
  "answerIndex": 0,
  "explanation": "النموذج الفرعي مضمّن في النموذج الرئيسي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-subform",
   "label": "النموذج الفرعي"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "عنصر التحكم غير المنضم لا يملك مصدر بيانات (مثل التسميات).",
  "answer": true,
  "explanation": "صحيح.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-controls",
   "label": "عناصر التحكم"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مقطع التقرير الذي يظهر مرة واحدة لكل سجل هو:",
  "options": [
   "رأس الصفحة",
   "التفصيل",
   "رأس التقرير",
   "تذييل التقرير"
  ],
  "answerIndex": 1,
  "explanation": "مقطع التفصيل مرة لكل صف/سجل.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-detail",
   "label": "مقطع التفصيل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "مقطع التقرير الذي يظهر في أعلى كل صفحة هو:",
  "options": [
   "رأس التقرير",
   "رأس المجموعة",
   "رأس الصفحة",
   "التفصيل"
  ],
  "answerIndex": 2,
  "explanation": "رأس الصفحة يظهر أعلى كل صفحة.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-page-header",
   "label": "رأس الصفحة"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الملخصات والمجاميع في نهاية كل مستوى من التقرير تظهر في:",
  "options": [
   "مقاطع التذييل",
   "رأس الصفحة",
   "رأس التقرير",
   "مقطع التفصيل"
  ],
  "answerIndex": 0,
  "explanation": "التذييلات: ملخصات ومجاميع في نهاية كل مستوى.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-footers",
   "label": "مقاطع التذييل"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "نوع الحقل الذي ينشئه Access تلقائياً كمعرّف عند عدم تحديد مفتاح رئيسي:",
  "options": [
   "نص مختصر",
   "نعم/لا",
   "تاريخ/وقت",
   "ترقيم تلقائي"
  ],
  "answerIndex": 3,
  "explanation": "المعرّف بنوع ترقيم تلقائي.",
  "ref": {
   "url": "chapters/chapter-5-lesson.html#c5-autoid",
   "label": "الحقل التلقائي «المعرّف»"
  }
 }
];
