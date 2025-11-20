"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Button from "../ui/button/Button";
import { industries } from "@/data/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Industries = () => {
  
  const [activeIndustry, setActiveIndustry] = useState("real-estate");
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleMouseEnter = () => {
    if (sliderRef) {
      sliderRef.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef) {
      sliderRef.slickPlay();
    }
  };

  return (
    <>
      <div className="fixed inset-x-0 top-[91px] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="px-4 lg:px-10 xl:px-19 py-6">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 xl:gap-8">
            <div className="space-y-8 col-span-3">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                const isActive = activeIndustry === industry.id;

                return (
                  <div
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`flex items-center gap-1 lg:gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item ${isActive
                      ? "bg-[#FFF5E280] shadow-sm rounded-lg px-1 lg:px-2 xl:px-3 py-[12px]"
                      : ""
                      }`}
                  >
                    <div className="rounded-lg">
                      <IconComponent
                        width={22}
                        height={22}
                        className={`opacity-90 ${isActive ? "text-accent" : ""}`}
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

            <div className="border-l-2 border-gray-200 ps-6  py-6 col-span-9">
              {industries.map((industry) => {
                if (activeIndustry === industry.id) {
                  return (
                    <div key={industry.id} className="space-y-4">
                      {industry.hasSpecialContent ? (
                        <>
                          <div className="flex justify-between items-center w-full border-b-2 border-gray-300 pb-4">
                            <p className="text-black text-sm lg:text-base font-medium w-[70%] leading-snug">
                              {industry.description}
                            </p>
                            <Button variant="outline" size="md" className="text-sm lg:text-base whitespace-nowrap cursor-pointer hover:bg-accent hover:text-white hover:border-none">
                              Discover More
                            </Button>
                          </div>
                          <div className="flex flex-col w-full border-b-2 border-gray-300">
                            <h3 className="text-lg font-bold text-accent mb-2">
                              Companies that we have worked with
                            </h3>
                            <div
                              className="overflow-hidden w-full mt-3 mb-5"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <Slider ref={setSliderRef} {...sliderSettings}>
                                {industry.companies?.map((company) => (
                                  <div key={company.id} className="px-0">
                                    <div className="flex h-[58px] items-center justify-center rounded-xl border border-gray-200 bg-white px-2 hover:border-accent transition-colors duration-300 mx-3">
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
                              </Slider>
                            </div>
                          </div>
                          <div className="border-b-2 border-gray-300 pb-4">
                            {industry.testimonials?.map((testimonial) => (
                              <div key={testimonial.id}>
                                <p className="text-[#666666] text-sm lg:text-base font-medium">
                                  "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3 mt-3">
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
                          <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-1">
                              <h3 className="font-bold text-sm lg:text-base text-accent">Let's Build Your Next Project Together</h3>
                              <p className="text-[#1E274F] font-semibold text-sm ">With over 1000 tech experts, we're ready to discuss your project.</p>
                            </div>
                            <Button variant="accent" size="lg">
                              Schedule a Call
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <h3 className="text-xl lg:text-2xl font-bold text-accent">
                            {industry.title}
                          </h3>
                          <p className="text-gray-600">
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