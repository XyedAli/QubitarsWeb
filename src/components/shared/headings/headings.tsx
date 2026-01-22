import { styles } from "@/styles/style";

interface SectionHeadingProps {
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  subtitleColor?: string;
  titleColor?: string;
}

export const SectionHeading = ({ subtitle, title, highlightedText, subtitleColor, titleColor }: SectionHeadingProps) => {
  const subtitleClassName = subtitleColor
    ? `${styles.h6} font-bold capitalize inline-block`
    : `${styles.h6} font-bold capitalize inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`;

  const titleClassName = titleColor
    ? `${styles.h1} font-semibold leading-tight font-outfit`
    : `${styles.h1} font-semibold text-blue leading-tight font-outfit`;

  return (
    <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
      <div className="flex items-center gap-2 mb-1">
        <span className={subtitleClassName} style={subtitleColor ? { color: subtitleColor } : undefined}>
          {subtitle}
        </span>
      </div>
      <h2 className={titleClassName} style={titleColor ? { color: titleColor } : undefined}>
        {title}
      </h2>
    </div>
  );
};

