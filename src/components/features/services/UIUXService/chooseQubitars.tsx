"use client";

import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import Button from "@/components/shared/ui/button/Button";
import { MoveRight } from "lucide-react";
import { getChooseQubitarsIcons } from "@/lib/assets/icons";

const ChooseQubitars = () => {
  const qubitarsIcons = getChooseQubitarsIcons();
  
  const cards = [
    {
      icon: qubitarsIcons.sicon5,
      title: "End-to-End Expertise",
      description: "From strategy to deployment, we handle the full lifecycle of digital solutions—ensuring seamless integration, scalability, and measurable business outcomes."
    },
    {
      icon: qubitarsIcons.sicon6,
      title: "Scalable Solutions",
      description: "We don't believe in one-size-fits-all. Every solution is tailored to your workflows, and engineered to scale seamlessly as your users, data, and business grow."
    },
    {
      icon: qubitarsIcons.sicon4,
      title: "Agile & Transparent Process",
      description: "From strategy to deployment, we handle the full lifecycle of digital solutions—ensuring seamless integration, scalability, and measurable business outcomes, with continuous collaboration, clear communication, and predictable delivery timelines.",
      wide: true
    }
  ];

  return (
    <section className={combine("bg-gray-50")}>
      <div className={combine(styles.sectionPaddingY, styles.sectionPadding)}>
        <SectionHeading subtitle="Why Choose Us" title="Technology You Can Trust" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div key={index} className={`bg-[#F0F4F9] rounded-xl p-5 ${card.wide ? "md:col-span-2" : ""}`}>
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full border border-blue flex items-center justify-center">
                    <img src={card.icon} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className={combine(styles.h5, "mb-3 text-blue font-semibold")}>{card.title}</h3>
                <p className={combine(styles.p2, "text-blue leading-relaxed font-inter")}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2A5A] rounded-2xl p-7 text-white flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                  <img src={qubitarsIcons.sicon3} alt="" className="w-8 h-8" />
                </div>
              </div>
              <h3 className={combine(styles.h5, "mb-4 text-white font-semibold")}>Quality & Security First</h3>
              <p className={combine(styles.p2, "text-gray-200 leading-relaxed mb-3 font-inter")}>
                We embed rigorous testing, performance checks, and security standards into every solution,
                minimizing risks and maximizing trust.
              </p>
              <p className={combine(styles.p2, "text-gray-200 leading-relaxed font-inter")}>
                We combine meticulous testing, continuous monitoring, and enterprise-grade security
                to ensure reliable, compliant, and trusted systems.
              </p>
            </div>
            <Button variant="accent" size="lg" className="mt-10 group w-54">
              Let's Talk Design
              <MoveRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseQubitars;