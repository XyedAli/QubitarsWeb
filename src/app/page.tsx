import { Hero, BusinessTypes, Services, OurClient, DigitalServices, TriScroll, RealEstatePartner, OurTechStack, IndustriesCards } from "@/components/features/home";
import { DualRowSlider } from "@/components/shared/ui";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { styles } from "@/styles/style";
import Banner1 from "@/components/layout/banners/banner1";
import Banner2 from "@/components/layout/banners/banner2";
import Banner3 from "@/components/layout/banners/banner3";
import Banner4 from "@/components/layout/banners/banner4";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  const industryIcons = getIndustryCloudinaryIcons();
  
  // Ensure all logos are included in correct order (clogo6 is included)
  const logoKeys = ['clogo1', 'clogo2', 'clogo3', 'clogo4', 'clogo5', 'clogo6', 'clogo7', 'clogo8', 'clogo9', 'clogo10', 'clogo11', 'clogo12', 'clogo13', 'clogo14', 'clogo15', 'clogo16', 'clogo17', 'clogo18'] as const;
  
  const logoEntries = logoKeys
    .filter((key): key is keyof typeof industryIcons => key in industryIcons)
    .map((key, index) => ({
      src: industryIcons[key],
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
