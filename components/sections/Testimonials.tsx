"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Aequitas didn't just give me a scholarship — they gave me a community. My mentor walked with me through every challenge. I graduated debt-free and landed my dream job.",
    name: "Amara Osei",
    title: "Scholar Alumni, Class of 2021",
    initials: "AO",
    program: "Scholarship Program",
  },
  {
    quote:
      "The incubator was the turning point for my business. Within 18 months of graduating, my startup had employed 7 people from my neighbourhood. I owe so much to this foundation.",
    name: "David Mensah",
    title: "Entrepreneur & Incubator Graduate",
    initials: "DM",
    program: "Startup Incubator",
  },
  {
    quote:
      "As a single mother, I didn't think doors like this would open for me. The women's programme taught me business, gave me funding, and surrounded me with women who believed in me.",
    name: "Grace Tetteh",
    title: "Women Empowerment Graduate",
    initials: "GT",
    program: "Women Empowerment",
  },
  {
    quote:
      "The Faith & Wellness program helped me deal with trauma I had carried for years. I came for skills. I left whole. Aequitas truly sees the whole person.",
    name: "Samuel Kofi",
    title: "Faith & Wellness Participant",
    initials: "SK",
    program: "Faith & Wellness",
  },
  {
    quote:
      "I was 17 when I joined the Next Gen Leaders program. It changed how I see myself. Today I run a youth nonprofit and I trace it all back to what started here.",
    name: "Ama Frimpong",
    title: "Next Gen Leaders Alumni",
    initials: "AF",
    program: "Next Gen Leaders",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <Container>
        <AnimateOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
              Voices of Change
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real stories from real people who experienced transformation
              through our programs.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Featured testimonial */}
        <AnimateOnScroll direction="up" delay={100}>
          <div className="max-w-3xl mx-auto bg-cream rounded-3xl p-10 md:p-14 relative mb-12">
            {/* Quote mark */}
            <div className="absolute top-8 left-10 text-8xl text-gold/20 font-serif leading-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              <StarRating />
              <blockquote className="text-xl md:text-2xl text-charcoal leading-relaxed font-medium mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy text-gold font-bold font-heading flex items-center justify-center text-lg shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-navy font-heading">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                  <span className="inline-block mt-1 text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full font-medium">
                    {t.program}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === active ? "bg-gold w-6 h-3" : "bg-gray-300 w-3 h-3"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
