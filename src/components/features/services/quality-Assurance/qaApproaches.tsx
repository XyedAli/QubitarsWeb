import Image from "next/image";
import { Check } from "lucide-react";
import { combine, styles } from "@/styles/style";
import { getQACloudinaryImages } from "@/lib/assets/images";
import { getQAApproachIcons } from "@/lib/assets/icons";
import { QA_APPROACHES } from "@/data/qualityAssurance";
import { SectionHeading } from "@/components/shared/headings";

const APPROACH_ICON_BY_ID: Record<string, "qaIcon1" | "qaIcon2" | "qaIcon3"> = {
  manual: "qaIcon1",
  automated: "qaIcon2",
  performance: "qaIcon3",
};
const QAApproaches = () => {
  const qa = getQACloudinaryImages();
  const approachIcons = getQAApproachIcons();
  const imageById: Record<string, string> = {
    manual: qa.QAimg2,
    automated: qa.QAimg3,
    performance: qa.QAimg4,
  };

  return (
    <section className={combine(styles.sectionPadding,styles.sectionPaddingY, "bg-white")}>
      <SectionHeading
        title="Methods We Use To Ensure Product Quality"
        subtitle="QA Approaches"
      />
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-7 md:gap-12 lg:gap-16 xl:gap-24">
          {QA_APPROACHES.map((block, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={block.id}
                className={combine(
                  "flex flex-col gap-8 lg:gap-12 xl:gap-16 items-stretch lg:items-center",
                  isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-[270px] md:h-[350px] lg:h-[380px] w-full max-w-[560px] mx-auto lg:mx-0 aspect-[4/3] overflow-hidden">
                    <Image
                      src={imageById[block.id]}
                      alt={block.imageAlt}
                      fill
                      className=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="flex flex-col justify-center">
                    <div className="mb-3 shrink-0">
                      <Image
                        src={approachIcons[APPROACH_ICON_BY_ID[block.id]]}
                        alt={`${block.title} icon`}
                        width={40}
                        height={40}
                        className="w-8 h-8 xl:w-12 md:w-10 md:h-10 xl:h-12 object-contain"
                      />
                    </div>
                    <h3 className={combine(styles.h5, "font-bold text-blue mb-2 lg:mb-4")}>
                      {block.title}
                    </h3>
                    <p className={combine(styles.p2, "text-gray-600 leading-relaxed mb-4 lg:mb-6 xl:mb-8")}>
                      {block.description}
                    </p>
                    <ul className="space-y-2 lg:space-y-3 xl:space-y-4">
                      {block.bullets.map((line) => (
                        <li key={line} className={combine(styles.flexitems, "gap-3 items-start")}>
                          <span className="lg:-mt-1.5 shrink-0 flex items-center justify-center">
                            <Check className="w-6 xl:w-8 h-6 xl:h-8 text-accent " />
                          </span>
                          <span className={combine(styles.p2, "text-gray-700 leading-snug")}>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QAApproaches;
