"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fi = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-20 w-full">
      <motion.div {...fi(0)} className="mb-12">
        <p className="text-[#00b4c6] text-xs font-mono mb-2">// CONTACT</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">お問い合わせ</h1>
        <p className="text-white/50 text-sm leading-relaxed">
          お仕事のご依頼・ご相談はこちらからどうぞ。
        </p>
      </motion.div>

      <motion.form {...fi(0.1)} onSubmit={handleSubmit} className="space-y-6">
        {[
          { label: "お名前", name: "name", type: "text", placeholder: "山田 太郎" },
          { label: "メールアドレス", name: "email", type: "email", placeholder: "your@email.com" },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label className="block text-white/60 text-xs font-mono mb-2">{label}</label>
            <input
              type={type}
              required
              placeholder={placeholder}
              value={form[name as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00b4c6]/50 transition-colors"
            />
          </div>
        ))}

        <div>
          <label className="block text-white/60 text-xs font-mono mb-2">メッセージ</label>
          <textarea
            required
            rows={6}
            placeholder="ご依頼内容をご記入ください"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00b4c6]/50 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "done"}
          className="w-full py-3 rounded-lg bg-[#00b4c6] text-black font-semibold text-sm hover:bg-[#00c8dd] disabled:opacity-50 transition-colors"
        >
          {status === "sending" ? "送信中..." : status === "done" ? "送信しました ✓" : "送信する"}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-xs text-center">送信に失敗しました。時間をおいて再試行してください。</p>
        )}
      </motion.form>
    </main>
  );
}