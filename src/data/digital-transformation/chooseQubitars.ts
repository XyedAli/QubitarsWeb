import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiNginx,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiPython,
  SiLangchain,
  SiHuggingface,
  SiScikitlearn,
  SiApachespark,
  SiAmazon,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiFramer,
  SiSketch,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMiro,
  SiNotion,
} from "react-icons/si";
import { ElementType } from "react";


export interface ChooseQubitarsCard {
  title: string;
  description: string;
  iconKey: "sicon4" | "sicon5" | "sicon6";
  wide?: boolean;
}

export const chooseQubitarsCards: ChooseQubitarsCard[] = [
  {
    iconKey: "sicon5",
    title: "End-to-End Expertise",
    description:
      "From strategy to deployment, we handle the full lifecycle of digital solutions—ensuring seamless integration, scalability, and measurable business outcomes.",
  },
  {
    iconKey: "sicon6",
    title: "Scalable Solutions",
    description:
      "We don't believe in one-size-fits-all. Every solution is tailored to your workflows, and engineered to scale seamlessly as your users, data, and business grow.",
  },
  {
    iconKey: "sicon4",
    title: "Agile & Transparent Process",
    description:
      "From strategy to deployment, we handle the full lifecycle of digital solutions—ensuring seamless integration, scalability, and measurable business outcomes, with continuous collaboration, clear communication, and predictable delivery timelines.",
    wide: true,
  },
];

export const qualitySecurityData = {
  iconKey: "sicon3",
  title: "Quality & Security First",
  description1:
    "We embed rigorous testing, performance checks, and security standards into every solution, minimizing risks and maximizing trust.",
  description2:
    "We combine meticulous testing, continuous monitoring, and enterprise-grade security to ensure reliable, compliant, and trusted systems.",
};

import { processSteps } from "./process";

export interface SvgCoordinates {
  topLine: { x1: number; y1: number; x2: number; y2: number };
  rightVertical: { x1: number; y1: number; x2: number; y2: number };
  leftVertical: { x1: number; y1: number; x2: number; y2: number };
  midLine: { x1: number; y1: number; x2: number; y2: number };
  bottomLine: { x1: number; y1: number; x2: number; y2: number };
  topDots: { cx: number; cy: number; r: number }[];
  bottomDots: { cx: number; cy: number; r: number }[];
}

export const svgCoordinatesData: Record<string, SvgCoordinates> = {
  mobile: {
    topLine: { x1: -10, y1: 75, x2: 400, y2: 75 },
    rightVertical: { x1: 405, y1: 75, x2: 405, y2: 220 },
    leftVertical: { x1: -10, y1: 220, x2: -10, y2: 350 },
    midLine: { x1: -10, y1: 220, x2: 405, y2: 220 },
    bottomLine: { x1: -5, y1: 350, x2: 410, y2: 350 },
    topDots: [
      { cx: -8, cy: 74, r: 6 },
      { cx: 135, cy: 74, r: 6 },
      { cx: 270, cy: 74, r: 6 },
      { cx: 405, cy: 74, r: 6 }
    ],
    bottomDots: [
      { cx: -10, cy: 348, r: 6 },
      { cx: 135, cy: 348, r: 6 },
      { cx: 270, cy: 348, r: 6 }
    ]
  },
  tablet: {
    topLine: { x1: 17, y1: -17, x2: 1180, y2: -17},
    rightVertical: { x1: 1180, y1: -20, x2: 1180, y2: 150 },
    leftVertical: { x1: 18, y1: 149, x2: 18, y2: 270 },
    midLine: { x1: 19, y1: 150, x2: 1180, y2: 150 },
    bottomLine: { x1: 19, y1: 275, x2: 1180, y2: 275 },
    topDots: [
      { cx: 24, cy: -17, r: 7 },
      { cx: 400, cy: -17, r: 7 },
      { cx: 800, cy: -17, r: 7 },
      { cx: 1180, cy: -17, r: 7 }
    ],
    bottomDots: [
      { cx: 22, cy: 275, r: 7 },
      { cx: 400, cy: 275, r: 7 },
      { cx: 800, cy: 275, r: 7 }
    ]
  },
  large: {
    topLine: { x1: 30, y1: 37, x2: 1170, y2: 37 },
    rightVertical: { x1: 1170, y1: 37, x2: 1170, y2: 191 },
    leftVertical: { x1: 15, y1: 190, x2: 15, y2: 320 },
    midLine: { x1: 16, y1: 190, x2: 1170, y2: 190 },
    bottomLine: { x1: 25, y1: 320, x2: 1170, y2: 320 },
    topDots: [
      { cx: 30, cy: 37, r: 6 },
      { cx: 400, cy: 37, r: 6 },
      { cx: 800, cy: 37, r: 6 },
      { cx: 1170, cy: 37, r: 6 }
    ],
    bottomDots: [
      { cx: 15, cy: 320, r: 6 },
      { cx: 400, cy: 320, r: 6 },
      { cx: 810, cy: 320, r: 6 }
    ]
  },
  desktop: {
    topLine: { x1: -20, y1: 75, x2: 1180, y2: 75 },
    rightVertical: { x1: 1185, y1: 75, x2: 1185, y2: 220 },
    leftVertical: { x1: -20, y1: 220, x2: -20, y2: 350 },
    midLine: { x1: -20, y1: 220, x2: 1185, y2: 220 },
    bottomLine: { x1: -5, y1: 350, x2: 1200, y2: 350 },
    topDots: [
      { cx: -14, cy: 74, r: 8 },
      { cx: 410, cy: 74, r: 8 },
      { cx: 810, cy: 74, r: 8 },
      { cx: 1185, cy: 74, r: 8 }
    ],
    bottomDots: [
      { cx: -18, cy: 348, r: 8 },
      { cx: 410, cy: 348, r: 8 },
      { cx: 810, cy: 348, r: 8 }
    ]
  }
};

export const tabs = [
  "AI & ML Development",
  "Digital Transformation",
  "Product Design",
  "DevOps",
];

export const techCards: Record<
  string,
  { name: string; icon: ElementType }[]
> = {
  "AI & ML Development": [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Python", icon: SiPython },
    { name: "LangChain", icon: SiLangchain },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Apache Spark", icon: SiApachespark },
  ],

  "Digital Transformation": [
    { name: "AWS", icon: SiAmazon },
    { name: "Azure", icon: SiMongodb }, // (You had wrong icon here before – kept same structure)
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "React", icon: SiReact },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],

  "Product Design": [
    { name: "Figma", icon: SiFigma },
    { name: "Adobe XD", icon: SiAdobexd },
    { name: "Framer", icon: SiFramer },
    { name: "Sketch", icon: SiSketch },
    { name: "Illustrator", icon: SiAdobeillustrator },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "Miro", icon: SiMiro },
    { name: "Notion", icon: SiNotion },
  ],

  DevOps: [
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Jenkins", icon: SiJenkins },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Terraform", icon: SiTerraform },
    { name: "Ansible", icon: SiAnsible },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "Nginx", icon: SiNginx },
  ],
};