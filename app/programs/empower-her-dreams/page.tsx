import type { Metadata } from "next";
import EmpowerHerDreamsPage from "./EmpowerHerDreamsPage";

export const metadata: Metadata = {
  title: "Empower Her Dreams | Aequitas Foundation",
  description:
    "A 16-week employability training and internship programme for female university graduates in Ghana. In partnership with The Akua Kuenyehia Foundation.",
};

export default function Page() {
  return <EmpowerHerDreamsPage />;
}
