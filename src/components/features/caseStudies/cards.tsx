"use client";

import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";
import { MoveUpRight } from "lucide-react";
import { caseStudies } from "@/data";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";

interface CaseCardProps {
  image: string;
  logo: string;
  tag: string;
  title: string;
  desc: string;
  reversed?: boolean;
}

const CaseCard = ({ image, logo, tag, title, desc, reversed = false }: CaseCardProps) => {
  return (
    <article className="group bg-white overflow-hidden">
      <div className={`grid grid-cols-1 ${reversed ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-[1fr_1fr]"} ${reversed ? "md:grid-flow-col-dense" : ""} gap-6 md:gap-8 lg:gap-15 xl:gap-22`}>
        {/* Content Section */}
        <div className={`flex-1 flex flex-col justify-center ${reversed ? "md:col-start-2" : "md:col-start-1"}`}>
          {/* Logo */}
          <div className="mb-4 lg:mb-6">
            <div className="relative h-8 lg:h-10 xl:h-12 w-auto">
              <Image 
                src={logo} 
                alt={`${title} logo`} 
                width={180} 
                height={64} 
                className="object-contain h-full w-auto"
                unoptimized={logo.includes("cloudinary.com")}
              />
            </div>
          </div>
          {/* Title */}
          <h3 className={`${styles.h4} font-bold text-blue leading-tight mb-4 lg:mb-6`}>
            {title}
          </h3>

          {/* Description */}
          <p className={`${styles.p2} text-gray-600 leading-relaxed mb-7 lg:mb-8`}>
            {desc}
          </p>

          {/* CTA Button */}
          <div>
            <Button variant="accent" size="lg" className="group/btn">
              <Link href="#" className="flex items-center gap-2">
              {tag}
                <MoveUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className={`relative w-full h-[280px] md:h-[360px] lg:h-[395px] xl:h-[420px] overflow-hidden bg-gray-50 ${reversed ? "md:col-start-1 md:row-start-1" : "md:col-start-2"}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </div>
    </article>
  );
};

export default function CaseStudiesSection() {
  const industryIcons = getIndustryCloudinaryIcons();
  const studiesWithLogo = caseStudies.map((study) => ({
    ...study,
    logo: industryIcons[study.logoKey] ?? "",
  }));

  return (
    <section className={`${styles.sectionPadding} pb-12 md:pb-16 lg:pb-20`}>
      {/* Section Heading */}
      <SectionHeading
          subtitle="Case Studies"
          title="Real Products. Real Impact."
        />
      <div className="xl:mx-22">
      {/* Case Studies - Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:gap-12 xl:gap-16">
        {studiesWithLogo.map((study, index) => (
          <CaseCard 
            key={study.id} 
            {...study} 
            reversed={index % 2 !== 0} 
          />
        ))}
      </div>
      </div>
    </section>
  );
}
