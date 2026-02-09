import { Fragment } from "react";
import { EngModalHero, CustomersNeeds, Advantage, Models, NumericBanner, ExcellenceExecution, Process, EngModelFAQs } from "@/components/features/engagementModel";
export const dynamic = "force-dynamic";
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

