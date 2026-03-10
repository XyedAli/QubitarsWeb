import {AdvantagesSection, HeroSection, BenefitsSection, Models4Team, OperationalProcess, FlexibleScaling, ProductDelivery, DedicatedTeam,  FAQs } from "@/components/features/services/staff-Augmentation"
import { Fragment } from "react/jsx-runtime";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
const StaffAugmentation = () => {
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
            <AdvantagesSection />
            <BenefitsSection />
            <Models4Team />
            <OperationalProcess />
            <FlexibleScaling />
            <ProductDelivery />
            <DedicatedTeam />
             <OurClient testimonials={testimonialsWithImages} />
            <FAQs />
        </Fragment>
    )
}
export default StaffAugmentation 