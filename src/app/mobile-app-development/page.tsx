import { Fragment } from "react/jsx-runtime";
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { mobileDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { mobileDevelopmentServices } from "@/data/digital-transformation/services";
import { mobileAppData } from "@/data/digital-transformation/hero";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("mobile-app-development");

const MobileAppDevelopment = () => {
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
            <HeroSection data={mobileAppData} />
            <OurServices services={mobileDevelopmentServices} />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={mobileDevelopmentProcessSteps} title="Our Mobile App Development Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}

export default MobileAppDevelopment;