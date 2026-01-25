"use client";

import HeroSection from "@/components/shared/heroSection";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";

export default function EngModalHero() {
    // Get Cloudinary engagement model images
    const engagementModelImages = getEngagementModelCloudinaryImages();

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
            backgroundImage={engagementModelImages.modelBg}
            overlayTag="ENGAGEMENT MODEL"
            overlayTitle="Engage Smarter, Build Faster"
            overlayDescription="Choose an engagement structure that fits your business today, while leaving room for where you’re headed next."
            buttonText="Book a Consultation - it's free"
        />
    );
}
