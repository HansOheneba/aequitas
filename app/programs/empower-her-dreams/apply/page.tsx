"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* ── types ──────────────────────────────────────────────────────────────────*/
type FormData = {
  // Step 1 — Personal
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  nationality: string;
  city: string;
  // Step 2 — Background
  education: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
  nationalService: string;
  employed: string;
  // Step 3 — Motivation
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
  nationality: "",
  city: "",
  education: "",
  institution: "",
  fieldOfStudy: "",
  graduationYear: "",
  nationalService: "",
  employed: "",
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
        {required && <span style={{ color: "#c4a747" }}> *</span>}
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
        borderColor: error ? "#ef4444" : focused ? "#c4a747" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(196,167,71,0.12)" : "none",
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
        borderColor: error ? "#ef4444" : focused ? "#c4a747" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(196,167,71,0.12)" : "none",
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c4a747' stroke-width='1.5' fill='none' stroke-linecap='square'/%3E%3C/svg%3E")`,
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
        borderColor: error ? "#ef4444" : focused ? "#c4a747" : "#e5e7eb",
        boxShadow: focused ? "0 0 0 3px rgba(196,167,71,0.12)" : "none",
      }}
    />
  );
}

/* ── steps & options ────────────────────────────────────────────────────────*/
const STEPS = [
  { label: "Personal", number: "01" },
  { label: "Background", number: "02" },
  { label: "Motivation", number: "03" },
];

const EDUCATION_OPTIONS = [
  { label: "Higher National Diploma (HND)", value: "HND" },
  { label: "Bachelor's Degree", value: "Bachelor" },
  { label: "Postgraduate Diploma", value: "Postgraduate Diploma" },
  { label: "Master's Degree", value: "Masters" },
  { label: "Doctorate (PhD)", value: "PhD" },
  { label: "Professional Certification", value: "Professional Cert" },
  { label: "Other", value: "Other" },
];

const GRADUATION_YEARS = Array.from({ length: 14 }, (_, i) => {
  const y = 2026 - i;
  return { label: String(y), value: String(y) };
});

const NATIONAL_SERVICE_OPTIONS = [
  { label: "Yes — completed National Service", value: "Completed" },
  { label: "Currently serving (completing soon)", value: "In Progress" },
  { label: "Exempted", value: "Exempted" },
];

const EMPLOYMENT_OPTIONS = [
  { label: "Unemployed — actively seeking work", value: "Unemployed" },
  { label: "Employed part-time", value: "Part-time" },
  { label: "Self-employed / Entrepreneur", value: "Self-employed" },
  { label: "Volunteer / Intern", value: "Volunteer" },
];

