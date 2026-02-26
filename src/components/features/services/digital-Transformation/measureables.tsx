"use client";

import React from "react";
import { combine, styles } from "@/styles/style";
import { getMeasureablesIcons } from "@/lib/assets/icons";
import { SectionHeading } from "@/components/shared/headings";

const mythsReality = [
  {
    myth: "Good design is subjective",
    reality: "Effective design is validated through data, behavior patterns, usability testing.",
  },
  {
    myth: "Wireframes slow development",
    reality: "They reduce rework, align teams, and accelerate delivery.",
  },
  {
    myth: "UI UX means only visual design",
    reality: "It covers research, strategy, usability, testing, and continuous optimization.",
  },
  {
    myth: "UX is unnecessary for simple products",
    reality: "Even simple flows require clarity, accessibility, friction-free interactions.",
  },
  {
    myth: "More features create better experience",
    reality: "Focused functionality improves usability and user satisfaction.",
  },
];

const MythVsRealitySection = () => {
  const measureablesIcons = getMeasureablesIcons();
  return (
    <section className={combine(styles.sectionPaddingY, "bg-gray-100")}>
      <div className={styles.sectionPaddingX}>
        {/* Heading */}
        <SectionHeading
          subtitle="Myth vs. Reality"
          title="From Myth To Measurable"
        />
        {/* Table/Grid */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-4 text-white font-bold">
            {/* Header */}
            <div className={combine(styles.flexCenter, "relative col-span-2 h-20")}>
              <div className={combine(styles.flexBetween, "bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] py-1 px-2 rounded-tl-lg rounded-bl-lg w-1/2")}>
                <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center">
                  <img src={measureablesIcons.sicon1} alt="Myth icon" className="h-8 w-8" />
                </div>
                <h4 className={combine(styles.flexCenter, styles.h4, "text-white font-bold flex-1 text-center")}>Myth</h4>
              </div>
              <div className={combine(styles.flexBetween, "bg-gradient-to-r from-[#1F274F] via-[#1E274F] to-[#36458A] py-1 px-2 rounded-tr-lg rounded-br-lg w-1/2")}>
                <h4 className={combine(styles.flexCenter, styles.h4, "text-white font-bold text-lg flex-1 text-center")}>Reality</h4>
                <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center">
                  <img src={measureablesIcons.sicon2} alt="Reality icon" className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] bg-white text-gray-900 font-bold rounded-full h-19 w-19 flex items-center justify-center shadow-md text-lg z-10">
                vs
              </div>
            </div>

            {/* Rows */}
            {mythsReality.map((item, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={combine(styles.p1, "px-6 py-4 text-blue font-bold border-b border-gray-200 rounded-tl-lg rounded-bl-lg bg-white h-20 flex items-center justify-center")}>
                  {item.myth}
                </div>
                <div
                  className={combine(styles.p2, "px-14 py-4 text-gray-600 font-normal font-inter border-b border-gray-200 rounded-tr-lg rounded-br-lg bg-white h-20 flex items-center justify-center text-center")}>
                  {item.reality}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythVsRealitySection;