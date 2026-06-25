import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AAS — Autonomous Agent System",
  description:
    "Self-improving agent swarm that learns from experience, remembers solutions, and fixes infrastructure without human intervention.",
  metadataBase: new URL("https://aas.sh"),
  openGraph: {
    title: "AAS — Autonomous Agent System",
    description:
      "Self-improving agent swarm that learns from experience, remembers solutions, and fixes infrastructure without human intervention.",
    url: "https://aas.sh",
    siteName: "AAS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAS — Autonomous Agent System",
    description:
      "Self-improving agent swarm that learns from experience, remembers solutions, and fixes infrastructure without human intervention.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-gray-1000">
        <Nav />
        {children}
        <Script
          src="https://f.thealxlabs.ca/static/js/posthog.js"
          data-posthog="phc_xxxxx"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
