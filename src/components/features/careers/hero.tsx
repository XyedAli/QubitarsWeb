"use client";

import HeroSection from "@/components/shared/heroSection";

export default function CareersHero() {
    return (
        <HeroSection
            variant="blog"
            title={
                <>
                    Where Passion Meets {" "}
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
                        Opportunity
                    </span>
                </>
            }
            descriptions={[
                "Turn your curiosity into expertise and your skills into real-world impact.",
            ]}
            backgroundType="image"
            backgroundImage="https://res.cloudinary.com/drugkop7t/image/upload/v1769435309/modelbg_ipley9.webp"
            overlayTag="ENGAGEMENT MODEL"
            overlayTitle="Empowering Talent. Building the Future."
            overlayDescription="Join a team where innovation, collaboration, and growth are part of everyday life."
            buttonText="View Opportunities"
        />
    );
}
