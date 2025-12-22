"use client";

import Image from "next/image";
import { styles } from "@/styles/style";

const CallToAction = () => {
  return (
    <section className="bg-white py-8 lg:py-10 xl:py-13">
      <div className={`${styles.sectionPadding}`}>
        <div className=" gap-4 md:gap-6 lg:gap-8">
          <span className={`${styles.h3} font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] `}>
            Excited?
          </span>
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <h2 className={`text-[32px] md:text-[49px] lg:text-[54px] xl:text-[60px] font-bold text-[#1E274F] font-outfit `}>
              Let&apos;s Work Together
            </h2>
            <div className="flex-shrink-0">
                <Image 
                    src="/assets/images/home/emailicon.svg" 
                    alt="call to action" 
                    width={80}
                    height={80}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-21 xl:h-21 object-contain"
                    unoptimized
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

