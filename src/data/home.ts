import { homeImages, logoImages, svgIcons } from "@/../public/assets/images";
import {
  ChooseUsContent,
  ExpertService,
  HeroIconConfig,
  LogoGrid,
} from "@/lib/types/home";

// Hero Section Data
const heroIconSources = [
  { src: svgIcons.icon, alt: "AI Agent" },
  { src: svgIcons.icon1, alt: "Product Design" },
  { src: svgIcons.icon2, alt: "Custom Software" },
  { src: svgIcons.icon3, alt: "Web Development" },
  { src: svgIcons.icon4, alt: "Mobile App" },
  { src: svgIcons.icon5, alt: "Cloud Services" },
  { src: svgIcons.icon6, alt: "Data Analytics" },
  { src: svgIcons.icon7, alt: "Security" },
  { src: svgIcons.icon10, alt: "UI/UX Design" },
  { src: svgIcons.icon9, alt: "E-Commerce" },
  { src: svgIcons.icon8, alt: "AI/ML Development" },
  { src: svgIcons.icon11, alt: "DevOps" },
  { src: svgIcons.icon12, alt: "Consulting" },
  { src: svgIcons.icon13, alt: "Support" },
  { src: svgIcons.icon14, alt: "Integration" },
  { src: svgIcons.icon15, alt: "Maintenance" },
];

// Left Side Icons Configs
export const heroLeftIconConfigs: HeroIconConfig[] = [
  {
    iconId: "icon1",
    label: "AI Agent",
    ...heroIconSources[0],
    className: "absolute bottom-[340px] left-[12%]",
    delay: 0.12,
  },
  {
    iconId: "icon2",
    label: "Product Design",
    ...heroIconSources[1],
    className: "absolute bottom-[210px] left-[23%]",
    delay: 0.17,
  },
  {
    iconId: "icon3",
    label: "Custom Software",
    ...heroIconSources[2],
    className: "absolute bottom-[115px] left-[32%]",
    delay: 0.22,
  },
  {
    iconId: "icon4",
    label: "Web Development",
    ...heroIconSources[3],
    className: "absolute bottom-[163px] left-[11%]",
    delay: 0.27,
  },
  {
    iconId: "icon5",
    label: "Mobile App",
    ...heroIconSources[4],
    className: "absolute bottom-[95px] left-[23%]",
    delay: 0.32,
  },
  {
    iconId: "icon6",
    label: "Cloud Services",
    ...heroIconSources[5],
    className: "absolute bottom-[40px] left-[34%]",
    delay: 0.37,
  },
  {
    iconId: "icon7",
    label: "Data Analytics",
    ...heroIconSources[6],
    className: "absolute bottom-[70px] left-[16%]",
    delay: 0.42,
  },
  {
    iconId: "icon8",
    label: "Security",
    ...heroIconSources[7],
    className: "absolute bottom-[15px] left-[27%]",
    delay: 0.47,
  },
];

// Right side Icons Config
export const heroRightIconConfigs: HeroIconConfig[] = [
  {
    iconId: "icon9",
    label: "UI/UX Design",
    ...heroIconSources[8],
    className: "absolute bottom-[320px] right-[13%]",
    delay: 0.12,
  },
  {
    iconId: "icon10",
    label: "E-Commerce",
    ...heroIconSources[9],
    className: "absolute bottom-[210px] right-[23%]",
    delay: 0.17,
  },
  {
    iconId: "icon11",
    label: "AI/ML Development",
    ...heroIconSources[10],
    className: "absolute bottom-[125px] right-[30%]",
    delay: 0.22,
  },
  {
    iconId: "icon12",
    label: "DevOps",
    ...heroIconSources[11],
    className: "absolute bottom-[160px] right-[12%]",
    delay: 0.27,
  },
  {
    iconId: "icon13",
    label: "Consulting",
    ...heroIconSources[12],
    className: "absolute bottom-[95px] right-[23%]",
    delay: 0.32,
  },
  {
    iconId: "icon14",
    label: "Support",
    ...heroIconSources[13],
    className: "absolute bottom-[40px] right-[34%]",
    delay: 0.37,
  },
  {
    iconId: "icon15",
    label: "Integration",
    ...heroIconSources[14],
    className: "absolute bottom-[70px] right-[16%]",
    delay: 0.42,
  },
  {
    iconId: "icon16",
    label: "Maintenance",
    src: svgIcons.icon16,
    alt: "Maintenance",
    className: "absolute bottom-[10px] right-[27%]",
    delay: 0.47,
  },
];

