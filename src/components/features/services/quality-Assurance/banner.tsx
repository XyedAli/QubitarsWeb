"use client";

import { combine, styles } from "@/styles/style";
import { getQACloudinaryImages } from "@/lib/assets/images";
import { Button } from "@/components/shared/ui";

const Banner = () => {
    const { QABannerBg } = getQACloudinaryImages();

    return (
        <section
            className={combine(styles.sectionPadding, "bg-blue relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-xl")}
            style={{ backgroundImage: `url(${QABannerBg})` }}
        >
            {/* Mobile: left-aligned. md+: centered block + text + CTA */}
            <div className="relative z-10 w-full max-w-xl xl:max-w-3xl mx-0 md:mx-auto text-left md:text-center px-4 md:px-6 py-10 md:py-12 lg:py-18 xl:py-21 flex flex-col justify-start items-start md:items-center">
                <h2 className={combine(styles.h1, "text-white font-bold mb-2 lg:mb-6 leading-tight xl:leading-normal")}>
                    Ensure your product meets the higher standards       
                     </h2>

                <Button href="/contact" variant="outline" size="lg" showArrow className="mt-6 border-white bg-white text-blue hover:bg-white/90 hover:border-white">
                    Get In Touch
                </Button>
            </div>
            
        </section>
    );
};

export default Banner;