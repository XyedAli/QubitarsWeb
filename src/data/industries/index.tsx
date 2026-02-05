import React from "react";
import { ChartNoAxesCombined, MapPin, Atom, Diameter, HeartPlus, GraduationCap, Rocket } from "lucide-react";

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
    id: "real-estate",
    name: "Real Estate",
    icon: ChartNoAxesCombined,
    title: "Real Estate Solutions",
    description:
      "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: MapPin,
    title: "Travel & Hospitality Innovation",
    description:
      "Elevating guest experiences through smart technology solutions. We help travel businesses modernize operations and deliver exceptional service.",
  },
  {
    id: "energy",
    name: "Oil Gas & Energy",
    icon: Atom,
    title: "Energy Sector Technology",
    description:
      "Powering the future of energy with advanced digital solutions. Our expertise helps optimize operations and drive sustainable practices.",
  },
  {
    id: "banking",
    name: "Banking & FinTech",
    icon: Diameter,
    title: "FinTech Solutions",
    description:
      "Revolutionizing financial services with cutting-edge technology. We enable secure, efficient, and user-friendly banking experiences.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPlus,
    title: "Healthcare Innovation",
    description:
      "Advancing healthcare delivery through digital transformation. Our solutions improve patient care and streamline medical operations.",
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: GraduationCap,
    title: "Educational Technology",
    description:
      "Revolutionizing learning through innovative digital solutions. We help create engaging and effective educational experiences.",
  },
  {
    id: "startups",
    name: "Startups",
    icon: Rocket,
    title: "Startups Solutions",
    description:
      "Helping startups build and scale their businesses through innovative digital solutions. We provide the right tools and expertise to help them succeed.",
  },
];
