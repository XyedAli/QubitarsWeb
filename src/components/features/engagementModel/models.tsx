"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { CheckCircle2, Clock, Users, TrendingUp, ArrowRight } from "lucide-react";

interface EngagementModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  bestFor: string;
  icon: React.ReactNode;
}

const Models = () => {
  const [activeTab, setActiveTab] = useState(0);

  const engagementModels: EngagementModel[] = [
    {
      id: "fixed-price",
      title: "Fixed Price",
      subtitle: "Predictable Budget",
      description: "Perfect for well-defined projects with clear requirements. You pay a fixed amount for a complete deliverable, giving you budget certainty and scope clarity.",
      features: [
        "Fixed budget and timeline",
        "Clear scope and deliverables",
        "No hidden costs",
        "Ideal for MVP and defined projects",
        "Risk-free for clients",
      ],
      bestFor: "Projects with clear requirements and fixed scope",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      id: "time-material",
      title: "Time & Material",
      subtitle: "Flexible & Agile",
      description: "Pay for actual time and resources used. Perfect for evolving projects where requirements may change or when you need maximum flexibility.",
      features: [
        "Pay only for work done",
        "Maximum flexibility",
        "Easy to scale up or down",
        "Ideal for evolving requirements",
        "Transparent billing",
      ],
      bestFor: "Projects with evolving scope or ongoing development",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      id: "dedicated-team",
      title: "Dedicated Team",
      subtitle: "Extended Workforce",
      description: "Get a dedicated team that works exclusively on your project. Like having an in-house team without the overhead, perfect for long-term partnerships.",
      features: [
        "Dedicated resources",
        "Full team integration",
        "Long-term partnership",
        "Scalable team size",
        "Deep domain knowledge",
      ],
      bestFor: "Long-term projects requiring continuous development",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "hybrid",
      title: "Hybrid Model",
      subtitle: "Best of Both Worlds",
      description: "Combine fixed-price milestones with time & material flexibility. Get the predictability you need with the agility to adapt as you learn.",
      features: [
        "Fixed milestones",
        "Flexible iterations",
        "Balanced risk",
        "Adaptive planning",
        "Cost optimization",
      ],
      bestFor: "Complex projects needing both structure and flexibility",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className={`${styles.sectionPadding} py-16 md:py-20 lg:py-24 xl:py-28`}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-14 lg:mb-16">
        <span className={`${styles.h6} font-bold uppercase tracking-[0.15em] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] mb-4`}>
          Engagement Models
        </span>
        <h2 className={`${styles.h1} font-semibold text-[#1E274F] leading-tight font-outfit max-w-3xl mx-auto`}>
          Choose The Right{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Model
          </span>{" "}
          For Your Needs
        </h2>
        <p className={`${styles.p2} text-gray-600 mt-4 max-w-2xl mx-auto font-inter`}>
          Each engagement model is designed to fit different project types, timelines, and business goals
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 md:mb-10 lg:mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
          {engagementModels.map((model, index) => (
            <button
              key={model.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold font-outfit transition-all duration-300 ${
                activeTab === index
                  ? "text-white shadow-lg scale-105"
                  : "text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-[#1E274F]"
              }`}
              style={
                activeTab === index
                  ? {
                      background: "linear-gradient(135deg, #F05C22, #F58220, #EA4D24)",
                      boxShadow: "0 8px 24px rgba(240, 92, 34, 0.3)",
                    }
                  : {}
              }
            >
              <span className={`${styles.p2} relative z-10 flex items-center gap-2`}>
                <span className="hidden sm:inline">{model.icon}</span>
                {model.title}
              </span>
              {activeTab === index && (
                <div
                  className="absolute inset-0 rounded-xl opacity-0 animate-pulse"
                  style={{
                    background: "linear-gradient(135deg, #F05C22, #F58220, #EA4D24)",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {engagementModels.map((model, index) => (
          <div
            key={model.id}
            className={`transition-all duration-500 ${
              activeTab === index
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Left: Content */}
              <div className="space-y-6">
                {/* Subtitle */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(240, 92, 34, 0.1), rgba(245, 130, 32, 0.1))",
                      color: "#F05C22",
                    }}
                  >
                    {model.icon}
                  </div>
                  <span className={`${styles.p3} font-semibold text-[#F05C22] font-inter uppercase tracking-wide`}>
                    {model.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`${styles.h2} font-bold text-[#1E274F] font-outfit leading-tight`}>
                  {model.title}
                </h3>

                {/* Description */}
                <p className={`${styles.p2} text-gray-600 font-inter leading-relaxed`}>
                  {model.description}
                </p>

                {/* Best For */}
                <div className="bg-[#FFF9F6] border-l-4 border-[#F05C22] rounded-r-lg p-4 md:p-5">
                  <p className={`${styles.p3} font-semibold text-[#1E274F] font-inter mb-1`}>
                    Best For:
                  </p>
                  <p className={`${styles.p4} text-gray-700 font-inter`}>{model.bestFor}</p>
                </div>
              </div>

              {/* Right: Features List */}
              <div className="bg-gradient-to-br from-[#FFF9F6] to-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-lg">
                <h4 className={`${styles.h5} font-bold text-[#1E274F] font-outfit mb-6`}>
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #F05C22, #F58220)",
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className={`${styles.p3} text-gray-700 font-inter leading-relaxed`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold font-inter text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #F05C22, #F58220, #EA4D24)",
                    boxShadow: "0 4px 16px rgba(240, 92, 34, 0.3)",
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-12 md:mt-14 lg:mt-16 text-center">
        <p className={`${styles.p3} text-gray-600 font-inter max-w-2xl mx-auto`}>
          Not sure which model fits your project?{" "}
          <button
            className="font-semibold text-[#F05C22] hover:text-[#EA4D24] transition-colors underline"
            onClick={() => {
              // Scroll to contact form or open consultation modal
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's discuss your needs
          </button>
        </p>
      </div>
    </section>
  );
};

export default Models;
