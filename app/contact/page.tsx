import type { Metadata } from "next";
import { ContactPageClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact — Atom",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
