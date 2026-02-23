"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { getUIUXServiceImages } from "@/lib/assets/images";
import { SectionHeading } from "@/components/shared/headings";

const OurServices = () => {
    const serviceImages = getUIUXServiceImages();

    const services = [
        {
            number: "01",
            title: "Branding",
            description: "Your brand is more than a logo it’s the trust & experience it delivers. We build cohesive digital identities with a unified voice."
        },
        {
            number: "02",
            title: "UI/UX Design",
            description: "We transform strategy into intuitive UX/UI, refining visuals, interactions, and details to deliver polished, purposeful designs."
        },
        {
            number: "03",
            title: "UI for Mobile & Web",
            description: "Our interfaces balance beauty with usability, ensuring seamless performance across every screen and device."
        },
        {
            number: "04",
            title: "UX/UI Consulting",
            description: "Focus on user needs to optimize layouts and deliver enjoyable experiences consistently."
        },
        {
            number: "05",
            title: "Product Design",
            description: "With proven expertise, we create engaging solutions — improving existing products or building new ones from scratch."
        },
        {
            number: "06",
            title: "MVP Design",
            description: "Our lean approach prioritizes core flows and scalability — helping your MVP launch fast and grow confidently."
        }
    ];

    const backgroundKeys = ["scardbg1", "scardbg2", "scardbg3", "scardbg4", "scardbg5", "scardbg6"] as const;

    return (
        <section className={combine(styles.sectionPaddingY, styles.sectionPadding, "py-16")}>
            <div className="">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                    <SectionHeading
                        subtitle="core Services"
                        title="Full-Spectrum UI/UX Services"
                    />
                    <p className="w-[600px] h-[2px] bg-gray-500 mb-14"></p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={service.number}
                            className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 h-full"
                        >
                            {/* Background Image */}
                            <div className="relative w-full h-64 lg:h-92 rounded-2xl overflow-hidden">
                                <Image
                                    src={serviceImages[backgroundKeys[index]]}
                                    alt={`${service.title} background`}
                                    fill
                                    className="object-cover"
                                />

                                {/* Blur Frame Overlay */}
                                <Image
                                    src={serviceImages.blurframe}
                                    alt="blur frame"
                                    fill
                                    className="absolute inset-0 object-cover rounded-2xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-end justify-between p-6 z-10">
                                {/* Number */}
                                <div>
                                    <p className={combine(styles.h5, "text-white font-medium mb-1")}>
                                        {service.number}.
                                    </p>
                                    <h4 className={combine(styles.h5, "text-white font-outfit font-medium mb-2")}>
                                        {service.title}
                                    </h4>
                                    <p className={combine(styles.p3, "text-white leading-relaxed")}>
                                        {service.description}
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

export default OurServices;