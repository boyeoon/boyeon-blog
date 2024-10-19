import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jetbrains: ['var(--font-jetbrains-mono)'],
      },
      typography: (theme: (key: string) => string) => ({
        DEFAULT: {
          css: {
            headings: {},
            lead: {}, // [class~="lead"]
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            p: {},
            a: {},
            blockquote: {},
            figure: {},
            figcaption: {},
            strong: {},
            em: {},
            kbd: {},
            code: {},
            pre: {},
            ol: {},
            ul: {},
            li: {},
            table: {},
            thead: {},
            tr: {},
            th: {},
            td: {},
            img: {},
            video: {},
            hr: {},
          },        
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
