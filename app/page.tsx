"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText(
      "curl -sSf https://raw.githubusercontent.com/AutonomousAgentSystem/aas/main/install.sh | bash"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-gray-400 bg-black min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-black pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 py-32 space-y-12 w-full relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest animate-slide-in-left">
                🤖 Autonomous Infrastructure
              </p>
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tighter text-white">
              Your infra<br />
              <span className="relative">
                fixes itself.
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-500 to-transparent" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl leading-relaxed">
              Deploy autonomous agents that detect problems, fix them in real-time, and learn from every decision. No ops team required. No manual fixes. No more firefighting at 3am.
            </p>
          </div>
          <div className="space-y-4 pt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-semibold uppercase tracking-wide">One-line install</p>
              <button
                onClick={copyInstall}
                className="w-full bg-gray-100 border border-gray-400 rounded p-4 font-mono text-sm overflow-x-auto text-black hover:bg-gray-200 transition-all duration-300 glow-on-hover group text-left"
              >
                <span className="block">curl -sSf https://raw.githubusercontent.com/.../install.sh | bash</span>
                <span className="block text-xs text-gray-600 group-hover:text-gray-800 mt-2">
                  {copied ? "✓ Copied!" : "Click to copy"}
                </span>
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-black bg-white rounded hover:bg-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started →
              </Link>
              <a
                href="https://github.com/AutonomousAgentSystem/aas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white border border-gray-400 rounded hover:border-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AAS */}
      <section className="border-b border-gray-400 bg-black py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black leading-none text-white mb-16">
            Why spend your life<br />
            firefighting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                label: "Real Execution",
                desc: "Not simulations. AAS actually runs git commits, restarts services, cleans disks, rotates logs.",
                icon: "⚡",
              },
              {
                label: "Learns Forever",
                desc: "First time it fixes an issue, it remembers. Every repeat is 90% cheaper. Confidence improves with success.",
                icon: "🧠",
              },
              {
                label: "Zero Supervision",
                desc: "After startup, no human intervention needed. Agents coordinate, escalate, and self-improve. You sleep.",
                icon: "😴",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="space-y-4 p-6 rounded border border-gray-400 hover:border-gray-300 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl">{item.icon}</div>
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
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 group cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl font-black text-gray-700 flex-shrink-0 w-16 group-hover:text-white group-hover:scale-125 transition-all duration-300">
                    {step.num}
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-white group-hover:text-white">{step.label}</h4>
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
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 group cursor-pointer"
                  style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                >
                  <div className="text-5xl font-black text-gray-700 flex-shrink-0 w-16 group-hover:text-white group-hover:scale-125 transition-all duration-300">
                    {step.num}
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-white group-hover:text-white">{step.label}</h4>
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
                The Economics Are<br />
                <span className="relative">
                  Insane
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white to-transparent" />
                </span>
              </h2>
              <p className="text-xl text-gray-900">
                Most ops tools cost money per action. AAS costs money once per issue type, then zero forever.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "First Occurrence", value: "2 LLM calls", desc: "Analyze + plan the solution" },
                { title: "Every Repeat", value: "0 LLM calls", desc: "Execute cached solution instantly" },
                { title: "Scale Example", value: "90% savings", desc: "100 cycles, 10 unique issues", highlight: true },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`border border-gray-400 rounded p-8 space-y-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    item.highlight ? "bg-gradient-to-br from-white via-gray-200 to-gray-100" : "hover:bg-gray-900"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-wide ${
                      item.highlight ? "text-gray-800" : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-4xl font-black ${
                      item.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className={item.highlight ? "text-gray-800" : "text-gray-900"}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-gray-400 bg-gradient-to-r from-gray-100 to-gray-200 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black leading-none text-black">
            Stop babysitting<br />
            your infra.
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            AAS is open source, runs anywhere, and learns from day one. Deploy in minutes. Sleep better.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-black rounded hover:bg-gray-900 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/AutonomousAgentSystem/aas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-black border-2 border-black rounded hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
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
