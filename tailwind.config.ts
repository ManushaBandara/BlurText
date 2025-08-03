import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers your file
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "640px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px",
      },
      colors: {
        textGray: "#71767b",
        textGrayLight: "#71767b",
        borderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#0096ff",
        iconGreen: "#00ba7c",
        iconPink: "f91880",
        // Theme-aware colors
        background: {
          light: "#ffffff",
          dark: "#262335",
        },
        text: {
          light: "#000000",
          dark: "#ededed",
        },
        border: {
          light: "#e1e8ed",
          dark: "#2f3336",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
