"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
import { chooseQubitarsSection, chooseQubitarsStats } from "@/data";

const ChooseQubitars = () => {
  const [c1, c2, c3, c4] = chooseQubitarsStats;
  return (
    <section className="relative overflow-hidden mt-14 md:mt-16 lg:mt-20 xl:mt-24">
      <div className="absolute inset-0">
        <Image
          src={chooseQubitarsSection.bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0E1320]/90" />
      </div>

      <div className={`relative z-10 ${styles.sectionPadding} pt-8 pb-12`}>
        <div className="text-center mb-8 md:mb-10 lg:mb-12 xl:mb-8">
          <h2 className={`${styles.h2} font-semibold font-outfit leading-tight text-white mb-4 `}>
            {chooseQubitarsSection.title}
          </h2>
          <p className={`${styles.p2} text-white/90 font-inter max-w-3xl mx-auto`}>
            {chooseQubitarsSection.description}
          </p>
        </div>
        <div className="max-w-lg lg:max-w-xl mx-auto">
        <div className="flex gap-4 mb-4">
          <div className="bg-[#182132] flex items-center p-6 lg:p-8 w-[340px] lg:w-[380px] border border-[#676767] rounded-lg">
            <div className="text-white border-r border-[#224872] pr-3 mr-5">
              <Image src={c1.src} alt={c1.title} width={48} height={48} className="mb-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h5 className={`${styles.p1} font-bold text-white`}>{c1.value}</h5>
              <p className={`${styles.p4} font-inter text-white`}>{c1.title}</p>
            </div>
            <div>
              <p className={`${styles.p4} max-w-[150px] font-inter text-white`}>{c1.description}</p>
            </div>
          </div>
          <div className="bg-[#182132] flex flex-col justify-center text-center p-6 lg:p-8 border border-[#676767] rounded-lg lg:pt-10">
            <Image src={c2.src} alt={c2.title} width={38} height={38} className="mx-auto mb-2 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            <h5 className={`${styles.p1} font-bold text-white`}>{c2.value}</h5>
            <p className={`${styles.p4} font-inter text-white`}>{c2.title}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#182132] flex items-center py-6 lg:py-8 ps-6 lg:ps-8 pe-8 lg:pe-10 w-[360px] lg:w-[435px] border border-[#676767] rounded-lg">
            <div className="text-white border-r border-[#224872] pr-0 lg:pr-3 mr-5">
              <Image src={c3.src} alt={c3.title} width={40} height={40} className="mb-1 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
              <h5 className={`${styles.p1} font-bold text-white`}>{c3.value}</h5>
              <p className={`${styles.p4} font-inter text-white`}>{c3.title}</p>
            </div>
            <div>
              <p className={`${styles.p4} max-w-[180px] lg:max-w-[210px] pt-1 font-inter text-white`}>{c3.description}</p>
            </div>
          </div>
          <div className="bg-[#182132] p-5 lg:p-8 border border-[#676767] text-center rounded-lg mr-0  md:mr-2 lg:mr-0">
            <Image src={c4.src} alt={c4.title} width={48} height={48} className="mb-0 mx-auto w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <h5 className={`${styles.p1} font-bold text-white`}>{c4.value}</h5>
            <p className={`${styles.p4} font-inter text-white`}>{c4.title}</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseQubitars;
