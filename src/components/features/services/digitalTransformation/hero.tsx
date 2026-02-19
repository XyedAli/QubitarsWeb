"use client";

import Image from "next/image";
import Link from "next/link";
import { styles, combine } from "@/styles/style";
import Button from "@/components/shared/ui/button/Button";
import { MoveUpRight, MoveRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className={`relative min-h-[80vh] flex items-center overflow-hidden `}>
            <div className={`${styles.sectionPadding}`}>
                {/* Background Image */}
                <Image
                    src="/assets/images/ui ux 1.png" // change image path if needed
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 w-full text-left">

                    <div className="max-w-2xl ">

                        <h1 className="text-[48px] font-bold text-white leading-none mb-6">
                            Power Business Growth Through Intuitive Digital Experiences
                        </h1>

                        <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                            From research to interaction design, we craft seamless digital experiences aligned with user behavior and business performance goals.
                        </p>

                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white text-[#111827] font-semibold font-outfit rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300 w-fit"
                        >
                            <span><Link href="/contact">Book a Consultation, it&apos;s free</Link></span>
                            <div className="relative flex items-center justify-center">
                                <MoveUpRight className="w-4 h-4 mx-1 text-blue transition-opacity duration-300 group-hover:opacity-0" />
                                <MoveRight className="w-4 h-4 mx-1 text-blue font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
