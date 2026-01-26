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

import { optimizeHeroImage, optimizeIconImage } from "@/lib/utils/cloudinary";

// Cloudinary base URL from environment (should end with /upload/)
const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "https://res.cloudinary.com/drugkop7t/image/upload/";

// Helper function to build full Cloudinary URL from endpoint
const buildCloudinaryUrl = (endpoint: string): string => {
  const baseUrl = CLOUDINARY_BASE_URL.endsWith('/') ? CLOUDINARY_BASE_URL : `${CLOUDINARY_BASE_URL}/`;
  return `${baseUrl}${endpoint}`;
};

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
 * Returns optimized Cloudinary URLs for about page
 * Includes: herobg, mission, vision, aboutimg2, Aimg3-21, Map
 */
export const getAboutCloudinaryImages = () => {
  const aboutEndpoints = {
    herobg: "v1769366420/herobg_pqhs8m.webp",
    mission: "v1769366415/mission_b9vif4.webp",
    vision: "v1769366415/vision_cmqh0e.webp",
    aboutimg2: "v1769366494/aboutimg2_d3bnu9.svg",
    Aimg3: "v1769366495/Aimg3_hktx8m.svg",
    Aimg4: "v1769366497/Aimg4_rqxqtn.svg",
    Aimg5: "v1769366499/Aimg5_ib31fd.svg",
    Aimg6: "v1769366501/Aimg6_mzcmrb.svg",
    Aimg7: "v1769366503/Aimg7_nyxdhb.svg",
    Aimg8: "v1769366505/Aimg8_t8z6dk.svg",
    Aimg9: "v1769366513/Aimg9_nszwqx.svg",
    Aimg10: "v1769366510/Aimg10_n2zbu8.svg",
    Aimg11: "v1769366518/Aimg11_j3xur0.svg",
    Aimg12: "v1769366514/Aimg12_zlyscg.svg",
    Aimg13: "v1769366524/Aimg13_jvtisf.svg",
    Aimg14: "v1769366527/Aimg14_ywn0lh.svg",
    Aimg15: "v1769366524/Aimg15_ebba5d.svg",
    Aimg16: "v1769366533/Aimg16_nv0z8j.svg",
    Aimg17: "v1769366417/Aimg17_oxpsdn.webp",
    Aimg18: "v1769366524/Aimg18_c8mvrm.svg",
    Aimg19: "v1769366526/Aimg19_dob4rn.svg",
    Aimg20: "v1769366527/Aimg20_fedasc.svg",
    Aimg21: "v1769366532/Aimg21_dkydgt.svg",
    Map: "v1769366418/Map_ulxamf.webp",
  };

  const aboutImages: Record<string, string> = {};
  
  Object.entries(aboutEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    if (endpoint.includes('.svg')) {
      aboutImages[key] = optimizeIconImage(fullUrl);
    } else {
      aboutImages[key] = optimizeIconImage(fullUrl, 4000); // 4K for maximum quality
    }
  });

  return aboutImages as {
    herobg: string;
    mission: string;
    vision: string;
    aboutimg2: string;
    Aimg3: string;
    Aimg4: string;
    Aimg5: string;
    Aimg6: string;
    Aimg7: string;
    Aimg8: string;
    Aimg9: string;
    Aimg10: string;
    Aimg11: string;
    Aimg12: string;
    Aimg13: string;
    Aimg14: string;
    Aimg15: string;
    Aimg16: string;
    Aimg17: string;
    Aimg18: string;
    Aimg19: string;
    Aimg20: string;
    Aimg21: string;
    Map: string;
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
 * Profile/Avatar Cloudinary Images
 * Returns optimized Cloudinary URLs for profile/avatar images
 * Used in testimonials, user profiles, etc.
 */
export const getProfileCloudinaryImages = () => {
  // Profile icon endpoint (SVG format - preserves vector quality)
  const profileIconEndpoint = "v1769168623/profileIcon_cmft7q.svg";
  
  return {
    profileIcon: optimizeIconImage(buildCloudinaryUrl(profileIconEndpoint)), // For SVGs, this returns the original URL
  };
};

/**
 * Awards Cloudinary Images
 * Returns optimized Cloudinary URLs for award/certification logos
 * Used in awards section and hero section
 */
export const getAwardsCloudinaryImages = () => {
  // Cloudinary award endpoints (SVG format - preserves vector quality)
  const awardEndpoints = {
    caward1: "v1769171094/caward1_ztjtyk.svg",
    caward2: "v1769171099/caward2_cehhvo.svg",
    caward3: "v1769171106/caward3_c8ywqm.svg",
    caward4: "v1769171112/caward4_bpszen.svg",
    caward5: "v1769171119/caward5_mdgbzk.svg",
    caward6: "v1769171125/caward6_gz4r0y.svg",
  };

  // Build optimized URLs - for SVGs, this preserves vector format
  const awards: Record<string, string> = {};
  
  Object.entries(awardEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for SVGs - preserves original URL for maximum quality
    awards[key] = optimizeIconImage(fullUrl);
  });

  return awards as {
    caward1: string;
    caward2: string;
    caward3: string;
    caward4: string;
    caward5: string;
    caward6: string;
  };
};

