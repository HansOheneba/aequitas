"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    num: "01",
    title: "Strategic Partnerships",
    body: "Forge strategic partnerships with government agencies, NGOs, educational institutions, and corporate entities to amplify our reach, impact and resources to drive meaningful change.",
  },
  {
    num: "02",
    title: "Technology for Good",
    body: "Harness the power of technology to streamline our programs, making them more efficient and effective — enabling us to scale our impact, monitor progress, and evaluate in real-time.",
  },
  {
    num: "03",
    title: "A Collaborative Alumni Network",
    body: "Our alumni network is a vibrant community of change-makers who have passed through our programs. We nurture this network to provide ongoing support, mentorship, and collaboration.",
  },
  {
    num: "04",
    title: "Health & Education Drives",
    body: "Collaborate with local healthcare providers to deliver periodic health outreaches and with schools and libraries to distribute books and promote literacy.",
  },
  {
    num: "05",
    title: "Empowerment through Knowledge",
    body: "Host webinars, workshops, and seminars on leadership, entrepreneurship, and community development to equip participants with the skills to drive positive change.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    label: "Founded",
    note: "Aequitas Foundation established in Accra, Ghana",
  },
  {
    year: "2020",
    label: "First Cohort",
    note: "The Aequitas Experience launches its inaugural programme",
  },
  {
    year: "2022",
    label: "5K Milestone",
    note: "5,000 youth touched across our community initiatives",
  },
  {
    year: "2024",
    label: "10 Cities",
    note: "Programmes now active across 10 cities in Ghana",
  },
  {
    year: "2030",
    label: "1M Target",
    note: "One million young people empowered across Africa",
  },
];

const STATS = [
  {
    value: "12,400+",
    label: "Youth Reached",
    note: "Through all our programmes",
  },
  { value: "10", label: "Active Cities", note: "Across Ghana and growing" },
  { value: "6+", label: "Partner Orgs", note: "NGOs, corporates & government" },
  {
    value: "1.2%",
    label: "Toward the Goal",
    note: "As at 2025 — the journey continues",
  },
];

