"use client";

import Image from "next/image";
import { getAboutCloudinaryImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";

const AboutIntroSection = () => {
  const aboutCloudinaryImages = getAboutCloudinaryImages();
  
  return (
    <section className={`relative overflow-hidden py-3 xl:py-8`}>
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full mx-2 md:mx-8 lg:mx-16">
          <Image
            src={aboutCloudinaryImages.aboutimg2}
            alt="About Qubitars"
            width={700}
            height={200}
            className="w-full h-auto object-contain min-h-[180px] sm:min-h-[200px] md:min-h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 60vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
