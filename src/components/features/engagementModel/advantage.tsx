"use client";

import { styles } from "@/styles/style";
import { Settings2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/headings";
import Image from "next/image";
interface AdvantageItem {
  title: string;
  description: string;
}

const advantageItems: AdvantageItem[] = [
  {
    title: "Handling Future Needs",
    description:
      "Scale resources up or down based on project demands. Easily scale teams up or down to match changing project demands and priorities.",
  },
  {
    title: "Flexible Resource Allocation",
    description:
      "Scale resources up or down based on project demands. Predictable delivery and reduced rework contribute directly to higher project returns.",
  },
  {
    title: "High Quality",
    description:
      "Quality is built into every stage of delivery. Engagement models designed around your specific goals, timelines, and operational requirements.",
  },
  {
    title: "Growth-First Partnership",
    description:
      "Beyond immediate delivery, our engagement models are structured to support continuous improvement, innovation, and sustained collaboration as your business grows.",
  },
];

const Advantage = () => {
  return (
    <section
      className={`${styles.sectionPadding}`}
      style={{ backgroundColor: "#FDFDFD" }}
    >
        <SectionHeading
            subtitle="ADVANTAGE"
            title="End-To-End Execution, Built For Scale"
          />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-center">
        {/* Left: Header + 2x2 Image Grid */}
        <div className="lg:col-span-6">
          <Image src="/assets/images/blogs/bimg2.png" alt="Advantage" width={700} height={700} className="w-full h-[600px]" />
        </div>

        {/* Right: Text Blocks (mapped) */}
        <div className="lg:col-span-6 space-y-4 ">
          {advantageItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4 md:mb-5">
              </div>
              <div className="flex items-center gap-2">
              <Settings2
                    className="w-7 h-7 md:w-9 md:h-9 text-[#F05C22]"
                    strokeWidth={2}
                  />
              <h3
                className={`${styles.h6} font-bold text-blue mb-3 md:mb-4 leading-tight font-outfit`}
              >
                {item.title}
              </h3>
              </div>
              <p
                className={`${styles.p2} text-gray-600 leading-relaxed font-inter max-w-xl`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
