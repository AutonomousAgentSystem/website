import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b-2 border-[#e8ff47] bg-[#0a0a0a] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tighter text-[#e8ff47] hover:text-white transition-colors"
        >
          AAS
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/docs/introduction"
            className="text-gray-900 hover:text-[#e8ff47] transition-colors text-sm tracking-tight"
          >
            /docs
          </Link>
          <a
            href="https://github.com/AutonomousAgentSystem/aas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#e8ff47] transition-colors text-sm tracking-tight"
          >
            github
          </a>
        </div>
      </div>
    </nav>
  );
}
