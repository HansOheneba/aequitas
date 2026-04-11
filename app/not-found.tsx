import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-8"
      style={{ background: "var(--color-ink)" }}
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/aeq-expereince/MG_0816-scaled.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(7,9,15,0.88)" }}
        />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(55,197,243,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(55,197,243,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Giant 404 ghost watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontSize: "clamp(180px, 35vw, 500px)",
          fontWeight: 900,
          fontFamily: "var(--font-montserrat)",
          color: "rgba(55,197,243,0.04)",
          letterSpacing: "-0.06em",
          lineHeight: 1,
        }}
      >
        404
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Logo */}
        <Image
          src="/logo-aeq.png"
          alt="Aequitas Foundation"
          width={48}
          height={48}
          style={{
            width: "auto",
            height: "40px",
            marginBottom: 40,
            opacity: 0.7,
          }}
        />

        {/* Eyebrow */}
        <p
          className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--color-blue)" }}
        >
          Page Not Found
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold text-white leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          This Page Has
          <br />
          <span style={{ color: "var(--color-blue)" }}>Moved On</span>
        </h1>

        {/* Divider */}
        <div
          className="mb-8"
          style={{ width: 40, height: 2, background: "var(--color-blue)" }}
        />

        {/* Subtext */}
        <p
          className="text-[15px] leading-[1.85] mb-12"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to something that matters.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 text-center"
            style={{
              background: "var(--color-blue)",
              color: "var(--color-ink)",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 font-bold text-[11px] tracking-[0.18em] uppercase text-white transition-all duration-200 text-center"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Quick nav */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: "About", href: "/who-we-are" },
            { label: "Programs", href: "/programs/aequitas-experience" },
            { label: "Gallery", href: "/gallery" },
            { label: "Team", href: "/team" },
            { label: "Donate", href: "/donate" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
