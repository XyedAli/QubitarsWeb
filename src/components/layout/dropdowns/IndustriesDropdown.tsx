"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, CustomSlider, sliderBreakpoints } from "@/components/shared/ui";
import { industries } from "@/data";
import { styles, combine } from "@/styles/style";

// Industries dropdown component
export const IndustriesDropdown = () => {
  const [activeIndustry, setActiveIndustry] = useState("real-estate");
  
  // Slider config for company logos carousel
  const sliderSettings = {
    speed: 2000,
    slidesToShow: 4,
    autoplaySpeed: 2000,
    responsive: sliderBreakpoints.fourToThreeToTwoToOne
  };
  return (
    <>
      <div className="fixed inset-x-0 top-[97px] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="px-4 lg:px-10 xl:px-19 py-6">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 xl:gap-8">
            {/* Industry list sidebar */}
            <div className="space-y-8 col-span-3">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                const isActive = activeIndustry === industry.id;

                return (
                  // map function of sidebar
                  <div
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={combine(
                      styles.flexitems,
                      "gap-1 lg:gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item",
                      isActive ? "bg-[#FFF5E280] shadow-sm rounded-lg px-1 lg:px-2 xl:px-3 py-[12px]" : ""
                    )}
                  >
                    <div className="rounded-lg">
                      <IconComponent
                        width={22}
                        height={22}
                        className={combine("opacity-90", isActive ? "text-accent" : "")}
                      />
                    </div>
                    <div
                      className={`font-medium text-xs lg:text-[15px] xl:text-base relative z-10 ${isActive ? "text-accent" : ""
                        }`}
                    >
                      {industry.name}
                      <div
                        className={`absolute bottom-0 left-0 w-[7rem] lg:w-[8.5rem] xl:w-[10.2rem] h-[1.5px] ${isActive ? "bg-accent" : "bg-transparent"
                          }`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Industry content area */}
            <div className="border-l-2 border-gray-200 ps-6  py-6 col-span-9">
              {industries.map((industry) => {
                if (activeIndustry === industry.id) {
                  return (
                    <div key={industry.id} className="space-y-4">
                      {/* Render rich content (companies, testimonials) or simple content */}
                      {industry.hasSpecialContent ? (
                        <>
                          <div className={combine(styles.flexBetween, "w-full border-b-2 border-gray-300 pb-4")}>
                          <p className="text-black text-sm lg:text-base font-medium w-[70%] leading-snug">
                              {industry.description}
                            </p>
                            <Button variant="outline" size="md" className="text-sm lg:text-base whitespace-nowrap cursor-pointer hover:bg-accent hover:text-white hover:border-none">
                              Discover More
                            </Button>
                          </div>
                          {/* Company logos carousel */}
                          <div className="flex flex-col w-full border-b-2 border-gray-300">
                            <h3 className="text-lg font-bold text-accent mb-2">
                              Companies that we have worked with
                            </h3>
                            <div className="overflow-hidden w-full mt-3 mb-5">
                              <CustomSlider settings={sliderSettings}>
                                {industry.companies?.map((company) => (
                                  <div key={company.id} className="px-0">
                                    <div className={combine(styles.flexCenter, "h-[58px] rounded-xl border border-gray-200 bg-white px-2 hover:border-accent transition-colors duration-300 mx-3")}>
                                      <Image
                                        src={company.image}
                                        width={80}
                                        height={32}
                                        alt={company.alt}
                                        className="w-[120px] h-auto object-contain hover:opacity-90 transition-opacity"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </CustomSlider>
                            </div>
                          </div>
                          {/* Client testimonials */}
                          <div className="border-b-2 border-gray-300 pb-4">
                            {industry.testimonials?.map((testimonial) => (
                              <div key={testimonial.id}>
                                <p className="text-[#666666] text-sm lg:text-base font-medium">
                                  &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className={combine(styles.flexitems, "gap-3 mt-3")}>
                                  <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    width={50}
                                    height={50}
                                    className="hover:opacity-90 transition-opacity"
                                  />
                                  <span className="text-accent font-bold text-md">
                                    {testimonial.author}
                                    <span className="text-[#1A1A1A] font-semibold text-sm">
                                      / {testimonial.position}, {testimonial.company}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* CTA section */}
                          <div className={combine(styles.flexBetween, "w-full")}>
                            <div className={combine(styles.flexCol, "gap-1")}>
                              <h3 className="font-bold text-sm lg:text-base text-accent">Let&apos;s Build Your Next Project Together</h3>
                              <p className="text-[#1E274F] font-semibold text-sm">With over 1000 tech experts, we&apos;re ready to discuss your project.</p>
                            </div>
                            <Button variant="accent" size="lg">
                              Schedule a Call
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Simple content for industries without special content */}
                          <h3 className="text-xl lg:text-2xl font-bold text-accent">
                            {industry.title}
                          </h3>
                          <p className={combine(styles.p4, "text-gray-600")}>
                            {industry.description}
                          </p>
                        </>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};