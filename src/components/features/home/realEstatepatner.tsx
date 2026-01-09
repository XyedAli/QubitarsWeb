"use client";

import { MoveUpRight, MoveRight } from "lucide-react";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import Link from "next/link";

const RealEstatePartner = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/images/home/himg15.png')" }}
      />
      
      {/* Light overlay - keeps bg visible */}
      <div className="absolute inset-0 bg-white/30 md:bg-white/25 z-[1]" />
      
      <div className={`${styles.sectionPadding} relative z-10 w-full`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-4 md:mb-6">
            <span className={`${styles.h6} font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] font-outfit uppercase tracking-wider`}>
              Real Estate Partnership
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`${styles.h1} font-bold text-blue leading-tight font-outfit mb-6 md:mb-8`}>
            <span className="block">We partner with brands in</span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Real Estate
            </span>
          </h2>

          {/* Description */}
          <p className={`${styles.p2} text-gray-800 leading-relaxed font-inter max-w-2xl mx-auto mb-8 md:mb-10`}>
            We design and develop digital products, platforms, and tools for real estate brands—helping them modernize operations and scale their business.
          </p>

          {/* CTA Button */}
          <Button
            variant="accent"
            size="lg"
            className="font-outfit "
          >
            <span className={`${styles.p2}`}>
            <Link href="/contact">Start Partnership</Link></span>
            <div className="relative">
              <MoveUpRight className="w-5 h-5 mx-1 text-white transition-opacity duration-300 group-hover:opacity-0" />
              <MoveRight className="w-5 h-5 mx-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealEstatePartner;

