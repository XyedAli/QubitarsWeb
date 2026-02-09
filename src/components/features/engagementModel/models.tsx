"use client";

import { useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { modelsSection } from "@/data/engModel";

const LIST_BLOCK_CLASS = `${styles.p3} font-semibold text-[#1E274F] font-outfit mb-3`;
const LIST_ITEM_CLASS = `${styles.p4} text-gray-700 font-inter`;
const TAB_BLOCKS = [
  { title: "What this includes:", key: "whatThisIncludes" as const },
  { title: "Best Suited for:", key: "bestSuitedFor" as const },
] as const;

const Models = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs } = modelsSection;

  return (
    <section className={`${styles.sectionPaddingX} ${styles.sectionPaddingY} bg-white w-full max-w-full overflow-x-hidden`}>
      <div className="mb-6 text-center">
        <h2 className={`${styles.h2} font-semibold text-[#1E274F] leading-tight font-outfit`}>{modelsSection.title}</h2>
      </div>
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-1 py-2 md:px-6 md:py-4 font-semibold font-outfit transition-all duration-300 ${
                activeTab === index ? "text-[#F05C22]" : "text-gray-600 hover:text-[#1E274F]"
              }`}
            >
              <span className="text-sm md:text-lg lg:text-xl xl:text-2xl">{tab.title}</span>
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 ${
              activeTab === index ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 xl:gap-10 items-stretch">
              <div className="relative min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden lg:col-span-5 bg-[#1E274F] hidden md:block">
                <Image
                  src="/assets/images/engModel/engImg2.png"
                  alt="Growth-focused process: team, partnership, process, goals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#EDEFF880] p-5 xl:p-8 rounded-2xl lg:col-span-7">
                <h3 className={`${styles.h4} font-bold text-[#1E274F] font-outfit leading-tight mb-2`}>{tab.title}</h3>
                <p className={`${styles.p2} text-gray-600 font-inter mb-3 xl:mb-5`}>{tab.tagline}</p>
                <p className={`${styles.p4} text-gray-700 font-inter leading-relaxed mb-3 xl:mb-6`}>{tab.description}</p>
                <div className="space-y-5">
                  {TAB_BLOCKS.map((block) => (
                    <div key={block.key}>
                      <h4 className={LIST_BLOCK_CLASS}>{block.title}</h4>
                      <ul className="space-y-2 lg:space-y-1 xl:space-y-2">
                        {tab[block.key].map((item, i) => (
                          <li key={i} className={`flex items-start ${block.key === "whatThisIncludes" ? "gap-2" : "gap-1 xl:gap-2"}`}>
                            <span className="text-xl md:text-2xl leading-none text-blue">•</span>
                            <span className={LIST_ITEM_CLASS}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
