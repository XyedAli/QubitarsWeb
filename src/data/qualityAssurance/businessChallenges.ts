export interface BusinessChallengeSlide {
  id: string;
  tabLabel: string;
  tabIndexLabel: string;
  painPoint: {
    title: string;
    description: string;
  };
  qubitarsEdge: {
    title: string;
    description: string;
  };
}

/** Tab panel backgrounds: lightest → darkest (Figma gradient stack) */
export const TAB_PANEL_BG = [
  "bg-[#FEC99A]",
  "bg-[#FDAE68]",
  "bg-[#FC9236]",
  "bg-[#C95F03]",
] as const;

export const BUSINESS_CHALLENGE_SLIDES: BusinessChallengeSlide[] = [
  {
    id: "data-confidence",
    tabIndexLabel: "1.",
    tabLabel: "Data Confidence",
    painPoint: {
      title: "Pain Point",
      description:
        "Unreliable data leads to poor decisions, financial setbacks, and lack of stakeholder trust.",
    },
    qubitarsEdge: {
      title: "Qubitars Edge",
      description:
        "We ensure data accuracy through continuous validation and testing, enabling confident, risk-free decision-making backed by reliable insights.",
    },
  },
  {
    id: "operational-speed",
    tabIndexLabel: "2.",
    tabLabel: "Operational Speed",
    painPoint: {
      title: "Pain Point",
      description:
        "Manual testing cycles and fragmented workflows slow releases, increase cost, and make it hard to keep pace with market demand.",
    },
    qubitarsEdge: {
      title: "Qubitars Edge",
      description:
        "We streamline QA with automation and repeatable processes so your team ships faster without sacrificing coverage or quality.",
    },
  },
  {
    id: "experience-consistency",
    tabIndexLabel: "3.",
    tabLabel: "Experience Consistency",
    painPoint: {
      title: "Pain Point",
      description:
        "Inconsistent behavior across devices and environments frustrates users and erodes trust in your product.",
    },
    qubitarsEdge: {
      title: "Qubitars Edge",
      description:
        "We validate journeys end-to-end across platforms so every user gets the same polished, reliable experience.",
    },
  },
  {
    id: "performance-optimization",
    tabIndexLabel: "4.",
    tabLabel: "Performance Optimization",
    painPoint: {
      title: "Pain Point",
      description:
        "Undetected performance issues surface under load, causing churn, revenue loss, and damaged reputation.",
    },
    qubitarsEdge: {
      title: "Qubitars Edge",
      description:
        "We stress-test and profile your stack early so bottlenecks are fixed before users ever feel them.",
    },
  },
];
