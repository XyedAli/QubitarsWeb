"use client";

import { styles } from "@/styles/style";
import Image from "next/image";
import { featuredBlogs } from "@/data";

const BlogFeatures = () => {
  return (
    <section className={`${styles.sectionPadding} pb-12 md:pb-16 lg:pb-20`}>
      {/* Section Heading */}
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit`}>
          Featured <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] underline">Blogs</span>
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
        {featuredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative w-full h-[240px] md:h-[260px] lg:h-[240px] bg-gray-200 overflow-hidden">
              {/* Grey placeholder background - always visible as fallback */}
              <div className="absolute inset-0 bg-gray-200 z-0" />
              {/* Image overlay */}
              <div className="relative w-full h-full z-10">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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
          className="px-6 py-3 rounded-lg font-semibold font-inter text-gray-600 border border-gray-500 transition-all duration-300 cursor-pointer hover:bg-gray-100 hover:border-gray-600 active:bg-gray-200"
        >
          Back
        </button>

        {/* Next Button */}
        <button 
          className="px-6 py-3 rounded-lg font-semibold font-inter text-accent border border-orange-500 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#F05C22] hover:via-[#F58220] hover:to-[#EA4D24] hover:text-white hover:border-transparent active:opacity-90"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogFeatures;

