import { Fragment } from "react";
import { notFound } from "next/navigation";
import {
  IndustriesHero,
  IndustriesAbout,
  GrowthBarrier,
  BusinessExcellence,
  Solutions,
  OutcomeFocused,
  OtherSuccessStoriesSlider,
  ChooseQubitars,
  FAQs,
} from "@/components/features/industries";
import { OurClient } from "@/components/features/home";
import { testimonialsData, testimonialImagesById } from "@/data/home";
import { industryIds, isValidIndustryId } from "@/data/industries/industrySlugs";
import { styles } from "@/styles/style";

export function generateStaticParams() {
  return industryIds.map((industryId) => ({ industryId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industryId: string }>;
}) {
  const { industryId } = await params;
  const { getIndustryPageMetadata } = await import("@/lib/metadata");
  return getIndustryPageMetadata(industryId);
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industryId: string }>;
}) {
  const { industryId } = await params;
  if (!isValidIndustryId(industryId)) notFound();

  const testimonialsWithImages = testimonialsData.map((testimonial) => {
    const images = testimonialImagesById[testimonial.id];
    return { ...testimonial, ...images };
  });

  return (
    <Fragment>
      <IndustriesHero industryId={industryId} />
      <IndustriesAbout industryId={industryId} />
      <GrowthBarrier industryId={industryId} />
      <Solutions industryId={industryId} />
      <BusinessExcellence />
      <OutcomeFocused />
      <OtherSuccessStoriesSlider />
      <ChooseQubitars />
      <div className={styles.sectionPaddingY1}>
      <OurClient testimonials={testimonialsWithImages} />
      </div>
      <FAQs industryId={industryId} />
    </Fragment>
  );
}
