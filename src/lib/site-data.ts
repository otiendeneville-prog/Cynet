export type Course = {
  slug: string;
  title: string;
  dates: string;
  duration: string;
  location: string;
  instructor: string;
  category: string;
  featured?: boolean;
};

export type Program = {
  slug: string;
  title: string;
  blurb: string;
  courses: string[];
};

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const SITE = {
  name: "Cynet East Africa Consultancy",
  short: "Cynet East Africa",
  tagline: "Improves Your Efficiency",
  email: "info@cyneteastafrica.com",
  address: "186300, View Park Towers, Nairobi",
  socials: [
    { label: "LinkedIn", href: "https://ke.linkedin.com/company/cynet-east-africa" },
    { label: "Facebook", href: "https://www.facebook.com/cyneteastafricaconsultancy/" },
    { label: "X", href: "https://x.com/CynetA" },
    { label: "YouTube", href: "https://www.youtube.com/@cyneteastafricaconsultancy6360" },
  ],
};

export const STATS = [
  { value: "5000+", label: "Professionals Trained" },
  { value: "300+", label: "Training Programs" },
  { value: "25+", label: "Industries Served" },
  { value: "11+", label: "Years of Experience" },
];

export const PILLARS = [
  {
    title: "Expert Training",
    body: "Industry-leading courses designed for professional excellence and career growth.",
  },
  {
    title: "Consultancy",
    body: "Strategic guidance from seasoned professionals across diverse industries.",
  },
  {
    title: "Research",
    body: "Evidence-based insights for informed business decisions and innovation.",
  },
];

export const COURSES: Course[] = [
  {
    slug: "esg-fundamentals",
    title: "Environmental, Social & Governance (ESG) Training",
    dates: "22nd - 26th June 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "Certified Trainer",
    category: "Agriculture, Climate Change & Environment",
    featured: true,
  },
  {
    slug: "zero-based-budgeting",
    title: "Zero-Based Budgeting Training",
    dates: "6th - 10th July 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "Certified Practitioner",
    category: "Accounting & Finance",
    featured: true,
  },
  {
    slug: "public-sector-process-improvement",
    title: "Public Sector Process Improvement Training",
    dates: "1st - 5th May 2026",
    duration: "5 Days",
    location: "Mombasa, Kenya",
    instructor: "Certified Practitioner",
    category: "Lean Six Sigma & Strategy",
    featured: true,
  },
  {
    slug: "monitoring-evaluation-fundamentals",
    title: "Monitoring & Evaluation Fundamentals",
    dates: "13th - 17th April 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "Lead M&E Specialist",
    category: "Monitoring & Evaluation",
  },
  {
    slug: "project-management-professional",
    title: "Project Management for Development Professionals",
    dates: "9th - 20th March 2026",
    duration: "10 Days",
    location: "Nairobi, Kenya",
    instructor: "PMP Certified Trainer",
    category: "Project Management",
  },
  {
    slug: "mobile-data-collection",
    title: "Mobile Data Collection with ODK & KoboToolbox",
    dates: "17th - 21st August 2026",
    duration: "5 Days",
    location: "Kisumu, Kenya",
    instructor: "Data Systems Specialist",
    category: "ICT & Data",
  },
  {
    slug: "corporate-governance",
    title: "Corporate Governance for Boards & Executives",
    dates: "14th - 18th September 2026",
    duration: "5 Days",
    location: "Mombasa, Kenya",
    instructor: "Governance Advisor",
    category: "Governance & Leadership",
  },
  {
    slug: "child-online-protection",
    title: "Child Online and Digital Protection Training",
    dates: "12th - 16th October 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "Protection Specialist",
    category: "Child Protection",
  },
  {
    slug: "hr-analytics",
    title: "Human Resource Analytics & Workforce Planning",
    dates: "2nd - 6th November 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "HR Practitioner",
    category: "Human Resources",
  },
  {
    slug: "humanitarian-logistics",
    title: "Humanitarian Logistics & Supply Chain in Emergencies",
    dates: "7th - 11th December 2026",
    duration: "5 Days",
    location: "Nairobi, Kenya",
    instructor: "Humanitarian Practitioner",
    category: "Humanitarian",
  },
];

