/**
 * Global SEO keywords merged into every page metadata (plus optional per-page extras).
 * Keep phrases relevant to Qubitars offerings and search intent.
 */
export const globalSeoKeywords: string[] = [
  "Qubitars Technology",
  "AI development company",
  "AI development services",
  "web development company",
  "web application development",
  "mobile app development",
  "custom software development",
  "software development services",
  "digital transformation",
  "digital transformation consulting",
  "staff augmentation",
  "dedicated development team",
  "DevOps services",
  "cloud consulting",
  "UI UX design agency",
  "product design",
  "MVP development",
  "SaaS development",
  "low code development",
  "quality assurance testing",
  "software testing services",
  "engagement models",
  "technology partner",
  "enterprise software",
  "startup development",
  "Pakistan software company",
  "offshore development team",
];

export function mergeSeoKeywords(...groups: (string[] | undefined)[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of groups) {
    if (!group) continue;
    for (const raw of group) {
      const k = raw.trim();
      if (!k || seen.has(k.toLowerCase())) continue;
      seen.add(k.toLowerCase());
      out.push(k);
    }
  }
  return out;
}
