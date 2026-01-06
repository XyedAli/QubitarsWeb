"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { TriScrollImages } from "../../../../public/assets/images/index";
import "./triScroll.css";

const TriScroll = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const logos = [
    { src: TriScrollImages.tsimg1, alt: "Logo 1", width: 220, height: 90 },
    { src: TriScrollImages.tsimg2, alt: "Logo 2", width: 220, height: 90 },
    { src: TriScrollImages.tsimg3, alt: "Logo 3", width: 220, height: 90 },
    { src: TriScrollImages.tsimg4, alt: "Logo 4", width: 220, height: 90 },
    { src: TriScrollImages.tsimg5, alt: "Logo 5", width: 220, height: 90 },
    { src: TriScrollImages.tsimg6, alt: "Logo 6", width: 220, height: 90 },
    { src: TriScrollImages.tsimg7, alt: "Logo 7", width: 220, height: 90 },
    { src: TriScrollImages.tsimg8, alt: "Logo 8", width: 220, height: 90 },
    { src: TriScrollImages.tsimg9, alt: "Logo 9", width: 220, height: 90 },
    { src: TriScrollImages.tsimg10, alt: "Logo 10", width: 220, height: 90 },
    { src: TriScrollImages.tsimg11, alt: "Logo 11", width: 220, height: 90 },
    { src: TriScrollImages.tsimg12, alt: "Logo 12", width: 220, height: 90 },
  ];

  // Slider 1: Logo 1 to 4
  const row1Items = [logos[0], logos[1], logos[2], logos[3]];
  // Slider 2: Logo 5 to 8
  const row2Items = [logos[4], logos[5], logos[6], logos[7]];
  // Slider 3: Logo 9 to 12
  const row3Items = [logos[8], logos[9], logos[10], logos[11]];

  // duplicate enough so no white space ever appears
  const duplicatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];
  const duplicatedRow3 = [...row3Items, ...row3Items, ...row3Items, ...row3Items];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      // ROW 1 (left)
      if (row1Ref.current) {
        const track = row1Ref.current;
        const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;
        track.style.transform = `translateX(-${progress * maxMove}px)`;
      }

      // ROW 2 (RIGHT → FIXED)
      if (row2Ref.current) {
        const track = row2Ref.current;
        const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;

        // 👇 KEY FIX
        track.style.transform = `translateX(${(-maxMove) + progress * maxMove}px)`;
      }

      // ROW 3 (left)
      if (row3Ref.current) {
        const track = row3Ref.current;
        const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;
        track.style.transform = `translateX(-${progress * maxMove}px)`;
      }
    };


    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={combine("py-16 md:py-20 lg:py-24 bg-white", styles.sectionPadding)}>
      <div>
        <div className="mb-10">
          <h2 className={`${styles.h1} font-semibold text-[#1E274F] font-outfit`}>
            Creating{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Digital Products
            </span>{" "}
            & Experiences
          </h2>
        </div>

        <div className="tri-scroll-card">
          <div className="tri-scroll-slider space-y-6">
            {/* ROW 1 */}
            <div className="slider-row slider-row-top">
              <div ref={row1Ref} className="slider-track">
                {duplicatedRow1.map((item, index) => (
                  <div key={index} className="slider-item">
                    <Image {...item} unoptimized />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="slider-row">
              <div ref={row2Ref} className="slider-track">
                {duplicatedRow2.map((item, index) => (
                  <div key={index} className="slider-item">
                    <Image {...item} unoptimized />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3 */}
            <div className="slider-row slider-row-bottom">
              <div ref={row3Ref} className="slider-track">
                {duplicatedRow3.map((item, index) => (
                  <div key={index} className="slider-item">
                    <Image {...item} unoptimized />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriScroll;