/**
 * Home Images Cloudinary (Hero Awards Section)
 * Returns optimized Cloudinary URLs for home page hero section award logos
 * Used in hero section awards display
 */
export const getHomeHeroCloudinaryImages = () => {
  // Cloudinary home hero endpoints (SVG format - preserves vector quality)
  const heroEndpoints = {
    himg1: "v1769171131/himg1_dkeyt6.svg",
    himg2: "v1769171138/himg2_esbgst.svg",
    himg3: "v1769171144/himg3_yeotez.svg",
    himg4: "v1769171151/himg4_visdre.svg",
  };

  // Build optimized URLs - for SVGs, this preserves vector format
  const heroImages: Record<string, string> = {};
  
  Object.entries(heroEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for SVGs - preserves original URL for maximum quality
    heroImages[key] = optimizeIconImage(fullUrl);
  });

  return heroImages as {
    himg1: string;
    himg2: string;
    himg3: string;
    himg4: string;
  };
};

/**
 * Awards Section Map Cloudinary Image
 * Returns optimized Cloudinary URL for awards section background map
 * Used in awards component background
 */
export const getAwardsMapCloudinaryImage = () => {
  // Cloudinary map endpoint (WebP format for optimal quality)
  const mapEndpoint = "v1769171864/map_m0zhp9.webp";
  const mapUrl = buildCloudinaryUrl(mapEndpoint);
  
  // Use optimizeIconImage for maximum HD quality (4K width for WebP)
  return optimizeIconImage(mapUrl, 4000); // 4K width for maximum HD quality
};

/**
 * Company Cloudinary Images
 * Returns optimized Cloudinary URLs for company images (blogs, testimonials)
 * Used in Company dropdown, Navbar, and other components
 */
export const getCompanyCloudinaryImages = () => {
  // Cloudinary company image endpoints (WebP format for optimal quality)
  const companyEndpoints = {
    jake: "v1769172398/Jake_hkkcaa.webp",
    blog1: "v1769172382/blog1_yveuxp.webp",
    blog2: "v1769172412/blog2_oypi6q.webp",
    blog3: "v1769172405/blog3_bjfdyh.webp",
  };

  // Build optimized URLs for maximum HD quality
  const companyImages: Record<string, string> = {};
  
  Object.entries(companyEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for maximum HD quality (4K width for WebP)
    companyImages[key] = optimizeIconImage(fullUrl, 4000); // 4K width for maximum HD quality
  });

  return companyImages as {
    jake: string;
    blog1: string;
    blog2: string;
    blog3: string;
  };
};

/**
 * Engagement Model Cloudinary Images
 * Returns optimized Cloudinary URLs for engagement model page
 * Used in engagement model hero section
 */
export const getEngagementModelCloudinaryImages = () => {
  // Cloudinary engagement model background endpoint (WebP format for optimal quality)
  const modelBgEndpoint = "v1769172650/modelbg1_nt59xm.webp";
  const modelBgUrl = buildCloudinaryUrl(modelBgEndpoint);
  
  return {
    modelBg: optimizeHeroImage(modelBgUrl), // Use optimizeHeroImage for background images
  };
};

/**
 * Footer Logo Cloudinary Image
 * Returns optimized Cloudinary URL for footer logo
 * Used in footer component
 */
