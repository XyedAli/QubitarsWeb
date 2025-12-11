"use client";

import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { homeImages } from "@/lib/assets/images";

const Hero = () => {
  return (
    <div className="mx-6">
      <div className="relative w-full min-h-screeen overflow-hidden flex items-center mb-5 mt-5 rounded-xl ">
        {/* Background Pattern */}
        <div className={`relative z-10  bg-[#1E274F] px-10 w-full pb-25`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-9 items-center w-full">
            {/* Left Side - Text Content */}
            {/* title*/}
          
            <div className="text-white col-span-8">
            <p
              className={`${styles.p1} mb-2 font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
            >
              Next-Gen Innovation
            </p>
              {/* Main Heading */}
              <h1 className={`text-[44px] font-black text-white leading-tight uppercase mb-4`}>
                AI-Powered Ecosystems for
                <br />
                Global Companies
              </h1>

              {/* Description */}
              <p className={`${styles.p2} text-white/90 max-w-2xl leading-relaxed mb-6`}>
                We help companies across North America, the Middle East, Africa, and Asia Pacific automate operations and transform their asset lifecycle with intelligent software.
              </p>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1E274F] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                <span>Book a Consultation, it&apos;s free</span>
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveUpRight className="w-5 h-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </div>

            {/* Right Side - Visual Element */}
            <div className="hidden lg:block relative col-span-4">
              <div className="relative w-full h-[500px]">
                {/* Abstract Grid Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="absolute bottom-5 right-0 px-10 z-20">
            <div className="">
              <p className="text-white/50 text-base uppercase flex justify-start mb-3">Awards & Certifications</p>
              <div className="flex items-center justify-center gap-5">
                {[
                  { src: homeImages.himg1, alt: "Award Logo 1", width: 160, height: 50, className: "h-8 sm:h-9 lg:h-5 w-auto" },
                  { src: homeImages.himg2, alt: "Award Logo 2", width: 120, height: 40, className: "h-5 sm:h-6 lg:h-9 w-auto" },
                  { src: homeImages.himg3, alt: "Award Logo 3", width: 120, height: 40, className: "h-5 sm:h-6 lg:h-9 w-auto" },
                  { src: homeImages.himg4, alt: "Award Logo 4", width: 120, height: 40, className: "h-5 sm:h-6 lg:h-9 w-auto" },
                ].map((award, index) => (
                  <Image
                    key={index}
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px"
                    className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${award.className}`}
                  />
                ))}
                <div>
                <p className="text-white font-bold font-inter text-xs capatilize 2xl:text-sm">Ministry of Information Technology & Telecom </p>
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

