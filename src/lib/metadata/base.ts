import type { Metadata } from "next";
import { globalSeoKeywords } from "./keywords";

/** Canonical & OG base URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.qubitars.com) */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubitars.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Qubitars Technology", url: siteUrl }],
  creator: "Qubitars Technology",
  publisher: "Qubitars Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add when available: google: "xxx", yandex: "xxx", bing: "xxx"
  },
  /** Fallback when a route does not use buildPageMetadata */
  keywords: globalSeoKeywords,
  category: "technology",
};

export const defaultOpenGraph = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Qubitars Technology",
  images: [
    {
      url: "/assets/images/navbar/Logo.png",
      width: 1200,
      height: 630,
      alt: "Qubitars Technology - Your Partner in Digital Innovation",
    },
  ],
};

export const defaultTwitter = {
  card: "summary_large_image" as const,
  title: "Qubitars Technology",
  description: "Your Partner in Digital Innovation - AI, custom software, web & mobile development.",
  images: ["/assets/images/navbar/Logo.png"],
};
