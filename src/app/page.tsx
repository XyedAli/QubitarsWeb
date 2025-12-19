import { Hero, BusinessTypes, Services } from "@/components/features/home";
import SliderComponent from "@/components/shared/ui/slider/slider2";
import { Awards, Footer } from "@/components/layout";
import { industriesImages } from "@/lib/assets/images";

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
        <div className="mx-4 lg:mx-7 xl:mx-12">
          <SliderComponent firstRowItems={firstRowItems} secondRowItems={secondRowItems} />
        </div>
      </div>
      <BusinessTypes />
      <Services />
      <Awards />
      <Footer />
    </>
  );
}
