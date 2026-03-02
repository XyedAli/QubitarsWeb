// components/WhyChooseUs.jsx
"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/headings";
import { styles, combine } from "@/styles/style";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";

export default function ChooseQubitars() {
    const [activeTab, setActiveTab] = useState(0);
    const devOpsImages = getDevOpsCloudinaryImages();
    
    const tabsData = [
        {
            title: "DevSecOps",
            content:
                "We embed security into every stage of the delivery pipeline, using automated compliance checks, vulnerability scanning, and policy enforcement to protect applications without slowing development velocity.",
            image: devOpsImages.chooseQubitars1,
        },
        {
            title: "MLOps",
            content: "We operationalize machine learning by automating model training, deployment, monitoring, and performance optimization, enabling faster insights, reduced costs, and proactive issue detection.",
            image: devOpsImages.chooseQubitars2,

        },
        {
            title: "ModelOps",
            content: "We manage the full lifecycle of AI/ML models—from deployment to governance—ensuring scalability, regulatory compliance, collaboration, and consistent performance across environments.",
            image: devOpsImages.chooseQubitars3,

        },
        {
            title: "GitOps",
            content: "We use Git as a single source of truth for infrastructure and deployments, enabling version-controlled environments, faster rollbacks, improved collaboration, and reliable, automated delivery workflows.",
            image: devOpsImages.chooseQubitars4,
        },
    ];

    return (
        <section className="" >
        <div className={combine(styles.sectionPaddingY, styles.sectionPadding, )}>
            <div className="flex flex-col lg:flex-row gap-24 items-center">
                {/* Text Content */}
                <div className="flex-1">
                    <SectionHeading
                        subtitle="Why CHOOSE US"
                        title="DevOps Enabling Business Agility"
                    />

                    {/* Tabs */}
                    <ul className={combine("flex gap-12 mb-12 list-none")}>
                        {tabsData.map((tab, index) => (
                            <li
                                key={index}
                                className={combine("cursor-pointer font-medium pb-1", activeTab === index
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
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
            </div>
        </section>
    );
}