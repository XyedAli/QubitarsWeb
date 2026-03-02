"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

const mythPositions = [
  { top: 20, left: 270 }, // UI UX means only visual design
  { top: 117, left: 380 }, // Wireframes slow development
  { top: 220, left: 400 }, // Good design is subjective
  { top: 330, left: 370 }, // UX is unnecessary for simple products
  { top: 415, left: 270 }, // More features create better experience
];

const realityPositions = [
  { top: 20, right: 283 }, // Effective design is validated...
  { top: 114, right: 341 }, // They reduce rework...
  { top: 216, right: 378 },  // It covers research...
  { top: 324, right: 345 }, // Even simple flows...
  { top: 407, right: 290 }, // Focused functionality...
];

const myths = [
  "UI UX means only visual design",
  "Wireframes slow development",
  "Good design is subjective",
  "UX is unnecessary for simple products",
  "More features create better experience",
];

const reality = [
  "Effective design is validated through data, behavior patterns, usability testing.",
  "They reduce rework, align teams, and accelerate delivery.",
  "It covers research, usability testing, and continuous optimization.",
  "Even simple flows require clarity, accessibility, friction-free interactions.",
  "Focused functionality improves usability and user satisfaction.",
];

export default function MythRealityPerfect() {
  return (
    <div className="bg-gray-100">
      <div className={combine(styles.sectionPaddingY, "px-8 mb-10 md:mb-16 lg:mb-20")}>
        <div className="ms-9">
          <SectionHeading subtitle="Myth vs. reality" title="From Myth To Measurable" />
        </div>
        <div className="relative grid grid-cols-2 gap-24 ">

          {/* ================= VS LINE ================= */}
          <div className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-white text-blue px-5 py-1 rounded-full font-bold text-lg shadow-lg border border-gray-600">
              VS
            </div>
          </div>

          {/* ================= VERTICAL LINES ================= */}
          <div className="absolute top-13 bottom-20 left-1/2 w-[0.5px] bg-gray-700 z-40 -translate-x-1/2"></div>

          {/* ================= LEFT COLUMN ================= */}
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/drugkop7t/image/upload/v1772437770/myth_lnan3r.webp"
              alt="Myth - False Assumptions About UI/UX"
              className="w-[400px] h-[470px] object-cover rounded-xl"
              width={500}
              height={500}
            />
            <div className="absolute top-58 left-40 -translate-x-1/2 -translate-y-1/2 text-center text-gray-800 font-bold text-xl max-w-[190px]">
              False Assumptions About UI/UX
            </div>

            {myths.map((text, i) => {
              const position = mythPositions[i];

              return (
                <div
                  key={i}
                  className="absolute text-gray-700 font-medium text-base max-w-xs"
                  style={{
                    left: `${position.left}px`,
                    top: `${position.top}px`
                  }}
                >
                  <p className="leading-tight text-gray-700">{text}</p>
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="relative flex justify-end">
            <Image
              src="https://res.cloudinary.com/drugkop7t/image/upload/v1772437770/reality_iyam8v.webp"
              alt="Reality - What UI/UX Really Means"
              className="w-[400px] h-[470px] object-cover rounded-xl"
              width={500}
              height={500}
            />
            <div className="absolute top-60 right-[-30px] -translate-x-1/2 -translate-y-1/2 text-center text-gray-800 font-bold text-xl max-w-[190px]">
              What UI/UX Really Means
            </div>

            {reality.map((text, i) => {
              const position = realityPositions[i];

              return (
                <div
                  key={i}
                  className="absolute text-gray-700 font-medium text-base max-w-xs"
                  style={{
                    right: `${position.right}px`,
                    top: `${position.top}px`
                  }}
                >
                  <p className="leading-tight text-gray-700">{text}</p>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}