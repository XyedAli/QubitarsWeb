"use client";

import { styles, combine } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import Button from "@/components/shared/ui/button/Button";
import Link from "next/link";
import { MoveUpRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function DevOpsHero() {
  return (
    <section className={combine(styles.sectionPaddingY, "bg-blue-600")}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - CONTENT */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                <span className="text-white font-medium text-sm">DevOps Excellence</span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <div className="text-blue-100 font-medium text-lg">DevOps Development</div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Accelerate Delivery with DevOps Excellence
                </h1>
              </div>

              {/* Description */}
              <p className="text-blue-100 text-lg leading-relaxed">
                Transform your development lifecycle with cutting-edge DevOps practices. 
                We build robust CI/CD pipelines, automate workflows, and implement 
                cloud-native solutions that drive innovation and scalability.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10x</div>
                  <div className="text-sm text-blue-100">Faster Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-sm text-blue-100">Cost Reduction</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" className="group flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50">
                    Start Your DevOps Journey
                    <div className="relative flex items-center justify-center ml-3">
                      <MoveUpRight className="w-4 h-4 text-blue-600 transition-opacity duration-300 group-hover:opacity-0" />
                      <MoveRight className="w-4 h-4 text-blue-600 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                {/* Placeholder for DevOps Image */}
                <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden bg-white/5">
                  <Image
                    src="/assets/images/devops-hero.jpg"
                    alt="DevOps Development"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  {/* Fallback if image doesn't exist */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">DevOps Solutions</h3>
                      <p className="text-blue-100">CI/CD • Automation • Cloud Native</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Live Monitoring</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Auto-Scaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}