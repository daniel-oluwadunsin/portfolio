export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: string;
};

export type ProjectItem = {
  title: string;
  year: string;
  description: string;
  impact: string;
  stack: string[];
  link?: string;
  github?: string;
  npm?: string;
};

export type CvItem = {
  label: string;
  focus: string;
  file: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type RecognitionItem = {
  title: string;
  short: string;
  link: string;
  image: string;
};

export const profile = {
  name: "Adejare Daniel",
  title: "Software Engineer",
  heroText: "I build software you can rely on.",
  statement: "I ship softwares that solve real problems.",
  blurb:
    "Over the last 4+ years, I have shipped products across fintech, education, logistics, and creator platforms with a strong bias for reliability and maintainable code.",
  email: "adejaredaniel12@gmail.com",
  phone: "+2348023720580",
  location: "Lagos, Nigeria",
  education: "B.Sc. Computer Science (First Class Honours), FUNAAB",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-adejare-551a20237",
    github: "https://github.com/daniel-oluwadunsin",
    x: "https://twitter.com/DannyWrld12?s=09",
  },
};

export const aboutParagraphs = [
  "I am a Software Engineer based in Lagos, Nigeria, with 4+ years of experience building performant, accessible, and production-ready software across web, mobile, and backend platforms.",
  "On the frontend, I work mostly with React, TypeScript, and Next.js, translating product and design ideas into interfaces that feel fast, clear, and dependable. On the backend, I build with Node.js and NestJS, focusing on API architecture, data modeling, and reliability in production.",
  "My work spans EdTech platforms, creator products, logistics systems, and fintech products, often with real-time features and complex flows. I also build mobile apps with Flutter and React Native when the product needs a strong cross-platform experience.",
  "Open to opportunities in Lagos, Nigeria.",
];

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "React Testing Library",
      "Cypress",
      "Advanced Accessibility",
    ],
  },
  {
    group: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL APIs",
      "WebSockets",
      "MongoDB",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Prisma",
      "Sequelize",
      "Redis",
    ],
  },
  {
    group: "Mobile",
    items: [
      "Flutter",
      "BLoC",
      "Riverpod",
      "Flutter Web",
      "React Native Expo",
      "Nativewind",
      "Firebase App Distribution",
    ],
  },
  {
    group: "Cloud, DevOps & Tooling",
    items: [
      "Azure",
      "Google Cloud Platform",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Codemagic",
      "Windows IIS",
      "Git & GitHub",
    ],
  },
  {
    group: "Engineering Practices",
    items: [
      "Security Best Practices",
      "Payment Integrations",
      "Real-time Systems",
      "System Design",
      "Performance Optimization",
    ],
  },
];

