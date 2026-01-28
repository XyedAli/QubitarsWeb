"use client";

import { useState, useEffect, useRef } from "react";
import { styles } from "@/styles/style";

interface AnimatedStat {
  end: number;
  suffix: string;
  label: string;
}

interface StaticStat {
  display: string;
  label: string;
}

const animatedStats: AnimatedStat[] = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 100, suffix: "+", label: "Happy Clients" },
];

const staticStats: StaticStat[] = [{ display: "24/7", label: "Support" }];

const DURATION_MS = 2000;
const TICK_MS = 16; // ~60fps

function useCountUp(end: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - (1 - progress) * (1 - progress); // ease-out quad
      const value = Math.floor(eased * end);
      setCount(value);
      if (progress >= 1) clearInterval(timer);
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [end, start]);

  return count;
}

function AnimatedNumber({ stat, start }: { stat: AnimatedStat; start: boolean }) {
  const count = useCountUp(stat.end, start);
  return (
    <span
      className={`${styles.h1} font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] leading-tight block mb-2`}
    >
      {count}
      {stat.suffix}
    </span>
  );
}

const NumericBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionPadding} py-10 md:py-12 lg:py-14 xl:py-16`}
      style={{ backgroundColor: "#FDFDFD" }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {animatedStats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            {index > 0 && (
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-14 bg-gradient-to-b from-transparent via-[#FCB477] to-transparent pointer-events-none" />
            )}
            <AnimatedNumber stat={stat} start={hasStarted} />
            <span
              className={`${styles.p2} text-gray-600 font-inter font-medium`}
            >
              {stat.label}
            </span>
          </div>
        ))}
        {staticStats.map((stat, index) => (
          <div
            key={`static-${index}`}
            className="relative flex flex-col items-center text-center"
          >
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-14 bg-gradient-to-b from-transparent via-[#FCB477] to-transparent pointer-events-none" />
            <span
              className={`${styles.h1} font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] leading-tight block mb-2`}
            >
              {stat.display}
            </span>
            <span
              className={`${styles.p2} text-gray-600 font-inter font-medium`}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumericBanner;
