# yitingchen.de

Website of Yiting Chen – Paartherapie & Coaching, built with [Astro](https://astro.build/) and hosted on GitHub Pages.

## Prerequisites

- Node.js 24 (see `.nvmrc`; at least 22.12)
- pnpm 11 (`corepack enable` picks up the version from `package.json`)

## Setup

```bash
pnpm install
pnpm dev
```

Then open http://localhost:13669. `pnpm install` also sets up the git hooks. The build downloads the web fonts, so it needs network access.

## Commands

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Development server                                |
| `pnpm build`        | Build the site into `dist/`                       |
| `pnpm preview`      | Serve the build                                   |
| `pnpm lint`         | ESLint (`pnpm lint:fix` fixes what it can)        |
| `pnpm format`       | Format with Prettier (`pnpm format:check` checks) |
| `pnpm check`        | Type-check with `astro check`                     |
| `pnpm check:launch` | Fail if a built page still contains a `TODO`      |

## Pre-commit hook

Every commit runs ESLint and Prettier on the staged files (husky + lint-staged). Lint errors block the commit.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: lint, format check, `astro check`, build and the launch check. Only if all of them pass is the site deployed to GitHub Pages.

## Contact form setup

The request form (on the contact page; on the home page until launch) posts to a Google Apps Script web app, `apps-script/contact-form.gs`. It emails each request to `mail@yitingchen.de`, with the sender as the reply-to address, and stores nothing. At most 20 requests per hour get through. Set it up once, signed in as `mail@yitingchen.de`:

1. Go to https://script.google.com, create a project named `yitingchen.de Kontaktformular`, and replace the content of `Code.gs` with `apps-script/contact-form.gs`.
2. **Deploy → New deployment**, type **Web app**: execute as **Me**, access **Anyone**.
3. Grant the email permission: temporarily add `function authorize() { MailApp.getRemainingDailyQuota(); }`, select `authorize` in the editor's function menu, **Run**, and allow access (via **Advanced** if Google warns that the app is unverified). Then delete the function. Until this is done, every request gets a 403 "You need access" page, even though the deployment says **Anyone**.
4. Copy the web app URL (`https://script.google.com/macros/s/…/exec`) into `contactForm` in `src/data/site.ts`.
5. Send a test request from the deployed form, once with JavaScript and once without.

If **Anyone** is missing in step 2, allow it in the Google Admin console (Apps → Google Workspace → Drive and Docs → sharing outside the organization).

After changing the script, use **Manage deployments → Edit → New version**, so the URL stays the same.

## Before launch: notice page and private preview

Until launch, `deploy.yml` checks the full site and then publishes a second build made with `PUBLIC_SITE_STAGE=coming-soon`. That build has only the home page, as a notice that carries the request form, plus Impressum, Datenschutz and the 404 page. Nothing links to the other pages. The AGB are removed from the output because they link to the price sections.

To look at that stage locally, run `PUBLIC_SITE_STAGE=coming-soon pnpm build && pnpm preview`. The dev server shows the same pages but still serves `/agb/`.

The full site is reviewed at `preview.yitingchen.de`, a Cloudflare Pages project behind Cloudflare Access. Only invited reviewers can open it and it is deleted at launch, so it has no section on the Datenschutz page. It is uploaded by hand from a build without `PUBLIC_SITE_STAGE`:

```bash
pnpm build
printf '/*\n  X-Robots-Tag: noindex\n' > dist/_headers
pnpm dlx wrangler pages deploy dist --project-name yitingchen-preview --branch main
```

`--branch main` makes the upload the production deployment, which is what the custom domain serves. The `_headers` file keeps the preview out of search indexes even if Access were ever misconfigured.

One-time setup in the Cloudflare account that holds the yitingchen.de zone, in this order so that the site is never reachable without a login:

1. Enable Zero Trust on the account.
2. Create the empty Pages project: `pnpm dlx wrangler pages project create yitingchen-preview --production-branch main`.
3. Add a self-hosted Access application covering `preview.yitingchen.de`, the project's `pages.dev` hostname and `*.<project>.pages.dev` (every deployment gets its own URL there). Its policy allows only the reviewers' email addresses.
4. Check that a logged-out request to the `pages.dev` hostname gets the Access login.
5. Add `preview.yitingchen.de` under the project's custom domains, then upload.

To launch, remove the `PUBLIC_SITE_STAGE=coming-soon pnpm build` command from `deploy.yml`, then delete the Pages project, its DNS record and the Access application.

## GitHub and DNS setup

DNS for yitingchen.de is a Cloudflare zone, managed from the delorean repo (its `cloudflare` skill). The site's records are **DNS only** (not proxied), so visitors connect straight to GitHub Pages and GitHub issues the certificate. Keep them that way: the Datenschutz page names GitHub as the only host, and Cloudflare's proxy would add a second processor and features that inject scripts (email obfuscation, Web Analytics). Records that must stay as they are: `portal.yitingchen.de` and Google Workspace mail (MX, SPF, DKIM, DMARC, site verification).

1. Repository settings → Pages: set the source to **GitHub Actions**. Pages on a private repository needs a paid plan (e.g. GitHub Pro); on GitHub Free the repository must be public.
2. Repository settings → Pages: set the custom domain to `yitingchen.de` (also in `public/CNAME`) **before** any record points at GitHub. Without domain verification in the account settings, this order is what keeps another GitHub account from claiming it.
3. In Cloudflare, once the first deploy is live, replace the apex and `www` records and delete the `*` wildcard. All new records are **DNS only**:
   - apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - apex `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` `CNAME` to `diamond0501.github.io`
4. Enable **Enforce HTTPS** once the certificate shows as issued. If none appears within a few minutes, remove the custom domain and set it again; re-saving the same value does not trigger it. GitHub's servers take about 5 more minutes to serve the certificate.
5. Check that `https://yitingchen.de/` is served over HTTPS and that `https://yitingchen.de/en/` and `https://yitingchen.de/zh/` resolve.
