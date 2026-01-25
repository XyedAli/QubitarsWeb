// Re-export icons from src/lib/assets/icons folder
export { default } from "./icons/index";
export { Icons } from "./icons/index";

/**
 * Cloudinary Icons Configuration
 * 
 * Best Practice: Store Cloudinary icons in src/lib/assets/icons.ts
 * because:
 * 1. They use external URLs (Cloudinary)
 * 2. They need optimization logic
 * 3. They're organized by page/section
 * 
 * Usage:
 * import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";
 * const icons = getIndustryCloudinaryIcons();
 * const logoUrl = icons.clogo1;
 */

import { optimizeIconImage } from "@/lib/utils/cloudinary";

// Cloudinary base URL from environment (should end with /upload/)
const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "https://res.cloudinary.com/drugkop7t/image/upload/";

// Helper function to build full Cloudinary URL from endpoint
const buildCloudinaryUrl = (endpoint: string): string => {
  const baseUrl = CLOUDINARY_BASE_URL.endsWith('/') ? CLOUDINARY_BASE_URL : `${CLOUDINARY_BASE_URL}/`;
  return `${baseUrl}${endpoint}`;
};

/**
 * Industry/Client Logo Cloudinary Icons
 * Returns optimized Cloudinary URLs for industry/client logos
 * Used in DualRowSlider, Navbar, and other components
 */
export const getIndustryCloudinaryIcons = () => {
  // Cloudinary icon endpoints (version/public_id)
  const iconEndpoints = {
    clogo1: "v1769160537/clogo1_vsxou4.svg",
    clogo2: "v1769160575/clogo2_qjxjnr.svg",
    clogo3: "v1769161596/clogo3_dotzko.svg",
    clogo4: "v1769161604/clogo4_zyr7me.svg",
    clogo5: "v1769161624/clogo5_eehero.svg",
    clogo6: "v1769161653/clogo6_fd9ai2.svg",
    clogo7: "v1769161669/clogo7_gw4zfa.svg",
    clogo8: "v1769161678/clogo8_x2slbm.svg",
    clogo9: "v1769161686/clogo9_qmucqb.svg",
    clogo10: "v1769161694/clogo10_c3r0cl.svg",
    clogo11: "v1769161704/clogo11_zhdjhx.svg",
    clogo12: "v1769161746/clogo12_my5yjv.svg",
    clogo13: "v1769161760/clogo13_rglhkf.svg",
    clogo14: "v1769161772/clogo14_fxq1i2.svg",
    clogo15: "v1769161782/clogo15_hlw0ar.svg",
    clogo16: "v1769161790/clogo16_qgjlax.svg",
    clogo17: "v1769161806/clogo17_otgce1.svg",
    clogo18: "v1769161821/clogo18_z2rwtb.svg",
  };

  // Build full URLs and optimize them
  const icons: Record<string, string> = {};
  
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for maximum HD quality
    // For SVGs, this preserves vector format (no transformations)
    // For other formats, uses 4K width for maximum clarity
    icons[key] = optimizeIconImage(fullUrl, 4000); // 4K width for maximum HD quality
  });

  // Add man image (avatar/profile image)
  const manEndpoint = "v1769168623/profileIcon_cmft7q.svg"; // Using profileIcon endpoint - update if different
  const manUrl = buildCloudinaryUrl(manEndpoint);
  icons.man = optimizeIconImage(manUrl);

  return icons as {
    clogo1: string;
    clogo2: string;
    clogo3: string;
    clogo4: string;
    clogo5: string;
    clogo6: string;
    clogo7: string;
    clogo8: string;
    clogo9: string;
    clogo10: string;
    clogo11: string;
    clogo12: string;
    clogo13: string;
    clogo14: string;
    clogo15: string;
    clogo16: string;
    clogo17: string;
    clogo18: string;
    man: string;
  };
};

