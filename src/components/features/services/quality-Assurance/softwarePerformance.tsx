import { combine, styles } from "@/styles/style";
import { SOFTWARE_PERFORMANCE_ITEMS } from "@/data/qualityAssurance/softwarePerformance";
import { SectionHeading } from "@/components/shared/headings";
const BLUE = "text-blue stroke-blue";
const DIVIDER = "border-gray-200";

function HeaderGraphic() {
  return (
    <div className="relative shrink-0 w-[140px] h-[100px] sm:w-[160px] sm:h-[112px]" aria-hidden>
      <div className="absolute left-0 top-4 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-blue/15 border-2 border-blue/35" />
      <div className="absolute left-8 top-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-blue/25 border-2 border-blue/45" />
      <div className="absolute left-14 top-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue/20 border-2 border-blue/40" />
    </div>
  );
}

export default function SoftwarePerformance() {
  return (
    <section
      className={combine(styles.sectionPadding, "bg-white py-14 md:py-18 lg:py-20 xl:py-24")}
      aria-labelledby="software-performance-heading"
    >
      <div className="w-full">
        <SectionHeading
          subtitle="Testing Solutions"
          title="Ensuring reliable secure software performance"
        />
        <div className={combine("grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 overflow-hidden")}>
          {SOFTWARE_PERFORMANCE_ITEMS.map((item, index) => {
            const { Icon, title, description, id } = item;
            return (
              <article
                key={id}
                className={combine(
                  "px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11 border-t-2 border-gray-300",
                  index < 2 && "",
                  index % 2 === 0 && ""
                )}
              >
                <div className={combine(styles.flexBetween, styles.flexitems, "gap-4 mb-4 lg:mb-5")}>
                  <h3 className={combine(styles.h5, "font-bold text-[#1a1a1a] text-left")}>{title}</h3>
                  <Icon className={combine("w-7 h-7 sm:w-8 sm:h-8 shrink-0", BLUE)} strokeWidth={1.35} aria-hidden />
                </div>
                <p className={combine(styles.p2, "text-[#4a4a4a] leading-relaxed text-left")}>{description}</p>
              </article>
            );
          })}
        </div>
        <div
          className={combine(
            styles.flexitems,
            "flex-col sm:flex-row sm:items-start sm:justify-between gap-8 lg:gap-12 pb-10 lg:pb-12 pt-11 border-t-2 border-gray-3 00"
          )}
        >
          <div className="min-w-0 flex-1 max-w-2xl">
            <h2
              id="software-performance-heading"
              className={combine(styles.h2, "font-bold text-[#1a1a1a] mb-4 lg:mb-5 tracking-tight")}
            >
              Usability Testing
            </h2>
            <p className={combine(styles.p2, "text-[#4a4a4a] leading-relaxed max-w-5xl")}>
              By analyzing real user interactions and behavioral patterns, we assess how intuitive and efficient your product experience is. This process helps uncover usability challenges and opportunities to enhance user satisfaction.
            </p>
          </div>
          <HeaderGraphic />
        </div>

      </div>
    </section>
  );
}
