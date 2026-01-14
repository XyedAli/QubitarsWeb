import { AboutHero, FAQ, MissionVision, CoreValues, QubitarsAbout ,InstaFeed} from "@/components/features/about";
import { Fragment } from "react/jsx-runtime";

export default function AboutPage() {
  return (
   <Fragment>
    <AboutHero />
    <QubitarsAbout />
    <MissionVision />
    <CoreValues />
    <InstaFeed />
    <FAQ />
   </Fragment>
  );
}

