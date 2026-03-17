import type { Metadata } from "next";
import { baseMetadata, defaultOpenGraph, defaultTwitter } from "./base";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubitars.com";

/** Normalize path: no trailing slash, ensure leading slash. Used for canonical and OG URL. */
function normalizeCanonicalPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? p : p.replace(/\/+$/, "");
}

/** Page metadata: image, title, description (aligned with hero sections where applicable). */
export interface PageMeta {
  image: string;
  title: string;
  description: string;
}

/** Default OG image used when no page-specific image is set. */
export const DEFAULT_OG_IMAGE = "/assets/images/navbar/Logo.png";

/** Static pages: image, title, description (hero content where applicable). */
export const staticPagesMeta: Record<string, PageMeta> = {
  home: {
    image: DEFAULT_OG_IMAGE,
    title: "Qubitars Technology - Your Partner in Digital Innovation",
    description:
      "Qubitars Technology provides cutting-edge AI solutions, custom software development, web and mobile app development, and digital transformation services. Partner with us for innovative technology solutions.",
  },
  "about-us": {
    image: DEFAULT_OG_IMAGE,
    title: "About Us",
    description:
      "Learn about Qubitars Technology - our mission, vision, core values, and the team behind innovative AI solutions and digital transformation services. Discover what makes us your trusted technology partner.",
  },
  contact: {
    image: DEFAULT_OG_IMAGE,
    title: "Contact Us",
    description:
      "Get in touch with Qubitars Technology. Contact our team for AI solutions, custom software development, web and mobile app development, and digital transformation services. We're here to help transform your business.",
  },
  "case-studies": {
    image: DEFAULT_OG_IMAGE,
    title: "Case Studies",
    description:
      "Explore Qubitars Technology's portfolio of successful projects and case studies. See how we've helped businesses transform with AI solutions, custom software development, and digital innovation.",
  },
  blogs: {
    image: DEFAULT_OG_IMAGE,
    title: "Blog",
    description:
      "Read the latest insights, articles, and updates from Qubitars Technology on AI development, software engineering, digital transformation, technology trends, and industry best practices.",
  },
  services: {
    image: DEFAULT_OG_IMAGE,
    title: "Our Services",
    description:
      "Explore Qubitars Technology's comprehensive range of services including AI development, custom software development, web and mobile app development, digital transformation, and technology consulting.",
  },
  industries: {
    image: DEFAULT_OG_IMAGE,
    title: "Industries",
    description: "Industry-focused solutions and digital transformation.",
  },
  careers: {
    image: DEFAULT_OG_IMAGE,
    title: "Careers - Where Passion Meets Opportunity",
    description:
      "Empowering Talent. Building the Future. Join a team where innovation, collaboration, and growth are part of everyday life. Turn your curiosity into expertise and your skills into real-world impact.",
  },
  "apply-now": {
    image: DEFAULT_OG_IMAGE,
    title: "Apply Now - Shape Your Career Path",
    description:
      "Apply to join Qubitars Technology. Upload your resume and shape your career path with a team where innovation and growth are part of everyday life.",
  },
  "engagement-models": {
    image: DEFAULT_OG_IMAGE,
    title: "Engagement Models - Tailored Engagement, Maximum Value",
    description:
      "Engage Smarter, Build Faster. Choose an engagement structure that fits your business today, while leaving room for where you're headed next. Start lean, scale confidently, and adjust seamlessly.",
  },
};

/** Service pages: id-based metadata from hero section heading and description. */
export const servicesMeta: Record<string, PageMeta> = {
  "staff-augmentation": {
    image: DEFAULT_OG_IMAGE,
    title: "Staff Augmentation - Strengthen Your Team With Proven Talent",
    description:
      "Bring in experienced professionals who seamlessly collaborate with your internal teams to deliver projects faster and more efficiently.",
  },
  devops: {
    image: DEFAULT_OG_IMAGE,
    title: "DevOps - Reliable DevOps For Every Platform",
    description:
      "We accelerate software delivery by automating workflows, optimizing CI/CD pipelines, and ensuring reliable, secure, high-performance systems at scale.",
  },
  "product-design": {
    image: DEFAULT_OG_IMAGE,
    title: "Product Design - We Design What Moves Business Forward",
    description:
      "We design user-centered products and experiences that move business forward, from discovery and strategy to design and validation.",
  },
  "ai-development": {
    image: DEFAULT_OG_IMAGE,
    title: "AI Development | Qubitars Technology",
    description:
      "AI development and integration services. From AI consultation to agents, workflow automation, and generative AI solutions.",
  },
  "custom-software-development": {
    image: DEFAULT_OG_IMAGE,
    title: "Custom Software Development",
    description:
      "We build custom software solutions tailored to your business needs, from enterprise platforms to scalable applications.",
  },
  "web-development": {
    image: DEFAULT_OG_IMAGE,
    title: "Web App Development",
    description:
      "We build scalable web applications, from enterprise platforms to consumer apps and PWAs, using modern frameworks or custom code.",
  },
  "mobile-app-development": {
    image: DEFAULT_OG_IMAGE,
    title: "Mobile App Development",
    description:
      "We design and develop mobile apps, from consumer-friendly apps to enterprise-grade solutions, for iOS, Android, or cross-platform frameworks.",
  },
  "mvp-development": {
    image: DEFAULT_OG_IMAGE,
    title: "MVP Development",
    description:
      "We build fast, functional MVPs to validate ideas, attract early users, and secure funding quickly.",
  },
  "saas-development": {
    image: DEFAULT_OG_IMAGE,
    title: "SAAS Development",
    description:
      "We build scalable SaaS platforms, from MVPs to enterprise-grade multi-tenant solutions with secure cloud architecture.",
  },
  "low-code-no-code": {
    image: DEFAULT_OG_IMAGE,
    title: "Low Code / No Code Development",
    description:
      "We deliver fast, scalable applications using low-code and no-code platforms, accelerating time-to-market without compromising quality.",
  },
  "ux-ui-design": {
    image: DEFAULT_OG_IMAGE,
    title: "UI/UX Design",
    description:
      "We design user-centered interfaces that simplify complexity, accelerate conversions, and deliver measurable product performance.",
  },
};

