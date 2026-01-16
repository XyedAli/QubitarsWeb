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
 sectionPadding : "mx-4 lg:mx-8 xl:mx-16 mx-1700-260",
 sectionPaddingY : "py-16 md:py-20 lg:py-24",

// Flex utilities
 flexCenter : "flex items-center justify-center",
 flexBetween : "flex items-center justify-between",
 flexCol : "flex flex-col",
 flexitems : "flex items-center",

//bg Colors
// TopNav styles
 topNavContainer : "flex items-center gap-[6px] hover:text-accent transition-all duration-300 cursor-pointer group",
 topNavText : "text-black text-[11px] md:text-[13px] font-bold group-hover:text-accent transition-colors",

// Contact Form styles
 inputBase: "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-inter placeholder:text-gray-400",
 inputError: "border-red-500",
 inputNormal: "border-gray-300",
 labelBase: "text-black font-semibold mb-2 block font-inter",
 errorText: "text-red-500 text-sm mt-1 font-inter",
 checkboxBase: "w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent cursor-pointer",
 checkboxLabel: "flex items-center gap-2 cursor-pointer group",
 checkboxText: "text-black font-inter group-hover:text-accent transition-colors",
 dropdownButton: "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-inter bg-white flex items-center justify-between gap-2 text-left",
 dropdownContainer: "absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-[300px] overflow-hidden flex flex-col",
 dropdownSearchContainer: "p-2 border-b border-gray-200 sticky top-0 bg-white",
 dropdownSearchInput: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm",
 dropdownList: "overflow-y-auto max-h-[240px]",
 dropdownItem: "w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors",
 dropdownItemActive: "bg-accent/10",
 dropdownNoResults: "px-4 py-2 text-gray-500 text-sm",
 phoneInputContainer: "flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent overflow-hidden",
 phoneCodeButton: "ps-3 py-3 flex items-center gap-1 font-inter min-w-[83px] xl:min-w-[91px] whitespace-nowrap",
 phoneInput: "flex-1 ps-1 pe-4 py-3 focus:outline-none font-inter",
 submitButton: "w-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg font-inter text-lg",
 chevronIcon: "w-4 h-4 transition-transform flex-shrink-0",
 searchIcon: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400",
 countryItem: "flex items-center gap-3",
 countryFlag: "font-medium min-w-[50px]",
 countryName: "text-gray-700 flex-1",
 countryCode: "text-gray-500 font-medium",

};
export const combine = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
