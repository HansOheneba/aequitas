"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useReveal(threshold = 0.08) {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, [threshold]);
  return { elRef, visible };
}

const DRIVES = [
  {
    season: "Christmas",
    month: "December",
    headline: "Gifts for Christmas",
    body: "Every December, we fan out across under-resourced communities to ensure children wake up on Christmas morning to something that matters. Gifts, meals, school supplies — and the reminder that they are seen.",
    image: "/gallery/seasons-drive/DSC_6042.webp",
    accent: "var(--color-blue)",
  },
  {
    season: "Easter",
    month: "March / April",
    headline: "Easter Hope Drive",
    body: "Our Easter drive focuses on essentials — educational materials, hygiene kits, and community meals — delivered to families before the school term resumes. Practical support, delivered with dignity.",
    image: "/gallery/seasons-drive/DSC_6089.webp",
    accent: "var(--color-gold)",
  },
];

const IMPACT = [
  { value: "500+", label: "Children Reached", sub: "across Accra and beyond" },
  { value: "2×", label: "Per Year", sub: "Christmas and Easter" },
  { value: "100%", label: "Community-Funded", sub: "by donors like you" },
  { value: "4+", label: "Years Running", sub: "and growing every season" },
];

const GALLERY_IMAGES = [
  "/gallery/seasons-drive/DSC_6033.webp",
  "/gallery/seasons-drive/DSC_6065.webp",
  "/gallery/seasons-drive/DSC_6067.webp",
  "/gallery/seasons-drive/DSC_6133.webp",
  "/gallery/seasons-drive/DSC_6155.webp",
  "/gallery/seasons-drive/DSC_6230.webp",
];

