"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { getStaffAugmentationIcons, getStaffAugmentationImages } from "@/lib/assets";
import { combine, styles } from "@/styles/style";
import { SectionHeading } from '@/components/shared/headings';
import { Button } from '@/components/shared/ui';
import { teamsData } from '@/data/staff-augmentation';

interface Team {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  showButton?: boolean;
}
const Models4Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState(1);
  const staffImages = getStaffAugmentationImages();

  return (
    <section className={combine("bg-white py-16", styles.sectionPaddingX)}>
      <div className="text-center mb-12">
        <SectionHeading title="Scaling Models For Teams" />
      </div>

      <div className="space-y-6">
        {teamsData.map((team) => {
          const isActive = activeTeam === team.id;
          return (
            <div
              key={team.id}
              onClick={() => setActiveTeam(team.id)}
              className="relative cursor-pointer transition-all duration-300 overflow-hidden bg-white text-gray-900"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image Column */}
                <div className="col-span-3 flex items-center hidden md:block">
                  <div className={`relative flex-shrink-0 ${isActive ? 'w-45 lg:w-55 xl:w-70 h-47 xl:h-53' : 'w-45 lg:w-55 xl:w-70 h-28 lg:h-32'}`}>
                    <div className="w-full h-full bg-gray-100 overflow-hidden">
                      <Image
                        src={staffImages.staffImage2}
                        alt={team.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Columns */}
                <div className="md:col-span-9 ">
                  {/* ID & Tags */}
                  <div className={` border-b-2 border-gray-300 ${isActive ? 'pb-5 lg:pb-8' : 'py-6 xl:py-8'}`}>
                    <div className={`flex gap-4 ${isActive ? 'justify-between' : ''}`}>
                      <div className={`font-bold ${isActive ? 'text-4xl text-gray-700' : 'text-3xl text-gray-400'}`}>
                        {team.id.toString().padStart(2, '0')}.
                      </div>
                      <div className="">
                        <div className="space-y-4">
                          <h3 className={combine("font-bold text-xl text-gray-900", styles.h3, !isActive ? 'lg:ps-35 xl:ps-117' : '')}>
                            {team.title}
                          </h3>
                          {isActive && (
                            <>
                              <p className="text-gray-600 leading-relaxed max-w-lg ">{team.description}</p>

                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Team Title & Description */}
                    <div className='flex items-end justify-between gap-8 lg:gap-14 mt-6'>
                      <div>
                        {
                          isActive && team.tags && (
                            <div className="flex flex-wrap gap-2">
                              {team.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full bg-orange-100 text-blue font-medium"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )
                        }
                      </div>
                      <div>
                        {isActive && team.showButton && (
                          <Button href="/contact" variant="accent" size="lg" showArrow>
                            Get a Quote
                          </Button>
                        )}
                      </div>
                    </div>
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

export default Models4Team;

