"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getSolutionCardsForIndustry } from "@/data/industries";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

interface SolutionsProps {
  industryId?: string;
}

const CURVE_CLIP_ID = "solutions-curve-clip";
const VIDEO_SRC = "/assets/videos/BG%202.mp4";
/** Static icons for Solutions section – same for all industries (by card index) */
const SOLUTION_ICONS = (() => {
  const icons = getIndustriesStateIcons();
  return [icons.stateicon5, icons.stateicon6, icons.stateicon7, icons.stateicon8];
})();
const solutionIconCircle =
  "shrink-0 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full flex items-center justify-center bg-[#00002F]";
const titleClass =
  "text-blue font-bold text-lg lg:text-[22px] xl:text-[26px] leading-tight mb-1 lg:mb-2";
const descBaseClass = "text-sm md:text-base lg:text-lg font-inter leading-relaxed max-w-md";

export default function Solutions({ industryId = "real-estate" }: SolutionsProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const solutionCards = getSolutionCardsForIndustry(industryId);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      className={combine(
        "relative overflow-hidden py-0 md:py-18 lg:py-24 mb-12 md:mb-16 lg:mb-20 xl:mb-24 bg-white"
      )}
      aria-labelledby="solutions-heading"
    >
      <svg className="absolute w-0 h-0" aria-hidden>
        <defs>
          <clipPath id={CURVE_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 C 0.88 0.2 0.75 0.5 0.86 0.4 L 1 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-y-0 left-0 z-[0] w-full md:w-[64%] lg:w-[64%] xl:w-[68%] hidden md:block"
        style={{ clipPath: `url(#${CURVE_CLIP_ID})` }}
        aria-hidden
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "ellipse(70% 83% at 10% 52%)" }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO_SRC}
            muted
            loop
            autoPlay
            playsInline
          />
        </div>
      </div>

      <div className={combine(styles.sectionPaddingX, "relative z-10")}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 xl:gap-4 items-center min-h-[360px] lg:min-h-[440px] xl:min-h-[480px]">
          <div className="md:col-span-6 lg:col-span-7 flex items-center pb-6 md:py-8 lg:py-0">
            <h2
              id="solutions-heading"
              className={combine(
                "text-[30px] md:text-[50px] lg:text-[62px] xl:text-[90px] font-semibold md:font-normal text-blue md:text-white leading-[1.2] tracking-[-0.02em] font-dm-sans"
              )}
            >
              Solutions{" "}
              <br className="hidden md:inline ms-2 md:ms-0" />
              Aligned To{" "}
              <br className="hidden md:inline" />
              Outcomes
            </h2>
          </div>

          <div className="md:col-span-6 lg:col-span-5 relative min-h-0 md:min-h-[360px] lg:min-h-[440px] xl:min-h-[480px] space-y-6 md:space-y-0 -mt-5 lg:mt-2">
            {solutionCards.map((card, index) => (
              <article key={card.id} className={card.articleClassName}>
                <div className={solutionIconCircle} aria-hidden>
                  <Image
                    src={SOLUTION_ICONS[index % SOLUTION_ICONS.length]}
                    alt=""
                    width={24}
                    height={24}
                    className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className={titleClass}>{card.title}</h3>
                  <p className={combine(descBaseClass, card.descClassName)}>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
