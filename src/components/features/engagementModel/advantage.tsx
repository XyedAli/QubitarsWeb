"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";
import { getEngagementModelCloudinaryImages } from "@/lib/assets/images";
import { advantageSection } from "@/data/engModel";

const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

const Advantage = () => {
  const images = getEngagementModelCloudinaryImages();
  const items = advantageSection.items.map((item) => ({
    ...item,
    icon: images[item.iconKey],
  }));

  return (
    <div>
      <div className={styles.sectionPadding + " pb-5 lg:pb-0"} style={{ backgroundColor: "#FDFDFD" }}>
        <div className="flex items-center justify-between">
          <SectionHeading subtitle={advantageSection.subtitle} title={advantageSection.title} />
          <div className="hidden lg:block shrink-0">
            <Button
              variant="accent"
              size="lg"
              className="gap-2 font-inter hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              onClick={scrollToContact}
            >
              Discuss Your Needs
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-23 items-center">
          <div className="md:col-span-6 relative w-full overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.advantageImg}
              alt="Advantage"
              className="w-full h-[360px] md:h-[440px] lg:h-[500px] xl:h-[600px]"
            />
          </div>
          <div className="md:col-span-6 space-y-0 lg:space-y-2 xl:space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex gap-4 mb-4 xl:mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white">
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="w-14 h-14 object-contain"
                      unoptimized={item.icon.includes("cloudinary.com")}
                    />
                  </div>
                  <div>
                    <h3 className={`${styles.h6} font-bold text-blue mb-1 lg:mb-3 xl:mb-4 leading-tight font-outfit`}>
                      {item.title}
                    </h3>
                    <p className={`${styles.p2} text-gray-600 leading-relaxed font-inter max-w-lg`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-3 md:mt-8 lg:mt-0 lg:hidden">
          <Button
            variant="accent"
            size="lg"
            className="gap-2 font-inter hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            onClick={scrollToContact}
          >
            Discuss Your Needs
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
