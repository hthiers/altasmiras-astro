# CLAUDE.md — Altasmiras

## Project Overview

Marketing/content website built with Astro v5, deployed to Cloudflare Pages (static output). Multi-theme design system with 10 Greek god-themed color schemes.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build → /dist/
npm run preview   # Preview built site
npm run check     # Astro type-check
npm run format    # Prettier formatting
```

## Tech Stack

- **Astro** v5.5.3 — static site generator
- **Tailwind CSS** v4 — via `@tailwindcss/vite` (no tailwind.config.js)
- **TypeScript** — strict mode
- **Lucide Astro** — SVG icons
- **AOS** — scroll animations
- **@astrojs/sitemap** — auto-generated sitemap

## Project Structure

```
src/
  assets/         # Images organized by purpose
  components/
    ui/           # Button, Input, Checkbox, Radio, Select, Textarea, Date, CategoryPill, Eyebrow
    sections/     # Hero, SplitPanel, Features, Stats, TeamGrid, RecentPosts, Faqs, CtaBanner, ContactInfo, Logos
    blog/         # Blog-specific components
    forms/        # Form components
    team/         # Team display components
    icons/        # Icon components
  content/
    blog/         # MDX blog posts (schema: title, excerpt, featuredImage, publishDate, publish, categories)
    team/         # Team member profiles (schema: name, headshot, jobTitle, email, socials, order, publish)
    legal/        # Privacy policy, terms of service
  data/           # TypeScript config files (config.ts, menu.ts, categories.ts, features.ts, stats.ts, faqs.ts, logos.ts)
  layouts/        # Layout.astro — base template
  pages/          # File-based routing
  styles/         # Global CSS with theme variables
  utils/          # styleUtils.ts — theme-aware CSS class helpers
public/           # Static assets (favicon, robots.txt)
```

## Path Aliases (tsconfig.json)

```
@components/*  → src/components/*
@layouts/*     → src/layouts/*
@styles/*      → src/styles/*
@assets/*      → src/assets/*
@data/*        → src/data/*
@utils/*       → src/utils/*
```

## Content Collections

- **blog** — 6 posts, paginated at 6/page (configurable in `src/data/config.ts`)
- **team** — 10 members, ordered by `order` field
- **legal** — privacy policy, terms of service

All collections are Zod-validated. The `publish` boolean flag controls visibility.

## Theme System

10 themes selectable via `data-theme` attribute on `<html>`. Defined entirely in `src/styles/` using CSS custom properties. Current theme set in `src/data/config.ts`. Themes:

`zeus`, `poseidon`, `hades`, `apollo`, `artemis`, `ares`, `athena`, `hermes`, `dionysus`, `demeter`

A `ThemeSwitcher` component handles runtime switching (stores preference client-side).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (hero, features, stats, logos, FAQs, recent posts) |
| `/blog/` | Blog index with pagination |
| `/blog/[...slug]/` | Blog post |
| `/category/[slug]/` | Category archive |
| `/team/` | Team directory |
| `/team/[...slug]/` | Team member profile |
| `/contact/` | Contact page |
| `/legal/[slug]/` | Legal pages |
| `/components/` | Component showcase |
| `/style-guide/` | Design system docs |
| `/404.astro` | 404 page |

## Deployment (Cloudflare Pages)

- Static output — no Cloudflare adapter needed
- Build command: `npm run build`
- Output directory: `dist/`
- Set `PUBLIC_SITE_URL` environment variable in Cloudflare dashboard to the production domain
- Sitemap auto-generated at `/sitemap-index.xml` on build

## Key Configuration

- Site name, URL, socials, SEO defaults, blog settings, active theme: `src/data/config.ts`
- Navigation (header, footer, legal): `src/data/menu.ts`
- Blog categories: `src/data/categories.ts`
- Markdown syntax highlighting: Shiki with `github-dark` theme (configured in `astro.config.mjs`)

## Code Style

- Prettier with Astro plugin, single quotes, 4-space indent, 120-char line limit
- `.editorconfig` enforces editor settings
