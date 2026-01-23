"use client";

import { styles } from "@/styles/style";
import Image from "next/image";
import { featuredBlogs } from "@/data";
import { SectionHeading } from "@/components/shared/headings";

const BlogFeatures = () => {
  return (
    <section className={`${styles.sectionPadding} pb-8 md:pb-12 lg:pb-16 xl:pb-20`}>
    <SectionHeading
      subtitle="Our Insights"
      title="Must-Read Articles"
    />
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 mb-8 md:mb-10 lg:mb-12">
        {featuredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative w-full h-[190px] md:h-[200px] xl:h-[240px] bg-gray-200 overflow-hidden">
              {/* Grey placeholder background - always visible as fallback */}
              <div className="absolute inset-0 bg-gray-200 z-0" />
              {/* Image overlay */}
              <div className="relative w-full h-full z-10">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  loading="lazy"
                  onError={(e) => {
                    // Hide image if it fails to load, showing grey placeholder
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <h3 className={`${styles.h6} font-semibold text-blue leading-tight font-outfit mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24] transition-all duration-300 line-clamp-3`}>
                {blog.title}
              </h3>

              {/* Author and Date */}
              <div className="flex items-center gap-2">
                <span className={`${styles.p4} text-gray-600 font-inter`}>
                  {blog.date} - <span className="text-accent font-medium">{blog.author}</span>  
                  </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-between mt-8 md:mt-10 lg:mt-12">
        {/* Back Button */}
        <button
          className="px-6 py-2 lg:py-3 rounded-lg font-semibold font-inter text-gray-600 border border-gray-500 transition-all duration-300 cursor-pointer hover:bg-gray-100 hover:border-gray-600 active:bg-gray-200"
        >
          Back
        </button>

        {/* Next Button */}
        <button 
          className="px-6 py-2 lg:py-3 rounded-lg font-semibold font-inter text-accent border border-orange-500 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#F05C22] hover:via-[#F58220] hover:to-[#EA4D24] hover:text-white hover:border-transparent active:opacity-90"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogFeatures;

