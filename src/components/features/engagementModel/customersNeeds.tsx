"use client";

import { styles, combine } from "@/styles/style";
import Image from "next/image";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { SectionHeading } from "@/components/shared/headings";
import { customersNeedsSection } from "@/data/engModel";

const DIVIDER_CLASS = "hidden lg:block absolute w-[2px] bg-gradient-to-b from-transparent via-[#FCB477] to-transparent pointer-events-none";
const H_DIVIDER_CLASS = "hidden lg:block absolute top-[45%] xl:top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FCB477] to-transparent pointer-events-none";

const CustomersNeeds = () => {
  const images = getEngagementModelCloudinaryImages();
  const cards = customersNeedsSection.featureCards.map((card) => ({
    ...card,
    icon: images[card.iconKey],
  }));

  return (
    <section className={combine("bg-white", styles.sectionPadding, "py-14 md:py-18 lg:py-22 xl:py-24")}>
      <SectionHeading subtitle={customersNeedsSection.subtitle} title={customersNeedsSection.title} />
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0">
        <div className={`${DIVIDER_CLASS} left-[33.333%] top-0 bottom-0`} />
        <div className={`${DIVIDER_CLASS} left-[66.666%] top-0 bottom-0`} />
        <div className={H_DIVIDER_CLASS} />
        {cards.map((card, index) => (
          <div
            key={index}
            className={combine(
              "flex flex-col",
              index % 3 === 0 && "pe-0 lg:pe-3 xl:pe-8",
              index % 3 === 1 && "px-0 lg:px-5 xl:px-8",
              index % 3 === 2 && "ps-0 lg:ps-5 xl:ps-8",
              index < 3 ? "lg:pb-1 xl:pb-8" : "lg:pt-6 xl:pt-8"
            )}
          >
            <div className="flex flex-col flex-1">
              <div className="flex items-start mb-2 xl:mb-4 gap-2">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="w-7 h-7 xl:w-8 xl:h-8 shrink-0 object-contain"
                  unoptimized={card.icon.includes("cloudinary.com")}
                />
                <h3 className={combine(styles.h5, "font-bold text-[#1E274F] font-outfit leading-tight")}>
                  {card.title}
                </h3>
              </div>
              <p className="text-sm md:text-base xl:text-lg text-gray-600 font-inter leading-relaxed ps-9 md:ps-0">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersNeeds;
