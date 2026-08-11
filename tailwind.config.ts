import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14171C",
          soft: "#1B1F26",
          line: "#2A2F38",
        },
        paper: {
          DEFAULT: "#EDEAE3",
          dim: "#A9A69C",
          faint: "#6F6C64",
        },
        brass: {
          DEFAULT: "#C9A24C",
          soft: "#E3C983",
          deep: "#8F6F2E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(237,234,227,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
