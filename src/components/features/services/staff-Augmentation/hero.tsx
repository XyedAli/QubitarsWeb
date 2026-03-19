"use client";

import Image from "next/image";
import { getStaffAugmentationImages } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { useState } from "react";
import { Button } from "@/components/shared/ui";

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className={combine(" relative px-4 md:px-6 lg:px-8 xl:px-10 overflow-hidden py-8 lg:py-10 xl:py-11 mt-6 rounded-2xl", styles.sectionPadding)}>

      {/* Right Background Image - Hidden on mobile */}
      <div
        className="absolute inset-y-0 right-0 w-2/4 z-10 hidden md:block"
        style={{
          backgroundImage: "url('/assets/images/BG Image.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
        aria-label="Professional team collaboration"
      />
      {/* FULL SECTION OVERLAY */}
      <div
        className="absolute inset-0 z-0 w-full bg-blue"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Blue overlay background"
      />
      {/* CONTENT */}
      <div className={combine("relative z-30 grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center")}>
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className={combine("font-black leading-tight", styles.h2)}>
            STRENGTHEN YOUR TEAM WITH PROVEN TALENT
          </h1>
          <p className={combine("mt-4 md:mt-6 text-white", styles.p2)}>
            Bring in experienced professionals who seamlessly collaborate
            with your internal teams to deliver projects faster and more
            efficiently.
          </p>
          <Button href="/contact" variant="accent" size="lg" showArrow className="mt-6 md:mt-8">
            Build Your Team
          </Button>
        </div>

        {/* RIGHT FORM - Centered on mobile */}
        <div className={combine("flex justify-center md:ms-6")}>
          <div className="bg-white rounded-2xl shadow-xl p-6 xl:p-8 w-full max-w-md">

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name *" className="border-b border-gray-300 py-2 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Your email *" className="border-b border-gray-300 py-2 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />
            </div>
            <select
              className="w-full border-b border-gray-300 py-3 mt-2 lg:mt-4 xl:mt-6 outline-none focus:border-blue-500 transition-colors"
              style={{ color: selectedService ? '#374151' : '#9CA3AF' }}
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" className="text-gray-400" disabled>Select Service *</option>
              <option value="web-development" className="text-gray-700">Web Development</option>
              <option value="mobile-development" className="text-gray-700">Mobile Development</option>
              <option value="ui-design" className="text-gray-700">UI/UX Design</option>
              <option value="consulting" className="text-gray-700">Consulting</option>
            </select>
            <input type="text" placeholder="US +1 (xxx) xxx-xxxx" className="w-full border-b border-gray-300 py-3 mt-2 lg:mt-4 xl:mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors font-inter" />
            <textarea placeholder="Please describe your project *" className="w-full border-b border-gray-300 py-3 mt-2 lg:mt-4 xl:mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors resize-none font-inter" />
            <input type="text" placeholder="What is your budget? *" className="w-full border-b border-gray-300 py-3 mt-2 lg:mt-4 xl:mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors font-inter" />
            <Button href="/contact" variant="accent" size="lg" showArrow className="mt-6">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}