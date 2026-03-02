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
    <article className="pt-6 xl:pt-8 ps-6">
      <div className={`${index !== 2 && index !== 5 ? 'border-r border-gray-300' : ''}`}>
        
      <h3 className="font-semibold text-[#1E274F] text-left text-[16px] md:text-[17px] lg:text-[19px] xl:text-[24px] mb-3 ">{card.title}</h3>
      <p className={`text-blue text-base pe-9 `}>{card.description}</p>
    </div>
    </article>
  );
}

export default function BusinessExcellence() {
  const assets = getIndustriesAssets();
  const devOpsImages = getDevOpsCloudinaryImages();

  return (
    <section className={combine(styles.sectionPaddingY2,"bg-gray-50 pt-14 mb-9 md:mb-13 lg:mb-16 xl:mb-20")}>
      <div>
        <div className="relative overflow-hidden bg-[#0E1225] min-h-[315px] lg:min-h-[380px] xl:min-h-[420px] px-6 py-12 lg:px-14 lg:py-20 pb-10 md:pb-12">
          
          <Image 
            src={devOpsImages.infinity}
            alt="DevOps Infinity Symbol"
            className="absolute left-50 top-37 -translate-y-1/2 w-32 h-32 md:w-40 md:h-56 lg:w-88 lg:h-45 opacity-80"
            width={192}
            height={192}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
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

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-2xl mx-auto px-0 md:hidden">
            {engagementCards.map((card) => (
              <EngagementCardItem key={card.id} card={card} />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-2 md:-mt-24 xl:-mt-32 relative z-10 px-2 sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto bg-white pb-9">
          {engagementCards.map((card, index) => (
            <EngagementCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
