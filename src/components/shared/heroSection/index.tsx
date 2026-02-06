"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, MoveRight } from "lucide-react";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";

interface Award {
  src: any;
  alt: string;
  width: number;
  height: number;
  className: string;
}

interface HeroSectionProps {
  variant?: "default" | "blog";
  title: string | ReactNode;
  descriptions: string[];
  subtitle?: string;
  buttonText?: string;
  backgroundType: "image" | "color" | "pattern" | "video";
  backgroundImage?: any;
  backgroundVideo?: any;
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
  // Blog-specific props
  overlayTag?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  customHeightClass?: {
    mac?: string;
    nonMac?: string;
  };
}

const HeroSection = ({
  variant = "default",
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
  overlayTag,
  overlayTitle,
  overlayDescription,
  customHeightClass,
}: HeroSectionProps) => {
  const [isMac, setIsMac] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform.toLowerCase();
      setIsMac(/macintosh|mac os x|macintel/.test(userAgent) || /mac/.test(platform));

      // Check initial screen size
      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768); // lg breakpoint is 1024px, so only lg and above get lg button
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const defaultHeightClass = isMac
    ? "h-[65vh] md:h-[calc(100vh-175px)] 2xl:h-[calc(100vh-192px)] [1920px]:h-[calc(100vh-190px)]"
    : "h-[67vh] md:h-[calc(100vh-158px)] 2xl:h-[calc(100vh-165px)] [1920px]:h-[calc(100vh-170px)] 3xl:h-[calc(100vh-174px)]";

  // Blog variant height classes - defined directly in heroSection
  const blogHeightClass = customHeightClass
    ? isMac
      ? customHeightClass.mac || defaultHeightClass
      : customHeightClass.nonMac || defaultHeightClass
    : isMac
    ? "h-[60vh] md:h-[calc(100vh-270px)] lg:h-[calc(100vh-280px)] 2xl:h-[calc(100vh-292px)] [1920px]:h-[calc(100vh-240px)]"
    : "h-[60vh] md:h-[calc(100vh-255px)] lg:h-[calc(100vh-260px)] 2xl:h-[calc(100vh-270px)] [1920px]:h-[calc(100vh-290px)]";

  const heightClass = variant === "blog" ? blogHeightClass : defaultHeightClass;

  const h1FontClass = isMac
    ? "text-[24px] md:text-[28px] lg:text-[34px] xl:text-[46px] [1440px]:text-[48px] 2xl:text-[48px] [1920px]:text-[50px] 3xl:text-[52px]"
    : "text-[24px] md:text-[28px] lg:text-[34px] xl:text-[44px] [1440px]:text-[44px] 2xl:text-[44px] [1920px]:text-[48px] 3xl:text-[49px]";

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

  // Blog variant layout
  if (variant === "blog") {
    return (
      <section className={`${styles.sectionPadding} relative`}>
        <div className={`${marginTopClass}`}>
          {/* Heading */}
          <div className={`mb-5 md:mb-6 mt-2 md:mt-6`}>
            <h1 className={`${styles.h2} font-bold text-blue capitalize font-outfit leading-tight mb-2`}>
              {title}
            </h1>
            {descriptions.map((description, index) => (
              <p
                key={index}
                className={`${styles.p3} text-gray-600 font-inter max-w-3xl`}
              >
                {description}
              </p>
            ))}
          </div>

          {/* Hero Image */}
          <div className={`relative rounded-2xl overflow-hidden`}>
            <div className={`relative w-full ${heightClass} overflow-hidden`}>
              {backgroundImage && (
                <Image
                  src={backgroundImage}
                  alt="Blog Hero"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                  quality={90}
                />
              )}
            </div>

            {/* Overlay Card */}
            {(overlayTag || overlayTitle || overlayDescription) && (
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-10 xl:right-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-5 xl:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left Content */}
                  <div className="relative">
                    {overlayTag && (
                      <span className="absolute -top-9 lg:-top-11 left-0 px-5 py-2 text-xs md:text-sm lg:text-base font-semibold bg-white text-gray-900 rounded-full">
                        {overlayTag}
                      </span>
                    )}
                    {overlayTitle && (
                      <h3 className={`text-white font-semibold text-[16px] md:text-[18px] lg:text-[20px] mt-2 xl:mt-0`}>
                        {overlayTitle}
                      </h3>
                    )}
                    {overlayDescription && (
                      <p className="text-white text-xs md:text-sm mt-1">
                        {overlayDescription}
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <Button variant="accent" size={isLargeScreen ? "lg" : "md"} className="whitespace-nowrap">
                      <Link href="/contact" className="whitespace-nowrap">{buttonText}</Link>
                      <div className="relative flex-shrink-0">
                        <MoveUpRight className="w-5 h-5 mx-1 text-white transition-opacity duration-300 group-hover:opacity-0" />
                        <MoveRight className="w-5 h-5 mx-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant layout (home page)
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
              sizes="100vw"
              quality={90}
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
              className={`${textColorClass} col-span-8 text-left relative z-20 pe-4 md:pe-0 ps-4 xl:ps-10 ${marginBottomClass}`}
            >
              {subtitle && (
                <p
                  className={`text-[18px] lg:text-[20px] xl:text-[24px] ${nextGenTextClass} font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
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
                  className={`text-[16px] lg:text-[18px] ${textOpacityClass} max-w-sm lg:max-w-lg xl:max-w-2xl leading-relaxed font-inter ${descriptionClass}`}
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
              className={`absolute ${awardsBottomClass} left-0 md:left-auto md:right-0 ps-4 sm:px-0 md:px-5 xl:px-10 z-20`}
            >
              <div className="max-w-md lg:max-w-lg xl:max-w-2xl">
                <p
                  className={`${styles.p4} text-white/50 uppercase flex justify-start font-poppins mb-2 md:mb-1 lg:mb-2 xl:mb-3 whitespace-nowrap`}
                >
                  {awardsSection.label}
                </p>
                <div className={`flex items-center justify-start gap-6 md:gap-2 lg:gap-3 xl:gap-5`}>
                  {awardsSection.awards.map((award, index) => {
                    const isSvg = typeof award.src === 'string' && award.src.includes('.svg');
                    // Hero awards are always priority (above the fold)
                    const isPriority = true;
                    
                    if (isSvg) {
                      return (
                        <img
                          key={index}
                          src={award.src}
                          alt={award.alt}
                          width={award.width}
                          height={award.height}
                          className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${award.className}`}
                          loading="eager"
                          fetchPriority="high"
                        />
                      );
                    }
                    
                    return (
                      <Image
                        key={index}
                        src={award.src}
                        alt={award.alt}
                        width={award.width}
                        height={award.height}
                        sizes="(max-width: 640px) 20vw, (max-width: 1024px) 120px, 160px"
                        className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${award.className}`}
                        priority={isPriority}
                        loading="eager"
                        fetchPriority="high"
                        unoptimized
                      />
                    );
                  })}
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

