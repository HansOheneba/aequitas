<!-- BEGIN:nextjs-agent-rules -->
# Project Guidelines for AI Agents

## Framework
- This project uses Next.js (latest, App Router).
- Always follow the official docs in `node_modules/next/dist/docs/` due to breaking changes.
- Prefer Server Components unless interactivity is required.

## Language & Types
- Use TypeScript strictly.
- DO NOT use `any` — always define explicit types/interfaces.

## Styling
- Use Tailwind CSS only.
- Keep UI clean, modern, and slightly artistic (inspired by minimalist designs like Unsplash).
- Use responsive design by default.

## Components
- Write reusable, modular components.
- Keep components small and focused.
- Use clear naming (e.g., GalleryTabs, ImageGrid, Lightbox).

## Images
- Always use Next.js `<Image />` for optimization.
- Prefer responsive and full-width layouts.

## State & Interactivity
- Use React hooks (useState, useEffect) where necessary.
- Avoid unnecessary client components.

## Code Quality
- Keep code clean and readable.
- Avoid over-engineering.
- Use proper folder structure.

## UX Expectations
- Smooth animations and transitions.
- Subtle hover effects.
- Full-screen, immersive layouts when appropriate.
- Keep a professional yet artsy vibe

## Important
- This is NOT standard Next.js behavior — always verify APIs against project docs.
<!-- END:nextjs-agent-rules -->