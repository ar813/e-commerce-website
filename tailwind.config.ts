import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans"],
        Inter: ["Inter", "sans"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DB4444",
      },
    },
  },
  plugins: [],
} satisfies Config;
