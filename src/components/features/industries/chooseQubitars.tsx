"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Cpu,
  RefreshCw,
  Server,
  type LucideIcon,
} from "lucide-react";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

const stateIcons = getIndustriesStateIcons();

export interface WhyUsCard {
  id: string;
  icon: LucideIcon | string;
  label: string;
}

const whyUsCards: WhyUsCard[] = [
  {
    id: "compliance",
    icon: stateIcons.stateicon16,
    label: "Compliance-first mindset",
  },
  {
    id: "ai",
    icon: stateIcons.stateicon17,
    label: "Built-in AI, not bolted on",
  },
  {
    id: "iterations",
    icon: stateIcons.stateicon18,
    label: "Rapid iterations with user feedback",
  },
  {
    id: "infrastructure",
    icon: stateIcons.stateicon19,
    label: "Infrastructure optimized for data and privacy",
  },
];

const iconWrapperClass =
  "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center  shrink-0";
const cardClass =
  "flex flex-col items-start gap-4 p-5 md:p-6 rounded-xl bg-white shadow-sm transition-all duration-300";
const cardBorderStyle = {
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(to bottom left, #D9E6FE, #82ABFC)",
  backgroundOrigin: "padding-box, border-box",
  backgroundClip: "padding-box, border-box",
};

export default function ChooseQubitars() {
  return (
    <section
      className={combine(styles.sectionPadding, styles.sectionPaddingY, "pb-23")}
      style={{
        background: `
          linear-gradient(to right, #ffffff 0%, transparent 50%, transparent 50%, #ffffff 100%),
          linear-gradient(to bottom, #F1F6FF 0%, #D6E4FE 100%)
        `,
      }}
    >
      <div >
        <div className="max-w-2xl">
        <SectionHeading
          subtitle="WHY US"
          title="Why our custom healthcare software solutions work in wellness tech"

        />
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-9 mt-2 md:mt-4">
          {whyUsCards.map((card) => {
            const isUrl = typeof card.icon === "string";
            const iconSrc = isUrl ? (card.icon as string) : "";
            const Icon = !isUrl ? (card.icon as LucideIcon) : null;
            return (
              <article key={card.id} className={cardClass} style={cardBorderStyle}>
                <div className={iconWrapperClass} aria-hidden>
                  {isUrl ? (
                    <Image
                      src={iconSrc}
                      alt=""
                      width={36}
                      height={36}
                      className="w-6 h-6 md:w-12 md:h-12 object-contain"
                      unoptimized={iconSrc.includes("cloudinary.com")}
                    />
                  ) : (
                    Icon && <Icon className="w-6 h-6 md:w-12 md:h-12" strokeWidth={2} />
                  )}
                </div>
                <p
                  className={combine(
                    "font-semibold text-blue leading-snug font-outfit",
                    "text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px]"
                  )}
                >
                  {card.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
