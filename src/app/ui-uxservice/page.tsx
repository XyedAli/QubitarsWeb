import { Fragment } from "react/jsx-runtime"
import { FeaturesSection, HeroSection, OurServices, SalesforceProcess, TechnicalResource, FAQ , Measureables} from "@/components/features/services/UIUXService"
import Banner3 from "@/components/layout/banners/banner3"
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";

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
            <Banner3 />
            {/* <FeaturesSection /> */}
            <TechnicalResource />
            <SalesforceProcess />
            <Measureables />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQ />
        </Fragment>
    )
}
export default UIUXService