"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { locations } from "@/data";

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
