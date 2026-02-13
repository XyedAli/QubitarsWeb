"use client";

import { FAQSection } from "@/components/shared/faq";
import { getIndustryFaqs } from "@/data/industries";

interface FAQsProps {
  industryId: string;
}

const FAQs = ({ industryId }: FAQsProps) => {
  const data = getIndustryFaqs(industryId);
  return (
    <FAQSection
      data={data}
      subtitle="Got Questions?"
      title="Simple, Honest Answers"
    />
  );
};

export default FAQs;
