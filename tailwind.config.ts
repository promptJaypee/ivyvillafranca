import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "var(--pink)",
        "pink-deep": "var(--pink-deep)",
        "pink-soft": "var(--pink-soft)",
        plum: "var(--plum)",
        blush: "var(--blush)",
        lavender: "var(--lavender)",
        mauve: "var(--mauve)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
