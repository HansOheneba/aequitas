import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Aequitas Foundation",
  description: "Upcoming and past events hosted by Aequitas Foundation.",
};

// ── Recurring annual events — projected to 2026 editions ──────────────────
const FEATURED = {
  day: "19",
  month: "Apr",
  year: "2026",
  title: "Gifts for Christ Concert 2026",
  location: "Y97, Nii Martey Tsuru St., East Airport, Accra",
  type: "Concert",
  description:
    "Our flagship annual concert — an evening of live music, celebration, and community that raises vital funds for youth development programmes across Ghana. Every seat filled is a future changed.",
  cta: "Attend",
  img: "/gallery/2024gifts4christ/MG_8938.webp",
};

const UPCOMING = [
  {
    day: "14",
    month: "Jun",
    year: "2026",
    title: "Aequitas Alumni Forum 2026",
    location: "Y97, Nii Martey Tsuru St., East Airport, Accra",
    type: "Alumni",
    description:
      "An annual gathering for Aequitas graduates — celebrating growth, sharing stories, and shaping what comes next for the Foundation and its community.",
    cta: "Attend",
    img: "/gallery/aeq-expereince/MG_0924-scaled.webp",
  },
  {
    day: "07",
    month: "Sep",
    year: "2026",
    title: "Aequitas Experience — Cohort 12",
    location: "Y97, Nii Martey Tsuru St., East Airport, Accra",
    type: "Programme",
    description:
      "Applications are open for the next cohort of our flagship 12-week youth development programme. Secure your place in a transformative experience.",
    cta: "Apply Now",
    img: "/gallery/aeq-expereince/MG_1044-scaled.webp",
  },
  {
    day: "20",
    month: "Dec",
    year: "2026",
    title: "Seasonal Drive — Christmas 2026",
    location: "Multiple Communities, Accra",
    type: "Drive",
    description:
      "Our annual Christmas distribution — bringing gifts, school supplies, and community care to children in under-resourced areas across Accra.",
    cta: "Volunteer",
    img: "/gallery/seasons-drive/DSC_6067.webp",
  },
];

