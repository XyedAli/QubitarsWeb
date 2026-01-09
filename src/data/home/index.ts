import { FaHome } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusinessSharp } from "react-icons/io5";
import { AwardsImages } from "@/lib/assets/images";
import {
  TriScrollImages,
  homeImages,
  serviceModalImages,
  technologyIconImages,
  techStackIcons,
  navbarImages,
  companyImages,
  industriesImages,
} from "../../../public/assets/images";

export const businessTypes = [
  {
    icon: FaHome,
    title: "Startups",
    description: "Qubitars helps startups turn bold ideas into scalable digital products. We design and build high-impact solutions that enable rapid growth, faster market entry, and long-term competitiveness.",
  },
  {
    icon: MdBusinessCenter,
    title: "Small Businesses",
    description: "Qubitars delivers practical, scalable digital solutions that help small businesses operate smarter, improve efficiency, and connect more meaningfully with customers—without unnecessary complexity.",
  },
  {
    icon: IoBusinessSharp,
    title: "Enterprises",
    description: "We partner with enterprises to design and engineer robust, secure, and scalable digital platforms that streamline operations, enhance productivity, and support long-term transformation at scale.",
  },
];

export const awards = [
  {
    id: 1,
    name: "Clutch",
    image: AwardsImages.caward1,
  },
  {
    id: 2,
    name: "TopDevelopers",
    image: AwardsImages.caward2,
  },
  {
    id: 3,
    name: "DesignRush",
    image: AwardsImages.caward3,
  },
  {
    id: 4,
    name: "GoodFirms",
    image: AwardsImages.caward4,
  },
  {
    id: 5,
    name: "Trustpilot",
    image: AwardsImages.caward5,
  },
  {
    id: 6,
    name: "DesignFirms",
    image: AwardsImages.caward6,
  },
];

export interface TriScrollLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const triScrollLogos: TriScrollLogo[] = [
  { src: TriScrollImages.tsimg1, alt: "Logo 1", width: 220, height: 90 },
  { src: TriScrollImages.tsimg2, alt: "Logo 2", width: 220, height: 90 },
  { src: TriScrollImages.tsimg3, alt: "Logo 3", width: 220, height: 90 },
  { src: TriScrollImages.tsimg4, alt: "Logo 4", width: 220, height: 90 },
  { src: TriScrollImages.tsimg5, alt: "Logo 5", width: 220, height: 90 },
  { src: TriScrollImages.tsimg6, alt: "Logo 6", width: 220, height: 90 },
  { src: TriScrollImages.tsimg7, alt: "Logo 7", width: 220, height: 90 },
  { src: TriScrollImages.tsimg8, alt: "Logo 8", width: 220, height: 90 },
  { src: TriScrollImages.tsimg9, alt: "Logo 9", width: 220, height: 90 },
  { src: TriScrollImages.tsimg10, alt: "Logo 10", width: 220, height: 90 },
  { src: TriScrollImages.tsimg11, alt: "Logo 11", width: 220, height: 90 },
  { src: TriScrollImages.tsimg12, alt: "Logo 12", width: 220, height: 90 },
];

export interface ServiceData {
  title: string;
  description: string;
  image: string;
  modalImage?: string;
  modalDescription?: string[];
  services?: string[];
  technologies?: string[];
  technologyIcons?: { name: string; icon: string }[];
}

const serviceModalIcons: { name: string; icon: string }[] = [
  { name: "Python", icon: technologyIconImages.micon1 },
  { name: "TensorFlow", icon: technologyIconImages.micon2 },
  { name: "PyTorch", icon: technologyIconImages.micon3 },
  { name: "Docker", icon: technologyIconImages.micon4 },
  { name: "Kubernetes", icon: technologyIconImages.micon5 },
  { name: "AWS", icon: technologyIconImages.micon6 },
  { name: "Azure", icon: technologyIconImages.micon7 },
  { name: "GCP", icon: technologyIconImages.micon8 },
  { name: "Technology 9", icon: technologyIconImages.micon9 },
  { name: "Technology 10", icon: technologyIconImages.micon10 },
];

