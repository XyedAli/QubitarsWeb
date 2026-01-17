import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

export const blogsMetadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description:
    "Read the latest insights, articles, and updates from Qubitars Technology on AI development, software engineering, digital transformation, technology trends, and industry best practices.",
  keywords: [
    "Technology Blog",
    "AI Articles",
    "Software Development Blog",
    "Tech Insights",
    "Digital Transformation",
    "Technology Trends",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    ...defaultOpenGraph,
    url: "/blogs",
    title: "Blog - Qubitars Technology",
    description:
      "Read the latest insights, articles, and updates from Qubitars Technology on AI development, software engineering, and technology trends.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Blog - Qubitars Technology",
    description:
      "Read the latest insights, articles, and updates from Qubitars Technology on AI development, software engineering, and technology trends.",
  },
};
