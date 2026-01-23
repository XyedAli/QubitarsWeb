"use client";

import HeroSection from "@/components/shared/heroSection";
import { getBlogCloudinaryImages } from "@/lib/assets/images";

export default function BlogHero() {
  const blogImages = getBlogCloudinaryImages();
  const backgroundImage = blogImages.blogBg;

  return (
    <HeroSection
      variant="blog"
      title={
        <>
          Insights That Move{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Businesses
          </span>
        </>
      }
      descriptions={[
        "Lessons, trends, and strategies from the tech frontlines.",
      ]}
      backgroundType="image"
      backgroundImage={backgroundImage}
      overlayTag="BLOGS"
      overlayTitle="Knowledge Built For Growth"
      overlayDescription="Breaking down complex technology into practical business value."
      buttonText="Book a Consultation - it's free"
    />
  );
}
