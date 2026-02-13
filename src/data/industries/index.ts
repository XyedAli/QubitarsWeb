/** Industries page data – re-exports from per-section files */

export { industrySlugs, industryIds, isValidIndustryId, type IndustrySlug } from "./industrySlugs";
export { industryFaqs, getIndustryFaqs, type IndustryFAQItem } from "./faqs";
export { industriesAboutCopy, getAboutCopyForIndustry } from "./about";
export { heroIndustriesCards, getHeroCardsForIndustry, heroCardsByIndustry, type HeroIndustryCard } from "./hero";
export {
  growthBarrierHeading,
  growthBarrierCards,
  getGrowthBarrierForIndustry,
  growthBarrierByIndustry,
  type GrowthBarrierCard,
  type GrowthBarrierSection,
} from "./growthBarrier";
export {
  solutionsHeading,
  solutionCards,
  getSolutionCardsForIndustry,
  solutionCardsByIndustry,
  type SolutionCard,
} from "./solutions";
export {
  chooseQubitarsHeading,
  whyUsCards,
  type WhyUsCard,
  businessExcellenceHeading,
  engagementCards,
  getEngagementCardIcon,
  type EngagementCard,
  outcomeFocusedHeading,
  roadmapSteps,
  type RoadmapStep,
} from "./chooseQubitars";
