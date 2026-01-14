"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
import { aboutImages } from "@/lib/assets/images";
import { MoveUpRight } from "lucide-react";

const InstaFeed = () => {
  const instaImages = [
    aboutImages.Aimg9,
    aboutImages.Aimg10,
    aboutImages.Aimg11,
    aboutImages.Aimg12,
    aboutImages.Aimg13,
    aboutImages.Aimg14,
    aboutImages.Aimg15,
    aboutImages.Aimg16,
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className={`${styles.sectionPadding}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 lg:mb-12 gap-4 md:gap-6">
          <div>
            <h2 className={`${styles.h1} font-bold font-outfit leading-tight text-blue mb-1 md:mb-2`}>
              Our Instagram Feed
            </h2>
            <p className={`${styles.p2} text-gray-600 font-inter text-base md:text-lg`}>
              50 posts
            </p>
          </div>
          <a
            href="https://www.instagram.com/qubitars"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold text-sm md:text-base rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            <span>Follow Us</span>
            <MoveUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
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

