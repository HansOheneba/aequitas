"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useReveal(threshold = 0.1) {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, [threshold]);
  return { elRef, visible };
}

const GAINS = [
  {
    number: "01",
    title: "Employability Training",
    body: "Practical, hands-on training designed to make you job-ready — from CV writing to professional communication and workplace etiquette.",
  },
  {
    number: "02",
    title: "Mentorship",
    body: "Dedicated mentorship from industry professionals who guide your career journey and help you navigate the job market with confidence.",
  },
  {
    number: "03",
    title: "Internship Opportunities",
    body: "Real-world internship placements with partner organisations to build your portfolio and gain the experience employers look for.",
  },
  {
    number: "04",
    title: "Entrepreneurship Training",
    body: "Exposure to entrepreneurial thinking, business development skills, and tools to help you take charge of your own career path.",
  },
  {
    number: "05",
    title: "Certificate of Participation",
    body: "An official certificate from Aequitas Foundation and The Akua Kuenyehia Foundation recognising your commitment and achievement.",
  },
];

const ELIGIBILITY = [
  "Female tertiary graduate based in Accra, Ghana",
  "Aged between 18 and 35 years",
  "Completed National Service",
  "Currently unemployed or underemployed",
  "Passionate about personal and professional growth",
  "Ready to commit to a 16-week intensive programme",
];

