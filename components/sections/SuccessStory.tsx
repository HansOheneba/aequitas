import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function SuccessStory() {
  return (
    <section id="success" className="py-24 bg-cream">
      <Container>
        <AnimateOnScroll direction="up">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Featured Story
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight">
              From Struggle to Impact
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="aspect-4/3 rounded-3xl bg-navy overflow-hidden flex items-end">
                {/* Decorative gradient placeholder */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1a3a 0%, #112347 50%, #c4a747 100%)",
                  }}
                />
                {/* Pattern overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Caption bar */}
                <div className="relative z-10 w-full bg-navy/80 backdrop-blur-sm p-6">
                  <p className="text-white font-heading font-bold text-lg">
                    Kwame Asante
                  </p>
                  <p className="text-gold text-sm">
                    Scholar → Entrepreneur → Community Leader
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 w-28 h-28 rounded-2xl bg-gold text-navy flex flex-col items-center justify-center shadow-xl font-heading font-bold text-center p-2">
                <span className="text-3xl font-black">12×</span>
                <span className="text-xs leading-tight">Revenue Growth</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Story content */}
          <AnimateOnScroll direction="right" delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-navy text-gold font-bold font-heading flex items-center justify-center text-lg">
                  KA
                </div>
                <div>
                  <p className="font-bold text-navy font-heading text-lg">
                    Kwame Asante
                  </p>
                  <p className="text-sm text-gray-500">
                    Accra, Ghana &bull; Class of 2018
                  </p>
                </div>
              </div>

              <blockquote className="text-2xl font-bold font-heading text-navy leading-tight mb-6">
                &ldquo;I came with a dream and a dollar. Aequitas gave me the
                tools to build an empire.&rdquo;
              </blockquote>

              <p className="text-gray-600 leading-relaxed mb-4">
                Kwame grew up in a single-parent household in Accra, selling
                water sachets after school to help pay rent. When a community
                pastor nominated him for the Aequitas Scholarship in 2016, his
                life changed overnight.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                After graduating with a degree in engineering, he enrolled in
                the Startup Incubator. With a $7,500 seed grant and months of
                coaching, he launched a solar-powered cold storage startup
                serving rural farmers. Within three years, it became a
                multi-million cedi operation employing 45 people.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, Kwame mentors 12 scholars in the same program that
                transformed him — paying forward what he received and proving
                that transformation compounds.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { value: "45", label: "Jobs Created" },
                  { value: "3yrs", label: "To Profitability" },
                  { value: "12", label: "Scholars Mentored" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-xl px-5 py-4 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl font-black text-gold font-heading">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="default">
                <Link href="#program">Read More Stories</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
