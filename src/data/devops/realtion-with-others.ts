export interface EngagementCard {
  id: string;
  title: string;
  description: string;
}

export const engagementCards: EngagementCard[] = [
  { id: "01",  title: "Real Estate", description: "Automated deployments and secure pipelines for property platforms and document-heavy workflows." },
  { id: "02",title: "Travel & Hospitality", description: "Scalable infrastructure ensuring real-time bookings, high availability, and seamless peak traffic handling." },
  { id: "03",  title: "Oil, Gas & Energy", description: "Resilient cloud environments with monitoring, compliance, and secure operational data pipelines." },
  { id: "04",  title: "Banking & FinTech", description: "Compliance-driven CI/CD with encryption, audit logs, and controlled release management." },
  { id: "05",title: "Healthcare", description: "Privacy-focused deployments supporting secure data workflows and high-availability clinical systems." },
  { id: "06",title: "EdTech", description: "Auto-scaling platforms for uninterrupted learning, rapid updates, and performance optimization." },
];

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

