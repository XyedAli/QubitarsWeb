"use client"

import { SectionHeading } from "@/components/shared/headings"
import Image from "next/image"
import { getStaffAugmentationImages } from "@/lib/assets"
import { combine, styles } from "@/styles/style"
import { productDeliveryData } from '@/data/staff-augmentation';

const staffImages = getStaffAugmentationImages()

export default function HowItWorks() {
    return (
        <>
            <style jsx>{`
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
            .blink-dot {
                animation: blink 2s infinite;
            }
        `}</style>
            <section className={combine(styles.sectionPaddingY,styles.sectionPaddingX)}>
                <SectionHeading
                    subtitle="How It Works"
                    title="Clear Roles For Faster Product Delivery"
                />
                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-0 items-center xl:px-4">

                    {/* LEFT TEXT */}
                    <div className="space-y-6 lg:-mt-28 flex justify-end md:flex-row md:justify-between md:items-start">
                        <div className="space-y-6 order-1">
                            {productDeliveryData.yourRoles.map((role, index) => (
                                <div key={index} className="flex gap-1 md:gap-3 items-start">
                                    <p className={combine("text-gray-600 leading-tight text-sm md:text-base lg:text-lg xl:text-xl")}>
                                        {role.text}
                                    </p>
                                    <div className="w-4 md:w-5 h-4 md:h-5 bg-gray-200 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                        <div className="w-2 md:w-3 h-2 md:h-3 bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative z-10 block lg:hidden md:mt-0 md:ml-4 order-2">
                            <Image
                                src={staffImages.saImg19}
                                alt="Qubitars staff augmentation — your team and delivery flow diagram"
                                width={370}
                                height={120}
                            />
                        </div>
                    </div>

                    {/* CENTER ARROWS */}
                    <div className="relative flex flex-col items-center justify-center hidden lg:block">
                        {/* YOU ARROW */}

                        <div className="relative z-10 flex justify-center">
                            <Image
                                src={staffImages.saImg19}
                                alt="Qubitars staff augmentation — your team and delivery flow diagram"
                                width={340}
                                height={120}
                            />
                        </div>
                        {/* QUBITARS ARROW */}
                        <div className="relative z-10 flex justify-center">
                            <Image
                                src={staffImages.saImg20}
                                alt="Qubitars staff augmentation — your team and delivery flow diagram"
                                width={340}
                                height={120}
                            />
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                  <div className="space-y-6 lg:mt-40 flex justify-end md:flex-row md:justify-between md:items-start">
                        <div className="space-y-6 order-2">
                        {productDeliveryData.ourRoles.map((role, index) => (
                            <div key={index} className="flex gap-3 items-start">
                                <div className="w-4 md:w-5 h-4 md:h-5 bg-blue-200 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                    <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full blink-dot"></div>
                                </div>
                                <p className={combine("text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl leading-tight")}>
                                    {role.text}
                                </p>
                            </div>
                        ))}
                   </div>
                        <div className="relative z-10 block lg:hidden mt-23 md:mt-7 md:me-4 order-1">
                            <Image
                                src={staffImages.saImg20}
                                alt="Qubitars staff augmentation — your team and delivery flow diagram"
                                width={370}
                                height={120}
                            />
                        </div>
                    </div>
                    </div>
            </section>
        </>
        )
}