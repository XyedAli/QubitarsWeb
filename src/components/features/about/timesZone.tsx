"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Location {
    id: number;
    name: string;
    top: string;
    left: string;
    color: string;
    topSm?: string;
    leftSm?: string;
    topMd?: string;
    leftMd?: string;
    topLg?: string;
    leftLg?: string;
    topXl?: string;
    leftXl?: string;
    topXxl?: string;
    leftXxl?: string;
}

// Positions optimized with minimum 8-10% spacing between locations at each breakpoint
const locations: Location[] = [
    // Mobile → Small (640px+) → Medium (768px+) → Large (1024px+) → XL (1150px+) → XXL (1536px+)
    { 
        id: 1, 
        name: "Edmonton, Canada", 
        top: "22%", left: "4%", 
        color: "#FC7E13", 
        topSm: "20%", leftSm: "1%", 
        topMd: "10%", leftMd: "10%", 
        topLg: "16%", leftLg: "15%",
        topXl: "12%", leftXl: "6%",
        topXxl: "12%", leftXxl: "13%" 
    },
    { 
        id: 2, 
        name: "Chicago, USA", 
        top: "18%", left: "26%", 
        color: "#3B82F6", 
        topSm: "16%", leftSm: "27%", 
        topMd: "3%", leftMd: "20%", 
        topLg: "12%", leftLg: "29%",
        topXl: "6%", leftXl: "20%",
        topXxl: "8%", leftXxl: "20%" 
    },
    { 
        id: 3, 
        name: "San Francisco, USA", 
        top: "40%", left: "8%", 
        color: "#10B981", 
        topSm: "41%", leftSm: "9%", 
        topMd: "42%", leftMd: "9%", 
        topLg: "39%", leftLg: "8%",
        topXl: "35%", leftXl: "7%",
        topXxl: "35%", leftXxl: "6%" 
    },
    { 
        id: 4, 
        name: "New York City, USA", 
        top: "24%", left: "29%", 
        color: "#EF4444", 
        topSm: "23%", leftSm: "30%", 
        topMd: "18%", leftMd: "28%", 
        topLg: "21%", leftLg: "28%",
        topXl: "10%", leftXl: "33%",
        topXxl: "16%", leftXxl: "36%" 
    },
    { 
        id: 5, 
        name: "Logan, USA", 
        top: "38%", left: "26%", 
        color: "#8B5CF6", 
        topSm: "39%", leftSm: "27%", 
        topMd: "50%", leftMd: "27%", 
        topLg: "40%", leftLg: "24%",
        topXl: "39%", leftXl: "23%",
        topXxl: "42%", leftXxl: "18%" 
    },
    { 
        id: 6, 
        name: "Miami, USA", 
        top: "52%", left: "17%", 
        color: "#F59E0B", 
        topSm: "53%", leftSm: "18%", 
        topMd: "54%", leftMd: "18%", 
        topLg: "52%", leftLg: "17%",
        topXl: "50%", leftXl: "15%",
        topXxl: "49%", leftXxl: "13%" 
    },
    { 
        id: 7, 
        name: "Virginia, USA", 
        top: "32%", left: "27%", 
        color: "#EC4899", 
        topSm: "33%", leftSm: "28%", 
        topMd: "33%", leftMd: "29%", 
        topLg: "33%", leftLg: "26%",
        topXl: "28%", leftXl: "31%",
        topXxl: "29%", leftXxl: "35%" 
    },
    { 
        id: 8, 
        name: "Maryland, USA", 
        top: "28%", left: "22%", 
        color: "#06B6D4", 
        topSm: "28%", leftSm: "23%", 
        topMd: "27%", leftMd: "18%", 
        topLg: "27%", leftLg: "21%",
        topXl: "21%", leftXl: "18%",
        topXxl: "22%", leftXxl: "26%" 
    },
    { 
        id: 9, 
        name: "North Carolina, USA", 
        top: "36%", left: "32%", 
        color: "#84CC16", 
        topSm: "37%", leftSm: "33%", 
        topMd: "38%", leftMd: "34%", 
        topLg: "38%", leftLg: "31%",
        topXl: "40%", leftXl: "37%",
        topXxl: "35%", leftXxl: "40%" 
    },
    { 
        id: 10, 
        name: "Tallinn, Estonia", 
        top: "18%", left: "49%", 
        color: "#6366F1", 
        topSm: "19%", leftSm: "50%", 
        topMd: "19%", leftMd: "51%", 
        topLg: "18%", leftLg: "50%",
        topXl: "17%", leftXl: "49%",
        topXxl: "16%", leftXxl: "48%" 
    },
    { 
        id: 11, 
        name: "Utrecht, Netherlands", 
        top: "28%", left: "47%", 
        color: "#F97316", 
        topSm: "29%", leftSm: "48%", 
        topMd: "30%", leftMd: "60%", 
        topLg: "31%", leftLg: "48%",
        topXl: "30%", leftXl: "47%",
        topXxl: "29%", leftXxl: "48%" 
    },
    { 
        id: 12, 
        name: "Lagos, Nigeria", 
        top: "55%", left: "49%", 
        color: "#14B8A6", 
        topSm: "56%", leftSm: "50%", 
        topMd: "57%", leftMd: "50%", 
        topLg: "56%", leftLg: "49%",
        topXl: "55%", leftXl: "48%",
        topXxl: "54%", leftXxl: "47%" 
    },
    { 
        id: 13, 
        name: "Kampala, Uganda", 
        top: "60%", left: "54%", 
        color: "#A855F7", 
        topSm: "61%", leftSm: "55%", 
        topMd: "62%", leftMd: "56%", 
        topLg: "61%", leftLg: "56%",
        topXl: "60%", leftXl: "55%",
        topXxl: "59%", leftXxl: "54%" 
    },
    { 
        id: 14, 
        name: "Seoul, Korea", 
        top: "38%", left: "77%", 
        color: "#DC2626", 
        topSm: "39%", leftSm: "78%", 
        topMd: "40%", leftMd: "79%", 
        topLg: "39%", leftLg: "79%",
        topXl: "38%", leftXl: "78%",
        topXxl: "37%", leftXxl: "77%" 
    },
];

