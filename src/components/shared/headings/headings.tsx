import { styles } from "@/styles/style";
import type { SectionHeadingProps } from "@/lib/types/home";

const SUBTITLE_BASE = `${styles.h6} font-extrabold md:font-bold capitalize inline-block`;
const TITLE_BASE = `${styles.h2} font-semibold leading-tight font-outfit`;

export const SectionHeading = ({ subtitle, title, subtitleColor, titleColor }: SectionHeadingProps) => (
  <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
    {subtitle && (
      <div className="flex items-center gap-2 mb-1">
        <span
          className={subtitleColor ? SUBTITLE_BASE : `${SUBTITLE_BASE} bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}
          style={subtitleColor ? { color: subtitleColor } : undefined}
        >
          {subtitle}
        </span>
      </div>
    )}
    {title && (
      <h2
        className={titleColor ? TITLE_BASE : `${TITLE_BASE} text-blue`}
        style={titleColor ? { color: titleColor } : undefined}
      >
        {title}
      </h2>
    )}
  </div>
);
