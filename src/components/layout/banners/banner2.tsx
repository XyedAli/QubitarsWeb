"use client";

import Image from "next/image";
import { MoveUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { styles, combine } from "@/styles/style";

interface Banner2Props {
    title?: string;
    description?: string;
    email?: string;
    buttonText?: string;
    backgroundImage?: string;
}

const Banner2 = ({ 
    title = "Build Faster. Scale Smarter. Win Bigger.",
    description,
    email,
    buttonText = "Let's Discuss",
    backgroundImage = "/assets/images/generals/banners/bannerbg2.png"
}: Banner2Props) => {
    // Split title into parts for display
    const titleParts = title.split('. ').filter(part => part.trim());
    
    return (
        <section className="relative overflow-hidden min-h-[45vh] md:min-h-[45vh] lg:min-h-[53vh] flex items-center mx-5">
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            <div className={combine("relative z-10 w-full", styles.sectionPadding)}>
                <div className="flex flex-col md:flex-row flex-nowrap justify-left md:justify-between items-start md:items-center w-full gap-6 md:gap-0">
                    <div className="flex-1 flex flex-col gap-2 lg:gap-3 xl:gap-5 text-left">
                        <h2 className={combine(`${styles.h2} max-w-sm max-w-md lg:max-w-lg text-white font-bold leading-tight font-outfit`)}>
                            <span className="md:hidden">
                                {title}
                            </span>
                            <span className="hidden md:inline">
                                {titleParts.map((part, index) => (
                                    <span key={index}>
                                        {part}.
                                        {index < titleParts.length - 1 && <br />}
                                    </span>
                                ))}
                            </span>
                        </h2>
                        {(description || email) && (
                            <p className="text-white text-base md:text-lg lg:text-xl font-inter flex justify-start items-center gap-2">
                                {description && <span>{description}</span>}
                                {email && (
                                    <a 
                                        href={`mailto:${email}`} 
                                        className="underline hover:text-accent font-semibold transition-colors duration-300 flex items-center gap-1"
                                    >
                                        {email}
                                    </a>
                                )}
                            </p>
                        )}
                    </div>
                    <Link href="/apply-now">
                    <button className="group inline-flex items-center gap-2 px-4 md:px-5 lg:px-8 py-2 lg:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex-shrink-0 cursor-pointer">
                        <span>{buttonText}</span>
                        <MoveUpRight className="w-5 lg:w-7 h-5 lg:h-7 rounded-full bg-white p-1 text-black" />
                    </button>
                    </Link>
                </div>  
            </div>
        </section>
    );
};

export default Banner2;

