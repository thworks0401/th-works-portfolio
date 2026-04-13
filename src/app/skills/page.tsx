"use client";

import { motion, type Variants } from "framer-motion";

type Skill = { name: string; level: number; note?: string };
type SkillGroup = { category: string; icon: string; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "Next.js / React", level: 90, note: "App Router・SSG・RSC" },
      { name: "TypeScript",      level: 85 },
      { name: "Tailwind CSS",    level: 90 },
      { name: "Framer Motion",   level: 75 },
    ],
  },
  {
    category: "Backend / DB",
    icon: "◇",
    skills: [
      { name: "Python",          level: 90, note: "FastAPI・スクレイピング・自動化" },
      { name: "PostgreSQL",      level: 80 },
      { name: "Node.js",         level: 75 },
      { name: "REST / tRPC",     level: 80 },
    ],
  },
  {
    category: "AI / ML",
    icon: "◉",
    skills: [
      { name: "Ollama / LLM",    level: 85, note: "ローカル推論・RAG構築" },
      { name: "n8n Workflow",    level: 80, note: "AIエージェント自動化" },
      { name: "LangChain",       level: 70 },
      { name: "OpenAI API",      level: 85 },
    ],
  },
  {
    category: "Infra / DevOps",
    icon: "◎",
    skills: [
      { name: "Cloudflare Pages", level: 80 },
      { name: "Docker / WSL2",    level: 75 },
      { name: "GitHub Actions",   level: 80 },
      { name: "Stripe",           level: 80, note: "サブスク・単発決済" },
    ],
  },
  {
    category: "Desktop / Tools",
    icon: "◆",
    skills: [
      { name: "Electron",         level: 75 },
      { name: "PowerShell",       level: 80 },
      { name: "FFmpeg",           level: 70 },
      { name: "Cursor / VSCode",  level: 90 },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: "easeOut" as const,
    },
  }),
};

export default function SkillsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 w-full">
      {/* ヘッダー */}
      <div className="mb-14">
        <p className="text-[#00b4c6] text-xs font-mono mb-2">// SKILLS</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">技術スタック</h1>
        <p className="text-white/40 text-sm mt-3">
          主な開発領域とスキルレベル（自己評価 / 100）
        </p>
      </div>

      {/* グループ一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            custom={gi}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            {/* グループヘッダー */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#00b4c6] font-mono text-sm">{group.icon}</span>
              <h2 className="text-white font-semibold text-sm tracking-wide">{group.category}</h2>
            </div>

            {/* スキルバー */}
            <div className="space-y-4">
              {group.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm font-mono">{skill.name}</span>
                      {skill.note && (
                        <span className="text-white/25 text-xs hidden sm:inline">{skill.note}</span>
                      )}
                    </div>
                    <span className="text-[#00b4c6]/60 text-xs font-mono">{skill.level}</span>
                  </div>
                  {/* バー */}
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#00b4c6] to-[#00e0f0]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: gi * 0.07 + si * 0.05, ease: "easeOut" as const }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 補足 */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-white/20 text-xs font-mono mt-14"
      >
        * スキルレベルは実務・個人開発での経験ベースの自己評価です
      </motion.p>
    </main>
  );
}
