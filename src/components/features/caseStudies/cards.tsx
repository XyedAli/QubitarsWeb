"use client";

import Image from "next/image";

const caseStudies = [
  {
    image: "/assets/images/case/cashflow.jpg",
    logo: "/assets/images/logos/cashflow.svg",
    tag: "Real Estate",
    title: "The #1 AI Platform for Streamlining Slow Flip and Rental Properties.",
    desc:
      "Cashflow Innovator provides an AI-driven platform that simplifies slow-flip and rental property investments for diverse stakeholders."
  },
  {
    image: "/assets/images/case/charta.jpg",
    logo: "/assets/images/logos/charta.svg",
    tag: "Startup",
    title: "AI-Human Solution Creation Platform. Build Your Network, Share Your Value",
    desc:
      "Charta is a premium mobility service reshaping transportation in Africa, operating in Lagos, Abuja, Accra, and Lomé."
  },
  {
    image: "/assets/images/case/solve.jpg",
    logo: "/assets/images/logos/solve.svg",
    tag: "Healthcare",
    title: "The greatest investment you can make is in yourself.",
    desc:
      "SolveMyAllergies blends AI, mindfulness, and user-centric design to help individuals heal respiratory allergies."
  },
  {
    image: "/assets/images/case/africa.jpg",
    logo: "/assets/images/logos/africa.svg",
    tag: "Healthcare",
    title: "Technology-Driven Healthcare for Africa",
    desc:
      "Africa Health Initiative delivers accessible healthcare solutions using modern digital infrastructure."
  }
];

const CaseCard = ({ image, logo, tag, title, desc }: any) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">

      {/* Image */}
      <div className="relative w-full h-[260px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Image src={logo} alt="" width={22} height={22} />
          <span className="text-xs px-2 py-0.5 rounded-full border border-slate-200 text-slate-600">
            {tag}
          </span>
        </div>

        <h3 className="text-base font-semibold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default function CaseStudiesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

      {/* Section Heading */}
      <div className="mb-16">
        <span className="text-sm font-semibold text-orange-500 uppercase">
          Case Studies
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Real Products. Real Impact.
        </h2>
      </div>

      {/* Staggered Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">

        {/* Left Column */}
        <div className="space-y-20">
          <CaseCard {...caseStudies[0]} />
          <CaseCard {...caseStudies[2]} />
        </div>

        {/* Right Column (Offset like Figma) */}
        <div className="space-y-20 md:pt-24">
          <CaseCard {...caseStudies[1]} />
          <CaseCard {...caseStudies[3]} />
        </div>

      </div>
    </section>
  );
}
