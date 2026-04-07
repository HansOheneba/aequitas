import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gallery | Aequitas Foundation",
  description: "Moments that define our mission — stories in pictures.",
};

const categories = ["All", "Programs", "Events", "Community", "Team"];

const placeholderImages = [
  {
    id: 1,
    label: "Scholar Graduation 2024",
    category: "Programs",
    aspect: "aspect-square",
  },
  {
    id: 2,
    label: "Community Outreach Day",
    category: "Community",
    aspect: "aspect-video",
  },
  {
    id: 3,
    label: "Incubator Demo Day",
    category: "Programs",
    aspect: "aspect-square",
  },
  {
    id: 4,
    label: "Women Empowerment Summit",
    category: "Events",
    aspect: "aspect-square",
  },
  {
    id: 5,
    label: "Annual Gala 2024",
    category: "Events",
    aspect: "aspect-video",
  },
  {
    id: 6,
    label: "Team Building Retreat",
    category: "Team",
    aspect: "aspect-square",
  },
  {
    id: 7,
    label: "Next Gen Leaders Camp",
    category: "Programs",
    aspect: "aspect-square",
  },
  {
    id: 8,
    label: "Faith & Wellness Workshop",
    category: "Community",
    aspect: "aspect-square",
  },
  {
    id: 9,
    label: "Partner Signing Ceremony",
    category: "Events",
    aspect: "aspect-video",
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#2596be] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Gallery
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
            Moments That Define Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A visual journey through the lives we&apos;ve touched, the
            communities we&apos;ve served, and the milestones we&apos;ve
            celebrated together.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                cat === "All"
                  ? "bg-[#2596be] text-white border-[#2596be]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2596be] hover:text-[#2596be]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholderImages.map((img) => (
            <div
              key={img.id}
              className={`${img.aspect} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              {/* Gradient placeholder — replace with next/image when real photos are ready */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#2596be]/20 via-navy/30 to-navy"
                style={{
                  background: `linear-gradient(${135 + img.id * 20}deg, #2596be${Math.floor(50 + img.id * 15).toString(16)} 0%, #0a1a3a 100%)`,
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-4">
                  {img.label}
                </p>
              </div>
              {/* Category badge */}
              <span className="absolute top-4 left-4 bg-[#2596be] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {img.category}
              </span>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-[#2596be] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#1e80a8] transition-colors duration-200">
            Load More Photos
          </button>
        </div>
      </Container>
    </main>
  );
}
