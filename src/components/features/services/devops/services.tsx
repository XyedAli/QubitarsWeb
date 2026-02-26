// components/DevOpsSection.jsx
import React from "react";
import Image from "next/image";
import { combine, styles } from "@/styles/style";
import { getDevOpsIcons } from "@/lib/assets/icons";
import { SectionHeading } from "@/components/shared/headings";

const devOpsIcons = getDevOpsIcons();

const services = [
  { title: "DevOps Consulting", icon: devOpsIcons.devicon1 },
  { title: "CI/CD Pipelines", icon: devOpsIcons.devicon2 },
  { title: "DevSecOps", icon: devOpsIcons.devicon3 },
  { title: "Cloud Management", icon: devOpsIcons.devicon4 },
  { title: "DevOps Implementation", icon: devOpsIcons.devicon5 },
  { title: "Containerization", icon: devOpsIcons.devicon6 },
];

const tags = [
  "DevOps Strategy",
  "Maturity Audit",
  "Roadmap Planning",
  "Process Optimization",
  "Architecture Design",
  "Readiness Assessment",
];

const DevOpsSection = () => {
  return (
    <section className={combine(styles.sectionPaddingY, "bg-gray-50")}>
      <div className={combine(styles.sectionPadding, "")}>
       <SectionHeading
       title="Modernize Cloud Operations Efficiently"
       subtitle="DevOps Services"
       />
        <div className="grid md:grid-cols-2 gap-30 items-start">
          {/* Service Cards */}
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-[#387EB8] rounded-lg px-4 h-[145px] shadow-lg shadow-blue-50 transition-all duration-300 bg-white hover:border-blue"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className={combine(styles.p4, "font-bold text-gray-900 text-center")}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">
            <h3 className={combine(styles.h4, "font-bold text-gray-900 mb-4")}>
              DevOps Consulting
            </h3>
            <p className={combine(styles.p2, "text-gray-600 mb-6")}>
              We assess your current workflows, define adoption roadmaps,
              design scalable architectures, and guide your transition toward
              mature, high-performing DevOps practices.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100/50 text-blue px-3 py-2 rounded-lg text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className={combine(styles.p3, "w-inline-flex w-50 items-center px-6 py-2 border border-orange-600 text-orange-600 font-medium rounded hover:bg-orange-50 transition")}>
              Get In Touch <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;