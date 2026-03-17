import { Fragment } from "react/jsx-runtime";
import { DeliverFlow, Services, Hero, Benefits, RelationWithOthers, ChooseQubitars, DevopsEfficiency, OurApproaches, FAQs } from "@/components/features/services/devops";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("devops");

const Devops = () => {
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
            <Hero />
            <Services />
            <ChooseQubitars />
            <OurApproaches />
            <Benefits />
            <DevopsEfficiency />
            <DeliverFlow />
            <RelationWithOthers />
            <OurClient testimonials={testimonialsWithImages} />
            <FAQs />
        </Fragment>
    )
}
export default Devops