export const servicesData: ServiceData[] = [
  {
    title: "AI & ML Development",
    description: "Unlock the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.",
    image: homeImages.himg10,
    modalImage: serviceModalImages.mimg1,
    modalDescription: [
      "Unlock intelligent automation and data-driven insights with AI/ML solutions designed to solve real problems and create competitive advantage.",
      "Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout."
    ],
    services: [
      "AI Consultation",
      "AI Agent",
      "AI Workflow Automation",
      "Generative AI Solutions",
      "AI Development & Integration",

    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "GCP"
    ],
    technologyIcons: serviceModalIcons,
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with modern digital solutions that streamline operations, enhance efficiency, and accelerate growth.",
    image: homeImages.himg9,
    modalDescription: [
      "Say goodbye to complex tech stacks and long timelines. We help you achieve digital transformation through tools that are simple, powerful, and built for growth.",
      "We eliminate development roadblocks so your team can focus on creating value and scaling your business with ease."
    ],
    services: [
      "UI/UX Design",
      "Web App Development",
      "Mobile App Development",
      "MVP Development",
      "SAAS Development",
      "Custom Software Development",
      "Low-Code/No-Code Development"
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes"
    ],
    technologyIcons: serviceModalIcons,
  },
  {
    title: "Product Design",
    description: "We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love.",
    image: homeImages.himg8,
    modalDescription: [
      "We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love. Great design goes beyond aesthetics—it’s about creating experiences that feel natural and memorable.",
      "Every screen, interaction, and flow is optimized to drive engagement, retention, and business success. With a balance of bold creativity and technical precision, we ensure your product not only looks great but also delivers measurable impact."
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Framer"
    ],
    technologyIcons:serviceModalIcons,
  },
  {
    title: "Quality Assurance",
    description: "Ensure flawless performance with comprehensive testing and quality assurance that delivers reliable, bug-free software solutions.",
    image: homeImages.himg13,
    modalImage: serviceModalImages.mimg2,
    modalDescription: [
      "Software isn’t complete until it’s tested. Our QA team ensures your product is flawless, reliable, and future-proof.",
      "We combine the power of manual testing and advanced automation frameworks to catch issues before your users do.",
      "From functionality and performance to security and usability, our testing process is designed to minimize risks, improve stability, and guarantee customer satisfaction. With us, your product ships with zero compromises on quality.",
    ],
    technologies: [
      "Selenium",
      "Cypress",
      "Jest",
      "Playwright",
      "Postman",
      "JMeter"
    ],
    technologyIcons: serviceModalIcons,
  },
  {
    title: "DevOps",
    description: "Accelerate deployment and improve reliability with automated CI/CD pipelines, infrastructure management, and cloud solutions.",
    image: homeImages.himg12,
    modalImage: serviceModalImages.mimg3,
    modalDescription: [
      "We bring speed, security, and scalability to your software lifecycle. Speed, scalability, and security—that’s the promise of our DevOps approach.",
      "We streamline the entire software delivery pipeline using CI/CD, cloud-native deployment, and real-time monitoring to ensure faster releases and reduced downtime.",
    "By bridging the gap between development and operations, we help businesses innovate quickly while maintaining rock-solid reliability. With DevOps, your product evolves faster, costs less, and performs better.",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "Ansible"
    ],
    technologyIcons: serviceModalIcons,
  },
  {
    title: "Staff Augmentation",
    description: "Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.",
    image: homeImages.himg11,
    modalImage: serviceModalImages.mimg4,
    modalDescription: [
      "We bring speed, security, and scalability to your software lifecycle. Speed, scalability, and security—that’s the promise of our DevOps approach.",
      "We streamline the entire software delivery pipeline using CI/CD, cloud-native deployment, and real-time monitoring to ensure faster releases and reduced downtime.",
      "By bridging the gap between development and operations, we help businesses innovate quickly while maintaining rock-solid reliability. With DevOps, your product evolves faster, costs less, and performs better.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "TypeScript",
      "AWS",
      "Docker"
    ],
    technologyIcons: serviceModalIcons,
  },
];

