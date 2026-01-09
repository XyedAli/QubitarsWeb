"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { techStackData, TechStackCategory } from "@/data/home";
import { SectionHeading } from "@/components/shared/headings/headings";
const OurTechStack = () => {
  const [activeCategory, setActiveCategory] = useState<TechStackCategory>("All");

  const categories: TechStackCategory[] = [
    "All",
    "Front-End",
    "Back-End",
    "Low/No Code",
    "DevOps",
    "Mobile",
    "AI & ML",
  ];

  const filteredTechStack =
    activeCategory === "All"
      ? techStackData
      : techStackData.filter((tech) => tech.category.includes(activeCategory));

  return (
    <section className="bg-white">
      <div className={`${styles.sectionPadding} pt-10 md:pt-12 lg:pt-14 xl:pt-17`}>
        {/* Heading */}
          <SectionHeading title="Modern Stack. Real Results." />
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-0 lg:gap-4 xl:gap-6 mb-0 md:mb-4 lg:mb-6 xl:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 md:px-5 md:py-2.5 transition-all duration-300 font-inter font-medium ${activeCategory === category
                  ? "text-blue"
                  : "text-gray-600 hover:text-blue"
                }`}
            >
              <span className={`${styles.p3} relative z-10`}>{category}</span>
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3 lg:gap-4 xl:gap-8">
          {filteredTechStack.map((tech) => (
            <div
              key={tech.id}
              className="group flex flex-col items-center justify-center rounded-xl lg:rounded-2xl bg-white min-h-[90px] md:min-h-[100px] lg:min-h-[110px] xl:min-h-[120px]"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-15 xl:h-15 mb-2 md:mb-2.5 flex-shrink-0">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, (max-width: 1280px) 64px, 72px"
                />
              </div>
              <h3 className={`${styles.p3} text-blue font-semibold text-center font-inter`}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechStack;

