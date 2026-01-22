import { Hero, BusinessTypes, Services, OurClient, DigitalServices, TriScroll, RealEstatePartner, OurTechStack, IndustriesCards } from "@/components/features/home";
import { DualRowSlider } from "@/components/shared/ui";
import { industriesImages } from "@/lib/assets/images";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { styles } from "@/styles/style";
import Banner1 from "@/components/layout/banners/banner1";
import Banner2 from "@/components/layout/banners/banner2";
import Banner3 from "@/components/layout/banners/banner3";
import Banner4 from "@/components/layout/banners/banner4";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  const logoEntries = Object.entries(industriesImages)
    .filter(([key]) => key.startsWith("clogo"))
    .map(([key, src], index) => ({
      src,
      alt: `Client Logo ${index + 1}`,
      width: 120,
      height: 60,
    }));

  const firstRowItems = logoEntries.slice(0, 9);
  const secondRowItems = logoEntries.slice(9);

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
          <DualRowSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems} /> 
        </div>
      </div>
      <BusinessTypes />
      <Services />
      <RealEstatePartner />
      <IndustriesCards />
      <DigitalServices />
      {/* <Banner1 /> */}
      {/* <Banner2 /> */}
      {/* <Banner3 /> */}
      <Banner4 />
      <TriScroll />
      <OurTechStack />
      <OurClient testimonials={testimonialsWithImages} />
    </>
  );
}
