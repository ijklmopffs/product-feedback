import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        purple: "#AD1FEA",
        blue: "#4661E6",
        darkGrey: "#373F68",
        darkWhite: "#F2F4FE",
        darkerWhite: "#F7F8FD",
        darkerGrey: "#3A4374",
        lightGrey: "#647196",
        orangeShade: "#F49F85",
        lightBlue: "#62BCFA",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
