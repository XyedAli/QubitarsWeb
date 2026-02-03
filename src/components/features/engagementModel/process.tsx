"use client";

import Image from "next/image";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import { processSection } from "@/data/engModel";
import { SectionHeading } from "@/components/shared/headings";
const Process = () => {
  const processIcons = getEngagementModelCloudinaryImages();
  const processSteps = processSection.steps.map((step) => ({
    ...step,
    src: processIcons[step.iconKey],
  }));

  return (
    <section
      className={`${styles.sectionPadding} pt-14 md:pt-18 lg:pt-22 xl:pt-24`}
    >
      <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
       <SectionHeading
        subtitle="Collaboration Framework"
        title="Results, Not Noise"
       />
      </div>

      {/* Top row: text for steps with text above */}
      <div className="flex flex-row justify-between w-full mb-3">
        {processSteps.map((step, index) => (
          <div
            key={`top-${index}`}
            className="flex-1 min-w-0 flex flex-col items-center justify-end min-h-[72px] md:min-h-[80px]"
          >
            {step.textPosition === "above" ? (
              <div className="text-center">
                <h3 className={`${styles.p2} font-bold text-[#1E274F] uppercase font-outfit mb-1`}>
                  {step.title}
                </h3>
                <p className={`text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-gray-600 font-outfit max-w-[270px] xl:max-w-[230px]`}>
                  {step.description}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Straight row: all 5 images in one line */}
      <div className="flex flex-row items-center justify-between w-full ">
        {processSteps.map((step, index) => (
          <div
            key={`img-${index}`}
            className={`flex-1 min-w-0 flex justify-center ${[1, 3].includes(index) ? "-mt-6 md:-mt-26" : ""}`}
          >
            <Image
              src={step.src}
              alt=""
              width={200}
              height={200}
              className="object-contain w-full max-w-[140px] lg:max-w-[180px] xl:max-w-[220px]"
              unoptimized={step.src.includes("cloudinary.com")}
            />
          </div>
        ))}
      </div>

      {/* Bottom row: text for steps with text below */}
      <div className="flex flex-row justify-between w-full gap-0 xl:gap-4 mt-3 -mt-6 md:-mt-8">
        {processSteps.map((step, index) => (
          <div
            key={`bottom-${index}`}
            className={`flex-1 min-w-0 flex flex-col items-center justify-start min-h-[72px] md:min-h-[80px] ${[1, 3].includes(index) ? "-mt-4 md:-mt-2" : ""}`}
          >
            {step.textPosition === "below" ? (
              <div className="text-center">
                <h3 className={`${styles.p2} font-bold text-[#1E274F] uppercase font-outfit mb-1`}>
                  {step.title}
                </h3>
                <p className={`text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-gray-600 font-outfit max-w-[270px] xl:max-w-[230px]`}>
                  {step.description}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 flex justify-center">
        <Button variant="accent">{processSection.ctaText}</Button>
      </div>
    </section>
  );
};

export default Process;
