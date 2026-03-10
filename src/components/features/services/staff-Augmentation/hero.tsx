"use client";

import Image from "next/image";
import { getStaffAugmentationImages } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { useState } from "react";

export default function HeroSection() {
  const staffImages = getStaffAugmentationImages();
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className={combine(" relative px-10 overflow-hidden py-12 mx-16 mt-6 rounded-2xl" )}>

      {/* Right Background Image */}
      <div
        className="absolute inset-y-0 right-0 w-2/4 z-10"
        style={{
          backgroundImage: "url('/assets/images/BG Image.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />

      {/* FULL SECTION OVERLAY */}
      <div
        className="absolute inset-0 z-0 w-full bg-blue" 
        style={{
          backgroundImage: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT */}
      <div className={combine("relative z-30 grid lg:grid-cols-2 gap-12 items-center")}>

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className={combine("font-black leading-tight", styles.h2)}>
            STRENGTHEN YOUR TEAM <br /> WITH PROVEN TALENT
          </h1>

          <p className={combine("mt-6 text-white", styles.p2)}>
            Bring in experienced professionals who seamlessly collaborate
            with your internal teams to deliver projects faster and more
            efficiently.
          </p>

          <button className={combine("mt-8", styles.ctaButtonOrange)}>
            Build Your Team →
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className={combine("flex justify-center ms-6")}>
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
            
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name *" className="border-b border-gray-300 py-2 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Your email *" className="border-b border-gray-300 py-2 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />
            </div>

            <select 
              className="w-full border-b border-gray-300 py-3 mt-6 outline-none focus:border-blue-500 transition-colors" 
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

            <input type="text" placeholder="US +1 (xxx) xxx-xxxx" className="w-full border-b border-gray-300 py-3 mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />

            <textarea placeholder="Please describe your project *" className="w-full border-b border-gray-300 py-3 mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors resize-none" />

            <input type="text" placeholder="What is your budget? *" className="w-full border-b border-gray-300 py-3 mt-6 outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition-colors" />

            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Submit →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}