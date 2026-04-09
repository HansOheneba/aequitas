import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/ui/Container";

const footerLinks = {
  foundation: [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#program" },
    { label: "Our Impact", href: "#impact" },
    { label: "Success Stories", href: "#success" },
    { label: "Our Team", href: "/team" },
  ],
  getInvolved: [
    { label: "Apply", href: "/apply" },
    { label: "Donate", href: "/contact" },
    { label: "Volunteer", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Sponsor a Scholar", href: "/contact" },
  ],
  contact: [
    { label: "info@aequitasfoundation.org", href: "mailto:info@aequitasfoundation.org" },
    { label: "+233 (0) 55 141 4140", href: "tel:+233551414140" },
    { label: "East Airport, Accra — Ghana", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      {/* Main footer */}
      <div className="border-t border-white/10">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <Image
                  src="/logo-aeq.png"
                  alt="Aequitas Foundation"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <span className="text-white font-bold text-lg font-heading tracking-wide">
                  Aequitas Foundation
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 mb-6">
                Transforming lives through faith, education, and opportunity.
                Building a just and equitable world — one life at a time.
              </p>
              <SocialLinks />
            </div>

            {/* Foundation Links */}
            <div>
              <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-widest mb-5">
                Foundation
              </h4>
              <ul className="space-y-3">
                {footerLinks.foundation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-widest mb-5">
                Get Involved
              </h4>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-widest mb-5">
                Contact
              </h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Aequitas Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
