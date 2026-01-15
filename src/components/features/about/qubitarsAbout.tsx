"use client";

import Image from "next/image";
import { aboutImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";

const AboutIntroSection = () => {
  return (
    <section className={`relative overflow-hidden py-3 xl:py-8`}>
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full mx-4 md:mx-8 lg:mx-16">
          <Image
            src={aboutImages.aboutimg2}
            alt="About Qubitars"
            width={700}
            height={200}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 60vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
