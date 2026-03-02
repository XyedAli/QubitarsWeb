import { Hero, BusinessTypes, Services, OurClient, DigitalServices, TriScroll, RealEstatePartner, OurTechStack, IndustriesCards } from "@/components/features/home";
import { IndustryLogosSlider } from "@/components/shared/ui";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { styles } from "@/styles/style";
import Banner4 from "@/components/layout/banners/banner4";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;
export default function Home() {
  // Merge testimonials data with images
  const testimonialsWithImages = testimonialsData.map((testimonial) => {
    const images = testimonialImagesById[testimonial.id];
    return {
      ...testimonial,
      ...images,
    };
  });

  return (
    <>
      <Hero />
      <div className="py-8 bg-white">
        <div className={styles.sectionPadding}>
          <IndustryLogosSlider />
        </div>
      </div>
      <BusinessTypes />
      <Services />
      <RealEstatePartner />
      <DigitalServices />
      <Banner4 />
      <TriScroll />
      <OurTechStack />
      <div className={styles.sectionPaddingY}>
        <OurClient testimonials={testimonialsWithImages} />
      </div>
    </>
  );
}
