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

const partners = [
  { name: "African Development Bank", category: "Finance", since: "2019" },
  { name: "Tony Elumelu Foundation", category: "Entrepreneurship", since: "2020" },
  { name: "MasterCard Foundation", category: "Education", since: "2018" },
  { name: "Ashesi University", category: "Academia", since: "2021" },
  { name: "GIZ Ghana", category: "Development", since: "2019" },
  { name: "UNDP Africa", category: "Policy", since: "2022" },
  { name: "Stanbic Bank", category: "Finance", since: "2020" },
  { name: "MEST Africa", category: "Technology", since: "2021" },
];

export default function Partners() {
  const header = useReveal();
  const grid = useReveal();
  const cta = useReveal();

  return (
    <section id="partners">
      {/* Header + grid */}
      <div style={{ background: "white", padding: "clamp(72px, 10vw, 120px) clamp(24px, 6vw, 96px)" }}>
        {/* Header */}
        <div
          ref={header.ref}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 64,
            flexWrap: "wrap",
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 12,
              }}
            >
              Our Partners
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "#0a0e1a",
                lineHeight: 1.05,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Built with the<br />
              <span style={{ color: "#37c5f3" }}>Best in Africa</span>
            </h2>
          </div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6b7280", maxWidth: 400 }}>
            We collaborate with institutions that share our conviction: that
            talent is equally distributed, but opportunity is not.
          </p>
        </div>

        {/* Partner grid */}
        <div
          ref={grid.ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 1,
            background: "#e5e7eb",
            border: "1px solid #e5e7eb",
            opacity: grid.visible ? 1 : 0,
            transform: grid.visible ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} delay={i * 50} />
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div
        ref={cta.ref}
        style={{
          background: "#07090f",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 6vw, 96px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
          opacity: cta.visible ? 1 : 0,
          transform: cta.visible ? "none" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            fontSize: "clamp(80px, 14vw, 160px)",
            fontWeight: 900,
            lineHeight: 0.8,
            color: "rgba(55,197,243,0.03)",
            userSelect: "none",
            fontFamily: "var(--font-montserrat)",
            pointerEvents: "none",
            letterSpacing: "-0.03em",
          }}
        >
          PARTNER
        </div>

        <div style={{ position: "relative" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#37c5f3", marginBottom: 10 }}>
            Get Involved
          </p>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, color: "white", lineHeight: 1.15, fontFamily: "var(--font-montserrat)" }}>
            Become a Partner
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginTop: 8, maxWidth: 480 }}>
            Join a growing coalition of organisations investing in the next
            generation of African leaders.
          </p>
        </div>

        <Link
          href="/#contact"
          style={{
            padding: "14px 36px",
            background: "#37c5f3",
            color: "#07090f",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
            flexShrink: 0,
            position: "relative",
          }}
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}

function PartnerCard({ partner, delay }: { partner: typeof partners[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        padding: "28px 24px",
        borderLeft: hovered ? "3px solid #37c5f3" : "3px solid transparent",
        transition: "border-color 0.2s ease, background 0.2s ease",
        cursor: "default",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: hovered ? "#37c5f3" : "#9ca3af",
          marginBottom: 8,
          transition: "color 0.2s",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {partner.category} &bull; {partner.since}
      </p>
      <p
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#0a0e1a",
          lineHeight: 1.3,
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {partner.name}
      </p>
    </div>
  );
}
