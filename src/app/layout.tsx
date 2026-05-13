import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gibraltar — Vibe Coding Level Finder",
  description: "Classify your vibe coding and agentic engineering level.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="container nav">
            <Link className="logo" href="/">Gibraltar</Link>
            <div className="links">
              <Link href="/assessment">Assessment</Link>
              <Link href="/levels">Levels</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="container">Gibraltar helps you reason about AI delegation, safety, and engineering ownership.</div>
        </footer>
      </body>
    </html>
  );
}
