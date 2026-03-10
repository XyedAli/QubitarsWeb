"use client"

import { SectionHeading } from "@/components/shared/headings"
import Image from "next/image"
import { getStaffAugmentationImages, getStaffAugmentationIcons } from "@/lib/assets"
import { combine, styles } from "@/styles/style"
import { GoArrowRight } from "react-icons/go";


const staffImages = getStaffAugmentationImages()
const staffIcons = getStaffAugmentationIcons()

const teamMembers = [
    {
        text: "Software Developers",
        icon: staffIcons.saIcon1,
    },
    {
        text: "Mobile Developers",
        icon: staffIcons.saIcon2,
    },
    {
        text: "AI & ML Experts",
        icon: staffIcons.saIcon3,
    },
    {
        text: "DevOps Engineers",
        icon: staffIcons.saIcon4,
    }, {
        text: "Data Engineers",
        icon: staffIcons.saIcon1,
    },
    {
        text: "UI/UX Designers",
        icon: staffIcons.saIcon2,
    },
    {
        text: "Software Testers",
        icon: staffIcons.saIcon3,
    },
    {
        text: "Support Engineers",
        icon: staffIcons.saIcon4,
    }
]

export default function DedicatedTeam() {
    return (
        <section className={combine("py-20 bg-gray-50 mb-20", styles.sectionPaddingX)}>
            <SectionHeading
                subtitle="Our Expert Teams"
                title="Skilled Professionals Across All Technologies"
            />

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-300 duration-300">
                        {/* Team Member Icon */}
                        <div className="flex mb-4">
                            <Image
                                src={member.icon}
                                alt={member.text}
                                width={64}
                                height={64}
                                className="w-12 h-12"
                            />
                        </div>

                        {/* Team Member Info */}
                        <div className="space-y-3">
                            <h3 className={combine("text-blue max-w-[200px] leading-tight", styles.h4)}>
                                {member.text}
                            </h3>
                        </div>
                     
                          <a href="" className="text-blue flex items-center gap-1 mt-6 text-lg hover:text-accent">Apply Now<span className="text-accent text-xl"> <GoArrowRight /></span></a>  
                    </div>
                ))}
            </div>


        </section>
    )
}