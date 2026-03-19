"use client";

import { useState, useRef, useEffect } from "react";
import { styles, combine } from "@/styles/style";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";
import { tabs, techCards } from "@/data/digital-transformation/chooseQubitars";
import TechTabsSectionLG from "./technicalResourcesLG";

export default function TechTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [underlineAnimate, setUnderlineAnimate] = useState(true);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const prevActiveTabRef = useRef(activeTab);

  const moveUnderline = (index: number) => {
    const tabEl = tabsRef.current[index];
    if (!tabEl) return;

    setUnderlineStyle({
      left: tabEl.offsetLeft,
      width: tabEl.offsetWidth,
    });
  };

  useEffect(() => {
    const prev = prevActiveTabRef.current;
    prevActiveTabRef.current = activeTab;

    const isWrapAround = prev === tabs.length - 1 && activeTab === 0;

    if (isWrapAround) {
      setUnderlineAnimate(false);

      const firstTabEl = tabsRef.current[0];
      if (firstTabEl) {
        setUnderlineStyle({ left: firstTabEl.offsetLeft, width: firstTabEl.offsetWidth });
      }

      let id2: number | null = null;
      const id1 = requestAnimationFrame(() => {
        id2 = requestAnimationFrame(() => setUnderlineAnimate(true));
      });

      return () => {
        cancelAnimationFrame(id1);
        if (id2 !== null) cancelAnimationFrame(id2);
      };
    }

    moveUnderline(activeTab);
  }, [activeTab, tabs.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className={combine(styles.sectionPaddingY, styles.sectionPadding)}>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-5">
              <SectionHeading subtitle="Tools & Technologies" title="Utilizing Strong Technical Resources" />
              <p className="text-blue text-lg leading-relaxed -mt-2 md:-mt-3 xl:-mt-8">
                Using a neutral and agnostic methodology, we choose tools that align perfectly with your organization's infrastructure, scalability goals, and performance needs.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="accent" size="lg" showArrow>
                  Let's Talk Design
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7">
              {/* 🔵 MD & XL → STATIC TABS */}
              <div className="hidden md:block lg:hidden xl:block">
                  <div className="relative flex flex-wrap gap-0 xl:gap-4 mb-8">
                    <span className="absolute bottom-0 left-0 w-[727px] xl:w-[775px] h-[2px] bg-gray-300 rounded-full " />

                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        ref={(el) => {
                          tabsRef.current[index] = el;
                        }}
                        onClick={() => handleTabClick(index)}
                        className={`px-5 py-3 text-lg transition-all duration-300 ${activeTab === index
                            ? "text-blue font-extrabold"
                            : "text-blue opacity-70"
                          }`}
                      >
                        {tab}
                      </button>
                    ))}

                    <span
                      className="absolute bottom-0 h-[2px] bg-blue rounded-full"
                      style={{
                        left: underlineStyle.left,
                        width: underlineStyle.width,
                        transition: underlineAnimate
                          ? "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                          : "none",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    {techCards[tabs[activeTab]]?.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={card.name}
                          className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                          <Icon className="mb-3 h-10 w-10 text-blue" />
                          <p className="font-semibold text-blue-700 text-center">
                            {card.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 🔵 LG & MOBILE → SLIDER */}
                <div className="block md:hidden lg:block xl:hidden">
                  <TechTabsSectionLG />
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
  );
}
