import Image, { type ImageProps } from "next/image";

const GENERIC = /^(image|img|photo|picture|icon|logo|banner|bg|background)$/i;

type SEOImageProps = Omit<ImageProps, "alt"> & {
  /** Prefer descriptive text; empty or generic values use context or brand fallback */
  alt?: string;
  /** When alt is empty/generic, use this (e.g. section or card title) */
  context?: string;
};

/**
 * Next.js Image with enforced non-empty, meaningful alt for SEO and a11y.
 */
export default function SEOImage({ alt, context, ...props }: SEOImageProps) {
  const trimmed = alt?.trim() ?? "";
  let effective = trimmed;
  if (!effective || GENERIC.test(effective)) {
    effective = context?.trim() || "Qubitars Technology — illustration and visual content";
  }
  return <Image {...props} alt={effective} />;
}
