"use client";

import { useEffect, useRef, useState } from "react";

const SDG_GOALS = [
  { num: "4", label: "Quality\nEducation", bg: "bg-[#E5243B]" },
  { num: "8", label: "Decent Work &\nEconomic Growth", bg: "bg-[#A21942]" },
  { num: "10", label: "Reduced\nInequalities", bg: "bg-[#DD1367]" },
  { num: "17", label: "Partnerships\nfor the Goals", bg: "bg-[#19486A]" },
];

// Unsplash direct-source URLs (stable, free, no attribution required for demos)
const IMG_CONCERT =
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80";
// African youth / students / aspiration — warm, golden-hour, hopeful
const IMG_QUOTE =
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000&q=85";

/* ── Arrow icon ───────────────────────────────────────────────────────────── */
function Arrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M2 7.5h11M8.5 3l4.5 4.5L8.5 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Reusable CTA link ────────────────────────────────────────────────────── */
function LinkBtn({
  href = "#",
  light = false,
  children,
}: {
  href?: string;
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase pb-1 border-b w-fit transition-all duration-200
        ${
          light
            ? "text-white/75 border-[#00b4d8] hover:text-[#00b4d8]"
            : "text-[#1a1f2e] border-[#00b4d8] hover:text-[#00b4d8]"
        }`}
    >
      {children}
      <Arrow />
    </a>
  );
}

/* ── Label chip ───────────────────────────────────────────────────────────── */
function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[10px] font-medium tracking-[0.2em] uppercase mb-4 ${light ? "text-[#90e0ef]" : "text-[#00b4d8]"}`}
    >
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function AequitasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [sdgIn, setSdgIn] = useState(false);
  const [statIn, setStatIn] = useState(false);

  useEffect(() => {
    // Generic fade-up: any element with data-fade attr
    const fadeEls = ref.current?.querySelectorAll("[data-fade]") ?? [];
    const fadeIo = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.12 },
    );
    fadeEls.forEach((el) => fadeIo.observe(el));

    // SDG tiles
    const sdgEl = ref.current?.querySelector("[data-sdg]");
    const sdgIo = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSdgIn(true);
      },
      { threshold: 0.2 },
    );
    if (sdgEl) sdgIo.observe(sdgEl);

    // Stats row
    const statEl = ref.current?.querySelector("[data-stats]");
    const statIo = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatIn(true);
      },
      { threshold: 0.2 },
    );
    if (statEl) statIo.observe(statEl);

    return () => {
      fadeIo.disconnect();
      sdgIo.disconnect();
      statIo.disconnect();
    };
  }, []);

  const fadeStyle = {
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  } as React.CSSProperties;

  return (
    <>
      <section
        ref={ref}
        className="bg-[#f8f7f4] text-[#1a1f2e] overflow-hidden"
      >
        {/* ════════════════ ROW 1 — three columns ═══════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-200">
          {/* Col 1 — Aequitas Experience */}
          <div className="relative bg-white px-12 py-20 flex flex-col justify-center lg:border-r border-gray-200 overflow-hidden">
            {/* Animated left accent bar */}
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00b4d8] origin-top scale-y-0 transition-transform duration-700 delay-300 data-[fade]:scale-y-100" />

            <Label>Our Programme</Label>

            <h2
              data-fade
              style={{
                ...fadeStyle,
                transitionDelay: "0.05s",
              }}
              className="text-4xl xl:text-[42px] font-semibold leading-[1.12] mb-5"
            >
              The Aequitas
              <br />
              Experience
            </h2>

            <p
              data-fade
              style={{ ...fadeStyle, transitionDelay: "0.15s" }}
              className="text-[15px] leading-[1.85] text-gray-400 font-light mb-10 max-w-[280px]"
            >
              A holistic programme contributing to the lifelong success of our
              youth through a resilience‑focused approach.
            </p>

            <div data-fade style={{ ...fadeStyle, transitionDelay: "0.22s" }}>
              <LinkBtn>Continue Reading</LinkBtn>
            </div>
          </div>

          {/* Col 2 — SDG Alignment */}
          <div className="bg-[#0d1117] px-10 py-20 flex flex-col justify-center lg:border-r border-white/10">
            <Label light>United Nations</Label>
            <h2 className="text-3xl xl:text-[34px] font-light text-white leading-[1.2] mb-8">
              Our SDG Goal
              <br />
              Alignment
            </h2>

            <div data-sdg className="grid grid-cols-2 gap-2.5">
              {SDG_GOALS.map((g, i) => (
                <div
                  key={g.num}
                  className={`${g.bg} rounded p-3.5 flex items-start gap-2.5 cursor-default hover:brightness-110 transition-all duration-500`}
                  style={{
                    opacity: sdgIn ? 1 : 0,
                    transform: sdgIn ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <span className="text-[27px] font-semibold text-white/90 leading-none min-w-[26px]">
                    {g.num}
                  </span>
                  <span className="text-[9.5px] font-medium tracking-wide uppercase text-white/85 leading-[1.45] pt-0.5 whitespace-pre-line">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Gifts for Christ (image bg) */}
          <div className="relative overflow-hidden flex flex-col justify-end px-10 py-16 min-h-[380px] bg-[#0d1117] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-in-out group-hover:scale-105"
              style={{
                backgroundImage: `url('${IMG_CONCERT}')`,
                opacity: 0.38,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/95 via-[#0d1117]/50 to-transparent" />

            <div className="relative z-10">
              <Label light>Annual Event</Label>
              <h2 className="text-3xl xl:text-[36px] font-light text-white leading-[1.2] mb-3">
                Gifts for Christ
              </h2>
              <p className="text-[14px] leading-[1.75] text-white/60 font-light mb-7 max-w-[260px]">
                An annual musical concert raising funds to improve the
                employability of youth across Africa.
              </p>
              <LinkBtn light>Learn More</LinkBtn>
            </div>
          </div>
        </div>

        {/* ════════════════ ROW 2 — quote + mission ═════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Quote panel — full-bleed Unsplash image */}
          <div className="relative overflow-hidden min-h-[500px] flex items-end group">
            {/* Unsplash: warm golden-hour youth / Africa / aspiration */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url('${IMG_QUOTE}')` }}
            />
            {/* Rich dark gradient so text is always legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/55 to-transparent" />
            {/* Subtle cyan blush at base */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#00b4d8]/08 to-transparent" />

            <div className="relative z-10 px-12 lg:px-14 py-14">
              {/* Giant decorative quote mark */}
              <span className="block text-[90px] leading-none text-[#00b4d8] opacity-30 -mb-5 select-none">
                &ldquo;
              </span>

              <blockquote
                data-fade
                style={{
                  ...fadeStyle,
                  transitionDelay: "0.1s",
                }}
                className="text-[38px] xl:text-[50px] font-light italic text-white leading-[1.15] mb-7"
              >
                He is truly{" "}
                <span className="font-semibold not-italic text-[#00b4d8]">
                  great
                </span>
                <br />
                who hath a<br />
                great charity.
              </blockquote>

              {/* Thin cyan rule */}
              <span
                data-fade
                style={{ ...fadeStyle, transitionDelay: "0.35s" }}
                className="block w-10 h-[2px] bg-[#00b4d8]"
              />
            </div>
          </div>

          {/* Mission panel */}
          <div className="bg-[#f8f7f4] px-12 lg:px-16 py-20 flex flex-col justify-center lg:border-l border-gray-200">
            <Label>Who We Are</Label>

            <h3
              data-fade
              style={{
                ...fadeStyle,
                transitionDelay: "0.05s",
              }}
              className="text-3xl xl:text-[38px] font-semibold leading-[1.2] mb-8"
            >
              Helping graduates
              <br />
              maximise their potential
            </h3>

            {/* Stats */}
            <div data-stats className="flex gap-10 mb-10">
              {[
                { num: "2018", label: "Founded" },
                { num: "500+", label: "Youth Reached" },
                { num: "4", label: "UN SDG Goals" },
              ].map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    opacity: statIn ? 1 : 0,
                    transform: statIn ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <div className="text-[38px] font-semibold text-[#1a1f2e] leading-none">
                    {s.num}
                  </div>
                  <div className="text-[11px] font-light text-gray-400 tracking-wide mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              data-fade
              style={{ ...fadeStyle, transitionDelay: "0.12s" }}
              className="text-[15px] leading-[1.9] text-gray-400 font-light mb-10 max-w-[420px]"
            >
              Founded in 2018 as a faith‑based non‑profit, we believe suitable
              training within a safe and enabling environment gives every young
              person an equal opportunity to be instrumental in Africa&apos;s
              economic transformation.
            </p>

            <div
              data-fade
              style={{ ...fadeStyle, transitionDelay: "0.2s" }}
              className="flex flex-wrap gap-4"
            >
              <LinkBtn href="/who-we-are">Continue Reading</LinkBtn>
              <LinkBtn href="/team">Meet the Team</LinkBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
