"use client";

import DualRowSlider from "./DualRowSlider";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";

const IndustryLogosSlider = () => {
  const industryIcons = getIndustryCloudinaryIcons();
  
  // Ensure all logos are included in correct order
  const logoKeys = ['clogo1', 'clogo2', 'clogo3', 'clogo4', 'clogo5', 'clogo6', 'clogo7', 'clogo8', 'clogo9', 'clogo10', 'clogo11', 'clogo12', 'clogo13', 'clogo14', 'clogo15', 'clogo16', 'clogo17', 'clogo18'] as const;
  
  const logoEntries = logoKeys
    .filter((key) => key in industryIcons)
    .map((key, index) => ({
      src: industryIcons[key as keyof typeof industryIcons],
      alt: `Client Logo ${index + 1}`,
      width: 120,
      height: 60,
    }));

  const firstRowItems = logoEntries.slice(0, 9);
  const secondRowItems = logoEntries.slice(9);

  return <DualRowSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems} />;
};

export default IndustryLogosSlider;
