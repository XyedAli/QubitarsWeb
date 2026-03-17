"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { combine, styles } from "@/styles/style"
import { techStackData } from '@/data/staff-augmentation';

export default function HireEngineers() {
  const [active, setActive] = useState("Front-End")

  return (
    <section className={combine("mx-auto", styles.sectionPaddingX, "pt-8")}>
      <div className={combine("bg-[#1e2b56] rounded-2xl p-5 md:p-7 lg:p-9 xl:p-12 lg:flex gap-7 xl:gap-16 items-center")}>
        
        {/* LEFT SIDE */}
        <div className="flex-1 text-white">
          <h2 className={combine("font-bold leading-tight mb-10 text-[28px] md:text-[32px] lg:text-[29px] xl:text-[40px] max-w-[38rem] xl:max-w-lg")}>
            Hire Engineers 
            Experienced In The Tools 
            Your Project Relies On
          </h2>
          <Link href="/contact">
            <button className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition hidden lg:block">
              Get In Touch →
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="">

          {/* Tabs */}
          <div className={combine("flex gap-3 md:gap-14 lg:gap-6 xl:gap-9 mb-10", styles.p4)}>
            {techStackData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`pb-2 ${
                  active === tab
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-5 gap-y-8 gap-x-8 text-center text-white">
            {techStackData.tech.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                />
                <p className={combine("text-sm", styles.p4)}>{item.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}