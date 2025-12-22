import type { Metadata } from "next";
import { DM_Sans, Poppins, Fjalla_One, Outfit, Bebas_Neue, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout";
import BookConsultationButton from "@/components/shared/ui/bookConsultationButton";

// Optimize font loading with display swap for better performance
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const satoshi = localFont({
  src: "./fonts/Satoshi.otf",
  style: "normal",
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
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
  authors: [{ name: "Qubitars Technology" }],
  creator: "Qubitars Technology",
  publisher: "Qubitars Technology",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubitars.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Qubitars Technology",
    title: "Qubitars Technology - Your Partner in Digital Innovation",
    description:
      "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services.",
    images: [
      {
        url: "/assets/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Qubitars Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubitars Technology - Your Partner in Digital Innovation",
    description:
      "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services.",
    images: ["/assets/images/Logo.png"],
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${dmSans.variable} ${poppins.variable} ${satoshi.variable} ${fjallaOne.variable} ${outfit.variable} ${bebasNeue.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <BookConsultationButton />
        <main className="flex-1 min-h-screeen overflow-hidden ">
          {children}
        </main>
      </body>
    </html>
  );
}
