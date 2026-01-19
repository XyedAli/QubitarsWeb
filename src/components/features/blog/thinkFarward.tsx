"use client";

import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  overlayText?: string;
}

// Sample blog data - replace with actual data source
const featuredPost: BlogPost = {
  id: 1,
  title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
  date: "Jan 10, 2026",
  category: "Artificial Intelligence",
  image: "/images/blog/ai-impact.jpg", // Replace with actual image path
  overlayText: "THE AI IMPACT",
};

const sidebarPosts: BlogPost[] = [
  {
    id: 2,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/images/blog/ai-impact.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/images/blog/ai-impact.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/images/blog/ai-impact.jpg", // Replace with actual image path
  },
];

const ThinkForward = () => {
  return (
    <section className={`${styles.sectionPadding} py-12 md:py-16 lg:py-20`}>
      {/* THINK FORWARD Section */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h3 className={`${styles.h6} font-semibold text-[#F05C22] uppercase tracking-wider mb-2 md:mb-3 font-outfit`}>
          THINK FORWARD
        </h3>
        <h2 className={`${styles.h1} font-bold text-blue leading-tight font-outfit`}>
          Thinking Ahead in{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Tech
          </span>
        </h2>
      </div>

      {/* Main Blog Post and Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
        {/* Main Featured Post */}
        <div className="lg:col-span-8">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden mb-4 md:mb-6">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-200 z-0" />
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
              
              {/* Overlay Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                {featuredPost.overlayText && (
                  <p className={`${styles.h6} text-[#7DD3FC] font-semibold mb-2 md:mb-3 uppercase tracking-wider font-outfit`}>
                    {featuredPost.overlayText}
                  </p>
                )}
                <h3 className={`${styles.h2} font-bold text-white leading-tight font-outfit line-clamp-3`}>
                  {featuredPost.title}
                </h3>
              </div>
            </div>

            {/* Post Meta Below Image */}
            <div>
              <h3 className={`${styles.h4} font-bold text-blue mb-2 md:mb-3 leading-tight font-outfit group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24] transition-all duration-300`}>
                {featuredPost.title}
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`${styles.p4} text-gray-600 font-inter`}>
                  {featuredPost.date}
                </span>
                <span className="text-gray-400">|</span>
                <span className={`${styles.p4} font-semibold text-[#F05C22] font-outfit`}>
                  {featuredPost.category}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Sidebar Posts */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          {sidebarPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block"
            >
              <div className="flex flex-col md:flex-row lg:flex-col gap-4">
                {/* Thumbnail Image */}
                <div className="relative w-full md:w-32 lg:w-full h-[200px] md:h-32 lg:h-[180px] rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gray-200 z-0" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={`${styles.h6} font-semibold text-blue leading-tight font-outfit mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24] transition-all duration-300 line-clamp-2`}>
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`${styles.p5} text-gray-600 font-inter`}>
                      {post.date}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className={`${styles.p5} font-semibold text-[#F05C22] font-outfit`}>
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ALL BLOGS Section */}
      <div className="mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 border-t border-gray-200">
        <h3 className={`${styles.h1} font-bold text-blue leading-tight font-outfit mb-2 md:mb-3`}>
          ALL BLOGS
        </h3>
        <h2 className={`${styles.h1} font-bold text-blue leading-tight font-outfit`}>
          Thinking Ahead in{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
            Tech
          </span>
        </h2>
      </div>
    </section>
  );
};

export default ThinkForward;
