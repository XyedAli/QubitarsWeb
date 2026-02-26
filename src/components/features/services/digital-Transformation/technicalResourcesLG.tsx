"use client";

import { useState, useEffect } from "react";
import { tabs, techCards } from "@/data/digital-transformation/chooseQubitars";

const TechTabsSectionLG = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const extendedTabs = [...tabs, ...tabs];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveTab(sliderIndex % tabs.length);

    if (sliderIndex >= tabs.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setSliderIndex(0);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [sliderIndex]);

  const translateValue = isMobile ? 25 : 33.333;

  return (
    <div className="w-full">
      {/* TAB WRAPPER */}
      <div className="relative mb-8 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" />

        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${sliderIndex * translateValue}%)`,
          }}
        >
          {extendedTabs.map((tab, index) => {
            const isDevOps = tab === "DevOps";
            const isProductDesign = tab === "Product Design";

            return (
              <button
                key={index}
                onClick={() => setSliderIndex(index)}
                className={`relative flex-shrink-0 text-center py-3 text-[16px] lg:text-[17px]
                  
                  /* ✅ FIXED RESPONSIVE WIDTH */
                  ${isMobile ? "min-w-[40%]" : "min-w-[20%]"}

                  ${
                    isProductDesign
                      ? "flex-[0_0_20%] lg:flex-[0_0_30%]"
                      : isDevOps
                      ? "flex-[0_0_12%] lg:flex-[0_0_20%]"
                      : "flex-[0_0_51%] lg:flex-[0_0_40%]"
                  }

                  ${
                    activeTab === index % tabs.length
                      ? "text-blue font-extrabold"
                      : "text-blue opacity-60"
                  }
                `}
              >
                {tab}

                {activeTab === index % tabs.length && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TECH CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {techCards[tabs[activeTab]]?.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.name}
              className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <Icon className="mb-3 h-10 w-10 text-blue" />
              <p className="font-semibold text-blue-700 text-center text-sm">
                {card.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechTabsSectionLG;