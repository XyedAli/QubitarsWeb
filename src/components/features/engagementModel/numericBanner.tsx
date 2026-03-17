"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { getEngagementModelCloudinaryIcons } from "@/lib/assets/icons";
import { numericBannerSection } from "@/data/engModel";

const DURATION_MS = 2000;
const TICK_MS = 16;
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
function AnimatedNumber({
  stat,
  start,
}: {
  stat: (typeof numericBannerSection.stats)[number] & { icon: string };
  start: boolean;
}) {
  const count = useCountUp(stat.end, start);
  return (
    <span className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-bold font-outfit text-white leading-tight block mb-2 text-left">
      {count}
      {stat.suffix}
    </span>
  );
}
const NumericBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const engagementIcons = getEngagementModelCloudinaryIcons();
  const animatedStats = numericBannerSection.stats.map((stat) => ({
    ...stat,
    icon: engagementIcons[stat.iconKey],
  }));

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
      className={`${styles.sectionPadding} py-6 lg:py-12 xl:py-16 bg-blue rounded-xl`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-8 ps-4 md:ps-9 lg:ps-4 xl:ps-17 pe-3 md:pe-6 lg:pe-4 xl:pe-10">
        {animatedStats.map((stat, index) => (
          <div key={index} className="relative flex gap-3 lg:gap-4 xl:gap-5">
            <div className="flex items-center w-9 h-9 md:w-12 md:h-12 xl:w-14 xl:h-14">
              <Image
                src={stat.icon}
                alt="Numeric Icons"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                unoptimized={stat.icon.includes("cloudinary.com")}
              />
            </div>
            <div className={`${styles.flexCol} text-left`}>
              <AnimatedNumber stat={stat} start={hasStarted} />
              <span className="text-[13px] md:text-base xl:text-xl text-white font-inter font-medium">
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
