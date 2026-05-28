export interface Post {
  slug: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  date: string;
  readingTime: number;
  thumbnail: string;
  focusKeyword: { en: string; ar: string };
  author: { en: string; ar: string };
  content: {
    en: { type: "h2" | "h3" | "p" | "ul" | "li"; text: string }[];
    ar: { type: "h2" | "h3" | "p" | "ul" | "li"; text: string }[];
  };
}

export const posts: Post[] = [
  {
    slug: "chatgpt-beginners-guide",
    title: {
      en: "The Complete Beginner's Guide to ChatGPT in 2024",
      ar: "الدليل الشامل للمبتدئين في ChatGPT لعام 2024"
    },
    category: {
      en: "AI Tools",
      ar: "أدوات الذكاء الاصطناعي"
    },
    date: "2024-03-15",
    readingTime: 9,
    thumbnail: "https://picsum.photos/seed/chatgpt/800/450",
    focusKeyword: {
      en: "ChatGPT",
      ar: "شات جي بي تي"
    },
    author: {
      en: "Ahmed Al-Rashidi",
      ar: "أحمد الرشيدي"
    },
    content: {
      en: [
        { type: "p", text: "ChatGPT has fundamentally changed how we interact with technology. Whether you're a student, professional, or just curious about AI, understanding how to use this tool effectively is becoming as essential as knowing how to use a search engine." },
        { type: "h2", text: "What is ChatGPT?" },
        { type: "p", text: "ChatGPT is an artificial intelligence model developed by OpenAI, designed to understand and generate human-like text based on the prompts you give it. It is built on the GPT (Generative Pre-trained Transformer) architecture, which allows it to process vast amounts of context to generate coherent, relevant responses." },
        { type: "h2", text: "How Does It Work?" },
        { type: "p", text: "At its core, ChatGPT works by predicting the next word in a sequence. Imagine the world's most sophisticated autocomplete feature. It has been trained on an immense dataset of text from the internet, learning patterns, facts, grammar, and reasoning abilities. However, it doesn't 'think' like a human; it relies on complex mathematical probabilities to generate text." },
        { type: "h3", text: "The Transformer Model" },
        { type: "p", text: "The 'T' in ChatGPT stands for Transformer. This architecture allows the model to weigh the importance of different words in a sentence, regardless of their distance from each other. This is why ChatGPT can maintain context over long conversations better than earlier AI models." },
        { type: "h2", text: "Key Use Cases" },
        { type: "ul", text: "" },
        { type: "li", text: "Writing and Brainstorming: Draft emails, essays, and creative stories." },
        { type: "li", text: "Coding Assistance: Write, debug, and explain code in multiple languages." },
        { type: "li", text: "Research and Summarization: Summarize long articles or simplify complex topics." },
        { type: "h2", text: "Tips for Better Prompts" },
        { type: "p", text: "The quality of ChatGPT's output is directly related to the quality of your prompt. Be specific, provide context, and don't hesitate to iterate. For example, instead of asking 'Write a marketing email', ask 'Write a friendly 3-paragraph marketing email to existing customers about our new product launch, emphasizing the early-bird discount'." },
        { type: "h2", text: "Limitations" },
        { type: "p", text: "Despite its capabilities, ChatGPT has limitations. It can hallucinate (make up facts confidently), it lacks real-time knowledge unless connected to the web, and it may reflect biases present in its training data. Always verify critical information from authoritative sources." },
        { type: "h2", text: "Conclusion" },
        { type: "p", text: "ChatGPT is a powerful assistant that can boost your productivity and creativity. By understanding its strengths and limitations, you can make the most out of this transformative technology in 2024 and beyond." }
      ],
      ar: [
        { type: "p", text: "لقد غيّر ChatGPT بشكل جذري كيفية تفاعلنا مع التكنولوجيا. سواء كنت طالباً أو محترفاً أو مجرد فضولي بشأن الذكاء الاصطناعي، فإن فهم كيفية استخدام هذه الأداة بفعالية أصبح أمراً أساسياً مثل معرفة كيفية استخدام محرك البحث." },
        { type: "h2", text: "ما هو ChatGPT؟" },
        { type: "p", text: "إن ChatGPT هو نموذج ذكاء اصطناعي طورته شركة OpenAI، مصمم لفهم وتوليد نصوص تشبه النصوص البشرية بناءً على التعليمات التي تقدمها له. يعتمد على بنية GPT (المحول التوليدي المدرب مسبقاً)، والتي تسمح له بمعالجة كميات هائلة من السياق لتوليد ردود متماسكة وذات صلة." },
        { type: "h2", text: "كيف يعمل؟" },
        { type: "p", text: "في جوهره، يعمل ChatGPT من خلال التنبؤ بالكلمة التالية في التسلسل. تخيل أنه ميزة الإكمال التلقائي الأكثر تطوراً في العالم. لقد تم تدريبه على مجموعة بيانات هائلة من النصوص من الإنترنت، وتعلم الأنماط والحقائق والقواعد اللغوية وقدرات التفكير. ومع ذلك، فإنه لا 'يفكر' مثل الإنسان؛ بل يعتمد على احتمالات رياضية معقدة لتوليد النص." },
        { type: "h3", text: "نموذج المحول (Transformer)" },
        { type: "p", text: "يمثل حرف 'T' في ChatGPT كلمة المحول. تسمح هذه البنية للنموذج بتقييم أهمية الكلمات المختلفة في الجملة، بغض النظر عن المسافة بينها. هذا هو السبب في أن ChatGPT يمكنه الحفاظ على السياق خلال المحادثات الطويلة بشكل أفضل من نماذج الذكاء الاصطناعي السابقة." },
        { type: "h2", text: "حالات الاستخدام الرئيسية" },
        { type: "ul", text: "" },
        { type: "li", text: "الكتابة والعصف الذهني: صياغة رسائل البريد الإلكتروني والمقالات والقصص الإبداعية." },
        { type: "li", text: "المساعدة في البرمجة: كتابة التعليمات البرمجية وتصحيحها وشرحها بلغات متعددة." },
        { type: "li", text: "البحث والتلخيص: تلخيص المقالات الطويلة أو تبسيط المواضيع المعقدة." },
        { type: "h2", text: "نصائح للحصول على نتائج أفضل" },
        { type: "p", text: "ترتبط جودة مخرجات ChatGPT بشكل مباشر بجودة مطالبك. كن دقيقاً، وقدم السياق، ولا تتردد في التكرار. على سبيل المثال، بدلاً من طلب 'اكتب رسالة بريد إلكتروني تسويقية'، اطلب 'اكتب رسالة بريد إلكتروني تسويقية ودية من 3 فقرات للعملاء الحاليين حول إطلاق منتجنا الجديد، مع التأكيد على خصم الحجز المبكر'." },
        { type: "h2", text: "القيود" },
        { type: "p", text: "على الرغم من قدراته، إلا أن ChatGPT لديه قيود. يمكن أن يهلوس (يختلق حقائق بثقة)، ويفتقر إلى المعرفة في الوقت الفعلي ما لم يكن متصلاً بالإنترنت، وقد يعكس التحيزات الموجودة في بيانات التدريب الخاصة به. تحقق دائماً من المعلومات الهامة من مصادر موثوقة." },
        { type: "h2", text: "خاتمة" },
        { type: "p", text: "يعد ChatGPT مساعداً قوياً يمكنه تعزيز إنتاجيتك وإبداعك. من خلال فهم نقاط قوته وقيوده، يمكنك الاستفادة القصوى من هذه التكنولوجيا التحويلية في عام 2024 وما بعده." }
      ]
    }
  },
  {
    slug: "machine-learning-explained",
    title: {
      en: "Machine Learning Explained: From Data to Decisions",
      ar: "تعلم الآلة بالتفصيل: من البيانات إلى القرارات"
    },
    category: {
      en: "Tutorials",
      ar: "دروس تعليمية"
    },
    date: "2024-04-02",
    readingTime: 11,
    thumbnail: "https://picsum.photos/seed/machinelearning/800/450",
    focusKeyword: {
      en: "machine learning",
      ar: "تعلم الآلة"
    },
    author: {
      en: "Sara Al-Ameri",
      ar: "سارة العامري"
    },
    content: {
      en: [
        { type: "p", text: "Machine learning (ML) is the engine driving many of the modern conveniences we take for granted. From Netflix recommendations to self-driving cars, ML is reshaping our world. But what exactly is it?" },
        { type: "h2", text: "What is Machine Learning?" },
        { type: "p", text: "Machine learning is a subset of artificial intelligence that focuses on building systems capable of learning from data. Instead of being explicitly programmed to perform a specific task, ML algorithms use data to find patterns and make predictions or decisions." },
        { type: "h2", text: "Types of Machine Learning" },
        { type: "h3", text: "Supervised Learning" },
        { type: "p", text: "In supervised learning, the model is trained on labeled data. For example, a model might be fed thousands of images labeled either 'cat' or 'dog'. Over time, it learns the features that distinguish the two and can classify new, unseen images." },
        { type: "h3", text: "Unsupervised Learning" },
        { type: "p", text: "Here, the algorithm is given unlabeled data and must find patterns or structures on its own. A common application is customer segmentation, where the model groups customers with similar purchasing behaviors without prior labels." },
        { type: "h3", text: "Reinforcement Learning" },
        { type: "p", text: "This approach involves an agent learning to make decisions by interacting with an environment. The agent receives rewards or penalties based on its actions, eventually learning the optimal strategy. This is widely used in robotics and gaming." },
        { type: "h2", text: "Real-World Applications" },
        { type: "ul", text: "" },
        { type: "li", text: "Recommendation Systems: Powering what you see on YouTube and Amazon." },
        { type: "li", text: "Image Recognition: Enabling facial recognition in smartphones and medical diagnostics." },
        { type: "li", text: "Natural Language Processing (NLP): Driving voice assistants like Siri and Alexa." },
        { type: "h2", text: "How Models are Trained" },
        { type: "p", text: "Training a model involves feeding it a large dataset and allowing it to adjust its internal parameters to minimize errors. This process requires significant computational power and is often performed using specialized hardware like GPUs." },
        { type: "h2", text: "Introduction to Neural Networks" },
        { type: "p", text: "Neural networks are a type of ML model inspired by the human brain. They consist of layers of interconnected 'neurons' that process information. Deep learning, a subset of ML, involves neural networks with many layers (deep networks) capable of solving highly complex problems." },
        { type: "h2", text: "Where to Start Learning" },
        { type: "p", text: "If you're interested in diving into ML, start with a solid foundation in Python programming and basic statistics. Platforms like Coursera and Kaggle offer excellent introductory courses and datasets to practice on." }
      ],
      ar: [
        { type: "p", text: "تعلم الآلة (ML) هو المحرك الذي يحرك العديد من وسائل الراحة الحديثة التي نعتبرها من المسلمات. من توصيات Netflix إلى السيارات ذاتية القيادة، يعيد ML تشكيل عالمنا. ولكن ما هو بالضبط؟" },
        { type: "h2", text: "ما هو تعلم الآلة؟" },
        { type: "p", text: "تعلم الآلة هو مجموعة فرعية من الذكاء الاصطناعي يركز على بناء أنظمة قادرة على التعلم من البيانات. بدلاً من برمجتها صراحة لأداء مهمة محددة، تستخدم خوارزميات ML البيانات للعثور على الأنماط واتخاذ التنبؤات أو القرارات." },
        { type: "h2", text: "أنواع تعلم الآلة" },
        { type: "h3", text: "التعلم الخاضع للإشراف" },
        { type: "p", text: "في التعلم الخاضع للإشراف، يتم تدريب النموذج على بيانات مصنفة. على سبيل المثال، قد يتم تزويد النموذج بآلاف الصور المصنفة إما 'قطة' أو 'كلب'. بمرور الوقت، يتعلم الميزات التي تميز بين الاثنين ويمكنه تصنيف صور جديدة غير مرئية." },
        { type: "h3", text: "التعلم غير الخاضع للإشراف" },
        { type: "p", text: "هنا، يتم إعطاء الخوارزمية بيانات غير مصنفة ويجب عليها العثور على الأنماط أو الهياكل بمفردها. التطبيق الشائع هو تقسيم العملاء، حيث يقوم النموذج بتجميع العملاء الذين لديهم سلوكيات شراء مماثلة دون تسميات مسبقة." },
        { type: "h3", text: "التعلم المعزز" },
        { type: "p", text: "يتضمن هذا النهج وكيلاً يتعلم اتخاذ القرارات من خلال التفاعل مع البيئة. يتلقى الوكيل مكافآت أو عقوبات بناءً على أفعاله، ويتعلم في النهاية الاستراتيجية المثلى. يستخدم هذا على نطاق واسع في الروبوتات والألعاب." },
        { type: "h2", text: "تطبيقات العالم الحقيقي" },
        { type: "ul", text: "" },
        { type: "li", text: "أنظمة التوصية: تشغيل ما تراه على YouTube و Amazon." },
        { type: "li", text: "التعرف على الصور: تمكين التعرف على الوجه في الهواتف الذكية والتشخيص الطبي." },
        { type: "li", text: "معالجة اللغات الطبيعية (NLP): تشغيل المساعدين الصوتيين مثل Siri و Alexa." },
        { type: "h2", text: "كيف يتم تدريب النماذج" },
        { type: "p", text: "يتضمن تدريب النموذج تزويده بمجموعة بيانات كبيرة والسماح له بتعديل معلماته الداخلية لتقليل الأخطاء. تتطلب هذه العملية قوة حسابية كبيرة وغالباً ما يتم إجراؤها باستخدام أجهزة متخصصة مثل وحدات معالجة الرسومات (GPUs)." },
        { type: "h2", text: "مقدمة للشبكات العصبية" },
        { type: "p", text: "الشبكات العصبية هي نوع من نماذج ML مستوحاة من الدماغ البشري. وتتكون من طبقات من 'الخلايا العصبية' المترابطة التي تعالج المعلومات. يتضمن التعلم العميق، وهو مجموعة فرعية من ML، شبكات عصبية بها العديد من الطبقات (الشبكات العميقة) القادرة على حل المشكلات المعقدة للغاية." },
        { type: "h2", text: "من أين تبدأ التعلم" },
        { type: "p", text: "إذا كنت مهتماً بالغوص في ML، فابدأ بأساس متين في برمجة Python والإحصاءات الأساسية. تقدم منصات مثل Coursera و Kaggle دورات تمهيدية ممتازة ومجموعات بيانات للتدريب عليها." }
      ]
    }
  },
  {
    slug: "ai-tools-2024",
    title: {
      en: "Top 10 AI Tools That Will Transform Your Workflow in 2024",
      ar: "أفضل 10 أدوات ذكاء اصطناعي ستحوّل طريقة عملك في 2024"
    },
    category: {
      en: "AI Tools",
      ar: "أدوات الذكاء الاصطناعي"
    },
    date: "2024-04-20",
    readingTime: 7,
    thumbnail: "https://picsum.photos/seed/aitools/800/450",
    focusKeyword: {
      en: "AI tools",
      ar: "أدوات الذكاء الاصطناعي"
    },
    author: {
      en: "Ahmed Al-Rashidi",
      ar: "أحمد الرشيدي"
    },
    content: {
      en: [
        { type: "p", text: "The AI landscape is moving at breakneck speed. To stay ahead in 2024, you need to integrate the right tools into your daily workflow. Here is a curated list of the top 10 AI tools that are making a real impact." },
        { type: "h2", text: "1. Midjourney" },
        { type: "p", text: "Best for: High-quality image generation. Midjourney continues to lead the pack in producing stunning, highly detailed artistic images from text prompts. Pricing: Paid plans only." },
        { type: "h2", text: "2. GitHub Copilot" },
        { type: "p", text: "Best for: Developer productivity. Integrated directly into your IDE, Copilot suggests code snippets and entire functions as you type. Pricing: Monthly subscription." },
        { type: "h2", text: "3. Notion AI" },
        { type: "p", text: "Best for: Knowledge management and writing. Notion AI helps you summarize notes, draft documents, and organize your workspace effortlessly. Pricing: Add-on to Notion plans." },
        { type: "h2", text: "4. Perplexity AI" },
        { type: "p", text: "Best for: AI-powered research. Perplexity acts as an intelligent search engine, providing cited answers to complex queries, making it ideal for deep research. Pricing: Free with premium tier." },
        { type: "h2", text: "5. ElevenLabs" },
        { type: "p", text: "Best for: Realistic voice synthesis. Create incredibly lifelike voiceovers for videos, podcasts, or games using advanced text-to-speech models. Pricing: Tiered subscriptions." },
        { type: "h2", text: "6. Runway ML" },
        { type: "p", text: "Best for: Video editing and generation. Runway offers powerful AI magic tools for video, including removing backgrounds and generating video from text. Pricing: Free tier available." },
        { type: "h2", text: "7. Claude" },
        { type: "p", text: "Best for: Long-form text analysis. Anthropic's Claude excels at processing large documents and maintaining context over extended conversations. Pricing: Free and Pro options." },
        { type: "h2", text: "8. Gemini" },
        { type: "p", text: "Best for: Multimodal capabilities. Google's Gemini natively understands text, images, and audio, integrating seamlessly with the Google ecosystem. Pricing: Free and Advanced tiers." },
        { type: "h2", text: "9. Cursor" },
        { type: "p", text: "Best for: AI-first code editing. Cursor is an IDE built from the ground up for pair programming with AI, offering context-aware edits across your entire codebase. Pricing: Free basic tier." },
        { type: "h2", text: "10. Grammarly AI" },
        { type: "p", text: "Best for: Professional writing assistance. Beyond spell-checking, Grammarly's generative AI features help you rewrite entire paragraphs for tone and clarity. Pricing: Free basic, premium subscriptions." }
      ],
      ar: [
        { type: "p", text: "يتحرك مشهد الذكاء الاصطناعي بسرعة فائقة. للبقاء في المقدمة في عام 2024، تحتاج إلى دمج الأدوات المناسبة في سير عملك اليومي. إليك قائمة منسقة بأفضل 10 أدوات ذكاء اصطناعي تحدث تأثيراً حقيقياً." },
        { type: "h2", text: "1. Midjourney" },
        { type: "p", text: "الأفضل لـ: توليد صور عالية الجودة. تواصل Midjourney ريادتها في إنتاج صور فنية مذهلة ومفصلة للغاية من المطالبات النصية. التسعير: خطط مدفوعة فقط." },
        { type: "h2", text: "2. GitHub Copilot" },
        { type: "p", text: "الأفضل لـ: إنتاجية المطورين. يقترح Copilot، المدمج مباشرة في بيئة التطوير المتكاملة (IDE) الخاصة بك، مقتطفات من التعليمات البرمجية ووظائف كاملة أثناء الكتابة. التسعير: اشتراك شهري." },
        { type: "h2", text: "3. Notion AI" },
        { type: "p", text: "الأفضل لـ: إدارة المعرفة والكتابة. يساعدك Notion AI على تلخيص الملاحظات وصياغة المستندات وتنظيم مساحة العمل الخاصة بك دون عناء. التسعير: إضافة إلى خطط Notion." },
        { type: "h2", text: "4. Perplexity AI" },
        { type: "p", text: "الأفضل لـ: البحث المدعوم بالذكاء الاصطناعي. تعمل Perplexity كمحرك بحث ذكي، حيث تقدم إجابات مستشهد بها للاستفسارات المعقدة، مما يجعلها مثالية للبحث العميق. التسعير: مجاني مع مستوى مميز." },
        { type: "h2", text: "5. ElevenLabs" },
        { type: "p", text: "الأفضل لـ: تركيب الصوت الواقعي. قم بإنشاء تعليقات صوتية نابضة بالحياة بشكل لا يصدق لمقاطع الفيديو أو البودكاست أو الألعاب باستخدام نماذج متقدمة لتحويل النص إلى كلام. التسعير: اشتراكات متدرجة." },
        { type: "h2", text: "6. Runway ML" },
        { type: "p", text: "الأفضل لـ: تحرير وتوليد الفيديو. تقدم Runway أدوات سحرية قوية للذكاء الاصطناعي للفيديو، بما في ذلك إزالة الخلفيات وتوليد الفيديو من النص. التسعير: يتوفر مستوى مجاني." },
        { type: "h2", text: "7. Claude" },
        { type: "p", text: "الأفضل لـ: تحليل النصوص الطويلة. يتفوق Claude من Anthropic في معالجة المستندات الكبيرة والحفاظ على السياق خلال المحادثات الممتدة. التسعير: خيارات مجانية واحترافية." },
        { type: "h2", text: "8. Gemini" },
        { type: "p", text: "الأفضل لـ: القدرات متعددة الوسائط. يفهم Gemini من Google بشكل طبيعي النصوص والصور والصوت، ويندمج بسلاسة مع نظام Google البيئي. التسعير: مستويات مجانية ومتقدمة." },
        { type: "h2", text: "9. Cursor" },
        { type: "p", text: "الأفضل لـ: تحرير التعليمات البرمجية القائم على الذكاء الاصطناعي. Cursor عبارة عن IDE مصمم من الألف إلى الياء للبرمجة الزوجية مع الذكاء الاصطناعي، ويقدم تعديلات تدرك السياق عبر قاعدة التعليمات البرمجية الخاصة بك بالكامل. التسعير: مستوى أساسي مجاني." },
        { type: "h2", text: "10. Grammarly AI" },
        { type: "p", text: "الأفضل لـ: المساعدة في الكتابة الاحترافية. إلى جانب التدقيق الإملائي، تساعدك ميزات الذكاء الاصطناعي التوليدي من Grammarly على إعادة كتابة فقرات كاملة للوضوح والنبرة. التسعير: أساسي مجاني، اشتراكات مميزة." }
      ]
    }
  }
];
