import { Fragment } from "react/jsx-runtime";
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { webDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { webDevelopmentServices } from "@/data/digital-transformation/services";
import { heroData } from "@/data/digital-transformation/hero";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("web-development");

const WebDevelopment = () => {
    // Merge testimonials data with images
    const testimonialsWithImages = testimonialsData.map((testimonial) => {
        const images = testimonialImagesById[testimonial.id];
        return {
            ...testimonial,
            ...images,
        };
    });
    return (
        <Fragment>
            <HeroSection data={heroData} />
            <OurServices services={webDevelopmentServices} />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={webDevelopmentProcessSteps} title="Our Web Development Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}

export default WebDevelopment;