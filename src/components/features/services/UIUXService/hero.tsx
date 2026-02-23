"use client";

import Image from "next/image";
import Link from "next/link";
import { styles, combine } from "@/styles/style";
import Button from "@/components/shared/ui/button/Button";
import { MoveUpRight, MoveRight } from "lucide-react";
import { getHeroBackgroundLines } from "@/lib/assets/images";

const HeroSection = () => {
    const backgroundLines = getHeroBackgroundLines();
    
    return (
        <section className={combine(styles.flexCenter,styles.sectionPadding, "relative min-h-[45vh] overflow-hidden bg-blue mt-10 rounded-2xl")}>
            <Image 
                src={backgroundLines.leftLine} 
                alt="background lines left" 
                width={500} 
                height={500} 
                className="absolute right-0 top-0 h-full w-auto object-cover" 
            />
            <Image 
                src={backgroundLines.rightLine} 
                alt="background lines right" 
                width={500} 
                height={500} 
                className="absolute left-0 top-0 h-full w-auto object-cover" 
            />

            <div className={combine(styles.sectionPadding, "text-center relative z-10")}>
                <div className="max-w-4xl mx-auto">
                    <h1 className={combine(styles.h1,"font-bold text-white leading-tight mb-6")}>
                        UI/UX Design
                    </h1>

                    <p className={combine(styles.p2,"text-white leading-relaxed mb-8 max-w-3xl mx-auto")}>
                        We design user-centered interfaces that simplify complexity, accelerate conversions, and deliver measurable product performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
