import { Fragment } from "react";
import { DeliverFlow } from "@/components/features/services/devops";
import { getServicePageMetadata } from "@/lib/metadata";

export const metadata = getServicePageMetadata("ai-development");

export default function AIDevelopmentPage() {
  return (
    <Fragment>
        <DeliverFlow />
    </Fragment>
  );
}

