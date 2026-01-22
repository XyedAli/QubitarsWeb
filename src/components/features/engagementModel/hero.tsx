"use client";

import HeroSection from "@/components/shared/heroSection";

export default function EngModalHero() {
    return (
        <HeroSection
            variant="blog"
            title={
                <>
                    Tailored Engagement, Maximum{" "}
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
                        Value
                    </span>
                </>
            }
            descriptions={[
                "Start lean, scale confidently, and adjust seamlessly.",
            ]}
            backgroundType="image"
            backgroundImage="/assets/images/engModel/modelbg1.png"
            overlayTag="ENGAGEMENT MODEL"
            overlayTitle="Engage Smarter, Build Faster"
            overlayDescription="Choose an engagement structure that fits your business today, while leaving room for where you’re headed next."
            buttonText="Book a Consultation - it's free"
        />
    );
}
