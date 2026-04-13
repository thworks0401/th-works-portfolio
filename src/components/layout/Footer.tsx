import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono text-xs text-faint tracking-wider">
          © 2026 THWorks — 高橋知宏
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/thworks0401"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-teal transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="mailto:th.works.dev@gmail.com"
            className="text-muted hover:text-teal transition-colors"
            aria-label="メール"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
