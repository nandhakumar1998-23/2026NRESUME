export interface HeroPhoto {
  src: string;
  alt: string;
  caption: string;
  objectPosition: string;
}

export interface StatMetric {
  value: string;
  label: string;
  context: string;
}

export interface AboutCapability {
  key: string;
  label: string;
  headline: string;
  blurb: string;
  points: string[];
}

export interface SkillGroup {
  index: string;
  category: string;
  summary: string;
  proficiency: number;
  skills: string[];
}

export interface FrontierItem {
  title: string;
  status: string;
  description: string;
}

export interface ExperienceItem {
  index: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export enum ProjectCategory {
  ALL = 'All Projects',
  WEB = 'Full-Stack & Web',
  MOBILE_AI = 'Mobile & AI',
  ENTERPRISE = 'Billing & ERP',
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  index: string;
  title: string;
  scope: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Nandha Kumar B',
  brandMark: 'Nandha Kumar B',
  role: 'Software Engineer · Full-Stack & React.js Developer',
  specialistLine: 'Next.js · React Native · Material UI · Technical SEO · AWS Amplify',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'nandhakumarid023@gmail.com',
  phone: '+91 7448516897',
  phoneRaw: '+917448516897',
  whatsappUrl: 'https://wa.me/917448516897',
  linkedinUrl: 'https://www.linkedin.com/in/nandha-kumar-bl/',
  githubUrl: 'https://github.com/nandhakumar1998-23',
  portfolioUrl: 'https://nandharesume2026.netlify.app/',
  resumePdfUrl: '/resumeupdate.pdf',
  heroIntro:
    'Software Engineer and Full-Stack Developer with 3+ years of experience architecting responsive web and cross-platform mobile applications, cloud-backed APIs, AI automation pipelines, and data-driven SEO growth.',
  availability: 'Available for Full-Time Software Engineering Roles & Select Architecture Consulting',
};

export const HERO_PHOTOS: HeroPhoto[] = [
  {
    src: '/assets/self1.jpeg',
    alt: 'Nandha Kumar B — Full-Stack Software Engineer',
    caption: 'Software Engineer · Yectra Technologies',
    objectPosition: 'center 18%',
  },
  {
    src: '/assets/self3.jpeg',
    alt: 'Nandha Kumar B — UI Engineer & React Developer',
    caption: 'Full-Stack & Mobile Systems · Coimbatore',
    objectPosition: 'center 20%',
  },
];

export const HERO_METRICS: StatMetric[] = [
  {
    value: '3+',
    label: 'Years Experience',
    context: 'Production React, Next.js & Full-Stack delivery',
  },
  {
    value: '30+',
    label: 'Projects Built',
    context: 'Web platforms, ERP panels & mobile apps',
  },
  {
    value: '20+',
    label: 'Happy Clients',
    context: '100% client satisfaction across engagements',
  },
  {
    value: '+80%',
    label: 'Organic & Ad Traffic Lift',
    context: 'Measured search & Google Ads growth at Thiran Infotech',
  },
];

export const MARQUEE_TECH: string[] = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Material UI',
  'React Native',
  'Node.js',
  'AWS Amplify',
  'Amazon DynamoDB',
  'PostgreSQL',
  'Django REST Framework',
  'Laravel',
  'Tailwind CSS',
  'n8n Automation',
  'MCP Servers',
  'Technical SEO',
];

