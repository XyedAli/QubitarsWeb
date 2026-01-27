"use client";

import { styles } from "@/styles/style";
import { FileCheck } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "High Quality",
    description: "Quality is built into every stage of delivery. Engagement models designed around your specific goals, timelines, and operational requirements.",
  },
  {
    title: "Fast Delivery",
    description: "Efficient resource planning reduces overhead while maximizing value. Streamlined execution and agile workflows help you launch faster without sacrificing quality.",
  },
  {
    title: "Low Cost",
    description: "We optimize costs by aligning resources precisely with your needs. Efficient resource planning reduces overhead while maximizing value.",
  },
  {
    title: "Flexible Resource Allocation",
    description: "Scale resources up or down based on project demands. Predictable delivery and reduced rework contribute directly to higher project returns.",
  },
  {
    title: "Handling Future Needs",
    description: "Scale resources up or down based on project demands. Easily scale teams up or down to match changing project demands and priorities.",
  },
  {
    title: "Growth-First Partnership",
    description: "Beyond immediate delivery, our engagement models are structured to support continuous improvement, innovation, and sustained collaboration as your business grows.",
  },
];

const CustomersNeeds = () => {
  return (
    <section className={`bg-white ${styles.sectionPadding} py-12 md:py-16 lg:py-20 xl:py-24`}>
      {/* Section Header */}
      <div className="mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        {/* Subtitle */}
        <div className="mb-2 md:mb-3">
          <span className={`${styles.h6} font-bold uppercase inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}>
            CUSTOMER NEEDS
          </span>
        </div>
        
        {/* Main Title */}
        <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit`}>
          Solutions Aligned To{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Outcomes
          </span>
        </h2>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col"
          >
            {/* Top Divider Line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#F05C22]/30 to-transparent mb-4 md:mb-5 lg:mb-6" />
            
            {/* Card Content */}
            <div className="flex flex-col flex-1">
              {/* Icon */}
              <div className="mb-3 md:mb-4">
                <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-[#F05C22]" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className={`${styles.h4} font-bold text-blue mb-3 md:mb-4 leading-tight font-outfit`}>
                {card.title}
              </h3>
              
              {/* Description */}
              <p className={`${styles.p2} text-gray-600 leading-relaxed font-inter`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersNeeds;
