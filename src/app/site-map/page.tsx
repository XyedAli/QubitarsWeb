import Link from "next/link";
import { styles, combine } from "@/styles/style";
import { staticRoutes } from "@/lib/sitemap";
import { industrySlugs } from "@/data/industries/industrySlugs";
import { capabilitiesData, additionalServices } from "@/data";
import { Map, MapPin, ArrowUpRight } from "lucide-react";

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

export const metadata = {
  title: "Sitemap | Qubitars Technology",
  description:
    "Browse all pages on Qubitars Technology - company, services, industries, and more.",
};

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-3 mb-5">
      <span className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-[#F58220] shrink-0" />
      <span className={combine(styles.h5, "font-bold text-[#1E274F] tracking-tight")}>
        {title}
      </span>
    </h2>
  );
}

function SitemapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 py-2.5 px-3 -mx-3 rounded-lg text-gray-600 hover:text-accent hover:bg-accent/5 transition-all duration-200 font-inter text-sm md:text-base border border-transparent hover:border-accent/20"
    >
      <span className="group-hover:translate-x-0.5 transition-transform">{children}</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shrink-0 text-accent" />
    </Link>
  );
}

export default function SitemapPage() {
  const mainRoutes = staticRoutes.filter((r) => r.path === "" || r.path === "contact");
  const companyRoutes = staticRoutes.filter(
    (r) => !["", "contact"].includes(r.path)
  );

  const aiCapability = capabilitiesData.find((c) => c.id === "ai-ml");
  const digitalCapability = capabilitiesData.find((c) => c.id === "digital-transformation");

  return (
    <div className="min-h-screen bg-[#FAFAFC]">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E274F] via-[#1a2244] to-[#171F3D] text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className={combine(styles.sectionPadding, "max-w-6xl mx-auto py-20 relative")}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
              <Map className="w-7 h-7 text-white" aria-hidden />
            </div>
            <div>
              <h1 className={combine(styles.h2, "font-bold text-white tracking-tight")}>
                Sitemap
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-1 max-w-xl font-inter">
                Every page and section in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={combine(styles.sectionPadding, "py-10 md:py-14")}>
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100/80">
            <SectionHeading title="Main" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-0">
              {mainRoutes.map((route) => (
                <SitemapLink
                  key={route.path || "home"}
                  href={route.path ? `/${route.path}` : "/"}
                >
                  {staticLabels[route.path] ?? (route.path || "Home")}
                </SitemapLink>
              ))}
            </div>
       

          <div className="bg-white rounded-2xl p-6 md:p-8 ">
            <SectionHeading title="Company" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-0">
              {companyRoutes.map((route) => (
                <SitemapLink
                  key={route.path}
                  href={route.path ? `/${route.path}` : "/"}
                >
                  {staticLabels[route.path] ?? route.path}
                </SitemapLink>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6  ">
            <SectionHeading title="Services" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-0">
              {additionalServices.map((svc) => (
                <SitemapLink key={svc.id} href={svc.href}>
                  {svc.name}
                </SitemapLink>
              ))}
            </div>
            
          <div className="bg-white rounded-2xl p-8">
            <SectionHeading title="Digital Transformation" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-0">
              {digitalCapability?.items.map((item) => (
                <SitemapLink key={item.id} href={item.href}>
                  {item.name}
                </SitemapLink>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <SectionHeading title="AI & ML Development" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-0">
              {aiCapability?.items.map((item) => (
                <SitemapLink key={item.id} href={item.href}>
                  {item.name}
                </SitemapLink>
              ))}
            </div>
          </div>

          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8">
            <SectionHeading title="Industries" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-0">
              {industrySlugs.map((item) => (
                <SitemapLink key={item.id} href={`/industries/${item.id}`}>
                  {item.label}
                </SitemapLink>
              ))}
            </div>
          </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 bg-white/80 backdrop-blur rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
            <span className="text-gray-500">For search engines</span>
            <Link
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E274F]/5 text-accent hover:bg-accent/10 font-medium transition-colors"
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
