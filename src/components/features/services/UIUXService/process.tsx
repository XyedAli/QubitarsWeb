"use client";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We review workflows, data, and users to define clear requirements before configuration begins.",
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "We design data models, access rules, and automation aligned to approved requirements.",
  },
  {
    number: "03",
    title: "Configuration",
    description:
      "We configure Salesforce features, automation, and security based on the finalized design.",
  },
  {
    number: "04",
    title: "Data Migration",
    description:
      "We migrate data into Salesforce with validation checks and ownership mapping.",
  },
  {
    number: "05",
    title: "Testing Training",
    description:
      "We test system behavior and prepare users with role-based training.",
  },
  {
    number: "06",
    title: "Go Live",
    description:
      "We deploy Salesforce, monitor usage, and stabilize the system after launch.",
  },
];

export default function SalesforceProcess() {
  return (
    <section className="bg-[#0B1220] text-white py-20">
      <div className="max-w-[77rem] mx-auto px-6 relative">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-24">
          Our Salesforce Implementation Process
        </h2>

        {/* SVG CONNECTOR (ALL 3 LINES) */}
        <svg
          className="absolute top-[130px] left-0 w-full h-[350px]"
          viewBox="0 0 1200 356"
        >
          {/* TOP LINE */}
          <line
            x1="-20"
            y1="75"
            x2="1180"
            y2="75"
            stroke="#6B7280"
            strokeWidth="2"
            strokeDasharray="5,8"
          />

          {/* RIGHT VERTICAL CONNECTOR */}
          <line
            x1="1185"
            y1="75"
            x2="1185"
            y2="220"
            stroke="#6B7280"
            strokeWidth="2"
          />
          
          {/* LEFT VERTICAL CONNECTOR */}
          <line
            x1="-20"
            y1="220"
            x2="-20"
            y2="350"
            stroke="#6B7280"
            strokeWidth="2"
          />

          {/* Mid LINE */}
          <line
            x1="-20"
            y1="220"
            x2="1185"
            y2="220"
            stroke="#6B7280"
            strokeWidth="2"
          />

          <line
            x1="-5"
            y1="350"
            x2="1200"
            y2="350"
            stroke="#6B7280"
            strokeWidth="2"
            strokeDasharray="5,8"
          />
          {/* DOTS TOP ROW */}
          <circle cx="-14" cy="74" r="8" fill="#9CA3AF" />
          <circle cx="410" cy="74" r="8" fill="#9CA3AF" />
          <circle cx="810" cy="74" r="8" fill="#9CA3AF" />
          <circle cx="1185" cy="74" r="8" fill="#9CA3AF" />

          {/* DOTS BOTTOM ROW */}
          <circle cx="-18" cy="348" r="8" fill="#9CA3AF" />
          <circle cx="410" cy="348" r="8" fill="#9CA3AF" />
          <circle cx="810" cy="348" r="8" fill="#9CA3AF" />
        </svg>

        {/* FIRST ROW */}
        <div className="grid grid-cols-3 gap-20 mb-28 relative px-3">
          {steps.slice(0, 3).map((step) => (
            <div key={step.number}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-400 pt-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-3 gap-20 relative mt-3">
          {steps.slice(3).map((step) => (
            <div key={step.number}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-400 pt-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
