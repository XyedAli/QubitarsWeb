import { aboutImages } from "@/lib/assets/images";

// FAQ Interface and Data
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  link?: string;
  href?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer: "We provide end-to-end solutions ranging from strategy and design to development and automation, helping businesses streamline operations and scale efficiently.",
  },
  {
    id: 2,
    question: "Who are your typical clients?",
    answer: "Our clients range from startups and small businesses to large enterprises across various industries, including technology, healthcare, finance, and e-commerce.",
  },
  {
    id: 3,
    question: "How do you ensure quality in your projects?",
    answer: "We follow rigorous quality assurance processes, including code reviews, automated testing, and continuous monitoring to ensure high-quality deliverables.",
  },
  {
    id: 4,
    question: "What makes your company different from others?",
    answer: "We combine technical expertise with business acumen, delivering solutions that not only work flawlessly but also drive real business value and growth.",
  },
  {
    id: 5,
    question: "Do you customize solutions for each client?",
    answer: "Yes, we believe in tailored solutions. Every project is unique, and we work closely with clients to understand their specific needs and deliver customized solutions.",
  },
  {
    id: 6,
    question: "How do you handle security and compliance?",
    answer: "Security is our top priority. We implement industry best practices, regular security audits, and ensure compliance with relevant regulations and standards.",
  },
  {
    id: 7,
    question: "What does your process look like from start to finish?",
    answer: "Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support and maintenance.",
  },
  {
    id: 8,
    question: "How can we get started with you?",
    answer: "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your needs and provide a tailored proposal.",
  },
];

// Core Values Interface and Data
export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: aboutImages.Aimg3,
    title: "Innovation",
    description: "We leverage emerging technologies to build future-ready solutions globally.",
  },
  {
    icon: aboutImages.Aimg4,
    title: "Strive for Better",
    description: "Continuous improvement guides everything we create and deliver daily.",
  },
  {
    icon: aboutImages.Aimg5,
    title: "Transparency",
    description: "Open and honest communication builds trust with clients always.",
  },
  {
    icon: aboutImages.Aimg6,
    title: "Respect & Equality",
    description: "We value every voice and encourage collaboration across teams.",
  },
  {
    icon: aboutImages.Aimg7,
    title: "Integrity",
    description: "We uphold ethical practices and keep our promises, always.",
  },
  {
    icon: aboutImages.Aimg8,
    title: "Client Focus",
    description: "We solve real client challenges with measurable business results.",
  },
];

