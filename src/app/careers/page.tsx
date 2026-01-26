import { Fragment } from "react";
import { CareersHero, Benefits, OpenPositions, LookingFor } from "@/components/features/careers";
export default function CareersPage() {
  return (
    <Fragment>
      <CareersHero />
      <Benefits />
      <OpenPositions />
      <LookingFor />
    </Fragment>
  );
}

