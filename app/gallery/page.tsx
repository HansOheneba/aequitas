import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Aequitas Foundation",
  description: "Moments that define our mission — stories in pictures.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
