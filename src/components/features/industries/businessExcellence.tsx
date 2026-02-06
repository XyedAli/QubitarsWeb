"use client";

import {
  UserPlus,
  Users,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { styles, combine } from "@/styles/style";

export interface EngagementCard {
  id: string;
  icon: LucideIcon;
  title: string;
}

const engagementCards: EngagementCard[] = [
  {
    id: "staff-augmentation",
    icon: UserPlus,
    title: "Staff Augmentation",
  },
  {
    id: "dedicated-teams",
    icon: Users,
    title: "Dedicated Teams",
  },
  {
    id: "product-development",
    icon: ClipboardList,
    title: "Product Development",
  },
];

const BANNER_BG = "#1E274F";
const iconWrapperClass =
  "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-violet-100 border border-violet-200/80 text-blue shrink-0 mx-auto";
const cardClass =
  "flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl bg-white border border-sky-100/80 shadow-md hover:shadow-lg transition-all duration-300";
const cardBorderStyle = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(to bottom left, #D9E6FE, #82ABFC)",
  backgroundOrigin: "padding-box, border-box",
  backgroundClip: "padding-box, border-box",
};

export default function BusinessExcellence() {
  return (
    <section
      className={combine(styles.sectionPadding, "relative")}
      aria-labelledby="business-excellence-heading"
    >
      <div className="">
        {/* Blue header banner */}
        <div
          className="rounded-2xl md:rounded-3xl px-6 py-10 md:py-12 lg:px-12 text-center min-h-[160px] md:min-h-[400px] flex flex-col items-start justify-center"
          style={{ backgroundColor: BANNER_BG }}
        >
          <h2
            id="business-excellence-heading"
            className={combine(
              styles.h2,
              "font-bold text-white leading-tight font-outfit max-w-4xl mx-auto"
            )}
          >
            Unlock Business Excellence With Our Versatile Engagement Models
          </h2>
          <p
            className={combine(
              styles.p2,
              "text-white/90 mt-3 md:mt-4 max-w-2xl mx-auto font-outfit mb-9"
            )}
          >
            Transform your vision into reality and drive exemplary results
            through Qubitars&apos; dynamic engagement models.
          </p>
        </div>

        {/* Feature cards – overlapping the banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-9 -mt-8 md:-mt-20 relative z-10 px-2 sm:px-6 max-w-6xl mx-auto">
          {engagementCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className={cardClass}
                style={cardBorderStyle}
              >
                <div className={iconWrapperClass} aria-hidden>
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8 text-blue"
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className={combine(
                    styles.h5,
                    "font-semibold text-blue text-center font-outfit"
                  )}
                >
                  {card.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
