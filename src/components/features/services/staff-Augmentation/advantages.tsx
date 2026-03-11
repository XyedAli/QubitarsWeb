"use client";

import { combine, styles } from "@/styles/style";
import Image from "next/image";
import { getStaffAugmentationImages, getStaffAugmentationIcons } from "@/lib/assets";
import { SectionHeading } from "@/components/shared/headings";
import { advantagesData } from "@/data/staff-augmentation";

export default function AdvantagesSection() {
    const staffImages = getStaffAugmentationImages();
    const staffIcons = getStaffAugmentationIcons();

    const renderCard = (item: typeof advantagesData[0]) => (
        <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 xl:p-6 hover:shadow-xl transition-shadow duration-300">
            <Image
                src={staffIcons[item.icon as keyof typeof staffIcons]}
                alt={item.title}
                width={48}
                height={48}
                className="object-cover rounded-xl shadow-lg mb-4"
            />
            <h3 className={combine("font-semibold text-gray-900 mb-2 text-[16px] md:text-[18px] lg:text-[19px] xl:text-[24px]")}>
                {item.title}
            </h3>
            <p className={combine("text-gray-600", styles.p4)}>
                {item.description}
            </p>
        </div>
    );

    return (
        <section className={combine("bg-gray-50 py-16", styles.sectionPaddingX)}>
            <div className="">

                {/* Section Header */}
                <SectionHeading
                    subtitle="Key Deliverables"
                    title="Key Advantages of a Dedicated Team"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">

                    {/* First Column */}
                    <div className="space-y-4 xl:space-y-6">
                        {advantagesData.filter(item => item.column === 1).map(renderCard)}
                    </div>

                    {/* Second Column - Image - Hidden on mobile */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-full h-96 lg:h-full min-h-[400px]">
                            <Image
                                src={staffImages.staffImage2}
                                alt="Staff Augmentation Team"
                                fill
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="space-y-4 xl:space-y-6">
                        {advantagesData.filter(item => item.column === 3).map(renderCard)}
                    </div>

                </div>
            </div>
        </section>
    );
}