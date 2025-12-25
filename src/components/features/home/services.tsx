"use client";

import { useState, useEffect } from "react";
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
    
    servicesData.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardHover = (index: number) => {
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

  const handleCardLeave = () => {
    if (isLgScreen) {
      setActiveCardRow1Lg(0);
      setActiveCardRow2Lg(5);
    } else {
      setActiveCardRow1(0);
      setActiveCardRow2(3);
      setActiveCardRow3(4);
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
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-[background-color,box-shadow] duration-500 ease-in-out cursor-pointer ${
                  isActive
                    ? "bg-[#010101] shadow-xl col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6"
                    : "bg-white border border-gray-200 col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3"
                }`}
              >
                <div className={`relative ps-4 lg:ps-5 xl:ps-5 h-full ${isActive ? "min-h-[270px] lg:min-h-[310px] xl:min-h-[330px]" : "min-h-[270px] lg:min-h-[290px] xl:min-h-[270px]"} ${
                  isActive ? "flex items-center py-5 xl:py-6" : "flex flex-col justify-between py-4 pe-3 xl:pe-0"
                }`}>
                  <div 
                    className={`absolute inset-0 ps-4 lg:ps-5 xl:ps-7 flex items-center gap-3 lg:gap-4 xl:gap-3 w-full h-full transition-opacity duration-500 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}
                  >
                    <div className="flex-1 flex flex-col justify-between py-4 xl:py-5 transition-opacity duration-500 ease-in-out pr-[41%] lg:pr-[44%] xl:pr-[44%]">
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
                  </div>
                  <div className={`relative pe-2 flex flex-col justify-between w-full h-full transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-0 z-0 pointer-events-none absolute inset-0" : "opacity-100 z-10"
                  }`}>
                    <div className="pt-1">
                      <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[30px] font-semibold text-blue font-outfit`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 pb-1">
                      <span className={`${styles.p3} font-semibold text-blue`}>Explore More</span>
                      <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center">
                        <MoveUpRight className="w-4 h-4 text-blue" />
                      </div>
                    </div>
                  </div>
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
