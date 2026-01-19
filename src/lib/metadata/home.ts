import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Qubitars Technology - Your Partner in Digital Innovation",
    template: "%s | Qubitars Technology",
  },
  description:
    "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services. Partner with us for innovative technology solutions.",
  keywords: [
    "AI Development",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Digital Transformation",
    "Custom Software",
    "AI Solutions",
    "Technology Consulting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/",
    title: "Qubitars Technology - Your Partner in Digital Innovation",
    description:
      "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Qubitars Technology - Your Partner in Digital Innovation",
    description:
      "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services.",
  },
};
