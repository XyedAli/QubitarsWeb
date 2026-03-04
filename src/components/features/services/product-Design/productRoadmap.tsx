// components/ExecutionInsights.jsx
import Image from "next/image";
import { getProductRoadmapImages } from "@/lib/assets/images";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

export default function ExecutionInsights() {
  const images = getProductRoadmapImages();
  const icons = getProductDesignIcons();

  const cards = [
    {
      icon: icons.pdIcon5,
      title: "+2.7%",
      description: "Whatsapp Usage Increase",
    },
    {
      icon: icons.pdIcon6,
      title: "68%",
      description: "Automation for Ecommerce at least",
    },
    {
      icon: icons.pdIcon7,
      title: "2M+",
      description: "Conversations have been answered",
    }
  ];

  return (
    <section className={`bg-[#F7F7F7] ${styles.sectionPaddingY}`}>
      <div className={`${styles.sectionPaddingX}`}>
        
        <SectionHeading
          title="Your Product Roadmap Simplified"
          subtitle="Execution Insights"
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Persona Development Image Card */}
          <div className="relative rounded-2xl overflow-hidden h-[320px] md:col-span-1">
            <Image
              src={images.pdImg2}
              alt="Persona Development"
              fill
              className="object-cover"
            />
          </div>

          {/* +2.7% Card */}
          <div className="rounded-2xl p-6 flex flex-col justify-center h-[275px] border border-gray-300">
            <div className={`w-16 h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-6`}>
              <img src={cards[0].icon} alt="" className="w-8 h-8" />
            </div>
            <h3 className={`${styles.h6} font-semibold text-blue mb-3`}>Strategic Execution Framework</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              A prioritized roadmap supported by scalable architecture planning to ensure efficient delivery and long-term growth.            </p>
          </div>

          {/* Customer Support Image */}
          <div className="relative rounded-2xl overflow-hidden h-[308px]">
            <Image
              src={images.pdImg3}
              alt="Support"
              fill
              className="object-cover"
            />
          </div>

          {/* 68% Card */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center h-[275px] border border-gray-300 ">
            <div className={`w-16 h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-6`}>
              <img src={cards[1].icon} alt="" className="w-8 h-8" />
            </div>
            <h3 className={`${styles.h6} font-semibold text-blue mb-3`}>User-Centered Clarity</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              Deep audience profiling combined with structured journey mapping to align user needs with measurable business objectives.
            </p>
          </div>

          {/* Happy User Image */}
          <div className="relative rounded-2xl overflow-hidden h-[320px] -mt-12">
            <Image
              src={images.pdImg4}
              alt="Happy User"
              fill
              className="object-cover"
            />
          </div>

          {/* 2M+ Card */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center h-[285px] border border-gray-300 -mt-3">
            <div className={`w-16 h-16 rounded-full text-accent border border-gray-300 ${styles.flexCenter} mb-6`}>
              <img src={cards[2].icon} alt="" className="w-8 h-8" />
            </div>
           <h3 className={`${styles.h6} font-semibold text-blue mb-3`}>Rapid Validation</h3>
            <p className={`${styles.p2} text-gray-500 font-inter`}>
              Interactive prototypes and structured testing cycles to minimize risk, refine direction, and confirm market readiness.            </p>
          </div>

        </div>
      </div>
    </section>
  );
}