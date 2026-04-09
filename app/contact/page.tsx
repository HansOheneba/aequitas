"use client";

import { useEffect, useRef, useState } from "react";

/* ── useReveal: returns elRef (not "ref") to avoid React-19 lint ── */
function useReveal() {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.06 },
    );
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, []);
  return { elRef, visible };
}

const interests = [
  "Scholarship",
  "Startup Incubator",
  "Mentorship",
  "Partnership",
  "Donation",
  "General Inquiry",
];

const contactDetails = [
  {
    label: "Phone",
    value: "+233 (0) 55 141 4140",
    href: "tel:+233551414140",
    mono: true,
  },
  {
    label: "Email",
    value: "info@aequitasfoundation.org",
    href: "mailto:info@aequitasfoundation.org",
    mono: false,
  },
  {
    label: "Location",
    value: "Number Y97 Nii Martey Tsuru St.\nEast Airport, Accra — Ghana",
    href: null,
    mono: false,
  },
];

export default function ContactPage() {
  const { elRef: formElRef, visible: formVisible } = useReveal();
  const { elRef: mapElRef, visible: mapVisible } = useReveal();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main>
      {/* ── Dark hero ──────────────────────────────────────────── */}
      <section
        className="bg-ink relative overflow-hidden px-6 md:px-16 lg:px-24"
        style={{
          paddingTop: "clamp(80px, 12vw, 140px)",
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
          CONTACT
        </div>

        <p className="relative text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-3.5">
          Get in Touch
        </p>
        <h1
          className="relative font-extrabold text-white max-w-2xl"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          Let&rsquo;s Build
          <br />
          <span className="text-blue">Something</span>
          <br />
          Together.
        </h1>

        <div className="relative w-12 h-0.75 bg-blue mt-8" />
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 min-h-180">
          {/* Left — Form column */}
          <div
            ref={formElRef}
            className="border-r border-[#f0f0f0] px-6 py-12 sm:px-10 lg:px-16 xl:px-20"
          >
            {status === "success" ? (
              <div className="flex flex-col gap-4 pt-10">
                <div className="w-14 h-14 border-2 border-blue flex items-center justify-center text-2xl text-blue">
                  ✓
                </div>
                <h2
                  className="font-extrabold text-[#0a0e1a]"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Message Received
                </h2>
                <p className="text-sm leading-relaxed text-gray-500 max-w-md">
                  Thank you for reaching out. A member of the Aequitas team will
                  get back to you within 2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className={`flex flex-col gap-5 transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <div className="mb-2">
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue mb-2.5">
                    Send a Message
                  </p>
                  <h2
                    className="font-extrabold text-[#0a0e1a] leading-tight"
                    style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    We&rsquo;re Listening
                  </h2>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone + Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Phone (optional)"
                    name="phone"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                      I&rsquo;m interested in
                    </label>
                    <select
                      name="interest"
                      value={fields.interest}
                      onChange={handleChange}
                      className={`px-3.5 py-3 border border-gray-200 bg-white text-sm outline-none cursor-pointer appearance-none ${fields.interest ? "text-[#0a0e1a]" : "text-gray-400"}`}
                    >
                      <option value="">Select one…</option>
                      {interests.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                    Message <span className="text-blue">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="px-3.5 py-3 border border-gray-200 bg-white text-sm text-[#0a0e1a] outline-none resize-y"
                  />
                </div>

                {status === "error" && errorMsg && (
                  <p className="text-[13px] text-red-500 px-3.5 py-2.5 bg-red-50 border-l-[3px] border-red-500">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`self-start px-9 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase text-ink border-none transition-colors ${status === "sending" ? "bg-gray-400 cursor-not-allowed" : "bg-blue cursor-pointer"}`}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right — Map + contact details */}
          <div
            ref={mapElRef}
            className={`flex flex-col transition-opacity duration-700 delay-150 ${mapVisible ? "opacity-100" : "opacity-0"}`}
          >
            {/* Contact detail cards */}
            <div className="grid grid-cols-3 border-b border-[#f0f0f0]">
              {contactDetails.map((c, i) => (
                <div
                  key={c.label}
                  className={`p-7 ${i < contactDetails.length - 1 ? "border-r border-[#f0f0f0]" : ""}`}
                >
                  <p
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase text-blue mb-2"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-[13px] font-semibold text-[#0a0e1a] no-underline leading-snug block"
                      style={
                        c.mono
                          ? { fontFamily: "'Courier New', monospace" }
                          : undefined
                      }
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-[13px] font-semibold text-[#0a0e1a] leading-snug whitespace-pre-line">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="flex-1 min-h-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.900390951631!2d-0.1417723!3d5.6298036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bd69dc13e07%3A0xe35a396ba1a0d81!2sAequitas%20(%C3%86quitas)%20Foundation!5e1!3m2!1sen!2sgh!4v1775758106516!5m2!1sen!2sgh"
                className="absolute inset-0 w-full h-full block filter-[grayscale(20%)]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aequitas Foundation location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Office hours strip ────────────────────────────────── */}
      <section className="bg-ink px-6 lg:px-24 py-7 flex items-center justify-between flex-wrap gap-4 border-t border-blue/10">
        <p className="text-xs tracking-[0.08em] text-white/35">
          <span className="text-blue font-semibold">Office Hours</span>
          &nbsp;&nbsp;Monday – Friday &bull; 9:00 AM – 5:00 PM GMT
        </p>
        <p
          className="text-xs tracking-[0.05em] text-white/20"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          East Airport, Accra &bull; Ghana
        </p>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
        {label} {required && <span className="text-blue">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="px-3.5 py-3 border border-gray-200 bg-white text-sm text-[#0a0e1a] outline-none w-full"
      />
    </div>
  );
}
