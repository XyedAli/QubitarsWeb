export * from "../../../public/assets/images";

import { optimizeHeroImage, optimizeIconImage } from "@/lib/utils/cloudinary";

const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "https://res.cloudinary.com/drugkop7t/image/upload/";

// Helper function to build full Cloudinary URL from endpoint
const buildCloudinaryUrl = (endpoint: string): string => {
  const baseUrl = CLOUDINARY_BASE_URL.endsWith('/') ? CLOUDINARY_BASE_URL : `${CLOUDINARY_BASE_URL}/`;
  return `${baseUrl}${endpoint}`;
};

// Blog Page Images
export const getBlogCloudinaryImages = () => {
  const blogBgEndpoint = "v1769160189/blogbg_dnvnad.webp";
  const blogBgUrl = buildCloudinaryUrl(blogBgEndpoint);
  return {
    blogBg: optimizeHeroImage(blogBgUrl),
  };
};

// Case Studies Page Images
export const getCaseStudiesCloudinaryImages = () => {
  const caseStudiesBgEndpoint = "v1769159269/caseStudiesbg_piw2gw.webp";
  const caseStudiesBgUrl = buildCloudinaryUrl(caseStudiesBgEndpoint);
  return {
    caseStudiesBg: optimizeHeroImage(caseStudiesBgUrl),
  };
};

// Industries Hero – per-industry background images (each card different image, no overlay)
export const getIndustriesImages = (): Record<string, string> => {
  const base = (endpoint: string) => optimizeHeroImage(buildCloudinaryUrl(endpoint));
  return {
    "real-estate-1": base("v1770317984/stateimg1_abtxed.webp"),
    "real-estate-2": base("v1770317983/stateimg2_jymejk.webp"),
    "real-estate-3": base("v1770317984/stateimg3_pgrgja.webp"),
    "real-estate-4": base("v1770317984/stateimg4_uzmiwz.webp"),
    "real-estate-5": base("v1770317986/stateimg5_lietsg.webp"),
    "real-estate-6": base("v1770714103/stateimg6_quqfhq.webp"),
    "real-estate-7": base("v1770714103/stateimg7_vehq4o.webp"),
    "travel-hospitality-1": base("v1770967648/travelimg1_gmdzsf.webp"),
    "travel-hospitality-2": base("v1770967648/travelimg2_igruz7.webp"),
    "travel-hospitality-3": base("v1770967648/travelimg3_e628cx.webp"),
    "travel-hospitality-4": base("v1770967648/travelimg4_kcvyts.webp"),
    "travel-hospitality-5": base("v1770967648/travelimg5_ewwspo.webp"),
    "oil-gas-energy-1": base("v1770970259/oilimg1_airklm.webp"),
    "oil-gas-energy-2": base("v1770970259/oilimg2_kl3suz.webp"),
    "oil-gas-energy-3": base("v1770970260/oilimg3_jyolzl.webp"),
    "oil-gas-energy-4": base("v1770970259/oilimg4_tojien.webp"),
    "oil-gas-energy-5": base("v1770970259/oilimg5_hmevfw.webp"),
    "banking-fintech-1": base("v1770973410/fintechimg1_lkhq7d.webp"),
    "banking-fintech-2": base("v1770973408/fintechimg2_twwd8y.webp"),
    "banking-fintech-3": base("v1770973409/fintechimg3_q8dylu.webp"),
    "banking-fintech-4": base("v1770973409/fintechimg4_uvvz9h.webp"),
    "banking-fintech-5": base("v1770973364/fintechimg5_id4ak0.webp"),
    "healthcare-1": base("v1770974023/careimg1_iz6pe1.webp"),
    "healthcare-2": base("v1770974024/careimg2_a6k32z.webp"),
    "healthcare-3": base("v1770974024/careimg3_gt4vbl.webp"),
    "healthcare-4": base("v1770974025/careimg4_clyv5i.webp"),
    "healthcare-5": base("v1770974025/careimg5_rstjcg.webp"),
    "edtech-1": base("v1770974658/edtechimg1_t3xh4g.webp"),
    "edtech-2": base("v1770974657/edtechimg2_xof3gr.webp"),
    "edtech-3": base("v1770974657/edtechimg3_kxpbu9.webp"),
    "edtech-4": base("v1770974657/edtechimg4_mzimxc.webp"),
    "edtech-5": base("v1770974658/edtechimg5_rbj35w.webp"),
    "startups-1": base("v1770975246/startupimg1_sxfc4p.webp"),
    "startups-2": base("v1770975247/startupimg2_d6htpz.webp"),
    "startups-3": base("v1770975248/startupimg3_w6v8s6.webp"),
    "startups-4": base("v1770975247/startupimg4_ayuzv9.webp"),
    "startups-5": base("v1770975248/startupimg5_ekeztt.webp"),
  };
};

