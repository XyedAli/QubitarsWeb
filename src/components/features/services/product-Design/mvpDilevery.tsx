// components/OurApproach.jsx
import Image from "next/image";
import { SectionHeading } from "@/components/shared/headings";
import { styles } from "@/styles/style";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { getProductDesignCloudinaryImages } from "@/lib/assets/images";

export default function OurApproach() {
  const icons = getProductDesignIcons();
  const images = getProductDesignCloudinaryImages();

  // Debug: Log icons to check if they're loading
  console.log('Icons:', icons);

  return (
    <section className={` ${styles.sectionPaddingY}`}>
      <div className={`${styles.sectionPaddingX}`}>

        <SectionHeading
          title="From Strategy to MVP Delivery"
          subtitle="Our Approach"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-11 items-center">

          {/* ================= LEFT SIDE (col-4) ================= */}
          <div className="lg:col-span-3 space-y-10 ms-4">
            {[
              {
                icon: icons.pdIcon1,
                title: "Discover",
                items: ["Stakeholder Alignment", "User Insights", "Market Context"],

              },
              {
                icon: icons.pdIcon3,
                title: "Define",
                items: ["Opportunity Prioritization", "Value Proposition", "MVP Scope"],

              },
              {
                icon: icons.pdIcon2,
                title: "Design",
                items: ["Experience Architecture", "Wireframes", "Interactive Prototypes"],

              },
              {
                icon: icons.pdIcon4,
                title: "Validate",
                items: ["Usability Testing", "Iteration", "Launch Readiness"],

              }
            ].map((step, index) => (
              <div key={index} className={`${styles.flexitems} gap-5`}>
                <div className={`${styles.flexCenter} w-20 h-20 bg-blue-600 rounded-full text-white flex-shrink-0`}>
                  <Image 
                    src={step.icon} 
                    alt={step.title} 
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <ul className={`${styles.p2} font-inter text-blue`}>
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="whitespace-nowrap">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE (col-8) ================= */}
          <div className="lg:col-span-9 relative flex w-full ">

            <div className="relative w-full max-w-[480px] h-[470px]">

              {/* Donut Image */}
              <Image
                src={images.pdImg1}
                alt="Process Donut"
                fill
                className="object-contain"
                quality={100}
                priority
              />

              {/* Phase Content */}
              {[
                {
                  phase: "Phase 1",
                  title: "Discover",
                  desc: "We align on vision, users, measurable outcomes.",
                  position: "top-[-40px] left-95"
                },
                {
                  phase: "Phase 2", 
                  title: "Define",
                  desc: "We translate insights into a focused product strategy.",
                  position: "top-30 left-120"
                },
                {
                  phase: "Phase 3",
                  title: "Design", 
                  desc: "We convert strategy into tangible, testable experiences.",
                  position: "top-70 left-121"
                },
                {
                  phase: "Phase 4",
                  title: "Validate",
                  desc: "We refine, test, prepare for confident launch.",
                  position: "top-113 left-100"
                }
              ].map((item, index) => (
                <div key={index} className={`absolute ${item.position} flex gap-6 w-full`}>
                  <div className={`border-r-4 border-blue-600`}>
                    <h4 className="text-[26px] text-blue font-semibold leading-tight">
                      <span className="text-blue-600 text-xl">{item.phase}</span> {item.title}
                    </h4>
                  </div>
                  <div>
                    <p className={`${styles.p2} text-blue max-w-md leading-tight font-medium font-inter`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}