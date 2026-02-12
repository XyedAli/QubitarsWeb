import { getIndustriesStateIcons } from "@/lib/assets/icons";

export const growthBarrierHeading = {
  subtitle: "Growth Barriers",
  title: "Holding Real Estate Back",
  description:
    "Real estate businesses face structural and operational challenges that slow growth, reduce efficiency, and limit scalability in an increasingly digital market.",
};

export interface GrowthBarrierCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const icons = getIndustriesStateIcons();

export const growthBarrierCards: GrowthBarrierCard[] = [
  {
    id: "realtime-data",
    icon: icons.stateicon1,
    title: "Lack Real-Time Data",
    description:
      "No centralized access to live property, market, or customer data hindering decisions.",
  },
  {
    id: "compliance",
    icon: icons.stateicon2,
    title: "Regulatory Risks",
    description:
      "Navigating regulations and ownership documents is time-consuming and error-prone digitally without automation.",
  },
  {
    id: "proptech",
    icon: icons.stateicon3,
    title: "Slow PropTech Adoption",
    description:
      "Many firms delay digitization, missing AI-driven efficiencies and smart management opportunities today.",
  },
  {
    id: "disconnected",
    icon: icons.stateicon4,
    title: "Disconnected and Manual",
    description:
      "Real estate firms rely on outdated systems, causing fragmentation and transaction delays across teams.",
  },
];
