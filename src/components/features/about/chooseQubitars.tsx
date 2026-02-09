"use client";

import Image from "next/image";
import { styles } from "@/styles/style";
import { chooseQubitarsSection, chooseQubitarsStats } from "@/data";

const CARD_BASE = "bg-[#182132] border border-[#676767] rounded-lg";
const TEXT_WHITE = "text-white font-inter";

const ChooseQubitars = () => (
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
        <h2 className={`${styles.h2} font-semibold font-outfit leading-tight text-white mb-4`}>
          {chooseQubitarsSection.title}
        </h2>
        <p className={`${styles.p2} text-white/90 font-inter max-w-3xl mx-auto`}>
          {chooseQubitarsSection.description}
        </p>
      </div>

      <div className="max-w-lg lg:max-w-xl mx-auto">
        <div className="flex gap-4 mb-4">
          {chooseQubitarsStats.slice(0, 2).map((stat, i) => (
            <div
              key={i}
              className={`${CARD_BASE} flex ${stat.description ? "items-center p-6 lg:p-8 w-[340px] lg:w-[380px]" : "flex-col justify-center text-center p-6 lg:p-8 lg:pt-10"}`}
            >
              {stat.description ? (
                <>
                  <div className="text-white border-r border-[#224872] pr-3 mr-5">
                    <Image src={stat.src} alt={stat.title} width={48} height={48} className="mb-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                    <h5 className={`${styles.p1} font-bold text-white`}>{stat.value}</h5>
                    <p className={`${styles.p4} ${TEXT_WHITE}`}>{stat.title}</p>
                  </div>
                  <p className={`${styles.p4} max-w-[150px] ${TEXT_WHITE}`}>{stat.description}</p>
                </>
              ) : (
                <>
                  <Image src={stat.src} alt={stat.title} width={38} height={38} className="mx-auto mb-2 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                  <h5 className={`${styles.p1} font-bold text-white`}>{stat.value}</h5>
                  <p className={`${styles.p4} ${TEXT_WHITE}`}>{stat.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {chooseQubitarsStats.slice(2, 4).map((stat, i) => (
            <div
              key={i}
              className={`${CARD_BASE} ${stat.description ? "flex items-center py-6 lg:py-8 ps-6 lg:ps-8 pe-8 lg:pe-10 w-[360px] lg:w-[435px]" : "p-5 lg:p-8 text-center mr-0 md:mr-2 lg:mr-0"}`}
            >
              {stat.description ? (
                <>
                  <div className="text-white border-r border-[#224872] pr-0 lg:pr-3 mr-5">
                    <Image src={stat.src} alt={stat.title} width={40} height={40} className="mb-1 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                    <h5 className={`${styles.p1} font-bold text-white`}>{stat.value}</h5>
                    <p className={`${styles.p4} ${TEXT_WHITE}`}>{stat.title}</p>
                  </div>
                  <p className={`${styles.p4} max-w-[180px] lg:max-w-[210px] pt-1 ${TEXT_WHITE}`}>{stat.description}</p>
                </>
              ) : (
                <>
                  <Image src={stat.src} alt={stat.title} width={48} height={48} className="mb-0 mx-auto w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                  <h5 className={`${styles.p1} font-bold text-white`}>{stat.value}</h5>
                  <p className={`${styles.p4} ${TEXT_WHITE}`}>{stat.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ChooseQubitars;
