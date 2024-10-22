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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBg: '#130828',      // Main Background
        secondary: '#262450',   // Buttons and Nav Background
        cardBg: '#232627',      // Grey for Cards Background
        textPrimary: '#FFFFFF', // Primary Text Color
        textSecondary: '#ACADB9', // Secondary Text Color
        highlight: '#00D7FF',   // Active/Helper Color
      },
    },
  },
  plugins: [],
};
export default config;
