"use client";

import { styles } from "@/styles/style";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  count: number;
}

// Sample category data - replace with actual data source
const categories: Category[] = [
  { id: 1, name: "AI Consultation", count: 28 },
  { id: 2, name: "AI Development & Integration", count: 11 },
  { id: 3, name: "Generative AI Solutions", count: 8 },
  { id: 4, name: "UI / UX Design", count: 10 },
  { id: 5, name: "Custom Software Development", count: 2 },
  { id: 6, name: "Web App Development", count: 15 },
  { id: 7, name: "AI Agent", count: 5 },
  { id: 8, name: "AI Workflow Automation", count: 12 },
];

const BlogCategories = () => {
  // Pattern: White, Orange, White, Orange, Orange, White, Orange, White
  const getCardStyle = (index: number) => {
    const isOrange = [1, 3, 4, 6].includes(index % 8); // Cards at positions 1, 3, 4, 6 (0-indexed: 1, 3, 4, 6)
    return isOrange;
  };

  return (
    <section className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
      {/* Section Heading */}
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit relative inline-block`}>
          All <span className="relative">
            Categories
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]"></span>
          </span>
        </h2>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category, index) => {
          const isOrange = getCardStyle(index);
          return (
            <div
              key={category.id}
              className={`rounded-xl p-6 md:p-8 lg:p-10 relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group min-h-[140px] md:min-h-[160px] lg:min-h-[180px] ${
                isOrange
                  ? "bg-gradient-to-br from-[#F05C22] via-[#F58220] to-[#EA4D24]"
                  : "bg-white"
              }`}
            >
              {/* Bottom-Right Orange Element with curl effect - using actual image */}
              <div className="absolute bottom-6 right-0 w-40 h-40 md:w-44 md:h-44 lg:w-40 lg:h-40 pointer-events-none z-0 opacity-25">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/images/blogs/bimg5.png"
                    alt="Orange decorative element"
                    fill
                    className="object-contain"
                    style={{
                      transform: 'rotate(-15deg) translate(15%, 15%)',
                      transformOrigin: 'bottom right'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Category Name */}
                <h3 className={`${styles.h5} font-semibold leading-tight font-outfit mb-2 transition-all duration-300 ${
                  isOrange
                    ? "text-white group-hover:text-white/90"
                    : "text-blue group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24]"
                }`}>
                  {category.name}
                </h3>

                {/* Count */}
                <p className={`${styles.p4} font-inter ${
                  isOrange ? "text-white/80" : "text-gray-500"
                }`}>
                  ({category.count})
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Categories Button */}
      <div className="flex justify-center mt-8 md:mt-10 lg:mt-12">
        <button className="px-8 py-3 md:px-10 md:py-4 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-inter text-base md:text-lg">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default BlogCategories;

