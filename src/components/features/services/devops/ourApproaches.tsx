'use client';

import Image from "next/image";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";
import { getDevOpsIcons } from "@/lib/assets/icons";
import { combine, styles } from '@/styles/style';

export default function OurAppraoches() {
  const devOpsImages = getDevOpsCloudinaryImages();
  const devOpsIcons = getDevOpsIcons();
  
  // Array of the three new icons to cycle through
  const approachIcons = [
    devOpsIcons.devicon7,
    devOpsIcons.devicon8,
    devOpsIcons.devicon9,
  ];
  
  const cards = [
    {
      title: 'Discovery & Strategy',
      desc: 'We evaluate your current architecture, delivery workflows, and business objectives to define a DevOps roadmap aligned with scalability, security, and release velocity.',
    },
    {
      title: 'Pipeline Engineering',
      desc: 'We design and implement automated CI/CD pipelines with integrated testing, artifact management, and environment orchestration for predictable, rapid deployments.',
    },
    {
      title: 'Platform Stability',
      desc: 'We establish centralized logging, performance monitoring, and intelligent alerting to ensure system health, faster incident detection, and proactive resolution.',
    },
    {
      title: 'Optimize & Evolve',
      desc: 'We continuously refine pipelines, infrastructure, and metrics using feedback loops, improving efficiency, stability, and delivery performance over time.',
    },
  ];

  return (
    <section className="relative w-full py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${devOpsImages.bg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className={combine(styles.sectionPadding, "relative")}>
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Structured DevOps Delivery <br />
            <span className="text-orange-500">Framework</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl pt-6 px-6 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-2">
                  <Image 
                    src={approachIcons[index % 3]} // Cycle through the 3 icons
                    alt={`${card.title} icon`}
                    className="w-11 h-11 mr-3 mb-6"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-[26px] font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="flex justify-end">
                <LiaLongArrowAltRightSolid className="text-orange-500 text-7xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}