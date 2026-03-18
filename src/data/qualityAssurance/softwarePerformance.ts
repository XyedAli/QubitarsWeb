import type { LucideIcon } from "lucide-react";
import { Leaf, Cable, Gauge, ShieldCheck } from "lucide-react";

export interface SoftwarePerformanceItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const SOFTWARE_PERFORMANCE_ITEMS: SoftwarePerformanceItem[] = [
  {
    id: "functional",
    title: "Functional Testing",
    description:
      "We verify that every feature and workflow functions correctly across devices, environments, and user scenarios to ensure consistent performance.",
    Icon: Leaf,
  },
  {
    id: "api",
    title: "API Testing",
    description:
      "We test APIs and endpoints to ensure accurate data exchange, reliable communication, and seamless integration between system components.",
    Icon: Cable,
  },
  {
    id: "performance",
    title: "Performance Testing",
    description:
      "We simulate high traffic and real-world conditions to assess system speed, stability, and scalability under peak loads.",
    Icon: Gauge,
  },
  {
    id: "security",
    title: "Security Testing",
    description:
      "Protecting your system and data is critical. Our security assessments replicate potential cyber-attack scenarios to uncover vulnerabilities and safeguard your application against threats before deployment.",
    Icon: ShieldCheck,
  },
];
