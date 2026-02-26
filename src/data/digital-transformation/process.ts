export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// Salesforce Implementation Process (Original)
export const salesforceProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We review workflows, data, and users to define clear requirements before configuration begins.",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "We design data models, access rules, and automation aligned to approved requirements.",
  },
  {
    number: "03",
    title: "Configuration",
    description: "We configure Salesforce features, automation, and security based on the finalized design.",
  },
  {
    number: "04",
    title: "Data Migration",
    description: "We migrate data into Salesforce with validation checks and ownership mapping.",
  },
  {
    number: "05",
    title: "Testing Training",
    description: "We test system behavior and prepare users with role-based training.",
  },
  {
    number: "06",
    title: "Go Live",
    description: "We deploy Salesforce, monitor usage, and stabilize the system after launch.",
  },
];

// Web Development Process
export const webDevelopmentProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We gather requirements and understand business goals to guide a clear project roadmap.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We define strategy, milestones, and resources for smooth development execution.",
  },
  {
    number: "03",
    title: "Architecture",
    description: "We design scalable, secure, and efficient technical structures tailored to your app.",
  },
  {
    number: "04",
    title: "Prototyping",
    description: "We produce interactive mockups to validate flows, usability, and visual design.",
  },
  {
    number: "05",
    title: "Development",
    description: "We build features iteratively, ensuring high-quality code, speed, and responsiveness.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy, monitor, and refine app for optimal performance and reliability.",
  },
];

// Mobile App Development Process
export const mobileDevelopmentProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze goals, audience, and technical needs to create a clear roadmap.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We create strategy, timelines, and resource plans to ensure efficient development.",
  },
  {
    number: "03",
    title: "Architecture",
    description: "We design scalable, secure, and reliable frameworks tailored to your mobile solution.",
  },
  {
    number: "04",
    title: "Prototyping",
    description: "Interactive mockups help visualize app flow, functionality, and user experience.",
  },
  {
    number: "05",
    title: "Development",
    description: "Iterative coding ensures performance, speed, and feature-rich experiences across devices.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy, monitor, and refine app for optimal performance and stability.",
  },
];

// MVP Development Process
export const mvpDevelopmentProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We explore ideas, goals, and target audience to define a clear MVP strategy.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We prioritize features and set clear timelines to deliver a high-impact MVP efficiently & strategically.",
  },
  {
    number: "03",
    title: "Prototyping",
    description: "We create clickable prototypes to test workflows and validate early concepts.",
  },
  {
    number: "04",
    title: "Core Development",
    description: "We build only the essential features needed to launch and attract users.",
  },
  {
    number: "05",
    title: "Testing",
    description: "We conduct user testing to ensure functionality, usability, and early-stage validation.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your MVP, collect feedback, and plan iterations for growth.",
  },
];

// SAAS Development Process
export const saasDevelopmentProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We identify business goals, target audience, and market opportunities to define scope.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We define features, milestones, and scalable architecture for efficient development.",
  },
  {
    number: "03",
    title: "Architecture",
    description: "We design multi-tenant, secure, and high-performing systems tailored to SaaS requirements.",
  },
  {
    number: "04",
    title: "Prototyping",
    description: "Interactive mockups validate workflows, UI/UX, and user journeys before full development.",
  },
  {
    number: "05",
    title: "Development",
    description: "We implement core features iteratively, focusing on reliability, scalability, and performance.",
  },
  {
    number: "06",
    title: "Release & Refine",
    description: "We deploy platform, monitor usage, and refine for user satisfaction and growth.",
  },
];

// Low Code/No Code Development Process
export const lowCodeDevelopmentProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your goals, processes, and requirements to define a clear project plan.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We prioritize features, map workflows, and select most suitable platform.",
  },
  {
    number: "03",
    title: "Architecture",
    description: "We design scalable, flexible app structures optimized for low-code/no-code environments.",
  },
  {
    number: "04",
    title: "Prototyping",
    description: "We create functional mockups and interactive prototypes for early validation.",
  },
  {
    number: "05",
    title: "Development",
    description: "We rapidly build apps with minimal coding, ensuring speed, reliability, and usability.",
  },
  {
    number: "06",
    title: "Release & Refine",
    description: "We deploy app, monitor performance, and refine features for continuous improvement.",
  },
];

// Default export for backward compatibility
export const processSteps = salesforceProcessSteps;
