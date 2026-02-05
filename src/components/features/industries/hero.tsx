"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { industries } from "@/data";
import { styles, combine } from "@/styles/style";
import { CustomSlider, sliderBreakpoints } from "@/components/shared/ui";
import { getIndustriesHeroImages } from "@/lib/assets/images";
import type Slider from "react-slick";

type ExpandRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  viewportW: number;
  viewportH: number;
};
type PendingDirection = "next" | "prev" | null;

/** Final state hamesha (0,0) se full viewport — ek hi bar apply, left/right gap na rahe */
function fullScreenRectFromCard(rect: ExpandRect) {
  return {
    left: 0,
    top: 0,
    width: rect.viewportW,
    height: rect.viewportH,
  };
}

const EXPAND_DURATION_MS = 900;
const EXPAND_DELAY_MS = 0;
const SLIDER_SPEED_MS = 600;

const IndustriesHero = () => {
  const sliderRef = useRef<Slider | null>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const pendingDirectionRef = useRef<PendingDirection>(null);
  const expandEndCalledRef = useRef(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  /** Left panel: sirf expand khatam hone ke baad change — us se pehle nahi */
  const [contentSlideIndex, setContentSlideIndex] = useState(0);
  const [previousIndustryId, setPreviousIndustryId] = useState<string>(industries[0]?.id ?? "real-estate");
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandFromRect, setExpandFromRect] = useState<ExpandRect | null>(null);
  const [expandToFull, setExpandToFull] = useState(false);
  const industryHeroImages = getIndustriesHeroImages();
  const activeIndustry = industries[currentSlide] ?? industries[0];
  const contentIndustry = industries[contentSlideIndex] ?? industries[0];
  const previousBgImage = industryHeroImages[previousIndustryId] ?? industryHeroImages["real-estate"];
  const activeCardImage = industryHeroImages[activeIndustry.id] ?? industryHeroImages["real-estate"];

  /** Sab cards (1–7) ke liye same: DOM se current slide ka card — .slick-current se, ref fallback */
  const getActiveCardElement = (): HTMLDivElement | null => {
    const currentSlideEl = document.querySelector(".industries-hero-slider .slick-slide.slick-current");
    const card = currentSlideEl?.querySelector<HTMLDivElement>("[data-industry-card]");
    if (card) return card;
    return activeCardRef.current;
  };

  const readRectAndStart = () => {
    const el = getActiveCardElement();
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    setExpandFromRect({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      viewportW: window.innerWidth,
      viewportH: window.innerHeight,
    });
    setIsExpanding(true);
    return true;
  };

  const tryStartExpand = (attempt = 0) => {
    if (readRectAndStart()) return;
    const delays = [0, 50, 150, 300];
    const next = delays[attempt + 1];
    if (next !== undefined) setTimeout(() => tryStartExpand(attempt + 1), next);
  };

  const startExpand = (direction: PendingDirection) => {
    if (isExpanding || typeof window === "undefined") return;
    pendingDirectionRef.current = direction;
    expandEndCalledRef.current = false;
    requestAnimationFrame(() => tryStartExpand(0));
  };

  useEffect(() => {
    if (!isExpanding || !expandFromRect) return;
    const t = setTimeout(() => setExpandToFull(true), EXPAND_DELAY_MS);
    return () => clearTimeout(t);
  }, [isExpanding, expandFromRect]);

  const handleExpandEnd = () => {
    if (expandEndCalledRef.current) return;
    expandEndCalledRef.current = true;
    const direction = pendingDirectionRef.current;
    const nextIndex =
      direction === "next"
        ? (currentSlide + 1) % industries.length
        : direction === "prev"
          ? (currentSlide - 1 + industries.length) % industries.length
          : currentSlide;
    // BG = jis card ki expand abhi khatam hui (currentSlide) — next card expand hone tak yahi rahegi
    const expandedIndustry = industries[currentSlide];
    if (expandedIndustry) setPreviousIndustryId(expandedIndustry.id);
    pendingDirectionRef.current = null;
    // Left panel: previous card wala text — jis card ki img expand hui (currentSlide) usi ka, active/next ka nahi
    setContentSlideIndex(currentSlide);
    // Slider next/prev — next card us jagah aa jaye; expand state slider khatam hone ke baad clear karo
    if (direction === "next") sliderRef.current?.slickNext();
    else if (direction === "prev") sliderRef.current?.slickPrev();
    setTimeout(() => {
      setIsExpanding(false);
      setExpandFromRect(null);
      setExpandToFull(false);
    }, SLIDER_SPEED_MS);
  };

  useEffect(() => {
    if (!expandToFull || !isExpanding) return;
    const fallback = setTimeout(handleExpandEnd, EXPAND_DURATION_MS + 150);
    return () => clearTimeout(fallback);
  }, [expandToFull, isExpanding]);

  const handleNextClick = () => startExpand("next");
  const handlePrevClick = () => startExpand("prev");

  useEffect(() => {
    if (isExpanding) return;
    const interval = setInterval(handleNextClick, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, isExpanding]);

  const sliderSettings = {
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: sliderBreakpoints.fourToThreeToTwoToOne,
  };

  const totalSlideCount = industries.length;
  const displayNumber = String(contentSlideIndex + 1).padStart(2, "0");

  // Background body portal — slider ke transform se bilkul alag, right se left shift nahi hoga
  const bgPortal =
    typeof document !== "undefined"
      ? createPortal(
          <div
            aria-hidden
            className="overflow-hidden pointer-events-none"
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
              transform: "translateZ(0)",
              contain: "layout style paint",
            }}
          >
            <div key={previousIndustryId} className="absolute inset-0 animate-industries-bg-fade-in">
              <Image
                src={previousBgImage}
                alt=""
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {bgPortal}

      {/* Expand overlay: content/cards ke peeche — img bari hoti waqt bhi cards aur content dikhte rahen */}
      {isExpanding && expandFromRect && (
        <div
          className="fixed z-[5] overflow-hidden"
          style={{
            ...(expandToFull
              ? fullScreenRectFromCard(expandFromRect)
              : {
                  left: expandFromRect.left,
                  top: expandFromRect.top,
                  width: expandFromRect.width,
                  height: expandFromRect.height,
                }),
            transition: "left 900ms ease-out, top 900ms ease-out, width 900ms ease-out, height 900ms ease-out",
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName === "width" && expandToFull) handleExpandEnd();
          }}
        >
          <div className="absolute inset-0">
            <Image
              src={activeCardImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <div className={combine("relative z-10 w-full", styles.sectionPadding)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left panel: jis card ki img expand ho usi ka text — subtitle, title, description, button sab animate (niche se upar) */}
          <div className="lg:col-span-5 flex flex-col text-left overflow-hidden">
            <div key={contentSlideIndex} className="animate-industries-text-up">
              <p className="text-white/90 text-sm md:text-base font-outfit uppercase tracking-wider mb-3">
                {contentIndustry.name}
              </p>
              <h1 className={combine(styles.h1, "text-white font-bold font-outfit leading-tight mb-4 md:mb-5")}>
                {contentIndustry.title}
              </h1>
              <p className={combine(styles.p2, "text-white/90 max-w-lg leading-relaxed mb-6 md:mb-8")}>
                {contentIndustry.description}
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-lg bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300 w-fit"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden />
                Discover Solutions
              </Link>
            </div>
          </div>

          {/* Right panel: industry cards carousel */}
          <div className="lg:col-span-7">
            <div className="relative">
              <CustomSlider
                settings={sliderSettings}
                showArrows={false}
                onSliderReady={(ref) => {
                  sliderRef.current = ref?.current ?? null;
                }}
                className="industries-hero-slider"
              >
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  const cardBgImage = industryHeroImages[industry.id] ?? industryHeroImages["real-estate"];
                  const isActive = index === currentSlide;
                  const hideActiveCard = isActive && isExpanding;
                  return (
                    <div key={industry.id} className="px-2 md:px-3">
                      <div
                        ref={isActive ? activeCardRef : null}
                        data-industry-card
                        className={combine(
                          "relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[300px] p-7 md:p-8 transition-opacity duration-200",
                          isActive && !isExpanding && "ring-2 ring-white/40 ring-offset-2 ring-offset-transparent",
                          hideActiveCard && "opacity-0 pointer-events-none"
                        )}
                      >
                        <Image
                          src={cardBgImage}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 28vw"
                        />
                        <div className="relative z-10 flex flex-col h-full justify-end text-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {IconComponent && (
                            <div className="mb-5 text-white">
                              <IconComponent width={44} height={44} className="opacity-95" />
                            </div>
                          )}
                          <h3 className="text-white font-bold text-lg md:text-xl font-outfit mb-2">
                            {industry.name}
                          </h3>
                          <p className="text-white/95 text-sm md:text-base font-outfit line-clamp-2">
                            {industry.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CustomSlider>

              {/* Carousel controls: arrows + progress + number */}
              <div className="flex items-center justify-start gap-4 mt-5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevClick}
                    disabled={isExpanding}
                    className="w-10 h-10 rounded-full border-2 border-white/80 text-white flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextClick}
                    disabled={isExpanding}
                    className="w-10 h-10 rounded-full border-2 border-white/80 text-white flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50"
                    aria-label="Next slide"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 max-w-[120px] h-0.5 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${((contentSlideIndex + 1) / Math.max(totalSlideCount, 1)) * 100}%` }}
                  />
                </div>
                <span className="text-white font-bold text-2xl md:text-3xl font-outfit tabular-nums">
                  {displayNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;