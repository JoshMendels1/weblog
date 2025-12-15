# Simple Blog

A minimal static blog built with [11ty](https://www.11ty.dev/), inspired by Simon Willison's blog.

## Features

- ✅ Markdown-based posts
- ✅ Clean, readable design
- ✅ Automatic deployment to Cloudflare Pages
- ✅ No JavaScript required
- ✅ Fast and simple

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm start
```

Your blog will be available at `http://localhost:8080`

### 3. Create a New Post

Create a new markdown file in `src/posts/`:

```markdown
---
layout: post.njk
title: "Your Post Title"
date: 2024-12-15
description: "Optional short description"
---

Your content here...
```

File naming convention: `YYYY-MM-DD-slug.md`

## Deployment to Cloudflare Pages

### Setup

1. Create a new project in [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Add these secrets to your GitHub repository:
   - `CLOUDFLARE_API_TOKEN`: Get from Cloudflare dashboard → My Profile → API Tokens
   - `CLOUDFLARE_ACCOUNT_ID`: Find in Cloudflare Pages project settings

### Automatic Deployment

Every push to `main` will automatically build and deploy your site via GitHub Actions.

### Manual Build

```bash
npm run build
```

Output will be in `_site/` directory.

## Project Structure

```
simple-blog/
├── src/
│   ├── posts/              # Your blog posts (markdown)
│   ├── _includes/          # Templates
│   │   ├── base.njk        # Base layout
│   │   └── post.njk        # Post layout
│   ├── css/
│   │   └── style.css       # All styles
│   ├── images/             # Images (if needed)
│   └── index.njk           # Homepage
├── .eleventy.js            # 11ty configuration
├── package.json
└── README.md
```

## Customization

### Change Site Title

Edit `src/_includes/base.njk`:

```html
<title>{% if title %}{{ title }} - {% endif %}Your Site Name</title>
```

### Modify Styles

Edit `src/css/style.css`. CSS variables are at the top for easy theming:

```css
:root {
  --text-color: #1a1a1a;
  --link-color: #0066cc;
  --max-width: 720px;
}
```

### Add Images

1. Place images in `src/images/`
2. Reference in markdown: `![Alt text](/images/photo.jpg)`

## Future Extensions

Ready to add but not included yet:

- RSS feed (add to `.eleventy.js`)
- Tags/categories (add to frontmatter)
- Search (use Pagefind)
- Code syntax highlighting (use Prism)
- Dark mode toggle

## Commands

- `npm start` - Start dev server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

## License

MIT
