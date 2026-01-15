"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Location {
    id: number;
    name: string;
    top: string;
    left: string;

    // optional responsive positions (to avoid TS errors)
    topSm?: string;
    leftSm?: string;
    topMd?: string;
    leftMd?: string;
    topLg?: string;
    leftLg?: string;
}

const locations: Location[] = [
    { id: 1, name: "Edmonton, Canada", top: "25%", left: "18%", topMd: "18%", leftMd: "16%", topSm: "20%", leftSm: "14%", topLg: "16%", leftLg: "17%" },
    { id: 2, name: "Chicago, USA", top: "23%", left: "29%", topMd: "15%", leftMd: "27%", topSm: "19%", leftSm: "25%", topLg: "13%", leftLg: "28%" },
    { id: 3, name: "San Francisco, USA", top: "43%", left: "12%", topMd: "43%", leftMd: "6%", topSm: "35%", leftSm: "8%", topLg: "37%", leftLg: "11%" },
    { id: 4, name: "New York City, USA", top: "28%", left: "28%", topMd: "22%", leftMd: "26%", topSm: "24%", leftSm: "24%", topLg: "22%", leftLg: "27%" },
    { id: 5, name: "Logan, USA", top: "46%", left: "24%", topMd: "48%", leftMd: "22%", topSm: "35%", leftSm: "20%", topLg: "43%", leftLg: "23%" },
    { id: 6, name: "Miami, USA", top: "48%", left: "20%", topMd: "56%", leftMd: "18%", topSm: "42%", leftSm: "15%", topLg: "48%", leftLg: "19%" },
    { id: 7, name: "Virginia, USA", top: "34%", left: "25%", topMd: "32%", leftMd: "23%", topSm: "30%", leftSm: "21%", topLg: "33%", leftLg: "17%" },
    { id: 8, name: "Maryland, USA", top: "32%", left: "15%", topMd: "27%", leftMd: "14%", topSm: "28%", leftSm: "22%", topLg: "28%", leftLg: "25%" },
    { id: 9, name: "North Carolina, USA", top: "37%", left: "28%", topMd: "40%", leftMd: "26%", topSm: "32%", leftSm: "24%", topLg: "36%", leftLg: "27%" },
    { id: 10, name: "Tallinn, Estonia", top: "22%", left: "53%", topMd: "20%", leftMd: "50%", topSm: "18%", leftSm: "48%", topLg: "21%", leftLg: "51%" },
    { id: 11, name: "Utrecht, Netherlands", top: "28%", left: "50%", topMd: "26%", leftMd: "52%", topSm: "24%", leftSm: "45%", topLg: "29%", leftLg: "49%" },
    { id: 12, name: "Lagos, Nigeria", top: "55%", left: "51%", topMd: "52%", leftMd: "46%", topSm: "50%", leftSm: "48%", topLg: "54%", leftLg: "50%" },
    { id: 13, name: "Kampala, Uganda", top: "60%", left: "58%", topMd: "57%", leftMd: "55%", topSm: "55%", leftSm: "52%", topLg: "59%", leftLg: "57%" },
    { id: 14, name: "Seoul, Korea", top: "38%", left: "82%", topMd: "36%", leftMd: "78%", topSm: "34%", leftSm: "75%", topLg: "37%", leftLg: "80%" },
];

const TimesZone = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="relative mx-auto w-full max-w-[1400px]">
                    {/* Map */}
                    <div className="relative aspect-[1.8/1] w-full">
                        <Image
                            src="/assets/images/about/Map.png"
                            alt="World Map connecting global clients"
                            fill
                            className="object-contain opacity-90"
                            priority
                        />

                        {/* Locations */}
                        {locations.map((loc, index) => (
                            <motion.div
                                key={loc.id}
                                className="absolute flex flex-col items-center gap-1"
                                style={{
                                    top: loc.top,
                                    left: loc.left,
                                    transform: "translate(-50%, -50%)",
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                }}
                            >
                                <div className="relative">
                                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#FC7E13]" />
                                    <div className="absolute inset-0 animate-ping rounded-full bg-[#FC7E13] opacity-75" />
                                </div>

                                <span className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">
                                    {loc.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Text */}
                    <motion.div
                        className="absolute bottom-0 left-4 max-w-lg md:bottom-10 md:left-10 lg:bottom-20 lg:left-20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="flex border-l-4 border-[#FC7E13] pl-4 md:pl-6">
                            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                                We partner with clients globally, ensuring continuity across time zones.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TimesZone;
