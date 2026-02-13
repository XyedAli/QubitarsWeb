import { getIndustriesStateIcons } from "@/lib/assets/icons";

export interface GrowthBarrierCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GrowthBarrierSection {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  cards: GrowthBarrierCard[];
}

const icons = getIndustriesStateIcons();

const realEstateBarrier: GrowthBarrierSection = {
  subtitle: "Growth Barriers",
  title: "Holding Real Estate Back",
  description:
    "Real estate businesses face structural and operational challenges that slow growth, reduce efficiency, and limit scalability in an increasingly digital market.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "realtime-data", icon: icons.stateicon1, title: "Lack Real-Time Data", description: "No centralized access to live property, market, or customer data hindering decisions." },
    { id: "compliance", icon: icons.stateicon2, title: "Regulatory Risks", description: "Navigating regulations and ownership documents is time-consuming and error-prone digitally without automation." },
    { id: "proptech", icon: icons.stateicon3, title: "Slow PropTech Adoption", description: "Many firms delay digitization, missing AI-driven efficiencies and smart management opportunities today." },
    { id: "disconnected", icon: icons.stateicon4, title: "Disconnected and Manual", description: "Real estate firms rely on outdated systems, causing fragmentation and transaction delays across teams." },
  ],
};

const travelHospitalityBarrier: GrowthBarrierSection = {
  subtitle: "Experience Gaps",
  title: "Slowing Guest-Centric Growth",
  description:
    "Hospitality brands face operational and digital friction that limits personalization, reduces efficiency, and impacts long-term profitability in a competitive global market.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "evolving-expectations", icon: icons.travelicon1, title: "Customer Expectations", description: "Travelers expect seamless, personalized journeys—delivering that without overextending is a challenge." },
    { id: "operational-complexity", icon: icons.travelicon2, title: "Operational Complexity", description: "Fragmented systems and manual processes slow efficiency and make it hard for providers to scale and innovate." },
    { id: "data-privacy-security", icon: icons.travelicon3, title: "Data Privacy & Security", description: "Sensitive customer data demands strong compliance and safeguards to maintain trust." },
    { id: "competitive-disruption", icon: icons.travelicon4, title: "Competitive Disruption", description: "Digital-first platforms and shifting traveler behaviors push traditional players to reimagine their value." },
  ],
};

const oilGasEnergyBarrier: GrowthBarrierSection = {
  subtitle: "Operational Strain",
  title: "Constraining Energy Expansion",
  description:
    "Energy enterprises encounter infrastructure complexity, compliance exposure, and efficiency gaps that restrict performance and long-term sustainability.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "energy-transition", icon: icons.oilicon1, title: "Energy Transition Pressure", description: "Shifting toward renewables while keeping fossil fuel operations profitable is a delicate balancing act." },
    { id: "regulatory-complexity", icon: icons.oilicon2, title: "Regulatory Complexity", description: "Constantly evolving policies and compliance requirements add operational strain." },
    { id: "safety-risks", icon: icons.oilicon3, title: "Operational Safety Risks", description: "Hazard-prone environments demand robust safety and monitoring systems." },
    { id: "volatile-market", icon: icons.oilicon4, title: "Volatile Market Conditions", description: "Unpredictable global demand, geopolitical factors, and fluctuating energy prices make long-term planning challenging." },
  ],
};

const bankingFintechBarrier: GrowthBarrierSection = {
  subtitle: "Competitive Pressure",
  title: "Challenging Financial Innovationh",
  description:
    "Financial institutions face digital disruption, regulatory scrutiny, and rising customer demands that threaten agility and long-term profitability.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "evolving-trust", icon: icons.fintechicon1, title: "Evolving Customer Trust", description: "Clients demand transparency, security, and seamless digital banking experiences." },
    { id: "cybersecurity-threats", icon: icons.fintechicon2, title: "Cybersecurity Threats", description: "Rising digital fraud and data breaches put customer confidence at risk." },
    { id: "regulatory-pressure", icon: icons.fintechicon3, title: "Regulatory Pressure", description: "Constantly evolving compliance demands slow innovation and restrict operational agility." },
    { id: "tech-disruption", icon: icons.fintechicon4, title: "Tech Disruption", description: "Emerging fintech startups disrupt traditional models with faster, more agile solutions." },
  ],
};

