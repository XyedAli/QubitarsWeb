"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { styles } from "@/styles/style";
import { aboutImages } from "@/lib/assets/images";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative w-full overflow-hidden bg-gradient-to-br from-[#FAFBFC] via-white to-[#F5F7FA] h-screen max-h-[90vh] flex items-center ${styles.sectionPadding}`}>
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(30, 39, 79, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 39, 79, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#FC7E13]/4 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-1/4 -left-32 w-[550px] h-[550px] bg-[#1E274F]/4 rounded-full blur-[180px]"></div>
      </div>

      <div className={`relative z-10 ${styles.sectionPadding} w-full max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-accent to-accent"></div>
              <span className="text-accent text-xs font-inter font-bold tracking-[0.3em] uppercase">
                About Qubitars
              </span>
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent via-accent to-accent"></div>
            </div>

            {/* Main Heading */}
            <h1 className={`${styles.h1} font-bold text-blue font-outfit leading-[1.1] mb-6`}>
              We Transform{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]">
                Ideas Into
              </span>{" "}
              Digital Reality
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className={`${styles.p3} text-gray-800 leading-relaxed font-inter`}>
                At Qubitars, we're more than just a software development company. We're your strategic 
                technology partner, dedicated to crafting innovative solutions that drive business success.
              </p>
              <p className={`${styles.p3} text-gray-700 leading-relaxed font-inter`}>
                With over 15 years of experience, we've helped hundreds of businesses across the globe 
                leverage cutting-edge technology to achieve their goals.
              </p>
            </div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200/60">
              {[
                { number: "15+", label: "Years", desc: "Experience" },
                { number: "500+", label: "Projects", desc: "Delivered" },
                { number: "50+", label: "Clients", desc: "Global" },
                { number: "100+", label: "Team", desc: "Members" },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className={`${styles.h3} font-bold text-blue font-outfit mb-1 group-hover:text-accent transition-colors duration-300`}>
                    {item.number}
                  </div>
                  <div className={`${styles.p4} text-gray-900 font-semibold font-inter mb-0.5`}>
                    {item.label}
                  </div>
                  <div className={`${styles.p5} text-gray-500 font-inter`}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)]">
                <Image
                  src={aboutImages.heroBg || aboutImages.mission}
                  alt="Qubitars Team"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E274F]/5 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-accent/8 to-accent/3 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
