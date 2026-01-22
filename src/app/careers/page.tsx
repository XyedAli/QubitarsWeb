import { Fragment } from "react";
import CareersHero from "@/components/features/careers/hero";
import CareerValuesSection from "@/components/features/careers/cards";

export default function CareersPage() {
  return (
    <Fragment>
      <CareersHero />
      <CareerValuesSection />
    </Fragment>
  );
}
