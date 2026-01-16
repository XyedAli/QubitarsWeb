"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";

interface Award {
  src: any;
  alt: string;
  width: number;
  height: number;
  className: string;
}

interface HeroSectionProps {
  title: string | ReactNode;
  descriptions: string[];
  subtitle?: string;
  buttonText?: string;
  backgroundType: "image" | "color" | "pattern" | "video"; // video added
  backgroundImage?: any;
  backgroundVideo?: any; // new prop
  backgroundColor?: string;
  patternImages?: {
    mobile?: any;
    desktop?: any;
  };
  textColor?: "white" | "blue";
  awardsSection?: {
    label: string;
    awards: Award[];
    ministryText?: string;
    governmentText?: string;
  };
  objectPosition?: string;
  titleUppercase?: boolean;
}

const HeroSection = ({
  title,
  descriptions,
  subtitle,
  buttonText = "Book a Consultation, it's free",
  backgroundType,
  backgroundImage,
  backgroundVideo,
  backgroundColor,
  patternImages,
  textColor = "white",
  awardsSection,
  objectPosition = "right",
  titleUppercase = false,
}: HeroSectionProps) => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform.toLowerCase();
      setIsMac(/macintosh|mac os x|macintel/.test(userAgent) || /mac/.test(platform));
    }
  }, []);

  const heightClass = isMac
    ? "h-[65vh] md:h-[calc(100vh-175px)] 2xl:h-[calc(100vh-192px)] [1920px]:h-[calc(100vh-190px)]"
    : "h-[67vh] md:h-[calc(100vh-158px)] 2xl:h-[calc(100vh-165px)] [1920px]:h-[calc(100vh-170px)] 3xl:h-[calc(100vh-174px)]";

  const h1FontClass = isMac
    ? "text[30px] md:text-[28px] lg:text-[34px] xl:text-[46px] [1440px]:text-[48px] 2xl:text-[48px] [1920px]:text-[50px] 3xl:text-[52px]"
    : "text[30px] md:text-[28px] lg:text-[34px] xl:text-[44px] [1440px]:text-[44px] 2xl:text-[44px] [1920px]:text-[48px] 3xl:text-[49px]";

  const awardsBottomClass = isMac
    ? "bottom-11 md:bottom-5 lg:bottom-5 xl:bottom-9 [1440px]:bottom-[36px] 2xl:bottom-[50px] [1920px]:bottom-[52px] 3xl:bottom-[54px]"
    : "bottom-7 md:bottom-5 lg:bottom-5 xl:bottom-7 [1440px]:bottom-[28px] 2xl:bottom-[28px] [1920px]:bottom-[30px] 3xl:bottom-[32px]";

  const marginTopClass = isMac
    ? "mt-6 xl:mt-7 [1440px]:mt-8 2xl:mt-7 [1920px]:mt-9 3xl:mt-10"
    : "mt-5";

  const marginBottomClass = isMac
    ? "mb-12 xl:mb-14 [1440px]:mb-22 2xl:mb-24"
    : "mb-11";

  const desktopImageTopClass = isMac
    ? "top-0 xl:top-[-10px] [1440px]:top-[-15px] 2xl:top-[-50px] [1920px]:top-[-25px] 3xl:top-[-30px]"
    : "top-0";

  const desktopImageMinWidthClass = isMac
    ? "min-w-[195%] lg:min-w-[135%] xl:min-w-[125%] [1440px]:min-w-[135%] 2xl:min-w-[140%] [1920px]:min-w-[145%] 3xl:min-w-[150%]"
    : "min-w-[195%] lg:min-w-[130%] xl:min-w-[120%] [1440px]:min-w-[130%]";

  const buttonMarginTopClass = isMac ? "mt-4" : "";
  const descriptionClass = isMac
    ? "mb-6 text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] [1440px]:text-[18px] 2xl:text-[20px]"
    : "mb-6";

  const ministryTextClass = isMac
    ? "text-[10px] md:text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg leading-normal"
    : "text-[9px] md:text-xs 2xl:text-sm";

  const governmentTextClass = isMac
    ? "text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg"
    : "text-xs 2xl:text-sm";

  const nextGenTextClass = isMac
    ? "mb-2 mt-25 md:mt-0"
    : "mb-2 mt-18 md:mt-0";

  const textColorClass = textColor === "white" ? "text-white" : "text-blue";
  const textOpacityClass = textColor === "white" ? "text-white/90" : "text-blue";

  return (
    <div className={`${styles.sectionPadding} relative`}>
      <div className={`relative w-full overflow-hidden flex items-center ${marginTopClass} rounded-xl`}>
        {/* Background */}
        <div
          className={`relative z-0 w-full ${heightClass} overflow-hidden ${
            backgroundType === "video"
              ? ""
              : backgroundType === "color"
              ? backgroundColor || "bg-[#1E274F]"
              : backgroundType === "pattern"
              ? backgroundColor || "bg-[#1E274F]"
              : ""
          }`}
        >
          {/* Video Background */}
          {backgroundType === "video" && backgroundVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-poster.jpg" // optional fallback
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          )}

          {/* Dark overlay for text readability */}
          {backgroundType === "image" && (
            <div className="absolute inset-0  z-10" />
          )}
          {backgroundType === "pattern" && (
            <div className="absolute inset-0 bg-black/30 z-10" />
          )}
          {/* No overlay for video - transparent background */}

          {/* Background Image */}
          {backgroundType === "image" && backgroundImage && (
            <Image
              src={backgroundImage}
              alt="Hero background"
              fill
              className="object-cover z-0"
              style={{ objectPosition }}
              priority
              unoptimized
            />
          )}

          {/* Pattern Background */}
          {backgroundType === "pattern" && patternImages?.mobile && (
            <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="relative w-full h-full flex items-center justify-end">
                <Image
                  src={patternImages.mobile}
                  alt="Background pattern mobile"
                  width={800}
                  height={600}
                  className="object-contain object-right w-full h-full top-0"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
          {backgroundType === "pattern" && patternImages?.desktop && (
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 overflow-visible pointer-events-none z-0">
              <div className="relative w-full h-full flex justify-end">
                <Image
                  src={patternImages.desktop}
                  alt="Background pattern"
                  width={1800}
                  height={1400}
                  className={`object-contain object-right w-auto h-auto ${desktopImageMinWidthClass} min-h-[9%] ${desktopImageTopClass}`}
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-9 items-start md:items-center w-full h-full relative z-20">
            <div
              className={`${textColorClass} col-span-8 text-center md:text-left relative z-20 pe-4 md:pe-0 ps-4 xl:ps-10 ${marginBottomClass}`}
            >
              {subtitle && (
                <p
                  className={`${styles.h6} ${nextGenTextClass} font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
                >
                  {subtitle}
                </p>
              )}

              <h1
                className={`${h1FontClass} font-bold ${textColorClass} leading-tight font-outfit mb-4 ${
                  titleUppercase ? "uppercase" : ""
                }`}
              >
                {title}
              </h1>

              {descriptions.map((description, index) => (
                <p
                  key={index}
                  className={`${styles.p2} ${textOpacityClass} max-w-sm lg:max-w-lg xl:max-w-2xl leading-relaxed font-inter ${descriptionClass}`}
                >
                  {description}
                </p>
              ))}

              {/* CTA Button */}
              <button
                className={`group inline-flex items-center text-sm lg:text-base gap-3 px-4 lg:px-6 xl:px-8 py-2.5 xl:py-4 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg ${buttonMarginTopClass}`}
              >
                <span>{buttonText}</span>
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveUpRight className="w-5 h-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Awards Section */}
          {awardsSection && (
            <div
              className={`absolute ${awardsBottomClass} left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 ps-4 sm:px-0 md:px-5 xl:px-10 z-20`}
            >
              <div className="max-w-md lg:max-w-lg xl:max-w-2xl">
                <p
                  className={`${styles.p4} text-white/50 uppercase flex justify-center md:justify-start font-poppins mb-2 md:mb-1 lg:mb-2 xl:mb-3 whitespace-nowrap`}
                >
                  {awardsSection.label}
                </p>
                <div className={`${styles.flexCenter} gap-6 md:gap-2 lg:gap-3 xl:gap-5`}>
                  {awardsSection.awards.map((award, index) => (
                    <Image
                      key={index}
                      src={award.src}
                      alt={award.alt}
                      width={award.width}
                      height={award.height}
                      sizes="(max-width: 640px) 20vw, (max-width: 1024px) 120px, 160px"
                      className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${award.className}`}
                      unoptimized
                    />
                  ))}
                  {(awardsSection.ministryText || awardsSection.governmentText) && (
                    <div>
                      {awardsSection.ministryText && (
                        <p
                          className={`hidden md:block text-white font-bold font-inter capitalize ${ministryTextClass}`}
                        >
                          {awardsSection.ministryText}
                        </p>
                      )}
                      {awardsSection.governmentText && (
                        <p
                          className={`hidden md:block text-white/90 font-inter ${governmentTextClass}`}
                        >
                          {awardsSection.governmentText}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
