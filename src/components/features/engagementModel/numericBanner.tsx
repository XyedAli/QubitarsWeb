"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";

const engagementIcons = getEngagementModelCloudinaryImages();

interface AnimatedStat {
  end: number;
  suffix: string;
  label: string;
  icon: string;
}
const animatedStats: AnimatedStat[] = [
  { icon: engagementIcons.icon10, end: 150, suffix: "+", label: "Leading Companies" },
  { icon: engagementIcons.icon11, end: 300, suffix: "+", label: "Industries Growth Strategies" },
  { icon: engagementIcons.icon12, end: 8, suffix: "M+", label: "Revenue Boosted" },
  { icon: engagementIcons.icon13, end: 400, suffix: "+", label: "Projects Successfully Delivered" },
];

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
      className={`text-[48px] font-bold font-outfit text-white leading-tight block mb-2 text-left`}
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
      className={`${styles.sectionPadding} py-10 md:py-12 lg:py-14 xl:py-16 bg-blue rounded-xl`}
>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ps-17 pe-10">
        {animatedStats.map((stat, index) => (
          <div
            key={index}
            className="relative flex  gap-5"
          >
            {/* Icon – medal, chart, briefcase, checklist per Figma */}
            <div className="flex items-center w-12 h-12 md:w-14 md:h-14">
              <Image
                src={stat.icon}
                alt=""
                width={56}
                height={56}
                className="w-full h-full object-contain"
                unoptimized={stat.icon.includes("cloudinary.com")}
              />
            </div>
            <div className="flex flex-col text-left">
            <AnimatedNumber stat={stat} start={hasStarted} />
            <span
              className={`${styles.p2} text-white font-inter font-medium`}
            >
              {stat.label}
            </span>
          </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default NumericBanner;
