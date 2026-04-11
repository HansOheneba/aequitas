import Link from "next/link";

const EVENTS = [
  {
    index: "01",
    day: "19",
    month: "Apr",
    year: "2026",
    title: "Gifts for Christ Concert 2026",
    location: "Y97, Nii Martey Tsuru St., East Airport, Accra",
    type: "Concert",
    img: "/gallery/2024gifts4christ/MG_8938.webp",
  },
  {
    index: "02",
    day: "14",
    month: "Jun",
    year: "2026",
    title: "Aequitas Alumni Forum 2026",
    location: "East Airport, Accra",
    type: "Alumni",
    img: "/gallery/aeq-expereince/MG_0816-scaled.webp",
  },
  {
    index: "03",
    day: "20",
    month: "Dec",
    year: "2026",
    title: "Seasonal Drive — Christmas 2026",
    location: "Multiple Communities, Accra",
    type: "Drive",
    img: "/gallery/seasons-drive/DSC_6067.webp",
  },
];

export default function EventsPreview() {
  return (
    <section
      id="events-preview"
      className="bg-[#08090f] text-white overflow-hidden"
    >
      {/* ── Header bar ────────────────────────────────────────────────── */}
      <div className="flex items-end justify-between px-8 md:px-16 lg:px-24 pt-20 pb-0 border-b border-white/6">
        <div className="pb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-3">
            Mark Your Calendar
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
            What&apos;s
            <br />
            <span className="text-blue">On</span>
          </h2>
        </div>
        <div className="pb-12">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-white/40 hover:text-[#00b4d8] transition-colors duration-200"
          >
            View All Events
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* ── Event rows ────────────────────────────────────────────────── */}
      <div>
        {EVENTS.map((ev, i) => (
          <Link
            key={i}
            href="/events"
            className="group relative flex items-center gap-6 md:gap-10 px-8 md:px-16 lg:px-24 py-8 md:py-10 border-b border-white/6 overflow-hidden transition-all duration-500 hover:bg-white/6 cursor-pointer"
          >
            {/* Hover image peek — right side */}
            <div
              className="absolute right-0 top-0 bottom-0 w-60 lg:w-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${ev.img}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#08090f] via-[#08090f]/60 to-transparent" />
            </div>

            {/* Index */}
            <span
              className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-white/20 group-hover:text-[#00b4d8]/60 transition-colors duration-300 w-6"
              aria-hidden="true"
            >
              {ev.index}
            </span>

            {/* Date block */}
            <div className="shrink-0 text-center w-14">
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-black leading-none text-white/90 tabular-nums">
                {ev.day}
              </div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-0.5">
                {ev.month} {ev.year}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0" />

            {/* Title + meta */}
            <div className="flex-1 min-w-0 relative z-10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#00b4d8]/70 mb-1.5">
                {ev.type}
              </p>
              <h3 className="text-[clamp(1.1rem,2.5vw,1.75rem)] font-bold leading-snug tracking-tight group-hover:text-[#37c5f3] transition-colors duration-300 truncate">
                {ev.title}
              </h3>
              <p className="text-[13px] text-white/30 mt-1">{ev.location}</p>
            </div>

            {/* Arrow */}
            <div className="shrink-0 relative z-10 w-10 h-10 rounded-full border border-white/10 group-hover:border-[#37c5f3]/40 flex items-center justify-center text-white/20 group-hover:text-[#37c5f3] transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 py-10 flex items-center justify-between">
        <p className="text-white/20 text-[13px] tracking-wide">
          + <span className="text-white/40 font-semibold">4 more events</span>{" "}
          scheduled this year
        </p>
        <Link
          href="/events"
          className="group inline-flex items-center gap-2.5 bg-[#00b4d8]/10 hover:bg-[#00b4d8]/20 text-[#00b4d8] text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-3 rounded-full border border-[#00b4d8]/20 hover:border-[#00b4d8]/40 transition-all duration-300"
        >
          See all events
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
