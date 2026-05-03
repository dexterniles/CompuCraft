# CompuCraft

Marketing site for CompuCraft — a custom PC build and computer-service business based in North Attleboro, MA.

Built with Next.js 15 (App Router), TypeScript (strict), Tailwind CSS v4, and framer-motion. Static site, no database, no auth, no analytics.

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm start       # serve production build locally
npm run lint    # next lint
```

Requires Node.js 20+.

---

## Deploy to Vercel

### Option A — GitHub (recommended for first deploy)

1. Push this repo to GitHub.
2. On <https://vercel.com>, click **Add New → Project** and import the GitHub repo.
3. Vercel auto-detects Next.js. No environment variables are needed. Click **Deploy**.

Subsequent pushes to `main` will auto-deploy production. Pull requests get preview deployments automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel            # first run links the project + deploys a preview
vercel --prod     # production deploy
```

### Custom domain

In the Vercel dashboard, go to **Project → Settings → Domains** and add `compucraft.com` (and `www.compucraft.com`). Vercel will walk you through the DNS records.

After the domain is live, update `site.url` in [`content/site.ts`](content/site.ts) if it changes — that value drives the sitemap, OG tags, and canonical URLs.

---

## Editing content

All copy lives in [`content/`](content/) as plain TypeScript files. Edit, save, and the page re-renders. No CMS.

| File                          | What it controls                                                |
| ----------------------------- | --------------------------------------------------------------- |
| [`content/site.ts`](content/site.ts)         | Brand name, tagline, domain, service-area towns                 |
| [`content/services.ts`](content/services.ts) | Service categories, bullet items, "Not Offered" list            |
| [`content/pricing.ts`](content/pricing.ts)   | Hourly rate, diagnostic fee, time estimates, travel, warranty   |
| [`content/faq.ts`](content/faq.ts)           | FAQ items (`{ q, a }[]`)                                        |
| [`content/about.ts`](content/about.ts)       | About-page paragraphs                                           |
| [`content/contact.ts`](content/contact.ts)   | Email address, Messenger link toggle, drop-off note             |

To add a new FAQ, append to the `faqs` array. To change the rate, edit `pricing.hourlyRate` and `pricing.hourlyRateDisplay`. The TypeScript types are exported so the editor will catch missing fields.

---

## Swapping in real photos

Placeholders use [`PlaceholderImage`](components/ui/PlaceholderImage.tsx), which is a labeled neutral block. Each one carries a descriptive `label` / `alt` that matches the eventual photo.

To replace one with a real image:

1. Drop the photo in `public/gallery/<name>.jpg`.
2. Replace the `<PlaceholderImage>` with `<Image>` from `next/image`, keeping the same `alt`:

   ```tsx
   import Image from "next/image";

   <Image
     src="/gallery/build-front.jpg"
     alt="Custom build — front"
     width={800}
     height={1067}
     className="rounded-[var(--radius-lg)]"
   />
   ```

The gallery page ([`app/gallery/page.tsx`](app/gallery/page.tsx)) is the main place this happens. Service-page placeholders use the same component so the swap is identical.

---

## Updating the Facebook Marketplace link

When the Marketplace listing is posted, edit [`content/contact.ts`](content/contact.ts):

```ts
messengerUrl: "https://www.facebook.com/messages/...",
messengerAvailable: true,
```

The footer link, the contact-page Messenger card, and the placeholder note all read from those two fields — no other edits required.

---

## Project layout

```
app/
  layout.tsx              Root layout (header, footer, fonts, skip-link)
  page.tsx                Home (/)
  services/page.tsx       /services
  pricing/page.tsx        /pricing
  faq/page.tsx            /faq
  about/page.tsx          /about
  gallery/page.tsx        /gallery
  contact/page.tsx        /contact
  sitemap.ts              Generated /sitemap.xml
  robots.ts               Generated /robots.txt
  opengraph-image.tsx     Default OG image (1200x630)
  globals.css             Tailwind v4 + design tokens (@theme)
components/
  layout/                 Header, Footer, Container
  ui/                     Button, Card, FAQItem, FadeIn, PlaceholderImage, SectionHeading
  sections/               Hero, ServicesPreview, PricingPreview, WarrantyCallout, ContactCTA
content/                  Source-of-truth copy (site, services, pricing, faq, about, contact)
lib/
  metadata.ts             buildMetadata() helper for per-page <title>/OG tags
```

---

## Decisions made

- **Tailwind v4** with CSS-first config (`@theme` block in `globals.css`). No `tailwind.config.ts`.
- **framer-motion** for a single `<FadeIn>` wrapper. Respects `prefers-reduced-motion`.
- **FAQ** uses native `<details>` / `<summary>` — no client JS needed, screen-reader-friendly out of the box.
- **No `vercel.json` / `vercel.ts`**: vanilla Next.js auto-detects on Vercel with zero config. No redirects, headers, or crons are needed for v1. If those are added later, add a [`vercel.ts`](https://vercel.com/docs/project-configuration/vercel-ts).
- **Accent color**: muted terracotta `#B8533A`. To change, edit `--color-accent` in [`app/globals.css`](app/globals.css).
- **Body font**: Inter via `next/font/google`, self-hosted at build, swap-display.
- **No analytics, cookie banner, chat widget, newsletter, or social icons** — per spec.
- **Gallery** is its own route with a designed "Photos coming soon" empty state plus labeled placeholders, ready for swap-in.
- **Contact**: email is the primary channel; Messenger is wired but disabled until the Marketplace listing exists.

---

## License

Private project. All rights reserved.