// Location Interface and Data
export interface Location {
  id: number;
  name: string;
  top: string;
  left: string;
  color: string;
  topSm?: string;
  leftSm?: string;
  topMd?: string;
  leftMd?: string;
  topLg?: string;
  leftLg?: string;
  topXl?: string;
  leftXl?: string;
  topXxl?: string;
  leftXxl?: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Edmonton, Canada",
    top: "22%",
    left: "4%",
    color: "#FC7E13",
    topSm: "20%",
    leftSm: "1%",
    topMd: "10%",
    leftMd: "10%",
    topLg: "16%",
    leftLg: "15%",
    topXl: "12%",
    leftXl: "6%",
    topXxl: "12%",
    leftXxl: "13%",
  },
  {
    id: 2,
    name: "Chicago, USA",
    top: "18%",
    left: "26%",
    color: "#3B82F6",
    topSm: "16%",
    leftSm: "27%",
    topMd: "3%",
    leftMd: "20%",
    topLg: "12%",
    leftLg: "29%",
    topXl: "6%",
    leftXl: "20%",
    topXxl: "8%",
    leftXxl: "20%",
  },
  {
    id: 3,
    name: "San Francisco, USA",
    top: "40%",
    left: "8%",
    color: "#10B981",
    topSm: "41%",
    leftSm: "9%",
    topMd: "42%",
    leftMd: "9%",
    topLg: "39%",
    leftLg: "8%",
    topXl: "35%",
    leftXl: "7%",
    topXxl: "35%",
    leftXxl: "6%",
  },
  {
    id: 4,
    name: "New York City, USA",
    top: "24%",
    left: "29%",
    color: "#EF4444",
    topSm: "23%",
    leftSm: "30%",
    topMd: "18%",
    leftMd: "28%",
    topLg: "21%",
    leftLg: "28%",
    topXl: "10%",
    leftXl: "33%",
    topXxl: "16%",
    leftXxl: "36%",
  },
  {
    id: 5,
    name: "Logan, USA",
    top: "38%",
    left: "26%",
    color: "#8B5CF6",
    topSm: "39%",
    leftSm: "27%",
    topMd: "50%",
    leftMd: "27%",
    topLg: "40%",
    leftLg: "24%",
    topXl: "39%",
    leftXl: "23%",
    topXxl: "42%",
    leftXxl: "18%",
  },
  {
    id: 6,
    name: "Miami, USA",
    top: "52%",
    left: "17%",
    color: "#F59E0B",
    topSm: "53%",
    leftSm: "18%",
    topMd: "54%",
    leftMd: "18%",
    topLg: "52%",
    leftLg: "17%",
    topXl: "50%",
    leftXl: "15%",
    topXxl: "49%",
    leftXxl: "13%",
  },
  {
    id: 7,
    name: "Virginia, USA",
    top: "32%",
    left: "27%",
    color: "#EC4899",
    topSm: "33%",
    leftSm: "28%",
    topMd: "33%",
    leftMd: "29%",
    topLg: "33%",
    leftLg: "26%",
    topXl: "28%",
    leftXl: "31%",
    topXxl: "29%",
    leftXxl: "35%",
  },
  {
    id: 8,
    name: "Maryland, USA",
    top: "28%",
    left: "22%",
    color: "#06B6D4",
    topSm: "28%",
    leftSm: "23%",
    topMd: "27%",
    leftMd: "18%",
    topLg: "27%",
    leftLg: "21%",
    topXl: "21%",
    leftXl: "18%",
    topXxl: "22%",
    leftXxl: "26%",
  },
  {
    id: 9,
    name: "North Carolina, USA",
    top: "36%",
    left: "32%",
    color: "#84CC16",
    topSm: "37%",
    leftSm: "33%",
    topMd: "38%",
    leftMd: "34%",
    topLg: "38%",
    leftLg: "31%",
    topXl: "40%",
    leftXl: "37%",
    topXxl: "35%",
    leftXxl: "40%",
  },
  {
    id: 10,
    name: "Tallinn, Estonia",
    top: "18%",
    left: "49%",
    color: "#6366F1",
    topSm: "19%",
    leftSm: "50%",
    topMd: "19%",
    leftMd: "51%",
    topLg: "18%",
    leftLg: "50%",
    topXl: "17%",
    leftXl: "49%",
    topXxl: "16%",
    leftXxl: "48%",
  },
  {
    id: 11,
    name: "Utrecht, Netherlands",
    top: "28%",
    left: "47%",
    color: "#F97316",
    topSm: "29%",
    leftSm: "48%",
    topMd: "30%",
    leftMd: "60%",
    topLg: "31%",
    leftLg: "48%",
    topXl: "30%",
    leftXl: "47%",
    topXxl: "29%",
    leftXxl: "48%",
  },
  {
    id: 12,
    name: "Lagos, Nigeria",
    top: "55%",
    left: "49%",
    color: "#14B8A6",
    topSm: "56%",
    leftSm: "50%",
    topMd: "57%",
    leftMd: "50%",
    topLg: "56%",
    leftLg: "49%",
    topXl: "55%",
    leftXl: "48%",
    topXxl: "54%",
    leftXxl: "47%",
  },
  {
    id: 13,
    name: "Kampala, Uganda",
    top: "60%",
    left: "54%",
    color: "#A855F7",
    topSm: "61%",
    leftSm: "55%",
    topMd: "62%",
    leftMd: "56%",
    topLg: "61%",
    leftLg: "56%",
    topXl: "60%",
    leftXl: "55%",
    topXxl: "59%",
    leftXxl: "54%",
  },
  {
    id: 14,
    name: "Seoul, Korea",
    top: "38%",
    left: "77%",
    color: "#DC2626",
    topSm: "39%",
    leftSm: "78%",
    topMd: "40%",
    leftMd: "79%",
    topLg: "39%",
    leftLg: "79%",
    topXl: "38%",
    leftXl: "78%",
    topXxl: "37%",
    leftXxl: "77%",
  },
];
