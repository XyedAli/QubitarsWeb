"use client";

import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import Button from "@/components/shared/ui/button/Button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { getChooseQubitarsIcons } from "@/lib/assets/icons";
import {chooseQubitarsCards,qualitySecurityData,} from "@/data/digital-transformation/chooseQubitars";
import Link from "next/link";
const ChooseQubitars = () => {
  const qubitarsIcons = getChooseQubitarsIcons();

  return (
    <section className="bg-gray-50">
      <div className={combine(styles.sectionPaddingY, styles.sectionPadding)}>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Technology You Can Trust"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
            {chooseQubitarsCards.map((card, index) => (
              <div
                key={index}
                className={`bg-[#F0F4F9] rounded-xl p-4 xl:p-5 ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-3 xl:mb-4">
                  <div className="w-14 h-14 rounded-full border border-blue flex items-center justify-center">
                    <Image
                      src={qubitarsIcons[card.iconKey]}
                      alt={card.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <h3
                  className={combine(
                    styles.h5,
                    "mb-2 xl:mb-3 text-blue font-semibold"
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={combine(
                    styles.p2,
                    "text-blue leading-relaxed font-inter"
                  )}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#1E2A5A] rounded-2xl p-4 xl:p-7 text-white flex flex-col justify-between">
            <div>
              <div className="mb-3 xl:mb-4">
                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                  <Image
                    src={qubitarsIcons[qualitySecurityData.iconKey]}
                    alt={qualitySecurityData.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              </div>

              <h3
                className={combine(
                  styles.h5,
                  "mb-2 xl:mb-4 text-white font-semibold"
                )}
              >
                {qualitySecurityData.title}
              </h3>

              <p
                className={combine(
                  styles.p2,
                  "text-gray-200 leading-relaxed mb-3 font-inter"
                )}
              >
                {qualitySecurityData.description1}
              </p>

              <p
                className={combine(
                  styles.p2,
                  "text-gray-200 leading-relaxed font-inter"
                )}
              >
                {qualitySecurityData.description2}
              </p>
            </div>
            <Link href="/contact">
            <Button variant="accent" size="lg" className="mt-10 group w-54">
              Let's Talk Design
              <MoveRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseQubitars;