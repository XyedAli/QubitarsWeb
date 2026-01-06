"use client";

import { styles } from "@/styles/style";

const RealEstatePartner = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[78vh] flex items-center">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-bottom z-0"
        style={{ backgroundImage: "url('/assets/images/home/himg15.png')" }}
      />
      <div className={`${styles.sectionPadding} relative z-10 w-full`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-[50px] font-bold text-blue leading-tight font-outfit`}>
            <span className="block">We partner with brands in</span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Real Estate.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default RealEstatePartner;

