"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { getNavbarCloudinaryImages } from "@/lib/assets/images";
import { instaFeedImages } from "@/data";

const InstaFeed = () => {
  const navImages = getNavbarCloudinaryImages();
  return (
    <section className="bg-white relative overflow-hidden">
      <div className={styles.sectionPadding}>
        <div id="life-at-qubitars" className="flex items-center justify-center gap-4 md:gap-6 lg:gap-4 mb-4 md:mb-10 lg:mb-12 scroll-mt-40 md:scroll-mt-44 pt-8 md:pt-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src={navImages.logoSvg}
                alt="Qubitars Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                priority
                loading="eager"
                fetchPriority="high"
                unoptimized
              />
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className={`${styles.p3} font-bold font-outfit leading-tight text-blue`}>
              Follow Us
            </h2>
            <p className={`${styles.p2} text-gray-600 font-inter text-base md:text-lg`}>
              50 posts
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <a
              href="https://www.instagram.com/qubitars"
              target="_blank"
              rel="noopener noreferrer"
              className="
              group inline-flex items-center gap-2 
              px-5 py-2.5 md:px-6 md:py-3 
              bg-[linear-gradient(to_right,#f58529_10%,#dd2a7b_37%,#8134af_69%,#515bd4_100%)]
              text-white font-semibold text-sm md:text-base 
              rounded-lg hover:opacity-90 transition-all duration-300 
              hover:shadow-lg whitespace-nowrap
            "
             >
              <span>Instagram</span>
              <MoveUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://www.linkedin.com/company/qubitars"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-[#0A66C2] text-white font-semibold text-sm md:text-base rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              <span>LinkedIn</span>
              <MoveUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {instaFeedImages.map((image: string | StaticImageData, index: number) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 34vw, 25vw"
                priority={index < 4}
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index < 4 ? "high" : "auto"}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;

