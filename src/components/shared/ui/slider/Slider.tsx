"use client";

import React, { useRef, ReactNode, useEffect } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

// Common responsive breakpoints for sliders
export const sliderBreakpoints = {
  // 4 slides -> 3 -> 2 -> 1 (for company logos, etc.)
  fourToThreeToTwoToOne: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  // 3 slides -> 2 -> 1
  threeToTwoToOne: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  // 2 slides -> 1
  twoToOne: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

interface SliderProps {
  children: ReactNode;
  settings?: Settings;
  showArrows?: boolean;
  arrowPosition?: "bottom-right" | "top-right" | "custom";
  className?: string;
  onSliderReady?: (sliderRef: React.RefObject<Slider | null>) => void;
}

export const CustomSlider = ({ 
  children, 
  settings, 
  showArrows = false,
  arrowPosition = "bottom-right",
  className = "",
  onSliderReady
}: SliderProps) => {
  const sliderRef = useRef<Slider>(null);
  
  // Expose slider ref to parent component if callback provided
  useEffect(() => {
    if (onSliderReady) {
      onSliderReady(sliderRef);
    }
  }, [onSliderReady]);

  const defaultSettings: Settings = {
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
    ...settings,
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const getArrowPositionClass = () => {
    switch (arrowPosition) {
      case "top-right":
        return "absolute right-0 top-0 flex gap-1 z-10";
      case "bottom-right":
        return "absolute right-0 bottom-1 flex gap-1 z-10";
      case "custom":
        return "";
      default:
        return "absolute right-0 bottom-1 flex gap-1 z-10";
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Slider ref={sliderRef} {...defaultSettings}>
        {children}
      </Slider>
      {showArrows && (
        <div className={getArrowPositionClass()}>
          <button 
            onClick={handlePrevSlide} 
            className="cursor-pointer hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <ArrowLeft width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
          </button>
          <button 
            onClick={handleNextSlide} 
            className="cursor-pointer hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ArrowRight width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
          </button>
        </div>
      )}
    </div>
  );
};

