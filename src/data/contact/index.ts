export interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  budget: string;
  companyName: string;
  companyDomain: string;
  region: string;
  services: string[];
  projectDetails: string;
  getNDA: boolean;
  agreeToTerms: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export const servicesOptions = [
  "AI & ML Development",
  "Digital Transformation",
  "Product Design",
  "Quality Assurance",
  "DevOps",
  "Staff Augmentation",
];

export const budgetOptions = [
  "Under $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $500,000",
  "Over $500,000",
];

export const regionOptions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
  "South America",
];

export const countryCodes = [
  { code: "+1", country: "United States", flag: "US" },
  { code: "+92", country: "Pakistan", flag: "PK" },
  { code: "+44", country: "United Kingdom", flag: "GB" },
  { code: "+91", country: "India", flag: "IN" },
  { code: "+971", country: "United Arab Emirates", flag: "AE" },
  { code: "+966", country: "Saudi Arabia", flag: "SA" },
  { code: "+61", country: "Australia", flag: "AU" },
  { code: "+86", country: "China", flag: "CN" },
  { code: "+81", country: "Japan", flag: "JP" },
  { code: "+49", country: "Germany", flag: "DE" },
  { code: "+33", country: "France", flag: "FR" },
  { code: "+39", country: "Italy", flag: "IT" },
  { code: "+34", country: "Spain", flag: "ES" },
  { code: "+27", country: "South Africa", flag: "ZA" },
  { code: "+20", country: "Egypt", flag: "EG" },
  { code: "+55", country: "Brazil", flag: "BR" },
  { code: "+52", country: "Mexico", flag: "MX" },
  { code: "+65", country: "Singapore", flag: "SG" },
  { code: "+60", country: "Malaysia", flag: "MY" },
  { code: "+62", country: "Indonesia", flag: "ID" },
  { code: "+82", country: "South Korea", flag: "KR" },
  { code: "+7", country: "Russia", flag: "RU" },
  { code: "+31", country: "Netherlands", flag: "NL" },
  { code: "+41", country: "Switzerland", flag: "CH" },
  { code: "+46", country: "Sweden", flag: "SE" },
  { code: "+47", country: "Norway", flag: "NO" },
  { code: "+45", country: "Denmark", flag: "DK" },
  { code: "+32", country: "Belgium", flag: "BE" },
  { code: "+351", country: "Portugal", flag: "PT" },
  { code: "+90", country: "Turkey", flag: "TR" },
];

