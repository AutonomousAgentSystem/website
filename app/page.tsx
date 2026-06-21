import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-gray-400 bg-black">
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white">
              Autonomous agents that fix your infra.
            </h1>
            <p className="text-lg text-gray-900">
              Detect problems, fix them, remember solutions, and improve over time. No human intervention after startup.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 border border-gray-400 rounded p-4 font-mono text-sm overflow-x-auto text-black">
              git clone https://github.com/AutonomousAgentSystem/aas<br />
              cd aas && cargo build --release
            </div>
            <Link
              href="/docs/quick-start"
              className="inline-block text-white underline hover:text-gray-900 font-semibold"
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-gray-400 bg-black">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold mb-12 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real Execution",
                description:
                  "Agents run actual commands, not simulations. Git operations, log cleanup, service restarts all real.",
              },
              {
                title: "Pattern Cache",
                description:
                  "Successful solutions stored and reused. Identical issues skip LLM entirely on repeat.",
              },
              {
                title: "Recursive Self-Improvement",
                description:
                  "RSI Engine tracks success rates and adjusts confidence thresholds dynamically.",
              },
              {
                title: "Multi-Provider LLM",
                description:
                  "Claude API, Hermes, Claude Code, OpenClaw, with smart routing per task.",
              },
            ].map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-gray-400 bg-black">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold mb-12 text-white">How It Works</h2>
          <div className="space-y-4">
            {[
              "Detect issues (uncommitted changes, high error rate, service down)",
              "Check cache — solved this before? Reuse solution (0 LLM calls)",
              "If miss — analyze + plan via LLM",
              "Execute — actually run the commands",
              "Verify — confirm problem is gone",
              "Learn — cache successful solution",
              "Improve — RSI engine adjusts confidence thresholds",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="font-semibold text-gray-900 flex-shrink-0 w-6">
                  {i + 1}.
                </div>
                <div className="text-gray-900">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Model */}
      <section className="border-b border-gray-400 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold mb-8 text-black">Cost Model</h2>
          <div className="space-y-4 bg-black border border-gray-400 rounded p-6">
            <div className="flex justify-between items-start">
              <span className="text-gray-900">First occurrence of issue:</span>
              <span className="font-semibold text-white">2 LLM calls</span>
            </div>
            <div className="border-t border-gray-400 pt-4 flex justify-between items-start">
              <span className="text-gray-900">Repeat occurrences:</span>
              <span className="font-semibold text-white">0 LLM calls</span>
            </div>
            <div className="border-t border-gray-400 pt-4 flex justify-between items-start">
              <span className="text-gray-900">100 cycles, 10 unique issues:</span>
              <span className="font-semibold text-white">~90% LLM savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-400 bg-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-white mb-3">Documentation</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/introduction" className="underline hover:text-white">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="/docs/quick-start" className="underline hover:text-white">
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="/docs/cli-reference" className="underline hover:text-white">
                    CLI Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/architecture" className="underline hover:text-white">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="/docs/examples" className="underline hover:text-white">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="/docs/agents" className="underline hover:text-white">
                    How Agents Work
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a href="/docs/faq" className="underline hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    Discussions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AutonomousAgentSystem/aas/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a href="/docs/changelog" className="underline hover:text-white">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-8 flex items-center justify-between text-sm text-gray-900">
            <span>MIT License</span>
            <span>© 2026 Autonomous Agent System</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
