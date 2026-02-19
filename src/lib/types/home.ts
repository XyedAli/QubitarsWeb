import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImageSource = string | StaticImageData | any;

/** Section heading (headings.tsx) */
export interface SectionHeadingProps {
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  subtitleColor?: string;
  titleColor?: string;
}

/** FAQ item (FAQSection) */
export interface FAQSectionItem {
  question: string;
  answer: string;
  link?: string;
  href?: string;
}

/** FAQ section props */
export interface FAQSectionProps {
  data: FAQSectionItem[];
  subtitle: string;
  title: string;
}

/** Hero award item */
export interface HeroAward {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className: string;
}

/** Hero section props */
export interface HeroSectionProps {
  variant?: "default" | "blog";
  title: string | ReactNode;
  descriptions: string[];
  subtitle?: string;
  buttonText?: string;
  backgroundType: "image" | "color" | "pattern" | "video";
  backgroundImage?: ImageSource;
  backgroundVideo?: string;
  backgroundColor?: string;
  patternImages?: { mobile?: ImageSource; desktop?: ImageSource };
  textColor?: "white" | "blue";
  awardsSection?: {
    label: string;
    awards: HeroAward[];
    ministryText?: string;
    governmentText?: string;
  };
  objectPosition?: string;
  titleUppercase?: boolean;
  overlayTag?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  customHeightClass?: { mac?: string; nonMac?: string };
}
