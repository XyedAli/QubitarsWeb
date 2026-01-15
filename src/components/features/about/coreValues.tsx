"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { aboutImages } from "@/lib/assets/images";

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: aboutImages.Aimg3,
    title: "Innovation",
    description: "We leverage emerging technologies to build future-ready solutions globally."
  },
  {
    icon: aboutImages.Aimg4,
    title: "Strive for Better",
    description: "Continuous improvement guides everything we create and deliver daily."
  },
  {
    icon: aboutImages.Aimg5,
    title: "Transparency",
    description: "Open and honest communication builds trust with clients always."
  },
  {
    icon: aboutImages.Aimg6,
    title: "Respect & Equality",
    description: "We value every voice and encourage collaboration across teams."
  },
  {
    icon: aboutImages.Aimg7,
    title: "Integrity",
    description: "We uphold ethical practices and keep our promises, always."
  },
  {
    icon: aboutImages.Aimg8,
    title: "Client Focus",
    description: "We solve real client challenges with measurable business results."
  }
];

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-white relative overflow-hidden mx-0 xl:mx-23">
      <div className={`${styles.sectionPadding} pt-12 md:pt-16 lg:pt-20 xl:pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24`}>
        {/* Heading */}
        <div className="mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-center">
          <h2 className={`${styles.h1} font-bold font-outfit leading-tight`}>
            <span className="text-blue">Values </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Powering Our Vision
            </span>
          </h2>
        </div>

        {/* Cards Grid: 2 rows of 3 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`group relative bg-[#FAFAFA] rounded-2xl transition-all duration-300 border-2 h-full flex flex-col cursor-pointer ${isActive
                  ? "border-[#F05C22] "
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-3 md:p-5 lg:p-7 xl:p-12">
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
                  <h3 className={`text-[17px] md:text-[22px] lg:text-[28px] xl:text-[32px] font-bold mb-3 lg:mb-4 font-outfit leading-tight ${isActive ? "text-[#F05C22]" : "text-gray-900"
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