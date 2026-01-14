import { styles } from "@/styles/style";

interface SectionHeadingProps {
  subtitle?: string;
  title?: string;
  highlightedText?: string;
}

export const SectionHeading = ({ subtitle, title, highlightedText }: SectionHeadingProps) => {
  return (
    <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
      <div className="flex items-center gap-2 mb-2">
        <span className={`${styles.h6} font-semibold capitalize inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24]`}>
          {subtitle}
        </span>
      </div>
      <h2 className={`${styles.h1} font-semibold text-blue leading-tight font-outfit`}>
        {title}
      </h2>
    </div>
  );
};