export const cvItems: CvItem[] = [
  {
    label: "Backend CV",
    focus: "NestJS, cloud deployment, APIs, data systems",
    file: "/cv/backend.pdf",
  },
  {
    label: "Frontend CV",
    focus: "React, Next.js, design systems, accessibility",
    file: "/cv/frontend.pdf",
  },
  {
    label: "Mobile CV",
    focus: "Flutter, React Native, CI/CD, app releases",
    file: "/cv/mobile.pdf",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    company: "GodConnect",
    period: "Sep 2025 - Mar 2026",
    summary:
      "Led a backend rebuild for a cross-platform social app with live streaming, payments, and real-time messaging.",
    highlights: [
      "Migrated to a new backend version while preserving existing production data.",
      "Implemented Stripe flows including cards, Apple Pay, and Google Pay.",
      "Delivered real-time chat and live video integrations with WebSockets and Agora.",
      "Deployed and managed services on Azure VMs with CI/CD workflows.",
    ],
    stack: [
      "NestJS",
      "Prisma",
      "Microsoft SQL Server",
      "Stripe",
      "Agora",
      "Azure",
    ],
    link: "https://godconnect.online/",
  },
  {
    role: "Mobile Developer",
    company: "IDonatio",
    period: "Dec 2025 - Present",
    summary:
      "Building the mobile experience for a UK donation platform with secure payments and reliable release workflows.",
    highlights: [
      "Built cross-platform Flutter features with strong reliability and performance.",
      "Integrated secure donation payments supporting Apple Pay and Google Pay.",
      "Added QR donation workflows and automated releases with Fastlane.",
    ],
    stack: ["Flutter", "Fastlane", "Stripe", "CI/CD"],
    link: "https://idonatio.com/",
  },
  {
    role: "Frontend Developer",
    company: "AllAccessFans",
    period: "Jan 2025 - Feb 2026",
    location: "Lagos, Nigeria",
    summary:
      "Built core creator and subscriber flows for a monetized content platform, including real-time features.",
    highlights: [
      "Implemented feed, bookmarks, and premium content unlocking workflows.",
      "Integrated 8 payment gateways for multi-currency transactions.",
      "Built secure real-time creator-subscriber chat interactions.",
    ],
    stack: ["React", "Next.js", "Tailwind", "WebSockets", "Zustand"],
    link: "https://allaccessfans.co/",
  },
  {
    role: "Backend Engineer",
    company: "Saleswave",
    period: "Apr 2024 - Present",
    summary:
      "Built backend services and automations powering logistics and commerce products in production.",
    highlights: [
      "Delivered production backends for VIRTUESSHOP and FARAMOVE.",
      "Designed automation pipelines for behavior-driven campaign triggers.",
      "Integrated multi-currency payments and cloud deployments.",
    ],
    stack: ["NestJS", "MongoDB", "GCP", "Paystack", "Flutterwave"],
    link: "https://trysaleswave.com/",
  },
  {
    role: "Full Stack Developer",
    company: "Edssistance",
    period: "Mar 2023 - Sep 2024",
    location: "Lagos, Nigeria",
    summary:
      "Built and maintained core platform features for an education system used by 50+ schools.",
    highlights: [
      "Developed secure role-based access for multi-stakeholder dashboards.",
      "Integrated payments and real-time communication channels.",
      "Implemented secure cross-site authentication for external assessments.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    link: "https://edssistance.net",
  },
  {
    role: "Frontend Developer",
    company: "CodeAlgo Academy",
    period: "Oct 2022 - Aug 2024",
    location: "Kansas, United States",
    summary:
      "Owned frontend implementation for learning products with strong accessibility and testing standards.",
    highlights: [
      "Built responsive learning dashboards for students, teachers, and parents.",
      "Implemented inclusive accessibility patterns across core flows.",
      "Improved delivery quality through testing and CI/CD pipelines.",
    ],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Cypress", "Tailwind"],
    link: "https://codealgoacademy.com/",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "EnvX",
    year: "2026",
    description:
      "A secure environment management platform that helps teams sync and manage configuration without passing .env files around.",
    impact:
      "Supports end-to-end encrypted config sharing, fine-grained access control, and bulk GitHub/GitLab action/environment setup from CLI or web.",
    stack: [
      "TypeScript",
      "Node.js",
      "CLI",
      "Encryption",
      "GitHub API",
      "GitLab API",
    ],
    link: "https://envx.oluwadunsin.dev/",
    github: "https://github.com/daniel-oluwadunsin/envx",
    npm: "https://www.npmjs.com/package/envxtool-cli",
  },
  {
    title: "Black Lightning",
    year: "2026",
    description:
      "An implementation of Shazam's song matching using audio fingerprinting and fast lookup pipelines.",
    impact:
      "Explores practical audio search architecture from signal processing to match scoring, with a web-accessible demo.",
    stack: [
      "Audio Fingerprinting",
      "Signal Processing",
      "TypeScript",
      "Matching Algorithms",
    ],
    link: "https://black-ligthning.oluwadunsin.dev",
    github: "https://github.com/daniel-oluwadunsin/black-ligthning",
  },
];

export const recognitions: RecognitionItem[] = [
  {
    title: "HackOps 1.0 Winner",
    short: "PipeOps hackathon win for a rapid health-access solution",
    link: "https://pipeops.io/hackops-report",
    image: "/images/projects/hackops.png",
  },
  {
    title: "Zap Africa Hackathon Winner",
    short: "Web3 onboarding flow with wallet creation via Google auth",
    link: "https://blogzapafrica.wordpress.com/2024/12/20/zap-africa-kicks-off-ctrlz-to-empower-funaab-students/",
    image: "/images/projects/zap.png",
  },
  {
    title: "FUNAAB First-Class Graduate",
    short: "Media feature in Punch Newspaper",
    link: "https://punchng.com/i-felt-intimidated-starting-university-at-15-funaab-first-class-graduate/",
    image: "/images/projects/punch.png",
  },
];
