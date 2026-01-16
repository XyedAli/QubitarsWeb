"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { styles, combine } from "@/styles/style";
import "@/lib/css";
import { triScrollLogos } from "@/data/home";
import { SectionHeading } from "@/components/shared/headings/headings"; 
const TriScroll = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    if (typeof window !== "undefined" && sliderRef.current) {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform.toLowerCase();
      const isMac = /macintosh|mac os x|macintel/.test(userAgent) || /mac/.test(platform);
      
      if (isMac) {
        sliderRef.current.classList.add("is-mac");
      } else {
        sliderRef.current.classList.add("is-windows");
      }
    }

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) {
          rafId = null;
          return;
        }

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth < 768;

        const rawProgress = Math.min(
          1,
          Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
        );
        
        const progress = rawProgress * (isMobile ? 0.18 : 0.10);

        if (row1Ref.current) {
          const track = row1Ref.current;
          const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;
          const translateX = Math.round(progress * maxMove);
          track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
        }

        if (row2Ref.current) {
          const track = row2Ref.current;
          const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;
          const translateX = Math.round((-maxMove) + progress * maxMove);
          track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        }

        if (row3Ref.current) {
          const track = row3Ref.current;
          const maxMove = track.scrollWidth - track.parentElement!.offsetWidth;
          const translateX = Math.round(progress * maxMove);
          track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
        }

        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className={combine("pt-6 bg-white", styles.sectionPadding)}>
      <div>
<SectionHeading
  subtitle="From Idea to Impact"
  title="Creating Digital Products & Experiences"
  />
        <div className="tri-scroll-card">
        <div ref={sliderRef} className="tri-scroll-slider">
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
