import Image from "next/image";
import { awards } from "@/data";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings/headings";

const Awards = () => {
  return (
    <section className={`${styles.sectionPaddingY} bg-[#EDEFF880] relative overflow-hidden`}>
      {/* <div 
        className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle at top right, rgba(252, 126, 19, 0.08) 0%, rgba(252, 126, 19, 0.04) 40%, rgba(252, 126, 19, 0.01) 70%, transparent 100%)'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(252, 126, 19, 0.08) 0%, rgba(252, 126, 19, 0.04) 40%, rgba(252, 126, 19, 0.01) 70%, transparent 100%)'
        }}
      ></div> */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[260px] md:h-[300px] lg:h-[330px] pointer-events-none">
        <Image
          src="/assets/images/generals/awards/map.png"
          alt=""
          fill
          className=""
          unoptimized
        />
      </div>
      
      <div className="mx-4 lg:mx-8 xl:mx-14 relative z-10">
            <SectionHeading
              subtitle="CERTIFICATIONS"
              title="Credentials Validate"
              highlightedText="Solution Quality"
            />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 xl:gap-7 items-stretch justify-items-center">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-2xl gap-4 lg:p-5 xl:p-7 shadow-sm w-full h-full min-h-[140px] md:min-h-[165px] lg:min-h-[170px] xl:min-h-[185px] flex items-center justify-center border border-gray-100"
              >
                <Image
                  src={award.image}
                  alt={award.name}
                  width={150}
                  height={150}
                  className="w-full h-auto max-w-[90px] md:max-w-[102px] lg:max-w-[110px] object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Awards;

