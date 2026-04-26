import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Card, Cards } from 'fumadocs-ui/components/card';
import type { MDXComponents } from 'mdx/types';

// Globally-available components for every .mdx page. Anything dropped here can
// be used in MDX without importing.
//
// `defaultMdxComponents` covers headings, code blocks, callouts, tables, etc.
// `Card` / `Cards` come from fumadocs-ui directly. Add more here as content needs.
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Card,
    Cards,
    ...components,
  };
}
