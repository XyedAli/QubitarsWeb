"use client";

import HeroSection from "@/components/shared/heroSection";
import { getHomeHeroCloudinaryImages, getHomeCloudinaryImages } from "@/lib/assets/images";

const AWARD_SPECS = [
  { width: 160, height: 50, className: "h-[6vw] md:h-4 lg:h-4 xl:h-5 [1440px]:h-5 2xl:h-6 [1920px]:h-8 w-auto" },
  { width: 120, height: 40, className: "h-[8vw] md:h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto" },
];

const Hero = () => {
  const hero = getHomeHeroCloudinaryImages();
  const patterns = getHomeCloudinaryImages();
  const awards = [hero.himg1, hero.himg2, hero.himg3, hero.himg4].map((src, i) => ({
    src,
    alt: `Award Logo ${i + 1}`,
    ...AWARD_SPECS[i === 0 ? 0 : 1],
  }));

  return (
    <HeroSection
      subtitle="Next-Gen Innovation"
      title={<>AI-Powered Ecosystems for<span className="hidden xl:inline"><br /></span> Global Companies</>}
      descriptions={["We help companies across North America, the Middle East, Africa, and Asia Pacific automate operations and transform their asset lifecycle with intelligent software."]}
      backgroundType="pattern"
      patternImages={{ mobile: patterns.bgLines1, desktop: patterns.bgLines }}
      textColor="white"
      titleUppercase
      awardsSection={{
        label: "Awards & Certifications",
        awards,
        ministryText: "Ministry of Information Technology & Telecom",
        governmentText: "Government of Pakistan",
      }}
    />
  );
};

export default Hero;

