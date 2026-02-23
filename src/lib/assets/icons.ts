// Re-export icons from src/lib/assets/icons folder
export { default } from "./icons/index";
export { Icons } from "./icons/index";
import { optimizeIconImage } from "@/lib/utils/cloudinary";

// Cloudinary base URL from environment (should end with /upload/)
const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "https://res.cloudinary.com/drugkop7t/image/upload/";

// Helper function to build full Cloudinary URL from endpoint
const buildCloudinaryUrl = (endpoint: string): string => {
  const baseUrl = CLOUDINARY_BASE_URL.endsWith('/') ? CLOUDINARY_BASE_URL : `${CLOUDINARY_BASE_URL}/`;
  return `${baseUrl}${endpoint}`;
};

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

/**
 * Industries / Real Estate – state icons (1–15) and arrows (1–3)
 * SVG icons for industries page sections
 */
export const getIndustriesStateIcons = (): Record<string, string> => {
  const iconEndpoints: Record<string, string> = {
    stateicon1: "v1770982875/stateicon1_mnejvu.svg",
    stateicon2: "v1770978700/stateicon2_s69lrz.svg",
    stateicon3: "v1770978700/stateicon3_rufqyi.svg",
    stateicon4: "v1770978699/stateicon4_zkhr7g.svg",
    stateicon5: "v1770714123/stateicon5_srcbw0.svg",
    stateicon6: "v1770714122/stateicon6_hqesb5.svg",
    stateicon7: "v1770714120/stateicon7_iqh9uj.svg",
    stateicon8: "v1770714118/stateicon8_cxljdr.svg",
    stateicon9: "v1770714117/stateicon9_dwcgfb.svg",
    stateicon10: "v1770714115/stateicon10_dab4jx.svg",
    stateicon11: "v1770714114/stateicon11_u6n3xe.svg",
    stateicon12: "v1770714113/stateicon12_vxf0me.svg",
    stateicon13: "v1770714112/stateicon13_cu57of.svg",
    stateicon14: "v1770714110/stateicon14_ipike2.svg",
    stateicon15: "v1770714104/stateicon15_bgp6ch.svg",
    stateicon16: "v1770805559/stateimg16_wsrwzu.svg",
    stateicon17: "v1770805558/stateimg17_xarrji.svg",
    stateicon18: "v1770805558/stateimg18_eyrxuc.svg",
    stateicon19: "v1770805558/stateimg19_kzyzxv.svg",
    arrow1: "v1770714109/arrow1_ljou8n.svg",
    arrow2: "v1770714107/arrow2_erw0zu.svg",
    arrow3: "v1770714107/arrow3_q4grz2.svg",
    travelicon1: "v1770967648/travelimg6_npnvqc.svg",
    travelicon2: "v1770967649/travelimg7_yns1lb.svg",
    travelicon3: "v1770967649/travelimg8_zxgrlo.svg",
    travelicon4: "v1770967649/travelimg9_ckyi5t.svg",
    oilicon1: "v1770972953/oilimg6_wgf27l.svg",
    oilicon2: "v1770972953/oilimg7_xa4wwa.svg",
    oilicon3: "v1770972953/oilimg8_plxxjr.svg",
    oilicon4: "v1770972952/oilimg9_vtrcts.svg",
    fintechicon1: "v1770973415/fintechimg6_tyfomy.svg",
    fintechicon2: "v1770973413/fintechimg7_d2khkh.svg",
    fintechicon3: "v1770973412/fintechimg8_rtglx7.svg",
    fintechicon4: "v1770973412/fintechimg9_dnx8zw.svg",
    careicon1: "v1770974031/careimg6_eny2ug.svg",
    careicon2: "v1770974030/careimg7_tfglr4.svg",
    careicon3: "v1770974030/careimg8_vkqkbq.svg",
    careicon4: "v1770974025/careimg9_grob43.svg",
    edtechicon1: "v1770974664/edtechimg6_cjcti2.svg",
    edtechicon2: "v1770974663/edtechimg7_rzrrnq.svg",
    edtechicon3: "v1770974663/edtechimg8_sertod.svg",
    edtechicon4: "v1770974662/edtechimg9_xialr3.svg",
    startupicon1: "v1770975247/startupimg6_fc521r.svg",
    startupicon2: "v1770975255/startupimg7_utosot.svg",
    startupicon3: "v1770975254/startupimg8_hgdvb3.svg",
    startupicon4: "v1770975250/startupimg9_gybkqo.svg",
  };
  const icons: Record<string, string> = {};
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    icons[key] = optimizeIconImage(buildCloudinaryUrl(endpoint));
  });
  return icons;
};

