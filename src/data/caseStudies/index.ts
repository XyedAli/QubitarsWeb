// Case Study Interface
export interface CaseStudy {
  id: number;
  image: string;
  logo: string;
  tag: string;
  title: string;
  desc: string;
}

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    image: "/assets/images/caseStudies/csimage1.svg",
    logo: "/assets/images/Industries/clogo1.svg",
    tag: "Real Estate",
    title: "The #1 AI Platform for Streamlining Slow Flip and Rental Properties.",
    desc:
      "Cashflow Innovator provides an AI-driven platform that simplifies slow-flip and rental property investments for diverse stakeholders."
  },
  {
    id: 2,
    image: "/assets/images/caseStudies/csimage2.svg",
    logo: "/assets/images/Industries/clogo2.svg",
    tag: "Startup",
    title: "AI-Human Collaboration Platform to Build Networks & Share Valu",
    desc:
      "CASHFLOW INNOVATOR is an AI-powered platform that enables users to build networks and share value through innovative solution creation."
  },
  {
    id: 3,
    image: "/assets/images/caseStudies/csimage3.svg",
    logo: "/assets/images/Industries/clogo12.svg",
    tag: "Healthcare",
    title: "The greatest investment you can make is in yourself.",
    desc:
      "SolveMyAllergies blends AI, mindfulness, and user-centric design to help individuals heal respiratory allergies."
  },
  {
    id: 4,
    image: "/assets/images/caseStudies/csimage4.svg",
    logo: "/assets/images/Industries/clogo17.svg",
    tag: "Healthcare",
    title: "Technology-Driven Healthcare for Africa",
    desc:
      "Africa Health Initiative delivers accessible healthcare solutions using modern digital infrastructure."
  },
  {
    id: 5,
    image: "/assets/images/CaseStudies/csimage5.svg",
    logo: "/assets/images/Industries/clogo5.svg",
    tag: "Healthcare",
    title: "Technology-Driven Healthcare for Africa",
    desc:
      "Africa Health Initiative delivers accessible healthcare solutions using modern digital infrastructure."
  }
];
