"use client"

import Image from "next/image"
import { useState } from "react"

const tabs = [
  "Front-End",
  "Back-End",
  "Low/No Code",
  "DevOps",
  "Mobile",
  "AI & ML",
]

const tech = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "SaaS", icon: "/icons/sass.svg" },
  { name: "React JS", icon: "/icons/react.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "Meteor JS", icon: "/icons/meteor.svg" },
  { name: "Nuxt JS", icon: "/icons/nuxt.svg" },
  { name: "Node-js", icon: "/icons/node.svg" },
  { name: "Python", icon: "/icons/python.svg" },
]

export default function HireEngineers() {
  const [active, setActive] = useState("Front-End")

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <div className="bg-[#1e2b56] rounded-2xl p-12 flex gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold leading-snug mb-6">
            Hire Engineers <br />
            Experienced In The Tools <br />
            Your Project Relies On
          </h2>

          <button className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition">
            Get In Touch →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          {/* Tabs */}
          <div className="flex gap-6 mb-10 text-sm">
            {tabs.map((tab) => (
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
            {tech.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                />
                <p className="text-sm">{item.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}