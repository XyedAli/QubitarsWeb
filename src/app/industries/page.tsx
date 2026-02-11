import { Fragment } from "react";
import {
  IndustriesHero,
  IndustriesAbout,
  GrowthBarrier,
  BusinessExcellence,
  Solutions,
  OutcomeFocused,
  OtherSuccessStoriesSlider,
  ChooseQubitars,
  FAQs,
} from "@/components/features/industries";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";

export const metadata = {
  title: "Real Estate | Qubitars Technologies",
  description:
    "PropTech and real estate software solutions. Streamlined transactions, seamless experiences for buyers, investors, and tenants.",
};

export default function RealStatePage() {
  const testimonialsWithImages = testimonialsData.map((testimonial) => {
    const images = testimonialImagesById[testimonial.id];
    return { ...testimonial, ...images };
  });

  return (
    <Fragment>
      <IndustriesHero />
      <IndustriesAbout />
      <GrowthBarrier />
      <Solutions />
      <BusinessExcellence />
      <OutcomeFocused />
      <OtherSuccessStoriesSlider />
      <ChooseQubitars />
      <OurClient testimonials={testimonialsWithImages} />
      <FAQs />
    </Fragment>
  );
}
