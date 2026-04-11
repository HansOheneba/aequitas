"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface TabData {
  id: string;
  label: string;
  images: GalleryImage[];
}

const TABS: TabData[] = [
  {
    id: "aeq-experience",
    label: "Aequitas Experience",
    images: [
      {
        src: "/gallery/aeq-expereince/MG_0816-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_0924-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1044-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1046-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1096-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1105-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1427-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1436-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1474-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1526-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1561-scaled.webp",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1610-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1614-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_1637-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9631-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9632-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9643-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9719-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9722-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9734-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9738-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9747-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9767-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9793-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9828-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9836-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9943-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
      {
        src: "/gallery/aeq-expereince/MG_9965-scaled.jpg",
        alt: "Aequitas Experience moment",
      },
    ],
  },
  {
    id: "2024-gifts",
    label: "2024 Gifts for Christ",
    images: [
      {
        src: "/gallery/2024gifts4christ/MG_8677-scaled.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_8679-scaled.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_8938.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_8995.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9016.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9025.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9037.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9075.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9094.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9098.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9112.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9117.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9144.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9164.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9169.jpg",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9171.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9207.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9209.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9226.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9227.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9271.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9379.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9383-scaled.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9385-scaled.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9397-scaled.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9450-scaled.webp",
        alt: "2024 Gifts for Christ",
      },
      {
        src: "/gallery/2024gifts4christ/MG_9466-scaled.webp",
        alt: "2024 Gifts for Christ",
      },
    ],
  },
  {
    id: "seasons-drive",
    label: "Season's Drive",
    images: [
      { src: "/gallery/seasons-drive/DSC_6033.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6042.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6065.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6067.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6089.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6133.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6155.webp", alt: "Season's Drive" },
      { src: "/gallery/seasons-drive/DSC_6230.webp", alt: "Season's Drive" },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.28-PM-1.webp",
        alt: "Season's Drive",
      },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.29-PM-1.webp",
        alt: "Season's Drive",
      },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.29-PM.webp",
        alt: "Season's Drive",
      },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.30-PM-2.webp",
        alt: "Season's Drive",
      },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.31-PM-1.webp",
        alt: "Season's Drive",
      },
      {
        src: "/gallery/seasons-drive/WhatsApp-Image-2024-05-10-at-2.24.32-PM.webp",
        alt: "Season's Drive",
      },
    ],
  },
];

export default function GalleryClient() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const activeTab = TABS[activeTabIndex];
  const images = activeTab.images;

  // Hero reveal
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null,
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  const handleTabSwitch = (index: number) => {
    closeLightbox();
    setActiveTabIndex(index);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          background: "var(--color-ink)",
          paddingTop: "clamp(96px, 14vw, 160px)",
          paddingBottom: "clamp(56px, 8vw, 96px)",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-0 font-extrabold leading-none select-none pointer-events-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(100px, 18vw, 240px)",
            color: "rgba(55,197,243,0.03)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          GALLERY
        </div>

        <div
          className={`relative transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3.5">
            Our Gallery
          </p>
          <h1
            className="font-extrabold text-white max-w-3xl"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.0,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Moments That
            <br />
            <span className="text-blue">Define Us</span>
          </h1>
          <p className="text-[15px] leading-[1.8] text-white/45 max-w-lg mt-5">
            A visual journey through the lives we&apos;ve touched, the
            communities we&apos;ve served, and the milestones we&apos;ve
            celebrated together.
          </p>
          <div
            className="w-12 mt-7"
            style={{ height: 3, background: "var(--color-blue)" }}
          />
        </div>
      </section>

      {/* ── Tab Bar ── */}
      <div
        className="sticky top-16 z-30 border-b"
        style={{
          background: "rgba(7,9,15,0.97)",
          backdropFilter: "blur(14px)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        <div className="px-6 md:px-16 lg:px-24 flex items-end gap-0">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => handleTabSwitch(i)}
              className={`relative px-5 py-4 text-[12px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 ${
                activeTabIndex === i
                  ? "text-white"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {tab.label}
              {activeTabIndex === i && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: 2, background: "var(--color-blue)" }}
                />
              )}
            </button>
          ))}
          {/* image count */}
          <span
            className="ml-auto self-center text-[11px] tracking-[0.15em] uppercase pr-1"
            style={{
              color: "rgba(55,197,243,0.35)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {images.length} photos
          </span>
        </div>
      </div>

      {/* ── Masonry Grid ── */}
      <section
        className="px-4 sm:px-6 lg:px-10 py-10"
        style={{ background: "#0d1017" }}
      >
        <div
          className="columns-2 sm:columns-3 lg:columns-4"
          style={{ columnGap: 10 }}
        >
          {images.map((img, i) => (
            <div
              key={`${activeTab.id}-${i}`}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              style={{ marginBottom: 10 }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={i < 6 ? "eager" : "lazy"}
                priority={i < 3}
                className="w-full h-auto block transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-75"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* Hover overlay with blue tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(37,150,190,0.25) 0%, transparent 60%)",
                }}
              />
              {/* Index badge on hover */}
              <span
                className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-semibold tracking-[0.15em] text-white/80"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center"
          style={{
            background: "rgba(7,9,15,0.97)",
            backdropFilter: "blur(16px)",
          }}
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase"
            style={{
              color: "rgba(55,197,243,0.45)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 flex items-center justify-center transition-all duration-200"
            style={{
              width: 38,
              height: 38,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="Close lightbox"
          >
            <X size={16} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 sm:left-6 flex items-center justify-center transition-all duration-200 hover:border-blue/50"
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: "90vw", maxHeight: "88vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={`lightbox-${activeTab.id}-${lightboxIndex}`}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1400}
              height={1000}
              sizes="90vw"
              className="object-contain shadow-2xl"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "90vw",
                maxHeight: "88vh",
              }}
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 sm:right-6 flex items-center justify-center transition-all duration-200 hover:border-blue/50"
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Tab label at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase text-white/20">
            {activeTab.label}
          </div>
        </div>
      )}
    </main>
  );
}
