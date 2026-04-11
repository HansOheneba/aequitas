import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost, type BlogBlock } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Aequitas Foundation Blog`,
    description: post.excerpt,
  };
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={i}
          style={{
            fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: 1.85,
            color: "#374151",
            marginBottom: "1.5rem",
          }}
        >
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2
          key={i}
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
            fontWeight: 700,
            color: "#0a0e1a",
            fontFamily: "var(--font-montserrat)",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul
          key={i}
          style={{
            listStyle: "none",
            padding: 0,
            margin: "1.5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {block.items.map((item, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  border: "1.5px solid var(--color-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: "var(--color-blue)",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                ✓
              </span>
              <span
                style={{ fontSize: "15px", lineHeight: 1.7, color: "#374151" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={i}
          style={{
            borderLeft: "3px solid var(--color-blue)",
            paddingLeft: "1.5rem",
            margin: "2.5rem 0",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "#1f2937",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
            }}
          >
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite
              style={{
                display: "block",
                marginTop: "0.5rem",
                fontSize: "12px",
                fontStyle: "normal",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-blue)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "video":
      return (
        <div key={i} style={{ margin: "2.5rem 0" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              background: "#07090f",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${block.embedId}`}
              title={block.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
          {block.caption && (
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginTop: "0.75rem",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {block.caption}
            </p>
          )}
        </div>
      );

    case "image":
      return (
        <div key={i} style={{ margin: "2.5rem 0" }}>
          <div
            style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}
          >
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginTop: "0.75rem",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {block.caption}
            </p>
          )}
        </div>
      );

    case "link":
      return (
        <div
          key={i}
          style={{
            margin: "2rem 0",
            padding: "1.25rem 1.5rem",
            background: "#f9fafb",
            borderLeft: "3px solid var(--color-blue)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              marginBottom: "0.35rem",
            }}
          >
            {block.description}
          </p>
          <Link
            href={block.href}
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--color-blue)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            {block.label}
          </Link>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{ background: "#07090f" }}
        className="relative overflow-hidden"
      >
        <div
          className="relative"
          style={{ aspectRatio: "21/9", minHeight: 320, maxHeight: 520 }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7,9,15,0.4) 0%, rgba(7,9,15,0.85) 100%)",
            }}
          />

          {/* Content overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 md:px-16 lg:px-24"
            style={{ paddingBottom: "clamp(36px, 5vw, 60px)" }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/blog"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Courier New', monospace",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>
                /
              </span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-blue)",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {post.category}
              </span>
            </div>

            <h1
              className="font-extrabold text-white"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                lineHeight: 1.1,
                fontFamily: "var(--font-montserrat)",
                maxWidth: 800,
              }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-4">
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.1em",
                }}
              >
                {post.date}
              </span>
              <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 11 }}>
                ·
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.1em",
                }}
              >
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <section style={{ background: "white" }}>
        <div
          className="px-6 md:px-16 lg:px-0"
          style={{
            maxWidth: 720,
            margin: "0 auto",
            paddingTop: "clamp(48px, 6vw, 80px)",
            paddingBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
          {/* Excerpt / intro */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#1f2937",
              fontWeight: 500,
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            {post.excerpt}
          </p>

          {/* Content blocks */}
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </section>

      {/* ── More Articles ─────────────────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <section
          style={{
            background: "#07090f",
            paddingTop: "clamp(56px, 7vw, 88px)",
            paddingBottom: "clamp(56px, 7vw, 88px)",
          }}
          className="px-6 md:px-16 lg:px-24"
        >
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "'Courier New', monospace",
                  marginBottom: 8,
                }}
              >
                Keep Reading
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.1,
                }}
              >
                More Articles
              </h2>
            </div>
            <Link
              href="/blog"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-blue)",
                textDecoration: "none",
              }}
            >
              View All →
            </Link>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col"
                style={{ background: "#07090f", textDecoration: "none" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(7,9,15,0.3)" }}
                  />
                </div>
                <div className="flex flex-col flex-1 px-6 pt-5 pb-7">
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-blue)",
                      fontFamily: "'Courier New', monospace",
                      marginBottom: 8,
                    }}
                  >
                    {p.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "var(--font-montserrat)",
                      lineHeight: 1.3,
                      marginBottom: 8,
                      transition: "color 0.2s",
                    }}
                    className="group-hover:text-blue"
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "'Courier New', monospace",
                      marginTop: "auto",
                    }}
                  >
                    {p.readTime}
                  </span>
                </div>
                <div
                  className="transition-all duration-300 group-hover:opacity-100 opacity-0"
                  style={{ height: 2, background: "var(--color-blue)" }}
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
