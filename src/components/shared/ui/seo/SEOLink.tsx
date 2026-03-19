import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

type SEOLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
  /** Visible label for screen readers when children are decorative */
  "aria-label"?: string;
};

/**
 * Crawlable internal/external link. Prefer this (or shared Button with href) over
 * &lt;button&gt; for navigation so search engines discover URLs.
 */
export default function SEOLink({ className, children, ...props }: SEOLinkProps) {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
