import { getStaffAugmentationImages } from "@/lib/assets";

const staffImages = getStaffAugmentationImages();
export const advantagesData = [
  {
    id: 1,
    icon: 'saIcon1',
    title: 'Product-Focused Specialists',
    description: 'Work with a team fully dedicated to your product, aligned with your technology stack, business goals, and long-term vision.',
    column: 1
  },
  {
    id: 2,
    icon: 'saIcon2',
    title: 'Cost-Effective Development',
    description: 'Avoid the complexity of freelancers or short-term contracts with predictable costs and better long-term ROI.',
    column: 1
  },
  {
    id: 3,
    icon: 'saIcon3',
    title: 'Faster Time-to-Market',
    description: 'Dedicated teams integrate quickly with your workflow, helping you deliver products faster and more efficiently.',
    column: 3
  },
  {
    id: 4,
    icon: 'saIcon4',
    title: 'Flexible & Scalable Teams',
    description: 'Easily scale your team up or down based on project requirements without the overhead of traditional hiring.',
    column: 3
  }
];



export const benefitsCardsData = [
  {
    title: "Elite Talent",
    description: "Access top one percent engineers ready to scale projects.",
    image: staffImages.saImg2,
  },
  {
    title: "Faster Hiring",
    description: "Skip recruitment delays and onboard experts exactly when needed.",
    image: staffImages.saImg3,
  },
  {
    title: "Clear Communication",
    description: "Collaborative teams communicate clearly and resolve blockers quickly.",
    image: staffImages.saImg4,
  },
  {
    title: "Goal Focus",
    description: "Teams stay aligned with targets and deliver results.",
    image: staffImages.saImg5,
    active: true,
  },
  {
    title: "Flexible Scaling",
    description: "Expand your team instantly with global engineering expertise.",
    image: staffImages.saImg6,
  },
];

export const teamsData = [
  {
    id: 1,
    title: 'Extended Team',
    description: 'Integrate expert engineers with your internal team to accelerate delivery without hiring overhead.',
    tags: ['TeamExtension', 'SkillSupport', 'FastScaling'],
    showButton: true,
  },
  {
    id: 2,
    title: 'Autonomous Team',
    description: 'Independent engineering teams that handle development, architecture, and oversight requirements.',
    showButton: true,
  },
  {
    id: 3,
    title: 'Flexible Team',
    description: 'Scale engineering resources up or down according to priorities and workflow.',
    showButton: true,
  },
  {
    id: 4,
    title: 'DevOps Team',
    description: 'Engineers with expertise in CI/CD, speed, reliability, and operational excellence.',
    showButton: true,
  },
  {
    id: 5,
    title: 'Product Team',
    description: 'Complete cross-functional teams for design, development, and product improvement.',
    showButton: true,
  },
];

export const operationalProcessData = [
  {
    title: "PROJECT DISCOVERY",
    description: "We analyze goals, technical requirements, timelines, constraints, ensuring clear direction before assembling the right team.",
    action: "Defining Goals",
    iconKey: "saIcon1",
    bgImageKey: "saImg12",
  },
  {
    title: "AGILE EXECUTION",
    description: "Specialists are carefully chosen based on skills, experience, domain knowledge, ensuring perfect alignment with project needs.",
    action: "Sprint Planning",
    iconKey: "saIcon2",
    bgImageKey: "saImg15",
  },
  {
    title: "FLEXIBLE SCALING",
    description: "Engineers integrate into your workflows, tools, communication channels, enabling smooth collaboration & rapid operational readiness.",
    action: "Team Scaling",
    iconKey: "saIcon3",
    bgImageKey: "saImg14",
  },
  {
    title: "TALENT SELECTION",
    description: "Delivery begins using agile methods, structured milestones, transparent reporting, maintaining consistent progress, quality, alignment.",
    action: "Talent Matching",
    iconKey: "saIcon4",
    bgImageKey: "saImg13",
  },
  {
    title: "TEAM ONBOARDING",
    description: "Team structure adapts as requirements evolve, allowing quick expansion or adjustment without disrupting project momentum.",
    action: "Onboarding Process",
    iconKey: "saIcon5",
    bgImageKey: "saImg16",
  },
  {
    title: "QUALITY ASSURANCE",
    description: "Continuous testing, code reviews, validation processes ensure stability, performance, reliability across every development stage.",
    action: "Quality Control",
    iconKey: "saIcon6",
    bgImageKey: "saImg17",
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    description: "Regular feedback sessions refine processes, strengthen collaboration, optimize productivity, ensuring long-term project success.",
    action: "Process Enhancement",
    iconKey: "saIcon7",
    bgImageKey: "saImg18",
  },
];

export const productDeliveryData = {
  yourRoles: [
    {
      text: "You review shortlisted professionals and select the engineers best suited."
    },
    {
      text: "Share product vision, goals, requirements guiding development priorities effectively."
    },
    {
      text: "Maintain full control over workflows, decisions, priorities throughout project lifecycle."
    },
    {
      text: "Focus on innovation and strategy while your product continuously evolves."
    }
  ],
  ourRoles: [
    {
      text: "We identify skilled professionals matching your technology stack, experience level, project requirements."
    },
    {
      text: "We handle onboarding, setup tools, workflows, communication channels for smooth collaboration."
    },
    {
      text: "We manage HR, administration, compliance, training, ensuring engineers stay productive."
    },
    {
      text: "Easily increase or reduce team capacity based on evolving project requirements."
    }
  ]
};

export const dedicatedTeamData = [
  {
    text: "Software Developers",
    iconKey: "saIcon1",
  },
  {
    text: "Mobile Developers",
    iconKey: "saIcon2",
  },
  {
    text: "AI & ML Experts",
    iconKey: "saIcon3",
  },
  {
    text: "DevOps Engineers",
    iconKey: "saIcon4",
  },
  {
    text: "Data Engineers",
    iconKey: "saIcon1",
  },
  {
    text: "UI/UX Designers",
    iconKey: "saIcon2",
  },
  {
    text: "Software Testers",
    iconKey: "saIcon3",
  },
  {
    text: "Support Engineers",
    iconKey: "saIcon4",
  }
];

export const techStackData = {
  tabs: [
    "Front-End",
    "Back-End", 
    "Low/No Code",
    "DevOps",
    "Mobile",
    "AI & ML",
  ],
  tech: [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "SaaS", icon: "/icons/sass.svg" },
    { name: "React JS", icon: "/icons/react.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Meteor JS", icon: "/icons/meteor.svg" },
    { name: "Nuxt JS", icon: "/icons/nuxt.svg" },
    { name: "Node-js", icon: "/icons/node.svg" },
    { name: "Python", icon: "/icons/python.svg" },
  ]
};