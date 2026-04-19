export const teamData = {
  name: 'DevForge',
  tagline: 'Building Scalable Digital Solutions for Modern Businesses',
  description:
    'We are a passionate software development team crafting high-quality digital products. From robust backends to stunning frontends, we deliver end-to-end solutions that drive real business results.',
  stats: [
    { label: 'Projects Delivered', value: 120, suffix: '+' },
    { label: 'Happy Clients', value: 85, suffix: '+' },
    { label: 'Years Experience', value: 7, suffix: '+' },
    { label: 'Technologies', value: 30, suffix: '+' },
  ],
  about: {
    vision:
      'To be the leading software development partner for businesses worldwide, recognized for quality, innovation, and reliability.',
    mission:
      'Delivering exceptional software solutions that help businesses grow, by combining cutting-edge technology with deep industry expertise.',
    values: [
      { icon: '🎯', title: 'Result-Driven', desc: 'Every line of code serves a business purpose.' },
      { icon: '🔒', title: 'Reliability', desc: 'We deliver on time, every time, without compromise.' },
      { icon: '💡', title: 'Innovation', desc: 'We embrace new technologies to stay ahead of the curve.' },
      { icon: '🤝', title: 'Partnership', desc: 'Your success is our success — we grow together.' },
    ],
    specializations: ['Web Applications', 'Backend Systems', 'Mobile Apps', 'UI/UX Design', 'Cloud & DevOps'],
  },
};

export const teamMembers = [
  {
    id: 1,
    name: 'Felopater Remon',
    role: 'Full Stack Developer',
    location: 'Cairo, Egypt',
    yearsExperience: '1+',
    bio: 'Highly motivated Full Stack Developer specializing in building secure, scalable web applications. Strong background in ASP.NET Core, React, and software architecture. Passionate about performance, usability, and modern development standards.',
    skills: ['ASP.NET Core', 'C#', 'React', 'Angular', 'SQL Server', 'Flutter'],
    detailedSkills: [
      { category: 'Backend', items: ['ASP.NET Core', 'C#'] },
      { category: 'Frontend', items: ['React', 'Angular'] },
      { category: 'Database', items: ['SQL Server'] },
      { category: 'Mobile & Tools', items: ['Flutter', 'Git', 'GitHub'] },
      { category: 'Core Strengths', items: ['Software Architecture', 'Problem Solving', 'Teamwork', 'Team Leadership'] }
    ],
    experience: [
      { title: 'Internship', company: 'Eva Pharma', type: 'Professional', current: false },
      { title: 'Participant', company: 'NASA Space Apps Hackathon', type: 'Event', current: false },
      { title: 'Developer', company: 'Production-level Systems', type: 'Projects', current: true }
    ],
    projects: [
      { id: '101', title: 'ChatLink', category: 'Real-time Web App', description: 'Real-time chat system', technologies: 'ASP.NET Core, React, SignalR', results: 'Instant messaging, secure channels' },
      { id: '102', title: 'PharmaFlow', category: 'Logistics', description: 'Drug tracking software', technologies: 'ASP.NET Core, React, SQL Server', results: 'Improved tracking accuracy' },
      { id: '103', title: 'Truck Tracking System', category: 'Live Maps', description: 'Live tracking complex operations', technologies: 'ASP.NET Core, React', results: 'Real-time location updates' }
    ],
    github: 'https://github.com/felopater',
    linkedin: 'https://linkedin.com/in/felopater',
    avatar: '',
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', 
    initials: 'FR',
  },
  {
    id: 2,
    name: 'Noha Muhammed El-Sayed',
    role: 'Software Developer',
    location: '',
    yearsExperience: '3 Years',
    bio: 'Aspiring Software Developer passionate about building real-world applications and solving meaningful problems. Focused on creating scalable systems and continuously improving technical skills across full-stack development.',
    skills: ['React.js', 'Node.js', 'C#', 'MongoDB', 'Testing'],
    detailedSkills: [
      { category: 'Languages', items: ['C#', 'C++', 'Java', 'JavaScript', 'Dart'] },
      { category: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'MERN Stack'] },
      { category: 'Database', items: ['MongoDB', 'Mongoose'] },
      { category: 'Testing & QA', items: ['Manual Testing', 'Automation', 'BDD (Cucumber)', 'Test Cases'] },
      { category: 'Architecture & Security', items: ['MVC', 'API Design', 'OWASP', 'JWT Auth'] },
      { category: 'Tools & Other', items: ['Git', 'Postman', 'Web Scraping', 'Data Crawling', 'Agile', 'Scrum'] }
    ],
    experience: [
      { title: 'Software Developer', company: 'Various Projects', type: 'Professional', current: true }
    ],
    projects: [],
    github: 'https://github.com/noha',
    linkedin: 'https://linkedin.com/in/noha',
    avatar: '',
    gradient: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
    initials: 'NM',
  }
];

