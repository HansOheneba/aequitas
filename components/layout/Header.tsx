"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

/* ── Mega menu data ─────────────────────────────────────────────── */
const aboutMenu = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    description: "Our mission, vision & governance",
  },
  {
    label: "Our Story",
    href: "/#about",
    description: "How Aequitas came to be",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "Moments that define our mission",
  },
  {
    label: "Our Team",
    href: "/team",
    description: "Meet the people behind the work",
  },
  {
    label: "Our Partners",
    href: "/#partners",
    description: "Organisations we collaborate with",
  },
];

const programsMenu = [
  {
    label: "The Aequitas Experience",
    href: "/programs/aequitas-experience",
    description: "Our flagship immersive leadership program",
  },
  {
    label: "Seasonal Drive",
    href: "/programs/seasonal-drive",
    description: "Community giving initiatives every season",
  },
  {
    label: "Alumni Form",
    href: "/programs/alumni-form",
    description: "Stay connected with our growing network",
  },
];

type MegaItem = { label: string; href: string; description: string };

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: MegaItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", megaMenu: aboutMenu },
  { label: "Our Programs", megaMenu: programsMenu },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/contact" },
  { label: "2030 Goal", href: "/2030-goal" },
];

/* ── Single row inside mega menu ───────────────────────────────── */
function MegaItem({ item }: { item: MegaItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-start justify-between px-6 py-4 group hover:bg-white/3 transition-colors duration-150 border-b border-white/5 last:border-b-0"
    >
      <div className="flex-1 min-w-0 pr-4">
        <span className="block text-[13px] font-medium text-white/65 group-hover:text-white transition-colors">
          {item.label}
        </span>
        <span className="block text-[11px] text-white/25 mt-0.5 group-hover:text-white/40 transition-colors leading-relaxed">
          {item.description}
        </span>
      </div>
      <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-white/50 transition-colors shrink-0 mt-0.5" />
    </Link>
  );
}

/* ── Desktop MegaMenu dropdown ──────────────────────────────────── */
/*
 * Dead-space fix: the outer wrapper has pt-3 so it starts at top-full
 * (touching the nav bar) and the 12px padding acts as an invisible
 * bridge, keeping the mouse inside this element while crossing the gap.
 * A close-timer (handleLeave) is a second safety net.
 */
function MegaDropdown({
  items,
  visible,
  onEnter,
  onLeave,
}: {
  items: MegaItem[];
  visible: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute top-full left-0 z-50 pt-3"
      style={{ width: 520, pointerEvents: visible ? "auto" : "none" }}
    >
      <div
        className="border border-white/10 overflow-hidden"
        style={{
          background: "var(--color-ink)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 180ms ease, transform 180ms ease",
        }}
      >
        {/* thin top accent */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

        <div className="grid grid-cols-2">
          {/* col divider */}
          <div className="contents">
            {col1.map((item) => (
              <MegaItem key={item.href} item={item} />
            ))}
          </div>
          <div
            className="contents"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
          >
            {col2.map((item) => (
              <MegaItem key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Header ────────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mega menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close mobile menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* dead-space-safe open / close handlers */
  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 260);
  };

  /* background: transparent → frosted dark on scroll OR when mega menu open */
  const hasBg = scrolled || mobileOpen || openMenu !== null;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 300ms ease, border-color 300ms ease",
          background: hasBg ? "rgba(7,9,15,0.96)" : "transparent",
          backdropFilter: hasBg ? "blur(14px)" : "none",
          borderBottom: hasBg
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo-aeq.png"
                alt="Aequitas Foundation"
                width={160}
                height={44}
                className="h-9 w-auto object-contain"
                style={{ width: 'auto', height: '36px' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav ref={navRef} className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                if (item.megaMenu) {
                  const isOpen = openMenu === item.label;
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleEnter(item.label)}
                      onMouseLeave={handleLeave}
                    >
                      <button
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                        className="group flex items-center gap-1.5 px-3.5 py-2 transition-colors duration-200"
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          color: isOpen
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.6)",
                        }}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          className="w-3 h-3 transition-transform duration-200"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                            color: isOpen
                              ? "rgba(255,255,255,0.5)"
                              : "rgba(255,255,255,0.3)",
                          }}
                        />
                      </button>
                      <MegaDropdown
                        items={item.megaMenu}
                        visible={isOpen}
                        onEnter={() => handleEnter(item.label)}
                        onLeave={handleLeave}
                      />
                    </div>
                  );
                }

                const is2030 = item.label === "2030 Goal";
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="px-3.5 py-2 transition-colors duration-200"
                    style={{
                      fontSize: 13,
                      fontWeight: is2030 ? 600 : 500,
                      letterSpacing: "0.04em",
                      color: is2030
                        ? "var(--color-blue)"
                        : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA — Apply button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/apply"
                className="text-[12px] font-semibold tracking-[0.12em] uppercase px-5.5 py-2.25 bg-blue text-ink border border-blue hover:bg-transparent hover:text-blue hover:border-blue/40 transition-all duration-200"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden max-h-[80vh] overflow-y-auto"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: "var(--color-ink)",
            }}
          >
            <nav className="px-5 py-5 flex flex-col">
              {navItems.map((item) => {
                if (item.megaMenu) {
                  const expanded = mobileExpanded === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        className="w-full flex items-center justify-between py-4 transition-colors"
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          letterSpacing: "0.05em",
                          color: expanded
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.55)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        aria-expanded={expanded}
                      >
                        {item.label}
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-200"
                          style={{
                            transform: expanded
                              ? "rotate(180deg)"
                              : "rotate(0)",
                            color: expanded
                              ? "#00b4d8"
                              : "rgba(255,255,255,0.3)",
                          }}
                        />
                      </button>
                      {expanded && (
                        <div
                          className="flex flex-col"
                          style={{
                            borderLeft: "1px solid rgba(0,180,216,0.25)",
                            marginLeft: 4,
                            paddingLeft: 16,
                            paddingTop: 6,
                            paddingBottom: 6,
                          }}
                        >
                          {item.megaMenu.map((sub, i) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="flex flex-col py-3 group transition-colors"
                              style={{
                                borderBottom:
                                  i < item.megaMenu!.length - 1
                                    ? "1px solid rgba(255,255,255,0.04)"
                                    : "none",
                              }}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span
                                className="text-white/60 group-hover:text-white transition-colors"
                                style={{ fontSize: 13 }}
                              >
                                {sub.label}
                              </span>
                              <span
                                className="text-white/25 mt-0.5"
                                style={{ fontSize: 11 }}
                              >
                                {sub.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const is2030 = item.label === "2030 Goal";
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="py-4 transition-colors"
                    style={{
                      fontSize: 13,
                      fontWeight: is2030 ? 600 : 500,
                      letterSpacing: "0.05em",
                      color: is2030
                        ? "var(--color-blue)"
                        : "rgba(255,255,255,0.55)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-5 mt-2">
                <Link
                  href="/apply"
                  className="flex items-center justify-center w-full py-3.5 text-[12px] font-semibold tracking-[0.12em] uppercase bg-blue text-ink border border-blue transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
