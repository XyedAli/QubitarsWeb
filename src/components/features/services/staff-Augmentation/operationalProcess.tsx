"use client";

import { useState } from "react";
import Image from "next/image";
import { getStaffAugmentationIcons, getStaffAugmentationImages } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { operationalProcessData } from '@/data/staff-augmentation';

export default function OperationalProcess() {
    const [activeIndex, setActiveIndex] = useState(0);
    const staffIcons = getStaffAugmentationIcons();
    const staffImages = getStaffAugmentationImages();

    return (
        <section className={combine("bg-white py-0 md:py-6 lg:py-10 xl:py-16", styles.sectionPadding)}>
            <div className="">

                <SectionHeading
                    subtitle="OPERATIONAL PROCESS"
                    title="How We Build High-Performing Dedicated Teams"
                />

                <div className="flex gap-4 overflow-x-auto pb-4 pl-4 md:pl-0 xl:pl-25">                    {operationalProcessData.map((card, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`flex-shrink-0 p-4 lg:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer relative
                  ${isActive ? "border-orange-500 shadow-lg w-70 lg:w-80 xl:w-90" : "border-gray-200 bg-white hover:border-gray-300 w-20 lg:w-25 xl:w-30 "}`}
                        >
                            {isActive && (
                                <div className="absolute top-10 right-0">
                                    <Image
                                        src={staffImages[card.bgImageKey as keyof typeof staffImages]}
                                        alt={`Qubitars dedicated team process — ${card.title} step illustration`}
                                        width={80}
                                        height={80}
                                        className="rounded-lg w-[160px] h-[250px]"
                                    />
                                </div>
                            )}
                            <div className={`flex flex-col ${isActive ? "items-start" : "items-center"} h-77 lg:h-85 xl:h-100`}>
                                <h3
                                    className={`text-[19px] lg:text-[21px] xl:text-[24px] ${isActive ? "text-blue font-semibold text-start" : "text-gray-800 font-medium text-center"} ${!isActive ? "rotate-180 [writing-mode:vertical-rl]" : ""}`}
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