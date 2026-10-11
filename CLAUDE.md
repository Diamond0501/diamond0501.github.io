# Repository Overview

The website of Yiting Chen's practice for couples therapy and coaching (online sessions only), served at https://yitingchen.de. It is a static [Astro](https://astro.build/) site styled with Tailwind CSS v4 and hosted on GitHub Pages. German is the default language; English and Chinese (Simplified) mirror every content page. The legal pages exist in German only.

# Technology Stack

- **Static Site Generator**: Astro
- **CSS Framework**: Tailwind CSS v4 (CSS-first config in `src/styles/global.css`, no `tailwind.config.js`; `@tailwindcss/typography` for the legal pages)
- **Fonts**: Young Serif (display) and Nunito Sans (body) through Astro's fonts API with the fontsource provider. They are downloaded at build time and self-hosted, so the build needs network
- **Images**: `astro:assets` `<Picture>` (AVIF/WebP), sharp
- **Icons**: Phosphor via `astro-icon`: duotone for content icons, inlined (`ph:<name>-duotone`, `is:inline`); regular weight for the UI controls (language globe, menu, FAQ plus)
- **Tooling**: ESLint, Prettier, husky + lint-staged pre-commit hook
- **Package Manager**: pnpm (Node version in `.nvmrc`)
- **Hosting**: GitHub Pages with the custom domain yitingchen.de; DNS is a Cloudflare zone managed from the delorean repo (setup in the README)

# Development Commands

```bash
pnpm install        # install dependencies and the git hooks
pnpm dev            # dev server at http://localhost:13669
pnpm build          # build into dist/
pnpm preview        # serve the build
pnpm lint           # ESLint (pnpm lint:fix to fix)
pnpm format         # Prettier write (pnpm format:check to check)
pnpm check          # astro check (types)
pnpm check:launch   # fail if any built page still contains a TODO placeholder
```

The pre-commit hook runs ESLint and Prettier on staged files and blocks the commit on lint errors.

# Architecture & Structure

## Routing and languages

- `src/i18n/routes.ts` is the only place the localized slugs exist: the route map from page key to the German, English and Chinese path, plus `pathFor`, `alternatesFor` and `navKeys` (nav order). Astro's own `i18n` config is not used, because the route map already generates every localized path. The German-only legal pages are linked by their literal paths
- `src/pages/[...slug].astro` builds all localized pages from that map and renders the matching page component from `src/components/pages/`
- `hreflang` alternates (with `x-default` → German) live only in the HTML head; the sitemap has no alternates because `@astrojs/sitemap`'s `i18n` option cannot pair translated slugs
- Pages outside the route map (`impressum.md`, `datenschutz.md`, `agb.md`, `404.astro`) get no `hreflang` links, and their language switcher points to the other languages' home pages
- `src/i18n/ui.ts` holds shared UI strings (nav, footer, closing block)

## Content

- Each page's text lives in a typed module `src/data/pages/<key>.ts` exporting `Record<Locale, …>`. German is authored first; English and Chinese (formal 您) are translations
- Paartherapie and Coaching share one template (`src/components/pages/ServicePage.astro`) and one content shape (`ServiceContent` in `src/data/pages/service.ts`): approach list → topic grid → process steps (`#ablauf`) → online sessions → prices and conditions (`#kosten`) → closing. Text both pages show word for word lives once in `service.ts`. Keep the two pages parallel
- **Line counts are part of the design.** At desktop widths (checked at 1440 and 1600 px), siblings match: every item in a list or grid has the same number of lines, grid and list titles are one line, inner-page titles are one line, and inner-page leads have the same line count within a language (DE/EN 3, ZH 2). Section titles stand alone, without a one-line tagline under them. After editing copy, re-check the affected page in all three languages
- Unresolved content renders the literal marker `TODO` (e.g. `TODO(yiting): …`). `pnpm check:launch` fails on it, and CI runs it before deploying, so nothing ships with a placeholder
- Her titles are "Psychologin (M.Sc.), Paartherapeutin & Coach" ("Coach", never "Coachin"). The provider name is "Yiting Chen, Paartherapie & Coaching" on one line, as on her letterhead
- `src/data/site.ts`: name, contact details, contact form URL, OG image, locales and their `lang` tags
- Legal pages are Markdown with `layout: ../layouts/MarkdownPageLayout.astro`

## Layout & Components

- Below 1180 px the four page links move into a `<details class="menu">` disclosure; at 520 px and below the language switcher moves in too. Both link lists are always rendered and CSS shows one per breakpoint

