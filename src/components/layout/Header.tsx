"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/works",   label: "Works"   },
  { href: "/skills",  label: "Skills"  },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* ロゴ */}
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-teal hover:text-teal-hover transition-colors duration-200"
        >
          TH<span className="text-text">Works</span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-mono text-xs tracking-wider transition-colors duration-200",
                pathname === href
                  ? "text-teal"
                  : "text-muted hover:text-text"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* モバイルハンバーガー */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-surface px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "font-mono text-sm tracking-wider transition-colors",
                pathname === href ? "text-teal" : "text-muted hover:text-text"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