export interface TestimonialImageConfig {
  image1: string;
  image2: string;
  image3: string;
  logo: string;
}

// Centralized testimonial image configuration per id
export const testimonialImagesById: Record<string, TestimonialImageConfig> = {
  "1": {
    image1: navbarImages.logoSvg,
    image2: industriesImages.clogo1,
    image3: homeImages.himg14,
    logo: homeImages.himg16,
  },
  "2": {
    image1: navbarImages.logoSvg,
    image2: industriesImages.clogo2,
    image3: companyImages.jake,
    logo: homeImages.himg16,
  },
  "3": {
    image1: navbarImages.logoSvg,
    image2: industriesImages.clogo3,
    image3: industriesImages.man,
    logo: homeImages.himg16,
  },
};

export const testimonialsData = [
  {
    id: "1",
    desp: "Qubitars transformed our digital presence with exceptional expertise and professionalism. Their team delivered a solution that exceeded our expectations and significantly improved our business operations.",
    author: "John Smith",
    title: "CEO, InnovativeTech",
  },
  {
    id: "2",
    desp: "Working with Qubitars has been an outstanding experience. They understood our vision, provided innovative solutions, and delivered on time. Highly recommended for anyone looking for quality development services.",
    author: "Sarah Johnson",
    title: "CTO, TechSolutions",
  },
  {
    id: "3",
    desp: "The Qubitars team demonstrated exceptional technical skills and a deep understanding of our business needs. Their approach to problem-solving and attention to detail made all the difference in our project's success.",
    author: "Michael Chen",
    title: "Founder, DigitalWorks",
  },
];

export interface EngagementOption {
  id: string;
  title: string;
  description: string[];
  includes: string[];
  bestSuitedFor: string[];
}

export const engagementOptions: EngagementOption[] = [
  {
    id: "product-development",
    title: "Product Development",
    description:
      ["End-to-end execution, built for scale",
         "We collaborate closely with your team to turn ideas into high-impact digital products. From early discovery to continuous improvement, this model ensures speed, quality, and alignment with your business goals.",
      ],
         includes: [
      "Product discovery, research, and requirement validation",
      "UX/UI design focused on usability and conversion",
      "Scalable architecture and clean, production-ready development",
      "Continuous testing, optimization, and iteration",
    ],
    bestSuitedFor: [
      "Startups building MVPs or new platforms",
      "Businesses launching new digital products",
      "Companies modernizing or scaling existing solutions",
    ],
  },
  {
    id: "team-augmentation",
    title: "Team Augmentation",
    description:[
      "Extend your team. Accelerate delivery",
      "Our Team Augmentation model allows you to seamlessly scale your capabilities with vetted experts who integrate directly into your workflows. You retain full control while gaining speed, flexibility, and specialized expertise—without long-term hiring overhead.",
    ],
      includes: [
      "Skilled professionals across design, engineering, QA, DevOps, and product",
      "Flexible engagement (short-term, long-term, or project-based)",
      "Seamless integration with your tools, processes, and culture",
      "Direct communication and transparent collaboration",
    ],
    bestSuitedFor: [
      "Teams needing rapid scale without permanent hires",
      "Projects with fluctuating workload or tight timelines",
      "Companies seeking niche skills or additional delivery power",
    ],
  },
  {
    id: "consultation",
    title: "Consultation",
    description:[
    "Clarity before commitment",
   "Our consultation engagement helps you make informed decisions before investing in execution. We assess your current state, identify opportunities, and define a clear, actionable roadmap aligned with your business objectives.",
    ],
    includes: [
      "Business and technical assessments",
      "Opportunity and feasibility analysis",
      "Technology and architecture recommendations",
      "Risk evaluation and implementation roadmap",
    ],
    bestSuitedFor: [
      "Organizations planning digital transformation",
      "Teams exploring new technologies or automation",
      "Decision-makers seeking strategic direction and validation",
    ],
  },
];

