"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeImages } from "@/../public/assets/images";
import { heroLeftIconConfigs, heroRightIconConfigs } from "@/data/home";
import type { HeroIconConfig } from "@/types/home";
import { container, h1 } from "@/commonStyles/styles";

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const ICON_SIZE = 74;
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    hasAnimatedRef.current = true;
  }, []);

  // Helper function to render hover box
  const HoverBox = ({ label }: { label: string }) => (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-1 z-20 pointer-events-none">
      <div className="relative flex items-center rounded-xl border-[2px] border-dashed border-[#FF8E29] bg-white px-3 py-1.5 whitespace-nowrap">
        <span className="text-[#1E274F] font-semibold text-sm tracking-wide capitalize">
          {label}
        </span>
      </div>
    </div>
  );

  // Helper function to render icon with hover
  const IconWithHover = memo(
    ({
      iconId,
      label,
      src,
      alt,
      className,
      isHovered,
      delay,
    }: HeroIconConfig & { isHovered: boolean }) => (
      <motion.div
        className={`${className} z-30 pointer-events-auto`}
        variants={{
          hidden: { opacity: 0, scale: 0.7, y: 16 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        initial={hasAnimatedRef.current ? false : "hidden"}
        animate={hasAnimatedRef.current ? undefined : "visible"}
        transition={{ duration: 0.65, delay, ease: "easeOut" }}
        onMouseEnter={() => setHoveredIcon(iconId)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <div
          className="relative cursor-pointer pointer-events-auto"
          style={{ width: ICON_SIZE, height: ICON_SIZE }}
        >
          <Image
            src={src}
            alt={alt}
            width={ICON_SIZE}
            height={ICON_SIZE}
            className="relative z-0 w-full h-full pointer-events-none"
          />
          {isHovered && <HoverBox label={label} />}
        </div>
      </motion.div>
    )
  );

  return (
    <main className="relative w-full overflow-hidden h-calc(100vh - 5.6rem)">

      {/* Main Orange Background - heroBg.png */}
      <div className="absolute top-54 left-1/2 transform -translate-x-1/2 z-10 flex justify-center items-center w-full">
        <Image
          src={homeImages.companyLogo}
          alt="Company Logo"
          width={300}
          height={100}
          className="w-[1200px] h-auto max-w-full"
        />
      </div>

      {heroLeftIconConfigs.map((icon: HeroIconConfig) => (
        <IconWithHover
          key={icon.iconId}
          {...icon}
          isHovered={hoveredIcon === icon.iconId}
        />
      ))}

      <div
        className="absolute inset-0 w-full h-[70vh] z-0"
        style={{
          backgroundImage: `url('${homeImages.heroBg}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {heroRightIconConfigs.map((icon: HeroIconConfig) => (
        <IconWithHover
          key={icon.iconId}
          {...icon}
          isHovered={hoveredIcon === icon.iconId}
        />
      ))}

      {/* Left Side Background Shape - bg4.png */}
      <div
        className="absolute left-0 top-23 w-[15%] h-full z-0 pointer-events-none bg-contain bg-left bg-no-repeat"
        style={{
          backgroundImage: `url('${homeImages.bg4}')`,
        }}
      />

      {/* Right Side Background Shape - bg3.png */}
      <div
        className="absolute right-0 top-22 w-[15%] h-full z-0 pointer-events-none bg-contain bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('${homeImages.bg3}')`,
        }}
      />

      {/* Content Container */}
      <div className={`relative z-10 ${container} w-full mt-8`}>
        <div className=" gap-12 min-h-[81.3vh] pt-10">

          {/* Left Side - Text Content */}
          <div className="flex flex-col items-center text-center max-w-2xl z-20 flex-1 mx-auto">
            {/* Next-Gen Innovation Pill Button */}
            <button
              className="relative px-8 py-2 rounded-full text-[19px] font-semibold text-black mb-5 transition-all duration-300 overflow-hidden border-2 border-white/40 bg-white/10 backdrop-blur-md"
            >
              <span className="relative z-10">Next-Gen Innovation</span>
            </button>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-[46px] font-poppins font-black text-black leading-tight text-center flex items-center">
              Your Partner In<br />
              <span className="text-white ms-2">Digital</span>
            </h1>

            {/* Step 1: Plus Sign, Arrow Movement, and Box Animation */}
            <div className="relative flex items-center justify-start w-[200px] h-[80px] self-start ms-52 mt-5">
              {/* Plus Sign - Left Top Corner */}
              <div className="absolute left-0 top-0 z-10">
                {/* Horizontal Line */}
                <div className="absolute bg-[#FF8415] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[2.5px] rounded-[1px]" />
                {/* Vertical Line */}
                <div className="absolute bg-[#FF8415] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30px] w-[2.5px] rounded-[1px]" />
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
                  x: 240,
                  y: 65,
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
                  className="w-[35px] h-[30px]"
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
                  width: 240,
                  height: 65,
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
                  className="absolute inset-0 flex items-center justify-center text-[#1E274F] font-black font-poppins z-10 text-[44px]"
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
