import Link from "next/link";
import { styles, combine } from "@/styles/style";
import { staticRoutes, serviceSlugs } from "@/lib/sitemap";
import { industrySlugs } from "@/data/industries/industrySlugs";
import { servicesMeta } from "@/lib/metadata";
import { Map, MapPin } from "lucide-react";

const staticLabels: Record<string, string> = {
  "": "Home",
  "about-us": "About Us",
  contact: "Contact",
  "case-studies": "Case Studies",
  blogs: "Blogs",
  industries: "Industries",
  careers: "Careers",
  "apply-now": "Apply Now",
  "engagement-models": "Engagement Models",
};

function getServiceLabel(slug: string): string {
  const meta = servicesMeta[slug];
  if (meta?.title) {
    const withoutSuffix = meta.title.replace(/\s*\|.*$/, "").trim();
    const beforeDash = withoutSuffix.split(/\s+-\s+/)[0]?.trim();
    return beforeDash || withoutSuffix;
  }
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const metadata = {
  title: "Sitemap | Qubitars Technology",
  description:
    "Browse all pages on Qubitars Technology - company, services, industries, and more.",
};

export default function SitemapPage() {
  const mainRoutes = staticRoutes.filter((r) => r.path === "" || r.path === "contact");
  const companyRoutes = staticRoutes.filter(
    (r) => !["", "contact"].includes(r.path)
  );

  return (
    <div className="min-h-screen bg-white">
      <section className={combine(styles.sectionPadding, "pt-24 pb-12 md:pt-28")}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Map className="w-8 h-8 text-blue" aria-hidden />
            <h1 className={combine(styles.h2, "font-bold text-blue")}>Sitemap</h1>
          </div>
          <p className={combine(styles.p2, "text-gray-600 mb-10")}>
            Find all pages and sections of Qubitars Technology in one place.
          </p>

          <div className="grid gap-10 md:gap-12">
            {/* Main */}
            <div>
              <h2 className={combine(styles.h5, "font-semibold text-blue border-b border-gray-200 pb-2 mb-4")}>
                Main
              </h2>
              <ul className="space-y-2">
                {mainRoutes.map((route) => (
                  <li key={route.path || "home"}>
                    <Link
                      href={route.path ? `/${route.path}` : "/"}
                      className="text-gray-700 hover:text-accent hover:underline transition-colors font-inter"
                    >
                      {staticLabels[route.path] ?? (route.path || "Home")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className={combine(styles.h5, "font-semibold text-blue border-b border-gray-200 pb-2 mb-4")}>
                Company
              </h2>
              <ul className="space-y-2">
                {companyRoutes.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path ? `/${route.path}` : "/"}
                      className="text-gray-700 hover:text-accent hover:underline transition-colors font-inter"
                    >
                      {staticLabels[route.path] ?? route.path}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className={combine(styles.h5, "font-semibold text-blue border-b border-gray-200 pb-2 mb-4")}>
                Services
              </h2>
              <ul className="space-y-2">
                {serviceSlugs.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      className="text-gray-700 hover:text-accent hover:underline transition-colors font-inter"
                    >
                      {getServiceLabel(slug)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h2 className={combine(styles.h5, "font-semibold text-blue border-b border-gray-200 pb-2 mb-4")}>
                Industries
              </h2>
              <ul className="space-y-2">
                {industrySlugs.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/industries/${item.id}`}
                      className="text-gray-700 hover:text-accent hover:underline transition-colors font-inter"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>For search engines:</span>
            <Link
              href="/sitemap.xml"
              className="text-accent hover:underline font-medium inline-flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4" />
              View XML Sitemap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
