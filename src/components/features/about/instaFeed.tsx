"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
 import { getAboutCloudinaryImages, getNavbarCloudinaryImages } from "@/lib/assets/images";
import { MoveUpRight } from "lucide-react";

const InstaFeed = () => {
  // Get Cloudinary images
  const aboutCloudinaryImages = getAboutCloudinaryImages();
  const navbarCloudinaryImages = getNavbarCloudinaryImages();
  
  const instaImages = [
    aboutCloudinaryImages.Aimg9,
    aboutCloudinaryImages.Aimg10,
    aboutCloudinaryImages.Aimg11,
    aboutCloudinaryImages.Aimg12,
    aboutCloudinaryImages.Aimg13,
    aboutCloudinaryImages.Aimg14,
    aboutCloudinaryImages.Aimg15,
    aboutCloudinaryImages.Aimg16,
  ];

  return (
    <section className="bg-white relative overflow-hidden" id="life-at-qubitars">
      <div className={`${styles.sectionPadding}`}>
        {/* Header */}
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-4 mb-4 md:mb-10 lg:mb-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src={navbarCloudinaryImages.logoSvg}
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
              Our Instagram Feed
            </h2>
            <p className={`${styles.p2} text-gray-600 font-inter text-base md:text-lg`}>
              50 posts
            </p>
          </div>

          {/* Button */}
          <a
            href="https://www.instagram.com/qubitars"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold text-sm md:text-base rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
          >
            <span>Follow Us</span>
            <MoveUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {instaImages.map((image, index) => (
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
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;

