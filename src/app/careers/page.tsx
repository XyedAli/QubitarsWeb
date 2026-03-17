import { Fragment } from "react";
import { CareersHero, Benefits, OpenPositions, LookingFor } from "@/components/features/careers";
import { getStaticPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";
export const metadata = getStaticPageMetadata("careers", { canonicalPath: "/careers" });

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

