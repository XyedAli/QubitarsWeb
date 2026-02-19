"use client";

import HeroSection from "@/components/shared/heroSection";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { heroSection } from "@/data/engModel";

export default function EngModalHero() {
  const images = getEngagementModelCloudinaryImages();
  return (
    <HeroSection
      variant="blog"
      title={
        <>
          {heroSection.title}{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            {heroSection.titleHighlight}
          </span>
        </>
      }
      descriptions={heroSection.descriptions}
      backgroundType="image"
      backgroundImage={images.modelBg}
      overlayTag={heroSection.overlayTag}
      overlayTitle={heroSection.overlayTitle}
      overlayDescription={heroSection.overlayDescription}
      buttonText={heroSection.buttonText}
      textColor="white"
    />
  );
}
