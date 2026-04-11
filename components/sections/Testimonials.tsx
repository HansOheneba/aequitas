"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "The Aequitas Experience has led to the shifting of my perspective with regards to my relationship with others, especially around communication and understanding that the burden of communication lies with the person speaking.",
    name: "Elizabeth Aggrey",
    title: "Cohort 7 · Rakes Company Limited",
    initials: "EA",
    program: "The Aequitas Experience",
  },
  {
    quote:
      "It has really helped me to know when to talk, how to talk. I must say my managers really enjoy conversing with me because I really learnt how to interact during my training with Aequitas. I was very very quiet and shy before the experience.",
    name: "Charity Odai",
    title: "Cohort 6 · Fidelity Bank",
    initials: "CO",
    program: "The Aequitas Experience",
  },
  {
    quote:
      "I have become proactive and now I also critically analyze every step I take, taking into consideration my strengths and weaknesses.",
    name: "Patience Kuranchie",
    title: "Cohort 6 · Star Oil Company Limited",
    initials: "PK",
    program: "The Aequitas Experience",
  },
  {
    quote:
      "The Aequitas Experience has helped me identify who I am, what I seek to achieve and how to achieve it. This has upgraded my thinking, my relationship with people and has largely resulted in positive remarks wherever I have been since: work, home and other places.",
    name: "Desmond Ohusegun Kolawole",
    title: "Cohort 6 · Shieldbest Tech",
    initials: "DK",
    program: "The Aequitas Experience",
  },
];

function useReveal() {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, []);
  return { elRef, visible };
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { elRef, visible } = useReveal();
  const t = testimonials[active];

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-cream">
      <div className="px-8 md:px-16 lg:px-24 py-28" ref={elRef}>
        {/* Header row */}
        <div
          className={`grid grid-cols-[1fr_auto] items-end border-b border-gray-200 pb-8 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3">
              Testimonials
            </p>
            <h2
              className="font-extrabold leading-[1.05] text-dark"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Voices of <span className="text-blue">Change</span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2">
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                className="w-11 h-11 border border-gray-300 bg-transparent flex items-center justify-center cursor-pointer hover:border-blue hover:bg-blue transition-[border-color,background-color] duration-200"
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
          className={`grid md:grid-cols-2 items-center transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ gap: "clamp(40px, 6vw, 96px)" }}
        >
          {/* Left — giant quote */}
          <div className="relative">
            <div
              className="font-black leading-[0.8] select-none text-blue/8 font-serif -mb-5"
              style={{ fontSize: "clamp(120px, 15vw, 180px)" }}
            >
              &ldquo;
            </div>
            <blockquote
              className="font-medium text-[#1a1f2e] mb-10"
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                lineHeight: 1.7,
              }}
            >
              {t.quote}
            </blockquote>

            {/* Dots */}
            <div className="flex gap-1.5 mt-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 border-none cursor-pointer p-0 transition-[width,background-color] duration-300 ${i === active ? "w-6 bg-blue" : "w-2 bg-gray-300"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — speaker card */}
          <div className="bg-white py-10 px-9 border-l-[3px] border-blue">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Initials */}
            <div
              className="w-14 h-14 border-2 border-blue flex items-center justify-center text-blue font-bold text-base mb-5"
              style={{
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {t.initials}
            </div>

            <p
              className="text-[17px] font-bold text-dark mb-1"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {t.name}
            </p>
            <p className="text-xs text-gray-500 mb-4">{t.title}</p>

            <span className="inline-block px-3 py-1 bg-blue/10 border border-blue/20 text-[10px] font-bold tracking-[0.15em] uppercase text-blue">
              {t.program}
            </span>

            {/* Index */}
            <p
              className="mt-8 text-[11px] text-gray-300 tracking-widest"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
