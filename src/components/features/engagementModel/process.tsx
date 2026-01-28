"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { Search, Palette, Code, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const Process = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We align on goals, scope, and success metrics so every decision is grounded in your vision.",
      icon: <Search className="w-6 h-6" />,
      highlights: ["Requirements Analysis", "Goal Setting", "Roadmap Planning"],
    },
    {
      step: "02",
      title: "Design & Plan",
      description: "User-centric design and a clear delivery plan keep the team and stakeholders in sync.",
      icon: <Palette className="w-6 h-6" />,
      highlights: ["UI/UX Design", "Architecture", "Resource Planning"],
    },
    {
      step: "03",
      title: "Build & Iterate",
      description: "Agile development with regular demos and feedback loops so the product stays on track.",
      icon: <Code className="w-6 h-6" />,
      highlights: ["Agile Development", "Regular Demos", "Continuous Feedback"],
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "Smooth rollout, monitoring, and support so you can grow with confidence.",
      icon: <Rocket className="w-6 h-6" />,
      highlights: ["Deployment", "Monitoring", "Ongoing Support"],
    },
  ];

  return (
    <section
      className={`${styles.sectionPadding} py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden`}
    >
      {/* Enhanced background with pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(165deg, #FFFFFF 0%, #FFF9F6 30%, #FDF8F5 70%, #FFFFFF 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F05C22 1.5px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <span className={`${styles.h6} font-bold uppercase tracking-[0.15em] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] mb-4`}>
            Our Process
          </span>
          <h2 className={`${styles.h1} font-semibold text-[#1E274F] leading-tight font-outfit max-w-3xl mx-auto`}>
            From Idea To{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
              Launch
            </span>
          </h2>
          <p className={`${styles.p2} text-gray-600 mt-5 max-w-2xl mx-auto font-inter`}>
            A proven methodology that transforms your vision into scalable, high-quality solutions
          </p>
        </div>

        {/* Desktop: Enhanced horizontal timeline */}
        <div className="relative hidden lg:block">
          {/* Enhanced gradient connector with animated glow */}
          <div className="absolute top-[100px] left-[8%] right-[8%] h-[4px] rounded-full z-0">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                background: "linear-gradient(90deg, #F05C22 0%, #F58220 50%, #EA4D24 100%)",
                boxShadow: hoveredIndex !== null
                  ? "0 0 32px rgba(240, 92, 34, 0.5)"
                  : "0 0 24px rgba(240, 92, 34, 0.4)",
              }}
            />
          </div>

          {/* Decorative dots on connector */}
          {processSteps.map((_, index) => {
            if (index === processSteps.length - 1) return null;
            const position = ((index + 1) / processSteps.length) * 100;
            return (
              <div
                key={index}
                className="absolute top-[96px] rounded-full bg-white border-2 z-10 transition-all duration-300"
                style={{
                  left: `calc(${position}% - 7px)`,
                  width: "14px",
                  height: "14px",
                  borderColor: hoveredIndex === index || hoveredIndex === index + 1 ? "#F05C22" : "#F58220",
                  boxShadow: hoveredIndex === index || hoveredIndex === index + 1
                    ? "0 0 16px rgba(240, 92, 34, 0.7)"
                    : "0 0 10px rgba(240, 92, 34, 0.4)",
                  transform: hoveredIndex === index || hoveredIndex === index + 1 ? "scale(1.2)" : "scale(1)",
                }}
              />
            );
          })}

          <div className="grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Enhanced step circle with icon animation */}
                <div
                  className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full p-[4px] mb-6 shrink-0 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #F05C22, #F58220, #EA4D24)",
                    boxShadow: hoveredIndex === index
                      ? "0 10px 40px rgba(240, 92, 34, 0.6), 0 0 0 4px rgba(240, 92, 34, 0.15)"
                      : "0 6px 24px rgba(240, 92, 34, 0.4)",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                    {/* Icon appears on hover */}
                    <div
                      className={`absolute transition-all duration-500 ${
                        hoveredIndex === index ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"
                      }`}
                      style={{ color: "#F05C22" }}
                    >
                      {item.icon}
                    </div>
                    {/* Step number */}
                    <span
                      className={`${styles.h4} font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] transition-all duration-500 relative ${
                        hoveredIndex === index ? "opacity-0 scale-75" : "opacity-100 scale-100"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Enhanced card with highlights */}
                <div
                  className={`bg-white rounded-2xl border transition-all duration-500 w-full min-h-[240px] flex flex-col px-6 py-7 xl:px-7 xl:py-8 group-hover:border-transparent ${
                    hoveredIndex === index
                      ? "border-transparent shadow-2xl scale-[1.02]"
                      : "border-gray-100 shadow-lg"
                  }`}
                  style={{
                    boxShadow: hoveredIndex === index
                      ? "0 24px 72px rgba(240, 92, 34, 0.18), 0 0 0 1px rgba(240, 92, 34, 0.12)"
                      : "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3
                    className={`${styles.h6} font-bold text-[#1E274F] font-outfit mb-3 leading-tight transition-colors duration-300 ${
                      hoveredIndex === index ? "text-[#F05C22]" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`${styles.p4} text-gray-600 font-inter leading-relaxed mb-4 flex-1`}>
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 transition-all duration-300 ${
                            hoveredIndex === index ? "text-[#F05C22]" : "text-gray-400"
                          }`}
                        />
                        <span className={`${styles.p5} text-gray-600 font-inter`}>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow indicator on hover */}
                  <div
                    className={`mt-5 flex items-center gap-2 text-[#F05C22] transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span className={`${styles.p5} font-semibold`}>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mobile / Tablet: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((item, index) => (
            <div key={index} className="flex gap-5 md:gap-6 relative group">
              {/* Left: Enhanced number + vertical line */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center bg-white border-2 shrink-0 relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                  style={{
                    borderColor: "#F05C22",
                    boxShadow: "0 6px 20px rgba(240, 92, 34, 0.3)",
                  }}
                >
                  {/* Icon on mobile */}
                  <div className="absolute top-1.5 opacity-30" style={{ color: "#F05C22" }}>
                    {item.icon}
                  </div>
                  <span className="text-base md:text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] to-[#EA4D24] relative z-10">
                    {item.step}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div
                    className="w-[3px] flex-1 min-h-[40px] mt-3 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #F05C22, #FCB477, #F58220)",
                      boxShadow: "0 0 12px rgba(240, 92, 34, 0.4)",
                    }}
                  />
                )}
              </div>
              {/* Right: Enhanced content card */}
              <div className="pb-12 md:pb-14 flex-1">
                <div className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-6 md:px-6 md:py-7">
                  <h3 className={`${styles.h6} font-bold text-[#1E274F] font-outfit mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`${styles.p4} text-gray-600 font-inter leading-relaxed mb-4`}>
                    {item.description}
                  </p>
                  {/* Highlights on mobile */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F05C22]" />
                        <span className={`${styles.p5} text-gray-600 font-inter`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 font-inter">
          <span className={`${styles.p2} text-gray-600`}>Ready to start your project?</span>
          <button
            className="inline-flex items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #F05C22, #F58220, #EA4D24)",
              boxShadow: "0 8px 24px rgba(240, 92, 34, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(240, 92, 34, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(240, 92, 34, 0.35)";
            }}
          >
            Book a consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
