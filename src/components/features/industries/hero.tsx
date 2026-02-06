"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { heroIndustriesCards } from "@/data/industries";
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
  /** Hero bounds — expand img sirf hero tak, next sections par nahi */
  heroLeft?: number;
  heroTop?: number;
  heroWidth?: number;
  heroHeight?: number;
};
type PendingDirection = "next" | "prev" | null;

/** Final rect: hero ke andar absolute — height hero tak hi */
function fullScreenRectFromCard(rect: ExpandRect) {
  if (rect.heroWidth != null && rect.heroHeight != null && rect.heroTop != null && rect.heroLeft != null) {
    return { left: 0, top: 0, width: rect.heroWidth, height: rect.heroHeight };
  }
  return { left: 0, top: 0, width: rect.viewportW, height: rect.viewportH };
}

/** Card position hero-relative (expand overlay hero ke andar absolute) */
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

const IndustriesHero = () => {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const pendingDirectionRef = useRef<PendingDirection>(null);
  const expandEndCalledRef = useRef(false);
  /** Expand khatam hone ke baad bg update par fade-in skip — same img dubara set na dikhe */
  const skipNextBgFadeRef = useRef(false);
  const lastRenderedBgIdRef = useRef<string | null>(null);
  const usedNoAnimationForCurrentBgRef = useRef(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  /** Left panel: sirf expand khatam hone ke baad change — us se pehle nahi */
  const [contentSlideIndex, setContentSlideIndex] = useState(0);
  const [previousIndustryId, setPreviousIndustryId] = useState<string>(heroIndustriesCards[0]?.id ?? "real-estate-1");
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandFromRect, setExpandFromRect] = useState<ExpandRect | null>(null);
  const [expandToFull, setExpandToFull] = useState(false);
  const industryHeroImages = getIndustriesHeroImages();
  const activeIndustry = heroIndustriesCards[currentSlide] ?? heroIndustriesCards[0];
  const contentIndustry = heroIndustriesCards[contentSlideIndex] ?? heroIndustriesCards[0];
  const previousBgImage = industryHeroImages[previousIndustryId] ?? industryHeroImages["real-estate-1"];
  const activeCardImage = industryHeroImages[activeIndustry.id] ?? industryHeroImages["real-estate-1"];

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
        ? (currentSlide + 1) % heroIndustriesCards.length
        : direction === "prev"
          ? (currentSlide - 1 + heroIndustriesCards.length) % heroIndustriesCards.length
          : currentSlide;
    // BG = jis card ki expand abhi khatam hui (currentSlide) — next card expand hone tak yahi rahegi
    const expandedIndustry = heroIndustriesCards[currentSlide];
    if (expandedIndustry) {
      skipNextBgFadeRef.current = true; // isi img ko overlay ne dikhaya, bg par dubara fade-in na ho
      setPreviousIndustryId(expandedIndustry.id);
    }
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

  const totalSlideCount = heroIndustriesCards.length;
  const displayNumber = String(contentSlideIndex + 1).padStart(2, "0");

  // Bg class: nayi industry par skip ho to opacity-100; same industry re-render par bhi opacity-100 rakho (flash na ho)
  const isNewBgId = lastRenderedBgIdRef.current !== previousIndustryId;
  if (isNewBgId) {
    usedNoAnimationForCurrentBgRef.current = skipNextBgFadeRef.current;
    if (skipNextBgFadeRef.current) skipNextBgFadeRef.current = false;
    lastRenderedBgIdRef.current = previousIndustryId;
  }
  const bgNoAnimation = usedNoAnimationForCurrentBgRef.current;
  const bgInnerClass = bgNoAnimation ? "absolute inset-0 opacity-100" : "absolute inset-0 animate-industries-bg-fade-in";

  const useHeroContainment = expandFromRect && expandFromRect.heroHeight != null;
  return (
    <section
      ref={heroSectionRef}
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background: hero ke andar hi — expand overlay jahan khatam hoti wahi, top ki taraf move na ho */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div key={previousIndustryId} className={bgInnerClass}>
          <Image
            src={previousBgImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-900/20" aria-hidden />
        </div>
      </div>

      {/* Expand overlay: hero ke andar absolute — img sirf hero tak, next sections par nahi */}
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
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-blue-900/20 pointer-events-none" aria-hidden />
          </div>
        </div>
      )}

      <div className={combine("relative z-10 w-full", styles.sectionPadding)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left panel: jis card ki img expand ho usi ka text — subtitle, title, description, button sab animate (niche se upar) */}
          <div className="lg:col-span-5 flex flex-col text-left overflow-hidden">
            <div key={contentSlideIndex} className="animate-industries-text-up">
              <p className="text-accent text-base md:text-lg font-outfit font-bold uppercase tracking-wider mb-3">
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
                {heroIndustriesCards.map((industry, index) => {
                  const cardBgImage = industryHeroImages[industry.id] ?? industryHeroImages["real-estate-1"];
                  const isActive = index === currentSlide;
                  const hideActiveCard = isActive && isExpanding;
                  return (
                    <div key={industry.id} className="px-2 md:px-3">
                      <div
                        ref={isActive ? activeCardRef : null}
                        data-industry-card
                        className={combine(
                          "relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[300px] p-7 md:p-8 transition-opacity duration-200",
                          isActive && !isExpanding && "border-2 border-white/40",
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
                        <div className="absolute inset-0 z-[1] bg-blue-900/20 rounded-xl pointer-events-none" aria-hidden />
                        <div className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-8 pt-0 text-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
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