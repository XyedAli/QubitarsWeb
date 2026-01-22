"use client";

import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { industries } from "@/data/careers";

import { LucideIcon } from "lucide-react";

const ValueCard = ({ icon: IconComponent, title, description, rotation }: { icon: LucideIcon; title: string; description: string; rotation: string }) => {
  return (
    <div 
      className="bg-white p-3 rounded-md md:p-4 lg:p-5 flex flex-col items-center text-center border-4 border-dashed border-[#1F274F] transition-all duration-300 max-w-sm mx-auto"
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Icon */}
      <div className="mb-2 text-blue">
        <IconComponent className="w-6 h-6 md:w-10 md:h-10" />
      </div>

      {/* Title */}
      <h3 className={`${styles.h5} font-bold text-blue mb-2 md:mb-3`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default function CareerValuesSection() {
  // Rotation values for cards (alternating pattern)
  const rotations = ["8deg", "0deg", "-8deg", "-8deg", "0deg", "8deg"];

  return (
    <section className="bg-black py-12 md:py-16 lg:py-20 xl:py-24">
      <div className={`${styles.sectionPadding}`}>
        {/* Section Heading */}
        <div className="mb-10 md:mb-16">
          <SectionHeading
            subtitle="Industries we serve" subtitleColor="#FFFFFF"
            title="Transforming Businesses Across Sectors" titleColor="#FFFFFF"
          />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-12 xl:px-16">
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
