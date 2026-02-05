import React from "react";
import { ChartNoAxesCombined, GraduationCap, Rocket } from "lucide-react";

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
