"use client";

import { useState } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import {valueCardGradient,valueCardBaseClass,valueCardBorderClass,valueCardOverlayClass,valueCardIconBorderClass,valueCardDescColorClass,valueCardTitleClassCompact,valueCardDescClass2,valueCardContentClassCompact,valueCardIconWrapperBaseClass,} from "@/styles/valueCardStyles";
import { SectionHeading } from "@/components/shared/headings";
import { getGrowthBarrierForIndustry } from "@/data/industries";

interface GrowthBarrierProps {
  industryId?: string;
}
export default function GrowthBarrier({ industryId = "real-estate" }: GrowthBarrierProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { subtitle, title, description, buttonText, cards } = getGrowthBarrierForIndustry(industryId);
  return (
    <section
      className={combine(
        "bg-white relative overflow-hidden mb-12 md:mb-16 lg:mb-20 xl:mb-24",
        styles.sectionPadding,
      )}
      aria-labelledby="growth-barriers-heading"
    >
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-28 items-center">
          <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start md:justify-between md:gap-6">
            <div>
              <SectionHeading subtitle={subtitle} title={title} />
              <p
                className={combine(
                  styles.p2,
                  "text-blue leading-relaxed mb-6 md:mb-0 lg:mb-6 font-inter -mt-6"
                )}
              >
                {description}
              </p>
            </div>
            <Button href="/contact" variant="accent" size="lg" showArrow>
              {buttonText}
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {cards.map((card, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={card.id}
                    className={combine(valueCardBaseClass, valueCardBorderClass(isActive))}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className={combine(valueCardOverlayClass, isActive ? "opacity-100" : "opacity-0")}>
                      <div className={valueCardGradient} />
                    </div>
                    <div className={valueCardContentClassCompact}>
                      <div className={combine(valueCardIconWrapperBaseClass, valueCardIconBorderClass(isActive))}>
                        <Image
                          src={card.icon}
                          alt="Growth Barriers Icons"
                          width={40}
                          height={40}
                          className="w-5 h-5 md:w-9 md:h-9 object-contain"
                          unoptimized={card.icon.includes("cloudinary.com")}
                        />
                      </div>
                      <h3 className={valueCardTitleClassCompact}>{card.title}</h3>
                      <p className={combine(valueCardDescClass2, valueCardDescColorClass(isActive))}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
