"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveUpRight, MoveRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { businessTypes } from "@/data";
import { CustomSlider, Button } from "@/components/shared/ui";

const BusinessTypes = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // First card active by default

  // Keep slide count responsive without server/client mismatch.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
  };

  const renderCard = (business: typeof businessTypes[0], index: number) => {
    const isHovered = hoveredIndex === index;
    return (
      <div
        className={`relative bg-white rounded-2xl ${isHovered ? "shadow-xl" : "shadow-sm"} px-6 py-14 lg:py-7 xl:py-10 md:px-4 lg:px-5 xl:px-8 pt-8 xl:pt-12 transition-all border ${isHovered ? "border-[#F05C22]" : "border-gray-100"} h-full flex flex-col`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(0)}
      >
        <div className={`absolute -top-8 lg:-top-9 xl:-top-10 right-3 w-16 lg:w-17 xl:w-20 h-16 lg:h-17 xl:h-20 rounded-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] ${styles.flexCenter} shadow-md z-20`}>
          <business.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
        </div>
        <div className={`absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity pointer-events-none rounded-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white"></div>
        </div>
        <h3 className={`${styles.h4} font-bold mb-2 xl:mb-4 text-blue font-outfit relative z-10`}>
          {business.title}
        </h3>
        <p className={`text-[16px] lg:text-[18px] xl:text-[19px] text-blue leading-normal xl:leading-relaxed font-inter relative z-10`}>
          {business.description}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-white mb-11 md:mb-14 lg:mb-18 xl:mb-20">
      <div className={styles.sectionPadding}>
        <SectionHeading
          subtitle="Business Model"
          title="Strategic Partner for Global Growth"
        />

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-11 mb-10 pt-10">
          {businessTypes.map((business, index) => (
            <div key={index} className="h-full">
              {renderCard(business, index)}
            </div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="block lg:hidden mb-10 pt-9">
          <div className="slider-equal-height">
            <CustomSlider settings={sliderSettings}>
              {businessTypes.map((business, index) => (
                <div key={index} className="px-2">
                  <div className="h-full flex">
                    {renderCard(business, index)}
                  </div>
                </div>
              ))}
            </CustomSlider>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="accent"
            size="lg"
          >
            <Link href="/contact">
              lets Talk Business
            </Link>
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

export default BusinessTypes;

