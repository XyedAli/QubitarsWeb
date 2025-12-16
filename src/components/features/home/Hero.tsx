"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { homeImages } from "@/lib/assets/images";

const Hero = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform.toLowerCase();
      setIsMac(/macintosh|mac os x|macintel/.test(userAgent) || /mac/.test(platform));
    }
  }, []);

  const heightClass = isMac
    ? "h-[calc(100vh-175px)] 2xl:h-[calc(100vh-192px)] [1920px]:h-[calc(100vh-190px)]"
    : "h-[calc(100vh-158px)] 2xl:h-[calc(100vh-165px)] [1920px]:h-[calc(100vh-170px)] 3xl:h-[calc(100vh-174px)]";

  const h1FontClass = isMac
    ? "text[30px] md:text-[28px] lg:text-[34px] xl:text-[46px] [1440px]:text-[48px] 2xl:text-[48px] [1920px]:text-[50px] 3xl:text-[52px]"
    : "text[30px] md:text-[28px] lg:text-[34px] xl:text-[44px] [1440px]:text-[44px] 2xl:text-[44px] [1920px]:text-[48px] 3xl:text-[49px]";

  const awardsBottomClass = isMac
    ? "bottom-5 lg:bottom-5 xl:bottom-9 [1440px]:bottom-[36px] 2xl:bottom-[50px] [1920px]:bottom-[52px] 3xl:bottom-[54px]"
    : "bottom-5 lg:bottom-5 xl:bottom-7 [1440px]:bottom-[28px] 2xl:bottom-[28px] [1920px]:bottom-[30px] 3xl:bottom-[32px]";

  const marginTopClass = isMac
    ? "mt-6 xl:mt-7 [1440px]:mt-8 2xl:mt-7 [1920px]:mt-9 3xl:mt-10"
    : "mt-5";

  const marginBottomClass = isMac
    ? "mb-12 xl:mb-14 [1440px]:mb-22 2xl:mb-24"
    : "mb-11";

  const mobileImageTopClass = isMac
    ? "top-0"
    : "top-0";

  const desktopImageTopClass = isMac
    ? "top-0 xl:top-[-10px] [1440px]:top-[-15px] 2xl:top-[-50px] [1920px]:top-[-25px] 3xl:top-[-30px]"
    : "top-0";

  const buttonMarginTopClass = isMac
    ? "mt-4"
    : "";

  const descriptionClass = isMac
    ? "mb-6 text-[16px] md:text-[18px] xl:text-[20px] [1440px]:text-[22px] 2xl:text-[24px] [1920px]:text-[28px]"
    : "mb-6";

  const ministryTextClass = isMac
    ? "text-[10px] md:text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg"
    : "text-[9px] md:text-xs 2xl:text-sm";

  const governmentTextClass = isMac
    ? "text-xs xl:text-sm [1440px]:text-sm 2xl:text-base [1920px]:text-lg"
    : "text-xs 2xl:text-sm";

  return (
    <div className="mx-4 lg:mx-6 xl:mx-10">
      <div className={`relative w-full overflow-hidden flex items-center ${marginTopClass} rounded-xl `}>
        {/* Background Pattern */}
        <div className={`relative z-10 bg-[#1E274F] pe-4 md:pe-0 ps-4 xl:ps-10 w-full ${heightClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-9 items-start md:items-center w-full h-full">
            {/* Left Side - Text Content */}
            {/* title*/}
          
            <div className={`text-white col-span-8 text-center md:text-left relative z-10 ${marginBottomClass}`}>
            <p
              className={`${styles.h6} mb-2 mt-18 md:mt-0 font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
            >
              Next-Gen Innovation
            </p>
              {/* Main Heading */}
              <h1 className={`${h1FontClass} font-bold text-white leading-tight font-outfit uppercase mb-4`}>
                AI-Powered Ecosystems for<span className="hidden xl:inline"><br /></span> Global Companies
              </h1>

              {/* Description */}
              <p className={`${styles.p2} text-white/90 max-w-sm lg:max-w-lg xl:max-w-2xl leading-relaxed font-poppins ${descriptionClass}`}>
                We help companies across North America, the Middle East, Africa, and Asia Pacific automate operations and transform their asset lifecycle with intelligent software.
              </p>

              {/* CTA Button */}
              <button className={`group inline-flex items-center text-sm lg:text-base gap-3 px-4 lg:px-6 xl:px-8 py-2.5 xl:py-4 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg ${buttonMarginTopClass}`}>
                <span>Book a Consultation, it&apos;s free</span>
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveUpRight className="w-5 h-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </div>

            {/* Mobile Background Lines */}
            <div className="md:hidden absolute inset-0 top-0 overflow-hidden pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-end">
                <Image
                  src={homeImages.bgLines1}
                  alt="Background lines pattern mobile"
                  width={800}
                  height={600}
                  className={`object-contain object-right w-full h-full ${mobileImageTopClass}`}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 overflow-visible pointer-events-none z-0">
              <div className="relative w-full h-full flex items-center justify-end">
                <Image
                  src={homeImages.bgLines}
                  alt="Background lines pattern"
                  width={1800}
                  height={1400}
                  className={`object-contain object-right w-auto h-auto min-w-[195%] lg:min-w-[130%] xl:min-w-[120%] [1440px]:min-w-[130%] min-h-[9%] ${desktopImageTopClass}`}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className={`absolute ${awardsBottomClass} md:right-0 px-0 md:px-5 xl:px-10 z-20`}>
            <div className="">
              <p className={(`${styles.p4} text-white/50 uppercase flex justify-start font-poppins mb-1 lg:mb-2 xl:mb-3`)}>Awards & Certifications</p>
              <div className={`${styles.flexCenter} gap-2 lg:gap-3 xl:gap-5`}>
                {[
                  { src: homeImages.himg1, alt: "Award Logo 1", width: 160, height: 50, className: "h-3 md:h-4 lg:h-4 xl:h-5 [1440px]:h-5 2xl:h-6 [1920px]:h-8 w-auto" },
                  { src: homeImages.himg2, alt: "Award Logo 2", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto" },
                  { src: homeImages.himg3, alt: "Award Logo 3", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto" },
                  { src: homeImages.himg4, alt: "Award Logo 4", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 [1440px]:h-10 2xl:h-10 [1920px]:h-11 w-auto" },
                ].map((award, index) => (
                  <Image
                    key={index}
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px"
                    className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${award.className}`}
                    unoptimized
                  />
                ))}
                <div>
                <p className={`text-white font-bold font-inter capatilize ${ministryTextClass}`}>Ministry of Information Technology & Telecom </p>
                <p className={`text-white/90 font-inter ${governmentTextClass}`}>Government of Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

