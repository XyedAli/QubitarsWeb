// Centralized metadata — single source: pages.ts (image, title, description)
export {
  type PageMeta,
  DEFAULT_OG_IMAGE,
  staticPagesMeta,
  servicesMeta,
  industriesMeta,
  getStaticPageMeta,
  getServiceMeta,
  getIndustryMeta,
  buildPageMetadata,
  getStaticPageMetadata,
  getServicePageMetadata,
  getIndustryPageMetadata,
} from "./pages";

export { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";
export { globalSeoKeywords, mergeSeoKeywords } from "./keywords";

// Static page metadata (from single source for backward compatibility)
import { getStaticPageMetadata } from "./pages";

export const homeMetadata = getStaticPageMetadata("home", {
  canonicalPath: "/",
  titleTemplate: false,
});
export const aboutMetadata = getStaticPageMetadata("about-us");
export const contactMetadata = getStaticPageMetadata("contact");
export const blogsMetadata = getStaticPageMetadata("blogs");
export const caseStudiesMetadata = getStaticPageMetadata("case-studies");
export const servicesMetadata = getStaticPageMetadata("services");
export const sitemapMetadata = getStaticPageMetadata("site-map", {
  canonicalPath: "/site-map",
  titleTemplate: true,
});
