"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { combine, styles } from "@/styles/style";
import { BUSINESS_CHALLENGE_SLIDES, TAB_PANEL_BG,} from "@/data/qualityAssurance/businessChallenges";
import { SectionHeading } from "@/components/shared/headings";

const AUTO_ADVANCE_MS = 6500;

/** Smaller icons at md (two-column) so headings breathe; full size on mobile stack & xl+ */
const iconImgClass =
  "shrink-0 mb-3 w-11 h-11 md:w-8 md:h-8 md:mb-2 lg:w-9 lg:h-9 xl:w-11 xl:h-11";

function SadIcon() {
  return (
    <Image
      src="https://res.cloudinary.com/drugkop7t/image/upload/v1773817643/sadIcon_kzbrzr.svg"
      alt="Sad icon"
      width={44}
      height={44}
      className={iconImgClass}
    />
  );
}

function HappyIcon() {
  return (
    <Image
      src="https://res.cloudinary.com/drugkop7t/image/upload/v1773817644/happyIcon_ngwpge.svg"
      alt="Happy icon"
      width={44}
      height={44}
      className={iconImgClass}
    />
  );
}

const BusinessChallenges = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % BUSINESS_CHALLENGE_SLIDES.length);
  }, []);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setProgress(100);
      const t = window.setTimeout(advance, AUTO_ADVANCE_MS);
      return () => window.clearTimeout(t);
    }

    setProgress(0);
    const start = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / AUTO_ADVANCE_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        advance();
        return;
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, advance]);

  const slide = BUSINESS_CHALLENGE_SLIDES[activeIndex];

  return (
    <section
      className={combine("bg-white overflow-visible mx-4 md:mx-0 md:ms-4 lg:ms-6 xl:ms-12 2xl:ms-18")}
      aria-labelledby="qubitars-edge-heading"
    >
      <div className="min-w-0 w-full">
        <SectionHeading
          subtitle="Qubitars Edge"
          title="Solving real business challenges intelligently"
        />
        {/* Below md: one column. md and up: two columns (copy left, tabs right). */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-5 lg:gap-15 xl:gap-12 2xl:gap-16">
          {/* Left side content */}
          <div className="flex flex-col items-stretch w-full min-w-0 flex-1 basis-0 order-2 md:order-1 md:items-start space-y-8 md:space-y-6 lg:space-y-10 xl:space-y-14 md:pr-1 lg:pr-0">
            {[
              { icon: <SadIcon />, title: slide.painPoint.title, description: slide.painPoint.description, titleStyle: styles.h4, titleColor: "text-black", descStyle: styles.h6 },
              { icon: <HappyIcon />, title: slide.qubitarsEdge.title, description: slide.qubitarsEdge.description, titleStyle: styles.h5, titleColor: "text-accent", descStyle: styles.h6 }
            ].map((section, index) => (
              <div key={index}>
                <div className={combine("mb-1 lg:mb-2 xl:mb-4")}>
                  {section.icon}
                  <h3 className={combine(section.titleStyle, `font-bold ${section.titleColor} tracking-tight`)}>
                    {section.title}
                  </h3>
                </div>
                <p className={combine(section.descStyle, "text-gray-600 max-w-2xl w-full leading-relaxed md:leading-tight")}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side cards - stacked; fluid width at lg so 1024px layouts don’t overflow */}
          <div
            className="w-full max-w-full md:max-w-[min(100%,370px)] lg:max-w-[min(100%,450px)] xl:max-w-[min(100%,600px)] 2xl:max-w-[650px] shrink-0 lg:shrink-0 flex flex-col gap-0 order-1 lg:order-2 rounded-2xl lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-2xl overflow-hidden self-stretch lg:self-start"
            role="tablist"
            aria-label="Business challenges"
          >
            {BUSINESS_CHALLENGE_SLIDES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`challenge-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`challenge-panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  className={combine(
                    TAB_PANEL_BG[index],
                    "relative text-left overflow-hidden min-h-[68px] sm:min-h-[76px] md:min-h-[80px] lg:min-h-[84px] xl:min-h-[90px] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-6 xl:px-7 xl:py-8 2xl:py-11 transition-shadow duration-200",
                    "border border-black/5 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  )}
                >
                  {isActive && (
                    <div
                      className="absolute top-6 left-6 right-5 h-1 bg-white overflow-hidden rounded-full"
                      aria-hidden
                    >
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                  <span className={combine(styles.h4, "font-semibold text-black tracking-tight block", isActive ? "pt-6 lg:pt-2.5" : "pt-0.5")}>
                    {item.tabIndexLabel} {item.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;