const HOW_HEARD_OPTIONS = [
  {
    label: "Social Media (Instagram / Facebook / LinkedIn)",
    value: "Social Media",
  },
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
    if (!data.nationalService)
      errs.nationalService = "National Service status is required";
    if (!data.employed) errs.employed = "Employment status is required";
  }
  if (step === 3) {
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
                  border: `1.5px solid ${done || active ? "#c4a747" : "#d1d5db"}`,
                  background: done ? "#c4a747" : "transparent",
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
                      color: active ? "#c4a747" : "#9ca3af",
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
                  background: done ? "#c4a747" : "#e5e7eb",
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
export default function EmpowerHerDreamsApplyPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
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
      const res = await fetch("/api/apply-ehd", { method: "POST", body: fd });
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

  /* ── success state ────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <>
        <section
          style={{ background: "#07090f", minHeight: "40vh" }}
          className="relative flex items-center overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          >
            <span
              style={{
                fontSize: "clamp(120px, 22vw, 260px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "rgba(196,167,71,0.025)",
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
        <section style={{ background: "white" }}>
          <div
            className="px-8 md:px-16 lg:px-24 py-32 max-w-2xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                border: "1.5px solid #c4a747",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
              }}
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path
                  d="M1 9l7 7L23 1"
                  stroke="#c4a747"
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
                color: "#c4a747",
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
              <span style={{ color: "#c4a747" }}>
                {data.fullName.split(" ")[0]}.
              </span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#4b5563",
                marginBottom: 12,
              }}
            >
              Your application for the <strong>Empower Her Dreams</strong>{" "}
              programme has been successfully submitted. Our team will be in
              touch with the next steps.
            </p>
            <p style={{ fontSize: "13px", color: "#9ca3af" }}>
              Questions? Email{" "}
              <a
                href="mailto:info@aequitasfoundation.org"
                style={{ color: "#c4a747" }}
              >
                info@aequitasfoundation.org
              </a>
            </p>
            <Link
              href="/programs/empower-her-dreams"
              style={{
                display: "inline-block",
                marginTop: 40,
                padding: "14px 36px",
                background: "#c4a747",
                color: "#07090f",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Back to Programme
            </Link>
          </div>
        </section>
      </>
    );
  }

  /* ── form ─────────────────────────────────────────────────────────── */
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "#07090f", minHeight: "28vh" }}
        className="relative flex items-end overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <span
            style={{
              fontSize: "clamp(100px, 20vw, 240px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "rgba(196,167,71,0.025)",
              lineHeight: 1,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            APPLY
          </span>
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-12 pt-32 w-full">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c4a747",
              marginBottom: 8,
              fontFamily: "'Courier New', monospace",
            }}
          >
            Empower Her Dreams
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Apply for the Programme
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.35)",
              marginTop: 8,
            }}
          >
            For female tertiary graduates in Accra · Aged 18–35 · Open from 3
            February 2026
          </p>
        </div>
      </section>

      {/* Form wrapper */}
      <section style={{ background: "white" }}>
        <div
          ref={formRef}
          className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 max-w-3xl"
          style={{ margin: "0 auto" }}
        >
          <ProgressBar step={step} />

          {/* ── Step 1: Personal ────────────────────────────────────────── */}
          {step === 1 && (
            <div className="flex flex-col gap-7">
              <h2
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0a0e1a",
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: 4,
                }}
              >
                Personal Information
              </h2>
              <Field
                label="Full Name"
                required
                error={touched.fullName ? errors.fullName : ""}
              >
                <Input
                  value={data.fullName}
                  onChange={(v) => set("fullName", v)}
                  onBlur={() => touch("fullName")}
                  placeholder="Akua Mensah"
                  error={!!(touched.fullName && errors.fullName)}
                />
              </Field>
              <div className="grid sm:grid-cols-2 gap-7">
                <Field
                  label="Email Address"
                  required
                  error={touched.email ? errors.email : ""}
                >
                  <Input
                    type="email"
                    value={data.email}
                    onChange={(v) => set("email", v)}
                    onBlur={() => touch("email")}
                    placeholder="akua@email.com"
                    error={!!(touched.email && errors.email)}
                  />
                </Field>
                <Field
                  label="Phone Number"
                  required
                  error={touched.phone ? errors.phone : ""}
                >
                  <Input
                    type="tel"
                    value={data.phone}
                    onChange={(v) => set("phone", v)}
                    onBlur={() => touch("phone")}
                    placeholder="+233 xx xxx xxxx"
                    error={!!(touched.phone && errors.phone)}
                  />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-7">
                <Field
                  label="Date of Birth"
                  required
                  error={touched.dob ? errors.dob : ""}
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
                  label="Nationality"
                  required
                  error={touched.nationality ? errors.nationality : ""}
                >
                  <Input
                    value={data.nationality}
                    onChange={(v) => set("nationality", v)}
                    onBlur={() => touch("nationality")}
                    placeholder="Ghanaian"
                    error={!!(touched.nationality && errors.nationality)}
                  />
                </Field>
              </div>
              <Field
                label="City / Region (must be in Accra)"
                required
                error={touched.city ? errors.city : ""}
              >
                <Input
                  value={data.city}
                  onChange={(v) => set("city", v)}
                  onBlur={() => touch("city")}
                  placeholder="Accra"
                  error={!!(touched.city && errors.city)}
                />
              </Field>

              <div className="flex justify-end pt-4">
                <button
                  onClick={next}
                  style={{
                    background: "#c4a747",
                    color: "#07090f",
                    padding: "14px 36px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Background ──────────────────────────────────────── */}
          {step === 2 && (
            <div className="flex flex-col gap-7">
              <h2
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0a0e1a",
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: 4,
                }}
              >
                Educational Background
              </h2>
              <Field
                label="Highest Level of Education"
                required
                error={touched.education ? errors.education : ""}
              >
                <Select
                  value={data.education}
                  onChange={(v) => {
                    set("education", v);
                    touch("education");
                  }}
                  options={EDUCATION_OPTIONS}
                  error={!!(touched.education && errors.education)}
                />
              </Field>
              <Field
                label="Institution / University"
                required
                error={touched.institution ? errors.institution : ""}
              >
                <Input
                  value={data.institution}
                  onChange={(v) => set("institution", v)}
                  onBlur={() => touch("institution")}
                  placeholder="University of Ghana"
                  error={!!(touched.institution && errors.institution)}
                />
              </Field>
              <div className="grid sm:grid-cols-2 gap-7">
                <Field
                  label="Field of Study"
                  required
                  error={touched.fieldOfStudy ? errors.fieldOfStudy : ""}
                >
                  <Input
                    value={data.fieldOfStudy}
                    onChange={(v) => set("fieldOfStudy", v)}
                    onBlur={() => touch("fieldOfStudy")}
                    placeholder="Business Administration"
                    error={!!(touched.fieldOfStudy && errors.fieldOfStudy)}
                  />
                </Field>
                <Field
                  label="Graduation Year"
                  required
                  error={touched.graduationYear ? errors.graduationYear : ""}
                >
                  <Select
                    value={data.graduationYear}
                    onChange={(v) => {
                      set("graduationYear", v);
                      touch("graduationYear");
                    }}
                    options={GRADUATION_YEARS}
                    error={!!(touched.graduationYear && errors.graduationYear)}
                  />
                </Field>
              </div>
              <Field
                label="National Service Status"
                required
                error={touched.nationalService ? errors.nationalService : ""}
              >
                <Select
                  value={data.nationalService}
                  onChange={(v) => {
                    set("nationalService", v);
                    touch("nationalService");
                  }}
                  options={NATIONAL_SERVICE_OPTIONS}
                  error={!!(touched.nationalService && errors.nationalService)}
                />
              </Field>
              <Field
                label="Current Employment Status"
                required
                error={touched.employed ? errors.employed : ""}
              >
                <Select
                  value={data.employed}
                  onChange={(v) => {
                    set("employed", v);
                    touch("employed");
                  }}
                  options={EMPLOYMENT_OPTIONS}
                  error={!!(touched.employed && errors.employed)}
                />
              </Field>

              <div className="flex justify-between pt-4">
                <button
                  onClick={back}
                  style={{
                    background: "transparent",
                    color: "#9ca3af",
                    border: "1px solid #e5e7eb",
                    padding: "14px 28px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  style={{
                    background: "#c4a747",
                    color: "#07090f",
                    padding: "14px 36px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Motivation ──────────────────────────────────────── */}
          {step === 3 && (
            <div className="flex flex-col gap-7">
              <h2
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0a0e1a",
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: 4,
                }}
              >
                Your Motivation
              </h2>
              <Field
                label="Tell us about yourself"
                required
                error={touched.about ? errors.about : ""}
              >
                <Textarea
                  value={data.about}
                  rows={5}
                  onChange={(v) => set("about", v)}
                  placeholder="Share a bit about your background, who you are, and what drives you. (min. 50 characters)"
                  error={!!(touched.about && errors.about)}
                />
                <span
                  style={{
                    fontSize: 11,
                    color: "#9ca3af",
                    alignSelf: "flex-end",
                  }}
                >
                  {data.about.length} chars
                </span>
              </Field>
              <Field
                label="What are your career goals?"
                required
                error={touched.goals ? errors.goals : ""}
              >
                <Textarea
                  value={data.goals}
                  rows={4}
                  onChange={(v) => set("goals", v)}
                  placeholder="What do you want to achieve professionally? Where do you see yourself in 3–5 years? (min. 30 characters)"
                  error={!!(touched.goals && errors.goals)}
                />
              </Field>
              <Field label="What skills or support are you hoping to gain?">
                <Textarea
                  value={data.skillsNeeded}
                  rows={3}
                  onChange={(v) => set("skillsNeeded", v)}
                  placeholder="e.g. Interview skills, CV writing, confidence, mentorship, industry connections…"
                />
              </Field>
              <Field label="LinkedIn Profile (optional)">
                <Input
                  value={data.linkedin}
                  onChange={(v) => set("linkedin", v)}
                  placeholder="https://linkedin.com/in/yourname"
                />
              </Field>
              <Field label="How did you hear about this programme?">
                <Select
                  value={data.howHeard}
                  onChange={(v) => set("howHeard", v)}
                  options={HOW_HEARD_OPTIONS}
                  placeholder="Select source…"
                />
              </Field>

              {/* CV upload */}
              <Field label="Upload Your CV (PDF, max 5 MB — optional)">
                <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleCvChange(e.target.files?.[0] ?? null)
                    }
                    style={{ fontSize: "13px", color: "#374151" }}
                  />
                  {cvFile && (
                    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                      {cvFile.name} ({(cvFile.size / 1024).toFixed(0)} KB)
                    </p>
                  )}
                  {cvError && (
                    <p style={{ fontSize: 12, color: "#ef4444", marginTop: 4 }}>
                      {cvError}
                    </p>
                  )}
                </div>
              </Field>

              {serverError && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#dc2626" }}>
                    {serverError}
                  </p>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <button
                  onClick={back}
                  style={{
                    background: "transparent",
                    color: "#9ca3af",
                    border: "1px solid #e5e7eb",
                    padding: "14px 28px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={submit}
                  disabled={submitting}
                  style={{
                    background: submitting ? "#d4b96a" : "#c4a747",
                    color: "#07090f",
                    padding: "14px 40px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
