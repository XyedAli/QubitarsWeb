"use client";

import Image from "next/image";
import { aboutImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";

const AboutIntroSection = () => {
  return (
    <section className={`relative overflow-hidden ${styles.sectionPadding}`}>
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={aboutImages.aboutimg2}
          alt="About Qubitars"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
          unoptimized
        />
      </div>
    </section>
  );
};

export default AboutIntroSection;
