"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { homeImages } from "@/lib/assets/images";

const Hero = () => {
  return (
    <div className="mx-4 xl:mx-10">
      <div className="relative w-full overflow-hidden flex items-center mt-5 rounded-xl ">
        {/* Background Pattern */}
        <div className={`relative z-10 bg-[#1E274F] pe-4 md:pe-0 ps-4 xl:ps-10 w-full h-[calc(100vh-158px)]`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-9 items-start md:items-center w-full h-full">
            {/* Left Side - Text Content */}
            {/* title*/}
          
            <div className="text-white col-span-8 text-center md:text-left relative z-10">
            <p
              className={`${styles.h6} mb-2 mt-18 md:mt-0 font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
            >
              Next-Gen Innovation
            </p>
              {/* Main Heading */}
              <h1 className={`text[30px] md:text-[28px] lg:text-[34px] xl:text-[44px] font-bold text-white leading-tight font-outfit uppercase mb-4`}>
                AI-Powered Ecosystems for<span className="hidden xl:inline"><br /></span> Global Companies
              </h1>

              {/* Description */}
              <p className={`${styles.p2} text-white/90 max-w-sm lg:max-w-lg xl:max-w-2xl leading-relaxed font-poppins mb-6`}>
                We help companies across North America, the Middle East, Africa, and Asia Pacific automate operations and transform their asset lifecycle with intelligent software.
              </p>

              {/* CTA Button */}
              <button className="group inline-flex items-center text-sm lg:text-base gap-3 px-4 lg:px-6 xl:px-8 py-2.5 xl:py-4 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg">
                <span>Book a Consultation, it&apos;s free</span>
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveUpRight className="w-5 h-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </div>

            {/* Mobile Background Lines */}
            <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-end">
                <Image
                  src={homeImages.bgLines1}
                  alt="Background lines pattern mobile"
                  width={800}
                  height={600}
                  className="object-contain object-right w-full h-full"
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
                  className="object-contain object-right w-auto h-auto min-w-[195%] lg:min-w-[130%] xl:min-w-[120%] [1440px]:min-w-[130%] min-h-[9%]"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="absolute bottom-5 lg:bottom-5 xl:bottom-7 bottom-1440-11 md:right-0 px-0 md:px-5 xl:px-10 z-20">
            <div className="">
              <p className={(`${styles.p4} text-white/50 uppercase flex justify-start font-poppins mb-1 lg:mb-2 xl:mb-3`)}>Awards & Certifications</p>
              <div className={`${styles.flexCenter} gap-2 lg:gap-3 xl:gap-5`}>
                {[
                  { src: homeImages.himg1, alt: "Award Logo 1", width: 160, height: 50, className: "h-3 md:h-4 lg:h-4 xl:h-5 w-auto" },
                  { src: homeImages.himg2, alt: "Award Logo 2", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 w-auto" },
                  { src: homeImages.himg3, alt: "Award Logo 3", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 w-auto" },
                  { src: homeImages.himg4, alt: "Award Logo 4", width: 120, height: 40, className: "h-6 lg:h-7 xl:h-9 w-auto" },
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
                <p className="text-white font-bold font-inter text-[9px] md:text-xs capatilize 2xl:text-sm">Ministry of Information Technology & Telecom </p>
                <p className="text-white/90 font-inter text-xs 2xl:text-sm">Government of Pakistan</p>
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

