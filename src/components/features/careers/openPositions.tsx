"use client";

import { useState } from "react";
import { styles } from "@/styles/style";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/headings";

interface JobPosition {
    id: number;
    title: string;
    experience: string;
    type: string;
    education: string;
    language: string;
    technologies: string[];
    isOnSite: boolean;
    requirements: {
        intro?: string;
        positions?: string[];
        techStack?: string[];
    };
}

const OpenPositions = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const jobPositions: JobPosition[] = [
        {
            id: 1,
            title: "Mobile Application Development",
            experience: "2+ Years of experience",
            type: "Full-time",
            education: "BSCS",
            language: "Fluent in English",
            technologies: [
                "Android App Development",
                "iOS App Development",
                "Flutter App Development",
                "React Native App Development",
            ],
            isOnSite: true,
            requirements: {
                intro: "Lumitech is a forward-thinking technology company dedicated to building innovative digital solutions. We're looking for passionate developers who thrive in collaborative environments and are eager to contribute to cutting-edge projects. If you're skilled, motivated, and ready to make an impact, we'd love to hear from you!",
                positions: [
                    "2x Frontend Developer (with backend experience)",
                    "2x Backend Developer",
                    "Alternatively, we are ready to hire 4x Full-Stack Developers",
                ],
                techStack: [
                    "Strong foundation in JavaScript and functional programming.",
                    "Hands-on experience with TypeScript, React, and Next.js.",
                    "Practical backend experience using Node.js with Fastify or NestJS.",
                    "Thorough understanding of modern development practices (clean code, CI/CD, rigorous code reviews).",
                    "Familiarity with Agile/Scrum methodologies and collaboration tools (e.g., Jira, Git, ClickUp).",
                    "English level: Upper-Intermediate or higher.",
                ],
            },
        },
        {
            id: 2,
            title: "Frontend Developer",
            experience: "3+ Years of experience",
            type: "Full-time",
            education: "BSCS",
            language: "Fluent in English",
            technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],
            isOnSite: true,
            requirements: {
                intro: "We are seeking an experienced Frontend Developer to join our dynamic team.",
                positions: [
                    "1x Senior Frontend Developer",
                ],
                techStack: [
                    "Expert-level knowledge of React and Next.js.",
                    "Strong TypeScript skills.",
                    "Experience with modern CSS frameworks.",
                    "Understanding of responsive design principles.",
                ],
            },
        },
    ];

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleApplyNow = (e: React.MouseEvent, jobId: number) => {
        e.stopPropagation();
        // Handle apply now action
        console.log("Apply for job:", jobId);
    };

    const handleOnSite = (e: React.MouseEvent, jobId: number) => {
        e.stopPropagation();
        // Handle on site action
        console.log("On site job:", jobId);
    };

    return (
        <section className={`bg-white relative overflow-hidden ${styles.sectionPadding}`} id="open-positions">
            <div className="">
                <SectionHeading
                    subtitle="Open Positions"
                    title="We'd Love To Meet You!"
                />

                {/* Job Positions List */}
                <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {jobPositions.map((job) => {
                        const isExpanded = expandedId === job.id;

                        return (
                            <div
                                key={job.id}
                                className={`bg-[#FAFAFA] rounded-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden ${isExpanded ? "border-[#F05C22]" : ""
                                    }`}
                            >
                                {/* Card Header - Clickable */}
                                <div
                                    className="p-4 lg:p-6 cursor-pointer"
                                    onClick={() => toggleExpand(job.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        {/* Left Side - Job Info */}
                                        <div className="flex-1 flex gap-4 lg:gap-9 xl:gap-24">
                                            {/* Number Identifier */}
                                            <div className="flex-shrink-0 -mt-2">
                                                <span className={`${styles.h2} font-semibold text-blue font-outfit`}>
                                                    {String(job.id).padStart(2, "0")}.
                                                </span>
                                            </div>

                                            {/* Job Details */}
                                            <div className="flex-1 flex flex-col gap-3">
                                                {/* Job Title */}
                                                <h3 className={`${styles.h4} font-bold text-blue font-outfit leading-tight`}>
                                                    {job.title}
                                                </h3>

                                                {/* Key Attributes */}
                                                <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm lg:text-base font-inter">
                                                    <span><span className="text-accent">•</span> {job.experience}</span>
                                                    <span><span className="text-accent">•</span> {job.type}</span>
                                                    <span><span className="text-accent">•</span> {job.education}</span>
                                                    <span><span className="text-accent">•</span> {job.language}</span>
                                                </div>

                                                {/* Technology Tags */}
                                                <div className="flex flex-wrap gap-1 lg:gap-2 mt-2 max-w-2xl">
                                                    {job.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 lg:py-1.5 bg-white rounded-full text-[9px] md:text-[11px] lg:text-base font-inter text-gray-700 border-2 border-gray-300 font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - Action Buttons */}
                                        <div className="flex items-start gap-2 lg:gap-3 flex-shrink-0">
                                            {job.isOnSite && (
                                                <span className="px-4 lg:py-2 py-1.5 bg-blue text-white rounded-full text-sm lg:text-base font-semibold font-inter whitespace-nowrap hidden md:block">
                                                    On Site
                                                </span>
                                            )}
                                            <Link href="/careers/apply-now">
                                            <button
                                                onClick={(e) => handleApplyNow(e, job.id)}
                                                className="px-3 lg:px-4 lg:py-2 py-1.5 border-2 border-accent cursor-pointer bg-white text-accent rounded-lg text-sm lg:text-base font-semibold font-inter hover:bg-[#F05C22] hover:text-white transition-all duration-200 flex items-center gap-2 whitespace-nowrap group ms-14 md:ms-0"
                                            >
                                                Apply Now
                                                <MoveUpRight className="w-4 h-4 text-[#F05C22] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 border-t border-gray-200">
                                        <div className="pt-4 md:pt-5 space-y-4 md:space-y-5">
                                            {/* Requirements Intro */}
                                            {job.requirements.intro && (
                                                <div>
                                                    <h4 className={`${styles.h5} font-bold text-blue font-outfit mb-3`}>
                                                        Requirements
                                                    </h4>
                                                    <p className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>
                                                        {job.requirements.intro}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Specific Positions */}
                                            {job.requirements.positions && job.requirements.positions.length > 0 && (
                                                <div>
                                                    <ul className="space-y-2">
                                                        {job.requirements.positions.map((position, index) => (
                                                            <li
                                                                key={index}
                                                                className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}
                                                            >
                                                                - {position}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Tech Stack & Skills */}
                                            {job.requirements.techStack && job.requirements.techStack.length > 0 && (
                                                <div>
                                                    <h4 className={`${styles.h5} font-bold text-blue font-outfit mb-3`}>
                                                        Requirements (Tech Stack & Skills)
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {job.requirements.techStack.map((requirement, index) => (
                                                            <li
                                                                key={index}
                                                                className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}
                                                            >
                                                                - {requirement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;
