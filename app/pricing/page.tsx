import type { Metadata } from "next";
import { PricingPage } from "./pricing-page-client";

export const metadata: Metadata = {
  title: "Pricing — Atom",
};

export default function PricingPageWrapper() {
  return <PricingPage />;
}
