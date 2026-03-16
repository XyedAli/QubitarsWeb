import { homeImages, getHomeHeroCloudinaryImages } from "@/lib/assets/images";

export const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blogs", href: "/blogs" },
  { name: "Life At Qubitars", href: "/about-us#life-at-qubitars" },
  { name: "Careers", href: "/careers" },
];

export const servicesLinks = [
  { name: "AI & ML Development", href: "/services/ai-ml" },
  { name: "Digital Transformation", href: "/ux-ui-design" },
  { name: "Product Design", href: "/product-design" },
  { name: "Quality Assurance", href: "/quality-assurance" },
  { name: "DevOps", href: "/devops" },
  { name: "Staff Augmentation", href: "/staff-augmentation" },
];

export const industriesLinks = [
  { name: "REAL ESTATE", href: "/industries/real-estate" },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  { name: "Oil, Gas & Energy", href: "/industries/oil-gas-energy" },
  { name: "Banking & Fintech", href: "/industries/banking-fintech" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Edtech", href: "/industries/edtech" },
  { name: "Startups", href: "/industries/startups" },
];

// Get Cloudinary home hero images
const homeHeroImages = getHomeHeroCloudinaryImages();

export const partnerBadges = [
  { name: "Trustpilot", src: homeImages.himg7 },
  { name: "Goodfirms", src: homeImages.himg6 },
  { name: "Clutch", src: homeHeroImages.himg1 },
];

