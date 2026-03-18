export interface QAApproach {
  id: string;
  imageAlt: string;
  title: string;
  description: string;
  bullets: string[];
}

export const QA_APPROACHES: QAApproach[] = [
  {
    id: "manual",
    imageAlt: "Manual testing with laptop and quality checks",
    title: "Manual Testing",
    description: "Experienced testers replicate real-user behavior to uncover usability issues and hidden defects before release.",
    bullets: [
      "Simulates real-user journeys across multiple devices",
      "Identifies usability gaps missed by automated testing",
      "Ensures intuitive and seamless user experience delivery",
    ],
  },
  {
    id: "automated",
    imageAlt: "Automated testing with multiple monitors and code",
    title: "Automated Testing",
    description: "Automated scripts continuously run predefined tests, improving accuracy while reducing manual effort and testing cycles.",
    bullets: [
      "Executes repetitive test cases with high speed",
      "Reduces human errors and improves testing consistency",
      "Enables continuous integration and faster release cycles",
    ],
  },
  {
    id: "performance",
    imageAlt: "Performance testing and system validation",
    title: "Performance Testing",
    description: "We simulate heavy traffic conditions to evaluate stability, identify bottlenecks, and maintain optimal application performance.",
    bullets: [
      "Simulates concurrent users to evaluate system performance",
      "Detects bottlenecks affecting speed and responsiveness early",
      "Ensures application stability during peak traffic conditions",
    ],
  },
];