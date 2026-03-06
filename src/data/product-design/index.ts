export interface ApproachStep {
  icon: string;
  title: string;
  items: string[];
}

export interface PhaseContent {
  phase: string;
  title: string;
  desc: string;
  position: string;
  margin: string;
}

export interface ExecutionCard {
  icon: string;
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
}

export interface ChooseQubitarsFeature {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
}

export const approachStepsData: ApproachStep[] = [
  {
    icon: "pdIcon1",
    title: "Discover",
    items: ["Stakeholder Alignment", "User Insights", "Market Context"],
  },
  {
    icon: "pdIcon3",
    title: "Define",
    items: ["Opportunity Prioritization", "Value Proposition", "MVP Scope"],
  },
  {
    icon: "pdIcon2",
    title: "Design",
    items: ["Experience Architecture", "Wireframes", "Interactive Prototypes"],
  },
  {
    icon: "pdIcon4",
    title: "Validate",
    items: ["Usability Testing", "Iteration", "Launch Readiness"],
  }
];

export const phaseContentData: PhaseContent[] = [
  {
    phase: "Phase 1",
    title: "Discover",
    desc: "We align on vision, users, measurable outcomes.",
    margin: "pe-2 md:pe-0",
    position: "top-0 md:top-[-20px] xl:top-[-40px] left-0 md:left-60 lg:left-68 xl:left-95 "
  },
  {
    phase: "Phase 2", 
    title: "Define",
    desc: "We translate insights into a focused product strategy.",
    margin: "pe-8 md:pe-0",
    position: "top-22 md:top-32 md:top-26 xl:top-30 left-0 md:left-88 lg:left-93 xl:left-120"
  },
  {
    phase: "Phase 3",
    title: "Design", 
    desc: "We convert strategy into tangible, testable experiences.",
    margin: "pe-8 md:pe-0",
    position: "top-45 md:top-63 xl:top-70 left-0 md:left-88 lg:left-94 xl:left-121 "
  },
  {
    phase: "Phase 4",
    title: "Validate",
    desc: "We refine, test, prepare for confident launch.",
    margin: "pe-0",
    position: "top-68 md:top-92 xl:top-113 left-0 md:left-68 lg:left-73 xl:left-100"
  }
];

export const executionCardsData: ExecutionCard[] = [
  {
    icon: "pdIcon5",
    title: "+2.7%",
    description: "Whatsapp Usage Increase",
    cardTitle: "Strategic Execution Framework",
    cardDescription: "A prioritized roadmap supported by scalable architecture planning to ensure efficient delivery and long-term growth."
  },
  {
    icon: "pdIcon6",
    title: "68%",
    description: "Automation for Ecommerce at least",
    cardTitle: "User-Centered Clarity",
    cardDescription: "Deep audience profiling combined with structured journey mapping to align user needs with measurable business objectives."
  },
  {
    icon: "pdIcon7",
    title: "2M+",
    description: "Conversations have been answered",
    cardTitle: "Rapid Validation",
    cardDescription: "Interactive prototypes and structured testing cycles to minimize risk, refine direction, and confirm market readiness."
  }
];

export const chooseQubitarsFeaturesData: ChooseQubitarsFeature[] = [
  {
    icon: "pdIcon8",
    title: "Strategic Thinking",
    description: "We look beyond features and focus on long-term value, aligning every initiative with measurable business objectives.",
    borderColor: "border-orange-400"
  },
  {
    icon: "pdIcon9",
    title: "Unified Execution",
    description: "Business goals, user expectations, and technical feasibility are integrated into one clear, actionable direction.",
    borderColor: "border-orange-500"
  },
  {
    icon: "pdIcon10",
    title: "Results–Driven Delivery",
    description: "Every milestone, sprint, and release is structured around performance, adoption, and growth.",
    borderColor: "border-orange-600"
  },
  {
    icon: "pdIcon11",
    title: "Structured Innovation",
    description: "Research-driven discovery paired with iterative execution for clear, fast progress.",
    borderColor: "border-orange-700"
  }
];