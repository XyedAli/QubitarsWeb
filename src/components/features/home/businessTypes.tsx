"use client";

import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { businessTypes } from "@/data";
import { CustomSlider, sliderBreakpoints, Button } from "@/components/shared/ui";

const BusinessTypes = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

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

  const renderCard = (business: typeof businessTypes[0], index: number) => (
    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl p-4 lg:p-5 xl:p-8 pt-8 lg:pt-12 transition-all border border-gray-100 hover:border-[#F05C22] group h-full flex flex-col">
      <div className={`absolute -top-8 lg:-top-9 xl:-top-10 right-3 w-16 lg:w-20 xl:w-20 h-16 lg:h-20 xl:h-20 rounded-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] ${styles.flexCenter} shadow-md z-20`}>
        <business.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#F05C22]/12 via-white/72 via-[#FFF5EA]/60 to-white"></div>
      </div>
      <h3 className={`${styles.h4} font-bold mb-2 xl:mb-4 text-blue font-outfit relative z-10`}>
        {business.title}
      </h3>
      <p className={`${styles.p3} text-blue leading-normal xl:leading-relaxed font-inter relative z-10`}>
        {business.description}
      </p>
    </div>
  );

  return (
    <section className="bg-white mb-11 md:mb-14 lg:mb-18 xl:mb-20">
      <div className={styles.sectionPadding}>
        <SectionHeading
          subtitle="Business Model"
          title="Strategic Partner for Global Growth"
        />

        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-11 mb-10 pt-10 ">
          {businessTypes.map((business, index) => (
            <div key={index} className="h-full">
              {renderCard(business, index)}
            </div>
          ))}
        </div>

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
            className="bg-gray-100 hover:bg-gray-200 text-blue px-7 py-4 rounded-xl hover:opacity-90 font-semibold gap-3"
          >
            lets Talk Business
            <MoveUpRight className="w-4 h-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;

