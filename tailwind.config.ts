import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth": "url('/grafico.svg')"
      },
      backgroudSize: {
        '30': '30rem'
      }
    },
  },
  plugins: [
    formsPlugin,
  ],
};
export default config;
