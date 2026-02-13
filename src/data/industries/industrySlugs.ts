/** Industry slugs for URL and tabs – /industries/[id] */

export interface IndustrySlug {
  id: string;
  label: string;
}

export const industrySlugs: IndustrySlug[] = [
  { id: "real-estate", label: "Real Estate" },
  { id: "travel-hospitality", label: "Travel & Hospitality" },
  { id: "oil-gas-energy", label: "Oil Gas & Energy" },
  { id: "banking-fintech", label: "Banking & FinTech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "edtech", label: "EdTech" },
  { id: "startups", label: "Startups" },
];

export const industryIds = industrySlugs.map((s) => s.id);
export function isValidIndustryId(id: string): boolean {
  return industryIds.includes(id);
}