export const ABOUT_CAPABILITIES: AboutCapability[] = [
  {
    key: 'fullstack',
    label: 'Full-Stack Engineering',
    headline: 'End-to-end product architecture from crisp UI to cloud infrastructure.',
    blurb:
      'I design, build, and deploy complete web and mobile applications — pairing reusable React, Next.js, and Material UI component systems with resilient Node.js, Django REST, and AWS Amplify backends.',
    points: [
      'React.js, Next.js, TypeScript, Material UI & Tailwind CSS frontend systems',
      'REST & GraphQL APIs backed by PostgreSQL, MySQL & Amazon DynamoDB',
      'AWS Amplify authentication, serverless functions, storage & CI/CD pipelines',
      'Cross-platform mobile apps with React Native and desktop apps via Electron.js',
      'Agile sprint leadership, UK client collaboration, and production stability',
    ],
  },
  {
    key: 'uiux',
    label: 'UI / UX Architecture',
    headline: 'Human-centered interfaces engineered for clarity, speed, and conversion.',
    blurb:
      'Design is not decoration — it is how a product works. I craft intuitive journeys, high-density enterprise dashboards, and responsive design systems with refined motion.',
    points: [
      'User research, information architecture & end-to-end journey mapping',
      'Wireframing, high-fidelity interactive prototypes & responsive layouts',
      'Reusable component libraries in Material UI, Tailwind CSS & CSS Modules',
      'Complex ERP data tables, billing analytics charts & multi-step workflows',
      'Performance-first interaction design and smooth compositor animations',
    ],
  },
  {
    key: 'seo',
    label: 'Technical SEO & Growth',
    headline: 'Search engineering that turns technical performance into organic reach.',
    blurb:
      'From crawl architecture to Core Web Vitals tuning, I help platforms rank higher on search engines and convert qualified traffic with measurable analytics.',
    points: [
      'Technical SEO audits & site crawl diagnostics using Screaming Frog',
      'High-intent keyword research, content architecture & on-page optimization',
      'Schema.org structured data markup & Core Web Vitals optimization',
      'Google Search Console, GA4 custom event tracking & conversion funnels',
      'Google Ads & ethical link-building strategies proven to lift traffic by 80%',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. SNS Rajalakshmi College of Arts and Science',
    location: 'Coimbatore, Tamil Nadu',
    period: '2018 – 2020',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. SNS Rajalakshmi College of Arts and Science',
    location: 'Coimbatore, Tamil Nadu',
    period: '2015 – 2018',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    index: '01',
    category: 'Frontend & Mobile Engineering',
    summary: 'Component-driven interfaces, SSR/SPA web apps, and native mobile experiences.',
    proficiency: 95,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Native',
      'Material UI',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js',
      'Bootstrap',
      'HTML5 & CSS3',
    ],
  },
  {
    index: '02',
    category: 'Backend, APIs & Desktop',
    summary: 'Scalable service layers, authentication flows, CRUD modules, and desktop shells.',
    proficiency: 88,
    skills: [
      'Node.js',
      'Express.js',
      'Django REST Framework',
      'Laravel',
      'GraphQL',
      'RESTful APIs',
      'JWT & Auth Flows',
      'Electron.js',
      'WordPress & Webflow',
    ],
  },
  {
    index: '03',
    category: 'Cloud, Databases & DevOps',
    summary: 'Serverless cloud backends, relational & NoSQL data modeling, and automated delivery.',
    proficiency: 86,
    skills: [
      'AWS Amplify',
      'Amazon DynamoDB',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'Git & GitHub',
      'CI/CD Pipelines',
      'Postman',
    ],
  },
  {
    index: '04',
    category: 'SEO, Analytics & AI Workflows',
    summary: 'Search visibility engineering paired with LLM integrations and workflow automation.',
    proficiency: 90,
    skills: [
      'Screaming Frog SEO',
      'Google Search Console',
      'GA4 & Google Ads',
      'Core Web Vitals',
      'Schema Markup',
      'OpenAI & Gemini APIs',
      'LangChain',
      'n8n Workflows',
      'MCP Servers',
    ],
  },
];

export const FRONTIER_TECH: FrontierItem[] = [
  {
    title: 'AI API Integration',
    status: 'Production',
    description: 'Embedding OpenAI, Gemini, and LangChain capabilities into web and React Native mobile products.',
  },
  {
    title: 'AWS Amplify Cloud',
    status: 'Production',
    description: 'Full-stack cloud authentication, REST/GraphQL APIs, storage, and serverless backend workflows.',
  },
  {
    title: 'n8n Workflow Automation',
    status: 'Active R&D',
    description: 'Visual multi-step automation pipelines orchestrating webhooks, notifications, and business logic.',
  },
  {
    title: 'MCP Server Architecture',
    status: 'Active R&D',
    description: 'Model Context Protocol servers enabling secure remote tool execution and device automation.',
  },
];

