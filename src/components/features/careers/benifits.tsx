"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { getCareerCloudinaryIcons } from "@/lib/assets/images";
import { benefitsSection } from "@/data";
import type { BenefitItem } from "@/data";

const CARD_BORDER = "border-1 flex flex-col cursor-pointer self-start transition-all duration-300 rounded-2xl";
const ICON_BOX_CLASS = "w-16 h-16 md:w-17 md:h-17 xl:w-20 xl:h-20 rounded-full bg-white border-2 transition-all duration-300 flex items-center justify-center mb-3 md:mb-4 lg:mb-4";

function BenefitCard({
  icon,
  value,
  label,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: BenefitItem & {
  icon: string;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const isMiddle = index % 3 === 1;
  const isBottom = index >= 3;
  const stagger = isMiddle && !isBottom ? "mt-0 md:mt-6 lg:mt-12" : isMiddle && isBottom ? "mt-0 md:mt-3 lg:mt-4" : "";
  const negMargin = isBottom && !isMiddle ? "-mt-0 md:-mt-3 lg:-mt-8" : isBottom && isMiddle ? "-mt-0 md:-mt-4 lg:-mt-5" : "";
  const isSvg = icon.includes(".svg");

  return (
    <div
      className={`group relative bg-[#FAFAFA] ${CARD_BORDER} ${stagger} ${negMargin} ${
        isActive ? "border-[#F05C22]" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`absolute inset-0 ${isActive ? "opacity-100" : "opacity-0"} transition-opacity pointer-events-none rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white" />
      </div>
      <div className="relative z-10 flex flex-col p-4 xl:p-6">
        <div className={`${ICON_BOX_CLASS} ${styles.flexCenter} ${isActive ? "border-[#F05C22]" : "border-transparent group-hover:border-[#F05C22]"}`}>
          {isSvg ? (
            <img src={icon} alt={label} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
          ) : (
            <Image src={icon} alt={label} width={48} height={48} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" unoptimized />
          )}
        </div>
        <h3 className="text-[19px] md:text-[24px] lg:text-[20px] xl:text-[25px] text-blue font-bold mb-2 font-outfit leading-tight">{value}</h3>
        <p className={`text-[12px] md:text-[14px] lg:text-[13px] xl:text-[14px] leading-relaxed font-inter ${isActive ? "text-gray-700" : "text-gray-600"}`}>{label}</p>
      </div>
    </div>
  );
}

const Benefits = () => {
  const icons = getCareerCloudinaryIcons();
  const benefitsData = benefitsSection.items.map((item) => ({ ...item, icon: icons[item.iconKey] }));
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
<div id="benifits" className="scroll-mt-[calc(var(--header-height,1rem)-11rem)]">
    <div className="bg-white relative overflow-visible py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
        <div className="flex flex-col justify-center col-span-12 lg:col-span-4 xl:col-span-5">
          <SectionHeading subtitle={benefitsSection.subtitle} title={benefitsSection.title} />
          <p className={`${styles.p2} text-gray-600 leading-relaxed mt-0 md:-mt-8`}>{benefitsSection.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-3 lg:gap-x-4 gap-y-4 md:gap-y-0 col-span-12 lg:col-span-8 xl:col-span-7 items-start">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              index={index}
              isActive={activeIndex === index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => {}}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Benefits;
