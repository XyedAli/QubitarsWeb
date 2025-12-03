"use client";

import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeImages } from "@/../public/assets/images";
import { heroLeftIconConfigs, heroRightIconConfigs, twoLineLabels } from "@/data/home";
import type { HeroIconConfig } from "@/lib/types";
import { styles, combine } from "@/styles/style";
import Header from "../navbar";
import { useHero } from "@/lib/hooks";

// Tooltip shown on hover
const HoverBox = ({ label }: { label: string }) => {
  const config = twoLineLabels[label];

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-1 z-20 pointer-events-none">
      <div
        className={combine(
          "relative rounded-xl border-[2px] border-dashed border-[#FF8E29] bg-white px-3 py-1.5",
          config?.minWidth,
          styles.flexitems
        )}
      >
        <span
          className={combine(
            "text-[#1E274F] font-semibold text-sm tracking-wide capitalize text-center",
            config ? "whitespace-pre-line" : "whitespace-nowrap"
          )}
        >
          {config ? config.text : label}
        </span>
      </div>
    </div>
  );
};

type IconWithHoverProps = HeroIconConfig & {
  isHovered: boolean;
  iconSize: number;
  hasAnimatedRef: React.MutableRefObject<boolean>;
  onHoverChange: (id: string | null) => void;
};

