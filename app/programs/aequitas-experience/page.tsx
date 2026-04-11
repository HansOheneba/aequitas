import type { Metadata } from "next";
import AequitasExperiencePage from "./AequitasExperiencePage";

export const metadata: Metadata = {
  title: "The Aequitas Experience | Aequitas Foundation",
  description:
    "A 12-week immersive programme equipping young Ghanaians with the resilience, skills, and community they need to thrive.",
};

export default function Page() {
  return <AequitasExperiencePage />;
}
