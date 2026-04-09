"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const stats = [
  { value: "45", label: "Jobs Created" },
  { value: "3 yrs", label: "To Profitability" },
  { value: "12", label: "Scholars Mentored" },
];

export default function SuccessStory() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="success" style={{ background: "white" }}>
      <div
        style={{
          display: "grid",
          minHeight: "580px",
        }}
        className="block lg:grid lg:grid-cols-2"
      >
        {/* Left dark panel */}
        <div
          ref={left.ref}
          style={{
            background: "#07090f",
            position: "relative",
            overflow: "hidden",
            padding: "clamp(48px, 7vw, 96px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* Ghost watermark */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "clamp(100px, 16vw, 200px)",
              fontWeight: 900,
              lineHeight: 0.85,
              color: "rgba(55,197,243,0.04)",
              letterSpacing: "-0.04em",
              userSelect: "none",
              fontFamily: "var(--font-montserrat)",
              pointerEvents: "none",
            }}
          >
            STORY
          </div>

          {/* Quote block */}
          <div
            style={{
              opacity: left.visible ? 1 : 0,
              transform: left.visible ? "none" : "translateY(32px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                border: "2px solid #37c5f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Courier New', monospace",
                fontSize: "15px",
                fontWeight: 700,
                color: "#37c5f3",
                marginBottom: 28,
              }}
            >
              KA
            </div>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 16,
              }}
            >
              Featured Story
            </p>

            <blockquote
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "white",
                marginBottom: 32,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              &ldquo;I came with a dream and a dollar. Aequitas gave me the
              tools to build an empire.&rdquo;
            </blockquote>

            <p style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: 2, fontFamily: "var(--font-montserrat)" }}>
              Kwame Asante
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
              Accra, Ghana &bull; Class of 2018
            </p>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              marginTop: 48,
              opacity: left.visible ? 1 : 0,
              transform: left.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ background: "#07090f", padding: "20px 16px", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", fontWeight: 800, color: "#37c5f3", fontFamily: "var(--font-montserrat)", lineHeight: 1 }}>
                  {s.value}
                </p>
                <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right white panel */}
        <div
          ref={right.ref}
          style={{
            padding: "clamp(48px, 7vw, 96px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "white",
          }}
        >
          <div
            style={{
              opacity: right.visible ? 1 : 0,
              transform: right.visible ? "none" : "translateY(28px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "#0a0e1a",
                lineHeight: 1.1,
                marginBottom: 28,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              From Struggle<br />
              to <span style={{ color: "#37c5f3" }}>Impact</span>
            </h2>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#4b5563", marginBottom: 16 }}>
              Kwame grew up in a single-parent household in Accra, selling water
              sachets after school to help pay rent. When a community pastor
              nominated him for the Aequitas Scholarship in 2016, his life
              changed overnight.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#4b5563", marginBottom: 16 }}>
              After graduating with a degree in engineering, he enrolled in the
              Startup Incubator. With a seed grant and months of coaching, he
              launched a solar-powered cold storage startup serving rural
              farmers.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#4b5563", marginBottom: 44 }}>
              Today, Kwame mentors 12 scholars in the same program that
              transformed him — proving that transformation compounds.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/apply"
                style={{
                  padding: "13px 32px",
                  background: "#37c5f3",
                  color: "#07090f",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Start Your Journey
              </Link>
              <Link
                href="/who-we-are"
                style={{
                  padding: "13px 32px",
                  border: "1.5px solid #0a0e1a",
                  color: "#0a0e1a",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
