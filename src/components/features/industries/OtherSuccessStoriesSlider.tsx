"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { CustomSlider } from "@/components/shared/ui";
import { caseStudies } from "@/data/caseStudies";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";
import type { CaseStudy } from "@/data/caseStudies";
import type Slider from "react-slick";
import { SectionHeading } from "@/components/shared/headings";
interface SuccessStoryCardProps {
  image: string;
  logo: string;
  tag: string;
  title: string;
  desc: string;
}

function SuccessStoryCard({ image, logo, tag, title }: SuccessStoryCardProps) {
  return (
    <Link
      href="/case-studies"
      className="group block h-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <article className="relative w-full h-full min-h-[320px] md:min-h-[360px] lg:min-h-[380px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 lg:p-6">
          {/* Top: pill tag */}
          <div className="flex justify-end">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold bg-white/95 text-blue backdrop-blur-sm">
              {tag}
            </span>
          </div>
          {/* Middle: title */}
          <div className="flex-1 flex items-end">
            <h3
              className={`${styles.h5} font-semibold text-white leading-tight font-outfit`}
            >
              {title}
            </h3>
          </div>
          {/* Bottom: logo + CTA */}
          <div className="flex items-end justify-between gap-3 mt-3 border-t border-white/50 pt-3">
            <div className="relative h-7 md:h-8 w-auto min-w-0 flex-shrink-0">
              <Image
                src={logo}
                alt=""
                width={120}
                height={36}
                className="object-contain object-left h-full w-auto max-w-[100px] md:max-w-[120px] opacity-95"
                unoptimized={logo.includes("cloudinary.com")}
              />
            </div>
            <span
              className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white/90 flex items-center justify-center text-white/90 group-hover:bg-white group-hover:text-blue transition-colors duration-300"
              aria-hidden
            >
              <MoveUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function OtherSuccessStoriesSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const industryIcons = getIndustryCloudinaryIcons();
  const studiesWithLogo: (CaseStudy & { logo: string })[] = caseStudies.map(
    (study) => ({
      ...study,
      logo: industryIcons[study.logoKey] ?? "",
    })
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section
      className={`pb-8 md:pb-12 lg:pb-20 bg-white`}
    >
      <div className={`${styles.sectionPadding}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <SectionHeading
            subtitle="Success Highlights"
            title="Real Products. Real Impact."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-blue flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors shrink-0"
              aria-label="Previous stories"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
            </button>
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-blue flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors shrink-0"
              aria-label="Next stories"
            >
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
            </button>
          </div>
        </div>

        <div className="other-success-stories-slider min-h-[360px] md:min-h-[400px]">
          <CustomSlider
            settings={sliderSettings}
            onSliderReady={(ref) => {
              sliderRef.current = ref?.current ?? null;
            }}
            className="other-success-stories-slider__inner"
          >
            {studiesWithLogo.map((study) => (
              <div key={study.id} className="h-full px-3">
                <SuccessStoryCard
                  image={study.image}
                  logo={study.logo}
                  tag={study.tag}
                  title={study.title}
                  desc={study.desc}
                />
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  );
}
