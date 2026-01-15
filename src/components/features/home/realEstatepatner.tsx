"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoveUpRight, MoveRight } from "lucide-react";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import Link from "next/link";

const RealEstatePartner = () => {
  const industries = [
    "Real Estate",
    "Travel & Hospitality",
    "Oil, Gas & Energy",
    "Banking & Fintech",
    "Healthcare",
    "EdTech",
    "Startups"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [industries.length]);
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
          <div className="mb-4 md:mb-3">
            <span className={`${styles.h6} font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] font-outfit uppercase tracking-wider`}>
              Real Estate Partnership
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-[59px] font-bold text-blue leading-tight font-outfit mb-6 md:mb-8`}>
            <span className="block">We partner with brands in</span>
            <div className="relative inline-block min-h-[1.2em] mt-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]"
                >
                  {industries[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>

          {/* Description
          <p className={`${styles.p2} text-gray-800 leading-relaxed font-inter max-w-2xl mx-auto mb-8 md:mb-10`}>
            We design and develop digital products, platforms, and tools for real estate brands—helping them modernize operations and scale their business.
          </p> */}

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