export default function SeasonalDrivePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const { elRef: impactRef, visible: impactVisible } = useReveal();
  const { elRef: drivesRef, visible: drivesVisible } = useReveal(0.05);
  const { elRef: galleryRef, visible: galleryVisible } = useReveal(0.05);
  const { elRef: ctaRef, visible: ctaVisible } = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end" }}
      >
        {/* Full-bleed hero image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.28-PM-1.webp"
            alt="Seasonal Drive — children receiving gifts"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(7,9,15,0.96) 0%, rgba(7,9,15,0.6) 45%, rgba(7,9,15,0.25) 100%)",
            }}
          />
        </div>

        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(80px, 16vw, 240px)",
            color: "rgba(55,197,243,0.04)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
          }}
        >
          DRIVE
        </div>

        {/* Hero content */}
        <div
          className="relative z-10 px-8 md:px-16 lg:px-24 w-full"
          style={{ paddingBottom: "clamp(60px, 9vw, 100px)" }}
        >
          <div
            className="transition-all duration-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p
              className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-5"
              style={{ color: "var(--color-blue)" }}
            >
              Seasonal Drive
            </p>
            <h1
              className="font-extrabold text-white leading-none"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontFamily: "var(--font-montserrat)",
                letterSpacing: "-0.02em",
              }}
            >
              Showing Up
              <br />
              <span style={{ color: "var(--color-blue)" }}>Every Season</span>
            </h1>
            <p
              className="mt-7 max-w-lg text-[15px] leading-[1.85]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Twice a year, at Christmas and Easter, Aequitas Foundation shows
              up in communities that need it most — not with charity, but with
              dignity and care that reminds children: you matter.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <Link
                href="/donate"
                className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{
                  background: "var(--color-blue)",
                  color: "var(--color-ink)",
                }}
              >
                Support a Drive
              </Link>
              <Link
                href="/gallery"
                className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-200 text-white"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact strip ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0d1017" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,197,243,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(55,197,243,0.022) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          ref={impactRef}
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {IMPACT.map((s, i) => (
            <div
              key={s.label}
              className="px-8 py-10 transition-all duration-500"
              style={{
                background: "#0d1017",
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div
                className="font-extrabold leading-none mb-1"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#fff",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-1"
                style={{ color: "var(--color-blue)" }}
              >
                {s.label}
              </div>
              <div
                className="text-[12px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About the drives ─────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(72px, 10vw, 112px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
        }}
      >
        <div ref={drivesRef}>
          {/* Section header */}
          <div className="mb-14">
            <p
              className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              The Events
            </p>
            <h2
              className="font-extrabold text-white leading-[1.05]"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Two Drives.{" "}
              <span style={{ color: "var(--color-blue)" }}>One Mission.</span>
            </h2>
          </div>

          {/* Drive cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {DRIVES.map((drive, i) => (
              <div
                key={drive.season}
                className="relative overflow-hidden flex flex-col transition-all duration-600"
                style={{
                  background: "#0d1017",
                  border: "1px solid rgba(255,255,255,0.06)",
                  opacity: drivesVisible ? 1 : 0,
                  transform: drivesVisible
                    ? "translateY(0)"
                    : "translateY(22px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 280 }}
                >
                  <Image
                    src={drive.image}
                    alt={drive.headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #0d1017 0%, rgba(13,16,23,0.2) 60%, transparent 100%)",
                    }}
                  />
                  {/* Season badge */}
                  <div
                    className="absolute top-5 left-5 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{
                      background: drive.accent,
                      color: "var(--color-ink)",
                    }}
                  >
                    {drive.month}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-3 flex-1">
                  <p
                    className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")} — {drive.season} Drive
                  </p>
                  <h3
                    className="font-extrabold text-white"
                    style={{
                      fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {drive.headline}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.85]"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {drive.body}
                  </p>
                  <div
                    className="mt-2 w-10 transition-all duration-300"
                    style={{ height: 2, background: drive.accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we show up ───────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(60px, 8vw, 96px)",
          paddingBottom: "clamp(60px, 8vw, 96px)",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: stacked images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden" style={{ height: 240 }}>
              <Image
                src="/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.29-PM-1.webp"
                alt="Seasonal drive distribution"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div
              className="relative overflow-hidden mt-8"
              style={{ height: 240 }}
            >
              <Image
                src="/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.30-PM-2.webp"
                alt="Community gathering"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div
              className="relative overflow-hidden -mt-4 col-span-2"
              style={{ height: 180 }}
            >
              <Image
                src="/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.31-PM-1.webp"
                alt="Gifts distribution event"
                fill
                sizes="50vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(7,9,15,0.15)" }}
              />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              Our Approach
            </p>
            <h2
              className="font-extrabold text-white leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              More Than{" "}
              <span style={{ color: "var(--color-blue)" }}>Giving</span>
              <br />— It&apos;s Belonging
            </h2>
            <div
              className="w-10 mb-8"
              style={{ height: 3, background: "var(--color-blue)" }}
            />
            <div className="flex flex-col gap-6">
              {[
                {
                  n: "01",
                  title: "Community-Centred",
                  body: "We work with local leaders and partner organisations to identify families in genuine need — not just numbers, but names and stories.",
                },
                {
                  n: "02",
                  title: "Dignity First",
                  body: "Every item distributed is selected with care. We ensure that receiving feels celebratory, not symptomatic of lack.",
                },
                {
                  n: "03",
                  title: "Education-Focused",
                  body: "School supplies are a core component of every drive, because we know that what a child receives today can change what they can achieve tomorrow.",
                },
              ].map((pt) => (
                <div key={pt.n} className="flex gap-5">
                  <span
                    className="shrink-0 text-[10px] font-bold tracking-[0.2em] mt-1"
                    style={{
                      color: "var(--color-blue)",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {pt.n}
                  </span>
                  <div>
                    <h4
                      className="font-bold text-white text-[14px] mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {pt.title}
                    </h4>
                    <p
                      className="text-[13px] leading-[1.85]"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {pt.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(40px, 5vw, 60px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
          background: "#0d1017",
        }}
      >
        <div
          ref={galleryRef}
          className="grid grid-cols-3 md:grid-cols-6 gap-1 px-1"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative overflow-hidden group"
              style={{
                height: "clamp(120px, 14vw, 200px)",
                opacity: galleryVisible ? 1 : 0,
                transform: galleryVisible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 600ms ease ${i * 60}ms, transform 600ms ease ${i * 60}ms`,
              }}
            >
              <Image
                src={src}
                alt="Drive moment"
                fill
                sizes="(max-width: 768px) 33vw, 17vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(55,197,243,0.15)" }}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-6 px-8">
          <Link
            href="/gallery"
            className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200"
            style={{
              color: "rgba(255,255,255,0.3)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: 3,
            }}
          >
            See Full Gallery →
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-8 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(80px, 11vw, 120px)",
          paddingBottom: "clamp(80px, 11vw, 120px)",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.32-PM.webp"
            alt="Seasonal drive background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(7,9,15,0.88)" }}
          />
        </div>

        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute left-0 bottom-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(90px, 17vw, 260px)",
            color: "rgba(55,197,243,0.03)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          JOIN
        </div>

        <div
          ref={ctaRef}
          className={`relative flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              Get Involved
            </p>
            <h2
              className="font-extrabold text-white leading-[1.05]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Be Part of the
              <br />
              <span style={{ color: "var(--color-blue)" }}>Next Drive</span>
            </h2>
            <p
              className="mt-5 text-[15px] leading-[1.85]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Whether you want to donate items, contribute funds, or volunteer
              your time on the day — there is a role for you. Every hand matters
              when the goal is making a child feel valued.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/donate"
              className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
              style={{
                background: "var(--color-blue)",
                color: "var(--color-ink)",
              }}
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
