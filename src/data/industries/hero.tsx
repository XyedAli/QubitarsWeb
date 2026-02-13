import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

export interface HeroIndustryCard {
  id: string;
  name: string;
  icon: React.ComponentType<{ width: number; height: number; className?: string }>;
  title: string;
  description: string;
  buttonText: string;
}

function makeCards(
  industryId: string,
  cards: { name: string; title: string; description: string; buttonText: string }[]
): HeroIndustryCard[] {
  const Icon = ChartNoAxesCombined;
  return cards.map((c, i) => ({
    id: `${industryId}-${i + 1}`,
    name: c.name,
    icon: Icon,
    title: c.title,
    description: c.description,
    buttonText: c.buttonText,
  }));
}

const realEstateCards: HeroIndustryCard[] = makeCards("real-estate", [
  { name: "Digital Advantage", title: "Built For Real Estate", description: "From property data to client workflows, we modernize how real estate teams operate, collaborate, and deliver results.", buttonText: "See How It Works" },
  { name: "Real Estate", title: "Smarter Property Operations", description: "We help real estate businesses replace fragmented processes with connected, technology-driven operations that scale confidently.", buttonText: "Book a Free Consultation" },
  { name: "Intelligent Growth", title: "Data-Driven Real Estate Decisions", description: "Centralized data, automated workflows, and real-time insights empower faster decisions and reduced operational friction.", buttonText: "View Use Cases" },
  { name: "Trusted Technology", title: "Scalable Real Estate Platforms", description: "Our solutions grow with your portfolio, supporting expansion, compliance, and long-term operational reliability.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results Built to Scale", description: "We partner with real estate leaders to deliver measurable outcomes through secure, efficient, and future-ready systems.", buttonText: "Start the Conversation" },
]);

const travelHospitalityCards: HeroIndustryCard[] = makeCards("travel-hospitality", [
  { name: "Seamless Journeys", title: "Redefining Guest Experiences", description: "From AI-powered recommendations to contactless check-ins, we craft digital experiences that delight guests, boost loyalty, and simplify operations.", buttonText: "Book a Free Demo" },
  { name: "Digital Concierge", title: "Built For Hospitality", description: "Our solutions empower hotels, resorts, and travel brands to streamline bookings, personalize stays, and deliver memorable experiences.", buttonText: "See How It Works" },
  { name: "Smart Operations", title: "Data-Driven Guest Insights", description: "Centralized analytics and automated workflows help you make faster decisions, optimize services, and enhance satisfaction at every touchpoint.", buttonText: "View Use Cases" },
  { name: "Trusted Experiences", title: "Scalable Hospitality Platforms", description: "Our systems grow with your brand, supporting operational efficiency, compliance, and long-term guest satisfaction.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Delight", description: "We partner with hospitality leaders to drive measurable outcomes through intelligent, guest-centric technology.", buttonText: "Start the Conversation" },
]);

const oilGasEnergyCards: HeroIndustryCard[] = makeCards("oil-gas-energy", [
  { name: "Smarter Energy", title: "Optimized Operations, Reduced Risk", description: "From smart grids to predictive analytics, we create solutions that maximize efficiency, safety, and resource management.", buttonText: "Book a Free Consultation" },
  { name: "Digital Advantage", title: "Built For Energy Leaders", description: "Our platforms integrate data, monitor assets, and automate workflows, helping energy companies operate smarter and safer.", buttonText: "See How It Works" },
  { name: "Intelligent Insights", title: "Data-Driven Energy Decisions", description: "Real-time analytics, centralized monitoring, and predictive systems empower faster, informed, and more sustainable decisions.", buttonText: "View Use Cases" },
  { name: "Scale & Trust", title: "Reliable Energy Platforms", description: "Our solutions grow with your infrastructure, ensuring compliance, resilience, and long-term operational reliability.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Power Growth", description: "We help energy enterprises achieve measurable efficiency, safety, and sustainability outcomes with intelligent technology.", buttonText: "Start the Conversation" },
]);

