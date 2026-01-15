"use client";

import Image from "next/image";
import { Shield, Users, Settings, Star } from "lucide-react";
import { styles } from "@/styles/style";
import { aboutImages } from "@/lib/assets/images";

interface StatCard {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  title: string;
  description?: string;
}

const stats: StatCard[] = [
  {
    icon: Shield,
    value: "95%",
    title: "Client Retention",
    description: "Delivering consistent value that builds lasting client relationships.",
  },
  {
    icon: Users,
    value: "100K",
    title: "User Impacted",
  },
  {
    icon: Settings,
    value: "90%",
    title: "Automation Efficiency",
    description: "Streamlining processes to save time and boost productivity.",
  },
  {
    icon: Star,
    value: "10/10",
    title: "Preferred Partner",
  },
];

const ChooseQubitars = () => {
  return (
    <section className="relative overflow-hidden mt-14 md:mt-16 lg:mt-20 xl:mt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={aboutImages.Aimg17}
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Color Overlay #262A37 */}
        <div className="absolute inset-0 bg-[#0E1320]/90" />
      </div>

      <div className={`relative z-10 ${styles.sectionPadding} pt-8 pb-12`}>
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12 xl:mb-8">
          <h2 className={`${styles.h2} font-semibold font-outfit leading-tight text-white mb-4 `}>
            Why Choose Qubitars
          </h2>
          <p className={`${styles.p2} text-white/90 font-inter max-w-3xl mx-auto`}>
            We combine AI, strategy, and execution to deliver scalable, real-world solutions.
          </p>
        </div>
        <div className="max-w-lg lg:max-w-xl mx-auto">
        <div className="flex gap-4 mb-4">
          <div className="bg-[#182132] flex items-center p-6 lg:p-8 w-[340px] lg:w-[380px] border border-[#676767] rounded-lg">
            <div className="text-white border-r border-[#224872] pr-3 mr-5">
              <Image src={aboutImages.Aimg18} alt="Shield" width={48} height={48} className="mb-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h5 className={`${styles.p1} font-bold`}>95%</h5>
              <p className={`${styles.p4} font-inter`}>Client Retention</p>
            </div>
            <div>
              <p className={`${styles.p4} max-w-[150px] font-inter `}>Delivering consistent value that builds lasting client relationships.</p>
            </div>
          </div>
          <div className="bg-[#182132] flex flex-col justify-center text-center p-6 lg:p-8 border border-[#676767] rounded-lg lg:pt-10">
            <Image src={aboutImages.Aimg19} alt="Users" width={38} height={38} className="mx-auto mb-2 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            <h5 className={`${styles.p1} font-bold`}>100K</h5>
            <p className={`${styles.p4} font-inter`}>User Impacted</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#182132] flex items-center py-6 lg:py-8 ps-6 lg:ps-8 pe-8 lg:pe-10 w-[360px] lg:w-[435px] border border-[#676767] rounded-lg">
            <div className="text-white border-r border-[#224872] pr-0 lg:pr-3 mr-5">
              <Image src={aboutImages.Aimg20} alt="Shield" width={40} height={40} className="mb-1 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
              <h5 className={`${styles.p1} font-bold`}>90%</h5>
              <p className={`${styles.p4} font-inter`}>Automation Efficiency</p>
            </div>
            <div>
              <p className={`${styles.p4} max-w-[180px] lg:max-w-[210px] pt-1 font-inter`}>Streamlining processes to save time and boost productivity.</p>
            </div>
          </div>
          <div className="bg-[#182132] p-5 lg:p-8 border border-[#676767] text-center rounded-lg mr-0  md:mr-2 lg:mr-0">
            <Image src={aboutImages.Aimg21} alt="Users" width={48} height={48} className="mb-0 mx-auto w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <h5 className={`${styles.p1} font-bold`}>10/10</h5>
            <p className={`${styles.p4} font-inter`}>Preferred Partner</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseQubitars;

