"use client";

import { useRef, type ReactNode, type RefObject, useEffect } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

export const sliderBreakpoints = {
  fourToThreeToTwoToOne: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
  threeToTwoToOne: [
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
  twoToOne: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
};

const ARROW_POS: Record<string, string> = {
  "top-right": "absolute right-0 top-0 flex gap-1 z-10",
  "bottom-right": "absolute right-0 bottom-1 flex gap-1 z-10",
  custom: "",
};

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  fade: false,
  cssEase: "linear",
};

const btnClass = "cursor-pointer hover:scale-110 transition-transform";
const iconClass = "opacity-90 text-[#1E274F] hover:text-accent";

interface SliderProps {
  children: ReactNode;
  settings?: Settings;
  showArrows?: boolean;
  arrowPosition?: "bottom-right" | "top-right" | "custom";
  className?: string;
  onSliderReady?: (sliderRef: RefObject<Slider | null>) => void;
}

export const CustomSlider = ({
  children,
  settings,
  showArrows = false,
  arrowPosition = "bottom-right",
  className = "",
  onSliderReady,
}: SliderProps) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    onSliderReady?.(sliderRef);
  }, [onSliderReady]);

  const sliderSettings = { ...DEFAULT_SETTINGS, ...settings };
  const arrowClass = ARROW_POS[arrowPosition] ?? ARROW_POS["bottom-right"];

  return (
    <div className={`relative ${className}`}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {children}
      </Slider>
      {showArrows && (
        <div className={arrowClass}>
          <button type="button" onClick={() => sliderRef.current?.slickPrev()} className={btnClass} aria-label="Previous slide">
            <ArrowLeft width={18} height={18} className={iconClass} />
          </button>
          <button type="button" onClick={() => sliderRef.current?.slickNext()} className={btnClass} aria-label="Next slide">
            <ArrowRight width={18} height={18} className={iconClass} />
          </button>
        </div>
      )}
    </div>
  );
};
