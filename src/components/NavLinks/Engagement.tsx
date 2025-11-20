"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Button from "../ui/button/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { engagementData } from "@/data/Navbar";


export const Engagement = () => {

    const sliderRef = useRef<Slider>(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        fade: true,
        cssEase: "linear"
    };

    const handlePrevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <>
            <div className="fixed inset-x-0 top-[91px] max-w-2xl lg:max-w-4xl  xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
                <div className="mx-6 lg:mx-12 xl:mx-16 py-12">
                    <div className="grid grid-cols-2 gap-12 w-full">
                        <div className="space-y-6">
                            {engagementData.filter(item => item.type === "service").map((service) => {
                                const IconComponent = service.icon!;
                                return (
                                    <div key={service.id} className="flex items-start gap-2">
                                        <div className="flex-shrink-0">
                                            <IconComponent width={32} height={32} className="text-blue" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-baselg:text-lg font-bold text-accent mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-blue text-sm lg:text-base leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                            <Button variant="accent" size="md" className="mt-4">
                                Discover More
                            </Button>
                        </div>

                        <div className="space-y-4 border-l-2 border-gray-300 pl-7">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-baselg:text-lg font-bold text-accent">Hear From Our Clients</h3>
                                <div className="flex gap-2">
                                    <button onClick={handlePrevSlide} className="cursor-pointer hover:scale-110 transition-transform p-1">
                                        <ArrowLeft width={20} height={20} className="text-[#1E274F] hover:text-accent" />
                                    </button>
                                    <button onClick={handleNextSlide} className="cursor-pointer hover:scale-110 transition-transform p-1">
                                        <ArrowRight width={20} height={20} className="text-[#1E274F] hover:text-accent" />
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <Slider ref={sliderRef} {...sliderSettings}>
                                    {engagementData.filter(item => item.type === "testimonial").map((testimonial) => (
                                        <div key={testimonial.id} className="space-y-4">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex items-center gap-3 mt-4">
                                                <Image
                                                    src={testimonial.clientAvatar!}
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
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
