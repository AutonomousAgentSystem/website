import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface DocMeta {
  slug: string;
  title: string;
  order: number;
}

const docsDir = path.join(process.cwd(), "content", "docs");

export function getAllDocs(): DocMeta[] {
  if (!fs.existsSync(docsDir)) {
    return [];
  }

  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith(".mdx"));

  const docs = files
    .map((file) => {
      const content = fs.readFileSync(path.join(docsDir, file), "utf-8");
      const { data } = matter(content);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file.replace(".mdx", ""),
        order: data.order || 999,
      };
    })
    .sort((a, b) => a.order - b.order);

  return docs;
}

export function getDocContent(slug: string): string | null {
  const filePath = path.join(docsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}
