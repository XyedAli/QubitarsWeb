"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getUIUXServiceImages } from "@/lib/assets/images";
import { SectionHeading } from "@/components/shared/headings";
import { uiuxServicesData } from "@/data/digital-transformation/services";

interface OurServicesProps {
  services?: typeof uiuxServicesData;
}

const backgroundKeys = [
    "scardbg1",
    "scardbg2",
    "scardbg3",
    "scardbg4",
    "scardbg5",
    "scardbg6",
] as const;

const OurServices = ({ services = uiuxServicesData }: OurServicesProps = {}) => {
    const serviceImages = getUIUXServiceImages();

    return (
        <section
            className={combine(
                styles.sectionPaddingY,
                styles.sectionPadding,
                "py-7 lg:py-12 xl:py-16"
            )}
        >
            {/* Section Header */}
            <div className="flex items-center justify-between">
                <SectionHeading
                    subtitle="Core Services"
                    title="Full-Spectrum UI/UX Services"
                />
                <div className="hidden md:block w-[400px] xl:w-[600px] h-[2px] bg-gray-500" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
                {services.map((service, index) => (
                    <div
                        key={service.number}
                        className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                        {/* Background */}
                        <div className="relative w-full h-64 lg:h-80 xl:h-92 rounded-2xl overflow-hidden">
                            <Image
                                src={serviceImages[backgroundKeys[index]]}
                                alt={`${service.title} background`}
                                fill
                                className="object-cover"
                            />

                            <Image
                                src={serviceImages.blurframe}
                                alt="blur frame"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-end p-4 xl:p-6 z-10">
                            <div>
                                <p className={combine(styles.h5,"text-white font-medium mb-1")} >
                                    {service.number}.
                                </p>
                                <h4 className={combine(styles.h5,"text-white font-outfit font-medium mb-1 xl:mb-2 leading-tight ")}>
                                    {service.title}
                                </h4>
                                <p className={combine(styles.p2,"text-white leading-relaxed")}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;