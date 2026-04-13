// src/data/works.ts

export type WorkCategory = "web" | "desktop" | "ai" | "game" | "other";

export type Work = {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  tags: string[];
  url?: string;
  github?: string;
  thumbnail?: string;
  featured: boolean;
  publishedAt: string;
};

export const works: Work[] = [
  {
    id: "ai-chat-tool",
    title: "AI Chat Assistant",
    description: "ローカルLLMを活用したデスクトップチャットツール。Ollama連携でオフライン動作可能。",
    category: "ai",
    tags: ["Python", "Ollama", "Tkinter", "LLM"],
    github: "https://github.com/thworks-dev",
    featured: true,
    publishedAt: "2026-03-01",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Stripe連携のサブスク管理ダッシュボード。売上・解約率をリアルタイム可視化。",
    category: "web",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    url: "https://example.com",
    featured: true,
    publishedAt: "2026-02-15",
  },
  {
    id: "desktop-automation",
    title: "Desktop Automation Suite",
    description: "Windows向け業務自動化ツール。GUI操作・ファイル処理・スケジュール実行に対応。",
    category: "desktop",
    tags: ["Python", "PyAutoGUI", "Windows", "PowerShell"],
    featured: false,
    publishedAt: "2025-12-10",
  },
  {
    id: "n8n-workflow",
    title: "AI Workflow Automator",
    description: "n8nベースのAIエージェントワークフロー。Slack・Gmail・Notionを自動連携。",
    category: "ai",
    tags: ["n8n", "OpenAI", "Slack", "Notion API"],
    featured: true,
    publishedAt: "2026-01-20",
  },
  {
    id: "pixel-rpg",
    title: "Pixel Dungeon RPG",
    description: "ブラウザで動くローグライクRPG。手書きドット絵 + Canvas 2D実装。",
    category: "game",
    tags: ["TypeScript", "Canvas 2D", "WebAudio", "Vite"],
    url: "https://example.com/game",
    featured: false,
    publishedAt: "2025-11-05",
  },
  {
    id: "pdf-converter",
    title: "PDF Batch Converter",
    description: "PDFの一括変換・圧縮・結合ツール。Electron製でドラッグ&ドロップ対応。",
    category: "desktop",
    tags: ["Electron", "TypeScript", "pdf-lib", "Sharp"],
    featured: false,
    publishedAt: "2025-10-18",
  },
];

export const featuredWorks = works.filter((w) => w.featured);

export const categoryLabel: Record<WorkCategory, string> = {
  web:     "Web / SaaS",
  desktop: "Desktop App",
  ai:      "AI Tool",
  game:    "Game",
  other:   "Other",
};