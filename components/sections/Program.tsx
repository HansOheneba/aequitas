import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const programs = [
  {
    tag: "Education",
    title: "Scholarship Program",
    description:
      "Full and partial scholarships for high-achieving students from low-income households. We cover tuition, books, and living expenses for deserving scholars.",
    highlights: [
      "University & college grants",
      "Mentorship pairing",
      "Career placement support",
    ],
    color: "bg-navy",
    tagColor: "bg-navy/10 text-navy",
  },
  {
    tag: "Entrepreneurship",
    title: "Startup Incubator",
    description:
      "A 6-month intensive program equipping aspiring entrepreneurs with skills, seed funding, and a network of coaches to launch sustainable businesses.",
    highlights: [
      "Seed funding up to $10,000",
      "Business coaching",
      "Networking events",
    ],
    color: "bg-gold",
    tagColor: "bg-gold/10 text-gold-dark",
  },
  {
    tag: "Vocational",
    title: "Skills Training",
    description:
      "Hands-on vocational training in high-demand trades — from construction and plumbing to digital skills and healthcare support roles.",
    highlights: [
      "Industry certifications",
      "Job placement assistance",
      "Apprenticeship links",
    ],
    color: "bg-navy",
    tagColor: "bg-navy/10 text-navy",
  },
  {
    tag: "Community",
    title: "Faith & Wellness",
    description:
      "Holistic programmes addressing mental health, spiritual growth, and community resilience — because transformation is more than economic.",
    highlights: [
      "Counselling sessions",
      "Community retreats",
      "Leadership development",
    ],
    color: "bg-gold",
    tagColor: "bg-gold/10 text-gold-dark",
  },
  {
    tag: "Youth",
    title: "Next Generation Leaders",
    description:
      "A year-round program identifying and developing high-potential youth aged 14–22 through leadership camps, internships, and global exchanges.",
    highlights: [
      "International exchanges",
      "Public speaking training",
      "Peer mentorship",
    ],
    color: "bg-navy",
    tagColor: "bg-navy/10 text-navy",
  },
  {
    tag: "Women",
    title: "Women Empowerment",
    description:
      "Dedicated programmes empowering women through financial literacy, business training, and safe spaces for healing and community.",
    highlights: [
      "Micro-finance access",
      "Financial literacy",
      "Safe community spaces",
    ],
    color: "bg-gold",
    tagColor: "bg-gold/10 text-gold-dark",
  },
];

export default function Program() {
  return (
    <section id="program" className="py-24 bg-cream">
      <Container>
        {/* Heading */}
        <AnimateOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
              Programs Built to Last
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Each program is designed with communities — not just for them. We
              invest in long-term change through six flagship initiatives.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, i) => (
            <AnimateOnScroll key={program.title} direction="up" delay={80 * i}>
              <Card hover className="h-full flex flex-col">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit ${program.tagColor}`}
                >
                  {program.tag}
                </span>
                <h3 className="text-xl font-bold font-heading text-navy mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default">
            <Link href="#contact">Apply for a Program</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
