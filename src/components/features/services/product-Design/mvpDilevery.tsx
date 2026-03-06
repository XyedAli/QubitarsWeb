import Image from "next/image";
import { SectionHeading } from "@/components/shared/headings";
import { styles } from "@/styles/style";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { getProductDesignCloudinaryImages } from "@/lib/assets/images";
import { approachStepsData, phaseContentData } from "@/data/product-design";

export default function OurApproach() {
  const icons = getProductDesignIcons();
  const images = getProductDesignCloudinaryImages();

  // Debug: Log icons to check if they're loading
  console.log('Icons:', icons);

  return (
    <section className={styles.sectionPaddingY}>
      <div className={styles.sectionPaddingX}>
        <SectionHeading
          title="From Strategy to MVP Delivery"
          subtitle="Our Approach"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-11 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-3 space-y-10 ms-0 xl:ms-4 hidden lg:block">
            {approachStepsData.map((step, index) => (
              <div key={index} className={`${styles.flexitems} gap-3 xl:gap-5`}>
                <div className={`${styles.flexCenter} lg:w-16 xl:w-20 lg:h-16 xl:h-20 bg-blue-600 rounded-full text-white flex-shrink-0`}>
                  <Image 
                    src={icons[step.icon as keyof typeof icons]} 
                    alt={step.title} 
                    width={48}
                    height={48}
                    className="object-contain w-9 xl:w-12 h-9 xl:h-12"
                  />
                </div>
                <ul className="text-base xl:text-lg font-inter text-blue">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="whitespace-nowrap">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-9 relative flex w-full mt-6 lg:mt-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[370px] xl:max-w-[480px] h-[340px] md:h-[420px] xl:h-[470px]">
              
              <Image
                src={images.pdImg1}
                alt="Process Donut"
                fill
                className="object-contain -ms-9 lg:-ms-0 hidden md:block"
                quality={100}
                priority
              />

              {phaseContentData.map((item, index) => (
                <div key={index} className={`absolute ${item.position} flex items-center gap-4 xl:gap-6 w-full`}>
                  <div className={`border-r-4 border-blue-600 ${item.margin}`}>
                    <h4 className="text-[20px] lg:text-[22px] xl:text-[26px] text-blue font-semibold leading-tight">
                      <span className="text-blue-600 text-base lg:text-lg xl:text-xl">{item.phase}</span> {item.title}
                    </h4>
                  </div>
                  <p className={`${styles.p2} text-blue max-w-md leading-tight font-medium font-inter`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}