/* ── Simple fade-in on scroll ─────────────────────────────────────────────── */
function Reveal({
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
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : from === "left"
            ? "translateX(-24px)"
            : "translateY(24px)",
        transition: `opacity 640ms ease ${delay}ms, transform 640ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function Goal2030Page() {
  const [tlStep, setTlStep] = useState(-1);
  const tlRef = useRef<HTMLUListElement>(null);

  /* Progressive timeline reveal */
  useEffect(() => {
    if (!tlRef.current) return;
    const items = Array.from(tlRef.current.querySelectorAll("[data-tl]"));
    const observers = items.map((el, i) => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setTlStep((prev) => Math.max(prev, i));
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#07090f", paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Faint grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,197,243,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(55,197,243,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        {/* Ghost number behind copy */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-black leading-none tabular-nums"
          style={{
            fontSize: "clamp(160px, 30vw, 400px)",
            color: "rgba(55,197,243,0.028)",
            letterSpacing: "-0.04em",
          }}
          aria-hidden="true"
        >
          2030
        </span>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          {/* Eyebrow */}
          <Reveal>
            <p
              className="mb-8"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
              }}
            >
              The Commitment
            </p>
          </Reveal>

          {/* Main headline */}
          <Reveal delay={80}>
            <h1
              className="font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(72px, 14vw, 172px)" }}
            >
              <span style={{ color: "#37c5f3" }}>1M</span>
              <span style={{ color: "rgba(255,255,255,0.92)" }}> YOUTH</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.92)" }}>BY 20</span>
              <span style={{ color: "#37c5f3" }}>30</span>
            </h1>
          </Reveal>

          {/* Sub-copy */}
          <Reveal delay={160}>
            <p
              className="mt-10 max-w-2xl"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Africa&apos;s most ambitious youth empowerment commitment —
              reaching one million young people across the continent by 2030
              through five strategic pillars.
            </p>
          </Reveal>

          {/* CTA row */}
          <Reveal delay={240}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center transition-all duration-200"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "#37c5f3",
                  color: "#07090f",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#1aadd4")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#37c5f3")
                }
              >
                Get Involved
              </Link>
              <Link
                href="/#about"
                className="inline-flex items-center justify-center transition-all duration-200"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(55,197,243,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#37c5f3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ONE BIG NUMBER — white ────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100">
          {/* Left — large stat */}
          <div className="px-8 md:px-16 lg:px-24 py-20 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
            <Reveal>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                  marginBottom: 24,
                }}
              >
                Why 1 Million
              </p>
              <p
                className="font-black leading-none tracking-tight"
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  color: "#0a0e1a",
                }}
              >
                1,000,
                <br />
                000
              </p>
              <p
                className="mt-6"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                }}
              >
                Young People by 2030
              </p>
            </Reveal>
          </div>

          {/* Right — copy */}
          <div className="px-8 md:px-16 lg:px-20 py-20 flex flex-col justify-center">
            <Reveal delay={100}>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                  lineHeight: 1.85,
                  color: "#4b5563",
                  marginBottom: 24,
                }}
              >
                Africa has more than 840 million young people. Aequitas
                Foundation believes that every single one of them deserves a
                fair chance at life.
              </p>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                  lineHeight: 1.85,
                  color: "#4b5563",
                  marginBottom: 32,
                }}
              >
                One million is not a ceiling — it is a starting point. Through
                five strategic pillars, we are building the infrastructure to
                reach, equip, and empower the next generation of African leaders
                at scale.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  paddingTop: 24,
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                {["7 Years", "5 Pillars", "1 Goal"].map((tag) => (
                  <div key={tag}>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0a0e1a",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {tag.split(" ")[0]}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9ca3af",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: 2,
                      }}
                    >
                      {tag.split(" ")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 STRATEGIC PILLARS — light blue tint ────────────────────── */}
      <section style={{ background: "#f0f8fd" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-4">
          <Reveal>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 12,
              }}
            >
              How We Get There
            </p>
            <h2
              className="font-bold tracking-tight leading-none"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)", color: "#0a0e1a" }}
            >
              5 Strategic Pillars
            </h2>
          </Reveal>
        </div>

        {/* 3-col top row + 2-col bottom row */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pb-20">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 bg-[#cce8f5]">
            {PILLARS.slice(0, 3).map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div
                  className="flex flex-col h-full group transition-all duration-200"
                  style={{
                    background: "white",
                    padding: "40px 32px 40px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "#fafeff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "white")
                  }
                >
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "#37c5f3",
                      marginBottom: 20,
                    }}
                  >
                    {p.num}
                  </p>
                  <p
                    className="font-bold leading-tight"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                      color: "#0a0e1a",
                      marginBottom: 14,
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "#6b7280",
                    }}
                  >
                    {p.body}
                  </p>
                  {/* bottom accent bar on hover */}
                  <div
                    className="mt-auto pt-8"
                    style={{ borderTop: "1px solid transparent" }}
                  >
                    <div
                      className="h-px w-0 group-hover:w-10 transition-all duration-300"
                      style={{ background: "#37c5f3" }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-px bg-[#cce8f5]">
            {PILLARS.slice(3).map((p, i) => (
              <Reveal key={p.num} delay={i * 80 + 240}>
                <div
                  className="flex flex-col h-full group transition-all duration-200"
                  style={{
                    background: "white",
                    padding: "40px 32px 40px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "#fafeff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "white")
                  }
                >
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "#37c5f3",
                      marginBottom: 20,
                    }}
                  >
                    {p.num}
                  </p>
                  <p
                    className="font-bold leading-tight"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                      color: "#0a0e1a",
                      marginBottom: 14,
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "#6b7280",
                    }}
                  >
                    {p.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <div
                      className="h-px w-0 group-hover:w-10 transition-all duration-300"
                      style={{ background: "#37c5f3" }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESS — dark ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#07090f" }}
      >
        {/* Stats */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-16 border-b border-white/6">
          <Reveal>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 12,
              }}
            >
              Where We Stand
            </p>
            <h2
              className="font-bold tracking-tight leading-none text-white"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              Progress to Date
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 mt-14">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="px-0 py-8 md:px-8 border-b lg:border-b-0 border-l border-white/6 first:border-l-0 nth-2:md:border-l lg:nth-2:border-l nth-3:border-l-0 lg:nth-3:border-l"
              >
                <p
                  className="font-black tracking-tight leading-none tabular-nums"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: i === 0 ? "#37c5f3" : "white",
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="font-semibold mt-3"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}
                >
                  {s.label}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}
                >
                  {s.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-12">
          <Reveal>
            <div className="flex items-center justify-between mb-3">
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.08em",
                }}
              >
                12,400 youth reached
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.08em",
                }}
              >
                Goal: 1,000,000
              </p>
            </div>
            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div
                className="h-px transition-all duration-1500 ease-out"
                style={{ width: "1.24%", background: "#37c5f3" }}
              />
            </div>
            <p
              className="mt-3 text-right"
              style={{ fontSize: 11, color: "#37c5f3", letterSpacing: "0.1em" }}
            >
              1.24% complete
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TIMELINE — white ──────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-24">
          <Reveal>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 12,
              }}
            >
              The Journey
            </p>
            <h2
              className="font-bold tracking-tight leading-none"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                color: "#0a0e1a",
              }}
            >
              Milestones
            </h2>
          </Reveal>

          {/* Horizontal timeline */}
          <div className="mt-16 relative">
            {/* Rail */}
            <div
              className="absolute top-6.5 left-0 right-0 h-px hidden md:block"
              style={{ background: "#e5e7eb" }}
            />
            {/* Animated fill */}
            <div
              className="absolute top-6.5 left-0 h-px hidden md:block transition-all duration-1000 ease-out"
              style={{
                background: "#37c5f3",
                width:
                  tlStep >= 0
                    ? `${((tlStep + 1) / TIMELINE.length) * 100}%`
                    : "0%",
              }}
            />

            <ul
              ref={tlRef}
              className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4"
            >
              {TIMELINE.map((item, i) => (
                <li
                  key={item.year}
                  data-tl
                  className="flex flex-col md:items-center md:text-center"
                  style={{
                    opacity: i <= tlStep ? 1 : 0.2,
                    transition: `opacity 600ms ease ${i * 100}ms`,
                  }}
                >
                  {/* Dot */}
                  <div
                    className="w-3.25 h-3.25 shrink-0 mb-5 border-2 transition-all duration-500"
                    style={{
                      borderColor: i <= tlStep ? "#37c5f3" : "#d1d5db",
                      background: i <= tlStep ? "#37c5f3" : "white",
                    }}
                  />
                  <p
                    className="font-black tracking-tight tabular-nums"
                    style={{
                      fontSize: 20,
                      color: i <= tlStep ? "#0a0e1a" : "#9ca3af",
                    }}
                  >
                    {item.year}
                  </p>
                  <p
                    className="font-semibold mt-1"
                    style={{
                      fontSize: 13,
                      color: i <= tlStep ? "#37c5f3" : "#9ca3af",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="mt-2"
                    style={{ fontSize: 12, lineHeight: 1.65, color: "#6b7280" }}
                  >
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA — light blue tint ─────────────────────────────────────── */}
      <section style={{ background: "#f0f8fd" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
            <Reveal>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                  marginBottom: 12,
                }}
              >
                Be Part of It
              </p>
              <h2
                className="font-bold tracking-tight leading-[1.05]"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
                  color: "#0a0e1a",
                }}
              >
                Help us reach
                <br />
                <span style={{ color: "#37c5f3" }}>one million</span>
                <br />
                young people.
              </h2>
            </Reveal>

            <Reveal delay={120} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center transition-all duration-200"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "15px 36px",
                  background: "#37c5f3",
                  color: "#07090f",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#1aadd4")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#37c5f3")
                }
              >
                Donate
              </Link>
              <Link
                href="/who-we-are"
                className="inline-flex items-center justify-center transition-all duration-200"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "15px 36px",
                  border: "1px solid rgba(10,14,26,0.2)",
                  color: "#0a0e1a",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#37c5f3";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#37c5f3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(10,14,26,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#0a0e1a";
                }}
              >
                Learn More
              </Link>
            </Reveal>
          </div>

          {/* bottom divider with stats */}
          <div
            className="mt-16 pt-10 grid grid-cols-3 border-t"
            style={{ borderColor: "rgba(55,197,243,0.2)" }}
          >
            {[
              ["2018", "Founded"],
              ["Ghana", "Base of Operations"],
              ["2030", "Target Year"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p
                  className="font-black tracking-tight"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                    color: "#0a0e1a",
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    marginTop: 4,
                  }}
                >
                  {lbl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
