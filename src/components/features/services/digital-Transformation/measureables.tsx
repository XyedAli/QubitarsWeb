"use client";

import { Check, X } from "lucide-react";

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

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function MythRealityPerfect() {
  const arcRadius = 180;
  const centerY = 300;

  const mythAngles = [-60, -30, 0, 30, 60];
  const realityAngles = [240, 210, 180, 150, 120];

  return (
    <section className="mx-16 bg-white">
      <div className="relative">

        {/* CENTER DIVIDER */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2" />

        <div className="grid grid-cols-2 gap-24 relative h-[620px]">

          {/* ================= LEFT COLUMN ================= */}
          <div className="relative flex justify-start">

            {/* Big Circle */}
            <div className="absolute left-0 top-[180px] w-[240px] h-[240px] bg-gray-100 rounded-full flex items-center justify-center text-center shadow-sm">
              <div className="font-medium text-gray-800">
                False Assumptions<br />About UI/UX
              </div>
            </div>

            {/* Curve */}
            <svg className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <path
                d="M 160 180 A 180 180 0 0 1 160 480"
                stroke="#E5E7EB"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Items */}
            {mythAngles.map((angle, i) => {
              const p = polarToCartesian(160, centerY, arcRadius, angle);

              return (
                <div key={i}>
                  <div
                    className="absolute w-2 h-2 bg-black rounded-full"
                    style={{ left: p.x - 4, top: p.y - 4 }}
                  />

                  <div
                    className="absolute w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
                    style={{ left: p.x + 14, top: p.y - 20 }}
                  >
                    <X size={16} />
                  </div>

                  <div
                    className="absolute w-[230px] text-gray-600"
                    style={{ left: p.x + 70, top: p.y - 10 }}
                  >
                    {myths[i]}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="relative flex justify-end">

            {/* Big Circle */}
            <div className="absolute right-0 top-[180px] w-[250px] h-[250px] bg-gray-100 rounded-full flex items-center justify-center text-center shadow-sm">
              <div className="font-medium text-gray-800">
                What UI/UX<br />Really Means
              </div>
            </div>

            {/* Curve */}
            <svg className="absolute right-10 top-[-27px] w-full h-full pointer-events-none">
              <path
                d="M 500 180 A 210 180 0 0 0 500 480"
                stroke="#E5E7EB"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            
            {/* Items */}
            {realityAngles.map((angle, i) => {
              const p = polarToCartesian(550, centerY, arcRadius, angle);

              return (
                <div key={i}>
                  <div
                    className="absolute w-3 h-3 bg-orange-500 rounded-full"
                    style={{ left: p.x - 1.5, top: p.y - 1.5 }}
                  />

                  <div
                    className="absolute w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
                    style={{ left: p.x - 52, top: p.y - 43 }}
                  >
                    <Check size={16} className="text-orange-500" />
                  </div>

                  <div
                    className="absolute w-[260px] text-right text-gray-600"
                    style={{ left: p.x - 320, top: p.y - 10 }}
                  >
                    {reality[i]}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}