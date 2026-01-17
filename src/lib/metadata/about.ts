import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About Us",
  description:
    "Learn about Qubitars Technology - our mission, vision, core values, and the team behind innovative AI solutions and digital transformation services. Discover what makes us your trusted technology partner.",
  keywords: [
    "About Qubitars",
    "Company Mission",
    "Technology Team",
    "Software Development Company",
    "AI Solutions Provider",
    "Digital Transformation",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/about",
    title: "About Us - Qubitars Technology",
    description:
      "Learn about Qubitars Technology - our mission, vision, core values, and the team behind innovative AI solutions.",
  },
  twitter: {
    ...defaultTwitter,
    title: "About Us - Qubitars Technology",
    description:
      "Learn about Qubitars Technology - our mission, vision, core values, and the team behind innovative AI solutions.",
  },
};