// Separate, memoized icon component so hover doesn't restart intro motion
const IconWithHover = memo(
  ({
    iconId,
    label,
    src,
    alt,
    className,
    isHovered,
    delay,
    iconSize,
    hasAnimatedRef,
    onHoverChange,
  }: IconWithHoverProps) => {
    // If hero has already animated in this session, show icons instantly with no motion.
    const transition = hasAnimatedRef.current
      ? { duration: 0, delay: 0 }
      : { duration: 0.65, delay, ease: "easeOut" as const };

    return (
      <motion.div
        className={`${className} z-30 pointer-events-auto`}
        variants={{
          hidden: { opacity: 0, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={transition}
        onMouseEnter={() => onHoverChange(iconId)}
        onMouseLeave={() => onHoverChange(null)}
      >
        <div
          className="relative cursor-pointer pointer-events-auto"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src={src}
            alt={alt}
            width={iconSize}
            height={iconSize}
            className="relative z-0 w-full h-full pointer-events-none"
          />
          {isHovered && <HoverBox label={label} />}
        </div>
      </motion.div>
    );
  }
);

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { iconSize, logoWidth, isMobile, boxDimensions, arrowOffset, hasAnimatedRef } = useHero();

  // After the first mount, mark animation as played so future re-renders skip intro motion
  useEffect(() => {
    hasAnimatedRef.current = true;
  }, [hasAnimatedRef]);

  return (
    <main className="relative w-full overflow-hidden h-screen">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      {/* Main Orange Background - heroBg.png */}
      <div
        className={combine(
          "absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full",
          styles.flexCenter
        )}
      >
        <Image
          src={isMobile ? homeImages.companyLogoMobile : homeImages.companyLogo}
          alt="Company Logo"
          width={300}
          height={100}
          className="h-auto max-w-full"
          style={{ width: logoWidth }}
        />
      </div>

      {heroLeftIconConfigs.map((icon: HeroIconConfig) => (
        <IconWithHover
          key={icon.iconId}
          {...icon}
          iconSize={iconSize}
          hasAnimatedRef={hasAnimatedRef}
          isHovered={hoveredIcon === icon.iconId}
          onHoverChange={setHoveredIcon}
        />
      ))}

      <div
        className="absolute inset-0 bg-[url('/assets/images/home/heroBg.png')] w-full h-[98vh] z-0 bg-center bg-no-repeat bg-[length:100%_100%]"/>
      {heroRightIconConfigs.map((icon: HeroIconConfig) => (
        <IconWithHover
          key={icon.iconId}
          {...icon}
          iconSize={iconSize}
          hasAnimatedRef={hasAnimatedRef}
          isHovered={hoveredIcon === icon.iconId}
          onHoverChange={setHoveredIcon}
        />
      ))}

      {/* Left Side Background Shape - bg4.png */}
      <div
        className="hidden md:block absolute left-0 top-23 xl:top-25 w-[13%] xl:w-[10%] h-full z-0 pointer-events-none bg-[url('/assets/images/home/bg4.png')] bg-contain bg-left bg-no-repeat"
      />

      {/* Right Side Background Shape - bg3.png */}
      <div
        className="hidden md:block absolute right-0 top-21 xl:top-20 w-[13%] xl:w-[10%] h-full z-0 pointer-events-none bg-[url('/assets/images/home/bg3.png')] bg-contain bg-right bg-no-repeat"
      />

      {/* Content Container */}
      <div
        className={combine("relative z-10 w-full mt-8", styles.container)}
      >
        <div className=" gap-12 min-h-[81.3vh] pt-31">

          {/* Left Side - Text Content */}
          <div
            className={combine(
              "items-center text-center max-w-2xl z-20 flex-1 mx-auto",
              styles.flexCol
            )}
          >
            {/* Next-Gen Innovation Pill Button */}
            <button
              className={combine("relative px-8 py-2 rounded-full font-semibold text-black mb-4 xl:mb-5 transition-all duration-300 overflow-hidden border-2 border-white/40 bg-white/10 backdrop-blur-md",styles.p3)}
            >
              <span className="relative z-10">Next-Gen Innovation</span>
            </button>

            {/* Main Headline */}
            <h1
              className={combine(
                styles.flexCenter,
                "text-black leading-tight text-center text-[30px] md:text-[34px] lg:text-[38px] xl:text-[47px] 3xl:text-[64px] font-black font-unigeo64"
                
              )}
            >
              Your Partner In<br />
              <span className="text-white ms-2">Digital</span>
            </h1>

            {/* Step 1: Plus Sign, Arrow Movement, and Box Animation */}
            <div
              className={combine(
                "relative justify-start w-[200px] h-[80px] self-start xl:ml-[13rem] lg:ml-[14.5rem] md:ml-[15.2rem] ml-[7.2rem] mt-5",
                styles.flexitems
              )}
            >
              {/* Plus Sign - Left Top Corner */}
              <div className="absolute left-0 top-0 z-10">
                {/* Horizontal Line */}
                <div className="absolute bg-[#FF8415] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25px] lg:w-[30px] h-[2px] lg:h-[2.5px] rounded-[1px]" />
                {/* Vertical Line */}
                <div className="absolute bg-[#FF8415] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[25px] lg:h-[30px] w-[2px] lg:w-[2.5px] rounded-[1px]" />
              </div>

              {/* Arrow - Moves from Plus Sign to Right Bottom (Outside Box) */}
              <motion.div
                className="absolute z-20 left-0 top-0 translate-x-[1.5px] translate-y-[1.5px]"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1
                }}
                animate={{
                  x: arrowOffset.x,
                  y: arrowOffset.y,
                  opacity: 1
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={homeImages.arrow}
                  alt="Arrow Cursor"
                  width={100}
                  height={100}
                  className="w-[27px] lg:w-[35px] h-[25px] lg:h-[30px]"
                />
              </motion.div>

              {/* Box - Grows from Small to Full Size with Arrow */}
              <motion.div
                className="absolute left-0 top-0 overflow-visible bg-white/10 backdrop-blur-sm border-2 border-orange-500"
                initial={{
                  width: 30,
                  height: 20,
                  opacity: 0
                }}
                animate={{
                  width: boxDimensions.width,
                  height: boxDimensions.height,
                  opacity: 1
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >
                {/* Success Text */}
                <motion.span
                  className={combine(
                    "absolute inset-0 text-[#1E274F] font-black font-poppins z-10 text-[30px] lg:text-[36px] xl:text-[44px]",
                    styles.flexCenter
                  )}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 2.0,
                    ease: "easeOut"
                  }}
                >
                  Success.
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
