/**
 * Single source of truth for every piece of content on this site.
 *
 * Page components under src/Pages are pure presenters — they import from here
 * and render. To update the portfolio, edit this file and nothing else.
 *
 * Keep this in sync with public/CV.pdf.
 */

/* ========================================================================== *
 * Profile
 * ========================================================================== */

export const PROFILE = {
  name: "Murad Hossen",
  role: "Software Engineer",
  tagline: "Cloud · Distributed Systems · AI Agents",
  location: "Dhaka, Bangladesh",
  email: "muradhossen5267@gmail.com",
  phone: "+880 1620 260488",
  cv: "/CV.pdf",
  links: {
    github: "https://github.com/Mrcodehunter",
    linkedin: "https://www.linkedin.com/in/codehunter/",
    scholar: "https://scholar.google.com/citations?user=BT3a-6QAAAAJ&hl=en",
    codeforces: "https://codeforces.com/profile/CoDeHuNtEr",
    codechef: "https://www.codechef.com/users/mrcodehunter",
  },
};

/** One-sentence hero statement. Keep it short — it renders at display size. */
export const HEADLINE =
  "I build cloud platforms, event-driven systems and AI agents.";

export const HERO_SUMMARY =
  "Software engineer with four years across Azure architecture, distributed systems and applied machine learning. Most recently consulting on KPMG's automation platform through Cefalo Bangladesh.";

/** Stat strip on the home page. Keep to four — the grid is built for it. */
export const HIGHLIGHTS = [
  { value: "4 yrs", label: "Engineering experience" },
  { value: "~95%", label: "Manual work cut by nTAAP" },
  { value: "1,500+", label: "Problems solved" },
  { value: "2", label: "Published papers" },
];

export const BIO = [
  "Software engineer with four years of experience building web and cloud applications, most recently as a consultant on KPMG's Azure automation programme through Cefalo Bangladesh. I care about clean, maintainable code and reliable delivery.",
  "My work has centred on distributed systems and cloud architecture — event-driven microservices on Azure Service Bus and Redis, a Cosmos Graph DB integration with a custom Gremlin adapter, and a full-stack RBAC framework built on Azure Entra ID. I led test automation to beyond 90% line and branch coverage, and ran the operational backbone of the platform through Key Vault, Application Insights and Log Analytics.",
  "More recently I have been building AI agent systems — LangGraph agent architectures, MCP server integrations, and retrieval over vector databases — including theBee, a sandboxed AI coding agent with human-in-the-loop approval gates.",
  "I hold an M.Sc. and B.Sc. in Computer Science & Engineering from Jahangirnagar University, with two published papers in machine learning. My background is rooted in competitive programming: 1,500+ problems solved, three ICPC Dhaka Regionals, and two years mentoring 200+ trainees as a Teaching Assistant.",
];

/* ========================================================================== *
 * Skills
 * ========================================================================== */

