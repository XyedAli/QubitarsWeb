import { DualRowSlider } from "@/components";
import { CaseStudies, CaseStudyCards } from "@/components/features/caseStudies";
import { Fragment } from "react/jsx-runtime";
import { styles } from "@/styles/style";
import { industriesImages } from "@/lib/assets/images";
import { caseStudiesMetadata } from "@/lib/metadata";

export const metadata = caseStudiesMetadata;

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "CASHFLOW INNOVATOR",
    description: "The #1 AI Platform for Streamlining Slow Flip and Rental Properties.",
    image: "/assets/images/home/himg8.png",
    imageAlt: "Cashflow Innovator",
  },
  {
    id: "2",
    title: "Ccharta",
    description: "AI-Human Solution Creation Platform. Build Your Network, Share Your Value.",
    image: "/assets/images/home/himg9.png",
    imageAlt: "Ccharta",
  },
  {
    id: "3",
    title: "SolveMyAllergies",
    description: "The greatest investment you can make is in Yourself.",
    image: "/assets/images/home/himg10.png",
    imageAlt: "SolveMyAllergies",
  },
  {
    id: "4",
    title: "AFRICA HEALTH",
    description: "Improving Health Outcomes Across Africa.",
    image: "/assets/images/home/himg11.png",
    imageAlt: "Africa Health",
  },
  {
    id: "5",
    title: "FARAWAY",
    description: "AI-Powered Booking for Sea.",
    image: "/assets/images/home/himg12.png",
    imageAlt: "Faraway",
  },
  {
    id: "6",
    title: "Enterprise Solution",
    description: "Transforming business operations with cutting-edge technology and innovative solutions.",
    image: "/assets/images/home/himg13.png",
    imageAlt: "Enterprise Solution",
  },
];

export default function AboutPage() {
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
        <div className={styles.sectionPadding}>
          <DualRowSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems} /> 
        </div>
        <CaseStudyCards />
            </Fragment>
  );
}

