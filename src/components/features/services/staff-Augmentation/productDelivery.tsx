"use client"

import { SectionHeading } from "@/components/shared/headings"
import Image from "next/image"
import { getStaffAugmentationImages } from "@/lib/assets"
import { combine, styles } from "@/styles/style"

const staffImages = getStaffAugmentationImages()

const yourRoles = [
    {
        text: "You review shortlisted professionals and select the engineers best suited."
    },
    {
        text: "Share product vision, goals, requirements guiding development priorities effectively."
    },
    {
        text: "Maintain full control over workflows, decisions, priorities throughout project lifecycle."
    },
    {
        text: "Focus on innovation and strategy while your product continuously evolves."
    }
]

const ourRoles = [
    {
        text: "We identify skilled professionals matching your technology stack, experience level, project requirements."
    },
    {
        text: "We handle onboarding, setup tools, workflows, communication channels for smooth collaboration."
    },
    {
        text: "We manage HR, administration, compliance, training, ensuring engineers stay productive."
    },
    {
        text: "Easily increase or reduce team capacity based on evolving project requirements."
    }
]

export default function HowItWorks() {
    return (
        <>
        <style jsx>{`
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
            .blink-dot {
                animation: blink 2s infinite;
            }
        `}</style>
        <section className={combine("py-20", styles.sectionPaddingX)}>
            <SectionHeading
                subtitle="How It Works"
                title="Clear Roles For Faster Product Delivery"
            />

            {/* Content */}
            <div className="grid grid-cols-3 gap-0 items-center px-4">

                {/* LEFT TEXT */}
                <div className="space-y-6 -mt-28 flex justify-end flex-col">
                    {yourRoles.map((role, index) => (
                        <div key={index} className="flex gap-3 items-start">
                            <p className={combine("text-gray-600 leading-tight text-xl")}>
                                {role.text}
                            </p>
                             <div className="w-5 h-5 bg-gray-200 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CENTER ARROWS */}
                <div className="relative flex flex-col items-center">
                    {/* YOU ARROW */}
                    <div className="relative z-10 mb-3">
                        <Image
                            src={staffImages.saImg19}
                            alt="You Arrow"
                            width={320}
                            height={120}
                        />
                    </div>

                    {/* QUBITARS ARROW */}
                    <div className="relative z-10">
                        <Image
                            src={staffImages.saImg20}
                            alt="Qubitars Arrow"
                            width={340}
                            height={120}
                        />
                    </div>
                </div>

                {/* RIGHT TEXT */}
                <div className="space-y-6 mt-40">
                    {ourRoles.map((role, index) => (
                        <div key={index} className="flex gap-3 items-start">
                            <div className="w-5 h-5 bg-blue-200 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full blink-dot"></div>
                            </div>
                            <p className={combine("text-gray-600 text-xl leading-tight")}>
                                {role.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    </>)
}