/** Industry pages: id-based metadata from hero (first card title + description). */
export const industriesMeta: Record<string, PageMeta> = {
  "real-estate": {
    image: DEFAULT_OG_IMAGE,
    title: "Real Estate",
    description:
      "From property data to client workflows, we modernize how real estate teams operate, collaborate, and deliver results. Built for real estate.",
  },
  "travel-hospitality": {
    image: DEFAULT_OG_IMAGE,
    title: "Travel & Hospitality",
    description:
      "From AI-powered recommendations to contactless check-ins, we craft digital experiences that delight guests, boost loyalty, and simplify operations.",
  },
  "oil-gas-energy": {
    image: DEFAULT_OG_IMAGE,
    title: "Oil Gas & Energy",
    description:
      "From smart grids to predictive analytics, we create solutions that maximize efficiency, safety, and resource management. Reduced risk operations.",
  },
  "banking-fintech": {
    image: DEFAULT_OG_IMAGE,
    title: "Banking & FinTech",
    description:
      "From AI fraud detection to blockchain-powered systems, we deliver secure, transparent, and efficient financial solutions. Seamless digital banking.",
  },
  healthcare: {
    image: DEFAULT_OG_IMAGE,
    title: "Healthcare",
    description:
      "From telemedicine to AI diagnostics, we build platforms that enhance patient care, streamline operations, and improve outcomes. Digital healthcare redefined.",
  },
  edtech: {
    image: DEFAULT_OG_IMAGE,
    title: "EdTech",
    description:
      "From AI tutors to interactive platforms, we create learning experiences that inspire students and empower educators. Digital classrooms that engage.",
  },
  startups: {
    image: DEFAULT_OG_IMAGE,
    title: "Startups",
    description:
      "From MVPs to scalable platforms, we turn bold ideas into impactful products that capture markets quickly. Digital solutions for startups.",
  },
};

/** Get metadata for a static page by id (e.g. 'home', 'about-us', 'contact'). */
export function getStaticPageMeta(pageId: string): PageMeta | undefined {
  return staticPagesMeta[pageId];
}

/** Get metadata for a service page by id (e.g. 'staff-augmentation', 'devops'). */
export function getServiceMeta(serviceId: string): PageMeta | undefined {
  return servicesMeta[serviceId];
}

/** Get metadata for an industry page by id (e.g. 'real-estate', 'healthcare'). */
export function getIndustryMeta(industryId: string): PageMeta | undefined {
  return industriesMeta[industryId];
}

/**
 * Build full Next.js Metadata from PageMeta.
 * - Canonical: always set with absolute URL (no trailing slash) to avoid duplicate content.
 * - Open Graph: absolute URLs for url and image so FB, Instagram, LinkedIn, WhatsApp, Slack show correct previews.
 * - Twitter Card: same title/description/image for Twitter and platforms that fall back to OG.
 */
export function buildPageMetadata(
  meta: PageMeta,
  options: { canonicalPath?: string; titleTemplate?: boolean } = {}
): Metadata {
  const { canonicalPath, titleTemplate } = options;
  const title = titleTemplate !== false ? `${meta.title} | Qubitars Technology` : meta.title;
  const path = canonicalPath != null ? normalizeCanonicalPath(canonicalPath) : "";
  const canonicalUrl = path ? `${siteUrl}${path}` : siteUrl;
  const imageUrl =
    meta.image.startsWith("http") ? meta.image : `${siteUrl}${meta.image.startsWith("/") ? meta.image : `/${meta.image}`}`;

  return {
    ...baseMetadata,
    title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      ...defaultOpenGraph,
      type: "website",
      url: canonicalUrl,
      title,
      description: meta.description,
      siteName: "Qubitars Technology",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      ...defaultTwitter,
      title,
      description: meta.description,
      images: [imageUrl],
    },
  };
}

/** Get and build Metadata for a static page. */
export function getStaticPageMetadata(
  pageId: string,
  options: { canonicalPath?: string; titleTemplate?: boolean } = {}
): Metadata {
  const meta = getStaticPageMeta(pageId);
  if (!meta) return { ...baseMetadata, title: "Qubitars Technology" };
  return buildPageMetadata(meta, {
    canonicalPath: options.canonicalPath ?? `/${pageId === "home" ? "" : pageId}`,
    titleTemplate: options.titleTemplate ?? pageId !== "home",
  });
}

/** Get and build Metadata for a service page by id. */
export function getServicePageMetadata(
  serviceId: string,
  options: { titleTemplate?: boolean } = {}
): Metadata {
  const meta = getServiceMeta(serviceId);
  if (!meta) return { ...baseMetadata, title: "Services | Qubitars Technology" };
  return buildPageMetadata(meta, {
    canonicalPath: `/${serviceId}`,
    titleTemplate: options.titleTemplate ?? true,
  });
}

/** Get and build Metadata for an industry page by id. */
export function getIndustryPageMetadata(
  industryId: string,
  options: { titleTemplate?: boolean } = {}
): Metadata {
  const meta = getIndustryMeta(industryId);
  if (!meta) return { ...baseMetadata, title: "Industries | Qubitars Technology" };
  return buildPageMetadata(meta, {
    canonicalPath: `/industries/${industryId}`,
    titleTemplate: options.titleTemplate ?? true,
  });
}
