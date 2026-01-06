"use client";
import { SectionHeading } from "@/components/shared/headings/headings";
import Image from "next/image";
import { styles, combine } from "@/styles/style";

const Banner3 = () => {
    return (
        <section className={combine("relative overflow-hidden bg-white my-4 shadow-xl rounded-xl", styles.sectionPadding)}>
            <div className={combine("relative z-10")}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-18 items-center">
                    <div className="ms-4 lg:ms-7">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`${styles.h6} font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}>
                            Build Faster
                            </span>
                        </div>
                        <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit mb-3`}>
                        Scale Smarter. Scale Smarter.
                        </h2>
                        <p className={`${styles.h6} text-gray-800 md:text-lg font-normal font-inter mb-6 lg:mb-8`}>
                            We design, build, and scale digital products that drive measurable growth.
                        </p>
                        <div className="flex flex-row gap-4">
                            <button className="text-sm lg:text-base px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-4 bg-[#1E274F] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300">
                                Work With Experts
                            </button>
                            <button className="text-sm lg:text-base px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-4 bg-white border-2 border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                    <div className="relative h-[250px] md:h-[310px] lg::h-[360px] xl:h-[390px]">
                        <Image
                            src="/assets/images/generals/banners/bannerbg3.png"
                            alt="Banner 3"
                            fill
                            className="object-cover ms-0 md:ms-8 lg:ms-0"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;

