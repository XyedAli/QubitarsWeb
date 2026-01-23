"use client";

import Image from "next/image";
import "./DualRowSlider.css";

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

const DualRowSlider = ({ firstRowItems, secondRowItems }: DualRowSliderProps) => {
  const duplicatedFirstItems = [...firstRowItems, ...firstRowItems, ...firstRowItems];
  const duplicatedSecondItems = [...secondRowItems, ...secondRowItems, ...secondRowItems];

  const isSvg = (src: string) => src.includes('.svg');

  return (
    <div className="dual-row-slider space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 my-6 md:my-8 lg:my-10">
      <div className="slider-row">
        <div className="slider-track slider-track-row1">
          {duplicatedFirstItems.map((item, index) => {
            const isSvgImage = isSvg(item.src);
            const baseClassName = item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity";
            const hdClassName = `${baseClassName} hd-logo-image`;
            
            // For SVGs, use native img tag for maximum quality (no Next.js processing)
            if (isSvgImage) {
              return (
                <div key={index} className="slider-item mx-0 xl:mx-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className={hdClassName}
                    loading="lazy"
                  />
                </div>
              );
            }

            // For non-SVG, use Next.js Image with 2x resolution for HD quality
            return (
              <div key={index} className="slider-item mx-0 xl:mx-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width * 2}
                  height={item.height * 2}
                  className={hdClassName}
                  quality={100}
                  loading="lazy"
                  sizes="(max-width: 768px) 240px, 240px"
                  unoptimized={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider-row">
        <div className="slider-track slider-track-row2">
          {duplicatedSecondItems.map((item, index) => {
            const isSvgImage = isSvg(item.src);
            const baseClassName = item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity";
            const hdClassName = `${baseClassName} hd-logo-image`;
            
            // For SVGs, use native img tag for maximum quality (no Next.js processing)
            if (isSvgImage) {
              return (
                <div key={index} className="slider-item mx-0 xl:mx-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className={hdClassName}
                    loading="lazy"
                  />
                </div>
              );
            }

            // For non-SVG, use Next.js Image with 2x resolution for HD quality
            return (
              <div key={index} className="slider-item mx-0 xl:mx-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width * 2}
                  height={item.height * 2}
                  className={hdClassName}
                  quality={100}
                  loading="lazy"
                  sizes="(max-width: 768px) 240px, 240px"
                  unoptimized={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DualRowSlider;
