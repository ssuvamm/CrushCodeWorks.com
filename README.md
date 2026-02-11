# CrushCodeWorks — Astro Agency Website

## Animation architecture (performance-first)
- Static-first rendering with Astro SSG for crawlability and low TTFB.
- Framer Motion is used only in hydrated islands for micro-interactions (`ScrollProgress`, stats cards, magnetic button).
- GSAP is dynamically imported only in advanced sections (`HeroReveal`, `ScrollStory`) so it never blocks initial rendering.
- `prefers-reduced-motion` is respected globally in CSS and in JS animation components.
- Motion uses only `transform` and `opacity` to avoid layout thrashing.

## Stack
- Astro 5 + TailwindCSS + React islands
- shadcn/ui scaffold (`components.json` + `src/components/ui/button.tsx`)
- Content collections for `work` and `blog`

## Run locally
```bash
npm install
npm run dev
```

## Build checks
```bash
npm run check
npm run build
```

## Environment variables
Create `.env`:
```bash
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint
```

## Deployment (Coolify + Cloudflare)
1. Push this repo to your Git provider.
2. In Coolify, create a **Static Site** resource and connect this repo.
3. Build command: `npm ci && npm run build`
4. Publish directory: `dist`
5. Add environment variable `CONTACT_WEBHOOK_URL` in Coolify.
6. Point Cloudflare DNS `A`/`CNAME` records to the Coolify-managed domain.
7. Enable Cloudflare proxy + caching, and keep HTML cache bypassed for freshness.

## Performance notes
- Keep large media in AVIF/WebP under `public/images` and lazy-load non-critical media.
- Keep third-party embeds (`cal.com`) below the fold and `loading="lazy"`.
- Avoid hydrating static sections; use islands only for interaction.
