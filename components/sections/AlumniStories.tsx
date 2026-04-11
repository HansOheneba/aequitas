"use client";

import { useState, useEffect, useCallback } from "react";

const VIDEOS = [
  { id: "vcWlYdE7uZ0", label: "Career Readiness Session" },
  { id: "vqzPKwXq4_4", label: "Leadership & Growth" },
  { id: "qi57nLaX8y0", label: "Alumni Perspectives" },
  { id: "t78MRksxi44", label: "Programme Highlights" },
];

const TESTIMONIALS = [
  {
    index: "01",
    quote:
      "The Aequitas Experience has led to the shifting of my perspective with regards to my relationship with others, especially around communication and understanding that the burden of communication lies with the person speaking.",
    name: "Elizabeth Aggrey",
    role: "Cohort 7 · Rakes Company Limited",
    initials: "EA",
  },
  {
    index: "02",
    quote:
      "It has really helped me to know when to talk, how to talk. I must say my managers really enjoy conversing with me because I really learnt how to interact during my training with Aequitas. I was very very quiet and shy before the experience.",
    name: "Charity Odai",
    role: "Cohort 6 · Fidelity Bank",
    initials: "CO",
  },
  {
    index: "03",
    quote:
      "I have become proactive and now I also critically analyze every step I take, taking into consideration my strengths and weaknesses.",
    name: "Patience Kuranchie",
    role: "Cohort 6 · Star Oil Company Limited",
    initials: "PK",
  },
  {
    index: "04",
    quote:
      "The Aequitas Experience has helped me identify who I am, what I seek to achieve and how to achieve it. This has upgraded my thinking, my relationship with people and has largely resulted in positive remarks wherever I have been since: work, home and other places.",
    name: "Desmond Ohusegun Kolawole",
    role: "Cohort 6 · Shieldbest Tech",
    initials: "DK",
  },
];

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
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d={dir === "right" ? "M5 2l5 5-5 5" : "M9 2L4 7l5 5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function AlumniStories() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  const go = useCallback(
    (idx: number) => {
      if (fading || idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 260);
    },
    [fading, active],
  );

  const prev = () =>
    go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => go((active + 1) % TESTIMONIALS.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideoId(null);
      if (!openVideoId && e.key === "ArrowRight") next();
      if (!openVideoId && e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const t = TESTIMONIALS[active];

  return (
    <>
      {/* ── Video lightbox ───────────────────────────────────────────────── */}
      {openVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Aequitas Foundation video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={() => setOpenVideoId(null)}
        >
          <div
            className="relative w-full max-w-5xl px-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenVideoId(null)}
              aria-label="Close video"
              className="absolute -top-12 right-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <CloseIcon />
            </button>
            <div className="relative w-full aspect-video overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <iframe
                src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Aequitas Foundation Video"
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
        className="overflow-hidden"
        style={{ background: "#0c0f18" }}
      >
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex items-end justify-between px-8 md:px-16 lg:px-24 pt-20 pb-12">
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{
                color: "var(--color-blue)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Voices of Aequitas
            </p>
            <h2
              className="font-extrabold leading-[0.95] tracking-tight text-white"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              What Our
              <br />
              <span style={{ color: "var(--color-blue)" }}>Alumni Say</span>
            </h2>
          </div>
          {/* Ghost index */}
          <span
            aria-hidden="true"
            className="font-bold leading-none select-none tabular-nums"
            style={{
              fontSize: "clamp(5rem, 12vw, 10rem)",
              color: "rgba(255,255,255,0.04)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            {t.index}
          </span>
        </div>

        {/* ── Testimonial block ────────────────────────────────────────── */}
        <div
          className={`px-8 md:px-16 lg:px-24 pb-14 transition-all duration-260 ease-out ${
            fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Opening quote glyph */}
          <span
            aria-hidden="true"
            className="block leading-none select-none -mb-4"
            style={{
              fontSize: "clamp(72px, 10vw, 120px)",
              color: "rgba(55,197,243,0.12)",
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="font-light text-white/80 max-w-4xl"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", lineHeight: 1.7 }}
          >
            {t.quote}
          </blockquote>

          {/* Attribution */}
          <div className="mt-8 flex items-center gap-5">
            <div
              className="flex items-center justify-center font-bold shrink-0"
              style={{
                width: 48,
                height: 48,
                border: "1.5px solid var(--color-blue)",
                color: "var(--color-blue)",
                fontFamily: "'Courier New', monospace",
                fontSize: 13,
                letterSpacing: "0.05em",
              }}
            >
              {t.initials}
            </div>
            <div>
              <p
                className="text-white font-semibold text-[15px]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {t.name}
              </p>
              <p
                className="text-[12px] mt-0.5"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.08em",
                }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* ── Controls ─────────────────────────────────────────────────── */}
        <div
          className="px-8 md:px-16 lg:px-24 py-8 flex items-center gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Arrows */}
          <div className="flex gap-2">
            {[
              { fn: prev, dir: "left" as const, label: "Previous testimonial" },
              { fn: next, dir: "right" as const, label: "Next testimonial" },
            ].map(({ fn, dir, label }) => (
              <button
                key={dir}
                onClick={fn}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <ChevronIcon dir={dir} />
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="h-2 border-none cursor-pointer p-0 transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  background:
                    i === active
                      ? "var(--color-blue)"
                      : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <span
            className="ml-auto text-[11px] tabular-nums"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Video filmstrip ───────────────────────────────────────────── */}
        <div
          className="px-8 md:px-16 lg:px-24 pb-20 mt-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2.5rem",
          }}
        >
          <p
            className="text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            From our sessions
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {VIDEOS.map((v) => (
              <button
                key={v.id + v.label}
                onClick={() => setOpenVideoId(v.id)}
                aria-label={`Watch: ${v.label}`}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "rgba(7,9,15,0.4)" }}
                />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(255,255,255,0.12)",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M4 2l9 5-9 5V2z"
                        fill="white"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>
                </div>
                {/* Caption bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,9,15,0.85), transparent)",
                  }}
                >
                  <p
                    className="text-white text-[11px] font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {v.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
