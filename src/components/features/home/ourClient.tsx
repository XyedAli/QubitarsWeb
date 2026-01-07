"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

export interface Testimonial {
    id: string;
    image1: string;
    image2: string;
    image3: string;
    desp: string;
    author: string;
    title?: string;
    logo?: string;
}

interface FunMomentsProps {
    testimonials: Testimonial[];
    heading?: string;
    description?: string;
}

const OurClient: React.FC<FunMomentsProps> = ({ testimonials }) => {
    const [readMoreStates, setReadMoreStates] = useState<{ [key: string]: boolean }>({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef<Slider>(null);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Truncate text by word count
    const truncateByWords = (text: string, wordLimit: number): string => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const toggleReadMore = (slideId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setReadMoreStates(prev => ({
            ...prev,
            [slideId]: !prev[slideId]
        }));
    };

    // Slider configuration
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: false,
        centerMode: !isMobile,
        centerPadding: isMobile ? "0" : "25%",
        arrows: false,
        fade: false,
        cssEase: "ease-in-out",
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
        },
    };
    return (
        <div className={combine(styles.sectionPadding, styles.sectionPaddingY)}>
            <SectionHeading
                subtitle="OUR CLIENTS"
                title="Making Hundreds Of Businesses Better, Big Or Small!"
            />

            <div className="our-client-slider">
                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            className={`relative transition-all duration-300 mt-[47px] ${
                                currentSlide === index 
                                    ? "scale-95 xl:scale-86 z-10" 
                                    : "top-10 scale-85 blur-xs"
                            }`}
                        >
                            {/* Client avatar */}
                            {item.image3 && (
                                <Image
                                    src={item.image3}
                                    alt={item.author}
                                    width={240}
                                    height={240}
                                    priority
                                    className="absolute -top-9 lg:-top-12 xl:-top-14 left-8 w-[70px] lg:w-[90px] xl:w-[105px] h-[70px] lg:h-[90px] xl:h-[105px] rounded-full z-20"
                                />
                            )}
                            <div className="bg-white border border-[#E5E5E5] rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col justify-between h-[230px] md:h-[250px] lg:h-[340px] xl:h-[350px] max-w-7xl w-full pt-6 lg:pt-8 xl:pt-12">
                                <div className="flex flex-col flex-1">
                                    {/* Star rating */}
                                    <div className="flex justify-end items-start px-4 md:px-6 lg:px-8 pb-2 xl:pb-4">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <IoStar key={i} className="text-accent w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                                            ))}
                                        </div>
                                    </div>
                                    {/* Testimonial text with responsive read more/less */}
                                    <div className="px-4 lg:px-6 xl:px-8 flex-1 flex items-start lg:items-center">
                                        <p className={combine("font-normal text-zinc-800 italic transition-all duration-300 w-full", styles.p3)}>
                                            {/* Mobile: word-based truncation */}
                                            <span className="block md:hidden">
                                                {!readMoreStates[item.id] ? (
                                                    <>
                                                        {truncateByWords(item.desp, 25).replace('...', '')}
                                                        {item.desp.split(' ').length > 25 && (
                                                            <span className="text-zinc-600 underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer ml-1" onClick={(e) => toggleReadMore(item.id, e)}>
                                                                Read More
                                                            </span>
                                                        )}
                                                    </>
                                                ) : (
                                                    <>
                                                        {item.desp}
                                                        <span className="text-zinc-600 underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer ml-1 block" onClick={(e) => toggleReadMore(item.id, e)}>
                                                            Read Less
                                                        </span>
                                                    </>
                                                )}
                                            </span>
                                            {/* Tablet: CSS clamp with read more */}
                                            <span className="hidden md:block lg:hidden">
                                                {!readMoreStates[item.id] ? (
                                                    <span className="testimonial-text-clamp" onClick={(e) => toggleReadMore(item.id, e)}>
                                                        {item.desp} <span className="text-zinc-600 underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer">Read More</span>
                                                    </span>
                                                ) : (
                                                    <>
                                                        {item.desp}
                                                        <span className="text-zinc-600 underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer ml-1 block mt-1" onClick={(e) => toggleReadMore(item.id, e)}>
                                                            Read Less
                                                        </span>
                                                    </>
                                                )}
                                            </span>
                                            {/* Desktop: full text */}
                                            <span className="hidden lg:block">
                                                {item.desp}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {/* Author info and logo */}
                                <div className="flex items-end justify-between px-4 xl:px-6 lg:px-8 pb-4 md:pb-5 lg:pb-6">
                                    <div className="flex flex-col">
                                        <p className={combine("font-bold text-black mb-0 xl:mb-1 mt-2 lg:mt-0", styles.p1)}>
                                            {item.author}
                                        </p>
                                        {item.title && (
                                            <p className={combine("font-normal text-gray-600 text-sm", styles.p2)}>
                                                {item.title}
                                            </p>
                                        )}
                                    </div>
                                    {item.logo && (
                                        <img src={item.logo} alt="Company Logo" className="h-6 md:h-7 lg:h-9 w-auto" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurClient;