export const SOFT_SKILLS: string[] = [
  'Team Leadership',
  'Problem Solving',
  'Cross-Functional Communication',
  'Agile / Scrum Delivery',
  'Developer Mentoring',
  'Time Management',
  'Attention to Detail',
  'UK & International Client Relations',
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    index: '01',
    role: 'Software Engineer',
    company: 'Yectra Technologies',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Oct 2025 – Present',
    current: true,
    summary:
      'Architecting scalable full-stack web applications with AWS Amplify cloud backends, reusable Material UI & Next.js frontend modules, and database-driven workflows.',
    highlights: [
      'Developed and enhanced the CutsRClips web application using Next.js, React.js, TypeScript, AWS Amplify, and Amazon DynamoDB.',
      'Designed data models and implemented CRUD operations, REST API integrations, search, filtering, and cloud storage services.',
      'Built reusable, accessible UI components using React.js, Next.js, TypeScript, and Material UI.',
      'Collaborated with UK clients and cross-functional teams in an Agile environment while resolving production issues for high stability.',
    ],
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Material UI',
      'React Native',
      'Node.js',
      'AWS Amplify',
      'Amazon DynamoDB',
    ],
  },
  {
    index: '02',
    role: 'Full Stack Developer & UI/UX Designer',
    company: 'Violet Infotech',
    location: 'Coimbatore, Tamil Nadu',
    period: 'May 2024 – Aug 2025',
    current: false,
    summary:
      'Led frontend and full-stack product delivery across enterprise ERP systems, education portals, desktop apps, and conversational AI integrations.',
    highlights: [
      'Developed full-stack web applications for Zebra Sign World, Magudam Education, SBind, and Pharmacy ERP using React.js, Next.js, and Django REST Framework.',
      'Engineered complex dashboards, forms, data tables, search, and filtering interfaces tailored to client workflows.',
      'Integrated Electron.js for cross-platform desktop delivery and built an automated customer support chatbot using Dialogflow.',
      'Handled end-to-end testing, debugging, deployment, and production support across client engagements.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Django REST Framework',
      'Electron.js',
      'Bootstrap',
      'WordPress',
      'Webflow',
      'Dialogflow',
    ],
  },
  {
    index: '03',
    role: 'React & SEO Executive',
    company: 'Thiran Infotech',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Apr 2023 – May 2024',
    current: false,
    summary:
      'Built responsive hospitality and industrial platforms with React and Laravel while spearheading technical SEO and paid search acquisition.',
    highlights: [
      'Developed responsive booking and corporate interfaces for AshHotels, Ashroomz, and Pavico Industries using React.js and Tailwind CSS.',
      'Integrated RESTful APIs with Laravel backend services for room availability and customer inquiries.',
      'Executed technical SEO optimization, Core Web Vitals improvements, and Google Ads campaigns that drove an 80% increase in website traffic.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Laravel', 'REST APIs', 'Technical SEO', 'Google Ads'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vetri-elite',
    title: 'Vetri Elite',
    year: '2026',
    category: ProjectCategory.WEB,
    description:
      'Premium corporate platform deployed to production — showcasing refined full-stack Next.js architecture, responsive catalog presentation, and conversion-focused inquiry flows.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/assets/vetrielite.jpeg',
    liveUrl: 'https://vetrielite.com/',
    featured: true,
  },
  {
    id: 'pavico-industries',
    title: 'Pavico Industries UAE',
    year: '2024',
    category: ProjectCategory.WEB,
    description:
      'Corporate web platform for a UAE-based aluminium, ACP facade, and steel fabrication enterprise featuring project portfolios, service divisions, and international client showcase.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/assets/pavico.jpeg',
    liveUrl: 'https://www.pavicouae.com/',
    featured: true,
  },
  {
    id: 'annur-real-estate',
    title: 'Annur Real Estate',
    year: '2024',
    category: ProjectCategory.WEB,
    description:
      'Modern regional real estate marketplace for the Annur corridor with dynamic property listings, multi-criteria filtering, and direct buyer inquiry workflows.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/assets/annurrealestate.jpeg',
    liveUrl: 'https://annurrealestate.com/',
    featured: true,
  },
  {
    id: 'uzhavan-ai',
    title: 'Uzhavan AI',
    year: '2025',
    category: ProjectCategory.MOBILE_AI,
    description:
      'React Native smart agriculture mobile companion featuring AI crop disease detection, regional voice weather alerts, and intuitive 5-tab navigation for farmers.',
    technologies: ['React Native', 'Node.js', 'DynamoDB', 'AI Vision'],
    image: '/assets/uzhavan_ai_1783741446634.png',
    featured: true,
  },
  {
    id: 'ngp-billing-admin',
    title: 'NGP Billing Admin',
    year: '2025',
    category: ProjectCategory.ENTERPRISE,
    description:
      'Next.js 14 enterprise billing control center with interactive revenue analytics, category breakdown charts, daily trend lines, and role-gated employee portal.',
    technologies: ['Next.js 14', 'React', 'CSS Modules'],
    image: '/assets/ngp_billing_1783741459524.png',
    featured: true,
  },
  {
    id: 'nandha-jarvis',
    title: 'Nandha Jarvis',
    year: '2025',
    category: ProjectCategory.MOBILE_AI,
    description:
      'n8n and Model Context Protocol (MCP) automation pipeline enabling secure remote workstation orchestration directly from a React Native mobile client.',
    technologies: ['n8n', 'MCP', 'React Native'],
    image: '/assets/nandha_jarvis_1783741475444.png',
    featured: true,
  },
  {
    id: 'ngp-healthy-crunch',
    title: 'NGP Healthy Crunch',
    year: '2025',
    category: ProjectCategory.WEB,
    description:
      'Full-stack e-commerce storefront integrated with Razorpay checkout, live order lifecycle tracking, DynamoDB persistence, and dedicated operations portal.',
    technologies: ['Next.js', 'Node.js', 'DynamoDB', 'Razorpay'],
    image: '/assets/healthy_crunch_1783741491432.png',
  },
  {
    id: 'sangamum-app',
    title: 'Sangamum Mobile App',
    year: '2024',
    category: ProjectCategory.MOBILE_AI,
    description:
      'Cross-platform React Native mobile application backed by Django REST APIs, JWT authentication, and resilient offline-tolerant network handling.',
    technologies: ['React Native', 'Django', 'JWT'],
    image: '/assets/sangamum_app_1783741507698.png',
  },
  {
    id: 'balasastha-studio',
    title: 'Balasasthastudio Billing',
    year: '2024',
    category: ProjectCategory.ENTERPRISE,
    description:
      'Streamlined invoicing and studio booking billing suite engineered for photography studios with rapid bill generation and customer ledger management.',
    technologies: ['Next.js', 'TypeScript'],
    image: '/assets/studio_billing_1783741521830.png',
  },
  {
    id: 'school-management',
    title: 'School Management ERP',
    year: '2024',
    category: ProjectCategory.ENTERPRISE,
    description:
      'Unified academic administration platform covering student enrollment, daily attendance, fee ledgers, staff rosters, and examination records.',
    technologies: ['React', 'Node.js', 'DynamoDB'],
    image: '/assets/project_dashboard.png',
  },
  {
    id: 'bharathi-builders',
    title: 'Bharathi Builders',
    year: '2024',
    category: ProjectCategory.WEB,
    description:
      'Architectural showcase website for residential and commercial construction developments paired with automated EmailJS lead capture.',
    technologies: ['React', 'CSS3', 'EmailJS'],
    image: '/assets/project_ecommerce.png',
  },
  {
    id: 'violet-infotech',
    title: 'Violet Infotech Corporate',
    year: '2024',
    category: ProjectCategory.WEB,
    description:
      'Corporate IT services and engineering portfolio presenting digital capabilities, engineering teams, and client case studies with smooth motion transitions.',
    technologies: ['Next.js', 'Framer Motion'],
    image: '/assets/project_dashboard.png',
  },
  {
    id: 'ash-hotels',
    title: 'ASH Hotels',
    year: '2023',
    category: ProjectCategory.WEB,
    description:
      'Hospitality booking and suite showcase platform featuring room galleries, amenity comparisons, and REST API-powered reservation workflows.',
    technologies: ['React', 'Node.js', 'REST API'],
    image: '/assets/ashhotels.jpeg',
  },
  {
    id: 'ash-rooms',
    title: 'ASH Rooms',
    year: '2023',
    category: ProjectCategory.WEB,
    description:
      'Room rental management system displaying live unit pricing, occupancy calendars, and streamlined tenant inquiry submissions.',
    technologies: ['Next.js', 'DynamoDB'],
    image: '/assets/ashroomz.jpeg',
  },
  {
    id: 'sangamum-matrimonial',
    title: 'Sangamum Matrimonial',
    year: '2023',
    category: ProjectCategory.MOBILE_AI,
    description:
      'Profile discovery and matchmaking application with multi-parameter search filters, authenticated profile views, and shortlist management.',
    technologies: ['React Native', 'Django', 'JWT'],
    image: '/assets/project_mobile.png',
  },
  {
    id: 'ngp-pakkumattai-billing',
    title: 'NGP Pakkumattai Billing',
    year: '2024',
    category: ProjectCategory.ENTERPRISE,
    description:
      'Local-first Next.js 14 manufacturing billing dashboard delivering daily invoice breakdowns, visual pie analytics, and authenticated operator access.',
    technologies: ['Next.js 14', 'React', 'CSS Modules'],
    image: '/assets/ngp_billing_1783741459524.png',
  },
  {
    id: 'nextjs-resume-portfolio',
    title: 'Digital Resume & Portfolio',
    year: '2025',
    category: ProjectCategory.WEB,
    description:
      'Interactive developer portfolio and interview booking hub showcasing full-stack case studies, career milestones, and SEO schema optimization.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/assets/project_saas.png',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    index: '01',
    title: 'UI / UX Design & Frontend Systems',
    scope: 'Research · Prototyping · Component Libraries',
    description:
      'User research, wireframing, high-fidelity prototypes, and accessible React, Next.js, and Material UI interfaces built to drive engagement and conversion.',
  },
  {
    index: '02',
    title: 'SEO Campaign Management',
    scope: 'Technical Audits · On-Page · Core Web Vitals',
    description:
      'End-to-end search optimization combining Screaming Frog technical audits, structured schema markup, content planning, and ranking performance tracking.',
  },
  {
    index: '03',
    title: 'Keyword Research & Content Strategy',
    scope: 'Search Intent · Opportunity Mapping',
    description:
      'Deep keyword discovery to uncover high-intent, low-competition search opportunities that compound qualified organic traffic over time.',
  },
  {
    index: '04',
    title: 'Ethical Backlink Strategy',
    scope: 'Domain Authority · Digital Outreach',
    description:
      'White-hat authority building through curated industry outreach, editorial placements, and structured directory citations.',
  },
  {
    index: '05',
    title: 'Google Analytics (GA4) & Attribution',
    scope: 'Event Tracking · Funnels · Dashboards',
    description:
      'GA4 property architecture, custom conversion events, Search Console integration, and clear executive reporting dashboards.',
  },
  {
    index: '06',
    title: 'Google AdSense & Paid Search',
    scope: 'Monetization · Google Ads ROI',
    description:
      'AdSense placement optimization for publishers alongside targeted Google Ads search campaigns engineered for measurable traffic growth.',
  },
];
