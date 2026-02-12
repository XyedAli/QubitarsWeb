"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getIndustriesAssets } from "@/lib/assets/images";
import {
  businessExcellenceHeading,
  engagementCards,
  getEngagementCardIcon,
  type EngagementCard,
} from "@/data/industries";

const cardClass =
  "flex flex-col items-center gap-4 p-4 xl:p-6 rounded-xl bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(30,39,79,0.06)] hover:shadow-[0_12px_40px_rgba(30,39,79,0.1)]";
const cardTitleClass =
  "font-semibold text-[#1E274F] text-center text-[16px] md:text-[17px] lg:text-[19px] xl:text-[24px]";

function EngagementCardItem({
  card,
  iconSrc,
}: {
  card: EngagementCard;
  iconSrc: string;
}) {
  return (
    <article className={cardClass}>
      <div>
        <Image
          src={iconSrc}
          alt=""
          width={56}
          height={56}
          className="w-12 h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 object-contain"
          unoptimized={iconSrc.includes("cloudinary.com")}
        />
      </div>
      <h3 className={cardTitleClass}>{card.title}</h3>
    </article>
  );
}

export default function BusinessExcellence() {
  const assets = getIndustriesAssets();

  return (
    <section className={combine(styles.sectionPadding, "relative")}>
      <div>
        <div className="relative overflow-hidden rounded-xl bg-[#F2F4FF] min-h-[315px] lg:min-h-[380px] xl:min-h-[420px] px-6 py-12 lg:px-14 lg:py-20 pb-10 md:pb-12">
          <div
            className="absolute top-0 right-0 w-[320px] md:w-[340px] xl:w-[380px] h-[200px] md:h-[260px] xl:h-[300px] pointer-events-none z-0"
            aria-hidden
          >
            <Image src={assets.stateimg6} alt="" fill sizes="" />
          </div>
          <div
            className="absolute bottom-0 left-0 w-[280px] md:w-[260px] xl:w-[300px] h-[180px] md:h-[160px] xl:h-[200px] pointer-events-none z-0"
            aria-hidden
          >
            <Image
              src={assets.stateimg7}
              alt=""
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2
              id="business-excellence-heading"
              className={combine(styles.h2, "font-bold text-[#1E274F] leading-tight font-outfit text-balance")}
            >
              Elevate growth outcomes using flexible collaboration approaches
            </h2>
            <p
              className={combine(styles.p2, "text-gray-600 mt-3 md:mt-5 font-outfit max-w-2xl mx-auto")}
            >
              Convert dreams toward tangible impact while delivering peak performance via Qubitars Technologies&apos;s engagement models.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-2xl mx-auto px-0 md:hidden">
            {engagementCards.map((card) => (
              <EngagementCardItem key={card.id} card={card} iconSrc={getEngagementCardIcon(card.iconKey)} />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5 md:-mt-24 xl:-mt-32 relative z-10 px-2 sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto">
          {engagementCards.map((card) => (
            <EngagementCardItem key={card.id} card={card} iconSrc={getEngagementCardIcon(card.iconKey)} />
          ))}
        </div>
      </div>
    </section>
  );
}
