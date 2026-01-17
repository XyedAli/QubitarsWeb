import { Fragment } from "react";
import ContactForm from "@/components/features/contact";
import { contactMetadata } from "@/lib/metadata";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
  <Fragment>
    <ContactForm />
  </Fragment>
  );
}

