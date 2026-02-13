/** Per-industry FAQs for Industries page. Keys must match industrySlugs[].id */

export interface IndustryFAQItem {
  question: string;
  answer: string;
}

export const industryFaqs: Record<string, IndustryFAQItem[]> = {
  "real-estate": [
    {
      question: "What kind of real estate software can you create?",
      answer:
        "From property listing portals and agency CRMs to investor dashboards and mobile apps, we build solutions that fit your exact needs.",
    },
    {
      question: "How do you make sure the software is easy to use?",
      answer:
        "We put user experience first—every feature is designed to be simple, intuitive, and accessible, even for people who aren't tech-savvy.",
    },
    {
      question: "Do you offer custom features if my business has unique needs?",
      answer:
        "Yes, every solution is custom-built. We take time to understand your workflow and create features that match your exact requirements.",
    },
    {
      question: "Will the software scale as my business grows?",
      answer:
        "Definitely. Whether you're starting small or managing thousands of listings, our solutions grow with you—without extra hassle.",
    },
  ],
  "travel-hospitality": [
    {
      question: "How do you ensure data security for sensitive guest information?",
      answer:
        "We implement enterprise-grade security measures including encryption, GDPR/PCI compliance, and continuous monitoring to protect guest data.",
    },
    {
      question: "Do you provide tools for dynamic pricing and revenue optimization?",
      answer:
        "Absolutely. Our platforms can include AI-driven pricing engines that adjust rates based on demand, seasonality, and market trends.",
    },
    {
      question: "Can you help us digitize loyalty or rewards programs?",
      answer:
        "Yes. We create digital loyalty systems with tiered rewards, automated tracking, and integration with booking platforms for higher guest retention.",
    },
    {
      question: "Do you offer solutions for travel agencies and tour operators, not just hotels?",
      answer:
        "Of course. From itinerary builders to automated invoicing and CRM tools, we tailor solutions for agencies, operators, and hospitality brands alike.",
    },
  ],
  "oil-gas-energy": [
    {
      question: "Can you integrate with our existing SCADA or asset management systems?",
      answer:
        "Yes. We build API-led integrations with legacy and modern OT/IT systems so you get a unified view without replacing what already works.",
    },
    {
      question: "How do you support safety and compliance in the field?",
      answer:
        "We design solutions with audit trails, role-based access, and workflows that align with industry regulations and safety standards.",
    },
    {
      question: "Do you offer solutions for asset and maintenance management?",
      answer:
        "Absolutely. From predictive maintenance dashboards to work-order and inspection workflows, we help optimize uptime and reduce operational risk.",
    },
    {
      question: "Will the platform scale across multiple sites or regions?",
      answer:
        "Yes. We build cloud-native, scalable systems that grow with your operations—whether you run a single facility or a global portfolio.",
    },
  ],
  "banking-fintech": [
    {
      question: "Can you integrate with existing core banking systems?",
      answer:
        "Absolutely. We specialize in API-based integrations to connect with your legacy or modern banking infrastructure.",
    },
    {
      question: "How do you ensure fraud prevention and transaction security?",
      answer:
        "We implement advanced security layers, including AI-driven fraud detection, biometric authentication, and real-time alerts.",
    },
    {
      question: "How do you handle regulatory and compliance requirements?",
      answer:
        "We design solutions with audit trails, access controls, and configurable rules to support regulatory compliance and reporting.",
    },
    {
      question: "How customizable are your platforms for our branding and features?",
      answer:
        "All solutions are fully white-labeled, enabling you to customize UI, workflows, and integrations as needed.",
    },
  ],
  healthcare: [
    {
      question: "Can your platforms support medical IoT devices?",
      answer:
        "Yes. From wearables to in-hospital monitoring, we enable real-time data syncing with medical devices.",
    },
    {
      question: "How do you ensure data privacy and security for patients?",
      answer:
        "We apply encryption, access controls, and continuous audits to safeguard sensitive patient data.",
    },
    {
      question: "Do you offer AI-based diagnostics or clinical decision support?",
      answer:
        "Yes. We create AI modules that analyze medical records, imaging, and history to assist doctors with faster decision-making.",
    },
    {
      question: "What kind of support do you offer after system launch?",
      answer:
        "We provide ongoing updates, staff training, and round-the-clock technical support to ensure smooth operations.",
    },
  ],
  edtech: [
    {
      question: "Can you integrate with existing Learning Management Systems (LMS)?",
      answer:
        "Absolutely. We ensure smooth integrations with Moodle, Blackboard, Canvas, and custom LMS setups.",
    },
    {
      question: "Can your platforms support multi-device learning?",
      answer:
        "Definitely. We design mobile-first platforms optimized for phones, tablets, and desktops.",
    },
    {
      question: "Do you offer AI-driven personalization for learners?",
      answer:
        "Yes. Our AI modules adapt content delivery based on student progress, learning style, and performance.",
    },
    {
      question: "Do you support workforce training and certification?",
      answer:
        "Of course. We design scalable systems for workforce training, compliance education, and skill certification.",
    },
  ],
  startups: [
    {
      question: "Do you offer MVP (Minimum Viable Product) development services?",
      answer:
        "Yes. We specialize in building MVPs that validate your idea quickly, allowing you to test and scale with confidence.",
    },
    {
      question: "Can you help us attract investors through tech solutions?",
      answer:
        "Absolutely. We build investor-ready platforms with scalable architecture and strong documentation to showcase credibility.",
    },
    {
      question: "How do you ensure scalability as our business grows?",
      answer:
        "We design modular, cloud-native systems that expand with your user base and evolving features.",
    },
    {
      question: "How do you prioritize features for early-stage products?",
      answer:
        "We work with you to identify core features, keeping development lean while maintaining room for future enhancements.",
    },
  ],
};

export function getIndustryFaqs(industryId: string): IndustryFAQItem[] {
  return industryFaqs[industryId] ?? industryFaqs["real-estate"] ?? [];
}
