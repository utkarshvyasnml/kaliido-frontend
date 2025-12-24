import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* ===============================
         BRAND COLORS (ESTAILO STYLE)
      =============================== */
      colors: {
        primary: "#ff2e74",     // dark pink
        secondary: "#ffe3ed",   // light pink
        background: "#fffbfc",  // off white
        textDark: "#1a1a1a",
        textLight: "#6b7280",
      },

      /* ===============================
         FONT SYSTEM
         Playfair → Headings
         Work Sans → Body / UI
      =============================== */
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-work)"],
      },

      /* ===============================
         FONT SIZES (FASHION SCALE)
      =============================== */
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "15px",
        lg: "17px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },

      /* ===============================
         BORDER RADIUS
      =============================== */
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        full: "9999px",
      },

      /* ===============================
         BOX SHADOWS (SOFT & PREMIUM)
      =============================== */
      boxShadow: {
        sm: "0 2px 6px rgba(0,0,0,0.05)",
        md: "0 4px 14px rgba(0,0,0,0.08)",
        lg: "0 10px 30px rgba(0,0,0,0.12)",
      },

      /* ===============================
         ANIMATIONS (TOP BAR MARQUEE)
      =============================== */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        marquee: "marquee 18s linear infinite",
      },

      /* ===============================
         TRANSITIONS
      =============================== */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};

export default config;
