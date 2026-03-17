"use client";

import HeroSection from "@/components/shared/heroSection";
import { careersVideos } from "@/lib/assets/videos";

export default function CareersHero() {
  return (
    <HeroSection
      variant="blog"
      textColor="blue"
      title={
        <>
          Where Passion Meets{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Opportunity
          </span>
        </>
      }
      descriptions={["Turn your curiosity into expertise and your skills into real-world impact."]}
      backgroundType="video"
      backgroundVideo={careersVideos.hero}
      overlayTag="CAREERS"
      overlayTitle="Empowering Talent. Building the Future."
      overlayDescription="Join a team where innovation, collaboration, and growth are part of everyday life."
      buttonText="View Opportunities"
    />
  );
}
