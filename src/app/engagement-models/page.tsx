import { Fragment } from "react";
import { EngModalHero, CustomersNeeds, Advantage, Models, NumericBanner, Process, EngModelFAQs } from "@/components/features/engagementModel";

export default function EngagementModelsPage() {
  return (
    <Fragment>
      <EngModalHero />
      <CustomersNeeds />
      <Advantage />
      <Models />
      <NumericBanner />
      <Process />
      <EngModelFAQs />
    </Fragment>
  );
}

