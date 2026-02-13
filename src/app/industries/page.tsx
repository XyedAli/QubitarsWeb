import { redirect } from "next/navigation";
import { industrySlugs } from "@/data/industries/industrySlugs";

export const metadata = {
  title: "Industries | Qubitars Technologies",
  description: "Industry-focused solutions and digital transformation.",
};

export default function IndustriesPage() {
  redirect(`/industries/${industrySlugs[0].id}`);
}