export const SKILLS = [
  {
    group: "Languages",
    items: ["C#", "C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    group: "Frameworks & Libraries",
    items: [".NET", "React", "Node.js", "Redis", "PostgreSQL", "Entity Framework Core"],
  },
  {
    group: "AI & Agents",
    items: [
      "Agent Architecture",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Vector DB",
      "MCP Servers",
      "Ollama",
      "Computer Vision",
      "Machine Learning",
    ],
  },
  {
    group: "Cloud & Azure",
    items: [
      "Azure App Service",
      "Azure Service Bus",
      "Azure Entra ID",
      "Cosmos DB",
      "Key Vault",
      "Function App",
      "Application Insights",
      "Log Analytics",
    ],
  },
  {
    group: "DevOps & CI/CD",
    items: ["Azure DevOps", "Azure Pipelines", "Bicep", "Docker", "GitHub Actions"],
  },
  {
    group: "Tooling & Fundamentals",
    items: ["PowerShell", "Git Bash", "Data Structures", "Algorithms", "Copilot", "Cursor", "Claude"],
  },
];

/* ========================================================================== *
 * Experience
 * ========================================================================== */

export const EXPERIENCE = [
  {
    role: "Software Engineer — Consultant (Cloud Team)",
    company: "Cefalo Bangladesh Ltd.",
    client: "KPMG Technology Service",
    period: "Aug 2022 — Jan 2026",
    location: "Dhaka, BD",
    bullets: [
      "Built nTAAP, an Azure App Services–based automation platform orchestrating robust workflows that cut ~95% of manual, repetitive work and significantly accelerated service delivery.",
      "Built the production React UI with hooks, reusable components, performance optimisation (lazy loading, memoization) and state management via Context API and React Query, integrated against .NET REST services.",
      "Architected an event-driven microservices system using Azure Service Bus and Redis for decoupled communication and performance.",
      "Designed and integrated a Cosmos Graph DB solution, developing a custom adapter and complex Gremlin queries to enable efficient querying of dynamic data relationships.",
      "Architected a full-stack RBAC framework, integrating Azure Entra ID with a custom database to enforce granular authentication and authorization.",
      "Led the test automation strategy with xUnit unit tests exceeding 90% line and branch coverage, and architected the end-to-end test process including plans, cases, execution and reporting.",
      "Orchestrated the Azure App Service operational backbone — identity, secrets, performance and logging via Entra ID, Key Vault, Application Insights and Log Analytics.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    client: null,
    period: "Mar 2022 — Aug 2022",
    location: "Dhaka, BD",
    bullets: [
      "Developed TechTalk, a full-stack blogging platform with a React frontend and RESTful APIs in .NET/Node.js, implementing secure authentication middleware for user verification and resource management.",
      "Accelerated proficiency across the stack through hands-on development and mentorship from specialised trainers.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Jahangirnagar University — CSE",
    client: null,
    period: "Sep 2020 — Aug 2022",
    location: "Savar, BD",
    bullets: [
      "Led specialised technical training programmes in C, C++, data structures and algorithms to build a strong competitive programming posture for the institution, accumulating 200+ trainees over two years.",
      "Managed the training lifecycle by coordinating sessions, designing practice contests and analysing performance metrics to ensure continuous skill development.",
    ],
  },
];

/* ========================================================================== *
 * Projects
 * ========================================================================== */

export const PROJECTS = [
  {
    title: "theBee — Sandboxed AI Coding Agent",
    year: "2026",
    featured: true,
    description:
      "A developer assistant built on LangGraph that reads and writes files, executes shell commands, searches the web and browses pages — while keeping a human in the loop for anything risky. All file operations are confined to a sandboxed project directory, and writes or dangerous commands pause for explicit approval using LangGraph's interrupt/resume mechanism. Ships both a CLI and a streaming web chat UI over the same agent graph, supports hot-swapping model backends mid-conversation without losing context, and pulls in external tooling through MCP servers.",
    tech: [
      "Python",
      "LangGraph",
      "FastAPI",
      "SSE",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "MCP",
      "Ollama",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Mrcodehunter/theBee", external: true }],
  },
  {
    title: "Workforce Platform — Event-Driven Microservices",
    year: "2026",
    featured: true,
    description:
      "A distributed workforce management system covering employees, projects, task allocation and leave approvals. A React/TypeScript frontend talks to a .NET REST API; PostgreSQL holds the organisational hierarchy and project data while MongoDB stores leave requests and immutable audit logs. RabbitMQ distributes domain events to background workers — a .NET audit logger and a Node.js report generator — so auditing and reporting run asynchronously. The whole stack comes up with a single docker compose command, including migrations and seed data.",
    tech: [
      ".NET 10",
      "React 18",
      "TypeScript",
      "PostgreSQL 16",
      "MongoDB 7",
      "RabbitMQ",
      "Redis",
      "Docker Compose",
      "Nginx",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Mrcodehunter/workforce-platform", external: true },
    ],
  },
  {
    title: "nTAAP — Azure Cloud Automation Platform",
    year: "2022 — 2026",
    featured: false,
    description:
      "An Azure App Services–based automation platform built for KPMG Technology Service that orchestrates robust workflows, cutting roughly 95% of manual, repetitive work and significantly accelerating service delivery. Built on event-driven microservices using Azure Service Bus and Redis, with a Cosmos Graph DB layer accessed through a custom adapter and complex Gremlin queries, and a full-stack RBAC framework integrating Azure Entra ID with a custom permissions database.",
    tech: [
      "Azure App Service",
      "Azure Service Bus",
      "Cosmos Graph DB",
      "Gremlin",
      "Redis",
      "Azure Entra ID",
      ".NET",
      "React",
      "xUnit",
    ],
    links: [],
    note: "Proprietary — client project, source not public.",
  },
  {
    title: "TechTalk — Full-Stack Blogging Platform",
    year: "2022",
    featured: false,
    description:
      "A full-stack blogging platform with a React frontend and RESTful APIs in .NET and Node.js, implementing secure authentication middleware for user verification and resource management.",
    tech: ["React", ".NET", "Node.js", "REST API", "JWT Auth"],
    links: [
      { label: "Frontend", href: "https://github.com/Mrcodehunter/tech-talk", external: true },
      { label: "API", href: "https://github.com/Mrcodehunter/Cefalo.TechTalk.Api", external: true },
    ],
  },
];

/* ========================================================================== *
 * Publications
 * ========================================================================== */

export const PUBLICATIONS = [
  {
    title: "Heart Diseases Prediction Using Multiple Machine Learning Techniques",
    authors: "Tamanna Afrose, Murad Hossen, Md. Imdadul Islam",
    venue: "2022 4th International Conference on Sustainable Technologies for Industry 4.0 (STI)",
    year: 2022,
    blurb:
      "Developed a heart disease prediction model based on ten clinical parameters using multiple machine learning techniques, including K-means, FCM, SVM, FIS, LR, MLR and neural networks. Combined hybrid models achieved improved performance, attaining over 94% detection accuracy for the combination of FCM, K-means, SVM, MLR, FIS and NN.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10103237", external: true },
      { label: "DOI", href: "https://doi.org/10.1109/STI56238.2022.10103237", external: true },
    ],
    tags: ["Machine Learning", "Healthcare", "Classification"],
  },
  {
    title: "Classification of Social Media Users Based on Temporal Behaviors and Interests",
    authors: "Murad Hossen, Tamanna Afrose, Atashi Mani Ghosh, Md. Musfique Anwar",
    venue: "Communication and Intelligent Systems (Lecture Notes in Networks and Systems, vol. 204)",
    year: 2021,
    blurb:
      "Proposed a temporal modelling approach to track and classify users' topical interests over time using a fading time-window on social activity streams. Experiments on real Twitter data demonstrated that users within the same category exhibit similar temporal patterns in the evolution of their interests.",
    links: [
      {
        label: "Springer",
        href: "https://link.springer.com/chapter/10.1007/978-981-16-1089-9_72",
        external: true,
      },
      { label: "DOI", href: "https://doi.org/10.1007/978-981-16-1089-9_72", external: true },
    ],
    tags: ["Machine Learning", "Social Media", "Temporal Modeling"],
  },
];

/* ========================================================================== *
 * Education
 * ========================================================================== */

export const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science & Engineering",
    institution: "Jahangirnagar University",
    location: "Savar, Dhaka",
    period: "Jul 2022 — Jul 2023",
    result: "CGPA 3.78 / 4.00",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Jahangirnagar University",
    location: "Savar, Dhaka",
    period: "Mar 2017 — Jun 2022",
    result: "CGPA 3.48 / 4.00",
  },
];

