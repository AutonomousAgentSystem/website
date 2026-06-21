import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllDocs, getDocContent } from "@/lib/docs";
import { mdxComponents } from "@/components/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: [doc.slug],
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0] || "introduction";
  const docs = getAllDocs();
  const doc = docs.find((d) => d.slug === slug);

  return {
    title: doc ? `${doc.title} — AAS Docs` : "AAS Docs",
  };
}

export default function DocPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0] || "introduction";
  const content = getDocContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <MDXRemote
      source={content}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-light",
              },
            ],
          ],
        },
      }}
    />
  );
}
