"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    letter: "F",
    word: "Fairness",
    body: "Equal opportunity for every young person, regardless of background.",
  },
  {
    letter: "G",
    word: "Growth",
    body: "We believe in the limitless capacity of youth to develop and lead.",
  },
  {
    letter: "O",
    word: "Ownership",
    body: "We empower individuals to take charge of their own transformation.",
  },
  {
    letter: "E",
    word: "Excellence",
    body: "We hold ourselves and our scholars to the highest standard.",
  },
  {
    letter: "I",
    word: "Innovation",
    body: "We iterate, adapt, and find new ways to serve our communities.",
  },
  {
    letter: "C",
    word: "Collaboration",
    body: "Real change happens at the intersection of shared purpose.",
  },
];

const BOARD = [
  { name: "Prof. Alexander Dodoo", role: "Chairperson", initial: "AD" },
  { name: "Frimpomaa Ntiforo Agah", role: "Board Member", initial: "FN" },
  { name: "Abdul Rahman Issah Dowuona", role: "Board Member", initial: "AR" },
  { name: "Rev'd. Akua Ofori-Boateng", role: "Board Member", initial: "AO" },
];

/* ── Fade-in helper ───────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const hidden =
    from === "left" ? "opacity-0 -translate-x-6" : "opacity-0 translate-y-7";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function WhoWeArePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── HERO — dark, cinematic ─────────────────────────────────────── */}
      <section className="relative min-h-[88vh] bg-[#0a0e1a] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 lg:px-24 pt-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8]">
            Aequitas Foundation
          </p>
          <Link
            href="/"
            className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-200"
          >
            ← Back home
          </Link>
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 md:pb-28 w-full">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-4">
            Our Identity
          </p>
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black text-white leading-[0.9] tracking-tight mb-8">
            Who
            <br />
            We <span className="text-[#37c5f3]">Are</span>
          </h1>
          <p className="text-white/55 text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed max-w-[480px]">
            A faith-based non-profit founded in 2018, committed to helping
            Africa&apos;s youth find, pursue, and live their passion.
          </p>
        </div>

        <span
          className="absolute bottom-16 right-8 md:right-20 text-[clamp(6rem,14vw,12rem)] font-black leading-none select-none text-white/[0.03] tabular-nums"
          aria-hidden="true"
        >
          2018
        </span>
      </section>

      {/* ── WHO WE ARE — light cream ───────────────────────────────────── */}
      <section className="bg-[#f9f6f1] grid grid-cols-1 lg:grid-cols-2">
        {/* Left — pull quote with dark accent panel */}
        <div className="relative bg-[#0a0e1a] px-8 md:px-16 py-20 flex flex-col justify-center overflow-hidden">
          <span
            className="absolute top-8 left-8 text-[140px] leading-none select-none text-[#00b4d8]/[0.07]"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <FadeIn className="relative z-10">
            <p className="text-[clamp(1.2rem,2vw,1.6rem)] font-light leading-[1.7] text-white/70 max-w-[400px] mb-8">
              We believe suitable training within a safe and enabling
              environment gives every young person an equal opportunity to be
              instrumental in Africa&apos;s economic transformation.
            </p>
            <div className="w-8 h-px bg-[#37c5f3]" />
          </FadeIn>
        </div>

        {/* Right — paragraphs on cream */}
        <div className="px-8 md:px-16 py-20 flex flex-col justify-center">
          <FadeIn delay={80}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-6">
              Founded 2018
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600 mb-5 max-w-[500px]">
              We were established as a not-for-profit organisation that seeks to
              help the youth find and pursue their passion. Our operations are
              underpinned by the principle that equitable access to opportunity
              is not a privilege — it is a right.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600 max-w-[500px]">
              From our flagship Aequitas Experience to seasonal community
              drives, everything we do centres on creating safe spaces where
              potential becomes purpose.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION · VISION — white ──────────────────────────────────── */}
      <section className="bg-white grid grid-cols-1 md:grid-cols-2 border-t border-gray-100">
        {/* Mission */}
        <div className="group relative px-8 md:px-16 py-20 border-b md:border-b-0 md:border-r border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[#00b4d8]/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <FadeIn className="relative z-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-5">
              Our Mission
            </p>
            <h2 className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold text-[#0a1a3a] leading-[1.15] tracking-tight mb-5">
              Creating safe spaces
              <br />
              for youth to find
              <br />
              and pursue their passion
            </h2>
            <div className="w-6 h-px bg-[#00b4d8] mt-2" />
          </FadeIn>
          <span
            className="absolute bottom-6 right-8 text-[90px] font-black leading-none select-none text-gray-950/[0.03]"
            aria-hidden="true"
          >
            M
          </span>
        </div>

        {/* Vision */}
        <div className="group relative px-8 md:px-16 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#37c5f3]/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <FadeIn delay={120} className="relative z-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#37c5f3] mb-5">
              Our Vision
            </p>
            <h2 className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold text-[#0a1a3a] leading-[1.15] tracking-tight mb-5">
              A world where all youth
              <br />
              have the opportunity
              <br />
              to live their passion
            </h2>
            <div className="w-6 h-px bg-[#37c5f3] mt-2" />
          </FadeIn>
          <span
            className="absolute bottom-6 right-8 text-[90px] font-black leading-none select-none text-gray-950/[0.03]"
            aria-hidden="true"
          >
            V
          </span>
        </div>
      </section>

      {/* ── CORE VALUES — dark ────────────────────────────────────────── */}
      <section className="bg-[#0a0e1a] text-white">
        <div className="flex items-end justify-between px-8 md:px-16 lg:px-24 pt-20 pb-12 border-b border-white/[0.06]">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-3">
              What We Stand For
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-bold leading-none tracking-tight">
              Core <span className="text-[#37c5f3]">Values</span>
            </h2>
          </div>
          <span
            className="text-[clamp(4rem,8vw,8rem)] font-black leading-none select-none text-white/[0.03] pb-1"
            aria-hidden="true"
          >
            6
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <FadeIn
              key={v.word}
              delay={i * 70}
              className="group relative border-b border-r border-white/[0.06] px-8 py-10 overflow-hidden [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="block text-[3.5rem] font-black leading-none text-white/[0.06] group-hover:text-[#00b4d8]/20 transition-colors duration-300 mb-2">
                  {v.letter}
                </span>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#00b4d8] mb-2">
                  {v.word}
                </p>
                <p className="text-[14px] text-white/45 leading-relaxed">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── GOVERNANCE — light ────────────────────────────────────────── */}
      <section className="bg-[#f9f6f1] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        {/* Left — copy */}
        <div className="px-8 md:px-16 lg:px-24 py-20 border-b lg:border-b-0 lg:border-r border-gray-200">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-5">
              Leadership
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-bold text-[#0a1a3a] leading-[1.05] tracking-tight mb-8">
              Governance
              <br />
              Structure
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-[15px] leading-[1.9] text-gray-600 mb-5 max-w-[480px]">
              The foundation is governed by a 4-member board, chaired by
              Professor Alexander Dodoo and supported by dedicated leaders who
              bring strategic, financial, and pastoral oversight.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600 mb-5 max-w-[480px]">
              The board works with the management team to set strategic
              priorities in line with our vision and mission, ensuring financial
              integrity and organisational accountability.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600 max-w-[480px]">
              Our flagship initiative — the Aequitas Experience — is a 12-week
              internship and training programme that helps youth discover their
              strengths, explore the world of work, and develop entrepreneurial
              skills.
            </p>
          </FadeIn>
        </div>

        {/* Right — board cards */}
        <div className="px-8 md:px-16 py-20 flex flex-col justify-center gap-3">
          {BOARD.map((m, i) => (
            <FadeIn
              key={m.name}
              delay={i * 80}
              className="group flex items-center gap-5 bg-white px-5 py-4 border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/20 flex items-center justify-center text-[12px] font-bold text-[#00b4d8] tracking-wider">
                {m.initial}
              </div>
              <div>
                <p className="font-semibold text-[15px] text-[#0a1a3a] group-hover:text-[#00b4d8] transition-colors duration-200">
                  {m.name}
                </p>
                <p className="text-[11px] text-gray-400 tracking-wide mt-0.5">
                  {m.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA — dark accent ─────────────────────────────────── */}
      <section className="bg-[#0a0e1a] text-white px-8 md:px-16 lg:px-24 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-4">
            Be Part of the Story
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight max-w-[500px]">
            Ready to join us
            <br />
            in building Africa&apos;s
            <br />
            <span className="text-[#37c5f3]">next generation?</span>
          </h2>
        </FadeIn>
        <FadeIn
          delay={120}
          className="flex flex-col sm:flex-row gap-4 shrink-0"
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#0099b8] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 transition-colors duration-200"
          >
            Get Involved
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 border border-white/15 hover:border-white/30 text-white/50 hover:text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 transition-all duration-200"
          >
            View Events
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
