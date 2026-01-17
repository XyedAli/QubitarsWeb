import type { Metadata } from "next";
import { DM_Sans, Poppins, Fjalla_One, Outfit, Bebas_Neue, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Awards, Footer, WorkTogether } from "@/components/layout";

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

import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;

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
        {/* <BookConsultationButton /> */}
        <main className="flex-1 min-h-screeen overflow-hidden ">
          {children}
        </main>
        <Awards />
        <WorkTogether />
        <Footer />
      </body>
    </html>
  );
}
