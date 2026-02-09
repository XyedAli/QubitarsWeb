"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { coreValues } from "@/data";

const CARD_GRADIENT = "absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white";
const TITLE_CLASS = "text-[17px] md:text-[22px] lg:text-[28px] text-blue font-bold mb-2 md:mb-3 lg:mb-4 font-outfit leading-tight";
const DESC_CLASS = "text-[12px] md:text-[14px] lg:text-[16px] lg:text-[17px] leading-relaxed font-inter";

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`bg-white relative overflow-hidden ${styles.sectionPadding} mt-9 md:mt-0`}>
      <SectionHeading subtitle="What Drives Us" title="Values Powering Our Vision" />
      <div className="max-w-5xl mx-auto pt-2 lg:pt-6 xl:pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`group relative bg-[#FAFAFA] rounded-2xl transition-all duration-300 border-1 h-full flex flex-col cursor-pointer ${isActive ? "border-[#F05C22]" : "border-gray-200 hover:border-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={`absolute inset-0 transition-opacity pointer-events-none rounded-2xl overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}>
                  <div className={CARD_GRADIENT} />
                </div>
                <div className="relative z-10 flex flex-col flex-1 p-3 md:p-5 lg:p-7 xl:p-9">
                  <div className={`w-15 h-15 md:w-17 md:h-17 lg:w-20 lg:h-20 rounded-full bg-white border-2 transition-all duration-300 ${styles.flexCenter} mb-3 md:mb-5 lg:mb-6 ${isActive ? "border-[#F05C22]" : "border-transparent group-hover:border-[#F05C22]"}`}>
                    <Image src={value.icon} alt={value.title} width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" unoptimized />
                  </div>
                  <h3 className={TITLE_CLASS}>{value.title}</h3>
                  <p className={`${DESC_CLASS} ${isActive ? "text-gray-700" : "text-gray-600"}`}>{value.description}</p>
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