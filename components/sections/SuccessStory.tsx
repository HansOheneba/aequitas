"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, []);
  return { elRef, visible };
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
    <section id="success" className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-[580px]">

        {/* Left dark panel */}
        <div
          ref={left.elRef}
          className="bg-ink relative overflow-hidden flex flex-col justify-end"
          style={{ padding: "clamp(48px, 7vw, 96px)" }}
        >
          {/* Ghost watermark */}
          <div
            aria-hidden
            className="absolute top-0 right-0 font-black leading-[0.85] select-none pointer-events-none tracking-[-0.04em]"
            style={{
              fontSize: "clamp(100px, 16vw, 200px)",
              color: "rgba(55,197,243,0.04)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            STORY
          </div>

          {/* Quote block */}
          <div className={`transition-all duration-700 ${left.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div
              className="w-14 h-14 border-2 border-blue flex items-center justify-center text-blue font-bold text-[15px] mb-7"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              KA
            </div>

            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              Featured Story
            </p>

            <blockquote
              className="font-bold text-white mb-8"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", lineHeight: 1.5, fontFamily: "var(--font-montserrat)" }}
            >
              &ldquo;I came with a dream and a dollar. Aequitas gave me the
              tools to build an empire.&rdquo;
            </blockquote>

            <p
              className="text-[15px] font-bold text-white mb-0.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Kwame Asante
            </p>
            <p className="text-xs text-white/40 tracking-[0.05em]">
              Accra, Ghana &bull; Class of 2018
            </p>
          </div>

          {/* Stats strip */}
          <div
            className={`grid grid-cols-3 gap-px bg-white/5 mt-12 transition-all duration-700 delay-200 ${left.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-4 py-5 text-center">
                <p
                  className="font-extrabold text-blue leading-none"
                  style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", fontFamily: "var(--font-montserrat)" }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right white panel */}
        <div
          ref={right.elRef}
          className="bg-white flex flex-col justify-center"
          style={{ padding: "clamp(48px, 7vw, 96px)" }}
        >
          <div className={`transition-all duration-700 delay-100 ${right.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <h2
              className="font-extrabold text-dark leading-[1.1] mb-7"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontFamily: "var(--font-montserrat)" }}
            >
              From Struggle<br />
              to <span className="text-blue">Impact</span>
            </h2>

            <p className="text-[15px] leading-[1.85] text-gray-500 mb-4">
              Kwame grew up in a single-parent household in Accra, selling water
              sachets after school to help pay rent. When a community pastor
              nominated him for the Aequitas Scholarship in 2016, his life
              changed overnight.
            </p>
            <p className="text-[15px] leading-[1.85] text-gray-500 mb-4">
              After graduating with a degree in engineering, he enrolled in the
              Startup Incubator. With a seed grant and months of coaching, he
              launched a solar-powered cold storage startup serving rural
              farmers.
            </p>
            <p className="text-[15px] leading-[1.85] text-gray-500 mb-11">
              Today, Kwame mentors 12 scholars in the same program that
              transformed him — proving that transformation compounds.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/apply"
                className="inline-block px-8 py-3.5 bg-blue text-ink text-[12px] font-bold tracking-[0.15em] uppercase no-underline"
              >
                Start Your Journey
              </Link>
              <Link
                href="/who-we-are"
                className="inline-block px-8 py-3.5 border border-dark text-dark text-[12px] font-bold tracking-[0.15em] uppercase no-underline"
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
