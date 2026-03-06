"use client";

import React, { useState } from "react";
import { deliverData, layersData } from "@/data/devops/devops";
import { styles } from "@/styles/style";

function LayeredShape({ activeIndex = 0 }: { activeIndex?: number }) {
  const layers = layersData;

  return (
    <svg
      width="360"
      height="420"
      viewBox="0 0 360 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[300px] lg:w-[360px] h-[360px] lg:h-[420px]"
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

export default function DeliverFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.sectionPaddingY} ${styles.sectionPaddingX}`}>
      <div className="grid md:grid-cols-2 gap-0 lg:gap-7 xl:gap-12 items-center">

        {/* LEFT SIDE GRAPHIC */}
        <div className="">
          <div className="ms-0 xl:ms-5 text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
            {deliverData[activeIndex].number}
          </div>
          <div className={styles.flexCenter}>
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
                className="cursor-pointer border-b border-gray-200 px-3 lg:px-6 py-4 lg:py-5 transition-all duration-200 hover:bg-gray-50 flex items-center"
              >
                <div className={`flex items-center gap-4 ${isActive ? 'items-start' : 'items-center'}`}>

                  {/* NUMBER RECTANGLE */}
                  <div
                    className={`w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-md font-semibold transition-all duration-200 flex-shrink-0 ${isActive
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {item.number}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3
                      className={`font-semibold ${isActive
                        ? "text-blue-700"
                        : "text-gray-900"
                        } ${styles.h6}`}
                    >
                      {item.title}
                    </h3>

                    {isActive && (
                      <p className={`text-gray-600 mt-2 leading-relaxed ${styles.p2}`}>
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