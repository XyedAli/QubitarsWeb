// Engagement Model page – section data (icons resolved in components via getEngagementModelCloudinaryImages)

// ─── Process (Collaboration Framework) ─────────────────────────────────────
export interface ProcessStep {
  iconKey: "icon14" | "icon15" | "icon16" | "icon17" | "icon18";
  title: string;
  description: string;
  textPosition: "above" | "below";
}

export const processSection = {
  subtitle: "COLLABORATION FRAMEWORK",
  title: "Results, Not",
  titleHighlight: "Noise",
  ctaText: "Begin Your Project",
  steps: [
    {
      iconKey: "icon14",
      title: "DISCOVERY & AGREEMENT",
      description:
        "We understand needs, finalize requirements, and align on project terms.",
      textPosition: "above" as const,
    },
    {
      iconKey: "icon15",
      title: "STRATEGY & PREPARATION",
      description:
        "We map out the project plan and assemble the right team to execute it.",
      textPosition: "below" as const,
    },
    {
      iconKey: "icon16",
      title: "DEVELOPMENT & BUILDING",
      description:
        "We build your solution using best practices and cutting-edge technology.",
      textPosition: "above" as const,
    },
    {
      iconKey: "icon17",
      title: "TESTING & DEPLOYMENT",
      description:
        "We rigorously test for quality and seamlessly integrate into your environment.",
      textPosition: "below" as const,
    },
    {
      iconKey: "icon18",
      title: "LAUNCH & SUPPORT",
      description:
        "We go live and provide ongoing maintenance to keep everything running smoothly.",
      textPosition: "above" as const,
    },
  ] as ProcessStep[],
};

// ─── Advantage ──────────────────────────────────────────────────────────────
export interface AdvantageItem {
  title: string;
  description: string;
  iconKey: "icon7" | "icon8" | "icon9";
}

export const advantageSection = {
  subtitle: "Advantage",
  title: "Key Benefits of Our Engagement Models",
  items: [
    {
      title: "Consistent Quality Assurance",
      description:
        "Quality is maintained through defined processes, reviews, and testing at every stage, ensuring dependable outcomes and reduced operational risk.",
      iconKey: "icon7" as const,
    },
    {
      title: "Faster Time to Market",
      description:
        "Streamlined workflows and optimized delivery cycles help launch solutions quickly, keeping businesses ahead of competitors.",
      iconKey: "icon8" as const,
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Systems are designed to evolve with business goals, supporting new features, integrations, and growth over time.",
      iconKey: "icon9" as const,
    },
  ] as AdvantageItem[],
};

// ─── Models (Growth-Focused Digital Services) ─────────────────────────────
export interface ServiceTab {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whatThisIncludes: string[];
  bestSuitedFor: string[];
}

