"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { servicesData } from "@/data/home";

const Services = () => {
  const activeCards = [0, 5];

  return (
    <section className="bg-blue-50 rounded-t-[40px]">
      <div className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
        <SectionHeading
          subtitle="OUR SERVICES"
          title="Growth-Focused"
          highlightedText="Digital Services"
        />

        <div className="grid grid-cols-12 gap-4 lg:gap-5 xl:gap-6">
          {servicesData.map((service, index) => {
            const isActive = activeCards.includes(index);
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "bg-[#010101] shadow-xl col-span-12 md:col-span-6"
                    : "bg-white border border-gray-200 col-span-12 md:col-span-3"
                }`}
              >
                <div className={`relative py-4 px-6 lg:px-7 xl:px-7 h-full min-h-[300px] lg:min-h-[340px] xl:min-h-[180px] overflow-hidden ${
                  isActive ? "flex items-center" : "flex flex-col justify-between"
                }`}>
                  {isActive ? (
                    <div className="flex items-center gap-6 lg:gap-8 xl:gap-10 w-full">
                      <div className="flex-1 flex flex-col justify-between min-h-[240px] lg:min-h-[280px] xl:min-h-[150px]">
                        <div>
                          <h3 className={`${styles.h4} font-bold text-white font-outfit mb-4`}>
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
                      <div className="flex-1 flex items-center justify-center max-w-[45%] lg:max-w-[48%] xl:max-w-[50%]">
                        <div className="relative w-full h-[240px] lg:h-[280px] xl:h-[300px]">
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
                        <h3 className={`${styles.h4} font-bold text-blue font-outfit`}>
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
