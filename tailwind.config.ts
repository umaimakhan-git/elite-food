import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,
        padding: "10px",
      },
      colors: {
        black: "#000",
        yellow: "#F1ac18",
        green: "#79a33d",
        orange: "#f25b0a",
        red: "#cc080b",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
      },
      ifontFamily:{
        nter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
  
      },

    },
  },
  plugins: [],
} satisfies Config;
