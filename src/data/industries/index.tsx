import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

export interface HeroIndustryCard {
  id: string;
  name: string;
  icon: React.ComponentType<{ width: number; height: number; className?: string }>;
  title: string;
  description: string;
  buttonText: string;
}

/** Hero section cards data – industries carousel */
export const heroIndustriesCards: HeroIndustryCard[] = [
  {
    id: "real-estate-1",
    name: "Digital Advantage",
    icon: ChartNoAxesCombined,
    title: "Built For Real Estate",
    description:
      "From property data to client workflows, we modernize how real estate teams operate, collaborate, and deliver results.",
    buttonText: "See How It Works",
  },
  {
    id: "real-estate-2",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Smarter Property Operations",
    description:
      "We help real estate businesses replace fragmented processes with connected, technology-driven operations that scale confidently.",
    buttonText: "Book a Free Consultation",
  },
  {
    id: "real-estate-3",
    name: "Intelligent Growth",
    icon: ChartNoAxesCombined,
    title: "Data-Driven Real Estate Decisions",
    description:
      "Centralized data, automated workflows, and real-time insights empower faster decisions and reduced operational friction.",
    buttonText: "View Use Cases",
  },
  {
    id: "real-estate-4",
    name: "Trusted Technology",
    icon: ChartNoAxesCombined,
    title: "Scalable Real Estate Platforms",
    description:
      "Our solutions grow with your portfolio, supporting expansion, compliance, and long-term operational reliability.",
    buttonText: "Talk to Experts",
  },
  {
    id: "real-estate-5",
    name: "Business Impact",
    icon: ChartNoAxesCombined,
    title: "Results Built to Scale",
    description:
      "We partner with real estate leaders to deliver measurable outcomes through secure, efficient, and future-ready systems.",
    buttonText: "Start the Conversation",
  },
];

/** Growth Barriers section – card data (icons resolved from Cloudinary) */
export interface GrowthBarrierCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const _growthBarrierIcons = getIndustriesStateIcons();

export const growthBarrierCards: GrowthBarrierCard[] = [
  {
    id: "realtime-data",
    icon: _growthBarrierIcons.stateicon1,
    title: "Lack Real-Time Data",
    description:
      "No centralized access to live property, market, or customer data hindering decisions.",
  },
  {
    id: "compliance",
    icon: _growthBarrierIcons.stateicon2,
    title: "Regulatory Risks",
    description:
      "Navigating regulations and ownership documents is time-consuming and error-prone digitally without automation.",
  },
  {
    id: "proptech",
    icon: _growthBarrierIcons.stateicon3,
    title: "Slow PropTech Adoption",
    description:
      "Many firms delay digitization, missing AI-driven efficiencies and smart management opportunities today.",
  },
  {
    id: "disconnected",
    icon: _growthBarrierIcons.stateicon4,
    title: "Disconnected and Manual",
    description:
      "Real estate firms rely on outdated systems, causing fragmentation and transaction delays across teams.",
  },
];

/** Solutions Aligned To Outcomes – state icons 5–8, ellipse style */
export const solutionCards = [
  {
    id: "built-around",
    icon: _growthBarrierIcons.stateicon5,
    title: "Built Around Your Business",
    description:
      "Qubitars builds tailored real estate platforms aligned workflows.",
  },
  {
    id: "scale-without-limits",
    icon: _growthBarrierIcons.stateicon6,
    title: "Scale Without Limits",
    description:
      "Scalable platforms grow with your business, enabling modular expansion.",
  },
  {
    id: "simplify-complex",
    icon: _growthBarrierIcons.stateicon7,
    title: "Simplify the Complex",
    description:
      "We streamline leasing, payments, messaging to reduce work.",
  },
  {
    id: "control-risk",
    icon: _growthBarrierIcons.stateicon8,
    title: "Control Risk with Confidence",
    description:
      "AI-driven alerts catch risks early, preventing costly losses.",
  },
];
