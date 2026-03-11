// components/WhyChooseUs.jsx
"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/headings";
import { styles, combine } from "@/styles/style";
import { getChooseQubitarsTabs } from "@/data/devops/devops";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";

export default function ChooseQubitars() {
    const [activeTab, setActiveTab] = useState(0);
    const devOpsImages = getDevOpsCloudinaryImages();
    const tabsData = getChooseQubitarsTabs(devOpsImages);

    return (
        <section className="" >
        <div className={combine(styles.sectionPaddingY, styles.sectionPadding, )}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-24 items-center">
                {/* Text Content */}
                <div className="flex-1 mb-0 xl:mb-6">
                    <SectionHeading
                        subtitle="Why CHOOSE US"
                        title="DevOps Enabling Business Agility"
                    />

                    {/* Tabs */}
                    <ul className={combine("flex gap-5 lg:gap-9 xl:gap-12 mb-4 lg:mb-6 xl:mb-10 list-none")}>
                        {tabsData.map((tab, index) => (
                            <li
                                key={index}
                                className={combine("cursor-pointer text-base lg:text-lg font-medium pb-1", activeTab === index
                                    ? "border-b-2 border-orange-500 text-orange-500 px-5"
                                    : "text-black"
                                    )}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.title}
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="bg-white">
                        <h3 className={combine(styles.h4, "font-semibold text-blue mb-2")}>{tabsData[activeTab].title}</h3>
                        <p className={combine(styles.p2, "text-blue leading-relaxed max-w-xl")}>{tabsData[activeTab].content}</p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1">
                    <img
                        src={tabsData[activeTab].image}
                        alt={`${tabsData[activeTab].title} illustration`}
                        className="w-full rounded-lg h-[270px] md:h-[360px] lg:h-[405px] xl:h-[475px]"
                    />
                </div>
            </div>
            </div>
        </section>
    );
}