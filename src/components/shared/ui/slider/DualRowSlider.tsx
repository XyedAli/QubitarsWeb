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

  return (
    <div className="dual-row-slider space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 my-6 md:my-8 lg:my-10">
      <div className="slider-row">
        <div className="slider-track slider-track-row1">
          {duplicatedFirstItems.map((item, index) => (
            <div key={index} className="slider-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity"}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-row">
        <div className="slider-track slider-track-row2">
          {duplicatedSecondItems.map((item, index) => (
            <div key={index} className="slider-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className || "object-contain opacity-90 hover:opacity-100 transition-opacity"}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DualRowSlider;