/* ========================================================================== *
 * Achievements
 * ========================================================================== */

export const COMPETITIVE = [
  {
    achievement: "1st Place (Global)",
    event: "CodeChef October Challenge 2018 (Division 2)",
    details: "Ranked 1st out of 13,073 participants",
    links: [{ label: "View Contest", url: "https://www.codechef.com/rankings/OCT18B" }],
  },
  {
    achievement: "3rd Place",
    event: "Cub Hunting Programming Contest 2019",
    details: null,
    links: [
      { label: "View Standings", url: "https://toph.co/c/cub-hunting-programming-contest-2019/standings" },
    ],
  },
  {
    achievement: "19th Place",
    event: "ICPC Dhaka Regional 2019",
    details: "Team: JU 3divides3",
    links: [{ label: "ICPC Regional", url: "https://icpc.global/regionals/finder/Dhaka-2019" }],
  },
  {
    achievement: "23rd Place",
    event: "ICPC Dhaka Regional 2020",
    details: "Team: JU Amigos",
    links: [{ label: "ICPC Regional", url: "https://icpc.global/regionals/finder/Dhaka-2020" }],
  },
  {
    achievement: "25th Place",
    event: "ICPC Dhaka Regional Preliminary 2019",
    details: "Team: JU 3divides3",
    links: [{ label: "ICPC Regional", url: "https://icpc.global/regionals/finder/Dhaka-2019" }],
  },
  {
    achievement: "1,500+ problems solved",
    event: "Participated in 20+ regional, national and inter-university programming contests",
    details: "Across Codeforces, CodeChef and other online judges",
    links: [
      { label: "Codeforces", url: "https://codeforces.com/profile/CoDeHuNtEr" },
      { label: "CodeChef", url: "https://www.codechef.com/users/mrcodehunter" },
    ],
  },
];

export const LEADERSHIP = [
  {
    role: "Problem Setter & Judge",
    event: "Multiple Programming Contests",
    details:
      "Served as problem setter and judge for various regional, national and inter-university programming contests.",
  },
  {
    role: "Competitive Programming Trainer",
    event: "Jahangirnagar University — CSE",
    details:
      "Led specialised training programmes in C, C++, data structures and algorithms, accumulating 200+ trainees over two years. Managed the training lifecycle by coordinating sessions, designing practice contests and analysing performance metrics.",
  },
];

/* ========================================================================== *
 * Navigation — every `to` must match a <Route path> in src/App.js.
 * ========================================================================== */

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
];
