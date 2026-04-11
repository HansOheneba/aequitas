export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: BlogBlock[];
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "video"; embedId: string; title: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "link"; label: string; href: string; description: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-resume-tips-every-graduate-needs",
    title: "5 Resume Tips Every Graduate Needs to Know",
    excerpt:
      "Your resume is your first impression — and most hiring managers spend less than 10 seconds on it. Here's how to make yours count.",
    category: "Career Advice",
    date: "March 28, 2026",
    readTime: "4 min read",
    coverImage: "/gallery/aeq-expereince/MG_1044-scaled.webp",
    content: [
      {
        type: "paragraph",
        text: "Your resume is your silent ambassador. It represents you before you ever walk into the room, and it's the first thing an HR manager sees before deciding whether or not to invite you for an interview. Most hiring managers spend fewer than 10 seconds on an initial scan. That window is all you get.",
      },
      {
        type: "paragraph",
        text: "At Aequitas Foundation, resume coaching is a core part of how we prepare graduates for the job market. The feedback we hear most often from employers? Too generic, too long, and not results-focused. Here are five things to fix right now.",
      },
      {
        type: "heading",
        text: "1. Tailor it — every time",
      },
      {
        type: "paragraph",
        text: 'Send a generic resume and you get a generic rejection. Read the job description carefully and mirror the language it uses. If the role says "stakeholder engagement," your resume should say "stakeholder engagement" — not "worked with people." Customising takes 15 minutes and dramatically improves your callback rate.',
      },
      {
        type: "heading",
        text: "2. Start with a punchy summary",
      },
      {
        type: "paragraph",
        text: "The top third of your resume is prime real estate. Use it for a 3–4 line professional summary that tells the employer who you are, what you bring, and what you're looking for. Skip the overused phrases like 'hardworking team player' — instead, be specific: 'Finance graduate with 6 months of audit experience and a track record of streamlining reporting processes.'",
      },
      {
        type: "heading",
        text: "3. Use strong action verbs",
      },
      {
        type: "paragraph",
        text: "Led. Built. Designed. Reduced. Delivered. These words signal ownership and impact. Avoid passive language like 'was responsible for' or 'helped with.' Replace them with verbs that show you drove results, not just participated in them.",
      },
      {
        type: "heading",
        text: "4. Quantify your achievements",
      },
      {
        type: "paragraph",
        text: '"Increased sales by 30%" is more powerful than "helped boost sales." Numbers give context and credibility. Think about your work in terms of: How many? How much? How fast? Even if the numbers seem small, they show you measure your impact — and that matters to employers.',
      },
      {
        type: "heading",
        text: "5. Keep it clean — 1 to 2 pages maximum",
      },
      {
        type: "paragraph",
        text: "Unless you have 10+ years of experience, your resume should not be longer than two pages. White space is not wasted space — it makes your resume easier to scan. Use a clean font (Calibri, Arial, or Garamond), consistent formatting, and clear section headers. No colours, no photos, no elaborate design unless you're in a creative field.",
      },
      {
        type: "quote",
        text: "You don't get a second chance to make a first impression. Make sure your resume speaks well before you ever walk through the door.",
      },
      {
        type: "video",
        embedId: "t78MRksxi44",
        title: "Resume Tips — Aequitas Foundation Training Session",
        caption:
          "Watch our facilitator break down these resume principles in a live Aequitas training session.",
      },
      {
        type: "heading",
        text: "Where to go from here",
      },
      {
        type: "paragraph",
        text: "If you're a recent graduate looking for structured support — not just a tiplist — the Aequitas Experience and Empower Her Dreams programmes both include hands-on CV workshops and one-on-one career coaching. Applications are open.",
      },
      {
        type: "link",
        label: "Apply for the Aequitas Experience →",
        href: "/apply",
        description: "Our flagship 16-week internship and training programme",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-your-first-job-interview",
    title: "How to Prepare for Your First Job Interview",
    excerpt:
      "The offer doesn't go to the most qualified candidate — it goes to the best-prepared one. Here's a practical guide to walking in ready.",
    category: "Career Advice",
    date: "March 14, 2026",
    readTime: "5 min read",
    coverImage: "/gallery/aeq-expereince/MG_0816-scaled.webp",
    content: [
      {
        type: "paragraph",
        text: "Getting the interview is half the battle. The other half? Showing up prepared. Most graduates underestimate how much preparation separates a forgettable candidate from a memorable one. It's rarely the most brilliant person who gets the job — it's usually the one who came ready.",
      },
      {
        type: "heading",
        text: "Research the organisation — deeply",
      },
      {
        type: "paragraph",
        text: "Go beyond the About page. Read recent news, understand their products or services, know their competitors, and understand the challenges facing their industry. When you can speak to the organisation's context in the interview, you signal that you're already thinking like an insider — not a job-seeker.",
      },
      {
        type: "heading",
        text: "Prepare for the STAR method",
      },
      {
        type: "paragraph",
        text: "Most competency-based interviews ask behavioural questions: 'Tell me about a time when...' The STAR framework helps you answer clearly: Situation (set the scene), Task (what was your role), Action (what you did), Result (what happened). Practice 6–8 STAR stories from your academic or work experience. They'll cover 90% of the questions you face.",
      },
      {
        type: "list",
        items: [
          "S — Situation: Briefly describe the context",
          "T — Task: What was your specific role or challenge",
          "A — Action: What steps did you take (focus here — this is your value)",
          "R — Result: What was the outcome? Quantify if possible",
        ],
      },
      {
        type: "heading",
        text: "Prepare strong questions to ask them",
      },
      {
        type: "paragraph",
        text: '"Do you have any questions for us?" is not an afterthought. It\'s your chance to show genuine interest and intellectual curiosity. Avoid asking about salary in the first round unless they bring it up. Instead, ask about team structure, what success looks like in the role, or challenges the team is currently navigating.',
      },
      {
        type: "heading",
        text: "Handle nerves — they're normal",
      },
      {
        type: "paragraph",
        text: "Everyone is nervous before interviews. The difference is that prepared people channel nerves into energy. Arrive 10–15 minutes early. Take a few slow deep breaths beforehand. Bring a copy of your CV. Maintain eye contact. Speak at a measured pace — nervousness makes people rush. Pause before answering difficult questions; interviewers respect thoughtfulness.",
      },
      {
        type: "video",
        embedId: "uOLz_FkerpY",
        title: "Interview Preparation — What Employers Really Look For",
        caption:
          "A practical breakdown of how to present yourself confidently in professional interviews.",
      },
      {
        type: "heading",
        text: "Follow up after the interview",
      },
      {
        type: "paragraph",
        text: "Within 24 hours, send a short, professional thank-you email to the interviewer (or main point of contact). Refer to something specific from the conversation. It takes 3 minutes and very few candidates do it — which means it stands out.",
      },
      {
        type: "quote",
        text: "Preparation doesn't guarantee the job. But lack of preparation almost certainly costs you it.",
        attribution: "Aequitas Foundation facilitator",
      },
      {
        type: "link",
        label: "Join the Aequitas Experience →",
        href: "/programs/aequitas-experience",
        description:
          "Our structured programme includes mock interviews and one-on-one career coaching",
      },
    ],
  },
  {
    slug: "what-to-do-after-national-service",
    title:
      "What to Do After National Service (A Practical Guide for Ghanaian Graduates)",
    excerpt:
      "National Service ends and the uncertainty begins. Here's a clear, honest framework for the months that follow.",
    category: "Graduate Life",
    date: "February 19, 2026",
    readTime: "6 min read",
    coverImage: "/gallery/aeq-expereince/MG_1096-scaled.webp",
    content: [
      {
        type: "paragraph",
        text: "You've submitted your final report. The uniform's packed away. And now it hits — 'What do I do next?' For most Ghanaian graduates, the post-National Service period is one of the most uncertain stretches of their early adult lives. The structure disappears, and suddenly everything is open-ended.",
      },
      {
        type: "paragraph",
        text: "This guide is direct and practical. No platitudes. Just a clear-eyed look at how to navigate the months immediately after service — and position yourself to actually move forward.",
      },
      {
        type: "heading",
        text: "Month 1: Take stock before you launch",
      },
      {
        type: "paragraph",
        text: "Resist the pressure to immediately fire off applications to every company you can find. Take two to three weeks to properly assess where you are. What did you learn during service? What skills did you develop or discover? What frustrated you, and what energised you? Your time doing National Service has shaped you — understand how before you decide where to go.",
      },
      {
        type: "heading",
        text: "Update your professional profiles immediately",
      },
      {
        type: "paragraph",
        text: "Add your National Service experience to your CV and LinkedIn profile. Update your education section, your summary, and your skills. If you don't have a LinkedIn profile, create one now. Recruiters in Ghana are actively using LinkedIn, and a blank profile is a missed opportunity.",
      },
      {
        type: "heading",
        text: "Be intentional about which opportunities to pursue",
      },
      {
        type: "paragraph",
        text: "The post-service job market in Ghana is competitive. Applying for everything rarely works — it leads to burnout and diluted effort. Identify 3–5 organisations you genuinely want to work for and research them deeply. Targeted, tailored applications consistently outperform high-volume scattergun approaches.",
      },
      {
        type: "list",
        items: [
          "Identify your top 3–5 target employers",
          "Research each company thoroughly — not just their website",
          "Connect with employees at those companies on LinkedIn",
          "Tailor your CV and cover letter for each application",
          "Follow up every application after 7–10 business days",
        ],
      },
      {
        type: "heading",
        text: "Consider structured programmes while you search",
      },
      {
        type: "paragraph",
        text: "The gap between service and full-time employment can stretch for months. Use it well. Programmes like the Aequitas Experience and Empower Her Dreams are designed exactly for this period — they give you real work experience, professional coaching, and a network, while you're in the process of building your career.",
      },
      {
        type: "image",
        src: "/gallery/aeq-expereince/MG_1474-scaled.webp",
        alt: "Aequitas Foundation training session",
        caption:
          "An Aequitas Experience cohort session — structured support for the transition from service to employment.",
      },
      {
        type: "heading",
        text: "Don't underestimate soft skills",
      },
      {
        type: "paragraph",
        text: "Technical qualifications get you in the room. Soft skills get you the offer. Employers consistently rank communication, emotional intelligence, and professional presence as decisive factors — especially for entry-level roles where everyone on the shortlist has a similar degree. Invest time in developing these deliberately.",
      },
      {
        type: "quote",
        text: "The post-service period is not a waiting room. It's the foundation-laying season. How you use it shapes the next five years.",
        attribution: "Aequitas Foundation",
      },
      {
        type: "link",
        label: "Apply for Empower Her Dreams →",
        href: "/programs/empower-her-dreams",
        description:
          "A 16-week programme for female graduates who've completed National Service",
      },
    ],
  },
  {
    slug: "the-power-of-mentorship-in-your-career",
    title: "Why Mentorship is the Career Shortcut Nobody Talks About",
    excerpt:
      "Most career breakthroughs don't happen in lecture halls or online courses. They happen in conversations with the right person.",
    category: "Professional Development",
    date: "January 30, 2026",
    readTime: "4 min read",
    coverImage: "/gallery/aeq-expereince/MG_0924-scaled.webp",
    content: [
      {
        type: "paragraph",
        text: "Everyone talks about hard work and qualifications. Fewer people talk about the phone call, the coffee meeting, or the candid conversation that quietly changed everything. Mentorship is one of the most powerful and underused career accelerators available to young professionals — and in Ghana's job market, it might matter more than anywhere.",
      },
      {
        type: "heading",
        text: "What mentorship actually is",
      },
      {
        type: "paragraph",
        text: "Mentorship is not a formal programme. It's not a weekly call with an assigned contact. At its core, mentorship is a relationship with someone further along a path you want to travel — someone willing to share what they know. It can be structured or informal. What matters is that it's honest, reciprocal, and consistent.",
      },
      {
        type: "heading",
        text: "What a good mentor gives you",
      },
      {
        type: "list",
        items: [
          "Honest feedback that friends and family rarely give",
          "Perspective on decisions that feel enormous but are often navigable",
          "Access to networks and opportunities you wouldn't otherwise know exist",
          "A sounding board for ideas before you put them into the world",
          "The confidence that comes from being believed in by someone who knows their field",
        ],
      },
      {
        type: "heading",
        text: "How to find a mentor when you're starting out",
      },
      {
        type: "paragraph",
        text: "The mistake most young professionals make is looking for a mentor before they've done the groundwork. Start by building a clear picture of what you want. Then identify two or three people whose careers resemble where you want to go — not necessarily the most famous or senior, but people who are doing work that genuinely interests you.",
      },
      {
        type: "paragraph",
        text: "Reach out with a specific, short message. Not 'I'd love to pick your brain' — that's vague and forgettable. Instead: 'I'm a recent marketing graduate preparing for roles in brand strategy. I've been following your work at [Company] and would value 20 minutes to ask you two or three specific questions about how you transitioned from X to Y.' Specific requests get specific responses.",
      },
      {
        type: "heading",
        text: "What you owe a mentor",
      },
      {
        type: "paragraph",
        text: "Respect their time absolutely. Come prepared. Follow up when they give advice — they want to know what happened. Share your progress. And eventually, pass it on. The most valuable thing you can do when you're three years further along is turn around and help someone who's where you once were.",
      },
      {
        type: "image",
        src: "/gallery/aeq-expereince/MG_1526-scaled.webp",
        alt: "Mentorship session at Aequitas Foundation",
        caption:
          "One-on-one mentoring is built into every Aequitas Foundation programme.",
      },
      {
        type: "quote",
        text: "If I have seen further, it is by standing on the shoulders of giants.",
        attribution: "Isaac Newton",
      },
      {
        type: "link",
        label: "Apply for the Aequitas Experience →",
        href: "/programs/aequitas-experience",
        description:
          "Every cohort receives structured mentorship from industry professionals",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
