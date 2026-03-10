"use client";

import { FAQSection } from "@/components/shared/faq";
import { faqData } from "@/data";
import { div } from "framer-motion/client";

const FAQ = () => (

    <FAQSection
    data={faqData}
    subtitle="Got Questions?"
    title="Simple, Honest Answers"
  />
  
);

export default FAQ;
