import { Fragment } from "react/jsx-runtime";
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { mvpDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { mvpData } from "@/data/digital-transformation/hero";
import { mvpDevelopmentServices } from "@/data/digital-transformation/services";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("mvp-development");

const MVPDevelopment = () => {
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
            <HeroSection data={mvpData} />
            <OurServices services={mvpDevelopmentServices} />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={mvpDevelopmentProcessSteps} title="Our MVP Development Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}

export default MVPDevelopment;