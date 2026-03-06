export interface EngagementCard {
  id: string;
  title: string;
  description: string;
}

export type DevOpsIconKey = 'devicon1' | 'devicon2' | 'devicon3' | 'devicon4' | 'devicon5' | 'devicon6' | 'devicon7' | 'devicon8' | 'devicon9';

export interface DevOpsService {
  title: string;
  icon: DevOpsIconKey;
}

// Services Data
export const devopsServices: DevOpsService[] = [
  { title: "DevOps Consulting", icon: "devicon1" },
  { title: "CI/CD Pipelines", icon: "devicon2" },
  { title: "DevSecOps", icon: "devicon3" },
  { title: "Cloud Management", icon: "devicon4" },
  { title: "DevOps Implementation", icon: "devicon5" },
  { title: "Containerization", icon: "devicon6" },
];

export const devopsTags = [
  "DevOps Strategy",
  "Maturity Audit",
  "Roadmap Planning",
  "Process Optimization",
  "Architecture Design",
  "Readiness Assessment",
];
  
// Dev WorkFlow Data
export const engagementCards: EngagementCard[] = [
  { id: "01",  title: "Real Estate", description: "Automated deployments and secure pipelines for property platforms and document-heavy workflows." },
  { id: "02",title: "Travel & Hospitality", description: "Scalable infrastructure ensuring real-time bookings, high availability, and seamless peak traffic handling." },
  { id: "03",  title: "Oil, Gas & Energy", description: "Resilient cloud environments with monitoring, compliance, and secure operational data pipelines." },
  { id: "04",  title: "Banking & FinTech", description: "Compliance-driven CI/CD with encryption, audit logs, and controlled release management." },
  { id: "05",title: "Healthcare", description: "Privacy-focused deployments supporting secure data workflows and high-availability clinical systems." },
  { id: "06",title: "EdTech", description: "Auto-scaling platforms for uninterrupted learning, rapid updates, and performance optimization." },
];

// Choose Qubitars Data
export interface ChooseQubitarsTab {
  title: string;
  content: string;
  image: string;
}

export const chooseQubitarsData = [
  {
    id: 1,
    title: "DevSecOps",
    description:
      "We embed security into every stage of the delivery pipeline, using automated compliance checks, vulnerability scanning, and policy enforcement to protect applications without slowing development velocity.",
    image: "/assets/images/blogs/bimg2.png",
    imageLeft: false,
  },
  {
    id: 2,
    title: "MLOps",
    description:
      "We operationalize machine learning by automating model training, deployment, monitoring, and performance optimization, enabling faster insights, reduced costs, and proactive issue detection.",
    image: "/assets/images/blogs/bimg2.png",
    imageLeft: true,
  },
  {
    id: 3,
    title: "ModelOps",
    description:
      "We manage the full lifecycle of AI/ML models—from deployment to governance—ensuring scalability, regulatory compliance, collaboration, and consistent performance across environments.",
    image: "/assets/images/blogs/bimg2.png",
    imageLeft: false,
  },
  {
    id: 4,
    title: "GitOps",
    description:
      "We use Git as a single source of truth for infrastructure and deployments, enabling version-controlled environments, faster rollbacks, improved collaboration, and reliable, automated delivery workflows.",
    image: "/assets/images/blogs/bimg2.png",
    imageLeft: false,
  },
];

// Deliver Flow Data
export interface DeliverItem {
  number: string;
  title: string;
  description: string;
}

export interface Layer {
  id: number;
  y: number;
}

