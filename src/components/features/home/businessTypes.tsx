"use client";

import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { businessTypes } from "@/data";
import { CustomSlider, sliderBreakpoints } from "@/components/shared/ui";

const BusinessTypes = () => {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  const renderCard = (business: typeof businessTypes[0], index: number) => (
    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl p-4 lg:p-5 xl:p-8 pt-8 lg:pt-12 transition-all border border-gray-100 hover:border-[#F05C22] group h-full">
      <div className={`absolute -top-8 lg:-top-9 xl:-top-10 right-3 w-15 lg:w-17 xl:w-20 h-15 lg:h-17 xl:h-20 rounded-full bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] ${styles.flexCenter} shadow-md z-20`}>
        <business.icon className="w-10 h-10 text-white" />
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
    <section className="bg-white">
      <div className={styles.sectionPadding}>
        <SectionHeading 
          subtitle="Business Model"
          title="Strategic Partner for"
          highlightedText="Global Growth"
        />

        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-11 mb-10 pt-10 ">
          {businessTypes.map((business, index) => (
            <div key={index} className="h-full">
              {renderCard(business, index)}
            </div>
          ))}
        </div>

        <div className="block lg:hidden mb-10 pt-9">
          <div className="slider-equal-height" style={{ overflow: 'visible' }}>
            <CustomSlider settings={sliderSettings}>
              {businessTypes.map((business, index) => (
                <div key={index} className="px-2">
                  <div className="h-full">
                    {renderCard(business, index)}
                  </div>
                </div>
              ))}
            </CustomSlider>
          </div>
        </div>

        <div className="flex justify-center">
          <button className={`bg-gray-100 hover:bg-gray-200 text-blue px-7 py-4 rounded-xl font-semibold ${styles.flexitems} gap-3 transition-all`}>
            Let&apos;s Discuss
            <MoveUpRight className="w-4 h-5 text-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;

