export interface StructureTestingStep {
  title: string;
  description: string;
  timelineLabel: string;
}

export const STRUCTURE_TESTING_STEPS: StructureTestingStep[] = [
  {
    title: "Requirement Review",
    description:
      "We analyze requirements early to eliminate inconsistencies and prevent costly changes later.",
    timelineLabel: "Clarity",
  },
  {
    title: "Test Planning",
    description:
      "We define testing strategy, scope, resources, and success criteria for efficient execution.",
    timelineLabel: "Strategy",
  },
  {
    title: "Test Design",
    description:
      "We create prioritized test cases and scenarios based on risk and functionality coverage.",
    timelineLabel: "Coverage",
  },
  {
    title: "Test Execution",
    description:
      "We continuously test features, detect defects, and ensure stable performance.",
    timelineLabel: "Precision",
  },
  {
    title: "Validation & Support",
    description:
      "We validate releases, retest fixes, and monitor performance after deployment.",
    timelineLabel: "Assurance",
  },
] as const;

export const STRUCTURE_TESTING_CONSTANTS = {
  LINE_MS: 1300,
  PAUSE_AFTER_LINE_MS: 350,
  HOLD_ALL_MS: 3200,
  LINE_EASE: [0.25, 0.1, 0.25, 1] as const,
  GRAD: "w-px bg-gradient-to-b from-[#F58220] via-[#EA4D24] to-[#EA4D24]/35",
  BG: "radial-gradient(ellipse 80% 65% at 92% -6%, rgba(234,77,36,0.22) 0%, transparent 52%), radial-gradient(ellipse 45% 40% at 100% 10%, rgba(255,154,60,0.08) 0%, transparent 48%)",
  H: {
    growTall: "min-h-[72px] xl:min-h-[145px]",
    growShort: "min-h-[36px] xl:min-h-[60px]",
    emptyTall: "min-h-[145px] mt-4",
    emptyShort: "min-h-[44px] mt-4",
  } as const,
} as const;