// Industries – webp images only (stateimg6, stateimg7, ellipse). SVG icons are in icons.ts
export const getIndustriesAssets = (): Record<string, string> => {
  const hero = (endpoint: string) => optimizeHeroImage(buildCloudinaryUrl(endpoint));
  return {
    stateimg6: hero("v1770714103/stateimg6_quqfhq.webp"),
    stateimg7: hero("v1770714103/stateimg7_vehq4o.webp"),
    ellipse: hero("v1770714103/Ellipse_dh4ejq.webp"),
  };
};

// About Page Images
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
      aboutImages[key] = optimizeIconImage(fullUrl, 4000);
    }
  });
  // About Page Images Return Object
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
// Contact Page Images
export const getContactCloudinaryImages = () => {
  return {};
};

export const getProfileCloudinaryImages = () => {
  const profileIconEndpoint = "v1769168623/profileIcon_cmft7q.svg";
  return {
    profileIcon: optimizeIconImage(buildCloudinaryUrl(profileIconEndpoint)),
  };
};
// Awards – webp only (map). SVG award logos are in icons.ts (getAwardsCloudinaryIcons)
// Home Page Images
export const getHomeHeroCloudinaryImages = () => {
  const heroEndpoints = {
    himg1: "v1769171131/himg1_dkeyt6.svg",
    himg2: "v1769171138/himg2_esbgst.svg",
    himg3: "v1769171144/himg3_yeotez.svg",
    himg4: "v1769171151/himg4_visdre.svg",
  };

  const heroImages: Record<string, string> = {};
  Object.entries(heroEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    heroImages[key] = optimizeIconImage(fullUrl);
  });

  return heroImages as {
    himg1: string;
    himg2: string;
    himg3: string;
    himg4: string;
  };
};
// Awards – map image (webp)
export const getAwardsMapCloudinaryImage = () => {
  const mapEndpoint = "v1769171864/map_m0zhp9.webp";
  return optimizeHeroImage(buildCloudinaryUrl(mapEndpoint));
};

export const getCompanyCloudinaryImages = () => {
  const companyEndpoints = {
    jake: "v1769172398/Jake_hkkcaa.webp",
    blog1: "v1769172382/blog1_yveuxp.webp",
    blog2: "v1769172412/blog2_oypi6q.webp",
    blog3: "v1769172405/blog3_bjfdyh.webp",
  };

  const companyImages: Record<string, string> = {};
  Object.entries(companyEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    companyImages[key] = optimizeIconImage(fullUrl, 4000);
  });

  return companyImages as {
    jake: string;
    blog1: string;
    blog2: string;
    blog3: string;
  };
};
// Engagement Model – webp only. SVG icons are in icons.ts (getEngagementModelCloudinaryIcons)
export const getEngagementModelCloudinaryImages = () => {
  const hero = (endpoint: string) => optimizeHeroImage(buildCloudinaryUrl(endpoint));
  return {
    modelBg: hero("v1769540140/modelbg_pyfp12.webp"),
    advantageImg: hero("v1769760508/engImg1_mbci7z.webp"),
    execCard1: hero("v1770109319/engSlide1_vsmifx.webp"),
    execCard2: hero("v1770109320/engSlide2_m3kgux.webp"),
    execCard3: hero("v1770109320/engSlide3_lwmuya.webp"),
    execCard4: hero("v1770109320/engSlide4_ooz5cv.webp"),
    execCard5: hero("v1770109323/engSlide5_lh3evx.webp"),
    execCard6: hero("v1770109325/engSlide6_ntto6a.webp"),
  };
};

