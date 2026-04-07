"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid/staircase1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl">
          {/* SMALL TEXT */}
          <p className="text-white/80 text-lg sm:text-xl mb-4">
            Equipping Africa&apos;s youth to build a fairer
          </p>

          {/* BIG WORD */}
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
            Tomorrow.
          </h1>

          {/* OPTIONAL CTA */}
          <div className="mt-8">
            <Link
              href="#program"
              className="inline-block border border-white text-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
        Scroll
      </div>
    </section>
  );
}
