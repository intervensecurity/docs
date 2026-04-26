import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';

// fumadocs-core@15's PageData<Schema> uses generic StandardSchema typing that
// doesn't surface the MDX `body` / `toc` / frontmatter fields without an
// explicit schema declaration. Cast here once instead of importing a custom
// schema type — the runtime shape is correct and stable across fumadocs-mdx 11.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DocsPageData = {
  title: string;
  description?: string;
  body: React.ComponentType<{ components?: any }>;
  toc: { title: string; url: string; depth: number }[];
  full?: boolean;
};

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const data = page.data as unknown as DocsPageData;
  const MDX = data.body;

  return (
    <DocsPage toc={data.toc} full={data.full}>
      <DocsTitle>{data.title}</DocsTitle>
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const data = page.data as unknown as DocsPageData;
  return {
    title: data.title,
    description: data.description,
  };
}
