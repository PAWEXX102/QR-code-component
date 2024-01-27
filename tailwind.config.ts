import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      White: "#ffffff",
      Lightgray: "#d6e2f0",
      Grayishblue: "#96969c",
      Darkblue: "#393941",
    },
  },
  plugins: [],
};
export default config;
