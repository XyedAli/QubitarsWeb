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

interface SliderProps {
  firstRowItems: SliderItem[];
  secondRowItems: SliderItem[];
}

const SliderComponent = ({ firstRowItems, secondRowItems }: SliderProps) => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  };

  return (
    <div className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 my-10">
      <style jsx global>{`
        .slick-slide > div {
          padding: 0 1px !important;
        }
        .slick-slide img {
          width: auto !important;
          height: 60px !important;
          max-width: 120px !important;
        }
        @media (max-width: 1024px) {
          .slick-slide img {
            height: 50px !important;
            max-width: 104px !important;
          }
        }
        @media (max-width: 768px) {
          .slick-slide img {
            height: 55px !important;
            max-width: 97px !important;
          }
        }
        @media (max-width: 480px) {
          .slick-slide img {
            height: 37px !important;
            max-width: 80px !important;
          }
        }
        .smooth-slider-1 .slick-list {
          overflow: visible !important;
        }
        .smooth-slider-2 .slick-list {
          overflow: visible !important;
        }
        .smooth-slider-1 .slick-track {
          display: flex !important;
          animation: slideRight 60s linear infinite !important;
          will-change: transform;
        }
        .smooth-slider-2 .slick-track {
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
        .smooth-slider-1:hover .slick-track,
        .smooth-slider-2:hover .slick-track {
          animation-play-state: paused;
        }
      `}</style>
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

export default SliderComponent;
