"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { styles, combine } from "@/styles/style";

const COPY =
  "PropTech and data platforms are reshaping real estate. Firms seek streamlined transactions and seamless experiences for buyers, investors, and tenants. At Qubitars, we build digital foundations for growth—clarity, efficiency, lasting value.";

export default function IndustriesAbout() {
  return (
    <section
      className={combine(styles.sectionPadding, styles.sectionPaddingY, "bg-white")}
      aria-labelledby="industries-about-heading"
    >
      <div className={styles.container}>
        <div
          id="industries-about-heading"
          className={combine("max-w-4xl mx-auto text-center", styles.p1, "font-outfit text-blue leading-relaxed")}
        >
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            containerClassName="!m-0"
            textClassName={combine("font-outfit text-blue leading-relaxed font-normal !text-[15px] sm:!text-[16px] md:!text-[17px] lg:!text-[32px] max-w-4xl mx-auto")}
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
          >
            {COPY}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
