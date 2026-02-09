import { MapPin, Atom, Diameter, HeartPlus, GraduationCap, Rocket, LucideIcon } from "lucide-react";

// Benefits (Why Work With Us)
export interface BenefitItem {
  value: string;
  label: string;
  iconKey: "careerIcon1" | "careerIcon2" | "careerIcon3" | "careerIcon4" | "careerIcon5" | "careerIcon6";
}

export const benefitsSection = {
  subtitle: "Benefits",
  title: "Why Work With Us",
  description:
    "We believe great work starts with empowered people. At Qubitars, you're trusted with responsibility, encouraged to learn continuously, and given the freedom to make an impact in a supportive, collaborative culture.",
  items: [
    { value: "Growth-Focused Culture", label: "Continuous learning and career development.", iconKey: "careerIcon1" as const },
    { value: "Cross-Domain Exposure", label: "Collaboration between tech and business teams.", iconKey: "careerIcon2" as const },
    { value: "Latest Technology Stack", label: "Hands-on experience with modern technologies.", iconKey: "careerIcon3" as const },
    { value: "Client-Facing Experience", label: "Work on real clients and real-world challenges.", iconKey: "careerIcon4" as const },
    { value: "Innovation-First Mindset", label: "Freedom to experiment and innovate.", iconKey: "careerIcon5" as const },
    { value: "Learning by Doing", label: "Practical, ownership-driven learning.", iconKey: "careerIcon6" as const },
  ] as BenefitItem[],
};

// Open Positions (job listings)
export interface JobRequirements {
  intro?: string;
  positions?: string[];
  techStack?: string[];
}

export interface JobPosition {
  id: number;
  title: string;
  experience: string;
  type: string;
  education: string;
  language: string;
  technologies: string[];
  isOnSite: boolean;
  requirements: JobRequirements;
}

export const openPositions: JobPosition[] = [
  {
    id: 1,
    title: "Mobile Application Development",
    experience: "2+ Years of experience",
    type: "Full-time",
    education: "BSCS",
    language: "Fluent in English",
    technologies: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
    ],
    isOnSite: true,
    requirements: {
      intro:
        "Lumitech is a forward-thinking technology company dedicated to building innovative digital solutions. We're looking for passionate developers who thrive in collaborative environments and are eager to contribute to cutting-edge projects. If you're skilled, motivated, and ready to make an impact, we'd love to hear from you!",
      positions: [
        "2x Frontend Developer (with backend experience)",
        "2x Backend Developer",
        "Alternatively, we are ready to hire 4x Full-Stack Developers",
      ],
      techStack: [
        "Strong foundation in JavaScript and functional programming.",
        "Hands-on experience with TypeScript, React, and Next.js.",
        "Practical backend experience using Node.js with Fastify or NestJS.",
        "Thorough understanding of modern development practices (clean code, CI/CD, rigorous code reviews).",
        "Familiarity with Agile/Scrum methodologies and collaboration tools (e.g., Jira, Git, ClickUp).",
        "English level: Upper-Intermediate or higher.",
      ],
    },
  },
  {
    id: 2,
    title: "Frontend Developer",
    experience: "3+ Years of experience",
    type: "Full-time",
    education: "BSCS",
    language: "Fluent in English",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    isOnSite: true,
    requirements: {
      intro: "We are seeking an experienced Frontend Developer to join our dynamic team.",
      positions: ["1x Senior Frontend Developer"],
      techStack: [
        "Expert-level knowledge of React and Next.js.",
        "Strong TypeScript skills.",
        "Experience with modern CSS frameworks.",
        "Understanding of responsive design principles.",
      ],
    },
  },
];

// Industry Interface
export interface Industry {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Industries Data
export const industries: Industry[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Travel & Hospitality",
    description: "Elevating guest experiences through smart technology solutions. We help travel businesses modernize operations and deliver exceptional service."
  },
  {
    id: 2,
    icon: Atom,
    title: "Oil Gas & Energy",
    description: "Powering the future of energy with advanced digital solutions. Our expertise helps optimize operations and drive sustainable practices."
  },
  {
    id: 3,
    icon: Diameter,
    title: "Banking & FinTech",
    description: "Revolutionizing financial services with cutting-edge technology. We enable secure, efficient, and user-friendly banking experiences."
  },
  {
    id: 4,
    icon: HeartPlus,
    title: "Healthcare",
    description: "Advancing healthcare delivery through digital transformation. Our solutions improve patient care and streamline medical operations."
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "EdTech",
    description: "Revolutionizing learning through innovative digital solutions. We help create engaging and effective educational experiences."
  },
  {
    id: 6,
    icon: Rocket,
    title: "Startups",
    description: "Empowering startups with scalable technology solutions. We help transform innovative ideas into successful digital products."
  }
];

// Legacy export for backward compatibility
export const careerValues = industries;
export type { Industry as CareerValue };
