import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://th-works.jp"),
  title: {
    default: "THWorks — ソフトウェア・AIツール開発",
    template: "%s | THWorks",
  },
  description:
    "埼玉県川越市のフリーランスエンジニア・高橋知宏のポートフォリオ。Webサービス・AIツール・デスクトップアプリの開発・販売。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://th-works.jp",
    siteName: "THWorks",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body className="bg-bg text-text">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}