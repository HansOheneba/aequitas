"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: "100",
    suffix: "+",
    label: "Hours of Learning",
    sub: "Experiential business learning per programme",
    raw: 100,
  },
  {
    value: "8",
    suffix: "",
    label: "Cohorts Delivered",
    sub: "Since inception in 2021",
    raw: 8,
  },
  {
    value: "118",
    suffix: "+",
    label: "Programme Graduates",
    sub: "Across all Aequitas Experience cohorts",
    raw: 118,
  },
  {
    value: "60",
    suffix: "%",
    label: "Female Participants",
    sub: "Building gender equity in leadership",
    raw: 60,
  },
  {
    value: "12",
    suffix: "–24",
    label: "Participants Per Cohort",
    sub: "Intentionally small for maximum impact",
    raw: 12,
  },
  {
    value: "5",
    suffix: "",
    label: "Years of Impact",
    sub: "Operating continuously since 2021",
    raw: 5,
  },
];

const MILESTONES = [
  {
    year: "2021",
    title: "Founded",
    body: "Aequitas Foundation launched its first cohort of the Aequitas Experience — 12 to 24 young people, one bold conviction: that every youth deserves a fair start.",
  },
  {
    year: "2022",
    title: "Building Momentum",
    body: "Cohorts 2 and 3 completed, deepening our work experience partnerships and refining the programme model based on graduate feedback.",
  },
  {
    year: "2023",
    title: "Community Events",
    body: "Launched the Seasonal Drive — a twice-yearly programme bringing essential resources to children in under-resourced communities at Christmas and Easter.",
  },
  {
    year: "2024",
    title: "Alumni & Culture",
    body: "Held the inaugural Aequitas Alumni Forum and the Gifts for Christ Concert, establishing two annual touchstones for our growing community.",
  },
  {
    year: "2025",
    title: "Cohort 11 Complete",
    body: "With 118+ graduates across all cohorts and 60% female participation, the Aequitas Experience continues to set the standard for youth development in Ghana.",
  },
];

function Counter({
  raw,
  suffix,
  prefix = "",
  decimal = false,
  trigger,
}: {
  raw: number;
  suffix: string;
  prefix?: string;
  decimal?: boolean;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1400;
    const steps = 60;
    const inc = raw / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= raw) {
        setDisplay(raw);
        clearInterval(timer);
      } else {
        setDisplay(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [trigger, raw]);

  const formatted = decimal
    ? display.toFixed(1)
    : Math.round(display).toLocaleString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [timelineStep, setTimelineStep] = useState(-1);

  useEffect(() => {
    const statsObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsVisible(true);
          statsObs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (statsRef.current) statsObs.observe(statsRef.current);

    const tlItems = timelineRef.current?.querySelectorAll("[data-tl]") ?? [];
    tlItems.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimelineStep((s) => Math.max(s, i));
            obs.disconnect();
          }
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
    });

    return () => statsObs.disconnect();
  }, []);

  return (
    <section id="impact" className="bg-white text-[#0a0a0a] overflow-hidden">
      <div className="flex bg-[#05080f] items-end justify-between px-8 md:px-16 lg:px-24 pt-20 pb-0 border-b border-white/6">
        <div className="pb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#00b4d8] mb-3">
            Our Impact
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[0.95] text-white tracking-tight">
            Numbers That
            <br />
            <span className="text-blue">Tell a Story</span>
          </h2>
        </div>
        <span
          className="text-[clamp(5rem,12vw,10rem)] font-black leading-none pb-4 select-none tabular-nums"
          style={{ color: "rgba(255,255,255,0.03)" }}
          aria-hidden="true"
        >
          {new Date().getFullYear()}
        </span>
      </div>

      {/* ── Stats grid ──────────────────────────────────────────────────── */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-3 border-b border-white/6 bg-[#05080f]"
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="group relative px-8 md:px-12 py-12 border-b border-r border-white/6 last:border-r-0 md:odd:border-r even:border-r-0 md:even:border-r overflow-hidden"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.7s ease ${i * 90}ms, transform 0.7s ease ${i * 90}ms`,
            }}
          >
            {/* Hover cyan blush */}
            <div className="absolute inset-0 bg-[#00b4d8]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-[clamp(2.5rem,4vw,4rem)] font-black leading-none tabular-nums text-white mb-2 tracking-tight">
                <Counter
                  raw={s.raw}
                  suffix={s.suffix}
                  prefix=""
                  decimal={s.value.includes(".")}
                  trigger={statsVisible}
                />
              </div>
              <div className="w-6 h-px bg-[#00b4d8] mb-3 transition-all duration-300 group-hover:w-10" />
              <p className="text-[14px] font-semibold text-white/80 mb-1">
                {s.label}
              </p>
              <p className="text-[12px] text-white/30 leading-snug">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="px-8 md:px-16 lg:px-24 pt-20 pb-24">
        <div className="flex items-end gap-8 mb-14 pb-6 border-b border-black/10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#0077b6] mb-3">
              Milestones
            </p>
            <h3 className="text-[clamp(1.8rem,3vw,3rem)] font-bold leading-none tracking-tight">
              Our Journey
            </h3>
          </div>
          <div className="h-px flex-1 bg-black/10 mb-2" />
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-22 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
          <div
            className="absolute left-22 top-0 w-px bg-[#00b4d8] hidden md:block transition-all duration-700 ease-out"
            style={{
              height:
                timelineStep >= 0
                  ? `${((timelineStep + 1) / MILESTONES.length) * 100}%`
                  : "0%",
            }}
          />

          <ul className="space-y-0">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                data-tl
                className="group relative flex items-start gap-8 md:gap-12 py-8 border-b border-black/5 last:border-0"
                style={{
                  opacity: i <= timelineStep ? 1 : 0,
                  transform:
                    i <= timelineStep ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                <div className="shrink-0 w-20 text-right hidden md:block">
                  <span className="text-[clamp(0.85rem,1.2vw,1rem)] font-black tracking-widest tabular-nums text-black/30 group-hover:text-[#0077b6] transition-colors duration-300">
                    {m.year}
                  </span>
                </div>

                <div className="hidden md:flex shrink-0 w-3 h-3 rounded-full border-2 border-black/20 group-hover:border-[#00b4d8] bg-white mt-1 relative z-10 transition-all duration-300 group-hover:bg-[#00b4d8]/20" />

                <div className="flex-1 min-w-0">
                  <span className="block md:hidden text-[10px] font-black tracking-widest text-[#0077b6] mb-1">
                    {m.year}
                  </span>
                  <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-black/40 group-hover:text-[#00b4d8] transition-colors duration-300 mb-1.5">
                    {m.title}
                  </p>
                  <p className="text-[15px] text-black/60 leading-[1.7] max-w-130">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
