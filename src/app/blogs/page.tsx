import { Fragment } from "react";
import {BlogHero,BlogFeatures,BlogCategories} from "@/components/features/blog";
export default function BlogPage() {
  return (
    <Fragment>
      <BlogHero />
      <BlogFeatures />
      <BlogCategories />
    </Fragment>
  );
}

