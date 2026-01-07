"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import "@/lib/css";
import { triScrollLogos } from "@/data/home";

const TriScroll = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Slider 1: Logo 1 to 4
  const row1Items = triScrollLogos.slice(0, 4);
  // Slider 2: Logo 5 to 8
  const row2Items = triScrollLogos.slice(4, 8);
  // Slider 3: Logo 9 to 12
  const row3Items = triScrollLogos.slice(8, 12);

  // duplicate enough so no white space ever appears
  const duplicatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];
  const duplicatedRow3 = [...row3Items, ...row3Items, ...row3Items, ...row3Items];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const rawProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      
      // Slow down the animation by using a multiplier (0.15 = very slow)
      const progress = rawProgress * 0.10;

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
    <section ref={sectionRef} className={combine("pt-6 bg-white", styles.sectionPadding)}>
      <div>
        <div className="mb-6 lg:mb-8 xl:mb-10">
          <h2 className={`${styles.h1} font-semibold text-[#1E274F] font-outfit`}>
            Creating{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Digital Products
            </span>{" "}
            & Experiences
          </h2>
        </div>

        <div className="tri-scroll-card">
        <div className="tri-scroll-slider">
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
