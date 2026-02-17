"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button, CustomSlider } from "@/components/shared/ui";
import { engagementData } from "@/data";
import { styles, combine } from "@/styles/style";
import { MoveUpRight, MoveRight } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type Slider from "react-slick";
import Link from "next/link";
import { getCompanyCloudinaryImages } from "@/lib/assets/images";

// Map dropdown service titles to engagement-models page tab hashes (models.tsx)
const SERVICE_TO_HASH: Record<string, string> = {
    "Product Development": "product-development",
    "Team Augmentation": "team-augmentation",
    "Consultation": "consultation",
};

// Engagement dropdown component
export const EngagementDropdown = () => {
    const sliderRef = useRef<Slider | null>(null);

    // Get Cloudinary company images
    const companyCloudinaryImages = getCompanyCloudinaryImages();

    // Slider config for testimonials carousel
    const sliderSettings = {
        fade: true,
        autoplaySpeed: 3000,
    };

    const handlePrevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <>
            <div className="fixed inset-x-0 top-[97px] max-w-2xl lg:max-w-4xl  xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
                <div className="mx-6 lg:mx-12 xl:mx-16 py-12">
                    <div className="grid grid-cols-2 gap-12 w-full">
                        {/* Services list */}
                        <div className="space-y-6">
                            {engagementData.filter(item => item.type === "service").map((service) => {
                                const IconComponent = service.icon!;
                                const hash = service.title ? SERVICE_TO_HASH[service.title] : undefined;
                                const href = hash ? `/engagement-models#${hash}` : "/engagement-models";
                                return (
                                    <Link key={service.id} href={href} className="flex items-start gap-2 group block">
                                        <div className="flex-shrink-0">
                                            <IconComponent width={32} height={32} className="text-blue group-hover:text-accent transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-base lg:text-lg font-bold text-accent mb-2 hover:underline">
                                                {service.title}
                                            </h4>
                                            <p className={combine(styles.p4, "text-blue leading-relaxed")}>
                                                {service.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                            <Button variant="accent" size="md" className="mt-4">
                             <Link href="/engagement-models">
                                        Discover More
                                    </Link>
                                    <div className="relative">
                                        <MoveUpRight className="w-5 h-5 mx-1 text-white transition-opacity duration-300 group-hover:opacity-0" />
                                        <MoveRight className="w-5 h-5 mx-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                </Button>
                            </div>

                        {/* Testimonials carousel */}
                        <div className="space-y-4 border-l-2 border-gray-300 pl-7">
                            <div className={combine(styles.flexBetween, "mb-4")}>
                                <h4 className="text-base lg:text-lg font-bold text-accent">Hear From Our Clients</h4>
                                {/* Slider arrows next to heading */}
                                <div className="flex gap-1">
                                    <button
                                        onClick={handlePrevSlide}
                                        className="cursor-pointer hover:scale-110 transition-transform"
                                        aria-label="Previous slide"
                                    >
                                        <ArrowLeft width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
                                    </button>
                                    <button
                                        onClick={handleNextSlide}
                                        className="cursor-pointer hover:scale-110 transition-transform"
                                        aria-label="Next slide"
                                    >
                                        <ArrowRight width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <CustomSlider
                                    settings={sliderSettings}
                                    showArrows={false}
                                    onSliderReady={(ref) => {
                                        sliderRef.current = ref.current;
                                    }}
                                    className="engagement-testimonials-slider"
                                >
                                    {engagementData.filter(item => item.type === "testimonial").map((testimonial) => (
                                        <div key={testimonial.id} className="space-y-4">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>
                                            {/* Profile Content */}
                                            <div className={combine(styles.flexitems, "gap-3 mt-4")}>
                                                <Image
                                                    src={companyCloudinaryImages.jake}
                                                    alt={testimonial.clientName!}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-full object-cover hover:opacity-90 transition-opacity"
                                                />
                                                <div>
                                                    <p className="text-accent font-bold text-sm">
                                                        {testimonial.clientName}
                                                    </p>
                                                    <p className="text-gray-600 text-xs">
                                                        {testimonial.clientTitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Project Logo Slider */}
                                </CustomSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
