/**
 * Shared card styling for value/barrier cards (Core Values, Growth Barriers).
 * Use in: coreValues.tsx, growthbarrier.tsx
 */

export const valueCardGradient =
  "absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white";

export const valueCardTitleClass =
  "text-[16px] md:text-[20px] lg:text-[24px] text-blue font-bold mb-2 md:mb-3 lg:mb-4 font-outfit leading-tight";

export const valueCardDescClass =
  "text-[12px] md:text-[14px] lg:text-[15px] leading-relaxed font-inter";

/** Card container base — add border class via valueCardBorderClass(isActive) */
export const valueCardBaseClass =
  "group relative bg-[#FAFAFA] rounded-2xl transition-all duration-300 border h-full flex flex-col cursor-pointer";

export function valueCardBorderClass(isActive: boolean): string {
  return isActive ? "border-[#F05C22]" : "border-gray-200 hover:border-gray-300";
}

/** Overlay wrapper for gradient — use with opacity-100/opacity-0 based on isActive */
export const valueCardOverlayClass =
  "absolute inset-0 transition-opacity pointer-events-none rounded-2xl overflow-hidden";

/** Content wrapper — padding and layout */
export const valueCardContentClass =
  "relative z-10 flex flex-col flex-1 p-3 md:p-5 lg:p-6 xl:p-8";

/** Icon circle wrapper base — add border/color via valueCardIconBorderClass(isActive) */
export const valueCardIconWrapperBaseClass =
  "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white border-2 transition-all duration-300 flex items-center justify-center mb-3 md:mb-4 lg:mb-5";

export function valueCardIconBorderClass(isActive: boolean): string {
  return isActive
    ? "border-[#F05C22] text-[#F05C22]"
    : "border-transparent text-blue/70 group-hover:border-[#F05C22] group-hover:text-[#F05C22]";
}

/** Description text color by state */
export function valueCardDescColorClass(isActive: boolean): string {
  return isActive ? "text-gray-700" : "text-gray-600";
}

// --- Compact variant (Growth Barrier only; Core Values use default above) ---

export const valueCardTitleClassCompact =
  `text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] text-blue font-bold mb-2 md:mb-2.5 font-outfit leading-tight`;

export const valueCardContentClassCompact =
  "relative z-10 flex flex-col flex-1 p-3 md:p-4 lg:p-5 xl:p-6";
