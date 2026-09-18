# Ivy Villafrance — Virtual Assistant (Next.js)

A single-page site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/layout.tsx` — root layout, loads Fraunces (display) and Work Sans (body) via `next/font/google`
- `app/globals.css` — brand color tokens as CSS variables, with a `prefers-color-scheme: dark` override
- `app/page.tsx` — composes the page from the components below
- `components/Header.tsx` — sticky nav with a mobile menu (client component)
- `components/Hero.tsx` — headline + illustrated SVG
- `components/Services.tsx` — services list, data-driven
- `components/About.tsx` — bio + illustrated monogram
- `components/Process.tsx` — 4-step onboarding timeline
- `components/Testimonials.tsx` — client quotes
- `components/Contact.tsx` — contact form (front-end only; wire `onSubmit` to your email/CRM)
- `components/Footer.tsx`

## To customize

- Swap the placeholder name, copy, and testimonials for the real ones.
- Brand color lives in `app/globals.css` as `--pink` (currently `#faaeff`) — change it there and it propagates everywhere via Tailwind's `pink` color.
- Wire `components/Contact.tsx`'s form submit handler to an API route, email service, or CRM before deploying.
