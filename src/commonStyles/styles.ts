// This file contains styles specific to the website (homepage, landing pages)

// Utility function to combine class names
export const combine = (
  ...classes: Array<string | false | null | undefined>
): string => classes.filter(Boolean).join(" ");

// Typography
export const h1 = "text-[30px] md:text-[34px] lg:text-[38px] xl:text-[47px] font-bold font-unigeo64";
export const h2 = "text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold font-unigeo64";
export const h3 = "text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-unigeo64";
export const h4 = "text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-unigeo64";
export const h5 = "text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-urbanist";
export const h6 = "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-unigeo64";

export const p1 = "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-urbanist";
export const p2 = "text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-urbanist";
export const p3 = "text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] font-urbanist";
export const p4 = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-urbanist";
export const p5 = "text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-urbanist";

// Layout
export const container = "max-w-7xl mx-auto px-4 xl:px-0";
export const containerLarge = "max-w-[78.2rem] mx-auto";
export const containerXl = "max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl leading-relaxed";

// Flex utilities
export const flexCenter = "flex items-center justify-center";
export const flexBetween = "flex items-center justify-between";
export const flexCol = "flex flex-col";
export const flexitems = "flex items-center";

//bg Colors
// TopNav styles
export const topNavContainer = "flex items-center gap-[6px] hover:text-accent transition-all duration-300 cursor-pointer group";
export const topNavText = "text-black text-[10px] md:text-[13px] font-bold group-hover:text-accent transition-colors";

// Aggregated export for backwards compatibility
export const styles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p1,
  p2,
  p3,
  p4,
  p5,
  container,
  containerLarge,
  containerXl,
  flexCenter,
  flexBetween,
  flexCol,
  flexitems,
  topNavContainer,
  topNavText,
};
