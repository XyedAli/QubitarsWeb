"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

const CURVE_CLIP_ID = "solutions-curve-clip";
const VIDEO_SRC = "/assets/videos/BG%202.mp4";
const solutionIcons = getIndustriesStateIcons();

export default function Solutions() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      className={combine(
        "relative overflow-hidden py-14 md:py-18 lg:py-24 mb-24 bg-white"
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
        className="absolute inset-y-0 left-0 z-[0] w-full lg:w-[70%]"
        style={{ clipPath: `url(#${CURVE_CLIP_ID})` }}
        aria-hidden
      >
        {/* Video ellipse ke andar */}
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

      <div className={combine(styles.container, "relative z-10")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-4 items-center min-h-[420px] lg:min-h-[480px]">
          <div className="lg:col-span-7 flex items-center py-8 lg:py-0">
            <h2
              id="solutions-heading"
              className={combine(
                "text-[36px] md:text-[42px] lg:text-[96px] font-normal text-white leading-[1.2] tracking-[-0.02em] font-dm-sans"
              )}
            >
              Solutions
              <br />
              Aligned To
              <br />
              Outcomes
            </h2>
          </div>

          {/* Right: 4 items – absolute positioning on lg, alag alag; map nahi */}
          <div className="lg:col-span-5 relative min-h-0 lg:min-h-[480px] space-y-6 md:space-y-8 lg:space-y-0 mt-2">
            <article className="flex gap-4 md:gap-5 items-start relative lg:absolute left-[-124px] right-0 lg:right-4 lg:top-[1%]">
              <div
                className="shrink-0 w-11 h-11 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#00002F]"
                aria-hidden
              >
                <Image
                  src={solutionIcons.stateicon5}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-blue font-bold text-lg text-[26px] leading-tight mb-2 -mt-2">
                  Built Around Your Business
                </h3>
                <p className="text-blue text-sm md:text-lg font-inter leading-relaxed max-w-md">
                  Qubitars builds tailored real estate platforms aligned workflows.
                </p>
              </div>
            </article>
            <article className="flex gap-4 md:gap-5 items-start relative lg:absolute left-[-70px] right-0 lg:right-4 lg:top-[26%]">
              <div
                className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#00002F]"
                aria-hidden
              >
                <Image
                  src={solutionIcons.stateicon6}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-blue font-bold text-lg text-[26px] leading-tight mb-2">
                  Scale Without Limits
                </h3>
                <p className="text-blue text-sm md:text-lg font-inter leading-relaxed max-w-md">
                  Scalable platforms grow with your business, enabling modular expansion.
                </p>
              </div>
            </article>
            <article className="flex gap-4 md:gap-5 items-start absolute left-[-65px] right-0 lg:right-4 top-[53%]">
              <div
                className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#00002F]"
                aria-hidden
              >
                <Image
                  src={solutionIcons.stateicon7}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-blue font-bold text-lg text-[26px] leading-tight mb-2">
                  Simplify the Complex
                </h3>
                <p className="text-gray-600 text-sm md:text-lg font-inter leading-relaxed max-w-md">
                  We streamline leasing, payments, messaging to reduce work.
                </p>
              </div>
            </article>
            <article className="flex gap-4 md:gap-4 items-start relative lg:absolute left-[-105px] right-0 lg:right-4 lg:top-[79%]">
              <div
                className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#00002F]"
                aria-hidden
              >
                <Image
                  src={solutionIcons.stateicon8}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-12 md:h-12 object-contain "
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-blue font-bold text-lg text-[26px] leading-tight mb-2">
                  Control Risk with Confidence
                </h3>
                <p className="text-blue text-sm md:text-lg font-inter leading-relaxed ms-1 max-w-md">
                  AI-driven alerts catch risks early, preventing costly losses.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