export const deliverData: DeliverItem[] = [
  {
    number: "01",
    title: "Automation-First",
    description:
      "We streamline CI/CD, infrastructure, and workflows through automation to reduce manual work and accelerate consistent, reliable delivery.",
  },
  {
    number: "02",
    title: "Cloud-Native Solutions",
    description:
      "We build scalable apps using microservices, containers, serverless functions, and event-driven architectures for modern cloud environments.",
  },
  {
    number: "03",
    title: "Reliability Engineering",
    description:
      "We embed SLOs, SLIs, monitoring, alerting, incident response, and root-cause analysis to ensure high system reliability and operational resilience.",
  },
  {
    number: "04",
    title: "Security & Compliance",
    description:
      "Identity management, policies, encryption, network controls, and compliance are enforced from day one to ensure robust governance.",
  },
  {
    number: "05",
    title: "Continuous Feedback",
    description:
      "Performance, stability, and cost metrics are monitored and reviewed continuously to improve operational efficiency and decision-making.",
  },
];

export const layersData: Layer[] = [
  { id: 0, y: 0 },
  { id: 1, y: 80 },
  { id: 2, y: 150 },
  { id: 3, y: 220 },
  { id: 4, y: 290 },
];

// Approaches Data
export interface ApproachCard {
  title: string;
  desc: string;
}

export const approachesData: ApproachCard[] = [
  { 
    title: 'Discovery & Strategy',
    desc: 'We evaluate your current architecture, delivery workflows, and business objectives to define a DevOps roadmap aligned with scalability, security, and release velocity.',
  },
  {
    title: 'Pipeline Engineering',
    desc: 'We design and implement automated CI/CD pipelines with integrated testing, artifact management, and environment orchestration for predictable, rapid deployments.',
  },
  {
    title: 'Platform Stability',
    desc: 'We establish centralized logging, performance monitoring, and intelligent alerting to ensure system health, faster incident detection, and proactive resolution.',
  },
  {
    title: 'Optimize & Evolve',
    desc: 'We continuously refine pipelines, infrastructure, and metrics using feedback loops, improving efficiency, stability, and delivery performance over time.',
  },
];

// Benefits Cards Data
export interface BenefitCard {
  title: string;
  description: string;
}

export const benefitsData: BenefitCard[] = [
  {
    title: "Business-Aligned Delivery",
    description: "We align our development process with your business objectives, ensuring that every solution directly supports your growth targets and operational efficiency goals."
  },
  {
    title: "Scalable Infrastructure",
    description: "We build infrastructure that grows with your business, using cloud-native technologies and automation to handle increased load without compromising performance."
  },
  {
    title: "Security-First Approach",
    description: "We integrate security practices throughout the development lifecycle, implementing robust controls and compliance measures to protect your applications and data."
  },
  {
    title: "Continuous Optimization",
    description: "We continuously monitor and optimize your systems, using data-driven insights to improve performance, reduce costs, and enhance user experience over time."
  }
];


// Banner Data
export interface EfficiencyStat {
  text: string;
}

export const efficiencyStatsData: EfficiencyStat[] = [
  { text: '100+ experts' },
  { text: '10+ years of innovation' },
  { text: '500+ clients who trust us' },
];

// Why Choose Us Data 
export const getChooseQubitarsTabs = (devOpsImages: any): ChooseQubitarsTab[] => [
  {
    title: "DevSecOps",
    content:
      "We embed security into every stage of the delivery pipeline, using automated compliance checks, vulnerability scanning, and policy enforcement to protect applications without slowing development velocity.",
    image: devOpsImages.chooseQubitars1,
  },
  {
    title: "MLOps",
    content: "We operationalize machine learning by automating model training, deployment, monitoring, and performance optimization, enabling faster insights, reduced costs, and proactive issue detection.",
    image: devOpsImages.chooseQubitars2,
  },
  {
    title: "ModelOps",
    content: "We manage the full lifecycle of AI/ML models—from deployment to governance—ensuring scalability, regulatory compliance, collaboration, and consistent performance across environments.",
    image: devOpsImages.chooseQubitars3,
  },
  {
    title: "GitOps",
    content: "We use Git as a single source of truth for infrastructure and deployments, enabling version-controlled environments, faster rollbacks, improved collaboration, and reliable, automated delivery workflows.",
    image: devOpsImages.chooseQubitars4,
  },
];

