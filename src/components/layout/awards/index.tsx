import Image from "next/image";
import { awards } from "@/data";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings/headings";
import { getAwardsMapCloudinaryImage } from "@/lib/assets/images";

const Awards = () => {
  // Get Cloudinary map image
  const mapImage = getAwardsMapCloudinaryImage();

  return (
    <section className={`${styles.sectionPaddingY} bg-[#EDEFF8] relative z-[1] overflow-hidden`}>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[260px] md:h-[300px] lg:h-[330px] pointer-events-none overflow-hidden">
        <Image
          src={mapImage}
          alt=""
          fill
          className="object-cover object-bottom"
          unoptimized
        />
      </div>
      
      <div className={`${styles.sectionPadding} relative z-10`}>
            <SectionHeading
              subtitle="Certifications"
              title="Credentials Validate"
              highlightedText="Solution Quality"
            />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 xl:gap-7 items-stretch justify-items-center">
            {awards.map((award, index) => {
              const isSvg = typeof award.image === 'string' && award.image.includes('.svg');
              // Priority for first 6 awards (above the fold)
              const isPriority = index < 6;
              
              return (
                <div
                  key={award.id}
                  className="bg-white rounded-2xl gap-4 lg:p-5 xl:p-7 shadow-sm w-full h-full min-h-[123px] md:min-h-[165px] lg:min-h-[170px] xl:min-h-[185px] flex items-center justify-center border border-gray-100"
                >
                  {isSvg ? (
                    <img
                      src={award.image}
                      alt={award.name}
                      width={150}
                      height={150}
                      className="w-full h-auto max-w-[73px] md:max-w-[102px] lg:max-w-[110px] object-contain"
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
};

export default Awards;

