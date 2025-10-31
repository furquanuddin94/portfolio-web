# portfolio-web

Modern portfolio + blog built with Astro. Fast, clean, mobile-friendly.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321

## Stack

- Astro (SSG)
- Tailwind CSS
- MDX for blog posts
- TypeScript

## Write a Post

Create `src/content/blog/your-post.mdx`:

```mdx
---
title: "Your Title"
description: "Brief description"
publishDate: 2024-10-31
tags: ["tech"]
draft: false
---

Your content here...
```

## Customize

- Site URL: `astro.config.mjs`
- Site name: `src/components/Header.astro`
- Social links: `src/components/Footer.astro`
- Landing page: `src/pages/index.astro`
- Colors: `tailwind.config.mjs` (primary/accent)

## Deploy

Push to GitHub → Import to Vercel → Done.

Works on: Vercel, Netlify, Cloudflare Pages, etc.

Build: `pnpm build` | Output: `dist/`

