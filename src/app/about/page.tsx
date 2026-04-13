"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fi = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const profile = {
  name: "高橋 知宏",
  nameEn: "Takahashi Tomohiro",
  bizName: "THWorks",
  location: "埼玉県川越市",
  established: "2026年4月1日",
  email: "th.works.dev@gmail.com",
  description: `ソフトウェア・AIツール・Webサービス・デスクトップアプリの設計・開発・販売を行う個人開発スタジオ。\nAIエージェント・業務自動化・サブスクリプション型SaaSの構築を得意とし、アイデアから実装・リリースまでを一貫して担当。`,
};

const timeline = [
  { year: "2026.04", label: "THWorks 開業",                    note: "個人事業主として登録・活動開始" },
  { year: "2026.01", label: "AI Workflow Automator リリース",   note: "n8n + OpenAI による業務自動化ツール" },
  { year: "2025.12", label: "Desktop Automation Suite リリース",note: "Windows向け業務自動化ソフト" },
  { year: "2025.11", label: "Pixel Dungeon RPG 公開",           note: "ブラウザ向けローグライクRPG" },
  { year: "2025.10", label: "PDF Batch Converter リリース",     note: "Electron製PDF一括処理ツール" },
];

const values = [
  { icon: "⚡", title: "動くものを作る",       body: "設計より実装。アイデアは動くプロダクトになって初めて価値を持つ。" },
  { icon: "🔧", title: "使えるものを作る",     body: "UXと実用性を最優先。誰かの問題を本当に解決するツールだけを作る。" },
  { icon: "📦", title: "届けるところまで作る", body: "開発だけでなく、決済・デプロイ・サポートまで一人で完結させる。" },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 w-full">
      <motion.div {...fi(0)} className="mb-16">
        <p className="text-[#00b4c6] text-xs font-mono mb-2">// ABOUT</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{profile.bizName}</h1>
        <p className="text-white/50 text-base leading-relaxed max-w-2xl whitespace-pre-line">{profile.description}</p>
      </motion.div>

      <motion.div {...fi(0.1)} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
          {[
            { label: "NAME",        value: `${profile.name}（${profile.nameEn}）` },
            { label: "STUDIO",      value: profile.bizName },
            { label: "LOCATION",    value: profile.location },
            { label: "ESTABLISHED", value: profile.established },
            { label: "EMAIL",       value: profile.email },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-[#00b4c6]/60 text-xs">{label}</span>
              <span className="text-white/70">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fi(0.2)} className="mb-16">
        <h2 className="text-white font-semibold text-lg mb-6">開発スタンス</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <span className="text-2xl mb-3 block">{v.icon}</span>
              <h3 className="text-white font-semibold text-sm mb-2">{v.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fi(0.3)} className="mb-16">
        <h2 className="text-white font-semibold text-lg mb-6">沿革</h2>
        <div className="relative pl-4">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative pl-5">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#00b4c6] bg-[#0d0d0d]" />
                <p className="text-[#00b4c6] text-xs font-mono mb-0.5">{item.year}</p>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-white/40 text-xs mt-0.5">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div {...fi(0.4)} className="text-center py-12 border-t border-white/10">
        <p className="text-white/50 text-sm mb-6">お仕事・ご相談はお気軽にどうぞ</p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#00b4c6] text-black font-semibold text-sm hover:bg-[#00c8dd] transition-colors">
          お問い合わせ →
        </Link>
      </motion.div>
    </main>
  );
}