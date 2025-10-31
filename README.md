# Portfolio Website

A modern, fast portfolio website with blog built with Astro, Tailwind CSS, and MDX.

## Features

- 🚀 **Fast**: Static site generation with zero JavaScript by default
- 📱 **Responsive**: Mobile-first design that looks great on all devices
- 🎨 **Modern UI**: Clean, beautiful design with dark mode support
- 📝 **Blog**: Easy-to-manage blog posts using MDX
- 🔍 **SEO**: Built-in sitemap, RSS feed, and meta tags
- 💅 **Styling**: Tailwind CSS with typography plugin for beautiful content
- 🎯 **Type-safe**: Content collections with Zod validation

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` to see your site.

### Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
/
├── public/           # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable components
│   ├── content/     # Blog posts (MDX files)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes (file-based routing)
│   └── styles/      # Global styles
└── package.json
```

## Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/` with frontmatter:

```mdx
---
title: 'My First Post'
description: 'A brief description of the post'
publishDate: 2024-01-01
tags:
  - web development
  - astro
cover:
  src: 'https://example.com/image.jpg'
  alt: 'Cover image description'
---

Your content here...
```

Posts are automatically excluded from the build if `draft: true` is set in the frontmatter.

## Configuration

### Site URL

Update the `site` field in `astro.config.mjs` with your domain:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

Also update `robots.txt` and any hardcoded URLs in components.

### Customization

- **Colors**: Edit `src/styles/global.css` and Tailwind config
- **Typography**: Modify `tailwind.config.mjs` typography settings
- **Layout**: Edit components in `src/components/` and layouts in `src/layouts/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Astro and configure the build settings
4. Your site will be live!

### Other Platforms

Astro can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo, build command: `pnpm build`
- **Cloudflare Pages**: Connect repo, build command: `pnpm build`, output directory: `dist`
- **GitHub Pages**: Use GitHub Actions (see [Astro docs](https://docs.astro.build/en/guides/deploy/github/))

## Custom Domain

1. Add your domain in your hosting provider's dashboard
2. Update DNS records as instructed
3. Update the `site` field in `astro.config.mjs` with your domain
4. Redeploy

## RSS Feed

Your blog RSS feed is available at `/rss.xml`. Add it to your feed reader or share it with subscribers.

## SEO

- Sitemap is automatically generated at `/sitemap.xml`
- Meta tags are handled by the `SEO.astro` component
- Open Graph and Twitter Card tags are included
- Update `robots.txt` with your domain before deploying

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)
