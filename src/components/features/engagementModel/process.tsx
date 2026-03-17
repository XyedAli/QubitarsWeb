"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEngagementModelCloudinaryIcons } from "@/lib/assets/icons";
import { processSection } from "@/data/engModel";
import { SectionHeading } from "@/components/shared/headings";

const STEP_DESC_CLASS = "text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-gray-600 font-outfit max-w-[270px] xl:max-w-[230px]";

const Process = () => {
  const icons = getEngagementModelCloudinaryIcons();
  const steps = processSection.steps.map((step) => ({ ...step, src: icons[step.iconKey] }));

  const StepText = ({ step }: { step: (typeof steps)[0] }) => (
    <div className="text-center">
      <h3 className={`${styles.p2} font-bold text-[#1E274F] uppercase font-outfit mb-1`}>{step.title}</h3>
      <p className={STEP_DESC_CLASS}>{step.description}</p>
    </div>
  );

  return (
    <section className={`${styles.sectionPadding} pt-14 md:pt-18 lg:pt-22 xl:pt-24`}>
      <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        <SectionHeading subtitle={processSection.subtitle} title={`${processSection.title} ${processSection.titleHighlight}`} />
      </div>
      <div className="block md:hidden space-y-1">
        {processSection.steps.map((step, index) => {
          const imgFirst = index % 2 === 0;
          return (
            <div key={`mobile-${index}`} className={`flex items-center gap-2 ${!imgFirst ? "flex-row-reverse" : ""}`}>
              <div className={`flex-shrink-0 w-30 h-30 flex items-center justify-center ${imgFirst ? "me-8" : "ms-1"}`}>
                <Image
                  src={icons[step.mobileIconKey]}
                  alt="Process Icons"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-base font-bold text-[#1E274F] uppercase font-outfit mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 font-outfit leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row justify-between w-full mb-3">
          {steps.map((step, index) => (
            <div key={`top-${index}`} className="flex-1 min-w-0 flex flex-col items-center justify-end min-h-[72px] md:min-h-[80px]">
              {step.textPosition === "above" ? <StepText step={step} /> : null}
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          {steps.map((step, index) => (
            <div key={`img-${index}`} className={`flex-1 min-w-0 flex justify-center ${[1, 3].includes(index) ? "-mt-6 md:-mt-26" : ""}`}>
              <Image
                src={step.src}
                alt="Process Icons"
                width={200}
                height={200}
                className="object-contain w-full max-w-[140px] lg:max-w-[180px] xl:max-w-[220px]"
                unoptimized={step.src.includes("cloudinary.com")}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between w-full gap-0 xl:gap-4 mt-3 -mt-6 md:-mt-8">
          {steps.map((step, index) => (
            <div key={`bottom-${index}`} className={`flex-1 min-w-0 flex flex-col items-center justify-start min-h-[72px] md:min-h-[80px] ${[1, 3].includes(index) ? "-mt-4 md:-mt-2" : ""}`}>
              {step.textPosition === "below" ? <StepText step={step} /> : null}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-10 flex justify-center">
        <Link href="/contact">
        <Button variant="accent">{processSection.ctaText}
        <ArrowRight className="w-5 h-5" />
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default Process;
