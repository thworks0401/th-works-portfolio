"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { works, categoryLabel, type WorkCategory } from "@/data/works";

const categories: { value: WorkCategory | "all"; label: string }[] = [
  { value: "all",     label: "すべて" },
  { value: "ai",      label: "AI Tool" },
  { value: "web",     label: "Web / SaaS" },
  { value: "desktop", label: "Desktop App" },
  { value: "game",    label: "Game" },
  { value: "other",   label: "Other" },
];

export default function WorksPage() {
  const [active, setActive] = useState<WorkCategory | "all">("all");

  const filtered = active === "all" ? works : works.filter((w) => w.category === active);

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 w-full">
      {/* ヘッダー */}
      <div className="mb-12">
        <p className="text-[#00b4c6] text-xs font-mono mb-2">// WORKS</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">実績・制作物</h1>
        <p className="text-white/40 text-sm mt-3">
          {works.length} projects — AIツール・Webサービス・デスクトップアプリ・ゲーム
        </p>
      </div>

      {/* フィルター */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
              active === cat.value
                ? "bg-[#00b4c6] border-[#00b4c6] text-black"
                : "border-white/15 text-white/40 hover:border-[#00b4c6]/50 hover:text-white/70"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* カードグリッド */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#00b4c6]/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* featured バッジ */}
              {work.featured && (
                <span className="absolute top-4 right-4 px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#00b4c6]/15 text-[#00b4c6] border border-[#00b4c6]/20">
                  featured
                </span>
              )}

              <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 text-white/30 text-xs font-mono mb-3 self-start">
                {categoryLabel[work.category]}
              </span>

              <h2 className="text-white font-semibold text-base mb-2 group-hover:text-[#00b4c6] transition-colors pr-12">
                {work.title}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-4 flex-1">
                {work.description}
              </p>

              {/* タグ */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {work.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-white/25 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* リンク */}
              <div className="flex items-center gap-3 text-xs font-mono">
                {work.url && (
                  <a href={work.url} target="_blank" rel="noopener noreferrer"
                    className="text-[#00b4c6]/70 hover:text-[#00b4c6] transition-colors">
                    Live ↗
                  </a>
                )}
                {work.github && (
                  <a href={work.github} target="_blank" rel="noopener noreferrer"
                    className="text-white/30 hover:text-white/60 transition-colors">
                    GitHub ↗
                  </a>
                )}
                <span className="ml-auto text-white/20">{work.publishedAt.slice(0, 7)}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 空状態 */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-white/30 font-mono text-sm">
          該当するプロジェクトがありません
        </div>
      )}
    </main>
  );
}