export default function EmpowerHerDreamsPage() {
  const { elRef: partnerRef, visible: partnerVisible } = useReveal(0.08);
  const { elRef: gainsRef, visible: gainsVisible } = useReveal(0.06);
  const { elRef: eligRef, visible: eligVisible } = useReveal(0.1);
  const { elRef: ctaRef, visible: ctaVisible } = useReveal(0.1);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(60px, 9vw, 100px)",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(80px, 15vw, 220px)",
            color: "rgba(196,167,71,0.04)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          EMPOWER
        </div>

        <div
          className={`relative transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <Link
              href="/"
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>
              /
            </span>
            <Link
              href="/programs/aequitas-experience"
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Programmes
            </Link>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>
              /
            </span>
            <span
              className="text-[11px] tracking-[0.15em] uppercase"
              style={{
                color: "var(--color-gold)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Empower Her Dreams
            </span>
          </div>

          {/* Partnership badge */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2"
            style={{ border: "1px solid rgba(196,167,71,0.3)" }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.2em] uppercase"
              style={{
                color: "var(--color-gold)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Aequitas Foundation × The Akua Kuenyehia Foundation
            </span>
          </div>

          <h1
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              lineHeight: 1.0,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Empower
            <br />
            <span style={{ color: "var(--color-gold)" }}>Her Dreams</span>
          </h1>
          <p
            className="mt-5 text-[15px] leading-[1.85] max-w-lg"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            A 16-week employability training and internship programme for female
            university graduates in Ghana. Build the skills, confidence, and
            connections to launch your career.
          </p>

          <div className="flex items-center gap-3 mt-7">
            <div
              className="w-12"
              style={{ height: 3, background: "var(--color-gold)" }}
            />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Applications open — 3 February 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── About + Image ──────────────────────────────────────────────── */}
      <section style={{ background: "#fff" }}>
        <div
          ref={partnerRef}
          className={`grid lg:grid-cols-2 transition-all duration-700 ${partnerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Image column */}
          <div className="relative overflow-hidden" style={{ minHeight: 520 }}>
            <Image
              src="/gallery/aeq-expereince/MG_1044-scaled.webp"
              alt="Empower Her Dreams programme participants in training"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            {/* Gold caption bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-8 py-6"
              style={{ background: "var(--color-gold)" }}
            >
              <p
                className="font-bold leading-snug"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontFamily: "var(--font-montserrat)",
                  color: "#07090f",
                }}
              >
                Building the next generation of confident, career-ready women in
                Ghana.
              </p>
            </div>
          </div>

          {/* Text column */}
          <div
            className="px-8 sm:px-12 lg:px-16 xl:px-20 flex flex-col justify-center"
            style={{
              paddingTop: "clamp(48px, 7vw, 80px)",
              paddingBottom: "clamp(48px, 7vw, 80px)",
            }}
          >
            <p
              className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              About the Programme
            </p>
            <h2
              className="font-extrabold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "#0a0e1a",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Closing the gap between graduation and a meaningful career.
            </h2>

            <div
              className="flex flex-col gap-4 text-[15px] leading-[1.85]"
              style={{ color: "#4b5563" }}
            >
              <p>
                Empower Her Dreams is a collaboration between Aequitas
                Foundation and The Akua Kuenyehia Foundation — two organisations
                united by the belief that every woman deserves a fair shot at
                building a successful career.
              </p>
              <p>
                The programme is built for female university graduates who have
                completed National Service and are currently unemployed. Over 16
                weeks, participants receive intensive employability training,
                professional mentorship, hands-on internship placements, and
                entrepreneurship coaching.
              </p>
              <p>
                We work to ensure that talented women are not held back by a
                lack of opportunity, experience, or professional networks. By
                the end of the programme, graduates walk away ready — not just
                to find a job, but to own their career.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-2">
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Enquiries
              </p>
              <a
                href="tel:+233551414140"
                className="text-[13px] transition-colors duration-200 hover:underline"
                style={{ color: "#374151" }}
              >
                055 141 4140
              </a>
              <a
                href="mailto:info@aequitasfoundation.org"
                className="text-[13px] transition-colors duration-200 hover:underline"
                style={{ color: "#374151" }}
              >
                info@aequitasfoundation.org
              </a>
              <a
                href="mailto:info@akuakuenyefoundation.org"
                className="text-[13px] transition-colors duration-200 hover:underline"
                style={{ color: "#374151" }}
              >
                info@akuakuenyefoundation.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Gain ─────────────────────────────────────────────── */}
      <section
        style={{ background: "#0d1017" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <div
          ref={gainsRef}
          className={`transition-all duration-700 ${gainsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(56px, 8vw, 96px)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "var(--color-gold)" }}
              >
                Programme Benefits
              </p>
              <h2
                className="font-extrabold text-white"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  lineHeight: 1.1,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                What You
                <br />
                Walk Away With
              </h2>
            </div>
            <div
              className="w-12 mb-1.5"
              style={{ height: 3, background: "var(--color-gold)" }}
            />
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {GAINS.map((g, i) => (
              <div
                key={g.number}
                className={`px-7 py-8 group transition-all duration-500 ${gainsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  background: "#0d1017",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="text-[11px] font-semibold tracking-[0.2em] mb-5"
                  style={{
                    color: "var(--color-gold)",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {g.number}
                </div>
                <h3
                  className="font-bold text-white mb-3 leading-tight"
                  style={{
                    fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {g.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.8]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {g.body}
                </p>
                <div
                  className="mt-6 transition-all duration-300 group-hover:w-full"
                  style={{
                    width: "2rem",
                    height: 2,
                    background: "var(--color-gold)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Can Apply ──────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{
          background: "#fff",
          paddingTop: "clamp(56px, 8vw, 96px)",
          paddingBottom: "clamp(56px, 8vw, 96px)",
        }}
      >
        <div
          ref={eligRef}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-24 transition-all duration-700 ${eligVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Left */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Who Can Apply
            </p>
            <h2
              className="font-extrabold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#0a0e1a",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Built for
              <br />
              Ambitious Women
            </h2>
            <div
              className="text-[15px] leading-[1.85] flex flex-col gap-4"
              style={{ color: "#4b5563" }}
            >
              <p>
                Empower Her Dreams is for female graduates in Ghana who are
                driven and ready — but haven't yet found the right door to open.
                If you have the degree and the passion but lack the experience
                and connections to break through, this programme was built for
                you.
              </p>
              <p>
                We are looking for women aged 18–35, based in Accra, who have
                completed National Service and are currently not in full-time
                employment. No corporate experience needed. Just ambition.
              </p>
            </div>

            {/* Duration pill */}
            <div className="mt-8 inline-flex items-center gap-3">
              <div
                style={{
                  width: 3,
                  height: 40,
                  background: "var(--color-gold)",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Programme Duration
                </p>
                <p
                  className="font-extrabold"
                  style={{
                    fontSize: "1.6rem",
                    color: "#0a0e1a",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  16 Weeks
                </p>
              </div>
            </div>
          </div>

          {/* Right — checklist */}
          <div className="flex flex-col justify-center gap-5">
            {ELIGIBILITY.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    border: "1.5px solid var(--color-gold)",
                    color: "var(--color-gold)",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <p
                  className="text-[15px] leading-snug"
                  style={{ color: "#374151" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ──────────────────────────────────────────────── */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
        style={{ height: "clamp(100px, 14vw, 160px)" }}
      >
        {[
          "/gallery/aeq-expereince/MG_0816-scaled.webp",
          "/gallery/aeq-expereince/MG_0924-scaled.webp",
          "/gallery/aeq-expereince/MG_1096-scaled.webp",
          "/gallery/aeq-expereince/MG_1427-scaled.webp",
          "/gallery/aeq-expereince/MG_1474-scaled.webp",
          "/gallery/aeq-expereince/MG_1526-scaled.webp",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 33vw, 17vw"
              className="object-cover grayscale"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(7,9,15,0.45)" }}
            />
          </div>
        ))}
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          background: "var(--color-ink)",
          paddingTop: "clamp(72px, 10vw, 112px)",
          paddingBottom: "clamp(72px, 10vw, 112px)",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 bottom-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(100px, 18vw, 260px)",
            color: "rgba(196,167,71,0.04)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          APPLY
        </div>

        <div
          ref={ctaRef}
          className={`relative flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="max-w-xl">
            <p
              className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3.5"
              style={{ color: "var(--color-gold)" }}
            >
              Ready to Begin?
            </p>
            <h2
              className="font-extrabold text-white leading-[1.05]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Your Future
              <br />
              <span style={{ color: "var(--color-gold)" }}>Starts Here</span>
            </h2>
            <p
              className="mt-4 text-[15px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Applications are open. Take the first step towards the career you
              deserve. Our team reviews every application personally.
            </p>
            <p
              className="mt-2 text-[13px]"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Applications open — 3 February 2026
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/programs/empower-her-dreams/apply"
              className="inline-block px-10 py-4 font-bold text-[12px] tracking-[0.15em] uppercase text-ink transition-colors duration-200"
              style={{ background: "var(--color-gold)", color: "#07090f" }}
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-bold text-[12px] tracking-[0.15em] uppercase text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
