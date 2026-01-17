import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const caseStudiesMetadata: Metadata = {
  ...baseMetadata,
  title: "Case Studies",
  description:
    "Explore Qubitars Technology's portfolio of successful projects and case studies. See how we've helped businesses transform with AI solutions, custom software development, and digital innovation.",
  keywords: [
    "Case Studies",
    "Portfolio",
    "Project Examples",
    "Success Stories",
    "AI Projects",
    "Software Development Projects",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/case-studies",
    title: "Case Studies - Qubitars Technology",
    description:
      "Explore Qubitars Technology's portfolio of successful projects and case studies showcasing AI solutions and digital innovation.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Case Studies - Qubitars Technology",
    description:
      "Explore Qubitars Technology's portfolio of successful projects and case studies showcasing AI solutions and digital innovation.",
  },
};
