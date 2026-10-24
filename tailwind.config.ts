import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1917",
        paper: "#FAF7F2",
        accent: {
          DEFAULT: "#D9551F",
          gold: "#E8A33D",
          green: "#1F4D32",
        },
      },
      fontFamily: {
        display: ["var(--font-kanit)", "var(--font-noto-thai)", "sans-serif"],
        body: ["var(--font-noto-thai)", "var(--font-kanit)", "sans-serif"],
      },
      backgroundImage: {
        "brand-glow":
          "radial-gradient(circle at 20% 4%, rgba(217,85,31,0.4), transparent 26%), " +
          "radial-gradient(circle at 85% 14%, rgba(31,77,50,0.38), transparent 24%), " +
          "radial-gradient(circle at 12% 32%, rgba(31,77,50,0.32), transparent 22%), " +
          "radial-gradient(circle at 90% 44%, rgba(217,85,31,0.32), transparent 24%), " +
          "radial-gradient(circle at 25% 58%, rgba(217,85,31,0.3), transparent 22%), " +
          "radial-gradient(circle at 95% 68%, rgba(31,77,50,0.32), transparent 22%), " +
          "radial-gradient(circle at 10% 80%, rgba(31,77,50,0.32), transparent 22%), " +
          "radial-gradient(circle at 88% 90%, rgba(217,85,31,0.3), transparent 22%), " +
          "linear-gradient(180deg, transparent 90%, #141211 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
