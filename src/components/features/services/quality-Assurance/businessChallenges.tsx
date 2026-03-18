"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { combine, styles } from "@/styles/style";
import { BUSINESS_CHALLENGE_SLIDES, TAB_PANEL_BG,} from "@/data/qualityAssurance/businessChallenges";
import { SectionHeading } from "@/components/shared/headings";

const AUTO_ADVANCE_MS = 6500;

function SadIcon() {
  return (
    <Image
      src="https://res.cloudinary.com/drugkop7t/image/upload/v1773817643/sadIcon_kzbrzr.svg"
      alt="Sad icon"
      width={44}
      height={44}
      className="shrink-0 mb-3"
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
      className="shrink-0 mb-3"
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
      className={combine(styles.sectionPaddingY, "bg-white ms-18")}
      aria-labelledby="qubitars-edge-heading"
    >
      <div>
        <SectionHeading
          subtitle="Qubitars Edge"
          title="Solving real business challenges intelligently"
        />
        <div className="flex gap-10 lg:gap-12 xl:gap-32 items-center">
          {/* Left side content */}
          <div className="flex flex-col items-center min-w-0 order-2 lg:order-1 space-y-14">
            {[
              { icon: <SadIcon />, title: slide.painPoint.title, description: slide.painPoint.description, titleStyle: styles.h4, titleColor: "text-black", descStyle: styles.h6 },
              { icon: <HappyIcon />, title: slide.qubitarsEdge.title, description: slide.qubitarsEdge.description, titleStyle: styles.h5, titleColor: "text-accent", descStyle: styles.h5 }
            ].map((section, index) => (
              <div key={index}>
                <div className={combine(" mb-4")}>
                  {section.icon}
                  <h3 className={combine(section.titleStyle, `font-bold ${section.titleColor} tracking-tight`)}>
                    {section.title}
                  </h3>
                </div>
                <p className={combine(section.descStyle, "text-gray-600 max-w-2xl leading-tight ")}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side cards - stacked */}
          <div
            className="w-full lg:w-[650px] shrink-0 flex flex-col gap-0 order-1 lg:order-2 rounded-tl-2xl rounded-bl-2xl overflow-hidden justify-end pr-0"
            role="tablist"
            aria-label="Business challenges"
          >
            {BUSINESS_CHALLENGE_SLIDES.map((item, index) => {
              const isActive = index === activeIndex;
              const isLast = index === BUSINESS_CHALLENGE_SLIDES.length - 1;
              const isFirst = index === 0;

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
                    "relative text-left overflow-hidden min-h-[72px] sm:min-h-[80px] lg:min-h-[90px] px-5 py-4 lg:px-7 lg:py-11 transition-shadow duration-200",
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
                  <span className={combine(styles.h4, "font-semibold text-black tracking-tight block", isActive ? "pt-2.5" : "pt-0.5")}>
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
