import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubitars.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Qubitars Technology" }],
  creator: "Qubitars Technology",
  publisher: "Qubitars Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
      alt: "Qubitars Technology",
    },
  ],
};

export const defaultTwitter = {
  card: "summary_large_image" as const,
  images: ["/assets/images/navbar/Logo.png"],
};
