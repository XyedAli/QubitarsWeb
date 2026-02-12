"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { getIndustriesStateIcons } from "@/lib/assets/icons";
import { outcomeFocusedHeading, roadmapSteps, type RoadmapStep } from "@/data/industries";

export type { RoadmapStep };


function StepCard({ step }: { step: RoadmapStep }) {
    const pillBg = step.accent
        ? "bg-[#FC7E13] text-white"
        : "bg-blue text-white";
    const isCard1 = step.step === 1;
    const isCard2 = step.step === 2;
    const isCard3 = step.step === 3;
    const isCard4 = step.step === 4;
    const cardBg =
        step.step === 1 || step.step === 4
            ? "bg-orange-50"
            : "bg-gray-50";
    return (
        <article
            className={combine(
                "relative rounded-2xl border border-gray-100 p-4 lg:p-6 xl:p-7 transition-all duration-300 w-full lg:max-w-[26rem] xl:max-w-[30rem]",
                cardBg,
                isCard1 && "md:-mt-16 xl:ms-11",
                isCard2 && "md:mt-18",
                isCard3 && "md:mt-17 xl:mt-21 ms-0 lg:ms-14 xl:ms-49",
                isCard4 && "md:mt-32 lg:mt-53 lg:ms-15 xl:ms-39"
            )}
        >
            <div
                className={combine(
                    "absolute left-4 lg:left-7 top-3 lg:top-5 w-10 lg:w-12 h-48 lg:h-56 flex items-center justify-center rounded-full",
                    pillBg
                )}
            >
                <span
                    className="text-base font-bold uppercase tracking-wider whitespace-nowrap"
                    style={{ transform: "rotate(-90deg)" }}
                >
                    Step {step.step}
                </span>
            </div>
            <div className="pl-14 lg:pl-18">
                {/* Figma: icon first, then title on same line */}
                <div className="flex items-center gap-3 mb-4">
                                      <div
                        className={combine(
                            "w-16 h-16 shrink-0 rounded-full flex items-center justify-center overflow-hidden",
                            step.accent ? "bg-orange-100" : "bg-gray-200"
                        )}
                    >
                        <Image
                            src={step.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="w-9 h-9 object-contain"
                            unoptimized={step.icon?.includes("cloudinary.com")}
                            aria-hidden
                        />
                    </div>
                    <h3
                        className={combine(
                            styles.h5,
                            "font-bold text-[#1E274F] font-outfit m-0 leading-tight"
                        )}
                    >
                        {(() => {
                            const parts = step.title.split(" & ");
                            return parts.length === 2 ? (
                                <>{parts[0]} &<br />{parts[1]}</>
                            ) : (
                                step.title
                            );
                        })()}
                    </h3>
                </div>
                <ul className="space-y-2">
                    {step.bullets.map((bullet, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-sm lg:text-base text-gray-600 font-inter"
                        >
                            <span
                                className={combine(
                                    "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                                    step.accent ? "bg-[#F05C22]" : "bg-[#1E274F]"
                                )}
                                aria-hidden
                            />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default function OutcomeFocused() {
    return (
        <section
            className={combine(styles.sectionPadding, "mt-0 md:mt-4 lg:pt-7")}
            aria-labelledby="results-roadmap-heading"
        >
            <div>
                {/* White rounded container (Figma: 40px radius) */}
                <div className="relative rounded-[40px] bg-white py-10 md:py-12 lg:py-16 overflow-hidden">
                    {/* Header: RESULTS ROADMAP + title + CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:mb-18 lg:mb-14">
                        <div>
                            <SectionHeading
                                subtitle={outcomeFocusedHeading.subtitle}
                                title={outcomeFocusedHeading.title}
                            />
                        </div>
                        <div className="shrink-0 hidden lg:block">
                            <Link href="/contact" className={styles.ctaButtonOrange}>
                                Discuss Your Needs
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute left-85 lg:left-98 xl:left-123 top-58 lg:top-60 xl:top-64 hidden md:block">
                        <img src={getIndustriesStateIcons().arrow1} alt="" className="w-[220px] lg:w-[280px] xl:w-[430px] h-[70px] lg:h-[80px] xl:h-[70px]" />
                    </div>

                    <div className="absolute left-18 lg:left-25 xl:left-62 top-106 lg:top-121 xl:top-127 hidden md:block">
                        <img src={getIndustriesStateIcons().arrow2} alt="" className="w-[470px] lg:w-[580px] xl:w-[700px] h-[120px] lg:h-[158px] xl:h-[180px]" />
                    </div>

                    <div className="absolute left-83 lg:left-119 xl:left-163 top-153 lg:top-180 xl:top-186 hidden md:block">
                        <img src={getIndustriesStateIcons().arrow3} alt="" className="w-[230px] lg:w-[260px] xl:w-[430px] h-[75px] lg:h-[82px] xl:h-[70px]" />
                    </div>


                    <div className="flex flex-col gap-6 md:hidden">
                        {roadmapSteps.map((step) => (
                            <StepCard key={step.step} step={step} />
                        ))}
                    </div>
                    {/* Desktop: 2x2 grid of cards – md par chhote (max-w), lg/xl par bade */}
                    <div className="hidden md:grid grid-cols-2 gap-4 md:gap-9 lg:gap-5 items-start ">
                        <StepCard step={roadmapSteps[0]} />
                        <StepCard step={roadmapSteps[1]} />
                        <StepCard step={roadmapSteps[2]} />
                        <StepCard step={roadmapSteps[3]} />
                    </div>
                      <div className="w-full shrink-0 flex justify-center mt-8 md:mt-11">
                            <Link href="/contact" className={styles.ctaButtonOrange}>
                                Discuss Your Needs
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    );
}
