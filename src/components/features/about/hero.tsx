"use client";

import HeroSection from "@/components/shared/heroSection";
import { aboutImages } from "@/lib/assets/images";

const AboutHero = () => {
  return (
    <HeroSection
      title="Fresh Perspective for a Changing World"
      descriptions={[
        "We don’t just build products — we build trust. Our case studies share the journeys of businesses that embraced change, reimagined their processes, and achieved game-changing results.",
        "Whether it’s improving operations, cutting costs, or creating entirely new experiences, these stories prove what’s possible with the right team by your side.",
      ]}
      backgroundType="image"
      backgroundImage={aboutImages.heroBg}
      textColor="blue"
      objectPosition="right"
    />
  );
};

export default AboutHero;

