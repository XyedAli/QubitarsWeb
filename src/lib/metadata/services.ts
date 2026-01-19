import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: "Our Services",
  description:
    "Explore Qubitars Technology's comprehensive range of services including AI development, custom software development, web and mobile app development, digital transformation, and technology consulting.",
  keywords: [
    "AI Development Services",
    "Custom Software Development",
    "Web Development Services",
    "Mobile App Development",
    "Digital Transformation",
    "Technology Consulting",
    "Software Solutions",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/services",
    title: "Our Services - Qubitars Technology",
    description:
      "Explore Qubitars Technology's comprehensive range of services including AI development, custom software development, and digital transformation.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Our Services - Qubitars Technology",
    description:
      "Explore Qubitars Technology's comprehensive range of services including AI development, custom software development, and digital transformation.",
  },
};
