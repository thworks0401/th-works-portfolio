/** 成果物カテゴリ */
export type WorkCategory =
  | "Webサービス"
  | "デスクトップアプリ"
  | "AIツール"
  | "CLIツール"
  | "ゲーム"
  | "その他";

/** 技術スタックタグ */
export type TechTag =
  | "Next.js" | "React" | "TypeScript" | "Python"
  | "FastAPI" | "PostgreSQL" | "Tailwind CSS" | "Framer Motion"
  | "Ollama" | "Stripe" | "Docker" | "Cloudflare Pages"
  | "GitHub Actions" | "Node.js" | "Electron";

/** 成果物データ型 */
export interface Work {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  tags: TechTag[];
  status: "公開中" | "開発中" | "非公開";
  url?: string;
  repoUrl?: string;
  thumbnail?: string;
  publishedAt: string;
  featured: boolean;
}

/** 成果物データ（静的定義） */
export const works: Work[] = [
  {
    id: "portfolio-site",
    title: "THWorks Portfolio",
    description: "個人事業主THWorksの公式ポートフォリオサイト。CI/CD自動デプロイ付き。",
    category: "Webサービス",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare Pages", "GitHub Actions"],
    status: "公開中",
    url: "https://th-works.jp",
    repoUrl: "https://github.com/thworks0401/th-works-portfolio",
    publishedAt: "2026-04-13",
    featured: true,
  },
];

/** カテゴリ一覧（フィルター用） */
export const allCategories: WorkCategory[] = [
  "Webサービス",
  "デスクトップアプリ",
  "AIツール",
  "CLIツール",
  "ゲーム",
  "その他",
];