const bankingFintechCards: HeroIndustryCard[] = makeCards("banking-fintech", [
  { name: "Smarter Finance", title: "Seamless Digital Banking", description: "From AI fraud detection to blockchain-powered systems, we deliver secure, transparent, and efficient financial solutions.", buttonText: "Book a Free Consultation" },
  { name: "Digital Advantage", title: "Built For Finance", description: "Modernize banking, payments, and client workflows with solutions that improve trust, compliance, and user experience.", buttonText: "See How It Works" },
  { name: "Intelligent Insights", title: "Data-Driven Decisions", description: "Centralized financial data, automation, and real-time analytics enable faster, more accurate, and compliant decision-making.", buttonText: "View Use Cases" },
  { name: "Trusted Platforms", title: "Scalable FinTech Solutions", description: "Our systems grow with your business, supporting expansion, regulatory compliance, and operational reliability.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Scale", description: "We empower financial institutions to deliver secure, efficient, and future-ready services that build customer trust.", buttonText: "Start the Conversation" },
]);

const healthcareCards: HeroIndustryCard[] = makeCards("healthcare", [
  { name: "Smarter Care", title: "Digital Healthcare Redefined", description: "From telemedicine to AI diagnostics, we build platforms that enhance patient care, streamline operations, and improve outcomes.", buttonText: "Book a Free Consultation" },
  { name: "Digital Advantage", title: "Built For Healthcare", description: "Our solutions help providers manage workflows, patient data, and services efficiently while ensuring compliance and security.", buttonText: "See How It Works" },
  { name: "Intelligent Insights", title: "Data-Driven Health Decisions", description: "Real-time analytics, automated processes, and connected platforms empower faster, safer, and patient-focused decisions.", buttonText: "View Use Cases" },
  { name: "Trusted Platforms", title: "Scalable Healthcare Solutions", description: "Our systems adapt as your practice grows, supporting operational reliability, security, and long-term patient satisfaction.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Heal", description: "We partner with healthcare leaders to deliver measurable improvements in care, efficiency, and patient engagement.", buttonText: "Start the Conversation" },
]);

const edtechCards: HeroIndustryCard[] = makeCards("edtech", [
  { name: "Smarter Learning", title: "Digital Classrooms That Engage", description: "From AI tutors to interactive platforms, we create learning experiences that inspire students and empower educators.", buttonText: "Book a Free Consultation" },
  { name: "Digital Advantage", title: "Built For Education", description: "Our solutions streamline administration, personalize learning, and connect classrooms across borders for meaningful engagement.", buttonText: "See How It Works" },
  { name: "Intelligent Insights", title: "Data-Driven Education", description: "Analytics and automated workflows help educators make informed decisions and improve learning outcomes efficiently.", buttonText: "View Use Cases" },
  { name: "Trusted Platforms", title: "Scalable EdTech Solutions", description: "Our systems grow with your institution, supporting accessibility, compliance, and long-term educational impact.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Inspire", description: "We help education leaders deliver measurable improvements in learning, engagement, and operational efficiency.", buttonText: "Start the Conversation" },
]);

const startupsCards: HeroIndustryCard[] = makeCards("startups", [
  { name: "Smarter Launches", title: "Digital Solutions for Startups", description: "From MVPs to scalable platforms, we turn bold ideas into impactful products that capture markets quickly.", buttonText: "Book a Free Consultation" },
  { name: "Digital Advantage", title: "Built For Visionaries", description: "We empower startups with agile platforms, seamless workflows, and tools to iterate, scale, and succeed.", buttonText: "See How It Works" },
  { name: "Intelligent Growth", title: "Data-Driven Startup Decisions", description: "Real-time insights, automated processes, and centralized data enable faster pivots and smarter business decisions.", buttonText: "View Use Cases" },
  { name: "Trusted Platforms", title: "Scalable Startup Ecosystems", description: "Our solutions grow with your business, ensuring reliability, flexibility, and investor confidence.", buttonText: "Talk to Experts" },
  { name: "Business Impact", title: "Results That Scale", description: "We partner with startups to deliver measurable growth, efficient operations, and long-term market success.", buttonText: "Start the Conversation" },
]);

export const heroCardsByIndustry: Record<string, HeroIndustryCard[]> = {
  "real-estate": realEstateCards,
  "travel-hospitality": travelHospitalityCards,
  "oil-gas-energy": oilGasEnergyCards,
  "banking-fintech": bankingFintechCards,
  healthcare: healthcareCards,
  edtech: edtechCards,
  startups: startupsCards,
};

export function getHeroCardsForIndustry(industryId: string): HeroIndustryCard[] {
  return heroCardsByIndustry[industryId] ?? heroCardsByIndustry["real-estate"] ?? realEstateCards;
}

/** @deprecated Use getHeroCardsForIndustry(industryId) for per-industry cards */
export const heroIndustriesCards: HeroIndustryCard[] = realEstateCards;
