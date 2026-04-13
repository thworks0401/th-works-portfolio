"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FORM_ID = "xnjlavyk";

type Status = "idle" | "sending" | "success" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 w-full">
      {/* ヘッダー */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-12">
        <p className="text-[#00b4c6] text-xs font-mono mb-2">// CONTACT</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">お問い合わせ</h1>
        <p className="text-white/50 text-sm leading-relaxed">
          お仕事のご依頼・ご相談・技術的なご質問など、お気軽にどうぞ。
          <br />通常1〜2営業日以内にご返信します。
        </p>
      </motion.div>

      {/* 成功メッセージ */}
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-[#00b4c6]/30 bg-[#00b4c6]/10 p-8 text-center"
        >
          <p className="text-[#00b4c6] text-2xl mb-3">✓</p>
          <h2 className="text-white font-semibold text-lg mb-2">送信完了しました</h2>
          <p className="text-white/50 text-sm">内容を確認次第、ご連絡いたします。</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
          >
            もう一件送る
          </button>
        </motion.div>
      ) : (
        <motion.form
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* お名前 */}
          <div>
            <label className="block text-white/60 text-xs font-mono mb-1.5">
              お名前 <span className="text-[#00b4c6]">*</span>
            </label>
            <input
              type="text" name="name" required value={form.name} onChange={handleChange}
              placeholder="山田 太郎"
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#00b4c6]/60 focus:outline-none transition-colors"
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-white/60 text-xs font-mono mb-1.5">
              メールアドレス <span className="text-[#00b4c6]">*</span>
            </label>
            <input
              type="email" name="email" required value={form.email} onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#00b4c6]/60 focus:outline-none transition-colors"
            />
          </div>

          {/* 件名 */}
          <div>
            <label className="block text-white/60 text-xs font-mono mb-1.5">件名</label>
            <select
              name="subject" value={form.subject} onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-4 py-3 text-sm text-white/70 focus:border-[#00b4c6]/60 focus:outline-none transition-colors"
            >
              <option value="">選択してください</option>
              <option value="お仕事のご依頼">お仕事のご依頼</option>
              <option value="ツール・アプリのご購入">ツール・アプリのご購入</option>
              <option value="技術的なご質問">技術的なご質問</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* メッセージ */}
          <div>
            <label className="block text-white/60 text-xs font-mono mb-1.5">
              メッセージ <span className="text-[#00b4c6]">*</span>
            </label>
            <textarea
              name="message" required value={form.message} onChange={handleChange}
              rows={6} placeholder="お問い合わせ内容をご記入ください..."
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#00b4c6]/60 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* エラー */}
          {status === "error" && (
            <p className="text-red-400 text-xs font-mono">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}

          {/* 送信ボタン */}
          <button
            type="submit" disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-[#00b4c6] text-black font-semibold text-sm hover:bg-[#00c8dd] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>

          <p className="text-white/20 text-xs font-mono text-center">
            * 必須項目 — 返信先メールアドレスをご確認ください
          </p>
        </motion.form>
      )}
    </main>
  );
}
