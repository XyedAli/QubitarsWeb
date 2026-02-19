"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { styles } from "@/styles/style";
import { modelsSection } from "@/data/engModel";
import { useRouter } from "next/navigation";


const LIST_BLOCK_CLASS = `${styles.p3} font-semibold text-[#1E274F] font-outfit mb-3`;
const LIST_ITEM_CLASS = `${styles.p4} text-gray-700 font-inter`;
const TAB_BLOCKS = [
  { title: "What this includes:", key: "whatThisIncludes" as const },
  { title: "Best Suited for:", key: "bestSuitedFor" as const },
] as const;

const Models = () => {
  const pathname = usePathname();
  const { tabs } = modelsSection;
  const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();

  // Function to handle tab switching
  const switchToTab = (hash: string) => {
    const index = tabs.findIndex((t) => t.id === hash);
    if (index >= 0) {
      // First activate tab
      setActiveTab(index);
      // Update URL hash
      window.history.replaceState(null, '', `#${hash}`);
      
      // Wait for tab to be active, then scroll to models section
      setTimeout(() => {
        const modelsSection = document.getElementById("models-section");
        if (modelsSection) {
          const headerHeight = 80; // Account for fixed header
          const sectionTop = modelsSection.offsetTop;
          window.scrollTo({
            top: sectionTop - headerHeight,
            behavior: "smooth"
          });
        }
      }, 300); // Increased delay to ensure DOM is updated
    }
  };

  // Handle initial hash and hash changes
  useEffect(() => {
    let currentHash = window.location.hash.slice(1);
    if (currentHash) {
      switchToTab(currentHash);
    } else {
      setActiveTab(0);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash) {
        switchToTab(newHash);
      } else {
        setActiveTab(0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Also check for hash changes periodically (fallback)
    const interval = setInterval(() => {
      const latestHash = window.location.hash.slice(1);
      if (latestHash !== currentHash) {
        currentHash = latestHash;
        if (latestHash) {
          switchToTab(latestHash);
        } else {
          setActiveTab(0);
        }
      }
    }, 100);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearInterval(interval);
    };
  }, [pathname, tabs]);

  return (
    <section id="models-section" className={`${styles.sectionPaddingX} ${styles.sectionPaddingY} bg-white w-full max-w-full overflow-x-hidden`}>
      <div className="mb-6 text-center">
        <h2 className={`${styles.h2} font-semibold text-[#1E274F] leading-tight font-outfit`}>{modelsSection.title}</h2>
      </div>
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                // First activate tab
                setActiveTab(index);
                // Update URL hash
                window.history.replaceState(null, '', `#${tab.id}`);
                
                // Wait for tab to be active, then scroll to models section
                setTimeout(() => {
                  const modelsSection = document.getElementById("models-section");
                  if (modelsSection) {
                    const headerHeight = 80; // Account for fixed header
                    const sectionTop = modelsSection.offsetTop;
                    window.scrollTo({
                      top: sectionTop - headerHeight,
                      behavior: "smooth"
                    });
                  }
                }, 300);
              }}
              className={`relative px-1 py-2 md:px-6 md:py-4 font-semibold font-outfit transition-all duration-300 ${activeTab === index ? "text-[#F05C22]" : "text-gray-600 hover:text-[#1E274F]"
                }`}
            >
              <span className="text-sm md:text-lg lg:text-xl xl:text-2xl">
                {tab.title}
              </span>

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
            id={tab.id}
            className={`transition-all duration-500 ${activeTab === index ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
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
