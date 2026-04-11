"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, []);
  return { elRef, visible };
}

const LINKS = [
  { label: "+233 (0) 55 141 4140", href: "tel:+233551414140" },
  { label: "info@aequitas.org", href: "mailto:info@aequitas.org" },
];

export default function Contact() {
  const { elRef, visible } = useReveal();

  return (
    <section id="contact" className="bg-ink relative overflow-hidden">
      {/* Ghost watermark */}
      <span
        aria-hidden
        className="absolute right-0 top-0 font-black leading-[0.75] select-none pointer-events-none tracking-[-0.04em]"
        style={{
          fontSize: "clamp(90px, 16vw, 200px)",
          color: "rgba(55,197,243,0.03)",
          fontFamily: "var(--font-montserrat)",
        }}
      >
        CONTACT
      </span>

      <div
        ref={elRef}
        className={`relative px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)" }}
      >
        {/* Left */}
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3">
            Contact Us
          </p>
          <h2
            className="font-extrabold text-white leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "var(--font-montserrat)" }}
          >
            Let&rsquo;s Start a<br />
            <span className="text-blue">Conversation</span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/50">
            Whether you want to apply, volunteer, partner, or simply learn more
            about our work — we would love to hear from you.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-5 shrink-0">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] tracking-[0.05em] text-white/35 hover:text-white transition-colors duration-200 no-underline"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {label}
            </a>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-block px-9 py-3.5 bg-blue text-ink text-[12px] font-bold tracking-[0.15em] uppercase no-underline"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
