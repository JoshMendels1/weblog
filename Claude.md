# Claude.md - Working with this blog

This is a simple static blog built with 11ty. Here's everything Claude needs to know to help you work on it.

## Project Overview

- **Type**: Static site generator (11ty)
- **Posts**: Markdown files in `src/posts/`
- **Templates**: Nunjucks templates in `src/_includes/`
- **Styles**: Single CSS file at `src/css/style.css`
- **Output**: Static HTML in `_site/` (generated, not in git)
- **Deployment**: Auto-deploys to Cloudflare Pages via GitHub Actions on push to `main`

## Common Tasks

### Create a New Blog Post

1. Create a new file: `src/posts/YYYY-MM-DD-slug.md`
2. Add frontmatter and content:

```markdown
---
layout: post.njk
title: "Your Post Title"
date: 2024-12-17
description: "Optional short description for homepage"
---

Your markdown content here...
```

**Date format**: Use YYYY-MM-DD in both filename and frontmatter
**Slug**: Keep it short, lowercase, hyphenated

### Run Locally

```bash
npm start
# Opens http://localhost:8080
```

### Build for Production

```bash
npm run build
# Output in _site/
```

### Deploy

Just push to `main` branch - GitHub Actions handles the rest.

## File Structure Quick Reference

```
src/
├── posts/              # All blog posts go here (*.md)
├── _includes/
│   ├── base.njk        # Base HTML template (header, footer, meta)
│   └── post.njk        # Individual post template
├── css/
│   └── style.css       # All styling
├── images/             # Static images
└── index.njk           # Homepage (lists posts)

.eleventy.js            # 11ty config - collections, filters, paths
```

## Styling Guide

**Philosophy**: Minimal, readable, fast. Inspired by Simon Willison's blog.

**CSS Variables** (top of `style.css`):
```css
--text-color: #1a1a1a;
--link-color: #0066cc;
--border-color: #ddd;
--max-width: 720px;
```

Change these to customize the look.

## Extending the Blog

### Add Tags/Categories

1. Add to post frontmatter:
```markdown
---
tags: [tech, webdev]
---
```

2. Update `.eleventy.js` to create tag pages
3. Update templates to display tags

### Add RSS Feed

1. Install plugin: `npm install @11ty/eleventy-plugin-rss`
2. Add to `.eleventy.js`
3. Create `src/feed.njk` template

### Add Search

1. Install: `npm install pagefind`
2. Add to build script
3. Add search UI to templates

### Add Syntax Highlighting

1. Install: `npm install @11ty/eleventy-plugin-syntaxhighlight`
2. Add to `.eleventy.js`
3. Add Prism CSS theme

## Markdown Features Supported

- Headers (h1-h6)
- Links: `[text](url)`
- Images: `![alt](/images/photo.jpg)`
- Code blocks with language: ` ```javascript `
- Inline code: `` `code` ``
- Lists (ordered and unordered)
- Blockquotes: `> quote`
- Bold: `**bold**`
- Italic: `*italic*`

## Troubleshooting

**Port 8080 already in use?**
```bash
npx eleventy --serve --port=3000
```

**Changes not showing up?**
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check the terminal for 11ty errors
- Make sure file is in `src/posts/` with `.md` extension

**Build failing in GitHub Actions?**
- Check `.github/workflows/deploy.yml`
- Verify secrets are set: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Check Actions tab for error logs

## Design Decisions

**Why 11ty?** Simple, fast, no client-side JS required, easy to extend

**Why Nunjucks?** Comes with 11ty, powerful templating, easy syntax

**Why single CSS file?** Simple, fast, no build step needed

**Why no JavaScript?** Static site doesn't need it. Add later if needed.

## Future Ideas

- [ ] Add RSS feed
- [ ] Add tags/categories
- [ ] Add search with Pagefind
- [ ] Add code syntax highlighting
- [ ] Add dark mode
- [ ] Add reading time estimate
- [ ] Add "related posts" feature
- [ ] Add comments (via Giscus or similar)

## Tips for Claude Code

When the user asks to:

**"Add a new post about X"** → Create `src/posts/YYYY-MM-DD-slug.md` with proper frontmatter

**"Change the colors"** → Edit CSS variables in `src/css/style.css`

**"Make the font bigger"** → Adjust `font-size` in `.post-content` class

**"Add dark mode"** → Add media query for `prefers-color-scheme` or toggle button

**"Show me recent posts"** → List files in `src/posts/` sorted by date

**"Deploy this"** → Remind them to just `git push` to main branch

## Important Notes

- Never commit `_site/` or `node_modules/` (in `.gitignore`)
- Always use YYYY-MM-DD format for dates
- Keep posts in `src/posts/` for auto-discovery
- GitHub Secrets keep API tokens safe (never put in code)
- This is a PUBLIC repo - no secrets in code!

## Cloudflare Pages Setup

If deploying for first time:
1. Go to Cloudflare Pages
2. Connect GitHub repo
3. Build command: `npm run build`
4. Build output: `_site`
5. Add secrets to GitHub repo settings

## Need Help?

- 11ty docs: https://www.11ty.dev/docs/
- Nunjucks docs: https://mozilla.github.io/nunjucks/
- Markdown guide: https://www.markdownguide.org/