export type TechStackCategory = "All" | "Front-End" | "Back-End" | "Low/No Code" | "DevOps" | "Mobile" | "AI & ML";

export interface TechStackItem {
  id: number;
  name: string;
  icon: string;
  category: TechStackCategory[];
}

export const techStackData: TechStackItem[] = [
  { id: 1, name: "HTML", icon: techStackIcons.sicon1, category: ["Front-End"] },
  { id: 2, name: "CSS", icon: techStackIcons.sicon2, category: ["Front-End"] },
  { id: 3, name: "JavaScript", icon: techStackIcons.sicon3, category: ["Front-End", "Back-End"] },
  { id: 4, name: "Sass", icon: techStackIcons.sicon4, category: ["Front-End"] },
  { id: 5, name: "React Js", icon: techStackIcons.sicon5, category: ["Front-End"] },
  { id: 6, name: "Vue Js", icon: techStackIcons.sicon6, category: ["Front-End"] },
  { id: 7, name: "Angular", icon: techStackIcons.sicon7, category: ["Front-End"] },
  { id: 8, name: "Meteor JS", icon: techStackIcons.sicon8, category: ["Front-End", "Back-End"] },
  { id: 9, name: "Nuxt JS", icon: techStackIcons.sicon9, category: ["Front-End"] },
  { id: 10, name: "WebGL", icon: techStackIcons.sicon10, category: ["Front-End"] },
  { id: 11, name: "Node.js", icon: techStackIcons.sicon11, category: ["Back-End"] },
  { id: 12, name: "Python", icon: techStackIcons.sicon12, category: ["Back-End", "AI & ML"] },
  { id: 13, name: "Elixir", icon: techStackIcons.sicon13, category: ["Back-End"] },
  { id: 14, name: "Ruby", icon: techStackIcons.sicon14, category: ["Back-End"] },
  { id: 15, name: "Java", icon: techStackIcons.sicon15, category: ["Back-End", "Mobile"] },
  { id: 16, name: "PHP", icon: techStackIcons.sicon16, category: ["Back-End"] },
  { id: 17, name: "Golang", icon: techStackIcons.sicon17, category: ["Back-End"] },
  { id: 18, name: "C#", icon: techStackIcons.sicon18, category: ["Back-End"] },
  { id: 19, name: "TypeScript", icon: techStackIcons.sicon19, category: ["Front-End", "Back-End"] },
  { id: 20, name: "Next.js", icon: techStackIcons.sicon20, category: ["Front-End"] },
  { id: 21, name: "Express", icon: techStackIcons.sicon21, category: ["Back-End"] },
  { id: 22, name: "MongoDB", icon: techStackIcons.sicon22, category: ["Back-End"] },
  { id: 23, name: "PostgreSQL", icon: techStackIcons.sicon23, category: ["Back-End"] },
  { id: 24, name: "Docker", icon: techStackIcons.sicon24, category: ["DevOps"] },
  { id: 25, name: "Kubernetes", icon: techStackIcons.sicon25, category: ["DevOps"] },
  { id: 26, name: "AWS", icon: techStackIcons.sicon26, category: ["DevOps"] },
  { id: 27, name: "React Native", icon: techStackIcons.sicon27, category: ["Mobile"] },
  { id: 28, name: "Flutter", icon: techStackIcons.sicon28, category: ["Mobile"] },
  { id: 29, name: "TensorFlow", icon: techStackIcons.sicon29, category: ["AI & ML"] },
  { id: 30, name: "PyTorch", icon: techStackIcons.sicon30, category: ["AI & ML"] },
];
