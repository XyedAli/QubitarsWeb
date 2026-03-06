// components/ExecutionInsights.jsx
import Image from "next/image";
import { getProductRoadmapImages } from "@/lib/assets/images";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { executionCardsData } from "@/data/product-design";

export default function ExecutionInsights() {
  const images = getProductRoadmapImages();
  const icons = getProductDesignIcons();
  const cards = executionCardsData.map(card => ({
    ...card,
    icon: icons[card.icon as keyof typeof icons]
  }));

  return (
    <section className={`bg-white${styles.sectionPaddingY}`}>
      <div className={`${styles.sectionPaddingX}`}>

        <SectionHeading
          title="Your Product Roadmap Simplified"
          subtitle="Execution Insights"
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">

          {/* Persona Development Image Card */}
          <div className="relative rounded-2xl overflow-hidden h-[310px] lg:h-[320px] md:col-span-1 hidden md:block">
            <Image
              src={images.pdImg2}
              alt="Persona Development"
              fill
              className="object-cover"
            />
          </div>

          {/* +2.7% Card */}
          <div className="rounded-2xl p-4 xl:p-6 flex flex-col justify-center h-[210px] md:h-[289px] lg:h-[290px] xl:h-[275px] border border-gray-300">
            <div className={`w-14 xl:w-16 h-14 xl:h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-4 xl:mb-6`}>
              <img src={cards[0].icon} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
            </div>
            <h3 className={`${styles.h6} font-semibold text-blue mb-3`}>{cards[0].cardTitle}</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              {cards[0].cardDescription}
            </p>
          </div>

          {/* Customer Support Image */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[308px] hidden md:block">
            <Image
              src={images.pdImg3}
              alt="Support"
              fill
              className="object-cover"
            />
          </div>

          {/* 68% Card */}
          <div className=" rounded-2xl p-4 xl:p-6 flex flex-col justify-center h-[210px] md:h-[278px] lg:h-[290px] xl:h-[275px] border border-gray-300 ">
            <div className={`w-14 xl:w-16 h-14 xl:h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-4 xl:mb-6`}>
              <img src={cards[1].icon} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
            </div>
            <h3 className={`${styles.h6} font-semibold text-blue mb-1 lg:mb-3`}>{cards[1].cardTitle}</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              {cards[1].cardDescription}
            </p>
          </div>

          {/* Happy User Image */}
          <div className="relative rounded-2xl overflow-hidden h-[270px] lg:h-[320px] -mt-0 md:-mt-5 lg:-mt-8 xl:-mt-12 hidden md:block">
            <Image
              src={images.pdImg4}
              alt="Happy User"
              fill
              className="object-cover"
            />
          </div>

          {/* 2M+ Card */}
          <div className="rounded-2xl p-4 xl:p-6 flex flex-col justify-center h-[210px] md:h-[278px] lg:h-[290px] xl:h-[285px] border border-gray-300 -mt-0 md:-mt-3">
            <div className={`w-14 xl:w-16 h-14 xl:h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-4 xl:mb-6`}>
              <img src={cards[2].icon} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
            </div>
            <h3 className={`${styles.h6} font-semibold text-blue mb-3`}>{cards[2].cardTitle}</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              {cards[2].cardDescription}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}