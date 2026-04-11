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

const partners = [
  { name: "African Development Bank", category: "Finance", since: "2019" },
  { name: "Tony Elumelu Foundation", category: "Entrepreneurship", since: "2020" },
  { name: "MasterCard Foundation", category: "Education", since: "2018" },
  { name: "Ashesi University", category: "Academia", since: "2021" },
  { name: "GIZ Ghana", category: "Development", since: "2019" },
  { name: "UNDP Africa", category: "Policy", since: "2022" },
  { name: "Stanbic Bank", category: "Finance", since: "2020" },
  { name: "MEST Africa", category: "Technology", since: "2021" },
];

export default function Partners() {
  const { elRef: headerRef, visible: headerVisible } = useReveal();
  const { elRef: gridRef, visible: gridVisible } = useReveal();
  const { elRef: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <section id="partners">
      {/* Header + grid */}
      <div
        className="bg-white px-6 md:px-16 lg:px-24"
        style={{ paddingTop: "clamp(72px, 10vw, 120px)", paddingBottom: "clamp(72px, 10vw, 120px)" }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex items-end justify-between gap-8 mb-16 flex-wrap transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3">
              Our Partners
            </p>
            <h2
              className="font-extrabold text-dark leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "var(--font-montserrat)" }}
            >
              Built with the<br />
              <span className="text-blue">Best in Africa</span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-gray-500 max-w-md">
            We collaborate with institutions that share our conviction: that
            talent is equally distributed, but opportunity is not.
          </p>
        </div>

        {/* Partner grid */}
        <div
          ref={gridRef}
          className={`grid gap-px bg-gray-200 border border-gray-200 transition-all duration-700 delay-100 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div
        ref={ctaRef}
        className={`bg-ink relative overflow-hidden flex items-center justify-between gap-8 flex-wrap px-6 md:px-16 lg:px-24 transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ paddingTop: "clamp(48px, 7vw, 80px)", paddingBottom: "clamp(48px, 7vw, 80px)" }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-0 font-black leading-[0.8] select-none pointer-events-none tracking-[-0.03em]"
          style={{
            fontSize: "clamp(80px, 14vw, 160px)",
            color: "rgba(55,197,243,0.03)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          PARTNER
        </div>

        <div className="relative">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-2.5">
            Get Involved
          </p>
          <h3
            className="font-extrabold text-white leading-[1.15]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontFamily: "var(--font-montserrat)" }}
          >
            Become a Partner
          </h3>
          <p className="text-sm text-white/45 mt-2 max-w-xl">
            Join a growing coalition of organisations investing in the next
            generation of African leaders.
          </p>
        </div>

        <Link
          href="/contact"
          className="relative inline-block shrink-0 px-9 py-3.5 bg-blue text-ink text-[12px] font-bold tracking-[0.15em] uppercase no-underline"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="group bg-white px-6 py-7 border-l-[3px] border-l-transparent hover:border-l-blue transition-[border-color] duration-200 cursor-default">
      <p
        className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 group-hover:text-blue transition-colors duration-200 mb-2"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {partner.category} &bull; {partner.since}
      </p>
      <p
        className="text-[15px] font-bold text-dark leading-[1.3]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {partner.name}
      </p>
    </div>
  );
}
