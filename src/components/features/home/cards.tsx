"use client";

import { useState, useEffect } from "react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { industries } from "@/data/careers";
import { LucideIcon } from "lucide-react";

const ValueCard = ({ icon: IconComponent, title, description, rotation }: { icon: LucideIcon; title: string; description: string; rotation: string }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    // Initial check
    checkScreenSize();
    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div 
      className="bg-white p-3 rounded-md md:p-4 xl:p-5 flex flex-col items-center text-center border-4 border-dashed border-[#1F274F] transition-all duration-300 max-w-sm mx-auto"
      style={{ transform: isLargeScreen ? `rotate(${rotation})` : "none" }}
    >
      {/* Icon */}
      <div className="mb-2 text-blue">
        <IconComponent className="w-10 h-10" />
      </div>

      {/* Title */}
      <h3 className={`${styles.h5} font-bold text-blue mb-2 md:mb-3`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
export default function IndustriesCards() {
  // Rotation values for cards (alternating pattern)
  const rotations = ["8deg", "0deg", "-8deg", "-8deg", "0deg", "8deg"];
  return (
    <section className="bg-[#EDEFF880] pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-18 lg:pb-24">
      <div className={`${styles.sectionPadding}`}>
        {/* Section Heading */}
        <div className="mb-10 xl:mb-16">
          <SectionHeading
            subtitle="Industries we serve"
            title="Transforming Businesses Across Sectors"
          />
        </div>
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-12 xl:gap-16 px-0 md:px-1 lg:px-4 xl:px-16">
          {industries.map((industry, index) => (
            <ValueCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              rotation={rotations[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
