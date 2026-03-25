"use client";

import { useState } from "react";
import Image from "next/image";
import { combine } from "@/styles/style";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { coreValues } from "@/data";
import { Button } from "@/components/shared/ui";
import { valueCardGradient, valueCardTitleClass, valueCardDescClass, valueCardBaseClass, valueCardBorderClass, valueCardOverlayClass, valueCardContentClass, valueCardIconWrapperBaseClass, valueCardIconBorderClass, valueCardDescColorClass, } from "@/styles/valueCardStyles";

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`bg-white relative overflow-hidden ${styles.sectionPadding} mt-9 md:mt-0`}>
      <div className="flex items-start justify-between">
      <SectionHeading subtitle="What Drives Us" title="Values Powering Our Vision" />
                <Button href="/careers" variant="accent" size="lg" showArrow>
                  Join Our Team
                </Button>
      </div>
      <div className="max-w-5xl mx-auto pt-2 lg:pt-6 xl:pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={combine(valueCardBaseClass, valueCardBorderClass(isActive))}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={combine(valueCardOverlayClass, isActive ? "opacity-100" : "opacity-0")}>
                  <div className={valueCardGradient} />
                </div>
                <div className={valueCardContentClass}>
                  <div className={combine(valueCardIconWrapperBaseClass, valueCardIconBorderClass(isActive))}>
                    <Image src={value.icon} alt={value.title} width={48} height={48} className="w-8 h-8 lg:w-10 lg:h-10 object-contain" unoptimized />
                  </div>
                  <h3 className={valueCardTitleClass}>{value.title}</h3>
                  <p className={combine(valueCardDescClass, valueCardDescColorClass(isActive))}>{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;