// Services Cards Data
export const areaExpertServices: ExpertService[] = [
    {
      name: "Product Design",
      description:
        "We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love.",
      image: "/images/product-design.jpg",
    },
    {
      name: "Custom Software",
      description:
        "Tailor-made software that adapts to your business—not the other way around. Built to scale, secure by design, and optimized for performance.",
      image: "/images/custom-software.jpg",
    },
    {
      name: "AI/ML Development",
      description:
        "From predictive analytics to intelligent bots, we turn complex data into scalable AI solutions that give your business a cutting edge.",
      image: "/images/ai-ml.jpg",
    },
    {
      name: "MVP Development",
      description:
        "Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout.",
      image: "/images/mvp.jpg",
    },
    {
      name: "Mobile App Dev",
      description:
        "From iOS to Android, we build high-performance apps with sleek design and powerful backend—giving users seamless experiences on the go.",
      image: "/images/mobile-app.jpg",
    },
    {
      name: "Staff Augmentation",
      description:
        "Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.",
      image: "/images/staff-aug.jpg",
    },
  ];

// Partners Section Data
export const partnerRowsBeforeHeading: LogoGrid = [
  [
    { src: logoImages.logo1, alt: "Charta" },
    { src: logoImages.logo2, alt: "CashFlow Innovator" },
    { src: logoImages.logo3, alt: "Yurek" },
    { src: logoImages.logo4, alt: "Small Cap Canada" },
  ],
  [
    { src: logoImages.logo5, alt: "Faraway" },
    { src: logoImages.logo6, alt: "Liquid DMS" },
    { src: logoImages.logo7, alt: "Everstar" },
    { src: logoImages.logo8, alt: "Tago Cash" },
    { src: logoImages.logo9, alt: "Deal Closer Pro" },
  ],
];

export const partnerRowsAfterHeading: LogoGrid = [
  [
    { src: logoImages.logo10, alt: "Roof Claim Pros" },
    { src: logoImages.logo11, alt: "Show Republic" },
    { src: logoImages.logo12, alt: "Solve My Allergies" },
    { src: logoImages.logo13, alt: "We Have You Have" },
    { src: logoImages.logo14, alt: "Chutney" },
  ],
  [
    { src: logoImages.logo15, alt: "Vagabond" },
    {
      src: logoImages.logo16,
      alt: "Dynamic Service Cost Calculator",
    },
    { src: logoImages.logo17, alt: "Africa for Health" },
    { src: logoImages.logo18, alt: "Blue Infrastructure" },
  ],
];

export const partnerIndustries = [
  "Real Estate.",
  "Travel & Hospitality.",
  "Oil, Gas & Energy.",
  "Banking & Fintech.",
  "Healthcare.",
  "EdTech.",
  "Startups.",
];

//   Choose Us Section Data
export const chooseUsContent: ChooseUsContent = {
    heading: "Why Choose Us",
    subheading:
      "TRUSTED BY INDUSTRY LEADERS TO DELIVER TECHNICAL EXCELLENCE WITH REAL BUSINESS IMPACT",
    cards: [
      {
        id: "quality-security-primary",
        title: "Quality & Security First",
        description:
          "We embed rigorous testing, performance checks, and security standards into every solution, minimizing risks and maximizing trust.",
        accentColor: "#1767C2",
        icon: "rocket",
      },
      {
        id: "quality-security-vision",
        title: "Quality & Security First",
        description:
          "We embed rigorous testing, performance checks, and security standards into every solution, minimizing risks and maximizing trust.",
        accentColor: "#208AE7",
        icon: "eye",
      },
      {
        id: "quality-security-culture",
        title: "Quality & Security First",
        description:
          "We embed rigorous testing, performance checks, and security standards into every solution, minimizing risks and maximizing trust.",
        accentColor: "#208AE7",
        imageSrc: homeImages.img4,
      },
    ],
    primaryImage: homeImages.img1,
    secondaryImages: [homeImages.img2, homeImages.img3],
  };
  
