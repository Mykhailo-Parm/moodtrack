import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Mint Green Palette (Light Theme)
        "mint-green-50": "#f3fdf4",
        "mint-green-100": "#e2fae8",
        "mint-green-200": "#c5f3d1",
        "mint-green-300": "#a0e4b6",
        "mint-green-400": "#6fd793",
        "mint-green-500": "#3abb72",
        "mint-green-600": "#2a9758",
        "mint-green-700": "#207745",
        "mint-green-800": "#165933",
        "mint-green-900": "#0e3f25",
        "mint-green-950": "#082616",
        "mint-green-1000": "#04150c",

        // Calm Red Palette
        "calm-red-50": "#fff5f4",
        "calm-red-100": "#ffe4e2",
        "calm-red-200": "#ffc3c0",
        "calm-red-300": "#ff9994",
        "calm-red-400": "#f96e6a",
        "calm-red-500": "#e04a46",
        "calm-red-600": "#b83834",
        "calm-red-700": "#8f2926",
        "calm-red-800": "#681d1b",
        "calm-red-900": "#471312",
        "calm-red-950": "#2e0c0c",
        "calm-red-1000": "#180606",

        // Soothing Blue Palette
        "soothing-blue-50": "#f3fbff",
        "soothing-blue-100": "#dff5fe",
        "soothing-blue-200": "#bde8fc",
        "soothing-blue-300": "#8cd3fa",
        "soothing-blue-400": "#52b4f6",
        "soothing-blue-500": "#2895ef",
        "soothing-blue-600": "#1f78d3",
        "soothing-blue-700": "#175cb0",
        "soothing-blue-800": "#11448c",
        "soothing-blue-900": "#0a2f63",
        "soothing-blue-950": "#061e42",
        "soothing-blue-1000": "#031128",

        // Nordic Purple Palette (Dark Theme)
        "nordic-purple-50": "#f9f6fc",
        "nordic-purple-100": "#ece3f9",
        "nordic-purple-200": "#d3c2f2",
        "nordic-purple-300": "#b398e7",
        "nordic-purple-400": "#9474d7",
        "nordic-purple-500": "#7857c0",
        "nordic-purple-600": "#6045a1",
        "nordic-purple-700": "#4a367f",
        "nordic-purple-800": "#35285e",
        "nordic-purple-900": "#241c41",
        "nordic-purple-950": "#18122d",
        "nordic-purple-1000": "#0f0a1b",
        // Golden Yellow Palette
        "golden-yellow-50": "#fffdf2",
        "golden-yellow-100": "#fef9dc",
        "golden-yellow-200": "#fdf3b2",
        "golden-yellow-300": "#fce77e",
        "golden-yellow-400": "#fbd248",
        "golden-yellow-500": "#f6b51a",
        "golden-yellow-600": "#d9950f",
        "golden-yellow-700": "#ae750b",
        "golden-yellow-800": "#865808",
        "golden-yellow-900": "#5f3e06",
        "golden-yellow-950": "#3d2803",
        "golden-yellow-1000": "#1f1401",

        // Emotions Palette
        "very-happy": "#f6b51a",
        happy: "#6fd793",
        okay: "#52b4f6",
        sad: "#9474d7",
        "very-sad": "#8f2926",

        // Main Paleette
        secondary: "#cbd5e0",
        "secondary-darker": "#2d3748",
      },
      fontFamily: {
        shadows: "var(--font-shadows-into-light-two)",
        opensans: "var(--font-open-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;
