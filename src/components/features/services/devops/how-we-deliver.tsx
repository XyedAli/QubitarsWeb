"use client";

import React, { useState } from "react";

function LayeredShape({ activeIndex = 0 }: { activeIndex?: number }) {
  const layers = [
    { id: 0, y: 0 },
    { id: 1, y: 80 },
    { id: 2, y: 150 },
    { id: 3, y: 220 },
    { id: 4, y: 290 },
  ];

  return (
    <svg
      width="360"
      height="420"
      viewBox="0 0 360 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {layers
        .filter((_, index) => index !== activeIndex)
        .map((layer) => (
          <polygon
            key={layer.id}
            points="180,0 330,65 180,130 30,65"
            transform={`translate(0, ${layer.y})`}
            fill="#93C5FD"
            opacity="0.5"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        ))}

      {layers[activeIndex] && (
        <polygon
          key={layers[activeIndex].id}
          points="180,0 330,65 180,130 30,65"
          transform={`translate(0, ${layers[activeIndex].y})`}
          fill="#0C4FD3"
          opacity="1"
          style={{
            transition: "all 0.3s ease",
          }}
        />
      )}
    </svg>
  );
}

const deliverData = [
  {
    number: "01",
    title: "Automation-First",
    description:
      "We streamline CI/CD, infrastructure, and workflows through automation to reduce manual work and accelerate consistent, reliable delivery.",
  },
  {
    number: "02",
    title: "Cloud-Native Solutions",
    description:
      "We build scalable apps using microservices, containers, serverless functions, and event-driven architectures for modern cloud environments.",
  },
  {
    number: "03",
    title: "Reliability Engineering",
    description:
      "We embed SLOs, SLIs, monitoring, alerting, incident response, and root-cause analysis to ensure high system reliability and operational resilience.",
  },
  {
    number: "04",
    title: "Security & Compliance",
    description:
      "Identity management, policies, encryption, network controls, and compliance are enforced from day one to ensure robust governance.",
  },
  {
    number: "05",
    title: "Continuous Feedback",
    description:
      "Performance, stability, and cost metrics are monitored and reviewed continuously to improve operational efficiency and decision-making.",
  },
];

export default function DeliverFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE GRAPHIC */}
        <div className="">
          <div className="text-6xl font-bold text-gray-900 leading-none">
            {deliverData[activeIndex].number}
          </div>
          <div className="flex items-center justify-center">
            {/* Layer graphic */}
            <LayeredShape activeIndex={activeIndex} />
          </div>
        </div>

        {/* RIGHT SIDE TABS */}
        <div className="border-l border-gray-200">

          {deliverData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer border-b border-gray-200 px-6 py-5 transition-all duration-200 hover:bg-gray-50"
              >
                <div className="flex items-start gap-4">

                  {/* NUMBER RECTANGLE */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-md font-semibold transition-all duration-200 flex-shrink-0 ${isActive
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {item.number}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3
                      className={`text-2xl font-semibold ${isActive
                        ? "text-blue-700"
                        : "text-gray-900"
                        }`}
                    >
                      {item.title}
                    </h3>

                    {isActive && (
                      <p className="text-gray-600 mt-2 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}