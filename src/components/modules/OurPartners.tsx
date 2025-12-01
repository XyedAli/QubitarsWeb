 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { partnerIndustries, partnerRowsAfterHeading, partnerRowsBeforeHeading } from "@/data/home";
import type { Logo } from "@/lib/types/home";
import { container, h2 } from "@/commonStyles/styles";

const LogoRow = ({
  items,
  desktopCols,
}: {
  items: Logo[];
  desktopCols: 4 | 5;
}) => {
  const colsClass = desktopCols === 5 ? "grid-cols-5" : "grid-cols-4";
  const widthClass = desktopCols === 4 ? "max-w-2xl lg:max-w-3xl xl:max-w-6xl" : "max-w-7xl";
  return (
    <div className={`grid gap-1 md:gap-6 ${colsClass} ${widthClass} mx-auto`}>
      {items.map((logo) => (
        <div key={logo.alt} className="flex items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={70}
            className="h-[25px] md:h-[40px] lg:h-[50px] w-[140px] md:w-[150px] lg:w-[180px]"
          />
        </div>
      ))}
    </div>
  );
};

const OurPartners = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % partnerIndustries.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#F2F2F2] py-9 lg:py-12 xl:py-15  px-4 sm:px-4 lg:px-14">
      {/* <div className={`${container} `}> */}
        <div className="space-y-6">
          <LogoRow items={partnerRowsBeforeHeading[0]} desktopCols={4} />
          <LogoRow items={partnerRowsBeforeHeading[1]} desktopCols={5} />
        </div>

        <div className="my-14 md:my-18 lg:my-20 xl:my-22 text-center">
          <h2 className="text-[41px] lg:text-[48px] xl:text-[56px] font-black text-[#1e1e1e] leading-tight sm:text-[46px]">
            We partner
            <br className="hidden sm:block" /> with brands in
            <br className="sm:hidden" />
            <span className="mt-2 block min-h-[4rem] overflow-visible text-[#FF8E29]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={partnerIndustries[currentIndustry]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="inline-block leading-tight"
                >
                  {partnerIndustries[currentIndustry]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          <LogoRow items={partnerRowsAfterHeading[0]} desktopCols={5} />
          <LogoRow items={partnerRowsAfterHeading[1]} desktopCols={4} />
        </div>
      {/* </div> */}
    </section>
  );
};

export default OurPartners;