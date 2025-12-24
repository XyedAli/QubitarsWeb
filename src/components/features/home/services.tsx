"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { servicesData } from "@/data/home";

const Services = () => {
  const [activeCardRow1, setActiveCardRow1] = useState<number>(0);
  const [activeCardRow2, setActiveCardRow2] = useState<number>(3);
  const [activeCardRow3, setActiveCardRow3] = useState<number>(4);
  const [activeCardRow1Lg, setActiveCardRow1Lg] = useState<number>(0);
  const [activeCardRow2Lg, setActiveCardRow2Lg] = useState<number>(5);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardClick = (index: number) => {
    if (isLgScreen) {
      if (index < 3) {
        setActiveCardRow1Lg(index);
      } else {
        setActiveCardRow2Lg(index);
      }
    } else {
      if (index < 2) {
        setActiveCardRow1(index);
      } else if (index < 4) {
        setActiveCardRow2(index);
      } else {
        setActiveCardRow3(index);
      }
    }
  };

  return (
    <section className="bg-blue-50 rounded-t-[40px]">
      <div className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
        <SectionHeading
          subtitle="OUR SERVICES"
          title="Growth-Focused Digital Services"
        />

        <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-6 lg:gap-4 xl:gap-8">
          {servicesData.map((service, index) => {
            let isActive = false;
            
            if (isLgScreen) {
              if (index < 3) {
                isActive = activeCardRow1Lg === index;
              } else {
                isActive = activeCardRow2Lg === index;
              }
            } else {
              if (index < 2) {
                isActive = activeCardRow1 === index;
              } else if (index < 4) {
                isActive = activeCardRow2 === index;
              } else {
                isActive = activeCardRow3 === index;
              }
            }
            
            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#010101] shadow-xl col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6"
                    : "bg-white py-4 pe-3 xl:pe-0 border border-gray-200 col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3"
                }`}
              >
                <div className={`relative ps-4 lg:ps-5 xl:ps-7 h-full min-h-[240px] lg:min-h-[270px] xl:min-h-[180px] overflow-hidden ${
                  isActive ? "flex items-center" : "flex flex-col justify-between"
                }`}>
                  {isActive ? (
                    <div className="flex items-center gap-3 lg:gap-4 xl:gap-3 w-full">
                      <div className="flex-1 flex flex-col justify-between py-3 xl:py-4 min-h-[240px] lg:min-h-[220px] xl:min-h-[230px]">
                        <div>
                          <h3 className={`text-[27px] lg:text-[23px] xl:text-[27px] leading-tight font-semibold text-white font-outfit mb-3 xl:mb-4`}>
                            {service.title}
                          </h3>
                          <p className={`${styles.p3} text-white/90 leading-relaxed font-inter`}>
                            {service.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <span className={`${styles.p3} font-semibold text-white`}>Explore More</span>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <MoveUpRight className="w-4 h-4 text-accent" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center max-w-[41%] lg:max-w-[44%] xl:max-w-[40%]">
                        <div className="relative w-full h-[240px] lg:h-[280px] xl:h-[330px]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[32px] font-semibold text-blue font-outfit`}>
                          {service.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`${styles.p3} font-semibold text-blue`}>Explore More</span>
                        <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center">
                          <MoveUpRight className="w-4 h-4 text-blue" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
