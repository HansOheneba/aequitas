import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const team = [
  {
    name: "Dr. Abena Mensah",
    role: "Founder & Executive Director",
    initials: "AM",
    bio: "Theologian, educator, and social entrepreneur with 20 years in community development across West Africa and the US.",
    bg: "from-navy to-navy-light",
  },
  {
    name: "James Oduro",
    role: "Director of Programs",
    initials: "JO",
    bio: "Former USAID officer with deep expertise in education systems and youth workforce development.",
    bg: "from-gold-dark to-gold",
  },
  {
    name: "Priscilla Acheampong",
    role: "Head of Partnerships",
    initials: "PA",
    bio: "Builds strategic alliances with global donors, corporations, and faith institutions to scale our reach.",
    bg: "from-navy to-navy-light",
  },
  {
    name: "Emmanuel Darko",
    role: "Chief Financial Officer",
    initials: "ED",
    bio: "CPA with 15+ years in nonprofit finance, ensuring every dollar goes furthest for the communities we serve.",
    bg: "from-gold-dark to-gold",
  },
  {
    name: "Nana Akua Boateng",
    role: "Director of Impact & Research",
    initials: "NB",
    bio: "PhD researcher specialising in measuring social return on investment and equity outcomes.",
    bg: "from-navy to-navy-light",
  },
  {
    name: "Michael Asante",
    role: "Community Engagement Lead",
    initials: "MA",
    bio: "Lived-experience leader who grew up in our scholarship program and now leads grassroots mobilisation.",
    bg: "from-gold-dark to-gold",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-cream">
      <Container>
        <AnimateOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
              The People Behind the Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A passionate, multi-disciplinary team united by a common purpose —
              justice, faith, and the relentless belief that lives can change.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} direction="up" delay={80 * i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                {/* Avatar header */}
                <div
                  className={`bg-linear-to-br ${member.bg} h-40 flex items-center justify-center`}
                >
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold font-heading text-3xl">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold font-heading text-navy text-lg mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Board strip */}
        <AnimateOnScroll direction="up" delay={100}>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 text-center shadow-sm">
            <h3 className="text-2xl font-bold font-heading text-navy mb-3">
              Join Our Team
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              We&apos;re always looking for passionate people — staff,
              volunteers, and board members — who want to make a real
              difference.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-3 rounded-xl hover:bg-navy-light transition-colors duration-200"
            >
              View Open Roles
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
