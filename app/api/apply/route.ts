import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ── field schema ─────────────────────────────────────────────────────────── */
const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "dob",
  "gender",
  "nationality",
  "city",
  "education",
  "institution",
  "fieldOfStudy",
  "graduationYear",
  "employed",
  "program",
  "about",
  "goals",
] as const;

/* ── basic validation helpers ─────────────────────────────────────────────── */
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function sanitize(v: FormDataEntryValue | null): string {
  if (typeof v !== "string") return "";
  return v.replace(/\0/g, "").trim().slice(0, 2000);
}

/* ── POST handler ─────────────────────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Validate required text fields
  for (const field of REQUIRED_FIELDS) {
    if (!sanitize(formData.get(field))) {
      return NextResponse.json(
        { error: `${field} is required.` },
        { status: 400 },
      );
    }
  }

  // Validate email format
  if (!isValidEmail(sanitize(formData.get("email")))) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  // Validate CV if provided
  const cvFile = formData.get("cv");
  let cvEntry: File | null = null;
  if (cvFile && cvFile instanceof File && cvFile.size > 0) {
    if (cvFile.type !== "application/pdf") {
      return NextResponse.json(
        { error: "CV must be a PDF file." },
        { status: 400 },
      );
    }
    if (cvFile.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { error: "CV file must be 5 MB or smaller." },
        { status: 400 },
      );
    }
    cvEntry = cvFile;
  }

  if (
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    console.error("[apply] Missing Google credentials in environment");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  try {
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY as string)
      .split(String.raw`\n`)
      .join("\n");

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // ── Upload CV to Cloudinary if provided ────────────────────────────────
    let cvLink = "";
    if (cvEntry) {
      const fullName = sanitize(formData.get("fullName"));
      const publicId = `${fullName}-${Date.now()}`;

      const arrayBuffer = await cvEntry.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      cvLink = await new Promise<string>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "image", // PDFs must use "image" for dashboard preview
            folder: "aequitas-cvs",
            public_id: publicId,
            format: "pdf",
            pages: true, // generate page thumbnails
          },
          (error, result) => {
            if (error || !result)
              return reject(error ?? new Error("Cloudinary upload failed"));
            resolve(result.secure_url);
          },
        );
        Readable.from(buffer).pipe(stream);
      });
    }

    // ── Append row to Sheet ─────────────────────────────────────────────────
    const sheets = google.sheets({ version: "v4", auth });

    const row = [
      new Date().toISOString(), // A — Timestamp
      sanitize(formData.get("fullName")), // B — Full Name
      sanitize(formData.get("email")), // C — Email
      sanitize(formData.get("phone")), // D — Phone
      sanitize(formData.get("dob")), // E — Date of Birth
      sanitize(formData.get("gender")), // F — Gender
      sanitize(formData.get("nationality")), // G — Nationality
      sanitize(formData.get("city")), // H — City / Region
      sanitize(formData.get("education")), // I — Education Level
      sanitize(formData.get("institution")), // J — Institution
      sanitize(formData.get("fieldOfStudy")), // K — Field of Study
      sanitize(formData.get("graduationYear")), // L — Graduation Year
      sanitize(formData.get("employed")), // M — Employment Status
      sanitize(formData.get("program")), // N — Program Interest
      sanitize(formData.get("about")), // O — About
      sanitize(formData.get("goals")), // P — Career Goals
      sanitize(formData.get("skillsNeeded")), // Q — Skills / Support Needed
      sanitize(formData.get("linkedin")), // R — LinkedIn (optional)
      sanitize(formData.get("howHeard")), // S — How Did You Hear About Us
      cvLink, // T — CV Link
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Applications!A:T",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[apply] Submission error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 },
    );
  }
}
