"use client";

import { useRef } from "react";
import Image from "next/image";
import { companyImages } from "@/../public/assets/images";
import Link from "next/link";
import {
  Building2, Lightbulb, BriefcaseBusiness, ArrowLeft, ArrowRight
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { companyData } from "@/data/Navbar";

export const Company = () => {

  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "linear"
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div className="fixed inset-x-0 top-[93.5px] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="mx-4 lg:mx-8 xl:mx-16 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[41%_1fr] lg:grid-cols-[41%_25%_28%] gap-6 xl:gap-12 w-full">
            <div className="space-y-4">
              <div className="overflow-hidden relative">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {companyData.filter(item => item.type === "testimonialSlide").map((slide) => (
                    <div key={slide.id}>
                      <h3 className="font-extrabold text-[19px] w-[22rem] text-[#1E274F] pt-[30px]">
                        {slide.title}
                      </h3>
                      <div className="flex justify-between mt-4">
                        <div className="bg-white px-[10px] py-[5px]">
                          <Image src={slide.logo!} alt={slide.logoAlt!} width={72} height={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="absolute right-0 bottom-1 flex gap-1 z-10">
                  <button onClick={handlePrevSlide} className="cursor-pointer hover:scale-110 transition-transform">
                    <ArrowLeft width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
                  </button>
                  <button onClick={handleNextSlide} className="cursor-pointer hover:scale-110 transition-transform">
                    <ArrowRight width={18} height={18} className="opacity-90 text-[#1E274F] hover:text-accent" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-black font-medium text-sm">
                  "Qubitars is an integral part of our team and we probably wouldn't be here today without them, Some of their team has worked with us for 5-8 years and we've built a trusted business relationship."
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <Image src={companyImages.jake} alt="Logo PayPerks" width={60} height={30} className="rounded-sm hover:opacity-90 transition-opacity" />
                  <span className="text-accent font-bold text-md">
                    Jake Peters <span className="text-black font-semibold text-sm">/ CEO & CO-Founder, PayPerks</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {companyData.filter(item => item.type === "statistic").map((stat) => {
                    const IconComponent = stat.icon!;
                    return (
                      <div key={stat.id} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <IconComponent width={24} height={24} className="text-accent" />
                          <span className="text-[#1A1A1A] font-bold">{stat.value}</span>
                        </div>
                        <p className="text-[#1A1A1A] font-bold text-sm">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:contents gap-6 xl:gap-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 cursor-pointer group/item">
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <Building2 width={20} height={20} className="text-[#1E274F]" />
                </div>
                <h3 className="font-extrabold text-accent">Company</h3>
              </div>
              <div className="flex flex-col space-y-3 border-b border-[#CCCCCC] pb-6">
                {companyData.filter(item => item.type === "companyLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-3 border-b border-[#CCCCCC] pb-6">
                <div className="flex items-center gap-2 text-gray-600 cursor-pointer group/item">
                  <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                    <Lightbulb width={20} height={20} className="text-[#1E274F]" />
                  </div>
                  <h3 className="font-bold text-lg text-accent pb-1">Inside Qubitars</h3>
                </div>
                {companyData.filter(item => item.type === "insideQubitarsLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 hover:translate-x-2 transition-all duration-300 cursor-pointer group/item">
                <div className="p-1 rounded-lg group-hover/item:bg-blue-100 transition-colors duration-300">
                  <BriefcaseBusiness width={20} height={20} className="text-[#1E274F]" />
                </div>
                <h3 className="font-bold text-lg text-accent">Careers</h3>
              </div>
              <div className="flex flex-col space-y-3 border-b border-[#CCCCCC] pb-6">
                {companyData.filter(item => item.type === "careersLink").map((link) => (
                  <Link key={link.id} href={link.href!} className="hover:text-accent text-[#1E274F] font-medium text-sm hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-3 border-b border-[#CCCCCC] pb-5 max-w-lg">
                <div className="flex items-center gap-2 text-gray-600">
                  <h3 className="font-bold text-lg text-accent pb-1">Trending Blogs</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  {companyData.filter(item => item.type === "blogPost").map((blog) => (
                    <div key={blog.id} className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1 transition-colors cursor-pointer">
                      <Image src={blog.image!} alt={blog.alt!} width={80} height={80} className="rounded" />
                      <p className="text-xs xl:text-sm text-black font-medium">{blog.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-base font-semibold text-accent">Find us on:</h3>
                <div className="flex items-center gap-3">
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
      </div>
    </>
  );
};