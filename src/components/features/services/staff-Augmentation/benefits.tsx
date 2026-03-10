"use client";
 
import Image from "next/image";
import { getStaffAugmentationIcons, getStaffAugmentationImages } from "@/lib/assets";
import { SectionHeading } from "@/components/shared/headings";
import { combine, styles } from "@/styles/style";
 
const staffImages = getStaffAugmentationImages();
 
const cards = [
  {
    title: "Elite Talent",
    description:
      "Access top one percent engineers ready to scale projects.",
    image: staffImages.saImg2,
  },
  {
    title: "Faster Hiring",
    description: "Skip recruitment delays and onboard experts exactly when needed.",
    image: staffImages.saImg3,
  },
  {
    title: "Clear Communication",
    description:
      "Collaborative teams communicate clearly and resolve blockers quickly.",
    image: staffImages.saImg4,
  },
  {
    title: "Goal Focus",
    description:
      "Teams stay aligned with targets and deliver results.",
    image: staffImages.saImg5,
    active: true,
  },
  {
    title: "Flexible Scaling",
    description:
      "Expand your team instantly with global engineering expertise.",
    image: staffImages.saImg6,
  },
];
 
export default function BenefitsSection() {
  return (
    <section className={combine("bg-[#F3F3F3] py-28", styles.sectionPaddingX)}>
      <div className="">
       <SectionHeading
        subtitle="Benefits"
        title="Why Choose Our Staff Augmentation"
       />
 
        <div className="grid grid-cols-5 gap-8 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex items-center text-center ${
                index % 2 === 1 ? " flex-col" : "flex-col-reverse"
              }`}
            >
              {/* TEXT */}
              <div className="">
                <h3
                  className={combine("font-semibold mb-2", styles.h6, 
                    card.active ? "text-blue-600" : "text-blue-500"
                  )}
                >
                  {card.title}
                </h3>
 
                <p className={combine("text-gray-600 mt-2 max-w-[230px]", styles.p4)}>
                  {card.description}
                </p>
              </div>
 
              {/* IMAGE */}
              <div className="my-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="rounded-lg w-[240px] h-[270px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}