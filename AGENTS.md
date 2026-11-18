# Working on the docs base

This repository is the starting point for the documentation site of each Aiviarium project. It is a static Fumadocs site on Next.js. This file is for coding agents working in it.

## Layout

| Path | What it is |
| --- | --- |
| `docs.config.ts` | The name, colour, links, badges and assets of the project |
| `public/brand/` | The icons and wordmarks of the project |
| `content/docs/` | The pages, in MDX, with `meta.json` for the order |
| `src/app/` | The routes of the landing page, docs, search index, `llms.txt`, `llms-full.txt` and `/md/*.md` |
| `src/app/global.css` | The theme. See `docs/design.md` |
| `src/components/` | The lockup, wordmark, badge and MDX components |
| `src/lib/` | The content source, the Markdown output, the code colours and helpers |
| `scripts/check-links.ts` | The link check |
| `scripts/screens.py` | Screenshots of the built site into `screens/`, which is ignored and never committed |
| `docs/design.md` | The design rules |

## Build and check

```bash
npm install
npm run dev         # http://localhost:3000
npm run typecheck
npm run lint
npm run links
npm run vale        # must print nothing
npm run build       # writes out/; DOCS_BASE_PATH=/name for a site in a folder
```

`npm run check` runs them all in that order, as CI does. Vale needs the `vale` binary. The npm packages include `mdx2vast`, which Vale uses for MDX.

## Conventions

- Next.js 16 and Fumadocs 16 differ from older versions. Read `node_modules/next/dist/docs/` and the types in `node_modules/fumadocs-*` before changing routes or layouts.
- The site is a static export. Route handlers export `dynamic = 'force-static'`. Plain URLs to files in `public/` go through `asset()` so they get the base path.
- Keep project values in `docs.config.ts`. Code reads them from there.
- Follow `docs/design.md`. The project colour never fills a panel, card, button or callout. Only the value of a badge is filled with it.
- Prose is short, plain sentences, with project names in title case. It has to pass Vale with no output.
- Commits follow Conventional Commits with a short subject.

<!-- vale off -->
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
<!-- vale on -->
