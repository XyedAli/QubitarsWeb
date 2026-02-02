"use client";

import Image from "next/image";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";

const processIcons = getEngagementModelCloudinaryImages();

const processSteps = [
  {
    src: processIcons.icon14,
    title: "DISCOVERY & AGREEMENT",
    description:
      "We understand needs, finalize requirements, and align on project terms.",
    textPosition: "above" as const,
  },
  {
    src: processIcons.icon15,
    title: "STRATEGY & PREPARATION",
    description:
      "We map out the project plan and assemble the right team to execute it.",
    textPosition: "below" as const,
  },
  {
    src: processIcons.icon16,
    title: "DEVELOPMENT & BUILDING",
    description:
      "We build your solution using best practices and cutting-edge technology.",
    textPosition: "above" as const,
  },
  {
    src: processIcons.icon17,
    title: "TESTING & DEPLOYMENT",
    description:
      "We rigorously test for quality and seamlessly integrate into your environment.",
    textPosition: "below" as const,
  },
  {
    src: processIcons.icon18,
    title: "LAUNCH & SUPPORT",
    description:
      "We go live and provide ongoing maintenance to keep everything running smoothly.",
    textPosition: "above" as const,
  },
];

const Process = () => {
  return (
    <section
      className={`${styles.sectionPadding} pt-14 md:pt-18 lg:pt-22 xl:pt-24`}
    >
      <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        <span className={`${styles.h6} font-bold uppercase inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}>
          COLLABORATION FRAMEWORK
        </span>
        <h2 className={`${styles.h1} font-semibold text-[#1E274F] leading-tight font-outfit mt-1`}>
          Results, Not <span className="text-[#F05C22]">Noise</span>
        </h2>
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
                <p className={`${styles.p4} text-gray-600 font-outfit max-w-[230px]`}>
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
              className="object-contain w-full max-w-[180px] md:max-w-[220px]"
              unoptimized={step.src.includes("cloudinary.com")}
            />
          </div>
        ))}
      </div>

      {/* Bottom row: text for steps with text below */}
      <div className="flex flex-row justify-between w-full gap-2 md:gap-4 mt-3 -mt-6 md:-mt-8">
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
                <p className={`${styles.p4} text-gray-600 font-outfit max-w-[230px]`}>
                  {step.description}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 flex justify-center">
        <Button variant="accent">Begin Your Project</Button>
      </div>
    </section>
  );
};

export default Process;
