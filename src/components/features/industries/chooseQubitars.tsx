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
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";

export interface WhyUsCard {
  id: string;
  icon: LucideIcon;
  label: string;
}

const whyUsCards: WhyUsCard[] = [
  {
    id: "compliance",
    icon: ShieldCheck,
    label: "Compliance-first mindset",
  },
  {
    id: "ai",
    icon: Cpu,
    label: "Built-in AI, not bolted on",
  },
  {
    id: "iterations",
    icon: RefreshCw,
    label: "Rapid iterations with user feedback",
  },
  {
    id: "infrastructure",
    icon: Server,
    label: "Infrastructure optimized for data and privacy",
  },
];

const iconWrapperClass =
  "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-sky-100 border border-sky-200/80 text-sky-600 shrink-0";
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
            const Icon = card.icon;
            return (
              <article key={card.id} className={cardClass} style={cardBorderStyle}>
                <div className={iconWrapperClass} aria-hidden>
                  <Icon className="w-6 h-6 md:w-9 md:h-9" strokeWidth={2} />
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
