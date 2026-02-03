"use client";

import { FAQSection } from "@/components/shared/faq";
import { engModelFaqSection, engModelFaqData } from "@/data/engModel";

const EngModelFAQs = () => (
  <FAQSection
    data={engModelFaqData}
    subtitle={engModelFaqSection.subtitle}
    title={engModelFaqSection.title}
  />
);

export default EngModelFAQs;