export const getFooterCloudinaryLogo = () => {
  const logoEndpoint = "v1769171158/Logo2_jgcsna.svg";
  return optimizeIconImage(buildCloudinaryUrl(logoEndpoint));
};
// Navbar Page Images
export const getNavbarCloudinaryImages = () => {
  const navbarEndpoints = {
    bg6: "v1769365318/bg6_lu0uwr.webp",
    top: "v1769365304/top_sf3ykp.svg",
    lorem: "v1769365302/lorem_bvv3u1.svg",
    logoSvg: "v1769365301/logo_jbeih2.svg",
  };

  const navbarImages: Record<string, string> = {};
  Object.entries(navbarEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    if (endpoint.includes('.svg')) {
      navbarImages[key] = optimizeIconImage(fullUrl);
    } else {
      navbarImages[key] = optimizeIconImage(fullUrl, 4000);
    }
  });

  return navbarImages as {
    bg6: string;
    top: string;
    lorem: string;
    logoSvg: string;
  };
};
// Home Page Images
export const getHomeCloudinaryImages = () => {
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

  const homeImages: Record<string, string> = {};
  Object.entries(homeEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    if (endpoint.includes('.svg')) {
      homeImages[key] = optimizeIconImage(fullUrl);
    } else {
      homeImages[key] = optimizeIconImage(fullUrl, 4000);
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
    modalImages[key] = optimizeIconImage(fullUrl, 4000);
  });

  return modalImages as {
    mimg1: string;
    mimg2: string;
    mimg3: string;
    mimg4: string;
  };
};
// Technology Page Images
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
    iconImages[key] = optimizeIconImage(fullUrl, 4000);
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
// Career Page Images
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
// Career Page Images
export const getCareerHeroBackground = () => {
  const heroBgEndpoint = "v1769435309/modelbg_ipley9.webp";
  const heroBgUrl = buildCloudinaryUrl(heroBgEndpoint);
  return optimizeIconImage(heroBgUrl, 4000);
};
// Home Page Images slider logos
export const getTriScrollCloudinaryLogos = () => {
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

  const logos: Record<string, string> = {};
  Object.entries(logoEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    logos[key] = optimizeIconImage(fullUrl, 4000);
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

// UI/UX Service Card Images
export const getUIUXServiceImages = () => {
  const serviceEndpoints = {
    scardbg1: "v1771564755/scardbg1_lnpppp.webp",
    scardbg2: "v1771564756/scardbg2_eqv7pw.webp",
    scardbg3: "v1771564757/scardbg3_jsphvy.webp",
    scardbg4: "v1771564759/scardbg4_byncqf.webp",
    scardbg5: "v1771564759/scardbg5_xjuhcf.webp",
    scardbg6: "v1771564761/scardbg6_c8tzlv.webp",
    blurframe: "v1771564756/blurframe_idzpa7.webp",
  };

  const serviceImages: Record<string, string> = {};
  Object.entries(serviceEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    serviceImages[key] = optimizeHeroImage(fullUrl);
  });

  return serviceImages as {
    scardbg1: string;
    scardbg2: string;
    scardbg3: string;
    scardbg4: string;
    scardbg5: string;
    scardbg6: string;
    blurframe: string;
  };
};

// Hero Background Lines Images
export const getHeroBackgroundLines = () => {
  const heroEndpoints = {
    leftLine: "v1771562918/sbannerline_ajw79z.webp",
    rightLine: "v1771562918/sbannerline1_hyd2vv.webp",
  };

  const heroImages: Record<string, string> = {};
  Object.entries(heroEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    heroImages[key] = optimizeHeroImage(fullUrl);
  });

  return heroImages as {
    leftLine: string;
    rightLine: string;
  };
};

// DevOps Page Images
export const getDevOpsCloudinaryImages = () => {
  const devOpsEndpoints = {
    hero: "v1772089288/devimg1_qsfwjz.webp",
  };

  const devOpsImages: Record<string, string> = {};
  Object.entries(devOpsEndpoints).forEach(([key, endpoint]) => {
    const fullUrl = buildCloudinaryUrl(endpoint);
    devOpsImages[key] = optimizeHeroImage(fullUrl);
  });

  return devOpsImages as {
    hero: string;
  };
};

export const getAllCloudinaryImages = () => {
  return {
    blog: getBlogCloudinaryImages(),
    caseStudies: getCaseStudiesCloudinaryImages(),
    about: getAboutCloudinaryImages(),
    contact: getContactCloudinaryImages(),
    devops: getDevOpsCloudinaryImages(),
  };
};

export const cloudinaryImages = {
  blogBg: getBlogCloudinaryImages().blogBg,
  caseStudiesBg: getCaseStudiesCloudinaryImages().caseStudiesBg,
  devops: getDevOpsCloudinaryImages(),
};