const healthcareBarrier: GrowthBarrierSection = {
  subtitle: "Care Inefficiencies",
  title: "Hindering Clinical Performance",
  description:
    "Healthcare providers struggle with coordination gaps, administrative overload, and technology fragmentation that affect outcomes and financial sustainability.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "patient-experience-gaps", icon: icons.careicon1, title: "Patient Experience Gaps", description: "Patients expect personalized care, but fragmented systems create inefficiencies." },
    { id: "data-security-concerns", icon: icons.careicon2, title: "Data Security Concerns", description: "Sensitive health information is increasingly exposed to rising cybersecurity threats." },
    { id: "rising-costs", icon: icons.careicon3, title: "Rising Costs", description: "Delivering affordable care while maintaining quality remains a constant struggle." },
    { id: "technology-integration", icon: icons.careicon4, title: "Technology Integration", description: "Legacy systems often hinder smooth adoption of modern healthcare tools." },
  ],
};

const edtechBarrier: GrowthBarrierSection = {
  subtitle: "Learning Barriers",
  title: "Restricting Educational Impact",
  description:
    "Educational institutions encounter scalability challenges, engagement gaps, and administrative inefficiencies that limit measurable learning outcomes.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "learner-engagement", icon: icons.edtechicon1, title: "Learner Engagement", description: "Keeping students motivated in digital learning environments is a major challenge." },
    { id: "digital-divide", icon: icons.edtechicon2, title: "Digital Divide", description: "Unequal access to devices and internet limits learning opportunities." },
    { id: "scalability-issues", icon: icons.edtechicon3, title: "Scalability Issues", description: "Platforms must handle large user volumes without compromising experience." },
    { id: "content-relevance", icon: icons.edtechicon4, title: "Content Relevance", description: "Ensuring learning material remains up-to-date and industry-relevant is critical." },
  ],
};

const startupsBarrier: GrowthBarrierSection = {
  subtitle: "Scaling Obstacles",
  title: "Slowing Market Momentum",
  description:
    "Emerging ventures face infrastructure limitations, funding pressure, and rapid competition that challenge scalability and sustainable growth.",
  buttonText: "Discuss Your Needs",
  cards: [
    { id: "scaling-smartly", icon: icons.startupicon1, title: "Scaling Smartly", description: "Growing fast without losing focus or burning resources is a delicate challenge." },
    { id: "funding-uncertainty", icon: icons.startupicon2, title: "Funding Uncertainty", description: "Securing capital is increasingly unpredictable in today's competitive landscape." },
    { id: "talent-retention", icon: icons.startupicon3, title: "Talent Retention", description: "Startups face difficulty holding onto top talent amid competition from larger firms." },
    { id: "market-differentiation", icon: icons.startupicon4, title: "Market Differentiation", description: "Standing out in crowded markets requires sharp positioning and innovation." },
  ],
};

export const growthBarrierByIndustry: Record<string, GrowthBarrierSection> = {
  "real-estate": realEstateBarrier,
  "travel-hospitality": travelHospitalityBarrier,
  "oil-gas-energy": oilGasEnergyBarrier,
  "banking-fintech": bankingFintechBarrier,
  healthcare: healthcareBarrier,
  edtech: edtechBarrier,
  startups: startupsBarrier,
};

export function getGrowthBarrierForIndustry(industryId: string): GrowthBarrierSection {
  return growthBarrierByIndustry[industryId] ?? growthBarrierByIndustry["real-estate"] ?? realEstateBarrier;
}

/** @deprecated Use getGrowthBarrierForIndustry(industryId) */
export const growthBarrierHeading = {
  subtitle: realEstateBarrier.subtitle,
  title: realEstateBarrier.title,
  description: realEstateBarrier.description,
};

/** @deprecated Use getGrowthBarrierForIndustry(industryId).cards */
export const growthBarrierCards: GrowthBarrierCard[] = realEstateBarrier.cards;
