"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { openPositions } from "@/data";

const TECH_TAG_CLASS = "px-3 py-1 lg:py-1.5 bg-white rounded-full text-[9px] md:text-[11px] lg:text-base font-inter text-gray-700 border-2 border-gray-300 font-medium";
const APPLY_BTN_CLASS = "px-3 lg:px-4 lg:py-2 py-1.5 border-2 border-accent cursor-pointer bg-white text-accent rounded-lg text-sm lg:text-base font-semibold font-inter hover:bg-[#F05C22] hover:text-white transition-all duration-200 flex items-center gap-2 whitespace-nowrap group ms-14 md:ms-0";

const OpenPositions = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggle = (id: number) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className={`bg-white relative overflow-hidden ${styles.sectionPadding} scroll-mt-[calc(var(--header-height,1rem)-6rem)]`} id="open-positions">
      <SectionHeading subtitle="Open Positions" title="We'd Love To Meet You!" />
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        {openPositions.map((job) => {
          const isExpanded = expandedId === job.id;
          const { requirements } = job;
          return (
            <div
              key={job.id}
              className={`bg-[#FAFAFA] rounded-2xl transition-all duration-300 border overflow-hidden ${
                isExpanded ? "border-[#F05C22]" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="p-4 lg:p-6 cursor-pointer" onClick={() => toggle(job.id)}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 flex gap-4 lg:gap-9 xl:gap-24">
                    <div className="flex-shrink-0 -mt-2">
                      <span className={`${styles.h2} font-semibold text-blue font-outfit`}>{String(job.id).padStart(2, "0")}.</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className={`${styles.h4} font-bold text-blue font-outfit leading-tight`}>{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm lg:text-base font-inter">
                        <span><span className="text-accent">•</span> {job.experience}</span>
                        <span><span className="text-accent">•</span> {job.type}</span>
                        <span><span className="text-accent">•</span> {job.education}</span>
                        <span><span className="text-accent">•</span> {job.language}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 lg:gap-2 mt-2 max-w-2xl">
                        {job.technologies.map((tech, i) => (
                          <span key={i} className={TECH_TAG_CLASS}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3 flex-shrink-0">
                    {job.isOnSite && (
                      <span className="px-4 lg:py-2 py-1.5 bg-blue text-white rounded-full text-sm lg:text-base font-semibold font-inter whitespace-nowrap hidden md:block">
                        On Site
                      </span>
                    )}
                    <Link href="/careers/apply-now">
                      <button onClick={(e) => e.stopPropagation()} className={APPLY_BTN_CLASS}>
                        Apply Now
                        <MoveUpRight className="w-4 h-4 text-[#F05C22] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 border-t border-gray-200">
                  <div className="pt-4 md:pt-5 space-y-4 md:space-y-5">
                    {requirements.intro && (
                      <div>
                        <h4 className={`${styles.h5} font-bold text-blue font-outfit mb-3`}>Requirements</h4>
                        <p className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>{requirements.intro}</p>
                      </div>
                    )}
                    {requirements.positions?.length ? (
                      <ul className="space-y-2">
                        {requirements.positions.map((p, i) => (
                          <li key={i} className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>- {p}</li>
                        ))}
                      </ul>
                    ) : null}
                    {requirements.techStack?.length ? (
                      <div>
                        <h4 className={`${styles.h5} font-bold text-blue font-outfit mb-3`}>Requirements (Tech Stack & Skills)</h4>
                        <ul className="space-y-2">
                          {requirements.techStack.map((r, i) => (
                            <li key={i} className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>- {r}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OpenPositions;
