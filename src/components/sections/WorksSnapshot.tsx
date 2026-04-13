"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredWorks, categoryLabel } from "@/data/works";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function WorksSnapshot() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[#00b4c6] text-xs font-mono mb-2">// FEATURED WORKS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">主な実績</h2>
        </div>
        <Link href="/works" className="text-sm text-white/40 hover:text-[#00b4c6] transition-colors font-mono hidden sm:block">
          すべて見る →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featuredWorks.map((work, i) => (
          <motion.div key={work.id} custom={i} variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#00b4c6]/40 hover:bg-white/[0.05] transition-all duration-300">
            <span className="inline-block px-2 py-0.5 rounded-md bg-[#00b4c6]/10 text-[#00b4c6] text-xs font-mono mb-4">
              {categoryLabel[work.category]}
            </span>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#00b4c6] transition-colors">
              {work.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{work.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {work.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-white/30 text-xs font-mono">{tag}</span>
              ))}
            </div>
            {(work.url ?? work.github) && (
              <a href={work.url ?? work.github} target="_blank" rel="noopener noreferrer"
                className="absolute top-5 right-5 text-white/20 hover:text-[#00b4c6] transition-colors text-xs font-mono">↗</a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link href="/works" className="text-sm text-white/40 hover:text-[#00b4c6] transition-colors font-mono">すべて見る →</Link>
      </div>
    </section>
  );
}
