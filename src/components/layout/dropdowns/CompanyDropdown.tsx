"use client";
import Image from "next/image";
import { companyImages } from "@/lib/assets/images";
import Link from "next/link";
import {Building2, Lightbulb, BriefcaseBusiness} from "lucide-react";
import { CustomSlider } from "@/components/shared/ui";
import { companyData } from "@/data";
import { styles, combine } from "@/styles/style";

// Company dropdown component
export const CompanyDropdown = () => {

  const sliderSettings = {
    fade: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="fixed inset-x-0 top-[97.5px] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="mx-4 lg:mx-8 xl:mx-16 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[42%_23%_32%] lg:grid-cols-[41%_25%_28%] xl:grid-cols-[38%_25%_28%] gap-4 lg:gap-7 xl:gap-12 w-full">
            {/* Left column - testimonials and stats */}
            <div className="space-y-4">
              {/* Testimonial slider */}
              <div className="overflow-hidden relative">
                <CustomSlider 
                  settings={sliderSettings}
                  showArrows={true}
                  arrowPosition="bottom-right"
                >
                  {companyData.filter(item => item.type === "testimonialSlide").map((slide) => (
                    <div key={slide.id}>
                      <h3 className="font-extrabold text-[19px] w-[22rem] text-[#1E274F] pt-[30px]">
                        {slide.title}
                      </h3>
                      <div className={combine(styles.flexBetween, "mt-4")}>
                        <div className="bg-white px-[10px] py-[5px]">
                          <Image src={slide.logo!} alt={slide.logoAlt!} width={72} height={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </CustomSlider>
              </div>
              {/* Testimonial quote */}
              <div className={styles.flexCol}>
              <p className="text-black font-medium text-sm">
                  &ldquo;Qubitars is an integral part of our team and we probably wouldn&apos;t be here today without them, Some of their team has worked with us for 5-8 years and we&apos;ve built a trusted business relationship.&rdquo;
                </p>
                <div className={combine(styles.flexitems, "gap-3 mt-3")}>
                  <Image src={companyImages.jake} alt="Logo PayPerks" width={60} height={30} className="rounded-sm hover:opacity-90 transition-opacity" />
                  <span className="text-accent font-bold text-md">
                    Jake Peters <span className="text-black font-semibold text-sm">/ CEO & CO-Founder, PayPerks</span>
                  </span>
                </div>
                {/* Statistics Values */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {companyData.filter(item => item.type === "statistic").map((stat) => {
                    const IconComponent = stat.icon!;
                    return (
                      <div key={stat.id} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <IconComponent width={24} height={24} className="text-accent" />
                          <span className={combine(styles.p5, "text-[#1A1A1A] font-bold")}>{stat.value}</span>
                        </div>
                        <p className={combine(styles.p5, "text-[#1A1A1A] font-bold")}>{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle column - Company links */}
            <div className="space-y-3">
              <div className={combine(styles.flexitems, "gap-1 lg:gap-2 text-gray-600 cursor-pointer group/item")}>
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <Building2 width={20} height={20} className="text-[#1E274F]" />
                </div>
                <h4 className="font-extrabold text-accent">Company</h4>
              </div>
              <div className={combine(styles.flexCol, "space-y-3 border-b border-[#CCCCCC] pb-6")}>
                {companyData.filter(item => item.type === "companyLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Inside Qubitars section */}
              <div className={combine(styles.flexCol, "space-y-3 border-b border-[#CCCCCC] pb-6")}>
                <div className={combine(styles.flexitems, "gap-0 lg:gap-2 text-gray-600 cursor-pointer group/item")}>
                  <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Lightbulb width={20} height={20} className="text-[#1E274F]" />
                  </div>
                  <h4 className="font-bold text-[15px] lg:text-lg text-accent pb-1">Inside Qubitars</h4>
                </div>
                {companyData.filter(item => item.type === "insideQubitarsLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Right column - Careers and blogs */}
            <div className="space-y-3">
              <div className={combine(styles.flexitems, "gap-1 lg:gap-2 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item")}>
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <BriefcaseBusiness width={20} height={20} className="text-[#1E274F]" />
                </div>
                <h4 className="font-bold text-base lg:text-lg text-accent">Careers</h4>
              </div>
              <div className={combine(styles.flexCol, "space-y-3 border-b border-[#CCCCCC] pb-6 mr-4 lg:mr-2 xl:mr-0")}>
                {companyData.filter(item => item.type === "careersLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Trending blogs */}
              <div className={combine(styles.flexCol, "space-y-3 border-b border-[#CCCCCC] pb-5 max-w-lg")}>
                <div className={combine(styles.flexitems, "gap-2 text-gray-600")}>
                <h4 className="font-bold text-base lg:text-lg text-accent pb-1">Trending Blogs</h4>
                </div>
                <div className={combine(styles.flexCol, "space-y-3")}>
                  {companyData.filter(item => item.type === "blogPost").map((blog) => (
                    <div key={blog.id} className={combine(styles.flexitems, "gap-2 hover:bg-gray-100 rounded-lg p-1 transition-colors cursor-pointer")}>
                      <Image src={blog.image!} alt={blog.alt!} width={80} height={80} className="rounded w-18 h-14 lg:w-26 lg:h-17 object-cover flex-shrink-0" />
                      <p className="text-xs xl:text-sm text-black font-medium">{blog.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Social links */}
              <div className={combine(styles.flexCol, "space-y-3")}>
                <h3 className={combine(styles.p4, "font-semibold text-accent")}>Find us on:</h3>
                <div className={combine(styles.flexitems, "gap-3")}>
                  {companyData.filter(item => item.type === "socialLink").map((social) => {
                    const IconComponent = social.icon!;
                    return (
                      <Link key={social.id} href={social.href!} target="_blank" rel="noopener noreferrer">
                        <IconComponent width={20} height={20} className="text-black hover:text-accent transition-colors duration-300 cursor-pointer" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};