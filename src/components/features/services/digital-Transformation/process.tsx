"use client";
import React, { useState, useEffect } from "react";
import {
  svgCoordinatesData,
} from "@/data/digital-transformation/chooseQubitars";
import { processSteps } from "@/data/digital-transformation/process";
import { styles } from "@/styles/style";

interface ProcessProps {
  steps?: typeof processSteps;
  title?: string;
}

export default function SalesforceProcess({ steps = processSteps, title = "Our Salesforce Implementation Process" }: ProcessProps = {}) {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreenSize("mobile");
      else if (window.innerWidth < 1024) setScreenSize("tablet");
      else if (window.innerWidth < 1280) setScreenSize("large");
      else setScreenSize("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const coords =
    svgCoordinatesData[screenSize] || svgCoordinatesData.desktop;

  /* ================= CARD COMPONENT ================= */
  const CardItem = ({ step }: any) => (
    <>
      <div className="flex items-center mb-2 md:mb-4">
        <div className="w-9 lg:w-12 h-9 lg:h-12 text-sm lg:text-base border border-gray-500 rounded-full flex items-center justify-center mr-4">
          {step.number}
        </div>

        <h3 className={`${styles.p3} font-semibold`}>
          {step.title}
        </h3>
      </div>

      <p className={`text-gray-400 pt-3 md:pt-6 ${styles.p4}`}>
        {step.description}
      </p>
    </>
  );

  return (
    <section className="bg-[#0B1220] text-white py-20">
      <div className="max-w-[77rem] mx-auto px-6 relative">

        {/* TITLE */}
        <h2 className={`${styles.h2} font-bold text-center mb-16 xl:mb-18`}>
          {title}
        </h2>

        {/* ================= SVG ================= */}
        <svg
          className="absolute top-[120px] lg:top-[130px] left-0 w-full h-[350px] hidden md:block"
          viewBox="0 0 1200 356"
        >
          <line
            x1={coords.topLine.x1}
            y1={coords.topLine.y1}
            x2={coords.topLine.x2}
            y2={coords.topLine.y2}
            stroke="#6B7280"
            strokeWidth="2"
            strokeDasharray="5,8"
          />

          <line
            x1={coords.rightVertical.x1}
            y1={coords.rightVertical.y1}
            x2={coords.rightVertical.x2}
            y2={coords.rightVertical.y2}
            stroke="#6B7280"
            strokeWidth="2"
          />

          <line
            x1={coords.leftVertical.x1}
            y1={coords.leftVertical.y1}
            x2={coords.leftVertical.x2}
            y2={coords.leftVertical.y2}
            stroke="#6B7280"
            strokeWidth="2"
          />

          <line
            x1={coords.midLine.x1}
            y1={coords.midLine.y1}
            x2={coords.midLine.x2}
            y2={coords.midLine.y2}
            stroke="#6B7280"
            strokeWidth="2"
          />

          <line
            x1={coords.bottomLine.x1}
            y1={coords.bottomLine.y1}
            x2={coords.bottomLine.x2}
            y2={coords.bottomLine.y2}
            stroke="#6B7280"
            strokeWidth="2"
            strokeDasharray="5,8"
          />

          {coords.topDots.map((dot: any, index: number) => (
            <circle
              key={`top-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#9CA3AF"
            />
          ))}

          {coords.bottomDots.map((dot: any, index: number) => (
            <circle
              key={`bottom-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#9CA3AF"
            />
          ))}
        </svg>

        {/* ================= MOBILE LAYOUT (2 cards per row) ================= */}
        {screenSize === "mobile" ? (
          <div className="grid grid-cols-2 gap-6 mb-8">
            {steps.map((step: any) => (
              <div key={step.number} className="w-full">
                <CardItem step={step} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ================= FIRST ROW (Condition Applied) ================= */}
            <div
              className={`grid w-full grid-cols-2 md:grid-cols-3 gap-6 ${
                "mb-12 lg:mb-19 xl:mb-28 relative px-3 md:gap-9 lg:gap-18 xl:gap-20"
              }`}
            >
              {steps.slice(0, 3).map((step: any) => (
                <div key={step.number} className="w-full">
                  <CardItem step={step} />
                </div>
              ))}
            </div>

            {/* ================= SECOND ROW (Condition Applied) ================= */}
            <div
              className={`grid w-full grid-cols-2 md:grid-cols-3 gap-6 ${
                "relative mt-3 md:gap-9 lg:gap-18 xl:gap-20"
              }`}
            >
              {steps.slice(3).map((step: any) => (
                <div key={step.number} className="w-full">
                  <CardItem step={step} />
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}