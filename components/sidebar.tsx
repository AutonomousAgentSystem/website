"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Getting Started",
    items: [
      { slug: "introduction", title: "Introduction" },
      { slug: "quick-start", title: "Quick Start" },
      { slug: "examples", title: "Examples" },
    ],
  },
  {
    title: "Reference",
    items: [
      { slug: "cli-reference", title: "CLI Reference" },
      { slug: "configuration", title: "Configuration" },
      { slug: "agents", title: "Agents" },
      { slug: "llm-providers", title: "LLM Providers" },
    ],
  },
  {
    title: "Integrations & Ops",
    items: [
      { slug: "integrations", title: "Integrations" },
      { slug: "deployment", title: "Deployment" },
    ],
  },
  {
    title: "Support",
    items: [
      { slug: "faq", title: "FAQ & Troubleshooting" },
      { slug: "changelog", title: "Changelog" },
    ],
  },
  {
    title: "Internals",
    items: [{ slug: "architecture", title: "Architecture" }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-gray-200 bg-gray-50 flex-shrink-0">
      <nav className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6 space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const href = `/docs/${item.slug}`;
                const isActive = pathname === href;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className={`block text-sm px-3 py-1.5 rounded transition-colors ${
                        isActive
                          ? "font-semibold text-gray-1000 bg-white border-l-2 border-gray-1000 pl-2"
                          : "text-gray-900 hover:text-gray-1000 hover:bg-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
