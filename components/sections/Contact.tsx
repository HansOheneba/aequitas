"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const contactInfo = [
  {
    icon: (
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email Us",
    value: "hello@aequitas.org",
    href: "mailto:hello@aequitas.org",
  },
  {
    icon: (
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (555) 000-1234",
    href: "tel:+15550001234",
  },
  {
    icon: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Find Us",
    value: "123 Justice Ave, New York, NY 10001",
    href: "#",
  },
];

const interests = [
  "Scholarship Program",
  "Startup Incubator",
  "Skills Training",
  "Faith & Wellness",
  "Next Gen Leaders",
  "Women Empowerment",
  "Donate",
  "Volunteer",
  "Partnership",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API call)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-navy">
      <Container>
        <AnimateOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you want to apply, donate, volunteer, or partner —
              we&apos;d love to hear from you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <AnimateOnScroll direction="left" className="lg:col-span-2">
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm group-hover:text-gold transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-heading font-bold text-lg mb-2">
                Office Hours
              </h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>Mon – Fri &nbsp;&nbsp; 9:00 AM – 5:00 PM</p>
                <p>Saturday &nbsp;&nbsp; 10:00 AM – 2:00 PM</p>
                <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp; Closed</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll
            direction="right"
            delay={100}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white/5 rounded-3xl border border-white/10 px-8">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold font-heading text-2xl mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-300 max-w-md">
                  Thank you for reaching out. Our team will get back to you
                  within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-300 mb-1.5 font-medium"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-300 mb-1.5 font-medium"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-gray-300 mb-1.5 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm text-gray-300 mb-1.5 font-medium"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select a program…
                      </option>
                      {interests.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-300 mb-1.5 font-medium"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and how we can help…"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-semibold font-heading py-4 rounded-xl hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
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
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
