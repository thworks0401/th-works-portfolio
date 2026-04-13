import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Cloudflare Pages 向け静的エクスポート
  images: {
    unoptimized: true, // 静的エクスポート時は必須
  },
};

export default nextConfig;
