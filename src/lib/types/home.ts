export interface HeroIconSource {
  src: string;
  alt: string;
}

export interface HeroIconConfig extends HeroIconSource {
  iconId: string;
  label: string;
  className: string;
  delay: number;
}

export interface Logo {
  src: string;
  alt: string;
}

export type LogoGrid = Logo[][];

export interface ChooseUsCard {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  icon?: "rocket" | "eye" | "LuGitCompareArrows";
  imageSrc?: string;
}

export interface ChooseUsContent {
  heading: string;
  subheading: string;
  cards: ChooseUsCard[];
  primaryImage: string;
  secondaryImages: string[];
}

export interface ExpertService {
  name: string;
  description: string;
  image: string;
}

