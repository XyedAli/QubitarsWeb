import { redirect } from "next/navigation";
import { industrySlugs } from "@/data/industries/industrySlugs";
import { getStaticPageMetadata } from "@/lib/metadata";

export const metadata = getStaticPageMetadata("industries", {
  canonicalPath: "/industries",
});

export default function IndustriesPage() {
  redirect(`/industries/${industrySlugs[0].id}`);
}
