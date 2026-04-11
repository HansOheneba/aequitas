"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const BOARD = [
  {
    name: "Prof. Alexander Dodoo",
    role: "Board Chairman",
    initial: "AD",
    image: "/team/alex-dodoo.jpg",
    bio: "Brings decades of institutional leadership spanning academia, governance, and civil society, providing Aequitas with strategic oversight and counsel.",
  },
  {
    name: "Rev'd Akua Ofori-Boateng",
    role: "Executive Director",
    initial: "AO",
    image: "/team/Rev'd-Akua-Ofori-Boateng.jpg",
    bio: "Theologian, educator, and social entrepreneur with over 20 years in community development across West Africa and the United States.",
  },
  {
    name: "Abdul Rahman Issah Dowuona",
    role: "Board Member",
    initial: "AR",
    image: "/team/Abdul-Rahman-Issah-Dowuona.jpg",
    bio: "Brings a background in strategic development and youth advocacy, helping shape long-term programme design and community outreach strategy.",
  },
  {
    name: "Frimpomaa Ntiforo Agah",
    role: "Board Member & Director of Programs",
    initial: "FN",
    image: "/team/Frimpomaa-Ntiforo-Agah.jpg",
    bio: "Bridges governance and operations — overseeing the full lifecycle of Aequitas programmes from design through impact assessment.",
  },
];

const TEAM = [
  {
    name: "James Oduro",
    role: "Director of Programs",
    initial: "JO",
    bio: "Former USAID officer with deep expertise in education systems and youth workforce development.",
  },
  {
    name: "Priscilla Acheampong",
    role: "Head of Partnerships",
    initial: "PA",
    bio: "Builds strategic alliances with global donors, corporations, and faith institutions to scale our reach.",
  },
  {
    name: "Emmanuel Darko",
    role: "Chief Financial Officer",
    initial: "ED",
    bio: "CPA with 15+ years in nonprofit finance, ensuring every dollar goes furthest for the communities we serve.",
  },
  {
    name: "Nana Akua Boateng",
    role: "Director of Impact & Research",
    initial: "NB",
    bio: "PhD researcher specialising in measuring social return on investment and equity outcomes.",
  },
  {
    name: "Michael Asante",
    role: "Community Engagement Lead",
    initial: "MA",
    bio: "Lived-experience leader who grew up in our scholarship programme and now leads grassroots mobilisation.",
  },
  {
    name: "Abena Adjei",
    role: "Communications Lead",
    initial: "AA",
    bio: "Shapes Aequitas's voice and narrative — from campaign strategy to media relations — across all platforms.",
  },
];

