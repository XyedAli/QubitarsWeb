import { Fragment } from "react";
import { HeroSection, ProductRoadmap, MvpDelivery, ChooseQubitars, Banner, Slider, FAQs } from "@/components/features/services/product-Design";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
const ProductDesign = () => {
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
            <Slider />
            <MvpDelivery />
            <ProductRoadmap />
            <ChooseQubitars />
            {/* <Banner /> */}
             <OurClient testimonials={testimonialsWithImages} />
            <FAQs />
        </Fragment>
    )
}
export default ProductDesign