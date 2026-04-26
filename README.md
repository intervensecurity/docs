# Interven Docs

Public documentation site at https://docs.intervensecurity.com.

Built with [fumadocs](https://fumadocs.dev) — Next.js + MDX. Static export, deployable
to Cloudflare Pages, Vercel, or any static host.

## Local dev

```bash
cd services/docs
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a page

1. Drop a new `.mdx` file under `content/docs/` (subfolders for groups: `content/docs/integrations/zapier.mdx`).
2. Add it to `content/docs/meta.json` so it shows up in the sidebar.
3. Frontmatter format:
   ```mdx
   ---
   title: Your title
   description: One-line summary for the meta tag + search.
   ---
   ```

## Build

```bash
npm run build
# Output goes to ./out (static HTML)
```

## Deploy to Cloudflare Pages

1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → connect this repo
2. Build command: `cd services/docs && npm install && npm run build`
3. Build output directory: `services/docs/out`
4. Custom domain: `docs.intervensecurity.com` → CNAME to the Pages target Cloudflare gives you

That's it. Every push to `main` triggers a redeploy.

## Style

- Lead with the working example, then the explanation.
- Code samples should be runnable copy-paste — no `<placeholder>` for required values.
- Use callouts (`<Callout>...</Callout>` from fumadocs-ui) sparingly, for warnings and
  must-read security notes only.
- Avoid emojis in content (the shield in the brand title is intentional).
