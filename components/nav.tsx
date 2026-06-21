import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-400 bg-black sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-white">
          AAS
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/alexanderthegreat/aas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-white underline text-sm"
          >
            GitHub ↗
          </a>
          <Link href="/docs/introduction" className="text-gray-900 hover:text-white underline text-sm">
            Docs →
          </Link>
        </div>
      </div>
    </nav>
  );
}
