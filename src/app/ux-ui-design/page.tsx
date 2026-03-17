import { Fragment } from "react/jsx-runtime";
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { webDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("ux-ui-design");

const UIUXService = () => {
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
            <HeroSection />
            <OurServices />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={webDevelopmentProcessSteps} title="Our UI/UX Design Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}
export default UIUXService