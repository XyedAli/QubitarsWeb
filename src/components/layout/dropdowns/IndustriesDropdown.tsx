"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, CustomSlider, sliderBreakpoints } from "@/components/shared/ui";
import { industries } from "@/data";
import { MoveUpRight } from "lucide-react";

import { styles, combine } from "@/styles/style";

export const IndustriesDropdown = () => {
  const pathname = usePathname();
  const activeId = pathname.startsWith("/industries/")
    ? pathname.replace("/industries/", "").split("/")[0] ?? "real-estate"
    : "real-estate";
  const rightSideIndustry = industries.find((i) => i.id === "real-estate") ?? industries[0];

  const isSvg = (src: string) => src.includes('.svg');
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
                const active = activeId === industry.id;

                return (
                  <Link
                    key={industry.id}
                    href={`/industries/${industry.id}`}
                    className={combine(
                      styles.flexitems,
                      "gap-1 lg:gap-3 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item",
                      active ? "bg-[#FFF5E280] shadow-sm rounded-lg px-1 lg:px-2 xl:px-3 py-[12px]" : ""
                    )}
                  >
                    <div className="rounded-lg">
                      <IconComponent
                        width={22}
                        height={22}
                        className={combine("opacity-90", active ? "text-accent" : "")}
                      />
                    </div>
                    <div
                      className={combine(
                        "font-medium text-xs lg:text-[15px] xl:text-base relative z-10",
                        active ? "text-accent" : ""
                      )}
                    >
                      {industry.name}
                      <div
                        className={combine(
                          "absolute bottom-0 left-0 w-[7rem] lg:w-[8.5rem] xl:w-[10.2rem] h-[1.5px]",
                          active ? "bg-accent" : "bg-transparent"
                        )}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Industry content area - always shows Real Estate */}
            <div className="border-l-2 border-gray-200 ps-6 py-6 col-span-9">
              <div key={rightSideIndustry.id} className="space-y-4">
                {/* Render rich content (companies, testimonials) or simple content */}
                {rightSideIndustry.hasSpecialContent ? (
                  <>
                    <div className={combine(styles.flexBetween, "w-full border-b-2 border-gray-300 pb-4")}>
                      <p className="text-black text-sm lg:text-base font-medium w-[70%] leading-snug">
                        {rightSideIndustry.description}
                      </p>
                      <Link href={`/industries/${activeId}`}>
                        <div className="btn btn-pulse inline-flex items-center px-3 lg:px-4 xl:px-5 lg:px-5 xl:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-2.5 xl:py-2.5 m-2.5 border-2 border-orange bg-white text-blue hover:text-white hover:bg-blue rounded-lg cursor-pointer text-sm sm:text-base transition-all duration-300 animate-pulse whitespace-nowrap">
                          Discover More <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                        </div>
                      </Link>
                    </div>
                    {/* Company logos carousel */}
                    <div className="flex flex-col w-full border-b-2 border-gray-300">
                      <h3 className="text-lg font-bold text-accent mb-2">
                        Companies that we have worked with
                      </h3>
                      <div className="overflow-hidden w-full mt-3 mb-5">
                        <CustomSlider settings={sliderSettings}>
                          {rightSideIndustry.companies?.map((company) => (
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
                      {rightSideIndustry.testimonials?.map((testimonial) => (
                        <div key={testimonial.id}>
                          <p className="text-[#666666] text-sm lg:text-base font-medium">
                            &ldquo;{testimonial.quote}&rdquo;
                          </p>
                          <div className={combine(styles.flexitems, "gap-3 mt-3")}>
                            {isSvg(testimonial.avatar) ? (
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                width={50}
                                height={50}
                                className="hover:opacity-90 transition-opacity"
                                loading="lazy"
                              />
                            ) : (
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                width={50}
                                height={50}
                                className="hover:opacity-90 transition-opacity"
                              />
                            )}
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
                      <Button href="/contact-us" variant="accent" size="md" showArrow>
                        Schedule a Call
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Simple content for industries without special content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-accent">
                      {rightSideIndustry.title}
                    </h3>
                    <p className={combine(styles.p4, "text-gray-600")}>
                      {rightSideIndustry.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default IndustriesDropdown;