/** Industries About section – intro copy per industry */

const aboutCopyByIndustry: Record<string, string> = {
  "real-estate":
    "PropTech and data platforms are reshaping real estate. Firms seek streamlined transactions and seamless experiences for buyers, investors, and tenants. At Qubitars, we build digital foundations for growth—clarity, efficiency, lasting value.",
  "travel-hospitality":
    "The travel and hospitality industry is rapidly evolving, with travelers expecting seamless, personalized experiences at every touchpoint. At Qubitars Technologies, we create intelligent digital solutions that simplify journeys, enhance guest satisfaction, and build lasting loyalty.",
  "oil-gas-energy":
    "The energy sector is evolving with sustainability, smart grids, and data-driven efficiency. Qubitars Technologies creates intelligent solutions that optimize resources, improve safety, and enable smarter, sustainable operations for a resilient future.",
  "banking-fintech":
    "The financial landscape is evolving with mobile banking, blockchain, and AI-driven security. Qubitars Technologies delivers secure, compliant fintech solutions that ensure seamless transactions, build trust, and empower institutions in the digital-first economy.",
  healthcare:
    "Healthcare is shifting to digital, with telemedicine, AI diagnostics, and patient-centric platforms enabling proactive, connected care. Qubitars Technologies builds intelligent solutions that improve outcomes, streamline operations, and put health first.",
  edtech:
    "The education sector is evolving with AI tutors, interactive platforms, and digital classrooms. Qubitars Technologies builds innovative EdTech solutions that empower educators, engage learners, and make learning accessible, personalized, and future-ready.",
  startups:
    "Startups thrive on speed, scalability, and innovation. Qubitars Technologies builds agile digital solutions that transform ideas into impactful products, from MVPs to scalable platforms, fueling growth, investment, and lasting success.",
};

export function getAboutCopyForIndustry(industryId: string): string {
  return aboutCopyByIndustry[industryId] ?? aboutCopyByIndustry["real-estate"];
}

/** @deprecated Use getAboutCopyForIndustry(industryId) */
export const industriesAboutCopy = aboutCopyByIndustry["real-estate"];
