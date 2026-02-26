import { Fragment } from "react/jsx-runtime"
import { HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ, Measureables, ChooseQubitars } from "@/components/features/services/digital-Transformation"
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { saasDevelopmentProcessSteps } from "@/data/digital-transformation/process";
import { saasDevelopmentServices } from "@/data/digital-transformation/services";
import { saasData } from "@/data/digital-transformation/hero";

const SAASDevelopment = () => {
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
            <HeroSection data={saasData} />
            <OurServices services={saasDevelopmentServices} />
            <ChooseQubitars />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess steps={saasDevelopmentProcessSteps} title="Our SAAS Development Process" />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}

export default SAASDevelopment;