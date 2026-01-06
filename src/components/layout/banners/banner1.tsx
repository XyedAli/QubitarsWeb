"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles, combine } from "@/styles/style";

const Banner1 = () => {
  return (
    <section className="relative overflow-hidden min-h-[48vh] md:min-h-[57vh] lg:min-h-[63vh] flex items-center justify-center mx-5">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/generals/banners/bannerbg1.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className={combine("relative z-10", styles.container, "text-center")}>
        <h2 className={combine( "text-[30px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold mb-8 md:mb-12 leading-tight font-outfit")}>
          A Strategic Partner<br />
        <span className="font-normal"> for Digital Growth</span> 
        </h2>
        <button className="group inline-flex items-center gap-2 px-6 md:px-8 lg:px-10 py-2 lg:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
          <span>Let&apos;s Discuss</span>
          <MoveUpRight className="w-7 h-7 rounded-full bg-white p-1 text-black" />
        </button>
      </div>
    </section>
  );
};

export default Banner1;

