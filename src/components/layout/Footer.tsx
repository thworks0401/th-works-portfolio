import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <span className="font-mono text-xs">© 2026 THWorks. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/thworks0401" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#00b4c6] transition-colors text-xs font-mono">
            <ExternalLink size={12} /> GitHub
          </Link>
          <Link href="mailto:th.works.dev@gmail.com"
            className="flex items-center gap-1 hover:text-[#00b4c6] transition-colors text-xs font-mono">
            <Mail size={12} /> Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}