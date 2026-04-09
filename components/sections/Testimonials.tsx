"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Aequitas didn't just give me a scholarship — they gave me a community. My mentor walked with me through every challenge. I graduated debt-free and landed my dream job.",
    name: "Amara Osei",
    title: "Scholar Alumni, Class of 2021",
    initials: "AO",
    program: "Scholarship Program",
  },
  {
    quote:
      "The incubator was the turning point for my business. Within 18 months of graduating, my startup had employed 7 people from my neighbourhood. I owe so much to this foundation.",
    name: "David Mensah",
    title: "Entrepreneur & Incubator Graduate",
    initials: "DM",
    program: "Startup Incubator",
  },
  {
    quote:
      "As a single mother, I didn't think doors like this would open for me. The women's programme taught me business, gave me funding, and surrounded me with women who believed in me.",
    name: "Grace Tetteh",
    title: "Women Empowerment Graduate",
    initials: "GT",
    program: "Women Empowerment",
  },
  {
    quote:
      "The Faith & Wellness program helped me deal with trauma I had carried for years. I came for skills. I left whole. Aequitas truly sees the whole person.",
    name: "Samuel Kofi",
    title: "Faith & Wellness Participant",
    initials: "SK",
    program: "Faith & Wellness",
  },
  {
    quote:
      "I was 17 when I joined the Next Gen Leaders program. It changed how I see myself. Today I run a youth nonprofit and I trace it all back to what started here.",
    name: "Ama Frimpong",
    title: "Next Gen Leaders Alumni",
    initials: "AF",
    program: "Next Gen Leaders",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();
  const t = testimonials[active];

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" style={{ background: "#f9f6f1" }}>
      <div className="px-8 md:px-16 lg:px-24 py-28" ref={ref}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: 32,
            marginBottom: 64,
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
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
              Testimonials
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#0a0e1a",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Voices of <span style={{ color: "#37c5f3" }}>Change</span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  width: 44,
                  height: 44,
                  border: "1.5px solid #d1d5db",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#37c5f3";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#37c5f3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#d1d5db";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
                aria-label={i === 0 ? "Previous" : "Next"}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  {i === 0 ? (
                    <path
                      d="M9 2L4 7l5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  ) : (
                    <path
                      d="M5 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  )}
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Quote block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — giant quote */}
          <div style={{ position: "relative" }}>
            {/* Big quote mark */}
            <div
              style={{
                fontSize: "clamp(120px, 15vw, 180px)",
                lineHeight: 0.8,
                fontWeight: 900,
                color: "rgba(55,197,243,0.08)",
                fontFamily: "Georgia, serif",
                marginBottom: -20,
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                lineHeight: 1.7,
                fontWeight: 500,
                color: "#1a1f2e",
                marginBottom: 40,
                fontFamily: "var(--font-source-sans)",
              }}
            >
              {t.quote}
            </blockquote>

            {/* Dots */}
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background: i === active ? "#37c5f3" : "#d1d5db",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.3s, background 0.3s",
                    padding: 0,
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — speaker card */}
          <div>
            <div
              style={{
                background: "white",
                padding: "40px 36px",
                borderLeft: "3px solid #37c5f3",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 24 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="#37c5f3"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Initials */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: "2px solid #37c5f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  fontFamily: "'Courier New', monospace",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#37c5f3",
                  letterSpacing: "0.05em",
                }}
              >
                {t.initials}
              </div>

              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0a0e1a",
                  marginBottom: 4,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {t.name}
              </p>
              <p
                style={{ fontSize: "12px", color: "#6b7280", marginBottom: 16 }}
              >
                {t.title}
              </p>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(55,197,243,0.08)",
                  border: "1px solid rgba(55,197,243,0.2)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                }}
              >
                {t.program}
              </span>

              {/* Index */}
              <p
                style={{
                  marginTop: 32,
                  fontFamily: "'Courier New', monospace",
                  fontSize: "11px",
                  color: "#d1d5db",
                  letterSpacing: "0.1em",
                }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
