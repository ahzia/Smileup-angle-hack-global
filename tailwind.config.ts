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
        // Background colors
        background: "#1A1A2E", // Deep navy for the main background
        card: "#0F3460", // Darker shade for card backgrounds

        // Text colors
        textPrimary: "#EAEAEA", // Soft white for primary text
        textSecondary: "#A5B3C2", // Light gray for secondary text
        textAccent: "#00A9E0", // Accent color for highlights

        // Button colors
        button: "#162447", // Dark slate for buttons
        buttonHover: "#1F4068", // Lighter slate for button hover state
        buttonSecondary: "#00A9E0", // Cyan for secondary buttons
        buttonSecondaryHover: "#00B2E4", // Lighter cyan for secondary button hover

        // Helper colors
        helperLight: "#00A9E0", // Bright cyan for icons and highlights
        helperDark: "#005F8D", // Darker shade for contrast
      },
    },
  },
  plugins: [],
};

export default config;
