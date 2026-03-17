"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getIndustriesAssets } from "@/lib/assets/images";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";
import { engagementCards, EngagementCard } from "@/data/devops";
function EngagementCardItem({
  card,
  index,
}: {
  card: EngagementCard;
  index?: number;
}) {
  return (
    <article className="pt-6 xl:pt-8 ps-4 lg:ps-4 xl:ps-6">
      <div className={`${index !== 2 && index !== 5 ? 'border-r border-gray-300' : ''}`}>

        <h3 className="font-semibold text-[#1E274F] text-left text-[16px] md:text-[17px] lg:text-[19px] xl:text-[24px] mb-2 xl:mb-3 ">{card.title}</h3>
        <p className={`text-blue text-sm lg:text-base pe-3 xl:pe-9 `}>{card.description}</p>
      </div>
    </article>
  );
}

export default function BusinessExcellence() {
  const assets = getIndustriesAssets();
  const devOpsImages = getDevOpsCloudinaryImages();

  return (
    <section className={combine("bg-gray-50 pt-14 mb-9 md:mb-13 lg:mb-10 xl:mb-20 pb-9 md:pb-13 lg:pb-17 xl:pb-24")}>
      <div>
        <div className="relative overflow-hidden bg-[#0E1225] min-h-[315px] lg:min-h-[380px] xl:min-h-[420px] px-6 py-12 lg:px-14 lg:py-20 pb-10 md:pb-12">

          <Image
            src={devOpsImages.infinity}
            alt="DevOps Infinity Symbol"
            className="absolute left-2 md:left-6 lg:left-10 xl:left-50 top-20 md:top-26 lg:top-34 xl:top-37 -translate-y-1/2 w-40 h-23 md:w-60 md:h-32 lg:w-70 lg:h-39 xl:w-88 xl:h-45 opacity-80"
            width={192}
            height={192}
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto mt-0 md:mt-4 lg:mt-0">
            <h2
              id="business-excellence-heading"
              className={combine(styles.h2, "font-bold text-white leading-tight font-outfit text-balance")}
            >
              DevOps for Industry-Specific Workflows
            </h2>
            <p
              className={combine(styles.p2, "text-gray-300 mt-3 md:mt-5 font-outfit max-w-2xl mx-auto")}
            >
              With an end-to-end strategy to DevOps, we provide secure, faster application delivery & deployment across a range of industries
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-2 -mt-20 md:-mt-22 lg:-mt-32 relative z-10 px-2 sm:px-0 max-w-[24rem] md:max-w-[46rem] lg:max-w-4xl xl:max-w-6xl mx-auto bg-white pb-9">
          {engagementCards.map((card, index) => (
            <EngagementCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
