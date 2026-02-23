"use client";

import type { ElementType } from "react";
import { useState, useRef, useEffect } from "react";
import { styles, combine } from "@/styles/style";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/headings";
import { MoveUpRight, MoveRight } from "lucide-react";

import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiNginx,
} from "react-icons/si";
import {
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiPython,
  SiLangchain,
  SiHuggingface,
  SiScikitlearn,
  SiApachespark,
} from "react-icons/si";
import {
  SiAmazon,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import Button from "@/components/shared/ui/button/Button";
import {
  SiFigma,
  SiAdobexd,
  SiFramer,
  SiSketch,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMiro,
  SiNotion,
} from "react-icons/si";

export default function Home() {
  const tabs = [
    "AI & ML Development",
    "Digital Transformation",
    "Product Design",
    "DevOps",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [underlineAnimate, setUnderlineAnimate] = useState(true);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const prevActiveTabRef = useRef(activeTab);

  const techCards: Record<string, { name: string; icon: ElementType }[]> = {
    "AI & ML Development": [
       { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Python", icon: SiPython },
  { name: "LangChain", icon: SiLangchain },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Apache Spark", icon: SiApachespark },
    ],
    "Digital Transformation": [
     { name: "AWS", icon: SiAmazon },
  { name: "Azure", icon: SiMongodb },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
    ],
    "Product Design": [
      { name: "Figma", icon: SiFigma },
  { name: "Adobe XD", icon: SiAdobexd },
  { name: "Framer", icon: SiFramer },
  { name: "Sketch", icon: SiSketch },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Miro", icon: SiMiro },
  { name: "Notion", icon: SiNotion },
    ],
    "DevOps": [
      { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "Prometheus", icon: SiPrometheus },
  { name: "Nginx", icon: SiNginx },
    ],
  };

  const moveUnderline = (index: number) => {
    const tabEl = tabsRef.current[index];
    if (!tabEl) return;

    setUnderlineStyle({
      left: tabEl.offsetLeft,
      width: tabEl.offsetWidth,
    });
  };

  useEffect(() => {
    const prev = prevActiveTabRef.current;
    prevActiveTabRef.current = activeTab;

    const isWrapAround = prev === tabs.length - 1 && activeTab === 0;

    if (isWrapAround) {
      setUnderlineAnimate(false);

      const firstTabEl = tabsRef.current[0];
      if (firstTabEl) {
        setUnderlineStyle({ left: firstTabEl.offsetLeft, width: firstTabEl.offsetWidth });
      }

      let id2: number | null = null;
      const id1 = requestAnimationFrame(() => {
        id2 = requestAnimationFrame(() => setUnderlineAnimate(true));
      });

      return () => {
        cancelAnimationFrame(id1);
        if (id2 !== null) cancelAnimationFrame(id2);
      };
    }

    moveUnderline(activeTab);
  }, [activeTab, tabs.length]);

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
    <section className={combine(styles.sectionPaddingY, styles.sectionPadding)}>
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
            <div className="relative flex flex-wrap gap-3 mb-8">
              <span className="absolute bottom-0 left-0 w-[728px] h-[2px] bg-gray-300 rounded-full" />

              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                  onClick={() => handleTabClick(index)}
                  className={`px-4 py-3 text-lg transition-all duration-300 ${
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
                  transition: underlineAnimate
                    ? "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : "none",
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCards[tabs[activeTab]]?.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.name}
                    className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                  >
                    <Icon className="mb-3 h-10 w-10 text-blue" />
                    <p className="font-semibold text-blue-700 text-center">{card.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
