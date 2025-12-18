import Image from "next/image";
import { awards } from "@/data";
import { styles } from "@/styles/style";

const Awards = () => {
  return (
    <section className={`${styles.sectionPaddingY} bg-gradient-to-b from-white to-gray-50`}>
      <div className="mx-4 lg:mx-8 xl:mx-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue mb-4 lg:mb-6">
              CERTIFICATIONS
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications support our claim that we provide quality business solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-7 items-stretch justify-items-center">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-blue rounded-2xl p-6 md:p-7 shadow-sm w-full h-full min-h-[180px] md:min-h-[200px] lg:min-h-[185px] flex items-center justify-center"
              >
                <Image
                  src={award.image}
                  alt={award.name}
                  width={150}
                  height={150}
                  className="w-full h-auto max-w-[120px] md:max-w-[140px] lg:max-w-[110px] object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

