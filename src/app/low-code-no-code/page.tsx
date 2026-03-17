import { Fragment } from "react/jsx-runtime";
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { lowCodeDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { lowCodeDevelopmentServices } from "@/data/digital-transformation/services";
import { lowCodeData } from "@/data/digital-transformation/hero";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("low-code-no-code");

const LowCodeDevelopment = () => {
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
            <HeroSection data={lowCodeData} />
            <OurServices services={lowCodeDevelopmentServices} />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={lowCodeDevelopmentProcessSteps} title="Our Low Code/No Code Development Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}

export default LowCodeDevelopment;