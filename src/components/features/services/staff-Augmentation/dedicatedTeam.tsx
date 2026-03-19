"use client";

import { SectionHeading } from "@/components/shared/headings";
import Image from "next/image";
import { getStaffAugmentationIcons } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { Button } from "@/components/shared/ui";
import { dedicatedTeamData } from "@/data/staff-augmentation";

const staffIcons = getStaffAugmentationIcons();

export default function DedicatedTeam() {
  return (
        <section className={combine("py-10 md:py-14 lg:py-17 xl:py-20 bg-gray-50 mb-20", styles.sectionPaddingX)}>
      <SectionHeading
        subtitle="Our Expert Teams"
        title="Skilled Professionals Across All Technologies"
      />
            {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 mt-5 xl:mt-12">
        {dedicatedTeamData.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl p-3 lg:p-4 xl:p-6 border border-gray-300 duration-300">
                        {/* Team Member Icon */}
            <div className="flex mb-4">
              <Image
                src={staffIcons[member.iconKey as keyof typeof staffIcons]}
                alt={member.text}
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
            <div className="space-y-3">
                            <h3 className={combine("text-blue max-w-[200px] leading-tight text-[17px] md:text-[24px] lg:text-[28px] xl:text-[32px]")}>
                {member.text}
              </h3>
            </div>
            <Button href="/apply-now" variant="ghost" showArrow className="mt-6 text-blue hover:text-blue p-0 h-auto">
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}