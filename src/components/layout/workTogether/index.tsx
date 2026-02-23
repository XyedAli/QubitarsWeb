"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { styles } from "@/styles/style";
import { getHomeCloudinaryImages } from "@/lib/assets/images";

const WorkTogether = () => {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  const images = getHomeCloudinaryImages();
  return (
    <section className="bg-white py-8 lg:py-10 xl:py-13">
      <div className={styles.sectionPadding}>
        <div className="gap-4 md:gap-6 lg:gap-8">
          {/* <span className={`${styles.h3} font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] block`}>Excited?</span> */}
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 group">
            <h2 className="text-[28px] md:text-[49px] lg:text-[54px] xl:text-[60px] font-bold text-[#1E274F] font-outfit transition-all duration-300">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-3 text-[#1E274F] transition-all duration-300 group-hover:scale-115 active:scale-95 active:opacity-80 active:bg-gradient-to-r active:from-[#F05C22] active:via-[#F58220] active:to-[#EA4D24] active:bg-clip-text active:text-transparent touch-manipulation"
              >
                Let&apos;s Work Together
                <span className="inline-flex flex-shrink-0 transition-all duration-300 group-hover:ml-1 md:group-hover:ml-2 group-hover:translate-x-0.5 group-hover:scale-110 group-active:ml-1 md:group-active:ml-2 group-active:translate-x-0 group-active:scale-105">
                  <Image src={images.emailicon} alt="call to action" width={80} height={80} className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-21 xl:h-21 object-contain" unoptimized />
                </span>
              </Link>

            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
