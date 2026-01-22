import { DualRowSlider } from "@/components";
import { CaseStudies, CaseStudyCards } from "@/components/features/caseStudies";
import { Fragment } from "react/jsx-runtime";
import { styles } from "@/styles/style";
import { industriesImages } from "@/lib/assets/images";

const CaseStudiesPage = () => {
  const logoEntries = Object.entries(industriesImages)
    .filter(([key]) => key.startsWith("clogo"))
    .map(([key, src], index) => ({
      src,
      alt: `Client Logo ${index + 1}`,
      width: 120,
      height: 60,
    }));

  const firstRowItems = logoEntries.slice(0, 9);
  const secondRowItems = logoEntries.slice(9);

  return (
    <Fragment>
        <CaseStudies />
        <div className="py-8 bg-white">
        <div className={styles.sectionPadding}>
          <DualRowSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems} /> 
        </div>
        </div>
        <CaseStudyCards />
    </Fragment>
  );
}

export default CaseStudiesPage;