export const getFooterCloudinaryLogo = () => {
  const logoEndpoint = "v1769171158/Logo2_jgcsna.svg";
  return optimizeIconImage(buildCloudinaryUrl(logoEndpoint));
};

/**
 * Navbar Cloudinary Images
 * Returns optimized Cloudinary URLs for navbar images
 * Used in navbar component and dropdowns
 */
export const getNavbarCloudinaryImages = () => {
  // Cloudinary navbar image endpoints
  const navbarEndpoints = {
    bg6: "v1769365318/bg6_lu0uwr.webp",
    top: "v1769365304/top_sf3ykp.svg",
    lorem: "v1769365302/lorem_bvv3u1.svg",
    logoSvg: "v1769365301/logo_jbeih2.svg",
  };

  // Build optimized URLs
  const navbarImages: Record<string, string> = {};
  
  Object.entries(navbarEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for SVGs, optimizeIconImage with 4K for WebP
    if (endpoint.includes('.svg')) {
      navbarImages[key] = optimizeIconImage(fullUrl);
    } else {
      navbarImages[key] = optimizeIconImage(fullUrl, 4000); // 4K for maximum quality
    }
  });

  return navbarImages as {
    bg6: string;
    top: string;
    lorem: string;
    logoSvg: string;
  };
};

/**
 * Home Page Cloudinary Images
 * Returns optimized Cloudinary URLs for home page images
 * Includes: himg8-16, footerbg, emailicon, bgLines, bgLines1, logo3
 */
export const getHomeCloudinaryImages = () => {
  // Cloudinary home image endpoints
  const homeEndpoints = {
    footerbg: "v1769175108/footerbg_qvsfmh.webp",
    himg8: "v1769175115/himg8_et4dcc.webp",
    himg9: "v1769175113/himg9_jbcxmb.webp",
    himg10: "v1769175112/himg10_mcardn.webp",
    himg11: "v1769175112/himg11_purdnk.webp",
    himg12: "v1769175110/himg12_ezzaos.webp",
    himg13: "v1769175109/himg13_soic8g.webp",
    himg14: "v1769175109/himg14_gf1pcg.webp",
    himg15: "v1769175542/himg15_kh1pwm.webp",
    himg16: "v1769175541/himg16_uxycqg.webp",
    emailicon: "v1769175205/emailicon_ufocqy.svg",
    bgLines1: "v1769175206/bgLines1_pzdjwa.svg",
    bgLines: "v1769175206/bgLines_ofkwo9.svg",
    logo3: "v1769175206/logo3_gfsr9m.svg",
  };

  // Build optimized URLs
  const homeImages: Record<string, string> = {};
  
  Object.entries(homeEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for SVGs, optimizeContentImage for WebP/PNG
    if (endpoint.includes('.svg')) {
      homeImages[key] = optimizeIconImage(fullUrl);
    } else {
      homeImages[key] = optimizeIconImage(fullUrl, 4000); // 4K for maximum quality
    }
  });

  return homeImages as {
    footerbg: string;
    himg8: string;
    himg9: string;
    himg10: string;
    himg11: string;
    himg12: string;
    himg13: string;
    himg14: string;
    himg15: string;
    himg16: string;
    emailicon: string;
    bgLines1: string;
    bgLines: string;
    logo3: string;
  };
};

/**
 * Service Modal Images Cloudinary
 * Returns optimized Cloudinary URLs for service modal images (mimg1-4)
 * Used in services cards/modals on home page
 */
export const getServiceModalCloudinaryImages = () => {
  const modalEndpoints = {
    mimg1: "v1769369126/mimg1_pwxhsb.webp",
    mimg2: "v1769369129/mimg2_v7stc0.webp",
    mimg3: "v1769369121/mimg3_rse4fd.webp",
    mimg4: "v1769369122/mimg4_uvbajw.webp",
  };

  const modalImages: Record<string, string> = {};
  
  Object.entries(modalEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    modalImages[key] = optimizeIconImage(fullUrl, 4000); // 4K for maximum quality
  });

  return modalImages as {
    mimg1: string;
    mimg2: string;
    mimg3: string;
    mimg4: string;
  };
};

