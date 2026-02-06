"use client";

import { type ReactNode } from "react";
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

const DEFAULT_CLASS = "object-contain opacity-90 hover:opacity-100 transition-opacity";
const ITEM_CLASS = "slider-item mx-0 xl:mx-3";

function renderItem(item: SliderItem, index: number): ReactNode {
  const cls = `${item.className ?? DEFAULT_CLASS} hd-logo-image`;
  const isSvg = item.src.includes(".svg");
  const wrap = (child: ReactNode) => (
    <div key={index} className={ITEM_CLASS}>{child}</div>
  );
  if (isSvg) {
    return wrap(<img src={item.src} alt={item.alt} width={item.width} height={item.height} className={cls} loading="lazy" />);
  }
  return wrap(
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width * 2}
      height={item.height * 2}
      className={cls}
      quality={100}
      loading="lazy"
      sizes="(max-width: 768px) 240px, 240px"
    />
  );
}

const triple = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

const DualRowSlider = ({ firstRowItems, secondRowItems }: DualRowSliderProps) => (
  <div className="dual-row-slider space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 my-6 md:my-8 lg:my-10">
    <div className="slider-row">
      <div className="slider-track slider-track-row1">{triple(firstRowItems).map(renderItem)}</div>
    </div>
    <div className="slider-row">
      <div className="slider-track slider-track-row2">{triple(secondRowItems).map(renderItem)}</div>
    </div>
  </div>
);

export default DualRowSlider;
