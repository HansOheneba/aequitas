"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── types ──────────────────────────────────────────────────────────────────*/
type FormData = {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  nationality: string;
  city: string;
  // Step 2
  education: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
  employed: string;
  // Step 3
  program: string;
  about: string;
  goals: string;
  skillsNeeded: string;
  linkedin: string;
  howHeard: string;
};

const EMPTY: FormData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  nationality: "",
  city: "",
  education: "",
  institution: "",
  fieldOfStudy: "",
  graduationYear: "",
  employed: "",
  program: "",
  about: "",
  goals: "",
  skillsNeeded: "",
  linkedin: "",
  howHeard: "",
};

/* ── styled primitives ──────────────────────────────────────────────────────*/
function Field({
  label,
  required = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[11px] font-semibold tracking-[0.2em] uppercase"
        style={{ color: "#4b5563" }}
      >
        {label}
        {required && <span style={{ color: "#37c5f3" }}> *</span>}
      </label>
      {children}
      {error && (
        <p className="text-[11px]" style={{ color: "#ef4444" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 0,
  fontSize: "14px",
  color: "#0a0e1a",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

function Input({
  value,
  onChange,
  onBlur,
  type = "text",
  placeholder,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        onBlur?.();
      }}
      style={{
        ...inputBase,
        borderColor: error ? "#ef4444" : focused ? "#37c5f3" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(55,197,243,0.12)" : "none",
      }}
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder = "Select…",
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  error?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: error ? "#ef4444" : focused ? "#37c5f3" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(55,197,243,0.12)" : "none",
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2337c5f3' stroke-width='1.5' fill='none' stroke-linecap='square'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        paddingRight: "36px",
        color: value ? "#0a0e1a" : "#9ca3af",
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  error?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        resize: "vertical",
        borderColor: error ? "#ef4444" : focused ? "#37c5f3" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(55,197,243,0.12)" : "none",
      }}
    />
  );
}

/* ── step definitions ───────────────────────────────────────────────────────*/
const STEPS = [
  { label: "Personal", number: "01" },
  { label: "Background", number: "02" },
  { label: "Your Goals", number: "03" },
];

const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Non-binary / Other", value: "Non-binary / Other" },
  { label: "Prefer not to say", value: "Prefer not to say" },
];

const EDUCATION_OPTIONS = [
  { label: "Secondary / High School", value: "Secondary" },
  { label: "Higher National Diploma (HND)", value: "HND" },
  { label: "Bachelor's Degree", value: "Bachelor" },
  { label: "Postgraduate Diploma", value: "Postgraduate Diploma" },
  { label: "Master's Degree", value: "Masters" },
  { label: "Doctorate (PhD)", value: "PhD" },
  { label: "Professional Certification", value: "Professional Cert" },
  { label: "Other", value: "Other" },
];

const GRADUATION_YEARS = Array.from({ length: 18 }, (_, i) => {
  const y = 2026 - i;
  return { label: String(y), value: String(y) };
});

const EMPLOYMENT_OPTIONS = [
  { label: "Currently a student", value: "Student" },
  { label: "Unemployed / seeking opportunities", value: "Unemployed" },
  { label: "Employed part-time", value: "Part-time" },
  { label: "Employed full-time", value: "Full-time" },
  { label: "Self-employed / Entrepreneur", value: "Self-employed" },
];

const PROGRAM_OPTIONS = [
  { label: "Mentorship & Coaching", value: "Mentorship" },
  { label: "Professional Development", value: "Professional Dev" },
  { label: "Leadership Training", value: "Leadership" },
  { label: "Entrepreneurship Support", value: "Entrepreneurship" },
  { label: "Career Placement & Networking", value: "Career Placement" },
  { label: "Academic / Scholarship Support", value: "Scholarship" },
  { label: "Not sure — I'd like guidance", value: "Guidance Needed" },
];

const HOW_HEARD_OPTIONS = [
  { label: "Social Media (Instagram / Facebook)", value: "Social Media" },
  { label: "A friend or colleague", value: "Referral" },
  { label: "University / School", value: "University" },
  { label: "Event or Conference", value: "Event" },
  { label: "Google / Web search", value: "Google" },
  { label: "News or Media", value: "Media" },
  { label: "Other", value: "Other" },
];

/* ── validation ─────────────────────────────────────────────────────────────*/
function validateStep(step: number, data: FormData): Record<string, string> {
  const errs: Record<string, string> = {};
  if (step === 1) {
    if (!data.fullName.trim()) errs.fullName = "Full name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    if (!data.dob) errs.dob = "Date of birth is required";
    if (!data.gender) errs.gender = "Please select a gender";
    if (!data.nationality.trim()) errs.nationality = "Nationality is required";
    if (!data.city.trim()) errs.city = "City / Region is required";
  }
  if (step === 2) {
    if (!data.education) errs.education = "Education level is required";
    if (!data.institution.trim()) errs.institution = "Institution is required";
    if (!data.fieldOfStudy.trim())
      errs.fieldOfStudy = "Field of study is required";
    if (!data.graduationYear)
      errs.graduationYear = "Graduation year is required";
    if (!data.employed) errs.employed = "Employment status is required";
  }
  if (step === 3) {
    if (!data.program) errs.program = "Please select a program";
    if (!data.about.trim() || data.about.trim().length < 50)
      errs.about = "Please write at least 50 characters about yourself";
    if (!data.goals.trim() || data.goals.trim().length < 30)
      errs.goals = "Please describe your goals (at least 30 characters)";
  }
  return errs;
}

/* ── progress bar ───────────────────────────────────────────────────────────*/
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-0 mb-12">
      {STEPS.map((s, i) => {
        const active = i + 1 === step;
        const done = i + 1 < step;
        return (
          <div key={s.number} className="flex items-center">
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 36,
                  height: 36,
                  border: `1.5px solid ${done || active ? "#37c5f3" : "#d1d5db"}`,
                  background: done
                    ? "#37c5f3"
                    : active
                      ? "transparent"
                      : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                  flexShrink: 0,
                }}
              >
                {done ? (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5l4 4 8-8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                ) : (
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: active ? "#37c5f3" : "#9ca3af",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {s.number}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: active ? "#0a0e1a" : done ? "#6b7280" : "#9ca3af",
                  transition: "color 0.3s",
                }}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                style={{
                  width: 48,
                  height: 1,
                  background: done ? "#37c5f3" : "#e5e7eb",
                  margin: "0 16px",
                  transition: "background 0.4s",
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

const MAX_CV_BYTES = 5 * 1024 * 1024;

/* ── main page ──────────────────────────────────────────────────────────────*/
export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  function handleCvChange(file: File | null) {
    if (!file) {
      setCvFile(null);
      setCvError("");
      return;
    }
    if (file.type !== "application/pdf") {
      setCvError("Only PDF files are accepted.");
      setCvFile(null);
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setCvError("File must be 5 MB or smaller.");
      setCvFile(null);
      return;
    }
    setCvError("");
    setCvFile(file);
  }

  function set(field: keyof FormData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
    if (touched[field]) {
      // re-validate the current step live
      setErrors((prev) => {
        const fresh = validateStep(step, { ...data, [field]: value });
        return { ...prev, [field]: fresh[field] ?? "" };
      });
    }
  }

  function touch(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
    const fresh = validateStep(step, data);
    setErrors((prev) => ({ ...prev, [field]: fresh[field] ?? "" }));
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function next() {
    const errs = validateStep(step, data);
    if (Object.values(errs).some(Boolean)) {
      // mark all fields in this step touched
      const allTouched = Object.keys(errs).reduce(
        (acc, k) => ({ ...acc, [k]: true }),
        {} as Record<string, boolean>,
      );
      setTouched((t) => ({ ...t, ...allTouched }));
      setErrors(errs);
      return;
    }
    setStep((s) => s + 1);
    scrollToForm();
  }

  function back() {
    setStep((s) => s - 1);
    scrollToForm();
  }

  async function submit() {
    const errs = validateStep(3, data);
    if (Object.values(errs).some(Boolean)) {
      const allTouched = Object.keys(errs).reduce(
        (acc, k) => ({ ...acc, [k]: true }),
        {} as Record<string, boolean>,
      );
      setTouched((t) => ({ ...t, ...allTouched }));
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setServerError(null);

    try {
      const fd = new globalThis.FormData();
      (Object.keys(data) as (keyof typeof data)[]).forEach((k) =>
        fd.append(k, data[k]),
      );
      if (cvFile) fd.append("cv", cvFile, cvFile.name);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Unknown error");
      setSubmitted(true);
      scrollToForm();
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* char counters for textareas */
  const [heroIn, setHeroIn] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeroIn(true);
      },
      { threshold: 0.1 },
    );
    if (heroRef.current) io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  /* ── success state ────────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <>
        {/* Hero */}
        <section
          style={{ background: "#07090f", minHeight: "40vh" }}
          className="relative flex items-center overflow-hidden"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "clamp(120px, 22vw, 260px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "rgba(55,197,243,0.025)",
                lineHeight: 1,
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              APPLY
            </span>
          </div>
          <div className="relative z-10 px-8 md:px-16 lg:px-24 py-24 w-full" />
        </section>

        {/* Thank you panel */}
        <section style={{ background: "white" }}>
          <div
            className="px-8 md:px-16 lg:px-24 py-32 max-w-2xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                border: "1.5px solid #37c5f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
              }}
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path
                  d="M1 9l7 7L23 1"
                  stroke="#37c5f3"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#37c5f3",
                marginBottom: 16,
              }}
            >
              Application Received
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0e1a",
                marginBottom: 20,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Thank you,{" "}
              <span style={{ color: "#37c5f3" }}>
                {data.fullName.split(" ")[0]}
              </span>
              .
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#6b7280",
                marginBottom: 48,
              }}
            >
              Your application has been submitted successfully. Our team will
              review your details and reach out to you within{" "}
              <strong style={{ color: "#0a0e1a" }}>5–7 working days</strong>.
              We&apos;re excited to learn more about your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                style={{
                  padding: "13px 32px",
                  background: "#37c5f3",
                  color: "#07090f",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Back Home
              </Link>
              <Link
                href="/who-we-are"
                style={{
                  padding: "13px 32px",
                  border: "1.5px solid #0a0e1a",
                  color: "#0a0e1a",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Who We Are
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ── main render ──────────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Dark Hero ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{ background: "#07090f", minHeight: "58vh" }}
        className="relative flex items-end overflow-hidden"
      >
        {/* Ghost watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "clamp(32px, 8vw, 120px)",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: "clamp(140px, 28vw, 320px)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "rgba(55,197,243,0.025)",
              lineHeight: 1,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            APPLY
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 pt-40 w-full">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#37c5f3",
              marginBottom: 20,
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(16px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            Aequitas Foundation — Applications
          </p>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              color: "white",
              marginBottom: 24,
              fontFamily: "var(--font-montserrat)",
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            Begin Your <span style={{ color: "#37c5f3" }}>Journey</span>
            <br />
            With Us
          </h1>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 520,
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            We invest in motivated young people who are ready to grow. Tell us
            about yourself and let&apos;s find the right path for you.
          </p>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "#37c5f3",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {[
          { number: "500+", label: "Alumni Supported" },
          { number: "12+", label: "Partner Organisations" },
          { number: "95%", label: "Placement Rate" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              padding: "20px 0",
              textAlign: "center",
              borderRight: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "#07090f",
                lineHeight: 1,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {s.number}
            </p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(7,9,15,0.6)",
                marginTop: 4,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Form section ──────────────────────────────────────────────────── */}
      <section style={{ background: "#f9f6f1" }}>
        <div className="px-8 md:px-16 lg:px-24 py-24">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr min(660px, 100%)",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "start",
            }}
            className="lg:grid-cols-[1fr_min(660px,100%)] grid-cols-1"
          >
            {/* Left — sticky info panel */}
            <div
              style={{ position: "sticky", top: 120 }}
              className="hidden lg:block"
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#37c5f3",
                  marginBottom: 20,
                }}
              >
                Application Form
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#0a0e1a",
                  lineHeight: 1.2,
                  marginBottom: 20,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Three steps.
                <br />
                <span style={{ color: "#37c5f3" }}>Endless possibilities.</span>
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.9,
                  color: "#6b7280",
                  marginBottom: 40,
                }}
              >
                We read every application personally. Take your time, be honest,
                and let us see the real you.
              </p>

              {/* Step guide */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    num: "01",
                    title: "Personal Info",
                    desc: "Basic details so we know who you are",
                  },
                  {
                    num: "02",
                    title: "Your Background",
                    desc: "Education history and current situation",
                  },
                  {
                    num: "03",
                    title: "Your Goals",
                    desc: "Where you want to go and how we can help",
                  },
                ].map((s, i) => (
                  <div key={s.num} className="flex gap-4 items-start">
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color:
                          step > i + 1
                            ? "#37c5f3"
                            : step === i + 1
                              ? "#0a0e1a"
                              : "#d1d5db",
                        fontFamily: "'Courier New', monospace",
                        paddingTop: 2,
                        minWidth: 24,
                        transition: "color 0.3s",
                      }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color:
                            step === i + 1
                              ? "#0a0e1a"
                              : step > i + 1
                                ? "#37c5f3"
                                : "#9ca3af",
                          marginBottom: 2,
                          transition: "color 0.3s",
                        }}
                      >
                        {s.title}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                          lineHeight: 1.5,
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form card */}
            <div
              ref={formRef}
              style={{ background: "white", padding: "clamp(24px, 4vw, 56px)" }}
            >
              <ProgressBar step={step} />

              {/* ── Step 1: Personal Info ───────────────────────────────── */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                        fontWeight: 700,
                        color: "#0a0e1a",
                        marginBottom: 6,
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      Who are you?
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#9ca3af",
                        lineHeight: 1.6,
                      }}
                    >
                      Let&apos;s start with the basics. All fields marked * are
                      required.
                    </p>
                  </div>

                  <Field
                    label="Full Name"
                    required
                    error={touched.fullName ? errors.fullName : undefined}
                  >
                    <Input
                      value={data.fullName}
                      onChange={(v) => set("fullName", v)}
                      onBlur={() => touch("fullName")}
                      placeholder="e.g. Kofi Mensah"
                      error={!!(touched.fullName && errors.fullName)}
                    />
                  </Field>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <Field
                      label="Email Address"
                      required
                      error={touched.email ? errors.email : undefined}
                    >
                      <Input
                        type="email"
                        value={data.email}
                        onChange={(v) => set("email", v)}
                        onBlur={() => touch("email")}
                        placeholder="you@example.com"
                        error={!!(touched.email && errors.email)}
                      />
                    </Field>
                    <Field
                      label="Phone Number"
                      required
                      error={touched.phone ? errors.phone : undefined}
                    >
                      <Input
                        type="tel"
                        value={data.phone}
                        onChange={(v) => set("phone", v)}
                        onBlur={() => touch("phone")}
                        placeholder="+233 XX XXX XXXX"
                        error={!!(touched.phone && errors.phone)}
                      />
                    </Field>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <Field
                      label="Date of Birth"
                      required
                      error={touched.dob ? errors.dob : undefined}
                    >
                      <Input
                        type="date"
                        value={data.dob}
                        onChange={(v) => set("dob", v)}
                        onBlur={() => touch("dob")}
                        error={!!(touched.dob && errors.dob)}
                      />
                    </Field>
                    <Field
                      label="Gender"
                      required
                      error={touched.gender ? errors.gender : undefined}
                    >
                      <Select
                        value={data.gender}
                        onChange={(v) => set("gender", v)}
                        options={GENDER_OPTIONS}
                        error={!!(touched.gender && errors.gender)}
                      />
                    </Field>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <Field
                      label="Nationality"
                      required
                      error={
                        touched.nationality ? errors.nationality : undefined
                      }
                    >
                      <Input
                        value={data.nationality}
                        onChange={(v) => set("nationality", v)}
                        onBlur={() => touch("nationality")}
                        placeholder="e.g. Ghanaian"
                        error={!!(touched.nationality && errors.nationality)}
                      />
                    </Field>
                    <Field
                      label="City / Region"
                      required
                      error={touched.city ? errors.city : undefined}
                    >
                      <Input
                        value={data.city}
                        onChange={(v) => set("city", v)}
                        onBlur={() => touch("city")}
                        placeholder="e.g. Accra, Greater Accra"
                        error={!!(touched.city && errors.city)}
                      />
                    </Field>
                  </div>
                </div>
              )}

              {/* ── Step 2: Education & Background ─────────────────────── */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                        fontWeight: 700,
                        color: "#0a0e1a",
                        marginBottom: 6,
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      Your background
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#9ca3af",
                        lineHeight: 1.6,
                      }}
                    >
                      Tell us about your education and where you are in life
                      right now.
                    </p>
                  </div>

                  <Field
                    label="Highest Level of Education"
                    required
                    error={touched.education ? errors.education : undefined}
                  >
                    <Select
                      value={data.education}
                      onChange={(v) => set("education", v)}
                      options={EDUCATION_OPTIONS}
                      error={!!(touched.education && errors.education)}
                    />
                  </Field>

                  <Field
                    label="Institution / University"
                    required
                    error={touched.institution ? errors.institution : undefined}
                  >
                    <Input
                      value={data.institution}
                      onChange={(v) => set("institution", v)}
                      onBlur={() => touch("institution")}
                      placeholder="e.g. University of Ghana, Legon"
                      error={!!(touched.institution && errors.institution)}
                    />
                  </Field>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <Field
                      label="Field of Study / Major"
                      required
                      error={
                        touched.fieldOfStudy ? errors.fieldOfStudy : undefined
                      }
                    >
                      <Input
                        value={data.fieldOfStudy}
                        onChange={(v) => set("fieldOfStudy", v)}
                        onBlur={() => touch("fieldOfStudy")}
                        placeholder="e.g. Computer Science"
                        error={!!(touched.fieldOfStudy && errors.fieldOfStudy)}
                      />
                    </Field>
                    <Field
                      label="Year of Graduation"
                      required
                      error={
                        touched.graduationYear
                          ? errors.graduationYear
                          : undefined
                      }
                    >
                      <Select
                        value={data.graduationYear}
                        onChange={(v) => set("graduationYear", v)}
                        options={GRADUATION_YEARS}
                        placeholder="Select year…"
                        error={
                          !!(touched.graduationYear && errors.graduationYear)
                        }
                      />
                    </Field>
                  </div>

                  <Field
                    label="Current Employment Status"
                    required
                    error={touched.employed ? errors.employed : undefined}
                  >
                    <Select
                      value={data.employed}
                      onChange={(v) => set("employed", v)}
                      options={EMPLOYMENT_OPTIONS}
                      error={!!(touched.employed && errors.employed)}
                    />
                  </Field>
                </div>
              )}

              {/* ── Step 3: Goals ───────────────────────────────────────── */}
              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                        fontWeight: 700,
                        color: "#0a0e1a",
                        marginBottom: 6,
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      Your goals &amp; vision
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#9ca3af",
                        lineHeight: 1.6,
                      }}
                    >
                      This is the most important part — be genuine, be specific.
                    </p>
                  </div>

                  <Field
                    label="Program of Interest"
                    required
                    error={touched.program ? errors.program : undefined}
                  >
                    <Select
                      value={data.program}
                      onChange={(v) => set("program", v)}
                      options={PROGRAM_OPTIONS}
                      placeholder="Which program suits you best?"
                      error={!!(touched.program && errors.program)}
                    />
                  </Field>

                  <Field
                    label="About You"
                    required
                    error={touched.about ? errors.about : undefined}
                  >
                    <Textarea
                      value={data.about}
                      onChange={(v) => set("about", v)}
                      placeholder="Tell us who you are, your story, and what drives you…"
                      rows={5}
                      error={!!(touched.about && errors.about)}
                    />
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        marginTop: 4,
                      }}
                    >
                      {data.about.length} characters{" "}
                      {data.about.length < 50 ? `(min 50)` : "✓"}
                    </p>
                  </Field>

                  <Field
                    label="Career Goals"
                    required
                    error={touched.goals ? errors.goals : undefined}
                  >
                    <Textarea
                      value={data.goals}
                      onChange={(v) => set("goals", v)}
                      placeholder="Where do you want to be in 3–5 years? What does success look like to you?"
                      rows={4}
                      error={!!(touched.goals && errors.goals)}
                    />
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        marginTop: 4,
                      }}
                    >
                      {data.goals.length} characters{" "}
                      {data.goals.length < 30 ? `(min 30)` : "✓"}
                    </p>
                  </Field>

                  <Field label="Skills / Support You're Looking For">
                    <Textarea
                      value={data.skillsNeeded}
                      onChange={(v) => set("skillsNeeded", v)}
                      placeholder="What specific skills, networks, or resources would be most valuable to you?"
                      rows={3}
                    />
                  </Field>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <Field label="LinkedIn Profile">
                      <Input
                        value={data.linkedin}
                        onChange={(v) => set("linkedin", v)}
                        placeholder="linkedin.com/in/yourname"
                      />
                    </Field>
                    <Field label="How Did You Hear About Us?">
                      <Select
                        value={data.howHeard}
                        onChange={(v) => set("howHeard", v)}
                        options={HOW_HEARD_OPTIONS}
                        placeholder="Select…"
                      />
                    </Field>
                  </div>

                  {/* CV Upload */}
                  <Field label="Upload Your CV" error={cvError}>
                    <label
                      style={{
                        display: "block",
                        border: `1.5px dashed ${cvError ? "#ef4444" : cvFile ? "#37c5f3" : "#d1d5db"}`,
                        padding: "24px 20px",
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                        textAlign: "center",
                      }}
                    >
                      <input
                        type="file"
                        accept="application/pdf"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleCvChange(e.target.files?.[0] ?? null)
                        }
                      />
                      {cvFile ? (
                        <>
                          <p
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#37c5f3",
                              marginBottom: 4,
                            }}
                          >
                            {cvFile.name}
                          </p>
                          <p style={{ fontSize: "11px", color: "#9ca3af" }}>
                            {(cvFile.size / 1024).toFixed(0)} KB ·{" "}
                            <span style={{ textDecoration: "underline" }}>
                              Change file
                            </span>
                          </p>
                        </>
                      ) : (
                        <>
                          <p
                            style={{
                              fontSize: "13px",
                              color: "#6b7280",
                              marginBottom: 4,
                            }}
                          >
                            Click to upload your CV
                          </p>
                          <p style={{ fontSize: "11px", color: "#9ca3af" }}>
                            PDF only · Max 5 MB
                          </p>
                        </>
                      )}
                    </label>
                  </Field>

                  {/* Privacy note */}
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                      lineHeight: 1.7,
                      borderTop: "1px solid #f3f4f6",
                      paddingTop: 16,
                    }}
                  >
                    By submitting this form you agree that your details may be
                    used to assess your application and to contact you about
                    Aequitas Foundation programmes. We will never sell your
                    data.
                  </p>
                </div>
              )}

              {/* ── Navigation buttons ────────────────────────────────── */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 40,
                  borderTop: "1px solid #f3f4f6",
                  paddingTop: 32,
                }}
              >
                {step > 1 ? (
                  <button
                    onClick={back}
                    style={{
                      padding: "12px 24px",
                      border: "1.5px solid #d1d5db",
                      background: "transparent",
                      color: "#6b7280",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    onClick={next}
                    style={{
                      padding: "13px 36px",
                      background: "#0a0e1a",
                      color: "white",
                      border: "1.5px solid #0a0e1a",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#37c5f3";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#37c5f3";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#07090f";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#0a0e1a";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#0a0e1a";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "white";
                    }}
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={submitting}
                    style={{
                      padding: "13px 36px",
                      background: submitting ? "#9ca3af" : "#37c5f3",
                      color: "#07090f",
                      border: `1.5px solid ${submitting ? "#9ca3af" : "#37c5f3"}`,
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: submitting ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s",
                    }}
                  >
                    {submitting ? "Submitting…" : "Submit Application"}
                  </button>
                )}
              </div>

              {/* Server error */}
              {serverError && (
                <p
                  style={{
                    marginTop: 16,
                    padding: "12px 16px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#dc2626",
                    fontSize: "13px",
                  }}
                >
                  {serverError}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark closing panel ─────────────────────────────────────────────── */}
      <section style={{ background: "#07090f" }}>
        <div
          className="px-8 md:px-16 lg:px-24 py-20"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.07)",
          }}
          // grid gap color hack
        >
          {[
            {
              icon: "✦",
              title: "We Read Every Form",
              desc: "No algorithm. Real people review your application and respond with care.",
            },
            {
              icon: "◈",
              title: "Zero Cost",
              desc: "Aequitas programmes are free. Our mission is access, not profit.",
            },
            {
              icon: "◉",
              title: "Built for Africa",
              desc: "Our network, opportunities, and context are rooted in African futures.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "40px 32px",
                background: "#07090f",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  color: "#37c5f3",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                {item.icon}
              </span>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.05em",
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.75,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
