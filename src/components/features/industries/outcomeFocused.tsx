"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { getIndustriesStateIcons } from "@/lib/assets/icons";

const ACCENT = "#F05C22";
const DARK = "#1E274F";

export interface RoadmapStep {
    step: number;
    title: string;
    icon: string;
    bullets: string[];
    accent: boolean;
}

const roadmapSteps: RoadmapStep[] = [
    {
        step: 1,
        title: "Discovery & Planning",
        icon: getIndustriesStateIcons().stateicon12,
        accent: true,
        bullets: [
            "Understand goals, challenges, needs",
            "Define scope and metrics",
            "Align stakeholders and success",
            "Map requirements and risks",
        ],
    },
    {
        step: 2,
        title: "Strategize & Design",
        icon: getIndustriesStateIcons().stateicon13,
        accent: false,
        bullets: [
            "Sketch simple UX concepts",
            "Create quick prototypes",
            "Gather user feedback",
            "Iterate until solid",
        ],
    },
    {
        step: 3,
        title: "Build & Integrate",
        icon: getIndustriesStateIcons().stateicon14,
        accent: false,
        bullets: [
            "Develop secure scalable code",
            "Integrate with existing systems",
            "Ensure performance and reliability",
            "Prepare deployment plan",
        ],
    },
    {
        step: 4,
        title: "Monitor & Improve",
        icon: getIndustriesStateIcons().stateicon15,
        accent: true,
        bullets: [
            "Track real-time metrics",
            "Analyze results and learn",
            "Optimize processes and tooling",
            "Govern and sustain progress",
        ],
    },
];


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
                "relative rounded-2xl border border-gray-100 p-6 md:p-7 transition-all duration-300 w-full max-w-[30rem]",
                cardBg,
                isCard1 && "-mt-16 ms-11",
                isCard2 && "mt-18",
                isCard3 && "mt-21 ms-49",
                isCard4 && "mt-53 ms-39"
            )}
        >
            <div
                className={combine(
                    "absolute left-7 top-5 w-12 h-56 flex items-center justify-center rounded-full",
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
            <div className="pl-12 md:pl-18">
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
                            className="flex items-start gap-2 text-sm md:text-base text-gray-600 font-inter"
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
            className={combine(styles.sectionPadding, "py-14 md:py-18 lg:py-24")}
            aria-labelledby="results-roadmap-heading"
        >
            <div>
                {/* White rounded container (Figma: 40px radius) */}
                <div className="relative rounded-[40px] bg-white px-6 py-10 md:py-12 lg:py-16 overflow-hidden">
                    {/* Header: RESULTS ROADMAP + title + CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
                        <div>
                     <SectionHeading
                      subtitle="Results Roadmap"
                      title= "Focusing on Impact, Beyond Deliverables"
                      />
                        </div>
                        <div className="shrink-0">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-lg bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
                            >
                                Discuss Your Needs
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute left-138 top-64">
                        <img src={getIndustriesStateIcons().arrow1} alt="" />
                    </div>

                    <div className="absolute left-124 top-126">
                        <img src={getIndustriesStateIcons().arrow2} alt="" />
                    </div>

                    <div className="absolute left-176 top-187">
                        <img src={getIndustriesStateIcons().arrow3} alt="" />
                    </div>


                    {/* Mobile: single column of 4 cards */}
                    <div className="flex flex-col gap-6 md:hidden">
                        {roadmapSteps.map((step) => (
                            <StepCard key={step.step} step={step} />
                        ))}
                    </div>
                    {/* Desktop: 2x2 grid of cards */}
                    <div className="hidden md:grid grid-cols-2 gap-4 items-start">
                        <StepCard step={roadmapSteps[0]} />
                        <StepCard step={roadmapSteps[1]} />
                        <StepCard step={roadmapSteps[2]} />
                        <StepCard step={roadmapSteps[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}
