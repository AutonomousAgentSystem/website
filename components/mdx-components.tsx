import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-semibold leading-none mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold leading-tight mt-6 mb-4 border-t border-gray-200 pt-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold leading-tight mt-4 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-4 text-gray-900 leading-6">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-gray-1000 underline hover:text-gray-900"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 space-y-1 list-disc">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 space-y-1 list-decimal">{children}</ol>
  ),
  li: ({ children }) => <li className="text-gray-900">{children}</li>,
  table: ({ children }) => (
    <table className="border-collapse my-4 w-full text-sm">{children}</table>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-100">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-200 px-3 py-2">{children}</td>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 border border-gray-200 rounded p-4 overflow-x-auto my-4">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-1.5 py-1 rounded text-sm font-mono text-gray-1000">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-700 my-4">
      {children}
    </blockquote>
  ),
};

export default mdxComponents;
