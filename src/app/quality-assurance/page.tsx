import { Fragment } from "react";
import { HeroSection, QAApproaches, SoftwarePerformance, BusinessChallenges, Banner, TestingProcess ,FAQ} from "@/components/features/services/quality-Assurance";
import { OurTechStack } from "@/components/features/home";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("quality-assurance");

const QualityAssurancePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <QAApproaches />
      <BusinessChallenges />
      <SoftwarePerformance />
      <Banner />
      <OurTechStack />
      <TestingProcess />
      <FAQ />
    </Fragment>
  );
};
export default QualityAssurancePage