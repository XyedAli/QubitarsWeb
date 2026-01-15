import { AboutHero, FAQ, MissionVision, CoreValues, QubitarsAbout ,InstaFeed, ChooseQubitars} from "@/components/features/about";
import { Fragment } from "react/jsx-runtime";

export default function AboutPage() {
  return (
   <Fragment>
    <AboutHero />
    <QubitarsAbout />
    <MissionVision />
    <CoreValues />
    <InstaFeed />
    <ChooseQubitars />
    <FAQ />
   </Fragment>
  );
}