/* ── Reveal helper ────────────────────────────────────────────────────────── */
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
            : "translateY(22px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function TeamPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[62vh] flex flex-col justify-end overflow-hidden"
        style={{ background: "#07090f", paddingBottom: 80, paddingTop: 140 }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,197,243,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(55,197,243,0.022) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />

        {/* Ghost large text */}
        <span
          className="absolute right-0 bottom-0 select-none pointer-events-none font-black leading-none"
          style={{
            fontSize: "clamp(100px,22vw,280px)",
            color: "rgba(55,197,243,0.025)",
            letterSpacing: "-0.05em",
          }}
          aria-hidden="true"
        >
          TEAM
        </span>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <Reveal>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 20,
              }}
            >
              The People
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1
              className="font-black leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
            >
              Behind the
              <br />
              <span style={{ color: "#37c5f3" }}>Mission</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p
              className="mt-8 max-w-xl"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.42)",
              }}
            >
              A passionate, multi-disciplinary team united by a singular
              conviction — that every young person deserves a fair chance to
              discover and live their purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BOARD OF DIRECTORS — white ───────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-4">
          <Reveal>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 10,
              }}
            >
              Governance
            </p>
            <h2
              className="font-bold tracking-tight leading-none"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                color: "#0a0e1a",
              }}
            >
              Board of Directors
            </h2>
          </Reveal>
        </div>

        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t mt-12"
          style={{ borderColor: "#e5e7eb" }}
        >
          {BOARD.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 80}
              className="group border-b border-r border-gray-100 last:border-r-0 nth-[2n]:md:border-r-0 lg:nth-[2n]:border-r lg:nth-[4n]:border-r-0"
            >
              <div className="px-8 md:px-10 py-12 h-full flex flex-col">
                {/* Photo avatar */}
                <div
                  className="relative w-16 h-16 mb-8 overflow-hidden"
                  style={{ border: "1px solid rgba(55,197,243,0.2)" }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Index */}
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "#d1d5db",
                    marginBottom: 12,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h3
                  className="font-bold leading-snug group-hover:text-blue transition-colors duration-200"
                  style={{
                    fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                    color: "#0a0e1a",
                  }}
                >
                  {" "}
                  {m.name}
                </h3>
                <p
                  className="mt-1 mb-5"
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                  }}
                >
                  {m.role}
                </p>
                <p
                  className="mt-auto"
                  style={{ fontSize: 13, lineHeight: 1.8, color: "#6b7280" }}
                >
                  {m.bio}
                </p>

                {/* Hover accent */}
                <div
                  className="h-px w-0 group-hover:w-8 mt-8 transition-all duration-300"
                  style={{ background: "#37c5f3" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── MANAGEMENT TEAM — #f0f8fd light blue ─────────────────────── */}
      <section style={{ background: "#f0f8fd" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-4">
          <div className="flex items-end justify-between">
            <Reveal>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                  marginBottom: 10,
                }}
              >
                Operations
              </p>
              <h2
                className="font-bold tracking-tight leading-none"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  color: "#0a0e1a",
                }}
              >
                Management Team
              </h2>
            </Reveal>

            {/* Ghost number */}
            <span
              className="select-none font-black leading-none pb-1 hidden md:block"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                color: "rgba(55,197,243,0.08)",
              }}
              aria-hidden="true"
            >
              6
            </span>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-12 mb-0"
          style={{ background: "#cce8f5" }}
        >
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div
                className="flex flex-col h-full group transition-colors duration-200"
                style={{ background: "white", padding: "40px 36px" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "#fafeff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "white")
                }
              >
                {/* Initial */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-[12px] font-bold tracking-widest transition-all duration-300 group-hover:border-blue/60"
                    style={{
                      border: "1px solid #e5e7eb",
                      color: "#37c5f3",
                    }}
                  >
                    {m.initial}
                  </div>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      color: "#d1d5db",
                      paddingTop: 14,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                <h3
                  className="font-bold leading-snug group-hover:text-blue transition-colors duration-200 mb-1.5"
                  style={{
                    fontSize: "clamp(1rem, 1.2vw, 1.05rem)",
                    color: "#0a0e1a",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  className="mb-5"
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                  }}
                >
                  {m.role}
                </p>
                <p
                  className="mt-auto"
                  style={{ fontSize: 13, lineHeight: 1.8, color: "#6b7280" }}
                >
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── JOIN US — dark ────────────────────────────────────────────── */}
      <section style={{ background: "#07090f" }}>
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
                Join Us
              </p>
              <h2
                className="font-bold tracking-tight leading-[1.05] text-white"
                style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
              >
                Be part of the
                <br />
                <span style={{ color: "#37c5f3" }}>team</span> that changes
                <br />
                lives.
              </h2>
              <p
                className="mt-6 max-w-xl"
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                We&apos;re always looking for passionate people — staff,
                volunteers, and board members — who want to make a real
                difference in the lives of Africa&apos;s youth.
              </p>
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
                Get In Touch
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
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.55)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(55,197,243,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#37c5f3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.55)";
                }}
              >
                Who We Are
              </Link>
            </Reveal>
          </div>

          {/* Divider strip */}
          <div
            className="mt-20 pt-10 grid grid-cols-3 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {[
              ["10+", "Core Staff"],
              ["4", "Board Members"],
              ["50+", "Volunteers"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p
                  className="font-black tracking-tight tabular-nums"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                    color: "white",
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginTop: 6,
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
