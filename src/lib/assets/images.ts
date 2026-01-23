// Re-export images from public folder
export * from "../../../public/assets/images";

/**
 * Cloudinary Images Configuration
 * 
 * Best Practice: Store Cloudinary images in src/lib/assets/images.ts (not in public folder)
 * because:
 * 1. They use environment variables (runtime values)
 * 2. They need optimization logic
 * 3. They're external URLs, not local files
 * 
 * Usage:
 * import { cloudinaryImages, getCloudinaryImages } from "@/lib/assets/images";
 * import { optimizeHeroImage } from "@/lib/utils/cloudinary";
 * 
 * const bgImage = optimizeHeroImage(cloudinaryImages.blogBg);
 */

// Cloudinary Images - Organized by Page/Section
// Each page has its own function for better organization and maintainability

import { optimizeHeroImage } from "@/lib/utils/cloudinary";

const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "";

/**
 * Blog Page Cloudinary Images
 * Returns optimized Cloudinary URLs for blog page
 */
export const getBlogCloudinaryImages = () => {
  const blogBg = process.env.NEXT_PUBLIC_BLOG_BG_IMAGE || "";
  
  return {
    blogBg: blogBg ? optimizeHeroImage(`${CLOUDINARY_BASE_URL}/${blogBg}`) : "",
  };
};

/**
 * Case Studies Page Cloudinary Images
 * Returns optimized Cloudinary URLs for case studies page
 */
export const getCaseStudiesCloudinaryImages = () => {
  const caseStudiesBg = process.env.NEXT_PUBLIC_CASE_STUDIES_BG_IMAGE || "";
  
  return {
    caseStudiesBg: caseStudiesBg ? optimizeHeroImage(`${CLOUDINARY_BASE_URL}/${caseStudiesBg}`) : "",
  };
};

/**
 * About Page Cloudinary Images
 * Add your about page images here when needed
 */
export const getAboutCloudinaryImages = () => {
  // Add about page Cloudinary images here
  // Example: const aboutBg = process.env.NEXT_PUBLIC_ABOUT_BG_IMAGE || "";
  
  return {
    // aboutBg: aboutBg ? optimizeHeroImage(`${CLOUDINARY_BASE_URL}/${aboutBg}`) : "",
  };
};

/**
 * Contact Page Cloudinary Images
 * Add your contact page images here when needed
 */
export const getContactCloudinaryImages = () => {
  // Add contact page Cloudinary images here
  
  return {
    // contactBg: contactBg ? optimizeHeroImage(`${CLOUDINARY_BASE_URL}/${contactBg}`) : "",
  };
};

/**
 * All Cloudinary Images - Combined export
 * Use this if you need all images at once
 */
export const getAllCloudinaryImages = () => {
  return {
    blog: getBlogCloudinaryImages(),
    caseStudies: getCaseStudiesCloudinaryImages(),
    about: getAboutCloudinaryImages(),
    contact: getContactCloudinaryImages(),
  };
};

// Legacy export for backward compatibility
// Use individual functions for better organization
export const cloudinaryImages = {
  blogBg: getBlogCloudinaryImages().blogBg,
  caseStudiesBg: getCaseStudiesCloudinaryImages().caseStudiesBg,
};

