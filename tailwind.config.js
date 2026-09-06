/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        paper: "#FFFFFF",
        mist: "#F7F8FA",
        ink: {
          DEFAULT: "#0F172A",
          soft: "#111827",
        },
        slate: {
          muted: "#64748B",
        },
        line: "#E5E7EB",
        red: {
          motor: "#B3272B",
          deep: "#8C1F22",
        },
        steel: "#9CA3AF",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        jp: ["Noto Sans JP", "sans-serif"],
      },
      maxWidth: {
        container: "1360px",
      },
      borderRadius: {
        xs: "2px",
        card: "6px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.10)",
        nav: "0 1px 0 rgba(15,23,42,0.06), 0 8px 24px -18px rgba(15,23,42,0.18)",
      },
      letterSpacing: {
        wideish: "0.08em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        revealWidth: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22,0.61,0.36,1) both",
        fadeIn: "fadeIn 0.9s ease both",
        revealWidth: "revealWidth 0.9s cubic-bezier(0.22,0.61,0.36,1) both",
      },
    },
  },
  plugins: [],
};
