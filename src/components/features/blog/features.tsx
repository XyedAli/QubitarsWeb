"use client";

import { styles } from "@/styles/style";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
}

// Sample blog data - replace with actual data source
const featuredBlogs: BlogPost[] = [
  {
    id: 1,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/placeholder-blog.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/placeholder-blog.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/placeholder-blog.jpg", // Replace with actual image path
  },
];

const BlogFeatures = () => {
  return (
    <section className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
      {/* Section Heading */}
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit`}>
          Featured <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] underline">Blogs</span>
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featuredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative w-full h-[240px] md:h-[260px] lg:h-[280px] bg-gray-200 overflow-hidden">
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
            <div className="p-5 md:p-6">
              {/* Title */}
              <h3 className={`${styles.h5} font-semibold text-blue leading-tight font-outfit mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24] transition-all duration-300 line-clamp-3`}>
                {blog.title}
              </h3>

              {/* Author and Date */}
              <div className="flex items-center gap-2">
                <span className={`${styles.p4} text-gray-600 font-inter`}>
                  {blog.author} - {blog.date}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogFeatures;

