export type SiteLink = {
  label: string;
  href: string;
};

export type ContentPart = {
  text: string;
  href?: string;
};

export type Project = {
  name: string;
  description: string;
  technology: string;
  links: SiteLink[];
};

export type NewsItem = {
  date: string;
  content: ContentPart[];
  links?: SiteLink[];
};

export type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
};

const civicPulseUrl = "https://civicpulse.life";
const githubUrl = "https://github.com/daniel-oluwadunsin";

export const contactLinks: SiteLink[] = [
  { label: "Email", href: "mailto:adejaredaniel12@gmail.com" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1jWYP0PiHnFT5o2YDjKKi6lUpbud2yPQq/view?usp=sharing",
  },
  { label: "GitHub", href: githubUrl },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-adejare-551a20237/",
  },
  { label: "Medium", href: "https://medium.com/@adejaredaniel12" },
  { label: "Phone", href: "tel:+2348023720580" },
];

export const aboutParagraphs: ContentPart[][] = [
  [
    {
      text: "I am Daniel Adejare, a Computer Science graduate of the Federal University of Agriculture, Abeokuta (FUNAAB), Nigeria, and a Software Engineer with over four years of experience building production-ready software across web, mobile, and backend platforms.",
    },
  ],
  [
    {
      text: "My research interests lie at the intersection of data science, artificial intelligence, and public policy, with a focus on developing computational approaches to address societal challenges. I am particularly interested in public-interest AI, geospatial data science and remote sensing, infrastructure governance, and public service delivery.",
    },
  ],
  [
    {
      text: "I aim to explore how data-driven methods can support evidence-based policymaking, improve the monitoring and delivery of public infrastructure, and strengthen government accountability, particularly in Nigeria and across Africa. I am also interested in trustworthy and responsible AI, especially the development of reliable, equitable, and context-aware systems for resource-constrained settings.",
    },
  ],
  [
    { text: "Through projects such as " },
    { text: "CivicPulse", href: civicPulseUrl },
    {
      text: ", I hope to explore how data and AI can support more transparent, accountable, and responsive governance, particularly in Nigeria and across Africa.",
    },
  ],
];

export const projects: Project[] = [
  {
    name: "CivicPulse",
    description:
      "An AI-powered civic infrastructure reporting and accountability platform. CivicPulse turns a resident’s evidence into a traceable incident, identifies the relevant jurisdiction and responsible organizations, and keeps the response visible until the community can confirm or challenge the outcome.",
    technology:
      "React, Vite, Express, PostgreSQL/PostGIS, Gemini, Cloudinary, Geoapify, and Graphile Worker",
    links: [{ label: "Live site", href: civicPulseUrl }],
  },
  {
    name: "Black Lightening",
    description:
      "A research and implementation of Shazam's music-recognition alorigthm that identifies songs from short microphone recordings. It normalizes audio, extracts spectral peaks with FFTs, creates compact fingerprints, and uses offset-aware voting to find the most consistent match in a fingerprint database.",
    technology:
      "Next.js, Express, Prisma, PostgreSQL, BullMQ, Redis, and FFmpeg",
    links: [
      { label: "Live site", href: "https://black-ligthning.oluwadunsin.dev/" },
      {
        label: "Source code",
        href: "https://github.com/daniel-oluwadunsin/black-ligthening",
      },
    ],
  },
  {
    name: "Recourse",
    description:
      "An evidence-first AI case-intelligence system for difficult decisions. Recourse helps people understand what happened, research the applicable process, organize supporting facts, prepare truthful communications, and continue the same case when an institution responds.",
    technology: "Next.js, NestJS, MongoDB, Cloudinary, Tavily, and Gemini",
    links: [
      { label: "Live site", href: "https://recourse.oluwadunsin.dev" },
      {
        label: "Source code",
        href: "https://github.com/daniel-oluwadunsin/recourse",
      },
    ],
  },
];

export const newsItems: NewsItem[] = [
  {
    date: "July 2026",
    content: [
      { text: "Won the " },
      {
        text: "AI3 Growth Hackathon",
        href: "https://luma.com/3s90t09i?tk=QSeBeQ",
      },
      { text: " by " },
      { text: "OpenBuild", href: "https://x.com/OpenBuildxyz" },
      { text: " where I built " },
      { text: "Mesh", href: "https://ai3-hack.oluwadunsin.dev/" },
      { text: "." },
    ],
  },
  {
    date: "January 2026",
    content: [
      {
        text: "Graduated as the best graduating student in the Computer Science Department at the Federal University of Agriculture, Abeokuta.",
      },
    ],
  },
  {
    date: "January 2026",
    content: [{ text: "Featured in PUNCH National Newspaper." }],
    links: [
      {
        label: "PUNCH feature",
        href: "https://punchng.com/i-felt-intimidated-starting-university-at-15-funaab-first-class-graduate/",
      },
    ],
  },
  {
    date: "September 2025",
    content: [
      { text: "Appointed as the backend track lead for " },
      {
        text: "Google Developer Group FUNAAB",
        href: "https://gdg.community.dev/gdg-on-campus-federal-university-of-agriculture-abeokuta-nigeria/",
      },
      { text: "." },
    ],
    links: [
      {
        label: "Appointment photo",
        href: "https://pbs.twimg.com/media/Gaoy9EDXUAAsiwB?format=jpg&name=4096x4096",
      },
    ],
  },
  {
    date: "March 2025",
    content: [
      {
        text: "Led the volunteer software development team at DigiFest, proposing and coordinating a four-person team to build a digital library for browsing, searching, and retrieving past questions and learning materials.",
      },
    ],
    links: [
      {
        label: "DigiFest project photo",
        href: "https://media.licdn.com/dms/image/v2/D4D2DAQEE0yQjI_LhGA/profile-treasury-image-shrink_1920_1920/B4DZhQtNnvG8Ak-/0/1753700726916?e=1789390800&v=beta&t=RYid6nH7YCJ5s2giYmxsXS3EE38HTbm1Zr5Jx53Qx1Y",
      },
    ],
  },
  {
    date: "May 2024",
    content: [
      { text: "Won the " },
      { text: "HackOps hackathon", href: "https://pipeops.io/hackops-report" },
      { text: " by " },
      { text: "PipeOps", href: "https://pipeops.io" },
      { text: " with " },
      { text: "BDMeds", href: "https://bdmeds-frontend.onrender.com/" },
      {
        text: ", a healthcare solution aimed at improving access to doctors and organizing patient records.",
      },
    ],
    links: [
      { label: "HackOps report", href: "https://pipeops.io/hackops-report" },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "How I built a programming language for transactional file systems",
    date: "2025",
    readTime: "Read on Medium",
    excerpt:
      "A practical account of designing reversible operations for transactional file systems.",
    href: "https://medium.com/@adejaredaniel12/how-i-built-a-programming-language-for-transactional-file-systems-d13d136d065a?postPublishedType=initial",
  },
  {
    title: "The API returned 200, the payment never finished",
    date: "2025",
    readTime: "Read on Medium",
    excerpt:
      "What a successful HTTP response can hide when payment state is treated too simply.",
    href: "https://medium.com/@adejaredaniel12/the-api-returned-200-the-payment-never-finished-f787e263dea9",
  },
];
