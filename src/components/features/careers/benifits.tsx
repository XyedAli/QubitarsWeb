"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";
import { MoveUpRight } from "lucide-react";
import { getCareerCloudinaryIcons } from "@/lib/assets/images";

interface BenefitCardData {
  icon: string;
  value: string;
  label: string;
}

interface BenefitCardProps extends BenefitCardData {
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const BenefitCard = ({ icon, value, label, index, isActive, onMouseEnter, onMouseLeave, onClick }: BenefitCardProps) => {
  
  // Staggered alignment: middle column (indices 1, 4) should be pushed down
  // First and third cards (indices 0, 2, 3, 5) stay at same position
  const isMiddleColumn = index % 3 === 1; // indices 1, 4
  const isBottomRow = index >= 3; // indices 3, 4, 5
  
  // For middle column bottom card (index 4), reduce stagger offset significantly to minimize gap with card above
  // For top middle column card (index 1), keep normal stagger
  const staggerOffset = isMiddleColumn && !isBottomRow ? "mt-4 md:mt-6 lg:mt-12" : 
                        isMiddleColumn && isBottomRow ? "mt-1 md:mt-2 lg:mt-4" : "";
  
  // Negative vertical margin for bottom row cards to reduce gap
  // Middle column bottom card needs more negative margin to compensate for its stagger
  const negativeMargin = isBottomRow && !isMiddleColumn ? "-mt-2 md:-mt-3 lg:-mt-8" : 
                         isBottomRow && isMiddleColumn ? "-mt-3 md:-mt-4 lg:-mt-5" : "";

  // Check if icon is SVG
  const isSvg = icon.includes('.svg');

  return (
    <div
      className={`group relative bg-[#FAFAFA] rounded-2xl transition-all duration-300 border-1 flex flex-col cursor-pointer self-start ${staggerOffset} ${negativeMargin} ${isActive
        ? "border-[#F05C22] "
        : "border-gray-200 hover:border-gray-300"
        }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Orange Gradient Overlay from Bottom */}
      <div className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity pointer-events-none rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col p-4 md:p-5 lg:p-6 ">
        {/* Icon Box */}
        <div className={`w-16 h-16 md:w-17 md:h-17 lg:w-20 lg:h-20 rounded-full bg-white border-2 transition-all duration-300 ${styles.flexCenter} mb-3 md:mb-4 lg:mb-4 ${isActive ? "border-[#F05C22]" : "border-transparent group-hover:border-[#F05C22]"
          }`}>
          {isSvg ? (
            <img
              src={icon}
              alt={label}
              className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
            />
          ) : (
            <Image
              src={icon}
              alt={label}
              width={48}
              height={48}
              className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
              unoptimized
            />
          )}
        </div>

        {/* Title */}
        <h3 className={`text-[17px] md:text-[20px] lg:text-[22px] xl:text-[25px] text-blue font-bold mb-2 font-outfit leading-tight`}>
          {value}
        </h3>

        {/* Description */}
        <p className={`text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed font-inter ${isActive ? "text-gray-700" : "text-gray-600"
          }`}>
          {label}
        </p>
      </div>
    </div>
  );
};

const Benefits = () => {
  // Get Cloudinary career icons
  const careerIcons = getCareerCloudinaryIcons();
  
  // State to track which card is active (default: first card, index 0)
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const benefitsData: BenefitCardData[] = [
    {
      icon: careerIcons.careerIcon1,
      value: "Growth-Focused Culture",
      label: "Continuous learning and career development.",
    },
    {
      icon: careerIcons.careerIcon2,
      value: "Cross-Domain Exposure",
      label: "Collaboration between tech and business teams.",
    },
    {
      icon: careerIcons.careerIcon3,
      value: "Latest Technology Stack",
      label: "Hands-on experience with modern technologies.",
    },
    {
      icon: careerIcons.careerIcon4,
      value: "Client-Facing Experience",
      label: "Work on real clients and real-world challenges.",
    },
    {
      icon: careerIcons.careerIcon5,
      value: "Innovation-First Mindset",
      label: "Freedom to experiment and innovate.",
    },
    {
      icon: careerIcons.careerIcon6,
      value: "Learning by Doing",
      label: "Practical, ownership-driven learning.",
    },
  ];

  return (
    <section className={`bg-white relative overflow-hidden ${styles.sectionPadding} py-12 md:py-16 lg:py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center col-span-5">
            <div>
              <SectionHeading
                subtitle="Benefits"
                title="Why Work With Us"
              />
              {/* Description */}
              <p className={`${styles.p2} text-gray-600 leading-relaxed mt-4 md:-mt-8`}>
            We believe great work starts with empowered people. At Qubitars, you’re trusted with responsibility, encouraged to learn continuously, and given the freedom to make an impact in a supportive, collaborative culture.            </p>
            </div>
          </div>

          {/* Right Side - Benefits Cards Grid (3 columns, 2 rows) */}
          <div className="grid grid-cols-3 gap-x-2 md:gap-x-3 lg:gap-x-4 gap-y-0 md:gap-y-0 lg:gap-y-0 col-span-7 items-start">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                {...benefit}
                index={index}
                isActive={activeIndex === index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => {}} // Keep the hovered card active
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Benefits;
