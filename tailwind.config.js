/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#0284c7",
        "surface-dim": "#e2e8f0",
        "surface-bright": "#ffffff",
        "surface-container-high": "#f1f5f9",
        "surface-container-low": "#f8fafc",
        background: "#ffffff",
        "navy-dark": "#0B192C",
        "navy-card": "#12233e",
        "navy-accent": "#1E3E62",
        primary: "#0369a1",
        "primary-dark": "#075985",
        "primary-light": "#e0f2fe",
        secondary: "#0f766e",
        "secondary-light": "#ccfbf1",
        "on-surface": "#0f172a",
        "on-surface-variant": "#475569",
        outline: "#cbd5e1",
        "outline-variant": "#e2e8f0",
        "amber-gold": "#f59e0b",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      fontFamily: {
        display: ['"Source Serif 4"', "serif"],
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
