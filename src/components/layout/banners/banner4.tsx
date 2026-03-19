"use client";

import Image from "next/image";
import { styles, combine } from "@/styles/style";
import { Button } from "@/components/shared/ui";

const ConsultationButton = () => (
  <Button
    href="/contact"
    variant="outline"
    size="lg"
    showArrow
    className="bg-white text-[#111827] font-semibold font-outfit rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300 w-fit"
  >
    Book a Consultation, it&apos;s free
  </Button>
);

 const Banner4 = () => {
   return (
     <>
     <section 
        className="relative overflow-hidden my-6 md:my-10 bg-[#E9ECF4]"
      >
        {/* Background image strip at bottom */}
        <div className="absolute left-0 right-0 bottom-0 z-0 h-[110px] md:h-[130px] lg:h-[280px] overflow-hidden">
          <Image
            src="/assets/images/generals/banners/bannerbg4.png"
            alt="Leadership banner background"
            fill
            className=""
            unoptimized
          />
        </div>
      <div
        className={combine(
          "relative z-10 flex flex-col md:flex-row items-stretch gap-8 md:gap-10 lg:gap-14 py-6 md:py-0 lg:py-8 xl:py-12 mx-4 lg:mx-7 xl:mx-16",
        )}
      >
        {/* Left content */}
         <div className="flex-1 flex flex-col justify-center max-w-xl">
           <div className="flex items-center gap-3 mb-4 lg:mb-9">
            <Image
              src="/assets/images/generals/banners/bannerlogo.svg"
              alt="Qubitars Technologies"
               width={90}
               height={90}
               className="w-[90px] h-auto md:w-[150px] hidden sm:block"
            />
          </div>

          <h2
            className={combine(
              "text-[26px] md:text-[28px] lg:text-[37px] xl:text-[44px] leading-tight text-[#111827] font-medium font-outfit mb-3 md:mb-4"
            )}
          >
          How Businesses Can Move Past the AI Pilot Phase
          </h2>

          {/* Button inside banner: hidden on mobile, shown on md+ */}
          <div className="mt-4 md:mt-7 xl:mt-12 w-fit hidden md:block">
            <ConsultationButton />
          </div>
        </div>

        {/* Right: leadership images */}
        <div className="flex-1 relative flex items-end justify-center lg:justify-end">
          {/* angled orange card from background image; CEO/CTO cards overlay */}
          <div className="relative w-full max-w-[540px] h-[160px] md:h-[260px] lg:h-[280px]">
            {/* CTO */}
            <div className="absolute bottom-0 right-[2%] md:right-0 bottom-[-48px] z-20 flex flex-col items-center">
              <div className="relative w-[230px] md:w-[210px] lg:w-[300px] xl:w-[400px] h-[220px] md:h-[310px] lg:h-[300px] xl:h-[350px]">
                <Image
                  src="/assets/images/generals/banners/CTO.png.png"
                  alt="Hammad Akram - Chief Technology Officer"
                  fill
                  className="object-contain"
                  unoptimized
                />
                <div className="absolute bottom-8 md:bottom-14 lg:bottom-6 xl:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-1 md:py-2 shadow-md text-center whitespace-nowrap">
                  <p className="text-xs lg:text-sm xl:text-base font-semibold text-[#111827] font-outfit">
                    Hammad Akram
                  </p>
                  <p className="text-[10px] lg:text-xs text-[#6B7280] font-inter">
                    Chief Technology Officer
                  </p>
                </div>
              </div>
            </div>

            {/* CEO */}
            <div className="absolute bottom-0 left-[-4%] md:left-[-7%] xl:left-[-12%] bottom-[-60px] z-[5] flex flex-col items-center">
              <div className="relative w-[230px] md:w-[230px] lg:w-[280px] xl:w-[360px] h-[230px] md:h-[330px] xl:h-[360px]">
                <Image
                  src="/assets/images/generals/banners/CEO.png.png"
                  alt="Syed M. Ali - Chief Executive Officer"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            
            {/* CEO Text Box - Outside CEO container, above CTO */}
            <div 
              className="absolute bottom-[-16px] md:bottom-2 lg:bottom-[-21px] xl:bottom-[-32px] bg-white/95 backdrop-blur-sm px-4 py-1 md:py-2 shadow-md text-center whitespace-nowrap z-[60]"
              style={{ 
                left: 'calc(-4% + 100px)',
                transform: 'translateX(-50%)'
              }}
            >
              <p className="text-xs lg:text-sm xl:text-base font-semibold text-[#111827] font-outfit">
                Syed M. Ali
              </p>
              <p className="text-[10px] lg:text-xs text-[#6B7280] font-inter">
                Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Button below banner: only on mobile - common button styling, not full width */}
    <div className="px-4 pb-4 md:hidden flex justify-center">
      <ConsultationButton />
    </div>
    </>
  );
};

export default Banner4;


