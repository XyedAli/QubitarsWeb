"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { 
  Lightbulb, 
  FileEdit, 
  Box, 
  Users 
} from "lucide-react";

interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use emerging technologies to build future-ready solutions."
  },
  {
    icon: FileEdit,
    title: "Strive for Better",
    description: "Continuous improvement drives everything we build and deliver."
  },
  {
    icon: Box,
    title: "Transparency",
    description: "Clear, open, and honest communication defines our work."
  },
  {
    icon: Users,
    title: "Respect & Equality",
    description: "Every voice matters; we value diversity and collaboration."
  }
];

const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white relative overflow-hidden">
      <div className={`${styles.sectionPadding} pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-2`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column: heading + description */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start h-full">
            <div className="mb-6 md:mb-8">
              <h2 className={`${styles.h1} font-bold font-outfit leading-tight`}>
                <span className="text-blue">Core Values</span>
              </h2>
              <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]" />
            </div>
            <p className={`${styles.p2} text-gray-600 font-inter max-w-md`}>
              From startups to enterprises, we specialize in turning complex challenges into simple, scalable, and impactful solutions.
            </p>
          </div>

          {/* Right column: 4 cards in 2x2 grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-12">
              {coreValues.map((value, index) => {
                const isHovered = hoveredIndex === index;
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl ${isHovered ? "shadow-xl" : "shadow-sm"} px-6 py-14 lg:py-7 xl:py-10 md:px-4 lg:px-5 xl:px-8 pt-8 xl:pt-12 transition-all border ${isHovered ? "border-[#F05C22]" : "border-gray-100"} h-full flex flex-col`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Icon at top-right corner */}
                    <div className={`absolute -top-8 lg:-top-9 xl:-top-10 right-3 w-16 lg:w-17 xl:w-18 h-16 lg:h-17 xl:h-18 rounded-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] ${styles.flexCenter} shadow-md z-20`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>

                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity pointer-events-none rounded-2xl overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className={`${styles.h4} font-bold mb-2 xl:mb-4 text-blue font-outfit leading-tight`}>
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-[16px] lg:text-[18px] xl:text-[19px] text-blue leading-normal xl:leading-relaxed font-inter`}>
                        {value.description}
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
};

export default CoreValues;