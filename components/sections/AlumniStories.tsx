"use client";

import { useState, useEffect, useCallback } from "react";

const VIDEOS = [
  {
    id: "vcWlYdE7uZ0",
    index: "01",
    name: "Kwame Asante",
    role: "Scholar · Class of 2021",
    quote:
      "Aequitas didn't just invest in my education — it invested in my identity.",
  },
  {
    id: "vqzPKwXq4_4",
    index: "02",
    name: "Abena Mensah",
    role: "Entrepreneur · Incubator Graduate",
    quote:
      "I came with an idea and left with a business, a team, and a calling.",
  },
  {
    id: "qi57nLaX8y0",
    index: "03",
    name: "David Osei",
    role: "Next Gen Leaders · Class of 2020",
    quote:
      "They saw potential in me three years before I could see it in myself.",
  },
  {
    id: "vcWlYdE7uZ0",
    index: "04",
    name: "Grace Tetteh",
    role: "Women Empowerment Graduate",
    quote:
      "This programme gave me the language to describe — and claim — my own power.",
  },
];

/* ── Icons ───────────────────────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="36" fill="white" fillOpacity="0.12" />
      <circle
        cx="36"
        cy="36"
        r="35"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <path d="M29 24l22 12-22 12V24z" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d={dir === "right" ? "M6.5 4l5 5-5 5" : "M11.5 4l-5 5 5 5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function AlumniStories() {
  const [active, setActive] = useState(0);
  const [modalId, setModalId] = useState<string | null>(null);
  const [fading, setFading] = useState(false);

  const go = useCallback(
    (idx: number) => {
      if (fading || idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 280);
    },
    [fading, active],
  );

  const prev = () => go((active - 1 + VIDEOS.length) % VIDEOS.length);
  const next = () => go((active + 1) % VIDEOS.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalId(null);
      if (!modalId && e.key === "ArrowRight") next();
      if (!modalId && e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const current = VIDEOS[active];
  const thumb = (id: string) =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <>
      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {modalId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Alumni Story Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={() => setModalId(null)}
        >
          <div
            className="relative w-full max-w-5xl px-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalId(null)}
              aria-label="Close video"
              className="absolute -top-12 right-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <CloseIcon />
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <iframe
                src={`https://www.youtube.com/embed/${modalId}?autoplay=1&rel=0&modestbranding=1`}
                title="Alumni Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Section ──────────────────────────────────────────────────────── */}
      <section
        id="alumni-stories"
        className="bg-[#0c0f18] text-white overflow-hidden"
      >
        {/* Header row */}
        <div className="flex items-end justify-between px-8 md:px-16 lg:px-24 pt-20 pb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-3">
              Voices of Aequitas
            </p>
            <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight">
              Alumni
              <br />
              <span className="text-blue">Stories</span>
            </h2>
          </div>
          {/* Large ghost counter */}
          <span
            className="text-[clamp(5rem,12vw,10rem)] font-bold leading-none select-none tabular-nums"
            style={{ color: "rgba(255,255,255,0.04)" }}
            aria-hidden="true"
          >
            {current.index}
          </span>
        </div>

        {/* ── Split: editorial copy + thumbnail ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
          {/* Left — copy */}
          <div
            className={`px-8 md:px-16 lg:px-24 pb-16 pt-2 flex flex-col justify-between min-h-90 transition-all duration-280 ease-out ${
              fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <div>
              {/* Decorative quote glyph */}
              <span
                className="block text-[100px] leading-none select-none -mb-6"
                style={{ color: "rgba(0,180,216,0.15)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="text-[clamp(1.1rem,2vw,1.5rem)] font-light leading-[1.6] text-white/80 max-w-110 mb-10">
                {current.quote}
              </blockquote>
            </div>
            <div>
              <div className="w-8 h-px bg-blue mb-5" />
              <p className="text-white font-semibold text-base mb-1">
                {current.name}
              </p>
              <p className="text-white/40 text-[13px] tracking-wide mb-10">
                {current.role}
              </p>
              <button
                onClick={() => setModalId(current.id)}
                className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-[#00b4d8] border-b border-[#00b4d8]/30 pb-1.5 hover:border-[#00b4d8] transition-all duration-200"
              >
                Watch Story
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right — thumbnail */}
          <button
            onClick={() => setModalId(current.id)}
            aria-label={`Watch ${current.name}'s story`}
            className={`relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b4d8] transition-opacity duration-280 min-h-90 lg:min-h-0 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Thumbnail image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-in-out group-hover:scale-[1.04]"
              style={{ backgroundImage: `url('${thumb(current.id)}')` }}
            />
            {/* Left vignette to blend into the dark left panel */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0c0f18]/70 via-[#0c0f18]/10 to-transparent" />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0c0f18]/50 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transition-all duration-300 ease-out scale-90 opacity-70 group-hover:scale-100 group-hover:opacity-100">
                <PlayIcon />
              </div>
            </div>
          </button>
        </div>

        {/* ── Filmstrip + controls ──────────────────────────────────────── */}
        <div className="px-8 md:px-16 lg:px-24 py-10 border-t border-white/6">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous story"
              className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ChevronIcon dir="left" />
            </button>

            {/* Thumbnails grid */}
            <div className="flex-1 grid grid-cols-4 gap-2.5">
              {VIDEOS.map((v, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to ${v.name}'s story`}
                  className={`relative aspect-video rounded-sm overflow-hidden group transition-all duration-300 ${
                    i === active
                      ? "ring-2 ring-[#00b4d8] ring-offset-2 ring-offset-[#0c0f18] opacity-100"
                      : "opacity-30 hover:opacity-60"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${thumb(v.id)}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-1.5 left-2 text-[9px] font-semibold tracking-widest text-white/70">
                    {v.index}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next story"
              className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ChevronIcon dir="right" />
            </button>
          </div>

          {/* Progress track */}
          <div className="mt-6 h-px bg-white/8 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-[#00b4d8] transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${((active + 1) / VIDEOS.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
