"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { styles, combine } from "@/styles/style";
import { getAboutCopyForIndustry } from "@/data/industries";

interface IndustriesAboutProps {
  industryId?: string;
}
export default function IndustriesAbout({ industryId = "real-estate" }: IndustriesAboutProps) {
  const copy = getAboutCopyForIndustry(industryId);

  return (
    <section
      className={combine(styles.sectionPadding, styles.sectionPaddingY, "bg-white")}
      aria-labelledby="industries-about-heading"
    >
      <div>
        <div
          id="industries-about-heading"
          className={combine("max-w-6xl mx-auto text-center", styles.p1, "font-outfit text-blue leading-relaxed")}
        >
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            containerClassName="!m-0"
            textClassName="font-outfit text-blue leading-relaxed !font-medium !text-[20px] md:!text-[26px] lg:!text-[32px] max-w-5xl mx-auto"
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
          >
            {copy}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
