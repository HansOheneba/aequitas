import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const partners = [
  { name: "United Nations Foundation", abbr: "UN Foundation" },
  { name: "GIZ Germany", abbr: "GIZ" },
  { name: "Ford Foundation", abbr: "Ford Foundation" },
  { name: "Mastercard Foundation", abbr: "Mastercard Fdn" },
  { name: "USAID", abbr: "USAID" },
  { name: "World Vision", abbr: "World Vision" },
  { name: "Steward Bank", abbr: "Steward Bank" },
  { name: "Open Society Foundations", abbr: "Open Society" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-100">
      <Container>
        <AnimateOnScroll direction="up">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Partners
            </p>
            <h2 className="text-3xl font-bold font-heading text-navy">
              Trusted By Global Leaders
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
              We collaborate with governments, foundations, and corporations who
              share our commitment to equity and opportunity.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Partner logos */}
        <AnimateOnScroll direction="up" delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center h-24 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-cream hover:border-gold/30 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 px-6"
              >
                {/* Text-based logo placeholder — replace with <Image> when real logos are available */}
                <span className="text-center text-sm font-semibold text-gray-400 group-hover:text-navy transition-colors duration-200 leading-tight">
                  {partner.abbr}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA strip */}
        <AnimateOnScroll direction="up" delay={200}>
          <div className="bg-navy rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold font-heading text-2xl mb-1">
                Become a Partner
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                Join our growing network of partners who are co-investing in a
                more just world. We welcome corporate, institutional, and church
                partnerships.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors duration-200 whitespace-nowrap"
            >
              Partner With Us
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