export const PROGRAMS: Program[] = [
  {
    slug: "project-management",
    title: "Project Management",
    blurb: "Plan, deliver and control projects with globally recognised methodologies.",
    courses: ["Project Planning & Design", "PMD Pro", "Risk & Procurement", "Grants Management"],
  },
  {
    slug: "lean-six-sigma-and-strategy",
    title: "Lean Six Sigma & Strategy",
    blurb: "Process excellence, balanced scorecards and performance improvement.",
    courses: ["Yellow Belt", "Green Belt", "Strategic Planning", "Process Improvement"],
  },
  {
    slug: "agriculture-climate-and-environment",
    title: "Agriculture, Climate & Environment",
    blurb: "Climate-smart agriculture, ESG and rural development practice.",
    courses: ["ESG Fundamentals", "Climate Finance", "Value Chain Analysis", "Food Security"],
  },
  {
    slug: "governance-and-leadership",
    title: "Governance & Leadership",
    blurb: "Board effectiveness, ethics and public accountability.",
    courses: ["Corporate Governance", "Board Leadership", "Ethics & Integrity", "Public Policy"],
  },
  {
    slug: "accounting-and-finance",
    title: "Accounting & Finance",
    blurb: "Budgeting, IPSAS, audit and financial management for institutions.",
    courses: ["Zero-Based Budgeting", "IPSAS", "Internal Audit", "Financial Modelling"],
  },
  {
    slug: "ict-and-data",
    title: "ICT & Data",
    blurb: "Digital data collection, analytics and information systems.",
    courses: ["Mobile Data Collection", "Power BI", "Data Analysis with R", "GIS Mapping"],
  },
  {
    slug: "monitoring-and-evaluation",
    title: "Monitoring & Evaluation",
    blurb: "Design results frameworks and evidence systems that hold up.",
    courses: ["M&E Fundamentals", "Impact Evaluation", "Theory of Change", "Data Quality Audits"],
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    blurb: "Talent, performance and modern people operations.",
    courses: ["HR Analytics", "Performance Management", "Labour Law", "Reward Strategy"],
  },
  {
    slug: "humanitarian",
    title: "Humanitarian",
    blurb: "Preparedness, response and accountability to affected populations.",
    courses: ["Humanitarian Logistics", "CHS & Accountability", "Protection Mainstreaming"],
  },
  {
    slug: "child-protection",
    title: "Child Protection",
    blurb: "Safeguarding children online, in programmes and in communities.",
    courses: ["Child Online Protection", "Safeguarding", "Case Management"],
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Business Strategy Services",
    description:
      "We help organizations build resilient strategies aligned to long-term goals — from operational frameworks to performance excellence.",
    tags: ["Strategic Planning", "Balanced Scorecard", "Operations", "Performance Management"],
  },
  {
    number: "02",
    title: "Team Building Services",
    description:
      "Strengthen your organization from the inside. We design interventions that improve team dynamics, culture and collective problem-solving.",
    tags: ["Team Dynamics", "Productivity", "Culture Alignment"],
  },
  {
    number: "03",
    title: "Tax and Financial Advisory",
    description:
      "Navigate complex tax landscapes and optimize your financial position with expert advisory tailored to your sector and scale.",
    tags: ["Business Tax", "Risk Management", "Capital Advisory", "Employment Tax"],
  },
  {
    number: "04",
    title: "Research Services",
    description:
      "Data-driven insight to inform every decision. From baseline surveys to impact evaluations, we show what is working and what is not.",
    tags: ["Market Surveys", "Impact Evaluations", "Baseline Data", "End-line Surveys"],
  },
];

export const CLIENTS = [
  "Kenya Pipeline Company",
  "Chancen International",
  "Ministry of Health",
  "Kenya Revenue Authority",
  "World Vision",
  "County Government of Nakuru",
  "Safaricom Foundation",
  "UNICEF Partners",
  "Kenya Power",
  "Equity Group Foundation",
  "Amref Health Africa",
  "National Treasury",
];