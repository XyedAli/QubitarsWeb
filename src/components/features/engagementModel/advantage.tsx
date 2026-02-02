"use client";

import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import Image from "next/image";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";

const engagementIcons = getEngagementModelCloudinaryImages();

interface AdvantageItem {
    title: string;
    description: string;
    icon: string;
}

const advantageItems: AdvantageItem[] = [
    {
        title: "Consistent Quality Assurance",
        description:
            "Quality is maintained through defined processes, reviews, and testing at every stage, ensuring dependable outcomes and reduced operational risk.",
        icon: engagementIcons.icon7,
    },
    {
        title: "Faster Time to Market",
        description:
            "Streamlined workflows and optimized delivery cycles help launch solutions quickly, keeping businesses ahead of competitors.",
        icon: engagementIcons.icon8,
    },
    {
        title: "Future-Ready Solutions",
        description:
            "Systems are designed to evolve with business goals, supporting new features, integrations, and growth over time.",
        icon: engagementIcons.icon9,
    },
];

const Advantage = () => {
    return (
        <section
            className={`${styles.sectionPadding}`}
            style={{ backgroundColor: "#FDFDFD" }}
        >
            <SectionHeading
                subtitle="ADVANTAGE"
                title="Key Benefits of Our Engagement Models"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-23 items-center">
                {/* Left: Header + 2x2 Image Grid */}
                <div className="lg:col-span-6 relative w-full overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={engagementIcons.advantageImg}
                        alt="Advantage"
                        className="w-full h-[600px]"
                    />
                </div>

                {/* Right: Text Blocks (mapped) */}
                <div className="lg:col-span-6 space-y-4  ">
                    {advantageItems.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className=" flex gap-4 mb-4 md:mb-5">
                                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="w-6 h-6 xl:w-14 xl:h-14 object-contain"
                                        unoptimized={item.icon.includes("cloudinary.com")}
                                    />
                                </div>
                                <div className="">
                                    <h3
                                        className={`${styles.h6} font-bold text-blue mb-3 md:mb-4 leading-tight font-outfit`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`${styles.p2} text-gray-600 leading-relaxed font-inter max-w-lg`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
