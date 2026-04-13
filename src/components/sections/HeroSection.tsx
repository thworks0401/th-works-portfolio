"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Link from "next/link";

const EASE: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#00b4c6 1px, transparent 1px), linear-gradient(90deg, #00b4c6 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00b4c6]/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl w-full mx-auto py-24">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00b4c6]/30 bg-[#00b4c6]/10 text-[#00b4c6] text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4c6] animate-pulse" />
          Available for projects
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
          Build things<br />
          <span className="text-[#00b4c6]">that work.</span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-white/50 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
          THWorks — AIツール・Webサービス・デスクトップアプリの設計・開発・販売。<br />
          埼玉県川越市を拠点とする個人開発スタジオ。
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap items-center gap-4">
          <Link href="/works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00b4c6] text-black font-semibold text-sm hover:bg-[#00c8dd] transition-colors">
            実績を見る
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/80 text-sm hover:border-[#00b4c6]/60 hover:text-white transition-colors">
            お問い合わせ
          </Link>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="mt-16 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Python", "Ollama", "n8n", "Stripe", "Cloudflare", "PostgreSQL"].map((tech) => (
            <span key={tech}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/40 text-xs font-mono">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
