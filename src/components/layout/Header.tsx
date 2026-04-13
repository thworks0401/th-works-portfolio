"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/works",   label: "Works"   },
  { href: "/skills",  label: "Skills"  },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="font-mono font-bold text-white text-sm tracking-wider hover:text-[#00b4c6] transition-colors">
          TH<span className="text-[#00b4c6]">Works</span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-xs font-mono transition-colors ${
                pathname === href
                  ? "text-[#00b4c6]"
                  : "text-white/50 hover:text-white"
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガー */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white/50 hover:text-white transition-colors"
          aria-label="メニュー"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-[#0d0d0d]">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href}
                onClick={() => setOpen(false)}
                className={`text-sm font-mono transition-colors ${
                  pathname === href ? "text-[#00b4c6]" : "text-white/50 hover:text-white"
                }`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}