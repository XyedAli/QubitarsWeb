/**
 * Sitemap route definitions: path, priority (index importance), and changeFrequency.
 * Kept in sync with app routes and metadata/pages.ts.
 */

export type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

/** Static pages: path (no leading slash for home = ""), priority 0.0–1.0, changeFrequency. */
export const staticRoutes: SitemapRoute[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "about-us", priority: 0.9, changeFrequency: "monthly" },
  { path: "contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "industries", priority: 0.9, changeFrequency: "monthly" },
  { path: "careers", priority: 0.8, changeFrequency: "weekly" },
  { path: "apply-now", priority: 0.8, changeFrequency: "weekly" },
  { path: "engagement-models", priority: 0.8, changeFrequency: "monthly" },
];

/** Service page slugs (segment only). Priority and changeFrequency applied in build. */
export const serviceSlugs = [
  "staff-augmentation",
  "devops",
  "product-design",
  "ai-development",
  "custom-software-development",
  "web-development",
  "mobile-app-development",
  "mvp-development",
  "saas-development",
  "low-code-no-code",
  "ux-ui-design",
] as const;

/** Default priority for service pages. */
export const servicePriority = 0.8 as const;
/** Default changeFrequency for service pages. */
export const serviceChangeFrequency: ChangeFrequency = "monthly";

/** Default priority for industry detail pages. */
export const industryPriority = 0.7 as const;
/** Default changeFrequency for industry pages. */
export const industryChangeFrequency: ChangeFrequency = "monthly";
