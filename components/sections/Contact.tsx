"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export default function Contact() {
  const s = useReveal();

  return (
    <section
      id="contact"
      style={{
        background: "#07090f",
        padding: "clamp(64px, 9vw, 100px) clamp(24px, 6vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          fontSize: "clamp(80px, 15vw, 200px)",
          fontWeight: 900,
          lineHeight: 0.8,
          color: "rgba(55,197,243,0.03)",
          userSelect: "none",
          fontFamily: "var(--font-montserrat)",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}
      >
        TALK
      </div>

      <div
        ref={s.ref}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
          position: "relative",
          opacity: s.visible ? 1 : 0,
          transform: s.visible ? "none" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
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
            Contact Us
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              fontFamily: "var(--font-montserrat)",
              marginBottom: 14,
            }}
          >
            Have Something<br />to Say?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
            }}
          >
            Whether you&rsquo;re a student, partner, or supporter — we want to
            hear from you. Reach out and let&rsquo;s start a conversation.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
          <Link
            href="/contact"
            style={{
              padding: "15px 40px",
              background: "#37c5f3",
              color: "#07090f",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            Get in Touch
          </Link>
          <div
            style={{
              display: "flex",
              gap: 24,
              paddingTop: 4,
            }}
          >
            <a
              href="tel:+233551414140"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", fontFamily: "'Courier New', monospace" }}
            >
              +233 (0) 55 141 4140
            </a>
            <a
              href="mailto:info@aequitasfoundation.org"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
            >
              info@aequitasfoundation.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