/**
 * Awards – certification/award logos (SVG)
 * Webp (e.g. map) stays in images.ts
 */
export const getAwardsCloudinaryIcons = (): Record<string, string> => {
  const iconEndpoints: Record<string, string> = {
    caward1: "v1769171094/caward1_ztjtyk.svg",
    caward2: "v1769171099/caward2_cehhvo.svg",
    caward3: "v1769171106/caward3_c8ywqm.svg",
    caward4: "v1769171112/caward4_bpszen.svg",
    caward5: "v1769171119/caward5_mdgbzk.svg",
    caward6: "v1769171125/caward6_gz4r0y.svg",
  };
  const icons: Record<string, string> = {};
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    icons[key] = optimizeIconImage(buildCloudinaryUrl(endpoint));
  });
  return icons;
};

/**
 * Engagement Model – section icons (SVG)
 * Webp (modelBg, advantageImg, execCards) stays in images.ts
 */
export const getEngagementModelCloudinaryIcons = (): Record<string, string> => {
  const iconEndpoints: Record<string, string> = {
    icon1: "v1769586921/engIcon1_fvm3et.svg",
    icon2: "v1769586918/engIcon2_qhbzxb.svg",
    icon3: "v1769586915/engIcon3_xeefwe.svg",
    icon4: "v1769586912/engIcon4_d3owr7.svg",
    icon5: "v1769586911/engIcon5_mmomoj.svg",
    icon6: "v1769586910/engIcon6_fe8igy.svg",
    icon7: "v1769759042/engIcon7_e1iodp.svg",
    icon8: "v1769759042/engIcon8_zv33ta.svg",
    icon9: "v1769759042/engIcon9_e1zf8o.svg",
    icon10: "v1769767176/engIcon10_ekjd0n.svg",
    icon11: "v1769767172/engIcon12_xxjtkv.svg",
    icon12: "v1769767172/engIcon13_agwszb.svg",
    icon13: "v1769767172/engIcon11_izuwau.svg",
    icon14: "v1769774786/engIcon14_xqanxw.svg",
    icon15: "v1769774785/engIcon15_n6osbg.svg",
    icon16: "v1769774784/engIcon16_rbfwsc.svg",
    icon17: "v1769774783/engIcon17_wnxblz.svg",
    icon18: "v1769774784/engIcon18_juqdcy.svg",
    engIcon19: "v1770120269/engIcon19_rvf2kd.svg",
    engIcon20: "v1770120269/engIcon20_ofwbxg.svg",
    engIcon21: "v1770120268/engIcon21_jo94nw.svg",
    engIcon22: "v1770120268/engIcon22_ed4jyi.svg",
    engIcon23: "v1770120268/engIcon23_fujqfp.svg",
  };
  const icons: Record<string, string> = {};
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    icons[key] = optimizeIconImage(buildCloudinaryUrl(endpoint));
  });
  return icons;
};

/**
 * Measureables – section icons (SVG)
 */
export const getMeasureablesIcons = (): Record<string, string> => {
  const iconEndpoints: Record<string, string> = {
    sicon1: "v1771824905/sicon1_qb4m0u.svg",
    sicon2: "v1771824902/sicon2_xf624a.svg",
  };
  
  const icons: Record<string, string> = {};
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    icons[key] = optimizeIconImage(buildCloudinaryUrl(endpoint));
  });
  
  return icons;
};

/**
 * Choose Qubitars – section icons (SVG)
 */
export const getChooseQubitarsIcons = (): Record<string, string> => {
  const iconEndpoints: Record<string, string> = {
    sicon3: "v1771831731/sicon3_nhymf1.svg",
    sicon4: "v1771831731/sicon4_twrlh4.svg",
    sicon5: "v1771831731/sicon5_fio4z3.svg",
    sicon6: "v1771831731/sicon6_asgsro.svg",
  };
  
  const icons: Record<string, string> = {};
  Object.entries(iconEndpoints).forEach(([key, endpoint]) => {
    icons[key] = optimizeIconImage(buildCloudinaryUrl(endpoint));
  });
  
  return icons;
};
