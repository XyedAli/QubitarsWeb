import { getIndustriesStateIcons } from "@/lib/assets/icons";

export const chooseQubitarsHeading = {
  subtitle: "WHY US",
  title: "Why our custom healthcare software solutions work in wellness tech",
};

export interface WhyUsCard {
  id: string;
  icon: string;
  label: string;
}

/** Business Excellence section */
export const businessExcellenceHeading = {
  title: "Elevate growth outcomes using flexible collaboration approaches",
  description:
    "Convert dreams toward tangible impact while delivering peak performance via Qubitars Technologies's engagement models.",
};

export interface EngagementCard {
  id: string;
  iconKey: "stateicon9" | "stateicon10" | "stateicon11";
  title: string;
}

const icons = getIndustriesStateIcons();

export const whyUsCards: WhyUsCard[] = [
  { id: "compliance", icon: icons.stateicon16, label: "Compliance-first mindset" },
  { id: "ai", icon: icons.stateicon17, label: "Built-in AI, not bolted on" },
  { id: "iterations", icon: icons.stateicon18, label: "Rapid User-Driven Iterations" },
  { id: "infrastructure", icon: icons.stateicon19, label: "Privacy-First Data Infrastructure" },
];

export const engagementCards: EngagementCard[] = [
  { id: "team-augmentation", iconKey: "stateicon9", title: "Team Augmentation" },
  { id: "product-development", iconKey: "stateicon10", title: "Product Development" },
  { id: "consultation", iconKey: "stateicon11", title: "Consultation" },
];

export function getEngagementCardIcon(iconKey: EngagementCard["iconKey"]): string {
  return icons[iconKey];
}

/** Outcome Focused / Results Roadmap section */
export const outcomeFocusedHeading = {
  subtitle: "Results Roadmap",
  title: "Focusing on Impact, Beyond Deliverables",
};

export interface RoadmapStep {
  step: number;
  title: string;
  icon: string;
  bullets: string[];
  accent: boolean;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    step: 1,
    title: "Discovery & Planning",
    icon: icons.stateicon12,
    accent: true,
    bullets: [
      "Understand goals, challenges, needs",
      "Define scope and metrics",
      "Align stakeholders and success",
      "Map requirements and risks",
    ],
  },
  {
    step: 2,
    title: "Strategize & Design",
    icon: icons.stateicon13,
    accent: false,
    bullets: [
      "Sketch simple UX concepts",
      "Create quick prototypes",
      "Gather user feedback",
      "Iterate until solid",
    ],
  },
  {
    step: 3,
    title: "Build & Integrate",
    icon: icons.stateicon14,
    accent: false,
    bullets: [
      "Develop secure scalable code",
      "Integrate with existing systems",
      "Ensure performance and reliability",
      "Prepare deployment plan",
    ],
  },
  {
    step: 4,
    title: "Monitor & Improve",
    icon: icons.stateicon15,
    accent: true,
    bullets: [
      "Track real-time metrics",
      "Analyze results and learn",
      "Optimize processes and tooling",
      "Govern and sustain progress",
    ],
  },
];
