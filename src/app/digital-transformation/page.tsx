import { Fragment } from "react/jsx-runtime"
import { FeaturesSection, HeroSection, OurStrategy, SalesforceProcess, StackingCards, TechnicalResource, FAQ } from "@/components/features/services/digitalTransformation"
import Banner3 from "@/components/layout/banners/banner3"
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";

const DigitalTransformation = () => {
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
            <OurStrategy />
            {/* <StackingCards /> */}
            <Banner3 />
            <FeaturesSection />
            <TechnicalResource />
            <SalesforceProcess />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}
export default DigitalTransformation