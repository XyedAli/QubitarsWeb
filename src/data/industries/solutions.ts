/** Section heading – "Solutions" / "Aligned To" / "Outcomes" (with <br /> in UI) */
export const solutionsHeading = {
  line1: "Solutions",
  line2: "Aligned To",
  line3: "Outcomes",
};

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  articleClassName: string;
  descClassName: string;
}

const realEstateSolutionCards: SolutionCard[] = [
  {
    id: "built-around",
    title: "Built Around Your Business",
    description: "Qubitars builds tailored real estate platforms aligned workflows.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "scale-without-limits",
    title: "Scale Without Limits",
    description: "Scalable platforms grow with your business, enabling modular expansion.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "simplify-complex",
    title: "Simplify the Complex",
    description: "We streamline leasing, payments, messaging to reduce work.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "control-risk",
    title: "Control Risk with Confidence",
    description: "AI-driven alerts catch risks early, preventing costly losses.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const travelHospitalitySolutionCards: SolutionCard[] = [
  {
    id: "digital-experience-partner",
    title: "Digital Experience Partner",
    description: "We collaborate to elevate guest journeys through intelligent hospitality systems.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "technology-sustainable-expansion",
    title: "Technology for Sustainable Expansion",
    description: "Our team supports growth with adaptable, future-ready digital infrastructure.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "strategic-operations-enablement",
    title: "Strategic Operations Enablement",
    description: "We align technology with service delivery to improve efficiency.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "reliability-you-can-trust",
    title: "Reliability You Can Trust",
    description: "We strengthen systems proactively to safeguard brand reputation.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const oilGasEnergySolutionCards: SolutionCard[] = [
  {
    id: "infrastructure-transformation",
    title: "Infrastructure Transformation Allies",
    description: "We modernize complex energy environments with precision-driven digital solutions.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "performance-driven-collaboration",
    title: "Performance-Driven Collaboration",
    description: "Our expertise enhances operational resilience and real-time asset visibility.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "regulatory-navigation-support",
    title: "Regulatory Navigation Support",
    description: "We align digital systems with evolving industry compliance standards.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "long-term-operational-stability",
    title: "Long-Term Operational Stability",
    description: "We build dependable technology foundations supporting sustained infrastructure growth.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const bankingFintechSolutionCards: SolutionCard[] = [
  {
    id: "trusted-financial-partner",
    title: "Trusted Financial Technology Partner",
    description: "We co-develop secure platforms aligned with strict regulatory requirements.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "scalable-innovation-support",
    title: "Scalable Innovation Support",
    description: "Our partnership enables seamless financial product expansion globally.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "risk-aware-engineering",
    title: "Risk-Aware Engineering",
    description: "We embed governance frameworks directly within digital financial systems.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "sustainable-digital-leadership",
    title: "Sustainable Digital Leadership",
    description: "We strengthen institutional capabilities for long-term market competitiveness.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const healthcareSolutionCards: SolutionCard[] = [
  {
    id: "collaborative-care-partner",
    title: "Collaborative Care Technology Partner",
    description: "We support providers with secure, patient-centered digital ecosystems.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "clinical-workflow-optimization",
    title: "Clinical Workflow Optimization",
    description: "Our solutions enhance coordination across healthcare delivery systems.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "compliance-focused-engineering",
    title: "Compliance-Focused Engineering",
    description: "We integrate privacy safeguards within complex healthcare infrastructures.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "enduring-operational-support",
    title: "Enduring Operational Support",
    description: "We deliver scalable platforms built for healthcare advancement.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const edtechSolutionCards: SolutionCard[] = [
  {
    id: "strategic-learning-partner",
    title: "Strategic Learning Technology Partner",
    description: "We empower institutions through adaptable and engaging digital ecosystems.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "growth-oriented-platform",
    title: "Growth-Oriented Platform Development",
    description: "Our collaboration supports institutional expansion across digital learning environments.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "engagement-centered-innovation",
    title: "Engagement-Centered Innovation",
    description: "We align technology with impactful and measurable learning experiences.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "secure-digital-foundations",
    title: "Secure Digital Foundations",
    description: "We ensure dependable systems supporting institutional credibility worldwide.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

const startupsSolutionCards: SolutionCard[] = [
  {
    id: "innovation-acceleration-partner",
    title: "Innovation Acceleration Partner",
    description: "We help founders transform bold ideas into scalable platforms.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "agile-growth-enablement",
    title: "Agile Growth Enablement",
    description: "Our partnership supports rapid iteration and market adaptability.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "technical-strategy-advisory",
    title: "Technical Strategy Advisory",
    description: "We guide architecture decisions aligned with ambitious growth objectives.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "investor-ready-infrastructure",
    title: "Investor-Ready Infrastructure",
    description: "We build reliable systems strengthening operational and investor confidence.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];

export const solutionCardsByIndustry: Record<string, SolutionCard[]> = {
  "real-estate": realEstateSolutionCards,
  "travel-hospitality": travelHospitalitySolutionCards,
  "oil-gas-energy": oilGasEnergySolutionCards,
  "banking-fintech": bankingFintechSolutionCards,
  healthcare: healthcareSolutionCards,
  edtech: edtechSolutionCards,
  startups: startupsSolutionCards,
};

export function getSolutionCardsForIndustry(industryId: string): SolutionCard[] {
  return solutionCardsByIndustry[industryId] ?? realEstateSolutionCards;
}

/** @deprecated Use getSolutionCardsForIndustry(industryId) */
export const solutionCards = realEstateSolutionCards;
