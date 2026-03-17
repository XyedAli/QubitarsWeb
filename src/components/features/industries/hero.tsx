"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, CustomSlider } from "@/components/shared/ui";
import { getHeroCardsForIndustry } from "@/data/industries";
import { styles, combine } from "@/styles/style";
import { getIndustriesImages } from "@/lib/assets/images";
import type Slider from "react-slick";

const heroOverlay = "absolute inset-0 bg-[#0000004D] z-[1]";
const heroImageCover = "object-cover object-center";
const heroArrowButton = combine(
  styles.flexCenter,
  "w-10 h-10 rounded-full border-2 border-white/80 text-white hover:bg-white/20 transition-colors duration-300 disabled:opacity-50"
);
const heroCardContent = combine(
  "absolute inset-0 z-10 justify-end p-3 xl:p-4 text-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
  styles.flexCol
);
type ExpandRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  viewportW: number;
  viewportH: number;
  heroLeft?: number;
  heroTop?: number;
  heroWidth?: number;
  heroHeight?: number;
};
type PendingDirection = "next" | "prev" | null;

/** Final rect: hero Image height*/
function fullScreenRectFromCard(rect: ExpandRect) {
  if (rect.heroWidth != null && rect.heroHeight != null && rect.heroTop != null && rect.heroLeft != null) {
    return { left: 0, top: 0, width: rect.heroWidth, height: rect.heroHeight };
  }
  return { left: 0, top: 0, width: rect.viewportW, height: rect.viewportH };
}
/** Card position hero-relative (expand overlay hero image) */
function cardRectRelativeToHero(rect: ExpandRect) {
  if (rect.heroLeft == null || rect.heroTop == null) {
    return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
  }
  return {
    left: rect.left - rect.heroLeft,
    top: rect.top - rect.heroTop,
    width: rect.width,
    height: rect.height,
  };
}
const EXPAND_DURATION_MS = 900;
const EXPAND_DELAY_MS = 0;
const SLIDER_SPEED_MS = 600;
interface IndustriesHeroProps {
  industryId?: string;
}
function getHeroImageForCardId(images: Record<string, string>, cardId: string): string {
  if (images[cardId]) return images[cardId];
  const suffix = cardId.split("-").pop() ?? "1";
  return images[`real-estate-${suffix}`] ?? images["real-estate-1"] ?? "";
}
const IndustriesHero = ({ industryId = "real-estate" }: IndustriesHeroProps) => {
  const heroCards = getHeroCardsForIndustry(industryId);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const pendingDirectionRef = useRef<PendingDirection>(null);
  const expandEndCalledRef = useRef(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentSlideIndex, setContentSlideIndex] = useState(0);
  const [previousIndustryId, setPreviousIndustryId] = useState<string>(heroCards[0]?.id ?? "real-estate-1");
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandFromRect, setExpandFromRect] = useState<ExpandRect | null>(null);
  const [expandToFull, setExpandToFull] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const industryHeroImages = getIndustriesImages();
  const activeIndustry = heroCards[currentSlide] ?? heroCards[0];
  const contentIndustry = heroCards[contentSlideIndex] ?? heroCards[0];
  const previousBgImage = getHeroImageForCardId(industryHeroImages, previousIndustryId);
  const activeCardImage = getHeroImageForCardId(industryHeroImages, activeIndustry.id);

  /** Preload hero images once so background/cards load before animation runs */
  const preloadedRef = useRef(false);
  useEffect(() => {
    if (preloadedRef.current || typeof window === "undefined") return;
    preloadedRef.current = true;
    Object.values(industryHeroImages).forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
    });
  }, [industryHeroImages]);

  const tryMarkReady = () => {
    const card = document.querySelector(".industries-hero-slider .slick-slide.slick-current [data-industry-card]") as HTMLElement | null;
    const hero = heroSectionRef.current;
    if (card && hero) {
      const rect = card.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setIsReady(true);
        return true;
      }
    }
    return false;
  };

  /** Autoplay only after isReady so animation runs smoothly (data/DOM loaded) */
  useEffect(() => {
    if (!isReady || isExpanding) return;
    const interval = setInterval(() => startExpand("next"), 4000);
    return () => clearInterval(interval);
  }, [currentSlide, isExpanding, isReady]);

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
    const heroRect = heroSectionRef.current?.getBoundingClientRect();
    setExpandFromRect({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      viewportW: window.innerWidth,
      viewportH: window.innerHeight,
      ...(heroRect?.height && heroRect?.width && {
        heroLeft: heroRect.left,
        heroTop: heroRect.top,
        heroWidth: heroRect.width,
        heroHeight: heroRect.height,
      }),
    });
    setIsExpanding(true);
    return true;
  };

  const EXPAND_RETRY_DELAYS = [0, 100, 200, 400, 700, 1100, 1600, 2200];

  const tryStartExpand = (attempt = 0) => {
    if (readRectAndStart()) return;
    const next = EXPAND_RETRY_DELAYS[attempt + 1];
    if (next !== undefined) {
      setTimeout(() => tryStartExpand(attempt + 1), next);
    } else {
      const direction = pendingDirectionRef.current;
      advanceSlideWithoutExpand(direction);
      pendingDirectionRef.current = null;
    }
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

  /** Advance to next/prev slide without expand (fallback when DOM not ready). Ensures no card is skipped. */
  const advanceSlideWithoutExpand = (direction: PendingDirection) => {
    const nextIndex =
      direction === "next"
        ? (currentSlide + 1) % heroCards.length
        : direction === "prev"
          ? (currentSlide - 1 + heroCards.length) % heroCards.length
          : currentSlide;
    const industry = heroCards[nextIndex];
    if (industry) setPreviousIndustryId(industry.id);
    setContentSlideIndex(nextIndex);
    if (direction === "next") sliderRef.current?.slickNext();
    else if (direction === "prev") sliderRef.current?.slickPrev();
  };

  const handleExpandEnd = () => {
    if (expandEndCalledRef.current) return;
    expandEndCalledRef.current = true;
    const direction = pendingDirectionRef.current;
    const expandedIndustry = heroCards[currentSlide];
    if (expandedIndustry) setPreviousIndustryId(expandedIndustry.id);
    pendingDirectionRef.current = null;
    setContentSlideIndex(currentSlide);
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

  const handleNextClick = () => (isReady ? startExpand("next") : advanceSlideWithoutExpand("next"));
  const handlePrevClick = () => (isReady ? startExpand("prev") : advanceSlideWithoutExpand("prev"));

  /** Start autoplay only when isReady (slider + DOM ready) — already in useEffect above */

  const sliderSettings = {
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const totalSlideCount = heroCards.length;
  const displayNumber = String(contentSlideIndex + 1).padStart(2, "0");
  const useHeroContainment = expandFromRect && expandFromRect.heroHeight != null;
  return (
    <section
      ref={heroSectionRef}
      className={combine("relative min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] overflow-hidden", styles.flexitems)}
    >
      {/* Background Overlay*/}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div key={previousIndustryId} className="absolute inset-0 animate-industries-bg-fade-in">
          <Image
            src={previousBgImage}
            alt="Previous Background Image"
            fill
            className={heroImageCover}
            priority
            sizes="100vw"
          />
          <div className={heroOverlay} aria-hidden />
        </div>
      </div>

      {/* Expand overlay */}
      {isExpanding && expandFromRect && (
        <div
          className={useHeroContainment ? "absolute z-[5] overflow-hidden" : "fixed z-[5] overflow-hidden"}
          style={{
            ...(expandToFull
              ? fullScreenRectFromCard(expandFromRect)
              : useHeroContainment
                ? cardRectRelativeToHero(expandFromRect)
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
              alt="Active Card Image"
              fill
              className={heroImageCover}
              sizes="100vw"
            />
            <div className={heroOverlay} aria-hidden />
          </div>
        </div>
      )}

      <div className={combine("relative z-10 w-full", styles.sectionPadding)}>
        <div className={combine("grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10 xl:gap-16", styles.flexitems)}>
          <div className={combine("md:col-span-6 lg:col-span-5 text-left overflow-hidden", styles.flexCol)}>
            <div key={contentSlideIndex} className="animate-industries-text-up">
              <p className="text-[#FC7E13] text-lg md:text-xl font-bold tracking-wider mb-3">
                {contentIndustry.name}
              </p>
              <h1 className={combine(styles.h1, "text-white font-bold leading-tight mb-4 xl:mb-5")}>
                {contentIndustry.title}
              </h1>
              <p className={combine("text-white max-w-lg text-lg leading-relaxed mb-6 xl:mb-8")}>
                {contentIndustry.description}
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-fit mt-0 xl:mt-2">
                  {contentIndustry.buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right panel: industry cards carousel — hidden on mobile */}
          <div className="hidden md:block md:col-span-6 lg:col-span-7">
            <div className={combine(styles.flexCol, "relative")}>
              <CustomSlider
                settings={sliderSettings}
                showArrows={false}
                onSliderReady={(ref) => {
                  sliderRef.current = ref?.current ?? null;
                  const readyDelays = [0, 50, 150, 300, 500, 800];
                  readyDelays.forEach((delay) => {
                    setTimeout(() => {
                      if (tryMarkReady()) return;
                    }, delay);
                  });
                }}
                className="industries-hero-slider"
              >
                {heroCards.map((industry, index) => {
                  const IconComponent = industry.icon;
                  const cardBgImage = industryHeroImages[industry.id] ?? industryHeroImages["real-estate-1"];
                  const isActive = index === currentSlide;
                  const hideActiveCard = isActive && isExpanding;
                  return (
                    <div key={industry.id} className="px-1 xl:px-3">
                      <div
                        ref={isActive ? activeCardRef : null}
                        data-industry-card
                        className={combine(
                          "relative rounded-xl overflow-hidden min-h-[240px] lg:min-h-[250px] xl:min-h-[315px] p-7 md:p-8 transition-opacity duration-200",
                          isActive && !isExpanding && "",
                          !isActive && "border-2 border-transparent",
                          hideActiveCard && "opacity-0 pointer-events-none"
                        )}
                      >
                        <Image
                          src={cardBgImage}
                          alt="Industry Card Images"
                          fill
                          className={heroImageCover}
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 28vw"
                        />
                        <div className={heroOverlay} aria-hidden />
                        <div className={heroCardContent}>
                          <h3 className={combine( "text-[#FC7E13] font-bold text-[15px] xl:text-[19px] mb-2")}>
                            {industry.name}
                          </h3>
                          <p className={combine("text-white font-semibold text-base lg:text-[17px] xl:text-[23px] leading-tight")}>
                            {industry.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CustomSlider>

              {/* Carousel controls: arrows + progress + number */}
              <div className={combine(styles.flexitems, "justify-start gap-4 mt-5")}>
                <div className={combine(styles.flexitems, "gap-2")}>
                  <button
                    type="button"
                    onClick={handlePrevClick}
                    disabled={isExpanding}
                    className={heroArrowButton}
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextClick}
                    disabled={isExpanding}
                    className={heroArrowButton}
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
                <span className={combine(styles.h2, "text-white font-bold font-outfit tabular-nums")}>
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