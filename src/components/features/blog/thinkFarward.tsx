"use client";

import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";
import { featuredPost, sidebarPosts } from "@/data";
import { SectionHeading } from "@/components/shared/headings";

const ThinkForward = () => {
  return (
    <section className={`${styles.sectionPadding} pt-8 md:pt-12 lg:pt-16 xl:pt-20`}>
      {/* THINK FORWARD Section */}
      <SectionHeading
        subtitle="Think Forward"
        title="Thinking Ahead in Tech"
      />

      {/* Main Blog Post and Sidebar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-3 lg:gap-5 xl:gap-8 mb-6 md:mb-8 lg:mb-10 border-b border-gray-200 pb-5 md:pb-6 lg:pb-8">
        {/* Main Featured Post */}
        <div className="md:col-span-6 lg:col-span-7">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="relative w-full h-[350px] md:h-[355px] lg:h-[445px] xl:h-[483px] rounded-xl overflow-hidden mb-4 lg:mb-6">
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
        <div className="md:col-span-6 lg:col-span-5 space-y-4 lg:space-y-6">
          {sidebarPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={`group block pb-4 lg:pb-6 ${
                index !== sidebarPosts.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex flex-row gap-3 lg:gap-4 items-center">
                {/* Thumbnail Image */}
                <div className="relative w-35 lg:w-40 xl:w-44 h-24 lg:h-29 xl:h-32 rounded-lg overflow-hidden flex-shrink-0">
                 
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
                  <h4 className={`${styles.p1} font-semibold text-blue leading-tight font-outfit mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F05C22] group-hover:via-[#F58220] group-hover:to-[#EA4D24] transition-all duration-300 line-clamp-2`}>
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 lg:gap-2 flex-wrap">
                    <span className={`text-[12px] lg:text-[12px] xl:text-[14px] text-gray-600 font-inter`}>
                      {post.date}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className={`text-[12px] lg:text-[12px] xl:text-[14px] font-semibold text-[#F05C22] font-outfit`}>
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
