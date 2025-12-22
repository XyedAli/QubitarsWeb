// This file contains styles specific to the website (homepage, landing pages)

// Utility function to combine class names
// Simple function to combine classes

// Typography
 export const styles = {
 h1: "text-[30px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-black ",
 h2: "text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]",
 h3:"text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]",
 h4:"text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]",
 h5: "text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]",
 h6 : "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]",

 p1 : "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-urbanist",
 p2 : "text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-urbanist",
 p3 : "text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] font-urbanist",
 p4 : "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-urbanist",
 p5 : "text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-urbanist",

// Layout
 container : "max-w-7xl mx-auto px-4 xl:px-0",
 containerLarge : "max-w-[78.2rem] mx-auto",
 containerXl : "max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl leading-relaxed",
 sectionPadding : "mx-4 lg:mx-8 xl:mx-13",
 sectionPaddingY : "py-16 md:py-20 lg:py-24",

// Flex utilities
 flexCenter : "flex items-center justify-center",
 flexBetween : "flex items-center justify-between",
 flexCol : "flex flex-col",
 flexitems : "flex items-center",

//bg Colors
// TopNav styles
 topNavContainer : "flex items-center gap-[6px] hover:text-accent transition-all duration-300 cursor-pointer group",
 topNavText : "text-black text-[9px] md:text-[13px] font-bold group-hover:text-accent transition-colors",

};
export const combine = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
