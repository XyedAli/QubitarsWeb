"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1E274F] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a5568_1px,transparent_1px),linear-gradient(to_bottom,#4a5568_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content Container */}
      <div className={`relative z-10 ${styles.container} py-32 md:py-40 lg:py-48`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8">
            {/* Main Heading */}
            <h1 className={`${styles.h1} font-black text-white leading-tight`}>
              AI-Powered Ecosystems for
              <br />
              Global Companies
            </h1>

            {/* Description */}
            <p className={`${styles.p1} text-white/90 max-w-2xl leading-relaxed`}>
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
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Abstract Grid Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20 lg:mt-32 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
              Awards
            </div>
            <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80">
              {/* Award Logos Placeholder - Replace with actual logo images */}
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 rounded px-4">
                <span className="text-white text-xs font-semibold">Clutch</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 rounded px-4">
                <span className="text-white text-xs font-semibold">PSEB</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 rounded px-4">
                <span className="text-white text-xs font-semibold">ISO</span>
              </div>
              <div className="flex items-center justify-center h-12 w-32 bg-white/10 rounded px-4">
                <span className="text-white text-xs font-semibold text-center">Ministry IT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

