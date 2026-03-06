'use client';

import Image from 'next/image';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { getDevOpsCloudinaryImages } from '@/lib/assets/images';
import { getDevOpsIcons } from '@/lib/assets/icons';
import { combine, styles } from '@/styles/style';
import { approachesData } from '@/data/devops/devops';
import { SectionHeading } from '@/components/shared/headings';

export default function OurApproaches() {
  const devOpsImages = getDevOpsCloudinaryImages();
  const devOpsIcons = getDevOpsIcons();

  const approachIcons = [
    devOpsIcons.devicon7,
    devOpsIcons.devicon8,
    devOpsIcons.devicon9,
  ];

  return (
    <section className={`relative w-full ${styles.sectionPaddingY}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${devOpsImages.bg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className={combine(styles.sectionPadding, 'relative')}>
        <SectionHeading
          subtitle="Our Approach"
          title="Structured DevOps Delivery Framework"
          titleColor="white"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {approachesData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl pt-6 px-6 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-1 xl:mb-2">
                  <Image
                    src={approachIcons[index % 3]}
                    alt={`${card.title} icon`}
                    className="w-9 h-9 xl:w-11 xl:h-11 mr-3 mb-4 xl:mb-6"
                    width={32}
                    height={32}
                  />
                  <h3 className={`font-semibold text-gray-900 ${styles.h6}`}>
                    {card.title}
                  </h3>
                </div>
                <p className={`text-gray-600 leading-relaxed ${styles.p2}`}>
                  {card.desc}
                </p>
              </div>

              <div className="flex justify-end">
                <LiaLongArrowAltRightSolid className="text-orange-500 text-5xl xl:text-7xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}