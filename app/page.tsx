"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function TerminalPrompt({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!visible) return null;
  return (
    <div className="flex items-start gap-2 text-sm font-mono mb-1">
      <span className="text-[#e8ff47] shrink-0">$</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function AsciiArt() {
  return (
    <pre className="text-[#e8ff47] text-[8px] md:text-[10px] leading-[1.1] tracking-tight select-none font-mono">
{`
      █████  ██████   ██████
     ██   ██ ██   ██ ██
     ███████ ██████  ██
     ██   ██ ██   ██ ██
     ██   ██ ██   ██  ██████
`}
    </pre>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("cargo install aas");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-1">

      {/* ── HERO ── */}
      <section className="border-b-2 border-[#333333] min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-32 w-full relative z-10">
          <div className="space-y-8" style={{ animation: "fade-in-up 0.6s ease-out" }}>
            <AsciiArt />
            <TerminalPrompt text="cat /etc/infra-problem" delay={100} />
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter text-white">
              Your infrastructure
              <br />
              <span className="text-[#e8ff47] relative">
                fixes itself.
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e8ff47]" />
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-900 max-w-2xl leading-relaxed font-mono">
              Autonomous agents detect problems, execute fixes, and learn from every cycle. No dashboards to watch. No pages at 3am. No human in the loop.
            </p>
          </div>

          <div
            className="space-y-4 pt-12"
            style={{ animation: "fade-in-up 0.6s ease-out", animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <div className="max-w-xl">
              <p className="text-xs text-gray-700 mb-2 font-mono tracking-wider">install</p>
              <button
                onClick={copyInstall}
                className="w-full brutal-border bg-[#0a0a0a] px-5 py-4 font-mono text-sm text-left text-gray-900 hover:text-[#e8ff47] hover:border-[#e8ff47] transition-colors cursor-pointer"
              >
                <span className="text-[#e8ff47]">$</span> cargo install aas
                <span className="float-right text-xs text-gray-700">{copied ? "copied" : "copy"}</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-2">
              <Link
                href="/docs/quick-start"
                className="brutal-button px-8 py-3 text-sm text-center tracking-tight cursor-pointer"
              >
                deploy now →
              </Link>
              <a
                href="https://github.com/AutonomousAgentSystem/aas"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button-outline px-8 py-3 text-sm text-center tracking-tight cursor-pointer"
              >
                view source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AAS ── */}
      <section className="border-b-2 border-[#333333] py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#e8ff47] font-mono mb-2 tracking-wider">why_aas.sh</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white">
              Stop firefighting.
              <br />
              <span className="text-gray-700">Your infra runs itself.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#333333]">
            {[
              {
                label: "Real Execution",
                desc: "Not a dashboard. AAS runs git commits, restarts services, prunes disks, rotates certs. Actions, not alerts.",
              },
              {
                label: "Learns Forever",
                desc: "First time it fixes something, it remembers. Every subsequent occurrence costs zero LLM calls. Confidence compounds with each success.",
              },
              {
                label: "Zero Supervision",
                desc: "Deploy and walk away. Agents coordinate, escalate intelligently, and self-optimize. No dashboards to watch. No humans required.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="border border-[#333333] p-8 space-y-4 hover:border-[#e8ff47] transition-colors duration-150 group"
              >
                <div className="text-[#e8ff47] text-xs font-mono tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#e8ff47] transition-colors">
                  {item.label}
                </h3>
                <p className="text-gray-900 text-sm leading-relaxed font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CYCLE ── */}
      <section className="border-b-2 border-[#333333] py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs text-[#e8ff47] font-mono mb-2 tracking-wider">pipeline.sh</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-20">
            The autonomous cycle
          </h2>
          <div className="relative">
            <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-[#333333]" />
            {[
              { num: "01", label: "Detect", desc: "Agents scan their domain continuously" },
              { num: "02", label: "Cache", desc: "Seen this before? Reuse the saved solution" },
              { num: "03", label: "Analyze", desc: "New issue gets LLM-powered root cause analysis" },
              { num: "04", label: "Execute", desc: "Fix runs — git push, service restart, disk cleanup" },
              { num: "05", label: "Verify", desc: "Confirm the fix actually resolved the problem" },
              { num: "06", label: "Learn", desc: "Cache the solution for zero-cost repeats" },
              { num: "07", label: "Improve", desc: "RSI adjusts thresholds, intervals, confidence" },
            ].map((step, i) => (
              <div
                key={step.num}
                className="flex gap-6 pb-12 relative group"
                style={{ animation: "fade-in-up 0.5s ease-out", animationDelay: `${i * 0.08}s`, animationFillMode: "both" }}
              >
                <div className="absolute left-[7px] md:left-[15px] top-1 w-[18px] h-[18px] border-2 border-[#333333] bg-[#0a0a0a] group-hover:border-[#e8ff47] transition-colors -translate-x-1/2" />
                <div className="ml-12 md:ml-16">
                  <span className="text-xs text-gray-700 font-mono">{step.num}</span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[#e8ff47] transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-gray-900 text-sm font-mono mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECONOMICS ── */}
      <section className="border-b-2 border-[#333333] py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs text-[#e8ff47] font-mono mb-2 tracking-wider">cost_analysis.sh</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
            The economics are
            <br />
            <span className="text-[#e8ff47]">insane.</span>
          </h2>
          <p className="text-gray-900 text-sm font-mono mb-16 max-w-xl">
            Every ops tool charges per action. AAS pays once per unique issue, then zero forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#333333]">
            {[
              { title: "first_occurrence", value: "2 LLM calls", desc: "one analyze + one plan" },
              { title: "every_repeat", value: "0 LLM calls", desc: "instant from cache" },
              { title: "scale_example", value: "90% savings", desc: "100 cycles, 10 unique issues", hl: true },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`border border-[#333333] p-8 space-y-4 transition-colors duration-150 group ${
                  item.hl ? "bg-[#e8ff47] border-[#e8ff47]" : "hover:border-[#e8ff47]"
                }`}
              >
                <p className={`text-xs font-mono tracking-wider ${item.hl ? "text-[#0a0a0a]/60" : "text-gray-700"}`}>
                  {item.title}
                </p>
                <p className={`text-3xl font-bold ${item.hl ? "text-[#0a0a0a]" : "text-white group-hover:text-[#e8ff47]"}`}>
                  {item.value}
                </p>
                <p className={`text-sm font-mono ${item.hl ? "text-[#0a0a0a]/70" : "text-gray-900"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-b-2 border-[#333333] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <p className="text-xs text-[#e8ff47] font-mono tracking-wider">deploy.sh</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white">
            Stop babysitting
            <br />
            <span className="text-[#e8ff47]">your infrastructure.</span>
          </h2>
          <p className="text-gray-900 text-sm font-mono max-w-xl mx-auto">
            Open source. Runs anywhere. Learns from day one. Deploy in under a minute.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              href="/docs/quick-start"
              className="brutal-button px-8 py-3 text-sm tracking-tight cursor-pointer"
            >
              deploy now →
            </Link>
            <a
              href="https://github.com/AutonomousAgentSystem/aas"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-button-outline px-8 py-3 text-sm tracking-tight cursor-pointer"
            >
              view source
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t-2 border-[#e8ff47] bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-[#e8ff47] font-bold mb-4 text-xs tracking-wider uppercase">Docs</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-900">
                <li><a href="/docs/introduction" className="hover:text-[#e8ff47] transition-colors">introduction</a></li>
                <li><a href="/docs/quick-start" className="hover:text-[#e8ff47] transition-colors">quick_start</a></li>
                <li><a href="/docs/examples" className="hover:text-[#e8ff47] transition-colors">examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#e8ff47] font-bold mb-4 text-xs tracking-wider uppercase">Learn</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-900">
                <li><a href="/docs/architecture" className="hover:text-[#e8ff47] transition-colors">architecture</a></li>
                <li><a href="/docs/agents" className="hover:text-[#e8ff47] transition-colors">agents</a></li>
                <li><a href="/docs/llm-providers" className="hover:text-[#e8ff47] transition-colors">llm_providers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#e8ff47] font-bold mb-4 text-xs tracking-wider uppercase">Support</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-900">
                <li><a href="/docs/faq" className="hover:text-[#e8ff47] transition-colors">faq</a></li>
                <li><a href="https://github.com/AutonomousAgentSystem/aas/issues" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8ff47] transition-colors">issues</a></li>
                <li><a href="/docs/changelog" className="hover:text-[#e8ff47] transition-colors">changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#e8ff47] font-bold mb-4 text-xs tracking-wider uppercase">Code</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-900">
                <li><a href="https://github.com/AutonomousAgentSystem/aas" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8ff47] transition-colors">github</a></li>
                <li><a href="https://github.com/AutonomousAgentSystem/aas/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8ff47] transition-colors">discussions</a></li>
                <li><a href="/docs/deployment" className="hover:text-[#e8ff47] transition-colors">deploy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#333333] pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-mono text-gray-700">
            <span>MIT License</span>
            <span className="mt-2 md:mt-0">aas.sh — infrastructure that fixes itself</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
