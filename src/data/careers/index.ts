import { MapPin, Atom, Diameter, HeartPlus, GraduationCap, Rocket, LucideIcon } from "lucide-react";

// Industry Interface
export interface Industry {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Industries Data
export const industries: Industry[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Travel & Hospitality",
    description: "Elevating guest experiences through smart technology solutions. We help travel businesses modernize operations and deliver exceptional service."
  },
  {
    id: 2,
    icon: Atom,
    title: "Oil Gas & Energy",
    description: "Powering the future of energy with advanced digital solutions. Our expertise helps optimize operations and drive sustainable practices."
  },
  {
    id: 3,
    icon: Diameter,
    title: "Banking & FinTech",
    description: "Revolutionizing financial services with cutting-edge technology. We enable secure, efficient, and user-friendly banking experiences."
  },
  {
    id: 4,
    icon: HeartPlus,
    title: "Healthcare",
    description: "Advancing healthcare delivery through digital transformation. Our solutions improve patient care and streamline medical operations."
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "EdTech",
    description: "Revolutionizing learning through innovative digital solutions. We help create engaging and effective educational experiences."
  },
  {
    id: 6,
    icon: Rocket,
    title: "Startups",
    description: "Empowering startups with scalable technology solutions. We help transform innovative ideas into successful digital products."
  }
];

// Legacy export for backward compatibility
export const careerValues = industries;
export type { Industry as CareerValue };
