"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { styles, combine } from "@/styles/style";
import {valueCardGradient,valueCardBaseClass,valueCardBorderClass,valueCardOverlayClass,valueCardIconBorderClass,valueCardDescColorClass,valueCardTitleClassCompact,valueCardDescClass,valueCardContentClassCompact,valueCardIconWrapperBaseClass,} from "@/styles/valueCardStyles";
import { SectionHeading } from "@/components/shared/headings";
import { growthBarrierCards } from "@/data/industries";

export default function GrowthBarrier() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={combine(
        "bg-white relative overflow-hidden",
        styles.sectionPadding,
        styles.sectionPaddingY
      )}
      aria-labelledby="growth-barriers-heading"
    >
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-28 items-center">
          {/* Left column: subtitle, heading with highlight, paragraph, CTA */}
          <div className="lg:col-span-5">
          <SectionHeading subtitle="Growth Barriers" title="Holding Real Estate Back" />
            <p
              className={combine(
                styles.p2,
                "text-blue leading-relaxed mb-6 md:mb-9 font-inter -mt-6"
              )}
            >
              Real estate businesses face structural and operational challenges that slow growth,
              reduce efficiency, and limit scalability in an increasingly digital market.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-lg bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300 w-fit"
            >
              Discuss Your Needs
              <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right column: 2x2 grid — shared value card styles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {growthBarrierCards.map((card, index) => {
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
                          alt=""
                          width={40}
                          height={40}
                          className="w-5 h-5 md:w-9 md:h-9 object-contain"
                          unoptimized={card.icon.includes("cloudinary.com")}
                        />
                      </div>
                      <h3 className={valueCardTitleClassCompact}>{card.title}</h3>
                      <p className={combine(valueCardDescClass, valueCardDescColorClass(isActive))}>
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
