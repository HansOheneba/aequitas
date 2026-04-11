"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

function useReveal(threshold = 0.08) {
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

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: silent fail
    }
  };

  return (
    <div
      className="flex items-center justify-between gap-3 py-3 border-b"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div>
        <p
          className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5"
          style={{
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Courier New', monospace",
          }}
        >
          {label}
        </p>
        <p className="text-[14px] font-medium text-white">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase transition-all duration-200"
        style={{
          border: "1px solid rgba(55,197,243,0.3)",
          color: copied ? "#fff" : "var(--color-blue)",
          background: copied ? "var(--color-blue)" : "transparent",
        }}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={11} /> : <Copy size={11} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

interface AccountCardProps {
  index: number;
  eyebrow: string;
  title: string;
  fields: { label: string; value: string }[];
  visible: boolean;
  delay: number;
}

function AccountCard({
  index,
  eyebrow,
  title,
  fields,
  visible,
  delay,
}: AccountCardProps) {
  return (
    <div
      className="p-7 flex flex-col gap-0 transition-all duration-600"
      style={{
        background: "#0d1017",
        border: "1px solid rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <p
            className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1.5"
            style={{
              color: "var(--color-blue)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {eyebrow}
          </p>
          <h3
            className="font-bold text-white text-[15px] leading-snug"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="text-[11px] font-semibold tracking-[0.15em] opacity-20"
          style={{
            fontFamily: "'Courier New', monospace",
            color: "var(--color-blue)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col">
        {fields.map((f) => (
          <CopyField key={f.label} label={f.label} value={f.value} />
        ))}
      </div>
    </div>
  );
}

const BANK_ACCOUNTS = [
  {
    eyebrow: "Bank Transfer · USD",
    title: "Stanbic Bank — Dollar",
    fields: [
      { label: "Account Name", value: "Aequitas Foundation" },
      { label: "Account Number", value: "9040010095373" },
      { label: "Bank", value: "Stanbic Bank" },
      { label: "Branch", value: "Airport City" },
      { label: "Swift Code", value: "SBICGHAC" },
    ],
  },
  {
    eyebrow: "Bank Transfer · GHS",
    title: "Stanbic Bank — Cedi",
    fields: [
      { label: "Account Name", value: "Aequitas Foundation" },
      { label: "Account Number", value: "9040010093141" },
      { label: "Bank", value: "Stanbic Bank" },
      { label: "Branch", value: "Airport City" },
      { label: "Swift Code", value: "SBICGHAC" },
    ],
  },
];

const MOMO_ACCOUNTS = [
  {
    eyebrow: "Mobile Money · MTN",
    title: "MTN Ghana",
    fields: [
      { label: "Account Name", value: "Aequitas Foundation" },
      { label: "Account Number", value: "059-863-2562" },
    ],
  },
  {
    eyebrow: "Mobile Money · Telecel",
    title: "Telecel Ghana",
    fields: [
      { label: "Account Name", value: "Aequitas Foundation" },
      { label: "Account Number", value: "020-047-0673" },
    ],
  },
];

const IMPACT_STATS = [
  {
    value: "118",
    label: "Youth Graduates",
    sub: "transformed through programs",
  },
  { value: "8", label: "Cohorts Delivered", sub: "since 2021" },
  { value: "60%", label: "Female Participants", sub: "building gender equity" },
  { value: "12wk", label: "Per Programme", sub: "of structured growth" },
];

export default function DonateClient() {
  const [heroVisible, setHeroVisible] = useState(false);
  const { elRef: statsRef, visible: statsVisible } = useReveal();
  const { elRef: bankRef, visible: bankVisible } = useReveal();
  const { elRef: momoRef, visible: momoVisible } = useReveal();
  const { elRef: ctaRef, visible: ctaVisible } = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(60px, 8vw, 96px)",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(80px, 15vw, 220px)",
            color: "rgba(55,197,243,0.03)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
          }}
        >
          GIVE
        </div>

        <div
          className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {/* Left: text */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              Invest in the Youth
            </p>
            <h1
              className="font-extrabold text-white leading-none mb-6"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Every Contribution
              <br />
              <span className="text-blue">Builds a Future</span>
            </h1>
            <p
              className="text-[15px] leading-[1.85] max-w-lg mb-8"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Behind every number is a young person who showed up, put in the
              work, and changed the trajectory of their life. Your contribution
              makes that possible — not once, but cohort after cohort.
            </p>
            <div
              className="w-12"
              style={{ height: 3, background: "var(--color-blue)" }}
            />
          </div>

          {/* Right: image mosaic */}
          <div className="hidden lg:grid grid-cols-2 gap-3 mt-0">
            <div className="relative overflow-hidden" style={{ height: 340 }}>
              <Image
                src="/aequitas-exp-page.webp"
                alt="Aequitas youth programme participants"
                fill
                sizes="25vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative overflow-hidden" style={{ height: 163 }}>
                <Image
                  src="/gallery/aeq-expereince/MG_0924-scaled.webp"
                  alt="Programme participants"
                  fill
                  sizes="12vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden" style={{ height: 163 }}>
                <Image
                  src="/gallery/aeq-expereince/MG_1044-scaled.webp"
                  alt="Youth in training"
                  fill
                  sizes="12vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact stats ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          background: "#0d1017",
          paddingTop: "clamp(48px, 6vw, 72px)",
          paddingBottom: "clamp(48px, 6vw, 72px)",
        }}
      >
        {/* subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,197,243,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(55,197,243,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          ref={statsRef}
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {IMPACT_STATS.map((s, i) => (
            <div
              key={s.label}
              className="px-8 py-9 transition-all duration-500"
              style={{
                background: "#0d1017",
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div
                className="font-extrabold leading-none mb-1"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  color: "#fff",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-1.5"
                style={{ color: "var(--color-blue)" }}
              >
                {s.label}
              </div>
              <div
                className="text-[12px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bank accounts ────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{
          background: "var(--color-ink)",
          paddingTop: "clamp(56px, 8vw, 96px)",
          paddingBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <div ref={bankRef}>
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3">
                Wire Transfer
              </p>
              <h2
                className="font-extrabold text-white"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                  lineHeight: 1.1,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Bank Deposit
              </h2>
            </div>
            <div
              className="w-10 mb-1.5 shrink-0"
              style={{ height: 2, background: "var(--color-blue)" }}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {BANK_ACCOUNTS.map((acc, i) => (
              <AccountCard
                key={acc.eyebrow}
                index={i}
                eyebrow={acc.eyebrow}
                title={acc.title}
                fields={acc.fields}
                visible={bankVisible}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider with image strip ──────────────────────────────── */}
      <div className="grid grid-cols-3 gap-1 px-6 md:px-16 lg:px-24 py-4">
        {[
          "/gallery/2024gifts4christ/MG_8677-scaled.jpg",
          "/gallery/aeq-expereince/MG_0816-scaled.webp",
          "/gallery/seasons-drive/DSC_6033.webp",
        ].map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ height: 160 }}
          >
            <Image
              src={src}
              alt="Aequitas programme moment"
              fill
              sizes="33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(7,9,15,0.35)" }}
            />
          </div>
        ))}
      </div>

      {/* ── Mobile money ─────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{
          background: "var(--color-ink)",
          paddingTop: "clamp(40px, 5vw, 64px)",
          paddingBottom: "clamp(56px, 8vw, 96px)",
        }}
      >
        <div ref={momoRef}>
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3">
                Instant Transfer
              </p>
              <h2
                className="font-extrabold text-white"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                  lineHeight: 1.1,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Mobile Money
              </h2>
            </div>
            <div
              className="w-10 mb-1.5 shrink-0"
              style={{ height: 2, background: "var(--color-blue)" }}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {MOMO_ACCOUNTS.map((acc, i) => (
              <AccountCard
                key={acc.eyebrow}
                index={i}
                eyebrow={acc.eyebrow}
                title={acc.title}
                fields={acc.fields}
                visible={momoVisible}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Note */}
          <p
            className="mt-8 text-[13px] leading-relaxed max-w-xl"
            style={{
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            After completing your transfer, send proof of payment to{" "}
            <a
              href="mailto:info@aequitasfoundation.org"
              className="underline transition-colors duration-200"
              style={{ color: "rgba(55,197,243,0.5)" }}
            >
              info@aequitasfoundation.org
            </a>{" "}
            so we can acknowledge your contribution.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          background: "#0d1017",
          paddingTop: "clamp(72px, 10vw, 112px)",
          paddingBottom: "clamp(72px, 10vw, 112px)",
        }}
      >
        {/* Watermark */}
        <div
          aria-hidden
          className="absolute right-0 bottom-0 font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(90px, 16vw, 240px)",
            color: "rgba(55,197,243,0.03)",
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          TOGETHER
        </div>

        <div
          ref={ctaRef}
          className={`relative flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              Other Ways to Help
            </p>
            <h2
              className="font-extrabold text-white leading-[1.05]"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              More Than Money —<br />
              <span className="text-blue">Your Time Counts Too</span>
            </h2>
            <p
              className="mt-4 text-[15px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Partner with us, volunteer your expertise, or sponsor a scholar
              directly. Every form of support moves us closer to a generation of
              purpose-driven leaders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-bold text-[12px] tracking-[0.15em] uppercase text-ink transition-colors duration-200"
              style={{ background: "var(--color-blue)" }}
            >
              Get Involved
            </Link>
            <Link
              href="/apply"
              className="inline-block px-10 py-4 font-bold text-[12px] tracking-[0.15em] uppercase text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Apply to a Programme
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
