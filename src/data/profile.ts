/**
 * All site copy lives here. Edit this file to change what the portfolio says;
 * the section components only handle layout and motion.
 */

// BASE_URL is undefined when this file is read by the build config, outside the app bundle.
const asset = (file: string) => `${import.meta.env?.BASE_URL ?? '/'}${file}`;

export const profile = {
  name: 'Vishwa Gaurav Shukla',
  nameLines: ['Vishwa Gaurav', 'Shukla'] as const,
  monogram: 'VGS',
  title: 'Full Stack Software Engineer',
  role: 'Software Developer',
  company: '98thPercentile',
  email: 'shuklavishwagaurav@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/vgs-profile',
  linkedinLabel: 'linkedin.com/in/vgs-profile',
  resumeUrl: asset('Vishwa-Gaurav-Shukla-Resume.pdf'),
  avatarUrl: asset('vishwa-portrait.webp'),
  aboutImageUrl: asset('about-portrait.webp'),
  heroLead: 'Full-stack engineer building',
  heroRotating: ['AI-powered products', 'scalable platforms', 'secure sign-on', 'design systems'],
  heroBody:
    'Three years designing and delivering high-performance web applications, from LLM-driven class analysis to single sign-on serving 10K+ active users.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'claude', label: 'Claude Code' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
] as const;

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: 3, suffix: ' yrs', label: 'Shipping production software' },
  { value: 10, suffix: 'K+', label: 'Active users on the SSO I architected' },
  { value: 99.9, decimals: 1, suffix: '%', label: 'Uptime across cross-platform sign-on' },
  { value: 6, suffix: '+', label: 'React codebases unified into one design system' },
];

export const about = {
  statement:
    'I design and deliver scalable, high-performance web applications end to end. Full-stack development, system design and AI integration, with a strong focus on clean architecture, security and user experience.',
  pillars: [
    {
      title: 'Product engineering',
      body: 'React, Next.js and Node.js services behind role-based portals for content, admin, student, teacher, parent and operations teams.',
    },
    {
      title: 'AI integration',
      body: 'LLM features wired into real workflows: transcript and video analysis, contextual content generation and smart user assistance.',
    },
    {
      title: 'Technical leadership',
      body: 'Led a team of five frontend developers and set the standards they ship by: coding guidelines, PR checklist, conventional commits.',
    },
  ],
};

export type Metric = { value: string; label: string };

export type WorkItem = {
  title: string;
  kicker: string;
  body: string;
  metrics?: Metric[];
  tags: string[];
  featured?: boolean;
  pipeline?: string[];
};

export const experience = {
  role: 'Software Developer',
  company: '98thPercentile',
  period: 'Dec 2023 – Present',
  intro:
    'Building the platform behind live online classes: the portals students, parents and teachers use every day, and the operations and AI tooling that keeps those classes running well.',
};

