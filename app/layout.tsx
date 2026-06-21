import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "AAS — Autonomous Agent System",
  description:
    "Self-improving agent swarm that learns from experience, remembers solutions, and improves itself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-gray-1000">
        <Nav />
        {children}
      </body>
    </html>
  );
}
