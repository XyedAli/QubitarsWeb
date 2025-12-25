"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

interface SliderItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

interface DualRowSliderProps {
  firstRowItems: SliderItem[];
  secondRowItems: SliderItem[];
}

/**
 * DualRowSlider - A reusable two-row infinite scrolling slider component
 * Perfect for displaying logos, client lists, or any items in two rows
 * 
 * @param firstRowItems - Array of items for the first row (scrolls right to left)
 * @param secondRowItems - Array of items for the second row (scrolls left to right)
 */
const DualRowSlider = ({ firstRowItems, secondRowItems }: DualRowSliderProps) => {
  // Duplicate items for seamless infinite scroll
  const duplicatedFirstItems = [...firstRowItems, ...firstRowItems, ...firstRowItems];
  const duplicatedSecondItems = [...secondRowItems, ...secondRowItems, ...secondRowItems];

  const firstSliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    variableWidth: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0",
        }
      }
    ]
  };

  const secondSliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    rtl: false,
    variableWidth: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0",
        }
      }
    ]
  };

  return (
    <div className="dual-row-slider space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 my-10">
      <style jsx global>{`
        .dual-row-slider .slick-slide > div {
          padding: 0 4px !important;
        }
        @media (max-width: 768px) {
          .dual-row-slider .slick-slide > div {
            padding: 0 2px !important;
          }
        }
        .dual-row-slider .slick-slide img {
          width: auto !important;
          height: 60px !important;
          max-width: 120px !important;
        }
        @media (max-width: 1024px) {
          .dual-row-slider .slick-slide img {
            height: 50px !important;
            max-width: 104px !important;
          }
        }
        @media (max-width: 768px) {
          .dual-row-slider .slick-slide img {
            height: 45px !important;
            max-width: 90px !important;
          }
        }
        @media (max-width: 480px) {
          .dual-row-slider .slick-slide img {
            height: 35px !important;
            max-width: 70px !important;
          }
        }
        .dual-row-slider .smooth-slider-1 .slick-list {
          overflow: hidden !important;
        }
        .dual-row-slider .smooth-slider-2 .slick-list {
          overflow: hidden !important;
        }
        @media (min-width: 769px) {
          .dual-row-slider .smooth-slider-1 .slick-list {
            overflow: visible !important;
          }
          .dual-row-slider .smooth-slider-2 .slick-list {
            overflow: visible !important;
          }
        }
        .dual-row-slider .smooth-slider-1 .slick-track {
          display: flex !important;
          animation: slideRight 60s linear infinite !important;
          will-change: transform;
        }
        .dual-row-slider .smooth-slider-2 .slick-track {
          display: flex !important;
          animation: slideLeft 60s linear infinite !important;
          will-change: transform;
        }
        @keyframes slideRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(calc(-100% / 3));
          }
          to {
            transform: translateX(0);
          }
        }
        .dual-row-slider .smooth-slider-1:hover .slick-track,
        .dual-row-slider .smooth-slider-2:hover .slick-track {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* First Row - Scrolls Right to Left */}
      <div className="overflow-hidden smooth-slider-1">
        <Slider {...firstSliderSettings}>
          {duplicatedFirstItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity"}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Row - Scrolls Left to Right */}
      <div className="overflow-hidden smooth-slider-2">
        <Slider {...secondSliderSettings}>
          {duplicatedSecondItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity"}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DualRowSlider;


