"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { chooseQubitarsHeading, whyUsCards, type WhyUsCard } from "@/data/industries";

const iconWrapperClass =
  "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0";
const cardClass =
  "flex flex-col items-start gap-4 p-3 lg:p-4 xl:p-6 rounded-xl bg-white shadow-sm transition-all duration-300";
const cardBorderStyle = {
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(to bottom left, #D9E6FE, #82ABFC)",
  backgroundOrigin: "padding-box, border-box",
  backgroundClip: "padding-box, border-box",
};

export default function ChooseQubitars() {
  return (
    <section
      className={combine(styles.sectionPadding, styles.sectionPaddingY, "pb-16 lg:pb-20 xl:pb-24")}
      style={{
        background: `
          linear-gradient(to right, #ffffff 0%, transparent 50%, transparent 50%, #ffffff 100%),
          linear-gradient(to bottom, #F1F6FF 0%, #D6E4FE 100%)
        `,
      }}
    >
      <div>
        <div className="max-w-2xl">
          <SectionHeading
            subtitle={chooseQubitarsHeading.subtitle}
            title={chooseQubitarsHeading.title}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 xl:gap-7 mt-2 md:mt-4">
          {whyUsCards.map((card: WhyUsCard) => {
            const iconSrc = card.icon;
            return (
              <article key={card.id} className={cardClass} style={cardBorderStyle}>
                <div className={iconWrapperClass} aria-hidden>
                  <Image
                    src={iconSrc}
                    alt="choose qubitars icons"
                    width={36}
                    height={36}
                    className="h-10 w-10 lg:w-12 lg:h-12 object-contain"
                    unoptimized={iconSrc.includes("cloudinary.com")}
                  />
                </div>
                <p className={combine("font-semibold text-blue leading-snug font-outfit", "text-[17px] lg:text-[22px] xl:text-[30px]")}>
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
