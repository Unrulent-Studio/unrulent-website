# unrulent-website

UNRULENT's studio marketing/portfolio site. Next.js App Router, TypeScript,
Tailwind CSS, statically exported and deployed to Cloudflare Pages.

## Stack

- Next.js (App Router) with `output: "export"` — no server runtime, so it
  ships as a plain static bundle to Cloudflare Pages.
- TypeScript, Tailwind CSS.
- Portfolio content lives in [`src/data/projects.ts`](src/data/projects.ts) —
  a typed data module, not a CMS. Add a `url` to a project entry once it has
  a public page to link to; that's the only change needed to promote a
  teaser card into a full link.

## Development

```bash
npm install
npm run dev       # local dev server
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm test           # data loader smoke test
npm run build      # static export to ./out
```

CI (`.github/workflows/ci.yml`) runs format check, lint, typecheck, tests,
and build on every push/PR.

## Deployment

Static export output (`./out`) deploys to Cloudflare Pages. See the
Cloudflare Pages dashboard for the connected project and custom domain
configuration.
