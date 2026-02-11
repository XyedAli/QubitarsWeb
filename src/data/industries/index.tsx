import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

export interface HeroIndustryCard {
  id: string;
  name: string;
  icon: React.ComponentType<{ width: number; height: number; className?: string }>;
  title: string;
  description: string;
}

/** Hero section cards data – industries carousel */
export const heroIndustriesCards: HeroIndustryCard[] = [
  {
    id: "real-estate-1",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
  },
  {
    id: "real-estate-2",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
  },
  {
    id: "real-estate-3",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
  },
  {
    id: "real-estate-4",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
  },
  {
    id: "real-estate-5",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
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
    title: "Regulatory Compliance Risks",
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
