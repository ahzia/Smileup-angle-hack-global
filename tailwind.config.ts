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
        mainBg: '#1A1034',       // Slightly lighter Main Background for easier readability
        secondary: '#2E2A5A',    // Nav Background can be used for buttons background
        cardBg: '#2B2F33',       // Cards Background
        cardBgLight: '#242830',  // Lighter shade for Cards Background
        textPrimary: '#F5F5F5',  // Primary Text
        textSecondary: '#B3B4C1', // Warmer grey for Secondary Text
        highlight: '#FF6900',     // Active/Helper Color, lyf branding color this can aso be used for buttons
        success: '#4CAF50',      // Success state color (green)
        error: '#F44336',        // Error state color (red)
        warning: '#FF9800',      // Warning state color (orange)
      },
    },
  },
  plugins: [],
};

export default config;