## Styling System

- A single `src/styles/global.css`, imported once in `BaseLayout.astro`: `@theme` colour tokens, `@layer base`, `@layer components` (all component classes), and an unlayered `.prose` override block (the typography plugin emits `.prose` into the `utilities` layer, so layered overrides would lose)
- **Colour by role**, all Tailwind colours (the default palette is cleared, so only these exist):
  - Sand: `orange-50` page and hero background (the hero photo fades into it), `orange-100` large sections, the wave, the closing section and the footer
  - `white` for cards and icon tiles; `stone-800` body text, `stone-600` footer text
  - Blue: `sky-900` wordmark and headings; `sky-800` text links (including the email and phone links), icons and focus; `sky-200` only for the duotone fill layer of icons, the same for every icon
  - Orange for calls to action and small accents, in the sand's colour family: `orange-700` filled buttons, the Kontakt button and eyebrows, `orange-800` button hover, `orange-600` the nav underline and the active-language and menu markers. White on `orange-700` passes 4.5:1; `orange-600` is too light for text
  - `rule` (hairlines), `edge` (card borders) and `field` (form field borders, 3:1 against white) are translucent `sky-900`
  - The one colour outside the palette is the card shadow, a translucent dark blue-grey
- **Cards**: grouped content (topic grids, price cards, the FAQ, home offers, the request form, and `IconList` for items with a heading and text) sits on the white `.card` surface. Every plain icon + text list uses `RecList` (hairline rows), never a card. Info notes (`.note`) are plain text with an icon
- Adjacent sections never share a background; the footer is the one exception, set off by its hairline. Inner pages run: page head (`orange-50`, wave) → `orange-100` → `orange-50` … → closing → footer (`orange-100` with a hairline). The closing is `orange-100`, except right after an `orange-100` section, where it takes `orange-50`. The contact page has no closing
- **Avoid translucent gradients over flat colour**: they can band. The hero photo's side fades (a CSS mask, see below) are the one accepted exception; the fade below the stacked hero photo ends opaque
- Only the hero has an entrance animation (staggered text entrance and photo settle). Everything else is limited to short hover and open transitions. The entrance is gated on `html.js` (set by an inline head script) and `prefers-reduced-motion: no-preference`, so all content is visible without JS or with reduced motion

## Hero photo

- The hero image is positioned by the geometry of its 4500×2600 master, kept as custom properties on `.hero`: head top y = 750, silhouette right edge x = 2850, silhouette centre x = 2183. From 1180 px (the same breakpoint as the nav menu): photo beside the text, head top aligned with the text block, silhouette edge with the content column. Below 1180 px: photo above the text in a square box capped at 58svh, head 24 px below the top, silhouette centred
- `src/assets/hero/yiting-chen-hero.jpg` is the master resized to 3000 px wide (JPEG quality 80), with no fade in it. A CSS mask on the image fades both sides into the hero background. Side by side, the left fade reaches at least 3rem past the text column, so at medium widths the text stays on sand (exact stops in the `.hero-media img` comment). The master lives only locally, in `.turbo/prototypes/yiting-chen-personal-website-assets/` (gitignored)
- Her portrait (`src/assets/portrait/`) and `public/og-image.jpg` are crops of the same master

## Images and credits

- Stock photos are faceless and culturally neutral, from Unsplash or Pexels. Every file in `src/assets/photos/` needs an entry (photographer, page URL, licence) in `src/assets/photos/CREDITS.md`. Her own portrait stays out of `photos/`

# Important Notes

- Static site, no backend of its own. The request form on the contact page posts to a Google Apps Script web app in her Workspace (`apps-script/contact-form.gs`, setup in the README), which emails the request to her and stores nothing. The hero and closing buttons link to the form (`#anfrage` on the contact page)
- The form works without JS, and the script then answers with its own page. With JS, a small script on the contact page submits it in place
- No cookies, analytics, CDNs or embeds: apart from submitting the form, the built site requests nothing from third-party hosts
- Keep the site's Cloudflare records unproxied. The proxy would add a second processor and inject scripts, which the Datenschutz page rules out
- Every third-party service the site or the practice uses (form backend, proxy, embed, payment) needs its own section on the Datenschutz page. When proposing one, name that cost before the choice is made
- Deployment runs through `.github/workflows/deploy.yml` on push to `main`: lint, format check, `astro check`, build and the launch check must all pass before the deploy job runs