export const skills = {
  Frontend: [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Vue.js / Nuxt', level: 80 },
    { name: 'CSS / Animations', level: 92 },
  ],
  Backend: [
    { name: 'Node.js / Express', level: 93 },
    { name: 'Python / Django', level: 88 },
    { name: 'C# / .NET', level: 82 },
    { name: 'GraphQL / REST', level: 90 },
  ],
  Database: [
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 85 },
    { name: 'Redis', level: 78 },
    { name: 'MySQL', level: 84 },
  ],
  Tools: [
    { name: 'Docker / Kubernetes', level: 86 },
    { name: 'AWS / GCP', level: 82 },
    { name: 'Git / CI/CD', level: 95 },
    { name: 'Figma', level: 88 },
  ],
};

export const services = [
  {
    id: 1,
    icon: '🌐',
    title: 'Web Development',
    description:
      'Full-stack web applications built with modern frameworks. From MVPs to enterprise platforms, we deliver scalable and maintainable code.',
    features: ['React / Next.js', 'Node.js / Python', 'RESTful APIs', 'Performance Optimized'],
  },
  {
    id: 2,
    icon: '📱',
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile solutions for iOS and Android. Native performance with a single codebase using React Native or Flutter.',
    features: ['React Native', 'Flutter', 'App Store Ready', 'Offline Support'],
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design that converts. We create intuitive interfaces backed by research, prototyping, and continuous iteration.',
    features: ['User Research', 'Wireframing', 'Figma Prototypes', 'Design Systems'],
  },
  {
    id: 4,
    icon: '⚡',
    title: 'API Development',
    description:
      'Robust, secure, and well-documented APIs. RESTful and GraphQL APIs built for performance, reliability, and easy integration.',
    features: ['REST & GraphQL', 'API Documentation', 'Authentication', 'Rate Limiting'],
  },
  {
    id: 5,
    icon: '☁️',
    title: 'Cloud Deployment',
    description:
      'Modern DevOps practices and cloud infrastructure. We set up CI/CD pipelines, containerization, and auto-scaling solutions.',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
  },
  {
    id: 6,
    icon: '🔒',
    title: 'Security & QA',
    description:
      'Comprehensive testing and security audits to ensure your product is reliable, secure, and production-ready.',
    features: ['Automated Testing', 'Security Audits', 'Performance Testing', 'Code Reviews'],
  },
];

export const projects = [
  {
    id: 1,
    slug: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    category: 'Web Application',
    description: 'Real-time financial analytics platform processing 10M+ transactions daily with advanced data visualization.',
    shortDesc: 'Real-time financial analytics with live dashboards',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSockets'],
    color: '#660810',
    gradient: 'linear-gradient(135deg, #660810 0%, #3D0509 100%)',
    featured: true,
    results: ['300% faster data processing', '99.99% uptime', '$2M+ in client revenue tracked daily'],
    challenge: 'The client needed a real-time dashboard to monitor millions of financial transactions with zero latency and bank-grade security.',
    solution: 'We built a microservices architecture with WebSocket connections for real-time updates, React for the frontend, and a PostgreSQL cluster for high-performance queries.',
    team: ['Lead Architect', 'Frontend Engineer', 'Backend Engineer', 'DevOps'],
  },
  {
    id: 2,
    slug: 'healthcare-platform',
    title: 'Healthcare Management System',
    category: 'Enterprise Platform',
    description: 'End-to-end healthcare platform connecting 500+ doctors with 50,000+ patients across 3 countries.',
    shortDesc: 'Connecting doctors and patients across 3 countries',
    tags: ['Next.js', 'Python', 'MongoDB', 'HIPAA Compliant'],
    color: '#8A0A14',
    gradient: 'linear-gradient(135deg, #8A0A14 0%, #660810 100%)',
    featured: true,
    results: ['500+ active doctors', '50K+ patients onboarded', '98% patient satisfaction'],
    challenge: 'Building a HIPAA-compliant platform that handles sensitive medical data while providing a seamless experience for both doctors and patients.',
    solution: 'Implemented end-to-end encryption, role-based access control, and a real-time appointment system with video consultation capabilities.',
    team: ['Full-Stack Lead', 'Security Engineer', 'UI/UX Designer', 'Backend Engineer'],
  },
  {
    id: 3,
    slug: 'ecommerce-engine',
    title: 'E-Commerce Scaling Engine',
    category: 'Mobile & Web',
    description: 'High-performance e-commerce platform handling 100K+ concurrent users with sub-100ms response times.',
    shortDesc: 'Handling 100K+ concurrent users seamlessly',
    tags: ['React Native', 'Vue.js', 'Redis', 'Kubernetes'],
    color: '#3D0509',
    gradient: 'linear-gradient(135deg, #3D0509 0%, #660810 100%)',
    featured: false,
    results: ['100K+ concurrent users', '<100ms response time', '400% sales increase'],
    challenge: 'Existing system crashed during peak traffic. Client needed a scalable architecture that could handle flash sales with millions of requests.',
    solution: 'Re-architected using microservices, implemented Redis caching, and deployed on Kubernetes with auto-scaling policies.',
    team: ['Architect', 'Backend Team', 'DevOps Engineer'],
  },
  {
    id: 4,
    slug: 'ai-logistics',
    title: 'AI Logistics Platform',
    category: 'AI & Machine Learning',
    description: 'ML-powered logistics optimization reducing delivery times by 35% through intelligent route planning.',
    shortDesc: 'ML-powered route optimization for logistics',
    tags: ['Python', 'TensorFlow', 'React', 'GCP'],
    color: '#660810',
    gradient: 'linear-gradient(135deg, #660810 0%, #8A0A14 100%)',
    featured: false,
    results: ['35% faster deliveries', '20% cost reduction', '1M+ routes optimized'],
    challenge: 'Manual route planning was causing delays and high operational costs. The client needed an intelligent system to automate and optimize logistics.',
    solution: 'Developed a custom ML model trained on historical delivery data, integrated with real-time traffic APIs and a React dashboard for dispatchers.',
    team: ['ML Engineer', 'Backend Engineer', 'Frontend Engineer'],
  },
  {
    id: 5,
    slug: 'edtech-app',
    title: 'EdTech Learning Platform',
    category: 'Mobile Application',
    description: 'Gamified learning app with an AI tutor that adapts to each student performance in real time.',
    shortDesc: 'AI-powered adaptive learning for 200K students',
    tags: ['Flutter', 'Firebase', 'Python', 'OpenAI'],
    color: '#8A0A14',
    gradient: 'linear-gradient(135deg, #8A0A14 0%, #3D0509 100%)',
    featured: false,
    results: ['200K+ active students', '4.9★ App Store rating', '45% better test scores'],
    challenge: 'Creating a personalized learning experience that adapts to each student\'s pace, strengths, and weaknesses in real time.',
    solution: 'Integrated OpenAI APIs for personalized content generation, built a Flutter mobile app with gamification elements, and a Firebase backend for real-time progress tracking.',
    team: ['Mobile Lead', 'AI Engineer', 'Designer', 'Backend Engineer'],
  },
  {
    id: 6,
    slug: 'saas-crm',
    title: 'Enterprise SaaS CRM',
    category: 'SaaS Platform',
    description: 'White-label CRM platform serving 200+ businesses with custom workflows and advanced automation.',
    shortDesc: 'White-label CRM serving 200+ businesses',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe'],
    color: '#3D0509',
    gradient: 'linear-gradient(135deg, #3D0509 0%, #8A0A14 100%)',
    featured: false,
    results: ['200+ active businesses', '$500K+ MRR', '99.9% uptime SLA'],
    challenge: 'Building a multi-tenant SaaS platform with complete data isolation, custom workflows per client, and Stripe billing integration.',
    solution: 'Designed a multi-tenant architecture with schema-per-tenant PostgreSQL, a visual workflow builder, and a comprehensive billing system with Stripe.',
    team: ['Architecture Team', 'Full-Stack Engineers', 'DevOps'],
  },
];

