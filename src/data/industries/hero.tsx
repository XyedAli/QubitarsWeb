import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

export interface HeroIndustryCard {
  id: string;
  name: string;
  icon: React.ComponentType<{ width: number; height: number; className?: string }>;
  title: string;
  description: string;
  buttonText: string;
}

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
