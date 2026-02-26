"use client";

import { useEffect, useRef, useState } from "react";
import { engagementOptions } from "@/data/home/index";

const DigitalServices = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / rect.height;

      const totalCards = engagementOptions.length;
      const newIndex = Math.min(
        totalCards - 1,
        Math.max(0, Math.floor(scrollProgress * totalCards))
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-white"
    >
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-3xl px-6">

          {engagementOptions.map((option, index) => (
            <div
              key={option.id}
              className="absolute w-full transition-all duration-500"
              style={{
                zIndex: engagementOptions.length - index,
                opacity: index <= activeIndex ? 1 : 0,
                transform:
                  index === activeIndex
                    ? "scale(1)"
                    : index < activeIndex
                    ? "scale(0.94)"
                    : "scale(1.05)",
              }}
            >
              <div className="bg-[#EDEFF880] rounded-3xl border border-gray-200 shadow-xl p-8">
                <h3 className="text-2xl font-bold text-blue mb-4 font-outfit">
                  {option.title}
                </h3>

                {option.description[0] && (
                  <p className="text-lg font-medium text-gray-800 mb-4 font-outfit">
                    {option.description[0]}
                  </p>
                )}

                <div className="text-base text-gray-700 leading-relaxed mb-6 font-inter">
                  {option.description.slice(1).map((item, i) => (
                    <p key={i} className="mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DigitalServices;