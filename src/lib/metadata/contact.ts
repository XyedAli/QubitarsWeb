import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: "Contact Us",
  description:
    "Get in touch with Qubitars Technology. Contact our team for AI solutions, custom software development, web and mobile app development, and digital transformation services. We're here to help transform your business.",
  keywords: [
    "Contact Qubitars",
    "Get in Touch",
    "Technology Consulting",
    "Software Development Contact",
    "AI Solutions Contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/contact",
    title: "Contact Us - Qubitars Technology",
    description:
      "Get in touch with Qubitars Technology for AI solutions, custom software development, and digital transformation services.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Contact Us - Qubitars Technology",
    description:
      "Get in touch with Qubitars Technology for AI solutions, custom software development, and digital transformation services.",
  },
};
