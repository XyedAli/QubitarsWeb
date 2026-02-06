"use client";

import DualRowSlider from "./DualRowSlider";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";

const LOGO_KEYS = ["clogo1", "clogo2", "clogo3", "clogo4", "clogo5", "clogo6", "clogo7", "clogo8", "clogo9", "clogo10", "clogo11", "clogo12", "clogo13", "clogo14", "clogo15", "clogo16", "clogo17", "clogo18"] as const;

const SIZE = { width: 120, height: 60 };

const IndustryLogosSlider = () => {
  const icons = getIndustryCloudinaryIcons();
  const entries = LOGO_KEYS.filter((k) => k in icons).map((k, i) => ({
    src: icons[k as keyof typeof icons],
    alt: `Client Logo ${i + 1}`,
    ...SIZE,
  }));
  return <DualRowSlider firstRowItems={entries.slice(0, 9)} secondRowItems={entries.slice(9)} />;
};

export default IndustryLogosSlider;
