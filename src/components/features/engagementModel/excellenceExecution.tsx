"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type Slider from "react-slick";
import { styles } from "@/styles/style";
import { CustomSlider } from "@/components/shared/ui";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { executionExcellenceSection } from "@/data/engModel";
import { SectionHeading } from "@/components/shared/headings";

const RESPONSIVE = [
  { breakpoint: 1280, settings: { slidesToShow: 4 } },
  { breakpoint: 1024, settings: { slidesToShow: 3 } },
  { breakpoint: 768, settings: { slidesToShow: 3 } },
  { breakpoint: 480, settings: { slidesToShow: 2 } },
];

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: RESPONSIVE,
};

const BTN_CLASS = "w-8 xl:w-10 h-8 xl:h-10 rounded-full border-2 border-[#1E274F] flex items-center justify-center text-[#1E274F] hover:bg-[#1E274F] hover:text-white transition-colors shrink-0";

const ExcellenceExecution = () => {
  const sliderRef = useRef<Slider | null>(null);
  const images = getEngagementModelCloudinaryImages();
  const cards = executionExcellenceSection.cards.map((card) => ({
    ...card,
    image: (images as Record<string, string>)[card.imageKey],
  }));

  return (
    <section className={`${styles.sectionPadding} pt-12 md:pt-14 lg:pt-17 xl:pt-18 bg-white`}>
      <SectionHeading subtitle="Execution Excellence" title="Professional Transparency Proven Execution" />
      <div className="relative">
        <CustomSlider
          settings={SLIDER_SETTINGS}
          showArrows={false}
          onSliderReady={(ref) => { sliderRef.current = ref.current; }}
          className="execution-excellence-slider"
        >
          {cards.map((card) => (
            <div key={card.number} className="h-full">
              <div className="relative rounded-xl overflow-hidden group min-h-[320px] md:min-h-[340px] lg:min-h-[380px] xl:min-h-[430px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                <div className="absolute inset-0 bg-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 rounded-2xl" aria-hidden />
                <div className="absolute inset-0 flex flex-col justify-start p-3 md:p-4 lg:p-5 xl:p-6">
                  <span className={`text-white/90 ${styles.h4} font-bold font-outfit leading-none mb-2`}>{card.number}</span>
                  <h3 className="text-white mt-0 xl:mt-2 font-bold text-[15px] md:text-[17px] lg:text-xl xl:text-2xl font-outfit leading-tight mb-2">{card.title}</h3>
                  <p className={`${styles.p2} mt-2 text-white/95 font-inter leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[1200ms] ease-out`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CustomSlider>
        <div className="flex justify-end gap-3 mt-4 lg:mt-6 xl:mt-8">
          <button type="button" onClick={() => sliderRef.current?.slickPrev()} className={BTN_CLASS} aria-label="Previous slide">
            <ArrowLeft className="w-4 lg:w-5 h-4 lg:h-5" />
          </button>
          <button type="button" onClick={() => sliderRef.current?.slickNext()} className={BTN_CLASS} aria-label="Next slide">
            <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceExecution;
