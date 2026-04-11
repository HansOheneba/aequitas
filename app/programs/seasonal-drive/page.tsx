import type { Metadata } from "next";
import SeasonalDrivePage from "./SeasonalDrivePage";

export const metadata: Metadata = {
  title: "Seasonal Drive | Aequitas Foundation",
  description:
    "Twice a year, at Christmas and Easter, Aequitas Foundation brings essential resources and joy to children in under-resourced communities across Ghana.",
};

export default function Page() {
  return <SeasonalDrivePage />;
}
