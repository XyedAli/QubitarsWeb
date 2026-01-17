"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
import { aboutImages } from "@/lib/assets/images";
const MissionVision = () => {
  return (
    <section className={`${styles.sectionPadding} bg-[#F5F6FB] py-12 md:py-16 lg:py-20 xl:py-24`}>
      <div className={styles.sectionPadding}>
        {/* Our Mission Section */}
        <div className="mb-8 md:mb-11 lg:mb-14 xl:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 xl:gap-18 items-center">
            {/* Image - Left Side */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-lg overflow-hidden order-1 lg:order-1">
              <Image
                src={aboutImages.mission}
                alt="Our Mission - Team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content - Right Side */}
            <div className="order-2 md:order-2">
              <h2 className={`${styles.h1} font-semibold text-blue mb-4 lg:mb-6 xl:mb-8 font-outfit leading-tight`}>
                Our Mission
              </h2>
              <p className={`${styles.p3} text-gray-700 leading-relaxed font-inter mb-4`}>
                At Qubitars, our mission is to develop reliable, scalable and secure software solutions with an emphasis on best industry practices, cutting-edge technologies and a thorough understanding of customers&apos; unique business needs.
              </p>
              <p className={`${styles.p3} text-gray-700 leading-relaxed font-inter`}>
                We dedicate ourselves as a team to building enduring partnerships with clients based on transparency, integrity and mutual respect.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-12 xl:gap-16 items-center">
            {/* Content - Left Side */}
            <div className="order-2 md:order-1">
              <h2 className={`${styles.h1} font-semibold text-blue mb-3 lg:mb-6 xl:mb-8 font-outfit leading-tight`}>
                Our Vision
              </h2>
              <p className={`${styles.p3} text-gray-700 leading-relaxed font-inter mb-2 xl:mb-4`}>
                Our vision is to pioneer transformative technologies that enable our clients across different industries to shape the future. We aspire to be recognized for our high-quality, secure, reliable and accessible software solutions built with state-of-the-art technologies and a culture that fosters creativity, innovation and continuous improvement.
              </p>
              <p className={`${styles.p3} text-gray-700 leading-relaxed font-inter`}>
                We aim to be recognized for delivering secure, reliable, and accessible software solutions, built with state-of-the-art technologies and a culture that champions creativity, innovation, and continuous improvement.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src={aboutImages.vision}
                alt="Our Vision - Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