export const work: WorkItem[] = [
  {
    title: 'AI Performance Manager',
    kicker: 'AI · LLM pipelines',
    featured: true,
    body: 'Rates teacher classes by analysing transcripts and videos with dedicated LLM prompts, then delivers program-wise feedback and a teacher presentation assessment for each session.',
    pipeline: [
      'Class transcript + recording',
      'Dedicated LLM prompts per program',
      'Class rating',
      'Program-wise feedback',
      'Presentation assessment',
    ],
    tags: ['Node.js', 'Express', 'Azure OpenAI', 'Prompt Engineering', 'React'],
  },
  {
    title: 'Scheduling & teacher allotment',
    kicker: 'Automation',
    body: 'A pre-planned scheduling system that auto-creates calendar events for teacher and student classes and maps the curriculum resources for each session, with a best-match criteria engine that assigns the most suitable teacher to every class.',
    tags: ['Node.js', 'REST APIs', 'MySQL', 'React'],
  },
  {
    title: 'Single sign-on & access control',
    kicker: 'Security',
    body: 'Architected and deployed SSO across cross-platform microservices, and redesigned RBAC around a four-level permission hierarchy for granular admin control.',
    metrics: [
      { value: '−35%', label: 'login latency' },
      { value: '0%', label: 'unauthorized access incidents' },
    ],
    tags: ['Azure SSO', 'JWT HS-256 / RS-256', 'RBAC'],
  },
  {
    title: 'Stripe payments & checkout windows',
    kicker: 'Fintech · Payments',
    body: 'Architected modal payment windows and end-to-end checkout flows integrated with Stripe for class enrollments. Built webhook event verification, idempotent transaction handling, failed payment recovery, and automated invoice delivery across student and parent portals.',
    metrics: [
      { value: '99.9%', label: 'webhook reliability' },
      { value: '0', label: 'transaction discrepancies' },
    ],
    tags: ['Stripe API', 'Webhooks', 'React', 'Node.js', 'Express', 'MySQL'],
  },
  {
    title: 'Student learning platform',
    kicker: 'Full stack',
    body: 'Engineered on Next.js, Express and MySQL with Sequelize, hosted on Azure App Service, with Azure SSO, parent OTP login and Application Insights monitoring.',
    tags: ['Next.js', 'Express', 'MySQL', 'Sequelize', 'Azure'],
  },
  {
    title: 'LLM modules in the product UI',
    kicker: 'AI · Frontend',
    body: 'Integrated LLM-powered modules into the React frontend for contextual content generation and smart user assistance.',
    metrics: [
      { value: '+45%', label: 'task completion speed' },
      { value: '+30%', label: 'user engagement' },
    ],
    tags: ['React', 'LLM Integration', 'Azure OpenAI'],
  },
  {
    title: 'Shared design system',
    kicker: 'Frontend architecture',
    body: 'Unified 6+ React codebases under one design system and a reusable component library.',
    metrics: [
      { value: '−40%', label: 'UI redundancy' },
      { value: '−35%', label: 'maintenance time' },
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Monolith to microservices',
    kicker: 'Modernisation',
    body: 'Migrated a legacy Laravel monolith to a React.js and Node.js microservices architecture.',
    metrics: [
      { value: '+30%', label: 'scalability & responsiveness' },
      { value: '3 days', label: 'deploy cycle, down from 2 weeks' },
    ],
    tags: ['React', 'Node.js', 'Microservices', 'CI/CD'],
  },
  {
    title: 'Role-based dashboards & portals',
    kicker: 'Product UI',
    body: 'Responsive portals for CMS, admin, student, teacher, parent and operations users, with real-time API integration and data visualisation.',
    metrics: [
      { value: '+25%', label: 'usability scores' },
      { value: '−40%', label: 'onboarding time' },
    ],
    tags: ['React', 'Redux', 'Data visualisation'],
  },
];

export const leadership = [
  {
    title: 'Led and mentored a team of five',
    body: 'Established clean-code and modular architecture standards for the frontend team.',
    metrics: [
      { value: '+40%', label: 'delivery efficiency' },
      { value: '−60%', label: 'post-release bugs' },
    ],
    tags: [],
  },
  {
    title: 'Set the engineering standards',
    body: 'Coding guidelines, a 10-point PR review checklist and conventional commits, with AI-assisted development in Claude Code embedded into daily workflows.',
    metrics: [],
    tags: ['Coding guidelines', '10-point PR checklist', 'Conventional commits', 'Claude Code'],
  },
];

/** Usage figures for July to November 2026. Update them here when they change. */
export const claude = {
  period: 'Jul – Nov 2026',
  intro:
    'I brought AI-assisted development into my team’s daily workflow, and I use it myself for everything from feature builds to senior-level review. These numbers come straight from my own session history.',
  stats: [
    { value: 105, label: 'Sessions' },
    { value: 16.5, decimals: 1, suffix: 'K', label: 'Tool calls' },
    { value: 2000, suffix: '+', label: 'Prompts written' },
    { value: 9, label: 'Codebases' },
  ] satisfies Stat[],
  prompts: [
    'Review this PR as a senior engineer. Check auth edge cases, error handling and query cost, then rank findings by severity with file and line.',
    'Read the spec and break it into a user story with acceptance criteria and sized tasks. Flag open questions before estimating anything.',
    'The CI build is failing. Reproduce it locally, find the root cause and fix it without loosening types, then run lint and the test suite.',
    'Audit the dependencies for vulnerabilities and breaking changes. Upgrade one major version at a time and verify the build after each.',
  ],
  toolMix: [
    { name: 'Bash', share: 53.1 },
    { name: 'Edit', share: 20.5 },
    { name: 'Read', share: 16.9 },
    { name: 'Browser', share: 3.5 },
    { name: 'Other', share: 3.1 },
    { name: 'Write', share: 2.9 },
  ],
  workflows: [
    {
      title: 'Feature delivery',
      body: 'Plan first, then implement across API and web repositories in a single session, verified in the browser before it goes to review.',
    },
    {
      title: 'Senior-level PR review',
      body: 'Structured reviews for correctness, security and edge cases. Findings stay local until I decide what gets posted.',
    },
    {
      title: 'Specs to stories',
      body: 'Requirement documents and meeting notes turned into user stories with task breakdowns and estimates.',
    },
    {
      title: 'Hardening & upgrades',
      body: 'Security passes, dependency audits and framework migrations such as Tailwind 4 and moment to date-fns.',
    },
    {
      title: 'Prompt engineering',
      body: 'Iterating on production LLM prompts with demo harnesses, and enforcing the rules that matter in code rather than in the prompt.',
    },
  ],
};

export type Project = {
  title: string;
  kicker: string;
  body: string;
  points: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  /** Shown as a badge, for work that is not finished yet. */
  status?: string;
};

export const projects: Project[] = [
  {
    title: 'Market Verdict',
    kicker: 'Multi-agent AI',
    body: 'A local dashboard where a panel of eight agents screens NSE stocks, a Bull and a Bear argue each pick, and a Judge issues a verdict with a confidence score.',
    points: [
      'LLM debate with a deterministic rules fallback',
      'Grounding verifier and SQLite audit log',
      'Analysis only: no order-placing code anywhere',
    ],
    tags: ['Python', 'Flask', 'SQLite', 'Claude', 'Telegram'],
  },
  {
    title: 'AI Cartoon Studio',
    kicker: 'Local-first pipeline',
    body: 'An autonomous pipeline that writes, voices, animates and packages original 2D animated Shorts on an Apple Silicon Mac, with zero API cost.',
    points: [
      'Resumable stages on a SQLite state machine',
      'Swappable LLM, TTS, image and animation providers',
      '30 fps cut-out compositing with Pillow and FFmpeg',
    ],
    tags: ['Python', 'FFmpeg', 'Pillow', 'Ollama', 'SQLite'],
  },
  {
    title: 'Dev Cleanup Agent',
    kicker: 'CLI utility',
    body: 'A zero-dependency Node.js tool that reclaims disk space on a developer Mac without touching projects, keys, databases or app settings.',
    points: [
      'Dry-run mode and a confirmation gate',
      'Skips anything modified in the last 7 days',
      'Leaves caches of apps that are currently running',
    ],
    tags: ['Node.js', 'macOS', 'launchd'],
  },
  {
    title: 'Daily Job Hunter',
    kicker: 'Scheduled agent',
    body: 'A Node.js agent that scans job boards every morning for roles posted in the last 24 hours, scores each one against my résumé with Gemini, and sends me the shortlist.',
    points: [
      'Semantic résumé match score for every posting',
      'Digest by HTML email and WhatsApp',
      'Cron schedule with city, role and salary filters',
    ],
    tags: ['Node.js', 'Gemini API', 'node-cron', 'Nodemailer', 'Twilio'],
  },
  {
    title: 'Trip Genie',
    kicker: 'Web app',
    body: 'A trip-planning front end: enter a destination, dates, budget and travel style, and get a day-by-day itinerary you can regenerate until it fits.',
    points: [
      'Guided trip form with travel-style presets',
      'Day-by-day itinerary view with loading skeletons',
      'Animated, responsive landing page',
    ],
    tags: ['React', 'Redux Toolkit', 'Bootstrap', 'Framer Motion'],
    links: [{ label: 'Live demo', href: 'https://trip-genie-jade.vercel.app' }],
  },
  {
    title: 'IP Tracker',
    kicker: 'Network tool',
    body: 'Look up any IP address and see its location, ISP and network details on a map, one at a time or in batches.',
    points: [
      'Bulk lookup of up to 20 addresses per batch',
      'Search history, favourites and an analytics view',
      'Export results to PDF, Excel or JSON',
    ],
    tags: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'OpenStreetMap'],
  },
  {
    title: 'Documindr',
    kicker: 'Full-stack app',
    body: 'A document vault that tracks expiry dates for things like passports, licences and insurance, and emails a reminder before each one lapses.',
    points: [
      'Sign-in, file uploads and per-user storage on Supabase',
      'Expired, critical and due-soon status for every document',
      'Daily reminder job behind a secret-protected endpoint',
    ],
    tags: ['TanStack Start', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare'],
  },
  {
    title: 'Azure OpenAI Starter',
    kicker: 'AI starter kit',
    body: 'A chat interface wired to an Azure OpenAI deployment through a serverless function, so the API key never reaches the browser.',
    points: [
      'Chat completions against your own deployment',
      'Supabase Edge Function as the backend',
      'Loading, error and empty states handled',
    ],
    tags: ['React', 'TypeScript', 'Azure OpenAI', 'Supabase Edge Functions'],
  },
  {
    title: 'Billify',
    kicker: 'Invoice generator',
    body: 'Fill in bill-to, ship-to and line items, pick a layout, and download a finished invoice or receipt as a PDF.',
    points: [
      'Multiple invoice and receipt templates',
      'Automatic totals and currency formatting',
      'PDF export in the browser, no server needed',
    ],
    tags: ['React', 'JavaScript', 'jsPDF', 'Tailwind CSS'],
  },
  {
    title: 'SSO Portal',
    kicker: 'Auth demo',
    body: 'A single sign-on portal where one login opens a launcher of connected apps, built to explore session handling outside of work.',
    points: [
      'Email sign-in with Supabase Auth',
      'Live session state with sign-out everywhere',
      'App launcher with demo micro apps',
    ],
    tags: ['React', 'TypeScript', 'Supabase Auth', 'JWT'],
  },
  {
    title: 'Market Pulse',
    kicker: 'Dashboard UI',
    body: 'A market dashboard with stocks, indices, currencies and news across several pages, running on simulated price data.',
    points: [
      'Stock cards with sparklines and detail charts',
      'Markets, currencies, portfolio and analysis pages',
      'Simulated live price movement',
    ],
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
  },
  {
    title: 'Friday',
    kicker: 'AI assistant',
    status: 'In progress',
    body: 'A personal AI assistant in the spirit of the one from the Iron Man films: something I can talk to that helps me get everyday work done.',
    points: [
      'Express server and React client wired end to end',
      'Project structure and database connection in place',
      'Next up: the assistant itself, with conversation and voice',
    ],
    tags: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
  {
    title: 'AI Nexus',
    kicker: 'AI tools platform',
    body: 'Five AI tools behind one sign-in: chat, content writing, code generation, image generation and text summarising, each backed by its own serverless function.',
    points: [
      'Landing page, pricing and a signed-in dashboard',
      'One Supabase Edge Function per tool',
      'Email sign-in with Supabase Auth',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Edge Functions'],
  },
];

/** Smaller builds, shown as a compact grid under the main project cards. */
export const experiments = [
  {
    title: 'JARVIS',
    body: 'A voice assistant interface that listens and talks back using the browser’s speech recognition and synthesis.',
    tags: ['React', 'Web Speech API'],
  },
  {
    title: 'AI Medico',
    body: 'A symptom-checker prototype with sign-up and login screens, matching typed symptoms against sample conditions.',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Quick Toolbox',
    body: 'Everyday tools in one app: notes, tasks, a timer, a calculator and weather, with notes saved in the browser.',
    tags: ['React', 'localStorage'],
  },
  {
    title: 'Pomodoro Timer',
    body: 'A focus timer with configurable work and break lengths, long-break cycles, session tracking and themes.',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Capacity Planner',
    body: 'Team capacity and availability charts broken down by role, with planned-role tables and Excel export.',
    tags: ['React', 'Recharts', 'SheetJS'],
  },
  {
    title: 'SocialPro',
    body: 'A professional social feed prototype with posts, stories, likes and follow suggestions behind API routes.',
    tags: ['React', 'TanStack Query'],
  },
  {
    title: 'Play Grid',
    body: 'A gaming dashboard with a games library, leaderboards, achievements and profile pages on sample data.',
    tags: ['React', 'Redux Toolkit'],
  },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  {
    group: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Stripe API', 'MongoDB', 'MySQL', 'MSSQL', 'Sequelize ORM'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Azure', 'Azure App Service', 'Application Insights', 'CI/CD', 'Git', 'GitHub'],
  },
  { group: 'Security & Payments', items: ['Single Sign-On', 'JWT HS-256 / RS-256', 'Role-Based Access Control', 'Payment Security'] },
  {
    group: 'AI',
    items: [
      'LLM Integration',
      'Prompt Engineering',
      'Azure OpenAI',
      'GPT-4o / GPT-4.1 mini',
      'Google Gemini',
      'Vision Analysis',
      'Real-Time & Batch Inference',
      'Claude Code',
      'AI-Assisted Development',
    ],
  },
  { group: 'Practices', items: ['System Design', 'Performance Optimization', 'Agile / Scrum', 'Code Reviews'] },
  { group: 'Core', items: ['Debugging & Problem-Solving', 'Data Structures & Algorithms', 'Communication'] },
];

export const marquee = [
  ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Redux'],
  ['Azure', 'Stripe', 'MySQL', 'MongoDB', 'SSO', 'RBAC', 'LLM Integration', 'Claude Code'],
];

export type EducationItem = {
  label: string;
  title: string;
  /** Institution, when the title is a qualification and not the school itself. */
  school?: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    label: 'Education',
    title: 'Bachelor of Technology (B.Tech)',
    school: 'AKGEC, Ghaziabad',
    period: 'Aug 2019 – Jul 2023',
  },
  {
    label: 'Intermediate',
    title: 'City Montessori School',
    school: 'Lucknow',
    period: 'Apr 2018 – Mar 2019',
  },
  {
    label: 'High School',
    title: 'City Montessori School',
    school: 'Lucknow',
    period: 'Apr 2016 – Mar 2017',
  },
];
