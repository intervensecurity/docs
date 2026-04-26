import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Static export so the docs can deploy to Cloudflare Pages with no Node runtime.
  // Switch to 'standalone' if you ever need server-side features like ISR or auth.
  output: 'export',
  images: { unoptimized: true },
  // Pin Next's workspace-root inference to this folder (we have a sibling root
  // package-lock.json that confuses the auto-detection — they're unrelated
  // projects, services/docs is intentionally outside the monorepo workspace).
  outputFileTracingRoot: process.cwd(),
};

export default withMDX(config);