// ── Real past events (chronological, most recent first) ───────────────────
const PAST = [
  {
    title: "Aequitas Experience — Cohort 11",
    date: "Feb 10 – Apr 25, 2025",
    location: "East Airport, Accra",
    type: "Programme",
  },
  {
    title: "Gifts for Christ Concert 2025",
    date: "Apr 20, 2025",
    location: "East Airport, Accra",
    type: "Concert",
  },
  {
    title: "Seasonal Drive",
    date: "Jul 12, 2024",
    location: "Accra, Ghana",
    type: "Drive",
  },
  {
    title: "Aequitas Alumni Forum",
    date: "Jun 14, 2024",
    location: "East Airport, Accra",
    type: "Alumni",
  },
  {
    title: "Seasonal Drive",
    date: "Jan 18, 2024",
    location: "Accra, Ghana",
    type: "Drive",
  },
  {
    title: "Gifts for Christ",
    date: "Jan 18 – Mar 31, 2024",
    location: "Accra, Ghana",
    type: "Concert",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-[#08090f] text-white min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-150 flex items-end">
        {/* BG image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${FEATURED.img}')` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#08090f]/55" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08090f] via-[#08090f]/30 to-transparent" />

        {/* Top label bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 lg:px-24 pt-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8]">
            Aequitas Foundation · Events
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            {FEATURED.year}
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-24 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#00b4d8] border border-[#00b4d8]/30 px-3 py-1">
                {FEATURED.type}
              </span>
              <span className="text-white/30 text-[12px]">
                {FEATURED.day} {FEATURED.month} {FEATURED.year} ·{" "}
                {FEATURED.location}
              </span>
            </div>

            <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight mb-6">
              {FEATURED.title}
            </h1>
            <p className="text-white/55 text-[clamp(0.95rem,1.5vw,1.15rem)] leading-relaxed max-w-120 mb-10">
              {FEATURED.description}
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#0099b8] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-4 transition-colors duration-200"
              >
                {FEATURED.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="#upcoming"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 hover:text-white transition-colors duration-200"
              >
                All Events ↓
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative date badge */}
        <div className="absolute right-8 md:right-16 lg:right-24 bottom-16 md:bottom-24 text-right hidden md:block">
          <div className="text-[clamp(4rem,8vw,7rem)] font-black leading-none tabular-nums text-white/6">
            {FEATURED.day}
          </div>
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/20">
            {FEATURED.month} {FEATURED.year}
          </div>
        </div>
      </section>

      {/* ── Upcoming events grid ──────────────────────────────────────────── */}
      <section id="upcoming" className="px-8 md:px-16 lg:px-24 pt-20 pb-10">
        <div className="flex items-end justify-between mb-12 pb-6 border-b border-white/6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-3">
              Coming Up
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight">
              Upcoming
              <br />
              <span className="text-white/20">Events</span>
            </h2>
          </div>
          <span className="text-[clamp(4rem,8vw,7rem)] font-black leading-none text-white/4 tabular-nums select-none">
            0{UPCOMING.length + 1}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {UPCOMING.map((ev, i) => (
            <div
              key={i}
              className="group relative bg-[#08090f] overflow-hidden flex flex-col min-h-105"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ease-in-out group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url('${ev.img}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#08090f]" />
                <div className="absolute inset-0 bg-[#08090f]/30" />
                {/* Type badge */}
                <span className="absolute top-4 left-5 text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-[#00b4d8]/20 backdrop-blur-sm border border-[#00b4d8]/25 px-2.5 py-1">
                  {ev.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pt-5 pb-7">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[clamp(2rem,3vw,2.8rem)] font-black leading-none tabular-nums text-white/90">
                    {ev.day}
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      {ev.month}
                    </div>
                    <div className="text-[9px] text-white/20 tracking-wide">
                      {ev.year}
                    </div>
                  </div>
                </div>
                <h3 className="text-[1.05rem] font-bold leading-snug mb-2 group-hover:text-blue transition-colors duration-300">
                  {ev.title}
                </h3>
                <p className="text-[13px] text-white/35 mb-1 tracking-wide">
                  {ev.location}
                </p>
                <p className="text-[13px] text-white/40 leading-relaxed mb-6 flex-1">
                  {ev.description}
                </p>
                <Link
                  href="/#contact"
                  className="group/btn inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#00b4d8] border-b border-[#00b4d8]/25 pb-1 hover:border-[#00b4d8] transition-all duration-200 w-fit"
                >
                  {ev.cta}
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Past events archive ───────────────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-24 pt-16 pb-24">
        <div className="flex items-center gap-6 mb-10 pb-6 border-b border-white/6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-blue">
            Archive
          </p>
          <div className="h-px flex-1 bg-white/6" />
          <span className="text-[10px] text-white/20 tracking-wide">
            {PAST.length} Events
          </span>
        </div>

        <div>
          {PAST.map((ev, i) => (
            <div
              key={i}
              className="group flex items-center gap-6 py-5 border-b border-white/4 hover:bg-white/2 transition-colors duration-200 px-2 -mx-2 rounded"
            >
              <span className="shrink-0 text-[9px] font-bold tracking-widest text-white/15 w-5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[15px] text-white/75 group-hover:text-white transition-colors duration-200 truncate">
                  {ev.title}
                </p>
                <p className="text-[12px] text-white/25 mt-0.5">
                  {ev.location}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-5">
                <span className="text-[10px] tracking-[0.15em] uppercase text-blue/50 hidden sm:block">
                  {ev.type}
                </span>
                <span className="text-[12px] text-white/25 font-medium tabular-nums">
                  {ev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-16 text-center">
          <p className="text-white/20 text-[14px] mb-5">
            Want to be part of what&apos;s next?
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 bg-transparent border border-white/15 hover:border-[#00b4d8]/50 text-white/50 hover:text-[#00b4d8] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300"
          >
            Get in Touch
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
