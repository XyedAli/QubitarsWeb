import { IndustryLogosSlider } from "@/components";
import { CaseStudies, CaseStudyCards} from "@/components/features/caseStudies";
import { Fragment } from "react/jsx-runtime";
import { styles } from "@/styles/style";

const CaseStudiesPage = () => {
  return (
    <Fragment>
        <CaseStudies />
        <div className="py-8 bg-white">
        <div className={styles.sectionPadding}>
          <IndustryLogosSlider /> 
        </div>
        </div>
        <CaseStudyCards />
    </Fragment>
  );
}

export default CaseStudiesPage;