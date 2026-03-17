import type { MetadataRoute } from "next";
import {
  staticRoutes,
  serviceSlugs,
  servicePriority,
  serviceChangeFrequency,
  industryPriority,
  industryChangeFrequency,
} from "@/lib/sitemap";
import { industryIds } from "@/data/industries/industrySlugs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubitars.com";

function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? baseUrl : `${baseUrl}${p}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: url(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: url(slug),
    lastModified,
    changeFrequency: serviceChangeFrequency,
    priority: servicePriority,
  }));

  const industryEntries: MetadataRoute.Sitemap = industryIds.map((id) => ({
    url: url(`industries/${id}`),
    lastModified,
    changeFrequency: industryChangeFrequency,
    priority: industryPriority,
  }));

  return [...staticEntries, ...serviceEntries, ...industryEntries];
}
