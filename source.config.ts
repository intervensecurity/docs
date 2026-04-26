import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// fumadocs-mdx v11/v15 API: defineDocs returns ONE object that exposes both
// the MDX collection and the meta.json files. We export it as `docs` and the
// loader in lib/source.ts wires it up via `.toFumadocsSource()`.
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // Add remark/rehype plugins here when you need callouts, math, etc.
  },
});
