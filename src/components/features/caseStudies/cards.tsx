"use client";

import Image from "next/image";

const caseStudies = [
  {
    image: "/assets/images/CaseStudies/csimage1.svg",
    logo: "/assets/images/Industries/clogo1.svg",
    tag: "Real Estate",
    title: "The #1 AI Platform for Streamlining Slow Flip and Rental Properties.",
    desc:
      "Cashflow Innovator provides an AI-driven platform that simplifies slow-flip and rental property investments for diverse stakeholders."
  },
  {
    image: "/assets/images/CaseStudies/csimage2.svg",
    logo: "/assets/images/Industries/clogo2.svg",
    tag: "Startup",
    title: "AI-Human Solution Creation Platform. Build Your Network, Share Your Value",
    desc:
      "Charta is a premium mobility service reshaping transportation in Africa, operating in Lagos, Abuja, Accra, and Lomé."
  },
  {
    image: "/assets/images/CaseStudies/csimage3.svg",
    logo: "/assets/images/Industries/clogo5.svg",
    tag: "Healthcare",
    title: "The greatest investment you can make is in yourself.",
    desc:
      "SolveMyAllergies blends AI, mindfulness, and user-centric design to help individuals heal respiratory allergies."
  },
  {
    image: "/assets/images/CaseStudies/csimage4.svg",
    logo: "/assets/images/Industries/clogo12.svg",
    tag: "Healthcare",
    title: "Technology-Driven Healthcare for Africa",
    desc:
      "Africa Health Initiative delivers accessible healthcare solutions using modern digital infrastructure."
  },
  {
    image: "/assets/images/CaseStudies/csimage5.svg",
    logo: "/assets/images/Industries/clogo17.svg",
    tag: "Healthcare",
    title: "Technology-Driven Healthcare for Africa",
    desc:
      "Africa Health Initiative delivers accessible healthcare solutions using modern digital infrastructure."
  }
];

const CaseCard = ({ image, logo, tag, title, desc }: any) => {
  return (
    <div className=" overflow-hidden bg-white transition">

      {/* Image */}
      <div className="relative w-full h-[330px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-5">
          <Image src={logo} alt="" width={22} height={22} className="object-contain w-40 h-10" />
          <span className="text-base px-4 py-2 rounded-lg border-2 border-slate-400 text-slate-600 font-medium">
            {tag}
          </span>
        </div>

        <h3 className="text-[28px] font-semibold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-lg text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default function CaseStudiesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24">

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">

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
