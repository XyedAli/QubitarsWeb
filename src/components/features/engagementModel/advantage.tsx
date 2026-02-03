"use client";

import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import Image from "next/image";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { advantageSection } from "@/data/engModel";

const Advantage = () => {
    const engagementIcons = getEngagementModelCloudinaryImages();
    const advantageItems = advantageSection.items.map((item) => ({
        ...item,
        icon: engagementIcons[item.iconKey],
    }));

    return (
        <section
            className={`${styles.sectionPadding}`}
            style={{ backgroundColor: "#FDFDFD" }}
        >
            <SectionHeading
                subtitle={advantageSection.subtitle}
                title={advantageSection.title}
            />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-23 items-center">
                {/* Left: Header + 2x2 Image Grid */}
                <div className="md:col-span-6 relative w-full overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={engagementIcons.advantageImg}
                        alt="Advantage"
                        className="w-full h-[360px] md:h-[440px] lg:h-[500px] xl:h-[600px]"
                    />
                </div>

                {/* Right: Text Blocks (mapped) */}
                <div className="md:col-span-6 space-y-0 lg:space-y-2 xl:space-y-4  ">
                    {advantageItems.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex gap-4 mb-4 xl:mb-5">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-white">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="w-14 h-14 object-contain"
                                        unoptimized={item.icon.includes("cloudinary.com")}
                                    />
                                </div>
                                <div className="">
                                    <h3
                                        className={`${styles.h6} font-bold text-blue mb-1 lg:mb-3 xl:mb-4 leading-tight font-outfit`}
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
