"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles, combine } from "@/styles/style";

const Banner2 = () => {
    return (
        <section className="relative overflow-hidden min-h-[53vh] md:min-h-[57vh] lg:min-h-[63vh] flex items-center mx-5">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/generals/banners/bannerbg2.png"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            <div className={combine("relative z-10 w-full", styles.sectionPadding)}>
                <div className="flex flex-col md:flex-row flex-nowrap justify-center md:justify-between items-center w-full gap-6 md:gap-0">
                    <h2 className={combine("text-[30px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold leading-tight font-outfit text-center md:text-left")}>
                        <span className="md:hidden">
                            <span className="whitespace-nowrap">Build Faster. Scale Smarter.</span><br />
                            Win Bigger.
                        </span>
                        <span className="hidden md:inline">
                            Build Faster.<br />
                            Scale Smarter.<br />
                            Win Bigger.
                        </span>
                    </h2>
                    <button className="group inline-flex items-center gap-2 px-5 md:px-6 lg:px-8 py-2 lg:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex-shrink-0">
                        <span>Let&apos;s Discuss</span>
                        <MoveUpRight className="w-7 h-7 rounded-full bg-white p-1 text-black" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner2;

