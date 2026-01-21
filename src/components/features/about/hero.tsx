"use client";

import HeroSection from "@/components/shared/heroSection";

export default function AboutHero() {
  return (
    <HeroSection
      variant="blog"
      title={
        <>
          Bold Solutions, tangible{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Results
          </span>
        </>
      }
      descriptions={[
        "Qubitars exists to help businesses turn bold ideas into enduring digital value.",
      ]}
      backgroundType="image"
      backgroundImage="/assets/images/about/herobg.png"
      overlayTag="ABOUT US"
      overlayTitle="Building Tomorrow’s Digital Foundations"
      overlayDescription="At Qubitars, strategy, design, and engineering work as one to turn ambitious ideas into reliable, future-ready solutions."
      buttonText="Book a Consultation - it's free"
    />
  );
}
