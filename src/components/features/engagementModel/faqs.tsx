"use client";

import { FAQSection } from "@/components/shared/faq";
import { faqData } from "@/data";

const EngModelFAQs = () => (
  <FAQSection
    data={faqData}
    subtitle="Got Questions?"
    title="Simple, Honest Answers"
  />
);

export default EngModelFAQs;
