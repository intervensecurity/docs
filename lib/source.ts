import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// Version-bridge between fumadocs-mdx@11 and fumadocs-core@15.
//
// fumadocs-mdx@11.x's runtime emits `source.files` as a thunk —
//   { files: () => VirtualFile[] }
// fumadocs-core@15 iterates `source.files` directly as an array —
//   for (const f of source.files) { ... }
//
// The .d.ts files of mdx@11 disagree with the actual runtime, so we work
// around the type system entirely. When you upgrade fumadocs-mdx to a major
// re-aligned with core@15, replace this whole block with:
//   export const source = loader({ baseUrl: '/docs', source: docs.toFumadocsSource() });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawSource: any = docs.toFumadocsSource();
const filesArray =
  typeof rawSource.files === 'function' ? rawSource.files() : rawSource.files;

export const source = loader({
  baseUrl: '/docs',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: { files: filesArray } as any,
});
