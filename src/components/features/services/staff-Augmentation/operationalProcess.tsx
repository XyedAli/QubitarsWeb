"use client";

import { useState } from "react";
import Image from "next/image";
import { getStaffAugmentationIcons, getStaffAugmentationImages } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

const cards = [
    {
        title: "PROJECT DISCOVERY",
        description: "We analyze goals, technical requirements, timelines, constraints, ensuring clear direction before assembling the right team.",
        action: "Defining Goals",
        iconKey: "saIcon1",
        bgImageKey: "saImg12",
    },
    {
        title: "AGILE EXECUTION",
        description: "Specialists are carefully chosen based on skills, experience, domain knowledge, ensuring perfect alignment with project needs.",
        action: "Sprint Planning",
        iconKey: "saIcon2",
        bgImageKey: "saImg15",
    },
    {
        title: "FLEXIBLE SCALING",
        description: "Engineers integrate into your workflows, tools, communication channels, enabling smooth collaboration & rapid operational readiness.",
        action: "Team Scaling",
        iconKey: "saIcon3",
        bgImageKey: "saImg14",
    },
    {
        title: "TALENT SELECTION",
        description: "Delivery begins using agile methods, structured milestones, transparent reporting, maintaining consistent progress, quality, alignment.",
        action: "Talent Matching",
        iconKey: "saIcon4",
        bgImageKey: "saImg13",
    },
    {
        title: "TEAM ONBOARDING",
        description: "Team structure adapts as requirements evolve, allowing quick expansion or adjustment without disrupting project momentum.",
        action: "Onboarding Process",
        iconKey: "saIcon5",
        bgImageKey: "saImg16",
    },
    {
        title: "QUALITY ASSURANCE",
        description: "Continuous testing, code reviews, validation processes ensure stability, performance, reliability across every development stage.",
        action: "Quality Control",
        iconKey: "saIcon6",
        bgImageKey: "saImg17",
    },
    {
        title: "CONTINUOUS IMPROVEMENT",
        description: "Regular feedback sessions refine processes, strengthen collaboration, optimize productivity, ensuring long-term project success.",
        action: "Process Enhancement",
        iconKey: "saIcon7",
        bgImageKey: "saImg18",
    },
];

export default function OperationalProcess() {
    const [activeIndex, setActiveIndex] = useState(0);
    const staffIcons = getStaffAugmentationIcons();
    const staffImages = getStaffAugmentationImages();

    return (
        <section className={combine("bg-white py-16", styles.sectionPaddingX)}>
            <div className="max-w-7xl mx-auto">

                <SectionHeading
                    subtitle="OPERATIONAL PROCESS"
                    title="How We Build High-Performing Dedicated Teams"
                />

                <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
                    {cards.map((card, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`flex-shrink-0 p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer relative
                  ${isActive ? "border-orange-500 shadow-lg w-90" : "border-gray-200 bg-white hover:border-gray-300 w-30 "}`}
                            >
                                {isActive && (
                                    <div className="absolute top-10 right-0">
                                        <Image
                                            src={staffImages[card.bgImageKey as keyof typeof staffImages]}
                                            alt="Process Image"
                                            width={80}
                                            height={80}
                                            className="rounded-lg w-[160px] h-[250px]"
                                        />
                                    </div>
                                )}
                                <div className={`flex flex-col ${isActive ? "items-start" : "items-center"} h-100`}>
                                    <h3
                                        className={`text-[24px] ${isActive ? "text-blue font-semibold text-start" : "text-gray-800 font-medium text-center"} ${!isActive ? "rotate-180 [writing-mode:vertical-rl]" : ""}`}
                                    >
                                        {card.title}
                                    </h3>
                                    <div className="mt-auto ">
                                        {isActive && (
                                            <p className="text-gray-600 text-[19px] leading-tight text-start mt-3 mb-3">{card.description}</p>
                                        )}
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center`}>
                                                <Image
                                                    src={staffIcons[card.iconKey as keyof typeof staffIcons]}
                                                    alt={card.title}
                                                    width={24}
                                                    height={24}
                                                    className="text-white w-10 h-10"
                                                />
                                            </div>

                                            {isActive && (
                                                <span className="text-orange-500 text-xl font-medium">
                                                    {card.action}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}