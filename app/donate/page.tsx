import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate | Aequitas Foundation",
  description:
    "Invest in the next generation. Your contribution fuels opportunity, growth, and transformation for Ghana's youth.",
};

export default function DonatePage() {
  return <DonateClient />;
}