export const modelsSection = {
  title: "Results-Driven Digital Solutions",
  tabs: [
    {
      id: "product-development",
      title: "Product Development",
      tagline: "End-to-end execution, built for scale",
      description:
        "We collaborate with you to build digital products that deliver real business outcomes. From discovery to launch and beyond, we focus on continuous improvement, speed, and quality aligned to your goals.",
      whatThisIncludes: [
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
      tagline: "Extend your team with the right skills",
      description:
        "Add senior engineers, designers, or specialists to your existing team. We integrate with your workflows and tools so you can scale capacity without the overhead of hiring.",
      whatThisIncludes: [
        "Dedicated resources that work as part of your team",
        "Flexible engagement length and hours",
        "Alignment with your stack, processes, and culture",
        "Clear communication and delivery expectations",
      ],
      bestSuitedFor: [
        "Teams with a capacity gap or tight deadlines",
        "Companies needing specialized skills short-term",
        "Organizations scaling engineering or design capacity",
      ],
    },
    {
      id: "consultation",
      title: "Consultation",
      tagline: "Strategy and guidance when you need it",
      description:
        "Get expert advice on architecture, technology choices, product strategy, or delivery practices. We help you make informed decisions and set up for long-term success.",
      whatThisIncludes: [
        "Technical and product strategy reviews",
        "Architecture and stack recommendations",
        "Process and team structure guidance",
        "Workshops and knowledge transfer",
      ],
      bestSuitedFor: [
        "Leaders planning a new product or major change",
        "Teams evaluating build vs buy or tech stack",
        "Organizations preparing for scale or modernization",
      ],
    },
  ] as ServiceTab[],
};

// ─── Customers Needs (Solutions Aligned To Outcomes) ────────────────────────
export interface FeatureCard {
  title: string;
  description: string;
  iconKey: "icon1" | "icon2" | "icon3" | "icon4" | "icon5" | "icon6";
}

export const customersNeedsSection = {
  subtitle: "Customer Needs",
  title: "Solutions Aligned To Outcomes",
  featureCards: [
    {
      title: "High Quality",
      description:
        "Quality is built into every stage of delivery. Engagement models designed around your specific goals, timelines, and operational requirements.",
      iconKey: "icon1" as const,
    },
    {
      title: "Fast Delivery",
      description:
        "Efficient resource planning reduces overhead while maximizing value. Streamlined execution and agile workflows help you launch faster without sacrificing quality.",
      iconKey: "icon2" as const,
    },
    {
      title: "Low Cost",
      description:
        "We optimize costs by aligning resources precisely with your needs. Efficient resource planning reduces overhead while maximizing value.",
      iconKey: "icon3" as const,
    },
    {
      title: "Flexible Resource Allocation",
      description:
        "Scale resources up or down based on project demands. Predictable delivery and reduced rework contribute directly to higher project returns.",
      iconKey: "icon4" as const,
    },
    {
      title: "Handling Future Needs",
      description:
        "Scale resources up or down based on project demands. Easily scale teams up or down to match changing project demands and priorities.",
      iconKey: "icon5" as const,
    },
    {
      title: "Growth-First Partnership",
      description:
        "Beyond immediate delivery, our engagement models are structured to support continuous improvement, innovation, and sustained collaboration as your business grows.",
      iconKey: "icon6" as const,
    },
  ] as FeatureCard[],
};

// ─── Numeric Banner ────────────────────────────────────────────────────────
export interface AnimatedStat {
  end: number;
  suffix: string;
  label: string;
  iconKey: "icon10" | "icon11" | "icon12" | "icon13";
}

export const numericBannerSection = {
  stats: [
    { iconKey: "icon10" as const, end: 150, suffix: "+", label: "Leading Companies" },
    { iconKey: "icon11" as const, end: 300, suffix: "+", label: "Industries Growth Strategies" },
    { iconKey: "icon12" as const, end: 8, suffix: "M+", label: "Revenue Boosted" },
    { iconKey: "icon13" as const, end: 400, suffix: "+", label: "Projects Successfully Delivered" },
  ] as AnimatedStat[],
};

// ─── Execution Excellence (slider cards) ────────────────────────────────────
export interface ExecutionExcellenceCard {
  number: string;
  title: string;
  description: string;
  imageKey: "execCard1" | "execCard2" | "execCard3" | "execCard4" | "execCard5" | "execCard6";
}

export const executionExcellenceSection = {
  cards: [
    {
      number: "01",
      title: "Milestone-Driven Execution",
      description:
        "Our engagement models are structured around clearly defined milestones, enabling predictable delivery, measurable progress, and alignment with your business goals at every stage.",
      imageKey: "execCard1" as const,
    },
    {
      number: "02",
      title: "Transparent Collaboration",
      description:
        "We embed open and consistent communication into our engagement models, ensuring full visibility, faster decisions, and continuous alignment throughout the project lifecycle.",
      imageKey: "execCard2" as const,
    },
    {
      number: "03",
      title: "Dedicated Engagement Management",
      description:
        "Each engagement model includes a dedicated manager who oversees planning, coordination, and execution—ensuring smooth workflows and accountability from start to finish.",
      imageKey: "execCard3" as const,
    },
    {
      number: "04",
      title: "On-Demand Scalability",
      description:
        "Our flexible engagement models allow you to scale resources, skills, or features at any point, adapting seamlessly to evolving project needs.",
      imageKey: "execCard4" as const,
    },
    {
      number: "05",
      title: "Flexible Engagement Structure",
      description:
        "Choose from engagement models designed to fit your timeline, budget, and scope—whether fixed, dedicated, or hybrid—without operational friction.",
      imageKey: "execCard5" as const,
    },
    {
      number: "06",
      title: "Outcome Focused Delivery",
      description:
        "Every engagement model is built around defined outcomes, ensuring efforts remain aligned with business value, performance goals, and long-term growth.",
      imageKey: "execCard6" as const,
    },
  ] as ExecutionExcellenceCard[],
};

// ─── Hero ──────────────────────────────────────────────────────────────────
export const heroSection = {
  title: "Tailored Engagement, Maximum",
  titleHighlight: "Value",
  descriptions: ["Start lean, scale confidently, and adjust seamlessly."],
  overlayTag: "ENGAGEMENT MODEL",
  overlayTitle: "Engage Smarter, Build Faster",
  overlayDescription:
    "Choose an engagement structure that fits your business today, while leaving room for where you're headed next.",
  buttonText: "Book a Consultation - it's free",
};

// ─── FAQ ───────────────────────────────────────────────────────────────────
export interface EngModelFAQItem {
  id: number;
  question: string;
  answer: string;
  link?: string;
  href?: string;
}

export const engModelFaqSection = {
  subtitle: "Got Questions?",
  title: "Simple, Honest Answers",
};

export const engModelFaqData: EngModelFAQItem[] = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer:
      "We provide end-to-end solutions ranging from strategy and design to development and automation, helping businesses streamline operations and scale efficiently.",
  },
  {
    id: 2,
    question: "Who are your typical clients?",
    answer:
      "Our clients range from startups and small businesses to large enterprises across various industries, including technology, healthcare, finance, and e-commerce.",
  },
  {
    id: 3,
    question: "How do you ensure quality in your projects?",
    answer:
      "We follow rigorous quality assurance processes, including code reviews, automated testing, and continuous monitoring to ensure high-quality deliverables.",
  },
  {
    id: 4,
    question: "What makes your company different from others?",
    answer:
      "We combine technical expertise with business acumen, delivering solutions that not only work flawlessly but also drive real business value and growth.",
  },
  {
    id: 5,
    question: "Do you customize solutions for each client?",
    answer:
      "Yes, we believe in tailored solutions. Every project is unique, and we work closely with clients to understand their specific needs and deliver customized solutions.",
  },
  {
    id: 6,
    question: "How do you handle security and compliance?",
    answer:
      "Security is our top priority. We implement industry best practices, regular security audits, and ensure compliance with relevant regulations and standards.",
  },
  {
    id: 7,
    question: "What does your process look like from start to finish?",
    answer:
      "Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support and maintenance.",
  },
  {
    id: 8,
    question: "How can we get started with you?",
    answer:
      "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your needs and provide a tailored proposal.",
  },
];
