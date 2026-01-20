import { Fragment } from "react";
import {BlogHero,BlogFeatures,ThinkForward} from "@/components/features/blog";
import { blogsMetadata } from "@/lib/metadata";

export const metadata = blogsMetadata;

export default function BlogPage() {
  return (
    <Fragment>
      <BlogHero />
      <ThinkForward />
      <BlogFeatures />
    </Fragment>
  );
}

