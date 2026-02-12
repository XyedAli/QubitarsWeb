import { getIndustriesStateIcons } from "@/lib/assets/icons";

/** Section heading – "Solutions" / "Aligned To" / "Outcomes" (with <br /> in UI) */
export const solutionsHeading = {
  line1: "Solutions",
  line2: "Aligned To",
  line3: "Outcomes",
};

export interface SolutionCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  articleClassName: string;
  descClassName: string;
}

const icons = getIndustriesStateIcons();

export const solutionCards: SolutionCard[] = [
  {
    id: "built-around",
    icon: icons.stateicon5,
    title: "Built Around Your Business",
    description: "Qubitars builds tailored real estate platforms aligned workflows.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative lg:absolute md:left-[-65px] lg:left-[-170px] xl:left-[-154px] right-0 lg:right-4 lg:top-[1%]",
    descClassName: "text-blue",
  },
  {
    id: "scale-without-limits",
    icon: icons.stateicon6,
    title: "Scale Without Limits",
    description: "Scalable platforms grow with your business, enabling modular expansion.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-45px] lg:left-[-140px] xl:left-[-110px] right-0 lg:right-4 md:top-[28%] lg:top-[26%]",
    descClassName: "text-blue",
  },
  {
    id: "simplify-complex",
    icon: icons.stateicon7,
    title: "Simplify the Complex",
    description: "We streamline leasing, payments, messaging to reduce work.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-40px] lg:left-[-140px] xl:left-[-105px] right-0 lg:right-4 md:top-[57%] lg:top-[53%]",
    descClassName: "text-gray-600",
  },
  {
    id: "control-risk",
    icon: icons.stateicon8,
    title: "Control Risk with Confidence",
    description: "AI-driven alerts catch risks early, preventing costly losses.",
    articleClassName:
      "flex gap-4 md:gap-5 items-start relative md:absolute md:left-[-60px] lg:left-[-160px] xl:left-[-140px] right-0 lg:right-4 md:top-[86%] lg:top-[79%]",
    descClassName: "text-blue ms-1",
  },
];
