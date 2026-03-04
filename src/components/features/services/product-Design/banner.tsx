"use client";

import { useEffect, useRef, useState } from "react";

const StickyBanner = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const [isFixed, setIsFixed] = useState(false);
    const [scrollStep, setScrollStep] = useState(0);
    const [sectionHeight, setSectionHeight] = useState<number>(0);
    const [activeText, setActiveText] = useState(0);
    const isScrollingRef = useRef(false);

    const texts = [
        "Unclear roadmaps waste resources",
        "Strategy brings clarity",
        "Execution drives results",
    ];

    /* Detect section visibility */
    useEffect(() => {
        const updateHeight = () => {
            if (sectionRef.current) {
                setSectionHeight(sectionRef.current.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth >= 768) {
                    if (entry.isIntersecting) {
                        updateHeight();
                        setIsFixed(true);
                        setScrollStep(1);
                    } else {
                        setIsFixed(false);
                        setScrollStep(0);
                    }
                }
            },
            { threshold: 0.6 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            window.removeEventListener("resize", updateHeight);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    /* Wheel step control */
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!isFixed || !sectionRef.current) return;

            e.preventDefault();
            if (isScrollingRef.current) return;

            isScrollingRef.current = true;
            setTimeout(() => (isScrollingRef.current = false), 600);

            if (e.deltaY > 0) {
                if (activeText < texts.length - 1) {
                    setActiveText((prev) => prev + 1);
                } else {
                    setIsFixed(false);
                }
            } else {
                if (activeText > 0) {
                    setActiveText((prev) => prev - 1);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isFixed, activeText]);

    return (
        <>
            {isFixed && <div style={{ height: `${sectionHeight}px` }} />}

            <section
                ref={sectionRef}
                className={`relative bg-black text-white transition-all duration-700 ${isFixed
                    ? "md:fixed md:top-0 md:left-0 md:right-0 md:h-[70vh] md:z-50"
                    : "h-[70vh]"

                    }`}
            >
                {/* Background Video */}
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/bannerbg.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative flex items-end max-h-[70vh] px-20">
                    {/* LEFT BAR */}
                    <div className="h-60 w-[4px] bg-white/30 mr-16 relative">
                        <div
                            className="absolute left-0 w-full bg-white transition-all duration-500"
                            style={{
                                height:
                                    activeText === 0
                                        ? "33%"
                                        : activeText === 1
                                            ? "66%"
                                            : "100%",
                            }}
                        />
                    </div>

                    {/* TEXT */}
                    <h2 className="text-5xl font-semibold transition-all duration-500">
                        {texts[activeText]}
                    </h2>
                </div>
            </section>
        </>
    );
};

export default StickyBanner;