# Docs base

[![Aiviarium](https://aiviarium-badges.helight.workers.dev/aiviarium?facet)](https://github.com/aiviarium)
[![CI](https://aiviarium-badges.helight.workers.dev/aiviarium/github/actions/workflow/status/aiviarium/docs-base/ci.yml?label=CI)](https://github.com/aiviarium/docs-base/actions/workflows/ci.yml)

The starting point for the documentation site of each Aiviarium project. It is a static site built with Fumadocs and Next.js. The build writes plain files to `out/` for GitHub Pages, Cloudflare or any static host.

The site has search without a server, each page as Markdown, `llms.txt` and `llms-full.txt`, and an optional base path for sites in a folder.

## Start a project site

1. Copy this repository and run `npm install`.
2. Edit `docs.config.ts`. It ends with a full example for Hatchery.
3. Replace the files in `public/brand/` with the project's files from the [brand folder](https://github.com/aiviarium/.github/tree/main/brand).
4. Replace the pages in `content/docs/`.

The sample pages document the base itself and show each component.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the site at `http://localhost:3000` |
| `npm run build` | Writes the static site to `out/` |
| `npm start` | Serves `out/` |
| `npm run typecheck` | Checks the TypeScript code |
| `npm run lint` | Runs ESLint |
| `npm run links` | Checks the links between pages |
| `npm run vale` | Checks the prose |
| `npm run check` | Runs all of the checks and the build |

Set `DOCS_BASE_PATH=/name` for a site served from a folder, such as a GitHub Pages project site.

The design rules are in [docs/design.md](docs/design.md). The guide for working in the repository is [AGENTS.md](AGENTS.md).

## License

Licensed under either of [Apache License, Version 2.0](LICENSE-APACHE) or [MIT license](LICENSE-MIT), at your option.
