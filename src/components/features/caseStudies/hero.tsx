"use client";

import HeroSection from "@/components/shared/heroSection";
import { getCaseStudiesCloudinaryImages } from "@/lib/assets/images";

export default function CaseStudies() {
  const caseStudiesImages = getCaseStudiesCloudinaryImages();
  const backgroundImage = caseStudiesImages.caseStudiesBg;

  return (
    <HeroSection
      variant="blog"
      title={
        <>
          Ideas Turned Into {" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Outcomes
          </span>
        </>
      }
      descriptions={[
        "Proven results delivered through strategy-led digital execution.",
      ]}
      backgroundType="image"
      backgroundImage={backgroundImage}
      overlayTag="CASE STUDIES"
      overlayTitle="Ideas Turned Into Outcomes"
      overlayDescription="These success stories demonstrate our commitment to building solutions that scale, perform, and deliver ROI."
      buttonText="Book a Consultation - it's free"
    />
  );
}
