"use client";

import Image from "next/image";
import { awards } from "@/data";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings/headings";
import { getAwardsMapCloudinaryImage } from "@/lib/assets/images";

const Awards = () => (
  <section className={`${styles.sectionPaddingY} bg-[#EDEFF8] relative z-[1] overflow-hidden`}>
    <div className="absolute bottom-0 left-0 right-0 w-full h-[260px] md:h-[280px] lg:h-[300px] xl:h-[350px] pointer-events-none overflow-hidden">
      <Image src={getAwardsMapCloudinaryImage()} alt="" fill className="object-cover object-bottom" unoptimized />
    </div>
    <div className={`${styles.sectionPadding} relative z-10`}>
      <SectionHeading subtitle="Certifications" title="Credentials Validate" highlightedText="Solution Quality" />
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-3 lg:gap-4 lg:gap-5 xl:gap-7 items-stretch justify-items-center">
        {awards.map((award, index) => {
          const isSvg = typeof award.image === "string" && award.image.includes(".svg");
          const isPriority = index < 6;
          return (
            <div
              key={award.id}
              className="bg-white rounded-2xl gap-4 lg:p-5 xl:p-7 shadow-sm w-full h-full min-h-[123px] md:min-h-[125px] lg:min-h-[150px] xl:min-h-[185px] flex items-center justify-center border border-gray-100"
            >
              {isSvg ? (
                <img
                  src={award.image}
                  alt={award.name}
                  width={150}
                  height={150}
                  className="w-full h-auto max-w-[73px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[110px] object-contain"
                  loading={isPriority ? "eager" : "lazy"}
                  fetchPriority={isPriority ? "high" : "auto"}
                />
              ) : (
                <Image
                  src={award.image}
                  alt={award.name}
                  width={150}
                  height={150}
                  className="w-full h-auto max-w-[73px] md:max-w-[102px] lg:max-w-[110px] object-contain"
                  priority={isPriority}
                  loading={isPriority ? "eager" : "lazy"}
                  fetchPriority={isPriority ? "high" : "auto"}
                  unoptimized
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Awards;
