/* بنك أسئلة الفصل 12 — GBS302 مهارات الحاسوب.
   origin:"bank" = من النماذج المحلولة وأسئلة الدورات (الإجابة محقّقة من الملخص)، origin:"gen" = مكتوب من محتوى المقرر. */
const CH12_POOL = [
 {
  "origin": "bank",
  "type": "tf",
  "question": "يجب أن يكون اسم المستخدم فريداً ومميزاً وغير محجوز من قبل أي شخص آخر ضمن نفس مزود خدمة البريد الإلكتروني.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "رمز البريد الإلكتروني @ يوضع بين اسم المستخدم وبقية عنوان البريد الإلكتروني.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعبر Provider عن نشاط مزود خدمة البريد الإلكتروني.",
  "answer": false,
  "explanation": "خطأ — Provider هو <b>اسم مزود الخدمة</b> (Gmail، Yahoo). النشاط بيعبّر عنه الامتداد متل Com.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يدل الرمز Com على أن نشاط مزود الخدمة حكومي.",
  "answer": false,
  "explanation": "خطأ — Com = <b>تجاري</b> Commercial.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يدل الرمز SY على أن الجهة هيئة أو مؤسسة سورية.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يدل الرمز Gov على هيئة أو منظمة.",
  "answer": false,
  "explanation": "خطأ — Gov = <b>حكومي</b>. الهيئة أو المنظمة = Org.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يدل الرمز Edu على أن النشاط تعليمي.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "في العنوان UserName@provider.com، الجزء provider.com يسمى:",
  "options": [
   "اسم المستخدم",
   "اسم النطاق Domain Name",
   "رمز البريد"
  ],
  "answerIndex": 1,
  "explanation": "اسم النطاق = Provider + Com.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "الامتداد Org يدل على:",
  "options": [
   "تجاري",
   "حكومي",
   "هيئة أو منظمة",
   "تعليمي"
  ],
  "answerIndex": 2,
  "explanation": "Organization.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "يتكوّن عنوان البريد من اسم المستخدم ثم الرمز ______ ثم اسم النطاق.",
  "acceptable": [
   "@"
  ],
  "explanation": "UserName@provider.com.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#intro",
   "label": "البريد الإلكتروني وأجزاء العنوان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "بعد أن يدفع المستخدم رسم الاتصال بالإنترنت لن يترتب عليه أي رسوم أخرى لقاء الرسائل الإلكترونية.",
  "answer": true,
  "explanation": "صح ✔️ — الخدمة مجانية مهما كان العدد والمسافة.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعتبر البريد الإلكتروني سبباً في تخفيف ضغط العمل.",
  "answer": false,
  "explanation": "خطأ — الاعتماد الزائد عليه أدى لـ<b>زيادة</b> ضغط العمل.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعتبر البريد الإلكتروني آمناً.",
  "answer": false,
  "explanation": "خطأ — من سلبياته إنه <b>غير آمن</b>: ممكن حدا يعترضه.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تعتبر رسائل SPAM من الرسائل التي تصل إلى المستخدمين برغبة منهم.",
  "answer": false,
  "explanation": "خطأ — بتوصل <b>بغير رغبتهم</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من إيجابيات البريد الإلكتروني:",
  "options": [
   "متوفر بشكل دائم",
   "التخزين على المدى الطويل",
   "الخدمة المجانية",
   "صديق للبيئة",
   "كل ما ذكر"
  ],
  "answerIndex": 4,
  "explanation": "وكمان السرعة.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من سلبيات البريد الإلكتروني:",
  "options": [
   "ضرورة الاتصال بالإنترنت",
   "غير آمن",
   "عدم ضمان الوصول",
   "كل ما ذكر"
  ],
  "answerIndex": 3,
  "explanation": "وكمان SPAM وزيادة ضغط العمل.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "إذا كُتب عنوان البريد بشكل خاطئ فقد لا تصل الرسالة للشخص المعني. هذه سلبية:",
  "options": [
   "غير آمن",
   "عدم ضمان الوصول",
   "SPAM",
   "زيادة ضغط العمل"
  ],
  "answerIndex": 1,
  "explanation": "عدم ضمان الوصول.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#pros",
   "label": "إيجابيات وسلبيات البريد الإلكتروني"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "غالباً ما تكون رسائل SPAM ذات طبيعة خبيثة، كأن تكون جزءاً من محاولات احتيال لسرقة المعلومات.",
  "answer": true,
  "explanation": "صح ✔️ — وممكن تكون دعاية بريئة بس غير مرغوبة.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#security",
   "label": "مسائل الحماية والأمان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الاحتيال هو إرسال بريد مزيف من مرسل يتظاهر بأنه فرد أو جهة أو مؤسسة أو شركة حقيقية.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#security",
   "label": "مسائل الحماية والأمان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "الفيروس برنامج خبيث لا يؤثر على الحاسوب بشكل سلبي.",
  "answer": false,
  "explanation": "خطأ — <b>بيأثر</b> سلبياً وبيعدّل طريقة عمله بلا استئذان المستخدم.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#security",
   "label": "مسائل الحماية والأمان"
  }
 },
 {
  "origin": "gen",
  "type": "tf",
  "question": "الرد على رسائل SPAM بطلب عدم الإزعاج يوقف وصولها.",
  "answer": false,
  "explanation": "خطأ — الرد بيثبت هويتك للمرسل، فبيغرقلك بريدك بأكتر منها.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#security",
   "label": "مسائل الحماية والأمان"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "غالباً ما تتضمن رسائل الاحتيال:",
  "options": [
   "ارتباطاً تشعبياً لموقع مزيف يجمع البيانات",
   "توقيعاً رسمياً",
   "أولوية منخفضة"
  ],
  "answerIndex": 0,
  "explanation": "موقع يبدو حقيقي لسرقة بطاقة الائتمان والحسابات.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#security",
   "label": "مسائل الحماية والأمان"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعتبر Outlook برنامج بريد إلكتروني.",
  "answer": true,
  "explanation": "صح ✔️ — من منتجات Microsoft.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "من المكونات الأساسية لواجهة Outlook شريط العنوان وجزء الرسائل.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "من مميزات برنامج Outlook:",
  "options": [
   "إرسال واستقبال الرسائل",
   "إدارة المواعيد وترتيبها",
   "إدارة المهام",
   "إدارة الأعمال والاجتماعات",
   "جميع ما سبق"
  ],
  "answerIndex": 4,
  "explanation": "كله.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "خيار «إظهار علامات التبويب والأوامر» يُظهر علامات التبويب فقط.",
  "answer": false,
  "explanation": "خطأ — بيظهر <b>العلامات والأوامر معاً</b>. «Show Tabs» هو اللي بيظهر العلامات بس.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتضمن زر Ribbon Display Options الخيارات:",
  "options": [
   "إظهار علامات التبويب",
   "إظهار علامات التبويب والأوامر",
   "الإخفاء التلقائي للشريط",
   "كل ما ذكر"
  ],
  "answerIndex": 3,
  "explanation": "التلاتة.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يعرض شريط أدوات الوصول السريع افتراضياً أمري Print و Delete.",
  "answer": false,
  "explanation": "خطأ — افتراضياً <b>Send/Receive All Folders</b> و <b>Undo</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "كل علامة تبويب تتألف من عدة مجموعات منطقية من الأوامر المرتبطة بمهام معينة.",
  "answer": true,
  "explanation": "صح ✔️ — متل Respond بـHome.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن الوصول إلى مجلدي الرسائل المرسلة والمحذوفة من خلال جزء الرسائل.",
  "answer": false,
  "explanation": "خطأ — من <b>جزء التنقل بين المجلدات</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يتم من خلال جزء الرسائل قراءة محتوى رسائل البريد.",
  "answer": false,
  "explanation": "خطأ — القراءة بـ<b>جزء القراءة Reading Pane</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "جزء يعرض مجلدات Outlook ويتيح الوصول السريع إليها:",
  "options": [
   "جزء الرسائل",
   "جزء التنقل بين المجلدات",
   "جزء القراءة"
  ],
  "answerIndex": 1,
  "explanation": "Folder Navigation Pane.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لتغيير موقع جزء القراءة (يمين أو أسفل) نستخدم:",
  "options": [
   "View ← Layout ← Reading Pane",
   "Home ← New",
   "File ← Options",
   "Folder ← New Folder"
  ],
  "answerIndex": 0,
  "explanation": "Right أو Bottom.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#ui",
   "label": "واجهة Outlook 2016"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يحتوي الحقل Bcc على عناوين من سيستلمون نسخة طبق الأصل من الرسالة.",
  "answer": false,
  "explanation": "خطأ — Bcc = نسخة <b>مخفية</b>. طبق الأصل = Cc.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يحتوي الحقل Cc على عناوين من سيستلمون نسخة مخفية.",
  "answer": false,
  "explanation": "خطأ — Cc = نسخة <b>طبق الأصل</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لن تظهر عناوين من استلموا نسخة مخفية لباقي مستلمي الرسالة.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند إدخال أكثر من عنوان في الحقل الواحد نضع فاصلة بين العناوين.",
  "answer": false,
  "explanation": "خطأ — <b>فاصلة منقوطة</b> ;",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "Attach File يتيح إرسال نسخة من ملف واحد فقط كمرفق.",
  "answer": false,
  "explanation": "خطأ — <b>ملف أو أكتر</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "في Outlook لا يمكن إرسال نسخة من ملف مع الرسالة.",
  "answer": false,
  "explanation": "خطأ — بـAttach File بتقدر ترفق ملف أو أكتر.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "Attach Item يتيح إرسال نسخة من إيميل سابق كمرفق.",
  "answer": true,
  "explanation": "صح ✔️ — Outlook Item.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن وضع توقيع على الرسالة يعرّف بالشخص المرسل.",
  "answer": true,
  "explanation": "صح ✔️ — Signature.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "للفت الانتباه إلى أن الرسالة ذات أولوية منخفضة نضع إشارة تعجب !",
  "answer": false,
  "explanation": "خطأ — إشارة التعجب الحمرا = <b>أولوية عالية</b>. المنخفضة سهم أزرق لتحت.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "إذا أُرسلت رسالة والمستخدم غير متصل بالإنترنت تنتقل إلى المسودات.",
  "answer": false,
  "explanation": "خطأ — بتنتقل لـ<b>الصادر Outbox</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "إذا أُرسلت رسالة والمستخدم غير متصل بالإنترنت فإنها تذهب إلى:",
  "options": [
   "الرسائل الواردة",
   "الرسائل الصادرة",
   "الرسائل المرسلة",
   "المسودة"
  ],
  "answerIndex": 1,
  "explanation": "Outbox.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نفعّل إشعار الاستلام وإشعار القراءة بعد إرسال الرسالة.",
  "answer": false,
  "explanation": "خطأ — <b>قبل الإرسال</b>: Options ← Tracking.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يمكن إرسال نسخة مخفية بإضافة عنوان المستقبل في الحقل:",
  "options": [
   "TO",
   "CC",
   "BCC"
  ],
  "answerIndex": 2,
  "explanation": "Blind Carbon Copy.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "mcq",
  "question": "يتم تحديد عناوين المرسل إليهم الأساسيين في الحقل:",
  "options": [
   "TO",
   "CC",
   "BCC",
   "Subject"
  ],
  "answerIndex": 0,
  "explanation": "To.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "عند الإرسال مع اتصال بالإنترنت تُحفظ نسخة من الرسالة في:",
  "options": [
   "Inbox",
   "Outbox",
   "Sent Items",
   "Drafts"
  ],
  "answerIndex": 2,
  "explanation": "المرسلة.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لحفظ رسالة لإكمالها لاحقاً نغلقها دون إرسال ونختار Yes فتُحفظ في:",
  "options": [
   "Outbox",
   "Drafts",
   "Deleted Items",
   "Junk"
  ],
  "answerIndex": 1,
  "explanation": "المسودات.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "لإظهار الحقل Bcc إذا لم يكن ظاهراً: Options ← Show fields ← ______.",
  "acceptable": [
   "Bcc",
   "BCC"
  ],
  "explanation": "Show Fields.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#compose",
   "label": "إنشاء الرسائل وإرسالها"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن فتح رسالة في صندوق الوارد بتحديدها والضغط على Enter.",
  "answer": true,
  "explanation": "صح ✔️ — أو بنقر مزدوج.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "نفتح الملف المرفق بالنقر على أيقونته نقرة واحدة.",
  "answer": false,
  "explanation": "خطأ — <b>نقر مزدوج</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن وضع علامة غير مقروء على رسالة مقروءة.",
  "answer": true,
  "explanation": "صح ✔️ — Mark as Unread.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "Reply ترد على المرسل وجميع من أُرسلت لهم نسخة Cc.",
  "answer": false,
  "explanation": "خطأ — هاد <b>Reply All</b>. الـReply للمرسل بس.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "Reply All ترد على المرسل وجميع من أُرسلت لهم نسخة Cc.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لن يتم إرسال نسخة من الرد لمن استلم نسخة مخفية Bcc من الرسالة الأصلية.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند الرد تظهر الرسالة الأصلية أعلى إطار الرد تلقائياً.",
  "answer": false,
  "explanation": "خطأ — بتظهر <b>أسفل</b> إطار الرد.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن إعادة توجيه رسالة واردة لمستخدم آخر بتحديدها والضغط على Forward.",
  "answer": true,
  "explanation": "صح ✔️ — وبتعبّي To و Cc.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن طباعة الرسائل الواردة بزر Print من علامة التبويب File.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن تنظيم الرسائل ضمن مجلدات ونقلها من الوارد إلى مجلد جديد.",
  "answer": true,
  "explanation": "صح ✔️ — Folder ← New Folder ثم Home ← Move.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "يمكن استعادة الرسائل المحذوفة.",
  "answer": true,
  "explanation": "صح ✔️ — من Deleted Items بأمر Move.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "لا يمكن استعادة الرسائل المحذوفة.",
  "answer": false,
  "explanation": "خطأ — <b>يمكن</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "تنتقل الرسائل المحذوفة إلى مجلد الرسائل المهملة.",
  "answer": false,
  "explanation": "خطأ — لمجلد <b>الرسائل المحذوفة Deleted Items</b>.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإفراغ مجلد العناصر المحذوفة:",
  "options": [
   "Delete من الشريط",
   "زر يميني على Deleted Items ← Empty Folder",
   "Mark as Unread"
  ],
  "answerIndex": 1,
  "explanation": "Empty Folder.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#inbox",
   "label": "إدارة البريد الوارد"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "مجموعة الاتصال عناوين بريد لمجموعة أشخاص يشتركون بصفة معينة، متل طلاب صف دراسي.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 },
 {
  "origin": "bank",
  "type": "tf",
  "question": "عند إرسال رسالة لمجموعة اتصال، من غير الضروري تحديد كل جهة اتصال لحالها.",
  "answer": true,
  "explanation": "صح ✔️",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "جهة الاتصال Contact هي:",
  "options": [
   "عنوان البريد لشخص محدد",
   "عناوين مجموعة أشخاص",
   "مجلد الوارد"
  ],
  "answerIndex": 0,
  "explanation": "شخص محدد.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإنشاء مجموعة اتصال: Home ← New Items ← More Items ← ...",
  "options": [
   "Contact",
   "Contact Group",
   "Outlook Item"
  ],
  "answerIndex": 1,
  "explanation": "Contact Group.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "mcq",
  "question": "لإضافة أعضاء لمجموعة اتصال نستخدم:",
  "options": [
   "Add member ← From Outlook Contacts",
   "Attach Item",
   "Forward"
  ],
  "answerIndex": 0,
  "explanation": "من مجموعة Members.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 },
 {
  "origin": "gen",
  "type": "fill",
  "question": "عند إنشاء رسالة نختار العناوين من دفتر العناوين ______ بالضغط على الزر To.",
  "acceptable": [
   "Address Book",
   "address book"
  ],
  "explanation": "Address Book.",
  "ref": {
   "url": "chapters/chapter-12-lesson.html#contacts",
   "label": "جهات ومجموعات الاتصال"
  }
 }
];
