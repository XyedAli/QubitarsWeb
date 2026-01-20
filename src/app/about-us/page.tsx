import { AboutHero, FAQ, MissionVision, CoreValues, QubitarsAbout, InstaFeed, ChooseQubitars, TimesZone } from "@/components/features/about";
import { Fragment } from "react/jsx-runtime";
import { aboutMetadata } from "@/lib/metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <Fragment>
      <AboutHero />
      <QubitarsAbout />
      <MissionVision />
      <TimesZone />
      <CoreValues />
      <InstaFeed />
      <ChooseQubitars />
      <FAQ />
    </Fragment>
  );
}

