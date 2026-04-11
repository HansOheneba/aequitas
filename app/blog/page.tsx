import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Aequitas Foundation",
  description:
    "Career advice, graduate guides, and insights from the Aequitas Foundation team.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main style={{ background: "#07090f" }}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(56px, 8vw, 80px)",
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
            lineHeight: 1,
          }}
        >
          BLOG
        </div>

        <div className="relative">
          <p
            className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
            style={{
              color: "var(--color-blue)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            Insights & Advice
          </p>
          <h1
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              lineHeight: 1.0,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            The Aequitas
            <br />
            <span style={{ color: "var(--color-blue)" }}>Blog</span>
          </h1>
          <p
            className="mt-5 text-[15px] leading-[1.85] max-w-lg"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Practical career advice, graduate guides, and stories from the
            Aequitas Foundation community. Straight to the point. No fluff.
          </p>
          <div
            className="w-12 mt-7"
            style={{ height: 3, background: "var(--color-blue)" }}
          />
        </div>
      </section>

      {/* ── Featured Post ──────────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{
          paddingBottom: "clamp(56px, 7vw, 80px)",
        }}
      >
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid lg:grid-cols-2 gap-0"
          style={{ background: "#0d1017", textDecoration: "none" }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(7,9,15,0.25)" }}
            />
            <div
              className="absolute top-6 left-6 px-3 py-1.5"
              style={{ background: "var(--color-blue)" }}
            >
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{
                  color: "#07090f",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-14"
            style={{
              paddingTop: "clamp(36px, 5vw, 56px)",
              paddingBottom: "clamp(36px, 5vw, 56px)",
            }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{
                color: "var(--color-blue)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              {featured.category}
            </span>
            <h2
              className="font-extrabold text-white leading-tight mb-4 transition-colors duration-200 group-hover:text-blue"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {featured.title}
            </h2>
            <p
              className="text-[14px] leading-[1.8] mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span
                className="text-[11px] tracking-[0.12em]"
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {featured.date}
              </span>
              <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 11 }}>
                ·
              </span>
              <span
                className="text-[11px] tracking-[0.12em]"
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {featured.readTime}
              </span>
            </div>
            <div
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: "var(--color-blue)" }}
            >
              Read Article
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Rest of Posts ──────────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{
          paddingBottom: "clamp(72px, 10vw, 112px)",
        }}
      >
        <div className="mb-10">
          <p
            className="text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            All Articles
          </p>
          <div
            className="w-6 mt-2"
            style={{ height: 1, background: "rgba(255,255,255,0.1)" }}
          />
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
              style={{ background: "#07090f", textDecoration: "none" }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(7,9,15,0.3)" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pt-6 pb-8">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{
                    color: "var(--color-blue)",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {post.category}
                </span>
                <h3
                  className="font-bold text-white leading-tight mb-3 flex-1 transition-colors duration-200 group-hover:text-blue"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.75] mb-5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span
                    className="text-[11px]"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {post.date}
                  </span>
                  <span
                    style={{ color: "rgba(255,255,255,0.1)", fontSize: 11 }}
                  >
                    ·
                  </span>
                  <span
                    className="text-[11px]"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="transition-all duration-300 group-hover:opacity-100 opacity-0"
                style={{ height: 2, background: "var(--color-blue)" }}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
