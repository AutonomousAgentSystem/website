import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-gray-400 bg-black min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-32 space-y-12 w-full">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                Autonomous Infrastructure Management
              </p>
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tighter text-white">
              Your infra fixes itself.
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl leading-relaxed">
              Deploy autonomous agents that detect problems, fix them in real-time, and learn from every decision. No ops team required. No manual fixes. No more firefighting at 3am.
            </p>
          </div>
          <div className="space-y-4 pt-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-semibold uppercase tracking-wide">One-line install</p>
              <div className="bg-gray-100 border border-gray-400 rounded p-4 font-mono text-sm overflow-x-auto text-black hover:bg-gray-200 transition-colors cursor-pointer group"
                   onClick={() => {
                     const cmd = "curl -sSf https://raw.githubusercontent.com/AutonomousAgentSystem/aas/main/install.sh | bash";
                     navigator.clipboard.writeText(cmd);
                   }}>
                curl -sSf https://raw.githubusercontent.com/.../install.sh | bash
                <span className="block text-xs text-gray-600 mt-2 group-hover:text-gray-800">Click to copy</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-black bg-white rounded hover:bg-gray-200 transition-colors"
              >
                Get Started →
              </Link>
              <a
                href="https://github.com/AutonomousAgentSystem/aas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white border border-gray-400 rounded hover:border-white transition-colors"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AAS */}
      <section className="border-b border-gray-400 bg-black py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black leading-none text-white mb-16">
            Why spend your life firefighting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                label: "Real Execution",
                desc: "Not simulations. AAS actually runs git commits, restarts services, cleans disks, rotates logs.",
              },
              {
                label: "Learns Forever",
                desc: "First time it fixes an issue, it remembers. Every repeat is 90% cheaper. Confidence improves with success.",
              },
              {
                label: "Zero Supervision",
                desc: "After startup, no human intervention needed. Agents coordinate, escalate, and self-improve. You sleep.",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-4">
                <h3 className="text-2xl font-black text-white">{item.label}</h3>
                <p className="text-gray-900 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cycle */}
      <section className="border-b border-gray-400 bg-black py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black leading-none text-white mb-20">
            The Autonomous Cycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { num: "1", label: "Detect", desc: "Issues found in real-time" },
                { num: "2", label: "Check Cache", desc: "Seen this before? Reuse the solution" },
                { num: "3", label: "Analyze", desc: "New issue? LLM analyzes it" },
                { num: "4", label: "Execute", desc: "Actually fix the problem" },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="text-4xl font-black text-gray-700 flex-shrink-0 w-12">{step.num}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{step.label}</h4>
                    <p className="text-gray-900">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { num: "5", label: "Verify", desc: "Problem actually solved?" },
                { num: "6", label: "Learn", desc: "Cache the solution for next time" },
                { num: "7", label: "Improve", desc: "Adjust confidence, get smarter" },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="text-4xl font-black text-gray-700 flex-shrink-0 w-12">{step.num}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{step.label}</h4>
                    <p className="text-gray-900">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="border-b border-gray-400 bg-black py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-none text-white mb-4">
                The Economics Are Insane
              </h2>
              <p className="text-xl text-gray-900">
                Most ops tools cost money per action. AAS costs money once per issue type, then zero forever.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-400 rounded p-8 space-y-4">
                <p className="text-sm font-semibold text-gray-700 uppercase">First Occurrence</p>
                <p className="text-4xl font-black text-white">2 LLM calls</p>
                <p className="text-gray-900">Analyze + plan the solution</p>
              </div>
              <div className="border border-gray-400 rounded p-8 space-y-4">
                <p className="text-sm font-semibold text-gray-700 uppercase">Every Repeat</p>
                <p className="text-4xl font-black text-white">0 LLM calls</p>
                <p className="text-gray-900">Execute cached solution instantly</p>
              </div>
              <div className="border border-gray-400 rounded p-8 space-y-4 bg-gray-100">
                <p className="text-sm font-semibold text-gray-700 uppercase">Scale Example</p>
                <p className="text-4xl font-black text-black">90% savings</p>
                <p className="text-gray-700">100 cycles, 10 unique issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-gray-400 bg-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black leading-none text-black">
            Stop babysitting your infra.
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            AAS is open source, runs anywhere, and learns from day one. Deploy in minutes. Sleep better.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-black rounded hover:bg-gray-900 transition-colors"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/AutonomousAgentSystem/aas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-black border border-black rounded hover:bg-black hover:text-white transition-colors"
            >
              Clone the Repo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-400 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Documentation</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/introduction" className="underline hover:text-white transition-colors">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="/docs/quick-start" className="underline hover:text-white transition-colors">
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="/docs/examples" className="underline hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/architecture" className="underline hover:text-white transition-colors">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="/docs/agents" className="underline hover:text-white transition-colors">
                    How Agents Work
                  </a>
                </li>
                <li>
                  <a href="/docs/llm-providers" className="underline hover:text-white transition-colors">
                    LLM Providers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Support</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/faq" className="underline hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a href="/docs/changelog" className="underline hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Community</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Discussions
                  </a>
                </li>
                <li>
                  <a href="/docs/deployment" className="underline hover:text-white transition-colors">
                    Deploy Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-900">
            <span>MIT License</span>
            <span>© 2026 Autonomous Agent System</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
