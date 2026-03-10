"use client";

import { combine, styles } from "@/styles/style";
import Image from "next/image";
import { getStaffAugmentationImages, getStaffAugmentationIcons } from "@/lib/assets";
import { SectionHeading } from "@/components/shared/headings";

export default function AdvantagesSection() {
    const staffImages = getStaffAugmentationImages();
    const staffIcons = getStaffAugmentationIcons();

    return (
        <section className={combine("bg-gray-50 py-16", styles.sectionPaddingX)}>
            <div className="">

                {/* Section Header */}
                <SectionHeading
                    subtitle="Key Deliverables"
                    title="Key Advantages of a Dedicated Team"
                />

                {/* 3 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* First Column - 2 Cards */}
                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                             <Image
                            src={staffIcons.saIcon1}
                            alt="Product-Focused Specialists"
                            width={48}
                            height={48}
                            className="object-cover rounded-xl shadow-lg mb-4"
                           />
                            <h3 className={combine("font-semibold text-gray-900 mb-2", styles.h6)}>
                                Product-Focused Specialists
                            </h3>
                            <p className={combine("text-gray-600", styles.p4)}>
                                Work with a team fully dedicated to your product, aligned with your technology stack, business goals, and long-term vision.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                             <Image
                            src={staffIcons.saIcon2}
                            alt="Cost-Effective Development"
                            width={48}
                            height={48}
                            className="object-cover rounded-xl shadow-lg mb-4"
                           />
                            <h3 className={combine("font-semibold text-gray-900 mb-2", styles.h6)}>
                                Cost-Effective Development
                            </h3>
                            <p className={combine("text-gray-600", styles.p4)}>
                                Avoid the complexity of freelancers or short-term contracts with predictable costs and better long-term ROI.                            </p>
                        </div>
                    </div>

                    {/* Second Column - Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full h-96 lg:h-full min-h-[400px]">
                            <Image
                                src={staffImages.staffImage2}
                                alt="Staff Augmentation Team"
                                fill
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Third Column - 2 Cards */}
                    <div className="space-y-6">
                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                           <Image
                            src={staffIcons.saIcon3}
                            alt="Faster Time-to-Market"
                            width={48}
                            height={48}
                            className="object-cover rounded-xl shadow-lg mb-4"
                           />
                            <h3 className={combine("font-semibold text-gray-900 mb-2", styles.h6)}>
                                Faster Time-to-Market
                            </h3>
                            <p className={combine("text-gray-600", styles.p4)}>
                                Dedicated teams integrate quickly with your workflow, helping you deliver products faster and more efficiently.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                         <Image
                            src={staffIcons.saIcon4}
                            alt="Flexible & Scalable Teams"
                            width={48}
                            height={48}
                            className="object-cover rounded-xl shadow-lg mb-4"
                           />
                            <h3 className={combine("font-semibold text-gray-900 mb-2", styles.h6)}>
                                Flexible & Scalable Teams
                            </h3>
                            <p className={combine("text-gray-600", styles.p4)}>
                                Easily scale your team up or down based on project requirements without the overhead of traditional hiring.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}