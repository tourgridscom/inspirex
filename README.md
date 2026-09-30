# InspireX — website

A rebuild of [inspirex.ca](https://www.inspirex.ca) on Next.js (App Router),
React, TypeScript and Tailwind CSS v4.

The archived site at
`web.archive.org/web/20250803232212/https://www.inspirex.ca/` is the source of
truth for **what the site says**. Everything about **how it says it** — layout,
type, colour, navigation, components, motion — is new.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerender)
npm run lint
npx tsc --noEmit
```

## Design system

**Concept — the unbroken line.** InspireX's own vocabulary is continuity:
*eliminate interruptions*, *minimize downtime*, *24/7 monitoring*, *disaster
recovery*. One device carries that through the site: a continuous monitoring
trace, drawn once in the hero readout, echoed in the logo, the section rules,
and the rail the homepage outcomes hang from. It is deliberately **level**, not
rising — it depicts steady service, not a performance claim.

**Colour.** Both brand values were recovered from the archived stylesheet and
then modernized in use, not replaced.

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#0a1d28` | deepest surface |
| `ink-800` | `#0d2a38` | **recovered brand navy** |
| `signal` | `#d35652` | **recovered brand accent** — trace, primary CTA, active state only |
| `paper` / `paper-2` | `#f6f7f8` / `#eceff1` | cool light surfaces (never cream) |
| `body` / `mist` | `#2c3c46` / `#647883` | text and muted text |

**Type.** Archivo for display (tight tracking at large sizes), IBM Plex Sans for
body. Fluid scales live in `app/globals.css` as `.type-hero`, `.type-h2`,
`.type-h3`, `.type-lead`.

**Motion.** One orchestrated moment — the hero trace drawing itself — plus
hover and state transitions. There are no scroll-reveal animations: content is
never hidden behind JavaScript. Everything respects
`prefers-reduced-motion`.

## Structure

```
app/
  page.tsx                      home
  about/ solutions/ why-inspirex/ team/ careers/ contact/
  solutions/[slug]/             11 prerendered solution pages
  solutions/[slug]/opengraph-image.tsx
  opengraph-image.tsx  icon.tsx  apple-icon.tsx
  sitemap.ts  robots.ts  not-found.tsx
components/  layout/ navigation/ hero/ sections/ solutions/ contact/ ui/
lib/
  content/    company.ts  solutions.ts  nav.ts   <- all archived copy
  constants/  site.ts
  utils/      metadata.ts  jsonLd.tsx  cn.ts
public/      images/  video/  llms.txt
```

All copy lives in `lib/content/`. Pages read from it; no page hard-codes
company facts.

## SEO

- Unique title, meta description, canonical, Open Graph and Twitter tags on
  every route, built through one helper (`lib/utils/metadata.ts`) because
  page-level `openGraph` **replaces** rather than merges with the parent's.
- Generated social images: a branded site-wide card, plus a per-solution card
  showing that solution's title and summary.
- JSON-LD: `Organization` + `ProfessionalService` + `WebSite` graph site-wide
  (including CAGE and small-business identifiers and the full service catalog),
  then `BreadcrumbList` on every inner page and `Service`, `AboutPage`,
  `ContactPage` and `CollectionPage` where they apply.
- `app/sitemap.ts` (18 URLs) and `app/robots.ts`, which explicitly allows
  GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended and others.
- `public/llms.txt` summarising the company, its eleven solutions and its
  pages for LLM retrieval.
- One `<h1>` per page, no heading-level skips, every image has an `alt`.

## Content provenance and judgement calls

Three things in the archive needed a decision. Each was resolved in favour of
not inventing anything:

1. **"Novation Tek" in the About copy.** Two paragraphs on the archived
   `/about-us/` page named a different company — a leftover from the source
   template. The name is corrected to InspireX; the wording is otherwise
   preserved. Noted in `lib/content/company.ts`.

2. **No individual team members exist in the archive.** The archived team
   section is a collective statement only: no names, titles, photographs or
   biographies. Rather than invent people, `/team` is an editorial page built
   on what the archive does document — the five senior disciplines and the
   "over 30 years of combined experience" statement — and invites contact for
   introductions.

3. **The careers application form is not recoverable.** The archived
   "APPLICATION" button pointed at a broken `mailto:HR@NovationTek.com`, and no
   application document survives in the archive. `/careers` therefore preserves
   the real process — email your application and resume to `HR@inspirex.ca` —
   as a three-step flow rather than linking a file that does not exist. If the
   original form is found, drop it in `public/documents/` and link it from the
   "Send your application" panel.

Also preserved verbatim: the address, both email addresses, the five
principles, mission and vision commitments, the culture mottos, the business
licences (CAGE 87PLO, California Certified Small Business 2013947) and all
eleven service descriptions including the AIEP approach.

Stub pages found in the archive (`/why-us/`, `/solutions/`, `/careers/`,
`/contact-us/`) contained only duplicated homepage text and a contact form, so
they contributed no content.

## Media

- `public/video/inspirex-hero.mp4` — the company's own hero clip, recovered
  from the archive and played in full. It is muted, looped and inline, and
  stays paused on its poster frame under `prefers-reduced-motion` or on a
  metered/slow connection.
- `public/images/inspirex-workspace.jpg` — recovered from the archived site.
- Remaining photography is from [Pexels](https://www.pexels.com) (Pexels
  licence, no attribution required): photo IDs 37730212, 5480781, 34576700,
  17489151, 7709161, 6457521, 37730211. The archive's other stock photographs
  were dated and were replaced.

## Verified

Production build prerenders all routes. Checked at 1440, 1280, 1024, 768, 430,
390, 375 and 360px across every page: no console errors, no broken images, no
horizontal scroll, no heading-level skips, keyboard focus visible in the brand
accent, and contact-form validation that moves focus to the first invalid
field.