/**
 * Technology Icons Cloudinary
 * Returns optimized Cloudinary URLs for technology icons (micon1-10)
 * Used in services/technologies sections
 */
export const getTechnologyIconCloudinaryImages = () => {
  const iconEndpoints = {
    micon1: "v1769369146/micon1_bvnj60.webp",
    micon2: "v1769369149/micon2_tvspgy.webp",
    micon3: "v1769369151/micon3_ppu03e.webp",
    micon4: "v1769369144/micon4_hm5ivu.webp",
    micon5: "v1769369139/micon5_xbrinb.webp",
    micon6: "v1769369141/micon6_p3dvdc.webp",
    micon7: "v1769369136/micon7_uqpmug.webp",
    micon8: "v1769369134/micon8_jxdbtq.webp",
    micon9: "v1769369131/micon9_y23gvd.webp",
    micon10: "v1769369124/micon10_b1qi2b.webp",
  };

  const iconImages: Record<string, string> = {};
  
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    iconImages[key] = optimizeIconImage(fullUrl, 4000); // 4K for maximum quality
  });

  return iconImages as {
    micon1: string;
    micon2: string;
    micon3: string;
    micon4: string;
    micon5: string;
    micon6: string;
    micon7: string;
    micon8: string;
    micon9: string;
    micon10: string;
  };
};

/**
 * Career Icons Cloudinary Images
 * Returns optimized Cloudinary URLs for career/benefits icons (careerIcon1-6)
 * Used in careers benefits section
 */
export const getCareerCloudinaryIcons = () => {
  const iconEndpoints = {
    careerIcon1: "v1769421558/careerIcon1_qalkdt.svg",
    careerIcon2: "v1769421558/careerIcon2_wjrfnr.svg",
    careerIcon3: "v1769421558/careerIcon3_jndxwr.svg",
    careerIcon4: "v1769421558/careerIcon4_nfylsd.svg",
    careerIcon5: "v1769421558/careerIcon5_lxsw14.svg",
    careerIcon6: "v1769421558/careerIcon6_msvcoy.svg",
  };

  const iconImages: Record<string, string> = {};
  
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // For SVGs, use optimizeIconImage which preserves vector quality
    iconImages[key] = optimizeIconImage(fullUrl);
  });

  return iconImages as {
    careerIcon1: string;
    careerIcon2: string;
    careerIcon3: string;
    careerIcon4: string;
    careerIcon5: string;
    careerIcon6: string;
  };
};

/**
 * Tri-Scroll Logos Cloudinary Images
 * Returns optimized Cloudinary URLs for tri-scroll logo carousel
 * Used in home page tri-scroll component
 */
export const getTriScrollCloudinaryLogos = () => {
  // Cloudinary logo endpoints (WebP format for optimal quality)
  const logoEndpoints = {
    tsimg1: "v1769170492/Logo1_chzc74.webp",
    tsimg2: "v1769170479/Logo2_zqreue.webp",
    tsimg3: "v1769170473/Logo3_wtv4k0.webp",
    tsimg4: "v1769170467/Logo4_hsz3v5.webp",
    tsimg5: "v1769170460/Logo5_fqc6d5.webp",
    tsimg6: "v1769170454/Logo6_vptwol.webp",
    tsimg7: "v1769170447/Logo7_gdghpu.webp",
    tsimg8: "v1769170441/Logo8_pgaudj.webp",
    tsimg9: "v1769170435/Logo9_du8t2r.webp",
    tsimg10: "v1769170485/Logo10_iajjr5.webp",
    tsimg11: "v1769170429/Logo11_tcfoop.webp",
    tsimg12: "v1769170424/Logo12_wfpjbo.webp",
  };

  // Build optimized URLs for maximum HD quality
  const logos: Record<string, string> = {};
  
  Object.entries(logoEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    // Use optimizeIconImage for maximum HD quality (4K width for WebP)
    logos[key] = optimizeIconImage(fullUrl, 4000); // 4K width for maximum HD quality
  });

  return logos as {
    tsimg1: string;
    tsimg2: string;
    tsimg3: string;
    tsimg4: string;
    tsimg5: string;
    tsimg6: string;
    tsimg7: string;
    tsimg8: string;
    tsimg9: string;
    tsimg10: string;
    tsimg11: string;
    tsimg12: string;
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

