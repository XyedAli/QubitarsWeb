"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { coreValues } from "@/data";

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={`bg-white relative overflow-hidden ${styles.sectionPadding}`}>
          <SectionHeading
            subtitle="What Drives Us"
            title="Values Powering Our Vision"
          />
      <div className={`max-w-5xl mx-auto pt-12 md:pt-16 lg:pt-20 xl:pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24`}>
        {/* Heading */}
      

        {/* Cards Grid: 2 rows of 3 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`group relative bg-[#FAFAFA] rounded-2xl transition-all duration-300 border-1 h-full flex flex-col cursor-pointer ${isActive
                  ? "border-[#F05C22] "
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Orange Gradient Overlay from Bottom */}
                <div className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity pointer-events-none rounded-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-3 md:p-5 lg:p-7 xl:p-9">
                  {/* Icon Box - Before Title */}
                  <div className={`w-16 h-16 md:w-17 md:h-17 lg:w-20 lg:h-20 rounded-full bg-white border-2 transition-all duration-300 ${styles.flexCenter} mb-4 md:mb-5 lg:mb-6 ${isActive ? "border-[#F05C22]" : "border-transparent group-hover:border-[#F05C22]"
                    }`}>
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={48}
                      height={48}
                      className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-[17px] md:text-[22px] lg:text-[28px] text-blue font-bold mb-3 lg:mb-4 font-outfit leading-tight"
                    }`}>
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-[12px] md:text-[14px] lg:text-[16px] lg:text-[17px] leading-relaxed font-inter ${isActive ? "text-gray-700" : "text-gray-600"
                    }`}>
                    {value.description}
                  </p>
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