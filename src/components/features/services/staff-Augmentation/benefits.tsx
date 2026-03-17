"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/shared/headings";
import { combine, styles } from "@/styles/style";
import { benefitsCardsData } from "@/data/staff-augmentation/index";

export default function BenefitsSection() {
  return (
    <section className={combine("bg-[#F3F3F3] py-16 lg:py-20 xl:py-28", styles.sectionPaddingX)}>
      <SectionHeading
        subtitle="Benefits"
        title="Why Choose Our Staff Augmentation"
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 xl:gap-8 items-center">
        {benefitsCardsData.map((card, index) => (
          <div
            key={index}
            className={`flex items-center text-center ${
              index % 2 === 1 ? "flex-col" : "flex-col-reverse"
            }`}
          >
            {/* TEXT */}
            <div>
              <h3
                className={combine(
                  "font-semibold mb-2 leading-tight",
                  styles.h6,
                  card.active ? "text-blue-600" : "text-blue-500"
                )}
              >
                {card.title}
              </h3>
              <p className={combine("text-gray-600 xl:mt-2 max-w-[230px]", styles.p4)}>
                {card.description}
              </p>
            </div>
            {/* IMAGE */}
            <div className="my-6">
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="rounded-lg w-[140px] md:w-[170px] lg:w-[200px] xl:w-[240px] h-[150px] md:h-[160px] lg:h-[200px] xl:h-[270px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}