import { Fragment } from "react";
import { HeroSection, QAApproaches, SoftwarePerformance, BusinessChallenges, Banner, TestingProcess ,FAQ} from "@/components/features/services/quality-Assurance";
import { OurTechStack } from "@/components/features/home";
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