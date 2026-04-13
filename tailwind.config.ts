import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0d0d0d",
        surface:  "#141414",
        surface2: "#1a1a1a",
        border:   "rgba(255,255,255,0.08)",
        text:     "#e8e8e8",
        muted:    "#888888",
        faint:    "#444444",
        teal: {
          DEFAULT: "#00b4c6",
          hover:   "#00cfe4",
          dim:     "rgba(0,180,198,0.12)",
          glow:    "rgba(0,180,198,0.25)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Noto Sans JP", "sans-serif"],
      },
      boxShadow: {
        "teal-glow":  "0 0 20px rgba(0,180,198,0.3)",
        "card":       "0 2px 12px rgba(0,0,0,0.4)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.6), 0 0 16px rgba(0,180,198,0.15)",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
