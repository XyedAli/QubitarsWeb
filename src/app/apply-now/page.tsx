import { Fragment } from "react";
import { ApplyNow } from "@/components/features/careers";
import { getStaticPageMetadata } from "@/lib/metadata";

export const metadata = getStaticPageMetadata("apply-now", { canonicalPath: "/apply-now" });

export default function ApplyNowPage() {
  return (
    <Fragment>
      <ApplyNow />
    </Fragment>
  );
}

