import { Hero, BusinessTypes, Services } from "@/components/features/home";
import { DualRowSlider } from "@/components/shared/ui";
import { industriesImages } from "@/lib/assets/images";
import OurClient from "@/components/features/home/ourClient";
import { testimonialsData } from "@/data/home";
import DigitalServices from "@/components/features/home/digitalServices";
import { styles } from "@/styles/style";
import Banner1 from "@/components/layout/banners/banner1";
import Banner2 from "@/components/layout/banners/banner2";
import Banner3 from "@/components/layout/banners/banner3";
import TriScroll from "@/components/features/home/triScroll";

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
      <DigitalServices />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <TriScroll />
      <OurClient testimonials={testimonialsData} />
    </>
  );
}
