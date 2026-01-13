"use client";

import HeroSection from "@/components/shared/heroSection";
import { homeImages } from "@/lib/assets/images";

const Hero = () => {
  return (
    <HeroSection
      subtitle="Next-Gen Innovation"
      title={
        <>
          AI-Powered Ecosystems for<span className="hidden xl:inline"><br /></span> Global Companies
        </>
      }
      descriptions={[
        "We help companies across North America, the Middle East, Africa, and Asia Pacific automate operations and transform their asset lifecycle with intelligent software.",
      ]}
      backgroundType="pattern"
      patternImages={{
        mobile: homeImages.bgLines1,
        desktop: homeImages.bgLines,
      }}
      textColor="white"
      titleUppercase={true}
      awardsSection={{
        label: "Awards & Certifications",
        awards: [
          {
            src: homeImages.himg1,
            alt: "Award Logo 1",
            width: 160,
            height: 50,
            className: "h-[6vw] md:h-4 lg:h-4 xl:h-5 [1440px]:h-5 2xl:h-6 [1920px]:h-8 w-auto",
          },
          {
            src: homeImages.himg2,
            alt: "Award Logo 2",
            width: 120,
            height: 40,
            className: "h-[8vw] md:h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto",
          },
          {
            src: homeImages.himg3,
            alt: "Award Logo 3",
            width: 120,
            height: 40,
            className: "h-[8vw] md:h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto",
          },
          {
            src: homeImages.himg4,
            alt: "Award Logo 4",
            width: 120,
            height: 40,
            className: "h-[8vw] md:h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto",
          },
        ],
        ministryText: "Ministry of Information Technology & Telecom",
        governmentText: "Government of Pakistan",
      }}
    />
  );
};

export default Hero;