const TimesZone = () => {
    // Generate responsive CSS with proper breakpoints
    const generateResponsiveCSS = () => {
        const cssRules: string[] = [];
        
        locations.forEach((loc) => {
            const selector = `.loc-${loc.id}`;
            
            // Base (mobile)
            cssRules.push(`${selector} { --top: ${loc.top}; --left: ${loc.left}; }`);
            
            // Small screens (640px+)
            if (loc.topSm || loc.leftSm) {
                cssRules.push(`@media (min-width: 640px) { ${selector} { --top: ${loc.topSm || loc.top}; --left: ${loc.leftSm || loc.left}; } }`);
            }
            
            // Medium screens (768px+)
            if (loc.topMd || loc.leftMd) {
                cssRules.push(`@media (min-width: 768px) { ${selector} { --top: ${loc.topMd || loc.topSm || loc.top}; --left: ${loc.leftMd || loc.leftSm || loc.left}; } }`);
            }
            
            // Large screens (1500px+)
            if (loc.topLg || loc.leftLg) {
                cssRules.push(`@media (min-width: 1500px) { ${selector} { --top: ${loc.topLg || loc.topMd || loc.topSm || loc.top}; --left: ${loc.leftLg || loc.leftMd || loc.leftSm || loc.left}; } }`);
            }
            
            // Extra Large screens (1150px+)
            if (loc.topXl || loc.leftXl) {
                cssRules.push(`@media (min-width: 1150px) { ${selector} { --top: ${loc.topXl || loc.topLg || loc.topMd || loc.topSm || loc.top}; --left: ${loc.leftXl || loc.leftLg || loc.leftMd || loc.leftSm || loc.left}; } }`);
            }
            
            // 2XL screens (1536px+)
            if (loc.topXxl || loc.leftXxl) {
                cssRules.push(`@media (min-width: 1536px) { ${selector} { --top: ${loc.topXxl || loc.topXl || loc.topLg || loc.topMd || loc.topSm || loc.top}; --left: ${loc.leftXxl || loc.leftXl || loc.leftLg || loc.leftMd || loc.leftSm || loc.left}; } }`);
            }
        });
        
        cssRules.push('.map-marker { top: var(--top); left: var(--left); }');
        cssRules.push('@media (max-width: 1199px) { .map-icon { width: 1rem; height: 1.25rem !important; } .map-icon-ping { width: 1rem; height: 1.25rem !important; } .map-text { font-size: 0.625rem !important; padding: 0.125rem 0.375rem !important; } }');
        return cssRules.join('\n');
    };

    return (
        <section className="relative w-full overflow-hidden bg-white">
            <style dangerouslySetInnerHTML={{ __html: generateResponsiveCSS() }} />
            
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
                                className={`absolute flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5 map-marker loc-${loc.id}`}
                                style={{
                                    transform: "translate(-50%, -100%)",
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
                                    <svg
                                        width="24"
                                        height="32"
                                        viewBox="0 0 24 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-8 sm:w-7 sm:h-9 drop-shadow-lg map-icon"
                                    >
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12C0 19.5 12 32 12 32C12 32 24 19.5 24 12C24 5.373 18.627 0 12 0Z"
                                            fill={loc.color}
                                        />
                                        <circle cx="12" cy="12" r="5" fill="white" />
                                    </svg>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-ping pointer-events-none">
                                        <svg
                                            width="24"
                                            height="32"
                                            viewBox="0 0 24 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-8 sm:w-7 sm:h-9 opacity-40 map-icon-ping"
                                        >
                                            <path
                                                d="M12 0C5.373 0 0 5.373 0 12C0 19.5 12 32 12 32C12 32 24 19.5 24 12C24 5.373 18.627 0 12 0Z"
                                                fill={loc.color}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <span className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded shadow-sm map-text">
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
