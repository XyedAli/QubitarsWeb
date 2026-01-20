"use client";

import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";
import { featuredPost, sidebarPosts } from "@/data";

const ThinkForward = () => {
  return (
    <section className={`${styles.sectionPadding} pt-12 md:pt-16 lg:pt-20`}>
      {/* THINK FORWARD Section */}
      <div className="mb-8 md:mb-12 lg:mb-10">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-10 border-b border-gray-200 pb-12 md:pb-16 lg:pb-8">
        {/* Main Featured Post */}
        <div className="lg:col-span-7">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[480px] rounded-xl overflow-hidden mb-4 md:mb-6">
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
              {/* <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                {featuredPost.overlayText && (
                  <p className={`${styles.h6} text-[#7DD3FC] font-semibold mb-2 md:mb-3 uppercase tracking-wider font-outfit`}>
                    {featuredPost.overlayText}
                  </p>
                )}
                <h3 className={`${styles.h2} font-bold text-white leading-tight font-outfit line-clamp-3`}>
                  {featuredPost.title}
                </h3>
              </div> */}
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
        <div className="lg:col-span-5 space-y-4 md:space-y-6">
          {sidebarPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={`group block pb-4 md:pb-6 ${
                index !== sidebarPosts.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex flex-row gap-4 items-center">
                {/* Thumbnail Image */}
                <div className="relative w-32 md:w-40 lg:w-44 h-32 md:h-40 lg:h-30 rounded-lg overflow-hidden flex-shrink-0">
                 
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
                <div className="flex-1 flex flex-col justify-start">
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
    </section>
  );
};

export default ThinkForward;