export const testimonials = [
  {
    id: 1,
    text: "DevForge delivered our platform 2 weeks ahead of schedule and it handled our launch day traffic perfectly. Their technical expertise and communication throughout the project was exceptional.",
    name: 'James Richardson',
    role: 'CEO, TechStartup Inc.',
    rating: 5,
    initials: 'JR',
  },
  {
    id: 2,
    text: 'We brought DevForge in to rescue a failing project. Within 6 weeks, they had the entire system refactored, performance improved 400%, and a clear roadmap for future growth.',
    name: 'Maria González',
    role: 'CTO, HealthFirst Solutions',
    rating: 5,
    initials: 'MG',
  },
  {
    id: 3,
    text: "The UI/UX work they delivered completely transformed our user experience. Our conversion rate doubled in the first month after launch. Absolutely worth every penny.",
    name: 'Ahmed Al-Rashid',
    role: 'Product Director, FinanceCore',
    rating: 5,
    initials: 'AA',
  },
  {
    id: 4,
    text: 'Professional, reliable, and technically outstanding. DevForge built our mobile app from scratch in 3 months. It\'s now our primary revenue channel with 200K+ users.',
    name: 'Sophie Laurent',
    role: 'Founder, EduLearn Platform',
    rating: 5,
    initials: 'SL',
  },
];

export const workflowSteps = [
  {
    id: 1,
    icon: '🔍',
    title: 'Discovery & Analysis',
    description: 'Deep dive into your business goals, technical requirements, and target audience to build the right thing.',
    duration: '1-2 weeks',
  },
  {
    id: 2,
    icon: '📋',
    title: 'Strategy & Planning',
    description: 'Architecture design, technology selection, project roadmap, and timeline with clear milestones.',
    duration: '1-2 weeks',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Wireframes, interactive prototypes, and final designs reviewed and approved before development.',
    duration: '2-3 weeks',
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'Development',
    description: 'Agile sprints with daily updates, code reviews, and continuous integration for rapid, quality delivery.',
    duration: '4-12 weeks',
  },
  {
    id: 5,
    icon: '🧪',
    title: 'Testing & QA',
    description: 'Comprehensive automated and manual testing, security audits, and performance optimization.',
    duration: '1-2 weeks',
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Launch & Support',
    description: 'Seamless deployment, monitoring setup, team training, and ongoing maintenance support.',
    duration: 'Ongoing',
  },
];
