import { Fragment } from "react";
import { EngModalHero, CustomersNeeds, Advantage, Models, NumericBanner, ExcellenceExecution, Process, EngModelFAQs } from "@/components/features/engagementModel";
import { getStaticPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";
export const metadata = getStaticPageMetadata("engagement-models", { canonicalPath: "/engagement-models" });

export default function EngagementModelsPage() {
  return (
    <Fragment>
      <EngModalHero />
      <CustomersNeeds />
      <Advantage />
      <Models />
      <NumericBanner />
      <ExcellenceExecution />
      <Process />
      <EngModelFAQs />
    </Fragment>
  );
}

