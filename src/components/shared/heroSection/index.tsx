"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, MoveRight } from "lucide-react";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import { getHeroClasses } from "./styles";

interface Award {
  src: string | import("next/image").StaticImageData;
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
  backgroundType: "image" | "color" | "pattern";
  backgroundImage?: any;
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
  overlayTag?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  customHeightClass?: { mac?: string; nonMac?: string };
}

const HeroSection = ({
  variant = "default",
  title,
  descriptions,
  subtitle,
  buttonText = "Book a Consultation, it's free",
  backgroundType,
  backgroundImage,
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
    if (typeof window === "undefined") return;
    const ua = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();
    setIsMac(/macintosh|mac os x|macintel/.test(ua) || /mac/.test(platform));

    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const h = getHeroClasses(isMac);
  const defaultH = h.defaultHeightClass;
  const heightClass =
    variant === "blog"
      ? customHeightClass
        ? (isMac ? customHeightClass.mac || defaultH : customHeightClass.nonMac || defaultH)
        : h.blogHeightDefaultClass
      : defaultH;
  const isWhite = textColor === "white";
  const textCl = isWhite ? "text-white" : "text-blue";
  const textOp = isWhite ? "text-white/90" : "text-blue";
  const bgFill =
    (backgroundType === "color" || backgroundType === "pattern") ? backgroundColor || "bg-[#1E274F]" : "";
  const accentGradient =
    "bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]";
  const arrowTransition = "transition-opacity duration-300";

  const hasOverlay = overlayTag || overlayTitle || overlayDescription;

  if (variant === "blog") {
    return (
      <section className={`${styles.sectionPadding} relative`}>
        <div className={h.marginTopClass}>
          <div className="mb-5 md:mb-6 mt-2 md:mt-6">
            <h1 className={`${styles.h2} font-bold text-blue capitalize font-outfit leading-tight mb-2`}>{title}</h1>
            {descriptions.map((d, i) => (
              <p key={i} className={`${styles.p3} text-gray-600 font-inter max-w-3xl`}>{d}</p>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <div className={`relative w-full ${heightClass} overflow-hidden`}>
              {backgroundImage && (
                <Image src={backgroundImage} alt="Blog Hero" fill className="object-cover" priority sizes="100vw" quality={90} />
              )}
            </div>
            {hasOverlay && (
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-10 xl:right-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-5 xl:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="relative">
                    {overlayTag && (
                      <span className="absolute -top-9 lg:-top-11 left-0 px-5 py-2 text-xs md:text-sm lg:text-base font-semibold bg-white text-gray-900 rounded-full">
                        {overlayTag}
                      </span>
                    )}
                    {overlayTitle && (
                      <h3 className="text-white font-semibold text-[16px] md:text-[18px] lg:text-[20px] mt-2 xl:mt-0">{overlayTitle}</h3>
                    )}
                    {overlayDescription && <p className="text-white text-xs md:text-sm mt-1">{overlayDescription}</p>}
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="accent" size={isLargeScreen ? "lg" : "md"} className="whitespace-nowrap">
                      <Link href="/contact" className="whitespace-nowrap">{buttonText}</Link>
                      <div className="relative flex-shrink-0">
                        <MoveUpRight className={`w-5 h-5 mx-1 text-white ${arrowTransition} group-hover:opacity-0`} />
                        <MoveRight className={`w-5 h-5 mx-1 text-white font-bold absolute top-0 left-0 opacity-0 ${arrowTransition} group-hover:opacity-100`} />
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

  const isPattern = backgroundType === "pattern";
  const isImage = backgroundType === "image";
  const awardCl = (cls: string) => `object-contain opacity-90 hover:opacity-100 transition-opacity ${cls}`;

  return (
    <div className={`${styles.sectionPadding} relative`}>
      <div className={`relative w-full overflow-hidden flex items-center ${h.marginTopClass} rounded-xl`}>
        <div className={`relative z-0 w-full ${heightClass} overflow-hidden ${bgFill}`}>
          {isImage && <div className="absolute inset-0 z-10" />}
          {isPattern && <div className="absolute inset-0 bg-black/30 z-10" />}
          {isImage && backgroundImage && (
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
          {isPattern && patternImages?.mobile && (
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
          {isPattern && patternImages?.desktop && (
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 overflow-visible pointer-events-none z-0">
              <div className="relative w-full h-full flex justify-end">
                <Image
                  src={patternImages.desktop}
                  alt="Background pattern"
                  width={1800}
                  height={1400}
                  className={`object-contain object-right w-auto h-auto ${h.desktopImageMinWidthClass} min-h-[9%] ${h.desktopImageTopClass}`}
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-9 items-start md:items-center w-full h-full relative z-20">
            <div className={`${textCl} col-span-8 text-left relative z-20 pe-4 md:pe-0 ps-4 xl:ps-10 ${h.marginBottomClass}`}>
              {subtitle && (
                <p className={`text-[18px] lg:text-[20px] xl:text-[24px] ${h.nextGenTextClass} font-semibold inline-block bg-clip-text text-transparent ${accentGradient}`}>
                  {subtitle}
                </p>
              )}
              <h1 className={`${h.h1FontClass} font-bold ${textCl} leading-tight font-outfit mb-4 ${titleUppercase ? "uppercase" : ""}`}>
                {title}
              </h1>
              {descriptions.map((desc, i) => (
                <p key={i} className={`text-[16px] lg:text-[18px] ${textOp} max-w-sm lg:max-w-lg xl:max-w-2xl leading-relaxed font-inter ${h.descriptionClass}`}>
                  {desc}
                </p>
              ))}
              <button
                className={`group inline-flex items-center text-sm lg:text-base gap-3 px-4 lg:px-6 xl:px-8 py-2.5 xl:py-4 ${accentGradient} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg ${h.buttonMarginTopClass}`}
              >
                <span>{buttonText}</span>
                <div className="relative">
                  <MoveUpRight className={`w-5 h-5 ${arrowTransition} group-hover:opacity-0`} />
                  <MoveUpRight className={`w-5 h-5 absolute top-0 left-0 opacity-0 ${arrowTransition} group-hover:opacity-100`} />
                </div>
              </button>
            </div>
          </div>
          {awardsSection && (
            <div className={`absolute ${h.awardsBottomClass} left-0 md:left-auto md:right-0 ps-4 sm:px-0 md:px-5 xl:px-10 z-20`}>
              <div className="max-w-md lg:max-w-lg xl:max-w-2xl">
                <p className={`${styles.p4} text-white/50 uppercase flex justify-start font-poppins mb-2 md:mb-1 lg:mb-2 xl:mb-3 whitespace-nowrap`}>
                  {awardsSection.label}
                </p>
                <div className="flex items-center justify-start gap-6 md:gap-2 lg:gap-3 xl:gap-5">
                  {awardsSection.awards.map((award, i) => {
                    const cls = awardCl(award.className);
                    const isSvg = typeof award.src === "string" && award.src.includes(".svg");
                    return isSvg ? (
                      <img
                        key={i}
                        src={award.src as string}
                        alt={award.alt}
                        width={award.width}
                        height={award.height}
                        className={cls}
                        loading="eager"
                        fetchPriority="high"
                      />
                    ) : (
                      <Image
                        key={i}
                        src={award.src}
                        alt={award.alt}
                        width={award.width}
                        height={award.height}
                        sizes="(max-width: 640px) 20vw, (max-width: 1024px) 120px, 160px"
                        className={cls}
                        priority
                        loading="eager"
                        fetchPriority="high"
                        unoptimized
                      />
                    );
                  })}
                  {(awardsSection.ministryText || awardsSection.governmentText) && (
                    <div>
                      {awardsSection.ministryText && (
                        <p className={`hidden md:block text-white font-bold font-inter capitalize ${h.ministryTextClass}`}>
                          {awardsSection.ministryText}
                        </p>
                      )}
                      {awardsSection.governmentText && (
                        <p className={`hidden md:block text-white/90 font-inter ${h.governmentTextClass}`}>
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