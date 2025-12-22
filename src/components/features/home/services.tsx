"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headingContent/headings";
import { servicesData } from "@/data/home";

const Services = () => {
  const activeCards = [0, 5];

  return (
    <section className="bg-white rounded-t-[40px]">
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
                    ? "bg-blue shadow-xl col-span-12 md:col-span-6"
                    : "bg-white border border-gray-200 col-span-12 md:col-span-3"
                }`}
              >
                <div className="relative p-6 lg:p-7 xl:p-9 h-full flex flex-col justify-between min-h-[340px] lg:min-h-[380px] xl:min-h-[400px] overflow-hidden">
                  {isActive ? (
                    <>
                      <div className="relative z-20 pr-24 lg:pr-32 xl:pr-36">
                        <h3 className={`${styles.h4} font-bold text-white font-outfit mb-4`}>
                          {service.title}
                        </h3>
                        <p className={`${styles.p3} text-white/90 leading-relaxed font-inter`}>
                          {service.description}
                        </p>
                      </div>
                      <div className="relative z-20 flex items-center gap-2">
                        <span className={`${styles.p3} font-semibold text-white`}>Explore More</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <MoveUpRight className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 bottom-0 w-[45%] lg:w-[48%] xl:w-[50%] flex items-center justify-center z-10">
                        <div className="relative w-full h-[85%]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain object-right"
                          />
                        </div>
                      </div>
                    </>
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

        <div className="flex justify-center mt-8 lg:mt-10 xl:mt-12">
          <button
            className={`bg-gray-100 hover:bg-gray-200 text-blue px-7 py-4 rounded-xl font-semibold ${styles.flexitems} gap-3 transition-all`}
          >
            Let&apos;s Discuss
            <MoveUpRight className="w-4 h-5 text-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
