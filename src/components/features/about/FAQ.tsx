"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings/headings";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  link?: string;
  href?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer: "We provide end-to-end solutions ranging from strategy and design to development and automation, helping businesses streamline operations and scale efficiently.",
  },
  {
    id: 2,
    question: "Who are your typical clients?",
    answer: "Our clients range from startups and small businesses to large enterprises across various industries, including technology, healthcare, finance, and e-commerce.",
  },
  {
    id: 3,
    question: "How do you ensure quality in your projects?",
    answer: "We follow rigorous quality assurance processes, including code reviews, automated testing, and continuous monitoring to ensure high-quality deliverables.",
  },
  {
    id: 4,
    question: "What makes your company different from others?",
    answer: "We combine technical expertise with business acumen, delivering solutions that not only work flawlessly but also drive real business value and growth.",
  },
  {
    id: 5,
    question: "Do you customize solutions for each client?",
    answer: "Yes, we believe in tailored solutions. Every project is unique, and we work closely with clients to understand their specific needs and deliver customized solutions.",
  },
  {
    id: 6,
    question: "How do you handle security and compliance?",
    answer: "Security is our top priority. We implement industry best practices, regular security audits, and ensure compliance with relevant regulations and standards.",
  },
  {
    id: 7,
    question: "What does your process look like from start to finish?",
    answer: "Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support and maintenance.",
  },
  {
    id: 8,
    question: "How can we get started with you?",
    answer: "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your needs and provide a tailored proposal.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(0); // First item open by default

  const firstColumn = faqData.filter((_, i) => i % 2 === 0);
  const secondColumn = faqData.filter((_, i) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId((prev) => (prev === index ? null : index));
  };

  const renderDescription = (description: string, link?: string) => {
    return description.split("\n").map((line: string, i: number) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      // Handle bold text formatting (both markdown and HTML)
      let withBold = trimmedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Also ensure existing <strong> tags are preserved
      withBold = withBold.replace(/<strong>(.*?)<\/strong>/g, "<strong>$1</strong>");

      // Handle dash formatting for lists and make point names semibold
      const withDashSpan = withBold.replace(
        /^–\s?([^:]+):/,
        '<span class="text-zinc-800 font-semibold">–</span> <span class="font-semibold">$1:</span>'
      );

      return (
        <p
          key={i}
          className={`text-gray-700 mb-3 text-[15px] lg:text-[16px] xl:text-[17px] font-inter leading-relaxed [&_strong]:font-semibold`}
          dangerouslySetInnerHTML={{ __html: withDashSpan }}
        />
      );
    });
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className={`${styles.sectionPadding}`}>
        {/* Heading */}
          <SectionHeading
            subtitle="Got Questions?"
            title="Simple, Honest Answers"
          />

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="space-y-4 md:space-y-5 lg:space-y-6" key={columnIndex}>
              {column.map((item, index) => {
                const actualIndex = columnIndex === 0 ? index * 2 : index * 2 + 1;
                const isOpen = activeId === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`${
                      isOpen 
                        ? "border border-gray-200 rounded-lg shadow-lg" 
                        : "border-b border-gray-200"
                    } overflow-hidden transition-all duration-300 hover:shadow-md bg-white`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-4 lg:px-6 xl:px-8 py-3 lg:py-4 xl:py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-gray-200">
                        <span
                          className={`text-lg font-bold transition-all duration-300 ${
                            isOpen 
                              ? "rotate-180 bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]" 
                              : "rotate-0 text-gray-500"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                 
                      <span className={`${styles.p2} font-semibold text-[#1E274F] flex-1 transition-colors duration-200 group-hover:text-[#1E274F]/80`}>
                        {item.question}
                      </span>
                    </button>

                    {/* Answer - Only render if this specific item is open */}
                    {isOpen && (
                      <div className="px-4 lg:px-6 xl:px-8 pb-4 md:pb-5 bg-white border-t border-gray-100">
                        <div className="pt-4">
                          {renderDescription(item.answer, item.link)}
                          {item.link && (
                            <div className="mt-4">
                              <a 
                                href={item.href || "#"} 
                                className={`${styles.p2} inline-flex items-center underline text-[#1E274F] font-semibold hover:text-[#F05C22] transition-colors duration-200`}
                              >
                                {item.link}
                              </a>
                            </div>
                          )}
                        </div>
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

export default FAQ;

