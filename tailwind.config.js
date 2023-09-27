module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
    
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      blue: "0px 20px 20px -15px rgba(52,170,207,255) ",
      "blue-md": "0px 20px 40px -15px rgba(52,170,207,255) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      stone: {
        100: "#e7e5e4",
        200: "#d6d3d1",
        300: "#a8a29e",
        400: "#78350f",
        500: "#451a03",
      },
      blue: {
        10: "#93c5fd",
        50: "#7dd3fc",
        60: "#BAE6FD",
        70: "#CFFAFE",
        100: "#22d3ee",
        200: "#0ea5e9",
        300: "#0284c7",
        400: "#0369a1",
        500: "#2596be",
      },
      red: {
        100: "#ef4444",
        200: "#dc2626",
        300: "#b91c1c",
        400: "#991b1b",
        500: "#7f1d1d",
      },
      green: {
        100: "#bbf7d0",
        200: "#86efac",
        300: "#059669",
        400: "#047857",
        500: "#065f46",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        200: "#9ca3af",
        300: "#6b7280",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      slate: {
        100: "#64748b",
        200: "#475569",
        300: "#334155",
        400: "#1e293b",
        500: "#0f172a",
      },
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
      },
      light: {
        50: "#f5f5f5",
        100: "#fee2e2",
        200: "#fff7ed",
        300: "#fefce8",
        400: "#fdf4ff",
        500: "#ecfeff",
      },
      yellow:{
        100: "#facc15",
        300: "#eab308",
        400: "#E2D313"
      },

    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require( 'daisyui'),
  ],
};
