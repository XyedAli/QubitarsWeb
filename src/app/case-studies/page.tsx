import { DualRowSlider } from "@/components";
import { CaseStudies, CaseStudyCards } from "@/components/features/caseStudies";
import { Fragment } from "react/jsx-runtime";
import { styles } from "@/styles/style";
import { getIndustryCloudinaryIcons } from "@/lib/assets/icons";

const CaseStudiesPage = () => {
  const industryIcons = getIndustryCloudinaryIcons();
  
  // Ensure all logos are included in correct order (clogo6 is included)
  const logoKeys = ['clogo1', 'clogo2', 'clogo3', 'clogo4', 'clogo5', 'clogo6', 'clogo7', 'clogo8', 'clogo9', 'clogo10', 'clogo11', 'clogo12', 'clogo13', 'clogo14', 'clogo15', 'clogo16', 'clogo17', 'clogo18'] as const;
  
  const logoEntries = logoKeys
    .filter((key): key is keyof typeof industryIcons => key in industryIcons)
    .map((key, index) => ({
      src: industryIcons[key],
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