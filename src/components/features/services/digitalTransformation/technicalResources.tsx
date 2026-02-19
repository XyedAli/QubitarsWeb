"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { styles, combine } from "@/styles/style";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/headings";
import { MoveUpRight, MoveRight } from "lucide-react";
import Button from "@/components/shared/ui/button/Button";

export default function Home() {
  const tabs = [
    "Cloud Platforms",
    "Data Storage",
    "Data Visualization",
    "Data Integration",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const techCards: Record<string, { name: string; image: string; alt: string }[]> = {
    "Cloud Platforms": [
      { name: "Microsoft Azure", image: "/images/microsoft-azure-logo.png", alt: "Microsoft Azure" },
      { name: "AWS", image: "/images/aws-logo.png", alt: "AWS" },
    ],
    "Data Storage": [
      { name: "MySQL", image: "/images/mysql-logo.png", alt: "MySQL" },
      { name: "PostgreSQL", image: "/images/postgresql-logo.png", alt: "PostgreSQL" },
    ],
    "Data Visualization": [
      { name: "Tableau", image: "/images/tableau-logo.png", alt: "Tableau" },
      { name: "Power BI", image: "/images/powerbi-logo.png", alt: "Power BI" },
    ],
    "Data Integration": [
      { name: "Apache NiFi", image: "/images/nifi-logo.png", alt: "Apache NiFi" },
      { name: "Talend", image: "/images/talend-logo.png", alt: "Talend" },
    ],
  };

  const moveUnderline = (index: number) => {
    const tabEl = tabsRef.current[index];
    if (!tabEl) return;

    // Always start width from 0 for new tab, so it grows forward
    setUnderlineStyle({ left: tabEl.offsetLeft, width: 0 });

    setTimeout(() => {
      setUnderlineStyle({ left: tabEl.offsetLeft, width: tabEl.offsetWidth });
    }, 50); // small delay to trigger animation
  };

  useEffect(() => {
    moveUnderline(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className={combine(styles.sectionPadding, "pb-16 lg:pb-20 xl:pb-24")}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <div className="col-span-5">
            <SectionHeading subtitle="Tools & Technologies" title="Utilizing Strong Technical Resources" />
            <p className="text-blue text-lg leading-relaxed -mt-8">
              Using a neutral and agnostic methodology, we choose tools that align perfectly with your organization’s infrastructure, scalability goals, and performance needs.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group flex items-center">
                  Let’s Talk Design
                  <div className="relative flex items-center justify-center ml-3">
                    <MoveUpRight className="w-4 h-4 text-white transition-opacity duration-300 group-hover:opacity-0" />
                    <MoveRight className="w-4 h-4 text-white absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div className="col-span-7">
            <div className="relative flex flex-wrap gap-4 mb-8">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300 rounded-full" />

              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  ref={(el) => (tabsRef.current[index] = el)}
                  onClick={() => handleTabClick(index)}
                  className={`px-5 py-3 text-lg transition-all duration-300 ${
                    activeTab === index ? "text-blue font-extrabold" : "text-blue opacity-70"
                  }`}
                >
                  {tab}
                </button>
              ))}

              {/* Grow-from-left blue line */}
              <span
                className="absolute bottom-0 h-[2px] bg-blue rounded-full"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                  transition: "width 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {techCards[tabs[activeTab]]?.map((card) => (
                <div
                  key={card.name}
                  className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <Image src={card.image} alt={card.alt} width={60} height={60} className="mb-3 object-contain" />
                  <p className="font-semibold text-blue-700 text-center">{card.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
