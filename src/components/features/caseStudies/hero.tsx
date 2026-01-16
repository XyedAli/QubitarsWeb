"use client";

import HeroSection from "@/components/shared/heroSection";
import { aboutVideos } from "@/lib/assets/videos";

const CaseStudies = () => {
  return (
    <HeroSection
      title="Bold Solutions, Tangible Results"
      descriptions={[
        "We don't just build products — we build trust. Our case studies share the journeys of businesses that embraced change, reimagined their processes, and achieved game-changing results.",
        "Whether it's improving operations, cutting costs, or creating entirely new experiences, these stories prove what's possible with the right team by your side.",
      ]}
      backgroundType="image"
      backgroundImage={"/assets/images/about/herobg.png"}
      textColor="blue"
      objectPosition="right"
    />
  );
};

export default CaseStudies;
