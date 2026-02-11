"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getIndustriesAssets } from "@/lib/assets/images";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

export interface EngagementCard {
  id: string;
  iconKey: "stateicon9" | "stateicon10" | "stateicon11";
  title: string;
}

const engagementCards: EngagementCard[] = [
  { id: "team-augmentation", iconKey: "stateicon9", title: "Team Augmentation" },
  { id: "product-development", iconKey: "stateicon10", title: "Product Development" },
  { id: "consultation", iconKey: "stateicon11", title: "Consultation" },
];

const cardClass =
  "flex flex-col items-center gap-4 p-6 rounded-xl bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(30,39,79,0.06)] hover:shadow-[0_12px_40px_rgba(30,39,79,0.1)]";

export default function BusinessExcellence() {
  const assets = getIndustriesAssets();
  const icons = getIndustriesStateIcons();

  return (
    <section className={combine(styles.sectionPadding, "relative")}>
      <div>
        {/* Banner: white block, rounded top. stateimg6 + stateimg7 in corners (absolute). */}
        <div className="relative overflow-hidden rounded-xl bg-[#F2F4FF] min-h-[220px] md:min-h-[420px] px-6 py-12 md:py-16 lg:px-14 lg:py-20">
          {/* stateimg6 – absolute left bottom corner */}
          <div
            className="absolute top-0 right-0 w-[320px] md:w-[420px] lg:w-[380px] h-[200px] md:h-[280px] lg:h-[300px] pointer-events-none z-0"
            aria-hidden
          >
            <Image
              src={assets.stateimg6}
              alt=""
              fill
              className=""
              sizes=""
            />
          </div>
          {/* stateimg7 – absolute right top corner */}
          <div
            className="absolute bottom-0 left-0 w-[280px] md:w-[360px] lg:w-[300px] h-[180px] md:h-[240px] lg:h-[200px] pointer-events-none z-0"
            aria-hidden
          >
            <Image
              src={assets.stateimg7}
              alt=""
              fill
              className=""
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2
              id="business-excellence-heading"
              className={combine(
                styles.h2,
                "font-bold text-[#1E274F] leading-tight font-outfit text-balance"
              )}
            >
              Elevate growth outcomes using flexible collaboration approaches
            </h2>
            <p
              className={combine(
                styles.p2,
                "text-gray-600 mt-3 md:mt-5 font-outfit max-w-2xl mx-auto"
              )}
            >
              Convert dreams toward tangible impact while delivering peak performance via Qubitars Technologies&apos;s engagement models.
            </p>
          </div>
        </div>

        {/* Feature cards – overlapping the banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-5 -mt-6 md:-mt-32 relative z-10 px-2 sm:px-0 max-w-5xl mx-auto">
          {engagementCards.map((card) => (
            <article key={card.id} className={cardClass}>
              <div>
                <Image
                  src={icons[card.iconKey]}
                  alt=""
                  width={56}
                  height={56}
                  className="w-8 h-8 md:w-18 md:h-18 object-contain"
                  unoptimized={icons[card.iconKey]?.includes("cloudinary.com")}
                />
              </div>
              <h3
                className={combine(
                  styles.h6,
                  "font-semibold text-[#1E274F] text-center font-outfit"
                )}
              >
                {card.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
