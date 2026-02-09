"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings/headings";
import type { FAQSectionProps } from "@/lib/types/home";

export type { FAQSectionItem, FAQSectionProps } from "@/lib/types/home";

const DESC_P_CLASS = "text-gray-700 mb-3 text-[15px] lg:text-[16px] xl:text-[17px] font-inter leading-relaxed [&_strong]:font-semibold";
const DASH_REPLACE = /^–\s?([^:]+):/;
const DASH_HTML = '<span class="text-zinc-800 font-semibold">–</span> <span class="font-semibold">$1:</span>';

function formatAnswer(description: string) {
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) =>
      line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(DASH_REPLACE, DASH_HTML)
    );
}

const FAQSection = ({ data, subtitle, title }: FAQSectionProps) => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const columns = [data.filter((_, i) => i % 2 === 0), data.filter((_, i) => i % 2 !== 0)];

  const toggle = (index: number) => setActiveId((prev) => (prev === index ? null : index));

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className={styles.sectionPadding}>
        <SectionHeading subtitle={subtitle} title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {columns.map((column, colIdx) => (
            <div className="space-y-4 md:space-y-5 lg:space-y-6" key={colIdx}>
              {column.map((item, i) => {
                const idx = colIdx === 0 ? i * 2 : i * 2 + 1;
                const isOpen = activeId === idx;
                return (
                  <div
                    key={idx}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-md bg-white ${
                      isOpen ? "border border-gray-200 rounded-lg shadow-lg" : "border-b border-gray-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full px-4 lg:px-6 xl:px-8 py-3 lg:py-4 xl:py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-gray-200">
                        <span
                          className={`text-lg font-bold transition-all duration-300 ${
                            isOpen ? "rotate-180 bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]" : "rotate-0 text-gray-500"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      <span className={`${styles.p2} font-semibold text-[#1E274F] flex-1 transition-colors duration-200 group-hover:text-[#1E274F]/80`}>
                        {item.question}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 lg:px-6 xl:px-8 pb-2 lg:pb-5 bg-white border-t border-gray-100 pt-4">
                        {formatAnswer(item.answer).map((html, j) => (
                          <p key={j} className={DESC_P_CLASS} dangerouslySetInnerHTML={{ __html: html }} />
                        ))}
                        {item.link && (
                          <div className="mt-4">
                            <a
                              href={item.href ?? "#"}
                              className={`${styles.p2} inline-flex items-center underline text-[#1E274F] font-semibold hover:text-[#F05C22] transition-colors duration-200`}
                            >
                              {item.link}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
