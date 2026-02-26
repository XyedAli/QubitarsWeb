"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getHeroBackgroundLines } from "@/lib/assets/images";
import { uiUxData } from "@/data/digital-transformation/hero";

interface HeroProps {
  data?: typeof uiUxData;
}

const HeroSection = ({ data = uiUxData }: HeroProps = {}) => {
    const backgroundLines = getHeroBackgroundLines();

    return (
        <section className={combine(styles.flexCenter, styles.sectionPadding, "relative min-h-[40vh] md:min-h-[45vh] overflow-hidden bg-blue mt-4 lg:mt-8 xl:mt-10 rounded-2xl")}>
            <Image
                src={backgroundLines.leftLine}
                alt="background lines left"
                width={500}
                height={500}
                className="absolute right-0 top-0 h-full w-[130px] md:w-[160px] lg:w-[235px] xl:w-[338px] object-cover"
            />
            <Image
                src={backgroundLines.rightLine}
                alt="background lines right"
                width={500}
                height={500}
                className="absolute left-0 top-0 h-full w-[160px] md:w-[210px] lg:w-[355px] xl:w-[516px] object-cover"
            />

            <div className={combine(styles.sectionPadding, "text-center relative z-10")}>
                <div className="max-w-4xl mx-auto">
                    <h1 className={combine(styles.h1, "font-bold text-white leading-tight mb-4 lg:mb-6")}>
                        {data.heading}
                    </h1>

                    <p className={combine(styles.p2, "text-white font-inter leading-relaxed mb-8 max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto")}>
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
