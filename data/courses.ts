export type Lesson = {
  title: string;
  duration: string;
  preview?: boolean;
};

export type CourseModule = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  level: string;
  duration: string;
  projects: number;
  category: string;
  accent: "mint" | "yellow" | "coral" | "blue";
  icon: "web" | "python" | "ai" | "javascript";
  instructor: string;
  rating: number;
  students: number;
  skills: string[];
  outcomes: string[];
  projectNames: string[];
  requirements: string[];
  modules: CourseModule[];
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    shortDescription: "Build and deploy complete web products with React, Next.js, APIs, and databases.",
    description: "Go from your first semantic page to production-ready full-stack applications. You will learn the complete workflow by shipping eight portfolio-grade products.",
    price: 99,
    level: "Beginner to Advanced",
    duration: "12 weeks",
    projects: 8,
    category: "Web",
    accent: "mint",
    icon: "web",
    instructor: "Maya Chen",
    rating: 4.9,
    students: 3240,
    skills: ["HTML & CSS", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    outcomes: ["Build responsive interfaces from scratch", "Design typed APIs and database schemas", "Ship secure, production-ready applications", "Create a portfolio that demonstrates real ability"],
    projectNames: ["SaaS analytics dashboard", "Full-stack commerce platform", "Team task manager"],
    requirements: ["No prior coding experience required", "A computer with internet access", "Curiosity and 6-8 focused hours per week"],
    modules: [
      { title: "Web Development Fundamentals", lessons: [{ title: "How the Web Works", duration: "12 min", preview: true }, { title: "Semantic HTML", duration: "24 min" }, { title: "Modern CSS", duration: "31 min" }, { title: "JavaScript Foundations", duration: "38 min" }] },
      { title: "Building with React", lessons: [{ title: "Components and Props", duration: "26 min" }, { title: "State and Events", duration: "34 min" }, { title: "Data Fetching", duration: "29 min" }] },
      { title: "Backend and Databases", lessons: [{ title: "Designing APIs", duration: "33 min" }, { title: "PostgreSQL Essentials", duration: "37 min" }, { title: "Authentication Patterns", duration: "28 min" }] },
      { title: "Production Launch", lessons: [{ title: "Testing Your App", duration: "25 min" }, { title: "Performance and SEO", duration: "32 min" }, { title: "Deploying to Production", duration: "22 min" }] },
    ],
  },
  {
    id: 2,
    slug: "python-automation",
    title: "Python & Automation",
    shortDescription: "Turn repetitive work into reliable scripts, tools, and automated workflows.",
    description: "Learn practical Python by automating files, spreadsheets, APIs, and common business workflows. Every module ends with something useful you can run.",
    price: 79,
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    projects: 6,
    category: "Python",
    accent: "yellow",
    icon: "python",
    instructor: "Jon Bell",
    rating: 4.8,
    students: 2180,
    skills: ["Python", "APIs", "Web scraping", "CSV & Excel", "Testing", "Scheduling"],
    outcomes: ["Write clean, maintainable Python", "Automate file and data workflows", "Connect services through APIs", "Schedule and monitor reliable scripts"],
    projectNames: ["Invoice data extractor", "Automated report generator", "Website change monitor"],
    requirements: ["No prior Python experience", "A computer that can run Python 3", "3-5 hours per week"],
    modules: [
      { title: "Python Foundations", lessons: [{ title: "Your First Useful Script", duration: "18 min", preview: true }, { title: "Data Types and Flow", duration: "29 min" }, { title: "Functions That Scale", duration: "27 min" }] },
      { title: "Files and Data", lessons: [{ title: "Working with Files", duration: "22 min" }, { title: "CSV and Spreadsheet Data", duration: "35 min" }, { title: "Data Cleanup", duration: "31 min" }] },
      { title: "Connected Automation", lessons: [{ title: "Using Web APIs", duration: "36 min" }, { title: "Reliable Web Scraping", duration: "32 min" }, { title: "Scheduling Jobs", duration: "24 min" }] },
    ],
  },
  {
    id: 3,
    slug: "ai-engineering",
    title: "AI Engineering",
    shortDescription: "Build useful AI products with LLMs, retrieval, evaluations, and production APIs.",
    description: "Move beyond prompt demos. Learn the engineering patterns behind dependable AI features and launch a complete retrieval-powered application.",
    price: 129,
    level: "Intermediate",
    duration: "10 weeks",
    projects: 7,
    category: "AI",
    accent: "coral",
    icon: "ai",
    instructor: "Amara Okafor",
    rating: 4.9,
    students: 1460,
    skills: ["LLM APIs", "Embeddings", "RAG", "Evals", "Agents", "Observability"],
    outcomes: ["Build grounded AI features", "Design reliable retrieval systems", "Evaluate quality and failure modes", "Deploy monitored AI applications"],
    projectNames: ["AI research assistant", "Document Q&A workspace", "Support triage agent"],
    requirements: ["Comfort with JavaScript or Python", "Basic API experience", "5-7 hours per week"],
    modules: [
      { title: "AI Product Foundations", lessons: [{ title: "How LLM Products Work", duration: "21 min", preview: true }, { title: "Structured Outputs", duration: "28 min" }, { title: "Tool Use", duration: "33 min" }] },
      { title: "Retrieval Systems", lessons: [{ title: "Embeddings and Search", duration: "36 min" }, { title: "RAG Architecture", duration: "41 min" }, { title: "Citations and Trust", duration: "26 min" }] },
      { title: "Production AI", lessons: [{ title: "Evaluation Systems", duration: "39 min" }, { title: "Tracing and Costs", duration: "25 min" }, { title: "Shipping Your AI App", duration: "30 min" }] },
    ],
  },
  {
    id: 4,
    slug: "modern-javascript",
    title: "Modern JavaScript",
    shortDescription: "Master the language through interactive apps, APIs, and browser projects.",
    description: "Build a durable mental model of JavaScript through focused lessons and five hands-on browser projects, from state management to async systems.",
    price: 69,
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    projects: 5,
    category: "Development",
    accent: "blue",
    icon: "javascript",
    instructor: "Leo Martins",
    rating: 4.7,
    students: 2840,
    skills: ["JavaScript", "DOM", "Async patterns", "APIs", "Testing", "Modules"],
    outcomes: ["Understand JavaScript fundamentals deeply", "Build interactive browser interfaces", "Work confidently with async data", "Organize code into testable modules"],
    projectNames: ["Personal finance tracker", "Live weather interface", "Kanban task board"],
    requirements: ["No JavaScript experience required", "Basic computer literacy", "3-5 hours per week"],
    modules: [
      { title: "Language Foundations", lessons: [{ title: "Thinking in JavaScript", duration: "17 min", preview: true }, { title: "Values and Functions", duration: "28 min" }, { title: "Objects and Arrays", duration: "31 min" }] },
      { title: "Interactive Interfaces", lessons: [{ title: "The DOM", duration: "27 min" }, { title: "Events and State", duration: "34 min" }, { title: "Accessible UI", duration: "23 min" }] },
      { title: "Async JavaScript", lessons: [{ title: "Promises", duration: "29 min" }, { title: "Working with APIs", duration: "36 min" }, { title: "Errors and Testing", duration: "32 min" }] },
    ],
  },
];

export const getCourseBySlug = (slug: string) => courses.find((course) => course.slug === slug);
