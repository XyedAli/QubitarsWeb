"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceTab {
    id: string;
    title: string;
    tagline: string;
    description: string;
    whatThisIncludes: string[];
    bestSuitedFor: string[];
}

const Models = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs: ServiceTab[] = [
        {
            id: "product-development",
            title: "Product Development",
            tagline: "End-to-end execution, built for scale",
            description:
                "We collaborate with you to build digital products that deliver real business outcomes. From discovery to launch and beyond, we focus on continuous improvement, speed, and quality aligned to your goals.",
            whatThisIncludes: [
                "Product discovery, research, and requirement validation",
                "UX/UI design focused on usability and conversion",
                "Scalable architecture and clean, production-ready development",
                "Continuous testing, optimization, and iteration",
            ],
            bestSuitedFor: [
                "Startups building MVPs or new platforms",
                "Businesses launching new digital products",
                "Companies modernizing or scaling existing solutions",
            ],
        },
        {
            id: "team-augmentation",
            title: "Team Augmentation",
            tagline: "Extend your team with the right skills",
            description:
                "Add senior engineers, designers, or specialists to your existing team. We integrate with your workflows and tools so you can scale capacity without the overhead of hiring.",
            whatThisIncludes: [
                "Dedicated resources that work as part of your team",
                "Flexible engagement length and hours",
                "Alignment with your stack, processes, and culture",
                "Clear communication and delivery expectations",
            ],
            bestSuitedFor: [
                "Teams with a capacity gap or tight deadlines",
                "Companies needing specialized skills short-term",
                "Organizations scaling engineering or design capacity",
            ],
        },
        {
            id: "consultation",
            title: "Consultation",
            tagline: "Strategy and guidance when you need it",
            description:
                "Get expert advice on architecture, technology choices, product strategy, or delivery practices. We help you make informed decisions and set up for long-term success.",
            whatThisIncludes: [
                "Technical and product strategy reviews",
                "Architecture and stack recommendations",
                "Process and team structure guidance",
                "Workshops and knowledge transfer",
            ],
            bestSuitedFor: [
                "Leaders planning a new product or major change",
                "Teams evaluating build vs buy or tech stack",
                "Organizations preparing for scale or modernization",
            ],
        },
    ];

    return (
        <section
            className={`${styles.sectionPadding} py-14 md:py-18 lg:py-22 xl:py-24`}
            style={{ backgroundColor: "#FFFFFF" }}
        >
            {/* Section title – matches Figma */}
            <div className="mb-6 text-center">
                <h2 className={`${styles.h1} font-semibold text-[#1E274F] leading-tight font-outfit`}>
                    Growth-Focused
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
                        Digital Services
                    </span>
                </h2>
            </div>

            {/* Tab navigation – orange underline for active */}
            <div className="mb-8 md:mb-10">
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-4 py-3 md:px-6 md:py-4 font-semibold font-outfit transition-all duration-300 ${activeTab === index
                                    ? "text-[#F05C22]"
                                    : "text-gray-600 hover:text-[#1E274F]"
                                }`}
                        >
                            <span className={`${styles.h6}`}>{tab.title}</span>
                            {activeTab === index && (
                                <span
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                                    style={{
                                        background: "linear-gradient(90deg, #F05C22, #F58220)",
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab content – two columns */}
            <div className="relative">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`transition-all duration-500 ${activeTab === index
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                            }`}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-10 items-stretch">
                            {/* Left: Staircase illustration image */}
                            <div className="relative min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden lg:col-span-5 bg-[#1E274F]">
                                <Image
                                    src="/assets/images/engModel/engImg2.png"
                                    alt="Growth-focused process: team, partnership, process, goals"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Right: Title, tagline, description, lists */}
                            <div className="flex flex-col justify-center bg-[#EDEFF880] p-8 rounded-2xl lg:col-span-7">
                                <h3 className={`${styles.h4} font-bold text-[#1E274F] font-outfit leading-tight mb-2`}>
                                    {tab.title}
                                </h3>
                                <p className={`${styles.p3} text-gray-600 font-inter mb-5`}>
                                    {tab.tagline}
                                </p>
                                <p className={`${styles.p2} text-gray-700 font-inter leading-relaxed mb-6`}>
                                    {tab.description}
                                </p>

                                <div className="space-y-5">
                                    <div>
                                        <h4 className={`${styles.p3} font-semibold text-[#1E274F] font-outfit mb-3`}>
                                            What this includes:
                                        </h4>
                                        <ul className="space-y-2">
                                            {tab.whatThisIncludes.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <p className="text-xl md:text-2xl leading-none text-blue">•</p>
                                                    <span className={`${styles.p4} text-gray-700 font-inter`}>
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className={`${styles.p3} font-semibold text-[#1E274F] font-outfit mb-3`}>
                                            Best Suited for:
                                        </h4>
                                        <ul className="space-y-2">
                                            {tab.bestSuitedFor.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <p className="text-xl md:text-2xl leading-none text-blue">•</p>
                                                    <span className={`${styles.p4} text-gray-700 font-inter`}>
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
                    Discuss Your Unique Needs
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </section>
    );
};

export default Models;
