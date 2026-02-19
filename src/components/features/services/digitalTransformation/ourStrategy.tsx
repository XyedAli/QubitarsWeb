"use client";

import Image from "next/image";
import Link from "next/link";
import { styles } from "@/styles/style";
import Button from "@/components/shared/ui/button/Button";
import { MoveUpRight, MoveRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const OurStrategy = () => {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger animation only after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-50px 0px -50px 0px" // Start animation slightly before section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative min-h-[80vh] flex items-center ${styles.sectionPadding}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-24">

        {/* Left Column - Text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-[28px] md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Beautifully Crafted Products Backed by Research and Strategy
          </h1>

          <div className="text-blue text-lg leading-relaxed mb-8 space-y-4">
            <p>
              We build intelligent, high-impact websites and digital products for startups, businesses, and enterprises across the globe.
            </p>
            <p>
              Our hands-on team works closely with you from strategy to final delivery—ensuring each solution is tailored, scalable, and built to perform.
            </p>
            <p>
              From seamless UI/UX design and modern frameworks to smart integrations, multilingual capabilities, and fast, responsive builds—we cover it all.
            </p>
          </div>

          <Link href="/contact">
            <Button
              variant="accent"
              size="lg"
              className="group flex items-center"
            >
              Let’s Talk Design
              <div className="relative flex items-center justify-center ml-3">
                <MoveUpRight className="w-4 h-4 text-white transition-opacity duration-300 group-hover:opacity-0" />
                <MoveRight className="w-4 h-4 text-white absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src="/assets/images/img1.jpg"
            alt="Strategy Illustration"
            fill
            className={`object-cover object-center rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
              mounted && isInView 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 -translate-y-20 scale-95"
            }`}
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default OurStrategy;
