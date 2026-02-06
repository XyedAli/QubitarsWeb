/** Hero section Tailwind classes — mac vs nonMac variants */

export const defaultHeight = {
  mac: "h-[65vh] md:h-[calc(100vh-175px)] 2xl:h-[calc(100vh-192px)] [1920px]:h-[calc(100vh-190px)]",
  nonMac:
    "h-[67vh] md:h-[calc(100vh-158px)] 2xl:h-[calc(100vh-165px)] [1920px]:h-[calc(100vh-170px)] 3xl:h-[calc(100vh-174px)]",
} as const;

export const blogHeightDefault = {
  mac: "h-[60vh] md:h-[calc(100vh-270px)] lg:h-[calc(100vh-280px)] 2xl:h-[calc(100vh-292px)] [1920px]:h-[calc(100vh-240px)]",
  nonMac:
    "h-[60vh] md:h-[calc(100vh-255px)] lg:h-[calc(100vh-260px)] 2xl:h-[calc(100vh-270px)] [1920px]:h-[calc(100vh-290px)]",
} as const;

export const h1Font = {
  mac: "text-[22px] md:text-[28px] lg:text-[34px] xl:text-[46px] [1440px]:text-[48px] 2xl:text-[48px] [1920px]:text-[50px] 3xl:text-[52px]",
  nonMac:
    "text-[22px] md:text-[28px] lg:text-[34px] xl:text-[44px] [1440px]:text-[44px] 2xl:text-[44px] [1920px]:text-[48px] 3xl:text-[49px]",
} as const;

export const awardsBottom = {
  mac: "bottom-11 md:bottom-5 lg:bottom-5 xl:bottom-9 [1440px]:bottom-[36px] 2xl:bottom-[50px] [1920px]:bottom-[52px] 3xl:bottom-[54px]",
  nonMac:
    "bottom-7 md:bottom-5 lg:bottom-5 xl:bottom-7 [1440px]:bottom-[28px] 2xl:bottom-[28px] [1920px]:bottom-[30px] 3xl:bottom-[32px]",
} as const;

export const marginTop = {
  mac: "mt-6 xl:mt-7 [1440px]:mt-8 2xl:mt-7 [1920px]:mt-9 3xl:mt-10",
  nonMac: "mt-5",
} as const;

export const marginBottom = {
  mac: "mb-12 xl:mb-14 [1440px]:mb-22 2xl:mb-24",
  nonMac: "mb-11",
} as const;

export const desktopImageTop = {
  mac: "top-0 xl:top-[-10px] [1440px]:top-[-15px] 2xl:top-[-50px] [1920px]:top-[-25px] 3xl:top-[-30px]",
  nonMac: "top-0",
} as const;

export const desktopImageMinWidth = {
  mac: "min-w-[195%] lg:min-w-[135%] xl:min-w-[125%] [1440px]:min-w-[135%] 2xl:min-w-[140%] [1920px]:min-w-[145%] 3xl:min-w-[150%]",
  nonMac: "min-w-[195%] lg:min-w-[130%] xl:min-w-[120%] [1440px]:min-w-[130%]",
} as const;

export const buttonMarginTop = {
  mac: "mt-4",
  nonMac: "",
} as const;

export const description = {
  mac: "mb-6 text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] [1440px]:text-[18px] 2xl:text-[20px]",
  nonMac: "mb-6",
} as const;

export const ministryText = {
  mac: "text-[10px] md:text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg leading-normal",
  nonMac: "text-[9px] md:text-xs 2xl:text-sm",
} as const;

export const governmentText = {
  mac: "text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg",
  nonMac: "text-xs 2xl:text-sm",
} as const;

export const nextGenText = {
  mac: "mb-2 mt-21 md:mt-0",
  nonMac: "mb-2 mt-14 md:mt-0",
} as const;

export type MacKey = "mac" | "nonMac";

export function getHeroClasses(isMac: boolean): {
  defaultHeightClass: string;
  blogHeightDefaultClass: string;
  h1FontClass: string;
  awardsBottomClass: string;
  marginTopClass: string;
  marginBottomClass: string;
  desktopImageTopClass: string;
  desktopImageMinWidthClass: string;
  buttonMarginTopClass: string;
  descriptionClass: string;
  ministryTextClass: string;
  governmentTextClass: string;
  nextGenTextClass: string;
} {
  const key: MacKey = isMac ? "mac" : "nonMac";
  return {
    defaultHeightClass: defaultHeight[key],
    blogHeightDefaultClass: blogHeightDefault[key],
    h1FontClass: h1Font[key],
    awardsBottomClass: awardsBottom[key],
    marginTopClass: marginTop[key],
    marginBottomClass: marginBottom[key],
    desktopImageTopClass: desktopImageTop[key],
    desktopImageMinWidthClass: desktopImageMinWidth[key],
    buttonMarginTopClass: buttonMarginTop[key],
    descriptionClass: description[key],
    ministryTextClass: ministryText[key],
    governmentTextClass: governmentText[key],
    nextGenTextClass: nextGenText[key],
  };
}
