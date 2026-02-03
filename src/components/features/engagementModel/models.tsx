"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import { ArrowRight } from "lucide-react";
import { modelsSection } from "@/data/engModel";

const listBlockClass = `${styles.p3} font-semibold text-[#1E274F] font-outfit mb-3`;
const listItemClass = `${styles.p4} text-gray-700 font-inter`;

const Models = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = modelsSection.tabs;

    return (
        <section className={`${styles.sectionPadding} ${styles.sectionPaddingY} bg-white`}>
            <div className="mb-6 text-center">
                <h2 className={`${styles.h1} font-semibold text-[#1E274F] leading-tight font-outfit`}>
                    Growth-Focused
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
                        Digital Services
                    </span>
                </h2>
            </div>

            <div className="mb-6 md:mb-8 lg:mb-10">
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-1 py-2 md:px-6 md:py-4 font-semibold font-outfit transition-all duration-300 ${
                                activeTab === index ? "text-[#F05C22]" : "text-gray-600 hover:text-[#1E274F]"
                            }`}
                        >
                            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl">{tab.title}</span>
                            {activeTab === index && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`transition-all duration-500 ${
                            activeTab === index
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                        }`}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 xl:gap-10 items-stretch">
                            <div className="relative min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden lg:col-span-5 bg-[#1E274F] hidden md:block">
                                <Image
                                    src="/assets/images/engModel/engImg2.png"
                                    alt="Growth-focused process: team, partnership, process, goals"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            <div className="flex flex-col justify-center bg-[#EDEFF880] p-5 xl:p-8 rounded-2xl lg:col-span-7">
                                <h3 className={`${styles.h4} font-bold text-[#1E274F] font-outfit leading-tight mb-2`}>
                                    {tab.title}
                                </h3>
                                <p className={`${styles.p2} text-gray-600 font-inter mb-3 xl:mb-5`}>{tab.tagline}</p>
                                <p className={`${styles.p4} text-gray-700 font-inter leading-relaxed mb-3 xl:mb-6`}>
                                    {tab.description}
                                </p>

                                <div className="space-y-5">
                                    {[
                                        { title: "What this includes:", items: tab.whatThisIncludes },
                                        { title: "Best Suited for:", items: tab.bestSuitedFor },
                                    ].map((block, blockIdx) => (
                                        <div key={blockIdx}>
                                            <h4 className={listBlockClass}>{block.title}</h4>
                                            <ul className="space-y-2 lg:space-y-1 xl:space-y-2">
                                                {block.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className={`flex items-start ${blockIdx === 0 ? "gap-2" : "gap-1 xl:gap-2"}`}
                                                    >
                                                        <span className="text-xl md:text-2xl leading-none text-blue">•</span>
                                                        <span className={listItemClass}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA – centered orange button */}
            <div className="mt-10 md:mt-12 lg:mt-14 flex justify-center">
                <Button
                    variant="accent"
                    size="lg"
                    className="gap-2 font-inter hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                    {modelsSection.ctaText}
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </section>
    );
};

export default Models;
