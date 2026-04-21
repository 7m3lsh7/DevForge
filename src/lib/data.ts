export type Language = 'en' | 'ar';

export const dictionaries = {
  en: {
    nav: {
      team: 'Team',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'B7 Development Team',
      title: 'Turning Skills Into',
      titleHighlight: 'Real-World Value',
      subtitle: 'We are a passionate software development team formed through our school. We aim to deliver high-quality digital solutions while continuously improving through real projects and challenges.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Meet The Team',
      stats: [
        { label: 'Projects Delivered', value: 120, suffix: '+' },
        { label: 'Happy Clients', value: 85, suffix: '+' },
        { label: 'Years Experience', value: 7, suffix: '+' },
        { label: 'Technologies', value: 30, suffix: '+' },
      ]
    },
    services: {
      label: 'Our Expertise',
      title: 'Services We Provide',
      subtitle: 'From frontend interfaces to complex system architectures, we cover the full spectrum of digital development.',
      items: [
        { icon: '🌐', title: 'Web Development', desc: 'Modern, responsive, and accessible websites.' },
        { icon: '💻', title: 'Full Stack Development', desc: 'Secure backend architectures paired with dynamic frontends.' },
        { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design that focuses on usability and aesthetics.' },
        { icon: '⚡', title: 'API Development', desc: 'Robust and scalable RESTful and GraphQL APIs.' },
        { icon: '🏗️', title: 'System Design', desc: 'Architecting maintainable and robust software systems.' },
        { icon: '🚀', title: 'Performance Optimization', desc: 'Making applications faster and more efficient.' },
        { icon: '🔧', title: 'Maintenance & Support', desc: 'Ongoing support to keep your software running flawlessly.' }
      ]
    },
    experience: {
      label: 'Why Choose Us',
      title: 'Our Background & Motivation',
      subtitle: 'A track record of continuous learning, modern technologies, and high motivation.',
      points: [
        { title: 'Capstone Projects', desc: 'Extensive school-based yearly projects showcasing practical skills.' },
        { title: 'Nile University Projects', desc: 'Advanced academic and practical collaborations.' },
        { title: 'NASA Competitions', desc: 'Participants in NASA Space Apps Hackathon and related events.' },
        { title: 'Cairo University', desc: 'Active participants in Cairo University technical competitions.' }
      ],
      features: [
        'Wide range of digital services',
        'High quality with smart pricing',
        'Modern technologies and ideas',
        'Strong motivation and continuous improvement'
      ]
    },
    team: {
      label: 'The People',
      title: 'Meet Team B7',
      subtitle: 'Four dedicated developers driven by a shared vision of digital excellence.',
      members: [
        {
          id: 'felopater',
          name: 'Felopater Remon',
          role: 'Full Stack Developer',
          location: 'Cairo, Egypt',
          yearsExperience: '1+ Years',
          bio: 'Highly motivated Full Stack Developer specializing in ASP.NET Core, C#, SQL Server, and modern JavaScript frameworks like React and Angular. Passionate about building secure, scalable, and high-performance web applications. Combines powerful backend systems with interactive frontend experiences, with a focus on performance, usability, and real-time applications.',
          skills: ['ASP.NET Core', 'C#', 'React', 'Angular', 'SQL Server', 'SignalR', 'Flutter'],
          detailedSkills: [
            { category: 'Backend', items: ['ASP.NET Core', 'C#', 'REST APIs', 'SignalR'] },
            { category: 'Frontend', items: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS'] },
            { category: 'Database', items: ['SQL Server'] },
            { category: 'Mobile & Tools', items: ['Flutter', 'Git', 'GitHub', 'Postman'] },
            { category: 'Architecture', items: ['Software Architecture', 'Authentication Systems', 'Real-time Apps'] },
            { category: 'Currently Learning', items: ['Flutter', 'UI/UX Design'] }
          ],
          experience: [
            { title: 'Intern', company: 'Eva Pharma', type: 'Professional Internship · Jul 2025 – Present', current: true },
            { title: 'Participant', company: 'NASA Space Apps Cairo', type: 'Hackathon · Oct 2025', current: false },
            { title: 'Full Stack Developer', company: 'B7 Dev Team', type: 'Team Projects', current: true }
          ],
          projects: [
            { id: '101', title: 'ChatLink', category: 'Real-time Web App', description: 'A real-time chat system with instant messaging, file sharing, and media transfer. Secure authentication using modern protocols.', technologies: 'ASP.NET Core, SignalR, React, SQL Server', results: 'Instant messaging with secure channels' },
            { id: '102', title: 'PharmaFlow', category: 'Medical Logistics', description: 'Drug tracking system using QR Codes connecting pharmaceutical companies, distributors, and consumers. Ensures authenticity and traceability.', technologies: 'ASP.NET Core, React, SQL Server, QR Codes', results: 'Verified pharmaceutical supply chain' },
            { id: '103', title: 'Truck Tracking System', category: 'Real-time Tracking', description: 'Live truck location tracking on map with route display from start to destination using real-time data updates.', technologies: 'ASP.NET Core, SignalR, Leaflet.js', results: 'Real-time fleet visibility' }
          ],
          github: 'https://github.com/7m3lsh7',
          linkedin: 'https://www.linkedin.com/in/felopater-remon-3a8631354',
          email: 'felopater.remon2020@gmail.com',
          phone: '01553234964',
          portfolio: 'https://7m3lsh7.github.io/Portfolio-/',
          avatar: '/images/Felopater.jpg',
          gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          initials: 'FR',
        },
        {
          id: 'abdelrahman',
          name: 'Abdelrahman Mahmoud',
          role: 'Software Developer',
          location: 'Cairo, Egypt',
          yearsExperience: '1+ Years',
          bio: 'Passionate software developer with a strong focus on creating meaningful digital solutions and contributing to team success. Experienced in building modern web applications and working across both frontend and backend systems.',
          skills: ['React', 'Node.js', 'UI/UX', 'Database Design', 'JavaScript'],
          detailedSkills: [
            { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
            { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
            { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] }
          ],
          experience: [
            { title: 'Full Stack Developer', company: 'B7 Dev Team', type: 'Team Projects', current: true }
          ],
          projects: [],
          github: 'https://github.com/abdelrahman',
          linkedin: 'https://linkedin.com/in/abdelrahman',
          avatar: '/images/Abdelrahman.jpeg',
          gradient: 'linear-gradient(135deg, #047857, #10b981)',
          initials: 'AM',
        },
        {
          id: 'abdelrahim',
          name: 'Abdulrahim Ahmed',
          role: 'Cybersecurity Researcher & Pentester',
          location: 'Egypt',
          yearsExperience: '2 Years',
          bio: 'Cybersecurity Researcher and Penetration Tester specializing in identifying vulnerabilities, performing security assessments, and strengthening application security through ethical hacking and bug hunting techniques. Passionate about web security, dedicated to improving system resilience with a strong analytical mindset for identifying weaknesses before malicious actors do.',
          skills: ['Penetration Testing', 'Bug Hunting', 'OWASP ZAP', 'Burp Suite', 'Vulnerability Assessment', 'Security Analysis'],
          detailedSkills: [
            { category: 'Security Tools', items: ['OWASP ZAP', 'Burp Suite', 'Web Security Testing'] },
            { category: 'Core Skills', items: ['Vulnerability Assessment', 'Penetration Testing', 'Bug Hunting', 'Security Analysis', 'System Hardening'] },
            { category: 'Knowledge Areas', items: ['OWASP Top 10', 'Web Security Fundamentals', 'Network Security Basics', 'Ethical Hacking Principles'] }
          ],
          experience: [
            { title: 'Cybersecurity Researcher & Pentester', company: 'Independent Research', type: '2 Years Experience', current: true },
            { title: 'Security Lead', company: 'Prescribto Project', type: 'Project Role', current: false }
          ],
          projects: [
            { id: '201', title: 'Prescribto', category: 'Cybersecurity Research', description: 'Security testing and vulnerability research on a medical prescription platform. Full penetration testing, system hardening, and security assessment of all components.', technologies: 'OWASP ZAP, Burp Suite, Security Analysis', results: 'Hardened system against attack vectors' }
          ],
          github: 'https://github.com/xX-Kaneki-Xx',
          linkedin: '',
          email: 'o6972088@gmail.com',
          phone: '01505227078',
          avatar: '/images/Abdelrahim.jpg',
          gradient: 'linear-gradient(135deg, #b91c1c, #ef4444)',
          initials: 'AA',
        },
        {
          id: 'noha',
          name: 'Noha Mohamed',
          role: 'Full Stack Developer & QA Engineer',
          location: 'Egypt',
          yearsExperience: '1+ Years',
          bio: 'Aspiring Software Developer with a strong technical foundation and deep passion for building scalable, real-world applications. Experienced in full-stack development using MERN stack and a rare combination of both development and quality assurance expertise. Strong analytical thinker with a focus on clean architecture, performance, software quality, and security best practices.',
          skills: ['React.js', 'Node.js', 'MongoDB', 'C#', 'Testing/QA', 'JavaScript', 'MERN Stack'],
          detailedSkills: [
            { category: 'Languages', items: ['C#', 'C++', 'Java', 'JavaScript', 'Dart'] },
            { category: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
            { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
            { category: 'Database', items: ['MongoDB', 'Mongoose ODM'] },
            { category: 'Testing & QA', items: ['Manual Testing', 'Automation Testing', 'BDD (Cucumber)', 'Test Cases Design', 'Test Scenarios'] },
            { category: 'Architecture & Security', items: ['MVC Architecture', 'API Design', 'OWASP Best Practices', 'JWT Authentication'] },
            { category: 'Core Concepts', items: ['Data Structures & Algorithms', 'OOP', 'Problem Solving'] },
            { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Web Crawling', 'Data Scraping', 'Agile', 'Scrum'] }
          ],
          experience: [
            { title: 'Team Leader & Full Stack Developer', company: 'Trainings Warehouse Project', type: 'Academic Project', current: false },
            { title: 'MERN Stack Developer', company: 'Doc.StreamLine Project', type: 'Team Project', current: false },
            { title: 'Software Developer', company: 'B7 Dev Team', type: 'Team Projects', current: true }
          ],
          projects: [
            { id: '301', title: 'Trainings Warehouse', category: 'Full Stack Web App', description: 'Led a development team in planning and execution of a full training management system. Contributed as both team leader and full-stack developer managing coordination, system design, and delivery.', technologies: 'Full Stack, MERN, System Design', results: 'Delivered complete training management system' },
            { id: '302', title: 'Doc.StreamLine', category: 'MERN Stack App', description: 'Developed core features using MERN stack for a document streaming platform. Built RESTful APIs, frontend-backend integration, and database layer focused on performance and scalability.', technologies: 'MongoDB, Express.js, React.js, Node.js', results: 'Seamless document management workflow' }
          ],
          github: 'https://github.com/noha',
          linkedin: 'https://www.linkedin.com/in/noha-muhammed-754847370/',
          avatar: '/images/Noha.jpg',
          gradient: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
          initials: 'NM',
        }
      ]
    },
    projects: {
      label: 'Portfolio',
      title: 'Our Featured Work',
      subtitle: 'Real solutions crafted by Team B7 for real-world scenarios.',
      viewDetails: 'View Details',
      techStack: 'Tech Stack',
      items: [
        {
          id: 'p1',
          slug: 'chatlink',
          title: 'ChatLink',
          category: 'Real-time Web App',
          description: 'A real-time chat system utilizing modern streaming protocols to ensure instant messaging and secure channels.',
          shortDesc: 'Real-time chat platform',
          tags: ['ASP.NET Core', 'React', 'SignalR'],
          gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          results: ['Instant messaging', 'Secure channels'],
          challenge: 'Handling real-time persistent connections sustainably without data leaks.',
          solution: 'Implemented SignalR with a robust ASP.NET backend to handle active sockets securely.',
          team: ['Felopater Remon', 'Team B7']
        },
        {
          id: 'p2',
          slug: 'pharmaflow',
          title: 'PharmaFlow',
          category: 'Logistics Software',
          description: 'An advanced drug tracking software aimed at improving pharmaceutical tracking accuracy and supply chain efficiency.',
          shortDesc: 'Drug tracking logistics system',
          tags: ['ASP.NET Core', 'React', 'SQL Server'],
          gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)',
          results: ['Improved tracking accuracy', 'Automated supply chain checks'],
          challenge: 'Strict logging and precise inventory alignment for medical supplies.',
          solution: 'A highly structured SQL relational DB coupled with a responsive React dashboard for swift updates.',
          team: ['Felopater Remon', 'Team B7']
        }
      ]
    },
    footer: {
      text: '© 2026 Team B7. All rights reserved.',
      built: 'Built with passion & modern technologies.',
    }
  },

  ar: {
    nav: {
      team: 'الفريق',
      services: 'خدماتنا',
      projects: 'المشاريع',
      contact: 'تواصل معنا',
    },
    hero: {
      badge: 'فريق B7 للتطوير',
      title: 'تحويل المهارات إلى',
      titleHighlight: 'قيمة حقيقية',
      subtitle: 'نحن فريق تطوير برمجيات شغوف، تشكل من خلال مدرستنا. نهدف إلى تقديم حلول رقمية عالية الجودة مع التحسين المستمر من خلال المشاريع والتحديات الواقعية.',
      ctaPrimary: 'شاهد مشاريعنا',
      ctaSecondary: 'تعرف على الفريق',
      stats: [
        { label: 'المشاريع المنفذة', value: 120, suffix: '+' },
        { label: 'العملاء السعداء', value: 85, suffix: '+' },
        { label: 'سنوات الخبرة', value: 7, suffix: '+' },
        { label: 'التقنيات المستخدمة', value: 30, suffix: '+' },
      ]
    },
    services: {
      label: 'خبراتنا',
      title: 'الخدمات التي نقدمها',
      subtitle: 'من واجهات المستخدم إلى معماريات الأنظمة المعقدة، نحن نغطي كل جوانب التطوير الرقمي.',
      items: [
        { icon: '🌐', title: 'تطوير الويب', desc: 'مواقع حديثة ومتجاوبة وسهلة الوصول.' },
        { icon: '💻', title: 'تطوير النظم المتكاملة (Full Stack)', desc: 'بنية خلفية آمنة مقترنة بواجهات ديناميكية.' },
        { icon: '🎨', title: 'تصميم واجهة وتجربة المستخدم', desc: 'تصميم يركز على المستخدم وسهولة الاستخدام والجماليات.' },
        { icon: '⚡', title: 'تطوير واجهات برمجة التطبيقات (API)', desc: 'واجهات RESTful و GraphQL قوية وقابلة للتوسع.' },
        { icon: '🏗️', title: 'تصميم الأنظمة', desc: 'هندسة أنظمة برمجية متينة وقابلة للصيانة.' },
        { icon: '🚀', title: 'تحسين الأداء', desc: 'اكتشاف الأخطاء وتحديث التطبيقات لتكون أسرع وأكثر كفاءة.' },
        { icon: '🔧', title: 'الصيانة والدعم', desc: 'دعم مستمر لضمان عمل برمجياتك بشكل مثالي.' }
      ]
    },
    experience: {
      label: 'لماذا نحن؟',
      title: 'خلفيتنا ودوافعنا',
      subtitle: 'سجل حافل بالتعلم المستمر، وتقنيات حديثة، وحافز كبير للنجاح.',
      points: [
        { title: 'مشاريع التخرج المدرسية', desc: 'مشاريع سنوية شاملة تبرز مهاراتنا العملية.' },
        { title: 'مشاريع جامعة النيل', desc: 'تعاون أكاديمي وعملي متقدم.' },
        { title: 'مسابقات وكالة ناسا', desc: 'مشاركون في هاكاثون تحديات تطبيقات الفضاء التابع لناسا.' },
        { title: 'جامعة القاهرة', desc: 'مشاركون فعالون في المسابقات التقنية لجامعة القاهرة.' }
      ],
      features: [
        'مجموعة واسعة من الخدمات الرقمية',
        'جودة عالية بأسعار ذكية',
        'تقنيات وأفكار حديثة',
        'دافع قوي وتحسين مستمر'
      ]
    },
    team: {
      label: 'الأعضاء',
      title: 'تعرف على فريق B7',
      subtitle: 'أربعة مطورين مكرسين يدفعهم شغف مشترك للتميز الرقمي.',
      members: [
        {
          id: 'felopater',
          name: 'فيلوباتير ريمون',
          role: 'مطور برمجيات متكامل',
          location: 'القاهرة، مصر',
          yearsExperience: '+١ سنوات',
          bio: 'مطور برمجيات متحمس متخصص في ASP.NET Core، C#، SQL Server وإطارات العمل الحديثة مثل React و Angular. شغوف ببناء تطبيقات ويب آمنة، قابلة للتطوير وعالية الأداء. يجمع بين الأنظمة الخلفية القوية وتجارب المستخدمين التفاعلية بالتركيز على الأداء وسهولة الاستخدام وتطبيقات الوقت الفعلي.',
          skills: ['ASP.NET Core', 'C#', 'React', 'Angular', 'SQL Server', 'SignalR', 'Flutter'],
          detailedSkills: [
            { category: 'التطوير الخلفي', items: ['ASP.NET Core', 'C#', 'REST APIs', 'SignalR'] },
            { category: 'التطوير الأمامي', items: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS'] },
            { category: 'قواعد البيانات', items: ['SQL Server'] },
            { category: 'الموبايل والأدوات', items: ['Flutter', 'Git', 'GitHub', 'Postman'] },
            { category: 'المعمارية', items: ['هندسة البرمجيات', 'أنظمة المصادقة', 'تطبيقات الوقت الفعلي'] },
            { category: 'يتعلم حاليا', items: ['Flutter', 'تصميم UI/UX'] }
          ],
          experience: [
            { title: 'متدرب', company: 'إيفا فارما', type: 'تدريب مهني · يوليو 2025 – الحاضر', current: true },
            { title: 'مشارك', company: 'هاكاثون ناسا القاهرة', type: 'هاكاثون · أكتوبر 2025', current: false },
            { title: 'مطور متكامل', company: 'فريق B7', type: 'مشاريع جماعية', current: true }
          ],
          projects: [
            { id: '101', title: 'ChatLink', category: 'تطبيق ويب', description: 'نظام دردشة في الوقت الحقيقي مع المراسلة الفورية ومشاركة الملفات والميديا. مصادقة آمنة باستخدام بروتوكولات حديثة.', technologies: 'ASP.NET Core, SignalR, React, SQL Server', results: 'قنوات آمنة ومراسلة فورية' },
            { id: '102', title: 'PharmaFlow', category: 'لوجستيات طبية', description: 'نظام تتبع الأدوية باستخدام QR Codes لربط الشركات المصنعة، الموزعين والمستهلكين. يضمن الموثوقية وقابلية التتبع.', technologies: 'ASP.NET Core, React, SQL Server, QR Codes', results: 'سلسلة إمداد موثوقة' },
            { id: '103', title: 'نظام تتبع الشاحنات', category: 'تتبع مباشر', description: 'تتبع مواقع الشاحنات بشكل مباشر على خريطة وتوضيح المسار وتحديث البيانات فوريا.', technologies: 'ASP.NET Core, SignalR, Leaflet.js', results: 'رؤية لحظية للأسطول' }
          ],
          github: 'https://github.com/7m3lsh7',
          linkedin: 'https://www.linkedin.com/in/felopater-remon-3a8631354',
          email: 'felopater.remon2020@gmail.com',
          phone: '01553234964',
          portfolio: 'https://7m3lsh7.github.io/Portfolio-/',
          avatar: '/images/Felopater.jpg',
          gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          initials: 'FR',
        },
        {
          id: 'abdelrahman',
          name: 'عبدالرحمن محمود',
          role: 'مطور برمجيات',
          location: 'القاهرة، مصر',
          yearsExperience: '+١ سنوات',
          bio: 'مطور برمجيات متحمس يركز على إيجاد حلول رقمية هادفة والمساهمة في نجاح فريقه. يتمتع بخبرة في بناء تطبيقات الويب الحديثة والعمل عبر كل من النظم الخلفية والأمامية.',
          skills: ['React', 'Node.js', 'UI/UX', 'Database Design', 'JavaScript'],
          detailedSkills: [
            { category: 'الواجهات الأمامية', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
            { category: 'التطوير الخلفي', items: ['Node.js', 'Express.js', 'REST APIs'] },
            { category: 'الأدوات', items: ['Git', 'GitHub', 'VS Code'] }
          ],
          experience: [
            { title: 'مطور متكامل', company: 'فريق B7', type: 'مشاريع جماعية', current: true }
          ],
          projects: [],
          github: 'https://github.com/abdelrahman',
          linkedin: 'https://linkedin.com/in/abdelrahman',
          avatar: '/images/Abdelrahman.jpeg',
          gradient: 'linear-gradient(135deg, #047857, #10b981)',
          initials: 'AM',
        },
        {
          id: 'abdelrahim',
          name: 'عبدالرحيم أحمد',
          role: 'باحث أمن سيبراني ومختبر اختراق',
          location: 'مصر',
          yearsExperience: '٢ سنوات',
          bio: 'باحث في الأمن السيبراني ومختبر اختراق متخصص في تحديد الثغرات الأمنية، وإجراء التقييمات الأمنية، وتعزيز أمان التطبيقات من خلال تقنيات الاختراق الأخلاقي وصيد الثغرات. شغوف بأمن الويب، ومكرس لتحسين مرونة النظام مع عقلية تحليلية قوية.',
          skills: ['Penetration Testing', 'Bug Hunting', 'OWASP ZAP', 'Burp Suite', 'Vulnerability Assessment', 'Security Analysis'],
          detailedSkills: [
            { category: 'أدوات الأمان', items: ['OWASP ZAP', 'Burp Suite', 'Web Security Testing'] },
            { category: 'المهارات الأساسية', items: ['تقييم الضعف', 'اختبار الاختراق', 'صيد الثغرات', 'تحليل الأمان', 'تقوية النظام'] },
            { category: 'مجالات المعرفة', items: ['OWASP Top 10', 'أساسيات أمان الويب', 'أساسيات أمان الشبكة', 'مبادئ القرصنة الأخلاقية'] }
          ],
          experience: [
            { title: 'باحث أمن سيبراني', company: 'بحث مستقل', type: 'خبرة سنتين', current: true },
            { title: 'أخصائي أمن', company: 'مشروع Prescribto', type: 'دور المشروع', current: false }
          ],
          projects: [
            { id: '201', title: 'Prescribto', category: 'بحث أمن سيبراني', description: 'الاختبارات الأمنية وبحوث نقاط الضعف في منصة للوصفات الطبية. اختبار اختراق كامل، وتقوية النظام والتقييم الأمني لجميع المكونات.', technologies: 'OWASP ZAP, Burp Suite, Security Analysis', results: 'تقوية النظام ضد نواقل الهجوم' }
          ],
          github: 'https://github.com/xX-Kaneki-Xx',
          linkedin: '',
          email: 'o6972088@gmail.com',
          phone: '01505227078',
          avatar: '/images/Abdelrahim.jpg',
          gradient: 'linear-gradient(135deg, #b91c1c, #ef4444)',
          initials: 'AA',
        },
        {
          id: 'noha',
          name: 'نهى محمد',
          role: 'مطور متكامل و مهندسة اختبار جودة',
          location: 'مصر',
          yearsExperience: '+١ سنوات',
          bio: 'مطور برمجيات طموح يمتلك أساسًا تقنيًا قويًا وشغفًا عميقًا ببناء تطبيقات قابلة للتطوير وحل المشكلات الهادفة. ذو خبرة في التطوير الشامل عبر تقنيات MERN ومزيج نادر من خبرات التطوير وضمان الجودة. مفكر تحليلي قوي يركز على العمارة النظيفة والأداء والالتزام بالأمان.',
          skills: ['React.js', 'Node.js', 'MongoDB', 'C#', 'Testing/QA', 'JavaScript', 'MERN Stack'],
          detailedSkills: [
            { category: 'اللغات', items: ['C#', 'C++', 'Java', 'JavaScript', 'Dart'] },
            { category: 'الواجهات', items: ['React.js', 'HTML', 'CSS'] },
            { category: 'الخلفية', items: ['Node.js', 'Express.js', 'REST APIs'] },
            { category: 'قواعد البيانات', items: ['MongoDB', 'Mongoose ODM'] },
            { category: 'الاختبار والجودة', items: ['Manual Testing', 'Automation Testing', 'BDD (Cucumber)', 'Test Cases Design', 'Test Scenarios'] },
            { category: 'العمارة والأمان', items: ['MVC Architecture', 'API Design', 'OWASP Best Practices', 'JWT Authentication'] },
            { category: 'مفاهيم أساسية', items: ['Data Structures & Algorithms', 'OOP', 'Problem Solving'] },
            { category: 'الأدوات', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Web Crawling', 'Data Scraping', 'Agile', 'Scrum'] }
          ],
          experience: [
            { title: 'قائد فريق و مطور متكامل', company: 'مشروع Trainings Warehouse', type: 'مشروع أكاديمي', current: false },
            { title: 'مطور MERN', company: 'مشروع Doc.StreamLine', type: 'مشروع جماعي', current: false },
            { title: 'مطور برمجيات', company: 'فريق B7', type: 'مشاريع جماعية', current: true }
          ],
          projects: [
            { id: '301', title: 'مستودع التدريبات', category: 'تطبيق ويب شامل', description: 'قيادة وتنفيذ نظام متكامل لإدارة التدريب كقائد فريق ومطور شامل بتنسيق المهام وتفعيل التصميم.', technologies: 'Full Stack, MERN, System Design', results: 'تسليم نظام شامل للتدريب' },
            { id: '302', title: 'Doc.StreamLine', category: 'تطبيق MERN', description: 'تطوير الميزات الأساسية لواجهة وتطبيقات المخدم، وضبط قواعد البيانات مع التركيز على الأداء والمرونة العالية.', technologies: 'MongoDB, Express.js, React.js, Node.js', results: 'نظام إدارة وثائق مرن' }
          ],
          github: 'https://github.com/noha',
          linkedin: 'https://linkedin.com/in/noha',
          avatar: '/images/Noha.jpg',
          gradient: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
          initials: 'NM',
        }
      ]
    },
    projects: {
      label: 'مشاريعنا',
      title: 'أبرز أعمالنا',
      subtitle: 'حلول حقيقية تم إنشاؤها خصيصا للسيناريوهات المعقدة.',
      viewDetails: 'عرض التفاصيل',
      techStack: 'التقنيات المستخدمة',
      items: [
        {
          id: 'p1',
          slug: 'chatlink',
          title: 'ChatLink',
          category: 'تطبيق ويب',
          description: 'نظام محادثة فوري يضمن المراسلة المباشرة وآمان القنوات.',
          shortDesc: 'منصة محادثة فورية',
          tags: ['ASP.NET Core', 'React', 'SignalR'],
          gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          results: ['مراسلة فورية', 'قنوات آمنة'],
          challenge: 'التعامل مع اتصالات فورية متزامنة بدون تسريب للبيانات.',
          solution: 'تنفيذ SignalR مع خلفية ASP.NET قوية.',
          team: ['فيلوباتير ريمون', 'فريق B7']
        },
        {
          id: 'p2',
          slug: 'pharmaflow',
          title: 'PharmaFlow',
          category: 'برمجيات لوجستية',
          description: 'نظام متقدم لتتبع الأدوية يهدف إلى تحسين دقة التتبع وسلاسل الإمداد.',
          shortDesc: 'نظام تتبع الأدوية اللوجستي',
          tags: ['ASP.NET Core', 'React', 'SQL Server'],
          gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)',
          results: ['تحسين دقة التتبع', 'فحص آلي للإمداد'],
          challenge: 'سجلات دقيقة وجرد معقد للإمدادات الطبية.',
          solution: 'قاعدة بيانات علائقية متماسكة مع وحدة تحكم React ديناميكية.',
          team: ['فيلوباتير ريمون', 'فريق B7']
        }
      ]
    },
    footer: {
      text: '© ٢٠٢٦ فريق B7. جميع الحقوق محفوظة.',
      built: 'تمت البرمجة بشغف وبأحدث التقنيات.',
    }
  }
};

// Next.js static compatibility exports for components that haven't been dynamically refactored yet or rely on static generated params:
export const teamMembers = dictionaries.en.team.members;
export const projects = dictionaries.en.projects.items;
export const services = dictionaries.en.services.items;

export const skills = {
  Frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 }
  ],
  Backend: [
    { name: 'ASP.NET Core', level: 95 },
    { name: 'Node.js', level: 80 }
  ],
  Database: [
    { name: 'SQL Server', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 75 }
  ],
  Cloud: [
    { name: 'AWS', level: 80 },
    { name: 'Azure', level: 75 },
    { name: 'Docker', level: 85 }
  ]
};

export const workflowSteps = [
  { id: 1, icon: '🎯', step: '01', title: 'Discovery & Planning', description: 'Understanding your goals and technical requirements.' },
  { id: 2, icon: '📐', step: '02', title: 'System Design', description: 'Architecting scalable and secure solutions.' },
  { id: 3, icon: '💻', step: '03', title: 'Development', description: 'Agile sprints delivering functional milestones.' },
  { id: 4, icon: '🐛', step: '04', title: 'Testing & QA', description: 'Rigorous bug-hunting and performance profiling.' },
  { id: 5, icon: '🚀', step: '05', title: 'Deployment', description: 'Smooth rollout with zero-downtime mechanisms.' }
];

export const testimonials = [
  { id: 1, name: 'Client A', role: 'CTO', text: 'Stunning delivery and exceptional technical skill.', company: 'TechCorp', rating: 5, initials: 'CA' },
  { id: 2, name: 'Client B', role: 'Founder', text: 'Helped us scale our product seamlessly.', company: 'StartupX', rating: 5, initials: 'CB' }
];

export const teamData = {
  stats: dictionaries.en.hero.stats
};
